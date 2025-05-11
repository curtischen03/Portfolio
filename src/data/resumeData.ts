// Experience Data
export const experienceData = [
  {
    id: "exp1",
    title: "Software Engineer Intern",
    company: "Rosemead Dental Laboratory Inc",
    location: "Rosemead, CA, USA",
    period: "June 2024 - Present",
    responsibilities: [
      "Develop and build a comprehensive commerce website tailored to company's needs",
      "Coordinate roles based on different skillsets and ensure deadlines were met as team leader",
      "Enhance website's style and UI to improve user experience and implement secure login features to access prices",
      "Assist with creation of neural network for detecting cavities, along with data processing pipeline from machine to computer",
    ],
  },
  {
    id: "exp2",
    title: "Technology Intern",
    company: "Qing Hui Fu DDS Inc",
    location: "Alhambra, CA, USA",
    period: "August 2023 - Present",
    responsibilities: [
      "Developed and implemented technical solutions, including automating patient communications and optimizing data management processes, reducing administrative errors and enhancing clinic efficiency",
      "Provided IT support by conducting software updates and troubleshooting for over 20 machines weekly",
      "Facilitated staff training by explaining technical concepts in simple terms, enabling adoption of new dental tools and systems",
    ],
  },
  {
    id: "exp3",
    title: "Tutoring Chair",
    company: "University of California - Los Angeles",
    location: "Los Angeles, CA, USA",
    period: "September 2022 - Present",
    responsibilities: [
      "Organize and lead large-scale review sessions and practice nights for core computer science courses",
      "Coach and mentor students in subjects such as data structures, algorithms, machine learning, AI, databases, and more",
      "Offered personalized support to students on homework and challenging topics in various subjects",
    ],
  },
];

// Project Data
export const projectsData = [
  {
    id: "proj5",
    title: "AskDirectory",
    technologies: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express",
      "Google Gemini 2.0 Flash API",
    ],
    description:
      "Developed an intelligent file-querying web application that allows users to ask natural language questions about PDF contents in a directory and receive direct, AI-powered answers. Designed for fast document analysis with plans to support more file types and features like query history.",
    demoUrl: "",
    repoUrl: "https://github.com/curtischen03/AskDirectory",
    imageUrl:
      "https://images.pexels.com/photos/5717492/pexels-photo-5717492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj6",
    title: "QuizAI",
    technologies: [
      "React.js",
      "Vite",
      "Bootstrap",
      "Node.js",
      "Express",
      "Google Gemini API",
    ],
    description:
      "Engineered a full-stack quiz platform using the Google Gemini API to generate semantically accurate questions from user-defined topics. Built with React (Hooks, Axios) and a Node.js/Express backend for API routing and prompt engineering. Features a responsive Bootstrap UI and real-time result visualization.",
    demoUrl: "",
    repoUrl: "https://github.com/curtischen03/QuizAI",
    imageUrl:
      "https://images.pexels.com/photos/5905704/pexels-photo-5905704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "proj1",
    title: "Personal Fitness Web App",
    technologies: ["React.js", "CSS", "HTML", "Firebase"],
    description:
      "Created a personal health web app allowing users to select customized workout plans and food recipes. Led the team and provided guidance to complete weekly deadlines following Agile Software Development principles.",
    demoUrl: "",
    repoUrl: "https://github.com/curtischen03/ADAPT",
    imageUrl:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
  },
  {
    id: "proj2",
    title: "Cavity Detection",
    technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
    description:
      "Trained and fine-tuned EfficientNet Neural Network for binary classification to automate cavity detection from dental images. Engineered a robust data pipeline and achieved high accuracy (90%) for clinical use.",
    demoUrl: "",
    repoUrl: "",
    imageUrl:
      "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
  },
  {
    id: "proj3",
    title: "PDF File Converter and Merger",
    technologies: ["Python", "File Management"],
    description:
      "Built a Python script automating the conversion of image files (JPEG, PNG) into PDFs and merging them. Added customizable features, enabling users to selectively delete modified files or clear all files post-processing.",
    demoUrl: "",
    repoUrl: "https://github.com/curtischen03/PDFMerger",
    imageUrl:
      "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
  },
  {
    id: "proj4",
    title: "Battleship Project",
    technologies: ["C++"],
    description:
      "Implemented various data structures (linked lists, 2D arrays, stacks, classes) with several programming techniques to create a functional battleship game where players can play against another person or AI with varying difficulty levels.",
    demoUrl: "",
    repoUrl: "https://github.com/curtischen03/battleship",
    imageUrl:
      "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Skills Data
export const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
  },
  {
    id: "web",
    name: "Web Development",
  },
  {
    id: "data",
    name: "Machine Learning & Data Science",
  },
  {
    id: "tools",
    name: "Tools & Technologies",
  },
];

export const skillsData = [
  {
    id: "python",
    name: "Python",
    category: "programming",
    icon: "🐍",
    iconColor: "text-green-500",
  },
  {
    id: "cpp",
    name: "C/C++",
    category: "programming",
    icon: "⚙️",
    iconColor: "text-blue-500",
  },
  {
    id: "js",
    name: "JavaScript",
    category: "programming",
    icon: "📜",
    iconColor: "text-yellow-500",
  },
  {
    id: "html",
    name: "HTML",
    category: "web",
    icon: "🌐",
    iconColor: "text-orange-500",
  },
  {
    id: "css",
    name: "CSS",
    category: "web",
    icon: "🎨",
    iconColor: "text-blue-500",
  },
  {
    id: "react",
    name: "React.js",
    category: "web",
    icon: "⚛️",
    iconColor: "text-blue-400",
  },
  {
    id: "node",
    name: "Node.js",
    category: "web",
    icon: "🧩",
    iconColor: "text-blue-400",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "tools",
    icon: "🔥",
    iconColor: "text-orange-500",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "data",
    icon: "🧠",
    iconColor: "text-orange-500",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "data",
    icon: "🔥",
    iconColor: "text-red-500",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: "📊",
    iconColor: "text-red-500",
  },
  {
    id: "sql",
    name: "SQL",
    category: "tools",
    icon: "🛢️",
    iconColor: "text-red-500",
  },
  {
    id: "mandarin",
    name: "Mandarin",
    category: "languages",
    icon: "🇨🇳",
    iconColor: "text-red-500",
  },
  {
    id: "cantonese",
    name: "Cantonese",
    category: "languages",
    icon: "🇭🇰",
    iconColor: "text-red-500",
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
    gpa: "3.89",
    courses: [
      "Algorithms",
      "Data Structures",
      "Software Construction",
      "Computer Architecture",
      "Operating Systems",
      "Multivariable Calculus",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
    ],
  },
];
