import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, ZoomIn, X } from 'lucide-react';
import localSeoImg from "../assets/images/local-seo.png";

export const LocalSection = ({ onGetLocalSupport }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const localFeatures = [
    'Local SEO & Google Business Profile',
    'Social Media Marketing',
    'Google Ads & PPC',
    'Content Creation & More',
  ];

  return (
    <section id="local-seo" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Local Expertise Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#F5A623]" aria-hidden="true" />
              <span className="text-xs subheading-semibold tracking-wider text-slate-800 uppercase">
                LOCAL EXPERTISE
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title tracking-tight text-slate-900">
              Digital Marketing Companies <br className="hidden sm:inline" />
              in Sahakar Nagar
            </h2>

            {/* Paragraph */}
            <p className="body-text text-slate-600">
              Businesses in Sahakar Nagar need a digital strategy that connects them with customers locally and beyond. Our local-focused solutions help you improve online presence, attract relevant visitors, generate enquiries and build stronger customer relationships.
            </p>

            {/* Feature Checklist with Amber Check Icons */}
            <div className="space-y-3 pt-1">
              {localFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#F5A623] stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Dark Action Button */}
            <div className="pt-2">
              <button
                onClick={onGetLocalSupport}
                className="button group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] active:scale-95 text-white text-sm sm:text-base rounded-full shadow-lg shadow-slate-900/15 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Get Local Support</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F5A623]" />
              </button>
            </div>
          </div>

          {/* Right Column: Prominent, High-Visibility Local SEO Proof Card */}
          <div className="lg:col-span-7 relative">
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/90 bg-[#121620] cursor-pointer transition-all duration-300 hover:shadow-[0_25px_70px_-12px_rgba(245,166,35,0.22)] hover:border-amber-400/60"
              title="Click to view full-size ranking proof"
            >
              {/* Browser Window Header Bar */}
              <div className="bg-[#1b202c] px-4 py-2.5 flex items-center justify-between border-b border-white/10 select-none">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0e121a] text-[11px] text-slate-300 font-mono border border-white/5 max-w-[220px] sm:max-w-xs md:max-w-sm truncate">
                  <span className="text-emerald-400 text-xs">🔒</span>
                  <span className="truncate">google.com/search?q=digital+marketing+in+sahakar+nagar</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Top Rank
                </span>
              </div>

              {/* Large, High-Visibility Screenshot Display */}
              <div className="relative overflow-hidden bg-slate-950">
                <img
                  src={localSeoImg}
                  alt="Local SEO Google Maps Ranking in Sahakar Nagar"
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

                {/* Floating Click to Zoom Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-1.5 transition-all group-hover:scale-105">
                  <ZoomIn className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Click to Zoom</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen High-Resolution Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between p-4 bg-slate-800/90 border-b border-slate-700 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F5A623]" />
                <span className="text-xs sm:text-sm font-bold">
                  Google Search & Maps Ranking • Sahakar Nagar Bangalore
                </span>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Full Image View */}
            <div className="p-2 sm:p-4 bg-slate-950 max-h-[85vh] overflow-auto flex items-center justify-center">
              <img
                src={localSeoImg}
                alt="High Resolution Local SEO Google Maps Ranking Proof"
                className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
