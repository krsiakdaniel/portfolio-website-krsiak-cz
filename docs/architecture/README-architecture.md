# 🏛️ Project Architecture Overview

This document provides an overview of the architecture for the `portfolio-website-krsiak-cz` project. The design choices and structure aim to enhance scalability, maintainability, and ease of collaboration.

## 🌐 Architecture Layers

### 1. **Frontend**

- **Framework**: The project is powered by [Next.js](https://nextjs.org/), enabling both server-side rendering (SSR) and static site generation (SSG).
- **Styling**: Utilizes Tailwind CSS for utility-first styling, further enhanced with custom animations and theming configurations as defined in [tailwind.config.ts](/tailwind.config.ts).
- **State Management**: Primarily achieved through React's context and hook systems.

### 2. **Server-side**

- **Rendering**: Server-side logic is integrated within Next.js pages, leveraging its powerful API routes and data-fetching methods.

### 3. **Progressive Web App (PWA)**

- **Configuration**: Leveraging `next-pwa` for service worker management, caching strategies, and offline support.

## 📂 Directory Structure

- **Public Assets**: All static assets, including icons and images, reside in the `/public` directory.
- **Components**: Modular UI components are in the `/components` directory, structured around functional aspects like layout, pages, and shared utilities.
- **Pages**: Both static and dynamic routes are organized under the `/app` directory.
- **Lib**: Contains reusable utilities, constants, and hooks.
- **Tests**: Structured under `__tests__` with segregated test cases for Jest and Playwright.

## 🛠️ Key Technologies

- **Bun**: Utilized for package management and running scripts more efficiently.
- **Testing Frameworks**: Jest and Playwright for unit tests and end-to-end testing, respectively.
- **CI/CD**: Configured workflows with GitHub Actions for automated testing and deployment.

## 🔒 Security and Performance

- **Content Security Policy**: Configured via Next.js headers to enhance security by restricting resource loading.
- **Performance Monitoring**: Optimizations such as image lazy loading, caching directives, and efficient data fetching are in place.

## 🚀 Deployment

- **Platform**: Deployments are managed through Netlify, with configurations specified in `netlify.toml`.
- **Build Scripts**: Conduct builds using Bun scripts defined in `package.json`.
