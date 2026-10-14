import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Sparkles, 
  Calendar, 
  HeartHandshake, 
  CheckCircle2, 
  Flag, 
  Building2, 
  Sun, 
  Crown,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { logoImg, dharmikImg, galleryImg, hamseJudeinImg } from '../assets/images';

export default function QuickEventModal({ isOpen, item, onClose, onOpenVolunteerModal }) {
  const { lang } = useLanguage();

  const itemConfig = {
    dharmadhwaj: {
      icon: Flag,
      img: galleryImg,
      color: 'from-amber-500 to-red-600',
      badge: lang === 'hi' ? 'मुख्य शोभायात्रा' : 'Main Shobhayatra',
    },
    ramalaya: {
      icon: Building2,
      img: hamseJudeinImg,
      color: 'from-orange-500 to-amber-600',
      badge: lang === 'hi' ? 'केंद्रीय संकुल' : 'Central Office',
    },
    prabhatpheri: {
      icon: Sun,
      img: dharmikImg,
      color: 'from-amber-400 to-yellow-600',
      badge: lang === 'hi' ? 'प्रातः जागरण' : 'Morning Awakening',
    },
    ramdarbar: {
      icon: Crown,
      img: logoImg,
      color: 'from-red-600 to-amber-500',
      badge: lang === 'hi' ? 'दिव्य दर्शन' : 'Divine Darshan',
    },
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const cfg = itemConfig[item.id] || {};
  const IconComp = cfg.icon || Sparkles;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-hidden font-poppins"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] sm:max-h-[86vh] flex flex-col bg-gradient-to-br from-[#270505] via-[#1a0404] to-[#100202] border-2 border-amber-500/60 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.35)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Header */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#220404]/95 backdrop-blur border-b border-amber-500/30 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr ${cfg.color || 'from-amber-400 to-red-600'} shrink-0 flex items-center justify-center shadow`}>
              <div className="w-full h-full rounded-full bg-[#1b0303] flex items-center justify-center">
                <IconComp className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400/90 uppercase tracking-wide block truncate">
                {cfg.badge || (lang === 'hi' ? 'श्री राम सेवा समिति, छतरपुर' : 'Shri Ram Seva Samiti, Chhatarpur')}
              </span>
              <h3 className={`text-lg sm:text-xl font-bold gold-gradient-text truncate ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                {item.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-red-950/80 hover:bg-red-800 text-amber-300 hover:text-white border border-amber-500/40 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 sm:py-5 space-y-4 text-amber-100">
          {/* Tag & Subtitle Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{item.tag || item.subtitle}</span>
            </span>
            <span className="text-[11px] sm:text-xs text-amber-400/70 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>छतरपुर (मध्य प्रदेश)</span>
            </span>
          </div>

          {/* Photo Banner */}
          {cfg.img && (
            <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-amber-500/30 shadow-md">
              <img
                src={cfg.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                <span className="text-xs sm:text-sm text-amber-200 font-semibold drop-shadow flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{item.subtitle}</span>
                </span>
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div className="bg-red-950/40 p-4 rounded-xl border border-amber-500/20">
            <p className="text-xs sm:text-sm text-amber-100/95 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Highlights */}
          {item.highlights && (
            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'hi' 
                    ? 'प्रमुख विशेषताएं एवं मुख्य बिंदु:' 
                    : 'Pramukh Viseshtayein & Key Highlights:'}
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-950/60 border border-amber-500/15 text-xs text-amber-100/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Modal Bottom Footer */}
        <div className="sticky bottom-0 z-20 px-5 sm:px-6 py-3 bg-[#1b0303]/95 backdrop-blur border-t border-amber-500/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-stone-900/90 hover:bg-stone-800 text-amber-300/80 hover:text-white border border-amber-500/25 transition cursor-pointer"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>

          <div className="flex items-center gap-2.5">
            <a
              href="#events"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-red-950 hover:bg-red-900 border border-amber-500/40 text-amber-200 hover:text-white transition flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'कार्यक्रम देखें' : 'View Events'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenVolunteerModal();
              }}
              className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] transition flex items-center gap-1.5 cursor-pointer"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'स्वयंसेवक बनें' : 'Join as Volunteer'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
