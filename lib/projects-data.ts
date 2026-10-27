export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Ai-Flow",
    slug: "ai-flow",
    description:
      "AI-powered platform that automates your everyday tasks for oyu and your team using agentic workflows.",
    detailedDescription:
      "An AI-powered platform that connects your Outlook, Gmail, Teams, Telegram, Slack, and other apps to powerful agentic workflows with attached ai agents as tools called during workflow execution. Built with JavaScript, Meteorjs, Blaze, Node.js, Mongodb, etc",
    image: "/ai-flow.png",
    tags: ["AI", "SaaS", "LLM/RAG", "Full-Stack"],
    status: "active",
    techStack: [
      "JavaScript",
      "Meteorjs",
      "Node.js",
      "Blaze",
      "MongoDB",
      "Materialize",
      "LLMs",
      "Pinecone",
    ],
    features: [
      "A visual workflow builder your whole team can read",
      "Sync sharepoint folders continuously and upload files you need for your workflow or pull from the web",
      "Answers site their sources with footnotes so anyone can check the agent's work",
      "History records of every execution with its trigger, duration, and cost. You can see and download audit logs when a run fails for unclear reasons.",
      "Track costs by model, agent, trigger or connection",
      "Manage users and permissions in one place",
    ],
    learningOutcomes: [
      "Full-stack SaaS application development with Meteorjs and Node.js",
      "Email, calender, document and API query source connections and their usage in workflow execution",
      "Secure authentication and user permissions management",
      "RESTful API design with Express.js",
      "Database modeling with MongoDB schemas",
      "Using Blaze UI and Materialize",
    ],
    links: {
      visit: "https://ai-flow.eu",
      // github: "https://github.com/HexagonDigitalServices/Invoice",
      // howIBuilt: "https://youtu.be/2Mrwszudm9M?si=n34faY8CSOuH6iAi",
    },
    author: "Fundation GmbH",
    authorAvatar: "/fundation-logo.png",
  },
  {
    id: "2",
    title: "LoubbyAi",
    slug: "loubby-ai",
    description: "A recruitment and employee management app with ai guidance",
    detailedDescription:
      "An ai-powered recruitment system with recruiting, onboarding, payroll, time and performance management. Built with TypeScript, Nextjs, Node.js, MongoDB",
    image: "/loubby-ai.png",
    tags: ["HR", "MERN", "Full-Stack", "AI"],
    status: "active",
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Course management system with categories",
      "User enrollment and progress tracking",
      "Role-based access (Admin/Instructor/Student)",
      "Interactive course player with video support",
      "Admin dashboard for user and course management",
      "Responsive mobile-friendly design",
    ],
    learningOutcomes: [
      "Authentication & role-based access control",
      "RESTful API development with Express.js",
      "MongoDB data modeling for complex relationships",
      "State management with Redux",
      "Protected routes and middleware implementation",
      "Full-stack application architecture",
    ],
    links: {
      visit: "https://app.loubby.ai/",
      // github: "https://github.com/HexagonDigitalServices/L-M-S",
      // howIBuilt: "https://youtu.be/lDg72UDAq60?si=keX7_pOq_QytNwO7",
    },
    author: "DivVerse Labs",
    authorAvatar: "/div_verse_labs_logo.jpg",
  },
  {
    id: "3",
    title: "Cybermap Ai",
    slug: "cybermap-ai",
    description:
      "A compliance and audit readiness platform for teams and organizations.",
    detailedDescription:
      "A compliance automation platform that helps companies and cybersecurity professionals enhance their security and compliance program. Currently developed with TypeScript, Nextjs, AWS, MongoDB, Nodejs, etc",
    image: "/cybermap.jpeg",
    tags: ["Compliance", "MERN", "Audit", "AI"],
    status: "active",
    techStack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "AWS",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Connects to AWS, Azure, and GCP accounts to read configuration and security settings.",
      "Pulls audit and activity logs from AWS CloudTrail, Azure Activity Log, and GCP Cloud Audit Logs",
      "Collects configuration evidence for each compliance control",
      "Assesses readiness against SOC 2, GDPR, ISO27001 and HIPAA",
      "Tracks which controls are met, partially met, or unmet",
      "Readiness dashboard with audit readiness scores for the team",
      "Role-based access for subscribers, team admins, and super admins",
    ],
    learningOutcomes: [
      "Got comfortable with code review feedback and iterating on pull requests",
      "End-to-end MERN stack development workflow",
      "PDF generation and export functionality",
      "Implemented permission checks and learned why server-side enforcement matters",
      "Built authentication and sidebar UI from Figma designs, learning to match a design system closely",
      "Got exposure to how compliance frameworks (SOC 2, GDPR, ISO27001, etc) map to technical controls",
      "Learned to work with third-party cloud APIs (AWS, Azure, GCP) and handle their different auth and data models",
    ],
    links: {
      visit: "https://cybermap.ai/",
      // github: "https://github.com/HexagonDigitalServices/BUILDRESUMEWEB",
      // howIBuilt: "https://youtu.be/gWHgPP5ay7Q?si=FhtnDh4O7jm9rsEY",
    },
    author: "Cybermap Ai",
    authorAvatar: "/cybermap-logo.png",
  },
  {
    id: "4",
    title: "Fomo Social",
    slug: "fomo-social",
    description:
      "An events management app for broadcasting and joining activities with friends.",
    detailedDescription:
      "With Fomo Social, you can discover activities happening around you and broadcast the ones you’re planning to create yourself or attend so your friends and neighbours can join. Built for iOS/Android (Mobile wrapped with capacitor) and web, with React, Vite, Capacitor, MongoDB and Node.js",
    image: "/fomo-marketing.png",
    tags: ["Social Media", "MERN", "Full-Stack", "Events"],
    status: "active",
    techStack: [
      "Capacitorjs",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.io",
      "Mssql",
      "Firebase",
      "Google play Console",
      "Appstore Distribution",
    ],
    features: [
      "Social coordination and real-time activity",
      "Discover events happening around you",
      "Invite friends directly from your contacts",
      "Create activities in seconds and set time, location and capacitor, all with the optional Ai assistance",
      "Real-time updates with WebSockets",
      "In-app and push notifications for every update to activity, including updates from creator and participants",
    ],
    learningOutcomes: [
      "Real-time application development with Socket.io",
      "CRUD operations implementation",
      "User authentication and authorization with firebase",
      "Google analytics",
      "Mobile application delivery on Google play console and Appstore connect",
      "Full-stack product development",
      "Deployment and hosting strategies",
      "Product launch and growth",
    ],
    links: {
      visit: "https://fomo-social.app/",
      // github: "https://github.com/HexagonDigitalServices/FlowTask",
      // howIBuilt: "https://youtu.be/VAKDr1lsix0?si=FZvPZSo2qIOTjiJD",
    },
    author: "Fundation GmbH",
    authorAvatar: "/fundation-logo.png",
  },
];
