/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repo = 'portfolio_website'; // Replace with your repository name

const nextConfig = {
  output: 'export', // For static export
  basePath: isProduction ? `/${repo}` : '',
  trailingSlash: true, // Optional: Adds a trailing slash to URLs
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

export default nextConfig;