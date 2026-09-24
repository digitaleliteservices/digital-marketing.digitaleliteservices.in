import React from 'react';
import { Search, Filter, Sparkles, PhoneCall, TrendingUp } from 'lucide-react';

export const CustomerJourneySection = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'High-Intent Traffic',
      description: 'Bring the right people to your website.',
      icon: Search,
    },
    {
      step: 'Step 02',
      title: 'Conversion Funnel',
      description: 'Guide, nurture and remove friction.',
      icon: Filter,
    },
    {
      step: 'Step 03',
      title: 'Engaging Value',
      description: 'Build trust with valuable content and offers.',
      icon: Sparkles,
    },
    {
      step: 'Step 04',
      title: 'Qualified Inquiry',
      description: 'Turn interest into real opportunities.',
      icon: PhoneCall,
    },
  ];

  return (
    <section id="customer-journey" className="py-16 sm:py-20 lg:py-24 bg-[#F8FBFE] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
              THE CUSTOMER JOURNEY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] uppercase tracking-tight">
            FROM VISIBILITY TO CONVERSION
          </h2>
        </div>

        {/* 4 Connected Step Cards + 1 Gold Outcome Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 lg:gap-3 items-stretch relative">
          
          {/* Step 1 (Col 2.5 on lg) */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border border-[#DCE8F6] p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#D97706] mb-3 shrink-0">
                <Search className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-[#0057B7] block mb-0.5">
                Step 01
              </span>
              <h3 className="text-sm font-bold text-[#071D38] mb-1 leading-snug">
                High-Intent Traffic
              </h3>
              <p className="text-xs text-[#4A5D78] leading-relaxed">
                Bring the right people to your website.
              </p>
            </div>
            {/* Desktop right arrow */}
            <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 text-[#3B82F6] z-10 pointer-events-none">
              <span className="text-base font-bold">→</span>
            </div>
          </div>

          {/* Step 2 (Col 2.5 on lg) */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border border-[#DCE8F6] p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#D97706] mb-3 shrink-0">
                <Filter className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-[#0057B7] block mb-0.5">
                Step 02
              </span>
              <h3 className="text-sm font-bold text-[#071D38] mb-1 leading-snug">
                Conversion Funnel
              </h3>
              <p className="text-xs text-[#4A5D78] leading-relaxed">
                Guide, nurture and remove friction.
              </p>
            </div>
            <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 text-[#3B82F6] z-10 pointer-events-none">
              <span className="text-base font-bold">→</span>
            </div>
          </div>

          {/* Step 3 (Col 2.5 on lg) */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl border border-[#DCE8F6] p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#D97706] mb-3 shrink-0">
                <Sparkles className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-[#0057B7] block mb-0.5">
                Step 03
              </span>
              <h3 className="text-sm font-bold text-[#071D38] mb-1 leading-snug">
                Engaging Value
              </h3>
              <p className="text-xs text-[#4A5D78] leading-relaxed">
                Build trust with valuable content and offers.
              </p>
            </div>
            <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 text-[#3B82F6] z-10 pointer-events-none">
              <span className="text-base font-bold">→</span>
            </div>
          </div>

          {/* Step 4 (Col 2.5 on lg) */}
          <div className="lg:col-span-3 relative bg-white rounded-2xl border border-[#DCE8F6] p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#D97706] mb-3 shrink-0">
                <PhoneCall className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-[#0057B7] block mb-0.5">
                Step 04
              </span>
              <h3 className="text-sm font-bold text-[#071D38] mb-1 leading-snug">
                Qualified Inquiry
              </h3>
              <p className="text-xs text-[#4A5D78] leading-relaxed">
                Turn interest into real opportunities.
              </p>
            </div>
            <div className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 text-[#3B82F6] z-10 pointer-events-none">
              <span className="text-base font-bold">→</span>
            </div>
          </div>

          {/* Outcome Card: Commercial Value (Col 3 on lg) */}
          <div className="lg:col-span-3 bg-[#FED45B] rounded-2xl p-5 shadow-md flex items-center gap-3.5">
            <div className="text-[#071D38] shrink-0">
              <TrendingUp className="w-8 h-8 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#071D38] uppercase tracking-wider block">
                OUTCOME:
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#071D38] uppercase leading-tight">
                COMMERCIAL VALUE
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
