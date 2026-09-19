import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Car, Phone, User, Check, MessageSquare, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS, BUSINESS_INFO } from '../data/detailingData';
import { VehicleSizeId } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface BookingFormProps {
  selectedSize: VehicleSizeId;
  selectedPackageId: string;
  selectedAddOns: string[];
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedSize,
  selectedPackageId,
  selectedAddOns,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [carMakeModel, setCarMakeModel] = useState('');
  const [serviceTier, setServiceTier] = useState(selectedPackageId);
  const [vehicleSize, setVehicleSize] = useState<VehicleSizeId>(selectedSize);
  const [locationAndDate, setLocationAndDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('morning');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  useEffect(() => {
    setServiceTier(selectedPackageId);
  }, [selectedPackageId]);

  useEffect(() => {
    setVehicleSize(selectedSize);
  }, [selectedSize]);

  const currentPkg = PACKAGES.find((p) => p.id === serviceTier) || PACKAGES[0];
  const currentSizeObj = VEHICLE_SIZES.find((s) => s.id === vehicleSize) || VEHICLE_SIZES[0];

  const estimatedPrice = currentPkg.basePrice + currentSizeObj.priceOffset + selectedAddOns.reduce((acc, id) => {
    const a = ADD_ONS.find((item) => item.id === id);
    return acc + (a ? a.price : 0);
  }, 0);

  const addOnSummary = selectedAddOns
    .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const smsBody = encodeURIComponent(
    `Hello Brady! I'd like to book an appointment with BK Mobile Detailing.\n\n` +
    `Name: ${fullName || '[Name]'}\n` +
    `Phone: ${phone || '[Phone]'}\n` +
    `Vehicle: ${carMakeModel || '[Make/Model]'}\n` +
    `Size: ${currentSizeObj.name}\n` +
    `Package: ${currentPkg.name}\n` +
    (selectedAddOns.length > 0 ? `Add-Ons: ${addOnSummary}\n` : '') +
    `Location / Target Date: ${locationAndDate || '[Address & Date]'}\n` +
    `Time Window: ${timeWindow === 'morning' ? 'Morning (8am - 12pm)' : 'Afternoon (12pm - 4pm)'}\n` +
    `Estimated Price: $${estimatedPrice}\n` +
    (notes ? `Notes: ${notes}\n` : '') +
    `\nPlease confirm appointment availability!`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Please enter your name and phone number so Brady can get in touch.');
      return;
    }
    setErrorMsg('');

    setSubmittedData({
      fullName,
      phone,
      carMakeModel,
      package: currentPkg.name,
      size: currentSizeObj.name,
      estimatedPrice,
      addOns: addOnSummary || 'None',
      locationAndDate,
      timeWindow: timeWindow === 'morning' ? 'Morning (8:00 AM – 12:00 PM)' : 'Afternoon (12:00 PM – 4:00 PM)',
      notes,
    });
    setIsSubmitted(true);
  };

  return (
    <section id="book" className="py-24 bg-[#090a0f] border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK AN APPOINTMENT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Schedule Your Driveway Detail
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            No deposit required. Brady reviews every request personally and will call or text within minutes to confirm your scheduled time slot.
          </p>
        </div>

        {/* Confirmation State */}
        {isSubmitted && submittedData ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-amber-400/60 shadow-2xl space-y-6 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-emerald-400">
                  Request Received
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Thank You, {submittedData.fullName}!
                </h3>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              Brady Knaple has received your booking request. We will reach out to <strong className="text-white">{submittedData.phone}</strong> shortly to finalize your date and arrival window.
            </p>

            <div className="p-5 rounded-xl bg-[#06070a] border border-white/[0.08] space-y-2.5 text-xs text-zinc-300">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Vehicle:</span>
                <span className="font-medium text-white">{submittedData.carMakeModel || 'Specified on call'} ({submittedData.size})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Selected Package:</span>
                <span className="font-semibold text-amber-400">{submittedData.package}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Add-Ons:</span>
                <span className="font-medium text-white">{submittedData.addOns}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Location & Window:</span>
                <span className="font-medium text-white">{submittedData.locationAndDate || 'Flexible'} • {submittedData.timeWindow}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/[0.08]">
                <span className="text-zinc-200 font-semibold">Total (Pay After Inspection):</span>
                <span className="font-display text-2xl font-extrabold text-amber-400">${submittedData.estimatedPrice}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`sms:${BUSINESS_INFO.phone}?body=${smsBody}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Text Brady Directly for Fastest Response</span>
              </a>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-xs font-medium rounded-xl border border-white/[0.1] transition-all cursor-pointer"
              >
                Edit Information
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-white/[0.08] shadow-2xl space-y-8 text-left"
          >
            {errorMsg && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Contact Info */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                Step 1: Your Contact Information
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Phone Number (for Arrival Updates) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (717) 555-0192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Vehicle & Package */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                Step 2: Vehicle & Service Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Vehicle Category
                  </label>
                  <select
                    value={vehicleSize}
                    onChange={(e) => setVehicleSize(e.target.value as VehicleSizeId)}
                    className="w-full px-3 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-xs font-medium text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    {VEHICLE_SIZES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.examples.split(',')[0].trim()})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Vehicle Year, Make & Model
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="e.g. 2023 Tesla Model Y, Honda Accord, or Ford F-150"
                      value={carMakeModel}
                      onChange={(e) => setCarMakeModel(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Detailing Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PACKAGES.map((pkg) => {
                    const price = pkg.basePrice + currentSizeObj.priceOffset;
                    const isSelected = serviceTier === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setServiceTier(pkg.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-amber-400 bg-amber-400/10 text-white'
                            : 'border-white/[0.08] bg-[#06070a] text-zinc-400 hover:border-white/[0.15]'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-white block">{pkg.name}</span>
                          <span className="text-xs text-zinc-400">~{pkg.durationHours}</span>
                        </div>
                        <span className="font-display text-sm font-extrabold text-amber-400">${price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Location & Timing */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                Step 3: Driveway Location & Preferred Date
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Driveway Address or Lancaster Town
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="e.g. 142 Main St, Landisville or Lititz"
                      value={locationAndDate}
                      onChange={(e) => setLocationAndDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTimeWindow('morning')}
                      className={`py-3 px-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        timeWindow === 'morning'
                          ? 'border-amber-400 bg-amber-400/10 text-white font-bold'
                          : 'border-white/[0.08] bg-[#06070a] text-zinc-400'
                      }`}
                    >
                      Morning (8am – 12pm)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeWindow('afternoon')}
                      className={`py-3 px-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        timeWindow === 'afternoon'
                          ? 'border-amber-400 bg-amber-400/10 text-white font-bold'
                          : 'border-white/[0.08] bg-[#06070a] text-zinc-400'
                      }`}
                    >
                      Afternoon (12pm – 4pm)
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Special Notes or Focus Areas (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dog hair in rear cargo area, spilled drink on passenger seat, or preferred weekday..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Total & Submit Button */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block">
                  Estimated Total
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-extrabold text-amber-400">
                    <AnimatedCounter
                      value={estimatedPrice}
                      prefix="$"
                      duration={0.5}
                      triggerOnView={false}
                    />
                  </span>
                  <span className="text-xs text-zinc-400">
                    • Free Lancaster Travel & Zero Deposit
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
