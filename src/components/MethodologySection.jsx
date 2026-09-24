import React from 'react';
import { Search, Compass, Rocket, BarChart2, Target, HeartHandshake } from 'lucide-react';

export const MethodologySection = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand Your Business',
      description: 'Analyze your goals, audience, industry and competitors.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategize & Plan',
      description: 'Build a custom roadmap with clear KPIs and milestones.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Execute Campaigns',
      description: 'Put strategy into action across all channels.',
      icon: Rocket,
    },
    {
      num: '04',
      title: 'Measure Performance',
      description: 'Track results, gain insights and identify opportunities.',
      icon: BarChart2,
    },
    {
      num: '05',
      title: 'Optimize & Scale',
      description: 'Improve performance and scale what works.',
      icon: Target,
    },
  ];

  return (
    <section id="methodology" className="py-16 sm:py-20 lg:py-24 bg-[#F8FBFE] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
              THE STRATEGIC ARCHITECTURE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] uppercase tracking-tight">
            OUR 5-STEP STRATEGIC GROWTH PROCESS
          </h2>
        </div>

        {/* Process Flow Cards Container */}
        <div className="bg-white rounded-3xl border border-[#CCE0FA] shadow-xl shadow-blue-500/5 p-6 sm:p-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-stretch relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col justify-between">
                  <div>
                    {/* Top Icon in Yellow Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#D97706] mb-4 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Step Number */}
                    <span className="text-sm font-black text-[#071D38] block mb-1">
                      {step.num}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#071D38] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[13px] text-[#4A5D78] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute -right-3 top-6 text-[#3B82F6] z-10 pointer-events-none">
                      <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="4" y1="12" x2="19" y2="12" />
                        <polyline points="13 6 19 12 13 18" />
                      </svg>
                    </div>
                  )}

                  {/* Connecting Arrow for 5th step to outcome */}
                  {idx === steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute -right-4 top-6 text-[#3B82F6] z-10 pointer-events-none">
                      <svg className="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="4" y1="12" x2="19" y2="12" />
                        <polyline points="13 6 19 12 13 18" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
