import React, { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../content';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('site_lang') || 'hi';
  });

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'hi' ? 'hinglish' : 'hi'));
  };

  const t = content[lang] || content.hi;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
