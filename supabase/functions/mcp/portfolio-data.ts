// ---------------------------------------------------------------------------
// Portfolio content for the MCP server (read-only).
//
// SOURCE OF TRUTH for the website UI is `src/data/*` in this repo. This file is
// a plain-data mirror for the Deno edge function (which cannot import the React
// data modules - they pull in image assets and JSX). Keep the two in sync when
// content changes; there is no build step linking them yet.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Krithik Sharan S A",
  headline: "A Data Analyst who transforms numbers into narratives.",
  location: "Leeds, England",
  currentRoles: [
    "AI Automation Engineer at INOOKEY (Birmingham, UK)",
    "PGT Faculty Officer at The University of Leeds",
    "MSc Data Science and Analytics student, University of Leeds",
  ],
  links: {
    website: "https://krithik-sharan.vercel.app",
    email: "krithiksharan13@gmail.com",
    linkedin: "https://www.linkedin.com/in/krithiksharan",
    github: "https://github.com/krithiksharan13",
  },
};

export const about =
  "Krithik Sharan is a data analyst drawn to structure and clarity - where others see chaos, he sees patterns. His path into data science started with a love of probability and a desire to solve real-world problems, and has taken him through fintech, business intelligence, and risk analytics. A project he is proud of: digitising decades of investment data at Radiant Ventures, blending data migration, change management, and human connection - building master tables from scratch and helping financial veterans adopt new workflows. He has hands-on experience with SQL, Python, Power BI, R, and a background in risk assessment, A/B testing, and UI design, delivering insights that reduced losses, accelerated decisions, and improved retention. He is now pursuing an MSc in Data Science and Analytics at the University of Leeds, going deeper into research and machine learning. Outside work he is a completionist gamer (RPGs, FPS, puzzles) and a keen sportsman - he captained his school's first football, volleyball, and basketball teams in South Tamil Nadu and later played university-level volleyball. He is based in Leeds, England and is happy to talk over coffee or a plate of biryani.";

export const professionalExperiences = [
  {
    role: "AI Automation Engineer",
    company: "INOOKEY - Birmingham, United Kingdom",
    duration: "November 2025 - Present",
    description:
      "Working with N8N automations and workflows based on client requirements.",
    achievements: [
      "Working with N8N automations and workflows based on client requirements",
      "Automated 2 client-facing workflows using n8n, resulting in a 30% reduction in manual effort and 25% faster process turnaround.",
      "Identified 8+ critical business and technical weak spots by developing a Business Risk & Loophole Assessment Report for a major project, improving overall risk visibility.",
      "Conducted competitor market analysis across ~10 competitors, uncovering 3+ market gaps and proposing 2 strategic recommendations to support product positioning.",
    ],
  },
  {
    role: "Data Analyst-BI Developer",
    company: "Radiant Ventures",
    duration: "November 2024 - September 2025",
    description:
      "Investment risk professional who reduced client losses by 25% through data-driven A/B testing and portfolio analysis, and cut workflow redundancy by 40% through cross-functional collaboration.",
    achievements: [
      "Designed and executed A/B tests on risk communication involving over 250 users and ₹30+ Lakh in investments, resulting in a 25% reduction in investment losses and increased preference for low-risk products.",
      "Conducted portfolio audits and flagged anomalies for 15+ clients; completed over 100 investment risk assessments.",
      "Collaborated with Sales, Product, and Compliance teams to reduce workflow redundancy by 40% and improve team throughput by 10%.",
      "Contributed insights that influenced product strategy, compliance, and investment design, reducing overall losses by 5%.",
      "Analyzed risk profiles for 100+ investment opportunities, accelerating decision-making by 10%.",
      "Migrated investment data from physical formats to digital systems.",
      "Designed and delivered 10+ reports and interactive dashboards, contributing to a 15% reduction in turnaround time for investment reviews.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    duration: "January 2024 - June 2024",
    description:
      "Led exploratory data analysis that improved trend detection by 10%, built dashboards enhancing insight delivery by 15%, and contributed ideas that accelerated decisions by 20%.",
    achievements: [
      "Spearheaded exploratory data analysis, contributing to a 10% increase in identifying revenue-generating trends, patterns, and anomalies.",
      "Crafted visualizations, reports, and dashboards, resulting in a 15% improvement in communicating actionable insights to stakeholders.",
      "Offered ideas in brainstorming sessions that led to 20% faster decision-making and a 5% reduction in error margin.",
    ],
  },
  {
    role: "Junior Data Analyst Intern",
    company: "Shopup",
    duration: "2022 - 2023",
    description:
      "Assisted in data collection, cleaning, and preliminary analysis. Developed skills in SQL, Python, and data visualization tools.",
    achievements: [
      "Provided 50+ reports to stakeholders and the finance team for the yearly audit using SQL, BigQuery and Metabase.",
      "Used Python to generate reports, extract data from Metabase, and email them to 8+ departments.",
      "Increased data-extraction efficiency by 20% using SQL queries.",
      "Documented and updated nearly 500+ reports, decreasing cost of execution by 5%.",
      'Worked on the basics of a user/stakeholder portal called "infinity portal" using GoLang (internship project).',
    ],
  },
];

export const otherExperiences = [
  {
    role: "Post Graduate (Taught) Faculty Officer",
    company: "The University of Leeds - Leeds University Union",
    duration: "November 2025 - present",
    description:
      "Selected as the Faculty Officer representing all Engineering and Physical Sciences departments.",
    achievements: [
      "Created and launched the official EPS Student Community Instagram, a faculty-wide communication channel supporting 100+ EPS students.",
      "Represented EPS PGT students in quality assurance, international student life, and inter-school communication, escalating student feedback to faculty-level discussions.",
      "Participated in FTSEC meetings, formally presenting student concerns and ensuring PGT perspectives were reflected in faculty decisions.",
    ],
  },
  {
    role: "Freelance UI Designer",
    company: "Org Linked",
    duration: "December 2024",
    description:
      "Helped design the UI of the first version of their official website using Figma.",
    achievements: [
      "Designed a custom user interface tailored to client requirements for a seamless experience across platforms.",
      "Translated complex requirements into an engaging, functional UI, contributing to a 25% boost in user satisfaction.",
      "Focused on clean, maintainable, responsive design.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Barani TV",
    duration: "February 2023 - May 2023",
    description:
      "Developed the first version of the responsive website interface for Barani TV, a press and multimedia company in Tirunelveli, using TypeScript, Tailwind CSS, and HTML.",
    achievements: [
      "Developed 100% of the frontend using TypeScript (60%), Tailwind CSS (30%), and HTML (10%).",
      "Created modular, reusable UI components, reducing future development effort by 40%.",
      "Achieved 95%+ responsiveness and cross-browser compatibility.",
      "Delivered a Google Lighthouse Performance Score of 90+.",
    ],
  },
  {
    role: "Design and Marketing Head",
    company: "ProcodeIT",
    duration: "August 2021 - May 2022",
    description:
      "Revived the dormant department coding club by organizing events, building a social media presence, and posting regular content.",
    achievements: [
      "Taught the basics of Premiere Pro to 20+ students virtually.",
      "Created the club's social media presence.",
      "Helped organize 10+ events; created 40+ posters and 10+ invitations.",
      "Grew the club from 20 members to 250+.",
    ],
  },
  {
    role: "Information Technology Intern",
    company: "Ramco Cements Pvt Ltd.",
    duration: "January 2022 - February 2022",
    description:
      "Learned company operations and logistics, assisting with documentation, integrity checking, and analysis.",
    achievements: [
      "Delivered support for team-based IT projects, improving efficiency by 10%.",
      "Completed 25+ assigned tasks ahead of schedule.",
      "Developed internal documentation that reduced miscommunication and errors by 15%.",
    ],
  },
  {
    role: "Video Editor & Media Coordinator",
    company: "TEDxYouth@Vannarpettai",
    duration: "December 2019 - May 2020",
    description:
      "Led video production, sponsor coordination, and live streaming for one of South Tamil Nadu's first TEDx events.",
    achievements: [
      "Edited all event videos (talks, promos, sponsor reels) to TEDx brand standards.",
      "Coordinated with 6+ speakers and team members to finalize video content.",
      "Managed sponsor video integration and communication.",
      "Ran end-to-end live streaming on BigBlueButton.",
      "Played a key role in launching one of South Tamil Nadu's first TEDx events.",
    ],
  },
];

export const minorExperiences = [
  {
    role: "Achievers House Captain",
    company: "Pushpalatha Vidya Mandir",
    duration: "June 2017 - February 2018",
    description:
      "Led the Achiever's House (Blue Team) to a second-place finish in the inter-house competitions.",
    achievements: [
      "Overall Male Individual Champion in the Super Senior Category.",
      "Gold medals in Shot Put, Discus Throw and Javelin Throw (Super Senior Sports Meet 2017-2018).",
      "International English Olympiad - International Rank 134.",
      "International Mathematics Olympiad - State Rank 24.",
    ],
  },
  {
    role: "Under-19 Football Team Captain",
    company: "Pushpalatha Vidya Mandir",
    duration: "2016-2017",
    description:
      "Captained the school football team in the Under-19 category, winning first place in the South Tamil Nadu cluster matches.",
    achievements: [
      "Best Defender of the tournament.",
      "100% penalty goal conversion award.",
      "Gold medal for the 2nd year in a row.",
    ],
  },
  {
    role: "Other Responsibilities",
    company: "Pushpalatha Vidya Mandir",
    duration: "",
    description: "",
    achievements: [
      "10th Grade English Club President",
      "9th Grade Environmental Club Secretary",
      "10th Grade Junior Sports Captain for the Achiever's House (Blue).",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "Blinkit Analysis SQL Project",
    description:
      "Analyzed Blinkit's sales, customer satisfaction, and inventory to extract actionable insights for optimization.",
    tools: ["SQL", "Exploratory Data Analysis"],
    githubUrl:
      "https://github.com/krithiksharan13/BlinkIt-Analysis---SQL-Project.git",
  },
  {
    title: "A/B Testing Analysis: Mutual Fund Risk Label Impact",
    description:
      "A comprehensive A/B testing workflow assessing the impact of visual risk labels on user behaviour in mutual fund selection.",
    tools: ["A/B Testing", "Statistical Analysis", "Python", "Data Visualization"],
    githubUrl:
      "https://github.com/krithiksharan13/A_B-Testing-Analysis-Mutual-Fund-Risk-Label-Impact.git",
  },
  {
    title: "Mutual Fund Risk Indicator",
    description:
      "Machine learning to classify Indian mutual funds into risk categories based on historical performance.",
    tools: ["Python", "Machine Learning", "Streamlit"],
    githubUrl:
      "https://github.com/krithiksharan13/Mutual_Fund_Risk_Predictor.git",
  },
  {
    title: "FnP Sales Analysis",
    description:
      "An Excel dashboard for Ferns and Petals uncovering insights on revenue, customers, and product performance.",
    tools: ["Excel", "DAX", "Data Visualization"],
    githubUrl:
      "https://github.com/krithiksharan13/FnP-Sales-Analysis---Excel-Dashboard.git",
  },
  {
    title: "Quantium Data Analytics Virtual Experience",
    description:
      "Analyzed supermarket chip purchase data to understand customer behaviour and evaluate a new store-layout trial.",
    tools: ["Python", "Pandas", "Matplotlib", "PowerPoint"],
    githubUrl: "https://github.com/krithiksharan13/Quantium-Virtual-Internship.git",
  },
  {
    title: "Amazon Sales Data Dashboard",
    description:
      "Exploratory data analysis of sales trends, profitability, and regional performance on Amazon.",
    tools: ["Power BI", "Python", "Excel", "Jupyter Notebook"],
    githubUrl:
      "https://github.com/krithiksharan13/Unified_Mentor_Amazon_Sales_Dashboard.git",
  },
  {
    title: "BCG GenAI Job Simulation",
    description:
      "An AI-powered financial chatbot interpreting company performance from 10-K filings using NLP.",
    tools: ["Python", "Pandas", "NLP", "Jupyter Notebook", "Prompt Engineering"],
    githubUrl:
      "https://github.com/krithiksharan13/BCG-GenAI-Job-Simulation-Forage.git",
  },
  {
    title: "Accenture Data Analytics & Visualization",
    description:
      "Applied data analytics and visualization to help a social media company improve its content strategy.",
    tools: ["Excel", "Data Cleaning", "Data Modeling", "Data Visualization"],
    githubUrl:
      "https://github.com/krithiksharan13/Accenture-Data-Analytics-and-Visualization---Forage.git",
  },
  {
    title: "Heart Rate Diagnose Data Analysis",
    description:
      "Analysis of medical data to derive insights from patients with heart-related problems.",
    tools: ["Python", "Pandas", "Excel", "Tableau"],
    githubUrl:
      "https://github.com/krithiksharan13/Unified_Mentor_Heart_Rate_Analysis.git",
  },
  {
    title: "British Airways Data Science Internship",
    description:
      "Analyzed customer reviews and built predictive models to forecast customer buying behaviour for British Airways.",
    tools: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
    githubUrl:
      "https://github.com/krithiksharan13/British-Airways-Data-Science---Forage.git",
  },
  {
    title: "TATA Data Visualization Internship",
    description:
      "Power BI dashboards analyzing retail sales data to support C-level decision-making.",
    tools: ["Power BI", "Data Analysis", "Business Strategy"],
    githubUrl: "https://github.com/krithiksharan13/TCS-Virtual-Internship.git",
  },
  {
    title: "PwC Switzerland Power BI Experience",
    description:
      "Power BI dashboards for call centre, customer retention, and D&I to drive strategic business decisions.",
    tools: ["Power BI", "Trend Analysis", "Customer Churn Analysis"],
    githubUrl: "https://github.com/krithiksharan13/PwC-Switzerland-Power-BI.git",
  },
];

export const hackathonProjects = [
  {
    title: "SharkNinja JailbreakEDU AI Hackathon",
    description:
      "Collaborated with a multidisciplinary team to develop an AI-driven solution for a real-world business challenge set by SharkNinja. Recognised among the top-performing teams. Associated with the University of Leeds.",
    result: "Top 5",
  },
  {
    title: "AI in the Box Hackathon",
    description:
      "Built 'Brow-Code?' with Team WASD: a unified development environment merging an AI-powered C++ learning playground (Gemini code generation, in-browser execution, algorithm visualiser, AI debugger) with a real-time multiplayer JavaScript battle arena, all running in-browser on BrowserPod. AI in the Box Hackathon 2026 (Leeds AI Society x Leaning Technologies, University of Leeds). Reached the Top 10 finalist round.",
    githubUrl: "https://github.com/krithiksharan13/Brow-Code",
    liveUrl: "https://brow-code.vercel.app",
    tools: ["Vite", "React", "Google Gemini 2.5 Flash", "BrowserPod", "JSCPP", "WebSockets", "Node.js"],
    result: "Top 10 Finalist",
  },
  {
    title: "CheerpJ 2025",
    description:
      "A fully interactive GameBoy-style web console built with only HTML, CSS, and vanilla JavaScript, capable of running Java .jar games in the browser via CheerpJ 3.0. CheerpJ Hackathon 2025 winner.",
    githubUrl: "https://github.com/krithiksharan13/CheerPJ-2025",
    liveUrl: "https://cheer-pj-2025.vercel.app/",
    result: "Winner",
  },
  {
    title: "AETHRA GLOBAL IDEATHON 2025: VoiceCity",
    description:
      "Reimagining urban accessibility through community-driven data and AI-powered technology. Finalist among 250+ submissions.",
    githubUrl: "https://github.com/krithiksharan13/AETHRA-GLOBAL-IDEATHON-2025",
    liveUrl: "https://aethra-global-ideathon-2025.onrender.com/",
    result: "Finalist",
  },
  {
    title: "Spooky Maze - Escape the Alchemist's Study",
    description:
      "An AI-powered, web-based, point-and-click puzzle horror game built for the Horror Hacks Hackathon.",
    githubUrl: "https://github.com/krithiksharan13/Horror-Hacks-Hackathon-2025",
    liveUrl: "https://horror-hacks-hackathon-2025.onrender.com/",
    result: "Honorable Mention",
  },
  {
    title: "Polyglot Harmony AI Bot",
    description:
      "A tool that helps people communicate naturally in their own voice, without linguistic friction. Hack4Unity Hackathon - 5th of 90+ submissions.",
    githubUrl:
      "https://github.com/krithiksharan13/Hack4Unity-Polyglot-Harmony-AI-Bot",
    liveUrl: "https://polyglot-harmony-ai-bot.onrender.com/",
    result: "5th place",
  },
  {
    title: "DevOne Hack",
    description:
      "The portfolio website itself, built and submitted for the DevOne Hack hackathon.",
    githubUrl:
      "https://github.com/krithiksharan13/Portfolio",
    liveUrl: "https://krithik-sharan.vercel.app/",
    result: "Submission",
  },
];

export const honours = [
  {
    title: "Special Recognition Award",
    issuer: "Leeds University Union",
    date: "May 2026",
    associatedWith: "University of Leeds",
    description:
      "Nominated by fellow colleagues who work towards improving the student experience at the University of Leeds.",
  },
  {
    title: "Academic Rep of the Year (Faculty of EPS) - Winner",
    issuer: "University of Leeds",
    date: "Apr 2026",
    associatedWith: "University of Leeds",
    description:
      "Awarded for outstanding contribution to student representation, following nomination by 10+ students and staff. Recognised for engaging with peers and university stakeholders, advocating student perspectives, and driving academic improvements.",
  },
];

export const academicProjects = [
  {
    title: "Leeds Crime Patterns: A Comparative Analysis of Student Areas",
    tag: "Postgraduate",
    subtitle: "Group Data Analysis Project | University of Leeds",
    overview:
      "Examined 12 months of street-level crime data in Leeds to identify whether student-heavy wards exhibit a statistically distinct crime profile compared to city-centre and other residential areas.",
    methods: ["Choropleth mapping", "Comparative statistics", "Temporal analysis"],
    tools: ["Python 3.9+", "Pandas", "GeoPandas", "Matplotlib"],
    results: [
      "City-centre wards are outliers due to commercial crime (e.g. shoplifting).",
      "Student residential wards show higher proportional burglary and vehicle crime.",
      "Clear seasonal 'October spike' aligned with the university population's return.",
    ],
    githubUrl: "https://github.com/krithiksharan13/leeds-crime-patterns",
  },
  {
    title: "Dog Rehoming Time Analysis",
    tag: "Postgraduate",
    subtitle: "Coursework: R Statistics | University of Leeds",
    overview:
      "A statistical investigation into whether dog breed influences rehoming time in animal shelters, using classical probability modelling and inference.",
    methods: [
      "Distribution fitting: Exponential, Gamma, Lognormal",
      "Confidence intervals and hypothesis testing",
      "Pairwise breed comparisons",
    ],
    tools: ["R", "Base R graphics", "Classical statistical inference"],
    results: [
      "Rehoming time is right-skewed and non-normal.",
      "Gamma and Lognormal models fit best.",
      "Mean rehoming time is below 27 weeks.",
      "Breed does not significantly affect rehoming time.",
    ],
    githubUrl:
      "https://github.com/krithiksharan13/A-Statistical-Investigation-of-the-Rehoming-Time-of-Shelter-Dogs-",
  },
  {
    title: "Global Climate Attitudes Modelling",
    tag: "Postgraduate",
    subtitle: "Machine Learning Project | UNDP Peoples' Climate Vote 2024 Dataset",
    overview:
      "Supervised and unsupervised learning on the UNDP Peoples' Climate Vote 2024 dataset to analyse global climate attitudes.",
    methods: [
      "Feature engineering (68 features)",
      "Binary classification",
      "K-Means clustering on country-level aggregates",
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    results: [
      "Logistic Regression achieved 82.8% accuracy.",
      "Attitudes dominate predictive power over demographics.",
      "K-Means clustering revealed a strong Global North-South divide.",
    ],
    githubUrl:
      "https://github.com/krithiksharan13/global-climate-attitudes-modelling",
  },
  {
    title: "Crowd Detection for Social Distance Monitoring",
    tag: "Undergraduate",
    subtitle:
      "Final Year B.Tech Project - Information Technology | SSN College of Engineering, June 2022",
    overview:
      "An AI-based surveillance system that automatically detects violations of social distancing norms from CCTV video feeds using deep learning and computer vision.",
    methods: [
      "YOLOv3 (COCO-trained) for object detection",
      "Perspective transformation and Euclidean distance calculations",
    ],
    tools: ["Python 3.9.1", "OpenCV", "NumPy", "SciPy", "Google Colab"],
    results: [
      "Improved accuracy via dynamic thresholding.",
      "Effective performance on PETS2009 and real-world CCTV footage.",
      "Outputs generated in both original and bird's-eye views.",
    ],
    githubUrl:
      "https://github.com/krithiksharan13/Crowd-Detection-for-Social-Distance-Monitoring",
  },
];

export const competitions = [
  {
    title:
      "Innovate, Validate, Pitch! Mini Business Bootcamp (Tech & Innovation)",
    position: "1st Place",
    issuer: "Spark, Discover Enterprise - University of Leeds",
    date: "Feb 2026",
    summary:
      "First place in a competitive pitch-off as part of a half-day enterprise bootcamp for students in the Faculty of Engineering and Physical Sciences.",
    highlights: [
      "Co-developed and pitched 'Memoir', a wedding-related business concept, from idea to validation to final presentation in four hours.",
      "Evaluated by James Chandler, entrepreneur and Leeds graduate, on creativity, commercial awareness, feasibility, and persuasion.",
      "Strengthened skills in enterprise thinking, rapid validation, structured pitching, and collaborative problem-solving.",
    ],
  },
];

export const certificateCategories = [
  {
    name: "Data Analytics",
    certificates: [
      { title: "Learning ChatGPT for Business Analysis", issuer: "LinkedIn Learning", date: "Feb 2026", url: "https://www.linkedin.com/learning/certificates/c980b5a9af5a3bf960575b2a8f6d16b92beba28486d4709c06106636fdf174b0" },
      { title: "Introduction to Web APIs", issuer: "LinkedIn Learning", date: "Jan 2026", url: "https://www.linkedin.com/learning/certificates/01327d0af6d0fc52305231982697cec33e46c8d4baf19e873cf06c7892e8fe79" },
      { title: "Learning SQL Programming", issuer: "LinkedIn Learning", date: "Jan 2026", url: "https://www.linkedin.com/learning/certificates/50b26602e2fc5c3da6d823caddd77636158986a6783742e4ad90fd7c1bc9f921" },
      { title: "R for Data Science: Analysis and Visualization", issuer: "LinkedIn Learning", date: "Jan 2026", url: "https://www.linkedin.com/learning/certificates/84de22107f4440021bca067a9232bcd4fa2b268d6462d0ac76d351f61d0316d5" },
      { title: "2025 Complete SQL Bootcamp from Zero to Hero in SQL", issuer: "Udemy", date: "May 2024" },
      { title: "Data Analyst Skillpath: Zero to Hero in Excel, SQL & Python", issuer: "Udemy", date: "Jul 2024" },
    ],
  },
  {
    name: "AI",
    certificates: [
      { title: "What is Generative AI", issuer: "LinkedIn Learning", date: "Feb 2026", url: "https://www.linkedin.com/learning/certificates/202bb94a3aa0774ee71a506a8105a4cde867d0315f9486e841fdd561cd7007b1" },
      { title: "Artificial Intelligence Creating Video From Photo", issuer: "Udemy", date: "Apr 2025" },
      { title: "Professional Logo Production With Artificial Intelligence", issuer: "Udemy", date: "Apr 2025" },
    ],
  },
  {
    name: "Forage",
    certificates: [
      { title: "Accenture North America - Data Analytics and Visualization Job Simulation", issuer: "Forage", date: "Apr 2025" },
      { title: "British Airways - Data Science Job Simulation", issuer: "Forage", date: "Apr 2025" },
      { title: "Commonwealth Bank - Introduction to Data Science Job Simulation", issuer: "Forage", date: "Mar 2025" },
      { title: "PwC Switzerland - Power BI Job Simulation", issuer: "Forage", date: "Mar 2025" },
      { title: "BCG - GenAI Job Simulation", issuer: "Forage", date: "Mar 2025" },
      { title: "Deloitte Australia - Data Analytics Job Simulation", issuer: "Forage", date: "Feb 2025" },
      { title: "Quantium - Data Analytics Job Simulation", issuer: "Forage", date: "Feb 2025" },
      { title: "Tata Group - Data Visualisation Job Simulation", issuer: "Forage", date: "Feb 2025" },
    ],
  },
  {
    name: "Academic",
    certificates: [
      { title: "Intelligent Mobility: Applied Computer Vision and Deep Learning", issuer: "SSN College of Engineering", date: "Jan 2022" },
      { title: "Computer Graphics", issuer: "NPTEL", date: "Dec 2020" },
      { title: "Programming in Java", issuer: "NPTEL", date: "Nov 2021" },
      { title: "Mastering Data Structures & Algorithms using C and C++", issuer: "Udemy", date: "Dec 2023" },
    ],
  },
  {
    name: "Non-Academic",
    certificates: [
      { title: "The Complete Adobe After Effects Bootcamp: Basic to Advanced", issuer: "Udemy", date: "May 2023" },
    ],
  },
];

export const volunteering = [
  {
    role: "Academic Support Volunteer",
    company: "IntoUniversity",
    duration: "December 2025 - Present",
    description:
      "Tutoring secondary school children in science and maths, and providing guidance on university selection.",
    achievements: [],
  },
  {
    role: "Self-Organized Volunteer Educator for Government School Rural Children",
    company: "Independent Initiative",
    duration: "November 2024 - August 2025",
    description:
      "Teaching 10-15 students from Classes 6 to 10 from local government schools as a personal initiative.",
    achievements: [
      "Covered Maths, Science, Computer Basics, and English using relatable examples and interactive methods.",
      "Mentored students on spoken English, communication, and confidence-building.",
      "Worked to bridge learning gaps and spark interest in STEM and language skills.",
    ],
  },
  {
    role: "Volunteer Educator & Animal Welfare Advocate",
    company: "InAmigos Foundation",
    duration: "February 2024 - March 2024",
    description:
      "Contributed to education and animal welfare initiatives through online teaching and community service.",
    achievements: [
      "Taught 10+ children through online platforms.",
      "Fed stray animals and arranged vaccinations.",
      "Collected and recycled 50kg+ of plastics.",
    ],
  },
  {
    role: "Active Volunteer & Event Organizer",
    company: "SSN YRC",
    duration: "June 2019 - July 2021",
    description:
      "Participated in community well-being initiatives.",
    achievements: [
      "Coordinated blood donation camps.",
      "Contributed to village help camps for underserved communities.",
      "Participated in lake- and beach-cleaning rallies.",
    ],
  },
  {
    role: "Chief Video Editor",
    company: "TEDxYouth@Vannarpettai",
    duration: "May 2020 - April 2021",
    description:
      "Led video production and editing for one of South Tamil Nadu's first TEDx events.",
    achievements: [
      "Edited all event videos to TEDx brand standards.",
      "Coordinated with 6+ speakers to finalize content.",
      "Ran end-to-end live streaming on BigBlueButton.",
    ],
  },
];

export const education = [
  {
    institution: "The University of Leeds",
    location: "Leeds, England",
    degree: "Master of Science in Data Science and Analytics",
    duration: "September 2025 - Present",
    grade: "In Progress",
    coreModules: [
      "Data Science",
      "Learning Skills through Case Studies",
      "Dissertation in Data Science and Analytics",
    ],
    electiveModules: [
      "Machine Learning",
      "Programming for Data Science",
      "Big Data and Consumer Analytics",
      "Statistical Learning",
      "Statistical Theory and Methods",
      "Business Analytics and Decision Science",
    ],
  },
  {
    institution: "SSN College of Engineering",
    location: "Chennai, Tamil Nadu",
    degree: "Bachelor of Technology in Information Technology",
    duration: "2018 - 2022",
    grade: "GPA: 8.2",
    coreModules: [
      "Problem Solving and Programming in Python",
      "Database Management Systems and Applications",
      "Advanced Data Structures",
      "Artificial Intelligence Concepts and Algorithms",
      "Big Data Engineering",
      "Machine Learning Fundamentals",
    ],
    electiveModules: [
      "Fundamentals of Digital Image Processing",
      "Real Time Embedded Systems",
      "Reactive Programming",
      "Introduction to Deep Learning",
      "Programming in Java",
      "Professional Ethics",
    ],
  },
  {
    institution: "Pushpalatha Vidya Mandir",
    location: "Tirunelveli, Tamil Nadu",
    degree: "Senior Secondary Education (CBSE)",
    duration: "Grades 11 & 12",
    grade: "95.4%",
  },
  {
    institution: "Pushpalatha Vidya Mandir",
    location: "Tirunelveli, Tamil Nadu",
    degree: "Secondary Level of Education (CBSE)",
    duration: "Grades 9 & 10",
    grade: "CGPA: 10",
  },
];
