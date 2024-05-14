const isProd = process.env.NODE_ENV === "production";
const isLocalBuild = process.env.LOCAL_BUILD === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }
  // assetPrefix: isProd && !isLocalBuild ? "https://88maxwell.github.io/cv" : undefined,
};

export default nextConfig;
