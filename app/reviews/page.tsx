'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { reviewsData } from '@/constants/reviews.data';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Root Canal Treatment (RCT)', 'Dental Implants', 'Prosthodontics', 'General Dentistry'];

  const filteredReviews = selectedCategory === 'All'
    ? reviewsData
    : reviewsData.filter((r) => r.treatment.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-6xl space-y-12">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Patient Experience"
            title="Reflections of Trust & Care"
            highlightTitle="From Real Patients."
            description="Read verified Google reviews from individuals who restored their smiles and oral health at Jawahar Dental Hospital."
          />
        </ScrollReveal>

        {/* Treatment Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-medical-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <GlassCard key={review.id} variant="standard" className="flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative p-6">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-medical-600/10 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
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
                  <div className="h-11 w-11 rounded-full bg-medical-50 border border-medical-200 flex items-center justify-center font-bold text-medical-600 text-sm shrink-0">
                    {review.patientName[0]}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1">
                    <span className="font-sans text-sm font-bold text-navy-900 truncate">{review.patientName}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-xs text-medical-600 font-bold truncate">{review.treatment}</div>
                  <div className="text-[11px] text-slate-400 font-medium truncate">{review.location} • {review.date}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
