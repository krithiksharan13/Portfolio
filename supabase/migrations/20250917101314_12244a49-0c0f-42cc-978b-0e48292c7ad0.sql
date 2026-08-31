-- Harden visitor privacy: enable RLS explicitly and revoke direct privileges

-- 0) Ensure RLS is enabled on sensitive tables
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_reports ENABLE ROW LEVEL SECURITY;

-- 1) Revoke any direct table privileges from public roles to enforce access strictly via RLS
DO $$
BEGIN
  -- visitor_sessions
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_sessions FROM anon';
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_sessions FROM authenticated';
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_sessions FROM PUBLIC';

  -- visitor_rate_limits
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_rate_limits FROM anon';
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_rate_limits FROM authenticated';
  EXECUTE 'REVOKE ALL ON TABLE public.visitor_rate_limits FROM PUBLIC';

  -- weekly_reports
  EXECUTE 'REVOKE ALL ON TABLE public.weekly_reports FROM anon';
  EXECUTE 'REVOKE ALL ON TABLE public.weekly_reports FROM authenticated';
  EXECUTE 'REVOKE ALL ON TABLE public.weekly_reports FROM PUBLIC';
EXCEPTION WHEN undefined_table THEN
  -- In case a table doesn't exist in certain environments
  NULL;
END$$;

-- 2) Recreate explicit least-privilege policies for clarity and defense-in-depth
-- visitor_sessions: only anon can INSERT and UPDATE session end; only service_role has full access.
DROP POLICY IF EXISTS "Anonymous can insert visitor sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Anonymous can update session end" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Service role full access" ON public.visitor_sessions;

CREATE POLICY "Anonymous can insert visitor sessions"
ON public.visitor_sessions
FOR INSERT
TO anon
WITH CHECK (
  visitor_id IS NOT NULL 
  AND length(visitor_id) >= 10 
  AND length(visitor_id) <= 100 
  AND session_start IS NOT NULL
);

CREATE POLICY "Anonymous can update session end"
ON public.visitor_sessions
FOR UPDATE
TO anon
USING (
  session_end IS NULL 
  AND session_start IS NOT NULL 
  AND created_at > now() - interval '1 day'
)
WITH CHECK (
  session_end IS NOT NULL 
  AND session_end > session_start 
  AND time_spent_seconds >= 0 
  AND time_spent_seconds <= 86400
);

CREATE POLICY "Service role full access"
ON public.visitor_sessions
FOR ALL
TO service_role
USING (true);

-- visitor_rate_limits: service role only
DROP POLICY IF EXISTS "Service role rate limit access" ON public.visitor_rate_limits;
CREATE POLICY "Service role rate limit access"
ON public.visitor_rate_limits
FOR ALL
TO service_role
USING (true);

-- weekly_reports: service role only
DROP POLICY IF EXISTS "Service role weekly reports access" ON public.weekly_reports;
CREATE POLICY "Service role weekly reports access"
ON public.weekly_reports
FOR ALL
TO service_role
USING (true);

-- Note: We intentionally do NOT add any SELECT policies for anon/authenticated roles.
-- Reads should be done via SECURITY DEFINER functions (e.g., get_total_visitor_count) or by service role only.