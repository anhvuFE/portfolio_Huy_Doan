import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode[];
  /** Seconds for one full loop. */
  speed?: number;
  /** Scroll direction. */
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite horizontal marquee. The children are rendered twice back-to-back and
 * the track is translated by -50%, so the loop is seamless. Pauses on hover and
 * fades out at both edges. Respects reduced motion via the global CSS rule.
 */
const Marquee = ({ children, speed = 30, reverse = false, className }: MarqueeProps) => {
  const items = [...children, ...children];

  return (
    <div className={`marquee-mask group relative overflow-hidden ${className ?? ''}`}>
      <div
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="flex-shrink-0 px-6">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
