---
title: '我是如何用 Astro + Cloudflare 搭建这个博客的'
description: '从零开始搭建一个免费、自动化、现代化的个人技术博客的全过程记录。'
pubDatetime: 2026-06-19T16:30:00.000+08:00
tags: ['Astro', 'Cloudflare', '博客搭建', '教程']
draft: false
---

这是我搭建个人博客的全过程记录。

## 为什么搭建博客

作为一个正在学习 AI 应用开发的开发者，我需要：

1. **记录学习过程** — FastAPI、RAG、TFT 大数据等项目实践
2. **建立技术形象** — 求职时展示作品集
3. **自动化发布** — 写完 Markdown 就自动部署，零运维

## 技术选型

| 组件 | 选择 | 理由 |
|------|------|------|
| 框架 | **Astro** | 超快静态生成，TypeScript，生态活跃 |
| 主题 | **AstroPaper** | 3.5k+ Stars，暗色模式，搜索，SEO 友好 |
| 部署 | **Cloudflare Pages** | 免费，自动构建，全球 CDN |
| 源码 | **GitHub** | 免费仓库，自动触发构建 |
| 写作 | **Obsidian** | 本地 Markdown，同步到博客仓库 |

## 搭建步骤

### 1. 初始化项目

```bash
npm create astro@latest my-blog -- --template satnaing/astro-paper
cd my-blog
npm install
```

### 2. 配置个人信息

编辑 `astro-paper.config.ts`：

```typescript
site: {
  url: "https://my-blog.pages.dev/",
  title: "DwainYu's Blog",
  author: "DwainYu",
  lang: "zh-CN",
  timezone: "Asia/Shanghai",
}
```

### 3. 初始化 Git 并推送到 GitHub

```bash
git init
git add -A
git commit -m "init blog"
git remote add origin https://github.com/DwainYu/my-blog.git
git push -u origin main
```

### 4. 部署到 Cloudflare Pages

（这一步等注册 Cloudflare 账号后完成）

## 后续计划

- [ ] 注册 Cloudflare 账号
- [ ] 创建 Pages 项目并连接 GitHub 仓库
- [ ] 绑定自定义域名（等稳定后购买）
- [ ] 写更多技术博文

## 写在最后

博客已经搭好了，第一篇就是记录搭建过程本身。后续我会在这里分享我的学习心得和项目实践。

如果你也想搭建一个免费的博客，AstroPaper + Cloudflare Pages 是个不错的选择。
