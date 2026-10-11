# Phase Requirements: Phase 1 — MVP Fondazione

## 1. Scope
### Included
- **Repository & Git Cleanup:**
  - Update `.gitignore` to ensure `specs/` is version-controlled (remove `specs` from `.gitignore`).
  - Add `unibo.v` and university-specific UniBo library files to `.gitignore`.
  - Audit and catalog files in `review/`, explaining the purpose of each and cleaning up obsolete files.
  - Deduplicate library files between `libraries/` and `src/libraries/`.
  - Consolidate sample files from `examples/` into `tests/` as the single canonical directory for test and demo instances.
  - Add a modern project icon symbolizing digital logic circuits.
- **3-Column Web Interface:**
  - Column 1: File Explorer / Circuit sample picker.
  - Column 2: Verilog code editor.
  - Column 3: Digital interactive circuit visualization.
  - Action Toolbar: prominent manual "Compile" button with loading indicator.
  - Synthesis Feedback: error banner displaying compiler/synthesis errors on failure; re-rendering the circuit graph on success.
- **Unified Runtime & JetBrains Integration:**
  - Web UI operates cleanly both as standalone web app (`npm run dev` / `npm run prod`) and embedded within the JetBrains plugin tool window via JCEF.
  - Ensure end-to-end Verilog → `yosys2digitaljs` → Digital circuit rendering works reliably.
  - Ensure existing test suite passes (`npm test`).

### Excluded / Non-Goals for this Phase
- Real-time / keystroke compilation (compilation is strictly manual via the Compile button).
- Advanced simulation features (metastates, static/dynamic hazards/alee, propagation delays — deferred to Phase 4).
- Custom OOP Module Authoring API & custom external library loader (deferred to Phase 2).
- Recursive XOR merging and lens zoom bar UI enhancements (deferred to Phase 3).
- Hardware/FPGA programming and non-Verilog HDL formats (explicit non-goals in mission).

### Data Shape & Contract
| Field / Property | Type | Description | Constraints / Validation |
| :--- | :--- | :--- | :--- |
| `sourceVerilog` | `string` | Raw Verilog module code | Non-empty for compilation |
| `synthesisStatus` | `enum('idle', 'compiling', 'success', 'error')` | State of the compilation pipeline | Transitions strictly: idle/error/success -> compiling -> success/error |
| `circuitData` | `object` | Digital JSON circuit schema | Parsed Yosys netlist with cells, ports, and nets |
| `compileError` | `string \| null` | Error output from Yosys / synthesis parser | Displayed in error banner when `synthesisStatus === 'error'` |
| `selectedFile` | `string \| null` | Currently active Verilog fixture/file in explorer | Resolved path or file key in `tests/` |

---

## 2. Key Decisions & Rationale
- **Decision 1: Unified Web-Based 3-Column Interface**
  - *Choice:* Build the 3-column UI as a modular web application that runs standalone and embeds directly into JetBrains via JCEF WebView.
  - *Rationale:* Eliminates code duplication between web and IDE plugin, ensures consistent user experience across platforms, and maximizes portability.
- **Decision 2: Version Control for Specs & UniBo Privacy**
  - *Choice:* Track `specs/` in git (remove from `.gitignore`), ignore `tests/unibo.v` and university-specific assets, and interactively audit `review/`.
  - *Rationale:* Spec-Driven Development requires version-controlled specs for team and agent alignment. Academic/proprietary course materials must not be leaked into open-source repositories.
- **Decision 3: Prominent Manual Compilation with Visual Feedback**
  - *Choice:* Use a prominent toolbar "Compile" button with loading state, syntax error banner, and clean circuit re-render.
  - *Rationale:* Real-time synthesis can be jarring and performance-heavy with Yosys. Explicit manual compilation gives students control over when code is analyzed, adhering to the minimalist academic philosophy.

---

## 3. Context & Guidance
- **Alignment with Mission:** Refers to [`specs/mission.md`](../mission.md) — focused on university computer engineering students and professors, academic & minimalist aesthetic, declarative Verilog workflow.
- **Tech Stack Compliance:** Refers to [`specs/tech-stack.md`](../tech-stack.md) — Node.js, Webpack, JointJS, elkjs, yosys2digitaljs, Jest (`npm test`), JetBrains plugin (JCEF). No unapproved dependencies.
- **Conventions & Patterns:** Clean separation of concerns between UI state, synthesis pipeline, and circuit rendering.
