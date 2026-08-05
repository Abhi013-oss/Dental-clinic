'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CountUpNumber } from '@/components/shared/count-up-number';
import { ShieldCheck, Star, Award, HeartHandshake, PhoneCall, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function TrustSection() {
  return (
    <section className="py-12 bg-slate-50/70 border-y border-slate-200/80">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600 group-hover:scale-110 transition-transform">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <div className="font-sans text-2xl font-extrabold text-navy-900">
                  <CountUpNumber value="12,500+" />
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Patients Treated</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="font-sans text-2xl font-extrabold text-navy-900">
                  <CountUpNumber value="25+" />
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Excellence</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500 group-hover:scale-110 transition-transform">
                <Star className="h-6 w-6 fill-current" />
              </div>
              <div>
                <div className="font-sans text-2xl font-extrabold text-navy-900">
                  4.9 / 5.0
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Google Rating (500+ Reviews)</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-sans text-2xl font-extrabold text-navy-900">
                  100%
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Sterilization Standard</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
