import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { scaleIn } from '@/lib/animations';

export const ConsultationCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#E85D04] text-[#FFD166] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.18)_0,transparent_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/50 text-xs font-serif font-bold uppercase tracking-widest text-[#FFD166]">
          <Sparkles className="w-4 h-4 text-[#FFD166] animate-pulse" />
          Direct Access to Avijit Sharma Ssarrkar
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-white max-w-3xl mx-auto">
          Have Questions About Your Path?
        </h2>

        <p className="text-base sm:text-lg text-[#FFFDF8]/90 max-w-2xl mx-auto font-sans leading-relaxed">
          Get personalized astrology and spiritual guidance from Avijit Sharma Ssarrkar.
        </p>

        {/* Action Buttons */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href={`tel:${SITE_CONFIG.contact.phone}`}>
            <Button
              variant="gold"
              size="lg"
              iconLeft={<Phone className="w-5 h-5 text-[#8F1717]" />}
            >
              Call Now ({SITE_CONFIG.contact.phone})
            </Button>
          </a>

          <a
            href={SITE_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="saffron"
              size="lg"
              className="border-[#FFD166] text-white"
              iconLeft={<MessageCircle className="w-5 h-5 text-white" />}
            >
              WhatsApp
            </Button>
          </a>
        </motion.div>

        <p className="text-xs text-[#FFFDF8]/65 pt-2 font-mono">
          * 100% Confidentiality Assured | Phone & In-Person Appointments Available
        </p>

      </div>
    </section>
  );
};
