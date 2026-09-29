import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { submitLeadEnquiry } from '../services/api';

/**
 * RightSideLeadPopup
 * 
 * Floating lead capture popup on the right side of the landing page.
 * Bright / Light theme with warm amber brand accents.
 * Displays dedicated Thank You confirmation screen upon successful form submission.
 */
export const RightSideLeadPopup = ({ isLandingPageOpen, isLeadSubmitted, onLeadSubmitted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // Timer refs
  const reappearTimerRef = useRef(null);
  const initialDelayTimerRef = useRef(null);
  const autoDismissTimerRef = useRef(null);

  // Cleanup helper
  const clearTimers = () => {
    if (reappearTimerRef.current) {
      clearTimeout(reappearTimerRef.current);
      reappearTimerRef.current = null;
    }
    if (initialDelayTimerRef.current) {
      clearTimeout(initialDelayTimerRef.current);
      initialDelayTimerRef.current = null;
    }
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
  };

  // When landing page opens and user hasn't submitted, show popup after a brief smooth entrance delay
  useEffect(() => {
    if (isLandingPageOpen && !isLeadSubmitted) {
      clearTimers();
      initialDelayTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // 1-second initial delay after landing page unlocks
    } else if (!success) {
      setIsOpen(false);
      clearTimers();
    }

    return () => clearTimers();
  }, [isLandingPageOpen, isLeadSubmitted, success]);

  // Handle user closing the popup
  const handleClose = () => {
    setIsOpen(false);
    clearTimers();

    // If closing after success, finalize lead submission flag
    if (success) {
      onLeadSubmitted?.();
      return;
    }

    if (!isLeadSubmitted) {
      // Re-trigger popup after 10 seconds if dismissed without submitting
      reappearTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 10000); // 10 seconds = 10,000 ms
    }
  };

  // Handle Done button on Thank You screen
  const handleDone = () => {
    setIsOpen(false);
    clearTimers();
    onLeadSubmitted?.();
  };

  // Handle opening manually via floating pill if user wants it sooner
  const handleManualOpen = () => {
    clearTimers();
    setIsOpen(true);
  };

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
    if (!formData.message.trim()) {
      setErrorMsg('Please describe your requirement or goal.');
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

      // Mark as submitted in local storage
      try {
        sessionStorage.setItem('des_lead_submitted', 'true');
        localStorage.setItem('des_lead_submitted', 'true');
      } catch (err) {
        // Safe fallback
      }

      setLoading(false);
      setSuccess(true);
      clearTimers();

      // Keep Thank You message visible for 8 seconds before auto-dismissing (or user clicks Done)
      autoDismissTimerRef.current = setTimeout(() => {
        setIsOpen(false);
        onLeadSubmitted?.();
      }, 8000);
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  // Only hide if landing page is not open, or if lead was already submitted previously before opening
  if (!isLandingPageOpen || (isLeadSubmitted && !success)) return null;

  return (
    <aside
      aria-label="Lead Enquiry Floating Widget"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Minimized Pill Button: Shown when popup is closed (counts down to 10s or allows 1-click reopen) */}
      {!isOpen && !success && (
        <button
          type="button"
          onClick={handleManualOpen}
          aria-label="Open Quick Enquiry Form"
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-slate-200/90 hover:border-amber-400 transition-all duration-300 hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5A623]"></span>
          </span>
          <span className="text-xs font-bold tracking-wide text-slate-800">Get Free Proposal</span>
          <Sparkles className="w-4 h-4 text-[#e28a05] group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Expanded Right-Side Popup Form - Bright / Light Theme */}
      {isOpen && (
        <div
          className="relative w-[calc(100vw-2rem)] sm:w-[380px] md:w-[390px] bg-white text-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22),0_0_1px_1px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col animate-in fade-in slide-in-from-right-8 duration-300"
        >
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute -top-14 -right-14 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-14 -left-14 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar */}
          <div className="relative p-5 pb-4 border-b border-slate-100 bg-gradient-to-b from-amber-50/50 via-slate-50/30 to-white">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200/80 shadow-xs"
              aria-label="Close lead popup"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {success ? (
              <div>
                <div className="inline-flex items-center gap-1.5 mb-1.5">
                  <span className="w-4 h-0.5 bg-emerald-500" />
                  <span className="text-[10px] font-bold tracking-widest text-emerald-700 uppercase flex items-center gap-1">
                    CONFIRMATION
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug pr-8">
                  Thank You for Your <span className="text-[#e28a05]">Enquiry</span>
                </h3>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 mb-1.5">
                  <span className="w-4 h-0.5 bg-[#F5A623]" />
                  <span className="text-[10px] font-bold tracking-widest text-amber-700 uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#e28a05] fill-[#e28a05]" />
                    FAST PROPOSAL
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug pr-8">
                  Grow Your Business With <span className="text-[#e28a05]">DES</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Enquire now for a tailored growth audit & custom proposal from our Bangalore strategists.
                </p>
              </div>
            )}
          </div>

          {/* Form Content / Dedicated Thank You Screen */}
          <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(90vh-140px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {success ? (
              <div className="py-4 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                </div>
                
                <div className="space-y-1">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    Enquiry Submitted Successfully
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 pt-1">
                    Thank You, {formData.name ? formData.name.split(' ')[0] : 'there'}!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                    Your enquiry has been received. Our senior Bangalore digital marketing strategist will review your requirements and contact you within <strong className="text-slate-900">2 business hours</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 text-left text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct Hotline:</span>
                    <span className="font-semibold text-slate-800">+91 98765 43210</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-slate-800">Sahakar Nagar, Bangalore</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDone}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#080E21] hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                {errorMsg && (
                  <div className="p-2.5 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl leading-snug">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-[#e28a05]">*</span>
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

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Work / Personal Email <span className="text-[#e28a05]">*</span>
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

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-[#e28a05]">*</span>
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

                {/* Requirements / Message */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Requirements / Message <span className="text-[#e28a05]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <textarea
                      rows={2}
                      required
                      disabled={loading}
                      placeholder="Share your goals (e.g. SEO, PPC leads, website redesign...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/10 rounded-xl text-xs text-slate-900 placeholder-slate-400 outline-none transition-all resize-none shadow-xs"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ backgroundColor: '#F5A623', color: '#090d16' }}
                    className="w-full py-3 px-4 rounded-xl bg-[#F5A623] hover:bg-[#e69818] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed font-bold text-xs shadow-md shadow-amber-500/25 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-950" />
                        <span>Submitting Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Strategy Proposal</span>
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Badge */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-0.5 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Privacy • No Spam Guarantee</span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};
