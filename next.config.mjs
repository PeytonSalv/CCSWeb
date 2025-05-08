// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 add the alias fix here
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      react: path.resolve(process.cwd(), 'node_modules/react'),
      'react-dom': path.resolve(process.cwd(), 'node_modules/react-dom'),
    };
    return config;
  },
};

export default nextConfig;
