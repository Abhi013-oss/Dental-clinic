'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple luxury smooth spring curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
