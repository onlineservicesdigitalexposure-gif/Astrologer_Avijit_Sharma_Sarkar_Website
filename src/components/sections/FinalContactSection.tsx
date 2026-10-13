import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { Button } from '@/components/ui/Button';

export const FinalContactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#8F1717] via-[#6E1010] to-[#8F1717] text-[#FFFDF8] py-12 border-t-2 border-[#F4B942] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div className="space-y-1">
            <span className="text-xs font-serif font-bold text-[#F28C28] uppercase tracking-widest block">
              Direct Spiritual Consultation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFD166]">
              Contact {SITE_CONFIG.astrologer.name}
            </h3>
            <p className="text-xs text-[#FFFDF8]/85 font-sans">
              Serampore Sanctuary & Global Online Video Sessions
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFDF8]/10 hover:bg-[#FFFDF8]/20 border border-[#F4B942]/40 text-[#FFD166] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F4B942]" />
              <span className="font-semibold text-sm">8981091491</span>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFDF8]/10 hover:bg-[#FFFDF8]/20 border border-[#F4B942]/40 text-[#FFD166] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F4B942]" />
              <span className="font-semibold text-sm">sharmaSsarrkaravijit@gmail.com</span>
            </a>

            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="saffron" size="sm" iconLeft={<MessageCircle className="w-4 h-4 text-white" />}>
                WhatsApp Instant
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
