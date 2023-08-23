/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/build',
     key:'X-Frame-Options',
     value:'DENY'
    
}

module.exports = nextConfig
