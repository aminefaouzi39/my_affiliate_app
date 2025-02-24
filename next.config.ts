/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/my_affiliate_app" : "",
  assetPrefix: isProd ? "/my_affiliate_app/" : "",
};

module.exports = nextConfig;
