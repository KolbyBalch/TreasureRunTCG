/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [new URL('https://raw.githubusercontent.com/KolbyBalch/TreasureRun/refs/heads/main/**')]
    }
};

module.exports = nextConfig;
