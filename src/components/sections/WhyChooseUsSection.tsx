import React from 'react';

export const WhyChooseUsSection: React.FC = () => {
  const cards = [
    {
      id: 'expertise',
      title: 'Professional Excellence',
      description:
        'With a strong reputation across complex commercial litigation, banking recoveries, conveyancing, labour law, and IP, our advocates combine deep knowledge of Kenyan law with rigorous international commercial standards.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 text-[#c5a059]" aria-hidden="true">
          <circle cx="24" cy="24" r="21" stroke="#e5c378" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="24" cy="24" r="14" stroke="#c5a059" strokeWidth="2" />
          <path d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24Z" stroke="#8a6829" strokeWidth="1.5" />
          <path d="M24 10V38M10 24H38" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
        </svg>
      ),
    },
    {
      id: 'client-centric',
      title: 'Tailor-Made Legal Solutions',
      description:
        'We reject one-size-fits-all legal processing. We provide realistic assessments of options, projected outcomes, and transparent cost budgeting consistent with your commercial and operational objectives.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 text-[#c5a059]" aria-hidden="true">
          <circle cx="24" cy="24" r="21" stroke="#e5c378" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="24" cy="18" r="6" stroke="#c5a059" strokeWidth="2" />
          <path d="M14 34C14 28.4772 18.4772 24 24 24C29.5228 24 34 28.4772 34 34" stroke="#8a6829" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 6V10M24 38V42M6 24H10M38 24H42" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'results-driven',
      title: 'Proven Track Record & Integrity',
      description:
        'Success is measured in concrete outcomes. From recovering in excess of Ksh 2,050,000,000 for leading commercial banks to defending titles valued at Ksh 900 Million, our firm is relentless in securing your interests.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16 text-[#c5a059]" aria-hidden="true">
          <circle cx="24" cy="24" r="21" stroke="#e5c378" strokeWidth="1.5" strokeOpacity="0.4" />
          <rect x="16" y="14" width="16" height="22" rx="2" stroke="#c5a059" strokeWidth="2" />
          <path d="M21 14V12C21 10.8954 21.8954 10 23 10H25C26.1046 10 27 10.8954 27 12V14" stroke="#8a6829" strokeWidth="1.5" />
          <path d="M20 22L23 25L28 20" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 29H28" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="w-full bg-slate-50/90 border-y border-slate-200/70 py-16 sm:py-24">
      {/* Inner container with clean responsive margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#0a0f16]">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#080c10] leading-tight mb-4">
            Why Choose Us as Your Legal Partner
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            Our advocates bring rich courtroom experience, commercial insight, and strict integrity to protect your business and private assets.
          </p>
        </div>

        {/* 3 Premium Cards matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Minimalist Gold Emblem */}
              <div className="mb-6 p-2 rounded-2xl bg-[#faf7f0] group-hover:bg-[#f5efe0] transition-colors">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#080c10] mb-3 group-hover:text-[#8a6829] transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
