-- ============================================================
-- ÉLITE DENTAL ATELIER - INITIAL DATABASE MIGRATION SCHEMA
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------
-- SERVICES TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    starting_price NUMERIC(10, 2) NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    hero_image TEXT NOT NULL,
    icon_name VARCHAR(50) NOT NULL,
    popular BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_services_category ON public.services(category);
CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services(slug);

-- ------------------------------------------------------------
-- DOCTORS / SPECIALISTS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.doctors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    title VARCHAR(150) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    degrees TEXT[] NOT NULL DEFAULT '{}',
    experience_years INTEGER NOT NULL,
    bio TEXT NOT NULL,
    avatar_url TEXT NOT NULL,
    consultation_fee NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------
-- APPOINTMENTS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    doctor_id UUID REFERENCES public.doctors(id) ON DELETE SET NULL,
    preferred_date DATE NOT NULL,
    preferred_time_slot VARCHAR(50) NOT NULL,
    notes TEXT,
    is_vip_consultation BOOLEAN DEFAULT false,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_appointments_email ON public.appointments(email);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments(preferred_date);

-- ------------------------------------------------------------
-- INQUIRIES / CONTACT TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'UNREAD',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------
-- REVIEWS TABLE
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name VARCHAR(150) NOT NULL,
    patient_avatar TEXT,
    treatment VARCHAR(150) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    verified_patient BOOLEAN DEFAULT true,
    location VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Public Read Access for Services, Doctors, and Reviews
CREATE POLICY "Public Services Read" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public Doctors Read" ON public.doctors FOR SELECT USING (true);
CREATE POLICY "Public Reviews Read" ON public.reviews FOR SELECT USING (true);

-- Public Insert Access for Appointments & Inquiries
CREATE POLICY "Public Insert Appointments" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);
