'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { faqData } from '@/constants/healthcare.data';
import { ChevronDown, HelpCircle, Search, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'General', 'Treatments', 'Emergency', 'Payment'];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-4xl space-y-12">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Frequently Asked Questions"
            title="How Can We Assist You?"
            highlightTitle="Comprehensive Patient Guide."
            description="Find clear answers about clinical procedures, gentle pain-free anesthesia, zero-interest payment options, and emergency care."
          />
        </ScrollReveal>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-medical-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-medical-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <GlassCard key={index} variant="standard" className="p-0 overflow-hidden bg-white border border-slate-200 shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 transition-colors hover:bg-slate-50/80"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-medical-600 shrink-0" />
                    <span className="font-sans text-base font-bold text-navy-900">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 text-medical-600'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Emergency Assistance Footer */}
        <div className="p-8 rounded-2xl bg-sky-50/70 border border-medical-200 text-center space-y-4">
          <h3 className="font-sans text-xl font-bold text-navy-900">Have an Urgent Dental Question?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our clinical team is available 24/7 for urgent tooth pain or emergency scheduling.
          </p>
          <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="inline-block">
            <Button variant="gold" size="sm" className="font-bold text-xs">
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>Call Hotline: {siteConfig.contact.phone}</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
