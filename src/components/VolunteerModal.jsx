import React, { useState } from 'react';
import { X, HeartHandshake, CheckCircle2, Send, MapPin, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    serviceType: 'dharmik',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      serviceType: 'dharmik',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto font-poppins"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-gradient-to-br from-[#240606] via-[#1a0404] to-[#120202] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.3)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-red-950/80 hover:bg-red-800 text-amber-300 hover:text-white border border-amber-500/40 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3 border border-amber-500/30">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
                Humse Judein / Volunteer Banein
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
                Shri Ram Seva Samiti, Chhatarpur • Sanatan Dharma & Samaj Seva
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Aapka Poora Naam *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="text"
                    required
                    placeholder="Jaise: Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="tel"
                    required
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Ward / Mohalla / Address (Chhatarpur) *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-amber-400/60" />
                  <input
                    type="text"
                    required
                    placeholder="Jaise: Chhatrasal Chowk, Civil Lines, Chhatarpur"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Seva Ka Area Choose Karein
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white text-sm"
                >
                  <option value="dharmik" className="bg-[#1a0404]">
                    Dharmik Management & Shobhayatra Management
                  </option>
                  <option value="prasad" className="bg-[#1a0404]">
                    Annakshetra & Mahaprasad Seva
                  </option>
                  <option value="media" className="bg-[#1a0404]">
                    Social Media & Event Coverage
                  </option>
                  <option value="chikitsa" className="bg-[#1a0404]">
                    Water & First-Aid Medical Support
                  </option>
                  <option value="other" className="bg-[#1a0404]">
                    General Volunteer (Sabhi Karyo Mein)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  Koi Message ya Suggestion (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Apna message yahan likhein..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-amber-500/30 focus:border-amber-400 focus:outline-none text-white text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 text-stone-950 hover:text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] transition duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Registration Submit Karein</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-400/40">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-300">
              || Jai Shri Ram ||
            </h3>

            <p className="text-base text-amber-100/90 leading-relaxed">
              Thank you <strong className="text-amber-300">{formData.name}</strong> ji! Aapka volunteer registration successfully submit ho gaya hai.
            </p>

            <p className="text-xs text-amber-200/70">
              Shri Ram Seva Samiti ke members upcoming events ke coordination ke liye aapse jald hi contact karenge.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white transition shadow"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
