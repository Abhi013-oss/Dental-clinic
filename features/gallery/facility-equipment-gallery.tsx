'use client';

import * as React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface FacilityItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  aspect: string;
}

const facilityItems: FacilityItem[] = [
  {
    id: 'building',
    image: '/images/jawahar-dental-hospital-building.jpg',
    title: 'Hospital Facility & Main Clinical Centre',
    category: 'Clinical Facility · Kapurthala',
    description: 'Purpose-built dental hospital featuring multi-operatory treatment suites, dedicated sterilization stations, and patient consultation lounges.',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'operatory',
    image: '/equipment/dental-treatment-suite.png',
    title: 'Ergonomic Treatment Operatory Suite',
    category: 'Clinical Treatment Room',
    description: 'Fully digitized patient chair with computerized delivery system and sterile clinical workflow.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'scanner',
    image: '/equipment/primescan-3d-scanner.png',
    title: 'Primescan 3D Intraoral Digital Scanner',
    category: 'Digital Impression System',
    description: 'High-precision 3D digital impressions with 1,000,000+ data points per second for crowns and implants.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'portable-xray',
    image: '/equipment/portable-xray-system.png',
    title: 'High-Frequency Portable RVG X-Ray',
    category: 'Chairside Radiology',
    description: 'Low-radiation diagnostic radiography with instant sensor image capture for chairside evaluation.',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'autoclave',
    image: '/equipment/autoclave-sterilizer.png',
    title: 'Runyes 23L Class-B Medical Autoclave',
    category: 'Hospital-Grade Sterilization',
    description: 'Multi-cycle vacuum autoclave meeting rigorous European Class-B hospital cross-infection control standards.',
    aspect: 'aspect-[4/3]',
  },
];

export function FacilityEquipmentGallery() {
  const building = facilityItems[0];
  const equipment = facilityItems.slice(1);

  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-medical-600">
          Hospital Infrastructure &amp; Clinical Environment
        </span>
        <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">
          State-Of-The-Art Treatment Facilities
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Explore the authentic clinical rooms, digital impression systems, and infection-control infrastructure at Jawahar Dental Hospital.
        </p>
      </div>

      {/* Editorial Facility Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Featured Hospital Building Card (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-medical-500/40 transition-all p-5 space-y-4">
          <div className="relative aspect-[16/11] rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
            <img
              src={building.image}
              alt={building.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2.5 left-2.5 bg-navy-900/85 text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
              {building.category}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-lg font-bold text-navy-900">
                {building.title}
              </h3>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center">
                <ShieldCheck className="mr-1 h-3.5 w-3.5 text-emerald-600" /> Authentic Facility
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {building.description}
            </p>
          </div>
        </div>

        {/* 4 Equipment Cards (7 cols on lg, 2x2 grid) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-medical-500/40 hover:shadow-sm transition-all p-4 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-navy-900 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-slate-200/70 shadow-2xs">
                    {item.category}
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-navy-900 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center text-[10px] font-semibold text-medical-600">
                <Sparkles className="h-3 w-3 mr-1 text-medical-500" />
                Hospital Certified Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
