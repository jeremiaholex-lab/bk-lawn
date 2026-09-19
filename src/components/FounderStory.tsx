import React from 'react';
import { Phone, Award, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/detailingData';
import { AnimatedCounter } from './AnimatedCounter';

export const FounderStory: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#0a0b12] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-zinc-950 shadow-2xl">
              <img
                src="/src/assets/images/ceramic_coating_1789860783859.jpg"
                alt="Paint correction and ceramic installation by Brady Knaple"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-[#0c0d14] border-t border-white/[0.08] text-left">
                <div className="flex items-center justify-between text-xs uppercase text-amber-400 font-semibold mb-1">
                  <span>Founder & Lead Specialist</span>
                  <span className="text-zinc-400">Lancaster, PA</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Brady Knaple
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed italic">
                  "No shortcuts. No rushed wash bays. When you book with BK Mobile Detailing, you get personal, dedicated care from start to finish."
                </p>
              </div>
            </div>

            {/* Statistics with Animated Number Counters */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] text-left hover:border-amber-400/30 transition-all">
                <div className="font-display text-3xl font-extrabold text-white">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">Vehicles Detailed</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] text-left hover:border-amber-400/30 transition-all">
                <div className="font-display text-3xl font-extrabold text-amber-400">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">Self-Contained Rig</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] text-left hover:border-amber-400/30 transition-all">
                <div className="font-display text-3xl font-extrabold text-emerald-400">
                  <AnimatedCounter value={220} suffix="°F" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">Sanitizing Steam</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] text-left hover:border-amber-400/30 transition-all">
                <div className="font-display text-3xl font-extrabold text-white">
                  <AnimatedCounter value={0} prefix="$" />
                </div>
                <div className="text-xs text-zinc-400 mt-1">Lancaster Travel Fee</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
              <Award className="w-3.5 h-3.5" />
              <span>MEET THE OWNER</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight leading-tight">
              An Obsession with Quality and Convenience.
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                BK Mobile Detailing was created with one simple conviction: keeping your vehicle in pristine condition shouldn't mean losing half your weekend dropping off your car at a shop or settling for scratchy drive-thru car washes.
              </p>
              <p>
                Founder <strong className="text-white font-semibold">Brady Knaple</strong> custom-built our mobile rig to solve the two biggest headaches of home detailing: hard mineral water that bakes white spots onto paint, and messy extension cords. By equipping our van with an onboard spot-free deionized water tank and whisper-quiet generator, we deliver studio-grade results right in your driveway while you spend time with family or work from home.
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Single-client focus — never rushed or double-booked',
                'Filtered pure water ensures zero mineral water spots',
                'Non-toxic interior steam sanitization for leather & vents',
                'Clear, upfront pricing with zero surprise add-ons',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Callout */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(251,191,36,0.25)]"
              >
                <Phone className="w-4 h-4" />
                <span>Call or Text Brady ({BUSINESS_INFO.phoneFormatted})</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
