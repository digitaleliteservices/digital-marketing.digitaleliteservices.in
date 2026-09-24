import React from 'react';
import { X, Check, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const ServiceDetailModal = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
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
              {service.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {service.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-left">
          
          {/* Key Deliverables */}
          {service.details?.deliverables && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Strategic Deliverables
              </h4>
              <div className="space-y-2">
                {service.details.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#F5A623] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Metrics & Execution Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Execution Timeline</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">
                {service.details?.timeline}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Typical Impact</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">
                {service.details?.sampleMetric}
              </p>
            </div>
          </div>

          {/* Target Audience */}
          {service.details?.targetAudience && (
            <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/50 flex items-start gap-2.5">
              <Users className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-950">
                <strong>Best Suited For:</strong> {service.details.targetAudience}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="w-full py-3.5 bg-[#F5A623] hover:bg-[#e89a17] text-slate-950 font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Strategy Proposal for {service.title.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
