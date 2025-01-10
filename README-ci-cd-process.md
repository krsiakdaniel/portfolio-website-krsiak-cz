# 🚀 CI & CD - Process

TL;DR - **Continuous Integration And Continuous Deployment**

This project uses:

- CI = GitHub Actions
- CD = Netlify

**Table of Contents:**

- [🚀 CI \& CD - Process](#-ci--cd---process)
  - [🚀 CI \& CD - Process - ℹ️ Info](#-ci--cd---process---ℹ️-info)
  - [🛠️ CI - Continuous Integration](#️-ci---continuous-integration)
  - [✅ CD - Continuous Deployment](#-cd---continuous-deployment)

---

## 🚀 CI & CD - Process - ℹ️ Info

The entire process and information is visible on GitHub when pull request is made.

1. The process starts on **pull request** made from `master` branch.
2. 🛠️ **CI** - GitHub Actions run workflows:
   1. `jest.yml` - **Unit** tests
   2. `playwright.yml` - **E2E** tests
   3. `prettier-check-formatting.yml` - **Prettier** checks formatting
   4. `auto-author-assign.yml` - **Auto-assign** pull request to author
   5. `labeler.yml` - **Labeler** labels pull request
3. **Test artifacts** are created:
   1. After the workflow completes, go to the Actions tab in GitHub repository.
   2. Find the last workflow run that was triggered.
   3. In the “Artifacts” section, you’ll see your uploaded artifact.
   4. You can download it directly from there in ZIP.
4. ✅ **CD** - Netlify creates a **Deploy Preview** of the website.
5. CI and CD should pass with no errors 👍
   1. If there are any issues, fix must be made.
   2. Process starts again.
6. **Review and test the changes** on the **Deploy Preview** link 👍
   1. If there are any issues, fix must be made.
   2. Process starts again.
7. All should be reviewed and approved 👍
8. Use **Squash and merge** to keep the history clean.
9. Merge **pull request** to `master` branch.
10. Branch is automatically deleted.
11. The **Production Build** starts on **merge** to `master` branch.
12. Once finished the **website automatically deploys** to production.

## 🛠️ CI - Continuous Integration

- [README-continuous-integration.md](README-continuous-integration.md)

## ✅ CD - Continuous Deployment

- [README-continuous-deployment.md](README-continuous-deployment.md)
