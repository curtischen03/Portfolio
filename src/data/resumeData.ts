// Experience Data
export const experienceData = [
  {
    id: "exp1",
    title: "Software Engineer",
    company: "Rosemead Dental Laboratory",
    location: "CA, USA",
    period: "June 2024 - Present",
    responsibilities: [
      "Engineered and deployed a secure e-commerce site, improving client access and reducing manual order processing.",
      "Directed a cross-functional team of 3, aligning technical roles to meet delivery deadlines.",
      "Designed system architecture, optimized internal software, performed performance testing, and oversaw systems integration.",
      "Trained YOLO11 model for cavity detection, getting 90% accuracy, and reducing training time by 10%.",
    ],
  },
  {
    id: "exp2",
    title: "Technology Intern",
    company: "Qing Hui Fu DDS Inc",
    location: "Alhambra, CA, USA",
    period: "August 2023 - September 2023",
    responsibilities: [
      "Automated workflows for 50% of patient records, increasing efficiency by 25%.",
      "Provided IT support by conducting software updates and troubleshooting for over 20+ machines weekly",
    ],
  },
  {
    id: "exp3",
    title: "Tutoring Chair",
    company: "University of California - Los Angeles",
    location: "Los Angeles, CA, USA",
    period: "September 2022 - Present",
    responsibilities: [
      "Led 200+ student review sessions for data structures, algorithms, ML, AI, and databases.",
      "Mentored 50+ students individually, boosting average grade percentage by 10% in core CS courses.",
      "Offered personalized support to students on homework and challenging topics in various subjects.",
    ],
  },
];

// Project Data
export const projectsData = [
  {
    id: "proj5",
    title: "AskDirectory",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express"],
    description:
      "Developed an intelligent file-querying web application that allows users to ask natural language questions about PDF contents in a directory and receive direct, AI-powered answers.",
    demoUrl: "https://www.youtube.com/watch?v=gY3hlbRXSh8",
    repoUrl: "https://github.com/curtischen03/AskDirectory",
    imageUrl:
      "https://images.pexels.com/photos/5717492/pexels-photo-5717492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj6",
    title: "QuizAI",
    technologies: ["React.js", "Vite", "Bootstrap", "Node.js", "Express"],
    description:
      "Engineered a full-stack quiz platform using the Google Gemini API to generate semantically accurate questions from user-defined topics. Built with React (Hooks, Axios) and a Node.js/Express backend for API routing and prompt engineering. Features a responsive Bootstrap UI and real-time result visualization.",
    demoUrl: "https://www.youtube.com/watch?v=lY8MTFlNfO0",
    repoUrl: "https://github.com/curtischen03/QuizAI",
    imageUrl:
      "https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj1",
    title: "Personal Fitness Web App",
    technologies: ["React.js", "CSS", "HTML", "Firebase"],
    description:
      "Built a personal fitness web app allowing users to manage accounts, track personal data, and search customized workouts and recipes.",
    demoUrl: "https://curtischen03.github.io/ADAPT/",
    repoUrl: "https://github.com/curtischen03/ADAPT",
    imageUrl:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
  },
  {
    id: "proj2",
    title: "Cavity Detection",
    technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
    description:
      "Trained an YOLO11 model for dental image analysis with version control and feature engineering, achieving 90% accuracy, and reducing training time by 10%.",
    demoUrl: "",
    repoUrl: "",
    imageUrl:
      "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
  },
];

// Skills Data
export const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
  },
  {
    id: "frontend",
    name: "Frontend Development",
  },
  {
    id: "backend",
    name: "Backend Development",
  },
  {
    id: "ml",
    name: "Machine Learning",
  },
  {
    id: "db",
    name: "Databases",
  },
  {
    id: "tools",
    name: "Tools",
  },
];

export const skillsData = [
  // Programming Languages
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "programming",
  },
  {
    id: "python",
    name: "Python",
    category: "programming",
  },
  {
    id: "cpp",
    name: "C++",
    category: "programming",
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
  },
  // Frontend Development
  {
    id: "react",
    name: "React",
    category: "frontend",
  },
  {
    id: "react-native",
    name: "React Native",
    category: "frontend",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "frontend",
  },
  // Backend Development
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "backend",
  },
  {
    id: "docker",
    name: "Docker",
    category: "backend",
  },
  // Machine Learning
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ml",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ml",
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "ml",
  },
  {
    id: "llms",
    name: "LLMs",
    category: "ml",
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "ml",
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    category: "ml",
  },
  // Databases
  {
    id: "sql",
    name: "SQL",
    category: "db",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "db",
  },
];

// Education Data
export const educationData = [
  {
    id: "edu1",
    institution: "University of California",
    location: "Los Angeles, CA",
    degree: "Bachelor's, Computer Science",
    graduationDate: "June 2025",
    gpa: "3.87",
    courses: [
      "Algorithms",
      "Data Structures",
      "Software Construction",
      "Computer Architecture",
      "Operating Systems",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
    ],
  },
  {
    id: "edu1",
    institution: "University of California",
    location: "Los Angeles, CA",
    degree: "Masters of Engineering, Specializing in AI",
    gpa: "4.0",
    graduationDate: "June 2027",
    courses: [
      "Neural Networks",
      "Natural Language Processing",
      "Machine Learning Algorithms",
    ],
  },
];

// Certifications Data
export const certificationsData = [
  {
    id: "cert1",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    url: "https://www.credly.com/badges/304ed355-222d-405f-8aa2-53451a55ac00/public_url/",
  },
  {
    id: "cert2",
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    url: "https://www.udemy.com/certificate/UC-90290584-c865-4d6a-af38-7ab116988660/",
  },
];
