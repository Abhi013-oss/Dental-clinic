import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/constants/services.data';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle2, ArrowLeft, Clock } from 'lucide-react';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Treatment Not Found' };
  return {
    title: `${service.title} | Beverly Hills Cosmetic Dentistry`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center text-xs font-bold text-navy-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl px-4 py-2.5 shadow-sm mb-8 transition-colors touch-manipulation"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4 text-medical-600" /> Back to All Treatments
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold">{service.category}</Badge>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-400 block font-bold uppercase tracking-wider">Investment Starting From</span>
                <span className="font-sans text-2xl font-extrabold text-medical-600">
                  ${service.startingPrice.toLocaleString()}
                </span>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <span className="text-xs text-slate-400 block font-bold uppercase tracking-wider">Typical Session Time</span>
                <span className="font-sans text-2xl font-extrabold text-navy-900">{service.durationMinutes} Minutes</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href={`/book?service=${service.id}`} className="inline-block w-full sm:w-auto">
                <Button variant="gold" size="lg" className="w-full sm:w-auto font-bold text-xs sm:text-sm px-6 h-12 touch-manipulation cursor-pointer">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Reserve Consultation</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          <h2 className="font-sans text-3xl font-extrabold text-navy-900 text-center">The Clinical Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.processSteps.map((step) => (
              <GlassCard key={step.stepNumber} variant="standard" className="relative space-y-3 bg-white border border-slate-200 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-medical-50 border border-medical-200 text-medical-600 font-extrabold flex items-center justify-center text-sm shadow-sm">
                  {step.stepNumber}
                </div>
                <h3 className="font-sans text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.description}</p>
                <div className="text-[11px] font-bold text-medical-600 flex items-center pt-2">
                  <Clock className="mr-1 h-3.5 w-3.5" /> {step.duration}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <GlassCard variant="standard" className="p-8 sm:p-12 text-center space-y-6 bg-white border border-slate-200 shadow-md">
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">Core Clinical Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-900">
                <CheckCircle2 className="h-5 w-5 text-medical-600 mx-auto mb-2" />
                {b}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
