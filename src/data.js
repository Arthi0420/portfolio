export const profile = {
  name: "Arthi A",
  role: "Full Stack Developer",
  tagline:
    "I build production web apps end to end: Java / Spring Boot and Node.js APIs, React interfaces, and event-driven pipelines on PostgreSQL, MongoDB and Kafka.",
  location: "Chennai, Tamil Nadu",
  email: "arthiraj0420@gmail.com",
  linkedin: "https://www.linkedin.com/in/arthi0420",
  github: "https://github.com/Arthi0420",
  // To show the "Download résumé" button, put your PDF in /public and set e.g. "/Arthi_A_Resume.pdf"
  resume: null,
};

export const stats = [
  { value: "1.5+", label: "years in production" },
  { value: "20+", label: "shipping lines integrated" },
  { value: "3", label: "stacks: Java, MERN, Python" },
];

export const about = [
  "I'm a Full Stack Developer at Intemo Technologies, where I work on logistics software used by operations teams: an ocean shipment tracking platform and an ERP automation platform.",
  "I enjoy the parts of the job that sit between systems: integrating carrier and ERP APIs, designing the business rules that decide a shipment's status, and tracking down production issues like race conditions and rate limits. An MBA background helps me connect technical decisions to what the business needs.",
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Spring Boot", "Spring Data JPA", "Node.js", "Express.js", "NestJS", "FastAPI", "REST APIs", "Webhooks"] },
  { group: "Frontend", items: ["React.js", "React Hooks", "Redux", "React Router", "Tailwind CSS"] },
  { group: "Data & Messaging", items: ["PostgreSQL", "MongoDB", "Apache Kafka", "Flyway", "SQLAlchemy"] },
  { group: "Automation", items: ["Playwright", "Cron / Schedulers", "APScheduler", "MFA (TOTP) flows"] },
  { group: "DevOps & Tools", items: ["Docker", "Kubernetes (basic)", "AWS S3", "Vercel", "Render", "Git", "Postman"] },
];

export const experience = {
  title: "Full Stack Developer",
  company: "Intemo Technologies Pvt. Ltd.",
  period: "Feb 2025 – Present",
  summary: "Logistics technology: ocean tracking and workflow automation for operations teams.",
  projects: [
    {
      name: "Ocean Tracking Platform",
      stack: ["Java 21", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
      points: [
        "Built Spring Boot REST APIs for a container and bill-of-lading tracking platform that collects events from 20+ shipping lines and providers such as Sinay, Vizion and GoComet.",
        "Added carrier integrations and fixes (Sinokor, Hapag-Lloyd, COSCO, MSC, Yang Ming) that map carrier events to standard milestones.",
        "Designed tracking-ended and status rules, customer webhook delivery with retries, and Kafka messaging with Slack lag alerts.",
      ],
    },
    {
      name: "Logisys ERP Automation",
      stack: ["Python", "FastAPI", "Playwright", "PostgreSQL", "AWS S3"],
      points: [
        "Built invoice-processing pipelines (ocean, air, GSA, import) that validate invoice data against master data and generate ERP journal entries.",
        "Automated ERP data entry with Playwright bots, including MFA login and EDI upload, plus FastAPI endpoints for live worker logs.",
      ],
    },
    {
      name: "Workflow Services & Dashboards",
      stack: ["NestJS", "React.js", "MongoDB"],
      points: [
        "Built NestJS cron services with API rate limiting and React dashboards that show real-time operational metrics.",
      ],
    },
  ],
};

export const projects = [
  {
    name: "Task Manager",
    badge: "My first full-stack project",
    description:
      "Where my coding journey started. A MERN task manager with Firebase email/password sign-up and login, per-user tasks stored in MongoDB, To Do / In Progress / Completed status, pinning, and search and filter. React (Vite) frontend on Vercel and an Express REST API on Render.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Firebase Auth", "Axios", "Tailwind"],
    live: "https://task-manager-client-murex.vercel.app",
    code: "https://github.com/Arthi0420/Task-Manager",
    featured: true,
  },
  {
    name: "Taskify",
    description:
      "Second version of my task manager. Firebase sign-in, tasks that update without a page refresh, Express + MongoDB API on Render.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    live: "https://taskify-client-ten.vercel.app",
    code: "https://github.com/Arthi0420/Taskify",
  },
  {
    name: "Actodo List",
    description: "Responsive to-do app with full CRUD, built with React Hooks and local-storage persistence.",
    stack: ["React", "Hooks", "Tailwind CSS"],
    live: "https://actodo-kappa-self.vercel.app",
    code: "https://github.com/Arthi0420/Actodo",
  },
  {
    name: "Nostra E-commerce",
    description: "Responsive e-commerce storefront with product listings, search and filtering in vanilla JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Arthi0420/Nostra-Ecommerce-Website",
  },
];

export const education = [
  { title: "MBA", place: "Annamalai University", period: "2023 – 2025" },
  { title: "BA, English Literature", place: "Arignar Anna Govt. Arts College · CGPA 7.30", period: "2020 – 2023" },
  { title: "MERN Stack Development (Certification)", place: "Error Makes Clever", period: "Sep – Dec 2024" },
];
