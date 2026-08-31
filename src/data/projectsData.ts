
export interface Project {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Blinkit Analysis SQL Project',
    description: "Analyzed Blinkit's sales, customer satisfaction, and inventory to extract actionable insights for optimization.",
    tools: ['SQL', 'Exploratory Data Analysis'],
    imageUrl: '/lovable-uploads/5b762e4a-e89d-41da-a520-7c7eb6e00513.png',
    githubUrl: 'https://github.com/krithiksharan13/BlinkIt-Analysis---SQL-Project.git',
  },
  {
    title: 'A/B Testing Analysis: Mutual Fund Risk Label Impact',
    description: 'Executed a comprehensive A/B testing workflow to assess the impact of visual risk labels on user behavior in mutual fund selection, comparing labeled vs unlabeled interfaces.',
    tools: ['A/B Testing', 'Statistical Analysis', 'Python', 'Data Visualization'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    githubUrl: 'https://github.com/krithiksharan13/A_B-Testing-Analysis-Mutual-Fund-Risk-Label-Impact.git',
  },
  {
    title: 'Mutual Fund Risk Indicator',
    description: 'Used machine learning to classify Indian mutual funds into risk categories based on historical performance.',
    tools: ['Python', 'Machine Learning', 'Streamlit'],
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800',
    githubUrl: 'https://github.com/krithiksharan13/Mutual_Fund_Risk_Predictor.git',
  },
  {
    title: 'FnP Sales Analysis',
    description: 'Developed an Excel dashboard for Ferns and Petals to uncover insights on revenue, customers, and product performance.',
    tools: ['Excel', 'DAX', 'Data Visualization'],
    imageUrl: '/lovable-uploads/03acd844-096d-479f-9edd-1bf49048d3ae.png',
    githubUrl: 'https://github.com/krithiksharan13/FnP-Sales-Analysis---Excel-Dashboard.git',
  },
  {
    title: 'Quantium Data Analytics Virtual Experience',
    description: 'Analyzed supermarket chip purchase data to understand customer behavior and evaluate a new store layout trial.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'PowerPoint'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    githubUrl: 'https://github.com/krithiksharan13/Quantium-Virtual-Internship.git',
  },
  {
    title: 'Amazon Sales Data Dashboard',
    description: 'An exploratory data analysis to understand sales trends, profitability, and regional performance on Amazon.',
    tools: ['Power BI', 'Python', 'Excel', 'Jupyter Notebook'],
    imageUrl: '/lovable-uploads/baf94e99-6084-4f99-8ae3-63d198ec1784.png',
    githubUrl: 'https://github.com/krithiksharan13/Unified_Mentor_Amazon_Sales_Dashboard.git',
  },
  {
    title: 'BCG GenAI Job Simulation',
    description: 'Built an AI-powered financial chatbot to interpret company performance from 10-K filings using NLP.',
    tools: ['Python', 'Pandas', 'NLP', 'Jupyter Notebook', 'Prompt Engineering'],
    imageUrl: '/lovable-uploads/cd51b6c9-9dd7-4b7a-837c-7416d989cd42.png',
    githubUrl: 'https://github.com/krithiksharan13/BCG-GenAI-Job-Simulation-Forage.git',
  },
  {
    title: 'Accenture Data Analytics & Visualization',
    description: 'Applied data analytics and visualization to help a social media company improve its content creation strategy.',
    tools: ['Excel', 'Data Cleaning', 'Data Modeling', 'Data Visualization'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    githubUrl: 'https://github.com/krithiksharan13/Accenture-Data-Analytics-and-Visualization---Forage.git',
  },
  {
    title: 'Heart Rate Diagnose Data Analysis',
    description: 'Conducted analysis on medical data to explore and derive insights from patients with heart-related problems.',
    tools: ['Python', 'Pandas', 'Excel', 'Tableau'],
    imageUrl: '/lovable-uploads/2f5c821f-1ac0-4c9a-90aa-7724525c0f46.png',
    githubUrl: 'https://github.com/krithiksharan13/Unified_Mentor_Heart_Rate_Analysis.git',
  },
  {
    title: 'British Airways Data Science Internship',
    description: 'Analyzed customer reviews and built predictive models to forecast customer buying behavior for British Airways.',
    tools: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
    githubUrl: 'https://github.com/krithiksharan13/British-Airways-Data-Science---Forage.git',
  },
  {
    title: 'TATA Data Visualization Internship',
    description: 'Created Power BI dashboards analyzing retail sales data to support C-level decision-making.',
    tools: ['Power BI', 'Data Analysis', 'Business Strategy'],
    imageUrl: '/lovable-uploads/35dcf107-6ff2-41b9-834a-8638842c3393.png',
    githubUrl: 'https://github.com/krithiksharan13/TCS-Virtual-Internship.git',
  },
  {
    title: 'PwC Switzerland Power BI Experience',
    description: 'Developed Power BI dashboards for call center, customer retention, and D&I to drive strategic business decisions.',
    tools: ['Power BI', 'Trend Analysis', 'Customer Churn Analysis'],
    imageUrl: '/lovable-uploads/977b9fd0-d68d-4444-93dc-b21e873ec0d3.png',
    githubUrl: 'https://github.com/krithiksharan13/PwC-Switzerland-Power-BI.git',
  }
];
