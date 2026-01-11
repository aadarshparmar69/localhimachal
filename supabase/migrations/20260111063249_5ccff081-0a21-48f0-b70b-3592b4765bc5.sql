-- Add SELECT policy for itinerary_requests that denies public access
-- Only service role (used by edge functions) can read this data
-- This ensures the table is not publicly readable while admin edge function can still access it

CREATE POLICY "Service role can view itinerary requests" 
ON public.itinerary_requests 
FOR SELECT 
TO service_role
USING (true);

-- Also add restrictive policies for UPDATE and DELETE to be explicit
CREATE POLICY "Service role can update itinerary requests" 
ON public.itinerary_requests 
FOR UPDATE 
TO service_role
USING (true);

CREATE POLICY "Service role can delete itinerary requests" 
ON public.itinerary_requests 
FOR DELETE 
TO service_role
USING (true);