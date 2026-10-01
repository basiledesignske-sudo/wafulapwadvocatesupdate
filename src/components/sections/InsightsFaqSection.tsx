import React, { useState } from 'react';
import { legalArticlesData, faqItemsData } from '../../data/mockData';
import { LegalArticle } from '../../types';
import { ChevronDown, ArrowUpRight, BookOpen, HelpCircle } from 'lucide-react';

interface InsightsFaqSectionProps {
  onSelectArticle: (article: LegalArticle) => void;
}

export const InsightsFaqSection: React.FC<InsightsFaqSectionProps> = ({ onSelectArticle }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="insights" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      {/* Top Part: Legal Insights */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7d36] mb-2 block">
              Analysis &amp; Commentary
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Legal Insights &amp; Briefings
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Authoritative perspectives on emerging regulatory frameworks, judicial trends, and strategic risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legalArticlesData.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/80 hover:border-[#c5a059]/50 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-[#9e7d36] font-semibold">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#9e7d36] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {article.author}</span>
                <span className="text-[#9e7d36] font-medium flex items-center gap-1 group-hover:underline">
                  Read Briefing <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Part: FAQ Accordion */}
      <div id="faq" className="pt-10 border-t border-slate-200/80">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7d36] mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clear answers regarding consultation procedures, confidentiality standards, and representation structures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItemsData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9e7d36] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
