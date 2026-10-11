# Changelog

## 2026-10-11

- chore: mark phase 1 validation criteria complete
- chore: complete phase 1 roadmap checklist and spec updates
- feat(phase-1): 3-column UI, manual compilation and JetBrains plugin packaging
- feat(phase-1): manual synthesis pipeline and error handling
- feat(phase-1): workspace cleanup, deduplication and modern icon
- chore(config): add AGENTS guidelines, .aiignore and update .gitignore

## 2026-10-10

- feat(jetbrains-plugin): create DigitalJS split-preview IDE plugin and synthesis bridge
- feat(architecture): decouple core to 4 primitives, introduce Module API and UniBo library
- feat(ui): modernize circuit styling, dark theme, and visual components

## 2026-02-10

- Enable simple changing of default combinational propagation time (#117)

## 2026-02-03

- Reduce dependencies (#116)

## 2025-12-13

- Update README.md

## 2025-12-02

- Fixed issues after jointjs update (#114)

## 2025-10-28

- Bumped deps (#112)

## 2024-05-08

- Fix synchronous read bug

## 2023-09-30

- Add ability to change subcircuit buttons (#100)

## 2023-03-23

- Update ChangeLog
- Bump deps and version

## 2023-01-16

- Implement Circuit public zooming methods. (#93)

## 2022-11-20

- Add zooming feature to subcircuits.

## 2022-09-19

- Fix undefined reference to abits

## 2022-08-16

- Feature/add 7 segment display (#84)

## 2022-07-20

- Bump terser from 4.8.0 to 4.8.1

## 2022-07-18

- Bump jquery-ui from 1.13.1 to 1.13.2

## 2022-04-28

- Bump async from 2.6.3 to 2.6.4

## 2022-04-09

- Bump minimist from 1.2.5 to 1.2.6

## 2022-03-17

- Bump version number

## 2022-03-15

- Export cells, transform etc. in node toplevel

## 2022-03-01

- Change yosys link to actual repository

## 2022-02-22

- Bump version number
- Handle NorReduce in mux transform

## 2022-02-10

- Fix the lifetime of the event listeners for the sub-windows

## 2022-02-05

- Save IO orders

## 2022-02-03

- Bump version number
- Update changelog

## 2022-02-02

- Use security fixes in dependencies
- Update wavecanvas

## 2022-02-01

- Improve touch support

## 2022-01-27

- Use batch to mark the beginning and end of elkjs layout change

## 2022-01-02

- Fix typo in iopanel

## 2021-12-22

- Update Dff description in README
- Add asynchronous Dff loading to support Yosys 0.11

## 2021-12-21

- Update ChangeLog.
- Propagate parameter changes in WebWorker. Fixes #68.

## 2021-12-20

- Update ChangeLog.md

## 2021-12-19

- Disable submit action on IOPanel

## 2021-12-16

- Update ChangeLog.md

## 2021-12-14

- Fix port position reporting of Mux and SubCircuits

## 2021-12-12

- Make sure circuits with constant ops can be serialized to JSON correctly

## 2021-12-10

- Layout edges using elsjs

## 2021-12-08

- Separate out the constructor of SingleCellTestFixture

## 2021-10-06

- Bump version number.
- Update dependencies.

## 2021-10-05

- Preserve wire names and source positions on transforms
- Load source positions for wires
- Support improved memory cells
- Fix bug in Dff

## 2021-10-04

- Added parameter for source code positions
- Add support for $sr, $dffsr and $dffsre

## 2021-10-02

- Added synchronous resets for Dff

## 2021-08-17

- Bump version number.
- Bump dependencies

## 2021-08-12

- Fix trigger format change in monitor
- Fix timing bug due to mutability in worker engine
- Fix bug in CompareConst
- Fix visuals for short edges.

## 2021-08-11

- Added alarms
- Guarantee monitor callbacks after finished cycle

## 2021-08-10

- Add changelog.
- Tests for webworker

## 2021-08-05

- Remove trigger monitor on row remove
- Triggers added
- Proper monitoring support for WebWorker engine

## 2021-08-04

- Support FSMs in WebWorker engine

## 2021-08-03

- Fix subcircuit initialization
- Fix bus ops for WebWorker engine
- Memory editor for WebWorker engine
- Don't auto-stop on fast forward
- Subcircuit support in WebWorker engine
- Fix for gate removing
- Window handling fix
- Handling graph changes in WebWorker engine

## 2021-08-02

- Towards working WebWorker engine
- Change clock hack not to use trigger

## 2021-07-29

- WiP on engines
- Towards WebWorker engine
- Fix jest (run via babel)
- Move to Webpack 5
- Update dependencies.

## 2021-07-28

- Move engines to separate files
- Refactor.
- Move subcircuit propagation to engine

## 2021-07-27

- Separate engine from circuit
- Bump version number.
- Clock on first layer for elk layout
- Update gate documentation in README
- Remove TODO item
- Elkjs (#57)

## 2021-07-26

- Update dependencies
- More resilient mux transform
- Sparse muxes with default inputs
- Transform for sparse muxes

## 2021-07-23

- Add sparse mux

## 2021-07-22

- Adjustment for ops with constants
- Transformation for enable in DFFs
- 1Hot mux labeling
- Binary mux transformation
- Better display for ops with constants

## 2021-07-21

- Fix drawing of extremely big gates
- Remove a debug statement
- Fix transformations
- N-ary gate transformation
- Remove finished TODO items
- N-ary gates
- Default DFF fix

## 2021-07-20

- Transformations for arith with constant
- ShiftConst default fillx
- Circuit transformations

## 2021-05-25

- Fix files field
- Bump version number
- Fix crash on some construction order

## 2021-05-21

- Pack lib and dist into packages
- Fix memory after BigInt changes
- bugfix: foreignObject placement in WebKit (e.g. Safari)

## 2021-05-07

- Audit fix
- Switch from big-integer to BigInt
- Babel changes
- Fused arithmetic with constants

## 2021-04-30

- Bump version number
- Better handling of FSMs with X inputs
- Mark initial state
- Correctly mark current state at FSM init

## 2021-04-27

- Add tests for FSM
- Fix clock/reset handling in fsm

## 2021-04-24

- Tests for edge-triggered Dff

## 2021-04-23

- Tests for various Dff behaviors
- Fix initialization regression in Dff
- Add arst_value to gateParams in Dff
- Reset before enable in Dff
- Missing Dff attribute in README.md
- Create codeql-analysis.yml

## 2021-04-22

- Bump version number
- Bump ssri (npm audit fix)
- Fix DFF reset with value regression
- Fix clock

## 2021-04-20

- Bump version number.
- Brutally fix issue with circuits not stabilizing.

## 2021-03-31

- Fix defaults for DFF cell

## 2021-03-23

- expose linkTools and default paperOptions for use outside of digitaljs

## 2021-03-15

- Create FUNDING.yml

## 2021-02-16

- Bump version number.
- Lua testbench removed from TODO.

## 2021-02-15

- Highlighting of addressed mem cells

## 2021-02-10

- Fix for wire hover bug.
- Bump version number
- Fix warnings calculation
- Extended the warnings example with more nesting
- Fix another regression on memory cells
- Bump version number
- Fixed regression in memory address width
- Changed RAM/ROM example to test for bit mismatch

## 2021-02-08

- Bump version number.
- Fixed regression for mismatched bits on setInput
- Reverted underscoring a public API
- Bump version number.
- Fix exceptions caused by undefined d in decor
- Failed asserts throw exception in tests
- Relaxed assert
- Bump version numbers.

## 2021-01-25

- use single instance of linkTools, prevent UI bug after snapping back

## 2020-12-14

- Bugfix: Conditional exports paths (#40)

## 2020-10-10

- adapt gates example to use new standard Input/Output types
- merge different IO types into Input/Output types

## 2020-10-02

- Fix package.json after merge.
- Run CI on pull requests
- Normalize paths
- Ignore lib
- Transpile to support backward compability with node
- Remove extensions from local imports

## 2020-09-30

- add example with different Inputs/Outputs

## 2020-09-29

- code cleanup
- set undefined signal of correct bit width while instantiating NumEntry

## 2020-09-22

- rename internal methods and fields to start with underscore, use new function syntax

## 2020-08-25

- add start/stop buttons to examples
- fix some bugs related to changing gate or port bits
- show zero bits as undefined instead of high

## 2020-08-24

- template: make gates accessible in console for playing around

## 2020-07-15

- remove wire hover on removing wire

## 2020-07-12

- Bump version number.

## 2020-07-10

- Fix probing subcircuits.

## 2020-07-06

- Bump version number.
- Remove redundant displays.

## 2020-07-03

- Refresh UI elements on adding new display.
- Per-circuit handling of display.

## 2020-07-02

- add inconsistent wire example

## 2020-07-01

- signal warnings inside subcircuits and prevent simulation in case of warnings
- Bump version number.
- Exception on setLogicValue.
- Bump 3vl and wavecanvas.
- API changes for more automation.

## 2020-06-30

- highlight wire in case of warning
- move logic from circuit to gates and wires
- fix button/lamp port styling issue

## 2020-06-27

- apply styling in javascript instead of css

## 2020-06-20

- use jointjs selectors instead of css classes for attrs
- speedup port initialization
- Replace prop() calls with simpler get()/set().

## 2020-06-19

- add horner example for benchmarking
- Tests now Webpack-free.
- Add missing import.
- Fixed regression with undefined state on LED.
- Gate markup integrated into cells.
- Test in .mjs.

## 2020-06-17

- IO panel fixes.

## 2020-06-16

- Added I/O panel.

## 2020-06-14

- Replace ResizeSensor with ResizeObserver.
- Added ASCII single character display.
- Add two's complement display.

## 2020-06-13

- Use Display3vl for value reading/formatting.
- Bump deps.

## 2020-06-10

- Bump deps.
- polyfill ResizeObserver for older browsers

## 2020-06-08

- refactor wires to use new linkTools API
- add display offset for subcircuit name

## 2020-05-22

- TODO items.
- Workaround for (probably) a race condition.
- Fix problem with popup windows being too wide.

## 2020-05-06

- minify gates example to use default arguments
- Fixed persistent red in memory cell.
- Fixed bug with displaying some memories.
- Bump version number.
- Fixed problem with displaying very small memories.
- Fixed issue with enable signal handling.

## 2020-04-28

- Bump version number.
- Fixed bug in FSM.

## 2020-04-23

- refactoring hierarchy, ports and markup
- added example to see all available gates
- Bump version number.
- Comparison operators now closer to IEEE.

## 2020-04-21

- Fixed bug introduced by earlier commit.
- Remove Travis from README.
- Bump version number, update deps, CI.
- Fixed bug created in previous commits.
- Using ES6 module support.
- add optional argument to serialization method allowing to ignore layout information (#15)

## 2020-04-06

- always add bits label to ports markup (#14)
- use generic or custom cell namespace (#12)

## 2020-03-14

- Bump acorn from 6.4.0 to 6.4.1 (#9)

## 2020-03-09

- Decouple subwindow handling from core logic (#8)

## 2020-03-05

- Add fixed mode on paper side (#7)

## 2020-03-02

- Update README.md
- Update nodejs.yml
- Create nodejs.yml
- Update libraries.
- Fixed README and examples for new format.

## 2020-01-26

- save class name as type instead of yosys celltype
- adapt template to test serialization and reloading

## 2019-09-19

- Bump version number.
- FSM display fixes.

## 2019-09-02

- Displaying FSM graphs.

## 2019-09-01

- FSM block.
- Newer 3vl and wavecanvas.
- Flash on memory cell change.

## 2019-08-19

- Fix bug with mem editor not updating.

## 2019-08-14

- Descriptions for dff and mem.
- Info on device types.
- Cell types listing in README

## 2019-08-13

- Change todo, bump version number.
- Triggers on monitored signals.

## 2019-08-12

- Added fast forward mode.
- Updated TODO.

## 2019-08-08

- Bump version number.
- Output update for asynchronous memories.
- Changing memory.

## 2019-08-07

- Initial memory editor.
- Wtf garbage div bug fixed.
- Initial value for DFFs, better initial state.

## 2019-08-05

- Bump version number.

## 2019-08-04

- Restoring monitor rows for changed circuits.
- Updated TODO.
- Nicer changer for clock speed.
- Changeable clock speed.
- Don't use global $ for jquery.

## 2019-08-03

- Relative paths.
- Updated to newer 3vl and wavecanvas.

## 2019-08-01

- Fixed resizing of dialogs.
- Fixed dependencies.
- Reduced the size of the Sextium example.

## 2019-07-31

- Enable async mode for graph rendering.
- Use new flag API for JointJS views.
- Update some dependencies.
- Update jointjs and other libraries.

## 2019-04-15

- Fixed jest.
- Fixed constants not propagating outside modules.
- Fixed constant cell width bug.
- Update dependencies.

## 2018-11-02

- Use 3vl memories.

## 2018-10-28

- Bump version number.
- Grid step info for monitor view.
- Automatic redrawing monitor on events.
- Simple normalization of mouse wheel.

## 2018-10-27

- Changeable markup for monitor interface.
- Nice deinitialization of monitor view.

## 2018-10-25

- Externalized monitor panel.
- Mouse wheel scaling in monitor.
- Monitor dragging.

## 2018-10-24

- Zoom in, zoom out.
- Changeable bases in monitor.
- Wire naming.
- Removing of rows from monitor.
- Automatic resizing of monitor table.

## 2018-10-19

- Use released wavecanvas, add missing file.
- Styles for monitor.

## 2018-10-17

- Towards signal monitor.

## 2018-10-03

- New TODO position.
- Added decimal base.

## 2018-10-02

- Bump version number.
- Correct dumping of memory contents.
- Don't save positions of elements when not laid out.

## 2018-09-25

- Fixed example.
- API fix (displayOn removed from headless).
- Update README.md

## 2018-09-24

- README.md: add link to web app
- Added logo.
- Bump version number.

## 2018-09-21

- Remembering layout in circuits saved to JSON.
- Changes for better UI.

## 2018-09-19

- Added schematic export.
- Added test for queue emptiness after cell update.
- Added testing for event queue emptiness.
- Added test for busslice.
- Tests for signextend and zeroextend.
- Fix.

## 2018-09-18

- Better arith/shift testing.
- Fix.
- Basic bitshift tests.
- Simple test for $constant.
- Added tests for modulo and power.
- Tests for multiplication and division.
- Division respects IEEE Verilog div-by-0 semantics.

## 2018-09-17

- More arith tests.
- Fix fix.

## 2018-09-16

- First arithmetic operation tests.
- Fix.
- Test all comparison operators.

## 2018-09-15

- Testing signed compare.
- Fix.
- New TODO point.

## 2018-09-11

- Towards testing arithmetic.
- Test for muxes.
- Auto select between complete/randomized testing.
- Tests for busgroup and busungroup.
- Randomized testing.
- Nicer testing using generators.
- Start test suite.
- Fixed nor gate.

## 2018-09-06

- Changed signal representation to 3vl vectors.
- Additional tests.
- More TODO.

## 2018-08-30

- Visibility of wire hover box in dialogs.
- Bump version number.
- Resizing IO box size.
- Nicer looking mux.
- Divider not failing for zero.
- Performance improvements.
- Additional test examples.

## 2018-08-29

- Towards faster rendering.
- Resizing value display elements.
- Fix.
- Auto-resized bus slice blocks.

## 2018-08-28

- Add Travis.
- Bump version number.
- Enable repeater gate.
- Hover info for wires.
- Lazy graph layout, dialog window cleanup.
- Automatic sizing of boxy cells.
- Discoverable viewing of subcircuits.

## 2018-08-27

- Added prepare script to be run before publishing.
- Bump version number.
- Bump version number.

## 2018-08-26

- Extending README file.

## 2018-08-24

- More compact format for constants.
- More compact format for constants.

## 2018-08-23

- Added function to stop simulation.
- Adjust Webpack settings, bump version number.

## 2018-08-21

- Clock and polarity markings.
- Labels for box-like cells.

## 2018-08-20

- Make hex the default.
- Subcircuit dialogs rescaled.

## 2018-08-18

- Nicer multiplexers.

## 2018-08-17

- Added clock element.
- Memory offset support.

## 2018-08-16

- Fix in memory impl.
- Started work on memory cell implementation.
- Restored missing lamp model lost during refactor.
- Variable propagation delays.

## 2018-08-15

- Workaround for Chrome.
- Path refactor.
- Split cells file.
- Moved helper signal functions to a separate file.

## 2018-08-14

- Fixed lamp model.
- Fixed compare operator rendering.
- Fixed subcircuit bit markings.
- Numeric input base selection.
- Fixed positioning of arith operators.
- Base select for constants.
- Changing number base for display.

## 2018-08-13

- Labelled wires.
- Fix.
- Display buses as thick lines.
- Generic display of sigs as bin/oct/hex.
- Fix for dragging links.
- Removed unneeded lodash.
- Generic bin/oct/hex parsing.
- Give the path autorouter more time.

## 2018-08-12

- Fixed subcir rendering after performance hack.
- Quick performance fix.

## 2018-08-10

- Optional clock in dff (for latch operation).

## 2018-08-09

- Fix for $dff.
- Initial dff implementation.
- Fixed equality operators.
- Added one-hot multiplexer.
- Binary controlled multiplexer added.

## 2018-08-08

- Webpack now builds tests from a template.
- Bit shift operators.
- Comparison operators.
- Added Nand and Nor reducing gates.
- Fixed xnor.
- Reducing gates.

## 2018-08-07

- Publishing on gh-pages.
- Moved test, preparing for gh-pages.
- Arithmetic operators through big-integers.

## 2018-08-06

- Zero-extend and sign-extend blocks.
- Fix: storing type string in 'celltype'.
- Some small visualization changes.
- Nicer routing.
- Correct bit order for presentation.
- Bus slicing.

## 2018-08-05

- Added a constant block.

## 2018-08-04

- Bus grouping, simpler i/o initialization.
- Cleanup.

## 2018-08-03

- Wire color for signals not all-0/all-1/all-x.
- Basic number entry widget.
- Bit width display on ports.
- General wire creation for gates.

## 2018-08-02

- Leg-less gate images.
- Moved gate images out of JS files.
- Cleaner markups.
- Moved port display update from view to model.
- Multibit number display and multibit signals.
- Start bit widths.
- Added indicator widgets.

## 2018-08-01

- Fixed race bug.
- Global subcircuit map in json format.
- Changed connection json format.
- Repository in package.json.
- Labelling stuff.
- inputs/outputs can have different names than ids
- Better example.
- Working subcircuit display.
- Subcircuit simulation.
- Drawing subcircuit icons.

## 2018-07-31

- Towards subcircuits.
- Constrained reconnecting of sources.
- Delayed propagation for correct timing.
- Work in progress.
- Fixed display.
- Synchronized button updates.
- Split gate state into inputs and outputs.
- jQuery lookup on port name instead of class name.
- Port info in model.
- Allow queueing events from many graphs.
- Circuit state update on graph link changes.
- Gate labels.
- Basic propagation.
- Added option for automatic webpack refreshing.

## 2018-07-30

- Port state visualization - initial.
- Clickable input button.
- Towards input button support.
- Copied gate definitions to the project.
- Starting work on a simple logic simulator.
