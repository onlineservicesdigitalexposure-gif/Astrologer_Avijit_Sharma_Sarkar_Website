import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Moon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ZodiacRingAccents, LotusDivider } from '@/components/ui/DecorativePatterns';
import { slideInLeft, slideInRight } from '@/lib/animations';

export const AstrologyExperienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] relative overflow-hidden border-b border-[#F4B942]/30">
      
      {/* Background Zodiac Wheel Radial SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full text-[#F4B942] fill-none stroke-current" strokeWidth="1">
          <circle cx="250" cy="250" r="230" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="190" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="150" />
          <circle cx="250" cy="250" r="90" strokeWidth="2" />
          <line x1="250" y1="20" x2="250" y2="480" />
          <line x1="20" y1="250" x2="480" y2="250" />
          <line x1="87" y1="87" x2="413" y2="413" />
          <line x1="87" y1="413" x2="413" y2="87" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Interactive Celestial Wheel Display */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#FFFDF8] to-[#FFF7E6] rounded-2xl border-2 border-[#F4B942] p-8 shadow-premium-card space-y-6 text-center">
              
              {/* Official Astrologer Logo Asset */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center">
                <img
                  src="/image/Logo/Astrologer_Logo.png"
                  alt="R.A. Divine Astrology Official Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(244,185,66,0.65)] hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#8F1717]">
                  The Cosmic Horizon
                </h3>
                <p className="text-xs font-semibold text-[#F28C28] uppercase tracking-widest font-serif">
                  Planetary Dashas & Transits
                </p>
              </div>

              <ZodiacRingAccents className="py-2" />
              <LotusDivider className="my-2" />

              <p className="text-xs text-[#3B1712]/85 leading-relaxed font-sans">
                Every individual carries a unique cosmic blueprint. Understanding your planetary periods unlocks divine timing for career decisions, marriage, health, and spiritual alignment.
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs pt-2">
                <div className="p-2.5 bg-[#FFFDF8] rounded-xl border border-[#F4B942]/40 text-[#8F1717] font-serif font-bold text-center">
                  <Sparkles className="w-4 h-4 text-[#F28C28] mx-auto mb-1" />
                  <span className="block text-[11px] leading-tight">KP Sub-Lord System</span>
                </div>
                <div className="p-2.5 bg-[#FFFDF8] rounded-xl border border-[#F4B942]/40 text-[#8F1717] font-serif font-bold text-center">
                  <Moon className="w-4 h-4 text-[#F28C28] mx-auto mb-1" />
                  <span className="block text-[11px] leading-tight">Janma Rashi & Dasha</span>
                </div>
                <div className="p-2.5 bg-[#FFFDF8] rounded-xl border border-[#F4B942]/40 text-[#8F1717] font-serif font-bold text-center">
                  <Compass className="w-4 h-4 text-[#F28C28] mx-auto mb-1" />
                  <span className="block text-[11px] leading-tight">D9/D10 Charts</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Narrative: Understand Your Path. Shape Your Future. */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-[#3B1712]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8F1717] border border-[#F4B942] text-xs font-serif font-bold uppercase tracking-wider text-[#FFD166] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD166] animate-pulse" />
              KP ASTROLOGER & STELLAR ALIGNMENT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#8F1717] leading-tight">
              Understand Your Path. Shape Your Future.
            </h2>

            <p className="text-base leading-relaxed text-[#3B1712]/90 font-sans">
              Astrology is not about fatalistic prediction; it is an ancient science of self-awareness and cosmic timing. As a certified <strong>KP Astrologer</strong>, Avijit Sharma Ssarrkar applies the celebrated Krishnamurti Padhdhati stellar sub-lord system and divisional calculations to identify the exact planetary influences and timeline transitions affecting your present situation.
            </p>

            <p className="text-base leading-relaxed text-[#3B1712]/90 font-sans">
              Combined with authentic Bagalamukhi Sadhana remedies, consecrated gemstones, and Vastu alignments, you gain the divine clarity needed to resolve blockages, restore confidence, and build a brighter tomorrow.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Book Your Personal Session
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg">
                  Explore Remedies
                </Button>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
