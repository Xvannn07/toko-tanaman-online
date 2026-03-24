/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Izinkan akses HMR dari IP lokal (untuk testing di HP dengan IP address)
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.0.101',
    '192.168.0.*',
  ],
}

export default nextConfig
