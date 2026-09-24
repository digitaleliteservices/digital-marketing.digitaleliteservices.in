import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { submitLeadEnquiry } from '../services/api';

export const LeadEnquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

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
      setErrorMsg('Please provide a valid email address.');
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
      setErrorMsg('Please describe your requirements or query.');
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

      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <section id="enquiry" className="relative py-20 lg:py-24 bg-[#060D1E] text-white overflow-hidden border-t border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Trust Badges, Direct Contacts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#F5A623]" />
              <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">
                DIRECT ENQUIRY & PROPOSAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Let&apos;s Build a Strategy That Drives <br />
              <span className="text-[#F5A623]">Measurable Growth</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fill out the enquiry form with your project details. Our Bangalore growth team will review your requirements and provide an actionable strategy and proposal within 2 hours.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F5A623]/15 text-[#F5A623] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Rapid Response</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Contacted within 2 business hours</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Confidential</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Strict non-disclosure standards</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Snippet */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623]" />
                <span>Sahakar Nagar, North Bangalore, Karnataka 560092</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623]" />
                <span>Hotline: +91 98765 43210 (Mon - Sat, 9:30 AM - 6:30 PM)</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-converting Lead Form */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#08122B]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl">
              
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Send Us an Enquiry</span>
                    <Sparkles className="w-4 h-4 text-[#F5A623]" />
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill the form below to receive your complimentary audit.
                  </p>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 text-[11px] font-semibold text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full">
                  Free Consultation
                </span>
              </div>

              {success ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Digital Elite Services. Our senior Bangalore strategist will contact you within 2 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      Submit Another Enquiry
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

                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
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

                  {/* Message */}
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
                        placeholder="Share your goals (e.g. SEO, Google Ads, website design, social media...)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 bg-white/5 border border-white/15 focus:border-[#F5A623] focus:bg-white/10 rounded-xl text-sm text-white placeholder-slate-400 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
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
                          <span>Submit Enquiry & Get Proposal</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 We protect your privacy. Your information is never shared or spammed.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
