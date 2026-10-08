export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand the Problem",
    description:
      "We analyze your business workflows, current pain points, existing software tools, and technical requirements before writing a single line of code.",
    deliverables: ["Workflow audit", "System architecture map", "Project scope & roadmap"],
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "Define the Solution",
    description:
      "We design the user experience, database architecture, API contracts, and interface structures with absolute clarity and focus.",
    deliverables: ["Interactive prototypes", "Database schema", "Technical specification"],
  },
  {
    number: "03",
    phase: "BUILD",
    title: "Engineered Execution",
    description:
      "We develop, integrate, test, and refine the application in rapid iterative sprints with transparent status updates and continuous integration.",
    deliverables: ["Clean codebase", "API integrations", "Automated test suite"],
  },
  {
    number: "04",
    phase: "LAUNCH",
    title: "Deploy & Support",
    description:
      "We handle cloud deployment, database migration, staff onboarding, real-time performance monitoring, and long-term system support.",
    deliverables: ["Production deployment", "Team documentation", "Ongoing support"],
  },
];
