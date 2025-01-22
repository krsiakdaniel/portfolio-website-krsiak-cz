# 🚀 CI & CD - Process

**Continuous Integration** and **Continuous Deployment**.

This project uses:

- CI = GitHub Actions
- CD = Netlify

**Table of Contents:**

- [🚀 CI \& CD - Process](#-ci--cd---process)
  - [🚀 CI \& CD - Info](#-ci--cd---info)
  - [🛠️ CI - Continuous Integration](#️-ci---continuous-integration)
  - [✅ CD - Continuous Deployment](#-cd---continuous-deployment)

---

## 🚀 CI & CD - Info

The entire process and information is visible on GitHub when a pull request is made.

1. The process starts on a **pull request** made from the `master` branch.
2. 🛠️ **CI** - GitHub Actions run workflows:
   - `jest.yml` - **Unit** tests
   - `playwright.yml` - **E2E** tests
   - `prettier-check-formatting.yml` - **Prettier** checks formatting
   - `auto-author-assign.yml` - **Auto-assign** pull request to author
   - `labeler.yml` - **Labeler** labels pull request
3. **Test artifacts** are created:
   - After the workflow completes, go to the Actions tab in the GitHub repository.
   - Find the last workflow run that was triggered.
   - In the “Artifacts” section, you’ll see your uploaded artifact.
   - You can download it directly from there in ZIP format.
4. ✅ **CD** - Netlify creates a **Deploy Preview** of the website.
5. CI and CD should pass with no errors 👍
   - If there are any issues, a fix must be made.
   - The process starts again.
6. **Review and test the changes** on the **Deploy Preview** link 👍
   - If there are any issues, a fix must be made.
   - The process starts again.
7. All changes should be reviewed and approved 👍
8. Use **Squash and merge** to keep the history clean.
9. Merge the **pull request** to the `master` branch.
10. The branch is automatically deleted.
11. The **Production Build** starts on **merge** to the `master` branch.
12. Once finished, the **website automatically deploys** to production.

## 🛠️ CI - Continuous Integration

- [README-continuous-integration.md](README-continuous-integration.md)

## ✅ CD - Continuous Deployment

- [README-continuous-deployment.md](README-continuous-deployment.md)
