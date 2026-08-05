import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'obsidian' | 'outline' | 'glass';
}

function Badge({ className, variant = 'gold', ...props }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors';

  const variants = {
    gold: 'bg-medical-50 text-medical-700 border border-medical-200',
    obsidian: 'bg-navy-900 text-white',
    outline: 'border border-slate-200 text-slate-600 bg-white',
    glass: 'bg-white/90 text-navy-900 border border-slate-200 shadow-sm',
  };

  return <div className={cn(baseStyles, variants[variant], className)} {...props} />;
}

export { Badge };
