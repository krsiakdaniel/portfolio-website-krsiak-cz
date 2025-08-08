# 🏛️ Project Architecture

This document provides an overview of the architecture for the `portfolio-website-krsiak-cz` project. The design choices and structure aim to enhance scalability, maintainability, and ease of collaboration.

**Table of Contents:**

- [🌐 Architecture Layers](#-architecture-layers)
- [📂 Folders Structure](#-folders-structure)
- [📁 Folders Structure - Schema](#-folders-structure---schema)
- [🛠️ Key Technologies](#️-key-technologies)
- [🔒 Security and Performance](#-security-and-performance)
- [🚀 Deployment](#-deployment)

## 🌐 Architecture Layers

### 1. **Frontend**

- **Framework**: The project is powered by [Next.js](https://nextjs.org/), enabling both server-side rendering (SSR) and static site generation (SSG).
- **Styling**: Utilizes Tailwind CSS for utility-first styling, further enhanced with custom animations and theming configurations as defined in [tailwind.config.ts](/tailwind.config.ts).
- **State Management**: Primarily achieved through React's context and hook systems.

### 2. **Server-side**

- **Rendering**: Server-side logic is integrated within Next.js pages, leveraging its powerful API routes and data-fetching methods.

### 3. **Progressive Web App (PWA)**

- **Configuration**: Leveraging `next-pwa` for service worker management, caching strategies, and offline support.

## 📂 Folders Structure

- **Public Assets**: All static assets, including icons and images, reside in the `/public` directory.
- **Components**: Modular UI components are in the `/components` directory, structured around functional aspects like layout, pages, and shared utilities.
- **Pages**: Both static and dynamic routes are organized under the `/app` directory.
- **Lib**: Contains reusable utilities, constants, and hooks.
- **Tests**: Structured under `__tests__` with segregated test cases for Jest and Playwright.

## 📁 Folders Structure - Schema

```text
portfolio-website-krsiak-cz/
├── app/                              # Next.js App Router pages and layouts
│   ├── globals.css                   # Global CSS styles
│   ├── layout.tsx                    # Root layout component
│   ├── page.tsx                      # Homepage
│   ├── personal-projects/            # Personal projects showcase
│   ├── resume/                       # Resume page
│   ├── testimonials/                 # Testimonials page
│   ├── who-i-am/                     # About page
│   └── work-experience/              # Work experience pages
├── components/                       # Reusable React components
│   ├── analytics/                    # Analytics components (GA, Smartlook)
│   ├── icons/                        # SVG icon components
│   ├── layout/                       # Layout components (header, footer)
│   ├── pages/                        # Page-specific components
│   └── shared/                       # Shared utility components
├── lib/                              # Core utilities and business logic
│   ├── data/                         # Static data and content
│   ├── hooks/                        # Custom React hooks
│   └── utils/                        # Utility functions and helpers
├── public/                           # Static assets
│   ├── icons/                        # App icons and favicons
│   ├── images/                       # Images and graphics
│   └── manifest.webmanifest          # PWA manifest
├── __tests__/                        # Test files
│   ├── jest/                         # Unit and integration tests
│   └── playwright/                   # End-to-end tests
├── docs/                             # Documentation
│   ├── attribution/                  # Third-party attribution and licenses
│   ├── contributions/                # Contribution guidelines
│   ├── deployment/                   # Deployment guides and configurations
│   ├── design-system/                # Design system documentation
│   ├── development/                  # Development setup and guides
│   ├── editor-setup/                 # IDE/Editor configuration recommendations
│   ├── progressive-web-app/          # PWA features and configuration
│   ├── project-architecture/         # Architecture documentation
│   ├── security/                     # Security guidelines and policies
│   ├── team-leader-task-management/  # Project management documentation
│   ├── testing/                      # Testing strategies and guides
│   └── website-performance/          # Performance optimization guides
├── localization/                     # Internationalization files
├── scripts/                          # Build and deployment scripts
├── types/                            # TypeScript type definitions
├── package.json                      # Dependencies and scripts
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── jest.config.ts                    # Jest testing configuration
├── playwright.config.ts              # Playwright E2E configuration
├── netlify.toml                      # Netlify deployment configuration
└── README.md                         # Project documentation
```

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
