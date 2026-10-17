import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'hi' ? 'hinglish' : 'hi');
  };

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#2a0606] to-[#1a0303] hover:from-red-900 hover:to-[#2e0505] border border-amber-500/40 hover:border-amber-300 text-amber-200 hover:text-white text-xs font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)] transition-all duration-200 cursor-pointer shrink-0"
      title={lang === 'hi' ? 'Hinglish (English) mein badlein' : 'हिंदी भाषा में बदलें'}
      aria-label="Language Switcher"
    >
      <Languages className="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <span className="font-semibold">{lang === 'hi' ? 'हिंदी' : 'Eng'}</span>
    </button>
  );
}
