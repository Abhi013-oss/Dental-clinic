-- =================================================================
-- JAWAHAR DENTAL HOSPITAL - APPOINTMENTS DATABASE SCHEMA
-- Single-Table Architecture (Only 'appointments' table)
-- Copy & Paste into Supabase SQL Editor (https://app.supabase.com)
-- =================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Drop all unused / extra tables safely
DROP TABLE IF EXISTS public.clinic_settings CASCADE;
DROP TABLE IF EXISTS public.contact_messages CASCADE;
DROP TABLE IF EXISTS public.follow_ups CASCADE;
DROP TABLE IF EXISTS public.newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS public.patients CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.doctors CASCADE;
DROP TABLE IF EXISTS public.inquiries CASCADE;
DROP TABLE IF EXISTS public.reviews CASCADE;

-- =================================================================
-- TABLE: appointments (ONLY TABLE RETAINED)
-- =================================================================
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name TEXT NOT NULL,
    country_code TEXT DEFAULT '+91',
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    age TEXT,
    gender TEXT,
    treatment TEXT NOT NULL,
    preferred_doctor TEXT DEFAULT 'Any Available Doctor / Specialist',
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,
    reason_for_visit TEXT,
    additional_notes TEXT,
    status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Cancelled', 'Rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Ensure all columns exist on appointments
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS country_code TEXT DEFAULT '+91';
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS preferred_doctor TEXT DEFAULT 'Any Available Doctor / Specialist';

-- Indexes for lightning-fast queries & dashboard searching
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_email ON public.appointments(email);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON public.appointments(created_at DESC);

-- Trigger for auto-updating updated_at timestamp
CREATE OR REPLACE FUNCTION update_timestamp_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_appointments_updated_at ON public.appointments;

CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

-- =================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES FOR APPOINTMENTS
-- =================================================================
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous / website public users to book new appointments
DROP POLICY IF EXISTS "Public users can insert appointments" ON public.appointments;
CREATE POLICY "Public users can insert appointments"
ON public.appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow full access to service_role (Admin & Backend functions)
DROP POLICY IF EXISTS "Service role full access to appointments" ON public.appointments;
CREATE POLICY "Service role full access to appointments"
ON public.appointments
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
