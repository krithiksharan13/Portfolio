export interface SkillGroup {
  category: string;
  emoji: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data & Analytics",
    emoji: "📊",
    skills: [
      "SQL",
      "Python (Pandas, NumPy)",
      "R",
      "Excel & DAX",
      "Exploratory Data Analysis",
      "A/B Testing",
      "Statistical Analysis",
      "Data Cleaning & Modelling",
    ],
  },
  {
    category: "Visualisation & BI",
    emoji: "📈",
    skills: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Dashboard Design",
      "Data Storytelling",
    ],
  },
  {
    category: "Machine Learning",
    emoji: "🤖",
    skills: [
      "scikit-learn",
      "Classification & Regression",
      "Clustering (K-Means)",
      "Feature Engineering",
      "NLP",
    ],
  },
  {
    category: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      "Git & GitHub",
      "Jupyter",
      "Google Colab",
      "BigQuery",
      "Metabase",
      "Streamlit",
      "n8n",
    ],
  },
  {
    category: "Also",
    emoji: "✨",
    skills: [
      "Prompt Engineering",
      "Business & Risk Analysis",
      "Figma (UI design)",
      "Stakeholder Reporting",
    ],
  },
];
