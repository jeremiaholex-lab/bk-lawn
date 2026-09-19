import React from 'react';
import { Phone, MessageSquare, MapPin, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] text-zinc-400 text-xs pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-left">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.12] flex items-center justify-center text-amber-400 font-display font-extrabold text-xs">
                BK
              </div>
              <span className="font-display text-sm font-bold text-white tracking-tight">
                BK Mobile Detailing
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Lancaster County's premier mobile auto spa. Founded and personally operated by <strong className="text-zinc-200 font-medium">Brady Knaple</strong>. We bring our own pure water tank and quiet generator directly to your driveway.
            </p>
            <div className="flex items-center gap-2 text-zinc-300 text-xs">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Licensed & Fully Insured Mobile Studio</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Contact Brady
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={`sms:${BUSINESS_INFO.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Text Brady Directly</span>
                </a>
              </li>
              <li className="text-zinc-400 text-xs pt-1">
                Hours: Monday – Saturday (7:30 AM – 6:30 PM)
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Areas Served
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>Landisville, PA (17538)</li>
              <li>Lititz, PA (17543)</li>
              <li>Lancaster City & Twp (17601, 17603)</li>
              <li>Manheim & East Petersburg (17545, 17520)</li>
              <li>Ephrata & Mount Joy (17522, 17552)</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Mobile Rig Equipment
            </span>
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.06] space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Power:</span>
                <span className="text-zinc-200">Whisper-quiet inverter</span>
              </div>
              <div className="flex justify-between">
                <span>Water:</span>
                <span className="text-zinc-200">100-Gal spot-free pure RO</span>
              </div>
              <div className="flex justify-between">
                <span>Sound:</span>
                <span className="text-zinc-200">Under 58 dB quiet operation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} BK Mobile Detailing. All rights reserved. Locally owned and operated in Lancaster County, PA.
          </div>
          <div className="flex items-center gap-4">
            <a href="#packages" className="hover:text-zinc-200 transition-colors">Packages & Pricing</a>
            <span>•</span>
            <a href="#configurator" className="hover:text-zinc-200 transition-colors">Price Calculator</a>
            <span>•</span>
            <a href="#territory" className="hover:text-zinc-200 transition-colors">Service Area</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
