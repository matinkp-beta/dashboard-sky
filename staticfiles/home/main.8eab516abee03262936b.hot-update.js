/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./node_modules/@ant-design/charts/es/plots/area/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ant-design/charts/es/plots/area/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @antv/g2plot */ \"./node_modules/@antv/g2plot/esm/index.js\");\n/* harmony import */ var _hooks_useChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useChart */ \"./node_modules/@ant-design/charts/es/hooks/useChart.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ \"./node_modules/@ant-design/charts/es/util/getChart.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base */ \"./node_modules/@ant-design/charts/es/errorBoundary/index.js\");\n/* harmony import */ var _util_createLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/createLoading */ \"./node_modules/@ant-design/charts/es/util/createLoading.js\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\n\n\n\nvar AreaChart = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {\n    var chartRef = props.chartRef, _a = props.style, style = _a === void 0 ? {\n        height: 'inherit',\n    } : _a, className = props.className, loading = props.loading, loadingTemplate = props.loadingTemplate, errorTemplate = props.errorTemplate, rest = __rest(props, [\"chartRef\", \"style\", \"className\", \"loading\", \"loadingTemplate\", \"errorTemplate\"]);\n    var _b = (0,_hooks_useChart__WEBPACK_IMPORTED_MODULE_2__.default)(_antv_g2plot__WEBPACK_IMPORTED_MODULE_1__.Area, rest), chart = _b.chart, container = _b.container;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        (0,_util__WEBPACK_IMPORTED_MODULE_3__.getChart)(chartRef, chart.current);\n    }, [chart.current]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () { return ({\n        getChart: function () { return chart.current; },\n    }); });\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_base__WEBPACK_IMPORTED_MODULE_4__.default, { errorTemplate: errorTemplate },\n        loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_createLoading__WEBPACK_IMPORTED_MODULE_5__.default, { loadingTemplate: loadingTemplate }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: className, style: style, ref: container })));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AreaChart);\n\n\n//# sourceURL=webpack://test/./node_modules/@ant-design/charts/es/plots/area/index.js?");

/***/ }),

/***/ "./src/components/upload.js":
/*!**********************************!*\
  !*** ./src/components/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/line/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/area/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/switch/index.js\");\n\n\n\n\nfunction Test() {\n  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n\n  function onChange(checked) {\n    setType(checked);\n  }\n\n  const data = [{\n    year: '1991',\n    value: 3\n  }, {\n    year: '1992',\n    value: 4\n  }, {\n    year: '1993',\n    value: 3.5\n  }, {\n    year: '1994',\n    value: 5\n  }, {\n    year: '1995',\n    value: 4.9\n  }, {\n    year: '1996',\n    value: 6\n  }, {\n    year: '1997',\n    value: 7\n  }, {\n    year: '1998',\n    value: 9\n  }, {\n    year: '1999',\n    value: 13\n  }];\n  var config = {\n    data: data,\n    xField: 'year',\n    yField: 'value',\n    xAxis: {\n      range: [0, 1]\n    },\n    smooth: true,\n    theme: 'light',\n    animation: {\n      appear: {\n        animation: 'path-in',\n        duration: 5000\n      }\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_1__.default, config) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_2__.default, config), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {\n    defaultChecked: true,\n    onChange: onChange\n  }));\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n\n//# sourceURL=webpack://test/./src/components/upload.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e206693792081859c7d3")
/******/ })();
/******/ 
/******/ }
);