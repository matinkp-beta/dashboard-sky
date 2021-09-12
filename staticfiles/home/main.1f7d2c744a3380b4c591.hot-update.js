/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/store/reducers/test.js":
/*!************************************!*\
  !*** ./src/store/reducers/test.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/store/actions/actionTypes.js\");\n/* harmony import */ var _utilites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites */ \"./src/store/utilites.js\");\n\n\nconst initialState = {\n  description: \"\"\n};\n\nfunction reducerTest(state, action) {\n  return (0,_utilites__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n    description: action.testAction.description\n  });\n}\n\nconst testReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.TEST:\n      return reducerTest(state, action);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testReducer);\n\n//# sourceURL=webpack://test/./src/store/reducers/test.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fbd09734268c083982d1")
/******/ })();
/******/ 
/******/ }
);