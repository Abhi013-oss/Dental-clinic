'use client';

import * as React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CaseStudy } from '@/types/review.types';
import { Activity, Calendar, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface LightboxModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxModal({ caseStudy, isOpen, onClose }: LightboxModalProps) {
  if (!caseStudy) return null;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-600">
            {caseStudy.treatment}
          </span>
          <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-navy-900">
            {caseStudy.title}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Clinical Lead: <strong className="text-navy-900 font-semibold">{caseStudy.specialistName}</strong>
          </p>
        </div>

        {/* Before / After Full-Width Side-By-Side Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img src={caseStudy.beforeImage} alt={`${caseStudy.title} Initial State`} className="w-full h-full object-cover" />
              <span className="absolute top-2.5 left-2.5 bg-navy-900/85 text-white text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                BEFORE (Initial)
              </span>
            </div>
            <p className="text-[11px] text-slate-500 text-center font-medium">Pre-treatment clinical examination</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-medical-500/40 shadow-xs bg-slate-100">
              <img src={caseStudy.afterImage} alt={`${caseStudy.title} Completed Transformation`} className="w-full h-full object-cover" />
              <span className="absolute top-2.5 right-2.5 bg-medical-600 text-white text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                AFTER (Completed)
              </span>
            </div>
            <p className="text-[11px] text-medical-600 font-semibold text-center">Completed clinical rehabilitation</p>
          </div>
        </div>

        {/* Clinical Summary */}
        <div className="p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/90 text-xs leading-relaxed space-y-2.5">
          <div className="flex items-center justify-between text-navy-900 font-bold border-b border-slate-200/70 pb-2">
            <span className="flex items-center text-xs">
              <Activity className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
              Case Overview
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center">
              <ShieldCheck className="mr-1 h-3 w-3 text-emerald-600" /> Verified Clinical Case
            </span>
          </div>
          <p className="text-slate-600 font-normal">{caseStudy.summary}</p>
          <div className="pt-2 text-slate-600 flex items-center justify-between border-t border-slate-200/70 text-[11px]">
            <span>Patient Age: <strong className="text-navy-900 font-semibold">{caseStudy.patientAge} Years</strong></span>
            <span>Treatment Duration: <strong className="text-navy-900 font-semibold">{caseStudy.duration}</strong></span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto font-semibold text-xs h-10 px-5 rounded-lg border-slate-200 hover:bg-slate-50 touch-manipulation cursor-pointer"
          >
            Close
          </Button>

          <Link href="/book" onClick={onClose} className="w-full sm:w-auto">
            <Button variant="gold" className="w-full sm:w-auto font-bold text-xs h-10 px-5 rounded-lg shadow-xs touch-manipulation cursor-pointer">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Book Similar Consultation</span>
            </Button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
