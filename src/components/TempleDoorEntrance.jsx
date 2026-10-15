import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Sun, Bell, X, RotateCcw } from 'lucide-react';
import { ramMandirImg, ramWalkingSideProfileImg } from '../assets/images';

export default function TempleDoorEntrance({ isOpen = true, onClose, autoCloseDelay = 1400, isModalMode = false }) {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showDarshan, setShowDarshan] = useState(false);
  const [visible, setVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [useVideo, setUseVideo] = useState(false); // Default to false: prevents 404 video error and mid-animation re-render lag
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      setIsClosing(false);
      setDoorsOpen(false);
      setShowDarshan(false);
      return;
    }

    setVisible(true);
    setIsClosing(false);
    setDoorsOpen(false);
    setShowDarshan(false);

    // Step 1: Doors start swinging open quickly
    const doorTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 200);

    // Step 2: Ram Mandir visual shines through as doors part
    const darshanTimer = setTimeout(() => {
      setShowDarshan(true);
      if (useVideo && videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 350);

    // Step 3: Direct smooth transition into Home Screen as soon as doors open
    let autoCloseTimer;
    if (autoCloseDelay > 0 && !isModalMode) {
      autoCloseTimer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);
    }

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(darshanTimer);
      if (autoCloseTimer) clearTimeout(autoCloseTimer);
    };
  }, [isOpen, autoCloseDelay, isModalMode]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setVisible(false);
      setIsClosing(false);
      if (onClose) onClose();
    }, 550);
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    setIsClosing(false);
    setDoorsOpen(false);
    setShowDarshan(false);
    setTimeout(() => setDoorsOpen(true), 200);
    setTimeout(() => {
      setShowDarshan(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 350);
    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 w-screen h-screen overflow-hidden bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ perspective: '1800px' }}
    >
      {/* Top Floating Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-40 flex items-center gap-2.5">
        <button
          onClick={handleReplay}
          className="px-3.5 py-1.5 rounded-full bg-red-950/85 hover:bg-red-900 border border-amber-400/50 text-amber-200 text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
          title="कपाट दर्शन पुनः देखें"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">पुनः कपाट दर्शन</span>
        </button>

        <button
          onClick={handleClose}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 hover:text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-1.5 backdrop-blur-md"
        >
          <span>प्रवेश करें (Skip)</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Top Sacred Header Banner */}
      <div className="absolute top-6 inset-x-0 text-center z-30 pointer-events-none px-4">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-red-950/85 border border-amber-400/60 text-amber-300 text-xs sm:text-sm font-bold tracking-widest shadow-2xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>॥ श्री राम जन्मभूमि मंदिर • दिव्य कपाट दर्शन ॥</span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      {/* --- LAYER 1: Full-Screen AI Video / Divine Darshan (Option 2) --- */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-[#100202]">
        {useVideo ? (
          <video
            ref={videoRef}
            src="/ram_darshan.mp4"
            autoPlay
            loop
            muted
            playsInline
            onError={() => setUseVideo(false)}
            className={`w-full h-full object-cover filter transition-all duration-[2000ms] ease-out ${
              showDarshan 
                ? 'scale-100 opacity-100 brightness-105' 
                : 'scale-95 opacity-0 brightness-75'
            }`}
          />
        ) : (
          <img
            src={ramWalkingSideProfileImg}
            alt="Lord Ram Walking Side Profile - Ayodhya Ram Mandir"
            className={`w-full h-full object-cover filter transition-all duration-[2400ms] ease-out ${
              showDarshan 
                ? 'opacity-100 brightness-105 contrast-105 animate-tracking-shot' 
                : 'opacity-0 brightness-75 scale-95'
            }`}
            decoding="async"
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          />
        )}

        {/* Soft Golden Sunrise Mist & Light Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#100202] via-transparent to-amber-500/20 pointer-events-none transition-opacity duration-[2000ms] ease-out ${showDarshan ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* --- LAYER 1C: Bottom Full-Width Divine Greeting Banner --- */}
      <div className={`absolute bottom-6 sm:bottom-10 inset-x-4 sm:inset-x-12 z-25 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950/95 via-[#3d0808]/95 to-red-950/95 border-2 border-amber-400/70 backdrop-blur-md text-center shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${showDarshan ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold gold-gradient-text font-rozha tracking-wide drop-shadow-md">
          ॥ मर्यादा पुरुषोत्तम भगवान श्री रामचंद्र की जय ॥
        </h2>
        <p className="text-xs sm:text-base text-amber-200/95 font-semibold font-poppins mt-1">
          भव्य श्री राम मंदिर, अयोध्या धाम • श्री राम सेवा समिति, छतरपुर (म.प्र.)
        </p>
      </div>

      {/* --- LAYER 2: 100% Screen Width and Height Golden Temple Doors --- */}
      <div className="absolute inset-0 z-20 pointer-events-none flex w-full h-full" style={{ perspective: '1800px' }}>
        
        {/* LEFT TEMPLE DOOR (Spans Left 50% of the Screen Edge-to-Edge) */}
        <div
          className="relative w-1/2 h-full bg-gradient-to-r from-[#240505] via-[#380707] to-[#1e0303] border-r-4 border-amber-400/80 shadow-[15px_0_40px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            transformOrigin: 'left center',
            transform: doorsOpen ? 'translateZ(0) rotateY(-95deg)' : 'translateZ(0) rotateY(0deg)',
            transition: 'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Ornate Gold Woodwork Panels */}
          <div className="absolute inset-4 sm:inset-8 border-2 sm:border-4 border-amber-400/60 rounded-2xl p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/15">
            
            {/* Top Bells & Ornaments */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400/70 flex items-center justify-center text-amber-300 text-sm font-bold shadow">
                卐
              </div>
              <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 filter drop-shadow animate-pulse" />
              <div className="w-8 h-8 rounded-full border-2 border-amber-400/70 flex items-center justify-center text-amber-300 text-sm font-bold shadow">
                ॐ
              </div>
            </div>

            {/* Center Golden Relief: Sacred Swastik */}
            <div className="my-auto flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_35px_rgba(245,158,11,0.6)] flex items-center justify-center mb-3">
                <div className="w-full h-full rounded-full bg-[#200404] border-2 border-amber-400/80 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold gold-gradient-text select-none">
                    卐
                  </span>
                </div>
              </div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-amber-300 tracking-widest font-rozha">
                ॥ धर्मो रक्षति रक्षितः ॥
              </div>
            </div>

            {/* Bottom Studs & Heavy Brass Ring Handle */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-amber-500/40">
              <span className="text-xs sm:text-sm text-amber-300 font-bold tracking-wider">श्री राम</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-amber-400 bg-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center justify-center text-amber-300 font-bold text-lg">
                ◯
              </div>
            </div>
          </div>

          {/* Golden Rim Light */}
          <div className="absolute inset-y-0 right-1 w-3 bg-gradient-to-l from-amber-400 to-transparent"></div>
        </div>

        {/* RIGHT TEMPLE DOOR (Spans Right 50% of the Screen Edge-to-Edge) */}
        <div
          className="relative w-1/2 h-full bg-gradient-to-l from-[#240505] via-[#380707] to-[#1e0303] border-l-4 border-amber-400/80 shadow-[-15px_0_40px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            transformOrigin: 'right center',
            transform: doorsOpen ? 'translateZ(0) rotateY(95deg)' : 'translateZ(0) rotateY(0deg)',
            transition: 'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Ornate Gold Woodwork Panels */}
          <div className="absolute inset-4 sm:inset-8 border-2 sm:border-4 border-amber-400/60 rounded-2xl p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/15">
            
            {/* Top Bells & Ornaments */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400/70 flex items-center justify-center text-amber-300 text-sm font-bold shadow">
                ॐ
              </div>
              <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 filter drop-shadow animate-pulse" />
              <div className="w-8 h-8 rounded-full border-2 border-amber-400/70 flex items-center justify-center text-amber-300 text-sm font-bold shadow">
                卐
              </div>
            </div>

            {/* Center Golden Relief: Sacred Aum */}
            <div className="my-auto flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-[0_0_35px_rgba(245,158,11,0.6)] flex items-center justify-center mb-3">
                <div className="w-full h-full rounded-full bg-[#200404] border-2 border-amber-400/80 flex items-center justify-center">
                  <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold gold-gradient-text select-none">
                    ॐ
                  </span>
                </div>
              </div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-amber-300 tracking-widest font-rozha">
                ॥ सत्यमेव जयते ॥
              </div>
            </div>

            {/* Bottom Studs & Heavy Brass Ring Handle */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-amber-500/40">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-amber-400 bg-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center justify-center text-amber-300 font-bold text-lg">
                ◯
              </div>
              <span className="text-xs sm:text-sm text-amber-300 font-bold tracking-wider">जय श्री राम</span>
            </div>
          </div>

          {/* Golden Rim Light */}
          <div className="absolute inset-y-0 left-1 w-3 bg-gradient-to-r from-amber-400 to-transparent"></div>
        </div>
      </div>

      {/* --- LAYER 3: Glowing Center Latch (Dissolves smoothly when doors open) --- */}
      <div 
        className={`absolute inset-0 z-30 pointer-events-none flex items-center justify-center transition-all duration-700 ease-out transform ${
          doorsOpen ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
        }`}
      >
        {/* Full-Height Center Seam Golden Light Beam */}
        <div className="h-full w-2 bg-gradient-to-b from-amber-400 via-amber-200 to-amber-500 shadow-[0_0_30px_#f59e0b] animate-pulse"></div>

        {/* Golden Center Sanctum Lock / Medallion */}
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-500 border-4 border-amber-100 shadow-[0_0_40px_rgba(245,158,11,1)] flex items-center justify-center animate-pulse">
          <span className="text-4xl sm:text-5xl font-extrabold text-red-950 select-none">ॐ</span>
        </div>
      </div>
    </div>
  );
}
