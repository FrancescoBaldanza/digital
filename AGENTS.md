# Agent Instructions & Guidelines (AGENTS.md)

Welcome to **digitaljs**. This repository strictly follows the **Spec-Driven Development (SDD)** methodology (DeepLearning.AI / JetBrains standard).

> **Core Principle:** *The agent is the muscle, the specification is the brain.*
> Never generate, refactor, or delete production code without referencing or creating the corresponding specification under `specs/`.

---

## 1. Specification Architecture (`specs/`)

Every non-trivial modification is governed by markdown specifications versioned in `specs/`:
- `specs/mission.md` — Project mission, target audience, domain boundaries, and tone.
- `specs/tech-stack.md` — Architectural rules, dependencies policy, and testing strategy.
- `specs/roadmap.md` — Sequenced, small, verifiable phases of work with checkboxes (`- [ ]`).
- `specs/YYYY-MM-DD-<feature>/` — Active feature cycle containing:
  - `requirements.md`: Scope (included/excluded), key architectural decisions, and context.
  - `plan.md`: Sequential, numbered task groups with progress checkboxes.
  - `validation.md`: Exact automated test/type commands and manual acceptance criteria.

---

## 2. Agent Skills Catalog

Your operating procedures are defined as reusable skills in `.junie/skills/` (and `.skills`).
When the user invokes a skill or issues a matching request, **you must read the corresponding `SKILL.md` file and follow its instructions to the letter**:

| Command / Trigger | Target Skill | Responsibility |
| :--- | :--- | :--- |
| `/build-constitution`<br>*(or "build constitution", "setup specs")* | [`.junie/skills/build-constitution/SKILL.md`](.junie/skills/build-constitution/SKILL.md) | Interviews the user in chat across 3 themes (Mission, Tech Stack, Roadmap) and generates foundational specs. |
| `/plan-phase [N]`<br>*(or "plan phase", "feature spec")* | [`.junie/skills/plan-phase/SKILL.md`](.junie/skills/plan-phase/SKILL.md) | Finds target phase in roadmap, creates git branch `phase-N-<slug>`, interviews user, and drafts dated spec directory. |
| `/implement-phase`<br>*(or "implement phase", "execute plan")* | [`.junie/skills/implement-phase/SKILL.md`](.junie/skills/implement-phase/SKILL.md) | Reads `plan.md`, implements task groups sequentially, respects `tech-stack.md`, and checks off `[x]` items. |
| `/verify-phase`<br>*(or "verify phase", "run validation")* | [`.junie/skills/verify-phase/SKILL.md`](.junie/skills/verify-phase/SKILL.md) | Runs automated tests, linter, and audits the git diff from 3 perspectives: Architecture, Security, UX. |
| `/complete-phase`<br>*(or "complete phase", "merge phase")* | [`.junie/skills/complete-phase/SKILL.md`](.junie/skills/complete-phase/SKILL.md) | Updates `specs/roadmap.md` to `[x]`, updates `CHANGELOG.md` via git history, commits, merges into main, and prompts before deleting branch. |

---

## 3. Project Tooling & Constraints

- **Language & Runtime:** JavaScript (ES modules in `src/`, CommonJS build in `lib/`), Node.js.
- **Testing Framework:** Jest (`npm test`).
- **Build Commands:**
  - `npm run dev`: Development build via Webpack.
  - `npm run prod`: Production build.
  - `npm run build-lib`: Transpilation of `src/` to `lib/` with Babel.
- **Dependencies Policy:** Do NOT add new dependencies to `package.json` without explicit approval in `requirements.md` or user consent.
- **Context Boundaries:** Heavy directories like `node_modules/`, `dist/`, `lib/`, and `docs/modules-imgs` are ignored via `.aiignore` to preserve clean context memory.
