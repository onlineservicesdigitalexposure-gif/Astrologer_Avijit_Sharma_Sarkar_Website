import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MandalaBackground } from '@/components/ui/MandalaBackground';
import { slideInLeft, slideInRight } from '@/lib/animations';

export const HeroSection: React.FC = () => {
  // Shared Hero Image Card Block
  const heroImageCard = (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative Gold Glow Frame */}
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#F4B942] via-[#FFD166] to-[#F28C28] opacity-30 blur-md" />
      
      <div className="relative bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF7E6] rounded-2xl border-2 border-[#F4B942] p-5 sm:p-7 shadow-premium-card text-center space-y-4 sm:space-y-6">
        
        {/* Local Image Asset Container */}
        <div className="relative mx-auto w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] aspect-square rounded-2xl overflow-hidden border-4 border-[#F4B942] shadow-soft-red bg-[#8F1717]/10 p-1 bg-gradient-to-b from-[#8F1717] to-[#3B1712]">
          <img
            src="/image/Gallery/image1.jpeg"
            alt="Avijit Sharma Ssarrkar - Bagalamukhi Sadhak & KP Astrologer"
            loading="eager"
            fetchPriority="high"
            width="340"
            height="340"
            className="w-full h-full object-cover object-center rounded-xl hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#3B1712]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8F1717] text-[#FFD166] text-[10px] font-serif font-extrabold tracking-widest border border-[#F4B942] shadow-xs">
            <Sparkles className="w-3 h-3 text-[#FFD166]" />
            <span>KP ASTROLOGER</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8F1717]">
            {SITE_CONFIG.astrologer.name}
          </h3>
          <p className="text-[11px] sm:text-xs font-bold text-[#F28C28] uppercase tracking-wider font-serif">
            {SITE_CONFIG.astrologer.title}
          </p>
          <div className="flex items-center justify-center gap-1 text-[#F4B942] pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        {/* Confidentiality & Direct Contact Card */}
        <div className="space-y-2 text-xs text-[#3B1712] bg-[#FFFDF8] rounded-xl p-3.5 sm:p-4 border border-[#F4B942]/40 shadow-sm font-sans">
          <div className="flex items-center justify-center gap-2 text-[#8F1717] font-serif font-bold">
            <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
            <span>100% Confidential & Authentic Guidance</span>
          </div>
          <p className="text-[11px] text-[#3B1712]/80">
            Direct Phone: <strong>8981091491</strong> | Online Video & In-Person
          </p>
        </div>

      </div>
    </div>
  );

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] overflow-hidden pt-3 pb-12 sm:pt-12 sm:pb-16 lg:py-24 border-b border-[#F4B942]/30">
      {/* Background Mandala overlay */}
      <MandalaBackground opacity={0.30} />

      {/* Subtle Radial Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.22)_0,rgba(242,140,40,0.12)_50%,transparent_75%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Text Content & Mobile Image Order */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {/* 1. Top Badges & Astrologer Designation */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-serif font-extrabold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#8F1717] via-[#C9361A] to-[#8F1717] text-[#FFD166] border-2 border-[#F4B942] shadow-sm shadow-[#8F1717]/25 ring-2 ring-[#F4B942]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD166] animate-pulse" />
                <span>KP ASTROLOGER</span>
              </span>
              <Badge variant="crimson" className="text-xs sm:text-sm py-1.5 px-4 shadow-sm">
                Bagalamukhi Sadhak
              </Badge>
              <Badge variant="gold" className="text-xs sm:text-sm py-1.5 px-4 shadow-sm">
                Astro Spiritual Advisor
              </Badge>
            </div>

            {/* 2. Main Header Title */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-[#3B1712] leading-tight">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-lg sm:text-3xl font-serif text-[#8F1717] font-bold tracking-wide">
                {SITE_CONFIG.astrologer.name}
              </p>
            </div>

            {/* 3. Mobile-Only Hero Image Showcase (Shown immediately below Header Title) */}
            <div className="block lg:hidden py-2">
              {heroImageCard}
            </div>

            {/* 4. Supporting Message */}
            <p className="text-lg sm:text-2xl font-display italic text-[#F28C28] font-bold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "Divine Guidance for Clarity, Peace & a Better Tomorrow"
            </p>

            {/* 5. Description Paragraph */}
            <p className="text-sm sm:text-base text-[#3B1712]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Precision <strong>KP Astrology (Krishnamurti Padhdhati)</strong> stellar predictions, authentic Vedic horoscope analysis, consecrated gemstone recommendations, and sacred Bagalamukhi Tantric remedies tailored for your personal, career, and spiritual wellbeing.
            </p>

            {/* 6. Primary & Secondary Action CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  iconLeft={<Calendar className="w-5 h-5 text-[#FFD166]" />}
                >
                  Book a Consultation
                </Button>
              </Link>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="saffron"
                  size="lg"
                  fullWidth
                  iconLeft={<MessageCircle className="w-5 h-5 text-white" />}
                >
                  WhatsApp Now
                </Button>
              </a>

              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  iconLeft={<Phone className="w-5 h-5 text-[#8F1717]" />}
                >
                  Call: {SITE_CONFIG.contact.formattedPhone}
                </Button>
              </a>
            </div>

          </motion.div>

          {/* Desktop-Only Right Column: Hero Visual Showcase */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:col-span-5 justify-center"
          >
            {heroImageCard}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
