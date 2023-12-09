/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['barcodeapi.org'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
