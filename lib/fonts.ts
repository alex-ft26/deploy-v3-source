import { Inter, Playfair_Display, DM_Sans, Space_Grotesk, Lora } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
export const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const INDUSTRY_FONTS: Record<string, { heading: string; body: string }> = {
  banking: { heading: playfair.variable, body: inter.variable },
  finance: { heading: playfair.variable, body: inter.variable },
  healthcare: { heading: inter.variable, body: inter.variable },
  law: { heading: playfair.variable, body: lora.variable },
  insurance: { heading: inter.variable, body: inter.variable },
  accounting: { heading: inter.variable, body: inter.variable },
  "real-estate": { heading: playfair.variable, body: dmSans.variable },
  beauty: { heading: playfair.variable, body: dmSans.variable },
  spa: { heading: playfair.variable, body: dmSans.variable },
  salon: { heading: playfair.variable, body: dmSans.variable },
  fintech: { heading: spaceGrotesk.variable, body: inter.variable },
  saas: { heading: spaceGrotesk.variable, body: inter.variable },
  ecommerce: { heading: dmSans.variable, body: inter.variable },
  hvac: { heading: inter.variable, body: inter.variable },
  plumbing: { heading: inter.variable, body: inter.variable },
  roofing: { heading: inter.variable, body: inter.variable },
  electrical: { heading: inter.variable, body: inter.variable },
  cleaning: { heading: dmSans.variable, body: inter.variable },
  restaurant: { heading: playfair.variable, body: dmSans.variable },
  gym: { heading: spaceGrotesk.variable, body: inter.variable },
  fitness: { heading: spaceGrotesk.variable, body: inter.variable },
  manufacturing: { heading: inter.variable, body: inter.variable },
  construction: { heading: inter.variable, body: inter.variable },
  automotive: { heading: spaceGrotesk.variable, body: inter.variable },
};

export function getFontsForIndustry(industry: string) {
  return INDUSTRY_FONTS[industry] || { heading: inter.variable, body: inter.variable };
}
