"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/dashboard/DropdownMenu.tsx":
/*!***************************************************!*\
  !*** ./src/components/dashboard/DropdownMenu.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropdownMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction DropdownMenu() {\n    _s();\n    const formSection = useRef(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: formSection,\n        className: \"absolute w-full h-full z-10 bg-slate-200/30 backdrop-blur-lg flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Delete account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\DropdownMenu.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\DropdownMenu.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\DropdownMenu.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\DropdownMenu.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_s(DropdownMenu, \"YthWYvlzgrXMofwiBMDZTmyuMdE=\");\n_c = DropdownMenu;\nvar _c;\n$RefreshReg$(_c, \"DropdownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ecm9wZG93bk1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUVWLFNBQVNDOztJQUN2QixNQUFNQyxjQUFjQyxPQUF3QjtJQUM1QyxxQkFDRyw4REFBQ0M7UUFDQ0MsS0FBS0g7UUFDTEksV0FBVTtrQkFFViw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQTs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQWJ3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Ryb3Bkb3duTWVudS50c3g/OWQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnUoKSB7XHJcblx0Y29uc3QgZm9ybVNlY3Rpb24gPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcclxuXHRyZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgcmVmPXtmb3JtU2VjdGlvbn1cclxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTEwIGJnLXNsYXRlLTIwMC8zMCBiYWNrZHJvcC1ibHVyLWxnIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5EZWxldGUgYWNjb3VudDwvbGk+XHJcbiAgICAgICAgPGxpPkxvZ291dDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEcm9wZG93bk1lbnUiLCJmb3JtU2VjdGlvbiIsInVzZVJlZiIsInNlY3Rpb24iLCJyZWYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/DropdownMenu.tsx\n"));

/***/ })

});