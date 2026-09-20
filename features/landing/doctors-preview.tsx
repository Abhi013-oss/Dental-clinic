'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { doctorsData } from '@/constants/doctors.data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap, ArrowRight, Info } from 'lucide-react';
import { Doctor } from '@/types/doctor.types';
import { DoctorDetailsModal } from '@/components/doctors/doctor-details-modal';

export function DoctorsPreview() {
  const [activeDoctorModal, setActiveDoctorModal] = React.useState<Doctor | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-white text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Master Specialists"
            title="Meet Our Clinical Leadership"
            highlightTitle="Trained At World-Class Institutions."
            description="Our cosmetic dentists, implantologists, and specialists bring decades of specialized academic research and patient care to Kapurthala & Delhi."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-12">
          {doctorsData.map((doctor, index) => (
            <ScrollReveal key={doctor.id} direction="up" delay={0.08 * index + 0.1}>
              <div className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#FAFCFB] border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all duration-200">
                <div className="space-y-4">
                  {/* Doctor Portrait Image with Clinical Crop */}
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                    <img
                      src={doctor.avatarUrl}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                    />
                  </div>

                  <div>
                    <Badge variant="gold" className="text-[11px] font-semibold">
                      {doctor.specialty}
                    </Badge>
                    <h3 className="font-sans text-lg font-bold text-navy-900 mt-2">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-medical-600 font-semibold">{doctor.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-slate-500">
                    <GraduationCap className="h-4 w-4 text-medical-600 shrink-0" />
                    <span className="truncate">{doctor.degrees[0]}</span>
                  </div>
                </div>

                {/* Card Actions: Clinical Profile & Book Consultation */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveDoctorModal(doctor)}
                    className="w-full font-semibold text-xs h-9 rounded-lg hover:border-medical-500 hover:text-medical-600 transition-colors"
                  >
                    <Info className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
                    <span>Clinical Profile</span>
                  </Button>

                  <Link href={`/book?doctor=${doctor.id}`} className="block">
                    <Button variant="gold" size="sm" className="w-full font-semibold text-xs h-9 rounded-lg">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      <span>Book Consultation</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/team">
            <Button variant="outline" size="lg" className="font-semibold text-sm h-11 px-7 rounded-lg">
              <span>Meet All Master Specialists</span>
              <ArrowRight className="ml-2 h-4 w-4 text-medical-600" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Doctor Details Modal */}
      <DoctorDetailsModal
        doctor={activeDoctorModal}
        isOpen={Boolean(activeDoctorModal)}
        onClose={() => setActiveDoctorModal(null)}
      />
    </section>
  );
}
