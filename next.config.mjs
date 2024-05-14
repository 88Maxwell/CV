const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "https://88maxwell.github.io/cv" : undefined,
};

export default nextConfig;
