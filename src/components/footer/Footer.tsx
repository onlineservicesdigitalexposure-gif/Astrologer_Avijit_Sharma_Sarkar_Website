import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { LotusDivider, ZodiacRingAccents } from '@/components/ui/DecorativePatterns';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#8F1717] via-[#5C0D0D] to-[#3B0808] text-[#FFFDF8] pt-16 pb-8 border-t-4 border-[#F4B942] relative overflow-hidden">
      {/* Background mandala decoration */}
      <div className="absolute -top-12 -right-12 w-96 h-96 opacity-25 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD166] fill-current">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute top-1/2 -left-20 w-80 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#F28C28] fill-current">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <polygon points="100,20 120,80 180,80 130,120 150,180 100,140 50,180 70,120 20,80 80,80" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#F4B942]/30">
          
          {/* Column 1: Brand & Short Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
                <img
                  src="/image/Logo/Astrologer_Logo.png"
                  alt="R.A. Divine Astrology Official Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,209,102,0.7)]"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#FFD166] tracking-wide">
                  R.A. DIVINE ASTROLOGY
                </h3>
                <p className="text-xs text-[#F28C28] uppercase tracking-wider font-semibold">
                  {SITE_CONFIG.astrologer.name}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FFF7E6]/90 leading-relaxed font-sans pt-1">
              Traditional astrology and spiritual guidance with a personalized approach.
            </p>

            <p className="text-xs text-[#F4B942]/90 italic">
              {SITE_CONFIG.astrologer.title}
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <Link to="/contact">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full sm:w-auto shadow-md hover:shadow-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFD166] tracking-wider uppercase border-b border-[#F4B942]/30 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-[#FFF7E6]/85 hover:text-[#FFD166] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] group-hover:bg-[#FFD166] group-hover:scale-125 transition-all"></span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFD166] tracking-wider uppercase border-b border-[#F4B942]/30 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-[#FFF7E6]/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4B942]/15 text-[#FFD166] flex items-center justify-center shrink-0 border border-[#F4B942]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-[#FFD166] transition-colors font-medium"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4B942]/15 text-[#FFD166] flex items-center justify-center shrink-0 border border-[#F4B942]/30">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-[#FFD166] transition-colors break-all"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4B942]/15 text-[#FFD166] flex items-center justify-center shrink-0 mt-0.5 border border-[#F4B942]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed text-[#FFF7E6]/85">
                  <p className="font-semibold text-[#FFD166]">Sanctuary Address:</p>
                  <p>52 Raja Rammohan Roy Sarani,</p>
                  <p>Serampore, Hooghly,</p>
                  <p>West Bengal - 712203</p>
                  <p className="text-[#F28C28] text-[11px] mt-0.5">({SITE_CONFIG.contact.landmark})</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social Links & Quick Connect */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFD166] tracking-wider uppercase border-b border-[#F4B942]/30 pb-2 inline-block">
              Connect With Us
            </h4>
            <p className="text-xs text-[#FFF7E6]/80 leading-relaxed">
              Reach out across our social media platforms or contact Guruji directly via WhatsApp or Call.
            </p>
            
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#F4B942]/15 hover:bg-[#F4B942] text-[#FFD166] hover:text-[#3B1712] transition-colors border border-[#F4B942]/30 text-xs font-semibold"
                aria-label="Call Avijit Sharma Sarkar"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors border border-[#25D366]/40 text-xs font-semibold"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#60A5FA] hover:text-white transition-colors border border-[#1877F2]/40 text-xs font-semibold"
                aria-label="Facebook Page"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#E4405F]/20 hover:bg-[#E4405F] text-[#F472B6] hover:text-white transition-colors border border-[#E4405F]/40 text-xs font-semibold"
                aria-label="Instagram Profile"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Decorative Ornamental Divider */}
        <ZodiacRingAccents className="my-6" />
        <LotusDivider className="my-4" />

        {/* Disclaimer Section */}
        <div className="bg-[#4D0B0B]/70 rounded-xl p-4 border border-[#F4B942]/20 my-6 text-center">
          <p className="text-xs text-[#FFF7E6]/75 leading-relaxed italic max-w-4xl mx-auto">
            "Astrology and spiritual guidance are provided for personal reflection and guidance. They should not be considered a substitute for professional medical, legal or financial advice."
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF7E6]/70 pt-2 border-t border-[#F4B942]/20">
          <p className="font-medium text-center sm:text-left">
            © 2026 R.A. Divine Astrology. Designed & Developed by 
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>.

          </p>
          <div className="flex items-center gap-3 text-[11px] text-[#F4B942]/90">
            <span>Bagalamukhi Sadhak</span>
            <span>•</span>
            <span>Vedic Jyotish</span>
            <span>•</span>
            <span>Spiritual Guidance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

