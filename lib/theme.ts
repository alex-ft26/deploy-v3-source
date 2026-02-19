import { type ProspectBrand } from "./prospect-data";
import { isLightColor, adjustBrightness, withOpacity } from "./utils";

export interface ProspectTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  border: string;
  primaryForeground: string;
  accentForeground: string;
}

export function generateTheme(brand: ProspectBrand, darkMode = false): ProspectTheme {
  const primaryIsLight = isLightColor(brand.primary_color);

  if (darkMode) {
    return {
      primary: brand.primary_color,
      secondary: brand.secondary_color,
      accent: brand.accent_color,
      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#1a1a1a",
      mutedForeground: "#a1a1a1",
      card: "#111111",
      cardForeground: "#fafafa",
      border: "#262626",
      primaryForeground: primaryIsLight ? "#0a0a0a" : "#fafafa",
      accentForeground: isLightColor(brand.accent_color) ? "#0a0a0a" : "#fafafa",
    };
  }

  return {
    primary: brand.primary_color,
    secondary: brand.secondary_color,
    accent: brand.accent_color,
    background: "#ffffff",
    foreground: "#0a0a0a",
    muted: adjustBrightness(brand.secondary_color, 40),
    mutedForeground: "#6b7280",
    card: "#ffffff",
    cardForeground: "#0a0a0a",
    border: withOpacity(brand.primary_color, 0.12),
    primaryForeground: primaryIsLight ? "#0a0a0a" : "#ffffff",
    accentForeground: isLightColor(brand.accent_color) ? "#0a0a0a" : "#ffffff",
  };
}

export function themeToCSS(theme: ProspectTheme): Record<string, string> {
  return {
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-background": theme.background,
    "--color-foreground": theme.foreground,
    "--color-muted": theme.muted,
    "--color-muted-foreground": theme.mutedForeground,
    "--color-card": theme.card,
    "--color-card-foreground": theme.cardForeground,
    "--color-border": theme.border,
    "--color-primary-foreground": theme.primaryForeground,
    "--color-accent-foreground": theme.accentForeground,
  };
}
