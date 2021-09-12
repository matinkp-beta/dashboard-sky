/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _store_reducers_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/test */ \"./src/store/reducers/test.js\");\n/* harmony import */ var _store_reducers_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers/chart */ \"./src/store/reducers/chart.js\");\n\n //import './index.css';\n\n\n\n\n\n\n\nconst composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_7__.compose;\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({\n  test: _store_reducers_test__WEBPACK_IMPORTED_MODULE_5__.default,\n  chart: _store_reducers_chart__WEBPACK_IMPORTED_MODULE_6__.default\n});\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(rootReducer, composeEnhances((0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.default)));\nconst app = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null));\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/store/reducers/chart.js":
/*!*************************************!*\
  !*** ./src/store/reducers/chart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/store/actions/actionTypes.js\");\n/* harmony import */ var _utilites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites */ \"./src/store/utilites.js\");\n\n\nconst initialState = {\n  data: []\n};\n\nfunction chartData(state, action) {\n  return (0,_utilites__WEBPACK_IMPORTED_MODULE_1__.updateObject)(state, {\n    data: action.data\n  });\n}\n\nconst chartReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ChartStart:\n      return chartData(state, action);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartReducer);\n\n//# sourceURL=webpack://test/./src/store/reducers/chart.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c595b1aba12194b9a7bf")
/******/ })();
/******/ 
/******/ }
);