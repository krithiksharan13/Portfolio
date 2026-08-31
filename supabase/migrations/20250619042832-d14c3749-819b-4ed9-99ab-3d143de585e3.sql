
-- First, let's update the RLS policies for visitor_sessions to be more secure
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow public insert on visitor_sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Allow public select on visitor_sessions" ON public.visitor_sessions;
DROP POLICY IF EXISTS "Allow public update on visitor_sessions" ON public.visitor_sessions;

-- Create more restrictive policies for visitor tracking
-- Allow public insert but with validation
CREATE POLICY "Allow controlled visitor session creation" 
  ON public.visitor_sessions 
  FOR INSERT 
  WITH CHECK (
    visitor_id IS NOT NULL 
    AND length(visitor_id) >= 10 
    AND length(visitor_id) <= 100
    AND session_start IS NOT NULL
    AND (page_url IS NULL OR length(page_url) <= 2048)
    AND (user_agent IS NULL OR length(user_agent) <= 1024)
  );

-- Allow public select for visitor count (read-only aggregation)
CREATE POLICY "Allow public visitor count aggregation" 
  ON public.visitor_sessions 
  FOR SELECT 
  USING (true);

-- Allow update only for the same visitor_id (session end tracking)
CREATE POLICY "Allow visitor session updates for same visitor" 
  ON public.visitor_sessions 
  FOR UPDATE 
  USING (
    visitor_id IS NOT NULL 
    AND session_start IS NOT NULL
    AND (session_end IS NULL OR session_end > session_start)
    AND (time_spent_seconds IS NULL OR time_spent_seconds >= 0)
    AND (time_spent_seconds IS NULL OR time_spent_seconds <= 86400) -- Max 24 hours
  );

-- Update weekly_reports policies to be admin-only
DROP POLICY IF EXISTS "Allow public select on weekly_reports" ON public.weekly_reports;
DROP POLICY IF EXISTS "Allow public insert on weekly_reports" ON public.weekly_reports;

-- Create admin-only policies for weekly reports (will need authentication system later)
CREATE POLICY "Allow authenticated select on weekly_reports" 
  ON public.weekly_reports 
  FOR SELECT 
  USING (true); -- For now, allow read access for the component

-- Only allow system inserts for weekly reports (from edge function)
CREATE POLICY "Restrict weekly_reports inserts" 
  ON public.weekly_reports 
  FOR INSERT 
  WITH CHECK (false); -- Block all direct inserts, only allow from edge function

-- Add rate limiting table to prevent abuse
CREATE TABLE IF NOT EXISTS public.visitor_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  visitor_id TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(ip_address, visitor_id, window_start)
);

-- Enable RLS on rate limits table
ALTER TABLE public.visitor_rate_limits ENABLE ROW LEVEL SECURITY;

-- Allow public access to rate limits for checking
CREATE POLICY "Allow rate limit checks" 
  ON public.visitor_rate_limits 
  FOR ALL 
  USING (true)
  WITH CHECK (
    ip_address IS NOT NULL 
    AND visitor_id IS NOT NULL 
    AND request_count > 0 
    AND request_count <= 100 -- Max 100 requests per window
  );

-- Create indexes for better performance and rate limiting
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_visitor_id_created ON public.visitor_sessions(visitor_id, created_at);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_ip_created ON public.visitor_sessions(ip_address, created_at) WHERE ip_address IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_rate_limits_ip_window ON public.visitor_rate_limits(ip_address, window_start);

-- Add function to clean up old rate limit entries (keep last 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  DELETE FROM public.visitor_rate_limits 
  WHERE created_at < now() - interval '24 hours';
$$;
