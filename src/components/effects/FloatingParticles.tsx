import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Ambient floating particle network drawn on a canvas. Particles drift upward,
 * fade in and out, and connect with faint lines when close — a subtle "neural"
 * backdrop for the footer. Sizes itself to its parent element. Pauses while
 * off-screen or the tab is hidden. Ported from the reference portfolio.
 */

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeDir: number;
  color: string; // "r, g, b" triplet
}

const NUM_PARTICLES = 40;

// Brand palette: violet, pink, orange
const COLORS = ['139, 92, 246', '236, 72, 153', '249, 115, 22'];

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.5 + 0.5,
    speedY: -(Math.random() * 0.3 + 0.1),
    speedX: (Math.random() - 0.5) * 0.2,
    opacity: Math.random() * 0.4 + 0.1,
    fadeDir: Math.random() > 0.5 ? 1 : -1,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    particlesRef.current = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particlesRef.current.push(createParticle(canvas.width, canvas.height));
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    handleResize();

    let isVisible = !document.hidden;
    let isInViewport = true;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        p.y += p.speedY;
        p.x += p.speedX;

        p.opacity += p.fadeDir * 0.003;
        if (p.opacity >= 0.5) p.fadeDir = -1;
        if (p.opacity <= 0.05) p.fadeDir = 1;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 0.15})`;
          ctx.fill();
        }
      }

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const lineOpacity = (1 - dist / 100) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.color}, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (animationIdRef.current !== null) return;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };

    const sync = () => {
      if (isVisible && isInViewport) start();
      else stop();
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      sync();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          isInViewport = e.isIntersecting;
        }
        sync();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    start();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      io.disconnect();
      stop();
    };
  }, [handleResize]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      width={800}
      height={400}
    />
  );
};

// Memoized: takes no props, so it never re-renders once mounted.
export default React.memo(FloatingParticles);
