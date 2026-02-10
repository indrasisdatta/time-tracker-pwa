/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    productionBrowserSourceMaps: true,
    styledComponents: true,
    removeConsole:
      process.env.NODE_ENV === "local" || process.env.NODE_ENV === "dev"
        ? false
        : { exclude: ["error"] },
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
};

module.exports = nextConfig;
