# Tech Stack & Architectural Guidelines: Digital

## Core Technologies
- **Runtime & Language:** JavaScript (ES modules in `src/`, CommonJS build in `lib/`), Node.js
- **Primary Framework:** JointJS (visualizzazione grafici), elkjs (layout automatico)
- **Verilog Conversion:** yosys2digitaljs (integrazione con Yosys per sintesi Verilog → JSON)
- **UI / Frontend:** Vanilla JavaScript, Webpack per il bundle browser (`dist/`)
- **IDE Integration:** JetBrains Plugin (priorità principale), VSCode (futuro)

## Testing & Quality Assurance
- **Test Framework:** Jest (`npm test`)
- **Testing Strategy:**
  - Unit tests for core domain logic (cells, tools, engines, transforms)
  - Integration tests for Verilog compilation and circuit simulation
  - Tests located in `tests/` directory
- **Execution Command:** `npm test`

## Build Commands
- `npm run dev`: Development build via Webpack
- `npm run prod`: Production build
- `npm run build-lib`: Transpilation of `src/` (ES modules) to `lib/` (CommonJS) with Babel

## Architectural Constraints & Conventions
- **Directory Structure:**
  - Source files (ES modules): `src/`
  - Built library (CommonJS): `lib/`
  - Browser bundle: `dist/`
  - JetBrains IDE plugin: `jetbrains-plugin/`
  - Tests: `tests/` (single location for all examples and test cases)
  - Specs and feature documentation: `specs/`
  - Custom module libraries: `src/libraries/` (built-in) + user-defined paths (custom)
  - Third-party libraries: `libraries/` (for external Verilog libraries)
- **Design Patterns:**
  - Component separation: cells, tools, engines, transforms organized by domain
  - Clear separation between Verilog parsing, circuit representation, visualization, and simulation
  - OOP API for custom modules (Module, Input, Output, Shape)
- **Dependencies Policy:**
  - Do NOT add new dependencies to `package.json` without explicit approval in `requirements.md` or user consent.
  - Prioritize lightweight, battle-tested packages.
  - Existing key dependencies: JointJS, elkjs, yosys2digitaljs, Webpack, Babel, Jest

## Library System Architecture
- **Built-in libraries:** Reside in `src/libraries/`, versioned in the repository
- **Custom libraries:** User-defined directories containing Verilog modules defined via simple OOP API
- **UniBo library:** University-specific modules must be excluded via `.gitignore` (e.g., `unibo.v`)
- **Library API:** Simple OOP structure with Module, Input, Output, and Shape definitions
