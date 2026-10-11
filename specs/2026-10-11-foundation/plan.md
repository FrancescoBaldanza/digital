# Implementation Plan: Phase 1 — MVP Fondazione

Detailed sequence of independently executable and verifiable task groups.

---

### Task Group 1: Workspace Cleanup & Git Configuration
- [x] 1.1 Update `.gitignore` to remove `specs` (ensure versioning) and add UniBo files (`unibo.v`, `tests/unibo.v`, etc.)
- [x] 1.2 Deduplicate library files between `libraries/` and `src/libraries/`, keeping the single source of truth in `src/libraries/`
- [x] 1.3 Audit files in `review/`, document the purpose of each item, and clean up obsolete or redundant files
- [x] 1.4 Consolidate `examples/` into `tests/` so that `tests/` is the single canonical folder for fixtures, test circuits, and demos
- [x] 1.5 Generate and integrate a modern vector project icon representing digital logic circuits

### Task Group 2: Core Synthesis & Compilation Flow
- [ ] 2.1 Verify and configure `yosys2digitaljs` synthesis pipeline for manual Verilog-to-circuit conversion
- [ ] 2.2 Implement manual compilation controller handling state transitions (`idle`, `compiling`, `success`, `error`)
- [ ] 2.3 Implement synthesis error reporting and banner presentation for invalid Verilog syntax or synthesis errors
- [ ] 2.4 Verify that existing unit tests in `tests/` pass cleanly with `npm test`

### Task Group 3: 3-Column UI & JetBrains Plugin Integration
- [ ] 3.1 Implement responsive 3-column layout (Column 1: File Explorer, Column 2: Verilog Editor, Column 3: Circuit Visualizer)
- [ ] 3.2 Add prominent "Compile" button in the action toolbar with visual loading/spinner indicator
- [ ] 3.3 Connect File Explorer selection to Verilog editor loading and circuit viewer state
- [ ] 3.4 Ensure the web UI bundles seamlessly with Webpack (`npm run dev` / `npm run prod`)
- [ ] 3.5 Configure the JetBrains IDE plugin base to embed the web preview via JCEF WebView and bridge file updates

### Task Group 4: Verification & Automated Tests
- [ ] 4.1 Run full test suite with `npm test` and ensure all tests pass
- [ ] 4.2 Verify manual compilation with sample circuits in `tests/` (Half Adder, Multiplexer, Counter)
- [ ] 4.3 Verify error handling by testing malformed Verilog code and checking UI error banner
- [ ] 4.4 Verify clean git status with tracked `specs/` and ignored UniBo files
