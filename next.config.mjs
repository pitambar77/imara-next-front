/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
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
    contentDispositionType: "inline",
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination:
          "https://imarabackend.imarakilelenisafaris.com/sitemap.xml",
      },
      {
        source: "/api/:path*",
        destination: "https://imarabackend.imarakilelenisafaris.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
