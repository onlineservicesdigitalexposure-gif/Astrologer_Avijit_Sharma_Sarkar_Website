export interface GalleryItem {
  id: string;
  title: string;
  category: 'Astrology' | 'Spiritual' | 'Consultation' | 'Events' | 'Promotional';
  description: string;
  image: string;
  location?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Authentic Local Gallery Images from public/image/Gallery/
  {
    id: "g1",
    title: "Shri Avijit Sharma Ssarrkar in Dhyana Yoga Meditation",
    category: "Spiritual",
    description: "Deep Dhyana meditation session performed by Shri Avijit Sharma Ssarrkar in red pitambari robes before the sacred garlanded Shiva Lingam at the sanctuary.",
    image: "/image/Gallery/image1.jpeg",
    location: "Sanctuary Mandir",
    aspectRatio: "square"
  },
  {
    id: "g2",
    title: "Sacred Bagalamukhi Havan Ahuti Ritual",
    category: "Spiritual",
    description: "Divine ghee Ahuti offered into the holy Yajna fire pit to invoke Maa Bagalamukhi's protective grace and burn away planetary karmic obstacles.",
    image: "/image/Gallery/image2.jpeg",
    location: "Havan Sanctuary",
    aspectRatio: "portrait"
  },
  {
    id: "g3",
    title: "Divine Yajna Fire & Samagri Consecration",
    category: "Spiritual",
    description: "Sacred fire ritual with consecrated herbal wood samagri and fresh fruit offerings for planetary harmony and spiritual cleansing.",
    image: "/image/Gallery/image3.jpeg",
    location: "Sacred Shrine Altar",
    aspectRatio: "portrait"
  },
  {
    id: "g4",
    title: "Haldi & Kumkum Yantra Mandala Sthapana",
    category: "Spiritual",
    description: "Traditional yellow turmeric and red kumkum geometric Yantra grid drawn for Bagalamukhi and Navagraha Sthapana rituals.",
    image: "/image/Gallery/image4.jpeg",
    location: "Sanctuary Shrine",
    aspectRatio: "portrait"
  },
  {
    id: "g5",
    title: "Bagalamukhi Sadhak Shri Avijit Sharma Ssarrkar in Yajna",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar in traditional saffron pitambari offering prayerful Ahuti into the sacred Mahavidya Yajna fire.",
    image: "/image/Gallery/image5.jpeg",
    location: "Sanctuary Shrine",
    aspectRatio: "landscape"
  },
  {
    id: "g6",
    title: "Blazing Agni Dev & Red Hibiscus (Jaba) Offerings",
    category: "Spiritual",
    description: "Intense holy flames of Agni Dev rising from the Havan Kund with sacred red hibiscus flowers offered to Ma Kali and Ma Bagalamukhi.",
    image: "/image/Gallery/image6.jpeg",
    location: "Havan Altar",
    aspectRatio: "portrait"
  },
  {
    id: "g7",
    title: "Sacred Coconut Purnahuti Mahayajna",
    category: "Spiritual",
    description: "Divine Purnahuti ceremony featuring sacred coconut and Samagri offered into the Yajna fire for complete obstacle destruction.",
    image: "/image/Gallery/image7.jpeg",
    location: "Sanctuary Havan Room",
    aspectRatio: "portrait"
  },
  {
    id: "g8",
    title: "Shri Avijit Sharma Ssarrkar in Open-Air Mahayajna",
    category: "Events",
    description: "Guruji seated in traditional yellow pitambari silk holding sacred copper Arghya vessels during a grand outdoor Vedic ritual.",
    image: "/image/Gallery/image8.jpeg",
    location: "Open-Air Sacred Grounds",
    aspectRatio: "square"
  },
  {
    id: "g9",
    title: "Sacred Scripture Mantra Recitation & Ahuti",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar chanting Vedic Sooktams from sacred texts while offering herbal samagri into the burning Havan Kund.",
    image: "/image/Gallery/image9.jpeg",
    location: "Private Sadhana Chamber",
    aspectRatio: "portrait"
  },
  {
    id: "g10",
    title: "Outdoor Mahavastu Geometric Yantra Consecration",
    category: "Spiritual",
    description: "Guruji preparing a large outdoor geometric Yantra pedestal drawn with turmeric lines and red bindu marks for intense directional alignment.",
    image: "/image/Gallery/image10.jpeg",
    location: "Sacred Outdoor Complex",
    aspectRatio: "portrait"
  },
  {
    id: "g11",
    title: "Divine Guru Blessings & Spiritual Recognition",
    category: "Events",
    description: "Shri Avijit Sharma Ssarrkar being honored and blessed on stage by revered Jagadguru spiritual leaders during a state Vedic convention.",
    image: "/image/Gallery/image11.jpeg",
    location: "Grand Spiritual Conference",
    aspectRatio: "landscape"
  },
  {
    id: "g12",
    title: "Midnight Tantric Sadhana & Group Havan",
    category: "Events",
    description: "Shri Avijit Sharma Ssarrkar in Namaskar prayer during a solemn night-long Bagalamukhi Sadhana session with senior Pujaris.",
    image: "/image/Gallery/image12.jpeg",
    location: "Midnight Sadhana Pandal",
    aspectRatio: "portrait"
  },
  {
    id: "g13",
    title: "Sanctum Shrine Prayer & Guru Vandana",
    category: "Spiritual",
    description: "Guruji seated in meditation before the illuminated sanctuary shrine displaying garlanded portraits of Maa Bagalamukhi and Siddha Lineage Gurus.",
    image: "/image/Gallery/image13.jpeg",
    location: "Sanctuary Inner Shrine",
    aspectRatio: "portrait"
  },
  {
    id: "g14",
    title: "Medicinal Herb & Turmeric Samagri Ahuti",
    category: "Spiritual",
    description: "Consecrated raw turmeric, dry fruits, and medicinal herbs offered into the Yajna fire for planetary disease mitigation and health fortification.",
    image: "/image/Gallery/image14.jpeg",
    location: "Sanctuary Chamber",
    aspectRatio: "portrait"
  },
  {
    id: "g16",
    title: "Sanctuary Festival Puja & Maha Havan Setup",
    category: "Events",
    description: "Wide sanctuary view showing Shri Avijit Sharma Ssarrkar conducting Mahaviddya Havan amidst festive lighting and elaborate fruit and sweet offerings.",
    image: "/image/Gallery/image16.jpeg",
    location: "Sanctuary Prayer Hall",
    aspectRatio: "landscape"
  },
  {
    id: "g17",
    title: "Sanctuary Havan Preparation & Offerings Grid",
    category: "Spiritual",
    description: "Panoramic layout of sacred offerings including ghee bowls, turmeric, nuts, and fresh flowers prepared for planetary peace.",
    image: "/image/Gallery/image17.jpeg",
    location: "Sanctuary Marble Altar",
    aspectRatio: "landscape"
  },
  {
    id: "g18",
    title: "Digital Horoscope Analysis & Desk Consultation",
    category: "Consultation",
    description: "Shri Avijit Sharma Ssarrkar evaluating birth charts, planetary dashas, and Kundli calculations on laptop at his Serampore consultation desk.",
    image: "/image/Gallery/image18.jpeg",
    location: "Serampore Consultation Office",
    aspectRatio: "portrait"
  },
  {
    id: "g19",
    title: "Deep Planetary Transit & Dasha Consultation",
    category: "Consultation",
    description: "Guruji analyzing Vimshottari dasha timelines and planetary transit impacts for a seeker's career and relationship queries.",
    image: "/image/Gallery/image19.jpeg",
    location: "Sanctuary Consultation Desk",
    aspectRatio: "portrait"
  },
  {
    id: "g20",
    title: "R.A. Divine Serampore Consultation Chamber",
    category: "Consultation",
    description: "Serampore consultation room interior featuring traditional zodiac charts and digital consultation setup for private 1-on-1 seeker guidance.",
    image: "/image/Gallery/image20.jpeg",
    location: "Serampore Sanctuary",
    aspectRatio: "portrait"
  },
  {
    id: "g21",
    title: "Temple Pilgrimage & Sacred Teertha Visit",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar visiting a sacred temple shrine compound during a holy pilgrimage trip across West Bengal.",
    image: "/image/Gallery/image21.jpeg",
    location: "Temple Pilgrimage Complex",
    aspectRatio: "portrait"
  },
  {
    id: "g22",
    title: "Illuminated Sanctum & Glowing Havan Fire",
    category: "Spiritual",
    description: "Perspective view of the sanctum sanctorum marble mandir shrine bathed in ambient light behind the roaring Yajna Kund fire.",
    image: "/image/Gallery/image22.jpeg",
    location: "Sanctuary Sanctum",
    aspectRatio: "portrait"
  },
  {
    id: "g23",
    title: "Sruva Ghee Offering & Mantra Recitation",
    category: "Spiritual",
    description: "Guruji using the traditional wooden Sruva spoon to pour sacred cow ghee into the fire while reciting Bagalamukhi Beej Mantras.",
    image: "/image/Gallery/image23.jpeg",
    location: "Sanctuary Shrine",
    aspectRatio: "portrait"
  },
  {
    id: "g24",
    title: "Gaumukhi Japa Mala Mantra Meditation",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar engaged in confidential rosary Japa meditation using the sacred Gaumukhi cloth bag in the temple.",
    image: "/image/Gallery/image24.jpeg",
    location: "Inner Mandir Shrine",
    aspectRatio: "portrait"
  },
  {
    id: "g25",
    title: "Reverent Pranam at Lotus Shrine Altar",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar in red robes offering humble Pranam prayers at the lotus-decorated sanctuary altar.",
    image: "/image/Gallery/image25.jpeg",
    location: "Sanctuary Altar",
    aspectRatio: "portrait"
  },
  {
    id: "g26",
    title: "Holy River Bank Teertha Kshetra Visit",
    category: "Spiritual",
    description: "Shri Avijit Sharma Ssarrkar on the banks of a holy river during sacred rituals and spiritual reflection.",
    image: "/image/Gallery/image26.jpeg",
    location: "River Teertha Kshetra",
    aspectRatio: "square"
  },
  {
    id: "g27",
    title: "Outdoor Earth-Excavated Bhoomi Kunda Yajna",
    category: "Events",
    description: "Authentic open-air Bhoomi Kunda Tantric Mahayajna with intense mantra chanting over an underground earth-carved fire pit.",
    image: "/image/Gallery/image27.jpeg",
    location: "Outdoor Sadhana Grounds",
    aspectRatio: "portrait"
  },
  {
    id: "g28",
    title: "Ancient Temple Stone Wall Chin Mudra Dhyana",
    category: "Spiritual",
    description: "Guruji seated in Chin Mudra meditation against the heritage carved stone wall of an ancient Peetham temple.",
    image: "/image/Gallery/image28.jpeg",
    location: "Heritage Temple Shrine",
    aspectRatio: "portrait"
  },
  {
    id: "g29",
    title: "Brass Ghanta Bell Ringing & Flower Archana",
    category: "Spiritual",
    description: "Ritual worship with brass bell ringing, fresh flower offerings, and Stotram recitations for domestic peace and prosperity.",
    image: "/image/Gallery/image29.jpeg",
    location: "Sanctuary Altar",
    aspectRatio: "landscape"
  },
  {
    id: "g30",
    title: "Devotee Home Griha Shanti Havan Yajna",
    category: "Events",
    description: "Personalized Griha Shanti Havan conducted at a seeker's residence to remove negative energy and bring family harmony.",
    image: "/image/Gallery/image30.jpeg",
    location: "Devotee Residence",
    aspectRatio: "portrait"
  },
  {
    id: "g31",
    title: "Side Profile Ahuti & Scripture Chanting",
    category: "Spiritual",
    description: "Focused side view of Guruji reciting mantras from sacred texts while pouring ghee Ahuti into the high Yajna fire.",
    image: "/image/Gallery/image31.jpeg",
    location: "Havan Room",
    aspectRatio: "landscape"
  },
  {
    id: "g32",
    title: "Sacred 108 Terracotta Diya Deepotsav on Banana Leaves",
    category: "Spiritual",
    description: "Beautiful dual row illumination of consecrated clay oil lamps lit on fresh banana leaves for Mahavidya Deepotsav.",
    image: "/image/Gallery/image32.jpeg",
    location: "Sanctuary Shrine Floor",
    aspectRatio: "portrait"
  },
  {
    id: "g33",
    title: "Energetic Beej Mantra Recitation & High Fire",
    category: "Spiritual",
    description: "Intense Beej Mantra chanting with hand mudras performed by Shri Avijit Sharma Ssarrkar before rising Yajna flames.",
    image: "/image/Gallery/image33.jpeg",
    location: "Sanctuary Shrine",
    aspectRatio: "landscape"
  },
  {
    id: "g34",
    title: "Sacred Scripture Study & Archana at Marble Shrine",
    category: "Spiritual",
    description: "Guruji studying sacred Tantric and Vedic texts in front of the illuminated marble temple shrine.",
    image: "/image/Gallery/image34.jpeg",
    location: "Sanctuary Mandir",
    aspectRatio: "portrait"
  },
  {
    id: "g35",
    title: "Garbhagriha Sanctum Altar & Marigold Garlands",
    category: "Spiritual",
    description: "Close-up view of the sanctuary's inner sanctum altar embellished with yellow marigolds, lit candles, and consecrated offerings.",
    image: "/image/Gallery/image35.jpeg",
    location: "Inner Garbhagriha Sanctum",
    aspectRatio: "portrait"
  },

  // Official Certificates & Academic Recognitions (Promotional)
  {
    id: "c1",
    title: "Adi Guru Shankaracharya Vedic Seminar Certificate",
    category: "Promotional",
    description: "Certificate of Participation from Adi Guru Shankaracharya Vedic Research Institution for the 2023 Howrah Seminar.",
    image: "/image/Certificates/certificate1.jpeg",
    location: "Official Credential",
    aspectRatio: "landscape"
  },
  {
    id: "c2",
    title: "Hastajyotir Vidyanidhi Scholar Award Certificate",
    category: "Promotional",
    description: "Certificate of Appreciation awarding the title 'হস্তজ্যোতির্বিদ্যানিধি' (Hastajyotir Vidyanidhi) by Adi Guru Shankaracharya Vedic Research Institution.",
    image: "/image/Certificates/certificate2.jpeg",
    location: "Official Credential",
    aspectRatio: "landscape"
  },
  {
    id: "c3",
    title: "Mega Workshop on Astrology Certificate",
    category: "Promotional",
    description: "Official certificate for participating in the Mega Workshop on Astrology by Adi Guru Shankaracharya Temple & Social Development Trust.",
    image: "/image/Certificates/certificate3.jpeg",
    location: "Official Credential",
    aspectRatio: "landscape"
  },
  {
    id: "c4",
    title: "Jyotish Vidyanidhi - KP Basic Certification",
    category: "Promotional",
    description: "Certificate of Appreciation for completing 'JYOTISH VIDYANIDHI - KP BASIC' in Krishnamurti Padhdhati Stellar Astrology.",
    image: "/image/Certificates/certificate4.jpeg",
    location: "Official Credential",
    aspectRatio: "landscape"
  },
  {
    id: "c5",
    title: "Jyotish Maha Guru & Jyotish Parasar Title Honor",
    category: "Promotional",
    description: "Prestigious certificate from B.S Institute of Vedic Astrology conferring the title 'Jyotish Maha Guru' and 'Jyotish Parasar'.",
    image: "/image/Certificates/certificate5.jpeg",
    location: "Official Credential",
    aspectRatio: "landscape"
  },

  // Official Banners & Registration Passes
  {
    id: "b1",
    title: "Official Sanctuary Poster & Council Credentials",
    category: "Promotional",
    description: "Official sanctuary poster displaying Bagalamukhi Sadhak Shri Avijit Sharma Ssarrkar, Maa Bagalamukhi, and Astro Council registration details.",
    image: "/image/Banner/Banner1.jpeg",
    location: "Sanctuary Poster",
    aspectRatio: "portrait"
  },
  {
    id: "b2",
    title: "Discover Your Destiny - Astrology Services Showcase",
    category: "Promotional",
    description: "Promotional poster detailing key consultation areas: Birth Chart, Love & Relationships, Career, Finance, Health, and Vastu.",
    image: "/image/Banner/Banner2.jpeg",
    location: "Official Showcase",
    aspectRatio: "portrait"
  },
  {
    id: "b3",
    title: "Astro Council of West Bengal Official Identity Pass",
    category: "Promotional",
    description: "Official registration card (Reg No: WBAXXVI-S0000115) from Astrology & Astrologers Welfare Association appointing Shri Avijit Sharma Ssarrkar as Asst. Treasurer.",
    image: "/image/Banner/Banner3.jpeg",
    location: "Official Registration",
    aspectRatio: "portrait"
  },
  {
    id: "vc",
    title: "Official R.A. Divine Astrology Visiting Card",
    category: "Promotional",
    description: "Sanctuary business visiting card with phone 8981091491, Serampore location, and service guarantee details.",
    image: "/image/Banner/VisitingCard.jpeg",
    location: "Business Card",
    aspectRatio: "landscape"
  }
];
