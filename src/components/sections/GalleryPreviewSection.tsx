import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { staggerContainer, staggerItem } from '@/lib/animations';

export const GalleryPreviewSection: React.FC = () => {
  const displayItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Sacred Imagery"
          title="Sacred Gallery Preview"
          subtitle="Visual Glimpses of Authentic Vedic Rituals, Consecrated Yantras & Sanctuary Atmosphere"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="group overflow-hidden p-0 h-full flex flex-col justify-between border-2 border-[#F4B942]/35 hover:border-[#F4B942]">
                <div className="relative aspect-4/3 overflow-hidden bg-[#6E1010]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1712] via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
                  
                  <span className="absolute bottom-3 left-3 bg-[#F4B942]/90 text-[#3B1712] text-[10px] font-bold font-serif px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-4.5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-[#3B1712] group-hover:text-[#8F1717] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3B1712]/80 line-clamp-2 font-sans">
                    {item.description}
                  </p>
                  {item.location && (
                    <div className="flex items-center gap-1 text-[11px] text-[#F28C28] pt-1 font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA: View Full Gallery */}
        <div className="mt-14 text-center">
          <Link to="/gallery">
            <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
              View Full Gallery
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
