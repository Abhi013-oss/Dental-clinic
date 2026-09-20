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
    <div className={cn('flex flex-col max-w-3xl space-y-3.5 mb-10 sm:mb-14', alignmentClasses[align], className)}>
      {badge && <Badge variant="gold">{badge}</Badge>}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E3340] leading-[1.18]">
        {title}{' '}
        {highlightTitle && <span className="text-[#159A9C] block sm:inline">{highlightTitle}</span>}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-[#64757A] leading-relaxed font-normal max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
