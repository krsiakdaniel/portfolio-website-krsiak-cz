# 🔀 Pull Requests

When creating a pull request, follow these guidelines.

**Table of Contents:**

- [🔀 Pull Requests](#-pull-requests)
  - [✅ PR has Board Issue](#-pr-has-board-issue)
    - [Link Board Issue](#link-board-issue)
    - [Generate Code Summary](#generate-code-summary)
  - [❌ PR has No Board Issue](#-pr-has-no-board-issue)
    - [Generate Summary with GitHub Copilot](#generate-summary-with-github-copilot)
    - [Use Copilot to Generate Summary](#use-copilot-to-generate-summary)
    - [Save Comment with the Summary](#save-comment-with-the-summary)

---

## ✅ PR has Board Issue

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
