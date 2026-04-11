/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/**",
    },
  ],
  qualities: [70, 75, 80],
  },
};

export default nextConfig;
