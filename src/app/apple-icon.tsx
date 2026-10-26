import { renderIcon } from "@/lib/icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
// Rendered once at build time (required by output: "export").
export const dynamic = "force-static";

export default function AppleIcon() {
  return renderIcon(size.width);
}
