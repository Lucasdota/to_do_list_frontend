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

/***/ "(app-pages-browser)/./src/components/dashboard/Todos.tsx":
/*!********************************************!*\
  !*** ./src/components/dashboard/Todos.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiSquarePlus!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopUp */ \"(app-pages-browser)/./src/components/dashboard/PopUp.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDeleteForever!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos(param) {\n    let { todos, userId, fetchUserInfo } = param;\n    _s();\n    const [popUp, setPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCreate = ()=>{\n        setPopUp(true);\n    };\n    const deleteTodo = async (todoId)=>{\n        try {\n            const response = await fetch(\"/api/deleteTodo\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create todo.\");\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"my-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60 relative border-black/10 border\\n\t\t\".concat(todos.length > 0 ? null : \"flex justify-center items-center\", \"\\n\t\t\"),\n        children: [\n            todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"min-w-full border-collapse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 border-black/10 border-b\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"hover:bg-gray-100 border-b border-black/10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-1 border-r flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                checked: todo.done.data[0] === 1,\n                                                onChange: ()=>handleCheckboxChange(todo.id),\n                                                className: \"cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 border-r\",\n                                            children: todo.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 border-r\",\n                                            children: todo.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteTodo(todo.id),\n                                                className: \"text-red-500\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDeleteForever, {\n                                                    className: \"w-5 h-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCreate,\n                className: \"flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: \"Create To-do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiSquarePlus, {\n                        className: \"w-6 h-6 mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this),\n            popUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setPopUp: setPopUp,\n                userId: userId,\n                fetchUserInfo: fetchUserInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Todos, \"nRD4/ZBecQXHEH1cJbLKbkRPZNc=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ub2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRU87QUFDbEI7QUFDcUI7QUFRbEMsU0FBU0ssTUFBTSxLQUF1QztRQUF2QyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFTLEdBQXZDOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVU7SUFFM0MsTUFBTVUsZUFBZTtRQUNyQkQsU0FBUztJQUNUO0lBRUQsTUFBTUUsYUFBYSxPQUFPQztRQUN2QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG1CQUFtQjtnQkFDOUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUDtnQkFBTztZQUNoQztZQUNBLElBQUksQ0FBQ0MsU0FBU08sRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQWQ7UUFDRixFQUFFLE9BQU9lLEtBQUs7WUFDWkMsUUFBUUMsS0FBSyxDQUFDLFVBQVVGO1FBQzFCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsV0FBVyx3R0FDaUQsT0FBOURyQixNQUFPc0IsTUFBTSxHQUFHLElBQUksT0FBTyxvQ0FBbUM7O1lBRzNEdEIsTUFBT3NCLE1BQU0sR0FBRyxrQkFDZiw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFNSCxXQUFVOztzQ0FDZiw4REFBQ0k7c0NBQ0MsNEVBQUNDO2dDQUFHTCxXQUFVOztrREFDWiw4REFBQ007d0NBQUdOLFdBQVU7Ozs7OztrREFDZCw4REFBQ007d0NBQUdOLFdBQVU7a0RBQWtEOzs7Ozs7a0RBR2hFLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBa0Q7Ozs7OztrREFHaEUsOERBQUNNO3dDQUFHTixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNPO3NDQUNFNUIsTUFBTzZCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUNMO29DQUFlTCxXQUFVOztzREFDeEIsOERBQUNXOzRDQUFHWCxXQUFVO3NEQUNaLDRFQUFDWTtnREFDQ0MsTUFBSztnREFDTEMsU0FBU0wsS0FBS00sSUFBSSxDQUFDQyxJQUFJLENBQUMsRUFBRSxLQUFLO2dEQUMvQkMsVUFBVSxJQUFNQyxxQkFBcUJULEtBQUtVLEVBQUU7Z0RBQzVDbkIsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNXOzRDQUFHWCxXQUFVO3NEQUNYUyxLQUFLVyxJQUFJOzs7Ozs7c0RBRVosOERBQUNUOzRDQUFHWCxXQUFVO3NEQUNYUyxLQUFLWSxXQUFXOzs7Ozs7c0RBRW5CLDhEQUFDVjs0Q0FBR1gsV0FBVTtzREFDWiw0RUFBQ3NCO2dEQUNDQyxTQUFTLElBQU10QyxXQUFXd0IsS0FBS1UsRUFBRTtnREFDakNuQixXQUFVOzBEQUVWLDRFQUFDdkIsa0dBQWVBO29EQUFDdUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBcEJ4QlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQTZCakIsOERBQUNZO2dCQUNDQyxTQUFTdkM7Z0JBQ1RnQixXQUFVOztrQ0FFViw4REFBQ3dCO3dCQUFFeEIsV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDN0IsOERBQUN6Qiw0RkFBWUE7d0JBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7WUFHM0JsQix1QkFDQyw4REFBQ04sOENBQUtBO2dCQUNKTyxVQUFVQTtnQkFDVkgsUUFBUUE7Z0JBQ1JDLGVBQWVBOzs7Ozs7Ozs7Ozs7QUFLekI7R0E5RndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvVG9kb3MudHN4PzA5YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb2Rvc1R5cGUgZnJvbSBcIi4vdHlwZXMvdG9kb3NcIjtcclxuaW1wb3J0IHsgQ2lTcXVhcmVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcbmltcG9ydCBQb3BVcCBmcm9tICcuL1BvcFVwJztcclxuaW1wb3J0IHsgTWREZWxldGVGb3JldmVyIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHRvZG9zOiBUb2Rvc1R5cGVbXSB8IG51bGw7XHJcblx0dXNlcklkOiBudW1iZXI7XHJcbiAgZmV0Y2hVc2VySW5mbzogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKHsgdG9kb3MsIHVzZXJJZCwgZmV0Y2hVc2VySW5mbyB9OiBQcm9wcykge1xyXG5cdGNvbnN0IFtwb3BVcCwgc2V0UG9wVXBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGUgPSAoKSA9PiB7XHJcblx0XHRzZXRQb3BVcCh0cnVlKTtcclxuICB9O1xyXG5cclxuXHRjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKHRvZG9JZDogTnVtYmVyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9kZWxldGVUb2RvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvZG9JZCB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRvZG8uXCIpO1xyXG4gICAgICB9XHJcbiAgICAgXHRmZXRjaFVzZXJJbmZvKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2BteS04IHJvdW5kZWQgc2hhZG93IHNoYWRvdy1ibGFjay8yMCB3LTQvNSBtaW4taC05NiBiZy1zbGF0ZS01MC82MCByZWxhdGl2ZSBib3JkZXItYmxhY2svMTAgYm9yZGVyXHJcblx0XHQke3RvZG9zIS5sZW5ndGggPiAwID8gbnVsbCA6IFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIn1cclxuXHRcdGB9XHJcbiAgICA+XHJcbiAgICAgIHt0b2RvcyEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZWZ0IGJvcmRlci1ibGFjay8xMCBib3JkZXItYiBib3JkZXItclwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yIHRleHQtbGVmdCBib3JkZXItYmxhY2svMTAgYm9yZGVyLWIgYm9yZGVyLXJcIj5cclxuICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZWZ0IGJvcmRlci1ibGFjay8xMCBib3JkZXItYiBib3JkZXItclwiPlxyXG4gICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLWJsYWNrLzEwIGJvcmRlci1iXCI+PC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RvZG9zIS5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JheS0xMDAgYm9yZGVyLWIgYm9yZGVyLWJsYWNrLzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTEgYm9yZGVyLXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0b2RvLmRvbmUuZGF0YVswXSA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZSh0b2RvLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0yIGJvcmRlci1yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvZG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBib3JkZXItclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2RvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1kRGVsZXRlRm9yZXZlciBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNyZWF0ZSBUby1kbzwvcD5cclxuICAgICAgICAgIDxDaVNxdWFyZVBsdXMgY2xhc3NOYW1lPVwidy02IGgtNiBteC1hdXRvXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge3BvcFVwICYmIChcclxuICAgICAgICA8UG9wVXBcclxuICAgICAgICAgIHNldFBvcFVwPXtzZXRQb3BVcH1cclxuICAgICAgICAgIHVzZXJJZD17dXNlcklkfVxyXG4gICAgICAgICAgZmV0Y2hVc2VySW5mbz17ZmV0Y2hVc2VySW5mb31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaVNxdWFyZVBsdXMiLCJQb3BVcCIsIk1kRGVsZXRlRm9yZXZlciIsIlRvZG9zIiwidG9kb3MiLCJ1c2VySWQiLCJmZXRjaFVzZXJJbmZvIiwicG9wVXAiLCJzZXRQb3BVcCIsImhhbmRsZUNyZWF0ZSIsImRlbGV0ZVRvZG8iLCJ0b2RvSWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidG9kbyIsImluZGV4IiwidGQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiZG9uZSIsImRhdGEiLCJvbkNoYW5nZSIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/Todos.tsx\n"));

/***/ })

});