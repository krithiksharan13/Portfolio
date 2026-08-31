import { defineTool } from "@lovable.dev/mcp-js";

const education = [
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

export default defineTool({
  name: "list_education",
  title: "List education",
  description: "List Krithik's education history with degrees, institutions, grades and modules.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
    structuredContent: { education },
  }),
});
