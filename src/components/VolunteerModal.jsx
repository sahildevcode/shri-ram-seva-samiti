import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, HeartHandshake, CheckCircle2, Send, MapPin, Phone, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function VolunteerModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    mandal: '',
    serviceType: 'dharmik',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll and listen for Escape key
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#dc2626', '#fbbf24', '#ffffff'],
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      area: '',
      mandal: '',
      serviceType: 'dharmik',
      message: '',
    });
    onClose();
  };

  const modalElement = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-hidden font-poppins"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-lg w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-gradient-to-br from-[#270505] via-[#1a0404] to-[#100202] border-2 border-amber-500/60 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.4)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. STICKY MODAL HEADER - ALWAYS 100% VISIBLE WITH CUT / CLOSE BUTTON */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#220404]/98 backdrop-blur border-b border-amber-500/30 flex items-center justify-between gap-3 shrink-0 shadow-sm">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
              <HeartHandshake className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400/90 uppercase tracking-wide block truncate">
                {lang === 'hi' ? 'श्री राम सेवा समिति • सेवा संकल्प' : 'Shri Ram Seva Samiti • Join Us'}
              </span>
              <h3 className={`text-base sm:text-lg font-bold gold-gradient-text truncate ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                {t.volunteer.title}
              </h3>
            </div>
          </div>

          {/* Prominent Red-Gold Cut (Close) Button */}
          <button
            onClick={onClose}
            className="group relative p-2 sm:p-2.5 rounded-full bg-red-950/90 hover:bg-red-700 text-amber-300 hover:text-white border border-amber-500/50 hover:border-amber-400 shadow-md transition-all duration-200 cursor-pointer shrink-0"
            aria-label="Close"
            title="बंद करें (Close)"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" />
          </button>
        </div>

        {/* 2. SCROLLABLE FORM / SUCCESS BODY */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            {/* Scrollable inputs container */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 sm:py-5 space-y-4">
              <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed pb-1 border-b border-amber-500/15">
                {t.volunteer.sub}
              </p>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {t.volunteer.nameLabel} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="text"
                    required
                    placeholder={t.volunteer.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {t.volunteer.phoneLabel} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="tel"
                    required
                    placeholder={t.volunteer.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {t.volunteer.addressLabel} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="text"
                    required
                    placeholder={t.volunteer.addressPlaceholder}
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                  />
                </div>
              </div>

              {/* Mandal Selection */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {lang === 'hi' ? 'आपका मंडल (वार्ड / क्षेत्र)' : 'Your Mandal (Ward / Area)'}
                </label>
                <select
                  value={formData.mandal}
                  onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                >
                  <option value="" className="bg-[#1a0404]">
                    {lang === 'hi' ? '-- अपना मंडल चुनें (ऐच्छिक) --' : '-- Select Your Mandal (Optional) --'}
                  </option>
                  {(t.mandals?.list || []).map((m) => (
                    <option key={m.id} value={m.name} className="bg-[#1a0404]">
                      {m.name} ({m.coordinator})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {t.volunteer.serviceLabel}
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                >
                  {t.volunteer.serviceOptions.map((opt) => (
                    <option key={opt.val} value={opt.val} className="bg-[#1a0404]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  {t.volunteer.msgLabel}
                </label>
                <textarea
                  rows="2"
                  placeholder={t.volunteer.msgPlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-hidden text-white text-sm"
                ></textarea>
              </div>
            </div>

            {/* 3. STICKY MODAL FOOTER WITH SUBMIT BUTTON */}
            <div className="sticky bottom-0 z-20 px-5 sm:px-6 py-3 bg-[#1d0303]/98 backdrop-blur border-t border-amber-500/30 flex items-center justify-between gap-3 shrink-0 shadow-lg">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-amber-300/80 hover:text-white bg-red-950/60 hover:bg-red-900/80 border border-amber-500/30 transition cursor-pointer"
              >
                {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.volunteer.submitBtn}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-400/40">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className={`text-2xl sm:text-3xl font-bold text-amber-300 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              {t.volunteer.successTitle}
            </h3>

            <p className="text-base text-amber-100/90 leading-relaxed">
              {t.volunteer.successMsg} <strong className="text-amber-300">{formData.name}</strong>
            </p>

            <p className="text-xs text-amber-200/70">
              {t.volunteer.successSub}
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white transition shadow cursor-pointer"
              >
                {t.volunteer.doneBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}
