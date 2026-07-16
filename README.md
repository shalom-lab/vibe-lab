# Vibe Lab

<div align="center">

**探索现代 Web 技术的实验集合 — 从 API 演示到 AI 应用，开箱即玩**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-6366f1?logo=githubpages&logoColor=white)](https://shalom-lab.github.io/vibe-lab/)
[![HTML5](https://img.shields.io/badge/HTML5-静态页面-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![GitHub](https://img.shields.io/badge/GitHub-shalom--lab%2Fvibe--lab-181717?logo=github)](https://github.com/shalom-lab/vibe-lab)

</div>

---

## ✨ 项目简介

Vibe Lab 是一个**零构建、纯静态**的 Web 实验沙盒。每个子项目都是独立的 HTML 页面，可直接在浏览器中打开，也适合部署到 GitHub Pages 做在线演示。

- **即开即用**：无需 `npm install`，克隆仓库后双击或用本地服务器打开即可
- **独立实验**：各页面互不依赖，可单独学习或二次改造
- **现代技术栈**：Web API、PWA、Bookmarklet、SVG 动画、AI 视觉等方向均有覆盖

## 🧪 实验目录

### 🌐 Web API

| 项目 | 路径 | 说明 |
|------|------|------|
| Web API 极客实验室 | [`web-api.html`](web-api.html) | 文件系统、剪贴板、通知等现代浏览器 API 演示 |
| Web API 文件操作 | [`web-api-file.html`](web-api-file.html) | File System Access API 本地读写演示 |

### 🛠️ 工具与应用

| 项目 | 路径 | 说明 |
|------|------|------|
| Bookmarklet 工具 | [`bookmarklet/index.html`](bookmarklet/index.html) | CodeMirror 编辑器 + 一键压缩复制为书签脚本 |
| FlowMark Pro | [`flowmark.html`](flowmark.html) | 现代书签管理器，支持分类与搜索 |
| Spark Survey Engine | [`surv_mvp.html`](surv_mvp.html) | 问卷调查 MVP，多题型与逻辑跳转 |
| AI 视觉百科 | [`word/index.html`](word/index.html) | AI 驱动的视觉识别与知识百科 |
| Zotero 结构 | [`zotero.html`](zotero.html) | Zotero 文献管理系统结构展示 |

### 📱 平台与运行时

| 项目 | 路径 | 说明 |
|------|------|------|
| PWA 示例 | [`PWA/index.html`](PWA/index.html) | Service Worker + Manifest 渐进式 Web 应用入门 |
| WebR 代码执行器 | [`webr-.html`](webr-.html) | 在浏览器中运行 R 代码 |
| 微信原生动画实验室 | [`wechat-svg.html`](wechat-svg.html) | 微信风格 SVG 动画效果集合 |

## 🚀 快速开始

### 在线体验

打开 [GitHub Pages 站点](https://shalom-lab.github.io/vibe-lab/)，从首页卡片进入任意实验。

### 本地运行

```bash
git clone https://github.com/shalom-lab/vibe-lab.git
cd vibe-lab
```

任选一种方式启动：

```bash
# 方式一：Python 内置服务器
python -m http.server 8080

# 方式二：npx serve
npx serve .
```

浏览器访问 `http://localhost:8080`，从 [`index.html`](index.html) 首页导航到各实验。

> 部分 Web API（如文件系统访问）需在 `http://` 或 `https://` 环境下运行，直接 `file://` 打开可能受限。

## 📁 目录结构

```
vibe-lab/
├── index.html              # 项目导航首页
├── web-api.html            # Web API 实验室
├── web-api-file.html       # 文件系统 API
├── bookmarklet/            # Bookmarklet 压缩工具
├── PWA/                    # PWA 示例（含 sw.js、manifest）
├── word/                   # AI 视觉百科
├── flowmark.html           # 书签管理器
├── surv_mvp.html           # 问卷引擎
├── webr-.html              # WebR 执行器
├── wechat-svg.html         # 微信 SVG 动画
└── zotero.html             # Zotero 结构
```

## 🔧 技术栈

- **前端**：原生 HTML / CSS / JavaScript，部分页面使用 Tailwind CSS CDN
- **编辑器**：Bookmarklet 工具集成 [CodeMirror 6](https://codemirror.net/)
- **部署**：GitHub Pages 静态托管
- **无后端**：所有实验均在浏览器端运行

## ⚠️ 说明

- 本仓库以**学习与原型验证**为主，部分实验可能依赖特定浏览器版本或权限
- AI 相关页面如需调用外部 API，请自行配置密钥，勿将敏感信息提交到仓库
- 欢迎 fork 后按需改造，各页面可独立演进

---

<div align="center">

**如果这个项目对您有帮助，请给个 ⭐ Star！**

Made with ❤️ by [shalom-lab](https://github.com/shalom-lab)

</div>
