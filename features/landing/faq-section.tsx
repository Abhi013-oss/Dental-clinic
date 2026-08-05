'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { faqData } from '@/constants/healthcare.data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white text-navy-900">
      <div className="container max-w-4xl">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Patient Information"
            title="Frequently Asked Questions"
            highlightTitle="Everything You Need To Know."
            description="Clear answers about our treatment protocols, painless anesthesia, zero-interest payment options, and scheduling."
          />
        </ScrollReveal>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={index} direction="up" delay={0.08 * index + 0.15}>
                <GlassCard variant="standard" className="p-0 overflow-hidden bg-white border border-slate-200 shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full p-6 text-left flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 transition-colors hover:bg-slate-50/80 cursor-pointer touch-manipulation select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <HelpCircle className="h-5 w-5 text-medical-600 shrink-0" />
                      <span className="font-sans text-lg font-bold text-navy-900">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300',
                        isOpen && 'rotate-180 text-medical-600'
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 animate-in fade-in duration-300">
                      {faq.answer}
                    </div>
                  )}
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
