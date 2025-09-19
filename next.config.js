/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "pikwizard.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com", 
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "divyby.redspace.in",
      },
    ],
  },
};

export default nextConfig;
