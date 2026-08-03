export const profile = {
  name: "MAHANASRI M",
  role: "Computer Science Engineering Student",
  tagline: "Full Stack Developer | AI Enthusiast | Problem Solver",
  college: "SNS College of Technology",
  degree: "B.E. Computer Science and Engineering (2024–2028)",
  cgpa: "9.08",
  location: "Coimbatore, Tamil Nadu",
  about:
    "I am a passionate Computer Science Engineering student with strong interest in Full Stack Development, Artificial Intelligence, Web Technologies, and Problem Solving. I enjoy building innovative applications and continuously improving my technical skills through projects, internships, certifications, and coding practice.",
  email: "mahanasrim@gmail.com",
};

export const skills = [
  { name: "C", level: 85 },
  { name: "C++", level: 88 },
  { name: "Java", level: 82 },
  { name: "Python", level: 90 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "SQL", level: 85 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 86 },
];

export const projects = [
  {
    title: "NutriNova",
    subtitle: "Smart Canteen Management System",
    description:
      "A smart canteen application that allows users to order food online, manage canteen operations, and reduce food wastage by enabling excess food donation to NGOs and charitable organizations.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "https://github.com/",
  },
  {
    title: "Quiz App",
    subtitle: "Interactive Web Quiz Platform",
    description:
      "An interactive web-based quiz application developed using HTML, CSS, and JavaScript with score tracking, multiple categories, and a user-friendly interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/",
  },
  {
    title: "AuraHeal",
    subtitle: "Healthcare Experience Platform",
    description:
      "A healthcare application designed to improve patient experience, appointment management, and healthcare services.",
    stack: ["React", "Python", "SQL"],
    demo: "#",
    github: "https://github.com/",
  },
  {
    title: "Learnexa",
    subtitle: "Learning Management System",
    description:
      "A Learning Management System for managing courses, students, assignments, and learning resources.",
    stack: ["Java", "SQL", "JavaScript"],
    demo: "#",
    github: "https://github.com/",
  },
];

export const internships = [
  {
    company: "Gateway Software Solutions",
    role: "Data Analysis Intern",
    highlights: [
      "Explored real-world datasets and reporting workflows",
      "Worked with SQL queries and data visualisation",
    ],
  },
  {
    company: "Eduspine",
    role: "Full Stack Development Intern",
    highlights: [
      "Built responsive UI components and REST integrations",
      "Collaborated on feature delivery using Git",
    ],
  },
  {
    company: "Synovers",
    role: "Full Stack Development Intern",
    highlights: [
      "Developed end-to-end application modules",
      "Improved performance and code quality standards",
    ],
  },
];

export const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    badge: "AI-900",
  },
  {
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL",
    badge: "NPTEL",
  },
];

export const codingProfiles = {
  skillrack: {
    name: "SkillRack",
    url: "https://www.skillrack.com/",
    note: "Primary coding platform — daily problem solving practice",
  },
  others: [
    { name: "GitHub", url: "https://github.com/", note: "Projects & source code" },
    { name: "LeetCode", url: "https://leetcode.com/u/k3nlk9iAwU/", note: "DSA problem solving" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mahanasri-m",
      note: "Professional network",
    },
  ],
};

export const codingStats = [
  { label: "Problems Solved", value: "800+" },
  { label: "Coding Streak", value: "180 days" },
  { label: "Languages Used", value: "5" },
  { label: "Projects Built", value: "4" },
];

export const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/mahanasri-m" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "LeetCode", url: "https://leetcode.com/u/k3nlk9iAwU/" },
  { name: "Email", url: `mailto:${profile.email}` },
];

export const timeline = [
  {
    year: "2024",
    title: "Started B.E. Computer Science and Engineering",
    detail: "SNS College of Technology, Coimbatore",
  },
  {
    year: "2025",
    title: "First Full Stack Projects",
    detail: "Built NutriNova and Quiz App while sharpening DSA on SkillRack",
  },
  {
    year: "2026",
    title: "Internships & Certifications",
    detail: "Data analysis and full stack internships, Azure AI Fundamentals",
  },
  {
    year: "2028",
    title: "Graduation Goal",
    detail: "Graduate as a well-rounded full stack and AI engineer",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/internships", label: "Internships" },
  { to: "/certifications", label: "Certifications" },
  { to: "/coding-profiles", label: "Coding" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;
