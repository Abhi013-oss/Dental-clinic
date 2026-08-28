import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ShieldCheck, Activity, Award, HeartHandshake, Eye, Cpu, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Clinic',
  description: 'Learn about our clinical philosophy, state-of-the-art 3D biophotonic technology, certificates, and gentle patient care at ÉLITE Dental Clinic.',
};

const clinicTimeline = [
  { year: '2001', title: 'Clinic Establishment', description: 'Founded in Beverly Hills with a mission to deliver pain-free aesthetic dentistry.' },
  { year: '2008', title: '3D Imaging Pioneer', description: 'First clinic in California to integrate CBCT 3D volumetric bone scanning.' },
  { year: '2016', title: 'CEREC Same-Day Milling', description: 'Launched in-house CAD/CAM ceramic milling for single-visit restorations.' },
  { year: '2023', title: 'Global Healthcare Award', description: 'Voted #1 Private Cosmetic Dental Clinic by International Dental Journal.' },
];

const certificates = [
  'American Academy of Cosmetic Dentistry (AACD) Gold Member',
  'International Congress of Oral Implantologists (ICOI) Fellow',
  'ISO 9001:2015 Certified Sterilization Suite',
  'Invisalign Diamond Top 1% Provider',
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-5xl space-y-20">
        {/* Hero Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="About Jawahar Dental Hospital"
            title="The Sanctuary of Advanced Dentistry"
            highlightTitle="Science Meets Patient Comfort."
            description="Founded to redefine healthcare expectations. We combine sub-millimeter 3D technology with a calm, stress-free clinical environment."
          />
        </ScrollReveal>

        {/* Clinic Interior Tour Hero Visual */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop"
              alt="ÉLITE Dental Clinic Interior"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 text-navy-900 border border-slate-200 backdrop-blur-md shadow-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center font-bold">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Kapurthala & Delhi Dental Centers</h4>
                  <p className="text-xs text-slate-500">Modern clinics led by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma.</p>
                </div>
              </div>
              <Badge variant="gold">25+ Years Excellence</Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <GlassCard variant="standard" className="space-y-3 bg-white border border-slate-200 h-full">
              <div className="h-10 w-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                To lead global restorative and cosmetic dentistry through pain-free protocols, research, and natural ceramic aesthetics.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard variant="standard" className="space-y-3 bg-white border border-slate-200 h-full">
              <div className="h-10 w-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-navy-900">Patient-Centric Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                To make every dental visit stress-free, painless, and completely transparent with zero hidden costs.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <GlassCard variant="standard" className="space-y-3 bg-white border border-slate-200 h-full">
              <div className="h-10 w-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-navy-900">Hospital-Grade Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Strict multi-stage autoclave sterilization and HEPA air filtration exceeding CDC & OSHA guidelines.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Clinic History Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-medical-600">Our Legacy</span>
            <h2 className="font-sans text-3xl font-extrabold text-navy-900">25 Years of Clinical Innovation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicTimeline.map((item, idx) => (
              <GlassCard key={idx} variant="standard" className="p-6 bg-white border border-slate-200 space-y-2">
                <span className="font-sans text-2xl font-extrabold text-medical-600">{item.year}</span>
                <h4 className="text-sm font-bold text-navy-900">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Certificates & Awards */}
        <GlassCard variant="standard" className="p-8 bg-slate-50/70 border border-slate-200 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-medical-600">Accreditations</span>
            <h3 className="font-sans text-2xl font-bold text-navy-900">Certified Clinical Excellence</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-medical-600 shrink-0" />
                <span className="text-xs font-bold text-navy-900">{cert}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Book Appointment CTA Banner */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-sky-50 to-white border border-medical-200 shadow-xl space-y-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900">Experience Gentle Care Firsthand</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Schedule a consultation with our specialist doctors Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma today.
          </p>
          <Link href="/book">
            <Button variant="gold" size="lg" className="font-bold text-sm">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Book Consultation</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
