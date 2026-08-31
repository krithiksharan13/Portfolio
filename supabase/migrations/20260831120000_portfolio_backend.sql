-- Portfolio backend: visitor counter + contact messages
-- Target: Supabase project "portfolio" (ref lcyqmfahsmvebmsrpljl)
-- Safe to run as a single script in the Supabase SQL Editor.

-- ============================================================
-- Visitors
-- ============================================================

create table if not exists public.visitors (
  visitor_id   text primary key,
  first_seen   timestamptz not null default now(),
  last_seen    timestamptz not null default now(),
  visit_count  integer     not null default 1
);

alter table public.visitors enable row level security;
-- No policies => anon/authenticated get no direct access. All access is via
-- the SECURITY DEFINER functions below.

revoke all on table public.visitors from anon, authenticated;

-- Record a visit. Called by the site on load with a client-generated id
-- (stored in the visitor's localStorage). Idempotent per id per day-ish:
-- always bumps last_seen, increments count.
create or replace function public.track_visit(p_visitor_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_visitor_id is null or length(p_visitor_id) < 8 or length(p_visitor_id) > 64 then
    raise exception 'invalid visitor id';
  end if;

  insert into public.visitors (visitor_id)
  values (p_visitor_id)
  on conflict (visitor_id) do update
    set last_seen   = now(),
        visit_count = public.visitors.visit_count + 1;
end;
$$;

-- Total distinct visitors, for display on the homepage.
create or replace function public.get_visitor_count()
returns bigint
language sql
security definer
stable
set search_path = public
as $$
  select count(*) from public.visitors;
$$;

revoke all on function public.track_visit(text)      from public;
revoke all on function public.get_visitor_count()    from public;
grant execute on function public.track_visit(text)   to anon, authenticated;
grant execute on function public.get_visitor_count() to anon, authenticated;

-- ============================================================
-- Contact messages
-- ============================================================

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text,
  email       text not null,
  message     text not null,
  user_agent  text,
  handled     boolean not null default false
);

alter table public.contact_messages enable row level security;
revoke all on table public.contact_messages from anon, authenticated;

-- Anonymous visitors may submit a message (INSERT only), with basic validation.
-- They cannot read anything back.
create policy "anon can submit contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (
    email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and length(email) <= 320
    and length(message) between 10 and 5000
    and (name is null or length(name) <= 120)
    and (user_agent is null or length(user_agent) <= 1024)
    and handled = false
  );

grant insert on table public.contact_messages to anon;

-- Index for the dashboard view (newest first, unhandled first).
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
