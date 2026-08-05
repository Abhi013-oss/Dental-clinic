'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '@/constants/reviews.data';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white text-navy-900 relative overflow-hidden border-t border-slate-100">
      <div className="container relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Verified Patient Experiences"
            title="Reflections of Patient Trust"
            highlightTitle="From Real People."
            description="Read genuine reflections from patients who experienced compassionate, pain-free dental care at our clinic."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <ScrollReveal key={review.id} direction="up" delay={0.15 * index + 0.2}>
              <GlassCard variant="standard" className="flex flex-col justify-between relative h-full bg-white border border-slate-200 shadow-sm hover:shadow-md">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-medical-600/10 pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-4">
                  {review.patientAvatar ? (
                    <img
                      src={review.patientAvatar}
                      alt={review.patientName}
                      className="h-12 w-12 rounded-full object-cover border-2 border-medical-500/30"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-medical-50 border border-medical-200 flex items-center justify-center font-bold text-medical-600">
                      {review.patientName[0]}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-sans text-base font-bold text-navy-900">{review.patientName}</span>
                      {review.verifiedPatient && (
                        <span title="Verified Patient">
                          <CheckCircle2 className="h-4 w-4 text-medical-600 shrink-0" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-medical-600 font-bold">{review.treatment}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{review.location}</div>
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
