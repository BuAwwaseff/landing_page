import type { MelbetAnimatedLogoProps } from "./MelbetAnimatedLogo";

type MelbetLogoPreset = Pick<MelbetAnimatedLogoProps, "decorative" | "size">;

export const MELBET_LOGO_PRESETS = {
  casinoSection: {
    decorative: true,
    size: "nav",
  },
  experimental: {
    decorative: false,
    size: "md",
  },
  footer: {
    decorative: true,
    size: "md",
  },
  header: {
    decorative: true,
    size: "sm",
  },
  hero: {
    decorative: false,
    size: "lg",
  },
  landing: {
    decorative: true,
    size: "sm",
  },
  promoSection: {
    decorative: true,
    size: "nav",
  },
  section: {
    decorative: true,
    size: "nav",
  },
  sectionHighlight: {
    decorative: true,
    size: "sm",
  },
  sportsSection: {
    decorative: true,
    size: "nav",
  },
} as const satisfies Record<string, MelbetLogoPreset>;

export type MelbetLogoPresetName = keyof typeof MELBET_LOGO_PRESETS;

export function getMelbetLogoPreset(
  name: MelbetLogoPresetName,
  overrides: Partial<MelbetAnimatedLogoProps> = {}
): MelbetAnimatedLogoProps {
  return {
    ...MELBET_LOGO_PRESETS[name],
    ...overrides,
  };
}
