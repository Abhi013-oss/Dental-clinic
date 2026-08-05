import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightTitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl space-y-4 mb-12 sm:mb-16', alignmentClasses[align], className)}>
      {badge && <Badge variant="gold">{badge}</Badge>}

      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
        {title}{' '}
        {highlightTitle && <span className="text-medical-600 block sm:inline">{highlightTitle}</span>}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
