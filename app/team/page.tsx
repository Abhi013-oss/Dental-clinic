import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { doctorsData } from '@/constants/doctors.data';
import { Calendar, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export const metadata = {
  title: 'Specialist Doctors | ÉLITE Dental Clinic',
  description: 'Meet Dr. Arjun Jawahar Sharma and Dr. Priyanka Sharma at ÉLITE Dental Clinic.',
};

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container max-w-5xl">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Team"
            title="Specialist Doctors & Surgeons"
            highlightTitle="Unrivaled Expertise."
            description="Led by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma, providing comprehensive specialist care across Kapurthala and Delhi."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctorsData.map((doctor, index) => (
            <ScrollReveal key={doctor.id} direction="up" delay={0.15 * index + 0.2}>
              <GlassCard variant="standard" className="flex flex-col justify-between space-y-6 group bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-medical-500/40 transition-all duration-400 h-full">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                    <img
                      src={doctor.avatarUrl}
                      alt={doctor.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div>
                    <Badge variant="gold">{doctor.specialty}</Badge>
                    <h2 className="font-sans text-2xl font-bold text-navy-900 mt-2 group-hover:text-medical-600 transition-colors">{doctor.name}</h2>
                    <p className="text-xs text-medical-600 font-bold">{doctor.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{doctor.bio}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center">
                      <GraduationCap className="mr-1.5 h-4 w-4 text-medical-600" /> Academic Credentials & Details
                    </h4>
                    <ul className="space-y-1">
                      {doctor.achievements.map((ach, idx) => (
                        <li key={idx} className="text-[11px] text-slate-600 flex items-start font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 mr-1.5 shrink-0 mt-0.5" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link href={`/book?doctor=${doctor.id}`}>
                    <Button variant="gold" className="w-full font-bold text-xs group-hover:shadow-md transition-shadow">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Book Consultation with {doctor.name}</span>
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
