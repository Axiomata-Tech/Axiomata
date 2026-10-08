export interface AudienceItem {
  id: string;
  category: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

export const AUDIENCES: AudienceItem[] = [
  {
    id: "startups",
    category: "Startups",
    tagline: "Turn ideas into working products.",
    description:
      "Engineering robust minimum viable products (MVPs), web applications, and core technology foundations ready for market launch and investor validation.",
    capabilities: ["MVP Engineering", "Web Applications", "AI Integration", "API Architecture"],
  },
  {
    id: "small-businesses",
    category: "Small Businesses",
    tagline: "Move from manual processes to digital systems.",
    description:
      "Replacing chaotic spreadsheets and manual paperwork with custom internal tools, business automation, and streamlined customer portals.",
    capabilities: ["Internal Tools", "Workflow Automation", "Customer Portals", "System Sync"],
  },
  {
    id: "growing-teams",
    category: "Growing Teams",
    tagline: "Connect systems and improve operations.",
    description:
      "Integrating disparate software tools, optimizing internal data pipelines, and building scalable platforms as your headcount and operations expand.",
    capabilities: ["Process Automation", "Custom Software", "APIs & Webhooks", "Data Systems"],
  },
  {
    id: "industries",
    category: "Industries",
    tagline: "Build technology around specialized operations.",
    description:
      "Purpose-built applications tailored for unique industrial workflows, telemetry monitoring, equipment tracking, and operational management.",
    capabilities: ["Industry Software", "Digital Workflows", "Data Monitoring", "Operational Tools"],
  },
];
