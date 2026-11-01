/**
 * Temple Time Engine strictly bound to Asia/Kolkata (IST, UTC+05:30)
 * Evaluates real-time operational status, upcoming Aartis, and opening schedules
 * independent of the visitor's local system timezone.
 */

import { Language } from '../types';

export interface AartiItem {
  id: string;
  name: string;
  devanagariName: string;
  gujaratiName: string;
  timeString: string | null; // e.g. "06:00 AM" or null for unconfirmed
  hour: number | null;       // 24-hr format (0-23) or null
  minute: number | null;     // (0-59) or null
  confirmed: boolean;
  meaning: string;
  description: string;
}

export interface TempleTimeStatus {
  formattedISTTime: string;      // e.g. "06:30 PM IST"
  formattedISTDate: string;      // e.g. "02 Nov 2026"
  dayOfWeek: string;             // e.g. "Monday"
  isOpen: boolean;
  statusLabel: string;           // "Open for Darshan", "Afternoon Repose", etc.
  statusSubtext: string;
  nextAarti: {
    name: string;
    timeString: string;
    isTomorrow: boolean;
    hoursRemaining: number;
    minutesRemaining: number;
    countdownLabel: string;
  };
}

/**
 * Five Daily Aartis of Shree Swaminarayan Mandir, Jaipur (Bagru)
 * Verified Timings:
 * - Mangla Aarti: 06:00 AM (Confirmed)
 * - Shangar Aarti: Timing to be confirmed (TBC)
 * - Rajbhog Aarti: Timing to be confirmed (TBC)
 * - Sandhya Aarti: 06:30 PM (Confirmed)
 * - Shayan Aarti: Timing to be confirmed (TBC)
 */
export const OFFICIAL_AARTI_SCHEDULE: AartiItem[] = [
  {
    id: 'mangla',
    name: 'Mangla Aarti',
    devanagariName: 'मंगला आरती',
    gujaratiName: 'મંગળા આરતી',
    timeString: '06:00 AM',
    hour: 6,
    minute: 0,
    confirmed: true,
    meaning: 'Awakening prayer welcoming the first morning divine light.',
    description: 'Devotees gather in silent meditation as sanctum doors open with burning camphor lamps.'
  },
  {
    id: 'shangar',
    name: 'Shangar Aarti',
    devanagariName: 'शृंगार आरती',
    gujaratiName: 'શણગાર આરતી',
    timeString: null,
    hour: null,
    minute: null,
    confirmed: false,
    meaning: 'Adornment prayer unveiling sacred silk garments and flower garlands.',
    description: 'The deities are presented in hand-woven vastras and fresh fragrant garlands accompanied by kirtans.'
  },
  {
    id: 'rajbhog',
    name: 'Rajbhog Aarti',
    devanagariName: 'राजभोग आरती',
    gujaratiName: 'રાજભોગ આરતી',
    timeString: null,
    hour: null,
    minute: null,
    confirmed: false,
    meaning: 'Midday royal offering of pure sattvic delicacies.',
    description: 'Bhog is offered to Bhagwan Swaminarayan prior to midday temple repose.'
  },
  {
    id: 'sandhya',
    name: 'Sandhya Aarti',
    devanagariName: 'संध्या आरती',
    gujaratiName: 'સંધ્યા આરતી',
    timeString: '06:30 PM',
    hour: 18,
    minute: 30,
    confirmed: true,
    meaning: 'Sunset prayer with tiered glowing brass lamps and chiming bells.',
    description: 'As twilight falls over Jaipur (Bagru), the assembly fills with melodic collective chanting.'
  },
  {
    id: 'shayan',
    name: 'Shayan Aarti',
    devanagariName: 'शयन आरती',
    gujaratiName: 'શયન આરતી',
    timeString: null,
    hour: null,
    minute: null,
    confirmed: false,
    meaning: 'Final night prayer prior to sanctum repose.',
    description: 'Gentle night prayer concluding daily darshan with devotional lullabies.'
  }
];

// Official Temple Daily Hours in IST:
// Morning: 05:00 AM (300m) to 12:00 PM (720m)
// Afternoon Repose: 12:00 PM (720m) to 03:00 PM (900m)
// Evening: 03:00 PM (900m) to 08:30 PM (1230m)
const MORNING_OPEN = 5 * 60;        // 300
const MORNING_CLOSE = 12 * 60;      // 720
const EVENING_OPEN = 15 * 60;       // 900
const EVENING_CLOSE = 20 * 60 + 30; // 1230

/**
 * Calculates real-time temple status strictly evaluated in Asia/Kolkata
 */
export function getTempleTimeStatus(
  statusOverride?: 'auto' | 'open' | 'closed' | 'festival_special',
  specialNotice?: string,
  lang: Language = 'EN'
): TempleTimeStatus {
  const now = new Date();

  // Extract Asia/Kolkata parts strictly using Intl
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  const parts = formatter.formatToParts(now);
  let hour = 0;
  let minute = 0;
  let dayOfWeek = '';
  let dayStr = '';
  let monthStr = '';
  let yearStr = '';

  for (const p of parts) {
    if (p.type === 'hour') hour = parseInt(p.value, 10);
    if (p.type === 'minute') minute = parseInt(p.value, 10);
    if (p.type === 'weekday') dayOfWeek = p.value;
    if (p.type === 'day') dayStr = p.value;
    if (p.type === 'month') monthStr = p.value;
    if (p.type === 'year') yearStr = p.value;
  }

  // Handle 24-hr to 12-hr display
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedISTTime = `${String(displayHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${ampm} IST`;
  const formattedISTDate = `${dayStr} ${monthStr} ${yearStr}`;

  const currentMinutes = hour * 60 + minute;

  // Determine Open/Closed status with multilingual support
  let isOpen = false;
  let statusLabel = 'Closed for Repose';
  let statusSubtext = 'Mandir reopens at 03:00 PM IST';

  if (currentMinutes >= MORNING_OPEN && currentMinutes < MORNING_CLOSE) {
    isOpen = true;
    if (lang === 'HI') {
      statusLabel = 'दर्शन के लिए खुला';
      statusSubtext = 'प्रातः सत्र दोपहर १२:०० PM IST तक';
    } else if (lang === 'GU') {
      statusLabel = 'દર્શન માટે ખુલ્લું';
      statusSubtext = 'સવારનું સત્ર બપોરે ૧૨:૦૦ PM IST સુધી';
    } else {
      statusLabel = 'Open for Darshan';
      statusSubtext = 'Morning session until 12:00 PM IST';
    }
  } else if (currentMinutes >= MORNING_CLOSE && currentMinutes < EVENING_OPEN) {
    isOpen = false;
    if (lang === 'HI') {
      statusLabel = 'दोपहर विश्राम';
      statusSubtext = 'मंदिर ०३:०० PM IST पर पुनः खुलेगा';
    } else if (lang === 'GU') {
      statusLabel = 'બપોરનો આરામ';
      statusSubtext = 'મંદિર ૦૩:૦૦ PM IST એ ફરી ખૂલશે';
    } else {
      statusLabel = 'Afternoon Repose';
      statusSubtext = 'Mandir reopens at 03:00 PM IST';
    }
  } else if (currentMinutes >= EVENING_OPEN && currentMinutes <= EVENING_CLOSE) {
    isOpen = true;
    if (lang === 'HI') {
      statusLabel = 'दर्शन के लिए खुला';
      statusSubtext = 'सायं सत्र रात्रि ०૮:३० PM IST तक';
    } else if (lang === 'GU') {
      statusLabel = 'દર્શન માટે ખુલ્લું';
      statusSubtext = 'સાંજનું સત્ર રાત્રે ૦૮:૩૦ PM IST સુધી';
    } else {
      statusLabel = 'Open for Darshan';
      statusSubtext = 'Evening session until 08:30 PM IST';
    }
  } else {
    isOpen = false;
    if (lang === 'HI') {
      statusLabel = 'रात्रि में बंद';
      statusSubtext = 'कल मंगला आरती ०६:०० AM IST';
    } else if (lang === 'GU') {
      statusLabel = 'રાત્રે બંધ';
      statusSubtext = 'આવતીકાલે મંગળા આરતી ૦૬:૦૦ AM IST';
    } else {
      statusLabel = 'Closed for the Night';
      statusSubtext = 'Mangla Aarti tomorrow at 06:00 AM IST';
    }
  }

  // Administrative overrides
  if (statusOverride === 'open') {
    isOpen = true;
    statusLabel = lang === 'HI' ? 'विशेष दर्शन खुला' : lang === 'GU' ? 'વિશેષ દર્શન ખુલ્લું' : 'Open for Special Darshan';
    statusSubtext = specialNotice || (lang === 'HI' ? 'निरंतर उत्सव दर्शन' : lang === 'GU' ? 'નિરંતર ઉત્સવ દર્શન' : 'Continuous festival darshan');
  } else if (statusOverride === 'closed') {
    isOpen = false;
    statusLabel = lang === 'HI' ? 'मंदिर अस्थायी रूप से बंद' : lang === 'GU' ? 'મંદિર અસ્થાયી રીતે બંધ' : 'Mandir Temporarily Closed';
    statusSubtext = specialNotice || (lang === 'HI' ? 'विशेष अनुष्ठान प्रगति पर' : lang === 'GU' ? 'વિશેષ પૂજા પ્રગતિમાં' : 'Special ritual in progress');
  } else if (statusOverride === 'festival_special') {
    isOpen = true;
    statusLabel = lang === 'HI' ? 'उत्सव दर्शन खुला' : lang === 'GU' ? 'ઉત્સવ દર્શન ખુલ્લું' : 'Utsav Darshan Open';
    statusSubtext = specialNotice || (lang === 'HI' ? 'विशेष उत्सव समारोह' : lang === 'GU' ? 'વિશેષ ઉત્સવ સમારોહ' : 'Special festival celebration');
  }

  // Calculate Next Upcoming Confirmed Aarti ONLY
  // Unconfirmed Aartis (hour === null) are skipped in countdown calculation
  let nextAartiObj: AartiItem | null = null;
  let isTomorrow = false;
  let minutesRemaining = 0;

  for (const aarti of OFFICIAL_AARTI_SCHEDULE) {
    if (!aarti.confirmed || aarti.hour === null || aarti.minute === null) {
      continue;
    }
    const aartiMinutes = aarti.hour * 60 + aarti.minute;
    if (aartiMinutes > currentMinutes) {
      nextAartiObj = aarti;
      minutesRemaining = aartiMinutes - currentMinutes;
      break;
    }
  }

  // If passed all confirmed aartis today, next is tomorrow's Mangla Aarti (06:00 AM)
  if (!nextAartiObj) {
    nextAartiObj = OFFICIAL_AARTI_SCHEDULE[0]; // Mangla (confirmed at 06:00 AM)
    isTomorrow = true;
    const minutesUntilMidnight = 24 * 60 - currentMinutes;
    const minutesFromMidnightToMangla = (nextAartiObj.hour ?? 6) * 60 + (nextAartiObj.minute ?? 0);
    minutesRemaining = minutesUntilMidnight + minutesFromMidnightToMangla;
  }

  const hoursRemaining = Math.floor(minutesRemaining / 60);
  const remainingMinsOnly = minutesRemaining % 60;

  let countdownLabel = '';
  if (lang === 'HI') {
    countdownLabel = hoursRemaining > 0 ? `${hoursRemaining} घंटे ${remainingMinsOnly} मिनट में` : `${remainingMinsOnly} मिनट में`;
  } else if (lang === 'GU') {
    countdownLabel = hoursRemaining > 0 ? `${hoursRemaining} કલાક ${remainingMinsOnly} મિનિટમાં` : `${remainingMinsOnly} મિનિટમાં`;
  } else {
    countdownLabel = hoursRemaining > 0 ? `in ${hoursRemaining}h ${remainingMinsOnly}m` : `in ${remainingMinsOnly}m`;
  }

  const aartiName = lang === 'HI' ? nextAartiObj.devanagariName : lang === 'GU' ? nextAartiObj.gujaratiName : nextAartiObj.name;

  return {
    formattedISTTime,
    formattedISTDate,
    dayOfWeek,
    isOpen,
    statusLabel,
    statusSubtext,
    nextAarti: {
      name: aartiName,
      timeString: nextAartiObj.timeString ?? '06:00 AM',
      isTomorrow,
      hoursRemaining,
      minutesRemaining: remainingMinsOnly,
      countdownLabel
    }
  };
}
