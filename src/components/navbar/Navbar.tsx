import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollY > 25;

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#6E1010] text-[#FFD166] text-xs py-2 px-4 border-b border-[#F4B942]/30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166] animate-pulse" />
              Shri Avijit Sharma Ssarrkar — Bagalamukhi Sadhak & KP Astrologer
            </span>
            <span className="hidden md:inline text-[#F4B942]/50">|</span>
            <span className="hidden md:inline text-[#FFFDF8]/85 font-mono text-[11px]">
              {SITE_CONFIG.contact.consultationHours}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD166] rounded px-1"
              aria-label={`Call office at ${SITE_CONFIG.contact.formattedPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD166]" />
              <span>Call: {SITE_CONFIG.contact.formattedPhone}</span>
            </a>
            
            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 px-2.5 py-0.5 rounded-full border border-[#25D366]/30 transition-colors"
              aria-label="Direct WhatsApp Consultation"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Responsive Navbar */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-[#FFFDF8]/95 backdrop-blur-md shadow-premium-card border-[#F4B942]/40 py-2.5"
            : "bg-[#FFF7E6] border-[#F4B942]/25 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] rounded-xl p-1"
            aria-label="R.A. Divine Astrology Home"
          >
            {/* Official Astrologer Logo Asset - Bigger & Bold */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 group-hover:scale-108 transition-transform duration-300">
              <img
                src="/image/Logo/Astrologer_Logo.png"
                alt="R.A. Divine Astrology Official Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_14px_rgba(244,185,66,0.65)]"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider text-[#8F1717] group-hover:text-[#C9361A] transition-colors leading-tight">
                {SITE_CONFIG.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="hidden sm:block text-[10px] sm:text-xs font-bold text-[#F28C28] uppercase tracking-widest font-serif">
                  {SITE_CONFIG.astrologer.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-[#8F1717] text-[#FFD166] text-[9px] font-serif font-extrabold tracking-wider border border-[#F4B942]/60 shadow-xs">
                  KP ASTROLOGER
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative py-1 font-serif text-sm font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B942] rounded px-1.5",
                    isActive
                      ? "text-[#8F1717]"
                      : "text-[#3B1712]/85 hover:text-[#8F1717]"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#F4B942] via-[#FFD166] to-[#F4B942] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${SITE_CONFIG.contact.phone}`}>
              <Button
                variant="secondary"
                size="sm"
                iconLeft={<Phone className="w-3.5 h-3.5 text-[#8F1717]" />}
              >
                Call Now
              </Button>
            </a>

            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="saffron"
                size="sm"
                iconLeft={<MessageCircle className="w-3.5 h-3.5 text-white" />}
              >
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="sm:inline-flex">
              <Button variant="secondary" size="sm" className="px-3 py-1.5 text-xs">
                <Phone className="w-3.5 h-3.5 text-[#8F1717] mr-1" />
                Call
              </Button>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#8F1717] hover:bg-[#F4B942]/15 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Animated Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="lg:hidden fixed inset-0 z-50 flex flex-col">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#3B1712]/60 backdrop-blur-sm"
            />

            {/* Mobile Drawer Content */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full bg-[#FFFDF8] border-b-2 border-[#F4B942] shadow-soft-red p-6 space-y-6 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between border-b border-[#F4B942]/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                    <img
                      src="/image/Logo/Astrologer_Logo.png"
                      alt="R.A. Divine Astrology Official Emblem"
                      className="w-full h-full object-contain filter drop-shadow-[0_3px_10px_rgba(244,185,66,0.5)]"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-[#8F1717] block leading-tight">
                      {SITE_CONFIG.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-bold text-[#F28C28] uppercase tracking-wider font-serif">
                        {SITE_CONFIG.astrologer.name}
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.2 rounded bg-[#8F1717] text-[#FFD166] text-[8px] font-serif font-extrabold tracking-wider border border-[#F4B942]/60">
                        KP ASTROLOGER
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#8F1717] hover:bg-[#F4B942]/15 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="space-y-2">
                {SITE_CONFIG.navigation.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-serif font-bold transition-all border",
                        isActive
                          ? "bg-[#8F1717] text-[#FFD166] border-[#F4B942] shadow-sm"
                          : "text-[#3B1712] hover:bg-[#FFF7E6] border-transparent"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-[#FFD166]" />}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Action CTAs */}
              <div className="pt-4 border-t border-[#F4B942]/30 grid grid-cols-2 gap-3">
                <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                  <Button
                    variant="secondary"
                    size="md"
                    fullWidth
                    iconLeft={<Phone className="w-4 h-4 text-[#8F1717]" />}
                  >
                    Call Now
                  </Button>
                </a>

                <a
                  href={SITE_CONFIG.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="saffron"
                    size="md"
                    fullWidth
                    iconLeft={<MessageCircle className="w-4 h-4 text-white" />}
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
