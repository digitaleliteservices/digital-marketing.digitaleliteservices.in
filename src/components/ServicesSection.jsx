import React from 'react';
import { 
  Search, 
  MousePointerClick, 
  Instagram, 
  FileText, 
  MapPin, 
  Code2, 
  ShieldCheck, 
  PenTool 
} from 'lucide-react';

export const servicesData = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your search rankings and drive sustainable organic traffic.',
    iconName: 'Search',
    category: 'Search & Visibility',
    details: {
      deliverables: ['Technical SEO Audit', 'Keyword & Competitor Research', 'On-Page Optimization', 'High-Quality Backlink Strategy', 'Monthly Performance Reporting'],
      timeline: '3 - 6 months for compounding ranking growth',
      targetAudience: 'Businesses aiming to dominate Google search results without ongoing ad spend',
      sampleMetric: '+320% average increase in organic keyword visibility',
    },
  },
  {
    id: 'ppc',
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Reach your target audience with highly effective paid campaigns.',
    iconName: 'MousePointerClick',
    category: 'Paid Advertising',
    details: {
      deliverables: ['Google Ads (Search & Display)', 'Meta Ads (Facebook & Instagram)', 'Ad Copywriting & Creative Design', 'Conversion Tracking & Pixels', 'Budget & Bid Optimization'],
      timeline: 'Instant lead generation within 48-72 hours of campaign launch',
      targetAudience: 'Brands needing immediate high-intent leads and quantifiable ROI',
      sampleMetric: '3.8x to 5.2x Average Return on Ad Spend (ROAS)',
    },
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Build your brand, engage your audience and grow your community.',
    iconName: 'Instagram',
    category: 'Brand Awareness',
    details: {
      deliverables: ['Social Strategy & Content Calendar', 'Reels, Carousels & Video Production', 'Community Engagement & DM Management', 'Influencer Outreach', 'Brand Tone & Aesthetic Uniformity'],
      timeline: 'Ongoing monthly content & community curation',
      targetAudience: 'B2B & B2C companies wanting viral reach and loyal followers',
      sampleMetric: '+185% increase in monthly audience engagement rate',
    },
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Create valuable content that informs, engages and converts.',
    iconName: 'FileText',
    category: 'Content Strategy',
    details: {
      deliverables: ['SEO Blog Posts & Thought Leadership Articles', 'Case Studies & Whitepapers', 'High-Converting Landing Page Copy', 'Email Newsletters & Drip Campaigns', 'Infographics & Downloadable Guides'],
      timeline: 'Bi-weekly and weekly editorial publishing cadence',
      targetAudience: 'Enterprises that win customers by educating and building deep trust',
      sampleMetric: '4.2x higher conversion rates from content-nurtured leads',
    },
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    description: 'Get found by nearby customers and grow your local presence.',
    iconName: 'MapPin',
    category: 'Local Footprint',
    details: {
      deliverables: ['Google Business Profile (GBP) Optimization', 'Local Map Pack 3-Pack Domination', 'NAP (Name, Address, Phone) Consistency', 'Local Citation Building', 'Review & Reputation Management'],
      timeline: 'Measurable local call & direction requests in 30-60 days',
      targetAudience: 'Clinics, retail stores, restaurants, and local services in Bangalore',
      sampleMetric: '+210% increase in direct phone calls & store direction clicks',
    },
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'Beautiful, fast, and conversion-focused websites and landing pages.',
    iconName: 'Code2',
    category: 'Web Technology',
    details: {
      deliverables: ['Custom UI/UX Wireframing & Prototyping', 'Responsive Architecture', 'Lightning Fast Page Load','SEO Friendly Architecture'],
      timeline: '2 to 4 weeks from concept to production launch',
      targetAudience: 'Modern businesses needing a digital storefront that closes deals',
      sampleMetric: '+65% improvement in visitor-to-lead conversion rate',
    },
  },
  {
    id: 'orm',
    title: 'Online Reputation Management',
    description: 'Build trust and maintain a positive brand image.',
    iconName: 'ShieldCheck',
    category: 'Brand Defense',
    details: {
      deliverables: ['Brand Sentiment & Mention Monitoring', 'Negative Feedback Mitigation', 'Automated Customer Review Generation', 'Wikipedia & PR Representation', 'Executive Profile Curation'],
      timeline: 'Ongoing 24/7 digital footprint surveillance and cleanup',
      targetAudience: 'Growing brands and founders protecting their online credibility',
      sampleMetric: '4.8+ star average rating maintenance across key review sites',
    },
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Eye-catching designs that make your brand stand out.',
    iconName: 'PenTool',
    category: 'Creative Design',
    details: {
      deliverables: ['Brand Identity & Logo Systems', 'Social Media Ad Creatives & Banners', 'Brochures, Flyers & Marketing Collateral', 'Pitch Decks & Presentations', 'Product Packaging & Print Ready Assets'],
      timeline: 'Turnaround within 24 to 48 hours for design requests',
      targetAudience: 'Brands aiming for premium visual identity across touchpoints',
      sampleMetric: '100% vector scalable, bespoke hand-crafted graphics',
    },
  },
];

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafafa] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-[#F5A623]" aria-hidden="true" />
            <span className="text-xs subheading-semibold tracking-wider text-slate-800 uppercase">
              OUR SERVICES
            </span>
          </div>

          <h2 className="section-title tracking-tight text-slate-900">
            Comprehensive Digital Marketing Services
          </h2>

          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto">
            From strategy to execution, we offer end-to-end digital marketing solutions to help your business increase visibility, attract the right audience and achieve measurable growth.
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Distinctive Icon Badge */}
                  <div className="mb-5 inline-flex">
                    {service.id === 'seo' && (
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:bg-[#F5A623] transition-colors">
                        <Search className="w-5 h-5 text-[#F5A623] group-hover:text-slate-950 transition-colors" />
                      </div>
                    )}

                    {service.id === 'ppc' && (
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/70 flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <MousePointerClick className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    )}

                    {service.id === 'smm' && (
                      <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200/70 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-500 transition-all">
                        <Instagram className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
                      </div>
                    )}

                    {service.id === 'content' && (
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                        <FileText className="w-5 h-5 text-amber-700 group-hover:text-slate-950 transition-colors" />
                      </div>
                    )}

                    {service.id === 'local-seo' && (
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <MapPin className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                      </div>
                    )}

                    {service.id === 'web-dev' && (
                      <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200/70 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                        <Code2 className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" />
                      </div>
                    )}

                    {service.id === 'orm' && (
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/70 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                      </div>
                    )}

                    {service.id === 'graphic-design' && (
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:bg-[#F5A623] transition-colors">
                        <PenTool className="w-5 h-5 text-[#F5A623] group-hover:text-slate-950 transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="service-title text-slate-900 group-hover:text-[#F5A623] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="body-text text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#F5A623] transition-colors">
                  <span>Explore Plan</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
