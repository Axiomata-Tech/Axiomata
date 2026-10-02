import type { Variants, Transition } from "framer-motion";

export const EASING = [0.16, 1, 0.3, 1] as const;

export const transitionFast: Transition = {
  duration: 0.15,
  ease: EASING,
};

export const transitionMedium: Transition = {
  duration: 0.7,
  ease: EASING,
};

export const transitionSlow: Transition = {
  duration: 0.9,
  ease: EASING,
};

export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

export const revealFadeOnly: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
};

export const heroLineMask: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.7,
      ease: EASING,
    },
  },
};
