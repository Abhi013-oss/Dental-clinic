import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/constants/services.data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/config/site.config';
import {
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Clock,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
  Activity,
} from 'lucide-react';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Treatment Not Found' };
  return {
    title: `${service.title} | Jawahar Dental Hospital & Implant Centre`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Find 3 related treatments within the same department or general clinical catalogue
  const relatedTreatments = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const fallbackTreatments =
    relatedTreatments.length < 3
      ? [
          ...relatedTreatments,
          ...servicesData.filter((s) => s.id !== service.id && !relatedTreatments.some((r) => r.id === s.id)).slice(0, 3 - relatedTreatments.length),
        ]
      : relatedTreatments;

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen text-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-semibold text-slate-700 hover:text-medical-600 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg px-3.5 py-2 shadow-xs transition-colors touch-manipulation"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
            <span>Back to Treatments Directory</span>
          </Link>
        </div>

        {/* Clinical Procedure Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 pb-12 border-b border-slate-200/80">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <Badge variant="gold" className="text-xs font-semibold">
                {service.category}
              </Badge>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded flex items-center">
                <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                Hospital Protocol
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {service.fullDescription}
            </p>

            {/* Clinical Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">Department</span>
                <span className="font-sans text-sm sm:text-base font-bold text-navy-900 line-clamp-1">
                  {service.category}
                </span>
              </div>
              <div className="space-y-0.5 border-l border-slate-200 pl-4">
                <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">Typical Session</span>
                <span className="font-sans text-sm sm:text-base font-bold text-navy-900 flex items-center">
                  <Clock className="h-4 w-4 text-medical-600 mr-1.5 shrink-0" />
                  {service.durationMinutes} Minutes
                </span>
              </div>
              <div className="space-y-0.5 border-l border-slate-200 pl-4 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">Care Standard</span>
                <span className="font-sans text-sm sm:text-base font-bold text-medical-700 flex items-center">
                  <Activity className="h-4 w-4 mr-1 shrink-0" />
                  Biocompatible
                </span>
              </div>
            </div>

            {/* Consultation & Telephonic Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href={`/book?service=${service.id}`} className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto font-semibold text-sm px-7 h-12 rounded-lg shadow-xs hover:shadow-sm touch-manipulation cursor-pointer"
                >
                  <Calendar className="mr-2 h-4.5 w-4.5" />
                  <span>Reserve Consultation</span>
                </Button>
              </Link>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center space-x-2 px-5 h-12 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs font-semibold transition-colors touch-manipulation"
              >
                <PhoneCall className="h-4 w-4 text-medical-600" />
                <span>Call Clinic: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Image Framing */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps: "The Clinical Protocol" */}
        <div className="space-y-8 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-medical-600">Standard Operating Procedure</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
              The Clinical Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-9 w-9 rounded-lg bg-medical-50 border border-medical-200 text-medical-700 font-extrabold flex items-center justify-center text-sm shadow-xs">
                    0{step.stepNumber}
                  </div>
                  <h3 className="font-sans text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
                <div className="text-xs font-semibold text-medical-600 flex items-center pt-2 border-t border-slate-100">
                  <Clock className="mr-1.5 h-3.5 w-3.5" />
                  <span>Duration: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Clinical Benefits */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-xs mb-16 space-y-6">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-5 w-5 text-medical-600" />
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-navy-900">
              Core Clinical Benefits
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#FAFCFB] border border-slate-200/80 text-xs sm:text-sm font-semibold text-navy-900 flex items-start space-x-2.5"
              >
                <CheckCircle2 className="h-4.5 w-4.5 text-medical-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Clinical Procedures */}
        {fallbackTreatments.length > 0 && (
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-medical-600">Complementary Care</span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-navy-900 mt-0.5">
                  Related Clinical Procedures
                </h3>
              </div>

              <Link
                href="/services"
                className="text-xs font-semibold text-medical-600 hover:text-medical-700 inline-flex items-center"
              >
                <span>View All 31 Procedures</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {fallbackTreatments.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}`}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                      <img
                        src={related.heroImage}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-medical-600">
                        {related.category}
                      </span>
                      <h4 className="font-sans text-sm font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-1 mt-0.5">
                        {related.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-normal">
                        {related.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-medical-600">
                    <span>View Protocol</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Consultation Booking Action Reassurance */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#0E3340] text-white text-center space-y-5">
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
            Schedule Your Consultation for {service.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Consult Dr. Arjun Jawahar Sharma &amp; Dr. Priyanka Sharma at our modern centers in Kapurthala and East Delhi.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href={`/book?service=${service.id}`} className="w-full sm:w-auto">
              <Button
                variant="gold"
                size="lg"
                className="w-full sm:w-auto font-semibold text-sm px-8 h-12 rounded-lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span>Book Consultation Online</span>
              </Button>
            </Link>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center space-x-2 px-6 h-12 rounded-lg border border-slate-600 bg-transparent text-white hover:bg-white/10 text-xs font-semibold transition-colors w-full sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-medical-300" />
              <span>Call Clinic: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
