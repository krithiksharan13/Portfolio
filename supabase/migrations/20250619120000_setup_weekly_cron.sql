
-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create cron job to send weekly reports every Saturday at 9:00 AM UTC
-- This translates to Saturday morning in most timezones
SELECT cron.schedule(
  'weekly-analytics-report',
  '0 9 * * 6', -- Every Saturday at 9:00 AM UTC (cron format: minute hour day month day_of_week)
  $$
  SELECT
    net.http_post(
        url:='https://fqjakyymyyotuiyxhebx.supabase.co/functions/v1/weekly-report',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxamFreXlteXlvdHVpeXhoZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDk3MDIsImV4cCI6MjA2NTcyNTcwMn0.rtVkxmVk_8qLCKuD-nLYjE9aVTGLLygiY4cvmjIbsxM"}'::jsonb,
        body:='{"scheduled": true}'::jsonb
    ) as request_id;
  $$
);

-- Also need to enable pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;
