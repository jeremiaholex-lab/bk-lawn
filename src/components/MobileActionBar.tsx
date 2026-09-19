import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#090a0f]/92 backdrop-blur-2xl border-t border-white/[0.1] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Direct Call */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-zinc-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-semibold">Call Brady</span>
        </a>

        {/* Direct Text */}
        <a
          href={`sms:${BUSINESS_INFO.phone}?body=Hi Brady, I would like to book a mobile detail in Lancaster County.`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-zinc-200 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-semibold">Text Brady</span>
        </a>

        {/* Booking */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 text-zinc-950 shadow-[0_0_15px_rgba(251,191,36,0.3)] active:scale-95 transition-transform font-bold cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-zinc-950 mb-0.5" />
          <span className="text-[11px] font-bold">Book</span>
        </button>

      </div>
    </div>
  );
};
