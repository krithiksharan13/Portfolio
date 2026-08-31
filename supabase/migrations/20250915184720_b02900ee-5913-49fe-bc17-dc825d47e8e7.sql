-- Remove the overly permissive SELECT policy that allows public access to all visitor data
DROP POLICY IF EXISTS "Allow public visitor count aggregation" ON public.visitor_sessions;

-- Create a security definer function to safely get visitor count
CREATE OR REPLACE FUNCTION public.get_total_visitor_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT COUNT(DISTINCT visitor_id) FROM public.visitor_sessions;
$$;

-- Create a restricted SELECT policy that only allows reading your own session data
CREATE POLICY "Allow reading own visitor session" 
ON public.visitor_sessions 
FOR SELECT 
USING (
  -- Allow reading if it's the current session (for updates) or for the count function
  visitor_id = current_setting('request.jwt.claims', true)::json->>'visitor_id'
  OR current_setting('role') = 'service_role'
);

-- Grant execute permission on the function to anonymous users (for the visitor count display)
GRANT EXECUTE ON FUNCTION public.get_total_visitor_count() TO anon;
GRANT EXECUTE ON FUNCTION public.get_total_visitor_count() TO authenticated;