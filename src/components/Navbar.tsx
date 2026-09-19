import React, { useState } from 'react';
import { Phone, ArrowUpRight, Menu, X, Calendar, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090a0f]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      {/* Sleek Top Status Bar */}
      <div className="bg-[#050608]/95 border-b border-white/[0.04] py-1.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Status Message */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[11px] sm:text-xs text-zinc-300 font-medium truncate">
              <span className="text-white font-semibold">Lancaster County Mobile Detailing:</span>{' '}
              <span className="text-zinc-400 hidden sm:inline">100% self-contained rig with pure spot-free water & power</span>
              <span className="text-zinc-400 sm:hidden">Pure water & power onboard</span>
            </p>
          </div>

          {/* Quick Contact Link */}
          <div className="shrink-0 flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="hidden md:inline text-zinc-400">Landisville & Lititz, PA</span>
            <span className="hidden md:inline text-zinc-700">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 hidden xs:inline" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo - Compact & Polished */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 border border-white/[0.15] flex items-center justify-center text-white font-display font-extrabold text-xs sm:text-sm tracking-wider group-hover:border-amber-400/60 group-hover:text-amber-400 transition-all shadow-sm">
              BK
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
                  BK Mobile Detailing
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 whitespace-nowrap">
                  Lancaster
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-zinc-400 leading-none">
                Driveway Auto Detailing
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Clean, Uncluttered & Proportional */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <a
              href="#packages"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              Packages
            </a>
            <a
              href="#configurator"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 hover:text-amber-200 hover:bg-amber-400/10 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Price Calculator</span>
            </a>
            <a
              href="#technology"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              How It Works
            </a>
            <a
              href="#territory"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              Service Area
            </a>
            <a
              href="#founder"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              About Brady
            </a>
            <a
              href="#faqs"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              Reviews & FAQ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone link: visible on xl desktop */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            {/* Quick SMS button for mobile/tablet */}
            <a
              href={`sms:${BUSINESS_INFO.phone}?body=Hi Brady, I'd like to ask about mobile detailing in Lancaster.`}
              className="hidden sm:inline-flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              title="Text Brady"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Text Brady</span>
            </a>

            {/* Primary Appointment Button */}
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.25)] hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-950" />
              <span className="hidden xs:inline">Book Appointment</span>
              <span className="xs:hidden">Book</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform hidden sm:inline" />
            </button>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/[0.2] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b12] border-b border-white/[0.1] px-5 py-5 space-y-4 max-h-[85vh] overflow-y-auto">
          
          <nav className="flex flex-col space-y-1">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl flex items-center justify-between"
            >
              <span>Packages & Transparent Pricing</span>
              <span className="text-xs text-zinc-500">From $129</span>
            </a>
            
            <a
              href="#configurator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-semibold text-amber-300 hover:bg-amber-400/10 rounded-xl flex items-center justify-between border border-amber-400/20 bg-amber-400/5"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Interactive Price Calculator</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </a>

            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl"
            >
              How Our Self-Contained Rig Works
            </a>

            <a
              href="#territory"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl flex items-center justify-between"
            >
              <span>Lancaster Service Area & ZIP Checker</span>
              <span className="text-xs text-emerald-400 font-medium">Free Travel</span>
            </a>

            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl"
            >
              About Brady Knaple (Owner/Detailer)
            </a>

            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.05] rounded-xl"
            >
              Customer Reviews & FAQ
            </a>
          </nav>

          {/* Quick Direct Actions Inside Drawer */}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-2.5 px-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-white/[0.06] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Brady</span>
              </a>

              <a
                href={`sms:${BUSINESS_INFO.phone}?body=Hi Brady, I would like to book a mobile detail in Lancaster County.`}
                className="py-2.5 px-3 rounded-xl border border-white/[0.1] bg-white/[0.03] text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-white/[0.06] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Text Brady</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Driveway Appointment</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
