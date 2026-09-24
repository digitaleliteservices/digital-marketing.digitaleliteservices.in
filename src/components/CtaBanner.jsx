import React from 'react';

export const CtaBanner = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-[#06142E] text-white overflow-hidden py-14 sm:py-16 lg:py-20 border-t border-b border-white/10">
      
      {/* Twilight Panoramic City Skyline Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Sky gradient from deep navy to warm dusk glow on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040D20] via-[#081B3C] to-[#0A244E]" />

        {/* Dusk Sunset Glow behind the central and right skyscrapers */}
        <div className="absolute right-1/4 top-1/4 w-[450px] h-[350px] bg-gradient-to-t from-[#F5A623]/25 via-amber-600/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute right-1/3 top-1/3 w-[300px] h-[200px] bg-amber-400/20 rounded-full blur-2xl" />

        {/* Left subtle wave / acoustic digital texture */}
        <div className="absolute left-0 inset-y-0 w-1/3 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
            <path d="M-50,50 Q100,120 180,70 T400,100" stroke="#38BDF8" strokeWidth="0.8" opacity="0.4" />
            <path d="M-50,90 Q120,160 220,110 T400,140" stroke="#38BDF8" strokeWidth="0.8" opacity="0.3" />
            <path d="M-50,130 Q140,200 250,150 T400,180" stroke="#38BDF8" strokeWidth="0.8" opacity="0.25" />
            <path d="M-50,170 Q160,240 280,190 T400,220" stroke="#38BDF8" strokeWidth="0.8" opacity="0.2" />
            <path d="M-50,210 Q180,280 300,230 T400,260" stroke="#38BDF8" strokeWidth="0.8" opacity="0.15" />
          </svg>
        </div>

        {/* High-detail Modern City Skyline Silhouette */}
        <div className="absolute right-0 bottom-0 w-3/4 sm:w-2/3 h-full opacity-60 sm:opacity-75">
          <svg className="w-full h-full" viewBox="0 0 1000 320" fill="none" preserveAspectRatio="xMaxYMax slice">
            
            {/* Distant background skyline */}
            <g opacity="0.35" fill="#040D1E">
              <rect x="250" y="90" width="42" height="230" rx="1" />
              <rect x="310" y="110" width="38" height="210" rx="1" />
              <polygon points="271,55 270,90 272,90" stroke="#040D1E" strokeWidth="2" />
              <rect x="360" y="130" width="48" height="190" />
              <rect x="420" y="80" width="35" height="240" />
              <polygon points="437,40 436,80 438,80" stroke="#040D1E" strokeWidth="2" />
              <rect x="470" y="120" width="55" height="200" />
              <rect x="540" y="100" width="36" height="220" />
              <rect x="590" y="65" width="46" height="255" />
              <polygon points="613,25 612,65 614,65" stroke="#040D1E" strokeWidth="2" />
              <rect x="650" y="140" width="40" height="180" />
              <rect x="710" y="95" width="52" height="225" />
              <polygon points="736,50 735,95 737,95" stroke="#040D1E" strokeWidth="2" />
              <rect x="780" y="125" width="44" height="195" />
              <rect x="840" y="150" width="50" height="170" />
              <rect x="910" y="110" width="60" height="210" />
            </g>

            {/* Midground high-rise towers with illuminated window grids */}
            <g opacity="0.65" fill="#030914">
              {/* Tower 1 */}
              <rect x="380" y="110" width="44" height="210" rx="1" />
              <polygon points="402,60 401,110 403,110" stroke="#0A2246" strokeWidth="2" />
              
              {/* Tower 2: Tall Central Spire */}
              <rect x="450" y="55" width="52" height="265" rx="2" />
              <polygon points="476,15 475,55 477,55" stroke="#F5A623" strokeWidth="2.5" />
              <rect x="460" y="68" width="32" height="4" fill="#F5A623" opacity="0.5" />
              
              {/* Tower 3 */}
              <rect x="520" y="115" width="42" height="205" rx="1" />
              
              {/* Tower 4: Landmark skyscraper */}
              <rect x="580" y="70" width="50" height="250" rx="2" />
              <polygon points="605,30 604,70 606,70" stroke="#38BDF8" strokeWidth="2" />
              <rect x="590" y="85" width="30" height="4" fill="#38BDF8" opacity="0.6" />

              {/* Tower 5 */}
              <rect x="650" y="95" width="46" height="225" rx="1" />
              <polygon points="673,50 672,95 674,95" stroke="#0A2246" strokeWidth="2" />

              {/* Tower 6: Right prominent tower */}
              <rect x="720" y="115" width="48" height="205" rx="1" />
              <polygon points="744,70 743,115 745,115" stroke="#F5A623" strokeWidth="2" />

              {/* Tower 7 */}
              <rect x="785" y="135" width="40" height="185" rx="1" />
              <rect x="840" y="160" width="45" height="160" />
            </g>

            {/* Foreground silhouettes & park trees */}
            <g fill="#02060D">
              {/* Lush Tree foliage silhouette at the bottom */}
              <circle cx="280" cy="285" r="50" />
              <circle cx="330" cy="275" r="45" />
              <circle cx="370" cy="290" r="55" />
              <circle cx="430" cy="280" r="50" />
              <circle cx="480" cy="270" r="48" />
              <circle cx="530" cy="285" r="55" />
              <circle cx="590" cy="275" r="52" />
              <circle cx="650" cy="280" r="58" />
              <circle cx="710" cy="270" r="48" />
              <circle cx="760" cy="285" r="52" />
              <circle cx="820" cy="275" r="50" />
              <circle cx="880" cy="285" r="56" />
              <circle cx="940" cy="280" r="50" />
              <circle cx="990" cy="290" r="55" />
              <rect x="200" y="295" width="800" height="30" />
            </g>
          </svg>
        </div>

        {/* Gradient dark mask over left area to guarantee 100% text legibility */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 bg-gradient-to-r from-[#040D20] via-[#040D20]/95 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Heading, Subtitle & Free Consultation CTA */}
          <div className="max-w-2xl space-y-3.5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight">
              Ready to Grow Your Business Online?
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200/90 leading-relaxed font-normal">
              Let&apos;s build a data-driven digital marketing strategy that brings real results.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className="button inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Consultation</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: "Your Growth Our Focus" with the curved yellow swoosh */}
          <div className="flex items-center justify-start lg:justify-end lg:pr-8 select-none">
            <div className="relative text-right sm:text-center lg:text-right">
              
              {/* Handwritten Brush Calligraphy Script */}
              <div
                className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold italic transform -rotate-3"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                <div>Your Growth</div>
                <div className="pl-6 sm:pl-8">Our Focus</div>
              </div>

              {/* Curved Yellow/Gold Swoosh Underneath */}
              <div className="w-44 sm:w-56 lg:w-64 h-5 mt-1 ml-auto">
                <svg className="w-full h-full" viewBox="0 0 240 24" fill="none">
                  <path
                    d="M 10 18 Q 120 4 235 2"
                    stroke="#FED45B"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 40 19 Q 140 8 220 4"
                    stroke="#F5A623"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
