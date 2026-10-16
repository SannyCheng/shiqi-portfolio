const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Shiqi Cheng',
  preferredName: 'Sanny',
  location: 'Singapore',
  email: 'cheng.shiqi@163.com',
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
  education: [
    { school: 'National University of Singapore', degree: 'MSc · Data Science for Sustainability', date: '2026 — 2028', note: 'Machine Learning & Predictive Modelling · Data Visualisation · Principles of Sustainability' },
    { school: 'University of Nottingham', degree: 'BSc (Hons) · Economics', date: '2022 — 2026', note: 'Econometrics & Causal Inference · Mathematical Economics · Health Economics · Financial Economics' }
  ],
  leadership: [
    {
      title: 'Vice President',
      org: 'AIESEC',
      subtitle: 'Global youth-led organization',
      date: 'Sep 2022 – Nov 2023',
      description: 'Co-organized three career fairs at the University of Nottingham Ningbo China (UNNC).'
    },
    { title: 'Assistant Managing Editor', org: 'Ningbo Economic Review', date: 'Oct 2024 — Present' },
    {
      title: 'Peer Mentor',
      appointments: [
        { org: 'Nottingham Student–Alumni Association', date: 'Oct 2024 – Present' },
        { org: 'University of Nottingham Ningbo China', date: 'Sep 2023 – May 2024' }
      ]
    },
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
    hero: assetPath('images/hero.jpg'), portrait: assetPath('images/portrait.jpg'), kpmg: assetPath('images/kpmg.png'), conference: assetPath('images/conference.jpg'), presentation: assetPath('images/presentation.png'), graduation: assetPath('images/graduation.jpg')
  }
}
