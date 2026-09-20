'use client';

import * as React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  stagger?: boolean;
}

/**
 * ScrollReveal: Renders content fully visible with zero opacity hiding.
 * Guarantees 100% immediate visibility on initial SSR, hydration, mobile, and desktop.
 */
export function ScrollReveal({
  children,
  className = '',
}: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
