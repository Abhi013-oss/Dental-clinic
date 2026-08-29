'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { reviewsData } from '@/constants/reviews.data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function TestimonialsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white text-navy-900 relative overflow-hidden border-t border-slate-100">
      <div className="container relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionHeader
              badge="Verified Patient Experiences"
              title="Reflections of Patient Trust"
              highlightTitle="100% Real Google Reviews."
              description="Read genuine experiences from patients who underwent root canal treatments, implants, and oral surgery at Jawahar Dental Hospital."
              align="left"
            />
          </ScrollReveal>

          {/* Navigation Scroll Controls */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center space-x-3 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-11 w-11 rounded-full border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-medical-600 hover:text-white hover:border-medical-600 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll Reviews Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-11 w-11 rounded-full border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-medical-600 hover:text-white hover:border-medical-600 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll Reviews Right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable Reviews Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review, index) => (
            <div
              key={review.id}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] group"
            >
              <GlassCard
                variant="standard"
                className="flex flex-col justify-between relative h-full bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/50 transition-all duration-300 p-6 sm:p-7"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-medical-600/10 pointer-events-none group-hover:text-medical-600/20 transition-colors" />

                <div className="space-y-4">
                  {/* Rating Stars & Verification Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center space-x-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      <span>Verified Google Review</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic min-h-[100px]">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center space-x-3.5">
                  {review.patientAvatar ? (
                    <img
                      src={review.patientAvatar}
                      alt={review.patientName}
                      className="h-11 w-11 rounded-full object-cover border-2 border-medical-500/30 shrink-0"
                    />
                  ) : (
                    <div className="h-11 w-11 rounded-full bg-medical-50 border border-medical-200 flex items-center justify-center font-bold text-medical-600 shrink-0">
                      {review.patientName[0]}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-sans text-sm font-bold text-navy-900 truncate">
                        {review.patientName}
                      </span>
                    </div>
                    <div className="text-xs text-medical-600 font-bold truncate">{review.treatment}</div>
                    <div className="text-[11px] text-slate-400 font-medium truncate">{review.location} • {review.date}</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Link to All Patient Reviews Page */}
        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-medical-600 hover:text-navy-900 transition-colors"
          >
            <MessageSquareQuote className="h-4 w-4" />
            <span>Read All Verified Patient Reviews & Experiences →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
