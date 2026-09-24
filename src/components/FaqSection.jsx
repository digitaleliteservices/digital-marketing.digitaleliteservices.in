import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export const FaqSection = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How quickly can we expect to see measurable results from our marketing campaigns?',
      answer:
        'Timelines depend on the acquisition channel. For Pay-Per-Click (PPC) on Google Search and Meta, we typically launch campaigns within 5 to 7 business days and begin generating qualified inbound leads within the very first 48 to 72 hours. For Search Engine Optimization (SEO) and Local Google Business Profile optimization, foundational technical fixes take effect within 3 to 4 weeks, with significant competitive keyword rank gains and sustained organic traffic growth compounding between months 3 to 6.',
    },
    {
      question: 'Do you offer guaranteed rankings on Google?',
      answer:
        'No ethical, Google-certified agency can guarantee an exact "#1 ranking" because Google’s proprietary ranking algorithms change hundreds of times per year. What we do guarantee is strict adherence to white-hat search architecture, high-intent keyword targeting, and measurable commercial outcomes: increased qualified organic traffic, lower cost per lead, and tangible revenue attribution.',
    },
    {
      question: 'What makes Digital Elite Services different from other digital marketing agencies in Bangalore?',
      answer:
        'Most digital agencies operate in silos—one freelancer handles social posts, another sets up random Google ads, and nobody looks at your conversion rate or landing page speed. Digital Elite Services builds a unified Growth Engine: we align your high-intent ad spend with custom, sub-second landing pages (consistently scoring 99 on Google Lighthouse) and negative keyword shields to ensure zero budget is wasted on vanity clicks.',
    },
    {
      question: 'How do you determine the recommended budget for Google Ads and Social Media campaigns?',
      answer:
        'We calculate budgets backward from your commercial targets and unit economics. We evaluate the average search volume in Bangalore or your target geography, the average Cost-Per-Click (CPC) in your specific industry, and your historical conversion rates to determine the minimum ad spend required to generate your target number of qualified inquiries per month.',
    },
    {
      question: 'Can we hire you for a single specific service, such as only SEO or only Web Design?',
      answer:
        'Yes, absolutely. While our full-funnel integrated growth model provides the highest overall ROI, many clients start with a dedicated engagement—such as local SEO to dominate Google Maps in North Bangalore, Google Ads management to capture immediate bottom-of-funnel demand, or high-performance landing page development.',
    },
    {
      question: 'How do you report progress and track conversion attribution?',
      answer:
        'We provide 24/7 access to an interactive Google Looker Studio dashboard connected directly to your Google Analytics 4 (GA4), Google Search Console, and Google Ads accounts. You see exactly how many real phone calls, WhatsApp inquiries, contact form fills, and revenue site visits occurred—with zero inflated vanity metrics.',
    },
    {
      question: 'Are we locked into long-term retainers or rigid contracts?',
      answer:
        'No. We believe client retention should be earned through consistent commercial performance, not forced lock-in contracts. Our standard engagement operates on flexible monthly retainers with a simple 30-day notice period. For comprehensive SEO campaigns, we recommend an initial 3-month commitment simply because search engines require adequate crawl and index cycles to compound.',
    },
    {
      question: 'Where are you located in Bangalore and can we meet in person?',
      answer:
        'Our primary office is located in Sahakar Nagar, North Bangalore (near Hebbal and Kempegowda International Airport connectivity). We actively welcome in-person strategy sessions at our office, or we can visit your Bangalore headquarters for an initial growth audit and stakeholder alignment meeting.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#F8FBFE] text-slate-900 overflow-hidden border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#F5A623] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#0057B7] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071D38] uppercase tracking-tight">
            EVERYTHING YOU NEED TO KNOW ABOUT PARTNERING WITH US
          </h2>

          <p className="text-xs sm:text-sm text-[#4A5D78] leading-relaxed max-w-2xl">
            Get clear, transparent answers about our timelines, pricing logic, search ranking methodologies, and full-funnel reporting standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#3B82F6]/50 shadow-md shadow-blue-500/5'
                    : 'border-[#DCE8F6] hover:border-[#CCE0FA] shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#071D38] leading-snug">
                    {faq.question}
                  </span>
                  
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#FED45B] text-[#071D38] rotate-180'
                        : 'bg-[#F4F9FD] text-[#0057B7] hover:bg-[#e8f2fc]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A5D78] leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Help Card */}
        <div className="mt-12 bg-white rounded-3xl border border-[#CCE0FA] p-6 sm:p-8 shadow-xl shadow-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF3D6] text-[#D97706] flex items-center justify-center shrink-0 shadow-2xs">
              <HelpCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#071D38]">
                Have a specific question about your industry or budget?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D78] mt-1">
                Speak directly with our digital growth director. No sales pressure, just actionable strategic advice.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+916366930178"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold hover:border-[#071D38] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0057B7]" />
              <span>Call Us Direct</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="button inline-flex items-center gap-2 px-6 py-3 bg-[#FED45B] hover:bg-[#eec447] active:scale-95 text-[#071D38] text-xs sm:text-sm font-bold rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider"
            >
              <span>Ask a Question</span>
              <ArrowRight className="w-4 h-4 text-[#071D38]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
