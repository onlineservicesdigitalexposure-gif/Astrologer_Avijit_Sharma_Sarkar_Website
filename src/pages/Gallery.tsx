import React from 'react';
import { Sparkles } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CallToActionSection } from '@/components/sections/CallToActionSection';

export const Gallery: React.FC = () => {
  return (
    <>
      <SEO
        title="Sanctuary Gallery & KP Certification | R.A. Divine Astrology"
        description="View gallery photos, official KP Astrology certifications, Bagalamukhi Havans, and sanctuary consultations by Avijit Sharma Ssarrkar in Serampore."
        canonicalPath="/gallery"
      />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#6E1010] via-[#8F1717] to-[#6E1010] text-[#FFD166] py-16 lg:py-20 relative overflow-hidden border-b-2 border-[#F4B942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 text-xs font-serif font-bold uppercase tracking-wider text-[#FFD166]">
            <Sparkles className="w-3.5 h-3.5" />
            Authentic Local Archives
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Sacred Gallery & Visual Highlights
          </h1>
          <p className="text-base sm:text-lg text-[#FFFDF8]/85 max-w-2xl mx-auto font-display italic">
            Visual Highlights of Bagalamukhi Havans, Consecrated Yantras, Gemstones, Certificates & Sanctuary Moments
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-24 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Sacred Archives"
            title="Glimpses of Divine Energy & Sanctuary Practice"
            subtitle="Explore authentic imagery of sacred Pujas, astrological consultations, official certificates, and sanctuary atmosphere."
          />

          <GalleryGrid />

        </div>
      </section>

      {/* Bottom CTA */}
      <CallToActionSection />
    </>
  );
};

export default Gallery;
