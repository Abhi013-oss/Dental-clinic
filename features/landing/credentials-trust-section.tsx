'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Award, ShieldCheck, Maximize2, X, GraduationCap, CheckCircle2 } from 'lucide-react';

interface CredentialItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  doctor?: string;
  descriptionPre: string;
  descriptionPost: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  glowColor: string;
}

const credentialsData: CredentialItem[] = [
  {
    id: 'fellowship',
    category: 'Surgical Fellowship',
    categoryColor: 'text-[#159A9C]',
    title: 'Fellowship - Academy of Oral Implantology',
    doctor: 'Dr. Arjun Jawahar Sharma',
    descriptionPre: 'Conferred upon ',
    descriptionPost: ' (BDS, MDS) for advanced mastery in dental implant surgery and full mouth prosthetics.',
    icon: GraduationCap,
    iconBg: 'bg-[#E8F6F5]',
    iconBorder: 'border-[#159A9C]/50',
    iconColor: 'text-[#159A9C]',
    glowColor: 'rgba(21, 154, 156, 0.25)',
  },
  {
    id: 'award',
    category: 'National Honor',
    categoryColor: 'text-amber-600',
    title: '4th Dental Academic Excellence Award',
    doctor: 'GuidENT Certificate of Excellence',
    descriptionPre: 'Prestigious ',
    descriptionPost: ' awarded for top academic performance in prosthodontics and clinical research.',
    icon: Award,
    iconBg: 'bg-amber-50',
    iconBorder: 'border-amber-300',
    iconColor: 'text-amber-600',
    glowColor: 'rgba(245, 158, 11, 0.25)',
  },
  {
    id: 'residency',
    category: 'Premier Residency',
    categoryColor: 'text-emerald-600',
    title: 'GRIPMER Sri Ganga Ram Hospital Residency',
    doctor: 'Dr. Priyanka Sharma',
    descriptionPre: 'Certified Senior Residency & Clinical Training completed by ',
    descriptionPost: ' at Sri Ganga Ram Hospital, New Delhi.',
    icon: CheckCircle2,
    iconBg: 'bg-emerald-50',
    iconBorder: 'border-emerald-300',
    iconColor: 'text-emerald-600',
    glowColor: 'rgba(16, 185, 129, 0.25)',
  },
];

// Write-on Typewriter Heading Component
function TypewriterHeading({
  text,
  active,
  speed = 22,
  onComplete,
}: {
  text: string;
  active: boolean;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    if (!active || completed) return;
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        setCompleted(true);
        if (onComplete) onComplete();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [active, text, speed, completed, onComplete]);

  // If not active yet, show empty (or if already completed, show full text)
  if (!active && !completed) {
    return <span className="opacity-0">{text}</span>;
  }

  return (
    <span className="relative">
      <span>{completed ? text : displayed}</span>
      {isTyping && (
        <span
          className="inline-block w-[2px] h-[1em] bg-[#159A9C] ml-1 animate-pulse align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  );
}

// Interactive Animated Timeline Register
function AnimatedCredentialsTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = React.useState(-1);
  const [linePercent, setLinePercent] = React.useState(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger step 0 (first milestone)
          setActiveStep(0);
          setLinePercent(10);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Handle progression from Step 0 -> Step 1 -> Step 2
  const handleStep0Complete = React.useCallback(() => {
    setLinePercent(55);
    setTimeout(() => {
      setActiveStep(1);
    }, 250);
  }, []);

  const handleStep1Complete = React.useCallback(() => {
    setLinePercent(100);
    setTimeout(() => {
      setActiveStep(2);
    }, 250);
  }, []);

  return (
    <div ref={containerRef} className="relative py-2">
      {/* Background Track Line */}
      <div
        className="absolute top-6 bottom-8 left-[21px] sm:left-[23px] w-[2px] bg-slate-200 -translate-x-1/2 rounded-full"
        aria-hidden="true"
      />

      {/* Animated Growing Glowing Teal Line ("Lines Coming") */}
      <div
        className="absolute top-6 left-[21px] sm:left-[23px] w-[2.5px] bg-gradient-to-b from-[#159A9C] via-[#0E3340] to-[#10B981] -translate-x-1/2 rounded-full transition-all duration-700 ease-out shadow-xs"
        style={{
          height: `calc(${linePercent}% - 48px)`,
          maxHeight: 'calc(100% - 48px)',
          opacity: activeStep >= 0 ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Credentials Items */}
      <div className="space-y-8 sm:space-y-10 relative">
        {credentialsData.map((item, idx) => {
          const isItemActive = activeStep >= idx;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="relative flex items-start group"
              style={{
                opacity: isItemActive ? 1 : 0.4,
                transition: 'opacity 0.5s ease',
              }}
            >
              {/* Circular Milestone Icon ("Pops in with glow") */}
              <div
                className={`relative z-10 shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-full ${item.iconBg} ${item.iconBorder} border flex items-center justify-center ${item.iconColor} shadow-xs transition-all duration-500 ease-out`}
                style={{
                  transform: isItemActive ? 'scale(1)' : 'scale(0.75)',
                  boxShadow: isItemActive ? `0 0 16px ${item.glowColor}` : 'none',
                }}
              >
                <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Text Container with Write-on Heading */}
              <div className="ml-4 sm:ml-6 flex-1 pt-0.5">
                {/* Category Badge */}
                <div
                  className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${item.categoryColor} transition-all duration-400`}
                  style={{
                    opacity: isItemActive ? 1 : 0,
                    transform: isItemActive ? 'translate3d(0, 0, 0)' : 'translate3d(0, 8px, 0)',
                  }}
                >
                  {item.category}
                </div>

                {/* Write-on Headline */}
                <h3 className="font-sans text-base sm:text-lg lg:text-xl font-extrabold text-[#0E3340] mt-0.5 tracking-tight">
                  <TypewriterHeading
                    text={item.title}
                    active={isItemActive}
                    speed={20}
                    onComplete={
                      idx === 0
                        ? handleStep0Complete
                        : idx === 1
                        ? handleStep1Complete
                        : undefined
                    }
                  />
                </h3>

                {/* Supporting Description with Fade/Slide In */}
                <p
                  className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed transition-all duration-500"
                  style={{
                    opacity: isItemActive ? 1 : 0,
                    transform: isItemActive ? 'translate3d(0, 0, 0)' : 'translate3d(0, 8px, 0)',
                    transitionDelay: `${idx * 0.1 + 0.2}s`,
                  }}
                >
                  {item.descriptionPre}
                  {item.doctor && <strong>{item.doctor}</strong>}
                  {item.descriptionPost}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
                className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-slate-200/90 shadow-sm hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/certificates/doctors-certificates.png"
                    alt="Doctors Degrees, Awards, Fellowships & Certificates"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

          {/* Right Side: Institutional Credential Register with Animated Lines & Write-on Effect */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.2}>
              <AnimatedCredentialsTimeline />
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
