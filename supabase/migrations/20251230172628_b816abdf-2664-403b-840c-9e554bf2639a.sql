-- Create itinerary_requests table to store form submissions
CREATE TABLE public.itinerary_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  budget TEXT NOT NULL,
  travelers TEXT NOT NULL,
  duration TEXT NOT NULL,
  districts TEXT[] NOT NULL,
  holiday_type TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.itinerary_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit requests (public form)
CREATE POLICY "Anyone can submit itinerary requests"
ON public.itinerary_requests
FOR INSERT
WITH CHECK (true);

-- Only service role can read/update/delete (access via Supabase dashboard)
-- No SELECT/UPDATE/DELETE policies for anon users to protect PII