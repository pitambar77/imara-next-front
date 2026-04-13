// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   allowedDevOrigins: ["imarakilelenisafaris.com", "101.53.148.53"],
//   images: {
//     // domains: ["res.cloudinary.com"],
//     remotePatterns: [
//     {
//       protocol: "https",
//       hostname: "res.cloudinary.com",
//       pathname: "/**",
//     },
//   ],
//   qualities: [70, 75, 80],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["imarakilelenisafaris.com", "101.53.148.53"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    qualities: [70, 75, 80],
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "https://imarabackend.imarakilelenisafaris.com/sitemap.xml",
      },
      {
        source: "/api/:path*",
        destination: "https://imarabackend.imarakilelenisafaris.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;