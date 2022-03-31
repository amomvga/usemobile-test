/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://192.168.60.196:3333/files/"],
  },
};

module.exports = nextConfig;
