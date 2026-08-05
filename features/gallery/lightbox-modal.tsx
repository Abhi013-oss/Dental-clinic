'use client';

import * as React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CaseStudy } from '@/types/review.types';
import { Activity, Calendar } from 'lucide-react';
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
          <span className="text-xs font-bold uppercase tracking-widest text-medical-600">{caseStudy.treatment}</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">{caseStudy.title}</h2>
          <p className="text-xs text-slate-500">Performed by {caseStudy.specialistName}</p>
        </div>

        {/* Before / After Full-Width Side-By-Side Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
              <img src={caseStudy.beforeImage} alt="Before" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 bg-navy-900/80 text-white text-[10px] px-2.5 py-1 rounded font-bold">
                BEFORE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 text-center">Initial state before ceramic restoration</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-medical-500/40 shadow-md">
              <img src={caseStudy.afterImage} alt="After" className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 bg-medical-600 text-white text-[10px] px-2.5 py-1 rounded font-bold">
                AFTER (COMPLETED)
              </span>
            </div>
            <p className="text-[11px] text-medical-600 font-bold text-center">Completed clinical transformation</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed space-y-2">
          <h4 className="font-bold text-navy-900 flex items-center">
            <Activity className="mr-1.5 h-4 w-4 text-medical-600" /> Case Summary
          </h4>
          <p className="text-slate-600">{caseStudy.summary}</p>
          <div className="pt-2 text-navy-900 flex items-center justify-between border-t border-slate-200">
            <span>Patient Age: <strong>{caseStudy.patientAge}</strong></span>
            <span>Duration: <strong>{caseStudy.duration}</strong></span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Link href="/book" onClick={onClose}>
            <Button variant="gold">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Book Similar Treatment</span>
            </Button>
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
