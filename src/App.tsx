/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { PracticeAreaStrip } from './components/sections/PracticeAreaStrip';
import { IntroAttorneysSection } from './components/sections/IntroAttorneysSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { PracticeAreasSection } from './components/sections/PracticeAreasSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { LegalProcessSection } from './components/sections/LegalProcessSection';
import { TeamSection } from './components/sections/TeamSection';
import { InsightsFaqSection } from './components/sections/InsightsFaqSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { GiantTypographicFooter } from './components/sections/GiantTypographicFooter';

// Modals
import { ConsultationModal } from './components/modals/ConsultationModal';
import { AttorneyProfileModal } from './components/modals/AttorneyProfileModal';
import { PracticeDetailModal } from './components/modals/PracticeDetailModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ArticleReaderModal } from './components/modals/ArticleReaderModal';
import { SearchModal } from './components/modals/SearchModal';
import { AdminCmsModal } from './components/modals/AdminCmsModal';
import { LegalTermsModal } from './components/modals/LegalTermsModal';

// Data & Types
import {
  practiceAreasData,
  attorneysData,
  firmStatsData,
} from './data/mockData';
import {
  Attorney,
  CaseStudy,
  ConsultationSubmission,
  FirmStats,
  LegalArticle,
  PracticeArea,
  PracticeAreaId,
} from './types';

export default function App() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [initialPracticeId, setInitialPracticeId] = useState<PracticeAreaId | undefined>();
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // App data state (editable via CMS)
  const [stats, setStats] = useState<FirmStats>(firmStatsData);
  const [submissions, setSubmissions] = useState<ConsultationSubmission[]>([
    {
      id: 'SUB-K84A12',
      fullName: 'David K. Maina',
      email: 'd.maina@apexholdings.co.ke',
      phone: '+254 722 819 044',
      company: 'Apex Logistics & Energy Ltd',
      practiceArea: 'dispute-resolution',
      preferredContact: 'phone',
      preferredDate: '2026-10-14',
      message: 'Urgent commercial litigation review required: defending against an ex-parte injunction sought by a defaulted equipment contractor before the Milimani Commercial Court.',
      uploadedFileName: 'Plaint_and_Application_Copy.pdf',
      timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
      status: 'new',
    },
    {
      id: 'SUB-L91D78',
      fullName: 'Dr. Jane W. Ndung’u',
      email: 'j.ndungu@globalhealth.org',
      phone: '+44 7911 123456',
      company: 'Diaspora Property Investment Syndicate',
      practiceArea: 'real-estate-conveyancing',
      preferredContact: 'video',
      preferredDate: '2026-10-18',
      message: 'Seeking legal due diligence, title search on Ardhisasa, and contract drafting for the acquisition of 5 acres prime commercial land along Kiambu Road.',
      timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
      status: 'reviewed',
    },
  ]);

  // Featured partner for overview section
  const featuredAttorney = attorneysData[0]; // Omar Lubin

  // Global keyboard shortcuts (Cmd+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenConsultationWithPractice = (practiceId?: string) => {
    if (practiceId) {
      setInitialPracticeId(practiceId as PracticeAreaId);
    } else {
      setInitialPracticeId(undefined);
    }
    setSelectedPractice(null);
    setSelectedAttorney(null);
    setIsConsultationOpen(true);
  };

  const handleBookWithAttorney = (attorney: Attorney) => {
    // Pick practice area best matching attorney's specialty
    const matched = practiceAreasData.find((p) => p.leadAttorneyId === attorney.id);
    if (matched) {
      setInitialPracticeId(matched.id);
    }
    setSelectedAttorney(null);
    setIsConsultationOpen(true);
  };

  const handleConsultationSuccess = (newSub: ConsultationSubmission) => {
    setSubmissions((prev) => [newSub, ...prev]);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#f3e7ce] selection:text-[#080c10]">
      {/* Floating Top Navbar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultationWithPractice()}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultationWithPractice()}
          onExplorePractices={() => handleNavigateSection('practice-areas')}
        />

        {/* Practice Area Quick Horizontal Navigation Strip */}
        <PracticeAreaStrip onSelectPractice={(p) => setSelectedPractice(p)} />

        {/* Firm Overview / Attorney Section (Split Screen) */}
        <IntroAttorneysSection
          stats={stats}
          featuredAttorney={featuredAttorney}
          onSelectAttorney={(a) => setSelectedAttorney(a)}
          onViewAllTeam={() => handleNavigateSection('team')}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Practice Areas Section ("Explore Our Comprehensive Legal Solutions") */}
        <PracticeAreasSection
          practices={practiceAreasData}
          onSelectPractice={(p) => setSelectedPractice(p)}
        />

        {/* Team Section */}
        <TeamSection
          attorneys={attorneysData}
          onSelectAttorney={(a) => setSelectedAttorney(a)}
        />

        {/* Client Success Stories & Testimonials Section */}
        <TestimonialsSection
          onOpenConsultation={() => handleOpenConsultationWithPractice()}
          onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
        />

        {/* Legal Process Roadmap Section */}
        <LegalProcessSection
          onOpenConsultation={() => handleOpenConsultationWithPractice()}
        />

        {/* Insights & FAQ Accordion Section */}
        <InsightsFaqSection
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* Final Pre-Footer CTA */}
        <FinalCtaSection
          onOpenConsultation={() => handleOpenConsultationWithPractice()}
        />

        {/* Dramatic Giant Typographic "Justice" & Layered Group Photo Footer */}
        <GiantTypographicFooter
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenDisclaimer={() => setLegalModalType('disclaimer')}
          onNavigateSection={handleNavigateSection}
        />
      </main>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSubmitSuccess={handleConsultationSuccess}
        initialPracticeId={initialPracticeId}
      />

      <AttorneyProfileModal
        attorney={selectedAttorney}
        onClose={() => setSelectedAttorney(null)}
        onBookWithAttorney={handleBookWithAttorney}
      />

      <PracticeDetailModal
        practice={selectedPractice}
        onClose={() => setSelectedPractice(null)}
        onBookConsultation={(pid) => handleOpenConsultationWithPractice(pid)}
        onSelectAttorney={(a) => {
          setSelectedPractice(null);
          setSelectedAttorney(a);
        }}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => handleOpenConsultationWithPractice()}
      />

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => handleOpenConsultationWithPractice()}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPractice={(p) => setSelectedPractice(p)}
        onSelectAttorney={(a) => setSelectedAttorney(a)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
      />

      <AdminCmsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        stats={stats}
        onUpdateStats={(newStats) => setStats(newStats)}
        submissions={submissions}
        onUpdateSubmissionStatus={(id, status) => {
          setSubmissions((prev) =>
            prev.map((s) => (s.id === id ? { ...s, status } : s))
          );
        }}
      />

      <LegalTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
