# 🛠️ Editor Setup

Recommendations for setting up your development environment in editor.

**Table of Contents:**

- [📝 Editor - Visual Studio Code](#-editor---visual-studio-code)
- [🔌 Essential VS Code Extensions](#-essential-vs-code-extensions)
- [⚙️ Recommended VS Code Settings](#️-recommended-vs-code-settings)
- [🎨 Theme Recommendations](#-theme-recommendations)
- [🔧 Additional Configuration Files](#-additional-configuration-files)
- [🤖 MCP Servers (AI Agent Tools)](#-mcp-servers-ai-agent-tools)
- [🐛 Debugging Setup](#-debugging-setup)
- [📱 Mobile Development](#-mobile-development)
- [🚀 Performance Tips](#-performance-tips)

## 📝 Editor - Visual Studio Code

- **Download**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Why**: TypeScript / JavaScript support, great extension ecosystem, built-in Git integration
- **Free**: Yes

## 🔌 Essential VS Code Extensions

### Language Support

```text
- TypeScript Importer
- JavaScript (ES6) code snippets
- Auto Rename Tag
- Bracket Pair Colorizer 2
```

### Framework & Build Tools

```text
- Tailwind CSS IntelliSense
```

### Code Quality & Formatting

```text
- ESLint
- Prettier - Code formatter
- Error Lens
```

### Git & Version Control

```text
- GitLens — Git supercharged
- Git History
- Git Graph
```

### Development Tools

```text
- Auto Close Tag
- Path Intellisense
- npm Intellisense
```

### Productivity

```text
- Todo Tree
- Project Manager
- Color Highlight
```

## ⚙️ Recommended VS Code Settings

Create or update your `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "files.autoSave": "onDelay",
  "files.autoSaveDelay": 1000,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "javascript.preferences.importModuleSpecifier": "relative"
}
```

## 🎨 Theme Recommendations

- **Dracula Official**
- **Material Theme**

## 🔧 Additional Configuration Files

### Editor Configuration

See file: [.editorconfig](/.editorconfig)

## 🤖 MCP Servers (AI Agent Tools)

MCP (Model Context Protocol) servers extend GitHub Copilot with tools to read docs, browse files, control a browser, and interact with external services.

### Config File Location

```text
~/Library/Application Support/Code/User/mcp.json
```

This is a **global** user-level config — it applies across all VS Code workspaces. VS Code starts these servers automatically when a chat/agent session begins.

### Configured Servers

| Server             | Type  | Purpose                                                           |
| ------------------ | ----- | ----------------------------------------------------------------- |
| **Context7**       | stdio | Fetches up-to-date docs for any library (Next.js, Tailwind, etc.) |
| **Playwright**     | stdio | Browser automation, screenshots, interactive E2E debugging        |
| **Microsoft Docs** | HTTP  | Searches and fetches official Microsoft Learn documentation       |
| **GitHub**         | stdio | Search repos, read issues/PRs, browse files across GitHub         |
| **Filesystem**     | stdio | Read/write files under `$HOME/github`                             |
| **Vercel**         | HTTP  | Manage deployments, check build logs, browse projects             |

> **Note:** The Filesystem server path is an example and should be customized for each developer's local machine and workspace layout.

### Authentication

- **GitHub** — requires a [Personal Access Token](https://github.com/settings/tokens) with `repo` + `read:org` scopes. VS Code will prompt for it securely on first use.
- **Vercel** — uses OAuth. Opens a browser to authorize on first use — no token to manage.
- **Context7, Playwright, Filesystem, Microsoft Docs** — no authentication required.

### Checking Server Status

Open **Command Palette → MCP: List Servers** to see which servers are running, stopped, or errored. Available tools can be browsed via the tools icon in the chat input.

## 🐛 Debugging Setup

VS Code debugging configuration for Node.js/web development:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch via NPM",
      "request": "launch",
      "runtimeArgs": ["run-script", "dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node"
    }
  ]
}
```

## 📱 Mobile Development

If working with mobile-responsive features:

- **Mobile simulator**: Chrome DevTools device emulation

## 🚀 Performance Tips

- **Use workspace settings**: Project-specific settings over global ones
- **Exclude `node_modules`**: Add to `.vscode/settings.json`

```json
{
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/.DS_Store": true
  }
}
```
