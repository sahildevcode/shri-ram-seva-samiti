import React, { useState, useEffect, useRef } from 'react';
import { 
  CalendarCheck, 
  CalendarClock, 
  MapPin, 
  Calendar as CalendarIcon, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Bell, 
  ChevronRight,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function EventsTwoColumns({ onOpenVolunteerModal }) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [remindedEvents, setRemindedEvents] = useState({});
  const { t, lang } = useLanguage();

  const handleReminder = (eventId) => {
    setRemindedEvents((prev) => ({ ...prev, [eventId]: true }));
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#ef4444', '#fbbf24']
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-poppins"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-amber-500/30 text-amber-300 text-xs mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.events.badge}</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text tracking-wide ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
          {t.events.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 mb-3"></div>
        <p className="text-amber-100/80 text-sm sm:text-base">
          {t.events.desc}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* COLUMN 1: Past Events */}
        <div
          ref={leftColRef}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#1c0404] via-[#170303] to-[#110202] border border-amber-500/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)] relative"
        >
          {/* Header of Column 1 */}
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-900/40 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow">
                <CalendarCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold text-white ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.events.pastCol.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  {t.events.pastCol.sub}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.events.pastCol.statusVerified}</span>
            </span>
          </div>

          {/* List of Past Events */}
          <div className="space-y-5">
            {t.events.pastList.map((event) => (
              <div
                key={event.id}
                className="group p-5 rounded-2xl bg-[#240606]/70 hover:bg-[#2b0808] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-medium text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {event.badge}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{event.status}</span>
                  </span>
                </div>

                <h4 className={`text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {event.title}
                </h4>

                <div className="mt-2 space-y-1 text-xs text-amber-200/80">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium text-amber-300">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-amber-100/75 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-3 pt-3 border-t border-amber-500/10 flex flex-wrap gap-2">
                  {event.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-amber-300/80 bg-red-950/60 px-2 py-0.5 rounded border border-amber-500/15"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Upcoming Events */}
        <div
          ref={rightColRef}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#220606] via-[#1a0404] to-[#120202] border border-amber-500/40 shadow-[0_15px_45px_rgba(245,158,11,0.15)] relative"
        >
          {/* Subtle Top Right Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header of Column 2 */}
          <div className="flex items-center justify-between pb-6 border-b border-amber-500/20 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/30 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow">
                <CalendarClock className="w-6 h-6 text-amber-300 animate-pulse" />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl font-bold text-white ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.events.upcomingCol.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/80">
                  {t.events.upcomingCol.sub}
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center gap-1 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.events.upcomingCol.statusInvite}</span>
            </span>
          </div>

          {/* List of Upcoming Events */}
          <div className="space-y-5">
            {t.events.upcomingList.map((event) => {
              const isReminded = remindedEvents[event.id];

              return (
                <div
                  key={event.id}
                  className={`group p-5 rounded-2xl transition-all duration-300 shadow-sm ${
                    event.isMain
                      ? 'bg-gradient-to-r from-red-950/90 via-[#2f0808] to-red-950/90 border-2 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                      : 'bg-[#260707]/70 hover:bg-[#300909] border border-amber-500/25 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-amber-300 bg-gradient-to-r from-red-900 to-amber-900 px-2.5 py-0.5 rounded-full border border-amber-400/40 shadow-xs">
                      🚩 {event.badge}
                    </span>
                    <span className="text-xs text-amber-300 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.status}</span>
                    </span>
                  </div>

                  <h4 className={`text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                    {event.title}
                  </h4>

                  <div className="mt-2 space-y-1 text-xs text-amber-200/90">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold text-amber-300">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {event.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-amber-200 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/20"
                        >
                          ★ {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleReminder(event.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                          isReminded
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-400/40 hover:text-white'
                        }`}
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>{isReminded ? t.events.remindedBtn : t.events.remindBtn}</span>
                      </button>

                      <button
                        onClick={onOpenVolunteerModal}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white transition shadow flex items-center gap-1"
                      >
                        <span>{t.events.joinBtn}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
