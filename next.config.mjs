/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.88.164:8080/api/:path*',
      },
    ];
  },
};

export default nextConfig;
