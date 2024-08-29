/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: {
        allowedOrigins: ['localhost:3000', 'cautious-telegram-q77wpjpwx45qc4vx9-3000.app.github.dev', 'https://cautious-telegram-q77wpjpwx45qc4vx9-3000.app.github.dev/'],
        },
    },
};

export default nextConfig;
