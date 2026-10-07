import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, ShieldCheck, Award, BookOpen, UserCheck, Compass, HeartHandshake, TrendingUp, Gem, HelpCircle, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { SITE_CONFIG } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LotusDivider, ZodiacRingAccents } from '@/components/ui/DecorativePatterns';
import { MandalaBackground } from '@/components/ui/MandalaBackground';
import { slideInLeft, slideInRight, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Avijit Sharma Sarkar | R.A. Divine Astrology"
        description="Learn about Avijit Sharma Sarkar, Bagalamukhi Sadhak and Astro Spiritual Advisor offering personalized astrology and spiritual guidance."
        canonicalPath="/about"
      />

      {/* 1. PAGE HERO */}
      <section className="bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#6E1010] text-[#FFD166] py-16 lg:py-24 relative overflow-hidden border-b-2 border-[#F4B942]">
        
        {/* Background Subtle Mandala */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.15)_0,transparent_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-mono text-[#FFFDF8]/75 uppercase tracking-wider mb-2">
            <Link to="/" className="hover:text-[#FFD166] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <span className="text-[#FFD166] font-bold">About</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-tight">
            About R.A. Divine Astrology
          </h1>

          <p className="text-lg sm:text-2xl text-[#FFD166] font-display italic max-w-2xl mx-auto font-bold tracking-wide">
            Traditional Wisdom. Personalized Guidance.
          </p>

          <LotusDivider className="my-3" />
        </div>
      </section>

      {/* 2. PROFILE SECTION */}
      <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Image Showcase */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#F4B942] via-[#FFD166] to-[#F28C28] opacity-35 blur-md" />
                
                <div className="relative bg-gradient-to-b from-[#FFFDF8] to-[#FFF7E6] rounded-2xl border-2 border-[#F4B942] p-7 shadow-premium-card text-center space-y-6">
                  
                  {/* Astrologer Image Asset */}
                  <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#F4B942] shadow-soft-red bg-[#8F1717]/10 p-1 bg-gradient-to-b from-[#8F1717] to-[#3B1712]">
                    <img
                      src="/image/Gallery/image5.jpeg"
                      alt="Avijit Sharma Sarkar - Bagalamukhi Sadhak & Astro Advisor"
                      loading="eager"
                      fetchPriority="high"
                      width="360"
                      height="270"
                      className="w-full h-full object-cover object-center rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#3B1712]/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1717]">
                      {SITE_CONFIG.astrologer.name}
                    </h2>
                    <p className="text-xs font-bold text-[#F28C28] uppercase tracking-wider font-serif">
                      {SITE_CONFIG.astrologer.title}
                    </p>
                  </div>

                  <ZodiacRingAccents className="py-1" />

                  <div className="p-4 bg-[#FFFDF8] rounded-xl border border-[#F4B942]/40 text-xs text-[#3B1712] space-y-2 font-sans">
                    <div className="flex items-center justify-center gap-1.5 font-serif font-bold text-[#8F1717]">
                      <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
                      <span>100% Confidential Interaction</span>
                    </div>
                    <p className="text-[11px] text-[#3B1712]/80">
                      Personalized 1-on-1 Consultations in Serampore & Online
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right Professional Narrative */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-[#3B1712]"
            >
              <span className="text-xs font-serif font-bold text-[#F28C28] uppercase tracking-widest block">
                Professional Profile
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#8F1717] leading-tight">
                Authentic Astrology & Dedicated Spiritual Guidance
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#3B1712]/90 font-sans">
                Avijit Sharma Sarkar is a Bagalamukhi Sadhak and Astro Spiritual Advisor offering personalized astrology and spiritual guidance. With over 18 years of continuous study and practice in classical Vedic Astrology, Tantric discipline, Gemology, and Vastu Shastra, he provides seekers with a tranquil space to understand life's unfolding patterns.
              </p>

              <p className="text-base leading-relaxed text-[#3B1712]/90 font-sans">
                His consultation methodology combines a traditional approach to birth chart calculations with a strictly confidential interaction. Every session is designed to offer realistic perspective and practical mantras or consecrated remedies without making guaranteed claims about supernatural results.
              </p>

              {/* Core Attributes Badge Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FFFDF8] rounded-2xl border border-[#F4B942]/40 shadow-sm space-y-1">
                  <div className="text-sm font-serif font-bold text-[#8F1717]">
                    Traditional Approach
                  </div>
                  <p className="text-xs text-[#3B1712]/80 leading-relaxed font-sans">
                    Rooted in Parasari horoscope principles, divisional chart calculations, and authentic Bagalamukhi Sadhana guidance.
                  </p>
                </div>

                <div className="p-4 bg-[#FFFDF8] rounded-2xl border border-[#F4B942]/40 shadow-sm space-y-1">
                  <div className="text-sm font-serif font-bold text-[#8F1717]">
                    Confidential Interaction
                  </div>
                  <p className="text-xs text-[#3B1712]/80 leading-relaxed font-sans">
                    Complete client privacy guaranteed. Your birth chart details and personal queries are strictly protected.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" iconLeft={<Calendar className="w-5 h-5 text-[#FFD166]" />}>
                    Schedule Consultation
                  </Button>
                </Link>
                <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button variant="saffron" size="lg" iconLeft={<MessageCircle className="w-5 h-5 text-white" />}>
                    WhatsApp Now
                  </Button>
                </a>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Foundational Ethics"
            title="Our Approach"
            subtitle="Three Essential Pillars of R.A. Divine Astrology Guidance"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Pillar 1 */}
            <motion.div variants={staggerItem}>
              <Card className="h-full space-y-4 border-2 border-[#F4B942]/40">
                <div className="p-3.5 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/50 shadow-sm">
                  <Compass className="w-8 h-8 text-[#F28C28]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#8F1717]">
                  Astrological Insight
                </h3>
                <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                  Rigorous calculation of natal horoscope charts (Janma Patrika), Vimshottari Mahadasha timelines, divisional charts, and planetary transits to identify root causes of life stagnation.
                </p>
              </Card>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={staggerItem}>
              <Card className="space-y-4 h-full border-2 border-[#F4B942]/40">
                <div className="p-3.5 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/50 shadow-sm">
                  <BookOpen className="w-8 h-8 text-[#F28C28]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#8F1717]">
                  Spiritual Wisdom
                </h3>
                <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                  Grounded in sacred Maa Bagalamukhi Mahavidya Sadhana, providing spiritual resilience, protective mantra recitations, consecrated gemstone advice, and peace of mind.
                </p>
              </Card>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={staggerItem}>
              <Card className="space-y-4 h-full border-2 border-[#F4B942]/40">
                <div className="p-3.5 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/50 shadow-sm">
                  <UserCheck className="w-8 h-8 text-[#F28C28]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#8F1717]">
                  Personalized Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                  Every consultation is conducted one-on-one with full personal attention, delivering practical, actionable recommendations tailored to your individual chart and lifestyle.
                </p>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 4. AREAS OF GUIDANCE */}
      <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Consultation Domains"
            title="Areas of Guidance"
            subtitle="Tailored Astrological & Spiritual Advice for Key Aspects of Life"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Compass className="w-7 h-7 text-[#F28C28]" />,
                title: "Birth Chart Analysis",
                desc: "In-depth planetary dasha timeline calculations, Lagna strength evaluation, and remedies for graha afflictions."
              },
              {
                icon: <HeartHandshake className="w-7 h-7 text-[#F28C28]" />,
                title: "Love & Relationship Guidance",
                desc: "Ashtakoot Guna Milan, partner emotional wavelength evaluation, Mangal Dosha check, and marital harmony advice."
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-[#F28C28]" />,
                title: "Career & Business Consultation",
                desc: "Optimal timing for job advancement, business venture launches, partner compatibility, and professional elevation."
              },
              {
                icon: <Gem className="w-7 h-7 text-[#F28C28]" />,
                title: "Financial Guidance",
                desc: "Astrological assessment of wealth accumulation (Dhan Yogas), cash flow blockages, and practical remedies."
              },
              {
                icon: <HelpCircle className="w-7 h-7 text-[#F28C28]" />,
                title: "Family & Personal Guidance",
                desc: "Spiritual solutions for domestic peace, personal stress management, child educational focus, and emotional harmony."
              },
              {
                icon: <HomeIcon className="w-7 h-7 text-[#F28C28]" />,
                title: "Vastu & Spiritual Guidance",
                desc: "Elemental spatial alignment for residential and commercial spaces without structural demolition, paired with Bagalamukhi Sadhana remedies."
              }
            ].map((domain, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full space-y-4 border-2 border-[#F4B942]/35 hover:border-[#F4B942]">
                  <div className="p-3 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 shadow-sm">
                    {domain.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#8F1717]">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                    {domain.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. BRAND STORY & OFFICIAL BANNER SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF7E6] to-[#FFFDF8] border-b border-[#F4B942]/30 relative overflow-hidden">
        <MandalaBackground opacity={0.25} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Brand Story Narrative */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#FFFDF8] p-7 sm:p-10 rounded-2xl border-2 border-[#F4B942] shadow-premium-card space-y-5"
            >
              <span className="text-xs font-serif font-bold text-[#F28C28] uppercase tracking-widest block">
                Established 2026
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#8F1717] leading-snug">
                The Story & Vision of R.A. Divine Astrology
              </h2>

              <LotusDivider className="justify-start my-2" />

              <div className="space-y-4 text-base text-[#3B1712]/90 leading-relaxed font-sans">
                <p>
                  <strong>R.A. Divine Astrology was established in 2026</strong> as a dedicated sanctuary for authentic Vedic astrology and spiritual consulting. Founded by Avijit Sharma Sarkar, the practice was born out of a profound commitment to restore ethical, transparent, and scriptural guidance in astrological consultations.
                </p>

                <p>
                  In an era dominated by superficial predictions and fear-based tactics, R.A. Divine Astrology stands as a pillar of trust. The brand combines classical horoscope math with Bagalamukhi Sadhana principles to ensure every seeker receives logical, calm, and actionable remedies.
                </p>

                <p>
                  Operating from Serampore, Hooghly, West Bengal, the sanctuary serves seekers both locally and globally, providing a compassionate environment for personal growth and inner peace.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-serif font-bold text-[#8F1717]">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/40">
                  Reg No: WBAXXVI-S0000115-09
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/40">
                  Astro Council of West Bengal
                </div>
              </div>
            </motion.div>

            {/* Right Column: Official Banner Showcase */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Glow Frame */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#F4B942] via-[#FFD166] to-[#F28C28] opacity-30 blur-md" />
                
                <div className="relative bg-[#FFFDF8] rounded-2xl border-2 border-[#F4B942] p-4 sm:p-5 shadow-premium-card text-center space-y-3">
                  <div className="border-b border-[#F4B942]/30 pb-2">
                    <span className="text-[11px] font-serif font-bold text-[#8F1717] uppercase tracking-wider block">
                      Official Sanctuary Banner & Credentials
                    </span>
                  </div>

                  {/* Banner Image Asset */}
                  <div className="relative mx-auto w-full aspect-[3/4] max-h-[500px] rounded-xl overflow-hidden border-2 border-[#F4B942] shadow-soft-red bg-[#8F1717]/10 p-1 bg-gradient-to-b from-[#8F1717] to-[#3B1712]">
                    <img
                      src="/image/Banner/Banner1.jpeg"
                      alt="R.A. Divine Astrology Official Sanctuary Banner - Avijit Sharma Sarkar"
                      loading="lazy"
                      className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-[11px] text-[#3B1712]/75 italic font-sans pt-1">
                    Official Registered Sanctuary Banner • Serampore, Hooghly
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. TRUST SECTION */}
      <section className="py-24 bg-[#FFF7E6] border-b border-[#F4B942]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Client Assurance"
            title="Pillars of Client Trust"
            subtitle="What Seekers Can Expect During Every Consultation Session"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <UserCheck className="w-7 h-7 text-[#F28C28]" />,
                title: "Personal Attention",
                desc: "Unrushed one-on-one sessions dedicated entirely to listening and evaluating your birth chart."
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#F28C28]" />,
                title: "Confidential Consultation",
                desc: "100% private interactions protecting your personal history and chart details."
              },
              {
                icon: <BookOpen className="w-7 h-7 text-[#F28C28]" />,
                title: "Traditional Knowledge",
                desc: "Grounded strictly in authentic Parasari Vedic Jyotish and Bagalamukhi Sadhana."
              },
              {
                icon: <Award className="w-7 h-7 text-[#F28C28]" />,
                title: "Guidance Focused Approach",
                desc: "Practical recommendations avoiding fear-mongering or unscientific claims."
              }
            ].map((trust, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="h-full space-y-3 border border-[#F4B942]/40">
                  <div className="p-3 w-fit rounded-xl bg-[#FFFDF8] border border-[#F4B942]/50 shadow-sm">
                    {trust.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#8F1717]">
                    {trust.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3B1712]/80 leading-relaxed font-sans">
                    {trust.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#E85D04] text-[#FFD166] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,185,66,0.18)_0,transparent_75%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white">
              Contact for Consultation
            </h2>

            <p className="text-base sm:text-lg text-[#FFFDF8]/90 max-w-2xl mx-auto font-sans leading-relaxed">
              Schedule your confidential session with Avijit Sharma Sarkar for personalized birth chart analysis and spiritual guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                <Button variant="gold" size="lg" iconLeft={<Phone className="w-5 h-5 text-[#8F1717]" />}>
                  Call 8981091491
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

        </div>
      </section>
    </>
  );
};

export default About;
