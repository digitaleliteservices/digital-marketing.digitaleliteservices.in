import React from 'react';
import { Check, Shield } from 'lucide-react';

export const SocialMediaDeepDiveSection = ({ onPlanSocialCampaign }) => {
  const socialChecklist = [
    'Social Media Strategy & Management',
    'Content Creation & Community Engagement',
    'Paid Social Advertising',
  ];

  return (
    <section id="social-deep-dive" className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, checklist & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Top pill label with yellow bar */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
                SOCIAL MEDIA & BRAND REACH
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] leading-[1.2] tracking-tight uppercase">
              BUILD ATTENTION. BUILD RELATIONSHIPS.<br />
              BUILD YOUR BRAND.
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-[#4A5D78] leading-relaxed max-w-xl">
              We create engaging social media strategies that grow your audience, strengthen your brand and turn followers into customers.
            </p>

            {/* 3 Checklist Items with gold/amber circular checkmarks */}
            <div className="space-y-3 pt-1">
              {socialChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FED45B] flex items-center justify-center shrink-0 text-[#071D38] shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0052B4]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onPlanSocialCampaign}
                className="button inline-flex items-center gap-2.5 px-7 py-3 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs font-bold rounded-full shadow-md shadow-amber-500/15 transition-all duration-150 cursor-pointer uppercase tracking-wider"
              >
                <span>PLAN SOCIAL CAMPAIGN</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: MULTI-CHANNEL ENGAGEMENT MATRIX Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A2246] rounded-3xl p-5 sm:p-7 shadow-2xl border border-[#143766] space-y-4">
              
              {/* Card Header Title */}
              <div className="pb-1">
                <span className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider block">
                  MULTI-CHANNEL ENGAGEMENT MATRIX
                </span>
              </div>

              {/* Cards Row: LinkedIn (wider) + Target CPA + Impression Share */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
                
                {/* LinkedIn Card (Col 6 / wider) */}
                <div className="sm:col-span-6 bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
                  {/* LinkedIn Official Blue Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center shrink-0 text-white font-black text-base shadow-xs">
                    in
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-[13px] font-bold text-[#071D38] leading-tight">
                      LinkedIn – B2B Thought Leadership
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#4A5D78]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                        <span>Founder commentary & case studies</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#4A5D78]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                        <span className="font-semibold text-[#071D38]">High Intent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target CPA (Col 3) */}
                <div className="sm:col-span-3 bg-white rounded-2xl p-4 flex flex-col justify-center text-center shadow-sm">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-semibold leading-tight block mb-2">
                    Target CPA
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#00C988] leading-none">
                    9.4/10
                  </div>
                </div>

                {/* Impression Share (Col 3) */}
                <div className="sm:col-span-3 bg-white rounded-2xl p-4 flex flex-col justify-center text-center shadow-sm">
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-semibold leading-tight block mb-2">
                    Impression Share
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#071D38] leading-none">
                    87.2%
                  </div>
                </div>

              </div>

              {/* Bottom Shield Card: RETARGETING KEYWORD PATH */}
              <div className="bg-[#081F40]/90 border border-blue-400/25 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-200">
                  <Shield className="w-5 h-5 stroke-[2.2] text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                    RETARGETING KEYWORD PATH
                  </h4>
                  <p className="text-[11px] sm:text-xs text-blue-100/80 leading-relaxed">
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
