'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
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
    <section className="py-24 bg-slate-50/60 text-navy-900 border-y border-slate-200/80">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Master Specialists"
            title="Meet Our Clinical Leadership"
            highlightTitle="Trained At World-Class Institutions."
            description="Our cosmetic dentists, implantologists, and specialists bring decades of specialized academic research and patient care to Kapurthala & Delhi."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {doctorsData.map((doctor, index) => (
            <ScrollReveal key={doctor.id} direction="up" delay={0.15 * index + 0.15}>
              <GlassCard
                variant="standard"
                className="h-full flex flex-col justify-between group bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-medical-500/40 transition-all duration-400"
              >
                <div className="space-y-4">
                  {/* Doctor Portrait Image */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                    <img
                      src={doctor.avatarUrl}
                      alt={doctor.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div>
                    <Badge variant="gold" className="text-[11px]">{doctor.specialty}</Badge>
                    <h3 className="font-sans text-xl font-bold text-navy-900 mt-2 group-hover:text-medical-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-medical-600 font-bold">{doctor.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-slate-500">
                    <GraduationCap className="h-4 w-4 text-medical-600 shrink-0" />
                    <span className="truncate">{doctor.degrees[0]}</span>
                  </div>
                </div>

                {/* Card Actions: Know More & Book Consultation */}
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveDoctorModal(doctor)}
                    className="w-full font-bold text-xs hover:border-medical-500 hover:text-medical-600 transition-colors"
                  >
                    <Info className="mr-1.5 h-3.5 w-3.5 text-medical-600" />
                    <span>Know More</span>
                  </Button>

                  <Link href={`/book?doctor=${doctor.id}`} className="block">
                    <Button variant="gold" size="sm" className="w-full font-bold text-xs">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      <span>Book Consultation</span>
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/team">
            <Button variant="outline" size="lg" className="font-bold text-sm">
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
