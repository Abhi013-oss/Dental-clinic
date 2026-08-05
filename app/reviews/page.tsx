'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { reviewsData } from '@/constants/reviews.data';
import { Star, Quote, CheckCircle2, Play, ThumbsUp } from 'lucide-react';

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Porcelain Veneers', 'Dental Implants', 'Invisalign', 'Full Mouth Rehab'];

  const filteredReviews = selectedCategory === 'All'
    ? reviewsData
    : reviewsData.filter((r) => r.treatment.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-5xl space-y-16">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Patient Experience"
            title="Reflections of Trust & Care"
            highlightTitle="From Real Patients."
            description="Read verified experiences from individuals who restored their smiles and oral health at ÉLITE Dental Clinic."
          />
        </ScrollReveal>

        {/* Video Testimonials Showcase Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GlassCard variant="standard" className="p-0 overflow-hidden relative group bg-white border border-slate-200 shadow-md">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Patient Video Testimonial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900/30 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-medical-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-1" />
                </div>
              </div>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-[11px] font-bold text-medical-600 uppercase">Video Journey • Porcelain Veneers</span>
              <h3 className="font-sans text-base font-bold text-navy-900">Sarah Jenkins: "My Pain-Free Veneer Experience"</h3>
            </div>
          </GlassCard>

          <GlassCard variant="standard" className="p-0 overflow-hidden relative group bg-white border border-slate-200 shadow-md">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Patient Video Testimonial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900/30 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-medical-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-1" />
                </div>
              </div>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-[11px] font-bold text-medical-600 uppercase">Video Journey • 3D Implants</span>
              <h3 className="font-sans text-base font-bold text-navy-900">David Miller: "Restoring Full Chewing Comfort"</h3>
            </div>
          </GlassCard>
        </div>

        {/* Treatment Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <GlassCard key={review.id} variant="standard" className="flex flex-col justify-between bg-white border border-slate-200 shadow-sm relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-medical-600/10 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-medical-50 border border-medical-200 flex items-center justify-center font-bold text-medical-600 text-sm">
                  {review.patientName[0]}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-sans text-sm font-bold text-navy-900">{review.patientName}</span>
                    <CheckCircle2 className="h-4 w-4 text-medical-600 shrink-0" />
                  </div>
                  <div className="text-[11px] text-medical-600 font-bold">{review.treatment}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
