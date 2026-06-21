/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://localhost:3088',
    'http://127.0.0.1:3088',
    'http://192.168.1.11:3088',
  ],
};

export default nextConfig;
