import * as React from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

/**
 * Vibrant animated aurora background for the hero — large blurred gradient orbs
 * (violet / pink / orange) that slowly drift and gently shift with the pointer
 * for depth. Reuses the framer-motion pointer-spring parallax technique from
 * the reference portfolio's starfield, but rendered as brand-colored orbs to
 * match a Digital Marketing identity. Pauses drift/parallax while off-screen
 * or when the user prefers reduced motion.
 */

interface Orb {
  color: string;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  /** drift path: [x keyframes], [y keyframes] in px */
  path: { x: number[]; y: number[] };
}

const ORBS: Orb[] = [
  {
    color: 'rgba(139, 92, 246, 0.6)',
    size: 480,
    top: '-8%',
    left: '-6%',
    duration: 12,
    delay: 0,
    path: { x: [0, 160, 60, 0], y: [0, 80, 180, 0] },
  },
  {
    color: 'rgba(236, 72, 153, 0.5)',
    size: 420,
    top: '6%',
    left: '58%',
    duration: 14,
    delay: 1.5,
    path: { x: [0, -140, -40, 0], y: [0, 120, 40, 0] },
  },
  {
    color: 'rgba(249, 115, 22, 0.4)',
    size: 360,
    top: '55%',
    left: '16%',
    duration: 11,
    delay: 3,
    path: { x: [0, 120, 200, 0], y: [0, -90, -30, 0] },
  },
  {
    color: 'rgba(167, 139, 250, 0.35)',
    size: 300,
    top: '48%',
    left: '70%',
    duration: 16,
    delay: 4.5,
    path: { x: [0, -110, 40, 0], y: [0, -70, -140, 0] },
  },
];

const AuroraBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(true);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 40, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 40, damping: 20 });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting);
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion || !inView) return;
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      offsetX.set((e.clientX - centerX) * 0.02);
      offsetY.set((e.clientY - centerY) * 0.02);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [offsetX, offsetY, prefersReducedMotion, inView]);

  const active = !prefersReducedMotion && inView;

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background:
          'radial-gradient(ellipse at 50% 0%, #17102a 0%, #0b0812 60%)',
      }}
    >
      {ORBS.map((orb, i) => (
        // Outer layer: pointer parallax (springX/springY).
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            x: springX,
            y: springY,
            willChange: 'transform',
          }}
        >
          {/* Inner layer: continuous drift + pulse (kept separate so it does
              not fight the parallax transform on the outer layer). */}
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: 'blur(40px)',
              willChange: 'transform',
            }}
            animate={
              active
                ? {
                    x: orb.path.x,
                    y: orb.path.y,
                    scale: [1, 1.25, 0.95, 1],
                    opacity: [0.8, 1, 0.75, 0.8],
                  }
                : undefined
            }
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Subtle grain/vignette to keep text legible */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(11, 8, 18, 0.6) 100%)',
        }}
      />
    </div>
  );
};

export default AuroraBackground;
