'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Activity, SlidersHorizontal } from 'lucide-react';
import { caseStudiesData } from '@/constants/reviews.data';

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
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

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Outcomes"
            title="Interactive Treatment Gallery"
            highlightTitle="Drag To Reveal Results."
            description="Observe the transformative precision of our master porcelain veneers and guided implant restorations."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl select-none cursor-ew-resize"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <img
                src={currentCase.afterImage}
                alt={`${currentCase.title} After`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-medical-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                AFTER (Completed)
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={`${currentCase.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-navy-900/80 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                  BEFORE
                </div>
              </div>

              {/* Drag Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-medical-600 shadow-[0_0_15px_rgba(2,132,199,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-medical-600 shadow-xl border-2 border-white flex items-center justify-center text-white">
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Case Description Info */}
            <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-sans text-xl font-bold text-navy-900">{currentCase.title}</h3>
                <p className="text-xs text-slate-600 mt-1">
                  {currentCase.summary} • Performed by <strong className="text-medical-600 font-bold">{currentCase.specialistName}</strong>
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-medical-600 bg-medical-50 px-4 py-2 rounded-full border border-medical-200 shrink-0">
                <Activity className="h-4 w-4" />
                <span>{currentCase.duration}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
