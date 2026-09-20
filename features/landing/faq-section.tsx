'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
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
    <section className="py-20 lg:py-24 bg-white text-navy-900 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Patient Information"
            title="Frequently Asked Questions"
            highlightTitle="Everything You Need To Know."
            description="Clear answers about our treatment protocols, painless anesthesia, zero-interest payment options, and scheduling."
          />
        </ScrollReveal>

        {/* Clean Typography-Led Accordion (No Card Wrappers) */}
        <div className="mt-12 divide-y divide-slate-200/80 border-y border-slate-200/80">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={index} direction="up" delay={0.06 * index + 0.1}>
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full py-4 sm:py-5 text-left flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 transition-colors group cursor-pointer touch-manipulation select-none"
                    aria-expanded={isOpen}
                    id={`faq-trigger-${index}`}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <HelpCircle className="h-4.5 w-4.5 text-medical-600 shrink-0" />
                      <span className="font-sans text-base sm:text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-4.5 w-4.5 text-slate-400 shrink-0 transition-transform duration-200',
                        isOpen && 'rotate-180 text-medical-600'
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className="pb-5 pl-7.5 pr-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
