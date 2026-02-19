import type { ProspectData } from "@/lib/prospect-data";

export interface TemplatePages {
  Home: React.ComponentType<{ data: ProspectData }>;
  About: React.ComponentType<{ data: ProspectData }>;
  Services: React.ComponentType<{ data: ProspectData }>;
  Contact: React.ComponentType<{ data: ProspectData }>;
}

import { pages as trustAuthority } from "./trust-authority";
import { pages as cleanProfessional } from "./clean-professional";
import { pages as localAuthority } from "./local-authority";
import { pages as lifestyleVisual } from "./lifestyle-visual";
import { pages as dataDriven } from "./data-driven";
import { pages as immersiveScroll } from "./immersive-scroll";
import { pages as communityFocused } from "./community-focused";
import { pages as industrialPrecision } from "./industrial-precision";

const TEMPLATES: Record<string, TemplatePages> = {
  "trust-authority": trustAuthority,
  "clean-professional": cleanProfessional,
  "local-authority": localAuthority,
  "lifestyle-visual": lifestyleVisual,
  "data-driven": dataDriven,
  "immersive-scroll": immersiveScroll,
  "community-focused": communityFocused,
  "industrial-precision": industrialPrecision,
};

export function getTemplate(name: string): TemplatePages {
  const template = TEMPLATES[name];
  if (!template) {
    console.warn(`Template "${name}" not found, falling back to trust-authority`);
    return TEMPLATES["trust-authority"];
  }
  return template;
}
