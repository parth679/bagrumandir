/**
 * Daily Aarti Timetable and Special Event Timings
 * Shree Swaminarayan Mandir, Jaipur (Bagru)
 */

import { OFFICIAL_AARTI_SCHEDULE } from '../utils/templeTime';

export const TEMPLE_TIMINGS_CONFIG = {
  timezone: 'Asia/Kolkata',
  aartis: OFFICIAL_AARTI_SCHEDULE,
  darshanSessions: [
    {
      session: 'Morning Darshan',
      devanagariSession: 'प्रातः दर्शन',
      gujaratiSession: 'પ્રાતઃ દર્શન',
      time: '05:00 AM - 12:00 PM IST',
      note: 'Mangla Aarti (06:00 AM), Shangar, and Rajbhog'
    },
    {
      session: 'Afternoon Repose',
      devanagariSession: 'दोपहर विश्राम (कपाट बंद)',
      gujaratiSession: 'બપોરનો આરામ (કપાટ બંધ)',
      time: '12:00 PM - 03:00 PM IST',
      note: 'Sanctum doors closed for deities repose'
    },
    {
      session: 'Evening Darshan',
      devanagariSession: 'सायं दर्शन',
      gujaratiSession: 'સાંજનું દર્શન',
      time: '03:00 PM - 08:30 PM IST',
      note: 'Sandhya Aarti (06:30 PM) and Shayan Aarti'
    }
  ],
  // Administrative overrides: 'auto' | 'open' | 'closed' | 'festival_special'
  statusOverride: 'auto' as 'auto' | 'open' | 'closed' | 'festival_special',
  specialNotice: ''
};
