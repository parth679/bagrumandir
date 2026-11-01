import React, { useState } from 'react';
import { YATRI_ROOMS, TEMPLE_INFO } from '../data/templeData';
import { YatriRoom, BookingDetails } from '../types';
import { 
  BedDouble, 
  Check, 
  Star, 
  Users, 
  Wifi, 
  Wind, 
  Sparkles, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Info, 
  X, 
  CheckCircle2, 
  Download, 
  Coffee,
  ArrowRight
} from 'lucide-react';

interface YatriNivasBookingProps {
  isBookingModalOpen: boolean;
  onCloseBookingModal: () => void;
  selectedRoomForBooking: YatriRoom | null;
  onSelectRoomForBooking: (room: YatriRoom | null) => void;
}

export const YatriNivasBooking: React.FC<YatriNivasBookingProps> = ({
  isBookingModalOpen,
  onCloseBookingModal,
  selectedRoomForBooking,
  onSelectRoomForBooking,
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [checkInDate, setCheckInDate] = useState<string>('2026-08-15');
  const [checkOutDate, setCheckOutDate] = useState<string>('2026-08-17');
  const [numberOfGuests, setNumberOfGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [idProofType, setIdProofType] = useState<string>('Aadhaar Card');
  const [idProofNumber, setIdProofNumber] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  const filteredRooms = filterType === 'all'
    ? YATRI_ROOMS
    : YATRI_ROOMS.filter(r => r.type === filterType);

  const activeRoom = selectedRoomForBooking || YATRI_ROOMS[0];

  // Calculate nights
  const nights = Math.max(1, Math.ceil(
    (new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 3600 * 24)
  ) || 1);

  const totalAmount = activeRoom.pricePerNight * nights;

  const handleStartBooking = (room: YatriRoom) => {
    onSelectRoomForBooking(room);
    setBookingStep(1);
    setConfirmedBooking(null);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !phone) {
      alert('Please provide your name and phone number for booking confirmation.');
      return;
    }

    const newBooking: BookingDetails = {
      roomId: activeRoom.id,
      roomTitle: activeRoom.title,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      guestName,
      phone,
      email,
      idProofType,
      idProofNumber,
      specialRequests,
      totalAmount,
      bookingRef: `YN-${Math.floor(100000 + Math.random() * 900000)}`
    };

    setConfirmedBooking(newBooking);
    setBookingStep(3);
  };

  return (
    <section id="stay" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-block bg-[#FF9933] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 shadow-md shadow-[#FF9933]/20">
            ★ Spiritual Accommodation
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#006D77] dark:text-[#E6C887]">
            Shree Swaminarayan Yatri Nivas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl">
            Spotless, air-conditioned, and standard rooms designed for pilgrims and families seeking quiet reflection close to the main shrine.
          </p>
        </div>

        {/* Stay Helpline Note */}
        <div className="p-4 rounded-2xl bg-[#006D77]/10 border border-[#006D77]/20 text-xs text-[#006D77] dark:text-teal-300 flex items-center gap-3 shrink-0">
          <Phone className="w-5 h-5 text-[#FF9933]" />
          <div>
            <div className="font-bold">Direct Yatri Nivas Desk</div>
            <div className="text-stone-700 dark:text-stone-300 font-mono">{TEMPLE_INFO.yatriNivasHelpline}</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold">
        {[
          { id: 'all', label: 'All Rooms' },
          { id: 'deluxe_ac', label: 'AC Deluxe Rooms' },
          { id: 'standard_non_ac', label: 'Standard Non-AC' },
          { id: 'heritage_cottage', label: 'Heritage Cottages' }
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilterType(f.id)}
            className={`px-4 py-2 rounded-full transition-all ${
              filterType === f.id
                ? 'bg-[#006D77] text-white shadow-md'
                : 'bg-stone-100 dark:bg-[#00383D] text-[#006D77] dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Room Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="group bg-white dark:bg-[#00383D] rounded-3xl overflow-hidden border border-[#006D77]/10 dark:border-[#006D77]/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
              <img
                src={room.imageUrl}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {room.isPopular && (
                  <span className="px-3 py-1 rounded-full bg-[#FF9933] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    ★ Highly Preferred
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-black/60 text-stone-200 text-[10px] font-semibold backdrop-blur-md">
                  {room.capacity}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold drop-shadow-sm">
                    {room.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#FF9933] mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-current text-[#FF9933]" />
                    <span>{room.rating} ({room.reviewCount} pilgrim reviews)</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#FF9933]">
                    ₹{room.pricePerNight}
                  </div>
                  <div className="text-[10px] text-stone-300">per night contribution</div>
                </div>
              </div>
            </div>

            {/* Room Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {room.description}
              </p>

              {/* Amenities Pills Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {room.amenities.slice(0, 6).map((amenity, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
                    <Check className="w-3.5 h-3.5 text-[#006D77] dark:text-teal-400 shrink-0" />
                    <span className="truncate">{amenity}</span>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-[#006D77]/10 dark:border-[#006D77]/30 flex items-center justify-between gap-3">
                <div className="text-xs text-[#006D77] dark:text-teal-300 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#FF9933]" />
                  <span>{room.availableCount} Rooms Available Today</span>
                </div>

                <button
                  onClick={() => handleStartBooking(room)}
                  className="bg-[#006D77] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#005a63] transition-all shadow-md flex items-center gap-1.5"
                >
                  <BedDouble className="w-4 h-4" />
                  <span>Book This Room</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOOKING MODAL */}
      {(isBookingModalOpen || selectedRoomForBooking) && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-2xl w-full bg-[#FAF8F5] dark:bg-[#12141D] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl text-[#1B1C15] dark:text-[#FDFCF0] my-8">
            
            {/* Modal Header */}
            <div className="bg-[#006D77] p-6 text-white flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9933]">
                  Official Yatri Nivas Reservation Desk
                </span>
                <h3 className="font-heading text-xl font-bold">
                  {activeRoom.title}
                </h3>
                <p className="text-xs text-stone-200 mt-1">
                  ₹{activeRoom.pricePerNight} / night • {activeRoom.capacity}
                </p>
              </div>

              <button
                onClick={() => {
                  onCloseBookingModal();
                  onSelectRoomForBooking(null);
                }}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Steps */}
            <div className="p-6">

              {/* STEP 1: DATES & GUEST COUNT */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                    <div>
                      <strong>Yatri Nivas Policy:</strong> Check-in time is 12:00 PM. Govt Photo ID is required during physical check-in. Pure Sattvic rules apply within premises.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={numberOfGuests}
                      onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                      className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                    >
                      <option value={1}>1 Guest (Pilgrim)</option>
                      <option value={2}>2 Guests (Twin / Couple)</option>
                      <option value={3}>3 Guests (Family)</option>
                      <option value={4}>4 Guests (Family Suite)</option>
                      <option value={5}>5 Guests (Large Family)</option>
                    </select>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/80 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-stone-500">Duration:</span>{' '}
                      <strong className="text-[#80000A] dark:text-[#E6C887]">{nights} Night(s)</strong>
                    </div>

                    <div className="text-right">
                      <span className="text-stone-500">Total Contribution:</span>{' '}
                      <strong className="text-base text-[#E65100]">₹{totalAmount}</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingStep(2)}
                    className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#006D77] hover:bg-[#005a63] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Continue to Pilgrim Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: GUEST DETAILS */}
              {bookingStep === 2 && (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Primary Pilgrim Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98250 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="pilgrim@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Govt ID Proof Type
                      </label>
                      <select
                        value={idProofType}
                        onChange={(e) => setIdProofType(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      >
                        <option value="Aadhaar Card">Aadhaar Card</option>
                        <option value="Passport">Passport</option>
                        <option value="Voter ID">Voter ID</option>
                        <option value="Driving License">Driving License</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                        Govt ID Number / Last 4 Digits
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. XXXX-XXXX-1234"
                        value={idProofNumber}
                        onChange={(e) => setIdProofNumber(e.target.value)}
                        className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Special Request (Senior Citizen / Ground Floor)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Senior citizen family member, ground floor preferred."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#80000A]"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="w-1/3 py-3 rounded-xl text-xs font-bold text-stone-600 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="w-2/3 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#E65100] via-[#FF7A00] to-[#D97706] hover:shadow-lg transition-all"
                    >
                      Confirm Reservation Pass
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: E-PASS CONFIRMATION PASS */}
              {bookingStep === 3 && confirmedBooking && (
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#E65100] uppercase tracking-wider">
                      Booking Confirmed!
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#80000A] dark:text-[#E6C887]">
                      Yatri Nivas E-Pass Generated
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                      A confirmation SMS & WhatsApp message has been sent to <strong>{confirmedBooking.phone}</strong>.
                    </p>
                  </div>

                  {/* Printable Pass Card */}
                  <div className="bg-stone-100 dark:bg-stone-900 p-6 rounded-2xl border-2 border-dashed border-[#C5A059] text-left space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-stone-300 dark:border-stone-800 pb-2">
                      <span className="text-stone-500">REF NO:</span>
                      <strong className="text-[#80000A] dark:text-[#C5A059]">{confirmedBooking.bookingRef}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-500">PILGRIM:</span>
                      <strong>{confirmedBooking.guestName}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-500">ROOM:</span>
                      <strong>{confirmedBooking.roomTitle}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-500">DATES:</span>
                      <strong>{confirmedBooking.checkInDate} to {confirmedBooking.checkOutDate}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-stone-500">GUESTS:</span>
                      <strong>{confirmedBooking.numberOfGuests} Person(s)</strong>
                    </div>

                    <div className="flex justify-between border-t border-stone-300 dark:border-stone-800 pt-2 text-sm font-bold text-[#E65100]">
                      <span>TOTAL CONTRIBUTION:</span>
                      <span>₹{confirmedBooking.totalAmount}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => alert(`Downloading official Yatri Nivas E-Pass PDF (${confirmedBooking.bookingRef})...`)}
                      className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-[#80000A] hover:bg-[#a31d1d] flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download E-Pass PDF</span>
                    </button>

                    <button
                      onClick={() => {
                        onCloseBookingModal();
                        onSelectRoomForBooking(null);
                      }}
                      className="px-6 py-3 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-800"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
