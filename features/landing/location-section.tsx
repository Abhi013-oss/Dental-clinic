'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { MapPin, PhoneCall, Clock, Navigation } from 'lucide-react';
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

        {/* Interactive Google Map Embed */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-10 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="p-4 sm:p-6 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-medical-600" />
                  <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900">
                    Jawahar&apos;s Vraja Dental Clinic &amp; Implant Centre
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Link Road, Opposite Park, Near Yes Bank, Kapurthala, Punjab 144601
                </p>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <a
                  href="https://www.google.com/maps/place/Jawahar's+Vraja+Dental+Clinic+and+Implant+centre-Dentist%2FImplant+Specialist%2FRoot+Canal+Treatment%2FBest+Dentist/@31.3810123,75.3852523,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391a492c9d2a99a7:0x2bf171f2deb101f3!8m2!3d31.3810123!4d75.3878272!16s%2Fg%2F11lgksztb8?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-medical-600 hover:bg-medical-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>

            <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
              <iframe
                title="Jawahar's Vraja Dental Clinic and Implant Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.203006240228!2d75.3852523!3d31.3810123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a492c9d2a99a7%3A0x2bf171f2deb101f3!2sJawahar%27s%20Vraja%20Dental%20Clinic%20and%20Implant%20centre-Dentist%2FImplant%20Specialist%2FRoot%20Canal%20Treatment%2FBest%20Dentist!5e0!3m2!1sen!2sin!4v1725516000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
