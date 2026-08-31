export interface CertificateInfo {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
}

export interface CertificateCategoryInfo {
  name: string;
  emoji: string;
  certificates: CertificateInfo[];
}

export const certificateCategoriesInfo: CertificateCategoryInfo[] = [
  {
    name: 'Data Analytics',
    emoji: '📊',
    certificates: [
      {
        title: 'Learning ChatGPT for Business Analysis',
        issuer: 'LinkedIn Learning',
        date: 'Feb 2026',
        credentialId: 'c980b5a9af5a3bf960575b2a8f6d16b92beba28486d4709c06106636fdf174b0',
        url: 'https://www.linkedin.com/learning/certificates/c980b5a9af5a3bf960575b2a8f6d16b92beba28486d4709c06106636fdf174b0',
      },
      {
        title: 'Introduction to Web APIs',
        issuer: 'LinkedIn Learning',
        date: 'Jan 2026',
        credentialId: '01327d0af6d0fc52305231982697cec33e46c8d4baf19e873cf06c7892e8fe79',
        url: 'https://www.linkedin.com/learning/certificates/01327d0af6d0fc52305231982697cec33e46c8d4baf19e873cf06c7892e8fe79',
      },
      {
        title: 'Learning SQL Programming',
        issuer: 'LinkedIn Learning',
        date: 'Jan 2026',
        credentialId: '50b26602e2fc5c3da6d823caddd77636158986a6783742e4ad90fd7c1bc9f921',
        url: 'https://www.linkedin.com/learning/certificates/50b26602e2fc5c3da6d823caddd77636158986a6783742e4ad90fd7c1bc9f921',
      },
      {
        title: 'R for Data Science: Analysis and Visualization',
        issuer: 'LinkedIn Learning',
        date: 'Jan 2026',
        credentialId: '84de22107f4440021bca067a9232bcd4fa2b268d6462d0ac76d351f61d0316d5',
        url: 'https://www.linkedin.com/learning/certificates/84de22107f4440021bca067a9232bcd4fa2b268d6462d0ac76d351f61d0316d5',
      },
      {
        title: '2025 Complete SQL Bootcamp from Zero to Hero in SQL',
        issuer: 'Udemy',
        date: 'May 2024',
        credentialId: 'UC-dde71214-d932-41f4-a7f3-d69f67204e42',
      },
      {
        title: 'Data Analyst Skillpath: Zero to Hero in Excel, SQL & Python',
        issuer: 'Udemy',
        date: 'Jul 2024',
        credentialId: 'UC-5a72747f-fe9b-4ea0-9345-daae4c0ade51',
      },
    ],
  },
  {
    name: 'AI',
    emoji: '🤖',
    certificates: [
      {
        title: 'What is Generative AI',
        issuer: 'LinkedIn Learning',
        date: 'Feb 2026',
        credentialId: '202bb94a3aa0774ee71a506a8105a4cde867d0315f9486e841fdd561cd7007b1',
        url: 'https://www.linkedin.com/learning/certificates/202bb94a3aa0774ee71a506a8105a4cde867d0315f9486e841fdd561cd7007b1',
      },
      {
        title: 'Artificial Intelligence Creating Video From Photo',
        issuer: 'Udemy',
        date: 'Apr 2025',
        credentialId: 'UC-b5959bc3-9c4f-45c5-b6fd-9afb222916eb',
      },
      {
        title: 'Professional Logo Production With Artificial Intelligence',
        issuer: 'Udemy',
        date: 'Apr 2025',
        credentialId: 'UC-c6aa0597-48c0-40e6-8806-5b0d03076b9f',
      },
    ],
  },
  {
    name: 'Forage',
    emoji: '🏢',
    certificates: [
      {
        title: 'Accenture North America - Data Analytics and Visualization Job Simulation',
        issuer: 'Forage',
        date: 'Apr 2025',
        credentialId: 'DoMGm6hnmdWE4cJm2',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_EGf2NRH3awR8np98E_1745820481470_completion_certificate.pdf',
      },
      {
        title: 'British Airways - Data Science Job Simulation',
        issuer: 'Forage',
        date: 'Apr 2025',
        credentialId: 'CxDg8Dcba8mk9KZxm',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_EGf2NRH3awR8np98E_1745654050121_completion_certificate.pdf',
      },
      {
        title: 'Commonwealth Bank - Introduction to Data Science Job Simulation',
        issuer: 'Forage',
        date: 'Mar 2025',
        credentialId: 'D8T9bN4FNCMwwSZr5',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_EGf2NRH3awR8np98E_1741418522339_completion_certificate.pdf',
      },
      {
        title: 'PwC Switzerland - Power BI Job Simulation',
        issuer: 'Forage',
        date: 'Mar 2025',
        credentialId: 'CQ6Z2m9jAD9MzRQRN',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/a87GpgE6tiku7q3gu_4sLyCPgmsy8DA6Dh3_EGf2NRH3awR8np98E_1741416915258_completion_certificate.pdf',
      },
      {
        title: 'BCG - GenAI Job Simulation',
        issuer: 'Forage',
        date: 'Mar 2025',
        credentialId: 'PLaRTiPksTD6Fzaj7',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_EGf2NRH3awR8np98E_1741367264649_completion_certificate.pdf',
      },
      {
        title: 'Deloitte Australia - Data Analytics Job Simulation',
        issuer: 'Forage',
        date: 'Feb 2025',
        credentialId: 'is2c5RTXemSGLiM8i',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_EGf2NRH3awR8np98E_1740745445233_completion_certificate.pdf',
      },
      {
        title: 'Quantium - Data Analytics Job Simulation',
        issuer: 'Forage',
        date: 'Feb 2025',
        credentialId: 'YAmG3EksB3yrLYeM3',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_EGf2NRH3awR8np98E_1740744438208_completion_certificate.pdf',
      },
      {
        title: 'Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation',
        issuer: 'Forage',
        date: 'Feb 2025',
        credentialId: '9WwyTogudp8uwtb7L',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_EGf2NRH3awR8np98E_1739298219504_completion_certificate.pdf',
      },
    ],
  },
  {
    name: 'Academic',
    emoji: '🎓',
    certificates: [
      {
        title: 'Intelligent Mobility: Applied Computer Vision and Deep Learning',
        issuer: 'SSN College of Engineering',
        date: 'Jan 2022',
        credentialId: '',
      },
      {
        title: 'Computer Graphics',
        issuer: 'NPTEL',
        date: 'Dec 2020',
        credentialId: '',
      },
      {
        title: 'Programming in Java',
        issuer: 'NPTEL',
        date: 'Nov 2021',
        credentialId: '',
      },
      {
        title: 'Mastering Data Structures & Algorithms using C and C++',
        issuer: 'Udemy',
        date: 'Dec 2023',
        credentialId: '',
      },
    ],
  },
  {
    name: 'Non-Academic',
    emoji: '🎨',
    certificates: [
      {
        title: 'The Complete Adobe After Effects Bootcamp: Basic to Advanced',
        issuer: 'Udemy',
        date: 'May 2023',
        credentialId: '',
      },
    ],
  },
];
