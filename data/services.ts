export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Software",
    subtitle: "Custom software built around your business.",
    description:
      "Web applications, internal tools, and customer-facing platforms engineered for real operational needs.",
    tags: ["Custom Web Apps", "Internal Portals", "SaaS Platforms", "Dashboards"],
  },
  {
    number: "02",
    title: "Automation",
    subtitle: "Less manual work. More efficient operations.",
    description:
      "Connect disparate workflows, eliminate repetitive data entry, and improve how teams collaborate and operate.",
    tags: ["Workflow Systems", "Data Pipelines", "Process Automation", "System Sync"],
  },
  {
    number: "03",
    title: "AI Integration",
    subtitle: "Useful AI, not AI for the sake of AI.",
    description:
      "Integrate practical intelligent capabilities into products, internal workflows, and core business processes.",
    tags: ["LLM Agents", "Document AI", "Predictive Analytics", "RAG Systems"],
  },
  {
    number: "04",
    title: "Digital Foundations",
    subtitle: "Build the systems you need to scale.",
    description:
      "APIs, databases, system integrations, and cloud-ready application architecture designed for long-term reliability.",
    tags: ["API Architecture", "Database Design", "Cloud Infrastructure", "System Migration"],
  },
];
