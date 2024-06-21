import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
    prependData: `
      @import "./src/styles/mixins.scss";
      @import "./src/styles/unit.scss";
      @import "./src/styles/styles.scss";
    `,
  },
};

export default nextConfig;
