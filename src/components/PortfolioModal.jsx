import React from 'react';
import { X, TrendingUp } from 'lucide-react';

export const PortfolioModal = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  const caseStudies = [
    {
      title: 'Multispecialty Healthcare Clinic',
      location: 'Sahakar Nagar, Bangalore',
      service: 'Local SEO & Google Business Profile Domination',
      stats: '+310% Inbound Patient Calls in 90 Days',
      description: 'Ranked #1 in Google Maps Local 3-Pack for 18 primary keywords across North Bangalore.',
    },
    {
      title: 'B2B Logistics Software Platform',
      location: 'Indiranagar, Bangalore',
      service: 'High-Intent Google Ads & Technical SEO',
      stats: '4.2x ROAS & 68% Lower Cost-Per-Acquisition',
      description: 'Scaled qualified product demo inquiries from 12/month to 85/month within 4 months.',
    },
    {
      title: 'Artisan Coffee & Bakery Chain',
      location: 'Koramangala, Bangalore',
      service: 'Instagram Reels & Influencer Community Building',
      stats: '1.4M+ Organic Video Views & 42,000 New Followers',
      description: 'Created viral local food influencer campaigns driving weekend queues out the door.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#080E21] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#F5A623]" />
            <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
              CLIENT CASE STUDIES
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Recent Bangalore Client Success Stories
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Proven commercial track record delivering measurable ROI across Bangalore businesses.
          </p>
        </div>

        {/* List of Case Studies */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-left">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-amber-300 transition-colors shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <h4 className="text-sm font-bold text-slate-900">
                  {study.title}
                </h4>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                  {study.location}
                </span>
              </div>

              <p className="text-xs font-medium text-slate-500 mb-2">
                Service: <span className="text-slate-700 font-semibold">{study.service}</span>
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{study.stats}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Ready to achieve similar results for your company?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#F5A623] hover:bg-[#e89a17] text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-md transition-colors cursor-pointer"
          >
            Get Custom Growth Strategy
          </button>
        </div>

      </div>
    </div>
  );
};
