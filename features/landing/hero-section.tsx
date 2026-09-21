'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Activity, Calendar, ShieldCheck, ArrowRight, Star, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#FAFCFB] border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Editorial Information (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Jawahar Dental Official Brand Tagline Emblem */}
            <ScrollReveal direction="down" delay={0.05}>
              <div className="inline-flex items-center">
                <div className="inline-block px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs max-w-[260px] sm:max-w-[300px]">
                  <img
                    src="/images/jawahar-dental-tagline-logo.png"
                    alt="Jawahar Dental - Tradition | Trust | Technology - Multi Speciality Dental Clinic"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Medical Department Badge */}
            <ScrollReveal direction="down" delay={0.1}>
              <div>
                <Badge
                  variant="gold"
                  className="px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-medical-50 text-medical-700 border border-medical-200"
                >
                  <Activity className="mr-1.5 h-3.5 w-3.5 text-medical-600 animate-pulse" />
                  Specialist Dental Care & Implant Center
                </Badge>
              </div>
            </ScrollReveal>

            {/* Authoritative Medical Headline */}
            <ScrollReveal direction="up" delay={0.15}>
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-navy-900 leading-[1.14]">
                Where Advanced Dentistry Meets{' '}
                <span className="text-medical-600 block sm:inline">Gentle Patient Care.</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Clinical Description */}
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Experience world-class dental care designed around your comfort, safety, and lifelong health. Guided by international specialists in a bright, modern, stress-free clinic.
              </p>
            </ScrollReveal>

            {/* Hero Action Buttons */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto font-semibold text-base px-7 h-12 rounded-lg shadow-xs hover:shadow-sm"
                  >
                    <Calendar className="mr-2 h-4.5 w-4.5" />
                    <span>Book Your Consultation</span>
                  </Button>
                </Link>

                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto font-semibold text-base px-7 h-12 rounded-lg border-slate-200 hover:bg-slate-50"
                  >
                    <span>Explore Clinical Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-medical-600" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Factual Trust Statistics Strip */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200/80">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">
                      <CountUpNumber value={stat.value} duration={2.0} />
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Clinical Visual (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/jawahar-dental-hospital-building.jpg"
                    alt="Jawahar Dental Hospital Exterior Building & Modern Clinic Entrance"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-60" />

                  {/* Factual Patient Safety & Comfort Certificate Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-50 text-medical-600 shrink-0">
                        <HeartHandshake className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                          <span className="text-[11px] font-bold text-slate-700 ml-1">4.9 ★ Certified</span>
                        </div>
                        <p className="text-xs font-semibold text-navy-900 mt-0.5">
                          Patient Safety & Comfort Certified
                        </p>
                      </div>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-medical-600 shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
