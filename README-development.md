# Development

Development environment for the project.

**Table of Contents:**

- [Development](#development)
  - [💻 Commands](#-commands)
    - [Install dependencies](#install-dependencies)
    - [Update outdated dependencies](#update-outdated-dependencies)
      - [Manually](#manually)
      - [Using `npm-check-updates` tool](#using-npm-check-updates-tool)
  - [💅 Prettier](#-prettier)

---

## 💻 Commands

Misc commands for terminal.

### Install dependencies

Runs npm to install packages needed.

```bash
npm install
```

Runs the app in the development mode.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view project in browser.

### Update outdated dependencies

There are 2 ways to do this.

#### Manually

Find what packages are outdated and upgrade to latest version if possible.

```bash
npm outdated
```

#### Using `npm-check-updates` tool

To update the outdated packages in package.json, you can use the [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) (ncu) tool.

Install `npm-check-updates` globally.

```bash
npm install -g npm-check-updates
```

Check for outdated packages.

```bash
ncu
```

![ncu](/readme-images/npm-check-updates-checking.jpg)

Run cmd to update the package.json with the latest versions.

```bash
ncu -u
```

![ncu](/readme-images/npm-check-updates-upgrading.jpg)

Install the updated packages.

```bash
npm install
```

## 💅 Prettier

This project uses Prettier for code formatting.

Check if the code is formatted correctly.

```bash
npm run prettier:check
```

Format the code via Prettier.

```bash
npm run prettier:fix
```
