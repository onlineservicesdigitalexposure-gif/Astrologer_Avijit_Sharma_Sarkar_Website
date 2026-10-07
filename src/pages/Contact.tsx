import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles, AlertCircle, Navigation, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { SITE_CONFIG } from '@/data/site';
import { SERVICES } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LotusDivider } from '@/components/ui/DecorativePatterns';
import { slideInLeft, slideInRight, scaleIn, fadeIn } from '@/lib/animations';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  contactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Birth Chart Analysis',
    contactMethod: 'WhatsApp',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your Name and Mobile Phone Number.');
      return;
    }

    // Build properly URL-encoded WhatsApp text message
    const formattedText = `Hello Guruji Avijit Sharma Sarkar,\n\nI would like to enquire for a consultation at R.A. Divine Astrology.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Service Requested:* ${formData.service}\n*Preferred Contact:* ${formData.contactMethod}\n*Message / Query:* ${formData.message || 'N/A'}`;
    
    const url = `https://wa.me/918981091491?text=${encodeURIComponent(formattedText)}`;
    setWhatsappRedirectUrl(url);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO
        title="Contact R.A. Divine Astrology | Serampore, Hooghly"
        description="Get in touch with R.A. Divine Astrology and Avijit Sharma Sarkar in Serampore, Hooghly, West Bengal. Call +91 8981091491 or WhatsApp for consultation."
        canonicalPath="/contact"
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
              Confidential Consultation Desk
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Let's Connect
            </h1>

            <p className="text-lg sm:text-2xl text-[#FFD166] font-display italic max-w-2xl mx-auto font-bold tracking-wide">
              Start a personalized conversation with R.A. Divine Astrology.
            </p>

            <LotusDivider className="my-3" />
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: 1. CONTACT INFORMATION CARDS & DIRECT CTAS */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              
              <div className="bg-gradient-to-b from-[#FFFDF8] to-[#FFF7E6] p-7 sm:p-8 rounded-2xl border-2 border-[#F4B942] shadow-premium-card space-y-6">
                
                <div className="border-b border-[#F4B942]/30 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#8F1717]">
                    Sanctuary Contact Details
                  </h2>
                  <p className="text-xs text-[#3B1712]/80 font-sans">
                    Reach out directly for urgent ritual requests or booking assistance.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#3B1712]">
                  
                  {/* Phone Card */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/50 text-[#F28C28] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs font-serif text-[#8F1717] uppercase tracking-wider">Phone Number</strong>
                      <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-sm font-mono text-[#8F1717] hover:underline font-bold">
                        {SITE_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/50 text-[#F28C28] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs font-serif text-[#8F1717] uppercase tracking-wider">Email Address</strong>
                      <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xs sm:text-sm font-mono text-[#8F1717] hover:underline">
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/50 text-[#F28C28] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs font-serif text-[#8F1717] uppercase tracking-wider">Sanctuary Address</strong>
                      <p className="text-xs leading-relaxed font-semibold">{SITE_CONFIG.contact.address}</p>
                      <p className="text-[11px] text-[#F28C28] font-bold mt-1">Landmark: {SITE_CONFIG.contact.landmark}</p>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#F4B942]/40 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-[#FFF7E6] border border-[#F4B942]/50 text-[#F28C28] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs font-serif text-[#8F1717] uppercase tracking-wider">Consultation Hours</strong>
                      <span className="text-xs leading-relaxed font-sans">{SITE_CONFIG.contact.consultationHours}</span>
                    </div>
                  </div>

                </div>

                {/* Quick Action CTAs Row */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                    <Button variant="secondary" size="md" fullWidth iconLeft={<Phone className="w-4 h-4 text-[#8F1717]" />}>
                      Call Now
                    </Button>
                  </a>

                  <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button variant="saffron" size="md" fullWidth iconLeft={<MessageCircle className="w-4 h-4 text-white" />}>
                      WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Social Connect Links */}
                <div className="pt-4 border-t border-[#F4B942]/30 space-y-3">
                  <span className="text-xs font-serif font-bold text-[#8F1717] uppercase tracking-wider block">
                    Follow & Connect
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={SITE_CONFIG.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 text-xs font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>

                    <a
                      href={SITE_CONFIG.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#E4405F]/10 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border border-[#E4405F]/30 text-xs font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* RIGHT COLUMN: 2. CONSULTATION ENQUIRY FORM */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <Card className="p-7 sm:p-8 space-y-6 border-2 border-[#F4B942]">
                
                <div className="border-b border-[#F4B942]/30 pb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1717]">
                    Consultation Enquiry Form
                  </h2>
                  <p className="text-xs text-[#3B1712]/80 font-sans mt-1">
                    Fill in your details below to generate an instant WhatsApp pre-filled request.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    className="p-8 bg-[#FFFDF8] rounded-2xl border-2 border-[#F4B942] text-center space-y-5 my-4 shadow-sm"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border-2 border-[#25D366]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#8F1717]">
                      Enquiry Generated Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3B1712] max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, click the button below to send your pre-filled details directly to Guruji Avijit Sharma Sarkar.
                    </p>

                    <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                      <a href={whatsappRedirectUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="saffron" size="md" iconLeft={<MessageCircle className="w-4 h-4 text-white" />}>
                          Launch WhatsApp Chat Now
                        </Button>
                      </a>
                      <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
                        Submit Another Query
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {error && (
                      <div role="alert" aria-live="polite" className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="contact-name" className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          aria-required="true"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ananya Roy"
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#F4B942]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4B942] text-[#3B1712]"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="contact-phone" className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                          Mobile Phone *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          aria-required="true"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="8981091491"
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#F4B942]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4B942] text-[#3B1712]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label htmlFor="contact-email" className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sharmasarkaravijit@gmail.com"
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#F4B942]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4B942] text-[#3B1712]"
                        />
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-1">
                        <label htmlFor="contact-service" className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                          Requested Service
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#F4B942]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4B942] text-[#3B1712]"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setFormData(prev => ({ ...prev, contactMethod: method }))}
                            className={`py-2 px-3 text-xs font-serif font-bold rounded-xl border transition-all ${
                              formData.contactMethod === method
                                ? 'bg-[#8F1717] text-[#FFD166] border-[#F4B942]'
                                : 'bg-white text-[#3B1712] border-[#F4B942]/40 hover:bg-[#FFF7E6]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Concerns */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold font-serif text-[#3B1712] uppercase">
                        Message / Query Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="State your primary query (e.g. birth chart guidance, relationship harmony, career decisions)."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F4B942]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4B942] text-[#3B1712]"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        iconLeft={<Send className="w-4 h-4 text-[#FFD166]" />}
                      >
                        Submit & Redirect to WhatsApp
                      </Button>
                    </div>

                    <p className="text-[11px] text-[#3B1712]/65 text-center font-mono">
                      * Submitting automatically formats your query and opens WhatsApp.
                    </p>

                  </form>
                )}

              </Card>
            </motion.div>

          </div>

          {/* 3. LOCATION SECTION */}
          <div className="bg-[#FFFDF8] rounded-2xl p-8 border-2 border-[#F4B942]/40 shadow-premium-card space-y-6">
            <SectionHeader
              badge="Sanctuary Location"
              title="Serampore Sanctuary Location"
              subtitle="52 Raja Rammohan Roy Sarani, Serampore, Hooghly (Opposite Apollo Pharmacy, Serampore Station)"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4 text-sm text-[#3B1712]">
                <h3 className="font-serif text-lg font-bold text-[#8F1717]">
                  Directions & Arrival Guide:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>Located directly opposite Apollo Pharmacy near Serampore Railway Station exit.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>In-person consultations are conducted by prior appointment for sanctuary peace.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                    <span>Accessible from Kolkata Metro & Local trains (Serampore Station stop).</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=52+Raja+Rammohan+Roy+Sarani+Serampore+Station+Hooghly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" iconLeft={<Navigation className="w-4 h-4 text-[#8F1717]" />}>
                      Open Map Directions
                    </Button>
                  </a>
                </div>
              </div>

              {/* Official Visiting Card Banner Showcase */}
              <div className="lg:col-span-6 order-1 lg:order-2 group relative rounded-2xl border-2 border-[#F4B942] overflow-hidden bg-[#6E1010] shadow-premium-card transition-all duration-300 hover:border-[#FFD166] hover:shadow-soft-gold">
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

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
