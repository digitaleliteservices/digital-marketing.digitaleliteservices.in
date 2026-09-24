import React from 'react';
import { X } from 'lucide-react';

export const LegalModal = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#080E21] p-5 text-white flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-left text-xs sm:text-sm text-slate-600 space-y-3.5 max-h-[60vh] overflow-y-auto">
          {isPrivacy ? (
            <>
              <p>
                <strong>Digital Elite Services</strong> is committed to safeguarding your personal and commercial data. When you submit an inquiry or consultation request, we only use your provided contact details to communicate regarding your marketing strategy and performance proposals.
              </p>
              <p>
                We do not sell, rent, or trade your lead information to third parties. All client analytics, credentials, and proprietary advertising campaign data are protected by strict non-disclosure standards.
              </p>
              <p>
                For questions regarding data processing or to request removal of your contact details from our records, email us at <strong className="text-slate-900">info@digitaleliteservices.in</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Digital Elite Services</strong>. By engaging with our services, requesting a consultation, or using our website, you agree to our standard operational terms.
              </p>
              <p>
                All strategic roadmaps, campaign audits, and proposals are tailored for individual business needs. Performance benchmarks (such as ROAS, keyword ranks, and lead generation volumes) reflect past client data and are subject to market conditions, algorithm updates, and client budget allocations.
              </p>
              <p>
                All creative graphic assets, copy, and website code developed by Digital Elite Services for a client become the full intellectual property of the client upon complete project settlement.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
