# ✅ CD - Continuous Deployment

This project uses CD = Netlify.

**Table of Contents:**

- [✅ CD - Continuous Deployment](#-cd---continuous-deployment)
  - [🚀 CI and CD - Process](#-ci-and-cd---process)
  - [✅ CD - Continuous Deployment - ℹ️ Info](#-cd---continuous-deployment---ℹ️-info)
    - [Status of CD](#status-of-cd)
    - [Netlify](#netlify)
      - [Branches and deploy contexts](#branches-and-deploy-contexts)
      - [Build plugins](#build-plugins)
      - [Deploys](#deploys)

---

## 🚀 CI and CD - Process

- [README-ci-cd-process.md](README-ci-cd-process.md)

## ✅ CD - Continuous Deployment - ℹ️ Info

The website is deployed on Netlify.

### Status of CD

The badge shows the status of the last deploy.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status)](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)

### Netlify

The website is build and deployed on Netlify.

#### Branches and deploy contexts

Deploy contexts are branch-based environments that enable you to configure builds depending on the context. This includes production and preview environments.

- Production branch: **master**
- Branch deploys: **Deploy only the production branch**
- Deploy Previews: **Any pull request against your production branch / branch deploy branches**

#### Build plugins

The website can uses different build plugins.

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) - automatically runs audit on website after every build.

#### Deploys

You can see partially the list of the last deploys and its details.

- [netlify.com/sites/portfolio-website-krsiak-cz/deploys](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)
