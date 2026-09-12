/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  // Compiler optimizations
  compiler: {
    // Remove console.log in production for smaller bundle
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Experimental optimizations for better Core Web Vitals
  experimental: {
    // Optimize package imports to reduce JS bundle size
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
