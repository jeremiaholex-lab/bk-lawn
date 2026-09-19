import React, { useState } from 'react';
import { Phone, ArrowUpRight, Shield, Droplets, Zap, Sparkles, Star, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/detailingData';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onBrowsePackages: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowsePackages, onOpenBooking }) => {
  const [finishMode, setFinishMode] = useState<'mirror' | 'raw'>('mirror');

  return (
    <section className="relative bg-[#090a0f] pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-white/[0.08] overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-200 font-medium">Serving Landisville, Lititz & all Lancaster County</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span className="font-semibold text-white">4.9/5 Rating</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-300">100+ Happy Local Drivers</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clear, Persuasive Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.12]">
                Showroom shine, <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                  delivered to your driveway.
                </span>
              </h1>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Founded and personally operated by Lancaster specialist <strong className="text-white font-semibold">Brady Knaple</strong>, BK Mobile Detailing brings an exceptional car care experience straight to your home or office. With our own onboard spot-free water tank and quiet generator, we detail your car right where it sits—with zero inconvenience to you.
              </p>
            </div>

            {/* 4 Clean Value Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Spot-Free Water</span>
                </div>
                <div className="text-sm font-bold text-white mt-1.5">0-PPM Filtered</div>
                <div className="text-xs text-zinc-400 mt-0.5">Leaves zero mineral stains</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Onboard Power</span>
                </div>
                <div className="text-sm font-bold text-white mt-1.5">100% Self-Contained</div>
                <div className="text-xs text-zinc-400 mt-0.5">No home outlet cords</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Steam Clean</span>
                </div>
                <div className="text-sm font-bold text-white mt-1.5">220°F Sanitization</div>
                <div className="text-xs text-zinc-400 mt-0.5">Deep clean for vents & seats</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Protection</span>
                </div>
                <div className="text-sm font-bold text-white mt-1.5">Ceramic Shield</div>
                <div className="text-xs text-zinc-400 mt-0.5">Durable candy gloss</div>
              </div>
            </motion.div>

            {/* Clear Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] cursor-pointer"
              >
                <span>Book Driveway Appointment</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call or Text Brady ({BUSINESS_INFO.phoneFormatted})</span>
              </motion.a>
            </motion.div>

            {/* Reassuring Guarantee Notice */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Free travel anywhere in Lancaster County</strong> • Pay upon inspection with zero upfront deposit
              </span>
            </div>

          </motion.div>

          {/* Right Column: Visual Before/After Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-950 shadow-2xl group">
              
              {/* Image Frame with interactive finish toggle */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/luxury_car_garage_minimal_1789860992310.jpg"
                  alt="BK Mobile Detailing flagship vehicle service"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    finishMode === 'raw' ? 'contrast-75 brightness-75 blur-[0.6px]' : 'contrast-105 brightness-100'
                  }`}
                />

                {/* Interactive Finish Toggle Button */}
                <div className="absolute top-4 right-4 flex p-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/[0.15] text-xs shadow-lg">
                  <button
                    onClick={() => setFinishMode('mirror')}
                    className={`px-3 py-1.5 rounded-lg transition-all text-xs font-semibold cursor-pointer ${
                      finishMode === 'mirror'
                        ? 'bg-amber-400 text-zinc-950 shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Ceramic Finish
                  </button>
                  <button
                    onClick={() => setFinishMode('raw')}
                    className={`px-3 py-1.5 rounded-lg transition-all text-xs font-semibold cursor-pointer ${
                      finishMode === 'raw'
                        ? 'bg-zinc-800 text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Before Detail
                  </button>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold text-white">
                      {finishMode === 'mirror' ? 'BK Ceramic Coating & Paint Polish' : 'Standard Swirl Marks & Road Dirt'}
                    </span>
                  </div>
                  <span className="text-xs text-amber-300 font-medium">
                    {finishMode === 'mirror' ? '100% Mirror Gloss' : 'Needs Reset'}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 bg-[#0c0d14]/95 border-t border-white/[0.08] space-y-2 text-left">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">
                    The Modern Mobile Standard
                  </span>
                  <span className="text-zinc-400">
                    Zero Customer Utilities Needed
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  Hospital-Clean Detailing at Your Front Door
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We bring our own water tank, low-noise power generator, and precision polishing tools. You carry on with your day while your vehicle is fully rejuvenated.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Dynamic Animated Number Counters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] text-left hover:border-amber-400/30 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              <AnimatedCounter value={500} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1.5">
              Vehicles Detailed
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              In Lancaster, Lititz & Landisville
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] text-left hover:border-amber-400/30 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
              <AnimatedCounter value={0} suffix=" PPM" />
            </div>
            <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1.5">
              Pure Filtered Water
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Guaranteed zero limestone spots
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] text-left hover:border-amber-400/30 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
              <AnimatedCounter value={100} suffix="%" />
            </div>
            <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1.5">
              Self-Contained Rig
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Zero water or power needed from you
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] text-left hover:border-amber-400/30 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-1">
              <AnimatedCounter value={4.9} decimals={1} />
              <span className="text-amber-400 text-2xl">★</span>
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1.5">
              Customer Satisfaction
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Over 100+ five-star verified reviews
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
