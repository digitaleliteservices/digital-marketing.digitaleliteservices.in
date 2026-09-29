import React from 'react';
import groupImg1 from '../assets/images/group-img-1.png';
import groupImg2 from '../assets/images/group-img-2.png';
import groupImg3 from '../assets/images/group-img-3.png';


/**
 * ShowcaseSection
 * 
 * "SHOWCASING OUR WORK"
 * Direct continuous right-to-left flowing loop of showcase graphics 
 * without card wrappers, borders, or hover interactions.
 */
export const ShowcaseSection = () => {
  // Duplicated image sequence for seamless continuous marquee loop (0% to -50% translateX)
  const images = [groupImg1, groupImg2, groupImg3, groupImg1, groupImg2, groupImg3];

  return (
    <section 
      id="showcase" 
      className="relative z-10 bg-[#F4F9FD] border-b border-slate-200/70 py-14 sm:py-18 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#F5A623]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0057B7] uppercase">
              CREATIVE EXCELLENCE & DELIVERABLES
            </span>
            <span className="w-6 h-0.5 bg-[#F5A623]" />
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#071D38] tracking-tight leading-tight uppercase">
            SHOWCASING OUR WORK
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
            A glimpse of client campaign deliverables, high-converting landing pages, creative ads, 
            and marketing assets engineered for real business scale.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with Smooth Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-2">
        
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#F4F9FD] to-transparent z-10" />
        
        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#F4F9FD] to-transparent z-10" />

        {/* Right-to-Left Continuous Marquee Strip */}
        <div className="flex overflow-hidden">
          <div 
            className="animate-marquee-left flex items-center gap-4 sm:gap-6"
            style={{ animationDuration: '45s' }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Showcasing Our Work"
                loading={index < 2 ? 'eager' : 'lazy'}
                className="h-64 sm:h-80 md:h-96 lg:h-[430px] w-auto max-w-none shrink-0 object-contain select-none pointer-events-none"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

