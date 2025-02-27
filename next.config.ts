import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "backend-strapi-production-307f.up.railway.app"],
  },
  /* config options here */
};

export default withNextIntl(nextConfig);
