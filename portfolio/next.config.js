const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Exported builds cannot use the default Image Optimization API
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname, ".."),
};

module.exports = nextConfig;
