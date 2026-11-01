/**
 * Centralized Translation Dictionaries
 * Languages: English (EN), Gujarati (GU), Hindi (HI)
 * Edit this file to update any website text across all languages.
 */

export type Language = 'EN' | 'GU' | 'HI';

export interface TranslationDictionary {
  // Navigation
  nav: {
    mandir: string;
    about: string;
    darshan: string;
    yatriNivas: string;
    visit: string;
    inquiry: string;
    backToTop: string;
  };
  // Common
  common: {
    open: string;
    closed: string;
    next: string;
    confirmed: string;
    timingTBC: string;
    nextAarti: string;
    templeStatus: string;
    vishranthiGruh: string;
    available: string;
    callDesk: string;
    viewPhotos: string;
    inquireAtDesk: string;
    learnMore: string;
    openGoogleMaps: string;
    connectWhatsApp: string;
    morningSessions: string;
    eveningSessions: string;
    afternoonRepose: string;
    jaipur: string;
    location: string;
    perNight: string;
    roomRate: string;
    facilities: string;
    session: string;
  };
  // Hero Section
  hero: {
    affiliation: string;
    tagline: string;
    description: string;
    exploreStay: string;
    sacredArchitecture: string;
    openStatus: string;
    openSubtext: string;
    reposeStatus: string;
    reposeSubtext: string;
    closedStatus: string;
    closedSubtext: string;
    festivalStatus: string;
    isTomorrow: string;
  };
  // About / Architecture
  about: {
    sectionLabel: string;
    heading: string;
    description: string;
    verifiedLabel: string;
    cardHeading: string;
    cardDesc: string;
    locationNote: string;
    campus: string;
    nagara: string;
    nagaraDesc: string;
    pillarCraft: string;
    pillarCraftDesc: string;
    elephantDepiction: string;
    elephantDepictionDesc: string;
    architectureLabel: string;
    livingHeritage: string;
    crafted: string;
    craftedDesc: string;
  };
  // Darshan & Sanctum
  darshan: {
    sectionLabel: string;
    heading: string;
    devanagari: string;
    description: string;
    nitya: string;
    nityaDesc: string;
    panchaamrut: string;
    panchaamrutDesc: string;
    sanctumPhoto: string;
    sanctumPhotoCaption: string;
    sanctumPhotoSub: string;
    scheduleLabel: string;
    scheduleHeading: string;
    scheduleDesc: string;
    jaipurTime: string;
    nextLabel: string;
    startsIn: string;
    morningSession: string;
    morningNote: string;
    reposeSession: string;
    reposeNote: string;
    eveningSession: string;
    eveningNote: string;
    morningDevanagari: string;
    reposeDevanagari: string;
    eveningDevanagari: string;
  };
  // Aarti Names
  aarti: {
    mangla: string;
    shangar: string;
    rajbhog: string;
    sandhya: string;
    shayan: string;
    manglaDevanagari: string;
    shangarDevanagari: string;
    rajbhogDevanagari: string;
    sandhyaDevanagari: string;
    shayanDevanagari: string;
    manglaGujarati: string;
    shangarGujarati: string;
    rajbhogGujarati: string;
    sandhyaGujarati: string;
    shayanGujarati: string;
    manglaMeaning: string;
    shangarMeaning: string;
    rajbhogMeaning: string;
    sandhyaMeaning: string;
    shayanMeaning: string;
  };
  // Yatri Nivas
  yatriNivas: {
    sectionLabel: string;
    heading: string;
    description: string;
    statusLabel: string;
    statusSubtext: string;
    maintenance: string;
    standardRoom: string;
    standardDesc: string;
    largerRoom: string;
    largerDesc: string;
    capacity23: string;
    capacity56: string;
    beds23: string;
    beds56: string;
    rate1500: string;
    rate2500: string;
    // Amenities
    ac: string;
    attachedBathroom: string;
    geyser: string;
    beds: string;
    openKitchen: string;
    parking: string;
    // Facilities overview
    facilitiesLabel: string;
    facilitiesHeading: string;
    facilitiesDesc: string;
    hotWater: string;
    hotWaterDesc: string;
    parkingTitle: string;
    parkingDesc: string;
    reception: string;
    receptionDesc: string;
    atrium: string;
    atriumDesc: string;
    sattvic: string;
    sattvicDesc: string;
    // Guidelines
    guidelinesLabel: string;
    guideline1: string;
    guideline2: string;
    guideline3: string;
    guideline4: string;
    transparencyNote: string;
    centralAtrium: string;
    receptionDesk: string;
    centralAtriumDesc: string;
    receptionDeskDesc: string;
    actualPhoto: string;
    floorNote1: string;
    floorNote2: string;
  };
  // Visitor Guide
  visit: {
    sectionLabel: string;
    heading: string;
    description: string;
    addressHeading: string;
    byRoad: string;
    byRoadDesc: string;
    byTrain: string;
    byTrainDesc: string;
    generalInquiries: string;
    etiquetteLabel: string;
    etiquetteHeading: string;
    attire: string;
    attireDesc: string;
    photography: string;
    photographyDesc: string;
    silence: string;
    silenceDesc: string;
    landmark: string;
  };
  // Footer
  footer: {
    exploreMandir: string;
    dailyAarti: string;
    contactInquiries: string;
    allRights: string;
    helpline: string;
    stayDesk: string;
    description: string;
  };
  // Audio
  audio: {
    sacredDhun: string;
    play: string;
    pause: string;
    next: string;
    minimize: string;
    open: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  EN: {
    nav: {
      mandir: 'Mandir',
      about: 'About',
      darshan: 'Darshan & Aarti',
      yatriNivas: 'Yatri Nivas',
      visit: 'Visitor Guide',
      inquiry: 'Inquiry',
      backToTop: 'Back to Top',
    },
    common: {
      open: 'Open for Darshan',
      closed: 'Closed for the Night',
      next: 'Next',
      confirmed: 'Confirmed',
      timingTBC: 'Timing to be confirmed',
      nextAarti: 'Next Aarti',
      templeStatus: 'Temple Status',
      vishranthiGruh: 'Vishranti Gruh',
      available: 'Available',
      callDesk: 'Call Desk',
      viewPhotos: 'View Photos & Amenities',
      inquireAtDesk: 'Inquire at Desk',
      learnMore: 'Learn More',
      openGoogleMaps: 'Open in Google Maps',
      connectWhatsApp: 'Connect on WhatsApp →',
      morningSessions: 'Morning Session',
      eveningSessions: 'Evening Session',
      afternoonRepose: 'Afternoon Repose',
      jaipur: 'Jaipur (Bagru)',
      location: 'Location',
      perNight: 'per night',
      roomRate: 'Room Rate',
      facilities: 'Facilities',
      session: 'Session',
    },
    hero: {
      affiliation: 'Under Shree Narnarayandev Peethasthan',
      tagline: 'एवं विश्रांति गृह — जयपुर (बगरू)',
      description: 'A sacred sanctum of authentic Swaminarayan devotion and serene, hospitable accommodation for visiting families and pilgrims — at Jaipur (Bagru).',
      exploreStay: 'Explore Yatri Nivas',
      sacredArchitecture: 'Sacred Architecture',
      openStatus: 'Open for Darshan',
      openSubtext: 'Mandir is welcoming devotees',
      reposeStatus: 'Afternoon Repose',
      reposeSubtext: 'Mandir reopens at 03:00 PM IST',
      closedStatus: 'Closed for the Night',
      closedSubtext: 'Mangla Aarti tomorrow at 06:00 AM IST',
      festivalStatus: 'Utsav Darshan Open',
      isTomorrow: 'tomorrow',
    },
    about: {
      sectionLabel: 'Living Heritage & Sacred Architecture',
      heading: 'Crafted in Devotion',
      description: 'Rooted in the Swaminarayan tradition, the mandir features handcrafted decorative architectural designs on its walls, gates, and pillars — built with care and devotion across four levels.',
      verifiedLabel: 'Verified Temple Architecture',
      cardHeading: 'The Heritage Veranda',
      cardDesc: 'Intricately detailed columns and scalloped arches frame the tranquil walkways connecting the prayer sanctum to the Vishranti Gruh.',
      locationNote: 'Location: Ground Courtyard Walkway',
      campus: 'Jaipur (Bagru) Campus',
      nagara: 'Nagara Shikhara',
      nagaraDesc: 'Multi-tiered spires crowned with golden kalash, geometrically aligned toward the rising morning sun over Jaipur.',
      pillarCraft: 'Intricate Pillar Craftsmanship',
      pillarCraftDesc: 'Handcrafted ornamental designs engraved into the supporting pillars across the residential arcades — a testament to traditional artisanship.',
      elephantDepiction: 'Sacred Elephant Depictions',
      elephantDepictionDesc: 'Artistic depictions of elephants with saints seated upon them — traditional iconographic imagery celebrating the divine heritage of the Swaminarayan tradition.',
      architectureLabel: 'Temple Architecture',
      livingHeritage: 'Living Heritage',
      crafted: 'Crafted in Devotion',
      craftedDesc: 'Four levels — Ground, First, Second, and Third Floor — with a terrace and five rooms on the third level. Handcrafted decorative detailing on walls, gates, and pillars throughout.',
    },
    darshan: {
      sectionLabel: 'Garbhagriha • Central Sanctum',
      heading: 'Nitya Darshan & Sacred Annakut',
      devanagari: 'श्री स्वामिनारायण भगवान — नित्य दर्शन एवं शाकोत्सव अन्नकूट महाप्रसाद',
      description: 'At the heart of the mandir resides the sacred murti of Bhagwan Swaminarayan, seated upon an intricately sculpted golden sinhasan adorned with traditional royal umbrellas (chhatra).',
      nitya: 'Nitya Shringar',
      nityaDesc: 'Handcrafted silk vastras and fresh fragrant flower garlands unveiled daily during Shangar Aarti.',
      panchaamrut: 'Panchaamrut & Camphor',
      panchaamrutDesc: 'Pure ghee and camphor wicks illuminate the golden sanctum during Sandhya Aarti at dusk.',
      sanctumPhoto: 'Actual Sanctum Photograph',
      sanctumPhotoCaption: 'Bhagwan Swaminarayan on Golden Sinhasan',
      sanctumPhotoSub: 'अन्नकूट एवं शाकोत्सव दर्शन • जयपुर (बगरू) मंदिर',
      scheduleLabel: 'नित्य आरती एवं दर्शन समय • Daily Timetable',
      scheduleHeading: 'Aarti Timings & Schedule',
      scheduleDesc: 'All timings are strictly evaluated in Indian Standard Time (Asia/Kolkata, UTC+05:30). Devotees staying at Vishranti Gruh have direct morning access to Mangla Aarti.',
      jaipurTime: 'Jaipur Local Time',
      nextLabel: 'Next:',
      startsIn: 'Starts',
      morningSession: 'Morning Darshan',
      morningNote: 'Mangla Aarti and morning prayers',
      reposeSession: 'Afternoon Repose',
      reposeNote: 'Sanctum doors closed for deities repose',
      eveningSession: 'Evening Darshan',
      eveningNote: 'Sandhya and Shayan Aartis',
      morningDevanagari: 'प्रातः दर्शन',
      reposeDevanagari: 'दोपहर विश्राम (कपाट बंद)',
      eveningDevanagari: 'सायं दर्शन',
    },
    aarti: {
      mangla: 'Mangla Aarti',
      shangar: 'Shangar Aarti',
      rajbhog: 'Rajbhog Aarti',
      sandhya: 'Sandhya Aarti',
      shayan: 'Shayan Aarti',
      manglaDevanagari: 'मंगला आरती',
      shangarDevanagari: 'शृंगार आरती',
      rajbhogDevanagari: 'राजभोग आरती',
      sandhyaDevanagari: 'संध्या आरती',
      shayanDevanagari: 'शयन आरती',
      manglaGujarati: 'મંગળા આરતી',
      shangarGujarati: 'શણગાર આરતી',
      rajbhogGujarati: 'રાજભોગ આરતી',
      sandhyaGujarati: 'સંધ્યા આરતી',
      shayanGujarati: 'શયન આરતી',
      manglaMeaning: 'Awakening prayer welcoming the first morning divine light.',
      shangarMeaning: 'Adornment prayer unveiling sacred garments and flower garlands.',
      rajbhogMeaning: 'Midday royal offering of pure sattvic delicacies.',
      sandhyaMeaning: 'Sunset prayer with tiered glowing brass lamps and chiming bells.',
      shayanMeaning: 'Final night prayer prior to sanctum repose.',
    },
    yatriNivas: {
      sectionLabel: 'विश्रांति गृह • Yatri Nivas Accommodations',
      heading: 'Serene Living for Devotees',
      description: 'Quiet, pristine rooms located inside the sacred mandir grounds for traveling families, yatra sanghs, and spiritual seekers — with air conditioning, attached bathrooms, and hot water.',
      statusLabel: 'Rooms Available',
      statusSubtext: 'Direct reception desk inquiry open for pilgrims & families',
      maintenance: 'Room Rate',
      standardRoom: 'Standard Room',
      standardDesc: 'Comfortable air-conditioned room suitable for small families or groups of 2–3 guests, with attached bathroom with geyser, beds with sheets and blankets, and access to the open kitchen.',
      largerRoom: 'Larger Room',
      largerDesc: 'Spacious air-conditioned room for larger groups and families of 5–6 guests, with attached bathroom with geyser, beds with sheets and blankets, and access to the open kitchen.',
      capacity23: '2–3 Guests',
      capacity56: '5–6 Guests',
      beds23: '2–3 Beds',
      beds56: '5–6 Beds',
      rate1500: '₹1,500 / night',
      rate2500: '₹2,500 / night',
      ac: 'Air Conditioning',
      attachedBathroom: 'Attached Bathroom',
      geyser: 'Bathroom Geyser (Hot Water)',
      beds: 'Beds with Sheets & Blankets',
      openKitchen: 'Access to Open Kitchen',
      parking: 'Parking Available',
      facilitiesLabel: 'Campus Amenities & Care',
      facilitiesHeading: 'Hospitality for Sacred Pilgrims',
      facilitiesDesc: 'Every facility has been designed to support peace of mind and bodily cleanliness before morning darshan and prayer.',
      hotWater: '24/7 Electric Hot Water',
      hotWaterDesc: 'Instant electric geysers in attached bathrooms ensuring continuous hot water for morning bath before Mangla Aarti.',
      parkingTitle: 'Parking Facilities',
      parkingDesc: 'Spacious parking available for cars, motorcycles, scooters, buses, travellers, and other larger vehicles inside the temple gates.',
      reception: 'Front Desk Reception',
      receptionDesc: 'Dedicated front desk in the ground lobby assisting pilgrims with room inquiries, luggage, and guidelines.',
      atrium: 'Open Kitchen Access',
      atriumDesc: 'Guests are welcome to use the open kitchen to cook their own food. Basic kitchen facilities are available for pilgrims.',
      sattvic: 'Pure Sattvic Environment',
      sattvicDesc: 'Quiet, smoking-free, alcohol-free sanctified premises fostering deep meditation and peaceful night rest.',
      guidelinesLabel: 'Campus Etiquette & Check-in Rules',
      guideline1: 'Government-approved photo identity proof must be presented physically at the reception desk during check-in.',
      guideline2: 'Accommodation is reserved exclusively for pilgrims, temple visitors, and traveling families visiting Shree Swaminarayan Mandir.',
      guideline3: 'Strictly 100% vegetarian, non-alcoholic, and non-smoking campus. Outside prohibited substances are strictly disallowed.',
      guideline4: 'Please maintain the sacred silence and dignity of the campus, especially during night hours (after 10:00 PM).',
      transparencyNote: 'Room rates are fixed contributions directed solely to campus maintenance, sanitation, electricity, and pilgrim facility upkeep. No booking forms or advance payments are required.',
      centralAtrium: 'Central Atrium',
      receptionDesk: 'Reception Desk',
      centralAtriumDesc: 'Four-level interior courtyard providing natural skylight and air circulation across all residential floors.',
      receptionDeskDesc: 'Ground-floor check-in office with physical registration and pilgrim assistance.',
      actualPhoto: 'Actual Campus Photo',
      floorNote1: 'Located on upper guest floors accessible via the illuminated central atrium.',
      floorNote2: 'Spacious hall configuration with direct corridor access to the central building atrium.',
    },
    visit: {
      sectionLabel: 'Location & Practical Pilgrim Guide',
      heading: 'Reaching the Mandir',
      description: 'Situated on the historic Jaipur-Ajmer highway corridor in Bagru, easily accessible by car, bus, or taxi from Jaipur city and railway station.',
      addressHeading: 'Shree Swaminarayan Mandir, Jaipur (Bagru)',
      byRoad: 'By Road & Highway',
      byRoadDesc: 'Located ~28 km from Jaipur city center along NH-48. Direct access from Jaipur bypass and Ajmer expressway.',
      byTrain: 'By Train & Airport',
      byTrainDesc: 'Jaipur Junction Railway Station (~30 km) and Jaipur International Airport (~32 km) connect via taxis and auto-rickshaws.',
      generalInquiries: 'General Inquiries:',
      etiquetteLabel: 'Temple Etiquette & Visitor Protocol',
      etiquetteHeading: 'Preserving Sacred Sanctity',
      attire: 'Respectful Attire:',
      attireDesc: 'Please wear modest attire covering shoulders and knees. Traditional Indian clothing is encouraged.',
      photography: 'Sanctum Photography:',
      photographyDesc: 'Photography inside the inner Garbhagriha is prohibited. Exterior campus and courtyard photography is permitted.',
      silence: 'Quiet Meditation:',
      silenceDesc: 'Please silence mobile devices in the assembly sabha and prayer corridors.',
      landmark: 'Landmark:',
    },
    footer: {
      exploreMandir: 'Explore Mandir',
      dailyAarti: 'Daily Aarti Timings',
      contactInquiries: 'Contact & Inquiries',
      allRights: 'All Rights Reserved.',
      helpline: 'Helpline:',
      stayDesk: 'Stay Desk:',
      description: 'A sacred seat of spiritual peace, devotion, and hospitality at Jaipur (Bagru).',
    },
    audio: {
      sacredDhun: 'Sacred Dhun',
      play: 'Play',
      pause: 'Pause',
      next: 'Next Track',
      minimize: 'Minimize Player',
      open: 'Open Dhun Player',
    },
  },

  GU: {
    nav: {
      mandir: 'મંદિર',
      about: 'પરિચય',
      darshan: 'દર્શન & આરતી',
      yatriNivas: 'યાત્રી નિવાસ',
      visit: 'યાત્રી માર્ગદર્શિકા',
      inquiry: 'સંપર્ક',
      backToTop: 'ઉપર જાઓ',
    },
    common: {
      open: 'દર્શન માટે ખુલ્લું',
      closed: 'રાત્રે બંધ',
      next: 'આગળ',
      confirmed: 'નિશ્ચિત',
      timingTBC: 'સમય નક્કી થવાનો બાકી છે',
      nextAarti: 'આગળની આરતી',
      templeStatus: 'મંદિર સ્થિતિ',
      vishranthiGruh: 'વિશ્રાંતિ ગૃહ',
      available: 'ઉપલબ્ધ',
      callDesk: 'ડેસ્ક પર ફોન કરો',
      viewPhotos: 'ફોટા અને સુવિધાઓ જુઓ',
      inquireAtDesk: 'ડેસ્ક પર પૂછપરછ કરો',
      learnMore: 'વધારે જાણો',
      openGoogleMaps: 'Google Maps માં ખોલો',
      connectWhatsApp: 'WhatsApp પર જોડાઓ →',
      morningSessions: 'સવારનો સત્ર',
      eveningSessions: 'સાંજનો સત્ર',
      afternoonRepose: 'બપોરનો આરામ',
      jaipur: 'જયપુર (બગરૂ)',
      location: 'સ્થળ',
      perNight: 'પ્રતિ રાત',
      roomRate: 'ઓરડાનો દર',
      facilities: 'સુવિધાઓ',
      session: 'સત્ર',
    },
    hero: {
      affiliation: 'શ્રી નરનારાયણ દેવ પીઠસ્થાન',
      tagline: 'એવં વિશ્રાંતિ ગૃહ — જયપુર (બગરૂ)',
      description: 'શ્રી સ્વામિનારાયણ ભક્તિ અને યાત્રીઓ માટે શાંત, ઉષ્માભર્યો નિવાસ — જયપુર (બગરૂ) ખાતે.',
      exploreStay: 'યાત્રી નિવાસ જુઓ',
      sacredArchitecture: 'પવિત્ર સ્થાપત્ય',
      openStatus: 'દર્શન માટે ખુલ્લું',
      openSubtext: 'ભક્તોનું સ્વાગત છે',
      reposeStatus: 'બપોરનો આરામ',
      reposeSubtext: 'મંદિર ૦૩:૦૦ PM IST એ ફરી ખૂલશે',
      closedStatus: 'રાત્રે બંધ',
      closedSubtext: 'આવતીકાલે મંગળા આરતી ૦૬:૦૦ AM IST',
      festivalStatus: 'ઉત્સવ દર્શન ખુલ્લું',
      isTomorrow: 'આવતીકાલે',
    },
    about: {
      sectionLabel: 'જીવંત વારસો અને પવિત્ર સ્થાપત્ય',
      heading: 'ભક્તિભાવથી નિર્મિત',
      description: 'સ્વામિનારાયણ પરંપરામાં સ્થાપિત, આ મંદિરની દીવાલો, દ્વારો અને સ્તંભો પર હસ્તકલાથી સજ્જ સ્થાપત્ય — ચાર સ્તરોમાં.',
      verifiedLabel: 'ચકાસાયેલ મંદિર સ્થાપત્ય',
      cardHeading: 'ઐતિહાસિક ઓસરી (વેરાન્ડા)',
      cardDesc: 'સુંદર સ્તંભો અને અર્ધ-વર્તુળાકાર કમાનો — ભજન ભૂમિ અને વિશ્રાંતિ ગૃહને જોડતો શાંત માર્ગ.',
      locationNote: 'સ્થળ: આંગણાનો માર્ગ',
      campus: 'જયપુર (બગરૂ) કેમ્પસ',
      nagara: 'નાગર શિખર',
      nagaraDesc: 'ઉગતા સૂર્ય તરફ નિર્દેશિત, સુવર્ણ કળશ સહિત બહુ-સ્તરીય શિખર.',
      pillarCraft: 'જટિલ સ્તંભ શિલ્પકળા',
      pillarCraftDesc: 'નિવાસ ઓસરીના સ્તંભો પર હાથથી કરાયેલ કલાત્મક કોતરણી — પરંપરાગત કારીગરીનું પ્રમાણ.',
      elephantDepiction: 'પવિત્ર ગજ (હાથી) ચિત્રણ',
      elephantDepictionDesc: 'સંતો સાથે હાથી પર આરૂઢ — સ્વામિનારાયણ પરંપરાની ઐતિહાસિક પ્રતીકાત્મક કલાકૃતિ.',
      architectureLabel: 'મંદિર સ્થાપત્ય',
      livingHeritage: 'જીવંત વારસો',
      crafted: 'ભક્તિભાવથી નિર્મિત',
      craftedDesc: 'ચાર સ્તરો — ભોંયતળિયું, પ્રથમ, દ્વિતીય, અને તૃતીય — ત્રીજા સ્તરે અગાસી અને પાંચ ઓરડા.',
    },
    darshan: {
      sectionLabel: 'ગર્ભગૃહ • કેન્દ્રીય મંદિર',
      heading: 'નિત્ય દર્શન અને પાવન અન્નકૂટ',
      devanagari: 'શ્રી સ્વામિનારાયણ ભગવાન — નિત્ય દર્શન એવં શાકોત્સવ અન્નકૂટ મહાપ્રસાદ',
      description: 'મંદિરના કેન્દ્રમાં ભગવાન સ્વામિનારાયણની પવિત્ર મૂર્તિ, ઐતિહાસિક સુવર્ણ સિંહાસન પર બિરાજમાન.',
      nitya: 'નિત્ય શૃંગાર',
      nityaDesc: 'શૃંગાર આરતી સમયે દૈનિક હસ્ત-વણાયેલા વસ્ત્રો અને સુગંધિત પુષ્પહાર.',
      panchaamrut: 'પંચામૃત અને કપૂર',
      panchaamrutDesc: 'શુદ્ધ ઘી અને કપૂરની જ્યોત સંધ્યા આરતીમાં સુવર્ણ ગર્ભગૃહને પ્રકાશિત કરે છે.',
      sanctumPhoto: 'વાસ્તવિક ગર્ભગૃહ તસવીર',
      sanctumPhotoCaption: 'ભગવાન સ્વામિનારાયણ સુવર્ણ સિંહાસન પર',
      sanctumPhotoSub: 'અન્નકૂટ દર્શન • જયપુર (બગરૂ) મંદિર',
      scheduleLabel: 'નિત્ય આરતી અને દર્શન સમય • દૈનિક સારણી',
      scheduleHeading: 'આરતી સમય અને કાર્યક્રમ',
      scheduleDesc: 'તમામ સમય IST (Asia/Kolkata, UTC+05:30) મુજબ. વિશ્રાંતિ ગૃહના યાત્રીઓ સવારે મંગળા આરતીમાં ભાગ લઈ શકે છે.',
      jaipurTime: 'જયપુર સ્થાનિક સમય',
      nextLabel: 'આગળ:',
      startsIn: 'શરૂ થશે',
      morningSession: 'પ્રાતઃ દર્શન',
      morningNote: 'મંગળા આરતી અને સવારની પ્રાર્થના',
      reposeSession: 'બપોરનો આરામ',
      reposeNote: 'ભગવાનના આરામ માટે કપાટ બંધ',
      eveningSession: 'સાંજનું દર્શન',
      eveningNote: 'સંધ્યા અને શયન આરતી',
      morningDevanagari: 'પ્રાતઃ દર્શન',
      reposeDevanagari: 'બપોરનો આરામ (કપાટ બંધ)',
      eveningDevanagari: 'સાંજનું દર્શન',
    },
    aarti: {
      mangla: 'મંગળા આરતી',
      shangar: 'શણગાર આરતી',
      rajbhog: 'રાજભોગ આરતી',
      sandhya: 'સંધ્યા આરતી',
      shayan: 'શયન આરતી',
      manglaDevanagari: 'मंगला आरती',
      shangarDevanagari: 'शृंगार आरती',
      rajbhogDevanagari: 'राजभोग आरती',
      sandhyaDevanagari: 'संध्या आरती',
      shayanDevanagari: 'शयन आरती',
      manglaGujarati: 'મંગળા આરતી',
      shangarGujarati: 'શણગાર આરતી',
      rajbhogGujarati: 'રાજભોગ આરતી',
      sandhyaGujarati: 'સંધ્યા આરતી',
      shayanGujarati: 'શયન આરતી',
      manglaMeaning: 'પ્રથમ પ્રભાતે દિવ્ય પ્રકાશ સાથે જાગરણ પ્રાર્થના.',
      shangarMeaning: 'પવિત્ર વસ્ત્રો અને પુષ્પમાળાથી સુશોભિત શણગાર દર્શન.',
      rajbhogMeaning: 'શુદ્ધ સાત્વિક ભોગ અર્પણ કરતી મધ્યાહ્ન પ્રાર્થના.',
      sandhyaMeaning: 'પીતળના દીવા અને ઘંટનાદ સાથે સંધ્યાકાલીન ભક્તિ આરતી.',
      shayanMeaning: 'રાત્રે કપાટ બંધ થતા પૂર્વે અંતિમ શયન પ્રાર્થના.',
    },
    yatriNivas: {
      sectionLabel: 'વિશ્રાંતિ ગૃહ • યાત્રી નિવાસ',
      heading: 'યાત્રીઓ માટે શાંત અને પવિત્ર નિવાસ',
      description: 'મંદિર પરિસરમાં યાત્રી પરિવારો, સંતો અને સંઘો માટે સુવિધાસભર ઓરડા — એર કન્ડિશનિંગ, સંલગ્ન બાથરૂમ અને ગરમ પાણી સાથે.',
      statusLabel: 'ઓરડા ઉપલબ્ધ',
      statusSubtext: 'સ્વાગત ડેસ્ક પર સીધી પૂછપરછ ઉપલબ્ધ',
      maintenance: 'ઓરડાનો દર',
      standardRoom: 'સ્ટાન્ડર્ડ ઓરડો',
      standardDesc: '૨–૩ યાત્રીઓ માટે આરામદાયક એસી ઓરડો — સંલગ્ન ગીઝર સહિત બાથરૂમ, પથારી અને ખુલ્લી રસોઈની સુવિધા સાથે.',
      largerRoom: 'મોટો પારિવારિક ઓરડો',
      largerDesc: '૫–૬ યાત્રીઓ માટે વિશાળ એસી ઓરડો — સંલગ્ન ગીઝર સહિત બાથરૂમ, પથારી અને ખુલ્લી રસોઈની સુવિધા સાથે.',
      capacity23: '૨–૩ મહેમાનો',
      capacity56: '૫–૬ મહેમાનો',
      beds23: '૨–૩ પથારી',
      beds56: '૫–૬ પથારી',
      rate1500: '₹૧,૫૦૦ / રાત',
      rate2500: '₹૨,૫૦૦ / રાત',
      ac: 'વાતાનુકૂલિત (AC)',
      attachedBathroom: 'સંલગ્ન બાથરૂમ',
      geyser: 'ગીઝર (ગરમ પાણી)',
      beds: 'ચાદર અને ધાબળા સહિત પથારી',
      openKitchen: 'ખુલ્લી રસોઈની સુવિધા',
      parking: 'પાર્કિંગ ઉપલબ્ધ',
      facilitiesLabel: 'પરિસર સુવિધાઓ',
      facilitiesHeading: 'યાત્રીઓ માટે ઉપલબ્ધ સુવિધાઓ',
      facilitiesDesc: 'પ્રાતઃ દર્શન પૂર્વે શાંતિ, શુદ્ધતા અને આરામદાયક રોકાણ માટે તમામ સુવિધાઓ.',
      hotWater: '૨૪/૭ ગરમ પાણી',
      hotWaterDesc: 'મંગળા આરતી પૂર્વે સ્નાન માટે સંલગ્ન બાથરૂમમાં ઇલેક્ટ્રિક ગીઝરની સુવિધા.',
      parkingTitle: 'સુરક્ષિત પાર્કિંગ સુવિધા',
      parkingDesc: 'કાર, મોટરસાયકલ, સ્કૂટર, બસ, ટ્રાવેલર અને મોટા વાહનો માટે મંદિર પરિસરમાં વિશાળ પાર્કિંગ.',
      reception: 'સ્વાગત કક્ષ (રીસેપ્શન)',
      receptionDesc: 'ગ્રાઉન્ડ ફ્લોર પર પૂછપરછ ડેસ્ક — ઓરડાની નોંધણી, સામાન અને માર્ગદર્શન માટે.',
      atrium: 'ખુલ્લી રસોઈ',
      atriumDesc: 'યાત્રીઓ પોતાની રસોઈ જાતે બનાવી શકે તે માટે ખુલ્લી રસોઈ સુવિધા.',
      sattvic: 'શુદ્ધ સાત્વિક વાતાવરણ',
      sattvicDesc: 'શાંત, ધૂમ્રપાન-મુક્ત, મદ્ય-મુક્ત પવિત્ર પરિસર.',
      guidelinesLabel: 'પરિસર નિયમો અને શિષ્ટાચાર',
      guideline1: 'ચેક-ઇન સમયે રીસેપ્શન પર સરકારી ફોટો ઓળખ કાર્ડ રજૂ કરવું અનિવાર્ય છે.',
      guideline2: 'નિવાસ માત્ર તીર્થયાત્રીઓ, મંદિર દર્શનાર્થીઓ અને યાત્રી પરિવારો માટે આરક્ષિત છે.',
      guideline3: 'પરિસરમાં ૧૦૦% શાકાહાર, ધૂમ્રપાન-નિષેધ અને મદ્યપાન-નિષેધ કડક રીતે લાગુ છે.',
      guideline4: 'રાત્રિના ૧૦:૦૦ વાગ્યા પછી પરિસરની પવિત્ર શાંતિ જાળવવી આવશ્યક છે.',
      transparencyNote: 'ઓરડાનો દર પરિસરની સફાઈ, વીજળી અને યાત્રી સુવિધાઓના નિભાવ માટે છે. કોઈ ઓનલાઇન બુકિંગ કે અગાઉથી ચુકવણી લેવામાં આવતી નથી.',
      centralAtrium: 'કેન્દ્રીય એટ્રિયમ',
      receptionDesk: 'સ્વાગત ડેસ્ક',
      centralAtriumDesc: 'ચાર માળનું ખુલ્લું આંતરિક આંગણું — કુદરતી પ્રકાશ અને તાજી હવા માટે.',
      receptionDeskDesc: 'ગ્રાઉન્ડ ફ્લોર પર યાત્રી સહાયતા અને પૂછપરછ કચેરી.',
      actualPhoto: 'વાસ્તવિક પરિસર તસવીર',
      floorNote1: 'ઉપરના યાત્રી માળ પર, કેન્દ્રીય આંગણામાંથી સરળ પ્રવેશ.',
      floorNote2: 'કેન્દ્રીય આંગણા સાથે સીધો જોડાયેલ વિશાળ સભાગૃહ.',
    },
    visit: {
      sectionLabel: 'સ્થળ અને યાત્રી માર્ગદર્શિકા',
      heading: 'મંદિર સુધી કેવી રીતે પહોંચવું',
      description: 'જયપુર-અજમેર હાઈવે પર બગરૂ ખાતે સ્થિત — જયપુર શહેર, રેલવે સ્ટેશન અને એરપોર્ટ પરથી સરળતાથી પહોંચી શકાય છે.',
      addressHeading: 'શ્રી સ્વામિનારાયણ મંદિર, જયપુર (બગરૂ)',
      byRoad: 'માર્ગ અને હાઇવે દ્વારા',
      byRoadDesc: 'NH-48 પર જયપુર શહેરથી ~૨૮ કિમી. જયપુર બાયપાસ અને અજમેર એક્સપ્રેસવે દ્વારા સીધો રસ્તો.',
      byTrain: 'રેલવે અને એરપોર્ટ દ્વારા',
      byTrainDesc: 'જયપુર જંક્શન (~૩૦ કિમી) અને જયપુર આંતરરાષ્ટ્રીય એરપોર્ટ (~૩૨ કિમી) થી ટેક્સી કે બસ દ્વારા.',
      generalInquiries: 'સામાન્ય પૂછપરછ:',
      etiquetteLabel: 'મંદિર શિષ્ટાચાર અને નિયમો',
      etiquetteHeading: 'પવિત્ર મર્યાદા જાળવો',
      attire: 'મર્યાદિત વસ્ત્રો:',
      attireDesc: 'ખભા અને ઘૂંટણ ઢંકાયેલા હોય તેવા વસ્ત્રો પહેરવા. પરંપરાગત વસ્ત્રો શ્રેષ્ઠ.',
      photography: 'ગર્ભગૃહ ફોટોગ્રાફી:',
      photographyDesc: 'આંતરિક ગર્ભગૃહમાં ફોટોગ્રાફી સદંતર પ્રતિબંધિત છે. બહારના આંગણામાં પરવાનગી છે.',
      silence: 'મૌન અને ધ્યાન:',
      silenceDesc: 'પ્રાર્થના કક્ષ અને સભાગૃહમાં મોબાઇલ સાયલન્ટ મોડ પર રાખવો.',
      landmark: 'ઓળખ ચિહ્ન:',
    },
    footer: {
      exploreMandir: 'મંદિર પરિચય',
      dailyAarti: 'દૈનિક આરતી સમય',
      contactInquiries: 'સંપર્ક અને પૂછપરછ',
      allRights: 'સર્વાધિકાર સુરક્ષિત.',
      helpline: 'હેલ્પલાઇન:',
      stayDesk: 'નિવાસ ડેસ્ક:',
      description: 'જયપુર (બગરૂ) માં આધ્યાત્મિક શાંતિ, ભક્તિ અને આતિથ્યનું પાવન તીર્થ.',
    },
    audio: {
      sacredDhun: 'પાવન ધૂન',
      play: 'ચલાવો',
      pause: 'અટકાવો',
      next: 'આગળની ધૂન',
      minimize: 'નાનું કરો',
      open: 'ધૂન પ્લેયર ખોલો',
    },
  },

  HI: {
    nav: {
      mandir: 'मंदिर',
      about: 'परिचय',
      darshan: 'दर्शन & आरती',
      yatriNivas: 'यात्री निवास',
      visit: 'यात्री मार्गदर्शिका',
      inquiry: 'संपर्क',
      backToTop: 'ऊपर जाएं',
    },
    common: {
      open: 'दर्शन के लिए खुला',
      closed: 'रात्रि में बंद',
      next: 'अगला',
      confirmed: 'निश्चित',
      timingTBC: 'समय की पुष्टि होनी बाकी है',
      nextAarti: 'अगली आरती',
      templeStatus: 'मंदिर स्थिति',
      vishranthiGruh: 'विश्रांति गृह',
      available: 'उपलब्ध',
      callDesk: 'डेस्क पर कॉल करें',
      viewPhotos: 'फ़ोटो और सुविधाएं देखें',
      inquireAtDesk: 'डेस्क पर पूछें',
      learnMore: 'और जानें',
      openGoogleMaps: 'Google Maps में खोलें',
      connectWhatsApp: 'WhatsApp पर जुड़ें →',
      morningSessions: 'प्रातः सत्र',
      eveningSessions: 'सायं सत्र',
      afternoonRepose: 'दोपहर विश्राम',
      jaipur: 'जयपुर (बगरू)',
      location: 'स्थान',
      perNight: 'प्रति रात',
      roomRate: 'कमरे का दर',
      facilities: 'सुविधाएं',
      session: 'सत्र',
    },
    hero: {
      affiliation: 'श्री नरनारायण देव पीठस्थान',
      tagline: 'एवं विश्रांति गृह — जयपुर (बगरू)',
      description: 'श्री स्वामिनारायण भक्ति और तीर्थ यात्रियों के लिए शांत, आतिथ्यपूर्ण निवास — जयपुर (बगरू) में।',
      exploreStay: 'यात्री निवास देखें',
      sacredArchitecture: 'पावन स्थापत्य',
      openStatus: 'दर्शन के लिए खुला',
      openSubtext: 'भक्तों का स्वागत है',
      reposeStatus: 'दोपहर विश्राम',
      reposeSubtext: 'मंदिर ०३:०० PM IST पर पुनः खुलेगा',
      closedStatus: 'रात्रि में बंद',
      closedSubtext: 'कल मंगला आरती ०६:०० AM IST',
      festivalStatus: 'उत्सव दर्शन खुला',
      isTomorrow: 'कल',
    },
    about: {
      sectionLabel: 'जीवित विरासत और पावन स्थापत्य',
      heading: 'भक्ति से निर्मित',
      description: 'स्वामिनारायण परंपरा में निहित, इस मंदिर की दीवारों, द्वारों और स्तंभों पर हस्तशिल्प सजावटी स्थापत्य — चार स्तरों में।',
      verifiedLabel: 'सत्यापित मंदिर स्थापत्य',
      cardHeading: 'विरासत का बरामदा',
      cardDesc: 'जटिल स्तंभ और अर्ध-गोल मेहराब — प्रार्थना भूमि और विश्रांति गृह को जोड़ने वाला शांत मार्ग।',
      locationNote: 'स्थान: आंगन का पथ',
      campus: 'जयपुर (बगरू) परिसर',
      nagara: 'नागर शिखर',
      nagaraDesc: 'उगते सूर्य की दिशा में संरेखित, सुनहरे कलश सहित बहु-स्तरीय शिखर।',
      pillarCraft: 'जटिल स्तंभ शिल्प',
      pillarCraftDesc: 'निवास बरामदों के स्तंभों पर हस्त-उत्कीर्णन — पारंपरिक कारीगरी की मिसाल।',
      elephantDepiction: 'पावन हाथी चित्रण',
      elephantDepictionDesc: 'संतों के साथ हाथी पर आरूढ़ — स्वामिनारायण परंपरा की ऐतिहासिक प्रतिमात्मक कलाकृति।',
      architectureLabel: 'मंदिर स्थापत्य',
      livingHeritage: 'जीवित विरासत',
      crafted: 'भक्ति से निर्मित',
      craftedDesc: 'चार स्तर — भूतल, प्रथम, द्वितीय, और तृतीय — तृतीय स्तर पर छत और पाँच कमरे।',
    },
    darshan: {
      sectionLabel: 'गर्भगृह • केंद्रीय मंदिर',
      heading: 'नित्य दर्शन और पावन अन्नकूट',
      devanagari: 'श्री स्वामिनारायण भगवान — नित्य दर्शन एवं शाकोत्सव अन्नकूट महाप्रसाद',
      description: 'मंदिर के केंद्र में भगवान स्वामिनारायण की पावन मूर्ति, ऐतिहासिक स्वर्ण सिंहासन पर विराजमान।',
      nitya: 'नित्य शृंगार',
      nityaDesc: 'शृंगार आरती के समय दैनिक हस्त-बुनित वस्त्र और सुगंधित फूल-माला।',
      panchaamrut: 'पंचामृत और कपूर',
      panchaamrutDesc: 'शुद्ध घी और कपूर की बाती संध्या आरती में स्वर्ण गर्भगृह को प्रकाशित करती है।',
      sanctumPhoto: 'वास्तविक गर्भगृह फ़ोटो',
      sanctumPhotoCaption: 'भगवान स्वामिनारायण स्वर्ण सिंहासन पर',
      sanctumPhotoSub: 'अन्नकूट एवं शाकोत्सव दर्शन • जयपुर (बगरू) मंदिर',
      scheduleLabel: 'नित्य आरती एवं दर्शन समय • दैनिक सारणी',
      scheduleHeading: 'आरती समय और कार्यक्रम',
      scheduleDesc: 'सभी समय IST (Asia/Kolkata, UTC+05:30) में। विश्रांति गृह के भक्त सुबह मंगला आरती में सम्मिलित हो सकते हैं।',
      jaipurTime: 'जयपुर स्थानीय समय',
      nextLabel: 'अगला:',
      startsIn: 'शुरू',
      morningSession: 'प्रातः दर्शन',
      morningNote: 'मंगला आरती और प्रातः प्रार्थना',
      reposeSession: 'दोपहर विश्राम',
      reposeNote: 'भगवान के विश्राम हेतु कपाट बंद',
      eveningSession: 'सायं दर्शन',
      eveningNote: 'संध्या और शयन आरती',
      morningDevanagari: 'प्रातः दर्शन',
      reposeDevanagari: 'दोपहर विश्राम (कपाट बंद)',
      eveningDevanagari: 'सायं दर्शन',
    },
    aarti: {
      mangla: 'मंगला आरती',
      shangar: 'शृंगार आरती',
      rajbhog: 'राजभोग आरती',
      sandhya: 'संध्या आरती',
      shayan: 'शयन आरती',
      manglaDevanagari: 'मंगला आरती',
      shangarDevanagari: 'शृंगार आरती',
      rajbhogDevanagari: 'राजभोग आरती',
      sandhyaDevanagari: 'संध्या आरती',
      shayanDevanagari: 'शयन आरती',
      manglaGujarati: 'મંગળા આરતી',
      shangarGujarati: 'શણગાર આરતી',
      rajbhogGujarati: 'રાજભોગ આરતી',
      sandhyaGujarati: 'સંધ્યા આરતી',
      shayanGujarati: 'શ.ઉ.',
      manglaMeaning: 'प्रथम प्रातः प्रकाश में जागरण प्रार्थना।',
      shangarMeaning: 'पावन वस्त्र और पुष्पमाला प्रकट करने की शृंगार प्रार्थना।',
      rajbhogMeaning: 'शुद्ध सात्विक भोज का मध्याह्न राजभोग।',
      sandhyaMeaning: 'चमकते पीतल के दीपों और घंटियों के साथ संध्याकालीन प्रार्थना।',
      shayanMeaning: 'कपाट बंद होने से पूर्व अंतिम रात्रि प्रार्थना।',
    },
    yatriNivas: {
      sectionLabel: 'विश्रांति गृह • यात्री निवास',
      heading: 'भक्तों के लिए शांत निवास',
      description: 'मंदिर परिसर में यात्री परिवारों, संघों और साधकों के लिए शांत कमरे — वातानुकूलन, संलग्न शौचालय और गर्म पानी सहित।',
      statusLabel: 'कमरे उपलब्ध',
      statusSubtext: 'सीधे स्वागत कक्ष पर पूछताछ करें',
      maintenance: 'कमरे का दर',
      standardRoom: 'मानक कमरा',
      standardDesc: '२–३ यात्रियों के लिए आरामदायक वातानुकूलित कमरा — संलग्न गीज़र सहित शौचालय, बिस्तर और खुली रसोई तक पहुँच।',
      largerRoom: 'बड़ा कमरा',
      largerDesc: '५–६ यात्रियों के लिए विशाल वातानुकूलित कमरा — संलग्न गीज़र सहित शौचालय, बिस्तर और खुली रसोई तक पहुँच।',
      capacity23: '२–३ अतिथि',
      capacity56: '५–६ अतिथि',
      beds23: '२–३ बिस्तर',
      beds56: '५–६ बिस्तर',
      rate1500: '₹१,५०० / रात',
      rate2500: '₹२,५०० / रात',
      ac: 'वातानुकूलन',
      attachedBathroom: 'संलग्न शौचालय',
      geyser: 'गीज़र (गर्म पानी)',
      beds: 'चादर और कंबल सहित बिस्तर',
      openKitchen: 'खुली रसोई तक पहुँच',
      parking: 'पार्किंग उपलब्ध',
      facilitiesLabel: 'परिसर सुविधाएं',
      facilitiesHeading: 'तीर्थयात्रियों के लिए आतिथ्य',
      facilitiesDesc: 'प्रातः दर्शन से पहले मन की शांति और स्वच्छता के लिए हर सुविधा।',
      hotWater: '२४/७ गर्म पानी',
      hotWaterDesc: 'मंगला आरती से पहले स्नान के लिए संलग्न शौचालयों में विद्युत गीज़र।',
      parkingTitle: 'पार्किंग सुविधा',
      parkingDesc: 'कार, मोटरसाइकिल, स्कूटर, बस, ट्रैवलर और बड़े वाहनों के लिए मंदिर परिसर में विशाल पार्किंग।',
      reception: 'स्वागत कक्ष',
      receptionDesc: 'भूतल पर स्वागत कक्ष — कमरा पूछताछ, सामान और मार्गदर्शन हेतु।',
      atrium: 'खुली रसोई',
      atriumDesc: 'अतिथि स्वयं खाना बना सकते हैं। यात्रियों के लिए बुनियादी रसोई सुविधाएं उपलब्ध।',
      sattvic: 'शुद्ध सात्विक वातावरण',
      sattvicDesc: 'शांत, धूम्रपान-मुक्त, मद्य-मुक्त पवित्र परिसर।',
      guidelinesLabel: 'परिसर शिष्टाचार और नियम',
      guideline1: 'चेक-इन के समय स्वागत कक्ष पर सरकारी फ़ोटो पहचान प्रमाण प्रस्तुत करें।',
      guideline2: 'निवास केवल तीर्थयात्रियों, मंदिर आगंतुकों और यात्री परिवारों के लिए।',
      guideline3: 'परिसर में सख्त शाकाहार, मद्य-निषेध और धूम्रपान-निषेध।',
      guideline4: 'रात्रि समय (१०:०० PM के बाद) परिसर की पवित्र शांति बनाए रखें।',
      transparencyNote: 'कमरे का दर परिसर रखरखाव, स्वच्छता और यात्री सुविधाओं के लिए निर्धारित है। कोई अग्रिम भुगतान या बुकिंग फ़ॉर्म नहीं।',
      centralAtrium: 'केंद्रीय आंगन',
      receptionDesk: 'स्वागत कक्ष',
      centralAtriumDesc: 'सभी निवास मंजिलों पर प्राकृतिक प्रकाश और वायु प्रवाह के लिए चार-मंजिला आंतरिक आंगन।',
      receptionDeskDesc: 'भूतल पर चेक-इन कार्यालय और यात्री सहायता।',
      actualPhoto: 'वास्तविक परिसर फ़ोटो',
      floorNote1: 'ऊपरी यात्री मंजिलों पर, केंद्रीय आंगन से पहुँच।',
      floorNote2: 'केंद्रीय भवन आंगन तक सीधी पहुँच के साथ विशाल हॉल।',
    },
    visit: {
      sectionLabel: 'स्थान और यात्री मार्गदर्शिका',
      heading: 'मंदिर तक पहुँचें',
      description: 'जयपुर-अजमेर राजमार्ग पर बगरू में स्थित — जयपुर शहर और रेलवे स्टेशन से कार, बस या टैक्सी द्वारा आसानी से पहुँचा जा सकता है।',
      addressHeading: 'श्री स्वामिनारायण मंदिर, जयपुर (बगरू)',
      byRoad: 'सड़क और राजमार्ग से',
      byRoadDesc: 'NH-48 पर जयपुर शहर से ~२८ किमी। जयपुर बाईपास और अजमेर एक्सप्रेसवे से सीधी पहुँच।',
      byTrain: 'ट्रेन और हवाई अड्डे से',
      byTrainDesc: 'जयपुर जंक्शन (~३० किमी) और जयपुर अंतर्राष्ट्रीय हवाई अड्डे (~३२ किमी) से टैक्सी द्वारा।',
      generalInquiries: 'सामान्य पूछताछ:',
      etiquetteLabel: 'मंदिर शिष्टाचार और नियम',
      etiquetteHeading: 'पावन पवित्रता बनाए रखें',
      attire: 'शालीन वेशभूषा:',
      attireDesc: 'कंधे और घुटने ढके हों। पारंपरिक भारतीय वस्त्र प्रोत्साहित।',
      photography: 'गर्भगृह फ़ोटोग्राफ़ी:',
      photographyDesc: 'आंतरिक गर्भगृह में फ़ोटोग्राफ़ी निषिद्ध। बाहरी परिसर और आंगन में अनुमति।',
      silence: 'मौन ध्यान:',
      silenceDesc: 'सभा और प्रार्थना गलियारों में मोबाइल साइलेंट रखें।',
      landmark: 'पहचान चिन्ह:',
    },
    footer: {
      exploreMandir: 'मंदिर जानें',
      dailyAarti: 'दैनिक आरती समय',
      contactInquiries: 'संपर्क और पूछताछ',
      allRights: 'सर्वाधिकार सुरक्षित।',
      helpline: 'हेल्पलाइन:',
      stayDesk: 'निवास डेस्क:',
      description: 'जयपुर (बगरू) में आध्यात्मिक शांति, भक्ति और आतिथ्य का पावन केंद्र।',
    },
    audio: {
      sacredDhun: 'पावन धुन',
      play: 'चलाएं',
      pause: 'रोकें',
      next: 'अगला गीत',
      minimize: 'छोटा करें',
      open: 'धुन प्लेयर खोलें',
    },
  },
};

