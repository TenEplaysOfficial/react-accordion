# React Accordion

<style>
  .badge-wrapper > p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }
</style>

<div class="badge-wrapper">

[![npm](https://img.shields.io/npm/v/@tenedev/react-accordion?color=blue&label=NPM&logo=npm&style=flat-square)](https://www.npmjs.com/package/@tenedev/react-accordion)
[![downloads](https://img.shields.io/npm/dt/@tenedev/react-accordion?color=blue&label=Downloads&logo=archive&style=flat-square)](https://www.npmjs.com/package/@tenedev/react-accordion)
![size](https://img.shields.io/bundlephobia/minzip/@tenedev/react-accordion?style=flat-square&label=Size&logo=webpack&color=blue)
![maintenance](https://img.shields.io/maintenance/active/2025?style=flat-square&label=Maintained&logo=calendar&color=blue)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-blue?logo=node.js&style=flat-square)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Docs-blue?logo=storybook&style=flat-square)](https://teneplaysofficial.github.io/react-accordion/?path=/docs/introduction--docs)
[![contribute](https://img.shields.io/badge/Contribute-Open%20PRs-blue?style=flat-square&logo=git)](https://github.com/TenEplaysOfficial/react-accordion/pulls)
[![stars](https://img.shields.io/github/stars/TenEplaysOfficial/react-accordion?style=flat-square&label=Stars&logo=github)](https://github.com/TenEplaysOfficial/react-accordion)
![forks](https://img.shields.io/github/forks/TenEplaysOfficial/react-accordion?style=flat-square&label=Forks&logo=github)
[![issues](https://img.shields.io/github/issues/TenEplaysOfficial/react-accordion?style=flat-square&label=Issues&logo=github&color=blue)](https://github.com/TenEplaysOfficial/react-accordion/issues)
[![last commit](https://img.shields.io/github/last-commit/TenEplaysOfficial/react-accordion?style=flat-square&label=Last%20Commit&logo=github&color=blue)](https://github.com/TenEplaysOfficial/react-accordion)
![workflow](https://img.shields.io/github/actions/workflow/status/TenEplaysOfficial/react-accordion/publish.yml?style=flat-square&label=Build&logo=githubactions&color=blue)
![license](https://img.shields.io/github/license/TenEplaysOfficial/react-accordion?style=flat-square&label=License&logo=open-source-initiative&color=blue)

</div>

A **lightweight, accessible** React accordion component with smooth animations. Built using **TypeScript**, smooth animations with **Motion** and styled with **Tailwind CSS**, this component supports:

- Controlled and uncontrolled modes
- Multiple open items
- Customizable icons
- Fully themeable and easy to integrate

Designed with **performance** and **accessibility** in mind, this accordion is perfect for React applications.

<!-- ## 🖼️ Preview

![img]() -->

## 🚀 **Features**

- ⚙️ Easy to integrate
- 🧩 Fully customizable styles and icons
- ♿ Accessibility-first design
- 💨 Smooth animations using Motion

## 📦 **Prerequisites**

Before using the component, make sure your project includes the following:

- [React](https://react.dev/) `v19.1.0 or higher`
- [ReactDOM](https://react.dev/) `v19.1.0 or higher`
- [Motion](https://motion.dev/) – for animation
- [Tailwind CSS](https://tailwindcss.com/) – for styling
- [Node.js](https://nodejs.org/) `v16 or higher`

> These are required as **peer dependencies**, so you'll need to have them installed in your project.

## 📥 **Installation**

Install the required dependencies:

```bash
npm install motion tailwindcss
```

Then install the accordion package:

```bash
npm install @tenedev/react-accordion
```

> 💡 **Note:**  
> **react**, **react-dom**, **motion**, and **tailwindcss** are **peer dependencies**. This ensures your app shares a single copy of them with the library. Tailwind requires framework specific configuration (Vite, Next.js, etc.). Make sure to follow the official guide: [Tailwind CSS Installation Docs](https://tailwindcss.com/docs/installation/)

## 🛠️ Usage
