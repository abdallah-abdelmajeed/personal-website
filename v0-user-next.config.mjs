/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure basePath for GitHub Pages deployment
  // This will be automatically set by GitHub Actions during deployment
  // but we need to define it for local development and testing
  basePath: process.env.GITHUB_ACTIONS ? '/Abdallah_Resume' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Abdallah_Resume/' : '',
}

export default nextConfig