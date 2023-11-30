/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    externalDir: true,
  },
  env: {
    NEXT_PUBLIC_GMAIL: process.env.NEXT_PUBLIC_GMAIL,
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    NEXT_PUBLIC_REFRESH_TOKEN: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    NEXT_PUBLIC_REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL,
    NEXT_PUBLIC_LOGO: process.env.NEXT_PUBLIC_LOGO,
    NEXT_PUBLIC_LOGO_NAVBAR: process.env.NEXT_PUBLIC_LOGO_NAVBAR,
  },
};

module.exports = nextConfig;
