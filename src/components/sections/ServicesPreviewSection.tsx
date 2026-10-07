import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Flame, Gem, Home, HeartHandshake, TrendingUp, HelpCircle, Activity, ArrowRight, Check } from 'lucide-react';
import { SERVICES, type ServiceItem } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { staggerContainer, staggerItem } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-[#F28C28]" />,
  Flame: <Flame className="w-6 h-6 text-[#F28C28]" />,
  Gem: <Gem className="w-6 h-6 text-[#F28C28]" />,
  Home: <Home className="w-6 h-6 text-[#F28C28]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#F28C28]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#F28C28]" />,
  HelpCircle: <HelpCircle className="w-6 h-6 text-[#F28C28]" />,
  Activity: <Activity className="w-6 h-6 text-[#F28C28]" />
};

export const ServicesPreviewSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Take the 6 key service items
  const displayServices = SERVICES.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Personalized Offerings"
          title="Consultation & Spiritual Services"
          subtitle="Empowering Your Path Through Precision Vedic Astrology & Bagalamukhi Sadhana"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayServices.map((service: ServiceItem) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Card className="h-full flex flex-col justify-between group border-2 border-[#F4B942]/35 hover:border-[#F4B942]">
                <div className="space-y-4">
                  {/* Category & Icon Header */}
                  <div className="flex items-center justify-between border-b border-[#F4B942]/30 pb-3">
                    <span className="text-[10px] font-bold font-serif uppercase tracking-widest text-[#8F1717] bg-[#F4B942]/20 px-2.5 py-1 rounded-full border border-[#F4B942]/40">
                      {service.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 group-hover:scale-110 transition-transform">
                      {iconMap[service.iconName] || <Compass className="w-6 h-6 text-[#F28C28]" />}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-[#3B1712] group-hover:text-[#8F1717] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-[#F28C28]">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-[#3B1712]/80 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 pt-2">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#3B1712]/90">
                        <Check className="w-3.5 h-3.5 text-[#F4B942] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button: Learn More */}
                <div className="pt-6 border-t border-[#F4B942]/20 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    fullWidth
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </Button>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Footer Callout */}
        <div className="mt-14 text-center">
          <Link to="/services">
            <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
              Explore Full Service Spectrum
            </Button>
          </Link>
        </div>

      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || 'Service Details'}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="space-y-2 border-b border-[#F4B942]/30 pb-4">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#8F1717] bg-[#F4B942]/20 px-3 py-1 rounded-full border border-[#F4B942]">
                {selectedService.category}
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#8F1717] pt-2">
                {selectedService.title}
              </h2>
              <p className="text-xs font-bold text-[#F28C28]">
                {selectedService.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#3B1712] leading-relaxed font-sans">
              <p>{selectedService.fullDetails}</p>

              <div className="bg-[#FFF7E6] p-4 rounded-xl border border-[#F4B942]/40 space-y-2">
                <h4 className="font-serif font-bold text-xs text-[#8F1717] uppercase tracking-wider">
                  Primary Benefits:
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                Close Preview
              </Button>
              <Link to="/contact" onClick={() => setSelectedService(null)}>
                <Button variant="primary" size="sm">
                  Book This Service
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};
