/**
 * Yatri Nivas (Vishranti Gruh) Accommodation Configuration
 * Strictly informational: details verified room types, photographs, facilities,
 * policies, and front desk inquiry channels without interactive booking forms.
 * 
 * Verified Room Categories & Rates:
 * 1. Standard Room: 2–3 Beds, ₹1,500 / night
 * 2. Larger Room: 5–6 Beds, ₹2,500 / night
 * Both categories include AC, attached bathroom with geyser, beds with sheets & blankets,
 * access to open kitchen, and secure on-site parking.
 */

export interface YatriRoomInfo {
  id: string;
  title: string;
  devanagariTitle: string;
  gujaratiTitle: string;
  tagline: string;
  capacityLabel: string;
  bedConfiguration: string;
  roomRate: string; // e.g. "₹1,500 / night"
  maintenanceContribution?: string; // backwards compatibility
  primaryImage: string;
  detailImages: string[];
  description: string;
  verifiedAmenities: string[];
  floorPlanNote: string;
}

export const YATRI_NIVAS_STATUS = {
  availabilityState: 'available' as 'available' | 'limited' | 'inquiry_only' | 'full',
  statusLabel: 'Rooms Available',
  statusSubtext: 'Direct reception desk inquiry open for pilgrims & traveling families',
  inquiryPhone: '+91 98290 54322',
  receptionDeskHours: 'Open 24 Hours for Checked-in Yatris',
  note: '* Room rates are fixed contributions directed to campus sanitation, electricity, maintenance, and pilgrim facility upkeep. Inquiries handled directly at reception desk.'
};

export const YATRI_ROOMS_INFO: YatriRoomInfo[] = [
  {
    id: 'standard-room',
    title: 'Standard Room',
    devanagariTitle: 'मानक कक्ष',
    gujaratiTitle: 'સ્ટાન્ડર્ડ ઓરડો',
    tagline: 'Comfortable air-conditioned room for small families and pilgrims',
    capacityLabel: '2 to 3 Guests',
    bedConfiguration: '2–3 Beds with Clean Linen & Blankets',
    roomRate: '₹1,500 / night',
    maintenanceContribution: '₹1,500 / night',
    primaryImage: '/assets/images/yatrinivas/room_deluxe.jpg',
    detailImages: [
      '/assets/images/yatrinivas/room_deluxe.jpg',
      '/assets/images/yatrinivas/room_bathroom.jpg',
      '/assets/images/yatrinivas/reception_lobby.jpg'
    ],
    description: 'Comfortable and impeccably maintained room featuring air conditioning, attached modern private bathroom with 24/7 electric geyser hot water, clean beds with fresh sheets and blankets, and access to the open kitchen facility.',
    verifiedAmenities: [
      'Air Conditioning (AC)',
      'Attached Modern Private Bathroom',
      '24/7 Electric Geyser Hot Water',
      'Beds with Clean Sheets & Blankets',
      'Access to Open Kitchen Facility',
      'Secure On-Site Vehicle Parking',
      'High-Speed Ceiling Fan & Natural Light'
    ],
    floorPlanNote: 'Located on upper guest floors of the 4-level building, accessible via the central atrium.'
  },
  {
    id: 'larger-room',
    title: 'Larger Room',
    devanagariTitle: 'विशाल परिवार कक्ष',
    gujaratiTitle: 'મોટો પારિવારિક ઓરડો',
    tagline: 'Spacious air-conditioned room designed for pilgrim groups and larger families',
    capacityLabel: '5 to 6 Guests',
    bedConfiguration: '5–6 Beds with Clean Linen & Blankets',
    roomRate: '₹2,500 / night',
    maintenanceContribution: '₹2,500 / night',
    primaryImage: '/assets/images/yatrinivas/dormitory_hall.jpg',
    detailImages: [
      '/assets/images/yatrinivas/dormitory_hall.jpg',
      '/assets/images/yatrinivas/atrium_architecture.jpg',
      '/assets/images/yatrinivas/reception_lobby.jpg'
    ],
    description: 'Spacious accommodation designed for pilgrimage groups and extended families. Features air conditioning, attached clean washrooms with geyser hot water, individual beds with spotless linen and blankets, and access to the open kitchen.',
    verifiedAmenities: [
      'Air Conditioning (AC)',
      'Attached Modern Private Bathroom',
      '24/7 Electric Geyser Hot Water',
      '5–6 Beds with Sheets & Warm Blankets',
      'Access to Open Kitchen Facility',
      'Secure On-Site Vehicle Parking',
      'Dedicated Bedside Charging Sockets'
    ],
    floorPlanNote: 'Spacious hall configuration with direct corridor access to the central building atrium.'
  }
];

export const GENERAL_FACILITIES = [
  {
    title: '24/7 Electric Hot Water',
    gujaratiTitle: '૨૪/૭ ગરમ પાણી',
    hindiTitle: '२४/७ गर्म पानी',
    description: 'Electric geysers in attached washrooms ensuring continuous hot water for morning bath before Mangla Aarti.'
  },
  {
    title: 'On-Site Secure Parking',
    gujaratiTitle: 'સુરક્ષિત વાહન પાર્કિંગ',
    hindiTitle: 'परिसर में सुरक्षित पार्किंग',
    description: 'Spacious paved courtyard with ample parking for cars, motorcycles, scooters, buses, travellers, and large family vehicles.'
  },
  {
    title: 'Front Desk Reception',
    gujaratiTitle: 'સ્વાગત કક્ષ (રીસેપ્શન)',
    hindiTitle: 'स्वागत कक्ष (रिसेप्शन)',
    description: 'Dedicated front desk in the ground lobby assisting pilgrims with room registration, luggage, directions, and guidelines.'
  },
  {
    title: 'Access to Open Kitchen',
    gujaratiTitle: 'ખુલ્લી રસોઈની સુવિધા',
    hindiTitle: 'खुली रसोई की सुविधा',
    description: 'Open kitchen facility allowing yatris and pilgrim families to cook their own pure sattvic food during their stay.'
  },
  {
    title: 'Pure Sattvic Environment',
    gujaratiTitle: 'શુદ્ધ સાત્વિક વાતાવરણ',
    hindiTitle: 'शुद्ध सात्विक वातावरण',
    description: 'Quiet, smoking-free, alcohol-free sanctified premises fostering deep meditation and peaceful night rest.'
  }
];

export const VISITOR_GUIDELINES = [
  'Government-approved photo identity proof must be presented physically at the reception desk during check-in.',
  'Accommodation is reserved exclusively for pilgrims, temple visitors, and traveling families visiting Shree Swaminarayan Mandir.',
  'Strictly 100% vegetarian, non-alcoholic, and non-smoking campus. Outside prohibited substances are strictly disallowed.',
  'Please maintain the sacred silence and dignity of the campus, especially during night hours (after 10:00 PM).'
];
