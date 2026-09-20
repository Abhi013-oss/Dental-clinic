'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { whyChooseData } from '@/constants/healthcare.data';
import { Cpu, HeartHandshake, Award, ShieldCheck, DollarSign, PhoneCall } from 'lucide-react';

const iconMap = {
  Cpu,
  HeartHandshake,
  Award,
  ShieldCheck,
  DollarSign,
  PhoneCall,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-white text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Excellence"
            title="Why Patients Trust Jawahar Dental Hospital"
            highlightTitle="For Their Lifetime Health."
            description="Every detail of our practice is designed around patient safety, comfort, and state-of-the-art medical technology."
          />
        </ScrollReveal>

        {/* Structured 6-Pillar Clinical Blueprint Grid (Refined, Low-Container Layout) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || ShieldCheck;

            return (
              <ScrollReveal key={item.id} direction="up" delay={0.08 * index + 0.1}>
                <div className="relative p-6 sm:p-7 rounded-xl bg-[#FAFCFB] border border-slate-200/80 shadow-xs hover:-translate-y-1.5 hover:border-[#159A9C]/50 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-medical-50 text-medical-600 border border-medical-200/70">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-extrabold text-slate-300 tracking-wider">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
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
