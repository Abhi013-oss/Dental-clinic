'use client';

import * as React from 'react';
import Link from 'next/link';
import { servicesData } from '@/constants/services.data';
import { ServiceItem } from '@/types/service.types';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export function ServiceFilter() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = ['All', 'Cosmetic', 'Implantology', 'Orthodontics', 'Rehabilitation'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto p-1.5 rounded-full glass-panel-gold border border-gold-500/30">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-gold-gradient text-obsidian-900 shadow-md font-bold'
                : 'text-muted-foreground hover:text-foreground hover:bg-gold-500/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Services List */}
      <div className="space-y-8">
        {filteredServices.map((service, index) => (
          <GlassCard
            key={service.id}
            variant={index % 2 === 0 ? 'gold' : 'standard'}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Media Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gold-500/30">
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
                <h2 className="font-serif text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-light">
                  {service.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs">
                    <CheckCircle2 className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground font-semibold">{feature.title}</strong>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="h-4 w-4 text-gold-500" />
                    <span>{service.durationMinutes} Mins Session</span>
                  </div>
                  <div>
                    Starting at{' '}
                    <strong className="font-serif text-lg font-bold text-gold-600 dark:text-gold-400">
                      ${service.startingPrice.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <Link href={`/services/${service.slug}`}>
                  <Button variant="gold">
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
