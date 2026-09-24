import React from 'react';
import { Target, BarChart3, Share2, ShieldCheck, TrendingUp } from 'lucide-react';
import analyticsLaptopImg from '../assets/images/analytics_dashboard_laptop_1790156968673.jpg';

export const WhyUsSection = () => {
  const differentiators = [
    {
      id: 'customized',
      title: 'Customized Strategies',
      description: 'Tailored to your business goals and audience.',
      icon: Target,
      bg: 'bg-amber-50',
      border: 'border-amber-200/60',
      iconColor: 'text-[#F5A623]',
    },
    {
      id: 'data-driven',
      title: 'Data-Driven Marketing',
      description: 'Insights and analytics guide our decisions.',
      icon: BarChart3,
      bg: 'bg-amber-50',
      border: 'border-amber-200/60',
      iconColor: 'text-[#F5A623]',
    },
    {
      id: 'multi-channel',
      title: 'Multi-Channel Expertise',
      description: 'SEO, PPC, social media, content, websites and more.',
      icon: Share2,
      bg: 'bg-orange-50',
      border: 'border-orange-200/60',
      iconColor: 'text-orange-500',
    },
    {
      id: 'transparent',
      title: 'Transparent Approach',
      description: 'Clear reporting and honest communication.',
      icon: ShieldCheck,
      bg: 'bg-amber-50',
      border: 'border-amber-200/60',
      iconColor: 'text-[#F5A623]',
    },
    {
      id: 'growth-focused',
      title: 'Growth-Focused Execution',
      description: 'More visibility, engagement, leads and conversions.',
      icon: TrendingUp,
      bg: 'bg-orange-50',
      border: 'border-orange-200/60',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#fafafa] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual with Laptop, +245% Metric Badge & "Real Results Real Growth" */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white aspect-[4/3]">
              <img
                src={analyticsLaptopImg}
                alt="Google Analytics Traffic Growth Dashboard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Stat Badge (+245% Organic Traffic) */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
                    <span>+245%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium leading-none">
                    Organic Traffic
                  </div>
                </div>
              </div>

              {/* Hand-drawn Cursive Accent "Real Results / Real Growth" */}
              <div className="absolute bottom-8 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/60 shadow-sm hidden sm:block">
                <div className="font-handwriting text-slate-800 text-lg leading-tight rotate-[-4deg] select-none text-right">
                  <span className="block font-bold">Real Results</span>
                  <span className="block font-bold text-[#F5A623]">Real Growth</span>
                </div>
                <div className="flex justify-end pr-2 pt-0.5">
                  <svg className="w-8 h-5 text-slate-700 -rotate-12" viewBox="0 0 40 20" fill="none">
                    <path d="M5 5 C 15 2, 28 8, 32 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M26 15 L 33 15 L 31 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Differentiators */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#F5A623]" aria-hidden="true" />
              <span className="text-xs subheading-semibold tracking-wider text-slate-800 uppercase">
                WHY CHOOSE US
              </span>
            </div>

            {/* Title */}
            <h2 className="section-title tracking-tight text-slate-900">
              Why Digital Elite Services?
            </h2>

            {/* Subtitle */}
            <p className="body-text text-slate-600">
              We believe digital marketing should have a clear purpose. Here&apos;s what makes us different:
            </p>

            {/* 5 Features Grid / Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {differentiators.map((item, index) => {
                const IconComponent = item.icon;
                const isFullSpan = index === differentiators.length - 1 && differentiators.length % 2 !== 0;

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-amber-300 transition-colors ${
                      isFullSpan ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
