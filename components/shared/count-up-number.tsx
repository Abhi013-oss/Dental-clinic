'use client';

import * as React from 'react';

interface CountUpNumberProps {
  value: string; // e.g. "12,500+", "25+", "14", "99.8%"
  duration?: number;
}

export function CountUpNumber({ value, duration = 1.5 }: CountUpNumberProps) {
  // Initialize with actual value so SSR and initial render always display the authentic number
  const [displayValue, setDisplayValue] = React.useState(value);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    // Extract numerical part and suffix/prefix
    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const rawNumStr = match[1].replace(/,/g, '');
    const targetNum = parseFloat(rawNumStr);
    const suffix = match[2] || '';
    const hasComma = match[1].includes(',');
    const hasDecimal = match[1].includes('.');
    const decimalPlaces = hasDecimal ? match[1].split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = targetNum * easeOutProgress;

      let formattedNum = currentNum.toFixed(decimalPlaces);
      if (hasComma) {
        const parts = formattedNum.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNum = parts.join('.');
      }

      setDisplayValue(`${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
