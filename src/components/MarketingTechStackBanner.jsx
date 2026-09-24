import React from 'react';

// Reusable Google multi-color brand text exactly as shown in the reference UI
const GoogleText = () => (
  <span className="font-bold tracking-tight inline-flex select-none text-[19px] sm:text-[21px]">
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
    <section className="relative z-20 bg-gradient-to-b from-[#FAFDFE] via-white to-[#F8FBFE] border-b border-[#E2EEF8] py-8 sm:py-10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Brand Pillars with Exact Vertical Dividers matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center">
          
          {/* ========================================================= */}
          {/* Pillar 1: Google Meta */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-5 sm:py-6 px-4 lg:px-6 relative group">
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

            {/* Title: Google Meta */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight">
              <GoogleText />
              <span className="font-bold text-[#1E293B] text-[19px] sm:text-[21px]">Meta</span>
            </h3>

            {/* Subtitle / Pillars with orange/amber dots */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-2 font-medium">
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
          {/* Pillar 2: Google Ads (Exact Official Logo) */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-5 sm:py-6 px-4 lg:px-6 relative group">
            {/* Authentic Google Ads Inverted-V Chevron Emblem */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 48 48" fill="none">
                {/* Yellow Left Arm (slanted from top-center down to bottom-left) */}
                <path
                  d="M12.67 34.83L24.51 14.33C25.96 11.81 29.19 10.95 31.71 12.4C34.23 13.85 35.09 17.08 33.64 19.6L21.8 40.1C20.35 42.62 17.12 43.48 14.6 42.03C12.08 40.58 11.22 37.35 12.67 34.83Z"
                  fill="#FBBC04"
                />
                {/* Blue Right Arm (slanted from top-center down to bottom-right) */}
                <path
                  d="M35.33 34.83L23.49 14.33C22.04 11.81 18.81 10.95 16.29 12.4C13.77 13.85 12.91 17.08 14.36 19.6L26.2 40.1C27.65 42.62 30.88 43.48 33.4 42.03C35.92 40.58 36.78 37.35 35.33 34.83Z"
                  fill="#4285F4"
                />
                {/* Green Circle at bottom-left base */}
                <circle cx="12.67" cy="34.83" r="5.8" fill="#34A853" />
              </svg>
            </div>

            {/* Title: Google Ads */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight">
              <GoogleText />
              <span className="font-bold text-[#1E293B] text-[19px] sm:text-[21px]">Ads</span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-2 font-medium">
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
          {/* Pillar 3: Google Search Console */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-5 sm:py-6 px-4 lg:px-6 relative group">
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

            {/* Title: Google Search Console */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight">
              <GoogleText />
              <span className="font-bold text-[#1E293B] text-[19px] sm:text-[21px]">Search Console</span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-2 font-medium">
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
          {/* Pillar 4: Google My Business */}
          {/* ========================================================= */}
          <div className="flex flex-col items-center text-center py-5 sm:py-6 px-4 lg:px-6 relative group">
            {/* Exact Google My Business Storefront Awning with Bottom-Right 'G' Badge */}
            <div className="h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
              <svg className="w-12 h-12 sm:w-[50px] sm:h-[50px]" viewBox="0 0 56 56" fill="none">
                
                {/* 1. Main Store Base Wall */}
                <rect x="11" y="24" width="34" height="23" rx="2" fill="#1A73E8" />
                
                {/* Subtle base shadow gradient */}
                <path d="M11 24H45V27H11V24Z" fill="#1557B0" opacity="0.3" />

                {/* 2. Classic Blue Striped Awning / Canopy Roof */}
                {/* Trapezoid top background */}
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

                {/* 4. White Google "G" in the Bottom-Right Quadrant (exact as in screenshot) */}
                <g transform="translate(30, 31)">
                  {/* Clean white Google 'G' letterform */}
                  <path
                    d="M10.5 6.5C10.5 4.3 8.7 2.5 6.5 2.5C4.3 2.5 2.5 4.3 2.5 6.5C2.5 8.7 4.3 10.5 6.5 10.5C8.2 10.5 9.6 9.4 10.2 7.9H6.5V6.4H10.5V6.5Z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </div>

            {/* Title: Google My Business */}
            <h3 className="flex items-center justify-center gap-1.5 leading-tight">
              <GoogleText />
              <span className="font-bold text-[#1E293B] text-[19px] sm:text-[21px]">My Business</span>
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] flex items-center justify-center gap-2 font-medium">
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
