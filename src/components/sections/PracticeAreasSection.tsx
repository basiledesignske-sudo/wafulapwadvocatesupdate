import React, { useRef } from 'react';
import { GoldStar } from '../ui/JusticeLogo';
import { PracticeArea } from '../../types';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PracticeAreasSectionProps {
  practices: PracticeArea[];
  onSelectPractice: (practice: PracticeArea) => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({
  practices,
  onSelectPractice,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="practice-areas" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Left Title and Right Carousel Arrows matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
              Explore our Comprehensive Legal Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Discover a comprehensive suite of legal solutions tailored to your specific circumstances, ensuring that you receive the dedicated representation you deserve.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-black flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] shadow-sm"
              aria-label="Scroll practice areas left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-black flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] shadow-sm"
              aria-label="Scroll practice areas right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {practices.map((practice) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice)}
              className="shrink-0 w-[290px] sm:w-[320px] md:w-[340px] rounded-3xl overflow-hidden relative group cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md hover:shadow-2xl bg-[#0d141d] flex flex-col justify-end min-h-[440px]"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={practice.image}
                  alt={practice.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.7] transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/60 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
                {/* Gold diamond star icon matching the reference */}
                <div className="mb-3">
                  <GoldStar className="w-3.5 h-3.5 text-[#e5c378]" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#e5c378] transition-colors">
                  {practice.shortName}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {practice.description}
                </p>

                {/* Action Link */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c5a059] group-hover:text-white transition-colors">
                  <span>Explore Practice Area</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
