import React, { useEffect, useRef, useState } from 'react';

/**
 * Interactive Mouse Particle Trail & Divine Aura
 * Emits vibrant saffron, vermilion red, and gold particles as mouse moves
 * Highly optimized: Disables completely on mobile/touch to eliminate lag.
 * On desktop: Automatically sleeps when idle (0% CPU/GPU usage when mouse is not moving).
 */
export default function MouseTrailCanvas() {
  const canvasRef = useRef(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Completely disable on mobile/touch screens to prevent any lag
    const isTouchOrMobile = 
      typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    if (isTouchOrMobile) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
  }, []);

  useEffect(() => {
    if (!isSupported) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isRunning = false;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(239, 68, 68, ',   // Red
      'rgba(249, 115, 22, ',  // Orange/Saffron
      'rgba(245, 158, 11, ',  // Amber/Gold
      'rgba(251, 191, 36, ',  // Bright Gold
      'rgba(220, 38, 38, '    // Deep Vermilion
    ];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3 - 0.6;
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.decay = Math.random() * 0.025 + 0.02;
        this.sparkle = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95;
        this.alpha -= this.decay;
      }

      draw() {
        if (this.alpha <= 0 || this.size <= 0.2) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.alpha})`;
        ctx.fill();

        if (this.sparkle && this.alpha > 0.3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.8})`;
          ctx.fill();
        }
      }
    }

    const mousePos = { x: -100, y: -100, isMoving: false };
    let moveTimeout;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mousePos.isMoving && mousePos.x > 0 && mousePos.y > 0) {
        const radGrad = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, 60
        );
        radGrad.addColorStop(0, 'rgba(239, 68, 68, 0.1)');
        radGrad.addColorStop(0.6, 'rgba(245, 158, 11, 0.05)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
        }
      }

      // If no particles remain and mouse is not moving, stop RAF loop to save 100% CPU/battery!
      if (particles.length === 0 && !mousePos.isMoving) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isRunning = false;
        return;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    const startLoopIfNeeded = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      mousePos.isMoving = true;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        mousePos.isMoving = false;
      }, 100);

      // Spawn subtle burst of 2-3 particles on movement
      const count = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < count; i++) {
        if (particles.length < 80) {
          particles.push(new Particle(e.clientX, e.clientY));
        }
      }

      startLoopIfNeeded();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isSupported]);

  if (!isSupported) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
