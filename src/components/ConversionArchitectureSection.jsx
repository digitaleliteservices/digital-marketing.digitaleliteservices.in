import React from 'react';
import { Check } from 'lucide-react';
import landmarkImg from '../assets/images/bangalore_landmark_palace_1790166197366.jpg';

export const ConversionArchitectureSection = ({ onTalkToWebTeam }) => {
  const designServices = [
    'Custom Website Design & Development',
    'Landing Page Design & Optimization',
    'UI/UX Design for Better Engagement',
    'Mobile Responsive & Fast Loading',
  ];

  return (
    <section id="conversion-architecture" className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, checklist & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Top pill label with yellow bar */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
                CONVERSION ARCHITECTURE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#071D38] leading-[1.18] tracking-tight uppercase">
              WEBSITE DESIGN & CONVERSION-FOCUSED<br />
              LANDING PAGES
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#4A5D78] leading-relaxed max-w-xl">
              We build modern, high-performing websites and landing pages that turn visitors into customers. Beautiful design meets proven conversion strategy for real business impact.
            </p>

            {/* 4 Checklist Items with gold/amber circular checkmarks */}
            <div className="space-y-3 pt-1">
              {designServices.map((item) => (
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

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onTalkToWebTeam}
                className="button inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs sm:text-sm font-bold rounded-full shadow-md shadow-amber-500/15 transition-all duration-200 cursor-pointer uppercase tracking-wider"
              >
                <span>TALK TO OUR WEB DESIGN TEAM</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: High Fidelity Laptop & Mobile Mockup + 99 Lighthouse Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#F6FAFD] rounded-3xl border border-[#CCE0FA] shadow-xl shadow-blue-500/5 p-4 sm:p-7 relative overflow-hidden">
              
              {/* Subtle background plant leaf accents for realism */}
              <div className="absolute -top-6 right-1/3 w-32 h-32 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="#15803D">
                  <path d="M50 0 C60 30 80 40 100 50 C70 60 60 80 50 100 C40 70 20 60 0 50 C30 40 40 20 50 0 Z" opacity="0.6" />
                  <path d="M45 20 Q55 45 75 55 Q50 65 45 85 Q35 60 20 50 Q40 40 45 20 Z" opacity="0.4" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center">
                
                {/* Laptop & Smartphone Mockup Container (Col 7) */}
                <div className="md:col-span-7 relative">
                  
                  {/* Laptop Wrapper */}
                  <div className="relative mx-auto max-w-[420px]">
                    
                    {/* Laptop Screen Bezel */}
                    <div className="bg-[#0f172a] rounded-t-xl pt-2 px-2 pb-0.5 shadow-2xl border border-slate-700/70">
                      
                      {/* Web camera dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mx-auto mb-1.5 ring-1 ring-slate-700/50" />
                      
                      {/* Laptop Screen Content Display */}
                      <div className="rounded-t-md overflow-hidden bg-slate-950 aspect-[16/10] relative">
                        
                        {/* Browser Top Navigation Header */}
                        <div className="bg-white px-3 py-1.5 border-b border-slate-200/90 flex items-center justify-between z-10 relative shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0057B7]" />
                            <span className="text-[9px] font-black tracking-wider text-[#071D38]">DIGITAL ELITE SERVICE</span>
                          </div>
                          <div className="flex items-center gap-2 text-[8px] text-slate-600 font-medium">
                            <span className="text-[#071D38] font-bold">Services</span>
                            <span>Work</span>
                            <span>About</span>
                            <span className="bg-[#0057B7] text-white px-2 py-0.5 rounded-full text-[7px] font-bold">
                              Contact
                            </span>
                          </div>
                        </div>

                        {/* Hero Section with Palace Photo */}
                        <div className="relative h-full w-full">
                          {/* Real Photo of Bangalore Vidhana Soudha */}
                          <img
                            src={landmarkImg}
                            alt="Bangalore Landmark Architecture"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                          />
                          
                          {/* Gradient Overlay for crystal clear typography */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#07172F]/90 via-[#07172F]/65 to-transparent flex flex-col justify-center p-3 text-white">
                            <div className="max-w-[190px] space-y-1">
                              <span className="text-[7px] text-[#FED45B] font-bold tracking-wider uppercase block">
                                Digital Marketing Agency
                              </span>
                              <h4 className="text-[13px] sm:text-[15px] font-black leading-tight text-white tracking-tight">
                                Better Strategy.<br />
                                <span className="text-[#FED45B]">Bigger Growth.</span>
                              </h4>
                              <p className="text-[7.5px] text-slate-200 leading-snug line-clamp-2 font-normal">
                                We help Bangalore businesses dominate search, capture high-intent leads and drive measurable revenue.
                              </p>
                              <div className="flex items-center gap-1.5 pt-1">
                                <span className="px-2 py-0.5 bg-[#FED45B] text-[#071D38] font-bold text-[7.5px] rounded-full shadow-xs">
                                  Get Started
                                </span>
                                <span className="px-2 py-0.5 bg-white/20 border border-white/30 text-white font-medium text-[7.5px] rounded-full">
                                  View Work
                                </span>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>

                      {/* Laptop Aluminum Bottom Deck & Hinge */}
                      <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 h-2.5 -mx-3 rounded-b-lg border-t border-slate-400 flex items-center justify-center shadow-lg relative z-10">
                        <div className="w-12 h-1 bg-slate-400/80 rounded-full" />
                      </div>
                    </div>

                    {/* Realistic surface reflection shadow under laptop */}
                    <div className="h-3 w-4/5 mx-auto bg-slate-400/30 blur-md rounded-full mt-0.5" />
                  </div>

                  {/* Overlapping Smartphone Mockup */}
                  <div className="absolute -bottom-2 right-0 sm:right-2 w-24 sm:w-28 bg-[#0F172A] rounded-2xl p-1.5 shadow-2xl border-2 border-slate-700 z-20">
                    {/* Top Speaker / Dynamic Island */}
                    <div className="w-6 h-1 bg-slate-800 rounded-full mx-auto mb-1 ring-1 ring-slate-700/50" />
                    
                    {/* Phone Screen Display */}
                    <div className="rounded-xl overflow-hidden aspect-[9/16] relative bg-[#07172F]">
                      <img
                        src={landmarkImg}
                        alt="Bangalore Landmark Mobile"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#07172F]/80 via-[#07172F]/60 to-[#07172F]/95 flex flex-col justify-between p-2 text-white">
                        <div className="flex items-center justify-between text-[7px] border-b border-white/10 pb-1">
                          <span className="font-bold text-[#FED45B]">DES</span>
                          <span className="bg-[#0057B7] text-[6px] px-1.5 py-0.5 rounded-full font-bold">
                            Menu
                          </span>
                        </div>
                        <div className="space-y-1 py-1">
                          <div className="text-[8.5px] font-black leading-tight text-white">
                            Better Strategy.<br />Bigger Growth.
                          </div>
                          <div className="w-8 h-0.5 bg-[#FED45B] rounded-full" />
                        </div>
                        <div className="bg-[#FED45B] text-[#071D38] text-[7px] font-black text-center py-1 rounded-md shadow-xs">
                          Free Consultation
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Lighthouse 99 Performance Card (Col 5) */}
                <div className="md:col-span-5 bg-white rounded-3xl border border-[#DCE8F6] p-5 sm:p-6 shadow-xl flex flex-col items-center text-center space-y-4">
                  
                  {/* Large Circular Score Gauge */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.2"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#00C988]"
                        strokeDasharray="99, 100"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-[#071D38] leading-none tracking-tight">
                        99
                      </span>
                      <span className="text-[10px] text-[#64748B] font-semibold mt-1">
                        Performance
                      </span>
                    </div>
                  </div>

                  {/* URL Pill */}
                  <div className="bg-[#F0F7FF] text-[#0066CC] font-mono text-[11px] px-3.5 py-1.5 rounded-full border border-[#D0E2FF] truncate max-w-full font-semibold">
                    https://digitaleliteservices.in
                  </div>

                  {/* 4 Green Checkmarks */}
                  <div className="space-y-2 text-left w-full text-xs font-semibold text-[#071D38] pt-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>Fast Loading</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>SEO Friendly</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>Mobile Optimized</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>Secure (HTTPS)</span>
                    </div>
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
