export type ThemeMode = 'stone' | 'meditation';
export type Language = 'EN' | 'GU' | 'HI';

export interface AartiTiming {
  id: string;
  name: string;
  gujaratiName: string;
  time: string; // e.g. "05:30 AM"
  meaning: string;
  description: string;
  isCompletedToday?: boolean;
}

export interface DarshanPhoto {
  id: string;
  title: string;
  date: string;
  category: 'main_deity' | 'shringar' | 'architecture' | 'utsav';
  imageUrl: string;
  caption: string;
  location: string;
}

export interface YatriRoom {
  id: string;
  title: string;
  type: 'standard_non_ac' | 'deluxe_ac' | 'family_suite' | 'heritage_cottage';
  capacity: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  amenities: string[];
  description: string;
  isPopular?: boolean;
  availableCount: number;
}

export interface BookingDetails {
  roomId: string;
  roomTitle: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  guestName: string;
  phone: string;
  email: string;
  idProofType: string;
  idProofNumber: string;
  specialRequests: string;
  totalAmount: number;
  bookingRef?: string;
}

export interface SpiritualExperience {
  id: string;
  title: string;
  subtitle: string;
  category: 'ritual' | 'heritage' | 'sewa' | 'wellness';
  time: string;
  duration: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface TempleEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  type: 'utsav' | 'ekadashi' | 'poornima' | 'katha';
  description: string;
  time: string;
  venue: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
  category: 'dhun' | 'aarti' | 'kirtan' | 'prabhatiya';
}

export interface ScriptureExcerpt {
  id: string;
  book: string;
  chapter: string;
  title: string;
  quote: string;
  meaning: string;
}
