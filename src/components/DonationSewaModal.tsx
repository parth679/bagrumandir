import React, { useState } from 'react';
import { TEMPLE_INFO } from '../data/templeData';
import { X, HeartHandshake, CheckCircle2, Download, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface DonationSewaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationSewaModal: React.FC<DonationSewaModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [sewaType, setSewaType] = useState<string>('mahaprasad');
  const [amount, setAmount] = useState<number>(1100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [panNumber, setPanNumber] = useState<string>('');
  const [submittedReceipt, setSubmittedReceipt] = useState<any | null>(null);

  if (!isOpen) return null;

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handleSubmitSewa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !phone) {
      alert('Please fill in your name and phone number for the official Sewa Receipt.');
      return;
    }

    const receipt = {
      receiptNo: `SEWA-${Math.floor(100000 + Math.random() * 900000)}`,
      donorName,
      phone,
      panNumber: panNumber || 'N/A',
      sewaTypeLabel: sewaType === 'mahaprasad' 
        ? 'Annadan & Mahaprasad Sewa' 
        : sewaType === 'gauseva' 
        ? 'Sacred Gauseva (Cow Care)' 
        : sewaType === 'flower' 
        ? 'Daily Flower Shringar Sewa' 
        : 'Yatri Nivas Pilgrim Facility Maintenance',
      amount: finalAmount,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    setSubmittedReceipt(receipt);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-xl w-full bg-[#FAF8F5] dark:bg-[#12141D] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl text-[#1B1C15] dark:text-[#FDFCF0] my-8">
        
        {/* Header */}
        <div className="bg-[#006D77] p-6 text-white flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-[#FF9933] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Divine Offering & Sewa Desk</span>
            </div>
            <h3 className="font-heading text-xl font-bold mt-1">
              Temple & Yatri Nivas Sewa
            </h3>
            <p className="text-xs text-stone-200 mt-0.5">
              Support daily Mahaprasad, Gauseva, and Pilgrim Facilities. All donations are tax-deductible.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              setSubmittedReceipt(null);
            }}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!submittedReceipt ? (
            <form onSubmit={handleSubmitSewa} className="space-y-5">
              
              {/* Sewa Category Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-2">
                  Select Sewa Category
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'mahaprasad', label: '🍱 Annadan Mahaprasad' },
                    { id: 'gauseva', label: '🐄 Sacred Gauseva' },
                    { id: 'flower', label: '🌸 Daily Shringar Flowers' },
                    { id: 'maintenance', label: '🏢 Yatri Nivas Maintenance' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSewaType(cat.id)}
                      className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                        sewaType === cat.id
                          ? 'bg-[#006D77] text-white border-[#006D77] shadow-md'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Presets */}
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-2">
                  Contribution Amount (₹)
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[501, 1100, 2100, 5100, 11000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                        amount === preset && !customAmount
                          ? 'bg-[#FF9933] text-white border-[#FF9933]'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      ₹{preset}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Or enter custom amount in ₹"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#006D77]"
                />
              </div>

              {/* Donor Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Devotee Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sureshbhai Mehta"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#006D77]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98250 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#006D77]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                      PAN Card (Optional for 80G Tax Exemption)
                    </label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#006D77]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#006D77] hover:bg-[#005a63] shadow-md transition-all"
              >
                Proceed & Generate Sewa Receipt
              </button>
            </form>
          ) : (
            /* Sewa Receipt Generated */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#E65100] uppercase tracking-wider">
                  Dhanyavad • Thank You
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#80000A] dark:text-[#E6C887]">
                  Official Sewa Receipt
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                  May Bhagwan Swaminarayan bestow health, happiness, and peace upon your family.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="bg-stone-100 dark:bg-stone-900 p-6 rounded-2xl border-2 border-dashed border-[#C5A059] text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-stone-300 dark:border-stone-800 pb-2">
                  <span className="text-stone-500">RECEIPT NO:</span>
                  <strong className="text-[#80000A] dark:text-[#C5A059]">{submittedReceipt.receiptNo}</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-stone-500">DONOR:</span>
                  <strong>{submittedReceipt.donorName}</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-stone-500">SEWA CATEGORY:</span>
                  <strong>{submittedReceipt.sewaTypeLabel}</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-stone-500">DATE:</span>
                  <strong>{submittedReceipt.date}</strong>
                </div>

                <div className="flex justify-between border-t border-stone-300 dark:border-stone-800 pt-2 text-sm font-bold text-[#E65100]">
                  <span>AMOUNT OFFERED:</span>
                  <span>₹{submittedReceipt.amount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => alert(`Downloading official 80G Sewa Tax Receipt (${submittedReceipt.receiptNo})...`)}
                  className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-[#80000A] hover:bg-[#a31d1d] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 80G Receipt</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    setSubmittedReceipt(null);
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 bg-stone-200 dark:bg-stone-800"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
