import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, QrCode, Copy, Check, Heart, Building2, Smartphone, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function DonationModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const d = t.donation;

  const [selectedAmount, setSelectedAmount] = useState(501);
  const [customAmount, setCustomAmount] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  const upiId = d.upiId || 'shriramsevasamiti@upi';

  // Lock body scroll and handle Escape key
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

  // Generate QR Code dynamically based on active amount and UPI string
  useEffect(() => {
    if (!isOpen) return;

    const upiUri = activeAmount > 0
      ? `upi://pay?pa=${upiId}&pn=Shri%20Ram%20Seva%20Samiti&am=${activeAmount}&cu=INR&tn=Shri%20Ram%20Seva%20Samiti%20Chhatarpur`
      : `upi://pay?pa=${upiId}&pn=Shri%20Ram%20Seva%20Samiti&cu=INR&tn=Shri%20Ram%20Seva%20Samiti%20Chhatarpur`;

    QRCode.toDataURL(upiUri, {
      width: 320,
      margin: 1.5,
      color: {
        dark: '#1c0303',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR generation error:', err));
  }, [isOpen, activeAmount, upiId]);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSelectAmount = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.65 },
      colors: ['#f59e0b', '#fbbf24', '#dc2626'],
    });
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmount(val);
  };

  if (!isOpen) return null;

  const upiDeepLink = activeAmount > 0
    ? `upi://pay?pa=${upiId}&pn=Shri%20Ram%20Seva%20Samiti&am=${activeAmount}&cu=INR&tn=Shri%20Ram%20Seva%20Samiti%20Chhatarpur`
    : `upi://pay?pa=${upiId}&pn=Shri%20Ram%20Seva%20Samiti&cu=INR&tn=Shri%20Ram%20Seva%20Samiti%20Chhatarpur`;

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
        {/* 1. STICKY MODAL HEADER */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#220404]/98 backdrop-blur border-b border-amber-500/30 flex items-center justify-between gap-3 shrink-0 shadow-sm">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.4)] font-bold text-base">
              ॐ
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400/90 uppercase tracking-wide block truncate">
                {d.badge}
              </span>
              <h3 className={`text-base sm:text-lg font-bold gold-gradient-text truncate ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                {d.modalTitle}
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="group relative p-2 sm:p-2.5 rounded-full bg-red-950/90 hover:bg-red-700 text-amber-300 hover:text-white border border-amber-500/50 hover:border-amber-400 shadow-md transition-all duration-200 cursor-pointer shrink-0"
            aria-label="Close"
            title={d.closeBtn}
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" />
          </button>
        </div>

        {/* 2. SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 sm:py-5 space-y-4">
          <p className="text-xs sm:text-sm text-amber-200/85 leading-relaxed">
            {d.subtitle}
          </p>

          {/* Suggested Contribution Amounts */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{d.suggestedTitle}</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {d.suggestedAmounts.map((amt) => {
                const isSelected = !customAmount && selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleSelectAmount(amt)}
                    className={`py-2 px-1 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)] scale-105'
                        : 'bg-red-950/40 text-amber-100 hover:text-white hover:bg-red-900/50 border-amber-500/30'
                    }`}
                  >
                    <span>₹{amt}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            <div className="pt-1">
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder={d.customPlaceholder}
                className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-amber-500/30 text-amber-100 placeholder-amber-400/40 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
            </div>
          </div>

          {/* QR Code Presentation Box */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#220505] to-[#120202] border-2 border-amber-500/50 p-4 sm:p-5 flex flex-col items-center text-center shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            {/* Top QR Header */}
            <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-bold mb-1">
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>{d.scanTitle}</span>
            </div>
            <p className="text-[11px] text-amber-300/70 mb-3">
              {d.scanSubtitle}
            </p>

            {/* QR Code Container with ॐ Center Emblem */}
            <div className="relative p-2.5 bg-white rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.5)] border-2 border-amber-400">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="UPI QR Code"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain block rounded-lg"
                />
              ) : (
                <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center text-stone-900">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                </div>
              )}

              {/* Central Sacred ॐ Emblem Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#991b1b] to-[#dc2626] border-2 border-amber-300 flex items-center justify-center shadow-lg pointer-events-none">
                <span className="text-amber-200 font-bold text-base sm:text-lg">ॐ</span>
              </div>
            </div>

            {/* Active Amount Badge */}
            {activeAmount > 0 && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold">
                <span>सहयोग राशि:</span>
                <span className="text-amber-200 font-extrabold text-sm">₹{activeAmount}</span>
              </div>
            )}

            {/* Mobile Direct Pay Button */}
            <a
              href={upiDeepLink}
              className="mt-3 sm:hidden w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/40 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>सीधे UPI ऐप खोलें (Pay via UPI)</span>
            </a>

            {/* Copyable UPI ID Strip */}
            <div className="mt-3.5 w-full flex items-center justify-between gap-2 p-2.5 rounded-xl bg-black/60 border border-amber-500/30">
              <div className="text-left min-w-0 pl-1">
                <div className="text-[10px] text-amber-400/80 font-medium">{d.upiIdLabel}</div>
                <div className="text-xs sm:text-sm font-mono text-amber-200 font-bold truncate">
                  {upiId}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyUpi}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">{d.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{d.copyBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Toggleable Bank Account Details */}
          <div className="rounded-xl border border-amber-500/30 bg-black/40 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-amber-300 hover:bg-red-950/30 transition cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{d.bankDetailsTitle}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${
                  showBankDetails ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showBankDetails && (
              <div className="px-4 pb-3.5 pt-1 space-y-1.5 text-xs text-amber-200/90 border-t border-amber-500/20">
                <div className="flex justify-between py-1 border-b border-amber-500/10">
                  <span className="text-amber-400/80">खाता नाम (Account Name):</span>
                  <span className="font-semibold text-white">{d.accountName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-amber-500/10">
                  <span className="text-amber-400/80">बैंक (Bank):</span>
                  <span className="font-semibold text-white">{d.bankName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-amber-500/10">
                  <span className="text-amber-400/80">खाता संख्या (A/C No):</span>
                  <span className="font-mono font-semibold text-amber-300">{d.accountNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-amber-500/10">
                  <span className="text-amber-400/80">IFSC कोड:</span>
                  <span className="font-mono font-semibold text-amber-300">{d.ifsc}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-amber-400/80">शाखा (Branch):</span>
                  <span className="font-semibold text-white">{d.branch}</span>
                </div>
              </div>
            )}
          </div>

          {/* Respectful Note */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200/80 leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p>{d.note}</p>
              <p className="mt-1 font-semibold text-amber-300/90">{d.taxNote}</p>
            </div>
          </div>
        </div>

        {/* 3. STICKY MODAL FOOTER */}
        <div className="px-5 sm:px-6 py-3 bg-[#1c0303] border-t border-amber-500/30 flex items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-amber-300/80 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>जय श्री राम • सेवा ही संकल्प</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-red-950 hover:bg-red-900 border border-amber-500/40 text-amber-200 transition cursor-pointer"
          >
            {d.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}
