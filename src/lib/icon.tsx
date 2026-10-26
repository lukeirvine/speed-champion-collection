import { ImageResponse } from "next/og";
import { me } from "@/data/me";
import { teamColors } from "./theme";

const DARK = "#0b0b0d";
const LIGHT = "#f4f4f5";

/**
 * Site icon: a 3×3 checkered flag built from LEGO studs, slanted for speed,
 * on the team color from me.ts. Rendered to PNG at build time.
 */
export function renderIcon(size: number) {
  const [primary] = teamColors(me.teamColor);
  const tile = Math.round(size * 0.24);
  const stud = Math.round(tile * 0.62);

  const rows = [0, 1, 2].map((r) => (
    <div key={r} style={{ display: "flex" }}>
      {[0, 1, 2].map((c) => {
        const dark = (r + c) % 2 === 0;
        return (
          <div
            key={c}
            style={{
              width: tile,
              height: tile,
              background: dark ? DARK : LIGHT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* The stud: a slightly lighter disc with a shadow edge */}
            <div
              style={{
                width: stud,
                height: stud,
                borderRadius: stud,
                background: dark ? "#26262c" : "#ffffff",
                boxShadow: `0 ${Math.max(1, Math.round(size / 90))}px 0 ${dark ? "#000000" : "#c4c4ca"}`,
              }}
            />
          </div>
        );
      })}
    </div>
  ));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            transform: "skewX(-12deg)",
            borderRadius: Math.round(size * 0.04),
            overflow: "hidden",
            boxShadow: `${Math.round(size * 0.03)}px ${Math.round(size * 0.03)}px 0 rgba(0,0,0,0.35)`,
          }}
        >
          {rows}
        </div>
      </div>
    ),
    { width: size, height: size },
  );
}
