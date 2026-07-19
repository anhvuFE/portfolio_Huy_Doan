import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Parsed {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

/**
 * Parse a metric string like "3.5x", "10K+", "+200%", "500+" into its
 * animatable numeric part plus surrounding prefix/suffix (units, signs).
 */
function parseValue(value: string): Parsed | null {
  const match = value.match(/^(\D*)(\d*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  return {
    prefix,
    target: parseFloat(num),
    suffix,
    decimals: num.includes('.') ? 1 : 0,
  };
}

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Counts a numeric metric up from zero to its target when scrolled into view,
 * preserving any prefix/suffix (e.g. "+", "K", "x", "%"). Falls back to the
 * raw string if the value has no parseable number. Uses easeOutCubic and runs
 * once.
 */
const CountUp = ({ value, duration = 1.8, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed ? parsed.target.toFixed(parsed.decimals) : value
  );

  useEffect(() => {
    if (!inView || !parsed) return;
    setDisplay('0');
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay((parsed.target * eased).toFixed(parsed.decimals));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(parsed.target.toFixed(parsed.decimals));
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, duration]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
};

export default CountUp;
