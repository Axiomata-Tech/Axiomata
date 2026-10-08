export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  clientType: string;
  problem: string;
  approach: string;
  technology: string[];
  outcome: string;
  url: string;
  ariaLabel: string;
  isConcept?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "workflow-ops",
    number: "01",
    name: "Kinetix Workflow Platform",
    category: "Workflow Automation",
    clientType: "Growing Logistics Team",
    problem: "Manual dispatch, fragmented email updates, and spreadsheet tracking causing 4+ hours of daily operational delay.",
    approach: "Built a centralized web portal with real-time automated dispatch triggers and customer notification pipelines.",
    technology: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Webhooks"],
    outcome: "Reduced order processing time by 68% and eliminated 150+ manual email status updates per day.",
    url: "kinetix-ops.internal",
    ariaLabel: "Case study for Kinetix Workflow Platform",
  },
  {
    id: "ai-doc-hub",
    number: "02",
    name: "Vanguard Document Intelligence",
    category: "AI Integration",
    clientType: "Financial Services Firm",
    problem: "Manual extraction of key terms from 500+ monthly compliance PDFs consumed over 120 analyst hours.",
    approach: "Engineered an intelligent document parsing pipeline with local RAG search and structured compliance validation.",
    technology: ["Python", "FastAPI", "OpenAI / Claude API", "Vector DB", "React"],
    outcome: "Cut document processing time from 45 minutes to 30 seconds per file with 99.2% extraction accuracy.",
    url: "vanguard-doc.ai",
    ariaLabel: "Case study for Vanguard Document Intelligence",
  },
  {
    id: "portal-engine",
    number: "03",
    name: "AeroCore Customer Portal",
    category: "Custom Software",
    clientType: "Manufacturing Industry",
    problem: "Legacy desktop-only client portal hindered mobile ordering and prevented real-time order tracking for distributors.",
    approach: "Redesigned and built a responsive cloud portal connected directly to existing ERP databases via custom APIs.",
    technology: ["React", "TypeScript", "REST API", "Tailwind CSS", "Docker"],
    outcome: "Increased mobile distributor orders by 140% within the first 90 days of rollout.",
    url: "portal.aerocore.industrial",
    ariaLabel: "Case study for AeroCore Customer Portal",
  },
  {
    id: "telemetry-cloud",
    number: "04",
    name: "Synapse Industrial Monitor",
    category: "Digital Foundations",
    clientType: "IoT Equipment Supplier",
    problem: "High data latency and lack of centralized monitoring for 2,000+ deployed industrial machine sensors.",
    approach: "Architected a low-latency telemetry hub with live metric dashboards and automated threshold alerts.",
    technology: ["WebSockets", "Go", "TimescaleDB", "Next.js", "Tailwind CSS"],
    outcome: "Achieved sub-50ms sensor metric updates and prevented 14 critical equipment failures through predictive alerts.",
    url: "synapse.telemetry.io",
    ariaLabel: "Case study for Synapse Industrial Monitor",
  },
];
