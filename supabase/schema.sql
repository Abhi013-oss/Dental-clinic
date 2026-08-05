-- =================================================================
-- ÉLITE DENTAL CLINIC - SUPABASE PRODUCTION DATABASE SCHEMA
-- Migration-ready SQL for PostgreSQL & Supabase Engine
-- =================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =================================================================
-- TABLE: appointments
-- =================================================================
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    age TEXT,
    gender TEXT,
    treatment TEXT NOT NULL,
    preferred_doctor TEXT DEFAULT 'First Available Specialist',
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,
    reason_for_visit TEXT,
    additional_notes TEXT,
    status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Completed', 'Cancelled', 'Rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance & search queries
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

CREATE OR REPLACE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW EXECUTE FUNCTION update_timestamp_column();

-- =================================================================
-- TABLE: contact_messages
-- =================================================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- =================================================================
-- TABLE: newsletter_subscribers
-- =================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);

-- =================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =================================================================
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 1. APPOINTMENTS POLICIES
-- Allow anonymous public users to submit new appointments
CREATE POLICY "Public users can insert appointments"
ON public.appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Restrict read/update/delete to service_role (Admin Dashboard preparation)
CREATE POLICY "Service role full access to appointments"
ON public.appointments
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 2. CONTACT MESSAGES POLICIES
CREATE POLICY "Public users can insert contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Service role full access to contact messages"
ON public.contact_messages
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 3. NEWSLETTER SUBSCRIBERS POLICIES
CREATE POLICY "Public users can insert newsletter subscriptions"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Service role full access to newsletter subscribers"
ON public.newsletter_subscribers
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
