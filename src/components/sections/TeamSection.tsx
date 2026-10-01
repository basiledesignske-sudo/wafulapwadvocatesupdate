import React from 'react';
import { Attorney } from '../../types';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

interface TeamSectionProps {
  attorneys: Attorney[];
  onSelectAttorney: (attorney: Attorney) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ attorneys, onSelectAttorney }) => {
  return (
    <section id="team" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7d36] mb-2 block">
            Legal Leadership &amp; Advocates
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Experienced Counsel. Dedicated Advocates.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Led by Managing Partner Wafula W. Paul, our advocates bring extensive trial experience, commercial acumen, and results-oriented commitment to every brief before Kenyan courts and tribunals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {attorneys.map((attorney) => (
          <div
            key={attorney.id}
            onClick={() => onSelectAttorney(attorney)}
            className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#c5a059]/60 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col shadow-sm"
          >
            {/* Attorney Image */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/85 backdrop-blur-md text-[#8a6829] border border-slate-200/80 group-hover:bg-[#c5a059] group-hover:text-black transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#9e7d36] mb-1">
                  {attorney.role}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#9e7d36] transition-colors">
                  {attorney.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-3">
                  {attorney.specialty}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {attorney.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{attorney.experience}</span>
                <span className="font-semibold text-[#9e7d36] group-hover:underline">
                  View Profile &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
