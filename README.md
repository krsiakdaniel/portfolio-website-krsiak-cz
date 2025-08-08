# Portfolio Website: [krsiak.cz](https://krsiak.cz)

**Table of Contents:**

- [⚛️ Project Description](#️-project-description)
- [✨ Key Features](#-key-features)
- [🚀 Getting Started](#-getting-started)
- [🔗 Project Website](#-project-website)
- [🚦 Project Status](#-project-status)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Pages](#-pages)
- [📁 Repository Structure](#-repository-structure)
- [💻 Development Workflow](#-development-workflow)
- [🤝 Contributing](#-contributing)
- [📚 Documentation](#-documentation)
- [📄 License](#-license)
- [📫 Contact](#-contact)
- [🖼️ Screenshots](#️-screenshots)

## ⚛️ Project Description

👨🏻‍💻 A modern, high-performance portfolio website showcasing my work and skills as a **React Developer** using **TypeScript** & **Next.js**. This project demonstrates advanced web development practices, comprehensive testing strategies, and modern deployment workflows.

The website serves as both a professional portfolio and a demonstration of cutting-edge web technologies, featuring a Progressive Web App (PWA) architecture, comprehensive testing suite, and automated CI/CD pipeline.

## ✨ Key Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Bun runtime
- 📱 **Progressive Web App**: Installable with offline capabilities
- 🎨 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Performance Optimized**: Image optimization, lazy loading, and Core Web Vitals focus
- 🧪 **Comprehensive Testing**: Unit tests (Jest) and E2E tests (Playwright)
- 🔄 **Automated CI/CD**: GitHub Actions with automated deployment to Netlify
- 🔒 **Security First**: CodeQL analysis, Dependabot, and security best practices
- 📊 **Analytics & Monitoring**: Google Analytics, Smartlook, and uptime monitoring
- 🎯 **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- 🌐 **SEO Optimized**: Proper meta tags, sitemap, and structured data

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v23.8.0 (check `.nvmrc` file)
- **Bun**: Latest stable version

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/krsiakdaniel/portfolio-website-krsiak-cz.git
   cd portfolio-website-krsiak-cz
   ```

2. **Install Bun** (if not already installed)

   ```bash
   curl -fsSL https://bun.sh/install | bash
   source ~/.bashrc  # or restart your terminal
   ```

3. **Install dependencies**

   ```bash
   bun install
   ```

4. **Start development server**

   ```bash
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

```bash
# Development
bun dev                    # Start development server
bun build                  # Create production build
bun start                  # Start production server

# Code Quality
bun lint                   # Run ESLint
bun lint:fix              # Fix ESLint issues
bun prettier:check        # Check code formatting
bun prettier:write        # Format code with Prettier
bun type-check            # TypeScript type checking

# Testing
bun test:jest             # Run unit tests
bun test:jest:coverage    # Run unit tests with coverage
bun test:e2e              # Run Playwright E2E tests
bun test:e2e:ui           # Run E2E tests with UI

# Validation
bun validate              # Type check + lint + unit tests
bun integrate             # Full validation + E2E tests
```

## 🔗 Project Website

🌍 **Live Website**: [https://krsiak.cz](https://krsiak.cz)

![Portfolio Demo](/readme-images/main-readme/smiling-face-with-sunglasses-animated-80x80.webp)

## 🚦 Project Status

### CI/CD & Testing

[![Jest Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml)
[![Playwright Tests](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml)
[![Prettier Check Formatting](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml)

### Automation & Workflow

[![Pull Request Labeler](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml)
[![Auto Author Assign](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml)

### Security & Quality

[![CodeQL](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5)](https://app.codacy.com/gh/krsiakdaniel/portfolio-website-krsiak-cz/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-green)](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/security/dependabot)

### Deployment & Monitoring

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status)](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)
[![BetterUptime](https://betteruptime.com/status-badges/v1/monitor/8z9z.svg)](https://betteruptime.com/?utm_source=status_badge)

## 🛠️ Tech Stack

![Tech Stack](/readme-images/main-readme/technologies-and-tools.webp)

### 🏗️ Core Technologies

- 📝 **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript with enhanced developer experience
- ⚛️ **[React](https://react.dev/)** - Modern component-based UI library with hooks
- ⏭️ **[Next.js](https://nextjs.org/)** - Full-stack React framework with App Router
- 🚀 **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

### 🎨 Styling & UI

- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development

### 🧪 Testing & Quality Assurance

- 🃏 **[Jest](https://jestjs.io/)** - Comprehensive unit and integration testing
- 🎭 **[Playwright](https://playwright.dev/)** - Reliable end-to-end testing across browsers
- 🎨 **[Prettier](https://prettier.io/)** - Consistent code formatting
- 🔧 **[ESLint](https://eslint.org/)** - Code quality and best practices enforcement
- 🐕 **[Husky](https://github.com/typicode/husky)** - Git hooks for quality gates

### 📱 Performance & PWA

- 🖼️ **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing
- 📱 **[next-pwa](https://github.com/DuCanhGH/next-pwa)** - Progressive Web App capabilities

### 📊 Analytics & Monitoring

- 📊 **[Google Analytics](https://analytics.google.com/)** - Comprehensive website analytics
- 👁️ **[Smartlook](https://www.smartlook.com/)** - User behavior analytics and session recordings
- 📈 **[Better Uptime](https://betteruptime.com/)** - Website uptime monitoring and status pages

### 🚀 DevOps & Deployment

- 🔄 **[GitHub Actions](https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions)** - Automated CI/CD pipeline
- 🌍 **[Netlify](https://www.netlify.com/)** - Fast, secure web hosting with edge functions
- 🛡️ **[Dependabot](https://github.com/dependabot)** - Automated dependency updates
- 🔍 **[CodeQL](https://codeql.github.com/)** - Advanced code security analysis
- 📊 **[Codacy](https://www.codacy.com/)** - Automated code quality and security reviews

## 📋 Pages

The website has these main pages and project detail pages.

### Main

- 🏠 [Home](https://krsiak.cz/)
- 👋 [Who I Am](https://krsiak.cz/who-i-am)
- 👨🏻‍💻 [Work Experience](https://krsiak.cz/work-experience)
- 📝 [Resume](https://krsiak.cz/resume)
- 🚀 [Personal Projects](https://krsiak.cz/personal-projects)
- 💬 [Testimonials](https://krsiak.cz/testimonials)

### Projects

🚀 **Personal Projects**

- 👨🏻‍💻 [Portfolio Website - krsiak.cz](https://krsiak.cz/personal-projects/krsiak)
- 💰 [CryptoMania](https://krsiak.cz/personal-projects/cryptomania)

👨🏻‍💻 **Work Experience**

- 💬 [Smartsupp - Dashboard](https://krsiak.cz/work-experience/smartsupp-dashboard)
- 🏦 [Komerční banka](https://krsiak.cz/work-experience/komercni-banka)
- ☔ [Kooperativa](https://krsiak.cz/work-experience/kooperativa)
- 👨🏻‍💻 [Smartsupp - Company Website](https://krsiak.cz/work-experience/smartsupp-web)
- 📚 [Smartsupp - Help Website](https://krsiak.cz/work-experience/smartsupp-help)
- 🛒 [Groupon - QA Automation](https://krsiak.cz/work-experience/groupon)
- 🌎 [Moravia - QA Automation](https://krsiak.cz/work-experience/moravia)

## 📁 Repository Structure

```
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable React components
│   ├── analytics/          # Analytics and tracking components
│   ├── icons/              # SVG icon components
│   ├── layout/             # Layout components (header, footer, navigation)
│   ├── pages/              # Page-specific components
│   └── shared/             # Shared utility components
├── lib/                    # Core utilities and data management
│   ├── data/               # Static data and content
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Helper functions and utilities
├── __tests__/              # Test files
│   ├── jest/               # Unit and integration tests
│   └── playwright/         # End-to-end test suites
├── docs/                   # Comprehensive project documentation
├── public/                 # Static assets and PWA files
└── readme-images/          # Documentation images and screenshots
```

## 💻 Development Workflow

This project follows strict development standards to ensure code quality and consistency:

### 🔄 Pre-commit Requirements

- **Formatting**: Code is automatically formatted with Prettier
- **Linting**: ESLint checks for code quality and best practices
- **Type Checking**: TypeScript compilation must pass
- **Testing**: Unit tests must pass before commit

### 📋 Code Standards

- **TypeScript**: Strict mode enabled for enhanced type safety
- **React**: Functional components with hooks
- **Styling**: Tailwind CSS utility-first approach
- **Testing**: Comprehensive unit and E2E test coverage
- **Documentation**: Inline comments and comprehensive docs

### 🚀 CI/CD Pipeline

1. **Code Push** → Automated checks trigger
2. **Quality Gates** → Linting, formatting, type checking
3. **Testing** → Unit tests (Jest) and E2E tests (Playwright)
4. **Security** → CodeQL analysis and dependency scanning
5. **Deployment** → Automatic deployment to Netlify on success

## 🤝 Contributing

We welcome contributions! This project has comprehensive development guidelines and documentation.

### Quick Start for Contributors

1. Review the [Development Setup](docs/development/README-development.md)
2. Check [Contributing Guidelines](docs/contributions/README-contributions.md)
3. Follow [Pull Request Process](docs/development/README-development-pull-requests.md)
4. Ensure [Pre-commit Setup](docs/development/README-pre-commit-setup.md) is working

### Development Guidelines

- Follow the [GitHub Copilot Instructions](.github/copilot-instructions.md)
- Use conventional commit messages
- Maintain test coverage for new features
- Update documentation for significant changes

### Branch Naming Convention

```
prefix/descriptive-name

Examples:
- feature/responsive-navigation
- fix/button-hover-state
- docs/update-readme
- test/user-authentication
```

## 📚 Documentation

This project includes comprehensive documentation covering all aspects of development, deployment, and maintenance.

### 🏗️ Project Setup & Development

- 💻 **[Development](docs/development/README-development.md)** - Complete development environment setup
- 📦 **[Dependencies](docs/development/README-dependencies.md)** - Package management and updates
- 🐕 **[Pre-Commit Setup](docs/development/README-pre-commit-setup.md)** - Quality gates and git hooks
- 🔀 **[Pull Requests](docs/development/README-development-pull-requests.md)** - PR workflow and guidelines
- 🐛 **[Bug Fixing](docs/development/README-bug-fixing.md)** - Debugging and troubleshooting

### 🎨 Design & Architecture

- 🏛️ **[Project Architecture](docs/project-architecture/README-project-architecture.md)** - System design and structure
- 🎨 **[Design System](docs/design-system/README-design-system.md)** - UI components and styling guidelines
- 🖥️ **[Editor Setup](docs/editor-setup/README-editor-setup.md)** - IDE configuration and tools

### 🧪 Testing & Quality

- 🧪 **[Testing Overview](docs/testing/README-testing.md)** - Testing strategy and practices
- 🃏 **[Jest Testing](docs/testing/README-testing-jest.md)** - Unit and integration testing
- 🎭 **[Playwright Testing](docs/testing/README-testing-playwright.md)** - End-to-end testing

### 🚀 Deployment & Operations

- 🚀 **[CI and CD Process](docs/deployment/README-ci-cd-process.md)** - Complete pipeline overview
- 🛠️ **[Continuous Integration](docs/deployment/README-continuous-integration.md)** - Build and test automation
- ✅ **[Continuous Deployment](docs/deployment/README-continuous-deployment.md)** - Deployment strategies

### 📱 Performance & Features

- 📱 **[Progressive Web App](docs/progressive-web-app/README-progressive-web-app.md)** - PWA implementation
- 🏎️ **[Website Performance](docs/website-performance/README-website-performance.md)** - Optimization techniques
- 🔒 **[Security](docs/security/README-security.md)** - Security practices and measures

### 👥 Team & Project Management

- 👨🏻‍💼 **[Task Management](docs/team-leader-task-management/README-team-leader-task-management.md)** - Project organization
- 🤝 **[Contributions](docs/contributions/README-contributions.md)** - How to contribute
- 🙇‍♂️ **[Attribution](docs/attribution/README-attribution.md)** - Credits and acknowledgments

### 📋 Additional Information

- 📝 **[Changelog](CHANGELOG.md)** - Version history and release notes
- 🔒 **[Security Policy](SECURITY.md)** - Vulnerability reporting
- ⚖️ **[License](LICENSE)** - MIT License details

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ **Commercial use** - You can use this project commercially
- ✅ **Modification** - You can modify the source code
- ✅ **Distribution** - You can distribute the original or modified code
- ✅ **Private use** - You can use this project privately
- ❗ **License and copyright notice** - Include the original license and copyright notice

## 📫 Contact

**Daniel Kršiak** - React Developer

- 🌐 **Portfolio**: [https://krsiak.cz](https://krsiak.cz)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/krsiakdaniel/](https://www.linkedin.com/in/krsiakdaniel/)
- 📄 **Resume**: [https://krsiak.cz/resume](https://krsiak.cz/resume)

Feel free to reach out for collaboration opportunities, questions about the project, or just to connect!

## 🖼️ Screenshots

### 🏠 Homepage - Portfolio Overview

![krsiak.cz | Portfolio Website](/readme-images/main-readme/krsiak/krsiak-1-light.webp)

### 👨🏻‍💻 Work Experience

![krsiak.cz | Work Experience](/readme-images/main-readme/krsiak/krsiak-2-light.webp)

### 📄 Resume

![krsiak.cz | Resume](/readme-images/main-readme/krsiak/krsiak-3-light.webp)

### 🚀 Personal Projects

![krsiak.cz | Personal Projects](/readme-images/main-readme/krsiak/krsiak-4-light.webp)

---

<div align="center">

**[Portfolio Website](https://krsiak.cz)** • **Version 2.48.23** • **Built with ❤️ using Next.js & TypeScript**

</div>
