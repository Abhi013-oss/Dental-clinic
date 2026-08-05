'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
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
    <section className="py-24 bg-slate-50/60 text-navy-900 border-y border-slate-200/80">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Excellence"
            title="Why Patients Trust ÉLITE Clinic"
            highlightTitle="For Their Lifetime Health."
            description="Every detail of our practice is designed around patient safety, comfort, and state-of-the-art medical technology."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || ShieldCheck;

            return (
              <ScrollReveal key={item.id} direction="up" delay={0.1 * index + 0.15}>
                <GlassCard variant="standard" className="h-full flex flex-col justify-between group bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 border border-medical-200/80 text-medical-600 group-hover:scale-110 group-hover:bg-medical-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <h3 className="font-sans text-xl font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
