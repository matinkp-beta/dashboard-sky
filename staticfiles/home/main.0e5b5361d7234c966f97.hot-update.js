/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/table.js":
/*!*********************************!*\
  !*** ./src/components/table.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nconst columns = [{\n  title: 'Name',\n  dataIndex: 'name',\n  width: '30%'\n}, {\n  title: 'Age',\n  dataIndex: 'age',\n  sorter: (a, b) => a.age - b.age\n}];\nconst data = [{\n  key: '1',\n  name: 'John Brown',\n  age: 32,\n  address: 'New York No. 1 Lake Park'\n}, {\n  key: '2',\n  name: 'Jim Green',\n  age: 42,\n  address: 'London No. 1 Lake Park'\n}, {\n  key: '3',\n  name: 'Joe Black',\n  age: 32,\n  address: 'Sidney No. 1 Lake Park'\n}, {\n  key: '4',\n  name: 'Jim Red',\n  age: 32,\n  address: 'London No. 2 Lake Park'\n}];\n\nfunction onChange(pagination, filters, sorter, extra) {\n  console.log('params', pagination, filters, sorter, extra);\n}\n\nfunction TableData(params) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {\n    columns: columns,\n    dataSource: data,\n    onChange: onChange\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableData);\n\n//# sourceURL=webpack://test/./src/components/table.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f795391f2e1ead1450d")
/******/ })();
/******/ 
/******/ }
);