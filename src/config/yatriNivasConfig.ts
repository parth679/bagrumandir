/**
 * Yatri Nivas (Vishranti Gruh) Accommodation Configuration
 * Strictly informational: details verified room types, photographs, facilities,
 * policies, and front desk inquiry channels without interactive booking forms.
 */

export interface YatriRoomInfo {
  id: string;
  title: string;
  devanagariTitle: string;
  tagline: string;
  capacityLabel: string;
  bedConfiguration: string;
  maintenanceContribution: string; // e.g. "₹1,200 nominal maintenance / night*"
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
  note: '* Room maintenance contributions are voluntary nominal donations directed solely to campus sanitation, electricity, and pilgrim facility upkeep.'
};

export const YATRI_ROOMS_INFO: YatriRoomInfo[] = [
  {
    id: 'deluxe-pilgrim-room',
    title: 'Deluxe Pilgrim Room',
    devanagariTitle: 'डीलक्स विश्रांति कक्ष',
    tagline: 'Quiet, air-cooled private room with solid wood furnishings',
    capacityLabel: '2 to 3 Guests',
    bedConfiguration: '1 Solid Teak Double / Queen Bed',
    maintenanceContribution: '₹1,200 / night (Nominal Upkeep)',
    primaryImage: '/assets/images/yatrinivas/room_deluxe.jpg',
    detailImages: [
      '/assets/images/yatrinivas/room_deluxe.jpg',
      '/assets/images/yatrinivas/room_bathroom.jpg',
      '/assets/images/yatrinivas/reception_lobby.jpg'
    ],
    description: 'Spacious and impeccably maintained room featuring natural wood-grain tile flooring, textured ribbed wall acoustic cladding, solid teakwood bed, nightstand, and curtained courtyard window for a quiet, restful retreat.',
    verifiedAmenities: [
      'Attached Modern Private Bathroom',
      '24/7 Electric Geyser Hot Water',
      'Overhead Shower & Wash Basin',
      'High-Speed Ceiling Fan & Quiet Air Flow',
      'Bedside Power Outlets for Charging',
      'Courtyard Facing Curtained Windows',
      'Solid Teak Bedside Nightstand & Chair'
    ],
    floorPlanNote: 'Located on Upper Guest Floors (Block F) accessible via the illuminated central atrium.'
  },
  {
    id: 'multi-bed-dormitory',
    title: 'Pilgrim Dormitory / Family Hall',
    devanagariTitle: 'यात्री सदन / परिवार कक्ष',
    tagline: 'Spacious multi-bed room designed for yatra groups and families',
    capacityLabel: '3 to 6 Guests',
    bedConfiguration: 'Series of Individual Wooden Single Beds',
    maintenanceContribution: '₹650 / bed or room (Nominal Upkeep)',
    primaryImage: '/assets/images/yatrinivas/dormitory_hall.jpg',
    detailImages: [
      '/assets/images/yatrinivas/dormitory_hall.jpg',
      '/assets/images/yatrinivas/atrium_architecture.jpg',
      '/assets/images/yatrinivas/reception_lobby.jpg'
    ],
    description: 'Designed specifically for traveling pilgrimage sanghs and extended families. Arranged with individual wooden single beds in series, each equipped with spotless linen, pillow, blanket, and personal wall power outlets.',
    verifiedAmenities: [
      'Individual Wooden Single Beds',
      'Dedicated Bedside Wall Charging Sockets',
      'Dual High-Speed Ceiling Fans',
      'Attached / Accessible Clean Washrooms',
      'Natural Wood-Grain Tile Flooring',
      'High Ceiling Natural Air Circulation',
      'Secure Campus Gated Environment'
    ],
    floorPlanNote: 'Spacious hall configuration with direct corridor access to the central building atrium.'
  }
];

export const GENERAL_FACILITIES = [
  {
    title: '24/7 Electric Hot Water',
    description: 'Instant electric geysers in attached washrooms ensuring continuous hot water for morning bath before Mangla Aarti.'
  },
  {
    title: 'On-Site Secure Parking',
    description: 'Spacious paved courtyard with ample parking for devotee cars, buses, and family vehicles inside temple gates.'
  },
  {
    title: 'Front Desk Reception',
    description: 'Dedicated front desk in the ground lobby assisting pilgrims with room registration, luggage, and guidelines.'
  },
  {
    title: '4-Storey Central Atrium',
    description: 'Architectural skylight atrium providing natural ventilation, cross breeze, and natural light across all residential floors.'
  },
  {
    title: 'Pure Sattvic Environment',
    description: 'Quiet, smoking-free, alcohol-free sanctified premises fostering deep meditation and peaceful night rest.'
  }
];

export const VISITOR_GUIDELINES = [
  'Government-approved photo identity proof (e.g. Aadhaar Card, Voter ID) must be presented physically at the reception desk during check-in.',
  'Accommodation is reserved exclusively for pilgrims, temple visitors, and traveling families visiting Shree Swaminarayan Mandir.',
  'Strictly 100% vegetarian, non-alcoholic, and non-smoking campus. Outside prohibited substances are strictly disallowed.',
  'Please maintain the sacred silence and dignity of the campus, especially during night hours (after 10:00 PM).'
];
