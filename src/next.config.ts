// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Point to the config file you created in project root (i18n.ts)
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {} // since you’re on Next 15 with Turbopack
  }
};

export default withNextIntl(nextConfig);
