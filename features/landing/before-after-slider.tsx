'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Activity, ChevronsLeftRight, ShieldCheck } from 'lucide-react';
import { caseStudiesData } from '@/constants/reviews.data';

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const currentCase = caseStudiesData[0];

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Outcomes"
            title="Interactive Treatment Comparison"
            highlightTitle="Drag Or Use Arrow Keys To Reveal."
            description="Observe the restorative precision of our master porcelain veneers and guided implant restorations."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
            {/* Interactive Split Slider Container */}
            <div
              ref={containerRef}
              tabIndex={0}
              role="slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Before and after clinical comparison slider. Use left and right arrow keys to adjust view."
              className="relative aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 select-none cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 focus-visible:ring-offset-2"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onKeyDown={handleKeyDown}
            >
              {/* After Image (Background) */}
              <img
                src={currentCase.afterImage}
                alt={`${currentCase.title} - Completed Clinical Outcome`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3.5 right-3.5 bg-medical-600 text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-xs">
                AFTER (Completed)
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={`${currentCase.title} - Initial Clinical State`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-3.5 left-3.5 bg-navy-900/85 text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border border-white/20">
                  BEFORE (Initial)
                </div>
              </div>

              {/* Divider Line & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-medical-500 shadow-xs pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-lg bg-medical-600 border-2 border-white shadow-md flex items-center justify-center text-white pointer-events-auto cursor-ew-resize">
                  <ChevronsLeftRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Case Description Footer */}
            <div className="mt-5 p-5 sm:p-6 rounded-xl bg-[#FAFCFB] border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900">
                    {currentCase.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {currentCase.summary} • Clinical lead: <strong className="text-navy-900 font-semibold">{currentCase.specialistName}</strong>
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-semibold text-medical-600 bg-medical-50 px-3.5 py-1.5 rounded-lg border border-medical-200/80 shrink-0 self-start sm:self-auto">
                <Activity className="h-3.5 w-3.5 text-medical-600" />
                <span>{currentCase.duration}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
