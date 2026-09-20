'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
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
    <section className="py-20 lg:py-24 bg-[#FAFCFB] text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex items-center space-x-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer"
                aria-label="Scroll Treatments Left"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer"
                aria-label="Scroll Treatments Right"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable Clinical Treatments Strip */}
        <div
          ref={scrollRef}
          className="flex space-x-5 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] group"
            >
              <div className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200">
                <div className="space-y-3.5">
                  {/* Service Image with Crisp Framing */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 text-medical-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm border border-slate-200/70">
                      {service.category}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-base font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">{service.durationMinutes} Mins</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-medical-600 hover:text-medical-700 transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Dental Services Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-medical-600 hover:text-navy-900 transition-colors py-2 px-4 rounded-lg hover:bg-white border border-transparent hover:border-slate-200"
          >
            <Stethoscope className="h-4 w-4" />
            <span>Explore All Specialized Dental Procedures &amp; Treatments →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
