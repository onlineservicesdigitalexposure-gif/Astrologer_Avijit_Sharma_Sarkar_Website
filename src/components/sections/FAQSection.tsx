import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Clarifying Your Spiritual Doubts"
          subtitle="Answers to Common Questions Regarding Kundli Analysis, Bagalamukhi Rituals & Consultations"
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF8] rounded-2xl border border-[#F4B942]/40 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5.5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F4B942]/10"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#F28C28] shrink-0" />
                    <span className="font-serif font-bold text-base text-[#3B1712]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F4B942] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#8F1717]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5.5 pb-5 pt-1 text-sm text-[#3B1712]/85 leading-relaxed border-t border-[#F4B942]/20 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
