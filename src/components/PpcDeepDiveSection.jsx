import React from 'react';
import { Check, Shield } from 'lucide-react';

export const PpcDeepDiveSection = ({ onRequestPpcConsultation }) => {
  const ppcChecklist = [
    'Google Ads Management',
    'Display & Remarketing Campaigns',
    'Budget Optimization & A/B Testing',
  ];

  return (
    <section id="ppc-deep-dive" className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, checklist & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top pill label with yellow bar */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
                PAY-PER-CLICK MARKETING
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#071D38] leading-[1.18] tracking-tight uppercase">
              REACH THE RIGHT CUSTOMERS FASTER
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#4A5D78] leading-relaxed max-w-xl">
              Our PPC campaigns put your business in front of high-intent customers at the right time, with the right message. We focus on maximizing ROI through continuous optimization and smart targeting.
            </p>

            {/* 3 Checklist Items with gold/amber circular checkmarks */}
            <div className="space-y-3.5 pt-1">
              {ppcChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FED45B] flex items-center justify-center shrink-0 text-[#071D38] shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#0052B4]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: CAMPAIGN FLIGHT CONTROLLER Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B2545] rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#143763] space-y-4">
              
              {/* Card Header Title */}
              <div className="pb-1">
                <span className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider block">
                  CAMPAIGN FLIGHT CONTROLLER
                </span>
              </div>

              {/* 4 White Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                
                {/* Active Optimization */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                    Active Optimization
                  </span>
                  <div className="mt-3 mb-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-500">
                      ON
                    </span>
                  </div>
                </div>

                {/* Quality Score */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                    Quality Score
                  </span>
                  <div className="mt-3 mb-1">
                    <span className="text-xl sm:text-2xl font-black text-[#0A2240]">
                      9.4/10
                    </span>
                  </div>
                </div>

                {/* Target CPA */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                    Target CPA
                  </span>
                  <div className="mt-3 mb-1">
                    <span className="text-base sm:text-lg font-bold text-emerald-500 leading-tight">
                      Stabilized
                    </span>
                  </div>
                </div>

                {/* Impression Share */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                    Impression Share
                  </span>
                  <div className="mt-3 mb-1">
                    <span className="text-xl sm:text-2xl font-black text-[#0A2240]">
                      87.2%
                    </span>
                  </div>
                </div>

              </div>

              {/* Negative Keyword Shield Box */}
              <div className="bg-[#081D37] border border-[#163B66] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0F3560] flex items-center justify-center shrink-0 text-white">
                  <Shield className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    NEGATIVE KEYWORD SHIELD
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Blocks irrelevant searches. Improves budget efficiency. Increases conversion rates.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
