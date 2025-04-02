/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
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