import type { NextConfig } from "next";

// 静的書き出し（out/ をそのままレンタルサーバー等に置ける）
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
