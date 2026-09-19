import React from 'react';
import { Check, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PACKAGES, VEHICLE_SIZES } from '../data/detailingData';
import { VehicleSizeId } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface PackagesGridProps {
  selectedSize: VehicleSizeId;
  onSelectSize: (size: VehicleSizeId) => void;
  onSelectPackage: (pkgId: string) => void;
}

export const PackagesGrid: React.FC<PackagesGridProps> = ({
  selectedSize,
  onSelectSize,
  onSelectPackage,
}) => {
  const currentSizeObj = VEHICLE_SIZES.find((s) => s.id === selectedSize) || VEHICLE_SIZES[0];

  return (
    <section id="packages" className="py-24 bg-[#090a0f] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight"
          >
            Simple Packages. Exceptional Results.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-zinc-300 text-sm sm:text-base leading-relaxed"
          >
            Select your vehicle size below to preview all-inclusive pricing. All detailing is performed right in your driveway with zero travel fees.
          </motion.p>

          {/* Vehicle Size Selector */}
          <div className="pt-4 flex flex-col items-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-950 border border-white/[0.1] shadow-xl max-w-full overflow-x-auto">
              {VEHICLE_SIZES.map((size) => {
                const isActive = selectedSize === size.id;
                return (
                  <button
                    key={size.id}
                    onClick={() => onSelectSize(size.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-400 text-zinc-950 font-bold shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{size.name}</span>
                    <span className={`text-xs ${isActive ? 'text-zinc-800' : 'text-zinc-500'}`}>
                      ({size.examples.split(',')[0].trim()})
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-zinc-400 mt-3">
              Selected Vehicle: <strong className="text-white">{currentSizeObj.name}</strong> ({currentSizeObj.examples})
            </p>
          </div>
        </div>

        {/* 3 Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => {
            const calculatedPrice = pkg.basePrice + currentSizeObj.priceOffset;
            const isFlagship = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 text-left ${
                  isFlagship
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,0.12)]'
                    : 'bg-zinc-950/80 border border-white/[0.08] hover:border-white/[0.2]'
                }`}
              >
                {/* Popular Badge */}
                {isFlagship && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs text-zinc-400 pb-4 border-b border-white/[0.06]">
                    <span className="flex items-center gap-1.5 font-medium text-amber-300">
                      <Clock className="w-3.5 h-3.5" />
                      Approx. {pkg.durationHours}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[11px] text-zinc-300 border border-white/[0.06]">
                      At Your Driveway
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6 space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed min-h-[38px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display with Animated Counter */}
                  <div className="mt-6 mb-8 p-5 rounded-xl bg-black/60 border border-white/[0.06]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                        <AnimatedCounter
                          value={calculatedPrice}
                          prefix="$"
                          duration={0.7}
                          triggerOnView={false}
                        />
                      </span>
                      <span className="text-xs text-zinc-400">
                        / complete detail
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>Zero travel fees anywhere in Lancaster County</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
                      What's Included:
                    </span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-8 mt-8 border-t border-white/[0.08]">
                  <button
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFlagship
                        ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                    }`}
                  >
                    <span>Customize in Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
