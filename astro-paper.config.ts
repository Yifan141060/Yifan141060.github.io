import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://Yifan141060.github.io",
    title: "王一凡", // 🚀 精准修正：让全站左上角及浏览器标签页常驻你的中文名字
    description: "王一凡的个人主页 - 专注于生成式 AI、多模态学习与风格迁移。毕业于北京理工大学，目前从事影像算法研发。",
    author: "王一凡 (Yifan Wang)",
    profile: "https://Yifan141060.github.io",
    ogImage: "default-og.jpg",
    lang: "zh-CN", // 切换为中文环境，确保后续随笔与日常分享的文本渲染正常
    timezone: "Asia/Shanghai", // 时区调整为北京时间
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false, // 个人托管建议先关闭动态OG图，防止云端打包时因中文字体缺失导致报错
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false, // 个人主页不需要显示“建议修改”的外部链接
      //url: "https://github.com",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com" },
    { name: "mail",   url: "mailto:wyf141060@163.com" },
  ],
  shareLinks: [
    { name: "mail",   url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
