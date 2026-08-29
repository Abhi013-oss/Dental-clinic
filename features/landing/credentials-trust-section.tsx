'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Award, ShieldCheck, Maximize2, X, GraduationCap, CheckCircle2 } from 'lucide-react';

export function CredentialsTrustSection() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <section className="py-20 bg-slate-50 text-navy-900 border-t border-slate-200/80">
      <div className="container max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Verified Doctor Credentials"
            title="Board Certifications & Academic Excellence"
            highlightTitle="Building 100% Patient Trust."
            description="Our doctors hold official fellowships, national excellence awards, and premier hospital residencies. Review our verified academic credentials below."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left Side: Framing Showcase Image */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl group cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/certificates/doctors-certificates.png"
                    alt="Doctors Degrees, Awards, Fellowships & Certificates"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Tap to View Full Screen Indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/95 text-navy-900 px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg backdrop-blur-md flex items-center space-x-2 border border-slate-200 group-hover:bg-medical-600 group-hover:text-white transition-all">
                    <Maximize2 className="h-4 w-4 text-medical-600 group-hover:text-white" />
                    <span>View Degrees & Certificates</span>
                  </div>

                  <div className="absolute top-4 left-4 bg-medical-600 text-white text-[11px] font-bold px-3 py-1 rounded-lg shadow-md flex items-center space-x-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
                    <span>Verified Medical Credentials</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Trust Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="space-y-4">
                {/* Highlight 1 */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-medical-500/50 transition-all">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-navy-900">
                      Fellowship - Academy of Oral Implantology
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Conferred upon <strong>Dr. Arjun Jawahar Sharma</strong> (BDS, MDS) for advanced mastery in dental implant surgery and full mouth prosthetics.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-medical-500/50 transition-all">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-navy-900">
                      4th Dental Academic Excellence Award
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Prestigious <strong>GuidENT Certificate of Excellence</strong> awarded for top academic performance in prosthodontics and clinical research.
                    </p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-medical-500/50 transition-all">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-navy-900">
                      GRIPMER Sri Ganga Ram Hospital Residency
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Certified Senior Residency & Clinical Training completed by <strong>Dr. Priyanka Sharma</strong> at Sri Ganga Ram Hospital, New Delhi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-navy-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">Academic Credentials</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">Degrees, Fellowships & Excellence Certificates</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
              <img
                src="/certificates/doctors-certificates.png"
                alt="Doctors Degrees and Certificates Full View"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
