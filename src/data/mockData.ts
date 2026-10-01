import { Attorney, CaseStudy, FAQItem, LegalArticle, PracticeArea, Testimonial, FirmStats } from '../types';

export const firmStatsData: FirmStats = {
  clientsServed: 450,
  yearsExperience: 10,
  expertAttorneys: 14,
  successRatePercent: 98.8,
};

export const practiceAreasData: PracticeArea[] = [
  {
    id: 'corporate-commercial',
    name: 'Corporate & Commercial Law',
    shortName: 'Corporate & Commercial',
    tagline: 'Comprehensive corporate advisory for domestic and foreign entities investing in Kenya.',
    description: 'Our Corporate & Commercial Team (CCT) provides a comprehensive range of corporate and commercial services to domestic and foreign clients planning to invest, or do business, in Kenya. These services cover all aspects of the client’s business and all transactions undertaken within the framework of Kenya’s regulatory regime.',
    iconName: 'Building2',
    image: '/src/assets/images/practice_corporate_law_1790847212036.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'Domestic corporations, multinational enterprises, foreign direct investors (FDI), and private entities establishing operations in Kenya and East Africa.',
    keyServices: [
      'Advising on the legal framework for proposed business activities & preferred business vehicles (branches of foreign companies, local subsidiaries)',
      'Obtaining regulatory registrations, business licenses, and government approvals',
      'Advising on government investment incentives under Kenyan law',
      'Mergers & Acquisitions (M&A), Joint Ventures, and Strategic Alliances',
      'Corporate Governance, commercial contracts, and statutory compliance'
    ],
    roadmap: [
      { step: '01', title: 'Diagnostic Regulatory Review', description: 'Reviewing statutory requirements, sector-specific licenses, and optimal incorporation structure in Kenya.' },
      { step: '02', title: 'Entity Structuring & Filings', description: 'Drafting shareholder agreements, branch charters, and securing Registrar of Companies and Kenya Investment Authority (KenInvest) approvals.' },
      { step: '03', title: 'Transactional Architecture', description: 'Drafting commercial contracts, tax-optimized transaction documents, and capital structuring agreements.' },
      { step: '04', title: 'Ongoing Governance & Compliance', description: 'Annual statutory filings, boardroom legal advisory, and compliance with Kenyan regulatory authorities.' }
    ],
    faqs: [
      { question: 'What is the preferred business vehicle for a foreign company entering Kenya?', answer: 'Foreign companies typically choose between registering a local subsidiary (private limited company) or establishing a registered branch of a foreign company. Our CCT guides you on taxation, local shareholding requirements, and regulatory implications.' },
      { question: 'Can you assist in obtaining investment incentives under Kenyan law?', answer: 'Yes. We advise clients on benefits available through the Kenya Investment Authority (KenInvest), Special Economic Zones (SEZs), and Export Processing Zones (EPZs).' }
    ]
  },
  {
    id: 'dispute-resolution',
    name: 'Litigation & Dispute Resolution',
    shortName: 'Dispute Resolution',
    tagline: 'Strategic advocacy before Kenyan courts, specialized tribunals, and international arbitral panels.',
    description: 'Our Dispute Resolution Team (DRT) provides strategic analysis of disputes and practical, customized advice on realistic assessments of options, projected outcomes, and costs. We offer tactical counsel on all forms of dispute resolution, from negotiation and mediation to arbitration and litigation before the High Court, Court of Appeal, and Supreme Court.',
    iconName: 'Gavel',
    image: '/src/assets/images/hero_law_firm_1790847178281.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'Commercial banks, corporate entities, institutional receivers, property owners, and international businesses confronting high-stakes disputes.',
    keyServices: [
      'Commercial Litigation: Corporate & shareholder disputes, partnership & JV controversies, banking & finance litigation, trade & construction disputes',
      'Civil Litigation: Land disputes, debt recovery, airline litigation, work injuries compensation, professional negligence, and contract enforcement',
      'Alternative Dispute Resolution (ADR): Domestic and international commercial arbitration (under ICC & LCIA rules), and court-mandated mediation',
      'Injunctions, Asset Tracing, Preservation Orders, and provisional courtroom remedies',
      'Cross-Border Litigation and Enforcement of Foreign Judgments and Arbitral Awards'
    ],
    roadmap: [
      { step: '01', title: 'Strategic Case Evaluation', description: 'Detailed analysis of merits, evidentiary strength, potential costs, and exploration of pre-action settlement posture.' },
      { step: '02', title: 'Urgent Injunctive Relief', description: 'Filing prompt conservatory orders, stay of execution, or injunction applications to protect assets and status quo.' },
      { step: '03', title: 'Rigorous Pleadings & Discovery', description: 'Synthesizing complex factual matrix, drafting unassailable pleadings, and executing decisive witness examinations.' },
      { step: '04', title: 'Advocacy & Judgment Execution', description: 'Persuasive courtroom advocacy followed by swift execution, debt realization, and judgment enforcement.' }
    ],
    faqs: [
      { question: 'What courts and tribunals do you appear before?', answer: 'Our advocates appear before the Supreme Court of Kenya, Court of Appeal, High Court (Commercial & Tax, Milimani, Constitutional & Human Rights), Environment and Land Court, Employment and Labour Relations Court, Tax Appeals Tribunal, and arbitral tribunals.' },
      { question: 'What is your track record in commercial banking recoveries and debt collection?', answer: 'Our senior advocates have successfully recovered in excess of Kshs 2,050,000,000 for leading commercial banks in Kenya, successfully resisting numerous debtor injunction applications.' }
    ]
  },
  {
    id: 'real-estate-conveyancing',
    name: 'Real Estate & Conveyancing',
    shortName: 'Real Estate & Conveyancing',
    tagline: 'Guiding infrastructure, project finance, property transactions, and title perfection across Kenya.',
    description: 'Kenya has entered an era of blooming projects and infrastructure with both new and old players ranging from borrowers, lenders, investors, developers to individuals diversifying in real estate, banking, and finance. We address the specific needs of clients from groundbreaking preliminaries to perfection of securities and completion.',
    iconName: 'Home',
    image: '/src/assets/images/attorney_team_hero_1790847190769.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'Real estate developers, institutional lenders, infrastructure funds, commercial landlords, diaspora buyers, and private property owners.',
    keyServices: [
      'Sub-division of land, change of user, amalgamation, and municipal planning approvals',
      'Transfer of land, long-term commercial leases, conveyances, and title registration',
      'Caveats, easements, licences, and registered powers of attorney',
      'Charges, mortgages, debentures, and discharge of charges for financial institutions',
      'Comprehensive legal due diligence and statutory land consents across all Lands Registries',
      'Structured and project finance, trade finance, syndicated loans, and Islamic finance',
      'Trusts relating to land, estate planning, and wills'
    ],
    roadmap: [
      { step: '01', title: 'Title Search & Legal Due Diligence', description: 'Official registry searches on Ardhisasa, historical green card verification, and site inspection to verify ownership.' },
      { step: '02', title: 'Consents & Approvals', description: 'Obtaining Land Control Board consents, rates clearance certificates, land rent receipts, and change of user permits.' },
      { step: '03', title: 'Security Drafting & Perfection', description: 'Drafting sale agreements, transfers, charges, and debentures conforming to statutory perfection standards.' },
      { step: '04', title: 'Stamp Duty & Registration', description: 'Valuation by government valuer, stamp duty assessment and payment, and final issuance of Certificate of Title.' }
    ],
    faqs: [
      { question: 'How do you assist diaspora clients purchasing real estate in Kenya?', answer: 'We handle complete end-to-end representation: conducting official due diligence, verifying titles at the land registry, negotiating sale agreements, executing powers of attorney, and overseeing title registration without requiring your physical travel.' },
      { question: 'What experience do you have in high-stakes land title litigation?', answer: 'Our lead advocate successfully defended the cancellation of KSC International Ltd’s land title worth Ksh 900 Million on behalf of the Receivers and Managers.' }
    ]
  },
  {
    id: 'employment-labour',
    name: 'Employment & Labour Law',
    shortName: 'Employment & Labour',
    tagline: 'Rigorous guidance on responsible employment practices and workplace compliance.',
    description: 'Our Employment Team (ET) provides what clients seek: rigorous guidance on responsible employment practices. ET helps employers arrive at sound and mutually beneficial employment policies, leveraging deep knowledge of the dynamics of Kenyan and international labour laws and practices. Close collaboration with our Dispute Resolution Team maps out current trends from the Employment and Labour Relations Court of Kenya.',
    iconName: 'Briefcase',
    image: '/src/assets/images/practice_family_court_1790847221818.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'Corporate employers, human resource directors, executive leaders, trade unions, and statutory authorities.',
    keyServices: [
      'General employment law advice & statutory compliance audits',
      'Preparation of employment contracts, HR policies, and employee handbooks',
      'Advising on employee compensation, pensions, and statutory benefits',
      'Reviewing and negotiating Collective Bargaining Agreements (CBAs)',
      'Discrimination, sexual harassment policies, and disciplinary tribunal advisory',
      'Setting up Employee Share Option Plans / Schemes (ESOPs)',
      'Employment litigation (redundancies, unlawful dismissals, trade disputes)',
      'Immigration-related matters, Special Passes, and Kenyan Work Permits'
    ],
    roadmap: [
      { step: '01', title: 'HR Policy & Contract Audit', description: 'Reviewing employment contracts against the Employment Act 2007, Labour Relations Act, and recent ELRC judicial decisions.' },
      { step: '02', title: 'Workplace Risk Management', description: 'Structuring legally compliant disciplinary processes, redundancy notices, and internal dispute resolution frameworks.' },
      { step: '03', title: 'Union & CBA Negotiations', description: 'Engaging trade unions and negotiating balanced Collective Bargaining Agreements protecting employer flexibility.' },
      { step: '04', title: 'Courtroom & Tribunal Defense', description: 'Defending claims before the Employment and Labour Relations Court and resolving trade disputes efficiently.' }
    ],
    faqs: [
      { question: 'What are the legal prerequisites for declaring redundancies in Kenya?', answer: 'Section 40 of the Employment Act requires giving at least one month notice to the employee and relevant labour officer, applying fair selection criteria, and paying severance pay of not less than 15 days for each completed year of service.' },
      { question: 'What is your experience in major employment litigation?', answer: 'Our team successfully defended the Kenya Civil Aviation Authority (KCAA) in a complex employment dispute valued in excess of Ksh 360 Million.' }
    ]
  },
  {
    id: 'intellectual-property',
    name: 'Intellectual Property & Brand Protection',
    shortName: 'Intellectual Property',
    tagline: 'Integrated approach to protecting, enforcing, and commercializing intellectual assets across Africa.',
    description: 'Our Intellectual Property Team (IPT) offers clients an integrated approach to protecting their intellectual assets in Kenya and across Africa. Combining insightful advice and innovative tools, we help clients in obtaining, defending, enforcing, and exploiting intellectual property rights, including trademarks, industrial designs, copyrights, and patents.',
    iconName: 'ShieldAlert',
    image: '/src/assets/images/attorney_group_footer_1790847201907.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'International brand owners, innovators, technology startups, creative industries, and manufacturing conglomerates.',
    keyServices: [
      'General IP advisory, clearance, and official/unofficial Registry searches',
      'Trade mark registration, renewal, and comprehensive portfolio management',
      'Trade mark / trade dress litigation, opposition proceedings, and expungement actions',
      'Anti-piracy and anti-counterfeiting enforcement with the Anti-Counterfeit Authority (ACA)',
      'Patent filing, registration, prosecution, and patent infringement litigation',
      'Copyright protection, software licensing, and industrial designs registration',
      'IP audit, due diligence, licensing, franchising, and technology transfer agreements'
    ],
    roadmap: [
      { step: '01', title: 'Registry Search & Registrability', description: 'Conducting official searches at the Kenya Industrial Property Institute (KIPI) to assess availability and distinctiveness.' },
      { step: '02', title: 'Filing & Gazette Publication', description: 'Filing applications, overcoming examination objections, and publishing in the Industrial Property Journal.' },
      { step: '03', title: 'Opposition & Defense', description: 'Filing or responding to notices of opposition before the Registrar of Trade Marks to safeguard brand exclusivity.' },
      { step: '04', title: 'Enforcement & Border Seizure', description: 'Partnering with the Anti-Counterfeit Authority (ACA) to record IP and seize counterfeit goods entering Kenya.' }
    ],
    faqs: [
      { question: 'How do you handle trademark infringement and opposition in Kenya?', answer: 'We actively monitor the Industrial Property Journal, file formal notices of opposition against infringing marks, and prosecute expungement applications. We successfully represented South African company LA Group (Pty) Ltd in opposing registration of a mark infringing on their global “POLO” trademark.' },
      { question: 'Is it necessary to record IP rights with the Anti-Counterfeit Authority (ACA)?', answer: 'Yes, mandatory recordation with ACA for all IP rights relating to imported goods is vital to enable customs officials to intercept counterfeits at Kenyan ports of entry.' }
    ]
  },
  {
    id: 'cross-border-international',
    name: 'International & Cross-Border Legal Services',
    shortName: 'Cross-Border & Diaspora',
    tagline: 'Dedicated legal support for multinational corporations, foreign investors, and diaspora clients.',
    description: 'We advise multinational corporations, financial institutions, governments, and high-net-worth individuals on legal matters that involve more than one jurisdiction, including disciplines such as Mergers and Acquisitions (M&A), Joint Ventures and strategic alliances, Foreign Direct Investment (FDI) structuring, and international financing. We combine deep knowledge of domestic laws with international regulations, treaties, and global business practices.',
    iconName: 'Scale',
    image: '/src/assets/images/hero_law_firm_1790847178281.jpg',
    leadAttorneyId: 'wafula-paul',
    clientFocus: 'Multinational corporations, international finance institutions, foreign investors, EAC regional operators, and Kenyan diaspora communities.',
    keyServices: [
      'Legal support for international and diaspora clients (property acquisitions, succession, estate administration)',
      'Foreign Direct Investment (FDI) structuring, EAC market entry, and bilateral investment treaty advisory',
      'Cross-border Mergers & Acquisitions (M&A) and regional joint ventures',
      'International financing, syndicated cross-border lending, and capital markets transactions',
      'Representation in international arbitration under ICC, LCIA, and UNCITRAL rules',
      'Cross-border litigation and reciprocal enforcement of foreign judgments and arbitral awards in Kenya'
    ],
    roadmap: [
      { step: '01', title: 'Cross-Border Conflict & Regulatory Audit', description: 'Evaluating choice-of-law provisions, treaty protections, foreign exchange guidelines, and jurisdictional interfaces.' },
      { step: '02', title: 'Tax-Efficient Structure Design', description: 'Coordinating with international counsel to structure double-taxation treaty advantages and corporate vehicles.' },
      { step: '03', title: 'Regulatory Clearances in Kenya', description: 'Obtaining COMESA competition clearances, Central Bank approvals, and sector-specific foreign investor licenses.' },
      { step: '04', title: 'Cross-Border Enforcement', description: 'Registering and executing foreign judgments and international arbitral awards through the Kenyan High Court.' }
    ],
    faqs: [
      { question: 'Can foreign judgments and international arbitral awards be enforced in Kenya?', answer: 'Yes. Foreign judgments from reciprocating countries are recognized under the Foreign Judgments (Reciprocal Enforcement) Act, and foreign arbitral awards are readily enforceable under Kenya’s Arbitration Act 1995 and the New York Convention.' },
      { question: 'How does the firm support diaspora Kenyans living in North America, Europe, or the Gulf?', answer: 'We serve as your trusted legal partner on the ground: executing property conveyances, handling estate succession before the High Court, resolving family land disputes, and overseeing commercial ventures without requiring travel to Kenya.' }
    ]
  }
];

export const attorneysData: Attorney[] = [
  {
    id: 'wafula-paul',
    name: 'WAFULA W. PAUL',
    role: 'Managing Partner & Senior Litigation Advocate',
    experience: '10+ Years Experience',
    specialty: 'Civil & Commercial Litigation, Banking Recoveries & ADR',
    bio: 'WAFULA W. PAUL is an experienced Litigation Advocate with a distinguished track record in managing complex legal disputes, representing high-profile corporate clients, and delivering strategic counsel before Kenyan courts and arbitral tribunals. Previously Senior Associate at Walker Kontos Advocates (2022–2025) and recipient of the prestigious Employee of the Year 2017 Award, Paul specializes in civil and commercial litigation, corporate debt recoveries exceeding Ksh 2.05 Billion, land title defense, and high-stakes trademark opposition. Known for his sharp analytical acumen, persuasive courtroom advocacy, and client-focused approach, he provides tailored solutions that consistently secure favorable outcomes for institutions and private clients alike.',
    image: '/wafula-paul.jpg',
    education: [
      'Advocate of the High Court of Kenya',
      'Kenya School of Law - Post Graduate Diploma in Law (ATP)',
      'Bachelor of Laws (LL.B. Honours)'
    ],
    barAdmissions: [
      'Law Society of Kenya (LSK)',
      'East Africa Law Society (EALS)',
      'High Court of Kenya'
    ],
    languages: ['English', 'Swahili'],
    memberships: [
      'Law Society of Kenya (LSK)',
      'East Africa Law Society (EALS)',
      'Chartered Institute of Arbitrators (Kenya Branch)'
    ],
    notableMatters: [
      'Acted for the Receivers and Managers of KSC International Ltd in relation to a land dispute; successfully defended the claim seeking cancellation of KSC’s land title, worth Ksh 900 Million.',
      'Representing several commercial banks, including Barclays Bank, Kenya Commercial Bank (KCB), Giro Bank, Paramount Universal Bank, Oriental Commercial Bank, and CFC Stanbic Bank, on both corporate and retail recoveries, recovering in excess of Kshs 2,050,000,000 in the last year.',
      'Acted for NCBA Bank in relation to debt recovery against General Printers Ltd and its directors; successfully argued for dismissal of the injunction application sought by the directors.',
      'Acted for Eco Bank Kenya Ltd in a high-stakes commercial case brought by Auto Fine Limited, seeking damages in excess of Ksh 1 Billion.',
      'Acted for HFCK Bank Ltd in the recovery of a debt in excess of Ksh 200 Million from Hadar Limited in arbitration, through realization of the residential property known as Sifa Apartments.',
      'Acted for Bank of Africa Kenya Limited in recovery of debt in excess of Ksh 180 Million from Turbo Highways Limited, successfully resisting various court injunctions.',
      'Acted for LA Group (Pty) Ltd, a South African company, in a trademark dispute against Wardrobe Collections Ltd; successfully opposed registration of an infringing mark on the global trademark “POLO”.',
      'Acted for the Kenya Civil Aviation Authority (KCAA) in an employment dispute whose value was in excess of Ksh 360 Million.',
      'Acted for Stanbic Bank in the recovery of a debt in excess of Ksh 1 Billion from Bake n Bite Ltd.'
    ],
    email: 'info@wafulapwadvocates.com',
    phone: '+254 716 954 112 | +254 780 323 657',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 'grace-mutua',
    name: 'Grace M. Mutua',
    role: 'Partner, Corporate & Commercial Team (CCT)',
    experience: '9+ Years Experience',
    specialty: 'Corporate Structuring, M&A & Regulatory Compliance',
    bio: 'Grace leads the Corporate & Commercial Team (CCT), advising multinational corporations, regional financial institutions, and local enterprises on cross-border transactions, regulatory licensing, joint ventures, and capital market operations. She possesses deep expertise in establishing foreign corporate branches and navigating Kenya’s investment incentives under KenInvest and Special Economic Zone frameworks.',
    image: '/src/assets/images/practice_corporate_law_1790847212036.jpg',
    education: [
      'Advocate of the High Court of Kenya',
      'Master of Laws (LL.M.) in Corporate & Commercial Law',
      'Bachelor of Laws (LL.B. Honours)'
    ],
    barAdmissions: ['Law Society of Kenya (LSK)', 'East Africa Law Society (EALS)'],
    languages: ['English', 'Swahili', 'French'],
    memberships: ['Law Society of Kenya (Commercial Law Committee)', 'Institute of Certified Secretaries (ICS)'],
    notableMatters: [
      'Advised a multinational logistics corporation on establishing a local subsidiary in Nairobi and securing regulatory approvals worth $45M.',
      'Structured syndicated trade financing facilities for regional agricultural export consortium.',
      'Conducted full corporate governance and anti-trust compliance audits for leading manufacturing entities.'
    ],
    email: 'gmutua@wafulapwadvocates.com',
    phone: '+254 716 954 112',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 'brian-otieno',
    name: 'Brian K. Otieno',
    role: 'Senior Associate, Real Estate & Conveyancing',
    experience: '8+ Years Experience',
    specialty: 'Conveyancing, Land Due Diligence & Project Finance',
    bio: 'Brian heads the Real Estate & Conveyancing division, guiding developers, commercial lenders, and diaspora clients through land acquisition due diligence, Ardhisasa digital registration, subdivision approvals, and security perfection. He has structured major commercial leases, mortgages, and institutional property trusts across Kenya.',
    image: '/src/assets/images/attorney_group_footer_1790847201907.jpg',
    education: [
      'Advocate of the High Court of Kenya',
      'Kenya School of Law (ATP Diploma)',
      'Bachelor of Laws (LL.B. Honours)'
    ],
    barAdmissions: ['Law Society of Kenya (LSK)'],
    languages: ['English', 'Swahili'],
    memberships: ['Law Society of Kenya (Conveyancing & Property Law Committee)'],
    notableMatters: [
      'Handled conveyancing and title issuance for a 120-unit master-planned residential development off Kiambu Road.',
      'Perfected banking securities (charges and debentures) valued at over Ksh 1.4 Billion for regional commercial banks.',
      'Managed extensive land due diligence and successfully resolved historical title boundary disputes in Nairobi and Kajiado.'
    ],
    email: 'botieno@wafulapwadvocates.com',
    phone: '+254 716 954 112',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 'faith-chepkemoi',
    name: 'Faith C. Chepkemoi',
    role: 'Associate, Employment & Intellectual Property (ET & IPT)',
    experience: '6+ Years Experience',
    specialty: 'Labour Relations, Brand Protection & Anti-Counterfeiting',
    bio: 'Faith works closely with both the Employment Team (ET) and Intellectual Property Team (IPT). She provides counsel on employment compliance, Collective Bargaining Agreements, trade union negotiations, trademark searches, KIPI registrations, and anti-counterfeiting enforcement actions with the Anti-Counterfeit Authority (ACA).',
    image: '/src/assets/images/practice_family_court_1790847221818.jpg',
    education: [
      'Advocate of the High Court of Kenya',
      'Kenya School of Law (ATP Diploma)',
      'Bachelor of Laws (LL.B. Honours)'
    ],
    barAdmissions: ['Law Society of Kenya (LSK)'],
    languages: ['English', 'Swahili'],
    memberships: ['Law Society of Kenya', 'Kenya Industrial Property Institute (KIPI) Registered Patent Agent'],
    notableMatters: [
      'Successfully filed trademark registrations and managed brand portfolios across 14 African jurisdictions.',
      'Assisted in drafting comprehensive executive employment policies and ESOP structures for fast-growing Kenyan tech companies.',
      'Coordinated raid actions with the Anti-Counterfeit Authority against unauthorized distribution of counterfeit consumer goods.'
    ],
    email: 'fchepkemoi@wafulapwadvocates.com',
    phone: '+254 780 323 657',
    linkedIn: 'https://linkedin.com'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Wafula PW & Co. Advocates delivered exemplary results during our multi-million debt recovery actions. Their surgical litigation strategy and deep command of banking securities in Kenyan courts are unmatched. They recovered substantial debt where others stalled.',
    clientName: 'D. K. Njoroge',
    clientRole: 'Head of Legal & Credit Recoveries',
    company: 'Commercial Banking Institution',
    practiceArea: 'Dispute Resolution',
    verified: true
  },
  {
    id: 't-2',
    quote: 'When our Ksh 900 Million land title faced aggressive cancellation proceedings, Paul Wafula’s courtroom mastery and tactical pleadings saved our assets. Their proactive communication and legal precision made them our trusted legal partner.',
    clientName: 'P. W. Mwangi',
    clientRole: 'Receiver & Manager',
    company: 'KSC International Ltd',
    practiceArea: 'Real Estate & Conveyancing',
    verified: true
  },
  {
    id: 't-3',
    quote: 'Their Intellectual Property Team acted decisively before the Kenyan Trademark Registry to protect our global trademark against unauthorized local registration. They possess genuine on-the-ground experience in African brand enforcement.',
    clientName: 'Johannes Van Der Merwe',
    clientRole: 'IP Counsel, South Africa',
    company: 'LA Group (Pty) Ltd',
    practiceArea: 'Intellectual Property',
    verified: true
  },
  {
    id: 't-4',
    quote: 'As a Kenyan in the diaspora, purchasing commercial and residential property in Nairobi used to be stressful. Wafula PW & Co. Advocates conducted comprehensive title due diligence and handled the conveyancing seamlessly from their Kiambu Road offices.',
    clientName: 'Mercy A. Wekesa',
    clientRole: 'Diaspora Investor & Executive',
    company: 'London / Nairobi',
    practiceArea: 'Cross-Border & Diaspora',
    verified: true
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Successful Defense of Ksh 900M Land Title for Receivers & Managers',
    matterType: 'High-Stakes Land & Commercial Litigation',
    practiceArea: 'Dispute Resolution & Real Estate',
    clientSector: 'Receivership & Property',
    challenge: 'A contentious petition sought the cancellation of a prime industrial and commercial land title valued at Ksh 900 Million belonging to KSC International Ltd (under receivership), which would have wiped out secured creditor interests.',
    strategy: 'Our litigation team raised jurisdictional objections, conducted deep historical registry analysis, demonstrated unbroken chain of title, and persuasively established the primacy of statutory receivership protections before the High Court.',
    outcome: 'The claim seeking cancellation was successfully defended in full, upholding the validity of the Ksh 900 Million title and safeguarding secured lenders.',
    confidentialityNote: 'Acted for the Receivers and Managers of KSC International Ltd.'
  },
  {
    id: 'cs-2',
    title: 'Recovery of Over Ksh 2.05 Billion Across Commercial Banking Portfolios',
    matterType: 'Banking Litigation & Debt Realization',
    practiceArea: 'Litigation & Dispute Resolution',
    clientSector: 'Banking & Financial Institutions',
    challenge: 'Corporate borrowers and debtors filed multiple interlocutory injunction applications seeking to restrain banks from realizing charged securities across Nairobi and surrounding counties.',
    strategy: 'Paul Wafula spearheaded aggressive courtroom opposition, disproving bad-faith claims of statutory non-compliance, validating statutory notices under the Land Act, and demonstrating debtors’ lack of equitable clean hands.',
    outcome: 'Successfully resisted debtor injunctions and achieved recoveries exceeding Ksh 2,050,000,000 for clients including NCBA, Stanbic, Eco Bank, Bank of Africa, and HFCK.',
    confidentialityNote: 'Represented major commercial banking institutions in Kenya.'
  },
  {
    id: 'cs-3',
    title: 'Global Brand Protection: Opposing “POLO” Trademark Infringement',
    matterType: 'Trademark Opposition & Brand Enforcement',
    practiceArea: 'Intellectual Property',
    clientSector: 'Fashion & Retail (South Africa / Kenya)',
    challenge: 'A local entity (Wardrobe Collections Ltd) sought registration of a trademark that infringed on the world-renowned “POLO” brand owned by South African multinational LA Group (Pty) Ltd.',
    strategy: 'Our Intellectual Property Team filed formal opposition before the Registrar of Trade Marks, demonstrating prior international registration, likelihood of consumer confusion, and the well-known status of the trademark.',
    outcome: 'Successfully opposed the registration, barring the infringing application and securing total brand protection for LA Group in the Kenyan market.',
    confidentialityNote: 'Matter prosecuted on behalf of LA Group (Pty) Ltd.'
  },
  {
    id: 'cs-4',
    title: 'Defense of Ksh 360M Employment Dispute for Statutory Authority',
    matterType: 'Employment & Labour Litigation',
    practiceArea: 'Employment & Labour Law',
    clientSector: 'Aviation & Public Sector',
    challenge: 'The Kenya Civil Aviation Authority (KCAA) was faced with a multi-million shilling collective employment claim alleging improper termination and contractual entitlements exceeding Ksh 360 Million.',
    strategy: 'Conducted rigorous analysis of employment regulations, collective bargaining agreements, and public service guidelines, presenting structured statutory defenses before the Employment and Labour Relations Court.',
    outcome: 'Successfully mitigated institutional exposure, achieving a favorable resolution safeguarding public resources and institutional governance.',
    confidentialityNote: 'Acted for the Kenya Civil Aviation Authority.'
  }
];

export const legalArticlesData: LegalArticle[] = [
  {
    id: 'art-1',
    slug: 'establishing-business-operations-in-kenya-regulatory-framework',
    title: 'Establishing Business Operations in Kenya: Vehicles, Approvals & Incentives',
    category: 'Corporate & Commercial',
    author: 'WAFULA W. PAUL',
    authorRole: 'Managing Partner',
    date: 'September 2026',
    readTime: '6 min read',
    summary: 'A strategic guide for foreign investors and diaspora entrepreneurs on preferred business vehicles, regulatory registrations, and accessing incentives under Kenyan law.',
    content: [
      'Kenya remains the premier economic and financial hub of East Africa, attracting international investors seeking a foothold in the African Continental Free Trade Area (AfCFTA). However, structuring business operations requires careful navigation of the Companies Act 2015 and sector-specific regulators.',
      'Foreign entities typically weigh the merits of establishing a local private limited company versus registering a branch of a foreign company. Factors influencing this decision include corporate tax differentials, local directorship requirements, and ease of profit repatriation.',
      'Furthermore, enterprises looking to establish manufacturing or technological operations should actively explore incentives under the Special Economic Zones (SEZ) Act, offering reduced corporate tax rates, zero-rated VAT, and simplified customs clearance.'
    ],
    keyTakeaways: [
      'Compare local subsidiary versus foreign branch tax liabilities before incorporation.',
      'Leverage investment certificates from KenInvest for accelerated business permits.',
      'Ensure strict compliance with the Data Protection Act 2019 and statutory Beneficial Ownership disclosures.'
    ]
  },
  {
    id: 'art-2',
    slug: 'trends-in-employment-and-labour-relations-court-kenya',
    title: 'Current Jurisprudential Trends in the Employment and Labour Relations Court',
    category: 'Employment & Labour',
    author: 'Faith C. Chepkemoi',
    authorRole: 'Associate, ET',
    date: 'August 2026',
    readTime: '5 min read',
    summary: 'Key judicial decisions from Kenya’s ELRC on procedural fairness in employee terminations, redundancy notices, and collective bargaining enforcement.',
    content: [
      'The Employment and Labour Relations Court (ELRC) of Kenya places paramount emphasis on both substantive justification and strict procedural fairness under Sections 41, 43, and 45 of the Employment Act 2007.',
      'Employers frequently stumble not on the substantive reason for termination, but on procedural pitfalls—such as failing to provide a written explanation in a language understood by the employee, or denying the right to be accompanied by a colleague or union representative during disciplinary hearings.',
      'In redundancy exercises, recent rulings mandate strict compliance with Section 40, including prior notice to the labour officer and objective selection criteria. Constructive legal guidance from the outset prevents debilitating damages awards.'
    ],
    keyTakeaways: [
      'Always document a two-stage disciplinary hearing with colleague or union representation.',
      'Comply strictly with statutory 30-day redundancy notices to both the employee and local labour officer.',
      'Regularly review employee handbooks against evolving ELRC jurisprudence.'
    ]
  },
  {
    id: 'art-3',
    slug: 'perfection-of-banking-securities-real-estate-kenya',
    title: 'Perfection of Banking Securities & Due Diligence under Kenyan Property Law',
    category: 'Real Estate & Banking',
    author: 'Brian K. Otieno',
    authorRole: 'Senior Associate, Conveyancing',
    date: 'July 2026',
    readTime: '5 min read',
    summary: 'Critical steps for financial institutions and property investors: title due diligence on Ardhisasa, spousal consents, and unassailable charge perfection.',
    content: [
      'With significant digitization through the Ardhisasa platform and rigorous statutory requirements under the Land Act and Land Registration Act, perfecting charges and mortgages requires meticulous due diligence.',
      'Financial institutions and purchasers must verify not only official registry searches, but historical cadastral maps, Land Control Board consents (for agricultural land), and mandatory spousal consents under Section 79 of the Land Act.',
      'When defaults occur, the enforceability of statutory powers of sale hinges entirely on whether the charge was perfected impeccably and statutory notices under Sections 90 and 96 were properly served.'
    ],
    keyTakeaways: [
      'Ensure mandatory spousal consent is obtained and witnessed prior to executing charges.',
      'Verify digital cadastral records against physical registry green cards to prevent overlapping titles.',
      'Comply strictly with statutory timelines when issuing Section 90 default notices.'
    ]
  }
];

export const faqItemsData: FAQItem[] = [
  {
    category: 'Consultation & Location',
    question: 'Where is the firm located and how can I arrange a consultation?',
    answer: 'Our main offices are located on the First Floor of MCMX Building, Off Kiambu Road, Nairobi, Kenya. You can schedule an in-person or virtual consultation via our website contact form, telephone us at +254 716 954 112 / +254 780 323 657, or email info@wafulapwadvocates.com.'
  },
  {
    category: 'Diaspora & Cross-Border',
    question: 'How do you handle legal matters for Kenyans living in the diaspora or foreign investors?',
    answer: 'We provide dedicated legal support for international and diaspora clients. We handle real estate due diligence and conveyancing, company incorporation, succession, and commercial litigation without requiring your physical presence in Kenya, utilizing secure encrypted videoconferences and registered powers of attorney.'
  },
  {
    category: 'Fee Structures',
    question: 'How are legal fees determined at Wafula PW & Co. Advocates?',
    answer: 'Our fee structures strictly conform to the Advocates (Remuneration) Order of Kenya, ensuring transparency, predictability, and fairness. Depending on the brief, we offer fixed transactional fees for conveyancing and corporate setup, hourly rates for complex advisory, and retainer arrangements for ongoing corporate general counsel.'
  },
  {
    category: 'Dispute Resolution & Courts',
    question: 'What courts and tribunals do your advocates appear before?',
    answer: 'We represent clients across Kenya before the Supreme Court, Court of Appeal, High Court, Environment and Land Court, Employment and Labour Relations Court, Tax Appeals Tribunal, National Environment Tribunal, and domestic and international arbitration panels (under ICC, LCIA, and CIArb rules).'
  },
  {
    category: 'Confidentiality & Ethics',
    question: 'How does the firm ensure client confidentiality and conflict clearance?',
    answer: 'Client confidentiality is a cornerstone of our firm values. We conduct rigorous preliminary conflicts checks prior to any substantive engagement, and all client records, strategies, and communications are protected under strict advocate-client legal privilege.'
  }
];
