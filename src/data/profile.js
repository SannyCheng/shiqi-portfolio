export const profile = {
  name: 'Shiqi Cheng',
  preferredName: 'Sanny',
  location: 'Singapore',
  email: 'cheng.shiqi@163.com',
  phone: '+65 8413 9311',
  linkedin: 'https://www.linkedin.com/in/shiqi-cheng-a29376271/',
  eyebrow: 'Business × Data × AI',
  headline: 'Turning complex data into clear, practical decisions.',
  intro: 'Economics-trained and data-driven, I work across business analysis, analytics and AI-assisted workflows — translating operational complexity into structured insight and action.',
  about: [
    'I am an MSc Data Science for Sustainability student at the National University of Singapore, building on an Economics background from the University of Nottingham.',
    'My experience spans business development, audit, research and product-oriented data work. I enjoy bringing structure to messy information: validating data, framing the right question, and presenting a result that people can use.'
  ],
  stats: [
    { value: '60K+', label: 'person-wave records processed' },
    { value: '14K+', label: 'documents structured' },
    { value: '30+', label: 'projects assessed for value' },
  ],
  experience: [
    {
      company: 'Yaoyanshe · Biopharma Tech Platform', role: 'Strategy & Business Development Intern', place: 'Shanghai, China', date: 'Jun — Sep 2025',
      summary: 'Combined commercial analysis with operational data to support project prioritisation and partnership targeting.',
      highlights: ['Analysed 20+ Phase IV clinical research projects for data, reporting and resource gaps.', 'Built a Power BI view of cost-effectiveness across 30+ projects; used SQL and Python to turn internal records into planning inputs.', 'Supported feasibility assessment and bid preparation for Bayer’s investigator-initiated trial on Finerenone.']
    },
    {
      company: 'KPMG', role: 'Audit Intern', place: 'Shanghai, China', date: 'Jan — Mar 2024',
      summary: 'Examined how procurement, sales, inventory and settlement processes worked in practice.',
      highlights: ['Reviewed 250+ control testing and walkthrough items for a large B2B steel trading platform.', 'Assessed transaction evidence, data accuracy and process consistency; identified control gaps and documentation issues.']
    },
    {
      company: 'University of Nottingham Ningbo China', role: 'Data Science Research Assistant', place: 'Ningbo, China', date: '2024 — 2026',
      summary: 'Worked across document intelligence and multi-sensor health data, with a focus on reliable processing and validation.',
      highlights: ['Designed a workflow to structure 14,000+ complex documents and evaluated AI-assisted text parsing against Alibaba Cloud NLP APIs.', 'Cleaned and integrated 10,000+ hours of wearable-device data with pandas, addressing duplicates, missing values and sequence issues.']
    }
  ],
  projects: [
    {
      number: '01', title: 'AI-Powered Subcontracting Desk', date: '2026', tag: 'AI · Operations',
      description: 'A decision-support system that turns informal factory dispatch requests into explainable subcontractor allocations across capacity, queue, quality, cost and operational risk.',
      detail: 'Frontend development and end-to-end integration across the LLM, allocation engine, simulation and evaluation modules.'
    },
    {
      number: '02', title: 'Health Insurance Reform & Healthcare Burden', date: '2025', tag: 'Policy · Causal Inference',
      description: 'Evaluated whether reform reduced rural–urban inequality in healthcare financial burden using 60,000+ CHARLS person-wave records.',
      detail: 'Applied a triple-difference design with two-way fixed effects, parallel-trend checks and subgroup analysis.'
    },
    {
      number: '03', title: 'Machine Learning for Differential Diagnosis', date: '2025', tag: 'ML · Decision Support',
      description: 'Built and validated multi-class models for ME/CFS, depression and co-occurrence; Random Forest achieved 81.8% accuracy and 0.80 macro-F1.',
      detail: 'Combined model evaluation with a clinical cost-benefit framework and a human-oversight deployment plan.'
    }
  ],
  education: [
    { school: 'National University of Singapore', degree: 'MSc · Data Science for Sustainability', date: '2026 — 2028', note: 'Machine Learning & Predictive Modelling · Data Visualisation · Principles of Sustainability' },
    { school: 'University of Nottingham', degree: 'BSc (Hons) · Economics', date: '2022 — 2026', note: 'Econometrics & Causal Inference · Mathematical Economics · Health Economics · Financial Economics' }
  ],
  leadership: [
    { title: 'Assistant Managing Editor', org: 'Ningbo Economic Review', date: 'Oct 2024 — Present' },
    { title: 'Peer Mentor', org: 'Nottingham Student-Alumni Association', date: 'Oct 2024 — Present' },
    { title: 'Peer Mentor', org: 'University of Nottingham Ningbo China', date: 'Sep 2023 — May 2024' },
    { title: 'Volunteer', org: 'International Youth Council', date: 'Feb 2023' }
  ],
  recognition: ['Best Practical Consultancy Award · SEED Scholarship', 'Best Poster Award · 2nd UNNC FHSS Student Research Conference'],
  skills: [
    { group: 'Analysis', items: ['Excel', 'Power BI', 'Google Sheets', 'SQL', 'Python', 'pandas', 'Stata'] },
    { group: 'Practice', items: ['Data cleaning', 'Data validation', 'Dashboard development', 'Causal inference', 'Performance reporting'] },
    { group: 'AI & Automation', items: ['AI-assisted workflows', 'Information structuring', 'Output validation', 'Responsible AI awareness'] },
    { group: 'Communication', items: ['Research synthesis', 'Stakeholder reporting', 'Business writing', 'Mandarin · Native', 'English · Fluent'] }
  ],
  images: {
    hero: '/images/hero.jpg', portrait: '/images/portrait.jpg', kpmg: '/images/kpmg.png', conference: '/images/conference.jpg', presentation: '/images/presentation.png', graduation: '/images/graduation.jpg'
  }
}
