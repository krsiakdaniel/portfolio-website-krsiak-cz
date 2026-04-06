# 🤖 GitHub Copilot AI Customization

Guide to the GitHub Copilot customization files configured for this project.
These files live under `.github/` and are automatically used by GitHub Copilot in VS Code.

**Table of Contents:**

- [📁 File Structure](#-file-structure)
- [📋 Instructions](#-instructions)
- [💬 Prompts](#-prompts)
- [🧑‍💼 Agents](#-agents)
- [🔧 Skills](#-skills)
- [🪝 Hooks](#-hooks)
- [🧑‍💻 How to Use While Coding](#-how-to-use-while-coding)

---

## 📁 File Structure

```txt
.github/
  copilot-instructions.md          ← global always-on rules for every session
  instructions/
    components.instructions.md     ← auto-injected when editing components/ or features/
    testing-jest.instructions.md   ← auto-injected when editing __tests__/jest/
    testing-e2e.instructions.md    ← auto-injected when editing __tests__/playwright/
    nextjs-app.instructions.md     ← auto-injected when editing app/
  prompts/
    new-feature.prompt.md          ← /new-feature slash command
    new-jest-test.prompt.md        ← /new-jest-test slash command
    new-e2e-test.prompt.md         ← /new-e2e-test slash command
  agents/
    portfolio-reviewer.agent.md    ← read-only code reviewer persona
  skills/
    component-audit/
      SKILL.md                     ← audit skill definition
      checklist.md                 ← 29-item audit checklist
  hooks/
    auto-format.json               ← PostToolUse: runs Prettier after tool use
    block-git-commands.json        ← PreToolUse: blocks git commit and git push
    scripts/
      auto-format.sh
      block-git-commands.sh
```

---

## 📋 Instructions

Instruction files are **automatically injected** by Copilot based on which file you are editing. No manual action needed.

| File                           | Applies to                 | What it enforces                                         |
| ------------------------------ | -------------------------- | -------------------------------------------------------- |
| `copilot-instructions.md`      | Always — every session     | Stack, conventions, commit rules                         |
| `components.instructions.md`   | `components/`, `features/` | Server/Client boundary, companion files, React 19, Image |
| `testing-jest.instructions.md` | `__tests__/jest/`          | AAA pattern, RTL, no network requests                    |
| `testing-e2e.instructions.md`  | `__tests__/playwright/`    | Page object model, DATA_TEST_IDS, PAGES_URL              |
| `nextjs-app.instructions.md`   | `app/`                     | Async params, metadata, caching                          |

---

## 💬 Prompts

Prompts are **reusable slash commands** available in Copilot Chat. Type `/` to see available prompts.

| Command          | What it does                                                             |
| ---------------- | ------------------------------------------------------------------------ |
| `/new-feature`   | Scaffolds a new feature under `features/` with companion files           |
| `/new-jest-test` | Generates a Jest unit test following AAA pattern and project conventions |
| `/new-e2e-test`  | Generates a Playwright spec with page object model structure             |

---

## 🧑‍💼 Agents

Custom agents are **named personas** with specific tool restrictions, selectable from the agent picker dropdown in Copilot Chat.

| Agent                | Tools                              | Purpose                                                                                             |
| -------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `portfolio-reviewer` | `search/codebase`, `read/problems` | Read-only review — checks TypeScript, React 19, companion files, a11y, Tailwind. Never edits files. |

**How to use:** Click the agent picker at the bottom of the Copilot Chat panel → select `portfolio-reviewer` → ask it to review a file.

```text
"review features/home/components/hero/Hero.tsx"
```

---

## 🔧 Skills

Skills are **on-demand workflows** bundled with supporting files. The agent loads them automatically when the request matches the skill description.

### `component-audit`

Audits a component or page file against all project conventions using the skill checklist.

**Checklist categories:**

- TypeScript strictness
- React 19 patterns
- Server / Client boundary
- Companion files (`*.types.ts`, `*.constants.ts`)
- Images & performance
- Tailwind styling
- Accessibility
- Next.js App Router rules (page files only)

**How to trigger:**

```text
"audit this component"
"audit features/home/components/hero/Hero.tsx before I commit"
"check this file against project rules"
```

The skill reads [checklist.md](../../.github/skills/component-audit/checklist.md), ticks through every item against the actual code, and outputs a ✅/❌/⚠️ report with line references. It does not make changes — after the report it asks if you want issues fixed.

---

## 🪝 Hooks

Hooks run **automatically** — no action needed.

| Hook                 | Event                    | What it does                                               |
| -------------------- | ------------------------ | ---------------------------------------------------------- |
| `auto-format`        | After matching tool use  | Runs `bun prettier --write .` on the whole project         |
| `block-git-commands` | Before any shell command | Denies `git commit` and `git push` — user commits manually |

---

## 🧑‍💻 How to Use While Coding

Typical workflow in a coding session:

```text
1. Open a component or feature file
   → Instructions auto-load based on file type

2. Ask Copilot to implement a feature
   → Agent edits files → auto-format hook runs Prettier automatically

3. "audit this component"
   → Component audit skill runs the checklist → reports issues

4. "fix the issues found"
   → Agent applies fixes → Prettier runs again automatically

5. /new-jest-test
   → Generates a unit test for the component

6. bun pre-commit-check
   → Run manually before committing to verify everything passes
```

---

## 🔗 Related Docs

- [GitHub Copilot Customization — VS Code Docs](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [Custom Chat Modes (Agents)](https://code.visualstudio.com/docs/copilot/chat/chat-modes#_custom-chat-modes)
- [Instruction Files](https://code.visualstudio.com/docs/copilot/copilot-customization#_instruction-files)
- [Reusable Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files-experimental)
- [Agent Skills](https://code.visualstudio.com/docs/copilot/copilot-customization#_agent-skills)
