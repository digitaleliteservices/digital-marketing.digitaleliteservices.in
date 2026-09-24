import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import LogoImg from "../assets/images/logo.png"

export const Footer = ({
  onSelectServiceLink,
  onOpenPortfolio,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#050A18] text-slate-400 text-sm pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info (Spans 4) */}
          <div className="lg:col-span-4 space-y-4">
            <img src={LogoImg} alt=""  className='w-34 h-33'/>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              A results-focused digital marketing agency in Bangalore helping businesses grow through creative strategies, smart technology and measurable results.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/people/Digital-Elite-Service/61578403771896/"
                target="_blank"
                rel="noreferrer"
                aria-label="DES on Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/digital_elite_services"
                target="_blank"
                rel="noreferrer"
                aria-label="DES on Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="DES on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a> */}
              <a
                href="https://www.youtube.com/@DigitalEliteServices/"
                target="_blank"
                rel="noreferrer"
                aria-label="DES on YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F5A623] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Our Services (Spans 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('seo')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('ppc')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  PPC
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('smm')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('content')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  Content Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('web-dev')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceLink?.('local-seo')}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  Local SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (Spans 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#F5A623] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5A623] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5A623] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPortfolio}
                  className="hover:text-[#F5A623] transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#F5A623] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5A623] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F5A623] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5A623] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (Spans 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span>1ˢᵗ Floor, Sathya Heritage, 2574, 8ᵗʰ Cross, 13ᵗʰ Main, E Block, Sahakarnagar, Bengaluru, Karnataka 560092</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <a href="tel:+916366930178" className="hover:text-white transition-colors">
                  +91 6366930178
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <a href="mailto:info@digitaleliteservices.in" className="hover:text-white transition-colors break-all">
                  info@digitaleliteservices.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Digital Elite Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
