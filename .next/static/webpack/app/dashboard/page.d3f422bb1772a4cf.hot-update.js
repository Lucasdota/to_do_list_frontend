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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_shared_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/shared/Spinner */ \"(app-pages-browser)/./src/components/shared/Spinner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchUserInfo = async ()=>{\n        try {\n            const response = await fetch(\"/api/get\", {\n                method: \"GET\",\n                credentials: \"include\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch user information\");\n            }\n            const data = await response.json();\n            const { user, todos } = data;\n            setUser(user);\n            setTodos(todos);\n        } catch (err) {\n            if (err instanceof Error) {\n                setError(err.message);\n            } else {\n                setError(\"An unknown error occurred\");\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUserInfo();\n    }, []);\n    const Logout = async ()=>{\n        try {\n            const response = await fetch(\"/api/logout\", {\n                method: \"POST\",\n                credentials: \"include\"\n            });\n            if (response.ok) {\n                console.log(\"Logged out successfully\");\n                router.push(\"/\");\n            } else {\n                console.error(\"Logout failed\");\n            }\n        } catch (error) {\n            console.error(\"An error occurred while logging out:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center p-10\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 8,\n                height: 8\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 19\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-bold\",\n                        children: \"Welcome to your dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"italic mb-8\",\n                        children: user === null || user === void 0 ? void 0 : user.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true),\n            todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo.task\n                    }, todo.id, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Create To-do\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mb-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: Logout,\n                className: \"text-xs py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"k/0pcU0MLc+km0ZW4J9g1AqIUbw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDTTtBQWdCbkMsU0FBU0k7O0lBQ3ZCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFlO0lBQ2pELE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFVO0lBRWhELE1BQU1hLGdCQUFnQjtRQUNyQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLFlBQVk7Z0JBQ3ZDQyxRQUFRO2dCQUNSQyxhQUFhO1lBQ2Y7WUFDQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ25DLE1BQU0sRUFBRWhCLElBQUksRUFBRUUsS0FBSyxFQUFFLEdBQUdhO1lBQ3JCZCxRQUFRRDtZQUNYRyxTQUFTRDtRQUNSLEVBQUUsT0FBT2UsS0FBYztZQUNyQixJQUFJQSxlQUFlSCxPQUFPO2dCQUN4QlQsU0FBU1ksSUFBSUMsT0FBTztZQUN0QixPQUFPO2dCQUNMYixTQUFTO1lBQ1g7UUFDRixTQUFVO1lBQ1JFLFdBQVc7UUFDYjtJQUNIO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1RjO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTVcsU0FBUztRQUNkLElBQUk7WUFDQSxNQUFNVixXQUFXLE1BQU1DLE1BQU0sZUFBZTtnQkFDMUNDLFFBQVE7Z0JBQ1JDLGFBQWE7WUFDZjtZQUVBLElBQUlILFNBQVNJLEVBQUUsRUFBRTtnQkFDZk8sUUFBUUMsR0FBRyxDQUFDO2dCQUNadEIsT0FBT3VCLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xGLFFBQVFoQixLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZGdCLFFBQVFoQixLQUFLLENBQUMsd0NBQXdDQTtRQUN4RDtJQUNIO0lBRUMscUJBQ0UsOERBQUNtQjtRQUFLQyxXQUFVOztZQUNibEIseUJBQVcsOERBQUNULGtFQUFPQTtnQkFBQzRCLE9BQU87Z0JBQUdDLFFBQVE7Ozs7OztZQUN0Q3RCLHVCQUFTLDhEQUFDdUI7Z0JBQUVILFdBQVU7MEJBQWdCcEI7Ozs7OztZQUN0Q0osc0JBQVE7O2tDQUNYLDhEQUFDNEI7d0JBQUdKLFdBQVU7a0NBQW9COzs7Ozs7a0NBQ2xDLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBZXhCLGlCQUFBQSwyQkFBQUEsS0FBTThCLEtBQUs7Ozs7Ozs7O1lBRXJDNUIsTUFBTTZCLE1BQU0sR0FBRyxrQkFDZCw4REFBQ0M7MEJBQ0U5QixNQUFNK0IsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztrQ0FBa0JELEtBQUtFLElBQUk7dUJBQW5CRixLQUFLRyxFQUFFOzs7Ozs7Ozs7cUNBSXhCLDhEQUFDQzswQkFBTzs7Ozs7OzBCQUVOLDhEQUFDQztnQkFBUWYsV0FBVTs7Ozs7OzBCQUduQiw4REFBQ2M7Z0JBQ0NFLFNBQVNyQjtnQkFDVEssV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0FqRndCMUI7O1FBQ1JGLHNEQUFTQTs7O0tBRERFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvc2hhcmVkL1NwaW5uZXJcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0cGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFRvZG9zIHtcclxuXHRpZDogbnVtYmVyIHwgbnVsbDtcclxuXHRuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG5cdGRvbmU6IG51bWJlciB8IG51bGw7XHJcblx0dXNlcl9pZDogbnVtYmVyIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcclxuXHRjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9zIHwgbnVsbD4obnVsbCk7XHJcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dldFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBpbmZvcm1hdGlvblwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRjb25zdCB7IHVzZXIsIHRvZG9zIH0gPSBkYXRhO1xyXG4gICAgICBzZXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRzZXRUb2Rvcyh0b2Rvcyk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hVc2VySW5mbygpO1xyXG5cdH0sIFtdKVxyXG5cdFxyXG5cdGNvbnN0IExvZ291dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ291dFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsIC8vIGluY2x1ZGUgY29va2llcyBpbiB0aGUgcmVxdWVzdFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIG91dCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9nb3V0IGZhaWxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgb3V0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0xMFwiPlxyXG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciB3aWR0aD17OH0gaGVpZ2h0PXs4fSAvPn1cclxuICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxyXG4gICAgICB7dXNlciAmJiA8PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPldlbGNvbWUgdG8geW91ciBkYXNoYm9hcmQ8L2gxPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJpdGFsaWMgbWItOFwiPnt1c2VyPy5lbWFpbH08L2gyPlxyXG5cdFx0XHQ8Lz59XHRcdFxyXG4gICAgICB7dG9kb3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9Pnt0b2RvLnRhc2t9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICk6KFxyXG5cdFx0XHRcdDxidXR0b24+Q3JlYXRlIFRvLWRvPC9idXR0b24+XHJcblx0XHRcdCl9XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTggcm91bmRlZCBzaGFkb3cgc2hhZG93LWJsYWNrLzIwIHctNC81IG1pbi1oLTk2IGJnLXNsYXRlLTUwLzYwXCI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e0xvZ291dH1cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTEgcHgtMiBzaGFkb3cgYmctc2xhdGUtNTAgc2hhZG93LWJsYWNrLzIwIHJvdW5kZWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBhY3RpdmU6c2NhbGUtOTVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTG9nb3V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU3Bpbm5lciIsIkRhc2hib2FyZCIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidG9kb3MiLCJzZXRUb2RvcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoVXNlckluZm8iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnIiLCJtZXNzYWdlIiwiTG9nb3V0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJtYWluIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiaDEiLCJoMiIsImVtYWlsIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJ0YXNrIiwiaWQiLCJidXR0b24iLCJzZWN0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});