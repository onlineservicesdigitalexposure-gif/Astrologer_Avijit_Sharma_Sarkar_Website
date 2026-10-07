import React from 'react';
import { SEO } from '@/components/ui/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustHighlightStrip } from '@/components/sections/TrustHighlightStrip';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { ServicesPreviewSection } from '@/components/sections/ServicesPreviewSection';
import { AstrologyExperienceSection } from '@/components/sections/AstrologyExperienceSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { GalleryPreviewSection } from '@/components/sections/GalleryPreviewSection';
import { ConsultationCTASection } from '@/components/sections/ConsultationCTASection';
import { LocationSection } from '@/components/sections/LocationSection';
import { FinalContactSection } from '@/components/sections/FinalContactSection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="R.A. Divine Astrology | Avijit Sharma Sarkar | Astrology & Spiritual Guidance"
        description="R.A. Divine Astrology by Avijit Sharma Sarkar offers personalized astrology and spiritual guidance in Serampore, Hooghly, West Bengal."
        canonicalPath="/"
      />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Highlight Strip */}
      <TrustHighlightStrip />

      {/* 3. About Preview */}
      <AboutPreviewSection />

      {/* 4. Services Preview */}
      <ServicesPreviewSection />

      {/* 5. Astrology Experience Section */}
      <AstrologyExperienceSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 7. Gallery Preview */}
      <GalleryPreviewSection />

      {/* 8. Consultation CTA */}
      <ConsultationCTASection />

      {/* 9. Location Section */}
      <LocationSection />

      {/* 10. Final Contact Bar */}
      <FinalContactSection />
    </>
  );
};

export default Home;
