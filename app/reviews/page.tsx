'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { reviewsData } from '@/constants/reviews.data';
import { Star, CheckCircle2, MessageSquareQuote, Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

const categories = [
  'All',
  'Root Canal (RCT)',
  'Dental Implants',
  'Prosthodontics',
  'General Dentistry',
];

function matchTreatmentCategory(treatment: string, category: string): boolean {
  if (category === 'All') return true;
  const t = treatment.toLowerCase();
  if (category === 'Dental Implants') return t.includes('implant');
  if (category === 'Root Canal (RCT)') return t.includes('rct') || t.includes('canal');
  if (category === 'Prosthodontics') return t.includes('prosthodontic');
  if (category === 'General Dentistry') {
    return t.includes('restoration') || t.includes('comprehensive') || t.includes('general') || t.includes('filling');
  }
  return t.includes(category.toLowerCase());
}

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredReviews = reviewsData.filter((r) =>
    matchTreatmentCategory(r.treatment, selectedCategory)
  );

  const featuredReview = filteredReviews[0];
  const supportingReviews = filteredReviews.slice(1);

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Page Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <SectionHeader
              badge="Patient Experiences &amp; Proof"
              title="Reflections of Patient Trust"
              highlightTitle="100% Real Google Reviews."
              description="Read verified, authentic experiences from patients who underwent root canal treatments, implants, prosthodontics, and comprehensive care at Jawahar Dental Hospital."
              align="center"
            />

            {/* Restrained Rating Summary Banner */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs mt-2">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-navy-900 text-sm">5.0 Star Average</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                100% Genuine Treated Patients · Google Verified
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Treatment Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All'
              ? reviewsData.length
              : reviewsData.filter((r) => matchTreatmentCategory(r.treatment, cat)).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer touch-manipulation flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-medical-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-50 border border-slate-200/90'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reviews Editorial Grid */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200/90 p-8 space-y-3">
            <p className="text-sm font-semibold text-slate-600">No reviews found under this category.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-semibold rounded-lg"
            >
              Reset to All Reviews
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Review (when Available) */}
            {featuredReview && (
              <ScrollReveal direction="up" delay={0.1}>
                <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center space-x-1 text-amber-500">
                          {[...Array(featuredReview.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/70 flex items-center space-x-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          <span>Verified Patient Story</span>
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal italic">
                        &ldquo;{featuredReview.comment}&rdquo;
                      </p>

                      <div className="pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                        {featuredReview.patientAvatar ? (
                          <img
                            src={featuredReview.patientAvatar}
                            alt={featuredReview.patientName}
                            className="h-12 w-12 rounded-full object-cover border border-slate-200 shrink-0"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-medical-50 border border-medical-200/80 flex items-center justify-center font-bold text-medical-700 text-sm shrink-0">
                            {featuredReview.patientName[0]}
                          </div>
                        )}

                        <div>
                          <div className="font-sans text-base font-bold text-navy-900">
                            {featuredReview.patientName}
                          </div>
                          <div className="text-xs text-medical-600 font-semibold">{featuredReview.treatment}</div>
                          <div className="text-[11px] text-slate-400 font-medium">{featuredReview.location} • {featuredReview.date}</div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64 shrink-0 bg-[#FAFCFB] rounded-lg border border-slate-200/80 p-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Clinical Focus</span>
                      <div className="text-xs font-bold text-navy-900">{featuredReview.treatment}</div>
                      <p className="text-[11px] text-slate-500 leading-normal">
                        Treatment executed with precision anesthesia and hospital-grade sterilization protocols.
                      </p>
                      <Link href="/book" className="inline-block pt-1">
                        <span className="text-xs font-bold text-medical-600 hover:text-navy-900 transition-colors">
                          Book Similar Care →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Supporting Reviews Grid */}
            {supportingReviews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
                {supportingReviews.map((review, idx) => (
                  <ScrollReveal key={review.id} direction="up" delay={0.06 * (idx % 6) + 0.05}>
                    <div
                      className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 p-6 flex flex-col justify-between h-full group"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-amber-500">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70 flex items-center space-x-1">
                            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                            <span>Verified</span>
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic min-h-[80px]">
                          &ldquo;{review.comment}&rdquo;
                        </p>
                      </div>

                      <div className="pt-4 mt-5 border-t border-slate-100 flex items-center space-x-3.5">
                        {review.patientAvatar ? (
                          <img
                            src={review.patientAvatar}
                            alt={review.patientName}
                            className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-medical-50 border border-medical-200/80 flex items-center justify-center font-bold text-medical-700 text-xs shrink-0">
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
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Consultation Action Strip */}
        <div className="rounded-2xl bg-navy-900 text-white p-8 sm:p-10 shadow-md border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-medical-400">Patient-First Dentistry</span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold">Experience Painless, Precision Care</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Schedule a comprehensive clinical consultation with our specialist doctors at the Kapurthala or Delhi branch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 px-5 rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold text-xs touch-manipulation cursor-pointer"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                <span>Call {siteConfig.contact.phone}</span>
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
      </div>
    </div>
  );
}
