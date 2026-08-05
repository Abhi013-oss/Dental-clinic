'use client';

import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { MapPin, PhoneCall, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  return (
    <section className="py-24 bg-slate-50/60 text-navy-900 border-t border-slate-200">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinic Location"
            title="Visit Our Beverly Hills Sanctuary"
            highlightTitle="Convenient Private Valet Parking."
            description="Located on Beverly Hills Boulevard with dedicated private suite entrances and direct reception check-in."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Google Map Representation */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                  alt="Beverly Hills Map View"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                <div className="absolute inset-0 bg-navy-900/10 pointer-events-none" />

                {/* Map Pin Badge overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white text-navy-900 border border-slate-200 shadow-2xl flex items-center space-x-3 group-hover:scale-105 transition-transform">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">{siteConfig.name}</h4>
                    <p className="text-xs text-slate-500">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4"
                >
                  <Button variant="gold" size="sm" className="font-bold text-xs shadow-md">
                    <Navigation className="mr-1.5 h-3.5 w-3.5" />
                    <span>Get Directions</span>
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Address & Operating Hours Info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={0.3}>
              <GlassCard variant="standard" className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-medical-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Address & Access</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.suite}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <PhoneCall className="h-5 w-5 text-medical-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Emergency & Appointments Hotline</h4>
                    <p className="text-xs text-slate-600 mt-1 font-bold text-medical-600">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <Clock className="h-5 w-5 text-medical-600 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <h4 className="text-sm font-bold text-navy-900 mb-2">Operating Hours</h4>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      {siteConfig.contact.hours.map((h, i) => (
                        <div key={i} className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-bold text-navy-900">{h.days}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
