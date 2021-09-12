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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _store_reducers_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/test */ \"./src/store/reducers/test.js\");\n/* harmony import */ var _store_reducers_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers/chart */ \"./src/store/reducers/chart.js\");\n/* harmony import */ var _store_reducers_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_store_reducers_chart__WEBPACK_IMPORTED_MODULE_6__);\n\n //import './index.css';\n\n\n\n\n\n\n\nconst composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_7__.compose;\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({\n  test: _store_reducers_test__WEBPACK_IMPORTED_MODULE_5__.default,\n  chart: (_store_reducers_chart__WEBPACK_IMPORTED_MODULE_6___default())\n});\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(rootReducer, composeEnhances((0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.default)));\nconst app = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null));\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/store/reducers/chart.js":
/*!*************************************!*\
  !*** ./src/store/reducers/chart.js ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/matin/Programming/frozen/frozen-frontend/src/store/reducers/chart.js: 'Const declarations' require an initialization value. (4:18)\\n\\n\\u001b[0m \\u001b[90m 2 |\\u001b[39m \\u001b[36mimport\\u001b[39m { updateObject } \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"../utilites\\\"\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 |\\u001b[39m \\u001b[36mconst\\u001b[39m initialState {\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m                   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m     data\\u001b[33m:\\u001b[39m[]\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m }\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 |\\u001b[39m\\u001b[0m\\n    at Object._raise (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:810:17)\\n    at Object.raiseWithData (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:803:17)\\n    at Object.raise (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:764:17)\\n    at Object.parseVar (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:13270:18)\\n    at Object.parseVarStatement (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:13080:10)\\n    at Object.parseStatementContent (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:12663:21)\\n    at Object.parseStatement (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:12596:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:13185:25)\\n    at Object.parseBlockBody (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:13176:10)\\n    at Object.parseProgram (/home/matin/Programming/frozen/frozen-frontend/node_modules/@babel/parser/lib/index.js:12519:10)\");\n\n//# sourceURL=webpack://test/./src/store/reducers/chart.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cac05a161bee9b7c3e58")
/******/ })();
/******/ 
/******/ }
);