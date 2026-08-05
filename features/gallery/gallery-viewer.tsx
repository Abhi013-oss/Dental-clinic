'use client';

import * as React from 'react';
import { caseStudiesData } from '@/constants/reviews.data';
import { CaseStudy } from '@/types/review.types';
import { GlassCard } from '@/components/shared/glass-card';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudiesData.map((caseStudy) => (
          <GlassCard key={caseStudy.id} variant="standard" className="space-y-4 group bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-medical-500/40 transition-all duration-400">
            <div
              onClick={() => handleOpenCase(caseStudy)}
              className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden border border-slate-200 cursor-pointer relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={caseStudy.beforeImage}
                  alt="Before"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 left-2 bg-navy-900/80 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  BEFORE
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={caseStudy.afterImage}
                  alt="After"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-2 right-2 bg-medical-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  AFTER
                </span>
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-xs font-bold text-navy-900 shadow-xl group-hover:scale-105 transition-transform">
                  <Eye className="mr-1.5 h-4 w-4 text-medical-600" /> Click to Inspect Case
                </span>
              </div>
            </div>

            <div>
              <Badge variant="gold">{caseStudy.treatment}</Badge>
              <h3 className="font-sans text-2xl font-bold text-navy-900 mt-2 group-hover:text-medical-600 transition-colors">
                {caseStudy.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{caseStudy.summary}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Specialist: <strong className="text-navy-900 font-bold">{caseStudy.specialistName}</strong></span>
              <Button variant="ghost" size="sm" onClick={() => handleOpenCase(caseStudy)} className="font-bold text-xs">
                <Eye className="mr-1.5 h-3.5 w-3.5 text-medical-600" /> View Case Details
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      <LightboxModal caseStudy={selectedCase} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
