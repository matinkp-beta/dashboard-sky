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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LayoutComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/layout/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/LaptopOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/NotificationOutlined.js\");\n\n\n\nconst {\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_1__.default;\nconst {\n  Header,\n  Content,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_2__.default;\nclass LayoutComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {\n      className: \"header\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"logo\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {\n      theme: \"dark\",\n      mode: \"horizontal\",\n      defaultSelectedKeys: ['2']\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"1\"\n    }, \"nav 1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"2\"\n    }, \"nav 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"3\"\n    }, \"nav 3\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sider, {\n      width: 200,\n      className: \"site-layout-background\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {\n      mode: \"inline\",\n      defaultSelectedKeys: ['1'],\n      defaultOpenKeys: ['sub1'],\n      theme: \"dark\",\n      style: {\n        height: '100%',\n        borderRight: 0\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubMenu, {\n      key: \"sub1\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.default, null),\n      title: \"subnav 1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"1\"\n    }, \"option1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"2\"\n    }, \"option2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"3\"\n    }, \"option3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"4\"\n    }, \"option4\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubMenu, {\n      key: \"sub2\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.default, null),\n      title: \"subnav 2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"5\"\n    }, \"option5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"6\"\n    }, \"option6\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"7\"\n    }, \"option7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"8\"\n    }, \"option8\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubMenu, {\n      key: \"sub3\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.default, null),\n      title: \"subnav 3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"9\"\n    }, \"option9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"10\"\n    }, \"option10\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"11\"\n    }, \"option11\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default.Item, {\n      key: \"12\"\n    }, \"option12\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, {\n      style: {\n        padding: '0 24px 24px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, {\n      className: \"site-layout-background\",\n      style: {\n        padding: 24,\n        margin: 0,\n        bottom: 0,\n        minHeight: 565\n      }\n    }, this.props.children))));\n  }\n\n}\n\n//# sourceURL=webpack://test/./src/components/avatar.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("79b0f355498214beb29b")
/******/ })();
/******/ 
/******/ }
);