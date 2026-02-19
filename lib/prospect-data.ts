// Types and loader for prospect-data.json
// Alex writes this file per prospect site before building

export interface ProspectBrand {
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  font_family?: string;
  favicon_url?: string;
}

export interface ProspectContent {
  company_name: string;
  tagline: string;
  tagline_enhanced: string;
  value_prop: string;
  services: Array<{
    name: string;
    description: string;
    icon?: string;
  }>;
  about_snippet: string;
  cta_text: string;
  cta_secondary_text?: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  social_links?: Record<string, string>;
  testimonials?: Array<{
    quote: string;
    name: string;
    role?: string;
  }>;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  team?: Array<{
    name: string;
    role: string;
    image_url?: string;
  }>;
  meta_description?: string;
}

export interface ProspectConfig {
  template: string;
  industry: string;
  niche?: string;
  animation_intensity: "subtle" | "moderate" | "bold";
  sections: string[];
  dark_mode?: boolean;
}

export interface ProspectData {
  domain: string;
  brand: ProspectBrand;
  content: ProspectContent;
  config: ProspectConfig;
}

export function loadProspectData(): ProspectData {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../prospect-data.json") as ProspectData;
}
