/**
 * Temple Time Engine strictly bound to Asia/Kolkata (IST, UTC+05:30)
 * Evaluates real-time operational status, upcoming Aartis, and opening schedules
 * independent of the visitor's local system timezone.
 */

export interface AartiItem {
  id: string;
  name: string;
  devanagariName: string;
  gujaratiName: string;
  timeString: string; // "05:30 AM"
  hour: number;       // 24-hr format
  minute: number;
  meaning: string;
  description: string;
}

export interface TempleTimeStatus {
  formattedISTTime: string;      // e.g. "06:45 PM"
  formattedISTDate: string;      // e.g. "01 Nov 2026"
  dayOfWeek: string;             // e.g. "Sunday"
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

export const OFFICIAL_AARTI_SCHEDULE: AartiItem[] = [
  {
    id: 'mangla',
    name: 'Mangla Aarti',
    devanagariName: 'मंगळा आरती',
    gujaratiName: 'મંગળા આરતી',
    timeString: '05:30 AM',
    hour: 5,
    minute: 30,
    meaning: 'Awakening prayer welcoming the first morning divine light.',
    description: 'Devotees gather in silent meditation as sanctum doors open with burning camphor lamps.'
  },
  {
    id: 'shangar',
    name: 'Shangar Aarti',
    devanagariName: 'शृंगार आरती',
    gujaratiName: 'શણગાર આરતી',
    timeString: '08:05 AM',
    hour: 8,
    minute: 5,
    meaning: 'Adornment prayer unveiling sacred silk garments and flower garlands.',
    description: 'The deities are presented in hand-woven vastras and fresh fragrant garlands accompanied by kirtans.'
  },
  {
    id: 'rajbhog',
    name: 'Rajbhog Aarti',
    devanagariName: 'राजभोग आरती',
    gujaratiName: 'રાજભોગ આરતી',
    timeString: '10:30 AM',
    hour: 10,
    minute: 30,
    meaning: 'Midday royal offering of pure sattvic delicacies.',
    description: 'Bhog is offered to Bhagwan Swaminarayan prior to midday temple repose.'
  },
  {
    id: 'sandhya',
    name: 'Sandhya Aarti',
    devanagariName: 'संध्या आरती',
    gujaratiName: 'સંધ્યા આરતી',
    timeString: '06:45 PM',
    hour: 18,
    minute: 45,
    meaning: 'Sunset prayer with tiered glowing brass lamps and chiming bells.',
    description: 'As twilight falls over Bagru Dham, the assembly fills with melodic collective chanting.'
  },
  {
    id: 'shayan',
    name: 'Shayan Aarti',
    devanagariName: 'शयन आरती',
    gujaratiName: 'શયન આરતી',
    timeString: '08:30 PM',
    hour: 20,
    minute: 30,
    meaning: 'Final night prayer prior to sanctum repose.',
    description: 'Gentle night prayer concluding daily darshan with devotional lullabies.'
  }
];

// Official Temple Daily Hours in IST:
// Morning: 05:00 AM (300m) to 12:00 PM (720m)
// Afternoon Repose: 12:00 PM (720m) to 03:00 PM (900m)
// Evening: 03:00 PM (900m) to 08:30 PM (1230m)
const MORNING_OPEN = 5 * 60;       // 300
const MORNING_CLOSE = 12 * 60;     // 720
const EVENING_OPEN = 15 * 60;      // 900
const EVENING_CLOSE = 20 * 60 + 30; // 1230

/**
 * Calculates real-time temple status strictly evaluated in Asia/Kolkata
 */
export function getTempleTimeStatus(
  statusOverride?: 'auto' | 'open' | 'closed' | 'festival_special',
  specialNotice?: string
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

  // Determine Open/Closed status
  let isOpen = false;
  let statusLabel = 'Closed for Repose';
  let statusSubtext = 'Mandir reopens at 03:00 PM IST';

  if (currentMinutes >= MORNING_OPEN && currentMinutes < MORNING_CLOSE) {
    isOpen = true;
    statusLabel = 'Open for Darshan';
    statusSubtext = 'Morning session until 12:00 PM IST';
  } else if (currentMinutes >= MORNING_CLOSE && currentMinutes < EVENING_OPEN) {
    isOpen = false;
    statusLabel = 'Afternoon Repose';
    statusSubtext = 'Mandir reopens at 03:00 PM IST';
  } else if (currentMinutes >= EVENING_OPEN && currentMinutes <= EVENING_CLOSE) {
    isOpen = true;
    statusLabel = 'Open for Darshan';
    statusSubtext = 'Evening session until 08:30 PM IST';
  } else {
    isOpen = false;
    statusLabel = 'Closed for the Night';
    statusSubtext = 'Mangla Aarti tomorrow at 05:30 AM IST';
  }

  // Administrative overrides
  if (statusOverride === 'open') {
    isOpen = true;
    statusLabel = 'Open for Special Darshan';
    statusSubtext = specialNotice || 'Continuous festival darshan';
  } else if (statusOverride === 'closed') {
    isOpen = false;
    statusLabel = 'Mandir Temporarily Closed';
    statusSubtext = specialNotice || 'Special ritual in progress';
  } else if (statusOverride === 'festival_special') {
    isOpen = true;
    statusLabel = 'Utsav Darshan Open';
    statusSubtext = specialNotice || 'Special festival celebration';
  }

  // Calculate Next Upcoming Aarti
  let nextAartiObj: AartiItem | null = null;
  let isTomorrow = false;
  let minutesRemaining = 0;

  for (const aarti of OFFICIAL_AARTI_SCHEDULE) {
    const aartiMinutes = aarti.hour * 60 + aarti.minute;
    if (aartiMinutes > currentMinutes) {
      nextAartiObj = aarti;
      minutesRemaining = aartiMinutes - currentMinutes;
      break;
    }
  }

  // If passed all aartis today, next is tomorrow's Mangla Aarti (05:30 AM)
  if (!nextAartiObj) {
    nextAartiObj = OFFICIAL_AARTI_SCHEDULE[0]; // Mangla
    isTomorrow = true;
    const minutesUntilMidnight = 24 * 60 - currentMinutes;
    const minutesFromMidnightToMangla = nextAartiObj.hour * 60 + nextAartiObj.minute;
    minutesRemaining = minutesUntilMidnight + minutesFromMidnightToMangla;
  }

  const hoursRemaining = Math.floor(minutesRemaining / 60);
  const remainingMinsOnly = minutesRemaining % 60;

  let countdownLabel = '';
  if (hoursRemaining > 0) {
    countdownLabel = `in ${hoursRemaining}h ${remainingMinsOnly}m`;
  } else {
    countdownLabel = `in ${remainingMinsOnly}m`;
  }

  return {
    formattedISTTime,
    formattedISTDate,
    dayOfWeek,
    isOpen,
    statusLabel,
    statusSubtext,
    nextAarti: {
      name: nextAartiObj.name,
      timeString: nextAartiObj.timeString,
      isTomorrow,
      hoursRemaining,
      minutesRemaining: remainingMinsOnly,
      countdownLabel
    }
  };
}
