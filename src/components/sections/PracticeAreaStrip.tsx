import React from 'react';
import { GoldStar } from '../ui/JusticeLogo';
import { practiceAreasData } from '../../data/mockData';
import { PracticeArea } from '../../types';

interface PracticeAreaStripProps {
  onSelectPractice: (practice: PracticeArea) => void;
}

export const PracticeAreaStrip: React.FC<PracticeAreaStripProps> = ({ onSelectPractice }) => {
  return (
    <div className="w-full bg-slate-50/90 border-y border-slate-200/90 py-4 my-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-1">
          {practiceAreasData.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => onSelectPractice(item)}
                className="whitespace-nowrap text-sm md:text-base font-semibold text-slate-700 hover:text-[#9e7d36] transition-colors duration-200 cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] rounded px-1.5"
              >
                <span>{item.shortName}</span>
              </button>
              {index < practiceAreasData.length - 1 && (
                <div className="shrink-0 flex items-center justify-center">
                  <GoldStar className="w-2.5 h-2.5 text-[#c5a059]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
