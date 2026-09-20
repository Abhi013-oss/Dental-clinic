import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'champagne' | 'obsidian' | 'outline' | 'glass' | 'teal';
}

function Badge({ className, variant = 'gold', ...props }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors';

  const variants = {
    gold: 'bg-[#E8F6F5] text-[#0E6668] border border-[#C3E8E6]',
    champagne: 'bg-[#FAF7F2] text-[#8C6D34] border border-[#E8DFC9]',
    obsidian: 'bg-[#0E3340] text-white border border-[#0E3340]',
    outline: 'border border-slate-200 text-[#17252B] bg-white',
    glass: 'bg-white/95 text-[#0E3340] border border-slate-200 shadow-xs',
    teal: 'bg-[#159A9C] text-white border border-[#159A9C]',
  };

  return <div className={cn(baseStyles, variants[variant], className)} {...props} />;
}

export { Badge };
