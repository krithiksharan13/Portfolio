import crowdDetectionImg from '@/assets/academic/crowd-detection.png';
import leedsCrimeImg from '@/assets/academic/leeds-crime.png';
import dogRehomingImg from '@/assets/academic/dog-rehoming.png';
import globalClimateImg from '@/assets/academic/global-climate.png';

export interface AcademicProject {
  title: string;
  emoji: string;
  image: string;
  tag: 'Undergraduate' | 'Postgraduate';
  subtitle: string;
  developers?: string[];
  abstract?: string;
  overview?: string;
  objectives: string[];
  methods: string[];
  tools: string[];
  results: string[];
  futureWork?: string[];
  contributors?: string[];
  disclaimer?: string;
  githubUrl: string;
}

export const academicProjects: AcademicProject[] = [
  {
    title: "Leeds Crime Patterns: A Comparative Analysis of Student Areas",
    emoji: "🏙️",
    image: leedsCrimeImg,
    tag: "Postgraduate",
    subtitle: "Group Data Analysis Project | University of Leeds",
    overview: "A group data-analysis project examining 12 months of street-level crime data in Leeds to identify whether student-heavy wards exhibit a statistically distinct crime profile compared to city-centre and other residential areas.",
    objectives: [
      "Acquire and clean police crime data",
      "Conduct exploratory and temporal analysis",
      "Perform geospatial hotspot mapping",
      "Quantify comparative crime 'fingerprints' across area types"
    ],
    methods: [
      "Choropleth mapping and comparative statistics"
    ],
    tools: ["Python 3.9+", "Pandas", "GeoPandas", "Matplotlib"],
    results: [
      "City centre wards are outliers due to commercial crimes (e.g. shoplifting)",
      "Student residential wards show higher proportional burglary and vehicle crime",
      "Clear seasonal 'October spike' aligned with university population return"
    ],
    contributors: [
      "Nilavan Sritharan",
      "Asjad Moiz Khan",
      "Krithik Sharan Suresh Alagianayagi",
      "Zhenny Marifatul Husna"
    ],
    githubUrl: "https://github.com/krithiksharan13/leeds-crime-patterns"
  },
  {
    title: "Dog Rehoming Time Analysis",
    emoji: "🐕",
    image: dogRehomingImg,
    tag: "Postgraduate",
    subtitle: "Coursework: R Statistics | University of Leeds",
    overview: "A statistical investigation into whether dog breed influences rehoming time in animal shelters. The analysis applies classical probability modelling and inference techniques at a postgraduate level.",
    objectives: [
      "Data cleaning and exploratory analysis",
      "Distribution fitting: Exponential, Gamma, Lognormal",
      "Confidence intervals and hypothesis testing",
      "Pairwise breed comparisons"
    ],
    methods: [
      "Distribution fitting: Exponential, Gamma, Lognormal",
      "Confidence intervals and hypothesis testing",
      "Pairwise breed comparisons"
    ],
    tools: ["R", "Base R graphics", "Classical statistical inference"],
    results: [
      "Rehoming time is right-skewed and non-normal",
      "Gamma and Lognormal models fit best",
      "Mean rehoming time is below 27 weeks",
      "Breed does not significantly affect rehoming time"
    ],
    disclaimer: "This project was completed as postgraduate coursework using a course-provided dataset and should not be redistributed.",
    githubUrl: "https://github.com/krithiksharan13/A-Statistical-Investigation-of-the-Rehoming-Time-of-Shelter-Dogs-"
  },
  {
    title: "Global Climate Attitudes Modelling",
    emoji: "🌍",
    image: globalClimateImg,
    tag: "Postgraduate",
    subtitle: "Machine Learning Project | UNDP Peoples' Climate Vote 2024 Dataset",
    overview: "A machine-learning project analysing global climate attitudes using supervised and unsupervised learning on the UNDP Peoples' Climate Vote 2024 dataset.",
    objectives: [
      "Can machine learning predict strong climate-policy support?",
      "Do attitudes or demographics matter more?"
    ],
    methods: [
      "Feature engineering (68 features)",
      "Binary classification",
      "K-Means clustering on country-level aggregates"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    results: [
      "Logistic Regression achieved 82.8% accuracy",
      "Attitudes dominate predictive power over demographics",
      "K-Means clustering revealed a strong Global North–South divide"
    ],
    contributors: [
      "Nilavan Sritharan",
      "Asjad Moiz Khan",
      "Krithik Sharan Suresh Alagianayagi",
      "Zhenny Marifatul Husna"
    ],
    githubUrl: "https://github.com/krithiksharan13/global-climate-attitudes-modelling"
  },
  {
    title: "Crowd Detection for Social Distance Monitoring",
    emoji: "🧍‍♂️",
    image: crowdDetectionImg,
    tag: "Undergraduate",
    subtitle: "Final Year B.Tech Project – Information Technology | Sri Sivasubramaniya Nadar College of Engineering, June 2022",
    developers: [
      "Jajula Abhaya Chetna (185002039)",
      "S A Krithik Sharan (185002052)"
    ],
    abstract: "An AI-based surveillance system designed to automatically monitor and detect violations of social distancing norms using CCTV video feeds. Built during the COVID-19 pandemic to address the impracticality of manual enforcement in crowded public spaces. The system leverages deep learning and computer vision techniques to detect humans, estimate real-world distances, and flag violations in real time.",
    objectives: [
      "Detect humans in surveillance footage",
      "Apply perspective transformation for real-world distance estimation",
      "Identify and classify social distancing violations",
      "Visualise counts of safe, at-risk, and violating individuals"
    ],
    methods: [
      "YOLOv3 (COCO-trained) for object detection",
      "Perspective transformation and Euclidean distance calculations"
    ],
    tools: ["Python 3.9.1", "OpenCV", "NumPy", "SciPy", "Google Colab", "Windows environment"],
    results: [
      "Improved accuracy via dynamic thresholding",
      "Effective performance on PETS2009 and real-world CCTV footage",
      "Outputs generated in both original and bird's-eye views"
    ],
    futureWork: [
      "Improve robustness for dense crowds and varying heights",
      "Integrate alerts (SMS / alarms)",
      "Extend to mask detection and heatmaps"
    ],
    disclaimer: "This project was developed strictly for academic purposes. All video data used was either publicly available or simulated to preserve confidentiality.",
    githubUrl: "https://github.com/krithiksharan13/Crowd-Detection-for-Social-Distance-Monitoring"
  }
];
