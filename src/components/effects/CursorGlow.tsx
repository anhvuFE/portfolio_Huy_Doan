import React, { useEffect, useRef } from 'react';

/**
 * A soft violet/pink glow that trails the cursor with easing. Rendered as a single
 * fixed div driven by requestAnimationFrame; the loop stops once the glow has
 * settled to avoid burning frames while the pointer is still. Hidden on touch
 * devices (no persistent pointer). Ported from the reference portfolio.
 */
const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId: number | null = null;
    let pendingFrame = false;

    const tick = () => {
      pendingFrame = false;
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * 0.08;
      currentY += dy * 0.08;

      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;

      // Stop animating once we're effectively at rest.
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        frameId = null;
        return;
      }
      frameId = requestAnimationFrame(tick);
    };

    const requestTick = () => {
      if (pendingFrame || frameId !== null) return;
      pendingFrame = true;
      frameId = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      requestTick();
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[400px] w-[400px] rounded-full md:block"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.10) 0%, rgba(236, 72, 153, 0.05) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
};

export default CursorGlow;
