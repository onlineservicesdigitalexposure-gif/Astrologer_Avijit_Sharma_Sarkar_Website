export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export const SITE_CONFIG = {
  name: "R.A. DIVINE ASTROLOGY",
  tagline: "Divine Guidance for Clarity, Peace & a Better Tomorrow",
  astrologer: {
    name: "Avijit Sharma Ssarrkar",
    title: "Bagalamukhi Sadhak | KP Astrologer | Astro Spiritual Advisor",
    experienceYears: "18+",
    consultationsCompleted: "25,000+",
    bioShort: "Certified KP Astrologer, Bagalamukhi Sadhak, and Astro Spiritual Advisor offering personalized astrology and spiritual guidance.",
    bioFull: `Avijit Sharma Ssarrkar is a certified KP Astrologer, Bagalamukhi Sadhak, and Astro Spiritual Advisor with over 18 years of dedicated practice in Krishnamurti Padhdhati (KP Astrology), Vedic Astrology, Tantric spiritual remedies, Gemology, and Vastu Shastra.

Deeply grounded in sacred traditions and stellar calculations, his consultations blend precise KP Sub-Lord analysis with compassionate spiritual insights to help seekers find clarity, inner peace, and direction in life.`,
    specializations: [
      "KP Astrology (Krishnamurti Padhdhati) & Stellar Predictions",
      "Maa Bagalamukhi Ritual & Mantra Guidance",
      "Vedic Birth Chart & Planetary Dasha Analysis",
      "Vastu Shastra for Home & Business",
      "Gemstone & Rudraksha Guidance",
      "Marriage & Love Relationship Compatibility",
      "Career & Financial Consultation"
    ],
    achievements: [
      "Certified KP Astrologer (Krishnamurti Padhdhati Stellar Astrology)",
      "Revered Bagalamukhi Sadhak with Siddha Diksha",
      "Awarded Gold Medalist in Vedic Jyotish & Karmakanda",
      "Trusted Spiritual Advisor across India & Worldwide",
      "Pioneer in Consecrated Gemstone Consultation"
    ]
  },
  contact: {
    phone: "8981091491",
    formattedPhone: "8981091491",
    whatsapp: "+91 89810 91491",
    email: "sharmaSsarrkaravijit@gmail.com",
    address: "52 Raja Rammohan Roy Sarani, Serampore, Hooghly, West Bengal - 712203",
    landmark: "Opposite Apollo Pharmacy, Serampore Station",
    city: "Serampore",
    district: "Hooghly",
    state: "West Bengal",
    pincode: "712203",
    country: "India",
    consultationHours: "Mon - Sat: 10:00 AM - 7:00 PM IST",
    emergencyLine: "8981091491 (WhatsApp for Urgent Ritual Remedies)"
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ] as NavItem[],
  socialLinks: {
    whatsapp: "https://wa.me/918981091491",
    facebook: "https://www.facebook.com/avijit.sharmaSsarrkar.7",
    instagram: "https://www.instagram.com/avijitshramassarrkar/",
    youtube: "https://youtube.com"
  }
};

export const SITE_STATS: StatItem[] = [
  {
    value: "2026",
    label: "Established",
    description: "Dedicated sanctuary for divine spiritual consulting"
  },
  {
    value: "100%",
    label: "Personalized Guidance",
    description: "One-to-one individual attention for every seeker"
  },
  {
    value: "100%",
    label: "Confidential Consultation",
    description: "Strict privacy and personal care guaranteed"
  },
  {
    value: "18+",
    label: "Years Guidance",
    description: "Authentic Vedic astrology and spiritual wisdom"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What makes Bagalamukhi Sadhana astrology distinct from standard astrology?",
    answer: "Standard astrology identifies planetary influences, whereas Bagalamukhi Sadhana integrates divine Mahavidya spiritual power to mitigate negative planetary malefic influences (graha dosha), neutralize adversaries, resolve stagnations, and provide powerful protective shields."
  },
  {
    category: "Consultation",
    question: "Can I take an online video/phone consultation if I live far away?",
    answer: "Yes. Avijit Sharma Ssarrkar conducts high-definition video and audio consultations worldwide via WhatsApp/Zoom. Exact birth details (Date, Time, and City of birth) are analyzed prior to the call."
  },
  {
    category: "Details Required",
    question: "What if I do not have my exact birth time for Kundli analysis?",
    answer: "If exact time of birth is unknown, Prashna Kundli (Horary Astrology), Palmistry reading, and Prashna Shastra are utilized to determine planetary positions and answer specific life questions accurately."
  },
  {
    category: "Remedies",
    question: "Are the suggested remedies difficult or expensive to perform?",
    answer: "No. Guruji recommends practical, authentic, and customized remedies ranging from simple Vedic mantras, daily rituals, specific fasts, consecrated gemstones, to personalized Bagalamukhi Pujas depending on your comfort and necessity."
  },
  {
    category: "Privacy",
    question: "Is my birth chart and personal consultation data kept private?",
    answer: "Absolute confidentiality is maintained. Your Kundli details, family matters, business queries, and spiritual history are never shared with any third party."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar Singhania",
    location: "Serampore, WB",
    service: "Career & Business Consultation",
    quote: "Avijit Sharma Ssarrkar's Bagalamukhi guidance gave me immense clarity during a multi-year business deadlock. His calm demeanor and planetary insight provided real direction.",
    rating: 5,
    date: "February 2026"
  },
  {
    id: "2",
    name: "Dr. Ananya Roy",
    location: "Kolkata, WB",
    service: "Birth Chart Analysis",
    quote: "I was struggling with major career uncertainty. The dasha breakdown and gemstone guidance by Guruji proved spot on. Within 4 months, my career direction cleared up completely.",
    rating: 5,
    date: "January 2026"
  },
  {
    id: "3",
    name: "Vikram & Sunita Malhotra",
    location: "Hooghly, WB",
    service: "Love & Relationship Guidance",
    quote: "The warmth and spiritual accuracy in R.A. Divine Astrology's readings are unmatched. Guruji's practical advice restored peace and harmony in our family.",
    rating: 5,
    date: "December 2025"
  },
  {
    id: "4",
    name: "Priya Sengupta",
    location: "Kolkata, WB",
    service: "Vastu & Spiritual Guidance",
    quote: "Receiving practical Vastu adjustments and gemstone guidance from Guruji helped remove my personal blockages. Highly recommended for authentic astrology.",
    rating: 5,
    date: "March 2026"
  }
];
