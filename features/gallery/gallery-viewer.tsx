'use client';

import * as React from 'react';
import { caseStudiesData } from '@/constants/reviews.data';
import { CaseStudy } from '@/types/review.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LightboxModal } from '@/features/gallery/lightbox-modal';
import { Eye } from 'lucide-react';

export function GalleryViewer() {
  const [selectedCase, setSelectedCase] = React.useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenCase = (c: CaseStudy) => {
    setSelectedCase(c);
    setModalOpen(true);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
        {caseStudiesData.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="space-y-4 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div
                onClick={() => handleOpenCase(caseStudy)}
                className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden border border-slate-200 cursor-pointer relative touch-manipulation select-none group"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={caseStudy.beforeImage}
                    alt="Before Treatment"
                    className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <span className="absolute top-2 left-2 bg-navy-900/85 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    BEFORE
                  </span>
                </div>
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={caseStudy.afterImage}
                    alt="After Treatment"
                    className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <span className="absolute top-2 right-2 bg-medical-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    AFTER
                  </span>
                </div>

                {/* Hover & Touch Action Indicator */}
                <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white text-xs font-bold text-navy-900 shadow-sm pointer-events-none">
                    <Eye className="mr-1.5 h-3.5 w-3.5 text-medical-600" /> Tap to Inspect Case
                  </span>
                </div>
              </div>

              <div>
                <Badge variant="gold" className="text-[11px] font-semibold">
                  {caseStudy.treatment}
                </Badge>
                <h3 className="font-sans text-xl font-bold text-navy-900 mt-2">
                  {caseStudy.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  {caseStudy.summary}
                </p>
              </div>
            </div>

            <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
              <span>Specialist: <strong className="text-navy-900 font-bold">{caseStudy.specialistName}</strong></span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleOpenCase(caseStudy)}
                className="w-full sm:w-auto font-semibold text-xs h-9 rounded-lg hover:border-medical-500 hover:text-medical-600 transition-colors"
              >
                <Eye className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
                <span>View Full Case Details</span>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <LightboxModal caseStudy={selectedCase} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
