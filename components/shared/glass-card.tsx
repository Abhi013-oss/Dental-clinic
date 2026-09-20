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
    standard: 'bg-white border border-slate-200/90 shadow-xs',
    gold: 'bg-white border border-slate-200/90 shadow-xs',
    dark: 'bg-[#0E3340] text-white border border-slate-700/60 shadow-md',
  };

  return (
    <div
      className={cn(
        'relative rounded-xl p-6 sm:p-7 transition-all duration-200 ease-out',
        variantStyles[variant],
        glowOnHover && 'hover:border-[#159A9C]/40 hover:shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
