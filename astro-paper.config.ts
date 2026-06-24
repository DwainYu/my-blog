import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://my-blog.pages.dev/",
    title: "Playmaker's Blog",
    description: "一个正在成长的 AI 应用开发者的技术博客。记录 FastAPI、RAG、TFT 大数据等项目实践。",
    author: "Playmaker",
    profile: "https://github.com/DwainYu",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Playmaker-ai/my-blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/DwainYu" },
    { name: "mail",     url: "mailto:playmaker_ai@qq.com" },
    { name: "xiaohongshu", url: "https://www.xiaohongshu.com/user/profile/60c322a50000000001002d5a" },
  ],
  shareLinks: [
    { name: "twitter",  url: "https://twitter.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
