-- Migration 0002: Add country_code and preferred_doctor to appointments table

ALTER TABLE public.appointments 
ADD COLUMN IF NOT EXISTS country_code TEXT DEFAULT '+91',
ADD COLUMN IF NOT EXISTS preferred_doctor TEXT DEFAULT 'Any Available Doctor / Specialist';

-- Ensure RLS Policies allow public insert
DROP POLICY IF EXISTS "Public users can insert appointments" ON public.appointments;
CREATE POLICY "Public users can insert appointments"
ON public.appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
