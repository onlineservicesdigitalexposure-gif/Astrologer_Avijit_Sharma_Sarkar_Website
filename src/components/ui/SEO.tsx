import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/data/site';

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.astrologer.bioShort,
  canonicalPath = '',
  image = '/image/Gallery/hero.png',
  type = 'website'
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radivineastrology.com';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  // Factual LocalBusiness JSON-LD schema with exact provided address & phone
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'R.A. Divine Astrology',
    image: `${siteUrl}${image}`,
    telephone: '+918981091491',
    email: SITE_CONFIG.contact.email,
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '52 Raja Rammohan Roy Sarani',
      addressLocality: 'Serampore',
      addressRegion: 'Hooghly, West Bengal',
      postalCode: '712203',
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.7521',
      longitude: '88.3418'
    },
    founder: {
      '@type': 'Person',
      name: 'Avijit Sharma Ssarrkar',
      jobTitle: 'Bagalamukhi Sadhak | KP Astrologer | Astro Spiritual Advisor'
    },
    description: description
  };

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="R.A. Divine Astrology" />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </Helmet>
  );
};

