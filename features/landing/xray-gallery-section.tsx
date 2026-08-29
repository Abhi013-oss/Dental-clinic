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

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="container relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionHeader
              badge="Clinical Radiology & RVG Diagnostics"
              title="Dental X-Rays & Surgical Case Records"
              highlightTitle="100% Real Clinical Diagnostics."
              description="Authentic RVG 2000 digital radiographs and surgical root stump extractions performed at Jawahar Dental Hospital."
              align="left"
            />
          </ScrollReveal>

          {/* Navigation Scroll Buttons */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center space-x-3 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('left')}
                className="h-11 w-11 rounded-full border-slate-700 bg-slate-800/80 text-white hover:bg-medical-600 hover:border-medical-500 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll X-Rays Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll('right')}
                className="h-11 w-11 rounded-full border-slate-700 bg-slate-800/80 text-white hover:bg-medical-600 hover:border-medical-500 transition-all touch-manipulation cursor-pointer"
                aria-label="Scroll X-Rays Right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontally Scrollable X-Ray Slider */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {xrayData.map((item, index) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[320px] sm:w-[380px] md:w-[420px] group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="rounded-2xl bg-slate-800/90 border border-slate-700/80 p-4 transition-all duration-300 hover:border-medical-500/70 hover:shadow-2xl hover:shadow-medical-500/10 space-y-4">
                {/* Image Container with Zoom Overlay */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black border border-slate-700/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Watermark Tag */}
                  <div className="absolute top-3 left-3 bg-medical-600/90 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-md shadow-md flex items-center space-x-1.5">
                    <Activity className="h-3 w-3 text-sky-300" />
                    <span>{item.category}</span>
                  </div>

                  {/* Enlarge Button Indicator */}
                  <div className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-medical-600 group-hover:border-medical-500 transition-all">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-sans text-base font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-bold text-sky-400">
                  <span className="flex items-center">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                    Verified Clinical X-Ray
                  </span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">Tap to Enlarge →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-medical-400 font-bold uppercase tracking-wider">{selectedImage.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full max-h-[70vh] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-slate-800">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
