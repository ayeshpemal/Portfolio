export const personalInfo = {
  name: "Ayesha Senarath",
  title: "Software Engineer",
  tagline:
    "Software Engineer with experience building scalable web applications and intelligent features using technologies like React, NestJS, and Supabase. Skilled in API design and third-party integrations, coupled with foundational DevOps knowledge in AWS, Docker, and automated deployments.",
  email: "ayeshapemal@gmail.com",
  phone: "+94767837154",
  location: "Weeraketiya, Sri Lanka",
  github: "https://github.com/ayesha-pemal",
  linkedin: "https://linkedin.com/in/ayeshpemal",
  portfolio: "https://ayesha.csbodima.lk",
};

export const experience = [
  {
    role: "Intern Software Engineer",
    company: "Fcode Labs (Pvt) Ltd.",
    duration: "Jun 2025 – Jun 2026",
    location: "Sri Lanka",
    achievements: [
      "Architected an end-to-end OpenAI translation pipeline processing 20,000+ large-scale database records and built content recommendation features using embedding vectors and cosine similarity.",
      "Developed core backend APIs and implemented Row-Level Security (RLS) to manage access control.",
      "Optimized backend workflows by implementing change-detection logic, significantly reducing redundant server computations.",
      "Built comprehensive features for a mentorship platform using React and NestJS, delivering analytics dashboards and advanced data filtering.",
      "Configured containerized deployment workflows utilizing Docker and AWS EC2.",
    ],
    stack: [
      "React.js",
      "NestJS",
      "Supabase",
      "PostgreSQL",
      "Python",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "OpenAI API",
    ],
  },
];

export const projects = {
  featured: [
    {
      name: "UniEarn",
      type: "Group Project — University of Ruhuna",
      duration: "Nov 2024 – Apr 2025",
      description:
        "A multi-role job marketplace connecting university students with employers. Implemented JWT-based authentication, architected the relational database schema utilizing PostgreSQL, and developed real-time platform notifications using WebSockets.",
      stack: [
        "React",
        "Tailwind CSS",
        "Java 17",
        "Spring Boot",
        "PostgreSQL",
        "AWS S3",
        "WebSockets",
        "JWT",
      ],
      color: "from-violet-500 to-indigo-600",
    },
    {
      name: "ZOOKEEPER-Pro",
      type: "Group Project — University of Ruhuna",
      duration: "Mar 2024 – May 2024",
      description:
        "A standalone desktop application for animal identification. Integrated the Imagga API for intelligent image recognition, allowing users to upload an animal image for instant and accurate species identification.",
      stack: ["Java", "JavaFX", "MongoDB", "Imagga API"],
      color: "from-emerald-500 to-teal-600",
    },
  ],
  additional: [
    { name: "Linkify X WhatsApp", duration: "Jul 2025 – Sep 2025" },
    { name: "Interim Search", duration: "Sep 2025 – Oct 2025" },
    { name: "BeVisioneers", duration: "Oct 2025 – Dec 2025" },
    { name: "Bevisioneer Dev", duration: "Dec 2025 – Jan 2026" },
    { name: "Linkify", duration: "Jan 2026 – Present" },
  ],
};

export const education = [
  {
    degree: "BCS General Degree (First Class)",
    institution: "University of Ruhuna",
    duration: "2022 – 2026",
    gpa: "3.89",
  },
];

export const skills = {
  Languages: ["JavaScript / TypeScript", "Java", "Python", "SQL", "HTML", "CSS"],
  "Frameworks & Tech": [
    "React",
    "NestJS",
    "Next.js",
    "Express.js",
    "Spring Boot",
    "Tailwind CSS",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["AWS EC2", "Docker", "GitHub Actions", "CI/CD Pipelines"],
};
