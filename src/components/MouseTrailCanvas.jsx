import React, { useEffect, useRef } from 'react';

/**
 * Interactive Mouse Particle Trail & Divine Aura
 * Emits vibrant saffron, vermilion red, and gold particles as mouse moves
 */
export default function MouseTrailCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle colors: Deep vermilion red, vibrant saffron/kesariya, and divine radiant gold
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
        this.size = Math.random() * 6 + 2.5;
        this.speedX = (Math.random() - 0.5) * 3.5;
        this.speedY = (Math.random() - 0.5) * 3.5 - 0.8; // subtle upward drift
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.sparkle = Math.random() > 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.96;
        this.alpha -= this.decay;
      }

      draw() {
        if (this.alpha <= 0 || this.size <= 0.2) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${this.colorBase}0.8)`;
        ctx.fill();

        // Extra twinkle effect for divine aura
        if (this.sparkle && this.alpha > 0.3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.9})`;
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const mousePos = { x: -100, y: -100, isMoving: false };
    let moveTimeout;

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      mousePos.isMoving = true;

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        mousePos.isMoving = false;
      }, 150);

      // Spawn burst of 3-5 particles on every mouse movement
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        if (particles.length < 180) {
          particles.push(new Particle(e.clientX, e.clientY));
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Continuous loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // If mouse is present, draw a gentle divine glow under cursor
      if (mousePos.x > 0 && mousePos.y > 0) {
        ctx.save();
        const radGrad = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, 75
        );
        radGrad.addColorStop(0, 'rgba(239, 68, 68, 0.12)');
        radGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 75, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update & render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 transition-opacity"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
