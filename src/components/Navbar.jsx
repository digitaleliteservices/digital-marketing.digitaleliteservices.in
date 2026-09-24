import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';
import LogoImg from "../assets/images/logo.png"

export const Navbar = ({ onOpenQuoteModal, onOpenPortfolio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', isModal: false },
    { name: 'Services', href: '#services', isModal: false },
    { name: 'SEO & PPC', href: '#seo-deep-dive', isModal: false },
    { name: 'Why Us', href: '#why-us', isModal: false },
    // { name: 'Methodology', href: '#methodology', isModal: false },
    { name: 'Testimonials', href: '#testimonials', isModal: false },
    { name: 'FAQ', href: '#faq', isModal: false },
    // { name: 'Enquiry', href: '#enquiry', isModal: false },
    { name: 'About Us', href: '#about', isModal: false },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isModal && onOpenPortfolio) {
      e.preventDefault();
      onOpenPortfolio();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080E21]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3'
          : 'bg-[#080E21]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-[#F5A623] rounded-lg">
            <img src={LogoImg} alt=""  className='w-34 h-33'/>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-xs xl:text-sm font-medium text-slate-200 hover:text-[#F5A623] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5A623] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="button hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5A623] hover:bg-[#e69818] active:scale-95 text-slate-950 text-xs md:text-sm rounded-full shadow-md shadow-amber-500/20 transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1128] border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, link);
                }}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#F5A623] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F5A623] text-slate-950 font-semibold text-sm rounded-full shadow-md transition-colors cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-around pt-2 text-xs text-slate-400">
                <a href="tel:+916366930178" className="flex items-center gap-1.5 hover:text-white">
                  <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>+91 6366930178</span>
                </a>
                <a href="mailto:info@digitaleliteservices.in" className="flex items-center gap-1.5 hover:text-white">
                  <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
