'use client';

import * as React from 'react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { ShieldCheck, Star, Award, HeartHandshake } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Metric 1 */}
            <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-medical-50 text-medical-600 shrink-0">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div>
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                  <CountUpNumber value="12,500+" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Patients Treated
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-medical-50 text-medical-600 shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                  <CountUpNumber value="25+" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Years Clinical Excellence
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-500 shrink-0">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                  4.9 / 5.0
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Google Rating (500+ Reviews)
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Sterilization Standard
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
