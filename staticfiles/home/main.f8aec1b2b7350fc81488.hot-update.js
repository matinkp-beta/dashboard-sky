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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst columns = [{\n  title: 'Name',\n  dataIndex: 'name'\n}, {\n  title: 'Age',\n  dataIndex: 'age'\n}, {\n  title: 'Address',\n  dataIndex: 'address'\n}];\nconst data = [];\n\nfor (let i = 0; i < 46; i++) {\n  data.push({\n    key: i,\n    name: `Edward King ${i}`,\n    age: 32,\n    address: `London, Park Lane no. ${i}`\n  });\n}\n\nclass TableData extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      selectedRowKeys: [] // Check here to configure the default column\n\n    });\n\n    _defineProperty(this, \"onSelectChange\", selectedRowKeys => {\n      console.log('selectedRowKeys changed: ', selectedRowKeys);\n      this.setState({\n        selectedRowKeys\n      });\n    });\n  }\n\n  render() {\n    const {\n      selectedRowKeys\n    } = this.state;\n    const rowSelection = {\n      selectedRowKeys,\n      onChange: this.onSelectChange,\n      selections: [antd__WEBPACK_IMPORTED_MODULE_1__.default.SELECTION_ALL, antd__WEBPACK_IMPORTED_MODULE_1__.default.SELECTION_INVERT, antd__WEBPACK_IMPORTED_MODULE_1__.default.SELECTION_NONE, {\n        key: 'odd',\n        text: 'Select Odd Row',\n        onSelect: changableRowKeys => {\n          let newSelectedRowKeys = [];\n          newSelectedRowKeys = changableRowKeys.filter((key, index) => {\n            if (index % 2 !== 0) {\n              return false;\n            }\n\n            return true;\n          });\n          this.setState({\n            selectedRowKeys: newSelectedRowKeys\n          });\n        }\n      }, {\n        key: 'even',\n        text: 'Select Even Row',\n        onSelect: changableRowKeys => {\n          let newSelectedRowKeys = [];\n          newSelectedRowKeys = changableRowKeys.filter((key, index) => {\n            if (index % 2 !== 0) {\n              return true;\n            }\n\n            return false;\n          });\n          this.setState({\n            selectedRowKeys: newSelectedRowKeys\n          });\n        }\n      }]\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, {\n      rowSelection: rowSelection,\n      columns: columns,\n      dataSource: data\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableData);\n\n//# sourceURL=webpack://test/./src/components/table.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("05afec129e4cbee3514d")
/******/ })();
/******/ 
/******/ }
);