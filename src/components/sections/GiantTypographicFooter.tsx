import React from 'react';
import { JusticeLogo } from '../ui/JusticeLogo';

interface GiantTypographicFooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const GiantTypographicFooter: React.FC<GiantTypographicFooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
  onNavigateSection,
}) => {
  return (
    <footer className="relative bg-slate-50 text-slate-900 pt-10 overflow-hidden border-t border-slate-200/80 select-none">
      {/* Container matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Giant Typographic "WAFULA" as shown in reference */}
        <div className="relative text-center w-full overflow-hidden leading-none -mb-8 sm:-mb-14 md:-mb-20 z-0">
          <span className="text-[17vw] lg:text-[195px] font-black tracking-tighter text-outline-giant uppercase block opacity-85">
            WAFULA
          </span>
        </div>

        {/* Layered Attorney Team Photo spanning across width */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <img
            src="/src/assets/images/attorney_group_footer_1790847201907.jpg"
            alt="Wafula PW & Co. Advocates legal team and partners"
            className="w-full h-56 sm:h-80 md:h-96 object-cover object-top filter brightness-[0.95]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* Footer Navigation Columns & Legal Notice */}
        <div className="relative z-10 pt-12 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-200">
          {/* Brand & Copyright */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <JusticeLogo size={32} darkText={true} showTagline={true} />
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mt-3 leading-relaxed">
                Wafula PW &amp; Company Advocates is a premier Kenyan full-service law firm delivering tailor-made, practical, client-focused and results-oriented legal solutions.
              </p>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              Copyright © 2026 Wafula PW &amp; Co. Advocates. All Rights Reserved.
            </div>
          </div>

          {/* Legal Information Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Legal Information
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Advocates Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Client Confidentiality
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Remuneration Order Guidance
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media & Office */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Firm Location &amp; Contact
            </h4>
            <div className="text-xs text-slate-600 space-y-1.5 mb-4 leading-relaxed">
              <p className="font-semibold text-slate-800">Wafula P.W. &amp; Co. Advocates</p>
              <p>MCMX Building, First Floor</p>
              <p>Off Kiambu Road</p>
              <p>P.O. Box 22594 – 00400</p>
              <p>Nairobi, Kenya</p>
            </div>

            <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
              <div>
                <strong className="text-slate-800">M:</strong>{' '}
                <a href="tel:+254716954112" className="hover:text-[#9e7d36] transition-colors">+254 716 954 112</a> |{' '}
                <a href="tel:+254780323657" className="hover:text-[#9e7d36] transition-colors">+254 780 323 657</a>
              </div>
              <div>
                <strong className="text-slate-800">E:</strong>{' '}
                <a href="mailto:info@wafulapwadvocates.com" className="hover:text-[#9e7d36] transition-colors">info@wafulapwadvocates.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Disclaimer */}
        <div className="py-6 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-700 font-semibold">LEGAL PRACTICE NOTICE:</strong> The material contained on this website is for general informational purposes only and does not constitute formal legal advice. Viewing this website or communicating with Wafula PW &amp; Co. Advocates via electronic transmission, email, or telephone does not create an advocate-client relationship. Prior case results, recoveries, and testimonials are illustrative of past representative engagements and do not constitute a guarantee of identical outcomes in any pending or future matter.
          </p>
        </div>
      </div>
    </footer>
  );
};
