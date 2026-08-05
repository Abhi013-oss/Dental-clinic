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
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container max-w-5xl">
        <Link href="/services" className="inline-flex items-center text-xs font-semibold text-gold-500 hover:underline mb-8">
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to All Treatments
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold">{service.category}</Badge>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex items-center space-x-6 pt-2">
              <div>
                <span className="text-xs text-muted-foreground block">Investment Starting From</span>
                <span className="font-serif text-2xl font-bold text-gold-600 dark:text-gold-400">
                  ${service.startingPrice.toLocaleString()}
                </span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="text-xs text-muted-foreground block">Typical Session Time</span>
                <span className="font-serif text-2xl font-bold text-foreground">{service.durationMinutes} Minutes</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href={`/book?service=${service.id}`}>
                <Button variant="gold" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Reserve Consultation for {service.title}</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel-gold p-3 border border-gold-500/30 shadow-2xl">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center">The Clinical Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.processSteps.map((step) => (
              <GlassCard key={step.stepNumber} variant="standard" className="relative space-y-3">
                <div className="h-10 w-10 rounded-full bg-gold-gradient text-obsidian-900 font-bold flex items-center justify-center text-sm shadow-md">
                  {step.stepNumber}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                <div className="text-[11px] font-semibold text-gold-500 flex items-center pt-2">
                  <Clock className="mr-1 h-3.5 w-3.5" /> {step.duration}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <GlassCard variant="gold" className="p-8 sm:p-12 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Core Clinical Benefits</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-background/60 border border-gold-500/20 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-gold-500 mx-auto mb-2" />
                {b}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
