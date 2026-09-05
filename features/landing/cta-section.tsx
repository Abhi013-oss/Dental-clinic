'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Calendar, Activity, MessageSquare } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative rounded-3xl bg-gradient-to-br from-sky-50/90 via-white to-sky-50/60 p-8 sm:p-14 border border-medical-200 shadow-xl overflow-hidden text-center">
            {/* Ambient Lighting Background */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <Badge variant="gold" className="px-4 py-1.5 text-xs font-bold tracking-wider">
                <Activity className="mr-1.5 h-3.5 w-3.5" />
                Schedule Your Visit Today
              </Badge>

              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-navy-900 leading-tight">
                Begin Your Journey To A <br />
                <span className="text-medical-600">Healthy, Confident Smile</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Schedule a consultation with Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma. Experience gentle, stress-free specialist dental care in Kapurthala and Delhi.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto font-bold text-sm shadow-lg shadow-medical-600/20 hover:scale-[1.03] transition-transform">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>Book Your Appointment</span>
                  </Button>
                </Link>

                <a
                  href="https://wa.me/919910066721?text=Hello%20Jawahar%20Dental%20Hospital,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold text-sm hover:scale-[1.03] transition-transform">
                    <MessageSquare className="mr-2 h-4 w-4 text-emerald-600" />
                    <span>Chat on WhatsApp Direct</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
