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

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.65,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // During SSR / before hydration, render plain visible div so zero opacity 0 is in the HTML
  if (!hasMounted) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const getTransform = () => {
    if (inView) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 28px, 0)';
      case 'down':
        return 'translate3d(0, -28px, 0)';
      case 'left':
        return 'translate3d(28px, 0, 0)';
      case 'right':
        return 'translate3d(-28px, 0, 0)';
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
