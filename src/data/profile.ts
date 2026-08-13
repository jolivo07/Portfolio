/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: "Joaquín Olivo",
  fullName: "Joaquín Ernesto Olivo Escalante",
  role: "Backend & Full-Stack Engineer",
  tagline: ".NET · C# · React",
  location: "Barranquilla, Atlántico, Colombia",
  email: "joaquin.olivo@hotmail.com",
  phone: "+57 304 201 5706",
  github: "https://github.com/jolivo07",
  linkedin:
    "https://www.linkedin.com/in/joaquin-olivo-escalante-49a455261/",
  resumeUrl: "/Joaquin_Olivo_CV.pdf",
  headline:
    "I design and build backend systems that hold up under real-world complexity.",
  summary:
    "Systems Engineer focused on backend engineering, software architecture, and product development. I work with C#, .NET 8/9, ASP.NET Core, EF Core, PostgreSQL and SQL Server, and I build the interfaces on top with React, Vite and Tailwind CSS. My day-to-day is Clean Architecture, DDD, CQRS and SOLID applied to real problems: API design, persistence, authorization, synchronization, cloud storage and deployment — from requirements through testing, documentation and production. I currently own projects end to end as sole developer and build the automated test suites that keep them safe to release.",
  availability: "Open to Backend, .NET, Software Engineer & Full-Stack roles",
};

export const stats = [
  { value: "4+", label: "Years building software" },
  { value: "6+", label: "Production-grade projects" },
  { value: ".NET 9", label: "Primary stack" },
  { value: "5", label: "Architectures shipped" },
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    icon: "server",
    items: [
      "C#",
      ".NET 8/9",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework Core",
      "HttpClient",
      "Hosted Services",
    ],
  },
  {
    title: "Architecture",
    icon: "layers",
    items: [
      "Clean Architecture",
      "DDD",
      "CQRS",
      "SOLID",
      "Multi-Tenancy",
      "JWT",
      "SignalR",
      "FluentValidation",
      "Outbox Pattern",
      "Offline-First",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [
      "PostgreSQL",
      "SQL Server",
      "SQLite",
      "Oracle",
      "PL/SQL",
      "EF Core",
      "LINQ",
    ],
  },
  {
    title: "Frontend",
    icon: "code",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Angular",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Desktop & Mobile",
    icon: "smartphone",
    items: ["VB.NET", "WPF", "Kotlin", "Jetpack Compose", "MVVM", "Hilt"],
  },
  {
    title: "DevOps, Cloud & QA",
    icon: "cloud",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Render",
      "Vercel",
      "Cloudflare R2",
      "Automated testing",
      "QA",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: "Backend" | "Full-Stack" | "Mobile" | "Frontend";
  featured: boolean;
  description: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "urbaniasoft",
    name: "UrbaniaSoft",
    subtitle: "Multi-Tenant Property Management Platform",
    category: "Backend",
    featured: true,
    description:
      "A property management platform built backend-first on ASP.NET Core 9, PostgreSQL and EF Core. The solution is structured around Clean Architecture and DDD with CQRS, and carries multi-tenancy through every layer — from request context to persistence — so one deployment can serve many independent organizations safely.",
    highlights: [
      "Role- and membership-based authorization on top of JWT authentication",
      "Real-time updates with SignalR and request validation via FluentValidation",
      "Decoupled file-storage architecture backed by Cloudflare R2",
      "Tenant isolation enforced at the persistence layer, not just the API surface",
    ],
    stack: [
      "ASP.NET Core 9",
      "C#",
      "EF Core",
      "PostgreSQL",
      "JWT",
      "SignalR",
      "FluentValidation",
      "Cloudflare R2",
      "Render",
    ],
    demo: "https://urbani-soft.vercel.app",
  },
  {
    slug: "evolvepos",
    name: "EvolvePOS",
    subtitle: "Offline-First Point-of-Sale System",
    category: "Backend",
    featured: true,
    description:
      "Core backend architecture for a POS system that has to keep selling when the network drops. Sales are written to local SQLite first and reconciled with a remote API afterwards, using the Outbox Pattern so no transaction is lost or duplicated during synchronization.",
    highlights: [
      "Offline-first persistence with SQLite and deferred remote synchronization",
      "Outbox Pattern for reliable, at-least-once delivery of domain events",
      "Sale-completion and cash-payment flows modeled as domain operations",
      "Strict separation between domain, application and infrastructure concerns",
    ],
    stack: [
      ".NET 8",
      "C#",
      "SQLite",
      "Clean Architecture",
      "CQRS",
      "DDD",
      "Outbox Pattern",
    ],
  },
  {
    slug: "soundia",
    name: "SoundIA",
    subtitle: "AI Music Platform",
    category: "Full-Stack",
    featured: true,
    description:
      "A full-stack music platform pairing an ASP.NET Core 9 API with a React + Vite + Tailwind frontend. It integrates external providers behind a lyrics-provider engine with semantic validation, and ships as a Docker image with health checks and automatic migrations wired into startup.",
    highlights: [
      "Lyrics-provider engine over external APIs with semantic validation",
      "Automatic EF Core migrations and health checks on boot",
      "Swagger exposed in development, locked down elsewhere",
      "Containerized backend with cloud deployment configuration",
    ],
    stack: [
      "ASP.NET Core 9",
      "React",
      "Vite",
      "Tailwind CSS",
      "SQLite",
      "Docker",
      "External APIs",
    ],
    demo: "https://sound-ia.vercel.app",
  },
  {
    slug: "controlinventory",
    name: "ControlInventory",
    subtitle: "Inventory Management Mobile App",
    category: "Mobile",
    featured: false,
    description:
      "An Android inventory application built with a layered architecture and MVVM, using Jetpack Compose for a fully declarative UI and Hilt for dependency injection. Structured around real inventory workflows with maintainability as the driving constraint.",
    highlights: [
      "Layered architecture with MVVM and unidirectional state flow",
      "Declarative UI in Jetpack Compose",
      "Dependency injection with Hilt",
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Clean Architecture"],
  },
  {
    slug: "enemoda",
    name: "EneModa",
    subtitle: "Ecommerce Web Application",
    category: "Frontend",
    featured: false,
    description:
      "A responsive ecommerce interface built with React and Tailwind CSS around a set of reusable components, with attention to browsing and checkout experience. Deployed to Vercel.",
    highlights: [
      "Reusable component system driving the whole catalog UI",
      "Responsive layout from mobile to desktop",
      "Continuous deployment on Vercel",
    ],
    stack: ["React", "Tailwind CSS", "Vercel"],
    demo: "https://ene-moda.vercel.app",
  },
  {
    slug: "basse-depbot",
    name: "Basse & DepBot",
    subtitle: "Client Web Applications — Wawandco",
    category: "Full-Stack",
    featured: false,
    description:
      "Highlighted client projects delivered at Wawandco S.A.S. as part of a Scrum team, working across backend and frontend layers: feature development, source-code quality assurance, testing and direct technical support to end users.",
    highlights: [
      "Full-cycle feature work across backend and frontend",
      "Code quality assurance and testing",
      "Scrum ceremonies and project tracking",
    ],
    stack: ["Web", "Backend", "Frontend", "Scrum", "QA"],
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "EvolvePOS S.A.S.",
    role: "Software Developer & QA Automation",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Own assigned projects end to end — requirements analysis, architecture, implementation, testing and deployment — as sole developer, with full technical decision-making autonomy.",
      "Design and build backend services and product features across several concurrent projects, expanding both delivery volume and scope of responsibility within the company.",
      "Design, implement and maintain automated test suites, covering regression and functional testing to protect releases as the product grows.",
      "Run QA activities alongside development: test planning, execution, defect tracking and validation of fixes before release.",
      "Plan and track technical activities, and produce installation, operation and progress documentation.",
    ],
  },
  {
    company: "Universal Retail Systems",
    role: "Back-End Developer",
    period: "2023 – 2025",
    bullets: [
      "Planned, designed and developed software products from business and technical requirements.",
      "Applied testing and validation to products built by the engineering team.",
      "Installed, configured, supported and maintained managed software products.",
      "Planned short- and medium-term technical activities and tracked project progress.",
      "Wrote installation and operation manuals plus periodic progress reports.",
    ],
  },
  {
    company: "Wawandco S.A.S.",
    role: "Software Analyst",
    period: "Apr 2022 – Jan 2023",
    bullets: [
      "Developed and maintained web applications across backend and frontend layers.",
      "Planned and monitored assigned projects and took part in Scrum ceremonies.",
      "Performed testing and source-code quality assurance.",
      "Researched, analyzed and implemented software solutions end to end.",
      "Supported users and evolved applications to customer requirements.",
      "Highlighted projects: Basse and DepBot.",
    ],
  },
  {
    company: "Conversifi",
    role: "Coach",
    period: "Apr 2021 – Apr 2022",
    bullets: [
      "Supported U.S. students in developing communication and learning skills.",
      "Answered questions and resolved concerns in English on a daily basis.",
    ],
  },
];

export const education = [
  {
    school: "Universidad de la Costa",
    title: "B.S. in Systems Engineering",
    period: "2017 – 2023",
  },
  {
    school: "Universidad de la Costa",
    title: "Diploma in Software Technologies for Industry 4.0",
    period: "2022",
  },
  {
    school: "Colegio Externado de Colombia",
    title: "Commercial Technical High School — Accounting Emphasis",
    period: "2016",
  },
];

export const courses = [
  { name: "Learn SQL and Oracle", org: "Udemy", year: "2022" },
  { name: "CSS3: Complete Course", org: "Udemy", year: "2022" },
  { name: "Official Scrum Guide", org: "Udemy", year: "2020" },
  {
    name: "Leadership Coherence",
    org: "Fundación Centro Teológico Internacional Wesleyan",
    year: "2019",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B1" },
];
