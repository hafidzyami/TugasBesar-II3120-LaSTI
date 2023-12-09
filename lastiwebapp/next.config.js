/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["barcodeapi.org"],
        formats: ["image/webp"]
    },
};

module.exports = nextConfig;
