import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@innovative-twist/ui",
    "@innovative-twist/domain",
    "@innovative-twist/types",
    "@innovative-twist/config",
  ],
};

export default nextConfig;
