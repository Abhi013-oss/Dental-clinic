'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, ShieldCheck, Smile, Crown, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/constants/services.data';

export function ServicesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Activity className="h-6 w-6 text-medical-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-medical-600" />;
      case 'Smile':
        return <Smile className="h-6 w-6 text-medical-600" />;
      case 'Crown':
        return <Crown className="h-6 w-6 text-medical-600" />;
      default:
        return <Activity className="h-6 w-6 text-medical-600" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Treatments"
            title="Comprehensive Dental Services"
            highlightTitle="Engineered For Lifelong Health."
            description="Every clinical procedure is performed using 3D guided technology, biocompatible materials, and gentle pain-free protocols."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} direction="up" delay={0.1 * index + 0.2}>
              <GlassCard variant="standard" className="flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-medical-50 border border-medical-200 group-hover:scale-105 transition-transform duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    {service.popular && <Badge variant="gold">Popular Choice</Badge>}
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-medical-600">
                      {service.category}
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-navy-900 mt-1 group-hover:text-medical-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-medical-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-bold text-navy-900">{feat.title}:</strong> {feat.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Procedure Starting From</span>
                    <span className="font-sans text-xl font-bold text-medical-600">
                      ${service.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn font-bold text-xs">
                      <span>View Details</span>
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1 text-medical-600" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-14 text-center">
            <Link href="/services">
              <Button variant="gold" size="lg" className="font-bold text-sm">
                <span>Explore All Treatments</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
