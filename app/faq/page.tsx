'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { faqData } from '@/constants/healthcare.data';
import { ChevronDown, HelpCircle, Search, PhoneCall, X, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Categories accurately derived from existing data
  const dynamicCategories = React.useMemo(() => {
    const cats = Array.from(new Set(faqData.map((f) => f.category).filter(Boolean)));
    return ['All', ...cats];
  }, []);

  const filteredFaqs = React.useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] text-navy-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Page Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Frequently Asked Questions"
            title="How Can We Assist You?"
            highlightTitle="Comprehensive Patient Guide."
            description="Find clear answers about clinical procedures, gentle pain-free anesthesia, zero-interest payment options, and emergency care."
            align="center"
          />
        </ScrollReveal>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions or clinical keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-[#FAFCFB] pl-10 pr-10 py-2.5 text-xs text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-navy-900 transition-colors"
                aria-label="Clear search query"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">Categories:</span>
            {dynamicCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === 'All'
                ? faqData.length
                : faqData.filter((f) => f.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer touch-manipulation flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-medical-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/70'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-500 border border-slate-200/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200/90 p-8 space-y-3">
            <p className="text-sm font-semibold text-slate-600">
              No answers matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold rounded-lg"
            >
              Reset Search &amp; Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <ScrollReveal key={index} direction="up" delay={0.04 * (index % 6) + 0.05}>
                  <div
                    className="rounded-xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 overflow-hidden group"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 transition-colors cursor-pointer touch-manipulation select-none"
                      aria-expanded={isOpen}
                      id={`faq-page-trigger-${index}`}
                      aria-controls={`faq-page-answer-${index}`}
                    >
                      <div className="flex items-start space-x-3.5 pr-4">
                        <HelpCircle className="h-5 w-5 text-medical-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-medical-600 bg-medical-50 px-2 py-0.5 rounded border border-medical-200/60 inline-block">
                            {faq.category || 'General'}
                          </span>
                          <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200',
                          isOpen && 'rotate-180 text-medical-600'
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-page-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-page-trigger-${index}`}
                        className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-200"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* Urgent Dental Question / Emergency Banner */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#159A9C]/40 transition-all text-center space-y-4">
          <div className="max-w-md mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-medical-600">
              Immediate Patient Support
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-navy-900">
              Have An Urgent Dental Question?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our clinical team is available for urgent tooth pain assessments, appointment scheduling, and treatment guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 px-5 rounded-lg border-slate-200 font-semibold text-xs hover:bg-slate-50 touch-manipulation cursor-pointer"
              >
                <PhoneCall className="mr-2 h-4 w-4 text-medical-600" />
                <span>Call Helpline: {siteConfig.contact.phone}</span>
              </Button>
            </a>

            <Link href="/book" className="w-full sm:w-auto">
              <Button
                variant="gold"
                className="w-full sm:w-auto h-11 px-6 rounded-lg font-bold text-xs shadow-xs touch-manipulation cursor-pointer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
