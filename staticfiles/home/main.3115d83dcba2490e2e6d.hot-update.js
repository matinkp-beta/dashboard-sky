/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/upload.js":
/*!**********************************!*\
  !*** ./src/components/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/area/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/line/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/switch/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nfunction Test(props) {\n  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n\n  function onChange(checked) {\n    setType(checked);\n  }\n\n  console.log(props.data);\n  const data = props.data;\n  var config = {\n    data: data,\n    xField: 'year',\n    yField: 'value',\n    xAxis: {\n      range: [0, 1]\n    },\n    smooth: true,\n    theme: 'light',\n    animation: {\n      appear: {\n        animation: 'path-in',\n        duration: 5000\n      }\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_2__.default, config) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_3__.default, config), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    defaultChecked: true,\n    onChange: onChange\n  }));\n}\n\n;\n\nconst mapStateToProps = state => {\n  return {\n    data: state.chart.data\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    chart: () => dispatch(chartData())\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Test));\n\n//# sourceURL=webpack://test/./src/components/upload.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2836db079c5f4420abce")
/******/ })();
/******/ 
/******/ }
);