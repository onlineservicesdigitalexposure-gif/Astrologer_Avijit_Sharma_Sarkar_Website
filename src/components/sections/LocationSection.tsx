import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { slideInLeft, slideInRight } from '@/lib/animations';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeader
          badge="Sanctuary Location"
          title="Visit Divine Sanctuary in Serampore"
          subtitle="Conveniently Located Near Serampore Station for In-Person Consultations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Address Details Card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <Card className="p-8 space-y-6 border-2 border-[#F4B942]">
              
              <div className="flex items-start gap-4 border-b border-[#F4B942]/30 pb-5">
                <div className="p-3.5 rounded-2xl bg-[#8F1717] text-[#FFD166] shrink-0 border border-[#F4B942]">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#8F1717]">
                    Sanctuary Address
                  </h3>
                  <p className="text-xs font-semibold text-[#F28C28]">
                    Serampore, Hooghly, West Bengal
                  </p>
                </div>
              </div>

              {/* Exact Address Block */}
              <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#F4B942]/40 shadow-sm space-y-2 text-sm text-[#3B1712]">
                <p className="font-serif font-bold text-base text-[#8F1717]">
                  R.A. Divine Astrology Sanctuary
                </p>
                <p className="font-semibold text-sm">
                  52 Raja Rammohan Roy Sarani,
                </p>
                <p className="text-xs text-[#3B1712]/85">
                  Serampore, Hooghly, West Bengal - 712203
                </p>
                <div className="inline-flex items-center gap-1.5 pt-2 text-xs font-bold text-[#F28C28]">
                  <Navigation className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>Landmark: Opposite Apollo Pharmacy, Serampore Station</span>
                </div>
              </div>

              {/* Visitor Guidelines */}
              <div className="space-y-2.5 text-xs text-[#3B1712]/85 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>In-person consultations by prior appointment for sanctuary peace.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>2 minutes walk from Serampore Railway Station.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>Consultation Hours: Mon - Sat: 10:00 AM - 7:00 PM IST</span>
                </div>
              </div>

            </Card>
          </motion.div>

          {/* Right Column: Official Visiting Card Banner Display */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="group relative rounded-2xl border-2 border-[#F4B942] overflow-hidden bg-[#6E1010] shadow-premium-card transition-all duration-300 hover:border-[#FFD166] hover:shadow-soft-gold">
              <img
                src="/image/Banner/VisitingCard.jpeg"
                alt="R.A. Divine Astrology Official Visiting Card & Sanctuary Pass"
                className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                <span className="text-xs font-serif font-bold text-[#FFD166] bg-[#8F1717]/90 px-3 py-1 rounded-full border border-[#F4B942] shadow-sm">
                  Official Sanctuary Visiting Card & Contact Pass
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
