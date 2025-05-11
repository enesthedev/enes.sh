import { NextConfig } from "next";

import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withNextIntl = createNextIntlPlugin(
  "./app/features/localization/request.ts"
);
const withMDX = createMDX({});

export default withMDX(withNextIntl(nextConfig));
