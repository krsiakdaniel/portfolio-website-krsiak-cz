# MDX Blog Setup Documentation

This document provides an overview of how MDX is configured and utilized in this project to power the blog section.

## 📄 What is MDX?

MDX stands for **Markdown JSX**. It allows you to use JSX components within markdown files, providing a powerful way to build content-rich pages. This makes MDX perfect for content-heavy sites needing dynamic components.

## 📂 Project Structure

### **MDX Files Location**

MDX files are stored under the `app/blog/` directory. Here is a sample file structure:

- `app/blog/sample.mdx` - An example MDX file showcasing capabilities.
- `app/blog/[slug]/page.tsx` - Dynamic routing for individual blog posts.

## 🛠️ MDX Setup

### **Dependencies**

Ensure the following dependencies are listed in your `package.json`:

- `@mdx-js/loader`
- `@mdx-js/react`
- `@next/mdx`
- `next-mdx-remote`

### **Next.js Configuration**

The `next.config.mjs` is configured with MDX support using the `@next/mdx` and `next-mdx-remote` packages. It also includes plugins like `rehype-pretty-code` for syntax highlighting.

```js
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, yourPrettyCodeOptions]],
  },
})
```

### **Custom MDX Components**

Custom components have been created to replace default HTML elements with styled React components. This is found in `mdx-components.tsx`.

### **Code Highlighting**

Uses `rehype-pretty-code` with `shiki` as the syntax highlighting engine. Styles are defined in `app/blog/code-highlight.css` and can be adjusted to match your theme.

## 🚀 Using MDX in Pages

You can use React components within MDX pages like so:

```jsx
import { ComponentName } from '../path/to/component';

# Your MDX Content

<ComponentName />
```

## 📊 Blog Post Structure

Here’s a typical frontmatter for a blog post:

```md
---
title: 'Your Blog Title'
date: '2025-07-13'
excerpt: 'A small summary of the blog'
author: 'Your Name'
tags: [tag1, tag2]
---

# Blog Content
```

This metadata will be parsed and used within the layout for the blog.

## 📜 Blog Rendering

Posts are fetched using utility functions like `getAllBlogPosts()` and `getBlogPost(slug)` from `blog-utils.ts`, which read file contents and parse frontmatter.
