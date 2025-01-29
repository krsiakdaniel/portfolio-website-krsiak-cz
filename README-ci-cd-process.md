# 🚀 CI & CD - Process

This readme is about CI/CD processes.

**Table of Contents:**

- [🚀 CI \& CD - Process](#-ci--cd---process)
  - [🛠️ CI: Continuous Integration](#️-ci-continuous-integration)
  - [✅ CD: Continuous Deployment](#-cd-continuous-deployment)

---

## 🛠️ CI: Continuous Integration

1. **Pull Request Initiation**

   - The process starts on a **pull request** made from the `master` branch.

2. **Workflows Execution**

   - GitHub Actions run the following workflows:
     - `jest.yml` - **Unit** tests
     - `playwright.yml` - **E2E** tests
     - `prettier-check-formatting.yml` - **Prettier** checks formatting
     - `auto-author-assign.yml` - **Auto-assign** pull request to author
     - `labeler.yml` - **Labeler** labels pull request

3. **Test Artifacts Creation**

   - After the workflow completes:
     - Go to the Actions tab in the GitHub repository.
     - Find the last workflow run that was triggered.
     - In the “Artifacts” section, you’ll see your uploaded artifact.
     - You can download it directly from there in ZIP format.

## ✅ CD: Continuous Deployment

1. **Deploy Preview Creation**

   - Netlify creates a **Deploy Preview** of the website.

2. **CI & CD Validation**

   - CI and CD should pass with no errors.
   - If there are any issues, a fix must be made, and the process starts again.

3. **Review and Test Changes**

   - Review and test the changes on the **Deploy Preview** link.
   - If there are any issues, a fix must be made, and the process starts again.

4. **Approval and Merge**

   - All changes should be reviewed and approved.
   - Use **Squash and merge** to keep the history clean.
   - Merge the **pull request** to the `master` branch.

5. **Post-Merge Actions**
   - The branch is automatically deleted.
   - The **Production Build** starts on **merge** to the `master` branch.
   - Once finished, the **website automatically deploys** to production.
