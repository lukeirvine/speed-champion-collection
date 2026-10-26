import type { CSSProperties } from "react";
import type { Profile, TeamColor } from "@/data/types";

/** [accent, text-on-accent] per preset. */
const TEAM_COLORS: Record<TeamColor, [string, string]> = {
  "racing-red": ["#e10600", "#ffffff"],
  ferrari: ["#dc0000", "#ffffff"],
  mclaren: ["#ff8000", "#1a0d00"],
  mercedes: ["#00d2be", "#031614"],
  "red-bull": ["#3671c6", "#ffffff"],
  "aston-martin": ["#229971", "#ffffff"],
  alpine: ["#ff87bc", "#2a0716"],
  williams: ["#64c4ff", "#04141f"],
  gulf: ["#74c7e8", "#0b1b22"],
};

/** Dark text on light colours, white on dark ones. */
function contentFor(hex: string) {
  const n = parseInt(hex.slice(1).padEnd(6, "0").slice(0, 6), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#111111" : "#ffffff";
}

/** CSS variables that re-tint daisyUI's primary colour. */
export function teamColorVars(teamColor: Profile["teamColor"]): CSSProperties {
  const [primary, content] = teamColor.startsWith("#")
    ? [teamColor, contentFor(teamColor)]
    : TEAM_COLORS[teamColor as TeamColor];
  return { "--color-primary": primary, "--color-primary-content": content } as CSSProperties;
}
