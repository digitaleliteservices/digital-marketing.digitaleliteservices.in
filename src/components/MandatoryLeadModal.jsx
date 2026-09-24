import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Lock,
  Unlock,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { submitLeadEnquiry } from '../services/api';
import LogoImg from '../assets/images/logo.png';

export const MandatoryLeadModal = ({ isOpen, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Field-level validation
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
    if (!formData.message.trim()) {
      setErrorMsg('Please enter a message or describe your requirements.');
      return;
    }

    setLoading(true);

    try {
      await submitLeadEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // Save to storage
      try {
        sessionStorage.setItem('des_lead_submitted', 'true');
        localStorage.setItem('des_lead_submitted', 'true');
      } catch (err) {
        // Ignore storage errors in restricted iframes
      }

      setSuccess(true);
      setLoading(false);

      // Smoothly unlock after 1.2s to show success feedback
      setTimeout(() => {
        onSuccess?.();
      }, 1200);
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/35 backdrop-blur-xl sm:backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl text-slate-900 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_0_1px_1px_rgba(0,0,0,0.06)] border border-slate-200/90 overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Subtle Decorative Ambient Lighting */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Banner */}
        <div className="relative p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-b from-slate-50/90 via-slate-50/40 to-white">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-[#080E21] px-3.5 py-1.5 rounded-xl shadow-xs border border-slate-800 flex items-center">
                <img src={LogoImg} alt="Digital Elite Services" className="h-7 w-auto object-contain" />
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Unlock Full Access to <br className="hidden sm:inline" />
            <span className="text-[#e28a05]">Digital Elite Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
            Please complete this quick form to unlock customized digital marketing solutions, case studies, and strategic insights.
          </p>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-7 relative bg-white">
          {success ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Access Granted!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your enquiry has been received. Our senior Bangalore strategist will contact you shortly.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onSuccess?.()}
                  style={{ backgroundColor: '#F5A623', color: '#090d16' }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#F5A623] hover:bg-[#e69818] active:scale-[0.98] text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Unlock className="w-4 h-4 text-slate-950" />
                  <span>Enter Landing Page</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Full Name <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    disabled={loading}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Work / Personal Email <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    disabled={loading}
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone / WhatsApp Number <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    disabled={loading}
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Requirements / Message <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={3}
                    required
                    disabled={loading}
                    placeholder="Share your goals (e.g. SEO ranking, PPC leads, website redesign, social media...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-none shadow-xs"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: '#F5A623', color: '#090d16' }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#F5A623] hover:bg-[#e69818] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4 text-slate-950" />
                      <span>Submit & Unlock Landing Page</span>
                    </>
                  )}
                </button>
              </div>

              {/* Assurance note */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Privacy Guaranteed • Zero Spam • Instant Access</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
