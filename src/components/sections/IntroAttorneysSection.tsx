import React from 'react';
import { GoldStar } from '../ui/JusticeLogo';
import { Attorney, FirmStats } from '../../types';
import { ArrowUpRight, Award, Scale, ShieldCheck } from 'lucide-react';
import wafulaPaulImg from '../../assets/images/wafula-paul.jpg';

interface IntroAttorneysSectionProps {
  stats: FirmStats;
  onSelectAttorney: (attorney: Attorney) => void;
  featuredAttorney: Attorney;
  onViewAllTeam: () => void;
}

export const IntroAttorneysSection: React.FC<IntroAttorneysSectionProps> = ({
  stats,
  onSelectAttorney,
  featuredAttorney,
  onViewAllTeam,
}) => {
  return (
    <section id="about" className="py-12 sm:py-16 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN: Large Attorney Photography with interactive profile card */}
        <div className="lg:col-span-6 relative rounded-[2rem] overflow-hidden border border-slate-200/80 min-h-[460px] sm:min-h-[580px] bg-slate-900 group shadow-xl">
          <img
            src={wafulaPaulImg}
            alt="Wafula W. Paul - Managing Partner & Advocate"
            className="w-full h-full object-cover object-top sm:object-center filter brightness-[1.08] contrast-[1.04] saturate-[1.03] group-hover:scale-[1.02] transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Subtle clean gradient overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

          {/* Attorney Badge Overlay as shown in the reference image */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:left-8 sm:bottom-8">
            <button
              onClick={() => onSelectAttorney(featuredAttorney)}
              className="w-full sm:w-auto text-left bg-white/95 text-[#080c10] backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/40 hover:bg-white hover:scale-[1.02] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              aria-label={`View profile of ${featuredAttorney.name}`}
            >
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#080c10]">
                  {featuredAttorney.name.replace(', Esq.', '')}
                </span>
                <span className="p-1 rounded-full bg-[#080c10] text-[#c5a059]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#8a6829] mb-0.5">
                {featuredAttorney.experience}
              </p>
              <p className="text-xs text-slate-600 font-medium">
                {featuredAttorney.specialty}
              </p>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Forest Pine Green Statement Panel with Live Stats */}
        <div className="lg:col-span-6 rounded-[2rem] overflow-hidden border border-emerald-950/40 bg-[#10291e] p-8 sm:p-12 md:p-14 flex flex-col justify-between shadow-2xl relative">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Gold Star and divider line */}
            <div className="flex items-center gap-3 mb-6">
              <GoldStar className="w-4 h-4 text-[#c5a059]" />
              <div className="h-[1px] w-16 bg-[#c5a059]/40" />
              <span className="text-[11px] uppercase tracking-widest text-[#e5c378] font-semibold">
                About The Firm
              </span>
            </div>

            {/* Editorial Headline mirroring reference */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.25] mb-6 text-balance">
              Grounded in professionalism, integrity, and legal excellence across Kenya and beyond.
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed mb-6 max-w-xl">
              Wafula PW &amp; Company Advocates is a full-service Kenyan law firm committed to delivering tailor-made, practical, client-focused and results-oriented legal solutions. Our team brings together diverse legal experience across multiple practice areas, enabling holistic and strategic legal solutions that protect our clients’ interests and support their long-term success.
            </p>

            {/* Core Values from Document */}
            <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-emerald-800/40 text-xs text-emerald-100">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-semibold text-white">Professional Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-semibold text-white">Integrity &amp; Accountability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-semibold text-white">Client Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="font-semibold text-white">Continuous Innovation</span>
              </div>
            </div>
          </div>

          {/* Statistics Grid - Tabular numerals & clean design */}
          <div className="pt-6 border-t border-emerald-800/40">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  Ksh 2.05B+
                </div>
                <div className="text-xs font-medium text-emerald-200/75 mt-1 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>Recoveries</span>
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                  {stats.yearsExperience}+ Yrs
                </div>
                <div className="text-xs font-medium text-emerald-200/75 mt-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>Experience</span>
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Ksh 900M
                </div>
                <div className="text-xs font-medium text-emerald-200/75 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>Title Saved</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={onViewAllTeam}
                className="text-xs sm:text-sm font-semibold text-[#e5c378] hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] rounded"
              >
                <span>Meet Our Full Legal Team</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <span className="text-[11px] text-emerald-300/60 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" /> Verified Credentials
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
