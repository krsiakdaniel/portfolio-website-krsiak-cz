# 🛠️ Editor Setup

Recommendations for setting up your development environment in editor.

**Table of Contents:**

- [📝 Editor - Visual Studio Code](#-editor---visual-studio-code)
- [🔌 Essential VS Code Extensions](#-essential-vs-code-extensions)
- [⚙️ Recommended VS Code Settings](#️-recommended-vs-code-settings)
- [🎨 Theme Recommendations](#-theme-recommendations)
- [🔧 Additional Configuration Files](#-additional-configuration-files)
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
