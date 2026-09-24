import React from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import vidhanaSoudhaImg from '../assets/images/bangalore_vidhana_soudha_1790156951503.jpg';
import localSeoImg from "../assets/images/local-seo.png"

export const LocalSection = ({ onGetLocalSupport }) => {
  const localFeatures = [
    'Local SEO & Google Business Profile',
    'Social Media Marketing',
    'Google Ads & PPC',
    'Content Creation & More',
  ];

  return (
    <section id="local-seo" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Local Expertise Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
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
            <div className="space-y-3 pt-2">
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
            <div className="pt-4">
              <button
                onClick={onGetLocalSupport}
                className="button group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] active:scale-95 text-white text-sm sm:text-base rounded-full shadow-lg shadow-slate-900/15 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Get Local Support</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F5A623]" />
              </button>
            </div>
          </div>

          {/* Right Column: Bangalore Landmark with Sahakar Nagar Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src={localSeoImg}
                alt="Vidhana Soudha Bangalore Landmark Local Presence"
                referrerPolicy="no-referrer"
                className="w-full h-full  object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating Sahakar Nagar Location Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100/90 flex items-center justify-between gap-4 max-w-sm">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F5A623] fill-amber-500/20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      Sahakar Nagar
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Local Business Growth
                    </p>
                  </div>
                </div>

                {/* Miniature Folded Map Vector Illustration */}
                <div className="w-12 h-10 bg-slate-100 rounded-lg border border-slate-200 p-1 flex items-center justify-center relative overflow-hidden shrink-0 shadow-inner">
                  <svg className="w-full h-full text-slate-400" viewBox="0 0 40 28" fill="none">
                    <path d="M2 4L14 2L26 5L38 3V24L26 26L14 23L2 25V4Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
                    <line x1="14" y1="2" x2="14" y2="23" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1 1" />
                    <line x1="26" y1="5" x2="26" y2="26" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1 1" />
                    <circle cx="20" cy="14" r="3" fill="#2563EB" />
                    <circle cx="20" cy="14" r="5" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
