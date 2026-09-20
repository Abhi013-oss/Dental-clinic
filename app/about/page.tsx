import { SectionHeader } from '@/components/shared/section-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ShieldCheck, Eye, HeartHandshake, Award, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Our Clinic',
  description: 'Learn about our clinical philosophy, state-of-the-art 3D biophotonic technology, certificates, and gentle patient care at Jawahar Dental Hospital.',
};

const clinicTimeline = [
  { year: '2001', title: 'Hospital Establishment', description: 'Founded with a mission to deliver comprehensive, advanced, and pain-free dental care.' },
  { year: '2008', title: '3D Imaging Pioneer', description: 'Integrated advanced CBCT 3D volumetric bone scanning for precise implant diagnostics.' },
  { year: '2016', title: 'Digital Dentistry Lab', description: 'Launched in-house CAD/CAM ceramic milling for single-visit precision restorations.' },
  { year: '2023', title: 'Excellence In Implantology', description: 'Recognized for advanced computer-guided full-mouth rehabilitation and restorative outcomes.' },
];

const certificates = [
  'International Congress of Oral Implantologists (ICOI) Fellow',
  'Academy of Oral Implantology (AOI) Fellow',
  'ISO Certified Sterilization & Infection Control Protocols',
  'Advanced Digital CAD/CAM Precision Restorations',
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAFCFB] text-navy-900 min-h-screen">
      <div className="container max-w-5xl space-y-16">
        {/* Hero Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="About Jawahar Dental Hospital"
            title="The Sanctuary of Advanced Dentistry"
            highlightTitle="Science Meets Patient Comfort."
            description="Founded to redefine healthcare expectations. We combine sub-millimeter 3D technology with a calm, stress-free clinical environment across Kapurthala and Delhi."
          />
        </ScrollReveal>

        {/* Clinic Interior Tour Hero Visual */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs group">
            <img
              src="/images/jawahar-dental-hospital-building.jpg"
              alt="Jawahar Dental Hospital Exterior Building"
              className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 text-navy-900 border border-slate-200 backdrop-blur-md shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-[#E8F6F5] text-[#159A9C] flex items-center justify-center font-bold shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Kapurthala & Delhi Dental Centers</h4>
                  <p className="text-xs text-slate-500">Super-speciality centers led by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma.</p>
                </div>
              </div>
              <Badge variant="gold" className="self-start sm:self-auto shrink-0">25+ Years Clinical Excellence</Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group space-y-3 h-full">
              <div className="h-10 w-10 rounded-lg bg-[#E8F6F5] text-[#159A9C] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-navy-900">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                To lead restorative and implant dentistry through research-driven protocols, biological precision, and enduring natural aesthetics.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group space-y-3 h-full">
              <div className="h-10 w-10 rounded-lg bg-[#E8F6F5] text-[#159A9C] flex items-center justify-center group-hover:scale-110 transition-transform">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-navy-900">Patient-Centric Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                To make every dental visit stress-free, pain-free, and completely transparent with patient education and zero hidden costs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group space-y-3 h-full">
              <div className="h-10 w-10 rounded-lg bg-[#E8F6F5] text-[#159A9C] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-navy-900">Hospital-Grade Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Multi-stage autoclave sterilization, dedicated operatory disinfection, and medical air protocols exceeding regulatory standards.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Clinic History Timeline */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#159A9C]">Our Heritage</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0E3340]">25+ Years of Clinical Innovation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicTimeline.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.08 * idx + 0.1}>
                <div className="rounded-xl bg-white border border-slate-200/90 p-5 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group space-y-2 h-full">
                  <span className="font-sans text-2xl font-extrabold text-[#159A9C] group-hover:scale-105 inline-block transition-transform">{item.year}</span>
                  <h4 className="text-sm font-bold text-navy-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Dr. Arjun Jawahar Sharma Leadership Spotlight */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="rounded-xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-[#159A9C]/40 transition-all duration-300 group overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[240px] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img
                    src="/doctors/dr-arjun-jawahar-sharma.jpg"
                    alt="Dr. Arjun Jawahar Sharma - Chief Prosthodontist & Oral Implantologist"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="space-y-1.5">
                  <Badge variant="gold" className="text-xs font-bold">Chief Prosthodontist & Oral Implantologist</Badge>
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0E3340]">
                    Dr. Arjun Jawahar Sharma
                  </h3>
                  <p className="text-xs sm:text-sm text-[#159A9C] font-bold">
                    BDS, MDS (Prosthodontics & Oral Implantologist) | MBA (ISB) | Fellow, AOI & ICOI
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  With over 14 years of clinical experience and 10,000+ dental implant placements, Dr. Arjun Jawahar Sharma specializes in complex full-mouth rehabilitation, computer-guided implantology, and natural aesthetic prosthetics.
                </p>

                <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                  <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">14+ Years Experience</span>
                  <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">10,000+ Implants Placed</span>
                  <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">Fellow AOI & ICOI</span>
                  <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-200">Full-Mouth Rehabilitation</span>
                </div>

                <div className="pt-2">
                  <Link href="/team">
                    <Button variant="outline" size="sm" className="font-bold text-xs border-slate-200 hover:border-[#159A9C]">
                      <span>View Faculty Credentials & Team</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-[#159A9C]" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certificates & Awards */}
        <div className="rounded-xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#159A9C]">Accreditations</span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0E3340]">Certified Clinical Excellence</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="h-5 w-5 text-[#159A9C] shrink-0" />
                <span className="text-xs font-bold text-navy-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Appointment CTA Banner */}
        <div className="text-center p-8 sm:p-12 rounded-xl bg-[#0E3340] text-white border border-slate-200/20 shadow-sm space-y-5">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">Experience Gentle Care Firsthand</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Schedule a comprehensive consultation with our specialist doctors Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma today.
          </p>
          <div className="pt-2">
            <Link href="/book">
              <Button size="lg" className="bg-[#159A9C] hover:bg-[#117A7C] text-white font-bold text-sm px-6 h-11">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Book Hospital Consultation</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
