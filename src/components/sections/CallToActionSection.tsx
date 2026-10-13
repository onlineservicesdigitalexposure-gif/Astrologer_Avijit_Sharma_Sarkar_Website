import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { scaleIn } from '@/lib/animations';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#6E1010] text-[#FFD166] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.15)_0,transparent_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/50 text-xs font-serif font-bold uppercase tracking-widest text-[#FFD166]">
          <Sparkles className="w-4 h-4 text-[#FFD166] animate-pulse" />
          Direct Access to Shri Avijit Sharma Ssarrkar
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-white max-w-3xl mx-auto">
          Ready to Remove Obstacles & Align with Divine Cosmic Grace?
        </h2>

        <p className="text-base sm:text-lg text-[#FFFDF8]/90 max-w-2xl mx-auto font-sans leading-relaxed">
          Book your 1-on-1 confidential consultation session for Kundli analysis, Bagalamukhi ritual remedies, gemstone consecration, or Vastu guidance today.
        </p>

        {/* Action Buttons */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link to="/contact">
            <Button
              variant="gold"
              size="lg"
              iconLeft={<Calendar className="w-5 h-5 text-[#8F1717]" />}
            >
              Book Online Consultation Form
            </Button>
          </Link>

          <a
            href={SITE_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-[#FFD166] text-[#FFD166] hover:bg-[#FFD166]/10"
              iconLeft={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
            >
              Chat Instant on WhatsApp
            </Button>
          </a>

          <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-[#FFD166]"
              iconLeft={<PhoneCall className="w-5 h-5 text-[#F4B942]" />}
            >
              Call {SITE_CONFIG.contact.phone}
            </Button>
          </a>
        </motion.div>

        <p className="text-xs text-[#FFFDF8]/65 pt-2 font-mono">
          * Absolute Privacy Guaranteed | High-Definition Video & In-Person Sessions Available
        </p>

      </div>
    </section>
  );
};
