export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  meta: string;
  url: string;
  title: string;
  ariaLabel: string;
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "noire",
    number: "01",
    name: "NOIRÉ",
    category: "Specialty Coffee",
    meta: "Concept · Hospitality · 2026",
    url: "noire.coffee",
    title: "NOIRÉ — Specialty Coffee",
    ariaLabel: "Concept website for NOIRÉ, a specialty coffee shop",
    description:
      "An exploration of tactile digital atmospheres for artisanal hospitality. The interface pairs deep roasted tones with deliberate typographic pacing to convey craft and origin without friction.",
  },
  {
    id: "vera",
    number: "02",
    name: "VÉRA",
    category: "Independent Fashion Boutique",
    meta: "Concept · Retail · 2026",
    url: "vera-studio.com",
    title: "VÉRA — Independent Fashion Boutique",
    ariaLabel: "Concept website for VÉRA, an independent fashion boutique",
    description:
      "A minimalist editorial storefront designed to celebrate garment silhouettes and seasonal curation. The layout balances spacious whitespace with high-contrast structural accents for an elevated retail presence.",
  },
  {
    id: "north",
    number: "03",
    name: "NORTH & CO.",
    category: "Architecture & Interior Studio",
    meta: "Concept · Professional Services · 2026",
    url: "northandco.arch",
    title: "NORTH & CO. — Architecture & Interior Studio",
    ariaLabel: "Concept website for NORTH & CO., an architecture and interior studio",
    description:
      "A structural portfolio concept centered around spatial clarity and blueprint line precision. It presents spatial projects through an index-driven hierarchy that mirrors architectural rigor.",
  },
  {
    id: "motif",
    number: "04",
    name: "MOTIF",
    category: "Automotive Detailing",
    meta: "Concept · Local Business · 2026",
    url: "motifdetail.com",
    title: "MOTIF — Automotive Detailing",
    ariaLabel: "Concept website for MOTIF, an automotive detailing studio",
    description:
      "A high-contrast, technical web experience designed for precision craft and premium automotive services. The layout highlights tier clarity and rapid booking paths with sharp industrial styling.",
  },
];
