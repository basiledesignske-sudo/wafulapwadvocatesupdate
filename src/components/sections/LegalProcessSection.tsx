import React from 'react';
import { ArrowRight, MessageSquare, Scale, CheckCircle2 } from 'lucide-react';

interface LegalProcessSectionProps {
  onOpenConsultation: () => void;
}

export const LegalProcessSection: React.FC<LegalProcessSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'A confidential, in-depth discussion to review your legal circumstances, identify immediate risks, and clarify your core objectives.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Case Assessment & Architecture',
      description:
        'Our partners conduct independent evidentiary review, analyze precedent, and architect a customized legal strategy with clear cost transparency.',
    },
    {
      number: '03',
      title: 'Strategic Advocacy',
      description:
        'Whether in high-stakes negotiations, regulatory hearings, or contested trial proceedings, we apply relentless rigor to advance your position.',
    },
    {
      number: '04',
      title: 'Decisive Resolution',
      description:
        'Securing enforceable settlements, favorable verdicts, or concluded transactions, followed by comprehensive post-resolution counsel.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200/80">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#9e7d36] mb-2 block">
          How We Work
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          A Disciplined, Transparent Legal Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          From intake to closing, our practice operates with rigorous protocol to ensure you remain fully informed, protected, and empowered at every milestone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-[#c5a059]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl font-extrabold text-[#c5a059] mb-4 font-mono">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-[#0e1620] text-white border border-slate-800 shadow-xl">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            Have a matter requiring immediate evaluation?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Our intake partners review conflict-cleared matters within 24 hours.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="gold-bg-btn px-6 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 cursor-pointer"
        >
          <span>Discuss Your Matter With Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
