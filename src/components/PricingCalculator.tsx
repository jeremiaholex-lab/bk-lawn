import React from 'react';
import { Calculator, Check, Clock, Sparkles, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { VEHICLE_SIZES, PACKAGES, ADD_ONS, BUSINESS_INFO } from '../data/detailingData';
import { VehicleSizeId } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface PricingCalculatorProps {
  selectedSize: VehicleSizeId;
  onSelectSize: (size: VehicleSizeId) => void;
  selectedPackageId: string;
  onSelectPackage: (pkgId: string) => void;
  selectedAddOns: string[];
  onToggleAddOn: (addOnId: string) => void;
  onProceedToBooking: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  selectedSize,
  onSelectSize,
  selectedPackageId,
  onSelectPackage,
  selectedAddOns,
  onToggleAddOn,
  onProceedToBooking,
}) => {
  const currentSizeObj = VEHICLE_SIZES.find((s) => s.id === selectedSize) || VEHICLE_SIZES[0];
  const currentPkgObj = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];

  const basePackagePrice = currentPkgObj.basePrice + currentSizeObj.priceOffset;
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const addOn = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (addOn ? addOn.price : 0);
  }, 0);

  const grandTotal = basePackagePrice + addOnsTotal;

  const selectedAddOnNames = selectedAddOns
    .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const quoteSmsBody = encodeURIComponent(
    `Hi Brady! I configured a mobile detail for my driveway:\n` +
    `Vehicle: ${currentSizeObj.name} (${currentSizeObj.examples})\n` +
    `Package: ${currentPkgObj.name} ($${basePackagePrice})\n` +
    (selectedAddOns.length > 0 ? `Enhancements: ${selectedAddOnNames} ($${addOnsTotal})\n` : '') +
    `Total: $${grandTotal}\nWhen are you available to detail in Lancaster County?`
  );

  return (
    <section id="configurator" className="py-24 bg-[#0a0b12] border-b border-white/[0.08] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT PRICE ESTIMATOR</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Customize Your Detail & Calculate Price
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Select your vehicle type, choose a core package, and add any specific treatments. Your total price updates instantly with zero hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Vehicle Size */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/[0.08] space-y-4 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                    Step 1: Select Vehicle Size
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Pricing adjusts slightly based on vehicle surface area and cleaning time.
                  </p>
                </div>
                <span className="text-xs text-zinc-300 hidden sm:inline">
                  Selected: <strong className="text-white">{currentSizeObj.name}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VEHICLE_SIZES.map((size) => {
                  const isSelected = selectedSize === size.id;
                  return (
                    <motion.button
                      key={size.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectSize(size.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400/10 text-white shadow-[0_0_20px_rgba(251,191,36,0.15)]'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.2] hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">
                          {size.name}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                      </div>
                      <span className="text-xs text-zinc-400 block line-clamp-1 mt-1">
                        {size.categoryLabel}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 2: Primary Detail Package */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/[0.08] space-y-4 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                    Step 2: Choose Your Package
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    From quick resets to full paint-corrected restoration.
                  </p>
                </div>
                <span className="text-xs text-zinc-300 hidden sm:inline">
                  Selected: <strong className="text-white">{currentPkgObj.name}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  const price = pkg.basePrice + currentSizeObj.priceOffset;
                  return (
                    <motion.button
                      key={pkg.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectPackage(pkg.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400/10 text-white shadow-[0_0_20px_rgba(251,191,36,0.15)]'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.2] hover:text-zinc-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-white">
                            {pkg.name}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                        </div>
                        <div className="font-display text-2xl font-extrabold text-white mt-2">
                          <AnimatedCounter
                            value={price}
                            prefix="$"
                            duration={0.5}
                            triggerOnView={false}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400 block mt-2">
                        Takes ~{pkg.durationHours}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 3: Targeted Enhancements (Add-ons) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/[0.08] space-y-4 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                    Step 3: Optional Add-Ons & Upgrades
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Click any item to add or remove it from your appointment.
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {selectedAddOns.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADD_ONS.map((addOn) => {
                  const isChecked = selectedAddOns.includes(addOn.id);
                  return (
                    <motion.div
                      key={addOn.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => onToggleAddOn(addOn.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'border-amber-400/80 bg-amber-400/5 text-white'
                          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs shrink-0 transition-colors ${
                        isChecked ? 'bg-amber-400 text-zinc-950 font-bold' : 'border border-zinc-700 bg-zinc-900'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${isChecked ? 'text-white' : 'text-zinc-300'}`}>
                            {addOn.name}
                          </span>
                          <span className="text-xs font-bold text-amber-400">
                            +${addOn.price}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-snug">
                          {addOn.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean Estimate Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-amber-400/40 shadow-2xl space-y-6 text-left"
            >
              
              <div className="border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Your Live Estimate</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  Driveway Appointment Summary
                </h3>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Vehicle Type:</span>
                  <span className="font-semibold text-white">{currentSizeObj.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Core Package:</span>
                  <span className="font-semibold text-white">
                    {currentPkgObj.name} (<AnimatedCounter value={basePackagePrice} prefix="$" duration={0.4} triggerOnView={false} />)
                  </span>
                </div>

                {selectedAddOns.length > 0 && (
                  <div className="pt-2 border-t border-white/[0.06] space-y-1.5 text-xs">
                    <span className="text-zinc-400 font-medium block">
                      Added Services ({selectedAddOns.length}):
                    </span>
                    {selectedAddOns.map((id) => {
                      const a = ADD_ONS.find((item) => item.id === id);
                      if (!a) return null;
                      return (
                        <div key={id} className="flex justify-between text-zinc-400 pl-2">
                          <span className="truncate">{a.name}</span>
                          <span className="text-zinc-200">+${a.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex justify-between pt-2 border-t border-white/[0.06]">
                  <span className="text-zinc-400">Lancaster Travel:</span>
                  <span className="text-emerald-400 font-semibold">$0.00 (Free)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Pure Water & Onboard Power:</span>
                  <span className="text-emerald-400 font-semibold">$0.00 (We Bring Both)</span>
                </div>
              </div>

              {/* Total Display with Animated Counter */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    Total Estimate:
                  </span>
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-amber-400">
                    <AnimatedCounter
                      value={grandTotal}
                      prefix="$"
                      duration={0.6}
                      triggerOnView={false}
                    />
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Estimated duration: ~{currentPkgObj.durationHours}
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onProceedToBooking}
                  className="w-full py-4 px-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Configuration</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`sms:${BUSINESS_INFO.phone}?body=${quoteSmsBody}`}
                  className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.1] text-zinc-200 hover:text-white hover:bg-white/[0.1] font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Text Estimate to Brady</span>
                </motion.a>
              </div>

              <div className="text-center pt-1">
                <span className="text-xs text-zinc-400">
                  Pay upon inspection • No upfront deposit needed
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
