import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const HIGHLIGHTS = [
  {
    icon: <Award className="w-6 h-6 text-[#F28C28]" />,
    title: "Established 2026",
    subtitle: "Dedicated Spiritual Sanctuary"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-[#F28C28]" />,
    title: "Personalized Guidance",
    subtitle: "One-to-One Attention"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#F28C28]" />,
    title: "Confidential Consultation",
    subtitle: "100% Private & Safe"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#F28C28]" />,
    title: "Spiritual & Astrology Guidance",
    subtitle: "Authentic Vedic Wisdom"
  }
];

export const TrustHighlightStrip: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] py-8 border-b border-[#F4B942]/30 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/35 shadow-sm hover:border-[#F4B942] transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/40 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-[#8F1717]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#3B1712]/75 font-sans">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
