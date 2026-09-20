'use client';

import * as React from 'react';
import { caseStudiesData } from '@/constants/reviews.data';
import { CaseStudy } from '@/types/review.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LightboxModal } from '@/features/gallery/lightbox-modal';
import { Eye, ShieldCheck } from 'lucide-react';

export function GalleryViewer() {
  const [selectedCase, setSelectedCase] = React.useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenCase = (c: CaseStudy) => {
    setSelectedCase(c);
    setModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent, c: CaseStudy) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenCase(c);
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
        {caseStudiesData.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="space-y-4 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Interactive Before / After Dual Thumbnail Container */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`Inspect clinical case: ${caseStudy.title}`}
                onClick={() => handleOpenCase(caseStudy)}
                onKeyDown={(e) => handleKeyDown(e, caseStudy)}
                className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden border border-slate-200 cursor-pointer relative touch-manipulation select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 focus-visible:ring-offset-2"
              >
                <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                  <img
                    src={caseStudy.beforeImage}
                    alt={`${caseStudy.title} - Before Treatment`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <span className="absolute top-2 left-2 bg-navy-900/85 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    BEFORE
                  </span>
                </div>
                <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                  <img
                    src={caseStudy.afterImage}
                    alt={`${caseStudy.title} - After Treatment`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <span className="absolute top-2 right-2 bg-medical-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    AFTER
                  </span>
                </div>

                {/* Hover & Focus Inspection Overlay */}
                <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-white text-xs font-bold text-navy-900 shadow-xs pointer-events-none">
                    <Eye className="mr-1.5 h-3.5 w-3.5 text-medical-600" /> Inspect Full Case
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="gold" className="text-[11px] font-semibold">
                    {caseStudy.treatment}
                  </Badge>
                  <span className="text-[11px] text-emerald-700 font-medium flex items-center">
                    <ShieldCheck className="mr-1 h-3.5 w-3.5 text-emerald-600" /> Verified Record
                  </span>
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-navy-900 mt-2">
                  {caseStudy.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                  {caseStudy.summary}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
              <span>Clinical Lead: <strong className="text-navy-900 font-semibold">{caseStudy.specialistName}</strong></span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleOpenCase(caseStudy)}
                className="w-full sm:w-auto font-semibold text-xs h-9 rounded-lg hover:border-medical-500 hover:text-medical-600 transition-colors"
              >
                <Eye className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
                <span>View Full Details</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <LightboxModal caseStudy={selectedCase} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
