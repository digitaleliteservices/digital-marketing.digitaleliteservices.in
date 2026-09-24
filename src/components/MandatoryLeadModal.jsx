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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-[#040914]/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#080E21] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-auto">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Banner */}
        <div className="relative p-6 sm:p-7 border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <img src={LogoImg} alt="Digital Elite Services" className="h-9 w-auto object-contain" />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#FED45B] text-[11px] font-semibold tracking-wide uppercase">
              <Lock className="w-3 h-3 text-[#FED45B]" />
              <span>Mandatory Access Form</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            Unlock Full Access to <br className="hidden sm:inline" />
            <span className="text-[#F5A623]">Digital Elite Services</span>
          </h2>

         
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-7 relative">
          {success ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-white">Access Granted!</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry has been received. Our senior Bangalore strategist will contact you shortly.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onSuccess?.()}
                  className="w-full py-3.5 px-6 rounded-full bg-[#F5A623] hover:bg-[#e69818] active:scale-95 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Enter Landing Page</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="p-3 text-xs bg-rose-500/15 border border-rose-500/30 text-rose-300 rounded-xl">
                  {errorMsg}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Your Full Name <span className="text-[#F5A623]">*</span>
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
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#F5A623] focus:bg-white/10 rounded-xl text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Work / Personal Email <span className="text-[#F5A623]">*</span>
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
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#F5A623] focus:bg-white/10 rounded-xl text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Phone / WhatsApp Number <span className="text-[#F5A623]">*</span>
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
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#F5A623] focus:bg-white/10 rounded-xl text-sm text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Your Requirements / Message <span className="text-[#F5A623]">*</span>
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
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#F5A623] focus:bg-white/10 rounded-xl text-sm text-white placeholder-slate-400 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-[#F5A623] hover:bg-[#e69818] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 Access requires one-time verification. Zero spam, complete data privacy guaranteed.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
