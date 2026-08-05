'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { journeyData } from '@/constants/healthcare.data';
import { Clock, ArrowRight } from 'lucide-react';

export function PatientJourney() {
  return (
    <section className="py-24 bg-slate-50/60 text-navy-900 border-y border-slate-200/80">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Seamless Care Protocol"
            title="Your Patient Journey"
            highlightTitle="Step-By-Step Clinical Experience."
            description="From your initial 3D digital diagnosis to painless treatment and lifetime follow-up care."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {journeyData.map((step, index) => (
            <ScrollReveal key={step.stepNumber} direction="up" delay={0.1 * index + 0.15}>
              <GlassCard variant="standard" className="h-full flex flex-col justify-between group p-5 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400 relative">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-medical-600 text-white font-extrabold text-xs">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{step.subtitle}</span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 text-medical-600 mr-1" />
                    <span>{step.duration}</span>
                  </div>
                  {index < journeyData.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 hidden md:block" />
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
