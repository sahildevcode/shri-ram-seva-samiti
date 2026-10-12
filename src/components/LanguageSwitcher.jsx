import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center p-0.5 rounded-full bg-red-950/80 border border-amber-500/40 shadow-inner">
      <button
        type="button"
        onClick={() => setLang('hi')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
          lang === 'hi'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
            : 'text-amber-200/80 hover:text-white'
        }`}
        title="हिंदी भाषा चुनें"
      >
        <span>हिंदी</span>
      </button>

      <button
        type="button"
        onClick={() => setLang('hinglish')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
          lang === 'hinglish'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
            : 'text-amber-200/80 hover:text-white'
        }`}
        title="Hinglish language select karein"
      >
        <span>Hinglish</span>
      </button>
    </div>
  );
}
