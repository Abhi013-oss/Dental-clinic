'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 bg-white text-navy-900 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Reveal */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                    alt="Our Dental Clinic Atmosphere"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent opacity-60" />

                  {/* Floating Philosophy Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 text-navy-900 border border-slate-200 backdrop-blur-md shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy-900">Patient-Centric Mission</h4>
                        <p className="text-xs text-slate-500">Delivering painless, lifelong oral health with compassion.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Copy & Core Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <SectionHeader
                badge="About ÉLITE Clinic"
                title="Redefining Clinical Dentistry"
                highlightTitle="Through Compassion & Precision."
                description="Led by Dr. Arjun Jawahar Sharma and Dr. Priyanka Sharma, ÉLITE Dental Clinic was established to elevate patient care. We harmonize cutting-edge 3D technology with a calm, stress-free clinical environment."
                align="left"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <ScrollReveal direction="up" delay={0.3}>
                <GlassCard variant="standard" className="space-y-2 p-5 bg-white border border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-50 text-medical-600">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-navy-900">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To set global benchmarks in pain-free aesthetic and restorative healthcare.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <GlassCard variant="standard" className="space-y-2 p-5 bg-white border border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-50 text-medical-600">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-navy-900">Our Core Values</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Integrity, absolute clinical transparency, and uncompromised patient safety.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
