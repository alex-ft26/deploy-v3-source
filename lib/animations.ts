// Animation presets for different intensity levels
// Used by templates to determine animation style

export type AnimationIntensity = "subtle" | "moderate" | "bold";

export const ANIMATION_PRESETS = {
  subtle: {
    fadeUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } },
    stagger: 0.1,
    hoverScale: 1.02,
  },
  moderate: {
    fadeUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } },
    stagger: 0.12,
    hoverScale: 1.04,
  },
  bold: {
    fadeUp: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.7 } },
    stagger: 0.15,
    hoverScale: 1.06,
  },
} as const;

export function getPreset(intensity: AnimationIntensity) {
  return ANIMATION_PRESETS[intensity];
}
