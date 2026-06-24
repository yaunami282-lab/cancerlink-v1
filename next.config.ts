import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== 图片优化（自动 WebP/AVIF 压缩） =====
  images: {
    formats: ["image/avif", "image/webp"],
    // 允许加载外部图片的域名（按需添加）
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // 设备断点（生成对应尺寸的优化图片）
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 图片尺寸断点
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 最低压缩质量
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30天缓存
  },

  // ===== 性能优化 =====
  // 启用 gzip/brotli 压缩
  compress: true,

  // ===== 安全头配置 =====
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // ===== 重定向规则 =====
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/report-analysis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
