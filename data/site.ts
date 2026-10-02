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
    instagram: string;
    linkedin: string;
  };
}

export const SITE: SiteConfig = {
  name: "AXIOMATA",
  tagline: "Digital experiences. Built for what comes next.",
  description:
    "Axiomata designs and builds modern websites and digital experiences for small businesses, local companies and growing brands.",
  email: "hello@axiomata.in",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://axiomata.in",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
  ],
  social: {
    // TODO: Update with real Instagram profile URL
    instagram: "#",
    // TODO: Update with real LinkedIn profile URL
    linkedin: "#",
  },
};
