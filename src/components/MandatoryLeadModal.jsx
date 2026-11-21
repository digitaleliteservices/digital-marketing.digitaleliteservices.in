import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
  ShieldCheck,
  X,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { submitLeadEnquiry } from '../services/api';
import DESLogo from "../assets/images/des_logo.png";

export const MandatoryLeadModal = ({ isOpen, onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'All-in-One Digital Marketing Suite',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      setErrorMsg('Please enter a valid phone number (at least 7 to 15 digits).');
      return;
    }

    setLoading(true);

    try {
      // Compose message to include selected service for sales team
      const serviceContext = formData.service || 'Digital Marketing Services';
      const customNotes = formData.message.trim() ? ` Notes: ${formData.message.trim()}` : '';
      const composedMessage = `[Strategy Consultation Request] Interested in: ${serviceContext}.${customNotes}`;

      await submitLeadEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: composedMessage,
      });

      // Save submission state to storage
      try {
        sessionStorage.setItem('des_lead_submitted', 'true');
        localStorage.setItem('des_lead_submitted', 'true');
      } catch {
        // Safe fallback
      }

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  const handleFinish = () => {
    onSuccess?.();
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-white text-slate-900 rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.45)] overflow-hidden my-auto animate-in zoom-in-95 duration-200 border border-slate-200/80">
        
        {/* Prominent Circular Close Button (X) */}
        <button
          type="button"
          onClick={() => onClose?.()}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Close lead popup"
          title="Close and continue to website"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-5 sm:p-7 flex flex-col justify-center bg-white">
          {success ? (
            /* Dedicated Thank You Screen */
            <div className="py-6 sm:py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <img src={DESLogo} alt="DES Logo" className="w-full h-full object-contain rounded-full" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Thank You, {formData.name.split(' ')[0]}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your consultation request has been received. Our senior Bangalore digital growth strategist will contact you within <strong className="text-slate-900">2 business hours</strong>.
                </p>
              </div>

              {/* Consultation Details Card */}
              <div className="bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-left space-y-1.5 shadow-xs">
                <div className="text-xs text-slate-700 space-y-1">
                  <div><strong>Selected Service:</strong> {formData.service}</div>
                  <div><strong>Contact:</strong> {formData.phone} • {formData.email}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleFinish}
                  style={{
                    background: 'linear-gradient(135deg, #FFB800 0%, #F5A623 50%, #E28A05 100%)',
                  }}
                  className="w-full py-3.5 px-6 rounded-full text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Landing Page</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <div className="space-y-4">
              {/* Form Heading & Brand Callout */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shadow-xs">
                    <img src={DESLogo} alt="Digital Elite Services Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-slate-900 uppercase block leading-none">
                      Digital Elite Service
                    </span>
                    <span className="text-[10px] text-amber-600 font-semibold block mt-0.5">
                      Bangalore Digital Growth Agency
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Accelerate Your Digital Growth With{' '}
                  <span className="text-[#e28a05]">
                    DES
                  </span>
                </h2>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Connect with our senior digital strategists for a custom marketing audit and high-converting growth roadmap.
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                {errorMsg && (
                  <div className="p-2.5 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl font-medium leading-snug">
                    {errorMsg}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      required
                      disabled={loading}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Email & Phone Dual Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Email Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="tel"
                        required
                        disabled={loading}
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection Dropdown */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      disabled={loading}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 pr-8 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 outline-none transition-all appearance-none shadow-xs font-medium cursor-pointer"
                    >
                      <option value="All-in-One Digital Marketing Suite">All-in-One Digital Marketing Suite</option>
                      <option value="Search Engine Optimization - SEO">Search Engine Optimization - SEO</option>
                      <option value="Pay-Per-Click & Google Ads">Pay-Per-Click & Google Ads</option>
                      <option value="Social Media Marketing & Meta Ads">Social Media Marketing & Meta Ads</option>
                      <option value="High-Converting Website & Landing Pages">High-Converting Website & Landing Pages</option>
                      <option value="Custom Marketing Strategy & Consultation">Custom Marketing Strategy & Consultation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Requirements / Custom Note */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Your Requirements / Goals (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <textarea
                      rows={2}
                      disabled={loading}
                      placeholder="Share your business goals (e.g. generate more leads, scale brand reach...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none transition-all resize-none shadow-xs"
                    />
                  </div>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-1.5">
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: 'linear-gradient(135deg, #FFB800 0%, #F5A623 50%, #E28A05 100%)',
                    }}
                    className="w-full py-3 px-5 rounded-full text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/30 hover:shadow-amber-500/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>GET FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 text-slate-950" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy & Trust Guarantee */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-0.5 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Privacy Protected • Zero Spam • Instant Bangalore Expert Call</span>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
