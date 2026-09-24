import React from 'react';
import { ArrowRight, Users, Briefcase, Award } from 'lucide-react';
import teamPhoto from '../assets/images/agency_team_collaboration_1790156936204.jpg';

export const AboutSection = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#F5A623]" aria-hidden="true" />
              <span className="text-xs subheading-semibold tracking-wider text-slate-800 uppercase">
                YOUR TRUSTED DIGITAL MARKETING PARTNER IN BANGALORE
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title tracking-tight text-slate-900">
              Strategic Digital Marketing Solutions for Every Business
            </h2>

            {/* Description */}
            <p className="body-text text-slate-600">
              Choosing among the many Digital Marketing companies in Bangalore can be challenging. At <strong className="font-semibold text-slate-900">Digital Elite Services</strong>, we understand your business, target audience, competitors and objectives before creating a customized strategy. Our team combines creativity, technology, data and marketing expertise to connect your business with the right audience at the right time.
            </p>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="button group inline-flex items-center gap-2.5 px-6 py-3 bg-[#F5A623] hover:bg-[#e89a17] text-slate-950 text-sm sm:text-base rounded-full shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image & Floating Metrics Column */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
            
            {/* Main Team Photo with Rounded Borders */}
            <div className="relative w-full sm:w-2/3 rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
              <img
                src={teamPhoto}
                alt="Digital Elite Services Bangalore Team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Vertical Stats Cards Stack */}
            <div className="w-full sm:w-1/3 flex flex-row sm:flex-col gap-3.5 sm:gap-4 justify-between sm:justify-center">
              
              {/* Stat 1: 100+ Happy Clients */}
              <div className="flex-1 bg-white p-4 sm:p-4 rounded-xl border border-slate-100 shadow-md shadow-slate-100/80 hover:shadow-lg transition-shadow flex items-center sm:items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    100+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Stat 2: 150+ Projects Delivered */}
              <div className="flex-1 bg-white p-4 sm:p-4 rounded-xl border border-slate-100 shadow-md shadow-slate-100/80 hover:shadow-lg transition-shadow flex items-center sm:items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    150+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Stat 3: 5+ Years Experience */}
              <div className="flex-1 bg-white p-4 sm:p-4 rounded-xl border border-slate-100 shadow-md shadow-slate-100/80 hover:shadow-lg transition-shadow flex items-center sm:items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    5+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Years Experience
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
