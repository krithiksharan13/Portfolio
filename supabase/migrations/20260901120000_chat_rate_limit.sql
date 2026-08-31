-- Per-IP rate limiting for the portfolio chat assistant (api/chat.ts).
-- Run this in the Supabase SQL Editor (project "portfolio").

create table if not exists public.chat_usage (
  ip            text        not null,
  window_start  timestamptz not null,
  count         integer     not null default 0,
  primary key (ip, window_start)
);

alter table public.chat_usage enable row level security;
revoke all on table public.chat_usage from anon, authenticated;

-- Atomically bump the caller's count for the current time window and report
-- whether they are still under the limit. SECURITY DEFINER so anon can call it
-- without any direct table access.
create or replace function public.chat_quota(
  p_ip text,
  p_max integer default 20,
  p_window_minutes integer default 60
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_window timestamptz := date_bin(
    make_interval(mins => greatest(p_window_minutes, 1)),
    now(),
    timestamptz 'epoch'
  );
  v_count integer;
begin
  if p_ip is null or length(p_ip) = 0 then
    return true;
  end if;

  insert into public.chat_usage (ip, window_start, count)
  values (p_ip, v_window, 1)
  on conflict (ip, window_start)
    do update set count = public.chat_usage.count + 1
  returning count into v_count;

  -- opportunistic cleanup of old rows
  delete from public.chat_usage
  where window_start < now() - interval '1 day';

  return v_count <= greatest(p_max, 1);
end;
$$;

revoke all on function public.chat_quota(text, integer, integer) from public;
grant execute on function public.chat_quota(text, integer, integer) to anon, authenticated;
