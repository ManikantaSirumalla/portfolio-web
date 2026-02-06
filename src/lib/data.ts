export const personalInfo = {
  name: "Manikanta Sirumalla",
  title: "iOS Developer & ML Engineer",
  tagline: "Crafting intelligent mobile experiences",
  description:
    "I build elegant iOS applications powered by cutting-edge machine learning. Bridging the gap between beautiful design and intelligent systems to create experiences that feel magical.",
  email: "manikanta.sirumalla@example.com",
  location: "India",
  social: {
    github: "https://github.com/ManikantaSirumalla",
    linkedin: "https://linkedin.com/in/manikantasirumalla",
  },
};

export interface Skill {
  name: string;
  icon: string;
  category: "ios" | "ml" | "tools";
}

export const skills: Skill[] = [
  // iOS Development
  { name: "Swift", icon: "swift", category: "ios" },
  { name: "SwiftUI", icon: "swiftui", category: "ios" },
  { name: "UIKit", icon: "uikit", category: "ios" },
  { name: "Objective-C", icon: "objc", category: "ios" },
  { name: "Xcode", icon: "xcode", category: "ios" },
  { name: "Core Data", icon: "coredata", category: "ios" },
  { name: "Core ML", icon: "coreml", category: "ios" },
  { name: "ARKit", icon: "arkit", category: "ios" },
  { name: "Combine", icon: "combine", category: "ios" },
  { name: "SPM", icon: "spm", category: "ios" },

  // Data Science & ML
  { name: "Python", icon: "python", category: "ml" },
  { name: "TensorFlow", icon: "tensorflow", category: "ml" },
  { name: "PyTorch", icon: "pytorch", category: "ml" },
  { name: "scikit-learn", icon: "sklearn", category: "ml" },
  { name: "Pandas", icon: "pandas", category: "ml" },
  { name: "NumPy", icon: "numpy", category: "ml" },
  { name: "Jupyter", icon: "jupyter", category: "ml" },
  { name: "NLP", icon: "nlp", category: "ml" },
  { name: "Computer Vision", icon: "cv", category: "ml" },
  { name: "Deep Learning", icon: "dl", category: "ml" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "CI/CD", icon: "cicd", category: "tools" },
  { name: "Firebase", icon: "firebase", category: "tools" },
  { name: "REST APIs", icon: "api", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "AWS", icon: "aws", category: "tools" },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "ios" | "ml" | "fullstack";
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "NeuralSense",
    description:
      "Real-time object detection iOS app powered by Core ML and Vision framework",
    longDescription:
      "An iOS application that leverages on-device machine learning to perform real-time object detection and classification. Built with Swift, Core ML, and the Vision framework, it provides instant visual feedback with bounding boxes and confidence scores while maintaining 60fps performance.",
    tags: ["Swift", "Core ML", "Vision", "SwiftUI"],
    category: "ios",
    image: "/projects/neuralsense.png",
    github: "#",
    featured: true,
  },
  {
    title: "PredictFlow",
    description:
      "End-to-end ML pipeline for predictive analytics with interactive dashboards",
    longDescription:
      "A comprehensive machine learning pipeline that handles data ingestion, feature engineering, model training, and deployment. Features interactive visualizations built with Python and modern web technologies, enabling stakeholders to explore predictions and model performance in real-time.",
    tags: ["Python", "TensorFlow", "Pandas", "FastAPI"],
    category: "ml",
    image: "/projects/predictflow.png",
    github: "#",
    featured: true,
  },
  {
    title: "SwiftChat",
    description:
      "Feature-rich messaging app with end-to-end encryption built in SwiftUI",
    longDescription:
      "A modern messaging application built entirely in SwiftUI, featuring real-time messaging, end-to-end encryption, media sharing, and push notifications. Uses Combine for reactive data flow and Firebase for backend services.",
    tags: ["SwiftUI", "Combine", "Firebase", "CryptoKit"],
    category: "ios",
    image: "/projects/swiftchat.png",
    github: "#",
    featured: true,
  },
  {
    title: "SentimentScope",
    description:
      "NLP-powered sentiment analysis tool for social media monitoring",
    longDescription:
      "An advanced NLP tool that performs real-time sentiment analysis on social media data. Built with PyTorch and transformer models, it can analyze sentiment across multiple languages and provides detailed emotional breakdowns with confidence scoring.",
    tags: ["PyTorch", "NLP", "Transformers", "Python"],
    category: "ml",
    image: "/projects/sentimentscope.png",
    github: "#",
    featured: false,
  },
  {
    title: "HealthKit Pro",
    description:
      "Health tracking app integrating Apple HealthKit with ML-based insights",
    longDescription:
      "A health and fitness tracking application that deeply integrates with Apple HealthKit to provide ML-powered health insights. Uses on-device Core ML models to predict health trends and suggest personalized recommendations based on user activity patterns.",
    tags: ["Swift", "HealthKit", "Core ML", "Charts"],
    category: "ios",
    image: "/projects/healthkit.png",
    live: "#",
    featured: false,
  },
  {
    title: "DataVault",
    description:
      "Automated data processing pipeline with anomaly detection capabilities",
    longDescription:
      "An enterprise-grade data processing system with built-in anomaly detection. Processes millions of records daily using distributed computing, with scikit-learn models identifying outliers and potential issues in real-time.",
    tags: ["Python", "scikit-learn", "Apache Spark", "AWS"],
    category: "ml",
    image: "/projects/datavault.png",
    github: "#",
    featured: false,
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior iOS Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading iOS development for consumer-facing applications with millions of users. Integrating on-device ML models for personalized user experiences.",
    highlights: [
      "Architected and shipped 3 major app features used by 2M+ users",
      "Reduced app launch time by 40% through performance optimization",
      "Integrated Core ML models for on-device recommendations",
      "Mentored team of 4 junior developers",
    ],
    technologies: ["Swift", "SwiftUI", "Core ML", "Combine"],
  },
  {
    role: "iOS Developer & ML Engineer",
    company: "AI Startup",
    period: "2020 - 2022",
    description:
      "Developed iOS applications with integrated machine learning capabilities. Built and deployed ML models for mobile inference.",
    highlights: [
      "Built ML-powered features that increased user engagement by 35%",
      "Developed custom Core ML models for real-time image processing",
      "Created data pipelines processing 500K+ records daily",
      "Published 2 research papers on mobile ML optimization",
    ],
    technologies: ["Swift", "Python", "TensorFlow", "Core ML"],
  },
  {
    role: "Junior iOS Developer",
    company: "Mobile Agency",
    period: "2018 - 2020",
    description:
      "Developed and maintained multiple iOS applications for diverse clients across healthcare, fintech, and e-commerce sectors.",
    highlights: [
      "Delivered 8+ client projects on time and within budget",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Achieved 4.7+ average App Store ratings across projects",
      "Contributed to open-source Swift libraries",
    ],
    technologies: ["Swift", "UIKit", "Objective-C", "Firebase"],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
