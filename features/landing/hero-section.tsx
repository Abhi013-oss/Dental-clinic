'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Activity, Calendar, ShieldCheck, ArrowRight, Star, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white text-navy-900">
      {/* Ambient Radial Lighting Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-medical-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center space-x-2">
                <Badge variant="gold" className="px-4 py-1.5 text-xs font-bold tracking-wider bg-medical-50 text-medical-700 border-medical-200 hover:bg-medical-100 transition-colors">
                  <Activity className="mr-1.5 h-3.5 w-3.5 text-medical-600 animate-pulse" />
                  Specialist Dental Care & Implant Center
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.12]">
                Where Advanced Dentistry Meets <br className="hidden sm:inline" />
                <span className="animate-gradient-text inline-block">Gentle Patient Care.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Experience world-class dental care designed around your comfort, safety, and lifelong health. Guided by international specialists in a bright, modern, stress-free clinic.
              </p>
            </ScrollReveal>

            {/* Hero Action Buttons - Spacious & Uncondensed */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto font-bold text-base px-8 h-14 shadow-lg shadow-medical-600/20 hover:scale-[1.03] transition-transform duration-300">
                    <Calendar className="mr-2.5 h-5 w-5" />
                    <span>Book Your Consultation</span>
                  </Button>
                </Link>

                <Link href="/services" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold text-base px-8 h-14 hover:scale-[1.03] transition-transform duration-300">
                    <span>Explore Clinical Services</span>
                    <ArrowRight className="ml-2.5 h-5 w-5 text-medical-600" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust Statistics with Animated Count-Up Numbers */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200/80 text-left">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1 group cursor-default">
                    <div className="font-sans text-3xl sm:text-4xl font-extrabold text-medical-600 group-hover:scale-105 transition-transform duration-300 origin-left">
                      <CountUpNumber value={stat.value} duration={2.2} />
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-bold group-hover:text-navy-900 transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-medical-500/40 transition-all duration-500 group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/jawahar-dental-hospital-building.jpg"
                    alt="Jawahar Dental Hospital Exterior Building & Modern Clinic Entrance"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Patient Comfort Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 text-navy-900 border border-slate-200 flex items-center justify-between backdrop-blur-md shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-medical-50 text-medical-600 group-hover:scale-110 transition-transform duration-300">
                        <HeartHandshake className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-navy-900">Patient Safety & Comfort Certified</span>
                      </div>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-medical-600" />
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
