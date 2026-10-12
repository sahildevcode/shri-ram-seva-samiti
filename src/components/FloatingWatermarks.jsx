import React, { useEffect, useState } from 'react';

/**
 * Floating Background Watermarks & Devotional Typography
 * Floats committee name and sacred slogans across background with gentle mouse parallax
 */
export default function FloatingWatermarks() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 40;
          const y = (e.clientY / window.innerHeight - 0.5) * 40;
          setOffset({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-40"
    >
      {/* Giant primary floating name across top-right to bottom-left */}
      <div
        className="absolute top-[8%] -right-[10%] text-[8vw] font-rozha tracking-wider font-extrabold whitespace-nowrap transition-transform duration-700 ease-out animate-drift"
        style={{
          transform: `translate3d(${-offset.x * 1.2}px, ${-offset.y * 1.2}px, 0) rotate(-6deg)`,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245, 158, 11, 0.12)',
          textShadow: '0 0 40px rgba(239, 68, 68, 0.08)'
        }}
      >
        श्री राम सेवा समिति • छतरपुर
      </div>

      {/* Secondary Motto floating across middle-left */}
      <div
        className="absolute top-[38%] -left-[5%] text-[6vw] font-yatra tracking-widest whitespace-nowrap transition-transform duration-500 ease-out animate-float-slow"
        style={{
          transform: `translate3d(${offset.x * 0.9}px, ${offset.y * 0.9}px, 0) rotate(4deg)`,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(239, 68, 68, 0.1)',
          textShadow: '0 0 35px rgba(245, 158, 11, 0.06)'
        }}
      >
        सेवा • संस्कार • समर्पण
      </div>

      {/* Divine Shloka watermark floating in lower area */}
      <div
        className="absolute top-[68%] -right-[5%] text-[7vw] font-tiro tracking-wide whitespace-nowrap transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${-offset.x * 0.8}px, ${-offset.y * 0.8}px, 0) rotate(-3deg)`,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(251, 191, 36, 0.09)'
        }}
      >
        जय श्री राम • धर्म ध्वज यात्रा
      </div>

      {/* Slogan at bottom */}
      <div
        className="absolute bottom-[4%] -left-[10%] text-[9vw] font-rozha tracking-widest whitespace-nowrap transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${offset.x * 1.1}px, ${offset.y * 1.1}px, 0) rotate(2deg)`,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(239, 68, 68, 0.08)'
        }}
      >
        सनातन संस्कृति • सामाजिक सेवा
      </div>

      {/* Subtle sacred Om symbol glowing in corner */}
      <div
        className="absolute top-[18%] left-[8%] text-[14vw] font-rozha text-amber-500/5 select-none animate-pulse-glow"
        style={{
          transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.5}px, 0)`
        }}
      >
        ॐ
      </div>
    </div>
  );
}
