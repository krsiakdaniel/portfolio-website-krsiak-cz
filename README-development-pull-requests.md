# 🔀 Pull Requests

When creating a pull request, follow these guidelines.

**Table of Contents:**

- [🔀 Pull Requests](#-pull-requests)
  - [✏️ Naming for Branches and PRs](#️-naming-for-branches-and-prs)
    - [Commit Message](#commit-message)
  - [📝 PR has Board Issue](#-pr-has-board-issue)
    - [Link Board Issue](#link-board-issue)
    - [Generate Code Summary](#generate-code-summary)
  - [❌ PR has No Board Issue](#-pr-has-no-board-issue)
    - [Generate Summary with GitHub Copilot](#generate-summary-with-github-copilot)
    - [Use Copilot to Generate Summary](#use-copilot-to-generate-summary)
    - [Save Comment with the Summary](#save-comment-with-the-summary)

---

## ✏️ Naming for Branches and PRs

Guidelines for naming branches and pull requests.

**Create a new branch from:**

- `master`

**Following this naming:**

- `aria/branch-name`
- `build/branch-name`
- `chore/branch-name`
- `cicd/branch-name`
- `docs/branch-name`
- `feature/branch-name`
- `fix/branch-name`
- `hotfix/branch-name`
- `localization/branch-name`
- `performance/branch-name`
- `refactor/branch-name`
- `revert/branch-name`
- `style/branch-name`
- `test/branch-name`

### Commit Message

**Message should use**: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

- Optional `context` can go inside the parentheses `()`.
- Commit message and PR name should have similar naming.

**Following this naming:**

- aria(buttons): ♿ Improve accessibility by adding ARIA attributes
- build(netlify): 🏗️ Update build scripts and configurations
- chore(deps): 🛠️ Update dependencies
- cicd(workflows): ⚙️ Update CI/CD pipelines and workflows
- docs(readme): 📝 Update documentation
- feature(banner): ✨ Add new features
- fix(colors): 🐛 Fix bugs
- hotfix(font): 🔥 Apply urgent fixes
- localization(texts): 🇬🇧 Add or update translations
- performance(loading): 🚀 Improve performance
- refactor(fragments): 👷 Refactor code without changing functionality
- revert(button): ⏪ Revert changes
- style(prettier): 🎨 Code formatting
- test(e2e): ✅ Add or update tests

## 📝 PR has Board Issue

What to do when the PR has a related board issue.

### Link Board Issue

**Mandatory**: Always link a related board issue in the pull request description.

![Linked Board Issue](/readme-images/development/pull-request/linked-board-issue.png)

### Generate Code Summary

**Optional**: This is optional but can be useful for the reviewer.

- Summary of code changes.
- It can be generated using GitHub Copilot Actions inside the comment.

![Linked Board Issue - Copilot Actions](/readme-images/development/pull-request/code-copilot-actions.png)

Result in comment with linked issue and code summary.

![Linked Board Issue - Code Summary](/readme-images/development/pull-request/code-summary.png)

## ❌ PR has No Board Issue

What to do when the PR has no related board issue.

### Generate Summary with GitHub Copilot

This can happen for small refactoring changes:

- Add in the PR description - Issue: `n/a`.
- Use the GitHub Copilot Actions inside the comment.
- Generate a summary of the code changes.

### Use Copilot to Generate Summary

Click on the icon Copilot Actions to generate a summary.

![PR - Summary 1](/readme-images/development/pull-request/changes-copilot-summary-1.png)

Wait for the summary to be generated based on the code changes.

![PR - Summary 2](/readme-images/development/pull-request/changes-copilot-summary-2.png)

### Save Comment with the Summary

Review the summary if it makes sense and save the comment.

![PR - Summary 3](/readme-images/development/pull-request/changes-copilot-summary-3.png)
