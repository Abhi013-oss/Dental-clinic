'use client';

import * as React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { doctorsData } from '@/constants/doctors.data';
import { Calendar, GraduationCap, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Doctor } from '@/types/doctor.types';
import { DoctorDetailsModal } from '@/components/doctors/doctor-details-modal';

export function TeamList() {
  const [activeDoctorModal, setActiveDoctorModal] = React.useState<Doctor | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {doctorsData.map((doctor, index) => (
          <ScrollReveal key={doctor.id} direction="up" delay={0.15 * index + 0.15}>
            <GlassCard
              variant="standard"
              className="flex flex-col justify-between space-y-6 group bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-medical-500/40 transition-all duration-400 h-full p-6 sm:p-8"
            >
              <div className="space-y-5">
                {/* Doctor Portrait Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                  <img
                    src={doctor.avatarUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div>
                  <Badge variant="gold" className="text-xs font-bold">{doctor.specialty}</Badge>
                  <h2 className="font-sans text-2xl font-bold text-navy-900 mt-2.5 group-hover:text-medical-600 transition-colors">
                    {doctor.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-medical-600 font-bold mt-1">
                    {doctor.title}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {doctor.bio}
                </p>

                {/* Key Credentials Preview */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
                    <GraduationCap className="mr-1.5 h-4 w-4 text-medical-600" />
                    Key Credentials & Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {doctor.achievements.slice(0, 3).map((ach, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 mr-2 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Know More & Book Consultation */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={() => setActiveDoctorModal(doctor)}
                  className="w-full font-bold text-xs hover:border-medical-500 hover:text-medical-600 transition-colors"
                >
                  <Info className="mr-2 h-4 w-4 text-medical-600" />
                  <span>Know More (View Full Profile)</span>
                </Button>

                <Link href={`/book?doctor=${doctor.id}`} className="block">
                  <Button
                    variant="gold"
                    size="default"
                    className="w-full font-bold text-xs group-hover:shadow-md transition-shadow"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Book Consultation with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}</span>
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Doctor Details Modal */}
      <DoctorDetailsModal
        doctor={activeDoctorModal}
        isOpen={Boolean(activeDoctorModal)}
        onClose={() => setActiveDoctorModal(null)}
      />
    </>
  );
}
