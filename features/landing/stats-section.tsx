'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { Activity, Trophy, Users, HeartHandshake, Award } from 'lucide-react';

const statsList = [
  { label: 'Happy Patients', value: '12,500+', icon: Users },
  { label: 'Successful Procedures', value: '18,400+', icon: Activity },
  { label: 'Master Specialists', value: '14', icon: Award },
  { label: 'Years Experience', value: '25+', icon: HeartHandshake },
  { label: 'International Awards', value: '18', icon: Trophy },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/70 to-white text-navy-900 border-y border-slate-200">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-medical-600">Track Record of Excellence</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-navy-900">
              Trusted By Thousands Across California
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {statsList.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-medical-500/40 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-50 text-medical-600 mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="font-sans text-3xl font-extrabold text-medical-600">
                    <CountUpNumber value={stat.value} duration={2.2} />
                  </div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
