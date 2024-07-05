/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com','lh3.googleusercontent.com','ak-d.tripcdn.com'],
  },
};

module.exports = nextConfig;
