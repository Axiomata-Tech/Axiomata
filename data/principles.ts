export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Practical",
    description:
      "We solve real operational problems rather than adding technology for its own sake. Every feature serves a clear business outcome.",
  },
  {
    number: "02",
    title: "Clear",
    description:
      "Good systems should be understandable, maintainable, and useful for the people who rely on them every single day.",
  },
  {
    number: "03",
    title: "Built to Grow",
    description:
      "Software solutions should support your business beyond the first version — built on clean architecture ready to scale.",
  },
];
