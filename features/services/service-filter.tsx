'use client';

import * as React from 'react';
import Link from 'next/link';
import { servicesData } from '@/constants/services.data';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export function ServiceFilter() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = [
    'All',
    'DENTAL IMPLANTS',
    'PROSTHODONTICS',
    'ORTHODONTICS',
    'ENDODONTICS',
    'ORAL & MAXILLOFACIAL SURGERY',
    'PEDIATRIC DENTISTRY',
    'ADVANCED GUM TREATMENT',
    'ORAL MEDICINE & RADIOLOGY',
  ];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Responsive Category Tabs Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center p-2 rounded-2xl sm:rounded-full bg-slate-100/90 border border-slate-200 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer touch-manipulation select-none ${
              selectedCategory === cat
                ? 'bg-medical-600 text-white shadow-md shadow-medical-600/20'
                : 'text-slate-600 hover:text-navy-900 hover:bg-white/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Services List */}
      <div className="space-y-8">
        {filteredServices.map((service) => (
          <GlassCard
            key={service.id}
            variant="standard"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 shadow-md p-6 sm:p-8"
          >
            {/* Media Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="gold">{service.category}</Badge>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900">{service.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {service.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs">
                    <CheckCircle2 className="h-4 w-4 text-medical-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-900 font-bold">{feature.title}</strong>
                      <p className="text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-6 text-xs text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="h-4 w-4 text-medical-600" />
                    <span>{service.durationMinutes} Mins Session</span>
                  </div>
                </div>

                <Link href={`/services/${service.slug}`} className="w-full sm:w-auto">
                  <Button variant="gold" size="sm" className="w-full sm:w-auto font-bold text-xs h-11 px-6 touch-manipulation cursor-pointer">
                    <span>View Procedure Details</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
