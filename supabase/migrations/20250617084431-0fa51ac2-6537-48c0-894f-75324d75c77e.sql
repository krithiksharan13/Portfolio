
-- Create a table to track visitor sessions
CREATE TABLE public.visitor_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL, -- Browser fingerprint or session ID
  ip_address INET,
  user_agent TEXT,
  page_url TEXT,
  session_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_end TIMESTAMP WITH TIME ZONE,
  time_spent_seconds INTEGER DEFAULT 0,
  is_new_visitor BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for faster queries
CREATE INDEX idx_visitor_sessions_created_at ON public.visitor_sessions(created_at);
CREATE INDEX idx_visitor_sessions_visitor_id ON public.visitor_sessions(visitor_id);

-- Create a table to store weekly reports
CREATE TABLE public.weekly_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  report_date DATE NOT NULL,
  total_visitors_week INTEGER NOT NULL DEFAULT 0,
  new_visitors_week INTEGER NOT NULL DEFAULT 0,
  total_visitors_lifetime INTEGER NOT NULL DEFAULT 0,
  average_time_spent_seconds INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (make tables public for this use case)
ALTER TABLE public.visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_reports ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for visitor tracking
CREATE POLICY "Allow public insert on visitor_sessions" 
  ON public.visitor_sessions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public select on visitor_sessions" 
  ON public.visitor_sessions 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public update on visitor_sessions" 
  ON public.visitor_sessions 
  FOR UPDATE 
  USING (true);

CREATE POLICY "Allow public select on weekly_reports" 
  ON public.weekly_reports 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert on weekly_reports" 
  ON public.weekly_reports 
  FOR INSERT 
  WITH CHECK (true);

-- Enable realtime for visitor_sessions if needed
ALTER TABLE public.visitor_sessions REPLICA IDENTITY FULL;
ALTER publication supabase_realtime ADD TABLE public.visitor_sessions;
