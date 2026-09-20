'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Calendar, Activity, MessageSquare } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0E3340] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex">
              <Badge
                variant="gold"
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-white/10 text-medical-200 border-white/20"
              >
                <Activity className="mr-1.5 h-3.5 w-3.5 text-medical-300" />
                Schedule Your Visit Today
              </Badge>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Begin Your Journey To A <br />
              <span className="text-medical-300">Healthy, Confident Smile</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation with Dr. Arjun Jawahar Sharma &amp; Dr. Priyanka Sharma. Experience gentle, stress-free specialist dental care in Kapurthala and Delhi.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link href="/book" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto font-semibold text-base px-8 h-12 rounded-lg shadow-sm"
                >
                  <Calendar className="mr-2 h-4.5 w-4.5" />
                  <span>Book Your Appointment</span>
                </Button>
              </Link>

              <a
                href="https://wa.me/919910066721?text=Hello%20Jawahar%20Dental%20Hospital,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold text-base px-7 h-12 rounded-lg bg-transparent border-slate-600 text-white hover:bg-white/10 hover:border-white"
                >
                  <MessageSquare className="mr-2 h-4.5 w-4.5 text-emerald-400" />
                  <span>Chat on WhatsApp Direct</span>
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
