import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Seekers' Experiences"
          title="Words of Gratitude & Transformation"
          subtitle="Real Testimonials from Clients Guided Through Complex Life Paths"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.map((item: Testimonial) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between border-b border-[#F4B942]/30 pb-2.5">
                    <div className="flex items-center gap-1 text-[#F4B942]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#F4B942]/40" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs text-[#3B1712]/90 italic font-display leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-[#F4B942]/20">
                  <div className="font-serif text-sm font-bold text-[#8F1717]">
                    {item.name}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#3B1712]/75 pt-0.5">
                    <span className="flex items-center gap-1 font-sans">
                      <MapPin className="w-3 h-3 text-[#F28C28]" />
                      {item.location}
                    </span>
                    <span className="font-mono text-[10px]">{item.date}</span>
                  </div>
                  <div className="text-[10px] font-bold text-[#F28C28] pt-1">
                    {item.service}
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
