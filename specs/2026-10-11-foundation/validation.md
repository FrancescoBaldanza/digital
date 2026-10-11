# Validation Criteria: Phase 1 — MVP Fondazione

Defines how to verify the implementation succeeded before merging into the main branch.

---

## 1. Automated Verification
Run the following automated commands in the project root:

| Check | Command | Expected Outcome |
| :--- | :--- | :--- |
| **Test Suite** | `npm test` | All Jest tests pass with 0 failures |
| **Web Build (Dev)** | `npm run dev` | Webpack bundles application into `dist/` cleanly |
| **Web Build (Prod)** | `npm run prod` | Production bundle builds without errors |
| **CommonJS Build** | `npm run build-lib` | Babel transpile from `src/` to `lib/` completes cleanly |
| **Plugin Build** | `cd jetbrains-plugin && ./gradlew buildPlugin` | Gradle build completes successfully |

### Specific Test Assertions
- [ ] Test assertion 1: Verify `npm test` executes all unit tests for cells, tools, engines, transforms, and modular architecture with zero errors.
- [ ] Test assertion 2: Verify `yosys2digitaljs` converts valid Verilog code into valid DigitalJS circuit JSON structure.
- [ ] Test assertion 3: Verify invalid Verilog code produces descriptive compile errors without crashing the application.
- [ ] Test assertion 4: Verify `specs/` directory is tracked by git and `unibo.v` is ignored by git.
- [ ] Test assertion 5: Verify no duplicated files remain between `libraries/` and `src/libraries/`.

---

## 2. Manual Walkthrough & Acceptance Tests
Step-by-step instructions for human or agent verification:

1. **Step 1: Check Git Tracking & Repository Structure**
   - Run `git status` to verify `specs/` files are tracked.
   - Verify `unibo.v` does not appear in git tracking.
   - Confirm examples are centralized under `tests/`.
2. **Step 2: Start Web Application**
   - Run `npm run dev` (or open the local server).
   - Observe the 3-column UI: File Explorer (left), Verilog Editor (center), Circuit Visualizer (right).
   - Confirm the modern project icon is visible.
3. **Step 3: Test Manual Compilation**
   - Select a sample Verilog file from the File Explorer.
   - Click the "Compile" button in the toolbar.
   - Verify that the loading indicator appears during compilation.
   - Verify that the circuit diagram is rendered clearly in the right panel upon completion.
4. **Step 4: Test Syntax Error Handling**
   - Introduce a syntax error in the Verilog editor (e.g. invalid keyword or missing semicolon).
   - Click "Compile".
   - Verify that the circuit viewer is not corrupted and an error banner displays the synthesis failure message.
5. **Step 5: Test JetBrains IDE Plugin**
   - Run or verify the plugin in the JetBrains IDE environment.
   - Confirm the circuit preview tool window renders the web interface via JCEF.

---

## 3. Definition of Done
The phase is considered complete when:
- [ ] All task groups in `plan.md` are checked `[x]`
- [ ] All automated tests pass (`npm test`)
- [ ] Production build succeeds (`npm run prod`)
- [ ] Manual walkthrough acceptance criteria are fulfilled
- [ ] Working directory is clean with all phase changes committed on `phase-1-foundation`
- [ ] Multi-agent verification review passes without blocking concerns (`/verify-phase`)
