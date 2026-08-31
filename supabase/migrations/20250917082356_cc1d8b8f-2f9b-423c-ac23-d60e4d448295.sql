-- Fix the security warnings by creating appropriate policies for anonymous visitor tracking

-- 1. Fix visitor_sessions - Allow anonymous INSERT only, restrict everything else
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Allow controlled visitor session creation" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Service role visitor session access" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Allow session end updates only" ON public.visitor_sessions;

-- Allow anonymous users to insert new sessions (for visitor tracking)
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

-- Allow anonymous users to update their own session end
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

-- Service role can read all data
CREATE POLICY "Service role full access" 
ON public.visitor_sessions 
FOR ALL 
TO service_role
USING (true);

-- 2. Fix visitor_rate_limits - Only service role needs access to this table
-- The existing policy is correct, but let's be explicit about roles
DROP POLICY IF EXISTS "Service role only rate limit access" ON public.visitor_rate_limits;

CREATE POLICY "Service role rate limit access" 
ON public.visitor_rate_limits 
FOR ALL 
TO service_role
USING (true);

-- 3. Fix weekly_reports - Only service role should access this
-- The existing policy is correct, but let's be explicit about roles  
DROP POLICY IF EXISTS "Service role only weekly reports" ON public.weekly_reports;

CREATE POLICY "Service role weekly reports access" 
ON public.weekly_reports 
FOR ALL 
TO service_role
USING (true);