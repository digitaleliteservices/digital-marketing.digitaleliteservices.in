import React from 'react';
import { Search, Code2, Monitor, Share2, CreditCard, TrendingUp } from 'lucide-react';

export const FragmentedTrapSection = ({ onOpenConsultation }) => {
  return (
    <section id="fragmented-trap" className="py-16 sm:py-20 lg:py-24 bg-[#F8FBFE] text-slate-900 relative overflow-hidden border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, and two cards */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top pill label with yellow bar */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#004BB7] uppercase">
                THE FRAGMENTED MARKETING TRAP
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#071D38] leading-[1.18] tracking-tight">
              More Than Marketing.<br />
              A Strategy Built Around Your Business.
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#4A5D78] leading-relaxed max-w-xl">
              Most businesses juggle disconnected agencies: one manages ads, another tweaks social, while a third designs the website. The outcome? Disjointed messaging, scattered ad spend, and zero accountability for revenue.
            </p>

            {/* Two Value Proposition Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Card 1: Unified Accountability */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DDE7F2] shadow-xs hover:shadow-md transition-all flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center shrink-0">
                  {/* Connected 3 nodes icon */}
                  <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="6" r="2.5" />
                    <circle cx="7" cy="17" r="2.5" />
                    <circle cx="17" cy="17" r="2.5" />
                    <path d="M12 8.5v3m-2.5 2.5l-1.5 1m5-1l1.5 1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071D38] mb-1">
                    Unified Accountability
                  </h4>
                  <p className="text-xs text-[#5B6F88] leading-relaxed">
                    One team. One strategy.<br />
                    Real results.
                  </p>
                </div>
              </div>

              {/* Card 2: Cross-Channel Synergy */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DDE7F2] shadow-xs hover:shadow-md transition-all flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#FEF3D6] flex items-center justify-center shrink-0">
                  {/* Dynamic growth cross-flow icon */}
                  <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071D38] mb-1">
                    Cross-Channel Synergy
                  </h4>
                  <p className="text-xs text-[#5B6F88] leading-relaxed">
                    All channels working<br />
                    together for greater impact.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Exact Comparison Cards with centered VS badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch max-w-xl mx-auto">
              
              {/* Card 1: DISCONNECTED AGENCY MODEL */}
              <div className="rounded-2xl border-[3px] border-[#0A2240] bg-white overflow-hidden shadow-lg flex flex-col justify-between">
                <div>
                  {/* Dark Navy Header */}
                  <div className="bg-[#0A2240] text-white py-3.5 px-3 text-center">
                    <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase block">
                      DISCONNECTED AGENCY MODEL
                    </span>
                  </div>

                  {/* 3 Disconnected Agencies Rows */}
                  <div className="p-4 sm:p-5 space-y-4">
                    
                    {/* Agency A */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0284C7] shrink-0">
                        <Search className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0A2240]">Agency A</div>
                        <div className="text-xs text-[#64748B]">SEO</div>
                      </div>
                    </div>

                    <div className="border-b border-slate-100" />

                    {/* Agency B */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0284C7] shrink-0">
                        {/* Ads card icon */}
                        <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="6" y1="9" x2="18" y2="9" />
                          <line x1="6" y1="13" x2="12" y2="13" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0A2240]">Agency B</div>
                        <div className="text-xs text-[#64748B]">Ads</div>
                      </div>
                    </div>

                    <div className="border-b border-slate-100" />

                    {/* Agency C */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0284C7] shrink-0">
                        <Code2 className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0A2240]">Agency C</div>
                        <div className="text-xs text-[#64748B]">Dev</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom subtle space for equal height balancing */}
                <div className="pb-3" />
              </div>

              {/* VS Circular Badge (Centered between cards on screens where they are side-by-side) */}
              <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#071D38] border-[3.5px] border-white text-white font-black text-xs items-center justify-center shadow-xl pointer-events-none">
                VS
              </div>

              {/* Card 2: THE DES GROWTH ENGINE */}
              <div className="rounded-2xl border border-[#CCE0FA] bg-white overflow-hidden shadow-xl shadow-blue-500/5 flex flex-col justify-between">
                <div>
                  {/* Vibrant Blue Header */}
                  <div className="bg-[#0057D9] text-white py-3.5 px-3 text-center">
                    <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase block">
                      THE DES GROWTH ENGINE
                    </span>
                  </div>

                  {/* 4 Connected Levers */}
                  <div className="p-4 sm:p-5 space-y-3.5">
                    
                    {/* High-Intent SEO */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0066CC] shrink-0">
                        <Search className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A2240]">
                        High-Intent SEO
                      </span>
                    </div>

                    <div className="border-b border-[#F0F5FA]" />

                    {/* Precision PPC */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0066CC] shrink-0">
                        <CreditCard className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A2240]">
                        Precision PPC
                      </span>
                    </div>

                    <div className="border-b border-[#F0F5FA]" />

                    {/* Targeted Social */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0066CC] shrink-0">
                        <Share2 className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A2240]">
                        Targeted Social
                      </span>
                    </div>

                    <div className="border-b border-[#F0F5FA]" />

                    {/* Fast Web Funnels */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#E0F0FE] flex items-center justify-center text-[#0066CC] shrink-0">
                        <Monitor className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A2240]">
                        Fast Web Funnels
                      </span>
                    </div>

                  </div>
                </div>

                {/* Bottom Highlight Gold Banner: Predictable Pipeline & Scalable Revenue */}
                <div className="mx-3.5 mb-3.5 p-3 sm:p-3.5 bg-[#FED45B] rounded-xl flex items-center gap-3 shadow-xs">
                  <div className="text-[#0A2240] shrink-0">
                    <TrendingUp className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#0A2240] leading-snug">
                    Predictable Pipeline &<br />
                    Scalable Revenue
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
