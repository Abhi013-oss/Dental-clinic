'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Award, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-white text-navy-900 relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Hospital & Clinic Atmosphere */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-sm">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                    alt="Jawahar Dental Hospital Modern Clinic Atmosphere"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent opacity-60" />

                  {/* Factual Philosophy Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-sm flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-50 text-medical-600 shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-navy-900">Patient-Centric Mission</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Delivering painless, lifelong oral health with compassion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Narrative & Principles (Typography-Led, No Cards) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <SectionHeader
                badge="About Jawahar Dental Hospital"
                title="Redefining Clinical Dentistry"
                highlightTitle="Through Compassion & Precision."
                description="Led by Dr. Arjun Jawahar Sharma and Dr. Priyanka Sharma, Jawahar Dental Hospital was established to elevate patient care. We harmonize cutting-edge 3D technology with a calm, stress-free clinical environment."
                align="left"
              />
            </ScrollReveal>

            {/* Editorial Principles Callout Block (No Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-slate-100">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="space-y-2 border-l-2 border-medical-500 pl-4 py-1">
                  <div className="flex items-center space-x-2 text-medical-600">
                    <Eye className="h-4.5 w-4.5" />
                    <h3 className="font-sans text-sm font-bold text-navy-900 uppercase tracking-wide">Our Vision</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To set global benchmarks in pain-free aesthetic and restorative healthcare.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.25}>
                <div className="space-y-2 border-l-2 border-medical-500 pl-4 py-1">
                  <div className="flex items-center space-x-2 text-medical-600">
                    <HeartHandshake className="h-4.5 w-4.5" />
                    <h3 className="font-sans text-sm font-bold text-navy-900 uppercase tracking-wide">Our Core Values</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Integrity, absolute clinical transparency, and uncompromised patient safety.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
