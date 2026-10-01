import React from 'react';
import { GoldStar } from '../ui/JusticeLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExplorePractices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExplorePractices,
}) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#080c10]">
      {/* Outer container filling hero section page */}
      <div className="relative w-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 pt-28 sm:pt-32 pb-8 sm:pb-12">
        {/* Background Image filling the entire hero section page */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_law_firm_1790847178281.jpg"
            alt="Wafula PW & Co. Advocates reviewing legal briefs and case files"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] transform scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle multi-stop gradient for perfect text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/80 via-[#080c10]/40 to-[#080c10]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080c10]/35 to-[#080c10]/90" />
        </div>

        {/* Top Eyebrow / Trust Indicator */}
        <div className="relative z-10 flex items-center justify-center gap-2 pt-4 sm:pt-8">
          <div className="flex items-center gap-2 px-3.5 py-1 text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
            <GoldStar className="w-3 h-3 text-[#c5a059]" />
            <span className="tracking-[0.2em] text-[11px] sm:text-xs text-[#e5c378] font-semibold uppercase">
              Your Trusted Legal Partner · Nairobi, Kenya
            </span>
            <GoldStar className="w-3 h-3 text-[#c5a059]" />
          </div>
        </div>

        {/* Center Main Headline & CTA */}
        <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.12] mb-6 text-balance">
            Tailor-Made, Results-Oriented Legal Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
            Wafula PW &amp; Company Advocates delivers practical, client-focused legal counsel grounded in professionalism, integrity, and legal excellence across Kenya and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="gold-bg-btn w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
            >
              <span>Contact Our Advocates</span>
              <ArrowRight className="w-4 h-4 text-[#080c10] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onExplorePractices}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors backdrop-blur-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Practice Areas
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> Advocates of the High Court of Kenya
            </span>
            <span aria-hidden="true" className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" /> MCMX Building, Kiambu Road
            </span>
          </div>
        </div>

        {/* Bottom Client Trust Logos Strip reflecting represented client sectors from PDF */}
        <div className="relative z-10 pt-6 sm:pt-8 border-t border-white/10 max-w-6xl mx-auto w-full">
          <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium mb-3 sm:mb-4 tracking-wider uppercase">
            Trusted by Commercial Banks, Multinationals, Receivers &amp; Diaspora Investors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300 text-slate-300">
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider">
              <span className="font-serif font-bold text-[#c5a059]">NCBA</span>
              <span className="text-xs uppercase text-slate-400">Bank</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider">
              <span className="font-sans font-bold tracking-tight">Stanbic</span>
              <span className="text-xs text-[#c5a059]">Bank</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider">
              <span className="font-serif font-bold text-slate-200">EcoBank</span>
              <span className="text-xs text-slate-400">Kenya</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider hidden md:flex">
              <span className="font-sans font-bold tracking-wider text-[#c5a059]">KCB</span>
              <span className="text-xs text-slate-400">Group</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider hidden lg:flex">
              <span className="font-serif italic font-bold">Bank of Africa</span>
            </div>
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider hidden xl:flex">
              <span className="text-xs uppercase tracking-widest text-[#c5a059]">KCAA</span>
              <span className="text-xs text-slate-400">Aviation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
