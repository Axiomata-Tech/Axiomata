export const TOKENS = {
  ink: "#1C1410",
  brown900: "#2E211A",
  brown700: "#5A4034",
  mutedLight: "#6B5242",
  mutedDark: "#B9B2A8",
  gray200: "#E3E0DA",
  gray300: "#CFCBC4",
  paper: "#F4F2EE",
  white: "#FFFFFF",
  green: "#0FA958",
  greenDeep: "#0B8A47",
} as const;

export type TokenKey = keyof typeof TOKENS;
