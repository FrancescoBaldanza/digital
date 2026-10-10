(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("digitaljs", [], factory);
	else if(typeof exports === 'object')
		exports["digitaljs"] = factory();
	else
		root["digitaljs"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cells.mjs"
/*!***********************!*\
  !*** ./src/cells.mjs ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Addition: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Addition),
/* harmony export */   AdditionConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.AdditionConst),
/* harmony export */   AdditionConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.AdditionConstView),
/* harmony export */   AdditionView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.AdditionView),
/* harmony export */   And: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.And),
/* harmony export */   AndReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.AndReduce),
/* harmony export */   AndReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.AndReduceView),
/* harmony export */   AndView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.AndView),
/* harmony export */   Arith: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Arith),
/* harmony export */   Arith11: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Arith11),
/* harmony export */   Arith21: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Arith21),
/* harmony export */   ArithConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ArithConst),
/* harmony export */   BaseCompare: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.BaseCompare),
/* harmony export */   BaseCompareConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.BaseCompareConst),
/* harmony export */   BitExtend: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BitExtend),
/* harmony export */   BitExtendView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BitExtendView),
/* harmony export */   Box: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box),
/* harmony export */   BoxView: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.BoxView),
/* harmony export */   BusGroup: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusGroup),
/* harmony export */   BusGroupView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusGroupView),
/* harmony export */   BusRegroup: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusRegroup),
/* harmony export */   BusRegroupView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusRegroupView),
/* harmony export */   BusSlice: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusSlice),
/* harmony export */   BusSliceView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusSliceView),
/* harmony export */   BusUngroup: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusUngroup),
/* harmony export */   BusUngroupView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.BusUngroupView),
/* harmony export */   Button: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   ButtonView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.ButtonView),
/* harmony export */   Clock: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Clock),
/* harmony export */   ClockView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.ClockView),
/* harmony export */   Compare: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Compare),
/* harmony export */   CompareConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.CompareConst),
/* harmony export */   Constant: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Constant),
/* harmony export */   ConstantView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.ConstantView),
/* harmony export */   DFF: () => (/* reexport safe */ _cells_dff_mjs__WEBPACK_IMPORTED_MODULE_7__.DFF),
/* harmony export */   DFFView: () => (/* reexport safe */ _cells_dff_mjs__WEBPACK_IMPORTED_MODULE_7__.DFFView),
/* harmony export */   Dff: () => (/* reexport safe */ _cells_dff_mjs__WEBPACK_IMPORTED_MODULE_7__.Dff),
/* harmony export */   DffView: () => (/* reexport safe */ _cells_dff_mjs__WEBPACK_IMPORTED_MODULE_7__.DffView),
/* harmony export */   Display7: () => (/* reexport safe */ _cells_display7_mjs__WEBPACK_IMPORTED_MODULE_10__.Display7),
/* harmony export */   Display7View: () => (/* reexport safe */ _cells_display7_mjs__WEBPACK_IMPORTED_MODULE_10__.Display7View),
/* harmony export */   Division: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Division),
/* harmony export */   DivisionConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.DivisionConst),
/* harmony export */   DivisionConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.DivisionConstView),
/* harmony export */   DivisionView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.DivisionView),
/* harmony export */   Eq: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Eq),
/* harmony export */   EqCompare: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.EqCompare),
/* harmony export */   EqCompareConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.EqCompareConst),
/* harmony export */   EqConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.EqConst),
/* harmony export */   EqConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.EqConstView),
/* harmony export */   EqView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.EqView),
/* harmony export */   FSM: () => (/* reexport safe */ _cells_fsm_mjs__WEBPACK_IMPORTED_MODULE_9__.FSM),
/* harmony export */   FSMView: () => (/* reexport safe */ _cells_fsm_mjs__WEBPACK_IMPORTED_MODULE_9__.FSMView),
/* harmony export */   Gate: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate),
/* harmony export */   Gate11: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Gate11),
/* harmony export */   GateReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.GateReduce),
/* harmony export */   GateSVG: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.GateSVG),
/* harmony export */   GateView: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView),
/* harmony export */   GateX1: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.GateX1),
/* harmony export */   Ge: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Ge),
/* harmony export */   GeConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GeConst),
/* harmony export */   GeConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GeConstView),
/* harmony export */   GeView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GeView),
/* harmony export */   GenMux: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.GenMux),
/* harmony export */   GenMuxView: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.GenMuxView),
/* harmony export */   Gt: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Gt),
/* harmony export */   GtConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GtConst),
/* harmony export */   GtConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GtConstView),
/* harmony export */   GtView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.GtView),
/* harmony export */   IO: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.IO),
/* harmony export */   IOView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.IOView),
/* harmony export */   Input: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Input),
/* harmony export */   InputView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.InputView),
/* harmony export */   Lamp: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Lamp),
/* harmony export */   LampView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.LampView),
/* harmony export */   Le: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Le),
/* harmony export */   LeConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LeConst),
/* harmony export */   LeConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LeConstView),
/* harmony export */   LeView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LeView),
/* harmony export */   Lt: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Lt),
/* harmony export */   LtConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LtConst),
/* harmony export */   LtConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LtConstView),
/* harmony export */   LtView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.LtView),
/* harmony export */   Memory: () => (/* reexport safe */ _cells_memory_mjs__WEBPACK_IMPORTED_MODULE_8__.Memory),
/* harmony export */   MemoryView: () => (/* reexport safe */ _cells_memory_mjs__WEBPACK_IMPORTED_MODULE_8__.MemoryView),
/* harmony export */   Modulo: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Modulo),
/* harmony export */   ModuloConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ModuloConst),
/* harmony export */   ModuloConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ModuloConstView),
/* harmony export */   ModuloView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ModuloView),
/* harmony export */   Multiplication: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Multiplication),
/* harmony export */   MultiplicationConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.MultiplicationConst),
/* harmony export */   MultiplicationConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.MultiplicationConstView),
/* harmony export */   MultiplicationView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.MultiplicationView),
/* harmony export */   Mux: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.Mux),
/* harmony export */   Mux1Hot: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.Mux1Hot),
/* harmony export */   Mux1HotView: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.Mux1HotView),
/* harmony export */   MuxSparse: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.MuxSparse),
/* harmony export */   MuxSparseView: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.MuxSparseView),
/* harmony export */   MuxView: () => (/* reexport safe */ _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__.MuxView),
/* harmony export */   Nand: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Nand),
/* harmony export */   NandReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NandReduce),
/* harmony export */   NandReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NandReduceView),
/* harmony export */   NandView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NandView),
/* harmony export */   Ne: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Ne),
/* harmony export */   NeConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.NeConst),
/* harmony export */   NeConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.NeConstView),
/* harmony export */   NeView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.NeView),
/* harmony export */   Negation: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Negation),
/* harmony export */   NegationView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.NegationView),
/* harmony export */   Nor: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Nor),
/* harmony export */   NorReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NorReduce),
/* harmony export */   NorReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NorReduceView),
/* harmony export */   NorView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NorView),
/* harmony export */   Not: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Not),
/* harmony export */   NotView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.NotView),
/* harmony export */   NumBase: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumBase),
/* harmony export */   NumBaseView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumBaseView),
/* harmony export */   NumDisplay: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumDisplay),
/* harmony export */   NumDisplayView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumDisplayView),
/* harmony export */   NumEntry: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumEntry),
/* harmony export */   NumEntryView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.NumEntryView),
/* harmony export */   OpConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.OpConst),
/* harmony export */   Or: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Or),
/* harmony export */   OrReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.OrReduce),
/* harmony export */   OrReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.OrReduceView),
/* harmony export */   OrView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.OrView),
/* harmony export */   Output: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.Output),
/* harmony export */   OutputView: () => (/* reexport safe */ _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__.OutputView),
/* harmony export */   Power: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Power),
/* harmony export */   PowerConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.PowerConst),
/* harmony export */   PowerConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.PowerConstView),
/* harmony export */   PowerView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.PowerView),
/* harmony export */   Repeater: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Repeater),
/* harmony export */   RepeaterView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.RepeaterView),
/* harmony export */   Shift: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Shift),
/* harmony export */   ShiftConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftConst),
/* harmony export */   ShiftLeft: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftLeft),
/* harmony export */   ShiftLeftConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftLeftConst),
/* harmony export */   ShiftLeftConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftLeftConstView),
/* harmony export */   ShiftLeftView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftLeftView),
/* harmony export */   ShiftRight: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftRight),
/* harmony export */   ShiftRightConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftRightConst),
/* harmony export */   ShiftRightConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftRightConstView),
/* harmony export */   ShiftRightView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.ShiftRightView),
/* harmony export */   SignExtend: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.SignExtend),
/* harmony export */   SignExtendView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.SignExtendView),
/* harmony export */   Subcircuit: () => (/* reexport safe */ _cells_subcircuit_mjs__WEBPACK_IMPORTED_MODULE_5__.Subcircuit),
/* harmony export */   SubcircuitView: () => (/* reexport safe */ _cells_subcircuit_mjs__WEBPACK_IMPORTED_MODULE_5__.SubcircuitView),
/* harmony export */   Subtraction: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.Subtraction),
/* harmony export */   SubtractionConst: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.SubtractionConst),
/* harmony export */   SubtractionConstView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.SubtractionConstView),
/* harmony export */   SubtractionView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.SubtractionView),
/* harmony export */   UnaryPlus: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.UnaryPlus),
/* harmony export */   UnaryPlusView: () => (/* reexport safe */ _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__.UnaryPlusView),
/* harmony export */   Wire: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.Wire),
/* harmony export */   WireView: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.WireView),
/* harmony export */   Xnor: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Xnor),
/* harmony export */   XnorReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XnorReduce),
/* harmony export */   XnorReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XnorReduceView),
/* harmony export */   XnorView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XnorView),
/* harmony export */   Xor: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.Xor),
/* harmony export */   XorReduce: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XorReduce),
/* harmony export */   XorReduceView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XorReduceView),
/* harmony export */   XorView: () => (/* reexport safe */ _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__.XorView),
/* harmony export */   ZeroExtend: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.ZeroExtend),
/* harmony export */   ZeroExtendView: () => (/* reexport safe */ _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__.ZeroExtendView),
/* harmony export */   portGroupAttrs: () => (/* reexport safe */ _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__.portGroupAttrs)
/* harmony export */ });
/* harmony import */ var _cells_base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cells/base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _cells_io_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cells/io.mjs */ "./src/cells/io.mjs");
/* harmony import */ var _cells_gates_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cells/gates.mjs */ "./src/cells/gates.mjs");
/* harmony import */ var _cells_arith_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cells/arith.mjs */ "./src/cells/arith.mjs");
/* harmony import */ var _cells_bus_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cells/bus.mjs */ "./src/cells/bus.mjs");
/* harmony import */ var _cells_subcircuit_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cells/subcircuit.mjs */ "./src/cells/subcircuit.mjs");
/* harmony import */ var _cells_mux_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cells/mux.mjs */ "./src/cells/mux.mjs");
/* harmony import */ var _cells_dff_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cells/dff.mjs */ "./src/cells/dff.mjs");
/* harmony import */ var _cells_memory_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cells/memory.mjs */ "./src/cells/memory.mjs");
/* harmony import */ var _cells_fsm_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cells/fsm.mjs */ "./src/cells/fsm.mjs");
/* harmony import */ var _cells_display7_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cells/display7.mjs */ "./src/cells/display7.mjs");















/***/ },

/***/ "./src/cells/arith.mjs"
/*!*****************************!*\
  !*** ./src/cells/arith.mjs ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Addition: () => (/* binding */ Addition),
/* harmony export */   AdditionConst: () => (/* binding */ AdditionConst),
/* harmony export */   AdditionConstView: () => (/* binding */ AdditionConstView),
/* harmony export */   AdditionView: () => (/* binding */ AdditionView),
/* harmony export */   Arith: () => (/* binding */ Arith),
/* harmony export */   Arith11: () => (/* binding */ Arith11),
/* harmony export */   Arith21: () => (/* binding */ Arith21),
/* harmony export */   ArithConst: () => (/* binding */ ArithConst),
/* harmony export */   BaseCompare: () => (/* binding */ BaseCompare),
/* harmony export */   BaseCompareConst: () => (/* binding */ BaseCompareConst),
/* harmony export */   Compare: () => (/* binding */ Compare),
/* harmony export */   CompareConst: () => (/* binding */ CompareConst),
/* harmony export */   Division: () => (/* binding */ Division),
/* harmony export */   DivisionConst: () => (/* binding */ DivisionConst),
/* harmony export */   DivisionConstView: () => (/* binding */ DivisionConstView),
/* harmony export */   DivisionView: () => (/* binding */ DivisionView),
/* harmony export */   Eq: () => (/* binding */ Eq),
/* harmony export */   EqCompare: () => (/* binding */ EqCompare),
/* harmony export */   EqCompareConst: () => (/* binding */ EqCompareConst),
/* harmony export */   EqConst: () => (/* binding */ EqConst),
/* harmony export */   EqConstView: () => (/* binding */ EqConstView),
/* harmony export */   EqView: () => (/* binding */ EqView),
/* harmony export */   Ge: () => (/* binding */ Ge),
/* harmony export */   GeConst: () => (/* binding */ GeConst),
/* harmony export */   GeConstView: () => (/* binding */ GeConstView),
/* harmony export */   GeView: () => (/* binding */ GeView),
/* harmony export */   Gt: () => (/* binding */ Gt),
/* harmony export */   GtConst: () => (/* binding */ GtConst),
/* harmony export */   GtConstView: () => (/* binding */ GtConstView),
/* harmony export */   GtView: () => (/* binding */ GtView),
/* harmony export */   Le: () => (/* binding */ Le),
/* harmony export */   LeConst: () => (/* binding */ LeConst),
/* harmony export */   LeConstView: () => (/* binding */ LeConstView),
/* harmony export */   LeView: () => (/* binding */ LeView),
/* harmony export */   Lt: () => (/* binding */ Lt),
/* harmony export */   LtConst: () => (/* binding */ LtConst),
/* harmony export */   LtConstView: () => (/* binding */ LtConstView),
/* harmony export */   LtView: () => (/* binding */ LtView),
/* harmony export */   Modulo: () => (/* binding */ Modulo),
/* harmony export */   ModuloConst: () => (/* binding */ ModuloConst),
/* harmony export */   ModuloConstView: () => (/* binding */ ModuloConstView),
/* harmony export */   ModuloView: () => (/* binding */ ModuloView),
/* harmony export */   Multiplication: () => (/* binding */ Multiplication),
/* harmony export */   MultiplicationConst: () => (/* binding */ MultiplicationConst),
/* harmony export */   MultiplicationConstView: () => (/* binding */ MultiplicationConstView),
/* harmony export */   MultiplicationView: () => (/* binding */ MultiplicationView),
/* harmony export */   Ne: () => (/* binding */ Ne),
/* harmony export */   NeConst: () => (/* binding */ NeConst),
/* harmony export */   NeConstView: () => (/* binding */ NeConstView),
/* harmony export */   NeView: () => (/* binding */ NeView),
/* harmony export */   Negation: () => (/* binding */ Negation),
/* harmony export */   NegationView: () => (/* binding */ NegationView),
/* harmony export */   OpConst: () => (/* binding */ OpConst),
/* harmony export */   Power: () => (/* binding */ Power),
/* harmony export */   PowerConst: () => (/* binding */ PowerConst),
/* harmony export */   PowerConstView: () => (/* binding */ PowerConstView),
/* harmony export */   PowerView: () => (/* binding */ PowerView),
/* harmony export */   Shift: () => (/* binding */ Shift),
/* harmony export */   ShiftConst: () => (/* binding */ ShiftConst),
/* harmony export */   ShiftLeft: () => (/* binding */ ShiftLeft),
/* harmony export */   ShiftLeftConst: () => (/* binding */ ShiftLeftConst),
/* harmony export */   ShiftLeftConstView: () => (/* binding */ ShiftLeftConstView),
/* harmony export */   ShiftLeftView: () => (/* binding */ ShiftLeftView),
/* harmony export */   ShiftRight: () => (/* binding */ ShiftRight),
/* harmony export */   ShiftRightConst: () => (/* binding */ ShiftRightConst),
/* harmony export */   ShiftRightConstView: () => (/* binding */ ShiftRightConstView),
/* harmony export */   ShiftRightView: () => (/* binding */ ShiftRightView),
/* harmony export */   Subtraction: () => (/* binding */ Subtraction),
/* harmony export */   SubtractionConst: () => (/* binding */ SubtractionConst),
/* harmony export */   SubtractionConstView: () => (/* binding */ SubtractionConstView),
/* harmony export */   SubtractionView: () => (/* binding */ SubtractionView),
/* harmony export */   UnaryPlus: () => (/* binding */ UnaryPlus),
/* harmony export */   UnaryPlusView: () => (/* binding */ UnaryPlusView)
/* harmony export */ });
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");





function isSafeInteger(v) {
    return v <= Number.MAX_SAFE_INTEGER && v >= -Number.MAX_SAFE_INTEGER;
}

// base class for arithmetic operations displayed with a circle
const Arith = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.define('Arith', {
    size: { width: 40, height: 40 },
    attrs: {
        body: { refR: 0.5, refCx: 0.5, refCy: 0.5 },
        oper: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            fontSize: '12pt'
        }
    },
    ports: {
        groups: {
            'in': { position: { name: 'left', args: { dx: 10 } }, attrs: { wire: { x2: -35 }, port: { refX: -35 } }, z: -1 },
            'out': { position: { name: 'right', args: { dx: -10 } }, attrs: { wire: { x2: 35 }, port: { refX: 35 } }, z: -1 }
        }
    }
}, {
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([{
            tagName: 'circle',
            className: 'body',
            selector: 'body'
        }, {
            tagName: 'text',
            className: 'oper',
            selector: 'oper'
        }
    ]),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype._gateParams.concat(['bits', 'signed']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype._unsupportedPropChanges.concat(['signed'])
});

// Unary arithmetic operations
const Arith11 = Arith.define('Arith11', {
    /* default properties */
    bits: { in: 1, out: 1 },
    signed: false
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits.in },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out }
        ];
        
        Arith.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_,bits) => {
            this._setPortsBits(bits);
        });
    },
    operation(data) {
        const bits = this.get('bits');
        if (!data.in.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(bits.out) };
        return {
            out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(this.arithop(data.in.toBigInt(this.get('signed'))), bits.out)
        };
    },
    _operationHelpers: Arith.prototype._operationHelpers.concat(['arithop'])
});

// Binary arithmetic operations
const Arith21 = Arith.define('Arith21', {
    /* default properties */
    bits: { in1: 1, in2: 1, out: 1 },
    signed: { in1: false, in2: false }
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in1', group: 'in', dir: 'in', bits: bits.in1 },
            { id: 'in2', group: 'in', dir: 'in', bits: bits.in2 },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out }
        ];
        
        Arith.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits(bits);
        });
    },
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        if (!data.in1.isFullyDefined || !data.in2.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(bits.out) };
        return {
            out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(this.arithop(
                    data.in1.toBigInt(sgn.in1 && sgn.in2),
                    data.in2.toBigInt(sgn.in1 && sgn.in2)), bits.out)
        };
    },
    _operationHelpers: Arith.prototype._operationHelpers.concat(['arithop'])
});

function shiftHelp(in1, am, bits_in, bits_out, sgn_in, sgn_out, fillx) {
    const signbit = in1.get(in1.bits-1);
    const ext = _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(Math.max(0, bits_out - bits_in),
        fillx ? 0 : sgn_in ? signbit : -1);
    const my_in = in1.concat(ext);
    const out = am < 0
        ? _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(-am, fillx ? 0 : -1).concat(my_in)
        : my_in.slice(am).concat(_3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(am, fillx ? 0 : sgn_out ? my_in.get(my_in.bits-1) : -1));
    return out.slice(0, bits_out);
}

// Bit shift operations
const Shift = Arith.define('Shift', {
    /* default properties */
    bits: { in1: 1, in2: 1, out: 1 },
    signed: { in1: false, in2: false, out: false },
    fillx: false
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in1', group: 'in', dir: 'in', bits: bits.in1 },
            { id: 'in2', group: 'in', dir: 'in', bits: bits.in2 },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out }
        ];
        
        Arith.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits(bits);
        });
    },
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const fillx = this.get('fillx');
        if (!data.in2.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(bits.out) };
        const am = data.in2.toNumber(sgn.in2) * this.shiftdir;
        return { out: shiftHelp(data.in1, am, bits.in1, bits.out, sgn.in1, sgn.out, fillx) };
    },
    _gateParams: Arith.prototype._gateParams.concat(['fillx']),
    _unsupportedPropChanges: Arith.prototype._unsupportedPropChanges.concat(['fillx']),
    _operationHelpers: Arith.prototype._operationHelpers.concat(['shiftdir'])
});

// Comparison operations
const BaseCompare = Arith.define('BaseCompare', {
    /* default properties */
    bits: { in1: 1, in2: 1 },
    signed: { in1: false, in2: false }
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in1', group: 'in', dir: 'in', bits: bits.in1 },
            { id: 'in2', group: 'in', dir: 'in', bits: bits.in2 },
            { id: 'out', group: 'out', dir: 'out', bits: 1 }
        ];
        
        Arith.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits(bits);
        });
    }
});

// Arithmetic comparison operations
const Compare = BaseCompare.define('Compare', {}, {
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        if (!data.in1.isFullyDefined || !data.in2.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(1) };
        return {
            out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromBool(this.arithcomp(
                    data.in1.toBigInt(sgn.in1 && sgn.in2),
                    data.in2.toBigInt(sgn.in1 && sgn.in2)))
        };
    },
    _operationHelpers: BaseCompare.prototype._operationHelpers.concat(['arithcomp'])
});

// Equality operations
const EqCompare = BaseCompare.define('EqCompare', {}, {
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const in1 = bits.in1 >= bits.in2 ? data.in1 : 
            data.in1.concat(_3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(bits.in2 - bits.in1, sgn.in1 && sgn.in2 ? data.in1.msb : -1));
        const in2 = bits.in2 >= bits.in1 ? data.in2 : 
            data.in2.concat(_3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(bits.in1 - bits.in2, sgn.in1 && sgn.in2 ? data.in2.msb : -1));
        return {
            out: this.bincomp(in1, in2)
        };
    },
    _operationHelpers: BaseCompare.prototype._operationHelpers.concat(['bincomp'])
});

// Negation
const Negation = Arith11.define('Negation', {
    attrs: {
        oper: { text: '-' }
    }
}, {
    arithop: i => -i
});
const NegationView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Unary plus
const UnaryPlus = Arith11.define('UnaryPlus', {
    attrs: {
        oper: { text: '+' }
    }
}, {
    arithop: i => i
});
const UnaryPlusView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Addition
const Addition = Arith21.define('Addition', {
    attrs: {
        oper: { text: '+' }
    }
}, {
    arithop: (i, j) => i + j
});
const AdditionView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Subtraction
const Subtraction = Arith21.define('Subtraction', {
    attrs: {
        oper: { text: '-' }
    }
}, {
    arithop: (i, j) => i - j
});
const SubtractionView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Multiplication
const Multiplication = Arith21.define('Multiplication', {
    attrs: {
        oper: { text: '×' }
    }
}, {
    arithop: (i, j) => i * j
});
const MultiplicationView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Division
const Division = Arith21.define('Division', {
    attrs: {
        oper: { text: '÷' }
    }
}, {
    arithop: (i, j) => j == 0n ? i : i / j // as in IEEE Verilog
});
const DivisionView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Modulo
const Modulo = Arith21.define('Modulo', {
    attrs: {
        oper: { text: '%' }
    }
}, {
    arithop: (i, j) => j == 0n ? i : i % j // as in IEEE Verilog
});
const ModuloView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Power
const Power = Arith21.define('Power', {
    attrs: {
        oper: { text: '^' }
    }
}, {
    arithop: (i, j) => j >= 0n ? i ** j : i == 1n ? 1n : i == -1n ? (j % 2n ? -1n : 1n) : 0n
});
const PowerView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Shift left operator
const ShiftLeft = Shift.define('ShiftLeft', {
    attrs: {
        oper: { text: '≪' }
    }
}, {
    shiftdir: -1
});
const ShiftLeftView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Shift right operator
const ShiftRight = Shift.define('ShiftRight', {
    attrs: {
        oper: { text: '≫' }
    }
}, {
    shiftdir: 1
});
const ShiftRightView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const Lt = Compare.define('Lt', {
    attrs: {
        oper: { text: '<' }
    }
}, {
    arithcomp: (i, j) => i < j
});
const LtView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less or equal operator
const Le = Compare.define('Le', {
    attrs: {
        oper: { text: '≤' }
    }
}, {
    arithcomp: (i, j) => i <= j
});
const LeView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Greater than operator
const Gt = Compare.define('Gt', {
    attrs: {
        oper: { text: '>' }
    }
}, {
    arithcomp: (i, j) => i > j
});
const GtView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const Ge = Compare.define('Ge', {
    attrs: {
        oper: { text: '≥' }
    }
}, {
    arithcomp: (i, j) => i >= j
});
const GeView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Equality operator
const Eq = EqCompare.define('Eq', {
    attrs: {
        oper: { text: '=' }
    }
}, {
    bincomp: (i, j) => i.xnor(j).reduceAnd()
});
const EqView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Nonequality operator
const Ne = EqCompare.define('Ne', {
    attrs: {
        oper: { text: '≠' }
    }
}, {
    bincomp: (i, j) => i.xor(j).reduceOr()
});
const NeView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

const OpConst = Arith.define('OpConst', {
    leftOp: false,
    constant: 0
}, {
    initialize() {
        Arith.prototype.initialize.apply(this, arguments);

        let constant = this.get('constant');
        if (typeof constant === 'string' || constant instanceof String) {
            constant = BigInt(constant);
            if (isSafeInteger(constant))
                constant = Number(constant);
            this.set('constant', constant);
        }
        const genLabel = () => {
            const constantSize = String(this.get('constant')).length;
            const diameter = 30 + constantSize * 10;
            this.prop("size", { width: diameter, height: diameter });
            this.attr("oper/text", 
                this.get('leftOp') ? this.get('constant') + this.operSymbol
                                   : this.operSymbol + this.get('constant'))
        };
        genLabel();

        this.on('change:bits', (_, bits) => {
            this._setPortsBits(bits);
        });
        this.on('change:constant', () => genLabel());
        this.on('change:leftOp', () => genLabel());
    },
    getGateParams() {
        const params = Arith.prototype.getGateParams.apply(this, arguments);
        // `constant` may be a bigint and we need to encode it manually
        if (typeof params.constant === 'bigint') {
            if (isSafeInteger(params.constant)) {
                params.constant = Number(params.constant);
            }
            else {
                params.constant = String(params.constant);
            }
        }
        return params;
    },
    _gateParams: Arith.prototype._gateParams.concat(['leftOp', 'constant'])
});

// Arithmetic operations fused with constants
const ArithConst = OpConst.define('ArithConst', {
    /* default properties */
    bits: { in: 1, out: 1 },
    signed: false
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits.in },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out }
        ];
        
        OpConst.prototype.initialize.apply(this, arguments);
    },
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const constant = this.get('constant');
        if (!data.in.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(bits.out) };
        if (this.get('leftOp'))
            return {
                out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(this.arithop(
                    BigInt(constant),
                    data.in.toBigInt(sgn.in)), bits.out)
            }
        else
            return {
                out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(this.arithop(
                    data.in.toBigInt(sgn.in), BigInt(constant)), bits.out)
            };
    },
    _operationHelpers: OpConst.prototype._operationHelpers.concat(['arithop'])
});

// Bit shift operations fused with constants
const ShiftConst = OpConst.define('ShiftConst', {
    /* default properties */
    bits: { in: 1, out: 1 },
    signed: { in: false, out: false },
    fillx: false
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits.in },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out }
        ];
        
        OpConst.prototype.initialize.apply(this, arguments);
    },
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const fillx = this.get('fillx');
        const constant = this.get('constant');
        if (this.get('leftOp')) {
            if (!data.in.isFullyDefined)
                return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.xes(bits.out) };
            const am = data.in.toNumber(sgn.in);
            const sig = _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(constant);
            return { 
                out: shiftHelp(sig, am * this.shiftdir, sig.bits, bits.out, constant < 0, sgn.out, fillx) 
            };
        } else {
            console.assert(isSafeInteger(constant));
            return {
                out: shiftHelp(data.in, Number(constant) * this.shiftdir, bits.in, bits.out, sgn.in, sgn.out, fillx)
            };
        }
    },
    _gateParams: OpConst.prototype._gateParams.concat(['fillx']),
    _operationHelpers: OpConst.prototype._operationHelpers.concat(['shiftdir'])
});

// Comparison operations fused with constants
const BaseCompareConst = OpConst.define('BaseCompareConst', {
    /* default properties */
    bits: { in: 1 },
    signed: false
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits.in },
            { id: 'out', group: 'out', dir: 'out', bits: 1 }
        ];
        
        OpConst.prototype.initialize.apply(this, arguments);
    }
});

// Arithmetic comparisons fused with constants
const CompareConst = BaseCompareConst.define('CompareConst', {}, {
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const constant = this.get('constant');
        if (!data.in.isFullyDefined)
            return { out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.x };
        if (this.get('leftOp'))
            return {
                out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromBool(this.arithcomp(
                    BigInt(constant),
                    data.in.toBigInt(sgn.in)))
            }
        else
            return {
                out: _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromBool(this.arithcomp(
                    data.in.toBigInt(sgn.in), 
                    BigInt(constant)))
            };
    },
    _operationHelpers: BaseCompareConst.prototype._operationHelpers.concat(['arithcomp'])
});

// Equality operations fused with constants
const EqCompareConst = BaseCompareConst.define('EqCompareConst', {}, {
    operation(data) {
        const bits = this.get('bits');
        const sgn = this.get('signed');
        const constant = this.get('constant');
        if (this.get('leftOp'))
            return {
                out: this.bincomp(_3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(constant, bits.in), data.in)
            };
        else
            return {
                out: this.bincomp(data.in, _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.fromNumber(constant, bits.in))
            };
    },
    _operationHelpers: BaseCompareConst.prototype._operationHelpers.concat(['bincomp'])
});

// Addition with constant
const AdditionConst = ArithConst.define('AdditionConst', {}, {
    operSymbol: '+',
    arithop: (i, j) => i + j
});
const AdditionConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Subtraction with constant
const SubtractionConst = ArithConst.define('SubtractionConst', {}, {
    operSymbol: '-',
    arithop: (i, j) => i - j
});
const SubtractionConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Multiplication with constant
const MultiplicationConst = ArithConst.define('MultiplicationConst', {}, {
    operSymbol: '×',
    arithop: (i, j) => i * j
});
const MultiplicationConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Division with constant
const DivisionConst = ArithConst.define('DivisionConst', {}, {
    operSymbol: '÷',
    arithop: (i, j) => j == 0n ? i : i / j // as in IEEE Verilog
});
const DivisionConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Modulo with constant
const ModuloConst = ArithConst.define('ModuloConst', {}, {
    operSymbol: '%',
    arithop: (i, j) => j == 0n ? i : i % j // as in IEEE Verilog
});
const ModuloConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Power with constant
const PowerConst = ArithConst.define('PowerConst', {}, {
    operSymbol: '^',
    arithop: (i, j) => j >= 0n ? i ** j : i == 1n ? 1n : i == -1n ? (j % 2n ? -1n : 1n) : 0n
});
const PowerConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Shift left operator
const ShiftLeftConst = ShiftConst.define('ShiftLeftConst', {}, {
    operSymbol: '≪',
    shiftdir: -1
});
const ShiftLeftConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Shift right operator
const ShiftRightConst = ShiftConst.define('ShiftRightConst', {}, {
    operSymbol: '≫',
    shiftdir: 1
});
const ShiftRightConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const LtConst = CompareConst.define('LtConst', {}, {
    operSymbol: '<',
    arithcomp: (i, j) => i < j
});
const LtConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const LeConst = CompareConst.define('LeConst', {}, {
    operSymbol: '≤',
    arithcomp: (i, j) => i <= j
});
const LeConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const GtConst = CompareConst.define('GtConst', {}, {
    operSymbol: '>',
    arithcomp: (i, j) => i > j
});
const GtConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Less than operator
const GeConst = CompareConst.define('GeConst', {}, {
    operSymbol: '≥',
    arithcomp: (i, j) => i >= j
});
const GeConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Equality operator
const EqConst = EqCompareConst.define('EqConst', {}, {
    operSymbol: '=',
    bincomp: (i, j) => i.xnor(j).reduceAnd()
});
const EqConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Nonequality operator
const NeConst = EqCompareConst.define('NeConst', {}, {
    operSymbol: '≠',
    bincomp: (i, j) => i.xor(j).reduceOr()
});
const NeConstView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;



/***/ },

/***/ "./src/cells/base.mjs"
/*!****************************!*\
  !*** ./src/cells/base.mjs ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* binding */ Box),
/* harmony export */   BoxView: () => (/* binding */ BoxView),
/* harmony export */   Gate: () => (/* binding */ Gate),
/* harmony export */   GateView: () => (/* binding */ GateView),
/* harmony export */   Wire: () => (/* binding */ Wire),
/* harmony export */   WireView: () => (/* binding */ WireView),
/* harmony export */   portGroupAttrs: () => (/* binding */ portGroupAttrs)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/shapes/standard.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/Element.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/ElementView.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/LinkView.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/ToolsView.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/linkTools/Vertices.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/g/point.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");
/* harmony import */ var _tools_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools.mjs */ "./src/tools.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");







const portGroupAttrs = {
    wire: {
        stroke: '#4B4F6A',
        x1: 0, y1: 0,
        x2: undefined, y2: 0
    },
    port: {
        magnet: undefined,
        r: 7,
        stroke: 'black',
        fill: 'white',
        strokeWidth: 2,
        strokeOpacity: 0.5
    },
    bits: {
        ref: 'port',
        fill: 'black',
        fontSize: '7pt'
    },
    iolabel: {
        textVerticalAnchor: 'middle',
        fill: 'black',
        fontSize: '8pt'
    },
    decor: {
        stroke: 'black',
        fill: 'transparent'
    }
};

// Common base class for gate models
const Gate = _joint_core__WEBPACK_IMPORTED_MODULE_1__.Element.define('Gate', {
    /* default properties */
    propagation: 1,
    label: '',

    size: { width: 80, height: 30 },
    inputSignals: {},
    outputSignals: {},
    attrs: {
        '.': { magnet: false },
        body: { stroke: 'black', strokeWidth: 2 },
        label: {
            refX: .5, refDy: 3,
            textAnchor: 'middle',
            fontSize: '8pt',
            fill: 'black'
        }
    },
    ports: {
        groups: {
            'in': {
                position: 'left',
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_6__.merge({}, portGroupAttrs, {
                    wire: { x2: -25 },
                    port: { magnet: 'passive', refX: -25 },
                    bits: { refDx: 1, refY: -3, textAnchor: 'start' },
                    iolabel: { refX: 5, textAnchor: 'start' }
                })
            },
            'out': {
                position: 'right',
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_6__.merge({}, portGroupAttrs, {
                    wire: { x2: 25 },
                    port: { magnet: true, refX: 25 },
                    bits: { refX: -1, refY: -3, textAnchor: 'end' },
                    iolabel: { refX: -5, textAnchor: 'end' }
                })
            }
        }
    },

    z: 1
}, {
    operation() {
        return {};
    },
    initialize() {
        // pre-process ports
        const ports = this.get('ports');
        if (ports.items) {
            this._preprocessPorts(ports.items);
        }
        _joint_core__WEBPACK_IMPORTED_MODULE_1__.Element.prototype.initialize.apply(this, arguments);
        this.prepare();

        this.bindAttrToProp('label/text', 'label');
        if (this._unsupportedPropChanges.length > 0) {
            this.on(this._unsupportedPropChanges.map(prop => 'change:'+prop).join(' '), (__, ___, opt) => {
                if (opt.init) return;

                const changed = _joint_core__WEBPACK_IMPORTED_MODULE_6__.intersection(Object.keys(this.changed), this._unsupportedPropChanges);
                changed.forEach(attr => {
                    this.set(attr, this.previous(attr), {init: true});
                });
                console.warn('Beta property change support: "' + changed + '" changes on ' + this.get('type') + ' are (currently) not supported.');
            });
        }
    },
    prepare() {
    },
    bindAttrToProp(attr, prop) {
        this.attr(attr, this.get(prop));
        this.on('change:' + prop, (_, val) => this.attr(attr, val));
    },

    /*
     * Private methods.
     */
    _changeOutputSignals(sigs) {
        this.graph.getConnectedLinks(this, {outbound: true})
            .forEach(wire => {
                wire.set('signal', sigs[wire.get('source').port]);
            });
    },
    _setInput(sig, port) {
        const signals = _joint_core__WEBPACK_IMPORTED_MODULE_6__.clone(this.get('inputSignals'));
        signals[port] = sig;
        this.set('inputSignals', signals);
    },
    _clearInput(port) {
        const bits = this.getPort(port).bits;
        this._setInput(_3vl__WEBPACK_IMPORTED_MODULE_8__.Vector3vl.xes(bits), port);
    },
    _preprocessPorts(ports) {
        this._resetPortsSignals(ports);
        for (const port of ports) {
            port.attrs = {};
            port.attrs['bits'] = { text: this._getBitsText(port.bits) }
            if (port.labelled) {
                const iolabel = { text: 'portlabel' in port ? port.portlabel : port.id };
                if (port.polarity === false)
                    iolabel['text-decoration'] = 'overline';
                if (port.decor) {
                    console.assert(port.group == 'in');
                    iolabel['refX'] = 10;
                }
                port.attrs['iolabel'] = iolabel;
            }
            if (port.decor) {
                port.attrs['decor'] = { d: port.decor };
            }
        }
    },
    _setPortsBits(portsBits) {
        const ports = _joint_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep(this.get('ports'));
        const portsReset = [];
        for (const portid in portsBits) {
            const bits = portsBits[portid];
            const port = ports.items.find(function(port) {
                return port.id && port.id === portid;
            });
            port.bits = bits;
            port.attrs['bits'].text = this._getBitsText(bits);
            portsReset.push(port);
        }
        this._resetPortsSignals(portsReset);
        //trigger port changes on model and view
        this.set('ports', ports);
        this.graph.getConnectedLinks(this, { outbound: true })
            .filter((wire) => wire.get('source').port in portsBits)
            .forEach((wire) => wire._changeSource(wire.get('source')));
        this.graph.getConnectedLinks(this, { inbound: true })
            .filter((wire) => wire.get('target').port in portsBits)
            .forEach((wire) => wire._changeTarget(wire.get('target')));
    },
    _getBitsText(bits) {
        return bits > 1 ? bits : '';
    },
    _resetPortValue(port) {
        return _3vl__WEBPACK_IMPORTED_MODULE_8__.Vector3vl.xes(port.bits);
    },
    _resetPortsSignals(ports) {
        const signals = {
            in: this.get('inputSignals'),
            out: this.get('outputSignals')
        }

        for (const port of ports) {
            console.assert(port.bits >= 0);
            signals[port.dir][port.id] = this._resetPortValue(port);
        }

        this.set('inputSignals', signals.in);
        this.set('outputSignals', signals.out);
    },
    _removePortsSignals(ports) {
        const signals = {
            in: this.get('inputSignals'),
            out: this.get('outputSignals')
        }

        for (const port of ports) {
            delete signals[port.dir][port.id];
        }

        this.set('inputSignals', signals.in);
        this.set('outputSignals', signals.out);
    },

    /*
     * JointJS port interface with custom hooks to adapt signals.
     */
    addPort(port) {
        this.addPorts([port]);
    },
    addPorts(ports) {
        this._preprocessPorts(ports);
        _joint_core__WEBPACK_IMPORTED_MODULE_1__.Element.prototype.addPorts.apply(this, arguments);
    },
    removePort(port, opt) {
        this.removePorts([port]);
    },
    removePorts(ports, opt) {
        this._removePortsSignals(ports);
        _joint_core__WEBPACK_IMPORTED_MODULE_1__.Element.prototype.removePorts.apply(this, arguments);
    },

    /*
     * Layout methods.
     */
    _getStackedPosition(opt) {
        return function(portsArgs, elBBox) {
            // ports stacked from top to bottom or left to right
            const side = opt.side || 'left';
            const step = opt.step || 16;
            const offset = opt.offset || 12;
            const x = side == 'left' ? elBBox.topLeft().x : side == 'right' ? elBBox.topRight().x : undefined;
            const y = side == 'top' ? elBBox.topLeft().y : side == 'bottom' ? elBBox.bottomRight().y : undefined;
            if (x !== undefined) {
                return portsArgs.map((portArgs, index) => {
                    index += portArgs.idxOffset || 0;
                    return _joint_core__WEBPACK_IMPORTED_MODULE_7__.Point({ x: x, y: index*step + offset });
                });
            } else {
                return portsArgs.map((portArgs, index) => {
                    index += portArgs.idxOffset || 0;
                    return _joint_core__WEBPACK_IMPORTED_MODULE_7__.Point({ x: index*step + offset, y: y });
                });
            }
        }
    },
    getLayoutSize() {
        return this.size();
    },
    setLayoutPosition(position) {
        this.set('position', {
            x: position.x,
            y: position.y
        });
    },

    /*
     * View Markup.
     */
    portMarkup: [{
        tagName: 'line',
        className: 'wire',
        selector: 'wire'
    }, {
        tagName: 'circle',
        className: 'port',
        selector: 'port'
    }, {
        tagName: 'text',
        className: 'bits',
        selector: 'bits'
    }, {
        tagName: 'text',
        className: 'iolabel',
        selector: 'iolabel'
    }, {
        tagName: 'path',
        className: 'decor',
        selector: 'decor'
    }],
    //portLabelMarkup: null, //todo: see https://github.com/clientIO/joint/issues/1278
    markup: [{
        tagName: 'text',
        className: 'label',
        selector: 'label'
    }],

    /*
     * Gate parameters for serialization.
     */
    getGateParams(layout) {
        return _joint_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep(_joint_core__WEBPACK_IMPORTED_MODULE_6__.pick(this.attributes, this._gateParams.concat(layout ? this._gateLayoutParams : [])));
    },
    _gateParams: ['label', 'type', 'propagation', 'source_positions'],
    _gateLayoutParams: ['position'],
    _unsupportedPropChanges: [],
    _operationHelpers: [],
    _presentationParams: [],
    _gateKind: 'combinational'
});

const GateView = _joint_core__WEBPACK_IMPORTED_MODULE_2__.ElementView.extend({
    attrs: {
        signal: {
            high: { port: { 'stroke': '#03c03c' } },
            low: { port: { 'stroke': '#fc7c68' } },
            def: { port: { 'stroke': '#779ecb' } },
            undef: { port: { 'stroke': '#999' } }
        }
    },
    presentationAttributes: _joint_core__WEBPACK_IMPORTED_MODULE_2__.ElementView.addPresentationAttributes({
        inputSignals: 'SIGNAL',
        outputSignals: 'SIGNAL2'
    }),
    stopprop(evt) {
        evt.stopPropagation();
    },
    confirmUpdate(flags) {
        if (this.hasFlag(flags, 'SIGNAL')) {
            this._updatePortSignals('in');
        }
        if (this.hasFlag(flags, 'SIGNAL2')) {
            this._updatePortSignals('out');
        }
        _joint_core__WEBPACK_IMPORTED_MODULE_2__.ElementView.prototype.confirmUpdate.apply(this, arguments);
    },
    _updatePortSignals(dir) {
        const signals =
            dir === 'in' ? this.model.get('inputSignals') :
            dir === 'out' ? this.model.get('outputSignals') :
            _joint_core__WEBPACK_IMPORTED_MODULE_6__.merge({}, this.model.get('inputSignals'), this.model.get('outputSignals'));
        for (const port in signals) {
            const signal = signals[port];
            const attrs = this.attrs.signal[
                !signal.isDefined ? 'undef' :
                signal.isHigh ? 'high' :
                signal.isLow ? 'low' : 'def'
            ];
            this._applyPortAttrs(port, attrs);
        }
    },
    _applyAttrs(attrs) {
        for (const selector in attrs) {
            const node = this.selectors[selector];
            this.setNodeAttributes(node, attrs[selector]);
        }
    },
    _applyPortAttrs(port, attrs) {
        if (port in this._portElementsCache) {
            for (const selector in attrs) {
                const node = this._portElementsCache[port].portSelectors[selector];
                this.setNodeAttributes(node, attrs[selector]);
            }
        }
    },
    // overrides joint.dia.ElementView.prototype._updatePorts to reflect port signals
    _updatePorts() {
        _joint_core__WEBPACK_IMPORTED_MODULE_2__.ElementView.prototype._updatePorts.apply(this, arguments);
        this._updatePortSignals();
    }
});

// Connecting wire model
const Wire = _joint_core__WEBPACK_IMPORTED_MODULE_0__.Link.define('Wire', {
    attrs: {
        line: {
            class: 'connection',
            targetMarker: null
        },
        wrapper: {
            stroke: 'red'
        }
    },

    signal: _3vl__WEBPACK_IMPORTED_MODULE_8__.Vector3vl.xes(1),
    bits: 1,
    warning: false,

    // show behind gates
    z: 0
}, {
    initialize() {
        _joint_core__WEBPACK_IMPORTED_MODULE_0__.Link.prototype.initialize.apply(this, arguments);
        if (this.has('netname')) {
            this.label(0, {
                markup: [
                    {
                        tagName: 'text',
                        selector: 'label'
                    }
                ],
                attrs: {
                    label: {
                        text: this.get('netname'),
                        fill: 'black',
                        fontSize: '8pt'
                    }
                },
                position: {
                    distance: 0.5
                }
            });
        }
    },
    onAdd() {
        this._changeSource(this.get('source'));
        this._was_added = true; // hacky fix for warnings calculation
    },
    remove() {
        const tar = this.get('target');
        const target = this.graph.getCell(tar.id);
        if (target && 'port' in tar) {
            target._clearInput(tar.port);
        }
        _joint_core__WEBPACK_IMPORTED_MODULE_0__.Link.prototype.remove.apply(this, arguments);
    },

    /*
     * Private methods.
     */
    _propagateSignal(tar, sig) {
        const target = this.getTargetElement();
        if (target) {
            if (this.get('warning'))
                target._clearInput(tar.port);
            else
                target._setInput(sig, tar.port);
        }
    },
    _changeSignal(sig) {
        this._propagateSignal(this.get('target'), sig);
    },
    _changeSource(src) {
        const source = this.getSourceElement();
        if (source && 'port' in src) {
            this.set('bits', source.getPort(src.port).bits);
            this._checkConnection();
            //set signal after checking connection to avoid false signal propagation
            this.set('signal', source.get('outputSignals')[src.port]);
        } else {
            this.set('signal', _3vl__WEBPACK_IMPORTED_MODULE_8__.Vector3vl.xes(this.get('bits')));
        }
    },
    _changeTarget(tar) {
        this._checkConnection();
        if ('port' in tar) {
            this._propagateSignal(tar, this.get('signal'));
        }
        if (!this.hasChanged('target')) return;
        const preTar = this.previous('target');
        const preTarget = this.graph.getCell(preTar.id);
        if (preTarget && 'port' in preTar) {
            preTarget._clearInput(preTar.port);
        }
    },
    _checkConnection() {
        const tar = this.get('target');
        const target = this.graph.getCell(tar.id);
        this.set('warning', (target && target.getPort(tar.port).bits !== this.get('bits')) || false, {silent: !this._was_added});
    },

    /*
     * Wire parameters for serialization.
     */
    getWireParams(layout) {
        const connector = {
            from: {
                id: this.get('source').id,
                port: this.get('source').port
            },
            to: {
                id: this.get('target').id,
                port: this.get('target').port
            }
        };
        if (this.has('netname'))
            connector.name = this.get('netname');
        if (layout && this.has('vertices') && this.get('vertices').length > 0)
            connector.vertices = _joint_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep(this.get('vertices'));
        return connector;
    },
    getWirePath() {
        const hier = [];
        for (let sc = this.graph.get('subcircuit'); sc != null; sc = sc.graph.get('subcircuit')) {
            if (!sc.has('label')) return null;
            hier.push(sc.get('label'));
        }
        return hier.reverse();
    }
});

const WireView = _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.extend({
    initFlag: _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.initFlag.concat(['INIT']),
    longWireLength: 400,
    attrs: {
        signal: {
            high: { line: { 'stroke': '#03c03c' } },
            low: { line: { 'stroke': '#fc7c68' } },
            def: { line: { 'stroke': '#779ecb' } },
            undef: { line: { 'stroke': '#999' } }
        },
        bits: {
            bus: { line: { 'stroke-width': '4px' } },
            single: { line: { 'stroke-width': '2px' } }
        },
        warning: {
            warn: { wrapper: { 'stroke-opacity': '0.5' } },
            none: { wrapper: { 'stroke-opacity': '0' } }
        }
    },
    // only instantiate toolsView in browser-environment
    _wireToolsView: (typeof window !== 'undefined') ? new _joint_core__WEBPACK_IMPORTED_MODULE_4__.ToolsView({
        tools: [
            new _joint_core__WEBPACK_IMPORTED_MODULE_5__.Vertices({ focusOpacity: 0.5 }),
            //new joint.linkTools.Segments({ focusOpacity: 0.5 }), //todo: problem with signal reset ??,
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.CircleSourceArrowhead(),
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.CircleTargetArrowhead(),
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.RemoveButton({ distanceShort: '75%', distanceLong: '50' }),
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.RemoveButton({ distance: '-50', secondary: true }),
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.MonitorButton({ distanceShort: '25%', distanceLong: '30' }),
            new _tools_mjs__WEBPACK_IMPORTED_MODULE_9__.MonitorButton({ distance: '-30', secondary: true })
        ]
    }) : null,
    presentationAttributes: _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.addPresentationAttributes({
        signal: 'SIGNAL',
        bits: 'BITS',
        warning: 'WARNING'
    }),
    initialize() {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.initialize.apply(this, arguments);
        this.prevModels = { source: null, target: null };
    },
    confirmUpdate(flags) {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL')) {
            this._updateSignal();
        }
        if (this.hasFlag(flags, 'BITS')) {
            this._updateBits();
        }
        if (this.hasFlag(flags, 'WARNING')) {
            this._updateWarning();
        }
    },

    isShortWire() {
        return this.getConnectionLength() < this.longWireLength;
    },
    _updateSignal() {
        const signal = this.model.get('signal');
        const attrs = this.attrs.signal[
            !signal.isDefined ? 'undef' :
            signal.isHigh ? 'high' :
            signal.isLow ? 'low' : 'def'
        ];
        this._applyAttrs(attrs);
    },
    _updateBits() {
        const bits = this.model.get('bits');
        const attrs = this.attrs.bits[
            bits > 1 ? 'bus' : 'single'
        ];
        this._applyAttrs(attrs);
    },
    _updateWarning() {
        const warning = this.model.get('warning');
        const attrs = this.attrs.warning[
            warning ? 'warn' : 'none'
        ];
        this._applyAttrs(attrs);
    },
    _applyAttrs(attrs) {
        for (const selector in attrs) {
            const node = this.selectors[selector];
            this.setNodeAttributes(node, attrs[selector]);
        }
    },

    update() {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.update.apply(this, arguments);
        this._updateSignal();
        this._updateBits();
        this._updateWarning();
    },
    onRemove() {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.onRemove.apply(this, arguments);
        this._removeTooltip();
    },

    mouseenter(evt) {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.mouseenter.apply(this, arguments);
        this.addTools(this._wireToolsView);
        this._addTooltip({x: evt.clientX + 5, y: evt.clientY + 5 });
    },
    mouseleave(evt) {
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.mouseleave.apply(this, arguments);
        this.removeTools();
        this._removeTooltip();
    },

    /*
     * Display current value on wire in tooltip.
     */
    _addTooltip(pos) {
        if (this.model.get('bits') == 1) return;
        if (this.wire_hover) return;
        this.wire_hover = jquery__WEBPACK_IMPORTED_MODULE_10__('<div class="wire_hover">')
            .css('left', pos.x)
            .css('top', pos.y)
            .appendTo(jquery__WEBPACK_IMPORTED_MODULE_10__(document.body));
        this._generateTextForTooltip();
        this.listenTo(this.model, 'change:signal', this._generateTextForTooltip);
    },
    _removeTooltip() {
        if (this.wire_hover) {
            this.wire_hover.remove();
            this.wire_hover = null;
            this.stopListening(this.model, 'change:signal', this._generateTextForTooltip);
        }
    },
    _generateTextForTooltip() {
        if (!this.wire_hover) return;
        const sig = this.model.get('signal');
        const display3vl = this.model.graph._display3vl;
        const hovertext = [
            'Hex: ' + display3vl.show('hex', sig) + '<br>',
            'Dec: ' + display3vl.show('dec', sig) + '<br>',
            'Oct: ' + display3vl.show('oct', sig) + '<br>',
            'Bin: ' + display3vl.show('bin', sig)
        ].join('');
        this.wire_hover.html(hovertext);
    },

    // Quick-and-dirty performance fix
    onEndModelChange(endType, endModel, opt) {
        if (typeof endModel == 'object' && endModel != null &&
            endModel == this.prevModels[endType] &&
            Object.keys(endModel.changed).length > 0 &&
            !('position' in endModel.changed)) return;
        _joint_core__WEBPACK_IMPORTED_MODULE_3__.LinkView.prototype.onEndModelChange.apply(this, arguments);
        this.prevModels[endType] = endModel;
    }
});

// base class for gates displayed as a box
const Box = Gate.define('Box', {
    attrs: {
        body: { refWidth: 1, refHeight: 1 },
        tooltip: { refX: 0, refY: -30, height: 30 }
    }
}, {
    initialize() {
        Gate.prototype.initialize.apply(this, arguments);
        this.on('change:size', (_, size) => {
            if (size.width > this.tooltipMinWidth) {
                this.attr('tooltip', { refWidth: 1, width: null });
            } else {
                this.attr('tooltip', { refWidth: null, width: this.tooltipMinWidth });
            }
        });
        this.trigger('change:size', this, this.prop('size'));
    },
    markup: Gate.prototype.markup.concat([{
            tagName: 'rect',
            className: 'body',
            selector: 'body'
        }
    ]),
    markupZoom: [{
        tagName: 'foreignObject',
        className: 'tooltip',
        selector: 'tooltip',
        children: [{
            tagName: 'body',
            namespaceURI: 'http://www.w3.org/1999/xhtml',
            children: [{
                tagName: 'a',
                className: 'zoom',
                textContent: '🔍',
                style: { cursor: 'pointer' }
            }]
        }]
    }],
    tooltipMinWidth: 20,
    decorClock: 'M' + [
                    [0, -6],
                    [6, 0],
                    [0, 6]
                ].map(l => l.join(' ')).join(' L')
});

const BoxView = GateView.extend({
    _autoResizeBox: false,
    render() {
        //todo: resize Box after port label / IO name / mode / bit size change
        GateView.prototype.render.apply(this, arguments);
        if (this._autoResizeBox && !this.model.get('box_resized')) {
            this.model.set('box_resized', true);
            this.model.prop('size/width', this._calculateBoxWidth());
        }
    },
    _calculateBoxWidth() {
        const leftlabels = Array.from(this.el.querySelectorAll('[port-group=in] > text.iolabel'));
        const rightlabels = Array.from(this.el.querySelectorAll('[port-group=out] > text.iolabel'));
        const leftwidth = Math.max(...leftlabels.map(x => x.getBBox().width));
        const rightwidth = Math.max(...rightlabels.map(x => x.getBBox().width));
        const fixup = x => x == -Infinity ? -5 : x;
        const width = fixup(leftwidth) + fixup(rightwidth) + 25;
        return width;
    }
});



/***/ },

/***/ "./src/cells/bus.mjs"
/*!***************************!*\
  !*** ./src/cells/bus.mjs ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitExtend: () => (/* binding */ BitExtend),
/* harmony export */   BitExtendView: () => (/* binding */ BitExtendView),
/* harmony export */   BusGroup: () => (/* binding */ BusGroup),
/* harmony export */   BusGroupView: () => (/* binding */ BusGroupView),
/* harmony export */   BusRegroup: () => (/* binding */ BusRegroup),
/* harmony export */   BusRegroupView: () => (/* binding */ BusRegroupView),
/* harmony export */   BusSlice: () => (/* binding */ BusSlice),
/* harmony export */   BusSliceView: () => (/* binding */ BusSliceView),
/* harmony export */   BusUngroup: () => (/* binding */ BusUngroup),
/* harmony export */   BusUngroupView: () => (/* binding */ BusUngroupView),
/* harmony export */   SignExtend: () => (/* binding */ SignExtend),
/* harmony export */   SignExtendView: () => (/* binding */ SignExtendView),
/* harmony export */   ZeroExtend: () => (/* binding */ ZeroExtend),
/* harmony export */   ZeroExtendView: () => (/* binding */ ZeroExtendView)
/* harmony export */ });
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");





// Bit extending
const BitExtend = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.define('BitExtend', {
    /* default properties */
    extend: { input: 1, output: 1 },
    propagation: 0,
    
    attrs: {
        value: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle'
        }
    }
}, {
    initialize() {
        const extend = this.get('extend');
        console.assert(extend.input <= extend.output);
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: extend.input },
            { id: 'out', group: 'out', dir: 'out', bits: extend.output }
        ];
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype.initialize.apply(this, arguments);
        
        this.on('change:extend', (_, extend) => {
            this._setPortsBits({ in: extend.input, out: extend.output });
        });
    },
    operation(data) {
        const ex = this.get('extend');
        return { out: data.in.concat(_3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.make(ex.output - ex.input, this._extBit(data.in))) };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype.markup.concat([{
            tagName: 'text',
            className: 'value',
            selector: 'value'
        }
    ]),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype._gateParams.concat(['extend']),
    _operationHelpers: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype._operationHelpers.concat(['_extBit']),
    _gateKind: 'bus'
});
const BitExtendView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.BoxView.extend({
    _autoResizeBox: true,
    _calculateBoxWidth() {
        const text = this.el.querySelector('text.value');
        return text.getBBox().width + 10;
    }
});

const ZeroExtend = BitExtend.define('ZeroExtend', {
    attrs: {
        value: { text: 'zero-extend' }
    }
}, {
    _extBit(i) {
        return -1;
    }
});
const ZeroExtendView = BitExtendView;

const SignExtend = BitExtend.define('SignExtend', {
    attrs: {
        value: { text: 'sign-extend' }
    }
}, {
    _extBit(i) {
        return i.get(i.bits - 1);
    }
});
const SignExtendView = BitExtendView;

// Bus slicing
const BusSlice = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.define('BusSlice', {
    /* default properties */
    slice: { first: 0, count: 1, total: 2 },
    propagation: 0,
    
    size: { width: 40, height: 24 }
}, {
    initialize() {
        const slice = this.get('slice');
        
        const val = slice.count == 1 ? slice.first : 
            slice.first + "-" + (slice.first + slice.count - 1);
        
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: slice.total },
            { id: 'out', group: 'out', dir: 'out', bits: slice.count, portlabel: val, labelled: true }
        ];
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype.initialize.apply(this, arguments);
        
        this.on('change:slice', (_, slice) => {
            this._setPortsBits({ in: slice.total, out: slice.count });
        });
    },
    operation(data) {
        const s = this.get('slice');
        return { out: data.in.slice(s.first, s.first + s.count) };
    },
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype._gateParams.concat(['slice']),
    _gateKind: 'bus'
});
const BusSliceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.BoxView.extend({
    _autoResizeBox: true
});

// Bus grouping
const BusRegroup = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.define('BusRegroup', {
    /* default properties */
    groups: [1],
    propagation: 0,

    size: { width: 40, height: undefined }
}, {
    initialize() {
        var bits = 0;
        const ports = [];
        const groups = this.get('groups');
        
        this.get('size').height = groups.length*16+8;
        
        for (const [num, gbits] of groups.entries()) {
            const lbl = bits + (gbits > 1 ? '-' + (bits + gbits - 1) : '');
            bits += gbits;
            ports.push({ id: this.group_dir + num, group: this.group_dir, dir: this.group_dir, bits: gbits, portlabel: lbl, labelled: true });
        }
        this.set('bits', bits);
        
        const contra = this.group_dir == 'out' ? 'in' : 'out';
        ports.push({ id: contra, group: contra, dir: contra, bits: bits });
        this.get('ports').items = ports;
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype.initialize.apply(this, arguments);
    },
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype._gateParams.concat(['groups']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Box.prototype._unsupportedPropChanges.concat(['groups']),
    _gateKind: 'bus'
});
const BusRegroupView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.BoxView.extend({
    _autoResizeBox: true
});

const BusGroup = BusRegroup.define('BusGroup', {
}, {
    group_dir : 'in',
    operation(data) {
        const outdata = [];
        for (const num of this.get('groups').keys()) {
            outdata.push(data['in' + num]);
        }
        return { out : _3vl__WEBPACK_IMPORTED_MODULE_1__.Vector3vl.concat(...outdata) };
    }
});
const BusGroupView = BusRegroupView;

const BusUngroup = BusRegroup.define('BusUngroup', {
}, {
    group_dir : 'out',
    operation(data) {
        const outdata = {};
        let pos = 0;
        for (const [num, gbits] of this.get('groups').entries()) {
            outdata['out' + num] = data.in.slice(pos, pos + gbits);
            pos += gbits;
        }
        return outdata;
    }
});
const BusUngroupView = BusRegroupView;



/***/ },

/***/ "./src/cells/dff.mjs"
/*!***************************!*\
  !*** ./src/cells/dff.mjs ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DFF: () => (/* binding */ DFF),
/* harmony export */   DFFView: () => (/* binding */ DFFView),
/* harmony export */   Dff: () => (/* binding */ Dff),
/* harmony export */   DffView: () => (/* binding */ DffView)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");






// D flip-flops
const Dff = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.define('Dff', {
    /* default properties */
    bits: 1,
    initial: 'x',

    size: { width: 80, height: undefined },
    ports: {
        groups: {
            'in': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'left' })
            },
            'out': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'right' })
            }
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        const initial = this.get('initial');
        const polarity = this.get('polarity') || {};
        
        const ports = [];
       
        if (!this.get('no_data'))
            ports.push({ id: 'in', group: 'in', dir: 'in', bits: bits, portlabel: 'D', labelled: true });
        ports.push({ id: 'out', group: 'out', dir: 'out', bits: bits, portlabel: 'Q', labelled: true });
        if (this.get('has_qn'))
            ports.push({ id: 'out_n', group: 'out', dir: 'out', bits: bits, portlabel: 'Q', polarity: false, labelled: true });
        
        if ('arst' in polarity && !this.get('arst_value'))
            this.set('arst_value', Array(bits).fill('0').join(''));
        
        if ('srst' in polarity && !this.get('srst_value'))
            this.set('srst_value', Array(bits).fill('0').join(''));

        let num = 1;
        if ('aload' in polarity) {
            num += 2;
            ports.push({ id: 'ain', group: 'in', dir: 'in', bits: bits, portlabel: 'AD', labelled: true });
            ports.push({ id: 'aload', group: 'in', dir: 'in', bits: 1, polarity: polarity.aload, labelled: true });
        }
        if ('clock' in polarity) {
            num++;
            ports.push({ id: 'clk', group: 'in', dir: 'in', bits: 1, polarity: polarity.clock, portlabel: 'CK', decor: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.decorClock, labelled: true });
        }
        if ('set' in polarity) {
            num++;
            ports.push({ id: 'set', group: 'in', dir: 'in', bits: bits, polarity: polarity.set, portlabel: 'S', labelled: true });
        }
        if ('clr' in polarity) {
            num++;
            ports.push({ id: 'clr', group: 'in', dir: 'in', bits: bits, polarity: polarity.clr, portlabel: 'R', labelled: true });
        }
        if ('srst' in polarity) {
            num++;
            ports.push({ id: 'srst', group: 'in', dir: 'in', bits: 1, polarity: polarity.srst, labelled: true });
        }
        if ('arst' in polarity) {
            num++;
            ports.push({ id: 'arst', group: 'in', dir: 'in', bits: 1, polarity: polarity.arst, labelled: true });
        }
        if ('enable' in polarity) {
            num++;
            ports.push({ id: 'en', group: 'in', dir: 'in', bits: 1, polarity: polarity.enable, labelled: true });
        }
        
        this.get('size').height = Math.max(num, this.get('has_qn') ? 2 : 1)*16+8;
        this.get('ports').items = ports;
        this.last_clk = 0;
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.initialize.apply(this, arguments);
    },
    _resetPortValue(port) {
        if (port.id == "out" && port.dir == "out")
            return _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(this.get('initial'), port.bits);
        else if (port.id == "out_n" && port.dir == "out")
            return _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(this.get('initial'), port.bits).not();
        else return _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._resetPortValue.call(this, port);
    },
    operation(data) {
        const polarity = this.get('polarity');
        const pol = what => polarity[what] ? 1 : -1
        let last_clk, srbits, srbitmask;
        const apply_sr = (v) => {
            const out = srbits ? v.and(srbitmask).or(srbits) : v;
            return this.get('has_qn') ? { out: out, out_n: out.not() } : { out: out };
        };
        if ('clock' in polarity) {
            last_clk = this.last_clk;
            this.last_clk = data.clk.get(0);
        }
        if ('arst' in polarity && data.arst.get(0) == pol('arst')) {
            const val = _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(this.get('arst_value'), this.get('bits'));
            return this.get('has_qn') ? { out: val, out_n: val.not() } : { out: val };
        }
        if ('aload' in polarity && data.aload.get(0) == pol('aload')) {
            return this.get('has_qn') ? { out: data.ain, out_n: data.ain.not() } : { out: data.ain };
        }
        if ('set' in polarity) {
            srbits = polarity.set ? data.set : data.set.not();
            srbitmask = polarity.set ? data.set.not() : data.set;
        }
        if ('clr' in polarity) {
            srbits = srbits ? srbits : _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.zeros(this.get('bits'));
            const clrbitmask = polarity.clr ? data.clr.not() : data.clr;
            srbitmask = srbitmask ? clrbitmask.and(srbitmask) : clrbitmask;
        }
        if ('enable' in polarity && data.en.get(0) != pol('enable') && this.get('enable_srst'))
            return apply_sr(this.get('outputSignals').out);
        if (!('clock' in polarity) || data.clk.get(0) == pol('clock') && last_clk == -pol('clock')) {
            if ('srst' in polarity && data.srst.get(0) == pol('srst'))
                return apply_sr(_3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(this.get('srst_value'), this.get('bits')));
            if ('enable' in polarity && data.en.get(0) != pol('enable') && !this.get('enable_srst'))
                return apply_sr(this.get('outputSignals').out);
            if (this.get('no_data'))
                return apply_sr(this.get('outputSignals').out);
            return apply_sr(data.in);
        } else return apply_sr(this.get('outputSignals').out);
    },
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._gateParams.concat(['polarity', 'bits', 'initial', 'arst_value', 'srst_value', 'enable_srst', 'no_data', 'has_qn']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._unsupportedPropChanges.concat(['polarity', 'bits', 'initial', 'arst_value', 'srst_value', 'enable_srst', 'no_data', 'has_qn']),
    _gateKind: 'stateful'
});
const DffView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.extend({
    _autoResizeBox: true
});

// Standard D flip-flop (inputs: D, CK, [optional CLR in alto, RESET in basso]; outputs: Q, ~Q)
const DFF = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.define('DFF', {
    /* default properties */
    bits: 1,
    initial: 'x',
    clock_polarity: true,

    size: { width: 100, height: 80 },
    ports: {
        groups: {
            'in': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'left', step: 28, offset: 26 }),
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_1__.portGroupAttrs, {
                    wire: { x2: -25 },
                    port: { magnet: 'passive', refX: -25 },
                    bits: { refDx: 1, refY: -3, textAnchor: 'start' },
                    iolabel: { refX: 5, textAnchor: 'start' }
                })
            },
            'out': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'right', step: 28, offset: 26 }),
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_1__.portGroupAttrs, {
                    wire: { x2: 25 },
                    port: { magnet: true, refX: 25 },
                    bits: { refX: -1, refY: -3, textAnchor: 'end' },
                    iolabel: { refX: -5, textAnchor: 'end' }
                })
            },
            'in_top': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'top', offset: 50 }),
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_1__.portGroupAttrs, {
                    wire: { x1: 0, y1: 0, x2: 0, y2: -25 },
                    port: { magnet: 'passive', refX: 0, refY: -25 },
                    bits: { refDx: 2, refDy: -2, textAnchor: 'start' },
                    iolabel: { textVerticalAnchor: 'top', refX: 0, refY: 6, textAnchor: 'middle' }
                })
            },
            'in_bottom': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'bottom', offset: 50 }),
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_1__.portGroupAttrs, {
                    wire: { x1: 0, y1: 0, x2: 0, y2: 25 },
                    port: { magnet: 'passive', refX: 0, refY: 25 },
                    bits: { refDx: 2, refDy: 2, textAnchor: 'start' },
                    iolabel: { textVerticalAnchor: 'bottom', refX: 0, refY: -6, textAnchor: 'middle' }
                })
            }
        }
    }
}, {
    initialize() {
        const bits = this.get('bits') || 1;
        const clock_polarity = this.get('clock_polarity') !== false;
        const connected = this.get('connectedPorts') || new Set();

        // Detect port naming style (Verilog style vs DigitalJS style)
        const d_id = connected.has('d') ? 'd' : (connected.has('in') ? 'in' : 'D');
        const clk_id = connected.has('clk') ? 'clk' : (connected.has('ck') ? 'ck' : 'CK');
        const q_id = connected.has('out') ? 'out' : (connected.has('q') ? 'q' : 'Q');
        const qn_id = connected.has('out_n') ? 'out_n' : (connected.has('qn') ? 'qn' : 'QN');

        // Check for Reset (in basso / bottom)
        const rst_candidates = ['RESET', 'reset', 'RES', 'res', 'A_RESET', 'a_reset', 'arst'];
        const found_rst = rst_candidates.find(name => connected.has(name));
        const has_rst = this.get('has_arst') || Boolean(found_rst);
        const rst_id = found_rst || 'RESET';

        // Check for CLR / SET (in alto / top)
        const clr_candidates = ['CLR', 'clr', 'CLEAR', 'clear'];
        const found_clr = clr_candidates.find(name => connected.has(name));
        const has_clr = this.get('has_clr') || Boolean(found_clr);
        const clr_id = found_clr || 'CLR';

        const set_candidates = ['SET', 'set', 'PRE', 'pre', 'PRESET'];
        const found_set = set_candidates.find(name => connected.has(name));
        const has_set = this.get('has_set') || Boolean(found_set);
        const set_id = found_set || 'SET';

        const has_top = has_clr || has_set;
        const has_bottom = has_rst;

        const ports = [
            { id: d_id, group: 'in', dir: 'in', bits: bits, portlabel: 'D', labelled: true },
            { id: clk_id, group: 'in', dir: 'in', bits: 1, polarity: clock_polarity, portlabel: 'CK', decor: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.decorClock, labelled: true },
            { id: q_id, group: 'out', dir: 'out', bits: bits, portlabel: 'Q', labelled: true },
            { id: qn_id, group: 'out', dir: 'out', bits: bits, portlabel: 'Q', polarity: false, labelled: true }
        ];

        // Add CLR or SET to in_top (in alto)
        if (has_clr) {
            ports.push({ id: clr_id, group: 'in_top', dir: 'in', bits: 1, portlabel: 'CLR', labelled: true });
        } else if (has_set) {
            ports.push({ id: set_id, group: 'in_top', dir: 'in', bits: 1, portlabel: 'S', labelled: true });
        }

        // Add RESET to in_bottom (in basso)
        if (has_rst) {
            ports.push({ id: rst_id, group: 'in_bottom', dir: 'in', bits: 1, portlabel: 'R', labelled: true });
        }

        this._portIds = {
            d: d_id,
            clk: clk_id,
            q: q_id,
            qn: qn_id,
            rst: has_rst ? rst_id : null,
            clr: has_clr ? clr_id : null,
            set: has_set ? set_id : null
        };

        const groups = this.get('ports').groups;
        if (has_top || has_bottom) {
            this.get('size').width = 100;
            this.get('size').height = 80;
            groups['in'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'left', step: 28, offset: 26 });
            groups['out'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'right', step: 28, offset: 26 });
            groups['in_top'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'top', offset: 50 });
            groups['in_bottom'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'bottom', offset: 50 });
        } else {
            this.get('size').width = 80;
            this.get('size').height = 56;
            groups['in'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'left', step: 24, offset: 16 });
            groups['out'].position = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'right', step: 24, offset: 16 });
        }

        this.get('ports').items = ports;
        this.last_clk = 0;

        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.initialize.apply(this, arguments);

        // Explicitly set label positions for top/bottom ports to prevent label overlap
        for (const port of ports) {
            if (port.group === 'in_top') {
                this.portProp(port.id, 'attrs/iolabel/textVerticalAnchor', 'top');
                this.portProp(port.id, 'attrs/iolabel/refY', 6);
                this.portProp(port.id, 'attrs/iolabel/refX', 0);
                this.portProp(port.id, 'attrs/iolabel/textAnchor', 'middle');
            } else if (port.group === 'in_bottom') {
                this.portProp(port.id, 'attrs/iolabel/textVerticalAnchor', 'bottom');
                this.portProp(port.id, 'attrs/iolabel/refY', -6);
                this.portProp(port.id, 'attrs/iolabel/refX', 0);
                this.portProp(port.id, 'attrs/iolabel/textAnchor', 'middle');
            }
        }
    },
    _resetPortValue(port) {
        const bits = this.get('bits') || 1;
        const initial = this.get('initial') || 'x';
        const pids = this._portIds || { q: 'Q', qn: 'QN' };
        if (port.id === pids.q && port.dir === 'out')
            return _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(initial, bits);
        else if (port.id === pids.qn && port.dir === 'out')
            return _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromBin(initial, bits).not();
        else return _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._resetPortValue.call(this, port);
    },
    operation(data) {
        const pids = this._portIds || { d: 'D', clk: 'CK', q: 'Q', qn: 'QN' };
        const bits = this.get('bits') || 1;

        // Reset / Clear asynchronous priority
        if (pids.rst && data[pids.rst] && data[pids.rst].get(0) === 1) {
            return {
                [pids.q]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.zeros(bits),
                [pids.qn]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.ones(bits)
            };
        }
        if (pids.clr && data[pids.clr] && data[pids.clr].get(0) === 1) {
            return {
                [pids.q]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.zeros(bits),
                [pids.qn]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.ones(bits)
            };
        }
        if (pids.set && data[pids.set] && data[pids.set].get(0) === 1) {
            return {
                [pids.q]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.ones(bits),
                [pids.qn]: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.zeros(bits)
            };
        }

        const clock_polarity = this.get('clock_polarity') !== false;
        const last_clk = this.last_clk;
        const cur_clk = data[pids.clk] ? data[pids.clk].get(0) : 0;
        this.last_clk = cur_clk;

        const pol = clock_polarity ? 1 : -1;
        const triggered = (cur_clk === pol && last_clk === -pol);

        if (triggered && data[pids.d]) {
            return {
                [pids.q]: data[pids.d],
                [pids.qn]: data[pids.d].not()
            };
        } else {
            return {
                [pids.q]: this.get('outputSignals')[pids.q],
                [pids.qn]: this.get('outputSignals')[pids.qn]
            };
        }
    },
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._gateParams.concat(['bits', 'initial', 'clock_polarity', 'has_arst', 'has_clr', 'has_set']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._unsupportedPropChanges.concat(['bits', 'initial', 'clock_polarity', 'has_arst', 'has_clr', 'has_set']),
    _gateKind: 'stateful'
});
const DFFView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.extend({
    _autoResizeBox: false
});





/***/ },

/***/ "./src/cells/display7.mjs"
/*!********************************!*\
  !*** ./src/cells/display7.mjs ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display7: () => (/* binding */ Display7),
/* harmony export */   Display7View: () => (/* binding */ Display7View)
/* harmony export */ });
/* harmony import */ var _io_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io.mjs */ "./src/cells/io.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");



const highColor = '#03c03c';
const lowColor = '#3c3c3c';

/*
 * This is a standard 7-segment display element.
 * It is designed to take an 8-bit number as an input.
 *
 * The most significant bit determines the decimal point state (dp).
 * The following bits determine states of respectively: a,b,c,d,e,f,g
 * segments of the display. (g is determined by the least significant bit).
 *
 * The placement of single segments of the display can be checked
 * on the wikipedia page here:
 * https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_Segment_Display_with_Labeled_Segments.svg
 */
const Display7 = _io_mjs__WEBPACK_IMPORTED_MODULE_0__.IO.define('Display7',
{
  bits: 8,
  size: { width: 76.5, height: 110 },
  attrs: {
    LEDs: {
      fill: lowColor,
      transform: 'translate(1,1),scale(6)'
    },
    a: {
      points: '1, 1  2, 0  8, 0  9, 1  8, 2  2, 2'
    },
    b: {
      points: '9, 1 10, 2 10, 8  9, 9  8, 8  8, 2'
    },
    c: {
      points: '9, 9 10,10 10,16  9,17  8,16  8,10'
    },
    d: {
      points: '9,17  8,18  2,18  1,17  2,16  8,16'
    },
    e: {
      points: '1,17  0,16  0,10  1, 9  2,10  2,16'
    },
    f: {
      points: '1, 9  0, 8  0, 2  1, 1  2, 2  2, 8'
    },
    g: {
      points: '1, 9  2, 8  8, 8  9, 9  8,10  2,10'
    },
    dp: {
      cx: '11.3',
      cy: '16.9',
      r: '1.1'
    },
    body: {
      height: 'calc(h)',
      width: 'calc(w)',
      stroke: '#222222',
      fill: '#333333',
    }
  }
}, {
  isOutput: true,
  _portDirection: 'in',
  bits: 8,

  getOutput() {
    return this.get('inputSignals').in;
  },
  markupBus: _io_mjs__WEBPACK_IMPORTED_MODULE_0__.NumBase.prototype.markup.concat([
    {
      tagName: 'rect',
      selector: 'display'
    },
    {
      tagName: 'polygon',
      selector: 'a',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'b',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'c',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'd',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'e',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'f',
      groupSelector: 'LEDs'
    }, {
      tagName: 'polygon',
      selector: 'g',
      groupSelector: 'LEDs'
    }, {
      tagName: 'circle',
      selector: 'dp',
      groupSelector: 'LEDs'
    }]),
});

const Display7View = _io_mjs__WEBPACK_IMPORTED_MODULE_0__.IOView.extend({
  _autoResizeBox: false,

  confirmUpdate(flags) {
    _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.prototype.confirmUpdate.apply(this, arguments);
    this._updateDisplay();
  },
  _updateDisplay() {
    const inputSignal = this.model.getOutput();
    const newAttrs = {
      dp: { fill: inputSignal.get(7) === 1 ? highColor : lowColor },
      a: { fill: inputSignal.get(6) === 1 ? highColor : lowColor },
      b: { fill: inputSignal.get(5) === 1 ? highColor : lowColor },
      c: { fill: inputSignal.get(4) === 1 ? highColor : lowColor },
      d: { fill: inputSignal.get(3) === 1 ? highColor : lowColor },
      e: { fill: inputSignal.get(2) === 1 ? highColor : lowColor },
      f: { fill: inputSignal.get(1) === 1 ? highColor : lowColor },
      g: { fill: inputSignal.get(0) === 1 ? highColor : lowColor },
    };
    this._applyAttrs(newAttrs);
  },
});


/***/ },

/***/ "./src/cells/fsm.mjs"
/*!***************************!*\
  !*** ./src/cells/fsm.mjs ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FSM: () => (/* binding */ FSM),
/* harmony export */   FSMView: () => (/* binding */ FSMView)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/shapes/standard.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/Graph.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/Paper.mjs");
/* harmony import */ var _joint_layout_directed_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @joint/layout-directed-graph */ "./node_modules/@joint/layout-directed-graph/DirectedGraph.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");








const FSM = _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.define('FSM', {
    /* default properties */
    bits: { in: 1, out: 1},
    polarity: { clock: true },
    init_state: 0,
    states: 1,
    trans_table: [],

    size: { width: 80, height: 3*16+8 },
    ports: {
        groups: {
            'in': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype._getStackedPosition({ side: 'left' })
            },
            'out': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype._getStackedPosition({ side: 'right' })
            }
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        const polarity = this.get('polarity');

        const init_state = this.get('init_state');
        const states = this.get('states');
        const trans_table = this.get('trans_table');

        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits.in, labelled: true },
            { id: 'clk', group: 'in', dir: 'in', bits: 1, polarity: polarity.clock, decor: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype.decorClock, labelled: true },
            { id: 'arst', group: 'in', dir: 'in', bits: 1, polarity: polarity.arst, labelled: true },
            { id: 'out', group: 'out', dir: 'out', bits: bits.out, labelled: true }
        ];

        _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype.initialize.apply(this, arguments);

        const current_state = this.get('current_state');

        this.fsmgraph = new _joint_core__WEBPACK_IMPORTED_MODULE_2__.Graph;
        const statenodes = [];
        for (let n = 0; n < states; n++) {
            const node = new _joint_core__WEBPACK_IMPORTED_MODULE_1__.Circle({stateNo: n, id: 'state' + n, isInit: n == init_state});
            node.attr('label/text', String(n));
            node.resize(50,50);
            if (n == init_state)
                node.attr('body/strokeWidth', 3)
            if (n == current_state)
                node.attr('body/class', 'current_state');
            node.addTo(this.fsmgraph);
            statenodes.push(node);
        }
        for (const [stateIn, trs] of this.transitions) {
            for (const tr of trs) {
                const trans = new _joint_core__WEBPACK_IMPORTED_MODULE_1__.Link({
                    id: tr.id, 
                    ctrlIn: tr.ctrlIn,
                    ctrlOut: tr.ctrlOut
                });
                trans.appendLabel({
                    attrs: {
                        text: {
                            text: trans.get('ctrlIn').toBin() + '/' + trans.get('ctrlOut').toBin()
                        }
                    }
                });
                trans.source({ id: 'state' + stateIn });
                trans.target({ id: 'state' + tr.stateOut });
                trans.addTo(this.fsmgraph);
            }
        }

        this.listenTo(this, 'change:current_state', (model, state) => {
            const pstate = model.previous('current_state');
            this.fsmgraph.getCell('state' + pstate).removeAttr('body/class');
            this.fsmgraph.getCell('state' + state).attr('body/class', 'current_state');
        });
        this.listenTo(this, 'change:next_trans', (model, id) => {
            const pid = model.previous('next_trans');
            if (pid) {
                const cell = this.fsmgraph.getCell(pid);
                cell.removeAttr('line/class');
                cell.removeAttr('line/targetMarker/class');
            }
            if (id) {
                this.fsmgraph.getCell(id).attr({
                    line: {
                        class: 'next_trans',
                        targetMarker: {
                            class: 'next_trans'
                        }
                    }
                });
            }
        });
    },
    prepare() {
        const bits = this.get('bits');
        this.transitions = new Map();
        var id = 0;
        for (const tr of this.get('trans_table')) {
            if (!this.transitions.has(tr.state_in))
                this.transitions.set(tr.state_in, []);
            this.transitions.get(tr.state_in).push({
                id: 'tr'+id,
                stateOut: tr.state_out,
                ctrlIn: _3vl__WEBPACK_IMPORTED_MODULE_6__.Vector3vl.fromBin(tr.ctrl_in, bits.in),
                ctrlOut: _3vl__WEBPACK_IMPORTED_MODULE_6__.Vector3vl.fromBin(tr.ctrl_out, bits.out)
            });
            id++;
        };
        var current_state = this.get('current_state');
        if (current_state === undefined) {
            current_state = this.get('init_state');
            this.set('current_state', current_state);
        }
        this.last_clk = 0;
    },
    operation(data) {
        const bits = this.get('bits');
        const polarity = this.get('polarity');
        const next_trans = () => {
            const links = this.transitions.get(this.get('current_state')) || [];
            for (const trans of links) {
                const ctrlIn = trans.ctrlIn;
                const xmask = ctrlIn.xmask();
                if (data.in.or(xmask).eq(ctrlIn.or(xmask)))
                    return trans;
            }
        };
        const next_output = () => {
            const links = this.transitions.get(this.get('current_state')) || [];
            const ixmask = data.in.xmask();
            const results = [];
            for (const trans of links) {
                const ctrlIn = trans.ctrlIn;
                const xmask = ctrlIn.xmask().or(ixmask);
                if (data.in.or(xmask).eq(ctrlIn.or(xmask)))
                    results.push(trans.ctrlOut);
            }
            const xes = _3vl__WEBPACK_IMPORTED_MODULE_6__.Vector3vl.xes(bits.out);
            if (results.length == 0) return xes;
            while (results.length > 1) {
                const other = results.pop();
                const eqs = results[0].xnor(other).or(xes);
                results[0] = results[0].and(eqs).or(xes.and(eqs.xmask()));
            };
            return results[0];
        };
        const pol = what => polarity[what] ? 1 : -1;
        if (data.arst.get(0) == pol('arst')) {
            this.set('current_state', this.get('init_state'));
        } else {
            const last_clk = this.last_clk;
            if (data.clk.get(0) == pol('clock') && last_clk == -pol('clock')) {
                const trans = next_trans();
                this.set('current_state',
                    trans ? trans.stateOut : this.get('init_state'));
            }
        }
        this.last_clk = data.clk.get(0);
        const trans = next_trans();
        if (!trans) {
            this.set('next_trans', undefined);
        } else {
            this.set('next_trans', trans.id);
        }
        return { out: next_output() };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype.markup.concat(_base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype.markupZoom),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype._gateParams.concat(['bits', 'polarity', 'states', 'init_state', 'trans_table']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype._unsupportedPropChanges.concat(['bits', 'polarity', 'states', 'init_state', 'trans_table']),
    _presentationParams: _base_mjs__WEBPACK_IMPORTED_MODULE_5__.Box.prototype._presentationParams.concat(['current_state', 'next_trans']),
    _gateKind: 'stateful'
});

const FSMView = _base_mjs__WEBPACK_IMPORTED_MODULE_5__.BoxView.extend({
    _autoResizeBox: true,
    events: {
        "click foreignObject.tooltip": "stopprop",
        "mousedown foreignObject.tooltip": "stopprop",
        "touchstart foreignObject.tooltip": "stopprop", // make sure the input receives focus
        "click a.zoom": "_displayEditor"
    },
    _displayEditor(evt) {
        evt.stopPropagation();
        const div = jquery__WEBPACK_IMPORTED_MODULE_0__('<div>', {
            title: "FSM: " + this.model.get('label')
        }).appendTo('html > body');
        const pdiv = jquery__WEBPACK_IMPORTED_MODULE_0__('<div>').appendTo(div);
        const graph = this.model.fsmgraph;
        const paper = new _joint_core__WEBPACK_IMPORTED_MODULE_3__.Paper({
            el: pdiv,
            model: graph
        });
        // to visualize the cells
        graph.resetCells(graph.getCells());
        // lazy layout
        if (!graph.get('laid_out')) {
            _joint_layout_directed_graph__WEBPACK_IMPORTED_MODULE_4__.DirectedGraph.layout(graph);
            graph.set('laid_out', true);
        }
        // auto-resizing
        paper.listenTo(graph, 'change:position', (elem) => {
            paper.fitToContent({ padding: 30, allowNewOrigin: 'any' });
        });
        paper.fitToContent({ padding: 30, allowNewOrigin: 'any' });
        this.paper.trigger('open:fsm', div, () => {
            paper.remove();
            div.remove();
        });
        return false;
    }
});



/***/ },

/***/ "./src/cells/gates.mjs"
/*!*****************************!*\
  !*** ./src/cells/gates.mjs ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   And: () => (/* binding */ And),
/* harmony export */   AndReduce: () => (/* binding */ AndReduce),
/* harmony export */   AndReduceView: () => (/* binding */ AndReduceView),
/* harmony export */   AndView: () => (/* binding */ AndView),
/* harmony export */   Gate11: () => (/* binding */ Gate11),
/* harmony export */   GateReduce: () => (/* binding */ GateReduce),
/* harmony export */   GateSVG: () => (/* binding */ GateSVG),
/* harmony export */   GateX1: () => (/* binding */ GateX1),
/* harmony export */   Nand: () => (/* binding */ Nand),
/* harmony export */   NandReduce: () => (/* binding */ NandReduce),
/* harmony export */   NandReduceView: () => (/* binding */ NandReduceView),
/* harmony export */   NandView: () => (/* binding */ NandView),
/* harmony export */   Nor: () => (/* binding */ Nor),
/* harmony export */   NorReduce: () => (/* binding */ NorReduce),
/* harmony export */   NorReduceView: () => (/* binding */ NorReduceView),
/* harmony export */   NorView: () => (/* binding */ NorView),
/* harmony export */   Not: () => (/* binding */ Not),
/* harmony export */   NotView: () => (/* binding */ NotView),
/* harmony export */   Or: () => (/* binding */ Or),
/* harmony export */   OrReduce: () => (/* binding */ OrReduce),
/* harmony export */   OrReduceView: () => (/* binding */ OrReduceView),
/* harmony export */   OrView: () => (/* binding */ OrView),
/* harmony export */   Repeater: () => (/* binding */ Repeater),
/* harmony export */   RepeaterView: () => (/* binding */ RepeaterView),
/* harmony export */   Xnor: () => (/* binding */ Xnor),
/* harmony export */   XnorReduce: () => (/* binding */ XnorReduce),
/* harmony export */   XnorReduceView: () => (/* binding */ XnorReduceView),
/* harmony export */   XnorView: () => (/* binding */ XnorView),
/* harmony export */   Xor: () => (/* binding */ Xor),
/* harmony export */   XorReduce: () => (/* binding */ XorReduce),
/* harmony export */   XorReduceView: () => (/* binding */ XorReduceView),
/* harmony export */   XorView: () => (/* binding */ XorView)
/* harmony export */ });
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");




const and_path = "M19 0v32h16c9 0 16-7 16-16S44 0 35 0H20z";
const or_path = "M14.3 0l1.6 2s4.5 5.6 4.5 14s-4.5 14-4.5 14l-1.6 2H28c3.8 0 16.6-.5 25-16h0A28 28 0 0028 0H16.8z";
const buf_path = "M18-2v36l2-1 32-17h0L20-1z";
const xor_arc_path = "M6.8-1.2 10 2.7S14.2 8 14.2 16S10 29.3 10 29.3l-3.2 3.9H10l1.7-2.4s4.8-6 4.8-14.8c0-8.9-4.8-14.8-4.8-14.8l-1.7-2.4z";
    
const xor_arc_path_markup = {
    tagName: 'path',
    selector: 'xor_arc',
    attributes: {
        'fill': "#000",
        'd': xor_arc_path
    }
};

const neg_markup = {
    tagName: 'circle',
    className: 'body',
    selector: 'neg_bubble',
    attributes: {
        'stroke': "#000",
        'stroke-width': '2px',
        'cx': 56,
        'cy': 16,
        'r': 4
    }
};

function gateMarkup(children = []) {
    return {
        tagName: 'g',
        selector: 'body',
        children: [
            {
                tagName: 'path',
                className: 'body gate',
                selector: 'gate'
            }
        ].concat(children)
    }
}

// base class for gates
const GateSVG = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.define('GateSVG', {
    /* default properties */
    bits: 1,

    size: { width: 60, height: 32 },
    ports: {
        groups: {
            'in': { position: { name: 'left', args: { dx: 30 } }, attrs: { wire: { x2: -50 }, port: { refX: -50 } }, z: -1 },
            'out': { position: { name: 'right', args: { dx: -30 } }, attrs: { wire: { x2: 50 }, port: { refX: 50 } }, z: -1 }
        }
    }
}, {
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup()]),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype._gateParams.concat(['bits'])
});

// Single-input gate model
const Gate11 = GateSVG.define('Gate11', {}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits },
            { id: 'out', group: 'out', dir: 'out', bits: bits }
        ];
        
        GateSVG.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits({ in: bits, out: bits });
        });
    }
});

// Multi-input gate model
const GateX1 = GateSVG.define('GateX1', {
    /* default properties */
    inputs: 2,

    attrs: {
        gate: {
            'vector-effect': 'non-scaling-stroke'
        },
        xor_arc: {
            'vector-effect': 'non-scaling-stroke'
        },
        neg_bubble: {
            'vector-effect': 'non-scaling-stroke'
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        const inputs = this.get('inputs');

        const ports = [];
        for (let i = 1; i <= inputs; i++)
            ports.push({ id: 'in' + i, group: 'in', dir: 'in', bits: bits });
        ports.push({ id: 'out', group: 'out', dir: 'out', bits: bits });
        this.get('ports').items = ports;
        const scaling = inputs / 2;
        this.set('size', { width: 60 * scaling, height: 32 * scaling });
        this.attr('body/transform', 'translate(-4, 0) scale('+scaling+')');

        this.prop('ports/groups/in/position/args/dx', 30 * scaling);
        this.prop('ports/groups/in/attrs/wire/x2', -30 * scaling - 20);
        this.prop('ports/groups/in/attrs/port/refX', -30 * scaling - 20);
        this.prop('ports/groups/out/position/args/dx', -30 * scaling);
        this.prop('ports/groups/out/attrs/wire/x2', 30 * scaling + 20);
        this.prop('ports/groups/out/attrs/port/refX', 30 * scaling + 20);

        GateSVG.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            const inputs = this.get('inputs');
            const param = { out: bits };
            for (let i = 1; i <= inputs; i++)
                param['in' + i] = bits;
            this._setPortsBits(param);
        });
    },
    operation(data) {
        let ret = data.in1;
        for (let i = 2; i <= this.get('inputs'); i++)
            ret = this.binoperation(ret, data['in' + i]);
        return { out: this.finoperation(ret) };
    },
    finoperation(val) {
        return val
    },
    _gateParams: GateSVG.prototype._gateParams.concat(['inputs']),
    _unsupportedPropChanges: GateSVG.prototype._unsupportedPropChanges.concat(['inputs']),
    _operationHelpers: GateSVG.prototype._operationHelpers.concat(['binoperation', 'finoperation'])
});

// Reducing gate model
const GateReduce = GateSVG.define('GateReduce', {}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits },
            { id: 'out', group: 'out', dir: 'out', bits: 1 }
        ];
        
        GateSVG.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits({ in: bits });
        });
    }
});

// Repeater (buffer) gate model
const Repeater = Gate11.define('Repeater', {
    attrs: { gate: { d: buf_path }}
}, {
    operation(data) {
        return { out: data.in };
    }
});
const RepeaterView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Not gate model
const Not = Gate11.define('Not', {
    attrs: { gate: { d: buf_path }}
}, {
    operation(data) {
        return { out: data.in.not() };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([neg_markup])]),
});
const NotView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Or gate model
const Or = GateX1.define('Or', {
    attrs: { gate: { d: or_path }}
}, {
    binoperation(in1, in2) {
        return in1.or(in2);
    }
});
const OrView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// And gate model
const And = GateX1.define('And', {
    attrs: { gate: { d: and_path }}
}, {
    binoperation(in1, in2) {
        return in1.and(in2);
    }
});
const AndView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Nor gate model
const Nor = GateX1.define('Nor', {
    attrs: { gate: { d: or_path }}
}, {
    binoperation(in1, in2) {
        return in1.or(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([neg_markup])]),
});
const NorView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Nand gate model
const Nand = GateX1.define('Nand', {
    attrs: { gate: { d: and_path }}
}, {
    binoperation(in1, in2) {
        return in1.and(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([neg_markup])]),
});
const NandView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Xor gate model
const Xor = GateX1.define('Xor', {
    attrs: { gate: { d: or_path }}
}, {
    binoperation(in1, in2) {
        return in1.xor(in2);
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([xor_arc_path_markup])]),
});
const XorView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Xnor gate model
const Xnor = GateX1.define('Xnor', {
    attrs: { gate: { d: or_path }}
}, {
    binoperation(in1, in2) {
        return in1.xor(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([xor_arc_path_markup, neg_markup])]),
});
const XnorView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing Or gate model
const OrReduce = GateReduce.define('OrReduce', {
    attrs: { gate: { d: or_path }}
}, {
    operation(data) {
        return { out: data.in.reduceOr() };
    }
});
const OrReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing Nor gate model
const NorReduce = GateReduce.define('NorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    operation(data) {
        return { out: data.in.reduceNor() };
    },
    markup: GateReduce.prototype.markup.concat([neg_markup])
});
const NorReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing And gate model
const AndReduce = GateReduce.define('AndReduce', {
    attrs: { gate: { d: and_path }}
}, {
    operation(data) {
        return { out: data.in.reduceAnd() };
    }
});
const AndReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing Nand gate model
const NandReduce = GateReduce.define('NandReduce', {
    attrs: { gate: { d: and_path }}
}, {
    operation(data) {
        return { out: data.in.reduceNand() };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([neg_markup])]),
});
const NandReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing Xor gate model
const XorReduce = GateReduce.define('XorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    operation(data) {
        return { out: data.in.reduceXor() };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([xor_arc_path_markup])]),
});
const XorReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;

// Reducing Xnor gate model
const XnorReduce = GateReduce.define('XnorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    operation(data) {
        return { out: data.in.reduceXnor() };
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_0__.Gate.prototype.markup.concat([gateMarkup([xor_arc_path_markup, neg_markup])]),
});
const XnorReduceView = _base_mjs__WEBPACK_IMPORTED_MODULE_0__.GateView;



/***/ },

/***/ "./src/cells/io.mjs"
/*!**************************!*\
  !*** ./src/cells/io.mjs ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonView: () => (/* binding */ ButtonView),
/* harmony export */   Clock: () => (/* binding */ Clock),
/* harmony export */   ClockView: () => (/* binding */ ClockView),
/* harmony export */   Constant: () => (/* binding */ Constant),
/* harmony export */   ConstantView: () => (/* binding */ ConstantView),
/* harmony export */   IO: () => (/* binding */ IO),
/* harmony export */   IOView: () => (/* binding */ IOView),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   InputView: () => (/* binding */ InputView),
/* harmony export */   Lamp: () => (/* binding */ Lamp),
/* harmony export */   LampView: () => (/* binding */ LampView),
/* harmony export */   NumBase: () => (/* binding */ NumBase),
/* harmony export */   NumBaseView: () => (/* binding */ NumBaseView),
/* harmony export */   NumDisplay: () => (/* binding */ NumDisplay),
/* harmony export */   NumDisplayView: () => (/* binding */ NumDisplayView),
/* harmony export */   NumEntry: () => (/* binding */ NumEntry),
/* harmony export */   NumEntryView: () => (/* binding */ NumEntryView),
/* harmony export */   Output: () => (/* binding */ Output),
/* harmony export */   OutputView: () => (/* binding */ OutputView)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");







// Things with numbers
const NumBase = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.define('NumBase', {
    /* default properties */
    numbase: 'hex',
    bits: 1
}, {
    initialize() {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.initialize.apply(this, arguments);

        this.on('change:bits', (_, bits) => {
            const display3vl = this.graph._display3vl;
            const displays = display3vl.usableDisplays(this.numbaseType, this.get('bits'));
            if (!displays.includes(this.get('numbase')))
                this.set('numbase', 'hex');
        });
    },
    tooltipMinWidth: 70,
    markupTooltip: [{
        tagName: 'foreignObject',
        className: 'tooltip',
        selector: 'tooltip',
        children: [{
            tagName: 'body',
            namespaceURI: 'http://www.w3.org/1999/xhtml',
            children: [{
                tagName: 'select',
                className: 'numbase'
            }]
        }]
    }],
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._gateParams.concat(['numbase'])
});
const NumBaseView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.extend({
    presentationAttributes: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.addPresentationAttributes({
        bits: 'BITS',
        numbase: 'NUMBASE'
    }),
    _autoResizeBox: true,
    events: {
        "click select.numbase": "stopprop",
        "mousedown select.numbase": "stopprop", // Prevent drag
        "touchstart select.numbase": "stopprop", // Prevent drag & make sure select works
        "change select.numbase": "_changeNumbase"
    },
    _changeNumbase(evt) {
        this.model.set('numbase', evt.target.value || 'bin');
    },
    _calculateBoxWidth() {
        const testtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        jquery__WEBPACK_IMPORTED_MODULE_2__(testtext).text(Array(this.model.get('bits')).fill('0').join(''))
            .attr('class', 'numvalue')
            .appendTo(this.$el);
        const width = testtext.getBBox().width + 20;
        testtext.remove();
        return width;
    },
    confirmUpdate(flags) {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'BITS') || this.hasFlag(flags, 'RENDER'))
            this._makeNumBaseSelector();
        if (this.hasFlag(flags, 'NUMBASE'))
            this._updateNumBaseSelector();
    },
    _makeNumBaseSelector() {
        this.$('select.numbase').empty();
        const numbase = this.model.get('numbase');
        const display3vl = this.model.graph._display3vl;
        for (const base of display3vl.usableDisplays(this.model.numbaseType, this.model.get('bits'))) {
            const opt = jquery__WEBPACK_IMPORTED_MODULE_2__('<option>')
                .attr('value', base)
                .prop('selected', base == numbase)
                .text(base)
                .appendTo(this.$('select.numbase'));
        }
    },
    _updateNumBaseSelector() {
        this.$('select.numbase').val(this.model.get('numbase'));
    }
});

// Input/output model
const IO = NumBase.define('IO', {
    /* default properties */
    bits: 1,
    net: '',
    //as I/O has no delay, this is even not taken into account at all
    propagation: 0,
    /* 0 - within subcircuit, 1 - single-line, 2 - bus-line */
    mode: -1,

    attrs: {
        ioname: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            fontWeight: 'bold',
            fontSize: '10pt'
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: this._portDirection, group: this._portDirection, dir: this._portDirection, bits: bits }
        ];

        NumBase.prototype.initialize.apply(this, arguments);

        this.on('change:bits', (_, bits) => {
            const b = {};
            b[this._portDirection] = bits;
            this._setPortsBits(b);
            if (this.get('mode') != 0) this._checkMode();
        });
        this.bindAttrToProp('ioname/text', 'net');
    },
    onAdd() {
        this._checkMode();
    },
    _checkMode() {
        // assumes graph to have subcircuit property before adding elements
        const withinSubcircuit = this.graph && this.graph.has('subcircuit');
        const bits = this.get('bits');
        const mode = withinSubcircuit ? 0 : bits == 1 ? 1 : 2;

        this.set('mode', mode);
        this.set('box_resized', false);
        this.set('markup', mode == 0 ? this.markupInSubcircuit :
            mode == 1 ? this.markupSingle : this.markupBus
        );
        return mode;
    },
    _setPortsBits(portsBits) {
        NumBase.prototype._setPortsBits.apply(this, arguments);

        if (this.get('mode') != 0) return; // not inside a subcircuit
        const subcir = this.graph.get('subcircuit');
        console.assert(subcir != null);
        const portsBitsSubcir = {};
        portsBitsSubcir[this.get('net')] = portsBits[this._portDirection];
        subcir._setPortsBits(portsBitsSubcir);
    },
    markupSingle: NumBase.prototype.markup,
    markupBus: NumBase.prototype.markup.concat(NumBase.prototype.markupTooltip),
    markupInSubcircuit: NumBase.prototype.markup.concat([{
            tagName: 'text',
            className: 'ioname',
            selector: 'ioname'
        }
    ]),
    _gateParams: NumBase.prototype._gateParams.concat(['bits','net','order'])
});
const IOView = NumBaseView.extend({
    _calculateBoxWidth() {
        switch (this.model.get('mode')) {
            case 0:
                // resize based on io name
                const text = this.selectors['ioname'];
                if (text.getAttribute('display') !== 'none') return text.getBBox().width + 10;
                return 20;
            case 1:
                // resize to width = 30 (assumes height == 30 too)
                return 30;
            case 2:
                // resize based on binary string
                return NumBaseView.prototype._calculateBoxWidth.call(this);
        }
    }
});

// Input model
const Input = IO.define('Input', {
    attrs: {
        btnface: {
            stroke: 'black', strokeWidth: 2,
            refX: .2, refY: .2,
            refHeight: .6, refWidth: .6,
            cursor: 'pointer'
        },
        valinput: {
            refX: .5, refY: .5,
            refWidth: -10, refHeight: -10,
            xAlignment: 'middle', yAlignment: 'middle',
        }
    }
}, {
    isInput: true,
    _portDirection: 'out',
    _resetPortValue(port) {
        if (port.id == "out" && port.dir == "out") {
            const bits = this.get('bits');
            const mode = this.get('mode');
            return mode == 1 ? _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.zeros(bits) : _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.xes(bits);
        } else return IO.prototype._resetPortValue.call(this, port);
    },
    _checkMode() {
        IO.prototype._checkMode.call(this);
        this._resetPortsSignals([this.get('ports').items[0]]);
    },
    setInput(sig) {
        this._setInput(sig);
        this.trigger('userChange', this);
    },
    toggleInput() {
        this.setInput(this.get('outputSignals').out.not());
    },
    _setInput(sig) {
        if (sig.bits != this.get('bits'))
            throw new Error("setInput: wrong number of bits");
        this.set('outputSignals', { out: sig });
    },
    markupSingle: IO.prototype.markupSingle.concat([{
            tagName: 'rect',
            className: 'btnface',
            selector: 'btnface'
        }
    ]),
    markupBus: IO.prototype.markupBus.concat([{
            tagName: 'foreignObject',
            className: 'valinput',
            selector: 'valinput',
            children: [{
                tagName: 'body',
                namespaceURI: 'http://www.w3.org/1999/xhtml',
                children: [{
                    tagName: 'input',
                    attributes: { type: 'text' }
                }]
            }]
        }
    ]),
    numbaseType: 'read'
});
const InputView = IOView.extend({
    attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({
        button: {
            high: { btnface: { 'fill': 'black' } },
            low: { btnface: { 'fill': 'white' } }
        }
    }, IOView.prototype.attrs),
    confirmUpdate(flags) {
        IOView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL2') ||
            this.hasFlag(flags, 'NUMBASE')) this._updateView();
    },
    _updateView() {
        switch (this.model.get('mode')) {
            case 1: this._updateButton(); break;
            case 2: this._updateNumEntry(); break;
        }
    },
    _updateButton() {
        const signal = this.model.get('outputSignals').out;
        const attrs = this.attrs.button[
            signal.isHigh ? 'high' : 'low'
        ];
        this._applyAttrs(attrs);
    },
    _updateNumEntry() {
        const display3vl = this.model.graph._display3vl;
        this.$('input').val(display3vl.show(this.model.get('numbase'), this.model.get('outputSignals').out));
        this.$('input').removeClass('invalid');
    },
    render() {
        IOView.prototype.render.apply(this, arguments);
        this._updateView();
    },
    events: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({
        //button
        "click .btnface": "_onButton",
        "mousedown .btnface": "stopprop", // Prevent drag
        "touchstart .btnface": "stopprop", // Prevent drag & make sure click is generated
        //numEntry
        "click input": "stopprop",
        "mousedown input": "stopprop", // Prevent drag
        "touchstart input": "stopprop", // Prevent drag & make sure the input receives focus
        "change input": "_onNumEntry"
    }, NumBaseView.prototype.events),
    _onButton() {
        this.model.toggleInput();
    },
    _onNumEntry(evt) {
        const numbase = this.model.get('numbase');
        const bits = this.model.get('bits');
        const display3vl = this.model.graph._display3vl;
        if (display3vl.validate(numbase, evt.target.value, bits)) {
            const val = display3vl.read(numbase, evt.target.value, bits);
            this.model.setInput(val);
        } else {
            this.$('input').addClass('invalid');
        }
    }
});

// legacy special input models, now replaced by Input
const Button = Input;
const ButtonView = InputView;
const NumEntry = Input;
const NumEntryView = InputView;

// Output model
const Output = IO.define('Output', {
    attrs: {
        led: {
            refX: .5, refY: .5, refR: .35
        },
        value: {
            refX: .5, refY: .5,
            textVerticalAnchor: 'middle',
            text: '0'
        }
    }
}, {
    isOutput: true,
    _portDirection: 'in',
    getOutput() {
        return this.get('inputSignals').in;
    },
    markupSingle: IO.prototype.markupSingle.concat([{
            tagName: 'circle',
            className: 'led',
            selector: 'led'
        }
    ]),
    markupBus: IO.prototype.markupBus.concat([{
            tagName: 'text',
            className: 'value numvalue',
            selector: 'value'
        }
    ]),
    numbaseType: 'show'
});
const OutputView = IOView.extend({
    attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({
        lamp: {
            high: { led: { 'fill': '#03c03c' } },
            low: { led: { 'fill': '#fc7c68' } },
            undef: { led: { 'fill': '#bfc5c6' } }
        }
    }, IOView.prototype.attrs),
    confirmUpdate(flags) {
        IOView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL') ||
            this.hasFlag(flags, 'NUMBASE')) this._updateView();
    },
    _updateView() {
        switch (this.model.get('mode')) {
            case 1: this._updateLamp(); break;
            case 2: this._updateNumDisplay(); break;
        }
    },
    _updateLamp() {
        const signal = this.model.get('inputSignals').in;
        const attrs = this.attrs.lamp[
            signal.isHigh ? 'high' :
            signal.isLow ? 'low' : 'undef'
        ];
        this._applyAttrs(attrs);
    },
    _updateNumDisplay() {
        const display3vl = this.model.graph._display3vl;
        this.$('text.value tspan').text(display3vl.show(this.model.get('numbase'), this.model.get('inputSignals').in));
    },
    render() {
        IOView.prototype.render.apply(this, arguments);
        this._updateView();
    }
});

// legacy special output models, now replaced by Output
const Lamp = Output;
const LampView = OutputView;

const NumDisplay = Output;
const NumDisplayView = OutputView;

// Constant
const Constant = NumBase.define('Constant', {
    /* default properties */
    constant: '0',
    propagation: 0,

    attrs: {
        value: {
            refX: .5, refY: .5,
            textVerticalAnchor: 'middle',
            text: '0'
        }
    }
}, {
    initialize() {
        const constant = this.get('constant');
        const bits = constant.length;
        this.set('bits', bits);
        this.get('ports').items = [
            { id: 'out', group: 'out', dir: 'out', bits: bits }
        ];
        
        NumBase.prototype.initialize.apply(this, arguments);
       
        this.on('change:constant', (_, constant) => {
            const bits = constant.length;
            this._setPortsBits({ out: bits });
            this.set('bits', bits);
            this.set('constantCache', _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.fromBin(constant, bits));
        });
    },
    prepare() {
        const constant = this.get('constant');
        const bits = constant.length;
        this.set('constantCache', _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.fromBin(constant, bits));
    },
    operation() {
        return { out: this.get('constantCache') };
    },
    markup: NumBase.prototype.markup.concat([{
            tagName: 'text',
            className: 'value numvalue',
            selector: 'value'
        }
    ]),
    _gateParams: NumBase.prototype._gateParams.concat(['constant']),
    numbaseType: 'show'
});
const ConstantView = NumBaseView.extend({
    presentationAttributes: NumBaseView.addPresentationAttributes({
        constantCache: 'CONSTANT'
    }),
    confirmUpdate(flags) {
        NumBaseView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'CONSTANT') ||
            this.hasFlag(flags, 'NUMBASE')) this._showText();
    },
    _showText() {
        const display3vl = this.model.graph._display3vl;
        this.$('text.value tspan').text(display3vl.show(this.model.get('numbase'), this.model.get('constantCache')));
    },
    update() {
        NumBaseView.prototype.update.apply(this, arguments);
        this._showText();
    }
});

// Clock
const Clock = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.define('Clock', {
    /* default properties */
    propagation: 100,

    ports: {
        items: [
            { id: 'out', group: 'out', dir: 'out', bits: 1 }
        ]
    },

    size: { width: 30, height: 30 }
}, {
    _resetPortValue(port) {
        if (port.id == "out" && port.dir == "out") {
            return _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.zero;
        } else return _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._resetPortValue(port);
    },
    operation() {
        // trigger next clock edge
        return { out: this.get('outputSignals').out.not(), _clock_hack: true };
    },
    tooltipMinWidth: 55,
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.markup.concat([{
            tagName: 'path',
            className: 'decor',
            attributes: { d: 'M7.5 7.5 L7.5 22.5 L15 22.5 L15 7.5 L22.5 7.5 L22.5 22.5', stroke: 'black' }
        }, {
            tagName: 'foreignObject',
            className: 'tooltip',
            selector: 'tooltip',
            children: [{
                tagName: 'body',
                namespaceURI: 'http://www.w3.org/1999/xhtml',
                children: [{
                    tagName: 'input',
                    attributes: { type: 'number', min: 1, step: 1 }
                }]
            }]
        }
    ]),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._unsupportedPropChanges.concat(['bits'])
});
const ClockView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.extend({
    presentationAttributes: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.addPresentationAttributes({
        propagation: 'SIGNAL'
    }),
    events: {
        "click input": "stopprop",
        "mousedown input": "stopprop",
        "touchstart input": "stopprop", // make sure the input receives focus
        "change input": "_changePropagation",
        "input input": "_changePropagation"
    },
    render(args) {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.prototype.render.apply(this, arguments);
        this.updatePropagation();
    },
    confirmUpdate(flags) {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL')) this.updatePropagation();
    },
    _changePropagation(evt) {
        const val = evt.target.value;
        const valid = String(val) == String(Number(val));
        if (valid) this.model.set('propagation', Number(val) || 1);
        this.$('input').toggleClass('invalid', !valid);
    },
    updatePropagation() {
        this.$('input').val(this.model.get('propagation'));
    }
});



/***/ },

/***/ "./src/cells/memory.mjs"
/*!******************************!*\
  !*** ./src/cells/memory.mjs ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Memory: () => (/* binding */ Memory),
/* harmony export */   MemoryView: () => (/* binding */ MemoryView)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _help_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help.mjs */ "./src/help.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");







// Memory cell
const Memory = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.define('Memory', {
    /* default properties */
    bits: 1,
    abits: 1,
    rdports: [],
    wrports: [],
    words: undefined,
    offset: 0,
    
    attrs: {
        portsplit: {
            stroke: 'black'
        }
    },
    ports: {
        groups: {
            'in': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'left' })
            },
            'out': {
                position: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._getStackedPosition({ side: 'right' })
            }
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        const abits = this.get('abits');
        const rdports = this.get('rdports');
        const wrports = this.get('wrports');
        
        let num = 0;
        let idxOffset = 0;
        const ports = [], portsplits = [];
        for (const [portname, port] of this._memrdports()) {
            ports.push(
                { id: portname + 'addr', group: 'in', dir: 'in', bits: abits, portlabel: 'addr', labelled: true },
                { id: portname + 'data', group: 'out', dir: 'out', bits: bits, portlabel: 'data', labelled: true, args: { idxOffset: idxOffset } }
            );
            num += 1;
            if ('srst_polarity' in port) {
                num++;
                idxOffset++;
                ports.push({ id: portname + 'srst', group: 'in', dir: 'in', bits: 1, portlabel: 'srst', polarity: port.srst_polarity, labelled: true });
            }
            if ('arst_polarity' in port) {
                num++;
                idxOffset++;
                ports.push({ id: portname + 'arst', group: 'in', dir: 'in', bits: 1, portlabel: 'arst', polarity: port.arst_polarity, labelled: true });
            }
            if ('enable_polarity' in port) {
                num++;
                idxOffset++;
                ports.push({ id: portname + 'en', group: 'in', dir: 'in', bits: 1, portlabel: 'en', polarity: port.enable_polarity, labelled: true });
            }
            if ('clock_polarity' in port) {
                num++;
                idxOffset++;
                ports.push({ id: portname + 'clk', group: 'in', dir: 'in', bits: 1, portlabel: 'clk', polarity: port.clock_polarity, decor: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.decorClock, labelled: true });
            }
            portsplits.push(num);
        }
        for (const [portname, port] of this._memwrports()) {
            num += 2;
            ports.push(
                { id: portname + 'data', group: 'in', dir: 'in', bits: bits, portlabel: 'data', labelled: true },
                { id: portname + 'addr', group: 'in', dir: 'in', bits: abits, portlabel: 'addr', labelled: true }
            );
            if ('enable_polarity' in port) {
                num++;
                ports.push({ id: portname + 'en', group: 'in', dir: 'in', bits: port.no_bit_enable ? 1 : bits, portlabel: 'en', polarity: port.enable_polarity, labelled: true });
            }
            if ('clock_polarity' in port) {
                num++;
                ports.push({ id: portname + 'clk', group: 'in', dir: 'in', bits: 1, portlabel: 'clk', polarity: port.clock_polarity, decor: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.decorClock, labelled: true });
            }
            portsplits.push(num);
        }
        portsplits.pop();
        this.get('size').height = num*16+8;
        this.get('ports').items = ports;
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.initialize.apply(this, arguments);
        
        this.removeProp('memdata'); // performance hack
        
        this.on('change:size', (_, size) => {
            // only adapting to changed width
            const path = [];
            for (const num of portsplits) {
                path.push([
                    [0, 16*num + 4],
                    [size.width, 16*num + 4]
                ].map(p => p.join(' ')).join(' L '));
            }
            this.attr('path.portsplit/d', 'M ' + path.join(' M '));
        });
    },
    _resetPortValue(port) {
        if (port.dir == "out") {
            const res = /^rd([0-9]+)data$/.exec(port.id);
            const portdata = res ? this.get('rdports')[res[1]] : {};
            if ('init_value' in portdata)
                return _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.fromBin(portdata.init_value, port.bits);
        }
        return _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._resetPortValue.call(this, port);
    },
    prepare() {
        const bits = this.get('bits');
        var words = this.get('words');
        const memdata = this.get('memdata');
        
        if (!words) {
            words = 1 << this.get('abits');
            this.prop('words', words, { init: true });
        }
        if (memdata)
            this.memdata = _3vl__WEBPACK_IMPORTED_MODULE_3__.Mem3vl.fromJSON(bits, memdata);
        else
            this.memdata = new _3vl__WEBPACK_IMPORTED_MODULE_3__.Mem3vl(bits, words);
        console.assert(this.memdata.words == words);
        
        this.last_clk = {};
        for (const [portname, port] of this._memports()) {
            if ('clock_polarity' in port)
                this.last_clk[portname + 'clk'] = 0;
        }
    },
    operation(data) {
        const bits = this.get('bits');
        const out = {};
        const pol = (port, what) => port[what + '_polarity'] ? 1 : -1;
        const is_enabled = (portname, port) => {
            if ('enable_polarity' in port && !data[portname + 'en'].toArray().some(x => x == pol(port, 'enable')))
                return false;
            return true;
        };
        const port_active = (portname, port) => {
            const clkname = portname + 'clk';
            if ('clock_polarity' in port) {
                return (data[clkname].get(0) == pol(port, 'clock') && this.last_clk[clkname] == -pol(port, 'clock'));
            }
            return true;
        };
        const valid_addr = n => n >= 0 && n < this.get('words');
        const do_comb_read = (portname, port) => {
            const addr = this._calcaddr(data[portname + 'addr']);
            if (valid_addr(addr))
                out[portname + 'data'] = this.memdata.get(addr);
            else
                out[portname + 'data'] = _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.xes(bits);
        };
        const write_value = (portname, port, oldval, val) => {
            if (port.no_bit_enable || !('enable_polarity' in port))
                return val;
            const mask = port.enable_polarity ? data[portname + 'en'] : data[portname + 'en'].not();
            return val.and(mask).or(oldval.and(mask.not()));
        };
        const do_read = (portname, port) => {
            do_comb_read(portname, port);
            for (const [num, wrport] of this.get('wrports').entries()) {
                const wrportname = 'wr' + num;
                const mask_ok = (val, num) => typeof val == 'boolean' ? val : val[num];
                if ('transparent' in port && mask_ok(port.transparent, num) && port_active(wrportname, wrport) && is_enabled(wrportname, wrport) && data[portname + 'addr'] == data[wrportname + 'addr'])
                    out[portname + 'data'] = write_value(wrportname, wrport, out[portname + 'data'], data[wrportname + 'data']);
                if ('collision' in port && mask_ok(port.collision, num) && port_active(wrportname, wrport) && is_enabled(wrportname, wrport) && data[portname + 'addr'] == data[wrportname + 'addr'])
                    out[portname + 'data'] = write_value(wrportname, wrport, out[portname + 'data'], _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.xes(bits));
            }

        };
        const do_write = (portname, port) => {
            const addr = this._calcaddr(data[portname + 'addr']);
            if (valid_addr(addr)) {
                const oldval = this.memdata.get(addr);
                const newval = write_value(portname, port, oldval, data[portname + 'data']);
                const changed = !oldval.eq(newval);
                this.memdata.set(addr, newval);
                if (changed)
                    this.trigger("memChange", addr, newval);
            }
        };
        const do_srst = (portname, port) => {
            if (data[portname + 'srst'].get(0) == pol(port, 'srst'))
                out[portname + 'data'] = 'srst_value' in port
                                       ? _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.fromBin(port.srst_value, bits)
                                       : _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.zeros(bits);
        };
        const do_arst = (portname, port) => {
            if (data[portname + 'arst'].get(0) == pol(port, 'arst'))
                out[portname + 'data'] = 'arst_value' in port
                                       ? _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.fromBin(port.arst_value, bits)
                                       : _3vl__WEBPACK_IMPORTED_MODULE_3__.Vector3vl.zeros(bits);
        };
        const update_last_clk = (portname, port) => {
            if ('clock_polarity' in port) {
                const clkname = portname + 'clk';
                this.last_clk[clkname] = data[clkname].get(0);
            }
        };
        for (const [portname, port] of this._memrdports()) {
            out[portname + 'data'] = this.get('outputSignals')[portname + 'data'];
            if ('clock_polarity' in port && is_enabled(portname, port) && port_active(portname, port))
                do_read(portname, port);
        }
        for (const [portname, port] of this._memwrports())
            if (is_enabled(portname, port) && port_active(portname, port))
                do_write(portname, port);
        for (const [portname, port] of this._memrdports())
            if (!('clock_polarity' in port) && is_enabled(portname, port))
                do_comb_read(portname, port);
        for (const [portname, port] of this._memrdports()) {
            if ('srst_polarity' in port && (is_enabled(portname, port) || !('enable_srst' in port)) && port_active(portname, port))
                do_srst(portname, port);
            if ('arst_polarity' in port)
                do_arst(portname, port);
        }
        for (const [portname, port] of this._memrdports())
            update_last_clk(portname, port);
        for (const [portname, port] of this._memwrports())
            update_last_clk(portname, port);
        return out;
    },
    _calcaddr(sig) {
        if (!sig.isFullyDefined) return -1;
        return sig.toNumber() - this.get('offset');
    },
    * _memrdports() {
        for (const [num, port] of this.get('rdports').entries())
            yield ["rd" + num, port];
    },
    * _memwrports() {
        for (const [num, port] of this.get('wrports').entries())
            yield ["wr" + num, port];
    },
    * _memports() {
        yield* this._memrdports();
        yield* this._memwrports();
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.markup.concat([{
            tagName: 'path',
            className: 'portsplit',
            selector: 'portsplit'
        }], _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.markupZoom),
    getGateParams() {
        // hack to get memdata back
        const params = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype.getGateParams.apply(this, arguments);
        params.memdata = this.memdata.toJSON();
        return params;
    },
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._gateParams.concat(['bits', 'abits', 'rdports', 'wrports', 'words', 'offset']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._unsupportedPropChanges.concat(['bits', 'abits', 'rdports', 'wrports', 'words', 'offset']),
    _operationHelpers: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Box.prototype._operationHelpers.concat(['_memrdports', '_memwrports', '_memports', '_calcaddr']),
    _gateKind: 'stateful'
});
const MemoryView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.BoxView.extend({
    _autoResizeBox: true,
    events: {
        "click foreignObject.tooltip": "stopprop",
        "mousedown foreignObject.tooltip": "stopprop",
        "touchstart foreignObject.tooltip": "stopprop", // make sure the input receives focus
        "click a.zoom": "_displayEditor"
    },
    _displayEditor(evt) {
        evt.stopPropagation();
        const model = this.model;
        const display3vl = model.graph._display3vl;
        const div = jquery__WEBPACK_IMPORTED_MODULE_0__('<div>', {
            title: "Memory contents: " + model.get('label')
        }).appendTo('html > body');
        div.append(jquery__WEBPACK_IMPORTED_MODULE_0__(
            '<div class="btn-toolbar" role="toolbar">' +
            '<div class="btn-group mr-2" role="group">' +
            '<button name="prev" type="button" class="btn btn-secondary" title="Previous page">←</button>' +
            '<button name="next" type="button" class="btn btn-secondary" title="Next page">→</button>' +
            '</div>' + 
//            '<div class="btn-group mr-2" role="group">' +
//            '<button type="button" class="btn btn-secondary" title="Load contents">Load</button>' +
//            '<button type="button" class="btn btn-secondary" title="Save contents">Save</button>' +
//            '</div>' + 
            '<div class="input-group">' +
            _help_mjs__WEBPACK_IMPORTED_MODULE_2__.baseSelectMarkupHTML(display3vl, model.get('bits'), 'hex') +
            '</div>' +
            '</div>' +
            '<table class="memeditor">' +
            '</table>'));
        const words = model.get('words');
        const memdata = model.memdata;
        const ahex = Math.ceil(model.get('abits')/4);
        const rows = 8;
        let columns, address = 0;
        const get_numbase = () => div.find('select[name=base]').val();
        const getCell = (addr) => {
            const r = Math.floor((addr - address) / columns);
            const c = addr - address - r * columns;
            return div.find('table tr:nth-child('+(r+1)+') td:nth-child('+(c+2)+') input');
        }
        const clearMarkings = (sigs) => {
            for (const [portname, port] of model._memrdports()) {
                getCell(model._calcaddr(sigs[portname + 'addr'])).removeClass('isread');
            }
            for (const [portname, port] of model._memwrports()) {
                getCell(model._calcaddr(sigs[portname + 'addr'])).removeClass('iswrite');
            }
        }
        const displayMarkings = (sigs) => {
            for (const [portname, port] of model._memrdports()) {
                getCell(model._calcaddr(sigs[portname + 'addr'])).addClass('isread');
            }
            for (const [portname, port] of model._memwrports()) {
                getCell(model._calcaddr(sigs[portname + 'addr'])).addClass('iswrite');
            }
        }
        const updateStuff = () => {
            const numbase = get_numbase();
            div.find('button[name=prev]').prop('disabled', address <= 0);
            div.find('button[name=next]').prop('disabled', address + rows * columns >= words);
            let row = div.find('table tr:first-child');
            const memdata = model.memdata;
            for (let r = 0; r < rows; r++, row = row.next()) {
                if (address + r * columns >= words) break;
                const addrs = (address + r * columns).toString(16);
                let col = row.find('td:first-child');
                col.text('0'.repeat(ahex - addrs.length) + addrs)
                col = col.next();
                for (let c = 0; c < columns; c++, col = col.next()) {
                    if (address + r * columns + c >= words) break;
                    col.find('input').val(display3vl.show(numbase, memdata.get(address + r * columns + c)))
                                     .removeClass('invalid');
                }
            }
            displayMarkings(model.get('inputSignals'));
        };
        const redraw = () => {
            const numbase = get_numbase();
            const ptrn = display3vl.pattern(numbase);
            const ds = display3vl.size(numbase, model.get('bits')); 
            columns = Math.min(words, 16, Math.ceil(32/ds));
            address = Math.max(0, Math.min(words - rows * columns, address));
            const table = div.find('table');
            table.empty();
            for (let r = 0; r < rows; r++) {
                if (address + r * columns >= words) break;
                const row = jquery__WEBPACK_IMPORTED_MODULE_0__('<tr>');
                jquery__WEBPACK_IMPORTED_MODULE_0__('<td>').appendTo(row);
                for (let c = 0; c < columns; c++) {
                    if (address + r * columns + c >= words) break;
                    const col = jquery__WEBPACK_IMPORTED_MODULE_0__('<td>');
                    jquery__WEBPACK_IMPORTED_MODULE_0__('<input type="text">')
                        .attr('size', ds)
                        .attr('maxlength', ds)
                        .attr('pattern', ptrn)
                        .appendTo(col);
                    col.appendTo(row);
                }
                row.appendTo(table);
            }
            updateStuff();
        };
        redraw();
        div.find("select[name=base]").on('change', redraw);
        div.find("button[name=prev]").on('click', () => {
            clearMarkings(model.get('inputSignals'));
            address = Math.max(0, address - rows * columns);
            updateStuff();
        });
        div.find("button[name=next]").on('click', () => {
            clearMarkings(model.get('inputSignals'));
            address = Math.min(words - rows * columns, address + rows * columns);
            updateStuff();
        });
        div.on("change", "input", (evt) => {
            const numbase = get_numbase();
            const target = jquery__WEBPACK_IMPORTED_MODULE_0__(evt.target);
            const c = target.closest('td').index() - 1;
            const r = target.closest('tr').index();
            const addr = address + r * columns + c;
            const bits = model.get('bits');
            if (display3vl.validate(numbase, evt.target.value, bits)) {
                const val = display3vl.read(numbase, evt.target.value, bits);
                memdata.set(addr, val);
                model.trigger('manualMemChange', model, addr, val);
                target.removeClass('invalid');
            } else {
                target.addClass('invalid');
            }
        });
        const mem_change_cb = (addr, data) => {
            if (addr < address || addr > address + rows * columns) return;
            const numbase = get_numbase();
            const z = getCell(addr)
                .val(display3vl.show(numbase, memdata.get(addr)))
                .removeClass('invalid')
                .removeClass('flash');
            setTimeout(() => { z.addClass('flash') }, 10);
        };
        const input_change_cb = (gate, sigs) => {
            clearMarkings(model.previous('inputSignals'));
            displayMarkings(sigs);
        };
        model.on("memChange", mem_change_cb);
        model.on("change:inputSignals", input_change_cb);
        this.paper.trigger('open:memorycontent', div, () => {
            div.remove();
            model.off("memChange", mem_change_cb);
            model.off("change:inputSignals", input_change_cb);
        });
        return false;
    }
});



/***/ },

/***/ "./src/cells/mux.mjs"
/*!***************************!*\
  !*** ./src/cells/mux.mjs ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenMux: () => (/* binding */ GenMux),
/* harmony export */   GenMuxView: () => (/* binding */ GenMuxView),
/* harmony export */   Mux: () => (/* binding */ Mux),
/* harmony export */   Mux1Hot: () => (/* binding */ Mux1Hot),
/* harmony export */   Mux1HotView: () => (/* binding */ Mux1HotView),
/* harmony export */   MuxSparse: () => (/* binding */ MuxSparse),
/* harmony export */   MuxSparseView: () => (/* binding */ MuxSparseView),
/* harmony export */   MuxView: () => (/* binding */ MuxView)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");






// add offset of 30pt to account for the top selection port and oversized box at layout time
const mux_pos_offset = 20;
const mux_size_offset = 30;

// Multiplexers
const GenMux = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.define('GenMux', {
    /* default properties */
    bits: { in: 1, sel: 1 },
    
    size: { width: 40, height: undefined },
    ports: {
        groups: {
            'in2': {
                position: { name: 'top', args: { y: 5 } },
                attrs: _joint_core__WEBPACK_IMPORTED_MODULE_0__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_1__.portGroupAttrs, {
                    wire: { x2: 0, y2: -25 },
                    port: { magnet: 'passive', refY: -25 },
                    bits: { refDx: -5, refDy: 2, textAnchor: 'start' }
                }),
                z: -1
            }
        }
    },
    attrs: { label: { refDy: 8 } }
}, {
    initialize() {
        const bits = this.get('bits');
        const ports = [
            { id: 'sel', group: 'in2', dir: 'in', bits: bits.sel },
            { id: 'out', group: 'out', dir: 'out', bits: bits.in }
        ];
        
        const ins = this.muxInputs(bits.sel);
        this.get('size').height = ins.length*16+8;
        
        const vpath = [
            [2, 0],
            [5, 5],
            [10, -5]
        ];
        const path = 'M' + vpath.map(l => l.join(' ')).join(' L');
        
        for (const [num, label] of ins.entries()) {
            const port = { id: 'in' + num, group: 'in', dir: 'in', bits: bits.in, decor: path };
            if (label) {
                port.portlabel = String(label);
                port.labelled = true;
            }
            ports.push(port);
        }
        
        this.get('ports').items = ports;
        
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype.initialize.apply(this, arguments);
        
        const drawBorder = (size) => this.attr(['body', 'points'], 
            [[0,-5],[size.width,5],[size.width,size.height-5],[0,size.height+5]]
                .map(x => x.join(',')).join(' '));
        drawBorder(this.get('size'));
        
        this.on('change:size', (_, size) => drawBorder(size));
    },
    operation(data) {
        const i = this.muxInput(data.sel);
        if (i === undefined) return { out: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.xes(this.get('bits').in) };
        return { out: data['in' + i] };
    },
    getLayoutSize() {
        const size = this.size();
        size.height += mux_size_offset;
        return size;
    },
    setLayoutPosition(position) {
        this.set('position', {
            x: position.x,
            y: position.y + mux_pos_offset
        });
    },
    getPortsPositions() {
        const positions = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype.getPortsPositions.apply(this, arguments);
        const res = {};
        for (const id in positions) {
            res[id] = { ...positions[id] };
            res[id].y = res[id].y + mux_pos_offset;
        }
        return res;
    },
    markup: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype.markup.concat([{
            tagName: 'polygon',
            className: 'body',
            selector: 'body'
        }
    ]),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype._gateParams.concat(['bits']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype._unsupportedPropChanges.concat(['bits']),
    _operationHelpers: _base_mjs__WEBPACK_IMPORTED_MODULE_1__.Gate.prototype._operationHelpers.concat(['muxInput'])
});
const GenMuxView = _base_mjs__WEBPACK_IMPORTED_MODULE_1__.GateView.extend({
    initialize() {
        this.ins = this.model.muxInputs(this.model.get('bits').sel);
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.GateView.prototype.initialize.apply(this, arguments);
    },
    confirmUpdate(flags) {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.GateView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL')) {
            this._updateMux(this.model.get('inputSignals'));
        }
    },
    render() {
        _base_mjs__WEBPACK_IMPORTED_MODULE_1__.GateView.prototype.render.apply(this, arguments);
        this._updateMux(this.model.get('inputSignals'));
    },
    _updateMux(data) {
        const i = this.model.muxInput(data.sel);
        for (const num of this.ins.keys()) {
            this.$('[port=in' + num + '] path.decor').css('visibility', i == num ? 'visible' : 'hidden');
        }
    }
});

// Multiplexer with binary selection
const Mux = GenMux.define('Mux', {
}, {
    muxInputs: n => Array(1 << n),
    muxInput: i => i.isFullyDefined ? i.toBigInt().toString() : undefined
});
const MuxView = GenMuxView;

// Multiplexer with one-hot selection
const Mux1Hot = GenMux.define('Mux1Hot', {
    attrs: {
        info: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            text: '1Hot',
            transform: 'rotate(90)'
        }
    }
}, {
    markup: GenMux.prototype.markup.concat([{
            tagName: 'text',
            className: 'info',
            selector: 'info'
        }
    ]),
    muxInputs: n => Array(n + 1),
    muxInput: s => {
        const i = s.toArray();
        return s.isFullyDefined && i.filter(x => x == 1).length <= 1
            ? String(i.indexOf(1)+1) : undefined
    }
});
const Mux1HotView = GenMuxView;

const MuxSparse = GenMux.define('MuxSparse', {
    /* default properties */
    inputs: undefined,
    default_input: false
}, {
    initialize() {
        const inputs = this.get('inputs');
        for (let i = 0; i < inputs.length; i++)
            if (typeof inputs[i] != 'bigint')
                inputs[i] = BigInt(inputs[i]);
        GenMux.prototype.initialize.apply(this, arguments);
    },
    muxInputs(n) {
        if (this.get('default_input'))
            return ['*'].concat(this.get('inputs'))
        else
            return this.get('inputs');
    },
    muxInput(i) {
        const deflt = this.get('default_input');
        if (!i.isFullyDefined) return undefined;
        const idx = this.get('inputs').indexOf(i.toBigInt());
        return idx < 0 ? (deflt ? 0 : undefined) : (deflt ? idx + 1 : idx);
    },
    _gateParams: GenMux.prototype._gateParams.concat(['inputs', 'default_input']),
    _unsupportedPropChanges: GenMux.prototype._unsupportedPropChanges.concat(['inputs', 'default_input'])
});
const MuxSparseView = GenMuxView;



/***/ },

/***/ "./src/cells/subcircuit.mjs"
/*!**********************************!*\
  !*** ./src/cells/subcircuit.mjs ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subcircuit: () => (/* binding */ Subcircuit),
/* harmony export */   SubcircuitView: () => (/* binding */ SubcircuitView)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/dia/Graph.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");
/* harmony import */ var _base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.mjs */ "./src/cells/base.mjs");
/* harmony import */ var _io_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io.mjs */ "./src/cells/io.mjs");






// add offset of 10pt to account for the top label at layout time
const subcircuit_pos_offset = 10;
const subcircuit_size_offset = 10;

// Subcircuit model -- embeds a circuit graph in an element
const Subcircuit = _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.define('Subcircuit', {
    /* default properties */
    propagation: 0,
    warning: false,

    attrs: {
        wrapper: {
            refWidth: 1, refHeight: 1,
            stroke: 'red', strokeWidth: 10
        },
        type: {
            refX: .5, refY: -10,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            fontSize: '8pt'
        }
    }
}, {
    initialize() {
        this.bindAttrToProp('type/text', 'celltype');

        const graph = this.get('graph');
        console.assert(graph instanceof _joint_core__WEBPACK_IMPORTED_MODULE_0__.Graph);
        graph.set('subcircuit', this);
        const IOs = graph.getCells()
            .filter((cell) => cell instanceof _io_mjs__WEBPACK_IMPORTED_MODULE_3__.IO);
        const inputs = IOs.filter((cell) => cell instanceof _io_mjs__WEBPACK_IMPORTED_MODULE_3__.Input);
        const outputs = IOs.filter((cell) => cell instanceof _io_mjs__WEBPACK_IMPORTED_MODULE_3__.Output);
        function sortfun(x, y) {
            if (x.has('order') || y.has('order'))
                return x.get('order') - y.get('order');
            return x.get('net').localeCompare(y.get('net'));
        }
        inputs.sort(sortfun);
        outputs.sort(sortfun);
        const vcount = Math.max(inputs.length, outputs.length);
        const size = { width: 80, height: vcount*16+8 };
        const ports = [], iomap = {};
        for (const [num, io] of inputs.entries()) {
            ports.push({ id: io.get('net'), group: 'in', dir: 'in', bits: io.get('bits'), labelled: true });
        }
        for (const [num, io] of outputs.entries()) {
            ports.push({ id: io.get('net'), group: 'out', dir: 'out', bits: io.get('bits'), labelled: true });
        }
        for (const io of IOs) {
            iomap[io.get('net')] = io.get('id');
        }
        this.set('size', size);
        this.set('circuitIOmap', iomap);
        this.get('ports').items = ports;
        this.set('warning', graph._warnings > 0);

        _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype.initialize.apply(this, arguments);
    },
    _resetPortValue(port) {
        const iomap = this.get('circuitIOmap');
        const graph = this.get('graph');
        if (port.dir == 'in')
            return graph.getCell(iomap[port.id]).get('outputSignals').out;
        if (port.dir == 'out')
            return graph.getCell(iomap[port.id]).get('inputSignals').in;
        return _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype._resetPortValue.call(this, port);
    },
    getLayoutSize() {
        const size = this.size();
        size.height += subcircuit_size_offset;
        return size;
    },
    setLayoutPosition(position) {
        this.set('position', {
            x: position.x,
            y: position.y + subcircuit_pos_offset
        });
    },
    getPortsPositions() {
        const positions = _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype.getPortsPositions.apply(this, arguments);
        const res = {};
        for (const id in positions) {
            res[id] = { ...positions[id] };
            res[id].y = res[id].y + subcircuit_pos_offset;
        }
        return res;
    },
    markup: [{
            tagName: 'rect',
            selector: 'wrapper'
        }
    ].concat(_base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype.markup, [{
            tagName: 'text',
            className: 'type',
            selector: 'type'
        }
    ], _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype.markupZoom),
    _gateParams: _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype._gateParams.concat(['celltype']),
    _unsupportedPropChanges: _base_mjs__WEBPACK_IMPORTED_MODULE_2__.Box.prototype._unsupportedPropChanges.concat(['celltype'])
});

const SubcircuitView = _base_mjs__WEBPACK_IMPORTED_MODULE_2__.BoxView.extend({
    attrs: _joint_core__WEBPACK_IMPORTED_MODULE_1__.merge({}, _base_mjs__WEBPACK_IMPORTED_MODULE_2__.BoxView.prototype.attrs, {
        warning: {
            warn: { wrapper: { 'stroke-opacity': '0.5' } },
            none: { wrapper: { 'stroke-opacity': '0' } }
        }
    }),
    _autoResizeBox: true,
    presentationAttributes: _base_mjs__WEBPACK_IMPORTED_MODULE_2__.BoxView.addPresentationAttributes({
        warning: 'WARNING'
    }),
    confirmUpdate(flags) {
        _base_mjs__WEBPACK_IMPORTED_MODULE_2__.BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'WARNING')) {
            this._updateWarning();
        }
    },
    _updateWarning() {
        const warning = this.model.get('warning');
        const attrs = this.attrs.warning[
            warning ? 'warn' : 'none'
        ];
        this._applyAttrs(attrs);
    },
    update() {
        _base_mjs__WEBPACK_IMPORTED_MODULE_2__.BoxView.prototype.update.apply(this, arguments);
        this._updateWarning();
    },
    events: {
        "click foreignObject.tooltip": "stopprop",
        "mousedown foreignObject.tooltip": "stopprop",
        "touchstart foreignObject.tooltip": "stopprop", // make sure the input receives focus
        "click a.zoom": "zoomInCircuit"
    },
    zoomInCircuit(evt) {
        evt.stopPropagation();
        this.paper.trigger('open:subcircuit', this.model);
        return false;
    }
});



/***/ },

/***/ "./src/engines/worker-worker.mjs"
/*!***************************************!*\
  !*** ./src/engines/worker-worker.mjs ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cells.mjs */ "./src/cells.mjs");
/* harmony import */ var fastpriorityqueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastpriorityqueue */ "./node_modules/fastpriorityqueue/FastPriorityQueue.js");
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");





const specialGates = new Set(['Subcircuit', 'Input', 'Output', 'Button', 'Lamp', 'NumEntry', 'NumDisplay']);

class Link {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}

class Gate {
    constructor(id, graph, gateParams, ports, inputSignals, outputSignals) {
        this.id = id;
        this.graph = graph;
        this.special = specialGates.has(gateParams.type);
        this.isSubcircuit = gateParams.type == 'Subcircuit';
        this.isOutput = gateParams.type == 'Output';
        const cell = _cells_mjs__WEBPACK_IMPORTED_MODULE_0__[gateParams.type].prototype;
        this.operation = cell.operation;
        for (const helper of cell._operationHelpers)
            this[helper] = cell[helper];
        this.links = new Set();
        this._links_to = Object.create(null);
        this._params = gateParams;
        this._params.inputSignals = Object.create(null);
        this._params.outputSignals = Object.create(null);
        this._presentationParams = cell._presentationParams;
        this._presentationParamChanged = Object.create(null);
        this._monitors = Object.create(null);
        this._ports = Object.create(null);
        for (const port of ports) {
            this._ports[port.id] = port;
            this._monitors[port.id] = new Set();
            if (port.dir == "in")
                this._params.inputSignals[port.id] = _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromClonable(inputSignals[port.id]);
            if (port.dir == "out") {
                this._params.outputSignals[port.id] = _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromClonable(outputSignals[port.id]);
                this._links_to[port.id] = new Set();
            }
        }
        cell.prepare.call(this);
    }
    get(name) {
        return this._params[name];
    }
    set(name, value) {
        this._params[name] = value;
        if (this._presentationParams.includes(name)) {
            worker._markPresentationParam(this, name);
        }
    }
    addLinkTo(port, target) {
        this._links_to[port].add(target);
    }
    removeLinkTo(port, target) {
        this._links_to[port].delete(target);
    }
    addLink(linkId) {
        this.links.add(linkId);
    }
    removeLink(linkId) {
        this.links.delete(linkId);
    }
    targets(port) {
        return this._links_to[port];
    }
    getPort(port) {
        return this._ports[port];
    }
    getPorts() {
        return Object.values(this._ports);
    }
    trigger(event, ...args) {
        postMessage({ type: 'gateTrigger', args: [this.graph.id, this.id, event, args] });
    }
    monitor(port, monitorId) {
        this._monitors[port].add(monitorId);
    }
    unmonitor(port, monitorId) {
        this._monitors[port].delete(Number(monitorId));
    }
    getMonitors(port) {
        return this._monitors[port];
    }
}

class Graph {
    constructor(id) {
        this.id = id;
        this._gates = {};
        this._links = {};
        this._observed = false;
        this._subcircuit = null;
    }
    addLink(linkId, source, target) {
        this._links[linkId] = new Link(source, target);
        this._gates[source.id].addLinkTo(source.port, target);
        this._gates[source.id].addLink(linkId);
        this._gates[target.id].addLink(linkId);
    }
    addGate(gateId, gateParams, ports, inputSignals, outputSignals) {
        this._gates[gateId] = new Gate(gateId, this, gateParams, ports, inputSignals, outputSignals);
    }
    removeLink(linkId) {
        const link = this._links[linkId];
        this._gates[link.source.id].removeLinkTo(link.source.port, link.target);
        this._gates[link.source.id].removeLink(linkId);
        this._gates[link.target.id].removeLink(linkId);
        delete this._links[linkId];
    }
    removeGate(gateId) {
        for (const linkId of this._gates[gateId].links)
            this.removeLink(linkId);
        this._gates[gateId].graph = null;
        delete this._gates[gateId];
    }
    getGate(gateId) {
        return this._gates[gateId];
    }
    getLink(linkId) {
        return this._links[linkId];
    }
    getGates() {
        return Object.values(this._gates);
    }
    observe() {
        this._observed = true;
    }
    unobserve() {
        this._observed = false;
    }
    get observed() {
        return this._observed;
    }
    setSubcircuit(gate) {
        this._subcircuit = gate;
    }
    get subcircuit() {
        return this._subcircuit;
    }
}

class WorkerEngineWorker {
    constructor() {
        this._interval = 10;
        this._graphs = Object.create(null);
        this._monitors = Object.create(null);
        this._monitorChecks = Object.create(null);
        this._alarms = Object.create(null);
        this._alarmQueue = new Map();
        this._queue = new Map();
        this._pq = new fastpriorityqueue__WEBPACK_IMPORTED_MODULE_1__();
        this._toUpdate = new Map();
        this._toUpdateParam = new Map();
        this._tick = 0;
        this._sender = setInterval(() => {
            this._sendUpdates();
        }, 25);
        this._updater = null;
    }
    interval(ms) {
        this._interval = ms;
    }
    updateGates(reqid, sendUpdates) {
        const count = this._updateGates();
        if (sendUpdates) this._sendUpdates();
        this._postMonitors();
        this._sendAck(reqid, count);
    }
    _updateGates() {
        if (this._pq.peek() == this._tick) return this._updateGatesNext();
        else {
            const k = this._tick | 0;
            this._tick = (k + 1) | 0;
            return 0;
        }
    }
    updateGatesNext(reqid, sendUpdates) {
        const count = this._updateGatesNext();
        if (sendUpdates) this._sendUpdates();
        this._postMonitors();
        this._sendAck(reqid, count);
    }
    _updateGatesNext() {
        const k = this._pq.poll() | 0;
        console.assert(k >= this._tick);
        this._tick = k;
        const q = this._queue.get(k);
        let count = 0;
        while (q.size) {
            const [gate, args] = q.entries().next().value;
            q.delete(gate);
            if (gate.special) continue;
            const graph = gate.graph;
            if (!graph) continue;
            const newOutputs = gate.operation(args);
            if ('_clock_hack' in newOutputs) {
                delete newOutputs['_clock_hack'];
                this._enqueue(gate);
            }
            this._setGateOutputSignals(gate, newOutputs);
            count++;
        }
        this._queue.delete(k);
        this._tick = (k + 1) | 0;
        return count;
    }
    ping(reqid, sendUpdates) {
        if (sendUpdates) this._sendUpdates();
        this._sendAck(reqid);
    }
    start() {
        this._stop();
        this._updater = setInterval(() => {
            this._updateGates();
            this._postMonitors();
        }, this._interval);
    }
    startFast() {
        this._stop();
        this._updater = setInterval(() => {
            const startTime = Date.now();
            while (Date.now() - startTime < 10 && this._hasPendingEvents() && this._updater) {
                this._updateGatesNext();
                this._postMonitors();
            }
        }, 10);
    }
    stop(reqid, sendUpdates) {
        this._stop();
        if (sendUpdates) this._sendUpdates();
        this._sendAck(reqid);
    }
    _stop() {
        if (this._updater) {
            clearInterval(this._updater);
            this._updater = null;
        }
    }
    addGraph(graphId) {
        console.assert(!(graphId in this._graphs));
        this._graphs[graphId] = new Graph(graphId);
    }
    addLink(graphId, linkId, source, target) {
        const graph = this._graphs[graphId];
        graph.addLink(linkId, source, target);
        const sourceGate = graph.getGate(source.id);
        const targetGate = graph.getGate(target.id);
        const sig = sourceGate.get('outputSignals')[source.port];
        this._setGateInputSignal(targetGate, target.port, sig);
    }
    addGate(graphId, gateId, gateParams, ports, inputSignals, outputSignals) {
        const graph = this._graphs[graphId];
        graph.addGate(gateId, gateParams, ports, inputSignals, outputSignals);
        this._enqueue(graph.getGate(gateId));
    }
    addSubcircuit(graphId, gateId, subgraphId, IOmap) {
        const graph = this._graphs[graphId];
        const gate = graph.getGate(gateId);
        const subgraph = this._graphs[subgraphId];
        gate.set('subgraph', subgraph);
        gate.set('circuitIOmap', IOmap);
        subgraph.setSubcircuit(gate);
        for (const [port, ioId] of Object.entries(IOmap)) {
            const io = subgraph.getGate(ioId);
            if (gate.getPort(port).dir == 'in') {
                this._setGateOutputSignal(io, 'out', gate.get('inputSignals')[port]);
            }
            if (gate.getPort(port).dir == 'out') {
                this._setGateOutputSignal(gate, port, io.get('inputSignals').in);
            }
        }
    }
    removeLink(graphId, linkId) {
        const graph = this._graphs[graphId];
        const link = graph.getLink(linkId);
        graph.removeLink(linkId);
        const targetGate = graph.getGate(link.target.id);
        const sig = _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.xes(targetGate.getPort(link.target.port).bits);
        this._setGateInputSignal(targetGate, link.target.port, sig);
    }
    removeGate(graphId, gateId) {
        this._graphs[graphId].removeGate(gateId);
    }
    observeGraph(graphId) {
        const graph = this._graphs[graphId];
        graph.observe();
        for (const gate of graph.getGates())
            for (const port of gate.getPorts())
                if (port.dir == 'out')
                    this._markUpdate(gate, port.id);
    }
    unobserveGraph(graphId) {
        this._graphs[graphId].unobserve();
    }
    changeInput(graphId, gateId, sig) {
        const gate = this._graphs[graphId].getGate(gateId);
        this._setGateOutputSignals(gate, { out: _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromClonable(sig) });
    }
    changeParam(graphId, gateId, paramName, val) {
        const gate = this._graphs[graphId].getGate(gateId);
        gate.set(paramName, val);
    }
    manualMemChange(graphId, gateId, addr, data) {
        const gate = this._graphs[graphId].getGate(gateId);
        gate.memdata.set(addr, _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromClonable(data));
        this._enqueue(gate);
    }
    monitor(graphId, gateId, port, monitorId, {triggerValues, stopOnTrigger, oneShot, synchronous }) {
        if (triggerValues != undefined)
            for (const k of triggerValues.keys())
                triggerValues[k] = _3vl__WEBPACK_IMPORTED_MODULE_2__.Vector3vl.fromClonable(triggerValues[k]);
        const gate = this._graphs[graphId].getGate(gateId);
        this._monitors[monitorId] = { gate, port, triggerValues, stopOnTrigger, oneShot, synchronous };
        gate.monitor(port, monitorId);
        if (triggerValues == undefined)
            postMessage({ type: 'monitorValue', args: [monitorId, this._tick, gate.get('outputSignals')[port]] });
    }
    unmonitor(monitorId) {
        const monitor = this._monitors[monitorId];
        if (monitor == undefined) return;
        monitor.gate.unmonitor(monitor.port, monitorId);
        delete this._monitors[monitorId];
        delete this._monitorChecks[monitorId];
    }
    alarm(tick, alarmId, {stopOnAlarm, synchronous}) {
        if (tick <= this._tick) return;
        this._alarms[alarmId] = { tick, stopOnAlarm, synchronous };
        if (!this._alarmQueue.has(tick))
            this._alarmQueue.set(tick, new Set());
        this._alarmQueue.get(tick).add(alarmId);
        this._pq.add(tick-1);
        if (!this._queue.has(tick-1))
            this._queue.set(tick-1, new Map());
    }
    unalarm(alarmId) {
        const alarm = this._alarms[alarmId];
        if (alarm == undefined) return;
        const tick = alarm.tick;
        this._alarmQueue.get(tick).delete(alarmId);
        if (this._alarmQueue.get(tick).size == 0)
            this._alarmQueue.delete(tick);
        delete this._alarms[alarmId];
    }
    _enqueue(gate) {
        const k = (this._tick + gate.get('propagation')) | 0;
        const sq = (() => {
            const q = this._queue.get(k);
            if (q !== undefined) return q;
            const q1 = new Map();
            this._queue.set(k, q1);
            this._pq.add(k);
            return q1;
        })();
        sq.set(gate, Object.assign({}, gate.get('inputSignals')));
    }
    _postMonitors() {
        for (const [monitorId, sig] of Object.entries(this._monitorChecks)) {
            const {triggerValues, stopOnTrigger, oneShot, synchronous} = this._monitors[monitorId];
            let triggered = true;
            if (triggerValues)
                triggered = triggerValues.some((triggerValue) => sig.eq(triggerValue));
            if (triggered) {
                if (oneShot) this.unmonitor(monitorId);
                if (synchronous) this._sendUpdates();
                postMessage({ type: 'monitorValue', args: [monitorId, this._tick, sig, stopOnTrigger, oneShot] });
                if (stopOnTrigger) this._stop();
            }
        }
        this._monitorChecks = Object.create(null);
        if (this._alarmQueue.get(this._tick)) {
            for (const alarmId of this._alarmQueue.get(this._tick)) {
                const { stopOnAlarm, synchronous } = this._alarms[alarmId];
                if (synchronous) this._sendUpdates();
                delete this._alarms[alarmId];
                postMessage({ type: 'alarmReached', args: [alarmId, this._tick, stopOnAlarm] });
                if (stopOnAlarm) this._stop();
            }
            this._alarmQueue.delete(this._tick);
        }
    }
    _setGateOutputSignals(gate, newOutputs) {
        for (const [port, sig] of Object.entries(newOutputs)) {
            this._setGateOutputSignal(gate, port, sig);
        }
    }
    _setGateOutputSignal(gate, port, sig) {
        const outputs = gate.get('outputSignals');
        const oldOutput = outputs[port];
        if (sig.eq(oldOutput)) return;
        outputs[port] = sig;
        this._markUpdate(gate, port);
        for (const target of gate.targets(port)) {
            const targetGate = gate.graph.getGate(target.id);
            this._setGateInputSignal(targetGate, target.port, sig);
        }
        const monitors = gate.getMonitors(port);
        for (const monitorId of monitors)
            this._monitorChecks[monitorId] = sig;
    }
    _setGateInputSignal(targetGate, port, sig) {
        const inputs = targetGate.get('inputSignals');
        const oldInput = inputs[port];
        if (sig.eq(oldInput)) return;
        inputs[port] = sig;
        if (targetGate.isSubcircuit) {
            const subgraph = targetGate.get('subgraph');
            if (!subgraph) return;
            const iomap = targetGate.get('circuitIOmap');
            const gate = subgraph.getGate(iomap[port]);
            if (!gate) return;
            this._setGateOutputSignals(gate, { out: sig });
        } else if (targetGate.isOutput) {
            const subcir = targetGate.graph.subcircuit;
            if (!subcir) return;
            const subcirPort = targetGate.get('net');
            this._setGateOutputSignal(subcir, subcirPort, sig);
        } else {
            this._enqueue(targetGate);
        }
    }
    _markUpdate(gate, port) {
        if (!gate.graph.observed) return;
        const s = (() => {
            const v = this._toUpdate.get(gate);
            if (v !== undefined) return v;
            const r = new Set();
            this._toUpdate.set(gate, r);
            return r;
        })();
        s.add(port);
    }
    _markPresentationParam(gate, param) {
        if (!gate.graph.observed) return;
        const s = (() => {
            const v = this._toUpdateParam.get(gate);
            if (v !== undefined) return v;
            const r = new Set();
            this._toUpdateParam.set(gate, r);
            return r;
        })();
        s.add(param);
    }
    _sendUpdates() {
        const updates = [];
        for (const [gate, ports] of this._toUpdate) {
            const outputSignals = gate.get('outputSignals');
            const outputs = {};
            for (const port of ports)
                outputs[port] = outputSignals[port];
            updates.push([gate.graph.id, gate.id, outputs]);
        }
        this._toUpdate = new Map();
        const pendingEvents = this._hasPendingEvents();
        postMessage({ type: 'update', args: [this._tick, pendingEvents, updates] });
        if (this._toUpdateParam.size > 0) {
            for (const [gate, params] of this._toUpdateParam) {
                for (const param of params)
                    postMessage({ type: 'gateSet', args: [gate.graph.id, gate.id, param, gate.get(param) ] });
            }
            this._toUpdateParam = new Map();
        }
    }
    _sendAck(reqid, response) {
        postMessage({ type: 'ack', args: [reqid, response] });
    }
    _hasPendingEvents() {
        return this._queue.size > 0;
    }
};

const worker = new WorkerEngineWorker();

self.onmessage = (e) => {
    const msg = e.data;
    if ('arg' in msg)
        worker[msg.type](msg.arg);
    else if ('args' in msg)
        worker[msg.type].apply(worker, msg.args);
    else
        worker[msg.type]();
}



/***/ },

/***/ "./src/help.mjs"
/*!**********************!*\
  !*** ./src/help.mjs ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display3vlASCII: () => (/* binding */ Display3vlASCII),
/* harmony export */   baseSelectMarkupHTML: () => (/* binding */ baseSelectMarkupHTML),
/* harmony export */   eqSigs: () => (/* binding */ eqSigs)
/* harmony export */ });
/* harmony import */ var _3vl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 3vl */ "./node_modules/3vl/dist/index.js");




const controlCodes20 = [
    'NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 
    'BS',  'HT',  'LF',  'VT',  'FF',  'CR',  'SO',  'SI', 
    'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB',
    'CAN', 'EM',  'SUB', 'ESC', 'FS',  'GS',  'RS',  'US',
    'SP',  'DEL'];

class Display3vlASCII extends _3vl__WEBPACK_IMPORTED_MODULE_0__.Display3vlWithRegex {
    constructor() {
        super('[\x20-\x7e\xa0-\xff\ufffd\u2400-\u2421]|' + controlCodes20.join('|'))
    }
    get name() {
        return "ascii";
    }
    get sort() {
        return 1;
    }
    can(kind, bits) {
        return bits == 7 || bits == 8;
    }
    read(data, bits) {
        if (data.length == 1) {
            const code = data.charCodeAt(0);
            if (code == 0xfffd) return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.xes(bits);
            if (code == 0x2421) return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.fromHex("7f", bits);
            if (code >= 0x2400 && code <= 0x2420) 
                return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.fromHex((code - 0x2400).toString(16), bits);
            return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.fromHex(code.toString(16), bits);
        } else {
            const code = controlCodes20.indexOf(data);
            if (code < 0) return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.xes(bits);
            if (code == 0x21) return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.fromHex("7f", bits);
            return _3vl__WEBPACK_IMPORTED_MODULE_0__.Vector3vl.fromHex(code.toString(16), bits);
        }
    }
    show(data) {
        if (!data.isFullyDefined) return "\ufffd";
        const code = parseInt(data.toHex(), 16);
        if (code <= 0x20) {
            return String.fromCharCode(0x2400 + code);
        }
        if (code == 0x7f) return "\u2421";
        if (code > 0x7f && code < 0xa0) {
            return "\ufffd";
        }
        return String.fromCharCode(code);
    }
    size(bits) {
        return 1;
    }
}

        
function baseSelectMarkupHTML(display3vl, bits, base) { 
    const markup = display3vl.usableDisplays('read', bits)
        .map(n => '<option value="' + n + '"' + (n == base ? ' selected="selected"' : '') +'>' + n + '</option>');
    return '<select name="base">' + markup.join("") + '</select>';
};

function eqSigs(sigs1, sigs2) {
    for (const k in sigs2) {
        if (!sigs1[k].eq(sigs2[k])) return false;
    }
    return true;
};



/***/ },

/***/ "./src/tools.mjs"
/*!***********************!*\
  !*** ./src/tools.mjs ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleSourceArrowhead: () => (/* binding */ CircleSourceArrowhead),
/* harmony export */   CircleTargetArrowhead: () => (/* binding */ CircleTargetArrowhead),
/* harmony export */   DoublyButton: () => (/* binding */ DoublyButton),
/* harmony export */   MonitorButton: () => (/* binding */ MonitorButton),
/* harmony export */   RemoveButton: () => (/* binding */ RemoveButton)
/* harmony export */ });
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/linkTools/Arrowhead.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/cellTools/Button.mjs");
/* harmony import */ var _joint_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @joint/core */ "./node_modules/@joint/core/src/util/utilHelpers.mjs");




const circleArrowhead = {
    tagName: 'circle',
    attributes: {
        'r': 7,
        'fill': 'black',
        'fill-opacity': 0.3,
        'stroke': 'black',
        'stroke-width': 2,
        'cursor': 'move'
    }
};
const CircleSourceArrowhead = _joint_core__WEBPACK_IMPORTED_MODULE_0__.SourceArrowhead.extend(_joint_core__WEBPACK_IMPORTED_MODULE_2__.merge({}, circleArrowhead));
const CircleTargetArrowhead = _joint_core__WEBPACK_IMPORTED_MODULE_0__.TargetArrowhead.extend(_joint_core__WEBPACK_IMPORTED_MODULE_2__.merge({}, circleArrowhead));

const DoublyButton = _joint_core__WEBPACK_IMPORTED_MODULE_1__.Button.extend({
    update() {
        if (this.relatedView.isShortWire()) {
            this.options.distance = this.options.distanceShort || this.options.distance;
            if (this.options.secondary) this.hide();
        } else {
            this.options.distance = this.options.distanceLong || this.options.distance;
        }
        return _joint_core__WEBPACK_IMPORTED_MODULE_1__.Button.prototype.update.apply(this, arguments);
    }
});
const RemoveButton = DoublyButton.extend({
    name: 'remove',
    children: _joint_core__WEBPACK_IMPORTED_MODULE_1__.Remove.prototype.children,
    options: _joint_core__WEBPACK_IMPORTED_MODULE_1__.Remove.prototype.options
});
const MonitorButton = DoublyButton.extend({
    name: 'monitor',
    children: [{
        tagName: 'circle',
        selector: 'button',
        attributes: {
            'r': 7,
            'fill': '#001DFF',
            'cursor': 'pointer'
        }
    }, {
        tagName: 'path',
        selector: 'icon',
        attributes: {
            'd': 'm -2.5,-0.5 a 2,2 0 1 0 4,0 2,2 0 1 0 -4,0 M 1,1 3,3',
            'fill': 'none',
            'stroke': '#FFFFFF',
            'stroke-width': 2,
            'pointer-events': 'none'
        }
    }],
    options: {
        action(evt) {
            this.notify('link:monitor');
        }
    }
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_3vl_dist_index_js-node_modules_jquery_dist_jquery-exposed_js-node_module-80f129"], () => (__webpack_require__("./src/engines/worker-worker.mjs")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_engines_worker-worker_mjs": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkdigitaljs"] = this["webpackChunkdigitaljs"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_3vl_dist_index_js-node_modules_jquery_dist_jquery-exposed_js-node_module-80f129").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=src_engines_worker-worker_mjs.main.js.map