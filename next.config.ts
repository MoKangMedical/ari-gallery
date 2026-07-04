import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from repo root, no basePath needed
  // If using custom domain, remove trailingSlash
  trailingSlash: false,
};

export default nextConfig;
