/**
 * Navigation Configuration
 * Defines links for the 3D Adaptive Header Pill, Mobile Quick Dock, and Footer
 * (Excludes booking forms and donation workflows per final scope).
 */

export interface NavItem {
  id: string;
  label: string;
  devanagariLabel: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Mandir', devanagariLabel: 'मंदिर' },
  { id: 'darshan', label: 'Daily Darshan', devanagariLabel: 'नित्य दर्शन' },
  { id: 'architecture', label: 'Heritage & Stone', devanagariLabel: 'शिल्पकला' },
  { id: 'yatrinivas', label: 'Yatri Nivas', devanagariLabel: 'विश्रांति गृह', badge: 'Stay' },
  { id: 'timings', label: 'Aarti Timings', devanagariLabel: 'आरती समय' },
  { id: 'visitor', label: 'Visitor Guide', devanagariLabel: 'मार्गदर्शिका' }
];

export const MOBILE_DOCK_ITEMS = [
  { id: 'hero', label: 'Mandir', icon: 'Home' },
  { id: 'darshan', label: 'Darshan', icon: 'Sun' },
  { id: 'yatrinivas', label: 'Rooms', icon: 'BedDouble' },
  { id: 'timings', label: 'Aarti', icon: 'Clock' },
  { id: 'visitor', label: 'Directions', icon: 'MapPin' }
];
