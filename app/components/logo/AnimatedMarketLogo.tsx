"use client";

import type { CSSProperties } from "react";
import {
  MelbetAnimatedLogo,
  type MelbetAnimatedLogoProps,
  type MelbetLogoSize,
} from "./MelbetAnimatedLogo";
import {
  getMelbetLogoPreset,
  type MelbetLogoPresetName,
} from "./melbetLogo.presets";

const presetSizeFallbacks: Record<MelbetLogoPresetName, MelbetLogoSize> = {
  casinoSection: "nav",
  experimental: "md",
  footer: "md",
  header: "sm",
  hero: "lg",
  landing: "sm",
  promoSection: "nav",
  section: "nav",
  sectionHighlight: "sm",
  sportsSection: "nav",
};

export type AnimatedMarketLogoProps = MelbetAnimatedLogoProps & {
  cycleMs?: number;
  preset?: MelbetLogoPresetName;
  randomize?: boolean;
  style?: CSSProperties;
  variantPool?: readonly string[];
  wrapperClassName?: string;
};

export function AnimatedMarketLogo({
  ariaLabel,
  className,
  decorative,
  preset = "header",
  size,
  style,
  wrapperClassName,
}: AnimatedMarketLogoProps) {
  const presetProps = getMelbetLogoPreset(preset, {
    ariaLabel,
    className,
    decorative,
    size: size ?? presetSizeFallbacks[preset],
  });

  return (
    <span className={wrapperClassName} style={style}>
      <MelbetAnimatedLogo {...presetProps} />
    </span>
  );
}
