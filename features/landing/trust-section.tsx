'use client';

import * as React from 'react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { ShieldCheck, Star, Award, HeartHandshake } from 'lucide-react';

export function TrustSection() {
  const metrics = [
    {
      icon: HeartHandshake,
      iconBg: 'bg-medical-50 text-medical-600',
      value: '12,500+',
      label: 'Patients Treated',
      isCountUp: true,
    },
    {
      icon: Award,
      iconBg: 'bg-medical-50 text-medical-600',
      value: '25+',
      label: 'Years Clinical Excellence',
      isCountUp: true,
    },
    {
      icon: Star,
      iconBg: 'bg-amber-50 text-amber-500',
      value: '4.9 / 5.0',
      label: 'Google Rating (500+ Reviews)',
      isStar: true,
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      value: '100%',
      label: 'Sterilization Standard',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.06 * idx + 0.05}>
                <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group cursor-default">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${m.iconBg} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${m.isStar ? 'fill-current' : ''}`} />
                  </div>
                  <div>
                    <div className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
                      {m.isCountUp ? <CountUpNumber value={m.value} /> : m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
