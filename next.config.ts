import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    serverExternalPackages: ['@prisma/client'],
    // diğer ayarların varsa buraya yazabilirsin
}

export default nextConfig