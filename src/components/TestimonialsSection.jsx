import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

export const TestimonialsSection = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & Managing Director',
      company: 'Apex Ortho Clinic & Diagnostics',
      location: 'Sahakar Nagar, Bangalore',
      service: 'Local SEO & Google Ads',
      category: 'seo',
      rating: 5,
      metric: '+280% Inbound Calls',
      quote:
        'Within 4 months of partnering with Digital Elite Services, our clinic went from invisible on Google Maps to ranking in the Top 3 for every high-intent orthopedic keyword in North Bangalore. Patient consultations booked through our website surged by nearly 3x.',
    },
    {
      id: 2,
      name: 'Pooja Narang',
      role: 'Head of Growth',
      company: 'Zenith Logistics & Supply Chain',
      location: 'Whitefield, Bangalore',
      service: 'PPC & B2B Lead Gen',
      category: 'ppc',
      rating: 5,
      metric: '54% Lower CPA',
      quote:
        'Their negative keyword shielding and conversion landing pages completely transformed our Google Ads ROI. We cut wasted spend on irrelevant clicks and dropped our cost per qualified enterprise lead from ₹2,200 to under ₹1,000.',
    },
    {
      id: 3,
      name: 'Vikramaditya Rao',
      role: 'Co-Founder & CEO',
      company: 'Stride FinTech Solutions',
      location: 'Indiranagar, Bangalore',
      service: 'Conversion Architecture & Web Design',
      category: 'web',
      rating: 5,
      metric: '99 Lighthouse & 3.8x CRO',
      quote:
        'The landing page they designed and coded is blazing fast—consistently scoring 99 on Google Lighthouse. More importantly, the visitor-to-demo conversion rate jumped from 1.4% to 5.2%. They understand commercial conversion, not just aesthetics.',
    },
    {
      id: 4,
      name: 'Ananya Deshmukh',
      role: 'Marketing Director',
      company: 'Urban Living Real Estate',
      location: 'Hebbal, Bangalore',
      service: 'Full-Funnel Digital Growth',
      category: 'all',
      rating: 5,
      metric: '₹4.2 Cr Pipeline',
      quote:
        'Unlike traditional agencies that send useless vanity reports, Digital Elite Services tracks every single rupee to real property site visits and buyer bookings. Their weekly transparent breakdowns keep our leadership team completely confident.',
    },
    {
      id: 5,
      name: 'Dr. Srinivas Murthy',
      role: 'Chief Medical Officer',
      company: 'Murthy Multispecialty Healthcare',
      location: 'Yelahanka, Bangalore',
      service: 'Local Search & Reputation',
      category: 'seo',
      rating: 5,
      metric: '4.9★ from 320+ Reviews',
      quote:
        'Their local search and review generation engine gave our center the credibility it deserved. Our Google Business Profile now generates over 450 direct direction requests and calls every single month.',
    },
    {
      id: 6,
      name: 'Karthik Subbaraj',
      role: 'Managing Partner',
      company: 'CloudMatrix IT Consulting',
      location: 'Koramangala, Bangalore',
      service: 'LinkedIn Thought Leadership & PPC',
      category: 'ppc',
      rating: 5,
      metric: '18 Enterprise RFPs',
      quote:
        'Their multi-channel strategy for LinkedIn and Google Search attracted top-tier enterprise CTOs and founders. We closed three 7-figure annual contracts directly attributed to their campaigns.',
    },
  ];

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory || t.category === 'all');

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
                TESTIMONIALS & CLIENT SUCCESS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] uppercase tracking-tight">
              REAL CLIENT EXPERIENCES & MEASURABLE OUTCOMES
            </h2>

            <p className="text-xs sm:text-sm text-[#4A5D78] leading-relaxed">
              Read how Bangalore businesses, healthcare clinics, and B2B enterprises accelerated revenue, reduced customer acquisition costs, and dominated search visibility with our data-driven growth engine.
            </p>
          </div>

          {/* Social Proof Stats Badge */}
          <div className="bg-[#F8FBFE] border border-[#CCE0FA] rounded-2xl p-4 sm:p-5 shrink-0 flex items-center gap-4 shadow-2xs">
            <div className="text-center border-r border-[#DCE8F6] pr-4">
              <div className="text-2xl sm:text-3xl font-black text-[#071D38]">4.9<span className="text-[#F5A623]">★</span></div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#4A5D78]">Client Rating</div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F5A623] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5A623]" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#071D38]">
                45+ Verified Bangalore Brands
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                100% Commercial Attribution
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Success Stories' },
            { id: 'seo', label: 'SEO & Local Search' },
            { id: 'ppc', label: 'Google & Paid Ads' },
            { id: 'web', label: 'Web Design & Conversion' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#071D38] text-white shadow-md'
                  : 'bg-[#F4F9FD] text-[#4A5D78] hover:bg-[#e8f2fc] hover:text-[#071D38] border border-[#DCE8F6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FBFE] hover:bg-white rounded-3xl border border-[#DCE8F6] hover:border-[#CCE0FA] p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Top Row: Stars + Result Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F5A623]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5A623]" />
                    ))}
                  </div>

                  <span className="bg-[#FEF3D6] text-[#D97706] text-[11px] font-black px-2.5 py-1 rounded-full border border-amber-200 shadow-2xs">
                    {item.metric}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-[11px] font-bold text-[#0057B7] uppercase tracking-wider mb-3">
                  {item.service}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#CCE0FA] absolute -top-2 -left-1 opacity-50 -z-0" />
                  <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed relative z-10 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#071D38] text-[#FED45B] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  {item.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-[#071D38] truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] truncate">
                    {item.role}, <span className="font-semibold text-[#071D38]">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-[#F4F9FD] rounded-3xl border border-[#CCE0FA] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#071D38]">
              Ready to write your company&apos;s digital success story?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5D78] mt-1">
              Join dozens of high-growth Bangalore businesses scaling predictably with Digital Elite Services.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="button shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs sm:text-sm font-bold rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider"
          >
            <span>Request a Custom Growth Plan</span>
            <ArrowRight className="w-4 h-4 text-[#071D38]" />
          </button>
        </div>

      </div>
    </section>
  );
};
