import React from 'react';
import { Zap, Droplets, Sparkles, Shield, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export const WhyBKGrid: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-[#0a0b12] border-b border-white/[0.08] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BK PROMISE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              Fully Self-Contained. <br className="hidden sm:inline" />
              We Bring Everything.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-300 text-sm sm:text-base font-normal max-w-md leading-relaxed"
          >
            No garden hoses. No extension cords through your front door. Our custom mobile detailing rig brings its own pure water and quiet power to detail your car right where it sits.
          </motion.p>
        </div>

        {/* Modern 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Spot-Free Pure Water System (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/40 transition-all text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Onboard Water Filtration
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                  <Droplets className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                100-Gallon Spot-Free Pure Water
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Lancaster County tap and well water is naturally high in limestone and minerals. When dried in the sun, standard water bakes white rings directly into your clear coat. Brady carries an onboard pure deionized water supply with <strong>zero minerals</strong>, guaranteeing a streak-free, crystal-clear finish every single wash.
              </p>

              {/* Animated Water Comparison Visual */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] space-y-3 text-xs">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-zinc-400">Typical Lancaster Tap Water (Causes mineral spots)</span>
                    <span className="text-rose-400 font-semibold flex items-center gap-1">
                      <AnimatedCounter value={320} suffix=" PPM Hardness" />
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-rose-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                      BK Onboard Deionized Tank (100% Pure Rinse)
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <AnimatedCounter value={0} suffix=" PPM" /> • Zero Spots
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '3%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                Onboard Capacity: <strong className="text-white"><AnimatedCounter value={100} suffix=" Gallons" /></strong>
              </span>
              <span className="text-amber-300 font-semibold">100% Spot-Free Guarantee</span>
            </div>
          </motion.div>

          {/* Card 2: Quiet Onboard Power (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/40 transition-all text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Quiet Inverter Power
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Zero Power Drawn From Your Home
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                You never have to worry about blown circuit breakers or extension cords running across your lawn. Our van operates on an ultra-quiet enclosed generator that powers commercial extractors, polishers, and hot water equipment smoothly.
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Electricity Needed From You:</span>
                  <span className="text-emerald-400 font-bold text-sm">
                    <AnimatedCounter value={0} suffix="%" /> (None)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Sound Level:</span>
                  <span className="text-zinc-200 font-semibold">
                    Whisper quiet (<AnimatedCounter value={58} suffix=" dB" />)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Equipment Type:</span>
                  <span className="text-amber-300 font-semibold">Commercial Pure Sine Inverter</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-zinc-400">
              <span>Safe for quiet residential neighborhoods & corporate lots</span>
            </div>
          </motion.div>

          {/* Card 3: 220°F Dry Steam Sanitization (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-7 sm:p-8 text-left group hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Deep Interior Sanitization
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                220°F Chemical-Free Steam Clean
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                We lift stubborn grime, sanitize air conditioning vents, remove sticky cup holder spills, and refresh leather upholstery using commercial pressurized steam. Kills 99.9% of bacteria and leaves your interior clean and fresh with zero sticky chemical residue.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                  <div className="text-amber-400 font-bold text-lg">
                    <AnimatedCounter value={220} suffix="°F" />
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Penetrating dry steam</div>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                  <div className="text-emerald-400 font-bold text-lg">Zero Odors</div>
                  <div className="text-xs text-zinc-400 mt-0.5">No artificial chemical masks</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Precision Paint Correction & Protection (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] p-7 sm:p-8 text-left group hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Exterior Paint Care
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Swirl Removal & Ceramic Shield
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Automated tunnel washes use abrasive spinning brushes that leave fine spiderweb scratches all over your car. Brady uses multi-bucket grit-guarded hand washing, gentle clay decontamination, machine polishing, and hydrophobic ceramic coatings to preserve your vehicle's value.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                  <div className="text-amber-400 font-bold text-lg">Hand Washed</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Scratch-free plush microfiber</div>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                  <div className="text-emerald-400 font-bold text-lg">High Gloss</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Deep hydrophobic shine</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
