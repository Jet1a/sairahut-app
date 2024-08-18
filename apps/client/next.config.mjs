/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const nextConfig = {
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
  async redirects() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8000/api/:path*',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
