import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import heroSkyline from '../assets/images/hero_bangalore_skyline_1790156917295.jpg';
import HeroBgImg from "../assets/images/hero-img.png"

export const Hero = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070D1E] text-white flex items-center"
    style={{
      backgroundImage: `url(${HeroBgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      {/* Background Skyline Image with Deep Scrims & Bluish Shade */}
      {/* 1. Mobile full overlay for high readability */}
      <div 
        className="absolute inset-0 bg-[#070D1E]/85 lg:hidden pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* 2. Desktop left-to-right dark bluish shade / scrim matching mockup */}
      <div 
        className="hidden lg:block absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, rgba(6, 12, 30, 0.96) 0%, rgba(7, 15, 38, 0.92) 32%, rgba(9, 21, 52, 0.80) 48%, rgba(11, 26, 66, 0.45) 62%, rgba(7, 13, 30, 0) 78%)"
        }}
        aria-hidden="true"
      />

      {/* 3. Top & bottom subtle vignettes for navbar blending & footer grounding */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, rgba(6, 12, 30, 0.70) 0%, rgba(6, 12, 30, 0) 22%, rgba(6, 12, 30, 0) 80%, rgba(7, 13, 30, 0.85) 100%)"
        }}
        aria-hidden="true"
      />

      {/* 4. Ambient bluish glow behind the text section */}
      <div 
        className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-[700px] h-[600px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 35% 50%, rgba(26, 68, 160, 0.32) 0%, rgba(14, 38, 100, 0.15) 50%, transparent 75%)",
          filter: "blur(40px)"
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="relative lg:col-span-6 xl:col-span-7 space-y-6 text-left">
            {/* Localized soft bluish backlight directly behind text typography */}
            <div 
              className="absolute -inset-6 sm:-inset-10 -z-10 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(circle at 35% 45%, rgba(18, 52, 135, 0.40) 0%, rgba(10, 28, 70, 0.18) 55%, transparent 80%)",
                filter: "blur(28px)"
              }}
              aria-hidden="true"
            />

            {/* Kicker Tag with Amber Bar */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#F5A623]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs subheading-semibold tracking-widest text-[#F5A623] uppercase">
                DIGITAL MARKETING SERVICES IN BANGALORE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
              Digital Marketing Services <br className="hidden sm:inline" />
              in Bangalore That Drive <br />
              <span className="text-[#F5A623]">Real Business Growth</span>
            </h1>

            {/* Subtitle Prose */}
            <p className="body-text text-slate-300 max-w-xl">
              From SEO and social media to paid ads, content marketing, web development and more — we bring all the digital channels together under one strategic approach to help your business grow.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="button group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F5A623] hover:bg-[#e89a17] text-slate-950 text-sm sm:text-base rounded-full shadow-lg shadow-amber-500/25 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="button inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 text-white text-sm sm:text-base rounded-full border border-white/30 hover:border-white transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* 4 Value Checkmarks Line */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F5A623] stroke-[3]" />
                <span>More Traffic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F5A623] stroke-[3]" />
                <span>More Leads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F5A623] stroke-[3]" />
                <span>Stronger Brand</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F5A623] stroke-[3]" />
                <span>Higher Conversions</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual with Realistic Angled Laptop & Floating Marketing Badges */}


        </div>
      </div>
    </section>
  );
};
