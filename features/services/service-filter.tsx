'use client';

import * as React from 'react';
import Link from 'next/link';
import { servicesData } from '@/constants/services.data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, X, CheckCircle2, Stethoscope, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ServiceFilter() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const categoryOptions = [
    { label: 'All Procedures', value: 'All' },
    { label: 'Dental Implants', value: 'DENTAL IMPLANTS' },
    { label: 'Prosthodontics', value: 'PROSTHODONTICS' },
    { label: 'Orthodontics', value: 'ORTHODONTICS' },
    { label: 'Endodontics (RCT)', value: 'ENDODONTICS' },
    { label: 'Oral Surgery', value: 'ORAL & MAXILLOFACIAL SURGERY' },
    { label: 'Pediatric Dentistry', value: 'PEDIATRIC DENTISTRY' },
    { label: 'Gum Treatment', value: 'ADVANCED GUM TREATMENT' },
    { label: 'Oral Radiology', value: 'ORAL MEDICINE & RADIOLOGY' },
  ];

  const filteredServices = React.useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category.toUpperCase() === selectedCategory.toUpperCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        service.title.toLowerCase().includes(query) ||
        service.shortDescription.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.features.some((f) => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Controls Bar: Department Tabs & Search */}
      <div className="space-y-4">
        {/* Instant Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search procedure, condition, or keyword (e.g., Implants, Root Canal, Aligners)..."
            className="w-full h-11 pl-10 pr-10 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600/20 focus-visible:border-medical-600 shadow-xs transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
              aria-label="Clear Search Input"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Responsive Clinical Department Filter Tabs */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto no-scrollbar py-2 sm:flex-wrap sm:justify-center">
          {categoryOptions.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                type="button"
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer touch-manipulation select-none border',
                  isSelected
                    ? 'bg-medical-600 text-white border-medical-600 shadow-xs font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-navy-900'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Counter & Active Filter Reset Strip */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1 border-b border-slate-200/70 pb-3">
          <div>
            Showing <strong className="text-navy-900 font-bold">{filteredServices.length}</strong> of{' '}
            {servicesData.length} clinical procedures
            {selectedCategory !== 'All' && (
              <span className="ml-1 text-medical-700 font-semibold">
                in {categoryOptions.find((c) => c.value === selectedCategory)?.label}
              </span>
            )}
            {searchQuery && (
              <span className="ml-1 text-slate-700">
                matching &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center space-x-1 text-medical-600 hover:text-medical-700 font-semibold cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* 3-Column Clinical Procedure Card Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 group"
            >
              <div className="space-y-3.5">
                {/* Image Container with Department Tag */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-100 bg-slate-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 text-medical-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm border border-slate-200/70">
                    {service.category}
                  </div>
                </div>

                <div>
                  <h2 className="font-sans text-base sm:text-lg font-bold text-navy-900 group-hover:text-medical-600 transition-colors line-clamp-1">
                    {service.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Procedure Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 shrink-0 mt-0.5" />
                        <span className="truncate font-medium">{feat.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Protocol Link */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-end">
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-semibold text-xs h-9 px-3.5 rounded-lg border-slate-200 group-hover:border-medical-500 group-hover:text-medical-600 transition-colors"
                  >
                    <span>View Protocol</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-medical-600 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center bg-white rounded-xl border border-slate-200 p-8 space-y-4 max-w-lg mx-auto">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 mx-auto">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-navy-900">No matching clinical procedures found</h3>
            <p className="text-xs text-slate-500 mt-1">
              We couldn&apos;t find any procedure matching &ldquo;{searchQuery}&rdquo;. Try another term or reset your department filter.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="font-semibold text-xs h-9 rounded-lg"
          >
            <span>Reset Filters &amp; View All 31 Procedures</span>
          </Button>
        </div>
      )}
    </div>
  );
}
