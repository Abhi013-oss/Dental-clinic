'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { technologyData } from '@/constants/healthcare.data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export function TechnologySection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Digital Innovation"
            title="State-Of-The-Art Medical Equipment"
            highlightTitle="Sub-Millimeter 3D Accuracy."
            description="Our clinic is equipped with global top-tier 3D diagnostic scanners and laser technology for fast, painless treatments."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 mt-12">
          {technologyData.map((tech, index) => (
            <ScrollReveal key={tech.id} direction="up" delay={0.08 * index + 0.1}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200">
                <div className="space-y-4">
                  {/* Equipment Photo */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-contain p-3"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <Badge variant="gold" className="bg-white/95 text-medical-700 shadow-xs backdrop-blur-sm">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-navy-900">
                      {tech.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-3 space-y-2 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Clinical Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {tech.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-xs font-semibold text-navy-900">
                          <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 mr-1.5 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
