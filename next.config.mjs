/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alm-biz-assets-dev.almosafer.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "alm-biz-web-strapi-dev.almosafer.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
