'use client';

import * as React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { servicesData } from '@/constants/services.data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Calendar,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Award,
  HeartHandshake,
  Cpu,
  Layers
} from 'lucide-react';

interface DepartmentItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const clinicalDepartments: DepartmentItem[] = [
  {
    id: 'DENTAL IMPLANTS',
    title: 'Dental Implants',
    subtitle: 'Full mouth rehabilitation, overdentures, and single implants.',
    badge: 'Super-Speciality',
    icon: Sparkles,
  },
  {
    id: 'PROSTHODONTICS',
    title: 'Prosthodontics',
    subtitle: 'Bridges, crowns, complete & partial dentures, veneers / laminates.',
    badge: 'Restorative',
    icon: ShieldCheck,
  },
  {
    id: 'ORTHODONTICS',
    title: 'Orthodontics',
    subtitle: 'Brackets, braces, clear aligners, and corrective appliances.',
    badge: 'Aesthetics',
    icon: Smile,
  },
  {
    id: 'ENDODONTICS',
    title: 'Endodontics',
    subtitle: 'Tooth color fillings, Root Canal Treatment (RCT), post & cores.',
    badge: 'Pain-Free',
    icon: Activity,
  },
  {
    id: 'ORAL & MAXILLOFACIAL SURGERY',
    title: 'Oral & Maxillofacial Surgery',
    subtitle: 'Wisdom tooth extraction, root stump extraction, oral cancer care.',
    badge: 'Surgical Care',
    icon: Award,
  },
  {
    id: 'PEDIATRIC DENTISTRY',
    title: 'Pediatric Dentistry',
    subtitle: 'Pulpotomy, pulpectomy, habit breaking appliances, sealants.',
    badge: 'Gentle Kids',
    icon: HeartHandshake,
  },
  {
    id: 'ADVANCED GUM TREATMENT',
    title: 'Advanced Gum Treatment',
    subtitle: 'Cleaning, whitening, bleeding gum & bad breath treatment, splinting.',
    badge: 'Periodontics',
    icon: Sparkles,
  },
  {
    id: 'ORAL MEDICINE & RADIOLOGY',
    title: 'Oral Medicine & Radiology',
    subtitle: 'Digital X-ray, tobacco cessation, OPG/CBCT 3D scanning.',
    badge: '3D Diagnostics',
    icon: Cpu,
  },
];

export function TreatmentsSection() {
  const [selectedDeptId, setSelectedDeptId] = React.useState<string>('DENTAL IMPLANTS');

  const activeDepartment =
    clinicalDepartments.find((d) => d.id === selectedDeptId) || clinicalDepartments[0];

  const departmentTreatments = servicesData.filter(
    (service) => service.category.toUpperCase() === selectedDeptId
  );

  return (
    <section className="py-20 lg:py-24 bg-[#FAFCFB] text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Departments & Services"
            title="Comprehensive Dental Treatments"
            highlightTitle="Organized By Specialty."
            description="Explore our 8 specialized dental departments led by board-certified implantologists, endodontists, and master restorative surgeons."
          />
        </ScrollReveal>

        {/* Mobile Horizontal Department Selector */}
        <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto scrollbar-none flex space-x-2 py-1">
          {clinicalDepartments.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border text-left touch-manipulation cursor-pointer ${
                  isSelected
                    ? 'bg-[#159A9C] text-white border-[#159A9C] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#159A9C]/50'
                }`}
              >
                <span>{dept.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Organized Split Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Organized Departments List (Matching user request) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Layers className="h-4 w-4 text-[#159A9C]" />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0E3340]">
                      Clinical Departments
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    8 Specialties
                  </span>
                </div>

            <div className="divide-y divide-slate-100 max-h-[620px] overflow-y-auto">
              {clinicalDepartments.map((dept) => {
                const isSelected = dept.id === selectedDeptId;
                const IconComponent = dept.icon;
                const treatmentCount = servicesData.filter(
                  (s) => s.category.toUpperCase() === dept.id
                ).length;

                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDeptId(dept.id)}
                    className={`w-full text-left p-4 sm:p-4.5 transition-all flex items-start justify-between gap-3 group touch-manipulation cursor-pointer ${
                      isSelected
                        ? 'bg-[#E8F6F5] border-l-4 border-[#159A9C]'
                        : 'hover:bg-slate-50/80 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-3 min-w-0">
                      <div
                        className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'bg-[#159A9C] text-white'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-[#E8F6F5] group-hover:text-[#159A9C]'
                        }`}
                      >
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4
                            className={`font-sans text-sm font-bold truncate ${
                              isSelected ? 'text-[#0E3340]' : 'text-slate-800 group-hover:text-[#159A9C]'
                            }`}
                          >
                            {dept.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center space-x-1.5 self-center">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-white text-[#159A9C] font-bold border border-[#159A9C]/30'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {treatmentCount}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected
                            ? 'text-[#159A9C] translate-x-0.5'
                            : 'text-slate-300 group-hover:text-slate-500'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

          {/* Right Column: Active Department Treatments Showcase */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                {/* Active Department Header Banner */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="gold" className="text-[10px] uppercase tracking-wider">
                        {activeDepartment.badge}
                      </Badge>
                      <span className="text-xs text-slate-500 font-semibold">
                        {departmentTreatments.length} Procedures Available
                      </span>
                    </div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0E3340]">
                      {activeDepartment.title}
                    </h3>
                    <p className="text-xs text-slate-600 max-w-xl">
                      {activeDepartment.subtitle}
                    </p>
                  </div>

                  <Link
                    href={`/book?service=${departmentTreatments[0]?.slug || ''}`}
                    className="shrink-0 self-start sm:self-auto"
                  >
                    <Button size="sm" className="bg-[#159A9C] hover:bg-[#117A7C] text-white font-bold text-xs h-9 px-3.5">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      <span>Book Consultation</span>
                    </Button>
                  </Link>
                </div>

                {/* Grid of Treatments under selected department */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {departmentTreatments.map((service) => (
                    <div
                      key={service.id}
                      className="rounded-xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:-translate-y-1.5 hover:border-[#159A9C]/50 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        {/* Clinical Image */}
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                          <img
                            src={service.heroImage}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-white/95 text-[#159A9C] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-xs border border-slate-200/60">
                            {service.category}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-sans text-base font-bold text-[#0E3340] group-hover:text-[#159A9C] transition-colors line-clamp-1">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-slate-400 font-semibold">
                          <Clock className="h-3.5 w-3.5 text-[#159A9C]" />
                          <span>{service.durationMinutes} Mins</span>
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-xs font-bold text-[#159A9C] hover:text-[#117A7C] transition-colors"
                        >
                          <span>Read Protocol</span>
                          <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Global Action Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#159A9C] hover:text-[#0E3340] transition-colors py-2.5 px-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#159A9C]/40"
          >
            <Stethoscope className="h-4 w-4" />
            <span>Explore All 31 Specialized Dental Procedures in Directory →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
