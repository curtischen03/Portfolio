// Experience Data
export const experienceData = [
  {
    id: "exp1",
    title: "Fullstack Engineer",
    company: "Koios Enterprises",
    location: "Calabasas, CA",
    period: "Oct 2025 - Present",
    responsibilities: [
      "Built a video repository microservice managing 1000+ video assets and lifecycle states, improving compliance handling and scalability by 30%.",
      "Developed 8+ RESTful APIs for video upload, publishing, and access control, reducing integration time for partner services by 40% through standardized schemas and OpenAPI docs.",
      "Integrated PostgreSQL, AWS S3, and a packaged repository module to streamline metadata and storage operations, cutting latency by 25%.",
      "Provided technical leadership in schema design and API development, standardizing RESTful conventions and improving team onboarding efficiency by 20%.",
    ],
  },
  {
    id: "exp2",
    title: "Software Engineer",
    company: "Rosemead Dental Laboratory",
    location: "CA, USA",
    period: "June 2024 - Sep 2025",
    responsibilities: [
      "Led a cross-functional team of 3 engineers to design and deploy a secure e-commerce system, reducing manual order processing by 60%.",
      "Architected and optimized backend workflows, improving API response times by 35% and increasing client order throughput.",
      "Trained a computer vision model (YOLOv11) for dental cavity detection, achieving 90% accuracy and cutting training time by 10%.",
    ],
  },
  {
    id: "exp3",
    title: "Tutoring Chair",
    company: "UCLA Computer Science Department",
    location: "Los Angeles, CA, USA",
    period: "Sep 2022 - Sep 2025",
    responsibilities: [
      "Led 200+ student review sessions for data structures, algorithms, ML, AI, and databases.",
      "Mentored 50+ students individually, boosting average grade percentage by 10% in core CS courses.",
      "Offered personalized support to students on homework and challenging topics in various subjects.",
    ],
  },
  {
    id: "exp4",
    title: "Technology Intern",
    company: "Qing Hui Fu DDS Inc",
    location: "Alhambra, CA, USA",
    period: "August 2023 - September 2023",
    responsibilities: [
      "Automated workflows for 50% of patient records, increasing efficiency by 25%.",
      "Provided IT support by conducting software updates and troubleshooting for over 20+ machines weekly.",
    ],
  },
];

// Project Data
export const projectsData = [
  {
    id: "proj5",
    title: "AskDirectory – AI File Query Web App",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express"],
    description:
      "Built an AI-powered PDF query tool integrating Google Gemini API, reducing data lookup time by 70% through parallel computing.",
    demoUrl: "https://www.youtube.com/watch?v=gY3hlbRXSh8",
    repoUrl: "https://github.com/curtischen03/AskDirectory",
    imageUrl:
      "https://images.pexels.com/photos/5717492/pexels-photo-5717492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj7",
    title: "Java to RISC-V Compiler",
    technologies: ["Java", "CI/CD (Gradle)"],
    description: "Engineered a compiler translating Java code to RISC-V assembly, implementing parsing, type checking, and register allocation to improve execution efficiency by 40%.",
    imageUrl: "https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg",
  },
  {
    id: "proj6",
    title: "QuizAI – AI-Generated Quiz Platform",
    technologies: ["React.js", "Vite", "Bootstrap", "Node.js", "Express"],
    description:
      "Engineered a full-stack quiz platform using the Google Gemini API to generate semantically accurate questions from user-defined topics.",
    demoUrl: "https://www.youtube.com/watch?v=lY8MTFlNfO0",
    repoUrl: "https://github.com/curtischen03/QuizAI",
    imageUrl:
      "https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj1",
    title: "ADAPT - Fullstack Personal Fitness Web App",
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
    title: "Computer Vision Cavity Detection Model",
    technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
    description:
      "Trained an computer vision model (YOLO11) for dental image analysis with version control and feature engineering, achieving 90% accuracy, and reducing training time by 10%.",
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
    name: "PostgreSQL",
    category: "db",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "db",
  },
  //tools
  {
    id: "git",
    name: "Git",
    category: "tools",
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    category: "tools",
  },
  {
    id: "jira",
    name: "Jira",
    category: "tools",
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
  },
];

// Education Data
export const educationData = [
  {
    id: "edu1",
    institution: "University of California",
    location: "Los Angeles, CA",
    degree: "Masters of Engineering, Specializing in AI",
    gpa: "4.0",
    graduationDate: "Dec 2026",
    courses: [
      "Neural Networks",
      "Natural Language Processing",
      "Machine Learning Algorithms",
    ],
  },
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
