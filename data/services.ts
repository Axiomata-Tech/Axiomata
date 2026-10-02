export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "websites",
    number: "01",
    title: "WEBSITES",
    description:
      "Modern, responsive websites designed around your business, your customers and your goals.",
    tags: ["Design", "Development", "Responsive", "SEO-ready"],
  },
  {
    id: "landing-pages",
    number: "02",
    title: "LANDING PAGES",
    description: "Focused pages designed to turn attention into action.",
    tags: ["Campaigns", "Products", "Services", "Launches"],
  },
  {
    id: "digital-presence",
    number: "03",
    title: "DIGITAL PRESENCE",
    description:
      "A consistent online presence that helps customers discover, understand and trust your business.",
    tags: ["Web", "Social", "Brand presence", "Strategy"],
  },
];
