export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  url: string;
  nav: NavItem[];
  social: {
    linkedin: string;
    github: string;
  };
}

export const SITE: SiteConfig = {
  name: "AXIOMATA",
  tagline: "Technology for businesses ready to move.",
  description:
    "Axiomata designs and builds practical digital solutions, custom software, workflow automation, and AI integrations for growing businesses.",
  email: "hello@axiomata.in",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://axiomata.in",
  nav: [
    { label: "Solutions", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
  ],
  social: {
    linkedin: "#",
    github: "#",
  },
};
