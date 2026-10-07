import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { MandalaBackground } from '@/components/ui/MandalaBackground';
import { slideInLeft, slideInRight } from '@/lib/animations';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF7E6] relative overflow-hidden border-b border-[#F4B942]/30">
      {/* Background Zodiac Circles */}
      <MandalaBackground opacity={0.25} />
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Spiritual Foundation"
          title="Guidance Rooted in Astrology & Spiritual Wisdom"
          subtitle="Combining Deep Tantric Sadhana with Precision Astronomical Calculations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative p-7 bg-gradient-to-b from-[#FFFDF8] to-[#FFF7E6] rounded-2xl border-2 border-[#F4B942] shadow-premium-card space-y-6">
              
              <div className="border-b border-[#F4B942]/30 pb-4 text-center space-y-3">
                <div className="relative mx-auto w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#F4B942] shadow-sm bg-[#8F1717]/10 p-0.5">
                  <img
                    src="/image/Gallery/image8.jpeg"
                    alt="Avijit Sharma Sarkar - Bagalamukhi Sadhak"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold font-serif text-[#F28C28] uppercase tracking-widest block mb-1">
                    Bagalamukhi Sadhak
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#8F1717]">
                    {SITE_CONFIG.astrologer.name}
                  </h3>
                  <p className="text-xs text-[#3B1712]/80 italic mt-1 font-display">
                    "Spiritual Sadhana transforms obstacles into stepping stones of divine grace."
                  </p>
                </div>
              </div>

              {/* Specialization List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold font-serif text-[#3B1712] uppercase tracking-wider">
                  Core Consultation Focus:
                </h4>
                {SITE_CONFIG.astrologer.specializations.slice(0, 5).map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#3B1712]">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span className="font-semibold">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <Link to="/about">
                  <Button variant="gold" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                    Know More About Avijit
                  </Button>
                </Link>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-[#3B1712]"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#8F1717] leading-snug">
              Compassionate Spiritual Insight & Timeless Vedic Astrology
            </h3>

            <p className="text-base leading-relaxed text-[#3B1712]/90 font-sans">
              Avijit Sharma Sarkar is a Bagalamukhi Sadhak and Astro Spiritual Advisor offering personalized astrology and spiritual guidance. With over 18 years of dedicated practice in Vedic Astrology, Tantric remedies, Gemology, and Vastu Shastra, he helps seekers navigate life's complex transitions with clarity and peace.
            </p>

            <p className="text-base leading-relaxed text-[#3B1712]/90 font-sans">
              Rooted in sacred traditions, every consultation provides an empathetic, confidential environment to analyze birth chart planetary dashas, identify underlying karmic patterns, and suggest actionable spiritual remedies tailored to your daily lifestyle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#F4B942]/40 shadow-sm space-y-1">
                <div className="text-base font-serif font-bold text-[#8F1717]">
                  Authentic Remedies
                </div>
                <p className="text-xs text-[#3B1712]/80 leading-relaxed font-sans">
                  No misleading or magical claims. Practical Vedic mantras, consecrated gems, and Bagalamukhi ritual guidance tailored to your chart.
                </p>
              </div>

              <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#F4B942]/40 shadow-sm space-y-1">
                <div className="text-base font-serif font-bold text-[#8F1717]">
                  Online & In-Person
                </div>
                <p className="text-xs text-[#3B1712]/80 leading-relaxed font-sans">
                  Providing in-person consultations at the Serampore sanctuary alongside international virtual video sessions.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button variant="primary" size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Know More About Avijit
                </Button>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
