
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  companyLink?: string;
}

export const professionalExperiences: ExperienceItem[] = [
  {
    role: 'AI Automation Engineer',
    company: 'INOOKEY - Birmingham, United Kingdom',
    duration: 'November 2025 - Present',
    description: 'Working with N8N automations and workflows based on client requirements.',
    achievements: [
      'Working with N8N automations and workflows based on client requirements',
      'Automated 2 client-facing workflows using n8n, resulting in a 30% reduction in manual effort and 25% faster process turnaround.',
      'Identified 8+ critical business and technical weak spots by developing a Business Risk & Loophole Assessment Report for a major project, improving overall risk visibility.',
      'Conducted competitor market analysis across ~10 competitors, uncovering 3+ market gaps and proposing 2 strategic recommendations to support product positioning.',
    ],
  },
  {
    role: 'Data Analyst-BI Developer',
    company: 'Radiant Ventures',
    duration: 'November 2024 - September 2025',
    description: 'Worked as a investment risk professional who reduced client losses by 25% through data-driven A/B testing and comprehensive portfolio analysis. I specialized in cross-functional collaboration to optimize workflows, cutting redundancy by 40% and aligning risk strategy with business growth.',
    achievements: [
      'Designed and executed A/B tests on risk communication involving over 250 users and ₹30+ Lakh in investments, resulting in a 25% reduction in investment losses and increased preference for low-risk products.',
      'Conducted portfolio audits and flagged anomalies for 15+ clients; completed over 100 investment risk assessments to support informed financial decision-making.',
      'Collaborated with Sales, Product, and Compliance teams to identify and resolve operational inefficiencies, reducing workflow redundancy by 40% and improving team throughput by 10%.',
      'Took on cross-functional responsibilities across data, business, and risk domains, contributing insights that influenced product strategy, compliance, and investment design that reduced overall losses by 5%.',
      'Analyzed risk profiles for 100+ investment opportunities, accelerating the team\'s decision-making process by 10%.',
      'Migrated investment data from physical formats to digital systems, significantly improving data accessibility and management.',
      'Designed and delivered 10+ reports and interactive dashboards, contributing to a 15% reduction in turnaround time for investment reviews.',
      'Collaborated cross-functionally with investment teams to align risk insights with business goals and ensure scalable, informed growth strategies.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Unified Mentor',
    duration: 'January 2024 - June 2024',
    description: 'Led exploratory data analysis that improved trend detection by 10%, built dashboards enhancing insight delivery by 15%, and contributed ideas that accelerated decisions by 20% and cut errors by 5%.',
    achievements: [
      'Spearheaded exploratory data analysis efforts, which directly contributed to a noticeable 10% increase in identifying revenue-generating trends, patterns, and anomalies within datasets.',
      'Skillfully crafted and implemented visualizations, reports, and dashboards, resulting in a 15% improvement in effectively communicating actionable insights to stakeholders.',
      'Actively Collaborated in meetings and brainstorming sessions, offering innovative ideas that led to 20% faster decision-making processes and a notable 5% reduction in error margin.',
    ],
  },
  {
    role: 'Junior Data Analyst Intern',
    company: 'Shopup',
    duration: '2022 - 2023',
    description: 'Assisted in data collection, cleaning, and preliminary analysis. Developed skills in SQL, Python, and data visualization tools.',
    achievements: [
      'Provided 50+ reports to the stakeholders and finance team for the yearly audit using SQL, BigQuery and metabase.',
      'Used python to generate reports and extract data from metabase, attach it to emails and send them to the 8+ departments.',
      'Increased efficiency by 20% in data extraction by utilizing SQL queries for retrieving relevant information from databases.',
      'Created documentation and provided updated nearly 500+ reports that ensured proper function and decreased cost of execution by 5%.',
      'Worked on the basics of a portal for the users and stakeholders called "infinity portal" using GoLang (internship project).',
    ],
  },
];
