import { renderOgImage } from "@/lib/og";

// Rendered once at build time (required by output: "export"). A route handler
// rather than opengraph-image.tsx so the exported file keeps its .png
// extension — without it, static hosts serve it as application/octet-stream
// and link previewers like iMessage ignore it.
export const dynamic = "force-static";

export function GET() {
  return renderOgImage();
}
