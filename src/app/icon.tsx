import { renderIcon } from "@/lib/icon";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
// Rendered once at build time (required by output: "export").
export const dynamic = "force-static";

export default function Icon() {
  return renderIcon(size.width);
}
