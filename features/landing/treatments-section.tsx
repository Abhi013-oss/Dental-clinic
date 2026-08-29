'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { servicesData } from '@/constants/services.data';
import { ArrowRight, ChevronLeft, ChevronRight, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TreatmentsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white text-navy-900 border-t border-slate-100">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionHeader
              badge="Clinical Treatments"
              title="Comprehensive Dental Services"
              highlightTitle="Engineered For Lifelong Health."
              description="From aesthetic smile redesigns to precision guided implants, every treatment is performed using biocompatible materials."
              align="left"
            />
          </ScrollReveal>

          {/* Navigation Scroll Buttons */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center space-x-3 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-11 w-11 rounded-full border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-medical-600 hover:text-white hover:border-medical-600 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll Treatments Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-11 w-11 rounded-full border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-medical-600 hover:text-white hover:border-medical-600 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll Treatments Right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable Clinical Treatments Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] group"
            >
              <GlassCard
                variant="standard"
                className="h-full flex flex-col justify-between p-5 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Service Image with Smooth Zoom */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-medical-700 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-sm border border-slate-200/60">
                      {service.category}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-base font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed font-normal">
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
            </div>
          ))}
        </div>

        {/* View All Dental Services Link */}
        <div className="mt-6 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-medical-600 hover:text-navy-900 transition-colors"
          >
            <Stethoscope className="h-4 w-4" />
            <span>Explore All Specialized Dental Procedures & Treatments →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
