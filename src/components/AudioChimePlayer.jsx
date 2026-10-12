import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, BellRing } from 'lucide-react';

/**
 * Web Audio API synthesizer for sacred temple bell sound and devotional ambiance.
 * Requires zero external audio files and works reliably offline and online.
 */
export default function AudioChimePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Synthesize a resonant sacred temple bell sound (घंटा नाद)
  const playTempleBell = (pitch = 440) => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const now = ctx.currentTime;
    const partials = [
      { freq: pitch * 0.5, gain: 0.25, decay: 4.5 },
      { freq: pitch * 1.0, gain: 0.5, decay: 4.0 },
      { freq: pitch * 1.5, gain: 0.3, decay: 3.2 },
      { freq: pitch * 2.0, gain: 0.2, decay: 2.5 },
      { freq: pitch * 2.76, gain: 0.15, decay: 1.8 },
      { freq: pitch * 4.07, gain: 0.08, decay: 1.2 },
    ];

    partials.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gain * 0.35, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  };

  const toggleSound = () => {
    initAudio();
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playTempleBell(480);
      // Gentle intermittent bell toll every 12 seconds
      intervalRef.current = setInterval(() => {
        const pitches = [432, 480, 528, 576];
        const nextPitch = pitches[Math.floor(Math.random() * pitches.length)];
        playTempleBell(nextPitch);
      }, 11000);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
          isPlaying
            ? 'bg-amber-600/30 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse'
            : 'bg-red-950/40 text-amber-200/80 border-amber-500/20 hover:border-amber-400/40 hover:text-amber-100'
        }`}
        title="दिव्य मंदिर घंटी ध्वनि शुरू/बंद करें"
      >
        {isPlaying ? (
          <>
            <BellRing className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span className="hidden sm:inline">दिव्य घंटा नाद (सक्रिय)</span>
            <Volume2 className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-amber-400/70" />
            <span className="hidden sm:inline">दिव्य ध्वनि सुनें</span>
          </>
        )}
      </button>

      {/* Manual Quick Bell Tap */}
      <button
        onClick={() => {
          initAudio();
          playTempleBell(528);
        }}
        className="p-1.5 rounded-full bg-red-900/40 hover:bg-amber-600/30 border border-amber-500/30 text-amber-300 hover:text-white transition-all transform hover:scale-110 active:scale-95"
        title="मंदिर की घंटी बजाएं"
      >
        <BellRing className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
