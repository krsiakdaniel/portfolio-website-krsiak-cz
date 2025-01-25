# ✅ CD - Continuous Deployment

This project uses CD = Netlify.

**Table of Contents:**

- [✅ CD - Continuous Deployment](#-cd---continuous-deployment)
  - [ℹ️ Info](#ℹ️-info)
    - [Status of CD](#status-of-cd)
  - [Netlify](#netlify)
    - [Branches and Deploy Contexts](#branches-and-deploy-contexts)
    - [Build Plugins](#build-plugins)
    - [Deploys](#deploys)

---

## ℹ️ Info

The website is deployed on: [Netlify](https://www.netlify.com/)

### Status of CD

The badge shows the status of the last deploy.

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status)](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)

## Netlify

The website is built and deployed on Netlify.

### Branches and Deploy Contexts

Deploy contexts are branch-based environments that enable you to configure builds depending on the context. This includes production and preview environments.

- **Production Branch**: `master`
- **Branch Deploys**: Deploy only the production branch
- **Deploy Previews**: Any pull request against your production branch / branch deploy branches

### Build Plugins

The website can use different build plugins.

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) - automatically runs audit on the website after every build.

### Deploys

You can see the list of the last deploys and their details.

- [Netlify Deploys](https://app.netlify.com/sites/portfolio-website-krsiak-cz/deploys)
