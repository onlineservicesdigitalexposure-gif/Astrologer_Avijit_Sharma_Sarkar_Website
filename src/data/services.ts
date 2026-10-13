export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Astrology' | 'Spiritual Guidance' | 'Vastu & Energy' | 'Personal Consultation';
  description: string;
  fullDetails: string;
  iconName: string;
  highlights: string[];
  benefits: string[];
  duration: string;
  suitableFor: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "birth-chart-analysis",
    title: "KP & Vedic Birth Chart Analysis",
    subtitle: "KP Stellar Sub-Lord & Dasha Timing",
    category: "Astrology",
    description: "In-depth analysis of natal horoscope charts using Krishnamurti Padhdhati (KP Astrology) Sub-Lord system, Vimshottari Mahadasha periods, and planetary placements.",
    fullDetails: "Your birth chart (Janma Patrika) maps your exact planetary positions at birth. As a certified KP Astrologer, Avijit Sharma Ssarrkar evaluates Nakshatra Sub-Lords, cuspal interlinks, and planetary dasha timelines to help you navigate upcoming life phases with confidence.",
    iconName: "Compass",
    highlights: [
      "KP Astrology (Krishnamurti Padhdhati) Sub-Lord calculation",
      "Vimshottari Dasha timeline calculation",
      "Analysis of Lagna, Moon Sign, and planetary strengths",
      "Identification of favorable & challenging life phases",
      "Practical remedies for malefic planetary dashas"
    ],
    benefits: [
      "Clarity on upcoming life transitions",
      "Early awareness of key planetary dashas",
      "Deeper understanding of personal potential"
    ],
    duration: "45 Mins Session",
    suitableFor: "Seekers wanting a comprehensive overview of their life chart and planetary timelines.",
    popular: true
  },
  {
    id: "love-relationship-guidance",
    title: "Love & Relationship Guidance",
    subtitle: "Emotional Alignment & Partnership Harmony",
    category: "Personal Consultation",
    description: "Astrological assessment of relationship dynamics, mutual planetary placements, and emotional wavelength alignment for enduring harmony.",
    fullDetails: "Relationships require mutual respect and emotional alignment. Guruji provides objective horoscope compatibility guidance for couples navigating misunderstandings or seeking long-term harmony.",
    iconName: "HeartHandshake",
    highlights: [
      "Emotional & planetary compatibility assessment",
      "Venus and Moon placement dynamics",
      "Communication & mutual respect insights",
      "Practical advice for relationship strengthening"
    ],
    benefits: [
      "Greater mutual understanding between partners",
      "Practical approaches to recurring friction",
      "Clarity on partnership longevity"
    ],
    duration: "45 Mins Session",
    suitableFor: "Individuals and couples seeking guidance on relationship dynamics and mutual harmony.",
    popular: true
  },
  {
    id: "marriage-guidance",
    title: "Marriage Guidance",
    subtitle: "Kundli Milan & Marital Wellbeing",
    category: "Astrology",
    description: "Comprehensive pre-marital and marital matching analysis evaluating Ashtakoot Guna Milan, Nadi afflictions, and long-term domestic peace.",
    fullDetails: "A peaceful marriage thrives on shared values and cosmic harmony. Guruji evaluates marital longevity, household stability, and Mangal placements alongside practical remedies for family peace.",
    iconName: "Sparkles",
    highlights: [
      "36 Guna Ashtakoot matching analysis",
      "Mangal placement and Nadi check",
      "Family & domestic stability evaluation",
      "Traditional remedies for marital harmony"
    ],
    benefits: [
      "Objective insight into marital compatibility",
      "Actionable remedies for traditional afflictions",
      "Enhanced confidence in pre-marital decisions"
    ],
    duration: "45 Mins Session",
    suitableFor: "Couples planning marriage, parents, and married individuals seeking household peace.",
    popular: true
  },
  {
    id: "career-business-consultation",
    title: "Career & Business Consultation",
    subtitle: "Professional Elevation & Cosmic Timing",
    category: "Personal Consultation",
    description: "Strategic consultation for job transitions, business ventures, partnership dynamics, and favorable timing for career advancement.",
    fullDetails: "By analyzing the 2nd, 6th, 9th, and 10th houses, Avijit Sharma Ssarrkar identifies optimal cosmic timing for career promotions, job changes, business expansions, and corporate decisions.",
    iconName: "TrendingUp",
    highlights: [
      "Optimal timing for career moves or business launches",
      "Business partner horoscope evaluation",
      "Remedies for professional stagnation",
      "Auspicious Muhurta selection for key decisions"
    ],
    benefits: [
      "Risk mitigation during challenging planetary dashas",
      "Alignment with favorable timing",
      "Enhanced professional focus and stability"
    ],
    duration: "45 Mins Session",
    suitableFor: "Professionals, entrepreneurs, job seekers, and business owners striving for progress.",
    popular: true
  },
  {
    id: "financial-guidance",
    title: "Financial Guidance",
    subtitle: "Wealth Yogas & Cash Flow Stability",
    category: "Astrology",
    description: "Astrological assessment of wealth prospects, cash flow stability, debt management strategies, and activation of positive Dhan Yogas.",
    fullDetails: "Financial stability is influenced by specific planetary combinations. Guruji evaluates the 2nd (wealth) and 11th (gains) houses to help you plan investments and navigate tight financial phases.",
    iconName: "Gem",
    highlights: [
      "Dhan Yoga & Laxmi Yoga assessment",
      "Analysis of wealth and gains houses",
      "Strategies for debt relief & cash flow stability",
      "Consecrated Gemstone & Rudraksha guidance"
    ],
    benefits: [
      "Clear guidance on favorable wealth accumulation phases",
      "Practical spiritual approaches to financial stress",
      "Increased confidence in managing resources"
    ],
    duration: "45 Mins Session",
    suitableFor: "Individuals facing financial uncertainties or seeking strategic timing for wealth decisions.",
    popular: true
  },
  {
    id: "family-personal-guidance",
    title: "Family & Personal Guidance",
    subtitle: "Domestic Peace & Personal Wellbeing",
    category: "Personal Consultation",
    description: "Compassionate spiritual consultation for family disputes, child wellbeing, mental clarity, and personal growth under divine guidance.",
    fullDetails: "Personal wellbeing starts with family peace. Guruji provides empathetic guidance to help resolve household friction, support child focus in education, and restore internal calm.",
    iconName: "HelpCircle",
    highlights: [
      "4th house (home peace) & 5th house (children) analysis",
      "Guidance for family conflict resolution",
      "Practical mantras for mental calm",
      "One-to-one personal attention"
    ],
    benefits: [
      "Restoration of family harmony and understanding",
      "Mental clarity and anxiety relief",
      "Stronger emotional bonds within the home"
    ],
    duration: "45 Mins Session",
    suitableFor: "Families seeking peace, individuals experiencing personal stress, or parents needing advice.",
    popular: true
  },
  {
    id: "vastu-guidance",
    title: "Vastu Guidance",
    subtitle: "Harmonizing Living & Working Spaces",
    category: "Vastu & Energy",
    description: "Vastu Shastra consultation for home and office spaces without structural demolition, balancing directional energies for peaceful living.",
    fullDetails: "Harmonizing the five natural elements (Pancha Mahabhuta) within your environment promotes positivity and restfulness. Guruji offers non-invasive Vastu corrections and spatial energy advice.",
    iconName: "Home",
    highlights: [
      "16 Vastu direction zone evaluation",
      "Brahmasthan and entrance alignment",
      "Non-demolition remedies & spatial balancing",
      "Commercial office wealth zone guidance"
    ],
    benefits: [
      "Enhanced positive energy at home and workplace",
      "Reduction of environmental stagnation",
      "Greater peace of mind for occupants"
    ],
    duration: "Site / Map Consultation",
    suitableFor: "Homeowners, office proprietors, real estate buyers, and architects.",
    popular: true
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    subtitle: "Inner Peace & Spiritual Sadhana Discipline",
    category: "Spiritual Guidance",
    description: "Dedicated spiritual consultation to help seekers develop daily mantra discipline, inner resilience, and peace of mind.",
    fullDetails: "Spiritual discipline provides an anchor during turbulent times. Guruji shares traditional mantra chanting guidance, meditation advice, and spiritual principles for inner growth.",
    iconName: "Sun",
    highlights: [
      "Personalized mantra japa recommendations",
      "Spiritual discipline and daily routine advice",
      "Guidance for mental peace & clarity",
      "Traditional scriptural wisdom"
    ],
    benefits: [
      "Deeper internal calm and mental resilience",
      "Clear direction in personal spiritual practice",
      "Enhanced focus and positive mindset"
    ],
    duration: "45 Mins Session",
    suitableFor: "Seekers wanting dedicated spiritual direction and daily peace of mind.",
    popular: true
  },
  {
    id: "bagalamukhi-spiritual-guidance",
    title: "Bagalamukhi Spiritual Guidance",
    subtitle: "Maa Bagalamukhi Sadhana & Protective Remedies",
    category: "Spiritual Guidance",
    description: "Specialized spiritual guidance rooted in Maa Bagalamukhi Mahavidya Sadhana for neutralizing negativity, court case stress, and obstacles.",
    fullDetails: "As an initiated Bagalamukhi Sadhak, Avijit Sharma Ssarrkar provides traditional Bagalamukhi ritual remedies, Stambhana mantra guidance, and protective Yantra advice for individuals facing severe adversity.",
    iconName: "Flame",
    highlights: [
      "Maa Bagalamukhi Sadhana principles & mantras",
      "Guidance for legal & litigation stress",
      "Protection from negative energies & competition",
      "Consecrated Yantra installation advice"
    ],
    benefits: [
      "Strengthened mental courage during crises",
      "Neutralization of malicious rival intentions",
      "Powerful aura protection and spiritual strength"
    ],
    duration: "60 Mins Session",
    suitableFor: "Individuals facing intense professional sabotage, legal disputes, or severe life blockages.",
    popular: true
  }
];
