import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/detailingData';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#0a0b12] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>REPUTATION & REVIEWS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              What Lancaster Neighbors Say
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Read real driver feedback from Landisville, Lititz, Manheim Township, and East Petersburg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-2xl bg-zinc-950 border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between text-left shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-400">{t.date}</span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-amber-400 font-medium">{t.location}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{t.vehicle}</p>
                  </div>
                  <span className="text-xs font-medium text-zinc-300 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.08]">
                    {t.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base">
              Answers about water, electricity, weather reschedules, and what to expect on detailing day.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-zinc-950 border border-white/[0.08] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
