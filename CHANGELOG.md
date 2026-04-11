<!-- markdownlint-disable MD024 -->

# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🚀 Website Version History

As of **April 11, 2026**, the website is `"version": "2.48.29"`.

- `2.x.x`: Major version representing complete redesign (Feb 2024)
- `x.48.x`: Feature additions (new pages, components, functionality)
- `x.x.24`: Bug fixes and minor improvements

## `2.48.29` - 2026-04

### 📝 Documentation

- 📝 Add type import rules to `components.instructions.md` — enforce inline `import { type X }` pattern
- 📝 Add `data.instructions.md` — type import rules for `data/` folder
- 📝 Add `localization.instructions.md` — type import rules for `localization/` folder
- 📝 Update AI Copilot README to list new instruction files

## `2.48.28` - 2026-04

### 🛠️ Chore

- 🔧 Fix `jest.config.ts` — `next/jest.js` → `next/jest` (remove legacy CJS extension)
- 🔧 Fix `eslint.config.ts` — remove misaligned import comments
- 🔧 Fix `.editorconfig` — `trim_trailing_whitespace: false` → `true`

## `2.48.27` - 2026-04

### 🛠️ Chore

- 🔧 Rename `next.config.mjs` → `next.config.ts` — add `NextConfig` type, TypeScript catches config errors
- 🔧 Rename `eslint.config.js` → `eslint.config.ts` — native Bun TypeScript support, no extra deps needed
- 🐛 Fixed `cacheOnFrontendNav` → `cacheOnFrontEndNav` typo in PWA config (caught by TypeScript)

## `2.48.26` - 2026-04

### 🗑️ Removed

- 🧹 Deleted root `index.ts` — Bun init leftover (`console.log('Hello via Bun!')`)

## `2.48.25` - 2026-04

### 🛠️ Chore

- 🔧 Add `features/` to Tailwind CSS content paths — feature components now correctly scanned for class names
- 🔧 Add `features/` to Jest `collectCoverageFrom` — coverage reports now include all feature components
- 🔧 Set `collectCoverage: false` in Jest config — coverage only generated when explicitly requested via `bun test:jest:coverage`

## `2.48.24` - 2026-04

### 🛠️ Chore

- 🔧 Added `~/` (Bun cache directory) to `.gitignore`
- 📦 Fixed `.prettierrc` import order — `@/lib/data/` → `@/data/` to match actual folder structure
- 📝 Updated all docs and instruction files to reflect correct `@/data/` import path
- 🛠️ Add Copilot instructions, prompts, agent, and skill
- 📝 Add AI Copilot customization README
- 🛠️ Major TypeScript upgrade
- 🛠️ Update ESLint
- 🛠️ Update safe dependencies

### 🔄 Changed

- 👷 New profile picture
- 👷 Cleaner codebase structure
- 👷 Codebase cleanup
- 👷 Projects descriptions improved
- 👷 Text structure refactor
- 👷 Remove emoji from footer
- 👷 Components and CSS styles refactor
- 👷 Remove text from work pages
- 👷 Better content flow on pages

### 🐛 Fixed

- 🐛 Console warnings and errors fixed

### ♿ Accessibility

- ♿ Improved accessibility labels

## `2.48.23` - 2026-03

### ✨ Added

- ✨ Personal Korean Easy project page
- ✨ My travels countries feature
- ✨ Projects page redesign
- ✨ Latest work project added
- 🛠️ Hotjar analytics integration

### 🔄 Changed

- 👷 Texts and data structure refactor
- 👷 Project structure reorganization
- 👷 Factory function for SEO metadata
- 👷 TypeScript safety improvements
- 👷 URL and links structure refactor
- 👷 About page — country card and traveling categories
- 👷 CSS update to latest Tailwind style
- 👷 Webmanifest update
- 👷 Open graph images for Korean Easy
- 👷 Project screenshots update
- 👷 Remove project Cryptomania
- 👷 Update resume PDF link
- 👷 Metadata type refactor
- 👷 Smaller files types refactor
- 👷 Data folders reorganization

### 🐛 Fixed

- 🐛 ESLint errors resolved

### 🚀 Performance

- 🚀 Prettier plugin — import sorting

### 🧪 Testing

- 🎭 E2E tests code and structure improvements

### 📦 Dependencies

- ⬆️ Update to latest dependencies
- ⬆️ Update Node.js

### 📝 Documentation

- 📝 AI instructions update

## `2.48.0` - 2026-02

### ✨ Added

- ✨ Dynamic years calculation feature

### 🔄 Changed

- 👷 Resume page refactor and link update
- 👷 Footer refactor — remove DividerWithEmojis

### 📦 Dependencies

- ⬆️ Upgrade Next.js to 16.1.6
- ⬆️ Update React to latest
- ⬆️ Update Bun to latest version
- ⬆️ Update misc dependencies
- ⬆️ Update safe dependencies

### 📝 Documentation

- 📝 Changelog README update

## `2.46.0` - 2025-12

### 🔄 Changed

- 🎯 Refined component architecture and code organization
- 📚 Enhanced documentation and README content

### 📦 Dependencies

- ⬆️ Updated ESLint and related tooling
- ⬆️ General dependency maintenance and updates

### 🗑️ Removed

- 🤖 Dependabot automation (replaced with manual updates)

## `2.44.0` - 2025-11

### ✨ Added

- ♿ Enhanced ARIA accessibility attributes for emoji elements
- 🤖 Improved GitHub Copilot instructions and development workflow

### 🔄 Changed

- 📱 Improved mobile menu interaction (closes on outside click)
- 📝 General documentation updates

## `2.42.0` - 2025-10

### 🐛 Fixed

- 🎭 Resolved failing E2E tests in CI/CD pipeline
- 🔧 Addressed Git tracking issues with auto-generated files

### 📦 Dependencies

- ⬆️ Updated Playwright to latest version
- ⬆️ Updated `@types/react` and `@types/node`

## `2.40.0` - 2025-09

### 🔄 Changed

- 📧 Removed email contact information for privacy
- 📝 Updated resume page structure and content

### 📦 Dependencies

- ⬆️ Updated TypeScript and compiler options

## `2.38.0` - 2025-08

### 🔄 Changed

- 📚 Enhanced documentation and README content
- 🔧 Refined project configuration and build setup

### 📦 Dependencies

- ⬆️ General dependency maintenance and updates

## `2.35.24` - 2025-07

### 🔄 Changed

- 🎯 Ongoing component architecture improvements
- 🔧 Build and configuration refinements

## `2.35.23` - 2025-06

### 📦 Dependencies

- ⬆️ Updated Next.js to latest 15.x patch
- ⬆️ General dependency maintenance and updates

### 🔄 Changed

- 📝 Documentation updates and cleanup

## `2.35.22` - 2025-05

### 🔄 Changed

- 🎯 Component architecture refinements
- 🧪 Test coverage improvements

### 🐛 Fixed

- 🔧 Minor bug fixes and stability improvements

## `2.35.21` - 2025-04

### ✨ Added

- 🤖 Expanded AI assistant instructions and development workflow

### 📦 Dependencies

- ⬆️ Updated Playwright and testing dependencies

## `2.35.20` - 2025-03

### 🔄 Changed

- 📱 Mobile responsiveness improvements
- 🎨 UI polish across multiple pages

### 📦 Dependencies

- ⬆️ Updated React and Next.js dependencies

## `2.35.19` - 2025-02

### ✨ Added

- ♿ Accessibility improvements across pages

### 🐛 Fixed

- 🧪 Fixed Jest and Playwright test configuration issues

## `2.35.18` - 2025-01

### ✨ Added

- ✨ Photo added to work experience CTA banner
- ✨ Animated emoji component
- ✨ React Tooltip implementation

### 🔄 Changed

- 👷 Refactored layout — grid and text improvements
- 👷 Performance monitor + sitemap refactor
- 👷 Status page, screenshots, and README updates
- 🇬🇧 Moved emojis to `localization` file

### 🐛 Fixed

- 🐛 Dynamic CSS classes — colors safelist fix
- 🐛 Animated emoji — correct image size
- 🐛 Status page heading fix

### 🚀 Performance

- 🚀 Google Tag Manager — Google Analytics tags
- 🚀 Uptime monitoring — Better Uptime integration

### ♿ Accessibility

- ♿ Text and background color contrast improvements

### 📦 Dependencies

- 🛠️ Updated Netlify, ESLint, Prettier

### 📝 Documentation

- 📝 README — performance audit, task management, screenshots, PNG to WebP

## `2.35.17` - 2024-12

### ✨ Added

- 🤖 Comprehensive GitHub Copilot custom instructions for development
- 🐰 Bunfig.toml configuration for enhanced Bun development experience
- 🔗 Unified OG and Twitter meta tags for better SEO

### 🔄 Changed

- 📄 Updated resume PDF link and "Open to work" status
- 📱 Improved mobile menu - now closes when clicking outside
- 📊 Enhanced meta data structure and organization
- 🎯 Updated skill icons and years information

### 🐛 Fixed

- 🖼️ SVG skill icon size inconsistencies
- 📱 Mobile performance optimizations

### 🚀 Performance

- 🖼️ Optimized images and removed unused assets
- 📱 Improved page loading speed on mobile devices
- 🔍 Enhanced SEO with unified social media meta tags

### 📦 Dependencies

- 🃏 Updated Jest and Node.js versions
- 🔧 Updated misc package versions
- 🔄 General dependency updates

### 🗑️ Removed

- 🧹 Removed TODO and FIXME comments from codebase
- 🖼️ Cleaned up unused image assets

## `2.35.14` - 2024-11

### 🔄 Changed

- 🎯 Skill icons and years of experience updates
- 📊 Enhanced meta data structure and organization

### 🐛 Fixed

- ♿ Accessibility improvements (ARIA labels, contrast)
- 🖼️ Image loading optimizations

## `2.35.10` - 2024-10

### ✨ Added

- 📊 Social proof statistics section on resume page
- 🔒 Security scanning setup with CodeQL

### 🔄 Changed

- 📸 Updated project screenshots and portfolio images

### 📦 Dependencies

- ⬆️ Updated TypeScript and `@types/*` packages

## `2.35.0` - 2024-09

### ✨ Added

- 🖼️ Interactive image gallery with lightbox functionality
- 💬 New testimonials section with personal character references
- 📞 Enhanced contact forms and networking features
- 📱 Progressive Web App (PWA) functionality
- 📊 Social proof statistics section on resume page

### 🔄 Changed

- 🎨 Major UI/UX improvements across all pages
- 📱 Enhanced responsive design for mobile devices
- 🧭 Improved navigation with breadcrumbs and page progress indicators
- 📸 Updated project screenshots and portfolio images
- 🎨 Refined color scheme and typography

### 🐛 Fixed

- ♿ Various accessibility improvements (ARIA labels, contrast ratios)
- 📱 Mobile menu and navigation issues
- 🖼️ Image loading and performance optimizations

## `2.32.0` - 2024-08

### 🔄 Changed

- 📁 Improved code organization and component structure
- 🎯 Refined feature architecture

### 📦 Dependencies

- ⬆️ Updated Next.js and React to latest patch versions
- ⬆️ General dependency maintenance

### 🐛 Fixed

- 📱 Mobile responsiveness issues on project pages

## `2.30.0` - 2024-07

### ✨ Added

- 🧪 Comprehensive testing suite with Jest and Playwright
- 🔄 CI/CD pipeline with GitHub Actions
- 🔄 Regular dependency updates and maintenance
- 🔒 Security scanning with CodeQL and Codacy
- 📊 Performance monitoring and optimization

### 🔄 Changed

- 🐰 Migrated from NPM to Bun package manager
- 🔧 Enhanced development workflow with pre-commit hooks
- 📁 Improved code organization and component structure
- 📝 Updated project documentation and README files

### 🔒 Security

- 🛡️ Added security policies and vulnerability scanning
- 🔄 Implemented automated security updates
- 📈 Enhanced code quality monitoring

## `2.20.0` - 2024-06

### ✨ Features Added

- 📈 Work experience timeline with detailed project descriptions
- 🚀 Personal projects showcase with interactive elements
- 🛠️ Skills assessment with years of experience calculation
- 📞 Contact information and social media integration
- 🔍 SEO optimizations (sitemap, robots.txt, metadata)

### 🔄 Improvements

- 📁 Reorganized project structure for better maintainability
- 🧩 Improved component architecture with TypeScript
- 📱 Enhanced mobile responsiveness across all pages
- 🎨 Updated visual design with modern UI components

### 🚀 Performance

- 🖼️ Optimized images (converted PNG to WebP)
- ⚡ Implemented lazy loading for better page speed
- 📊 Added performance monitoring with Vercel Analytics

## `2.10.0` - 2024-05

### ✨ New Additions

- 🧭 Dynamic page navigation with previous/next functionality
- 📊 Scroll progress indicators
- ⌨️ Animated headings with typewriter effect
- 📈 Status page for monitoring website health
- 🔍 Custom 404 error page

### 🔄 UI Improvements

- 📐 Improved layout consistency across all pages
- 🎨 Enhanced header and footer components
- 📄 Updated project detail pages with better information architecture
- 🔤 Refined typography and spacing throughout the site

### 🐛 Fixes & Optimizations

- 📱 Various responsive design issues
- 🧭 Navigation and routing problems
- ⚡ Performance bottlenecks

## `2.8.0` - 2024-04

### 🔄 Changed

- 🎨 UI polish and visual refinements across pages
- 📱 Responsive layout improvements

### 🐛 Fixed

- 🔧 Various bug fixes and stability improvements

## `2.5.0` - 2024-03

### ✨ Added

- 📄 Initial page structure and routing setup
- 🧩 Core shared components (Header, Footer, Layout)

### 🔧 Technical

- 🛠️ TypeScript configuration and path aliases
- 🔧 ESLint and Prettier initial setup

## `2.0.0` - 2024-02

### ✨ Major Additions

- 🎨 Complete website redesign with modern React/Next.js architecture
- 💅 Tailwind CSS for styling with responsive design
- 📝 TypeScript for type safety and better development experience
- 🧩 Flowbite component library integration
- 🦸‍♂️ Hero section with professional introduction
- 🛠️ Skills showcase with interactive badges
- 🔧 Services and expertise sections
- 👨‍💻 About me page with personal story
- 📂 Project portfolio with detailed case studies
- 📞 Contact information and social links
- 📱 Mobile-first responsive design
- 🌓 Dark/light theme support
- 🖼️ Image optimization and lazy loading

### 🔄 Architecture Overhaul

- 🏗️ Completely rebuilt from scratch using Next.js 14
- 🧩 Modern component-based architecture
- ♿ Improved accessibility and SEO
- 🎯 Enhanced user experience with smooth animations
- 🎨 Professional design system implementation

### 🔧 Technical Foundation

- ⚛️ React 18 with Next.js App Router
- 📝 TypeScript for enhanced development experience
- 💅 Tailwind CSS for utility-first styling
- 🧹 ESLint and Prettier for code quality
- 🔄 Git workflow with conventional commits
