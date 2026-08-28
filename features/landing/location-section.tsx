'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { MapPin, PhoneCall, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function LocationSection() {
  return (
    <section className="py-24 bg-slate-50/60 text-navy-900 border-t border-slate-200">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Our Clinic Locations"
            title="Visit Our Modern Dental Centers"
            highlightTitle="Convenient Access in Kapurthala & Delhi."
            description="Our centers in Kapurthala, Punjab and Mayur Vihar, East Delhi provide advanced, stress-free dental care."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Kapurthala Branch Card */}
          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard variant="standard" className="p-6 sm:p-8 bg-white border border-slate-200 shadow-md space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-white shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy-900">{siteConfig.branches.kapurthala.name}</h3>
                    <span className="text-xs font-bold text-medical-600 uppercase tracking-wider">Punjab Branch</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-medical-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 uppercase">Address</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-bold">
                        {siteConfig.branches.kapurthala.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <PhoneCall className="h-4 w-4 text-medical-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 uppercase">Contact Number</h4>
                      <p className="text-xs sm:text-sm text-medical-600 font-extrabold mt-0.5">
                        <a href={`tel:${siteConfig.branches.kapurthala.contact}`} className="hover:underline">
                          {siteConfig.branches.kapurthala.contact}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-medical-600 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM (Sunday by Appointment)</span>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Delhi Branch Card */}
          <ScrollReveal direction="up" delay={0.3}>
            <GlassCard variant="standard" className="p-6 sm:p-8 bg-white border border-slate-200 shadow-md space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-white shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy-900">{siteConfig.branches.delhi.name}</h3>
                    <span className="text-xs font-bold text-medical-600 uppercase tracking-wider">East Delhi Branch</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-medical-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 uppercase">Address</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-bold">
                        {siteConfig.branches.delhi.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <PhoneCall className="h-4 w-4 text-medical-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 uppercase">Contact Numbers</h4>
                      <p className="text-xs sm:text-sm text-medical-600 font-extrabold mt-0.5">
                        <a href="tel:9910066721" className="hover:underline">99100-66721</a>,{' '}
                        <a href="tel:8285547579" className="hover:underline">82855-47579</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-medical-600 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM (Sunday by Appointment)</span>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
