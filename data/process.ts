export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand your business.",
  },
  {
    step: "02",
    title: "DESIGN",
    description: "Create the visual direction.",
  },
  {
    step: "03",
    title: "BUILD",
    description: "Develop the digital experience.",
  },
  {
    step: "04",
    title: "LAUNCH",
    description: "Go live and grow.",
  },
];
