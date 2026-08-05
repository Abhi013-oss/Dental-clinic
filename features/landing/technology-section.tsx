'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { technologyData } from '@/constants/healthcare.data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Cpu } from 'lucide-react';

export function TechnologySection() {
  return (
    <section className="py-24 bg-white text-navy-900">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Digital Innovation"
            title="State-Of-The-Art Medical Equipment"
            highlightTitle="Sub-Millimeter 3D Accuracy."
            description="Our clinic is equipped with global top-tier 3D diagnostic scanners and laser technology for fast, painless treatments."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologyData.map((tech, index) => (
            <ScrollReveal key={tech.id} direction="up" delay={0.12 * index + 0.15}>
              <GlassCard variant="standard" className="h-full flex flex-col justify-between group p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400">
                <div className="space-y-4">
                  {/* Equipment Photo */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-100">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold" className="bg-white/95 text-medical-700 shadow-sm backdrop-blur-sm">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-3 space-y-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Clinical Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {tech.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-[11px] font-bold text-navy-900">
                          <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 mr-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
