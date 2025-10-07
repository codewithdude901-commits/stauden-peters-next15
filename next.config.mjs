import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stauden-peters-de.s3.eu-central-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'd3r57ia6anwehl.cloudfront.net', 
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
