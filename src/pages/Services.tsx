import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Flame, Gem, Home, HeartHandshake, TrendingUp, HelpCircle, Activity, Sparkles, Sun, CheckCircle2, Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { SERVICES, type ServiceItem } from '@/data/services';
import { SITE_CONFIG } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { LotusDivider } from '@/components/ui/DecorativePatterns';
import { staggerContainer, staggerItem, scaleIn, fadeIn } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-[#F28C28]" />,
  Flame: <Flame className="w-7 h-7 text-[#F28C28]" />,
  Gem: <Gem className="w-7 h-7 text-[#F28C28]" />,
  Home: <Home className="w-7 h-7 text-[#F28C28]" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-[#F28C28]" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-[#F28C28]" />,
  HelpCircle: <HelpCircle className="w-7 h-7 text-[#F28C28]" />,
  Activity: <Activity className="w-7 h-7 text-[#F28C28]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#F28C28]" />,
  Sun: <Sun className="w-7 h-7 text-[#F28C28]" />
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <SEO
        title="KP Astrology & Spiritual Services | R.A. Divine Astrology"
        description="Explore KP Astrology and spiritual guidance services by certified KP Astrologer Avijit Sharma Ssarrkar including stellar birth chart analysis, Vastu guidance, and relationship consulting."
        canonicalPath="/services"
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#6E1010] text-[#FFD166] py-16 lg:py-24 relative overflow-hidden border-b-2 border-[#F4B942]">
        
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.16)_0,transparent_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 text-xs font-serif font-bold uppercase tracking-wider text-[#FFD166]">
              <Sparkles className="w-3.5 h-3.5" />
              Divine Spectrum of Guidance
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Our Astrology & Spiritual Services
            </h1>

            <p className="text-lg sm:text-2xl text-[#FFD166] font-display italic max-w-2xl mx-auto font-bold tracking-wide">
              Personalized guidance for different areas of life.
            </p>

            <LotusDivider className="my-3" />
          </motion.div>
        </div>
      </section>

      {/* 2. RESPONSIVE SERVICE GRID (9 SERVICES) */}
      <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <SectionHeader
            badge="Consultation Catalog"
            title="Explore Our 9 Specialized Offerings"
            subtitle="Meticulously Calculated Horoscope Analysis & Authentic Bagalamukhi Sadhana Guidance"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service: ServiceItem) => (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="h-full flex flex-col justify-between group border-2 border-[#F4B942]/35 hover:border-[#F4B942] hover:-translate-y-1 transition-all duration-300">
                  
                  <div className="space-y-4">
                    {/* Header: Category Pill & Icon */}
                    <div className="flex items-center justify-between border-b border-[#F4B942]/30 pb-3.5">
                      <span className="text-[10px] font-bold font-serif uppercase tracking-widest text-[#8F1717] bg-[#F4B942]/20 px-3 py-1 rounded-full border border-[#F4B942]/40">
                        {service.category}
                      </span>
                      <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 group-hover:scale-110 group-hover:border-[#F4B942] transition-transform duration-300 shadow-sm">
                        {iconMap[service.iconName] || <Compass className="w-7 h-7 text-[#F28C28]" />}
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

                    {/* Short Description */}
                    <p className="text-xs text-[#3B1712]/85 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    {/* Key Feature Highlights */}
                    <ul className="space-y-1.5 pt-2">
                      {service.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#3B1712]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B942] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Consultation CTA Button */}
                  <div className="pt-6 border-t border-[#F4B942]/20 mt-4 flex gap-3">
                    <Button
                      variant="gold"
                      size="sm"
                      fullWidth
                      iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
                    </Button>

                    <Link to="/contact" className="w-full">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        iconLeft={<Calendar className="w-3.5 h-3.5 text-[#FFD166]" />}
                      >
                        Book
                      </Button>
                    </Link>
                  </div>

                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. HOW CONSULTATION WORKS SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <SectionHeader
            badge="Seamless Journey"
            title="How Consultation Works"
            subtitle="Four Simple Steps to Receive Personalized Astrological & Spiritual Guidance"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "01",
                title: "Share Your Question",
                description: "Provide your birth chart details (Date, Time & Place of birth) and key life queries via form or WhatsApp."
              },
              {
                step: "02",
                title: "Personal Consultation",
                description: "Engage in a quiet, confidential 1-on-1 session in Serampore or via HD international video call."
              },
              {
                step: "03",
                title: "Astrological/Spiritual Guidance",
                description: "Receive deep planetary dasha calculations, divisional chart insights, and Bagalamukhi Sadhana advice."
              },
              {
                step: "04",
                title: "Practical Next Steps",
                description: "Get actionable, non-superstitious remedies, daily mantra discipline, and consecrated gemstone advice."
              }
            ].map((workflow, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="text-center space-y-4 h-full border-2 border-[#F4B942]/35 hover:border-[#F4B942]">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#8F1717] text-[#FFD166] font-serif font-bold text-lg flex items-center justify-center border-2 border-[#F4B942] shadow-soft-red">
                    {workflow.step}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#8F1717]">
                    {workflow.title}
                  </h3>
                  <p className="text-xs text-[#3B1712]/85 leading-relaxed font-sans">
                    {workflow.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. CONSULTATION CTA SECTION AT THE BOTTOM */}
      <section className="py-24 bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#E85D04] text-[#FFD166] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.18)_0,transparent_75%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/50 text-xs font-serif font-bold uppercase tracking-widest text-[#FFD166]">
              <Sparkles className="w-4 h-4 text-[#FFD166] animate-pulse" />
              Direct Access to Avijit Sharma Ssarrkar
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-white max-w-3xl mx-auto">
              Ready for Personalized Astrological Guidance?
            </h2>

            <p className="text-base sm:text-lg text-[#FFFDF8]/90 max-w-2xl mx-auto font-sans leading-relaxed">
              Book your 1-on-1 session with Avijit Sharma Ssarrkar today. Available at the Serampore sanctuary and via online video consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                <Button variant="gold" size="lg" iconLeft={<Phone className="w-5 h-5 text-[#8F1717]" />}>
                  Call Now ({SITE_CONFIG.contact.phone})
                </Button>
              </a>

              <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="saffron" size="lg" iconLeft={<MessageCircle className="w-5 h-5 text-white" />}>
                  WhatsApp Now
                </Button>
              </a>

              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-[#FFD166] text-[#FFD166] hover:bg-[#FFD166]/10" iconLeft={<Calendar className="w-5 h-5 text-[#FFD166]" />}>
                  Book Online Form
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Ethical Disclaimer Note */}
          <div className="pt-6 border-t border-[#FFD166]/20 text-[11px] text-[#FFFDF8]/70 max-w-2xl mx-auto font-mono leading-relaxed">
            * Disclaimer: Consultations provide guidance based on Vedic astrological principles and spiritual tradition. We do not claim guaranteed outcomes, cures, supernatural certainty, or financial success.
          </div>

        </div>
      </section>

      {/* Interactive Service Detail Modal */}
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
                  Primary Consultation Benefits:
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs bg-[#FFFDF8] p-3.5 rounded-xl border border-[#F4B942]/30">
                <strong className="text-[#8F1717] font-serif">Suitable For: </strong>
                <span>{selectedService.suitableFor}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                Close Preview
              </Button>
              <Link to="/contact" onClick={() => setSelectedService(null)}>
                <Button variant="primary" size="sm" iconLeft={<Calendar className="w-4 h-4 text-[#FFD166]" />}>
                  Book Consultation Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>

    </>
  );
};

export default Services;
