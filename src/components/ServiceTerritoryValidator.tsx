import React, { useState } from 'react';
import { MapPin, Search, Check, Shield, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LANCASTER_ZIP_CODES, BUSINESS_INFO } from '../data/detailingData';

export const ServiceTerritoryValidator: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [validationResult, setValidationResult] = useState<{
    status: 'idle' | 'covered' | 'custom' | 'invalid';
    town?: string;
    zip?: string;
  }>({ status: 'idle' });

  const handleValidateZip = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanZip = zipInput.trim();

    if (!cleanZip || cleanZip.length !== 5 || !/^\d+$/.test(cleanZip)) {
      setValidationResult({ status: 'invalid', zip: cleanZip });
      return;
    }

    if (LANCASTER_ZIP_CODES[cleanZip]) {
      setValidationResult({
        status: 'covered',
        town: LANCASTER_ZIP_CODES[cleanZip],
        zip: cleanZip,
      });
    } else if (cleanZip.startsWith('175') || cleanZip.startsWith('176') || cleanZip.startsWith('170') || cleanZip.startsWith('177') || cleanZip.startsWith('195') || cleanZip.startsWith('196')) {
      setValidationResult({
        status: 'custom',
        town: 'Lancaster / Central PA Region',
        zip: cleanZip,
      });
    } else {
      setValidationResult({
        status: 'custom',
        town: 'Extended Area',
        zip: cleanZip,
      });
    }
  };

  const setAndCheck = (zip: string) => {
    setZipInput(zip);
    if (LANCASTER_ZIP_CODES[zip]) {
      setValidationResult({
        status: 'covered',
        town: LANCASTER_ZIP_CODES[zip],
        zip: zip,
      });
    }
  };

  return (
    <section id="territory" className="py-24 bg-[#090a0f] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Geographic Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
              <Navigation className="w-3.5 h-3.5" />
              <span>SERVICE AREA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              We Come to You Across Lancaster County
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Based centrally between Landisville and Lititz, BK Mobile Detailing travels daily to homes and workplaces throughout Lancaster County and surrounding boroughs.
            </p>

            {/* Quick Hub Badges */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                Frequent Service Locations:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Landisville', zip: '17538' },
                  { name: 'Lititz', zip: '17543' },
                  { name: 'Lancaster City', zip: '17603' },
                  { name: 'Manheim Twp', zip: '17601' },
                  { name: 'East Petersburg', zip: '17520' },
                  { name: 'Mount Joy', zip: '17552' },
                  { name: 'Ephrata', zip: '17522' },
                ].map((hub) => (
                  <button
                    key={hub.zip}
                    onClick={() => setAndCheck(hub.zip)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/[0.08] hover:border-amber-400/50 text-zinc-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{hub.name}</span>
                    <span className="text-xs text-amber-400 font-semibold">({hub.zip})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Zero Travel Fee Callout */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] flex items-center gap-3 text-xs text-zinc-300">
              <Shield className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Zero Travel Fees</strong> anywhere in Lancaster County. We arrive with our own pure water tank and quiet generator ready to work.
              </span>
            </div>
          </motion.div>

          {/* Right Column: ZIP Verifier Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/[0.08] shadow-2xl space-y-6 text-left relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Coverage Checker</span>
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready to Schedule
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Check Your ZIP Code
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Enter your 5-digit Lancaster County ZIP code to verify prompt service.
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleValidateZip} className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="Enter 5-digit ZIP (e.g. 17538)"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#06070a] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Verify</span>
                </button>
              </form>

              {/* Status Display with AnimatePresence */}
              <AnimatePresence mode="wait">
                {validationResult.status === 'covered' && (
                  <motion.div
                    key="covered"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                      <Check className="w-4 h-4" />
                      <span>Great news! You are in our primary service area.</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                      We service driveways in <strong>{validationResult.town}</strong> ({validationResult.zip}) with <strong>$0 travel fee</strong>. We bring our own water and quiet power.
                    </p>
                  </motion.div>
                )}

                {validationResult.status === 'custom' && (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                      <span>Extended Service Route</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                      ZIP {validationResult.zip} ({validationResult.town}) is accessible on our schedule. Please call or text Brady directly at <strong>{BUSINESS_INFO.phoneFormatted}</strong> to check upcoming route dates.
                    </p>
                  </motion.div>
                )}

                {validationResult.status === 'invalid' && (
                  <motion.div
                    key="invalid"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-300"
                  >
                    Please enter a valid 5-digit US ZIP code.
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
