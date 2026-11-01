/**
 * Daily Aarti Timetable and Special Event Timings
 * Shree Swaminarayan Mandir Bagru Dham
 */

import { OFFICIAL_AARTI_SCHEDULE } from '../utils/templeTime';

export const TEMPLE_TIMINGS_CONFIG = {
  timezone: 'Asia/Kolkata',
  aartis: OFFICIAL_AARTI_SCHEDULE,
  darshanSessions: [
    {
      session: 'Morning Darshan',
      devanagariSession: 'प्रातः दर्शन',
      time: '05:00 AM - 12:00 PM IST',
      note: 'Mangla, Shangar, and Rajbhog Aartis'
    },
    {
      session: 'Afternoon Repose',
      devanagariSession: 'दोपहर विश्राम (कपाट बंद)',
      time: '12:00 PM - 03:00 PM IST',
      note: 'Sanctum doors closed for deities repose'
    },
    {
      session: 'Evening Darshan',
      devanagariSession: 'सायं दर्शन',
      time: '03:00 PM - 08:30 PM IST',
      note: 'Sandhya and Shayan Aartis'
    }
  ],
  // Administrative overrides: 'auto' | 'open' | 'closed' | 'festival_special'
  statusOverride: 'auto' as 'auto' | 'open' | 'closed' | 'festival_special',
  specialNotice: ''
};
