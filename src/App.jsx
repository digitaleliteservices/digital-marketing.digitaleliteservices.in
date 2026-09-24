import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketingTechStackBanner } from './components/MarketingTechStackBanner';
import { FragmentedTrapSection } from './components/FragmentedTrapSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection, servicesData } from './components/ServicesSection';
import { SeoDeepDiveSection } from './components/SeoDeepDiveSection';
import { PpcDeepDiveSection } from './components/PpcDeepDiveSection';
import { SocialMediaDeepDiveSection } from './components/SocialMediaDeepDiveSection';
import { ConversionArchitectureSection } from './components/ConversionArchitectureSection';
import { MethodologySection } from './components/MethodologySection';
import { CustomerJourneySection } from './components/CustomerJourneySection';
import { LocalSection } from './components/LocalSection';
import { TrueBusinessImpactSection } from './components/TrueBusinessImpactSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LeadEnquirySection } from './components/LeadEnquirySection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MandatoryLeadModal } from './components/MandatoryLeadModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PortfolioModal } from './components/PortfolioModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  // Check if user has previously submitted mandatory lead form
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(() => {
    try {
      return (
        sessionStorage.getItem('des_lead_submitted') === 'true' ||
        localStorage.getItem('des_lead_submitted') === 'true'
      );
    } catch {
      return false;
    }
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Search Engine Optimization (SEO)');
  const [detailModalService, setDetailModalService] = useState(null);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleOpenQuoteModal = (serviceTitle) => {
    if (serviceTitle) {
      setSelectedServiceForQuote(serviceTitle);
    } else {
      setSelectedServiceForQuote('Search Engine Optimization (SEO)');
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceFromFooter = (serviceId) => {
    const matched = servicesData.find((s) => s.id === serviceId);
    if (matched) {
      setDetailModalService(matched);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMandatoryLeadSuccess = () => {
    setIsLeadSubmitted(true);
  };

  return (
    <>
      {/* Mandatory Lead Gate: Shown while opening landing page until user submits */}
      <MandatoryLeadModal
        isOpen={!isLeadSubmitted}
        onSuccess={handleMandatoryLeadSuccess}
      />

      {/* Main Landing Page Content - Gated and blurred until user fills mandatory lead form */}
      <div
        className={`min-h-screen bg-[#fafafa] text-slate-800 flex flex-col font-sans selection:bg-[#F5A623] selection:text-slate-950 transition-all duration-500 ${
          !isLeadSubmitted
            ? 'h-screen overflow-hidden filter blur-sm pointer-events-none select-none'
            : ''
        }`}
        aria-hidden={!isLeadSubmitted}
      >
        {/* Fixed Navigation Bar */}
        <Navbar 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
          onOpenPortfolio={() => setPortfolioModalOpen(true)}
        />

        <main className="flex-1 w-full">
          {/* Section 1: Hero */}
          <Hero
            onOpenConsultation={() => handleOpenQuoteModal()}
            onExploreServices={scrollToServices}
          />

          {/* Marketing Tech Stack Banner: Google Meta, Google Ads, Google Search Console, Google My Business */}
          <MarketingTechStackBanner />

          {/* Section 2: The Fragmented Marketing Trap vs The DES Growth Engine */}
          <FragmentedTrapSection
            onOpenConsultation={() => handleOpenQuoteModal('Unified Growth Engine Strategy')}
          />

          {/* Section 3: Strategic Digital Marketing Solutions (About & Stats) */}
          <AboutSection
            onLearnMore={() => handleOpenQuoteModal('Strategic Digital Marketing Solutions')}
          />

          {/* Section 4: Comprehensive Digital Marketing Services (8 Cards) */}
          <ServicesSection
            onSelectService={(service) => setDetailModalService(service)}
          />

          {/* Section 5: SEO Deep Dive - Be Visible When Customers Are Searching */}
          <SeoDeepDiveSection
            onRequestSeoAssessment={() => handleOpenQuoteModal('Search Engine Optimization (SEO)')}
          />

          {/* Section 6: PPC Deep Dive - Reach the Right Customers Faster */}
          <PpcDeepDiveSection
            onRequestPpcConsultation={() => handleOpenQuoteModal('Pay-Per-Click Advertising (PPC)')}
          />

          {/* Section 7: Social Media Deep Dive - Build Attention, Relationships, Brand */}
          <SocialMediaDeepDiveSection
            onPlanSocialCampaign={() => handleOpenQuoteModal('Social Media & Brand Reach')}
          />

          {/* Section 8: Conversion Architecture - Website Design & Landing Pages */}
          <ConversionArchitectureSection
            onTalkToWebTeam={() => handleOpenQuoteModal('Website Design & Conversion Funnel')}
          />

          {/* Section 9: Methodology - Our 5-Step Strategic Growth Process */}
          <MethodologySection />

          {/* Section 10: The Customer Journey - From Visibility to Conversion */}
          <CustomerJourneySection
            onOpenConsultation={() => handleOpenQuoteModal('Customer Journey Commercial Scale')}
          />

          {/* Section 11: Local Expertise (Sahakar Nagar Bangalore) */}
          <LocalSection
            onGetLocalSupport={() => handleOpenQuoteModal('Local SEO & Google Business Profile')}
          />

          {/* Section 12: True Business Impact - Results & Meaningful Outcomes */}
          <TrueBusinessImpactSection />

          {/* Section 13: Why Choose Us (Why Digital Elite Services?) */}
          <WhyUsSection />

          {/* Section 14: Client Testimonials & Proven Track Record */}
          <TestimonialsSection
            onOpenConsultation={() => handleOpenQuoteModal('Client Testimonials & Growth Audit')}
          />

          {/* Section 15: Frequently Asked Questions (FAQ) */}
          <FaqSection
            onOpenConsultation={() => handleOpenQuoteModal('FAQ Strategy Consultation')}
          />

          {/* Section 16: Embedded In-Page Lead Enquiry Form with { name, email, phone, message } */}
          {/* <LeadEnquirySection /> */}

          {/* Section 17: Ready To Grow CTA Banner */}
          <CtaBanner
            onOpenConsultation={() => handleOpenQuoteModal()}
          />
        </main>

        {/* Footer */}
        <Footer
          onSelectServiceLink={handleSelectServiceFromFooter}
          onOpenPortfolio={() => setPortfolioModalOpen(true)}
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
        />

        {/* Modals & Dialogs */}
        <ConsultationModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={selectedServiceForQuote}
        />

        <ServiceDetailModal
          service={detailModalService}
          onClose={() => setDetailModalService(null)}
          onRequestQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        <PortfolioModal
          isOpen={portfolioModalOpen}
          onClose={() => setPortfolioModalOpen(false)}
          onOpenConsultation={() => handleOpenQuoteModal('Integrated Digital Marketing Portfolio')}
        />

        <LegalModal
          isOpen={legalModalType !== null}
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </div>
    </>
  );
}
