-- PHASE 1: Critical Security Fixes

-- 1. Fix visitor_rate_limits table - Remove overly permissive policy
DROP POLICY IF EXISTS "Allow rate limit checks" ON public.visitor_rate_limits;

-- Create restrictive policies for rate limiting
CREATE POLICY "Service role only rate limit access" 
ON public.visitor_rate_limits 
FOR ALL 
USING (current_setting('role') = 'service_role');

-- 2. Fix visitor_sessions - Remove the problematic JWT-based SELECT policy
DROP POLICY IF EXISTS "Allow reading own visitor session" ON public.visitor_sessions;

-- Create minimal SELECT policy for service operations only
CREATE POLICY "Service role visitor session access" 
ON public.visitor_sessions 
FOR SELECT 
USING (current_setting('role') = 'service_role');

-- Keep UPDATE policy but make it more restrictive (only for session end updates)
DROP POLICY IF EXISTS "Allow visitor session updates for same visitor" ON public.visitor_sessions;

CREATE POLICY "Allow session end updates only" 
ON public.visitor_sessions 
FOR UPDATE 
USING (
  session_end IS NULL 
  AND session_start IS NOT NULL 
  AND session_start <= now()
)
WITH CHECK (
  session_end IS NOT NULL 
  AND session_end > session_start 
  AND time_spent_seconds >= 0 
  AND time_spent_seconds <= 86400
);

-- 3. Fix weekly_reports - Remove conflicting policies and secure access
DROP POLICY IF EXISTS "Allow authenticated select on weekly_reports" ON public.weekly_reports;
DROP POLICY IF EXISTS "Allow service select" ON public.weekly_reports;
DROP POLICY IF EXISTS "Allow service insert" ON public.weekly_reports;
DROP POLICY IF EXISTS "Restrict weekly_reports inserts" ON public.weekly_reports;

-- Create single, restrictive policy for weekly reports
CREATE POLICY "Service role only weekly reports" 
ON public.weekly_reports 
FOR ALL 
USING (current_setting('role') = 'service_role');

-- 4. Fix function security - Update cleanup function with proper search_path
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.visitor_rate_limits 
  WHERE created_at < now() - interval '24 hours';
$$;

-- Grant minimal permissions to functions
REVOKE ALL ON FUNCTION public.get_total_visitor_count() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_total_visitor_count() TO anon;
GRANT EXECUTE ON FUNCTION public.get_total_visitor_count() TO authenticated;

-- Only service role can execute cleanup function
REVOKE ALL ON FUNCTION public.cleanup_old_rate_limits() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.cleanup_old_rate_limits() TO service_role;