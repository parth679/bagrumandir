import { AartiTiming, DarshanPhoto, YatriRoom, SpiritualExperience, TempleEvent, AudioTrack, ScriptureExcerpt } from '../types';

export const TEMPLE_INFO = {
  name: "Shree Swaminarayan Mandir & Yatri Nivas",
  branchName: "Heritage Kalupur Branch Complex",
  address: "Swaminarayan Mandir Road, Kalupur Heritage Zone, Ahmedabad, Gujarat - 380001",
  phone: "+91 7922132170",
  secondaryPhone: "+91 9825012345",
  email: "info@swaminarayan.in",
  yatriNivasHelpline: "+91 7922132175",
  website: "swaminarayan.in",
  openingHours: {
    morning: "05:00 AM - 12:00 PM",
    evening: "03:00 PM - 08:30 PM",
    fullText: "Open Daily: 05:00 AM - 12:00 PM & 03:00 PM - 08:30 PM"
  },
  establishedYear: "1822 CE",
  founder: "Bhagwan Swaminarayan",
  googleMapsUrl: "https://maps.google.com/?q=Shree+Swaminarayan+Mandir+Kalupur",
  socials: {
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/917922132170"
  }
};

export const AARTI_TIMINGS: AartiTiming[] = [
  {
    id: "mangla",
    name: "Mangla Aarti",
    gujaratiName: "મંગળા આરતી",
    time: "05:30 AM",
    meaning: "First prayer of the day awakening the deities with sacred lamps.",
    description: "Performed early morning to awaken the divine presence. Devotees assemble in deep silence to receive morning blessings."
  },
  {
    id: "shangar",
    name: "Shangar Aarti",
    gujaratiName: "શણગાર આરતી",
    time: "08:05 AM",
    meaning: "Adornment prayer unveiling the exquisite daily garments.",
    description: "The deities are adorned in handcrafted silk clothes (Vastra) and fragrant flower garlands. A joyous kirtan follows."
  },
  {
    id: "rajbhog",
    name: "Rajbhog Aarti",
    gujaratiName: "રાજભોગ આરતી",
    time: "10:30 AM",
    meaning: "Midday royal food offering prayer.",
    description: "Special pure sattvic prasad & bhog offered to the deities before the afternoon repose."
  },
  {
    id: "sandhya",
    name: "Sandhya Aarti",
    gujaratiName: "સંધ્યા આરતી",
    time: "06:45 PM",
    meaning: "Sunset prayer with glowing brass lamps and bells.",
    description: "As dusk falls, the main sanctum glows with multi-tiered brass oil lamps, filled with deep spiritual energy."
  },
  {
    id: "shayan",
    name: "Shayan Aarti",
    gujaratiName: "શયન આરતી",
    time: "08:30 PM",
    meaning: "Final night prayer prior to sanctum repose.",
    description: "Night time gentle prayer ending the day with devotional lullabies and silent darshan."
  }
];

export const DARSHAN_PHOTOS: DarshanPhoto[] = [
  {
    id: "d1",
    title: "Shree Radha Krishna & Harikrishna Maharaj Shringar",
    date: "Today's Sacred Shringar",
    category: "main_deity",
    imageUrl: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
    caption: "Adorned in royal golden silk with fresh marigold and lotus flower garlands.",
    location: "Central Sanctum (Narnarayandev Gadi)"
  },
  {
    id: "d2",
    title: "Golden Canopy & Intricate Carved Mandap",
    date: "Main Sabha Hall",
    category: "architecture",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    caption: "Burma teak wood carvings handcrafted in 1822 CE by ancient master artisans.",
    location: "Heritage Archways"
  },
  {
    id: "d3",
    title: "Morning Mangla Aarti Diya Flame",
    date: "Morning Rituals",
    category: "shringar",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    caption: "Sacred Panchaamrut & camphor Aarti ceremony bringing peace to all pilgrims.",
    location: "Inner Garbhagriha"
  },
  {
    id: "d4",
    title: "Grand Entrance Toran Gate & Shikhar",
    date: "Temple Exterior",
    category: "architecture",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Intricately detailed stone pillars and traditional Gujarati wooden jharokhas.",
    location: "Main Gateway"
  },
  {
    id: "d5",
    title: "Annakut Festival Food Offerings",
    date: "Utsav Celebration",
    category: "utsav",
    imageUrl: "https://images.unsplash.com/photo-1620021617242-b301292f9824?auto=format&fit=crop&w=1200&q=80",
    caption: "Over 500 varieties of pure vegetarian sweets and delicacies lovingly cooked by devotees.",
    location: "Festival Hall"
  },
  {
    id: "d6",
    title: "Evening Lamp Illumination & Reflection",
    date: "Sunset Darshan",
    category: "main_deity",
    imageUrl: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
    caption: "Dusk view of illuminated domes against the twilight sky.",
    location: "Temple Courtyard"
  }
];

export const YATRI_ROOMS: YatriRoom[] = [
  {
    id: "r1",
    title: "Deluxe AC Family Suite",
    type: "deluxe_ac",
    capacity: "4 - 5 Guests",
    pricePerNight: 1800,
    rating: 4.9,
    reviewCount: 142,
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    amenities: [
      "Split Air Conditioning",
      "2 Queen Beds",
      "Attached Modern Bath",
      "24/7 Hot Water",
      "Temple Courtyard View",
      "Purified RO Drinking Water",
      "Free High-Speed Wi-Fi",
      "Elevator Access"
    ],
    description: "Spacious and peaceful room crafted for families visiting the holy shrine. Features natural stone finishes, quiet AC, and direct view of the temple shikhara.",
    isPopular: true,
    availableCount: 4
  },
  {
    id: "r2",
    title: "Executive AC Twin Pilgrim Room",
    type: "deluxe_ac",
    capacity: "2 - 3 Guests",
    pricePerNight: 1200,
    rating: 4.8,
    reviewCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    amenities: [
      "Air Conditioning",
      "Twin Single Beds",
      "Attached Bathroom",
      "Geyser Hot Water",
      "Work Desk & Seating",
      "Clean Linen & Towels",
      "Sattvic Dining Delivery Option"
    ],
    description: "Ideal for couples and spiritual seekers looking for a quiet, spotless room equipped with soft lighting, warm wooden accents, and climate control.",
    availableCount: 8
  },
  {
    id: "r3",
    title: "Standard Non-AC Clean Double Room",
    type: "standard_non_ac",
    capacity: "2 Guests",
    pricePerNight: 650,
    rating: 4.7,
    reviewCount: 210,
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    amenities: [
      "Ceiling Fan & Ventilation",
      "Double Bed",
      "Attached Western Washroom",
      "Hot Water Timings",
      "Filtered Drinking Water",
      "Quiet Environment"
    ],
    description: "Traditional minimalist room offering utmost hygiene and comfort at an affordable maintenance contribution fee for pilgrims.",
    availableCount: 12
  },
  {
    id: "r4",
    title: "Heritage Spiritual Retreat Cottage",
    type: "heritage_cottage",
    capacity: "3 - 4 Guests",
    pricePerNight: 2800,
    rating: 5.0,
    reviewCount: 64,
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    amenities: [
      "Private Veranda & Garden",
      "Teakwood Furniture",
      "Private Meditation Nook",
      "Premium Climate Control",
      "Priority Aarti Darshan Access",
      "Complementary Morning Herbal Tea",
      "Dedicated Sewak Support"
    ],
    description: "An exclusive heritage cottage nestled near the quiet inner gardens. Features wooden teak archways, private veranda, and serene meditation space.",
    isPopular: true,
    availableCount: 2
  }
];

export const SPIRITUAL_EXPERIENCES: SpiritualExperience[] = [
  {
    id: "e1",
    title: "Guided Heritage Architecture Walk",
    subtitle: "Explore 200-year-old wooden carvings & sacred architecture",
    category: "heritage",
    time: "07:00 AM & 04:30 PM",
    duration: "45 Minutes",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    description: "Take a walking tour of the temple complex led by knowledgeable temple historians. Learn about Burma teak woodwork, ancient painting techniques, and historical relics.",
    highlights: ["200-year Burma teak arches", "Relic Museum & manuscripts", "Historical Sabha Mandap details"]
  },
  {
    id: "e2",
    title: "Mahaprasad & Annakut Sewa",
    subtitle: "Sacred pure sattvic community dining experience",
    category: "sewa",
    time: "12:00 PM - 02:00 PM & 07:30 PM - 09:00 PM",
    duration: "1 Hour",
    imageUrl: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "Partake in pure, delicious sattvic food cooked without onion or garlic with traditional ghee and spices. Pilgrims can also volunteer in serving meals.",
    highlights: ["100% Pure Sattvic & Hygienic", "Traditional floor & table seating", "Volunteer sewa opportunities"]
  },
  {
    id: "e3",
    title: "Evening Kirtan & Dhun Sabha",
    subtitle: "Immersion in divine melody & collective chanting",
    category: "ritual",
    time: "07:15 PM - 08:15 PM Daily",
    duration: "1 Hour",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    description: "Experience soul-stirring devotional kirtans accompanied by traditional tabla, pakhawaj, and harmonium in the main illuminated assembly hall.",
    highlights: ["Live traditional acoustic instruments", "Collective Swaminarayan Dhun", "Peaceful meditative energy"]
  },
  {
    id: "e4",
    title: "Sacred Scripture & Vachanamrut Library",
    subtitle: "Silent reading & spiritual study room",
    category: "wellness",
    time: "08:00 AM - 08:00 PM",
    duration: "Self-Paced",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description: "Access rare manuscripts, digital archives of Shikshapatri, Vachanamrut, Satsang Diksha, and historical biography texts in English, Gujarati, and Hindi.",
    highlights: ["AC quiet reading hall", "Multi-language translations", "Digital tablet reading stations"]
  }
];

export const UPCOMING_EVENTS: TempleEvent[] = [
  {
    id: "ev1",
    title: "Grand Janmashtami Mahotsav",
    date: "18",
    month: "AUG",
    day: "SUNDAY",
    type: "utsav",
    description: "Midnight divine birth celebration with grand flower shringar, 108 lamp Aarti, and Panchamrut Abhishek.",
    time: "09:00 PM onwards",
    venue: "Main Temple Courtyard"
  },
  {
    id: "ev2",
    title: "Pavitra Ekadashi Vrat & Special Bhajan",
    date: "23",
    month: "AUG",
    day: "FRIDAY",
    type: "ekadashi",
    description: "Special fasting guidelines, Farali prasad distribution, and continuous 12-hour Swaminarayan Akhand Dhun.",
    time: "06:00 AM - 09:00 PM",
    venue: "Sabha Hall"
  },
  {
    id: "ev3",
    title: "Vachanamrut Bicentenary Katha Saptah",
    date: "02",
    month: "SEP",
    day: "MONDAY",
    type: "katha",
    description: "7-day spiritual discourse by learned learned Swamis explaining the practical wisdom of Vachanamrut.",
    time: "04:00 PM - 07:00 PM Daily",
    venue: "Auditorium Hall"
  },
  {
    id: "ev4",
    title: "Sharad Poornima Raas Utsav",
    date: "17",
    month: "OCT",
    day: "THURSDAY",
    type: "utsav",
    description: "Full moon moonlight Darshan, Dudh-Poha prasad distribution, and devotional group singing.",
    time: "08:00 PM - 11:00 PM",
    venue: "Open Terrace & Grounds"
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: "swaminarayan-akhand-dhun-bagru",
    title: "Shree Swaminarayan Dhun",
    artist: "Shree Swaminarayan Mandir, Jaipur (Bagru)",
    duration: "21:50",
    audioUrl: "/assets/audio/shree-swaminarayan-dhun.mp3",
    category: "dhun"
  },
  {
    id: "a2",
    title: "Jay Swaminarayan Jay Akshardham - Grand Aarti",
    artist: "Traditional Pujaris",
    duration: "08:45",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c82631ef.mp3?filename=ambient-relaxing-10501.mp3",
    category: "aarti"
  },
  {
    id: "a3",
    title: "Prabhatiya Morning Shloka Chant",
    artist: "Vedic Chanting Group",
    duration: "12:10",
    audioUrl: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_03d42b9385.mp3?filename=relaxing-nature-bells-8022.mp3",
    category: "prabhatiya"
  }
];

export const SCRIPTURE_EXCERPTS: ScriptureExcerpt[] = [
  {
    id: "s1",
    book: "Vachanamrut",
    chapter: "Gadhada I-21",
    title: "On Peace of Mind & Equanimity",
    quote: "He who possesses noble character, devotion to God, and forgiveness towards all living beings experiences uninterrupted inner calm.",
    meaning: "Inner peace comes from detached devotion and forgiving others rather than external circumstances."
  },
  {
    id: "s2",
    book: "Shikshapatri",
    chapter: "Sloka 116",
    title: "Daily Moral Standard",
    quote: "Always speak truthful and pleasant words; never utter words that are hurtful, untrue, or devoid of righteousness.",
    meaning: "Speech should always be kind, honest, and beneficial to the community."
  },
  {
    id: "s3",
    book: "Satsang Diksha",
    chapter: "Shloka 42",
    title: "Selfless Service (Sewa)",
    quote: "Selfless service performed with love and humility purifies the mind and brings divine grace into one's family life.",
    meaning: "Serving others without expecting reward is the highest form of spiritual practice."
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "Sabarmati Riverfront Walk",
    distance: "1.8 km (8 mins drive)",
    description: "Scenic paved walking promenade alongside the river with garden parks & boat rides."
  },
  {
    name: "Heritage Walk Old City Gates",
    distance: "0.2 km (Walking distance)",
    description: "Explore Teen Darwaja, Bhadra Fort, and historic pols starting right from the temple gate."
  },
  {
    name: "Ahmedabad Central Railway Station",
    distance: "1.2 km (5 mins auto/taxi)",
    description: "Direct connection to all major Indian cities with round-the-clock transport."
  },
  {
    name: "Sardar Vallabhbhai Patel Airport (AMD)",
    distance: "9.5 km (22 mins drive)",
    description: "Convenient taxi access to the international & domestic airport terminal."
  }
];
