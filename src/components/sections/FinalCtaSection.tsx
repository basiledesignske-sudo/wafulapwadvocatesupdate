import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto text-center border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Ready to partner with a trusted legal team in Kenya?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Wafula PW &amp; Co. Advocates is ready to be your dedicated legal partner—protecting your business, securing your property, and advocating for your success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="gold-bg-btn px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-xl flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+254716954112"
            className="px-6 py-3.5 sm:py-4 rounded-full text-sm font-medium text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <PhoneCall className="w-4 h-4 text-[#9e7d36]" />
            <span>+254 716 954 112</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#9e7d36]" />
          Confidential &amp; protected by Advocate-Client Privilege · MCMX Building, Kiambu Road, Nairobi
        </p>
      </div>
    </section>
  );
};
