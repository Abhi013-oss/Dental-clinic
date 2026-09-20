'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { reviewsData } from '@/constants/reviews.data';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleScroll('right');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white text-navy-900 relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-3">
              <SectionHeader
                badge="Verified Patient Experiences"
                title="Reflections of Patient Trust"
                highlightTitle="100% Real Google Reviews."
                description="Read genuine experiences from patients who underwent root canal treatments, implants, and oral surgery at Jawahar Dental Hospital."
                align="left"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/60 text-xs text-emerald-800">
                <div className="flex items-center space-x-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-navy-900">5.0 / 5.0</span>
                <span className="text-slate-400">·</span>
                <span className="font-medium text-slate-600">Verified Google Reviews · Kapurthala &amp; Delhi Branches</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation Scroll Controls */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex items-center space-x-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer focus-visible:ring-2 focus-visible:ring-medical-600"
                aria-label="Scroll Reviews Left"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer focus-visible:ring-2 focus-visible:ring-medical-600"
                aria-label="Scroll Reviews Right"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable Reviews Ribbon */}
        <div
          ref={scrollRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Patient testimonials carousel. Use left and right arrow keys to navigate."
          className="flex space-x-5 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 focus-visible:ring-offset-2 rounded-xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group"
            >
              <div className="flex flex-col justify-between h-full bg-[#FAFCFB] border border-slate-200/90 rounded-xl shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200 p-5 sm:p-6">
                <div className="space-y-3.5">
                  {/* Rating Stars & Verification Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70 flex items-center space-x-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      <span>Verified Patient</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic min-h-[90px]">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center space-x-3">
                  {review.patientAvatar ? (
                    <img
                      src={review.patientAvatar}
                      alt={review.patientName}
                      className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-medical-50 border border-medical-200/80 flex items-center justify-center font-bold text-medical-700 shrink-0 text-xs">
                      {review.patientName[0]}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="font-sans text-sm font-bold text-navy-900 truncate">
                      {review.patientName}
                    </div>
                    <div className="text-xs text-medical-600 font-semibold truncate">{review.treatment}</div>
                    <div className="text-[11px] text-slate-400 font-medium truncate">{review.location} • {review.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to All Patient Reviews Page */}
        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-medical-600 hover:text-navy-900 transition-colors py-2 px-4 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600"
          >
            <MessageSquareQuote className="h-4 w-4" />
            <span>Read All Verified Patient Reviews &amp; Experiences →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
