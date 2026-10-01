import React, { useState } from 'react';
import { testimonialsData, caseStudiesData } from '../../data/mockData';
import { Quote, CheckCircle2, ShieldCheck, ArrowRight, FolderKanban } from 'lucide-react';
import { CaseStudy } from '../../types';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenConsultation,
  onSelectCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'case-studies'>('testimonials');

  return (
    <section id="testimonials" className="w-full bg-slate-50/90 border-y border-slate-200/70 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Section Headline & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8a6829]">
                  Client Experiences &amp; Proof
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080c10] leading-tight mb-4">
                Discover Success Stories from Satisfied Clients
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                Read through verified testimonials from individuals and businesses who have experienced our dedicated legal representation firsthand.
              </p>

              {/* Segmented switcher between Testimonials and Anonymized Case Studies */}
              <div className="inline-flex p-1 bg-neutral-200/60 rounded-xl mb-8">
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'testimonials'
                      ? 'bg-white text-[#080c10] shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Client Testimonials
                </button>
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'case-studies'
                      ? 'bg-white text-[#080c10] shadow-sm'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Key Matter Studies
                </button>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-200 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8a6829]" />
                  <span>100% Genuine, verified client feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8a6829]" />
                  <span>Full confidentiality protected in all public reporting</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 hidden lg:block">
              <button
                onClick={onOpenConsultation}
                className="gold-bg-btn px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Discuss Your Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Stack of Testimonial Cards or Case Studies */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {activeTab === 'testimonials' ? (
              testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <Quote className="w-6 h-6 text-[#c5a059]/40 mb-2" />
                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal mb-5">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-100 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#11281e] text-[#c5a059] flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                        {item.clientName
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#080c10]">
                          {item.clientName}
                        </div>
                        <div className="text-[11px] sm:text-xs text-neutral-500">
                          {item.clientRole}
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-semibold text-[#8a6829] bg-[#faf6ee] px-2.5 py-1 rounded-full border border-[#eedfba]">
                      {item.practiceArea}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              caseStudiesData.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => onSelectCaseStudy(cs)}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#c5a059]/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a6829]">
                      {cs.matterType}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {cs.practiceArea}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#080c10] mb-2 group-hover:text-[#8a6829] transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 mb-3">
                    {cs.challenge}
                  </p>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#8a6829] pt-2 border-t border-neutral-100">
                    <span className="flex items-center gap-1.5">
                      <FolderKanban className="w-3.5 h-3.5" />
                      View Strategy &amp; Resolution
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
