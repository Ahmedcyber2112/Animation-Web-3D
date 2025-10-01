/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental features that cause build issues
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // Optimize images
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configure webpack for 3D models and assets
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle GLB files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    
    // Handle other 3D assets
    config.module.rules.push({
      test: /\.(obj|fbx|dae)$/,
      type: 'asset/resource',
    });
    
    return config;
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimize output for deployment
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
