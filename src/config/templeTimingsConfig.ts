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
      note: 'Mangla Aarti (06:00 AM), Shangar, and Rajbhog',
      devanagariNote: 'मंगला आरती (०६:०० AM), शणगार एवं राजभोग आरती',
      gujaratiNote: 'મંગળા આરતી (૦૬:૦૦ AM), શણગાર અને રાજભોગ આરતી'
    },
    {
      session: 'Afternoon Repose',
      devanagariSession: 'दोपहर विश्राम (कपाट बंद)',
      gujaratiSession: 'બપોરનો આરામ (કપાટ બંધ)',
      time: '12:00 PM - 03:00 PM IST',
      note: 'Sanctum doors closed for deities repose',
      devanagariNote: 'ठाकोरजी के विश्राम हेतु गर्भगृह के कपाट बंद रहते हैं',
      gujaratiNote: 'ઠાકોરજીના આરામ માટે ગર્ભગૃહના કપાટ બંધ રહે છે'
    },
    {
      session: 'Evening Darshan',
      devanagariSession: 'सायं दर्शन',
      gujaratiSession: 'સાંજનું દર્શન',
      time: '03:00 PM - 08:30 PM IST',
      note: 'Sandhya Aarti (06:30 PM) and Shayan Aarti',
      devanagariNote: 'संध्या आरती (०६:३० PM) एवं शयन आरती',
      gujaratiNote: 'સંધ્યા આરતી (૦૬:૩૦ PM) અને શયન આરતી'
    }
  ],
  // Administrative overrides: 'auto' | 'open' | 'closed' | 'festival_special'
  statusOverride: 'auto' as 'auto' | 'open' | 'closed' | 'festival_special',
  specialNotice: ''
};
