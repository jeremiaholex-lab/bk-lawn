import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  triggerOnView?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  triggerOnView = true,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const hasTriggeredRef = useRef<boolean>(false);
  const prevValueRef = useRef<number>(0);

  useEffect(() => {
    // If triggerOnView is true and it hasn't entered view yet, hold
    if (triggerOnView && !isInView && !hasTriggeredRef.current) {
      return;
    }
    hasTriggeredRef.current = true;

    const startVal = prevValueRef.current;
    const controls = animate(startVal, value, {
      duration: duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
      onComplete: () => {
        prevValueRef.current = value;
      },
    });

    return () => controls.stop();
  }, [value, isInView, triggerOnView, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
