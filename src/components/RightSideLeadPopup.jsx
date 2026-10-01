import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  Send,
  ArrowRight,
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

  // Timer ref for auto-dismissing Thank You screen
  const autoDismissTimerRef = useRef(null);

  // Cleanup helper
  const clearTimers = () => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
  };

  // Close popup and cleanup
  useEffect(() => {
    return () => clearTimers();
  }, []);

  // Listen for Escape key to close popup when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle user closing the popup
  const handleClose = () => {
    setIsOpen(false);
    clearTimers();

    if (success) {
      onLeadSubmitted?.();
    }
  };

  // Handle Done button on Thank You screen
  const handleDone = () => {
    setIsOpen(false);
    clearTimers();
    onLeadSubmitted?.();
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // Handle opening popup via blooming button
  const handleOpen = () => {
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

  // Only hide if landing page is not yet open
  if (!isLandingPageOpen) return null;

  return (
    <aside
      aria-label="Lead Enquiry Floating Widget"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Blooming "Start Now" Action Button matching user design */}
      {!isOpen && (
        <div className="relative group flex items-center justify-center select-none">
          {/* 3 Concentric Expanding Blooming Wave Rings */}
          <div
            className="absolute inset-0 rounded-full animate-bloom-wave-1 pointer-events-none"
            style={{
              border: '2px solid rgba(254, 240, 40, 0.85)',
              background: 'radial-gradient(ellipse at center, rgba(253, 243, 40, 0.4) 0%, rgba(255, 202, 0, 0.15) 60%, transparent 80%)',
              boxShadow: '0 0 25px rgba(250, 240, 40, 0.6), inset 0 0 15px rgba(250, 240, 40, 0.3)',
            }}
          />
          <div
            className="absolute inset-0 rounded-full animate-bloom-wave-2 pointer-events-none"
            style={{
              border: '1.8px solid rgba(254, 240, 40, 0.7)',
              background: 'radial-gradient(ellipse at center, rgba(253, 243, 40, 0.3) 0%, rgba(255, 202, 0, 0.1) 60%, transparent 80%)',
              boxShadow: '0 0 35px rgba(250, 240, 40, 0.5), inset 0 0 20px rgba(250, 240, 40, 0.25)',
            }}
          />
          <div
            className="absolute inset-0 rounded-full animate-bloom-wave-3 pointer-events-none"
            style={{
              border: '1.5px solid rgba(254, 240, 40, 0.55)',
              background: 'radial-gradient(ellipse at center, rgba(253, 243, 40, 0.2) 0%, transparent 75%)',
              boxShadow: '0 0 45px rgba(250, 240, 40, 0.4)',
            }}
          />

          {/* Ambient Breathing Yellow Bloom Aura */}
          <div
            className="absolute -inset-5 rounded-full pointer-events-none animate-aura-bloom"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(253, 243, 40, 0.7) 0%, rgba(255, 202, 0, 0.3) 50%, transparent 75%)',
              filter: 'blur(20px)',
            }}
          />

          {/* White Blooming Burst Rays radiating around the right curve of the pill */}
          <svg
            className="absolute -top-2.5 -right-3.5 w-12 h-16 pointer-events-none drop-shadow-[0_0_3px_rgba(255,255,255,0.95)] animate-burst-pulse z-20"
            viewBox="0 0 48 64"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          >
            {/* Top 3 rays */}
            <line x1="16" y1="12" x2="20" y2="4" />
            <line x1="26" y1="18" x2="35" y2="11" />
            <line x1="32" y1="28" x2="43" y2="28" />
            {/* Bottom 2 rays */}
            <line x1="28" y1="41" x2="37" y2="48" />
            <line x1="19" y1="49" x2="25" y2="58" />
          </svg>

          {/* Core Pill Action Button */}
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Start Now - Open Lead Enquiry Form"
            aria-expanded={isOpen}
            title="Start Now"
            style={{
              backgroundColor: '#FCF026',
              background: 'linear-gradient(90deg, #E6F835 0%, #FCF026 45%, #FFCA00 100%)',
              boxShadow: '0 0 35px rgba(250, 240, 40, 0.7), 0 0 65px rgba(255, 202, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.22), inset 0 2px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(215, 165, 0, 0.35)',
            }}
            className="relative flex items-center gap-3 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full text-[#0A1024] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 select-none z-10 font-bold group animate-button-bloom overflow-hidden"
          >
            {/* Glossy Light Shimmer Sweep across the button */}
            <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/45 to-transparent pointer-events-none animate-bloom-shimmer" />
            {/* Origami Paper Plane Icon with 3D Fold Crease */}
            <svg
              className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
            >
              {/* Upper Wing */}
              <path
                d="M21.5 2.5L2 10.2L9.8 13.8L21.5 2.5Z"
                fill="#0A1024"
              />
              {/* Lower Wing */}
              <path
                d="M21.5 2.5L14 22L9.8 13.8L21.5 2.5Z"
                fill="#0A1024"
              />
              {/* Keel / Underbody fold */}
              <path
                d="M9.8 13.8L12.5 17.5L13.8 14.5L9.8 13.8Z"
                fill="#050814"
              />
              {/* Center Crease Highlight Line */}
              <path
                d="M21.5 2.5L9.8 13.8"
                stroke="#FDF328"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            {/* Start Now Label */}
            <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#0A1024]">
              Start Now
            </span>

            {/* Right Arrow Icon */}
            <svg
              className="w-5 h-5 shrink-0 text-[#0A1024] group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A1024"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </button>
        </div>
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
