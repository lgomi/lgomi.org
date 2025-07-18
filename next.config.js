/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'storage.googleapis.com',
              port: '',
              pathname: '/www.lgomi.org/**',
              search: '',
            },
          ],
    }
};

module.exports = nextConfig;