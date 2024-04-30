const nextPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = nextPWA({
  compiler: {
    styledComponents: true,
    // removeConsole:
    //   process.env.NODE_ENV === "local" || process.env.NODE_ENV === "dev"
    //     ? false
    //     : { exclude: ["error"] },
  },
  reactStrictMode: false,
});

module.exports = nextConfig;
