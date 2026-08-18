import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/terminos-y-condiciones.html",
        destination: "/terminos-y-condiciones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
