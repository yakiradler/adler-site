import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/adler-site",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/adler-site",
  },
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts",
  },
};

export default nextConfig;
