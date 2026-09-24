import React from 'react';
import { Search, Users, Target, TrendingUp } from 'lucide-react';

export const TrueBusinessImpactSection = () => {
  const impacts = [
    {
      title: 'Search Visibility',
      description: 'Rank higher on search engines and get discovered by more potential customers.',
      icon: Search,
    },
    {
      title: 'Relevant Traffic',
      description: 'Attract the right audience with intent, not just clicks.',
      icon: Users,
    },
    {
      title: 'Quality Leads',
      description: 'Generate genuine leads that are ready to engage and buy.',
      icon: Target,
    },
    {
      title: 'Higher Conversions',
      description: 'Turn engagement into revenue with optimized experiences and clear CTAs.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="business-impact" className="py-16 sm:py-20 lg:py-24 bg-[#F4F9FD] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
              TRUE BUSINESS IMPACT
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] uppercase tracking-tight">
            RESULTS & MEANINGFUL BUSINESS OUTCOMES
          </h2>
        </div>

        {/* 4 Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#DCE8F6] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#FEF3D6] flex items-center justify-center text-[#071D38] shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#071D38] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A5D78] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
