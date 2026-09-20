'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Award, ShieldCheck, Maximize2, X, GraduationCap, CheckCircle2 } from 'lucide-react';

export function CredentialsTrustSection() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <section className="py-20 lg:py-24 bg-[#FAFCFB] text-navy-900 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Verified Doctor Credentials"
            title="Board Certifications & Academic Excellence"
            highlightTitle="Building 100% Patient Trust."
            description="Our doctors hold official fellowships, national excellence awards, and premier hospital residencies. Review our verified academic credentials below."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12">
          {/* Left Side: Framing Showcase Certificate */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-sm group cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/certificates/doctors-certificates.png"
                    alt="Doctors Degrees, Awards, Fellowships & Certificates"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Tap to View Full Screen Indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/95 text-navy-900 px-3.5 py-2 rounded-lg text-xs font-bold shadow-sm backdrop-blur-sm flex items-center space-x-2 border border-slate-200 group-hover:bg-medical-600 group-hover:text-white transition-all">
                    <Maximize2 className="h-4 w-4 text-medical-600 group-hover:text-white" />
                    <span>View Degrees & Certificates</span>
                  </div>

                  <div className="absolute top-4 left-4 bg-medical-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm flex items-center space-x-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-200" />
                    <span>Verified Medical Credentials</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Institutional Credential Register (Connected Timeline, No Floating Cards) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.25}>
              <div className="space-y-6 relative pl-2 sm:pl-4 border-l-2 border-slate-200 ml-2 sm:ml-4">
                {/* Credential 1 */}
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-medical-50 text-medical-600 border border-medical-200/80 shadow-xs">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-medical-600">Surgical Fellowship</span>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900 mt-0.5">
                      Fellowship - Academy of Oral Implantology
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Conferred upon <strong>Dr. Arjun Jawahar Sharma</strong> (BDS, MDS) for advanced mastery in dental implant surgery and full mouth prosthetics.
                    </p>
                  </div>
                </div>

                {/* Credential 2 */}
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200/80 shadow-xs">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">National Honor</span>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900 mt-0.5">
                      4th Dental Academic Excellence Award
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Prestigious <strong>GuidENT Certificate of Excellence</strong> awarded for top academic performance in prosthodontics and clinical research.
                    </p>
                  </div>
                </div>

                {/* Credential 3 */}
                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Premier Residency</span>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900 mt-0.5">
                      GRIPMER Sri Ganga Ram Hospital Residency
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
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
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
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
