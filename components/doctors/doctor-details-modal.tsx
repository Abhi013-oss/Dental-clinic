'use client';

import * as React from 'react';
import Link from 'next/link';
import { Doctor } from '@/types/doctor.types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  X,
  Calendar,
  GraduationCap,
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  Sparkles,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';

interface DoctorDetailsModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DoctorDetailsModal({ doctor, isOpen, onClose }: DoctorDetailsModalProps) {
  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col z-10 animate-in zoom-in-98 fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doctor-modal-title"
      >
        {/* Authoritative Deep Navy Header Bar */}
        <div className="relative bg-[#0E3340] p-6 sm:p-7 text-white">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 h-9 w-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-medical-400 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-4.5 w-4.5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-1">
            {/* Doctor Avatar */}
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden border-2 border-white/20 shadow-md shrink-0 bg-slate-900">
              <img
                src={doctor.avatarUrl}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <Badge variant="gold" className="text-[11px] font-semibold bg-white/15 text-medical-200 border-white/20">
                  {doctor.specialty}
                </Badge>
                <span className="inline-flex items-center text-xs text-medical-200 font-semibold bg-white/10 px-2.5 py-0.5 rounded border border-white/15">
                  <Clock className="h-3 w-3 mr-1" /> {doctor.experienceYears}+ Years Clinical Experience
                </span>
              </div>

              <h2 id="doctor-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {doctor.name}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-medical-200">
                {doctor.title}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          {doctor.statsTagline && (
            <div className="mt-5 pt-3.5 border-t border-white/15 text-xs text-slate-300 font-normal leading-relaxed">
              <span className="text-medical-300 font-semibold uppercase mr-1">Credentials &amp; Focus:</span>
              {doctor.statsTagline}
            </div>
          )}
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-7 divide-y divide-slate-100">
          {/* 1. About Doctor */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
              <Stethoscope className="h-4 w-4 mr-2 text-medical-600" />
              About {doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {doctor.about || doctor.bio}
            </p>
          </div>

          {/* 2. Areas of Clinical Expertise */}
          {doctor.expertiseSections && doctor.expertiseSections.length > 0 && (
            <div className="pt-6 space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-medical-600" />
                Areas of Clinical Expertise &amp; Specialisation
              </h3>
              <div className="grid grid-cols-1 gap-3.5">
                {doctor.expertiseSections.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAFCFB] border border-slate-200/80"
                  >
                    <h4 className="text-sm font-bold text-navy-900 mb-1 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-medical-600 mr-2" />
                      {section.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Education & Credentials */}
          {doctor.educationCredentials && doctor.educationCredentials.length > 0 && (
            <div className="pt-6 space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
                <GraduationCap className="h-4 w-4 mr-2 text-medical-600" />
                Education &amp; Professional Credentials
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {doctor.educationCredentials.map((cred, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-xs font-semibold text-slate-700 bg-medical-50/50 p-2.5 rounded-lg border border-medical-100"
                  >
                    <CheckCircle2 className="h-4 w-4 text-medical-600 mr-2 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 4. Clinical Philosophy */}
          {doctor.clinicalPhilosophy && (
            <div className="pt-6 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
                <HeartHandshake className="h-4 w-4 mr-2 text-medical-600" />
                Clinical Philosophy &amp; Patient Care
              </h3>
              <div className="p-4 rounded-xl bg-medical-50/60 border-l-4 border-medical-600 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{doctor.clinicalPhilosophy}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-medical-600 flex items-center justify-center sm:justify-start"
          >
            <PhoneCall className="h-3.5 w-3.5 mr-1.5 text-medical-600" />
            Questions? Call {siteConfig.contact.phone}
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-1/2 sm:w-auto font-semibold text-xs h-9 rounded-lg"
            >
              Close
            </Button>

            <Link href={`/book?doctor=${doctor.id}`} className="w-1/2 sm:w-auto">
              <Button
                type="button"
                variant="gold"
                size="sm"
                className="w-full sm:w-auto font-semibold text-xs h-9 px-5 rounded-lg shadow-xs"
              >
                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                <span>Book Appointment</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
