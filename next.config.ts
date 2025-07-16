import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compresión
  compress: true,

  // Headers de seguridad y performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache para assets estáticos
      {
        source: '/cv-antonio-mora.pdf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects (si es necesario)
  async redirects() {
    return [
      // Ejemplo: redirect de rutas antiguas
      // {
      //   source: '/old-path',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Webpack configuration (si es necesario)
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones adicionales
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },

  // Environment variables públicas
  env: {
    SITE_NAME: 'Antonio Mora - Portfolio',
    SITE_DESCRIPTION: 'Ingeniero de Software especializado en desarrollo full stack',
  },

  // TypeScript configuration
  typescript: {
    // Durante el build en producción, type checking es estricto
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Trailing slash
  trailingSlash: false,

  // Power optimizations
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,
};

export default nextConfig;