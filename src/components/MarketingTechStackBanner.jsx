import React from 'react';

// Reusable Google multi-color brand text exactly as shown in the reference UI
const GoogleText = ({ className = "text-[14px] sm:text-[16px] xl:text-[18px]" }) => (
  <span className={`font-bold tracking-tight inline-flex select-none whitespace-nowrap ${className}`}>
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

export const MarketingTechStackBanner = () => {
  return (
    <section className="relative z-20 bg-gradient-to-b from-[#FAFDFE] via-white to-[#F8FBFE] border-b border-[#E2EEF8] py-8 sm:py-12 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Heading: Our Partners */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-1.5">
            <span className="w-6 h-0.5 bg-[#F5A623]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-amber-700 uppercase">
              GROWTH ECOSYSTEM
            </span>
            <span className="w-6 h-0.5 bg-[#F5A623]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight">
            Our Partners
          </h2>
        </div>

        {/* 5 Brand Pillars with Single-Line Non-Wrapping Headings and Clean Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-y-6 lg:gap-y-0">
          
          {/* ========================================================= */}
          {/* Pillar 1: Google */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-4 sm:py-6 px-2 sm:px-3 lg:px-2 xl:px-4 relative group">
            {/* Exact Official Google 'G' Logo */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 48 48">
                {/* Red Top Arch */}
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                {/* Blue Right & Horizontal Crossbar */}
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                {/* Yellow Left Arch */}
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                {/* Green Bottom Arch */}
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
            </div>

            {/* Title: Google */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight whitespace-nowrap">
              <GoogleText className="text-[15px] sm:text-[16px] xl:text-[19px]" />
            </h3>

            {/* Subtitle / Pillars with orange/amber dots */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
              <span>Track</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Analyze</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Grow</span>
            </p>

            {/* Subtle Sky-Blue Divider for Desktop */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#CFE2FE]" />
          </div>

          {/* ========================================================= */}
          {/* Pillar 2: Meta */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-4 sm:py-6 px-2 sm:px-3 lg:px-2 xl:px-4 relative group">
            {/* Official Meta Infinity Loop Logo */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 16 16" fill="none">
                <path
                  fill="url(#meta-pillar-gradient)"
                  fillRule="evenodd"
                  d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
                />
                <defs>
                  <linearGradient id="meta-pillar-gradient" x1="0" y1="8" x2="16" y2="8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0064E0" />
                    <stop offset="0.6" stopColor="#0081FB" />
                    <stop offset="1" stopColor="#0081FB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Title: Meta */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight whitespace-nowrap">
              <span className="font-bold tracking-tight text-[15px] sm:text-[16px] xl:text-[19px] text-[#0081FB] whitespace-nowrap">
                Meta
              </span>
            </h3>

            {/* Subtitle / Pillars */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
              <span>Reach</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Engage</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Scale</span>
            </p>

            {/* Subtle Sky-Blue Divider for Desktop */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#CFE2FE]" />
          </div>

          {/* ========================================================= */}
          {/* Pillar 3: Google Ads (Exact Official Logo Matching Reference) */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-4 sm:py-6 px-2 sm:px-3 lg:px-2 xl:px-4 relative group">
            {/* Authentic Official Google Ads Icon with Layered Blue, Yellow & Green */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg
                className="w-12 h-12 sm:w-[50px] sm:h-[50px]"
                viewBox="0 0 250 230"
                fill="none"
              >
                {/* Yellow Left Slanted Bar */}
                <path
                  fill="#FABB05"
                  d="M85.9 28.6c-0.9 3.6-1.7 7.2-1.9 11-0.3 8.4 1.8 16.2 6 23.5 11 18.9 22 37.9 32.9 56.9 1 1.7 1.8 3.4 2.8 5-6 10.4-12 20.7-18.1 31.1-8.4 14.5-16.8 29.1-25.3 43.6-0.4 0-0.5-0.2-0.6-0.5-0.1-0.8 0.2-1.5 0.4-2.3 4.1-15 0.7-28.3-9.6-39.7-6.3-6.9-14.3-10.8-23.5-12.1-12-1.7-22.6 1.4-32.1 8.9-1.7 1.3-2.8 3.2-4.8 4.2-0.4 0-0.6-0.2-0.7-0.5 4.8-8.3 9.5-16.6 14.3-24.9 11-19 30.8-53.4 50.7-87.7 0.2-0.4 0.5-0.7 0.7-1.1z"
                />
                {/* Green Circle at bottom-left */}
                <path
                  fill="#34A853"
                  d="M11.8 158c1.9-1.7 3.7-3.5 5.7-5.1 24.3-19.2 60.8-5.3 66.1 25.1 1.3 7.3 0.6 14.3-1.6 21.3-0.1 0.6-0.2 1.1-0.4 1.7-0.9 1.6-1.7 3.3-2.7 4.9-8.9 14.7-22 22-39.2 20.9-19.7-1.2-35.2-16-37.9-35.6-1.3-9.5 0.6-18.4 5.5-26.6 1-1.8 2.2-3.4 3.3-5.2 0.6-0.6 0.4-1.4 1.3-1.4z"
                />
                {/* Blue Right Slanted Pill (overlaid on top of yellow at apex) */}
                <path
                  fill="#4285F4"
                  d="M85.9 28.6c2.4-6.3 5.7-12.1 10.6-16.8 19.6-19.1 52-14.3 65.3 9.7 10 18.2 20.6 36 30.9 54 17.2 29.9 34.6 59.8 51.6 89.8 14.3 25.1-1.2 56.8-29.6 61.1-17.4 2.6-33.7-5.4-42.7-21-15.1-26.3-30.3-52.6-45.4-78.8-0.3-0.6-0.7-1.1-1.1-1.6-1.6-1.3-2.3-3.2-3.3-4.9-6.7-11.8-13.6-23.5-20.3-35.2-4.3-7.6-8.8-15.1-13.1-22.7-3.9-6.8-5.7-14.2-5.5-22-0.3-6.6 0.2-10.6 2-14.2z"
                />
              </svg>
            </div>

            {/* Title: Google Ads */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight whitespace-nowrap">
              <GoogleText className="text-[14px] sm:text-[16px] xl:text-[18px]" />
              <span className="font-bold text-[#1A2B49] text-[14px] sm:text-[16px] xl:text-[18px] tracking-tight whitespace-nowrap">
                Ads
              </span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
              <span>Reach</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Convert</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Scale</span>
            </p>

            {/* Subtle Sky-Blue Divider for Desktop */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#CFE2FE]" />
          </div>

          {/* ========================================================= */}
          {/* Pillar 4: Google Search Console (Guaranteed Single-Line) */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-4 sm:py-6 px-1.5 sm:px-2.5 lg:px-1 xl:px-3 relative group">
            {/* Exact Google Search Console / Webmaster Toolbox with Mechanical Wrench */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 56 56" fill="none">
                {/* Toolbox Shadow */}
                <rect x="7" y="15" width="42" height="30" rx="5" fill="#C7DCF8" />
                
                {/* Main Toolbox White Screen Body */}
                <rect x="8" y="14" width="40" height="30" rx="4.5" fill="#EBF3FD" stroke="#4285F4" strokeWidth="2.2" />
                
                {/* Top Blue Handle */}
                <path
                  d="M22 14V9.5C22 8.1 23.1 7 24.5 7H31.5C32.9 7 34 8.1 34 9.5V14"
                  stroke="#4285F4"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                
                {/* Blue Top Header Bar */}
                <rect x="8" y="14" width="40" height="7.5" rx="3.5" fill="#4285F4" />
                
                {/* Browser Left Data / Code Rows */}
                <line x1="14" y1="27" x2="26" y2="27" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="14" y1="32" x2="23" y2="32" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="14" y1="37" x2="20" y2="37" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" />
                
                {/* Realistic Diagnostic Metallic Wrench Overlaid on the Right */}
                <g transform="translate(30, 20) rotate(-18)">
                  <path
                    d="M13 2.5C10.5 2.5 8.5 4.5 8.5 7C8.5 8.2 9 9.3 9.8 10.1L3.2 16.7C2.6 17.3 2.6 18.3 3.2 18.9C3.8 19.5 4.8 19.5 5.4 18.9L12 12.3C12.8 13.1 13.9 13.6 15.1 13.6C17.6 13.6 19.6 11.6 19.6 9.1C19.6 8.3 19.4 7.6 19 7L16.2 9.8L14.4 8L17.2 5.2C16.6 4.8 15.9 4.6 15.1 4.6C14.2 4.6 13.5 4.9 13 5.4V2.5Z"
                    fill="#374151"
                  />
                  <path
                    d="M14.4 8L16.2 9.8L19 7C18.6 6.4 18 6 17.2 5.2L14.4 8Z"
                    fill="#4B5563"
                  />
                  <circle cx="4.3" cy="17.8" r="1.1" fill="#D1D5DB" />
                </g>
              </svg>
            </div>

            {/* Title: Google Search Console (Guaranteed Single Line Across Screen Sizes) */}
            <h3 className="flex items-center justify-center gap-1 sm:gap-1.5 leading-tight whitespace-nowrap">
              <GoogleText className="text-[13px] sm:text-[15px] lg:text-[13.5px] xl:text-[17px]" />
              <span className="font-bold text-[#1E293B] text-[13px] sm:text-[15px] lg:text-[13.5px] xl:text-[17px] tracking-tight whitespace-nowrap">
                Search Console
              </span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
              <span>Monitor</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Fix</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Improve</span>
            </p>

            {/* Subtle Sky-Blue Divider for Desktop */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#CFE2FE]" />
          </div>

          {/* ========================================================= */}
          {/* Pillar 5: Google My Business (Guaranteed Single-Line) */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-4 sm:py-6 px-1.5 sm:px-2.5 lg:px-1 xl:px-3 relative group">
            {/* Exact Google My Business Storefront Awning with Bottom-Right 'G' Badge */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 56 56" fill="none">
                
                {/* 1. Main Store Base Wall */}
                <rect x="11" y="24" width="34" height="23" rx="2" fill="#1A73E8" />
                
                {/* Subtle base shadow gradient */}
                <path d="M11 24H45V27H11V24Z" fill="#1557B0" opacity="0.3" />

                {/* 2. Classic Blue Striped Awning / Canopy Roof */}
                <path d="M9 22L12 9H44L47 22H9Z" fill="#1E70E4" />

                {/* Alternating darker & lighter blue awning panels */}
                <path d="M9 22L12 9H18.5L16.5 22H9Z" fill="#1557B0" />
                <path d="M18.5 9H25L24 22H16.5L18.5 9Z" fill="#4285F4" />
                <path d="M25 9H31.5L31.5 22H24L25 9Z" fill="#1557B0" />
                <path d="M31.5 9H38L39 22H31.5L31.5 9Z" fill="#4285F4" />
                <path d="M38 9H44L47 22H39L38 9Z" fill="#1557B0" />

                {/* 3. Rounded Scalloped Flaps at the bottom of the awning */}
                <path d="M9 22C9 23.9 10.7 25.5 12.7 25.5C14.7 25.5 16.5 23.9 16.5 22H9Z" fill="#1557B0" />
                <path d="M16.5 22C16.5 23.9 18.2 25.5 20.2 25.5C22.2 25.5 24 23.9 24 22H16.5Z" fill="#4285F4" />
                <path d="M24 22C24 23.9 25.7 25.5 27.7 25.5C29.7 25.5 31.5 23.9 31.5 22H24Z" fill="#1557B0" />
                <path d="M31.5 22C31.5 23.9 33.2 25.5 35.2 25.5C37.2 25.5 39 23.9 39 22H31.5Z" fill="#4285F4" />
                <path d="M39 22C39 23.9 40.7 25.5 42.7 25.5C44.7 25.5 47 23.9 47 22H39Z" fill="#1557B0" />

                {/* 4. White Google "G" in the Bottom-Right Quadrant */}
                <g transform="translate(30, 31)">
                  <path
                    d="M10.5 6.5C10.5 4.3 8.7 2.5 6.5 2.5C4.3 2.5 2.5 4.3 2.5 6.5C2.5 8.7 4.3 10.5 6.5 10.5C8.2 10.5 9.6 9.4 10.2 7.9H6.5V6.4H10.5V6.5Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </div>

            {/* Title: Google My Business (Guaranteed Single Line Across Screen Sizes) */}
            <h3 className="flex items-center justify-center gap-1 sm:gap-1.5 leading-tight whitespace-nowrap">
              <GoogleText className="text-[13px] sm:text-[15px] lg:text-[13.5px] xl:text-[17px]" />
              <span className="font-bold text-[#1E293B] text-[13px] sm:text-[15px] lg:text-[13.5px] xl:text-[17px] tracking-tight whitespace-nowrap">
                My Business
              </span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
              <span>Be Found</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Build Trust</span>
              <span className="text-[#F5A623] font-bold text-xs">•</span>
              <span>Grow</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
