import React, { useState, useEffect } from 'react';
import { Sparkles, Bell, X, RotateCcw } from 'lucide-react';

/**
 * Ultra-Smooth Temple Door Entrance (कपाट दर्शन)
 * Architecture inspired by ramnavmi.vercel.app:
 * - 100% Direct Reveal: Doors slide open directly over the real Home Page (Zero duplicate screen / No double effect).
 * - Smooth 2D hardware-accelerated translate3d with cubic-bezier(0.76, 0, 0.18, 1) for 60-120fps on mobile.
 * - Auto unmounts as soon as doors part.
 */
export default function TempleDoorEntrance({ isOpen = true, onClose }) {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      setDoorsOpen(false);
      return;
    }

    setVisible(true);
    setDoorsOpen(false);

    // Step 1: Doors start sliding open gracefully
    const openTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 350);

    // Step 2: Once doors are completely off-screen, unmount overlay cleanly
    const cleanupTimer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 1850);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(cleanupTimer);
    };
  }, [isOpen, onClose]);

  const handleSkip = () => {
    setDoorsOpen(true);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 400);
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 w-screen h-screen overflow-hidden pointer-events-none select-none"
      style={{ perspective: 'none' }}
    >
      {/* Top Floating Skip / Close Control */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50 pointer-events-auto">
        <button
          onClick={handleSkip}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-transform duration-200 hover:scale-105 cursor-pointer flex items-center gap-1.5"
        >
          <span>प्रवेश करें (Skip)</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Sacred Welcome Badge & Seal (Fades out smoothly when doors part) */}
      <div 
        className={`absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ease-out pointer-events-none ${
          doorsOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1d0406]/95 border-2 border-amber-400/80 shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.4)] max-w-sm sm:max-w-md w-full">
          {/* Sacred Aum Emblem */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-500 border-4 border-amber-200 shadow-[0_0_30px_rgba(245,158,11,0.8)] flex items-center justify-center mb-4">
            <span className="text-4xl sm:text-5xl font-extrabold text-[#2a0709] select-none">ॐ</span>
          </div>

          <p className="text-xs sm:text-sm text-amber-300 font-bold tracking-widest uppercase mb-1 font-poppins">
            श्री राम सेवा समिति • छतरपुर
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold gold-gradient-text font-rozha tracking-wide mb-1">
            ॥ जय श्री राम ॥
          </h1>
          <p className="text-[11px] sm:text-xs text-amber-200/80 font-poppins">
            भव्य श्री राम जन्मभूमि मंदिर • कपाट दर्शन
          </p>
        </div>
      </div>

      {/* =========================================================================
          LEFT TEMPLE DOOR PANEL
          Direct 2D hardware-accelerated translateX slide (Smooth 60-120fps)
          ========================================================================= */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[50.5%] bg-gradient-to-r from-[#210708] via-[#3a090b] to-[#1a0405] border-r-3 border-amber-400 shadow-[10px_0_35px_rgba(0,0,0,0.95)] overflow-hidden"
        style={{
          transform: doorsOpen ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)',
          transition: 'transform 1500ms cubic-bezier(0.76, 0, 0.18, 1)',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Carved Door Inner Frame */}
        <div className="absolute inset-3 sm:inset-6 border-2 sm:border-3 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/15">
          {/* Top Bells & Ornaments */}
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400/70 flex items-center justify-center text-amber-300 text-xs sm:text-sm font-bold shadow">
              卐
            </div>
            <Bell className="w-7 h-7 sm:w-9 sm:h-9 text-amber-400 filter drop-shadow animate-pulse" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400/70 flex items-center justify-center text-amber-300 text-xs sm:text-sm font-bold shadow">
              ॐ
            </div>
          </div>

          {/* Center Golden Medallion: Sacred Swastik */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center mb-2 sm:mb-3">
              <div className="w-full h-full rounded-full bg-[#1e0405] border-2 border-amber-400/70 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold gold-gradient-text select-none">
                  卐
                </span>
              </div>
            </div>
            <div className="text-xs sm:text-base font-bold text-amber-300 tracking-wider font-rozha">
              ॥ धर्मो रक्षति रक्षितः ॥
            </div>
          </div>

          {/* Bottom Studs & Heavy Brass Ring Handle */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-500/30">
            <span className="text-[10px] sm:text-xs text-amber-300 font-bold tracking-wider">श्री राम</span>
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-3 border-amber-400 bg-amber-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center text-amber-300 font-bold text-sm sm:text-base">
              ◯
            </div>
          </div>
        </div>

        {/* Golden Rim Light */}
        <div className="absolute inset-y-0 right-0 w-2.5 bg-gradient-to-l from-amber-400/90 to-transparent"></div>
      </div>

      {/* =========================================================================
          RIGHT TEMPLE DOOR PANEL
          Direct 2D hardware-accelerated translateX slide (Smooth 60-120fps)
          ========================================================================= */}
      <div
        className="absolute top-0 bottom-0 right-0 w-[50.5%] bg-gradient-to-l from-[#210708] via-[#3a090b] to-[#1a0405] border-l-3 border-amber-400 shadow-[-10px_0_35px_rgba(0,0,0,0.95)] overflow-hidden"
        style={{
          transform: doorsOpen ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)',
          transition: 'transform 1500ms cubic-bezier(0.76, 0, 0.18, 1)',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Carved Door Inner Frame */}
        <div className="absolute inset-3 sm:inset-6 border-2 sm:border-3 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/15">
          {/* Top Bells & Ornaments */}
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400/70 flex items-center justify-center text-amber-300 text-xs sm:text-sm font-bold shadow">
              ॐ
            </div>
            <Bell className="w-7 h-7 sm:w-9 sm:h-9 text-amber-400 filter drop-shadow animate-pulse" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400/70 flex items-center justify-center text-amber-300 text-xs sm:text-sm font-bold shadow">
              卐
            </div>
          </div>

          {/* Center Golden Medallion: Sacred Aum */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center justify-center mb-2 sm:mb-3">
              <div className="w-full h-full rounded-full bg-[#1e0405] border-2 border-amber-400/70 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold gold-gradient-text select-none">
                  ॐ
                </span>
              </div>
            </div>
            <div className="text-xs sm:text-base font-bold text-amber-300 tracking-wider font-rozha">
              ॥ सत्यमेव जयते ॥
            </div>
          </div>

          {/* Bottom Studs & Heavy Brass Ring Handle */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-500/30">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-3 border-amber-400 bg-amber-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center justify-center text-amber-300 font-bold text-sm sm:text-base">
              ◯
            </div>
            <span className="text-[10px] sm:text-xs text-amber-300 font-bold tracking-wider">जय श्री राम</span>
          </div>
        </div>

        {/* Golden Rim Light */}
        <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-amber-400/90 to-transparent"></div>
      </div>
    </div>
  );
}
