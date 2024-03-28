/**
 * @type {import('next').NextConfig}
 */
const nextConfig = () => {
  const defaultNextJSConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "via.placeholder.com",
        },
      ],
    },
  };

  return defaultNextJSConfig;
};

module.exports = nextConfig;
