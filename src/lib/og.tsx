import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { visibleSets, years } from "@/data";
import { me } from "@/data/me";
import { teamColors } from "@/lib/theme";

export const OG_IMAGE = {
  url: "/og.png",
  alt: "LEGO Speed Champions Collection",
  width: 1200,
  height: 630,
};

const DARK = "#0b0b0d";
const LIGHT = "#f4f4f5";

/** Two rows of flag squares, like the checkered strip atop the site header. */
function Checkered({ square }: { square: number }) {
  const cols = Math.ceil(OG_IMAGE.width / square);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {[0, 1].map((r) => (
        <div key={r} style={{ display: "flex" }}>
          {Array.from({ length: cols }, (_, c) => (
            <div key={c} style={{ width: square, height: square, background: (r + c) % 2 ? DARK : LIGHT }} />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Share card: the header wordmark minus the owner's name, plus a progress bar
 * so it reads as a collection. Rendered to PNG at build time.
 */
export async function renderOgImage() {
  const russo = await readFile(join(process.cwd(), "src/assets/RussoOne-Regular.ttf"));
  const [primary, onPrimary] = teamColors(me.teamColor);
  const owned = visibleSets.filter((s) => s.owned).length;
  const total = visibleSets.length;
  const first = Math.min(...years());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `radial-gradient(circle at 85% 110%, ${primary}44 0%, ${DARK} 55%)`,
          color: LIGHT,
          fontFamily: "Russo One",
        }}
      >
        <Checkered square={20} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 92, lineHeight: 1 }}>
            <div
              style={{
                display: "flex",
                background: primary,
                color: onPrimary,
                padding: "8px 24px",
                marginRight: 24,
                transform: "skewX(-12deg)",
              }}
            >
              <span style={{ transform: "skewX(12deg)" }}>SPEED</span>
            </div>
            <span style={{ letterSpacing: 4 }}>CHAMPIONS</span>
          </div>

          <div style={{ display: "flex", marginTop: 24, fontSize: 48, letterSpacing: 16, color: `${LIGHT}b3` }}>
            COLLECTION
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 64, width: 640 }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 28, lineHeight: 1, color: `${LIGHT}99` }}>
              <span style={{ color: LIGHT }}>{owned}</span>
              <span style={{ marginLeft: 10 }}>{`/ ${total} sets`}</span>
              <span style={{ marginLeft: "auto" }}>{`${first} → now`}</span>
            </div>
            <div style={{ display: "flex", height: 14, marginTop: 14, background: "#26262c", transform: "skewX(-12deg)" }}>
              <div style={{ width: `${(owned / total) * 100}%`, background: primary }} />
            </div>
          </div>
        </div>

        {/* Kerb stripe, like the site footer */}
        <div style={{ display: "flex", height: 18, overflow: "hidden" }}>
          {Array.from({ length: Math.ceil(OG_IMAGE.width / 28) + 1 }, (_, i) => (
            <div
              key={i}
              style={{ width: 28, flexShrink: 0, marginLeft: i ? 0 : -14, background: i % 2 ? LIGHT : primary, transform: "skewX(-45deg)" }}
            />
          ))}
        </div>
      </div>
    ),
    { width: OG_IMAGE.width, height: OG_IMAGE.height, fonts: [{ name: "Russo One", data: russo, style: "normal", weight: 400 }] },
  );
}
