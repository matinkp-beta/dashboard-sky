/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/avatar.js":
/*!**********************************!*\
  !*** ./src/components/avatar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/tabs/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/checkbox/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n\n\nconst {\n  TabPane\n} = antd__WEBPACK_IMPORTED_MODULE_1__.default;\nconst CheckboxGroup = antd__WEBPACK_IMPORTED_MODULE_2__.default.Group;\nconst OperationsSlot = {\n  left: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: \"tabs-extra-demo-button\"\n  }, \"Left Extra Action\"),\n  right: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, null, \"Right Extra Action\")\n};\nconst options = ['left', 'right'];\n\nconst Demo = () => {\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_0__.useState(['left', 'right']);\n  const slot = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {\n    if (position.length === 0) return null;\n    return position.reduce((acc, direction) => ({ ...acc,\n      [direction]: OperationsSlot[direction]\n    }), {});\n  }, [position]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {\n    tabBarExtraContent: slot\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {\n    tab: \"Tab 1\",\n    key: \"1\"\n  }, \"Content of tab 1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {\n    tab: \"Tab 2\",\n    key: \"2\"\n  }, \"Content of tab 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPane, {\n    tab: \"Tab 3\",\n    key: \"3\"\n  }, \"Content of tab 3\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);\n\n//# sourceURL=webpack://test/./src/components/avatar.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2eb0b3f9f666d5efc9c")
/******/ })();
/******/ 
/******/ }
);