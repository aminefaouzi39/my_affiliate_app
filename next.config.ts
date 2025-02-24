/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/my_affiliate_app", // Must match your GitHub repo name
  assetPrefix: "/my_affiliate_app/",
};

module.exports = nextConfig;
