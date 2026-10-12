import React from 'react';
import { MapPin, Phone, Mail, Heart, Sparkles, Flame, Shield } from 'lucide-react';

export default function FooterSection({ onOpenVolunteerModal }) {
  return (
    <footer className="relative bg-[#0d0202] border-t-2 border-amber-500/40 text-amber-100 font-tiro overflow-hidden z-10">
      {/* Decorative Shloka Top Bar */}
      <div className="bg-gradient-to-r from-red-950 via-[#3a0808] to-red-950 py-4 px-4 border-b border-amber-500/20 text-center">
        <p className="font-rozha text-sm sm:text-base md:text-lg gold-gradient-text tracking-wider">
          ॥ मंगल भवन अमंगल हारी • द्रबहु सुदसरथ अजर बिहारी ॥
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-red-600 to-amber-300 shadow">
                <img
                  src="/assets/logo.jpg"
                  alt="श्री राम सेवा समिति छतरपुर लोगो"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-rozha text-xl font-bold text-white">
                  श्री राम सेवा समिति
                </h4>
                <p className="text-xs text-amber-400">छतरपुर (मध्य प्रदेश)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/75 leading-relaxed">
              भगवान श्रीराम के पावन आदर्शों, सनातन संस्कृति और सामाजिक समरसता के संवर्धन हेतु छतरपुर नगर में निरंतर सेवारत धार्मिक व सामाजिक समिति।
            </p>

            <div className="font-yatra text-sm saffron-gradient-text font-bold">
              सेवा • संस्कार • समर्पण
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="font-rozha text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>मुख्य अनुभाग</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  • संस्था का परिचय एवं उद्देश्य
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-amber-300 transition-colors">
                  • चार प्रमुख आधारभूत स्तंभ
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-300 transition-colors">
                  • पिछले व आगामी कार्यक्रम विवरण
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-amber-300 transition-colors">
                  • इतिहास एवं गतिविधि संदर्भ
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  • फोटो एवं वीडियो गैलरी
                </a>
              </li>
              <li>
                <a href="#records" className="hover:text-amber-300 transition-colors">
                  • अभिलेख व सत्यापन बिंदु
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Activities */}
          <div>
            <h5 className="font-rozha text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>प्रमुख गतिविधियाँ</span>
            </h5>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>• भव्य रामनवमी जन्मोत्सव शोभायात्रा</li>
              <li>• नगर धर्म ध्वज यात्रा व संकीर्तन</li>
              <li>• श्रावण मास विशाल कांवड़ यात्रा</li>
              <li>• अन्नक्षेत्र व महाप्रसाद भंडारा सेवा</li>
              <li>• सामाजिक समरसता व रक्तदान शिविर</li>
              <li>• सनातन संस्कृति व युवा संस्कार</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h5 className="font-rozha text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>संपर्क एवं स्थान</span>
            </h5>

            <div className="text-xs sm:text-sm text-amber-100/80 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  श्री राम सेवा समिति, छतरपुर, मध्य प्रदेश, भारत - 471001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>संपर्क: +91 94251 XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ईमेल: info@shriramsevasamiti-chhatarpur.org</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-red-600 text-stone-950 hover:text-white shadow transition transform hover:-translate-y-0.5"
              >
                स्वयंसेवक के रूप में जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} श्री राम सेवा समिति, छतरपुर (मध्य प्रदेश)। सर्वाधिकार सुरक्षित।
          </div>
          <div className="flex items-center gap-1 text-amber-400/80">
            <span>सनातन संस्कृति की सेवा में समर्पित</span>
            <span>🚩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
