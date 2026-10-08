export const TOKENS = {
  ink: "#111315",
  ivory: "#F6F2E9",
  teal: "#00C7B7",
  tealSoft: "#DDF5F1",
  charcoal: "#3B4143",
  muted: "#77766F",
  border: "#E2DDD3",
  white: "#FFFFFF",
  paper: "#F6F2E9", // Warm Ivory alias for backward compatibility
  green: "#00C7B7", // Electric Teal alias for backward compatibility
  mutedLight: "#77766F", // Alias for backward compatibility
  mutedDark: "#77766F", // Alias for backward compatibility
} as const;

export type TokenKey = keyof typeof TOKENS;
