import React from 'react';
import { MapPin, Phone, Mail, Sparkles, Flame, QrCode, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { logoImg } from '../assets/images';

export default function FooterSection({ onOpenVolunteerModal, onOpenDonationModal }) {
  const { t, lang } = useLanguage();

  return (
    <footer className="relative bg-[#0d0202] border-t-2 border-amber-500/40 text-amber-100 font-poppins overflow-hidden z-10">
      {/* Decorative Shloka Top Bar */}
      <div className="bg-gradient-to-r from-red-950 via-[#3a0808] to-red-950 py-4 px-4 border-b border-amber-500/20 text-center">
        <p className={`text-sm sm:text-base md:text-lg gold-gradient-text tracking-wider ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
          {t.footer.shloka}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-red-600 to-amber-300 shadow">
                <img
                  src={logoImg}
                  alt="Shri Ram Seva Samiti Logo"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className={`text-xl font-bold text-white ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
                  {t.nav.brand}
                </h4>
                <p className="text-xs text-amber-400">{t.nav.city}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/75 leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="text-sm saffron-gradient-text font-bold">
              {t.footer.motto}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className={`text-lg font-bold text-amber-300 mb-4 flex items-center gap-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.footer.quickLinks}</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              {t.nav.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-300 transition-colors">
                    • {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Activities */}
          <div>
            <h5 className={`text-lg font-bold text-amber-300 mb-4 flex items-center gap-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{t.footer.activities}</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              {lang === 'hi' ? (
                <>
                  <li>• भव्य रामनवमी जन्मोत्सव शोभायात्रा</li>
                  <li>• नगर धर्म ध्वज यात्रा व संकीर्तन</li>
                  <li>• प्रातः प्रभात फेरी व सुंदरकांड पाठ</li>
                  <li>• अन्नक्षेत्र व महाप्रसाद भंडारा सेवा</li>
                  <li>• सामाजिक समरसता व रक्तदान शिविर</li>
                  <li>• सनातन संस्कृति व युवा संस्कार</li>
                </>
              ) : (
                <>
                  <li>• Grand Ram Navami Shobhayatra</li>
                  <li>• City Dharma Dhwaj Yatra & Sankirtan</li>
                  <li>• Morning Prabhat Pheri & Sunderkand Path</li>
                  <li>• Annakshetra & Mahaprasad Seva</li>
                  <li>• Social Harmony & Blood Donation Camps</li>
                  <li>• Sanatan Culture & Youth Sanskar</li>
                </>
              )}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h5 className={`text-lg font-bold text-amber-300 mb-4 flex items-center gap-2 ${lang === 'hi' ? 'font-rozha' : 'font-cinzel'}`}>
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{t.footer.contactTitle}</span>
            </h5>

            <div className="text-xs sm:text-sm text-amber-100/80 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.email}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={onOpenVolunteerModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white shadow transition transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{t.footer.volunteerBtn}</span>
              </button>

              {onOpenDonationModal && (
                <button
                  type="button"
                  onClick={onOpenDonationModal}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-red-950/80 hover:bg-red-900 border border-amber-500/50 hover:border-amber-400 text-amber-200 hover:text-white shadow transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <QrCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? '🚩 दान एवं सहयोग करें (Demo QR)' : '🚩 Donate & Contribute (Demo QR)'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {t.nav.brand}, {t.nav.city}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1 text-amber-400/80">
            <span>{t.footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
