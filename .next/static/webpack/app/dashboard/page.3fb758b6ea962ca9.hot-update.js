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

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_shared_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/shared/Spinner */ \"(app-pages-browser)/./src/components/shared/Spinner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchUserInfo = async ()=>{\n        try {\n            const response = await fetch(\"/api/get\", {\n                method: \"GET\",\n                credentials: \"include\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch user information\");\n            }\n            const data = await response.json();\n            setUser(data);\n        } catch (err) {\n            setError(err.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserInfo();\n    }, []);\n    const Logout = async ()=>{\n        try {\n            const response = await fetch(\"/api/logout\", {\n                method: \"POST\",\n                credentials: \"include\"\n            });\n            if (response.ok) {\n                console.log(\"Logged out successfully\");\n                router.push(\"/\");\n            } else {\n                console.error(\"Logout failed\");\n            }\n        } catch (error) {\n            console.error(\"An error occurred while logging out:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to your dashboard!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 8,\n                height: 8\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 15\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: user.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: Logout,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"0HSP2HTxqAOCoGEg+2fpaTzQAFE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDTTtBQUVuQyxTQUFTSTs7SUFDdkIsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFVO0lBRWhELE1BQU1XLGdCQUFnQjtRQUNyQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVk7Z0JBQ3hDQyxRQUFRO2dCQUNSQyxhQUFhO1lBQ2Q7WUFDQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJQyxNQUFNO1lBQ2pCO1lBQ0EsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDYixRQUFRWTtRQUNULEVBQUUsT0FBT0UsS0FBSztZQUNiWixTQUFTWSxJQUFJQyxPQUFPO1FBQ3JCLFNBQVU7WUFDVFgsV0FBVztRQUNaO0lBQ0Q7SUFFQVgsZ0RBQVNBLENBQUM7UUFDVFk7SUFDRCxHQUFHLEVBQUU7SUFFTCxNQUFNVyxTQUFTO1FBQ2QsSUFBSTtZQUNBLE1BQU1WLFdBQVcsTUFBTUMsTUFBTSxlQUFlO2dCQUMxQ0MsUUFBUTtnQkFDUkMsYUFBYTtZQUNmO1lBRUEsSUFBSUgsU0FBU0ksRUFBRSxFQUFFO2dCQUNmTyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pwQixPQUFPcUIsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTEYsUUFBUWhCLEtBQUssQ0FBQztZQUNoQjtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkZ0IsUUFBUWhCLEtBQUssQ0FBQyx3Q0FBd0NBO1FBQ3hEO0lBQ0g7SUFFQyxxQkFDRSw4REFBQ21COzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUVObEIsd0JBQVUsOERBQUNQLGtFQUFPQTtnQkFBQzBCLE9BQU87Z0JBQUdDLFFBQVE7Ozs7O3FDQUNyQyw4REFBQ0M7MEJBQUl6QixLQUFLMEIsRUFBRTs7Ozs7OzBCQUViLDhEQUFDQztnQkFBT0MsU0FBU1g7MEJBQVE7Ozs7Ozs7Ozs7OztBQUc1QjtHQXhEd0JuQjs7UUFDUkYsc0RBQVNBOzs7S0FEREUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9zaGFyZWQvU3Bpbm5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG5cdGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZXRcIiwge1xyXG5cdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0XHRjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBpbmZvcm1hdGlvblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRzZXRVc2VyKGRhdGEpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoVXNlckluZm8oKTtcclxuXHR9LCBbXSlcclxuXHRcclxuXHRjb25zdCBMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2dvdXRcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLCAvLyBJbmNsdWRlIGNvb2tpZXMgaW4gdGhlIHJlcXVlc3RcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBvdXQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ291dCBmYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIG91dDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG5cdH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8aDE+V2VsY29tZSB0byB5b3VyIGRhc2hib2FyZCE8L2gxPlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bG9hZGluZyA/IDxTcGlubmVyIHdpZHRoPXs4fSBoZWlnaHQ9ezh9IC8+IDpcclxuXHRcdFx0XHQ8aDI+e3VzZXIuaWR9PC9oMj5cclxuXHRcdFx0fVx0XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17TG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNwaW5uZXIiLCJEYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoVXNlckluZm8iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnIiLCJtZXNzYWdlIiwiTG9nb3V0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJtYWluIiwiaDEiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});