import React, { useState, useEffect } from 'react';
import { JusticeLogo } from '../ui/JusticeLogo';
import { Menu, X, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenSearch?: () => void;
  onOpenAdmin: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenAdmin,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About Us', target: 'about' },
    { label: 'Practice Areas', target: 'practice-areas' },
    { label: 'Our Team', target: 'team' },
    { label: 'Why Us', target: 'why-choose-us' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Insights', target: 'insights' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigateSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 max-w-7xl mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between px-5 py-3 transition-all duration-300 rounded-full border ${
          isScrolled
            ? 'bg-[#0a0f16]/95 backdrop-blur-md border-slate-800 shadow-2xl shadow-slate-950/20 py-2.5'
            : 'bg-[#0c1219]/90 backdrop-blur-md border-slate-800/80 shadow-xl shadow-slate-950/15'
        }`}
      >
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded-lg"
          aria-label="Wafula PW & Co. Advocates Home"
        >
          <JusticeLogo size={28} />
        </button>

        {/* Center Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="hover:text-white transition-colors duration-200 cursor-pointer hover:underline underline-offset-4 decoration-[#c5a059] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] rounded"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin CMS preview button */}
          <button
            onClick={onOpenAdmin}
            className="p-1.5 rounded-full text-slate-400 hover:text-[#c5a059] hover:bg-white/10 transition-colors border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
            title="CMS & Submissions Dashboard"
            aria-label="Admin CMS and submissions"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>

          {/* Primary CTA - Gold Button */}
          <button
            onClick={onOpenConsultation}
            className="gold-bg-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c5a059] focus-visible:ring-offset-[#080c10]"
          >
            Book a Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-2 p-5 bg-[#0a0f16]/98 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.target)}
                className="text-left text-base font-medium text-slate-200 hover:text-[#c5a059] transition-colors py-1.5 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="gold-bg-btn w-full py-2.5 rounded-full text-sm font-semibold text-center"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
