// import { i18n } from "./next-i18next.config.js";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   i18n,
  redirects: async () => [
    {
      source: "/",
      destination: "/en",
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
// export default nextConfig;
