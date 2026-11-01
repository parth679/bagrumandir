/**
 * Navigation Configuration for Multi-Page Routing
 * Defines links for the 3D Adaptive Header Pill, Mobile Quick Dock, and Footer
 * 5 Distinct Pages:
 * 1. Home ('/')
 * 2. About ('/about')
 * 3. Darshan ('/darshan')
 * 4. Yatri Nivas ('/yatri-nivas')
 * 5. Visit ('/visit')
 */

export interface NavItem {
  id: string;
  path: string;
  label: string;
  devanagariLabel: string;
  gujaratiLabel: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'home', path: '/', label: 'Mandir', devanagariLabel: 'मंदिर', gujaratiLabel: 'મંદિર' },
  { id: 'about', path: '/about', label: 'About', devanagariLabel: 'परिचय', gujaratiLabel: 'પરિચય' },
  { id: 'darshan', path: '/darshan', label: 'Darshan & Aarti', devanagariLabel: 'दर्शन & आरती', gujaratiLabel: 'દર્શન & આરતી' },
  { id: 'yatrinivas', path: '/yatri-nivas', label: 'Yatri Nivas', devanagariLabel: 'यात्री निवास', gujaratiLabel: 'યાત્રી નિવાસ', badge: 'Stay' },
  { id: 'visit', path: '/visit', label: 'Visitor Guide', devanagariLabel: 'मार्गदर्शिका', gujaratiLabel: 'માર્ગદર્શિકા' }
];

export const MOBILE_DOCK_ITEMS = [
  { id: 'home', path: '/', label: 'Mandir', icon: 'Home' },
  { id: 'about', path: '/about', label: 'About', icon: 'Landmark' },
  { id: 'darshan', path: '/darshan', label: 'Darshan', icon: 'Sparkles' },
  { id: 'yatrinivas', path: '/yatri-nivas', label: 'Stay', icon: 'BedDouble', hasBadge: true },
  { id: 'visit', path: '/visit', label: 'Guide', icon: 'MapPin' },
  { id: 'dhun', path: '#dhun', label: 'Dhun', icon: 'Music' }
];
