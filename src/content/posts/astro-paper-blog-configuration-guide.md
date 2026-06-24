---
title: AstroPaper 博客配置完全指南：从基本信息到个人展示页
description: 手把手教你配置 AstroPaper 博客的站点信息、社交链接、About 页面、配色方案等，打造属于自己的技术博客。
pubDatetime: 2026-06-23T14:00:00.000+08:00
tags:
  - Astro
  - AstroPaper
  - 博客配置
  - 教程
draft: false
---

博客搭好了，但默认配置全是模板内容。这篇教程带你从零配置自己的博客——站点信息、社交链接、About 页面、配色方案，一篇搞定。

## 1. 站点基本信息

编辑项目根目录的 `astro-paper.config.ts`：

```typescript
import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // 站点 URL（部署后可在 CF 控制台查看真实地址）
    url: "https://placeholder.workers.dev/",
    
    // 站点标题（显示在浏览器标签和页面头部）
    title: "Playmaker's Blog",
    
    // 站点描述（SEO 用，出现在搜索结果摘要中）
    description: "一个正在成长的 AI 应用开发者的技术博客。",
    
    // 作者名
    author: "Playmaker",
    
    // 作者主页链接
    profile: "https://github.com/Playmaker-ai",
    
    // 封面图（放在 public/ 目录下）
    ogImage: "default-og.jpg",
    
    // 界面语言（⚠️ 必须用 en，中文翻译文件缺失）
    lang: "en",
    
    // 时区
    timezone: "Asia/Shanghai",
  },
```

**关键注意点**：
- `lang` 必须设为 `"en"`，设为 `"zh-CN"` 会报 `MissingLocaleError`
- `ogImage` 对应的图片文件要放在 `public/` 目录下，用于社交媒体分享时的封面图

## 2. 社交链接配置

在 `astro-paper.config.ts` 中找到 `socials` 数组：

```typescript
  socials: [
    { name: "github",   url: "https://github.com/Playmaker-ai" },
    { name: "mail",     url: "mailto:dwanyu@example.com" },
    { name: "twitter",  url: "https://twitter.com/Playmaker_ai" },
    { name: "linkedin", url: "https://linkedin.com/in/Playmaker-ai" },
  ],
```

**可用的社交图标**：`github`、`mail`、`twitter`、`linkedin`、`telegram`、`facebook`、`pinterest`、`whatsapp`、`x`

把这些链接改成你自己的即可。不想用的社交链接直接删掉那一行。

## 3. 文章分享链接

```typescript
  shareLinks: [
    { name: "twitter",  url: "https://twitter.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
```

这里配置读者分享文章的渠道。如果你想加微信分享，可以删掉不需要的，或者自定义链接。

## 4. 功能开关

```typescript
  features: {
    // 亮色/暗色模式切换
    lightAndDarkMode: true,
    
    // 自动生成 OG 图片（分享到社交媒体时的封面图）
    dynamicOgImage: true,
    
    // 显示归档页面
    showArchives: true,
    
    // 显示返回按钮
    showBackButton: true,
    
    // 允许编辑文章（跳转到 GitHub 编辑页面）
    editPost: {
      enabled: true,
      url: "https://github.com/Playmaker-ai/my-blog/edit/main/",
    },
    
    // 搜索方式：pagefind（客户端全文搜索）
    search: "pagefind",
  },
```

**建议**：
- `lightAndDarkMode` 保持开启，读者可以切换亮暗模式
- `dynamicOgImage` 开启后每篇文章会自动生成封面图（基于文章标题和描述）
- `editPost.enabled` 设为 `true` 会在每篇文章底部显示 "Edit this page" 链接，跳转到 GitHub 编辑

## 5. 文章分页设置

```typescript
  posts: {
    // 首页每页显示的文章数量
    perPage: 6,
    
    // 标签/归档页面每页显示的数量
    perIndex: 6,
    
    // 定时发布文章的缓冲时间（分钟）
    scheduledPostMargin: 15 * 60 * 1000,
  },
```

如果你的文章很多，可以把 `perPage` 调大；如果文章少，调到 3-4 看起来更紧凑。

## 6. About 页面

About 页面在 `src/content/pages/about.md`，直接编辑即可：

```markdown
---
title: 'About'
description: 'About this blog.'
pubDate: '2026-06-23'
draft: false
seo:
  image: {}
---

# About Me

Hi, I'm **Playmaker**.

## Who Am I

一个正在学习 AI 应用开发的开发者，23 岁，来自中国。

## What I'm Working On

- **FastAPI** 项目（bookly）
- **RAG** 和 **AI Agent** 开发
- **TFT** 数据分析
- **Cloudflare** 生态

## This Blog

Built with [AstroPaper](https://github.com/satnaing/astro-paper) + [Cloudflare Workers](https://pages.cloudflare.com/).

## Contact

- GitHub: [@DwainYu](https://github.com/DwainYu)
- Email: dwanyu@example.com
```

**提示**：
- `pubDate` 是页面发布日期，格式 `YYYY-MM-DD`
- 支持 Markdown 语法，可以加链接、列表、代码块等
- 社交链接要和 `astro-paper.config.ts` 里的 `socials` 保持一致

## 7. 自定义封面图

在 `public/default-og.jpg` 放一张你的封面图（建议尺寸 1200x630 像素，16:9 比例）。

如果没有动态 OG 图片，分享到微信/Twitter 时会显示这张默认图。

## 8. 配色方案（进阶）

AstroPaper 支持自定义配色。在 `src/styles/theme.css` 中可以修改：

- 主色调（Primary color）
- 背景色（Background）
- 文字颜色（Text）
- 暗色模式配色

如果你想换主题色，找到 `theme.css` 中的 CSS 变量修改即可。

## 9. 修改后验证

配置改完后：

```bash
pnpm dev
# 浏览器打开 http://localhost:4321 预览
```

确认：
- 标题、描述正确显示
- 社交链接图标出现在页面底部
- About 页面内容正确
- 暗色/亮色模式切换正常

然后：

```bash
git add -A
git commit -m "feat: customize blog configuration"
git push
```

GitHub Desktop 里也能直接操作，不用记命令。

## 总结

| 配置项 | 文件 | 说明 |
|--------|------|------|
| 站点信息 | `astro-paper.config.ts` | 标题、描述、作者、语言 |
| 社交链接 | `astro-paper.config.ts` | GitHub、邮箱等 |
| 功能开关 | `astro-paper.config.ts` | 暗色模式、搜索、归档等 |
| About 页面 | `src/content/pages/about.md` | 个人介绍 |
| 封面图 | `public/default-og.jpg` | 社交媒体分享封面 |
| 主题色 | `src/styles/theme.css` | 自定义配色 |

配置完成后，你的博客就不再是模板，而是真正属于你自己的技术阵地了。
