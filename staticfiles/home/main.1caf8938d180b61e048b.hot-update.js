/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/dasboard.js":
/*!************************************!*\
  !*** ./src/components/dasboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/column/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/area/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/line/index.js\");\n/* harmony import */ var _ant_design_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/charts */ \"./node_modules/@ant-design/charts/es/plots/gauge/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/select/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/chart */ \"./src/store/actions/chart.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/row/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/col/index.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ \"./src/components/table.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst {\n  Option\n} = antd__WEBPACK_IMPORTED_MODULE_4__.default;\n\nfunction Test(props) {\n  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [Value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [isempty, setIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    props.chart();\n    console.log(\"helllooooo\");\n  }, []);\n\n  function handleChangeSelect(value) {\n    console.log(`selected ${value}`);\n    setValue(value);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [Value]);\n\n  function onChange(checked) {\n    setType(checked);\n  }\n\n  console.log(props.data);\n  var config = {\n    data: props.data,\n    xField: 'year',\n    yField: 'value',\n    xAxis: {\n      range: [0, 1]\n    },\n    smooth: true,\n    theme: 'dark',\n    animation: {\n      appear: {\n        animation: 'path-in',\n        duration: 5000\n      }\n    }\n  };\n  var config1 = {\n    percent: 0.25,\n    outline: {\n      border: 4,\n      distance: 8\n    },\n    wave: {\n      length: 128\n    }\n  };\n  var config2 = {\n    percent: 0.75,\n    range: {\n      color: '#30BF78'\n    },\n    indicator: {\n      pointer: {\n        style: {\n          stroke: '#D0D0D0'\n        }\n      },\n      pin: {\n        style: {\n          stroke: '#D0D0D0'\n        }\n      }\n    },\n    axis: {\n      label: {\n        formatter: function formatter(v) {\n          return Number(v) * 100;\n        }\n      },\n      subTickLine: {\n        count: 3\n      }\n    },\n    statistic: {\n      content: {\n        formatter: function formatter(_ref) {\n          var percent = _ref.percent;\n          return 'Rate: '.concat((percent * 100).toFixed(0), '%');\n        },\n        style: {\n          color: 'rgba(0,0,0,0.65)',\n          fontSize: 12\n        }\n      }\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_7__.default, _extends({}, config, {\n    autoFit: false,\n    width: 200,\n    height: 150\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_8__.default, _extends({}, config, {\n    autoFit: false,\n    width: 200,\n    height: 150\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_9__.default, _extends({}, config, {\n    autoFit: false,\n    width: 200,\n    height: 150\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_10__.default, _extends({}, config2, {\n    autoFit: true,\n    width: 200,\n    height: 150\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 15\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_8__.default, config), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_charts__WEBPACK_IMPORTED_MODULE_9__.default, config)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    span: 7,\n    offset: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_table__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    defaultValue: \"area\",\n    style: {\n      width: 120\n    },\n    onChange: handleChangeSelect\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {\n    value: \"line\"\n  }, \"Line\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {\n    value: \"area\"\n  }, \"Area\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {\n    value: \"columns\"\n  }, \"Columns\"))));\n}\n\n;\n\nconst mapStateToProps = state => {\n  return {\n    data: state.chart.data\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    chart: () => dispatch((0,_store_actions_chart__WEBPACK_IMPORTED_MODULE_2__.chartDataAction)())\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Test));\n\n//# sourceURL=webpack://test/./src/components/dasboard.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21a1fd127e524a620149")
/******/ })();
/******/ 
/******/ }
);