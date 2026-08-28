'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { servicesData } from '@/constants/services.data';
import { ArrowRight } from 'lucide-react';

export function TreatmentsSection() {
  return (
    <section className="py-24 bg-white text-navy-900">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Treatments"
            title="Comprehensive Dental Services"
            highlightTitle="Engineered For Lifelong Health."
            description="From aesthetic smile redesigns to precision guided implants, every treatment is performed using biocompatible materials."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} direction="up" delay={0.08 * index + 0.15}>
              <GlassCard variant="standard" className="h-full flex flex-col justify-between group p-6 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400">
                <div className="space-y-4">
                  {/* Service Image with Smooth Zoom */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-medical-600 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm backdrop-blur-sm">
                      {service.category}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">{service.durationMinutes} Mins</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-medical-600 group-hover:text-medical-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
