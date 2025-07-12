# 🛠️ IDE/Editor Setup Recommendations

This document provides recommendations for setting up your development environment.

## 📝 Recommended IDEs/Editors

### Primary Recommendation: Visual Studio Code

- **Download**: [VS Code](https://code.visualstudio.com/)
- **Why**: Excellent TypeScript/JavaScript support, great extension ecosystem, built-in Git integration
- **Free**: Yes

### Alternative Options

- **WebStorm**: [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
  - Professional IDE with advanced refactoring tools
  - Paid (free for students)
- **Sublime Text**: [Sublime Text](https://www.sublimetext.com/)
  - Lightweight and fast
  - Good for quick edits
- **Neovim/Vim**: For command-line enthusiasts
  - Highly customizable
  - Steep learning curve

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
- Code Spell Checker
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

### Dark Themes

- **Dracula Official**
- **Material Theme**

### Light Themes

- **Material Theme Lighter**

## 🔧 Additional Configuration Files

### Editor Configuration

See file: [.editorconfig](/.editorconfig

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

- **Exclude node_modules**: Add to `.vscode/settings.json`:

  ```json
  {
    "files.exclude": {
      "**/node_modules": true,
      "**/.git": true,
      "**/.DS_Store": true
    }
  }
  ```

- **Use workspace settings**: Project-specific settings over global ones

---

**Note**: This setup is optimized for modern web development. Adjust extensions and settings based on your specific tech stack and preferences.
