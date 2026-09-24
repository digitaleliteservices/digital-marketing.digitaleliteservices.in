import React from 'react';
import { Search, Check } from 'lucide-react';
import seoImg from "../assets/images/keywords-img.png"

export const SeoDeepDiveSection = ({ onRequestSeoAssessment }) => {
  const seoChecklist = [
    'On-Page & Off-Page SEO',
    'Technical SEO & Site Optimization',
    'Content Strategy & Link Building',
  ];

  return (
    <section id="seo-deep-dive" className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, description, checklist & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top pill label with yellow bar */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
                SEARCH ENGINE OPTIMIZATION
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#071D38] leading-[1.18] tracking-tight uppercase">
              BE VISIBLE WHEN CUSTOMERS<br />
              ARE SEARCHING
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#4A5D78] leading-relaxed max-w-xl">
              Our SEO strategies help you rank higher, attract qualified traffic, and build long-term organic growth. We focus on what matters — relevant keywords, quality content and technical excellence.
            </p>

            {/* 3 Checklist Items with gold/amber circular checkmarks */}
            <div className="space-y-3.5 pt-1">
              {seoChecklist.map((item) => (
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
                onClick={onRequestSeoAssessment}
                className="button inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs sm:text-sm font-bold rounded-full shadow-md shadow-amber-500/15 transition-all duration-200 cursor-pointer uppercase tracking-wider"
              >
                <span>REQUEST SEO ASSESMENT</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: KEYWORD DOMINANCE TRACKER exact card */}
          <div className="lg:col-span-6">
            <img src={seoImg} alt="" className="mx-auto max-w-full h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};
