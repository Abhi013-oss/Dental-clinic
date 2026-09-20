'use client';

import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ChevronLeft, ChevronRight, Maximize2, X, ShieldCheck, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface XRayItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

const xrayData: XRayItem[] = [
  {
    id: 'xray-1',
    image: '/xrays/dental-xray-1.png',
    title: 'Complex Root Stump & RVG X-Ray Diagnostic',
    category: 'RVG 2000 Digital X-Ray',
    description: 'High-resolution RVG 2000 digital radiograph showing precise root stump pathology and tooth anatomy before surgical extraction.',
  },
  {
    id: 'xray-2',
    image: '/xrays/dental-xray-2.jpg',
    title: 'Single Seating Surgical Extraction & Radiograph',
    category: 'Oral Surgery & Diagnostics',
    description: 'Direct clinical RVG radiograph paired with extracted root stump specimen showing complete, atraumatic removal.',
  },
  {
    id: 'xray-3',
    image: '/xrays/dental-xray-3.jpg',
    title: 'Precision Maxillofacial RVG Diagnostic Scan',
    category: 'Endodontic & Surgical X-Ray',
    description: 'Detailed RVG digital radiograph showing molar root structure and adjacent bone density for accurate surgical planning.',
  },
];

export function XRayGallerySection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = React.useState<XRayItem | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleContainerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleScroll('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleScroll('right');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white text-navy-900 relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionHeader
              badge="Clinical Radiology &amp; RVG Diagnostics"
              title="Dental X-Rays &amp; Surgical Case Records"
              highlightTitle="100% Real Clinical Diagnostics."
              description="Authentic RVG 2000 digital radiographs and surgical root stump extractions performed at Jawahar Dental Hospital."
              align="left"
            />
          </ScrollReveal>

          {/* Navigation Scroll Buttons */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex items-center space-x-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer focus-visible:ring-2 focus-visible:ring-medical-600"
                aria-label="Scroll X-Rays Left"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-10 w-10 rounded-lg border-slate-200 bg-white text-navy-900 shadow-xs hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-colors touch-manipulation cursor-pointer focus-visible:ring-2 focus-visible:ring-medical-600"
                aria-label="Scroll X-Rays Right"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable X-Ray Slider */}
        <div
          ref={scrollRef}
          onKeyDown={handleContainerKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Clinical X-Ray gallery carousel. Use left and right arrow keys to navigate."
          className="flex space-x-5 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 focus-visible:ring-offset-2 rounded-xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {xrayData.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="rounded-xl bg-white border border-slate-200/90 p-4 shadow-xs hover:-translate-y-1.5 hover:border-[#159A9C]/50 hover:shadow-md transition-all duration-300 ease-out space-y-3.5">
                {/* Image Container with Dark Radiographic Mount */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Modality Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-medical-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs flex items-center space-x-1.5">
                    <Activity className="h-3 w-3 text-sky-200" />
                    <span>{item.category}</span>
                  </div>

                  {/* Enlarge Button Indicator */}
                  <div className="absolute bottom-2.5 right-2.5 h-8 w-8 rounded-lg bg-black/75 border border-white/30 text-white flex items-center justify-center backdrop-blur-xs group-hover:bg-medical-600 group-hover:border-medical-500 transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-sans text-base font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-medical-600">
                  <span className="flex items-center">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                    Verified Diagnostic Record
                  </span>
                  <span className="text-slate-500 group-hover:text-medical-600 transition-colors">Tap to Inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="xray-modal-title"
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl p-5 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] text-medical-600 font-bold uppercase tracking-wider">{selectedImage.category}</span>
                <h3 id="xray-modal-title" className="text-lg sm:text-xl font-bold text-navy-900 mt-0.5">{selectedImage.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-navy-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full max-h-[65vh] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-3.5 rounded-lg bg-[#FAFCFB] border border-slate-200/80">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
