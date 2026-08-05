import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'gold' | 'dark';
  glowOnHover?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = 'gold',
  glowOnHover = true,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    standard: 'bg-white border border-slate-200/90 shadow-sm',
    gold: 'bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-sm',
    dark: 'bg-navy-900 text-white border border-navy-800 shadow-xl',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 sm:p-8 transition-all duration-400 ease-out',
        variantStyles[variant],
        glowOnHover &&
          'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-medical-600/10 hover:border-medical-500/50 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
