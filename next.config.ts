import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` emits ./out, hostable anywhere.
  output: "export",
  // Images are pre-resized to WebP by `npm run images`.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
