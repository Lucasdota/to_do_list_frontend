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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiSquarePlus!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopUp */ \"(app-pages-browser)/./src/components/dashboard/PopUp.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDeleteForever!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Todos(param) {\n    let { todos, userId, fetchUserInfo } = param;\n    _s();\n    const [popUp, setPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCreate = ()=>{\n        setPopUp(true);\n    };\n    const handleCheckboxChange = async (status, id)=>{\n        console.log(\"Type of Status: \" + typeof status);\n        try {\n            const response = await fetch(\"/api/updateStatus\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    status,\n                    id\n                })\n            });\n            if (!response.ok) {\n                const errorMessage = await response.text();\n                throw new Error(\"Failed to update todo: \".concat(errorMessage));\n            }\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    const deleteTodo = async (todoId)=>{\n        try {\n            const response = await fetch(\"/api/deleteTodo\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create todo.\");\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"my-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60 relative border-black/10 border\\n\t\t\".concat(todos.length > 0 ? null : \"flex justify-center items-center\", \"\\n\t\t\"),\n        children: [\n            todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"min-w-full border-collapse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 border-black/10 border-b\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"hover:bg-gray-100 border-b border-black/10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-0.5 py-2 border-r flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                checked: todo.done.data[0] === 1,\n                                                onChange: ()=>handleCheckboxChange(todo.done.data[0], todo.id),\n                                                className: \"cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 md:py-1 border-r max-w-56 xxl:max-w-44 lg:max-w-32 md:max-w-20 md:text-sm xs:text-[0.7rem] text-pretty\",\n                                            children: todo.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 md:py-1 border-r max-w-96 xxl:max-w-72 lg:max-w-64 md:max-w-52 sn:max-w-32 md:text-sm xs:text-[0.7rem] text-pretty\",\n                                            children: todo.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-0.5 py-2 flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteTodo(todo.id),\n                                                className: \"text-red-500 transition-transform active:translate-y-0.5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDeleteForever, {\n                                                    className: \"w-5 h-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCreate,\n                className: \"flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: \"Create To-do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiSquarePlus, {\n                        className: \"w-6 h-6 mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this),\n            popUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setPopUp: setPopUp,\n                userId: userId,\n                fetchUserInfo: fetchUserInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Todos, \"nRD4/ZBecQXHEH1cJbLKbkRPZNc=\");\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ub2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRU87QUFDbEI7QUFDcUI7QUFRbEMsU0FBU0ssTUFBTSxLQUF1QztRQUF2QyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFTLEdBQXZDOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQVU7SUFFM0MsTUFBTVUsZUFBZTtRQUNyQkQsU0FBUztJQUNUO0lBRUQsTUFBTUUsdUJBQXVCLE9BQU9DLFFBQWdCQztRQUNuREMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQixPQUFPSDtRQUV4QyxJQUFJO1lBQ0gsTUFBTUksV0FBVyxNQUFNQyxNQUFNLHFCQUFxQjtnQkFDakRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1IsZ0JBQWdCO2dCQUNqQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFVjtvQkFBUUM7Z0JBQUc7WUFDbkM7WUFDQSxJQUFJLENBQUNHLFNBQVNPLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxlQUFlLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ3hDLE1BQU0sSUFBSUMsTUFBTSwwQkFBdUMsT0FBYkY7WUFDNUM7UUFDSixFQUFFLE9BQU9HLEtBQUs7WUFDYmIsUUFBUWMsS0FBSyxDQUFDLFVBQVVEO1FBQ3pCO0lBQ0Q7SUFFQSxNQUFNRSxhQUFhLE9BQU9DO1FBQ3ZCLElBQUk7WUFDRixNQUFNZCxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO2dCQUM5Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVRO2dCQUFPO1lBQ2hDO1lBQ0EsSUFBSSxDQUFDZCxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUcsTUFBTTtZQUNsQjtZQUNBbkI7UUFDRixFQUFFLE9BQU9vQixLQUFLO1lBQ1piLFFBQVFjLEtBQUssQ0FBQyxVQUFVRDtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQVcsd0dBQ2lELE9BQTlEM0IsTUFBTzRCLE1BQU0sR0FBRyxJQUFJLE9BQU8sb0NBQW1DOztZQUczRDVCLE1BQU80QixNQUFNLEdBQUcsa0JBQ2YsOERBQUNDO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRztvQkFBTUgsV0FBVTs7c0NBQ2YsOERBQUNJO3NDQUNDLDRFQUFDQztnQ0FBR0wsV0FBVTs7a0RBQ1osOERBQUNNO3dDQUFHTixXQUFVOzs7Ozs7a0RBQ2QsOERBQUNNO3dDQUFHTixXQUFVO2tEQUE4RTs7Ozs7O2tEQUc1Riw4REFBQ007d0NBQUdOLFdBQVU7a0RBQThFOzs7Ozs7a0RBRzVGLDhEQUFDTTt3Q0FBR04sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDTztzQ0FDRWxDLE1BQU9tQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDTDtvQ0FFQ0wsV0FBVTs7c0RBRVYsOERBQUNXOzRDQUFHWCxXQUFVO3NEQUNaLDRFQUFDWTtnREFDQ0MsTUFBSztnREFDTEMsU0FBU0wsS0FBS00sSUFBSSxDQUFDQyxJQUFJLENBQUMsRUFBRSxLQUFLO2dEQUMvQkMsVUFBVSxJQUFNdEMscUJBQXFCOEIsS0FBS00sSUFBSSxDQUFDQyxJQUFJLENBQUMsRUFBRSxFQUFFUCxLQUFLNUIsRUFBRTtnREFDL0RtQixXQUFVOzs7Ozs7Ozs7OztzREFHZCw4REFBQ1c7NENBQUdYLFdBQVU7c0RBQ1hTLEtBQUtTLElBQUk7Ozs7OztzREFFWiw4REFBQ1A7NENBQUdYLFdBQVU7c0RBQ1hTLEtBQUtVLFdBQVc7Ozs7OztzREFFbkIsOERBQUNSOzRDQUFHWCxXQUFVO3NEQUNaLDRFQUFDb0I7Z0RBQ0NDLFNBQVMsSUFBTXhCLFdBQVdZLEtBQUs1QixFQUFFO2dEQUNqQ21CLFdBQVU7MERBRVYsNEVBQUM3QixrR0FBZUE7b0RBQUM2QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0F0QjFCVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBK0JmLDhEQUFDVTtnQkFDQ0MsU0FBUzNDO2dCQUNUc0IsV0FBVTs7a0NBRVYsOERBQUNzQjt3QkFBRXRCLFdBQVU7a0NBQWdCOzs7Ozs7a0NBQzdCLDhEQUFDL0IsNEZBQVlBO3dCQUFDK0IsV0FBVTs7Ozs7Ozs7Ozs7O1lBRzNCeEIsdUJBQ0MsOERBQUNOLDhDQUFLQTtnQkFDSk8sVUFBVUE7Z0JBQ1ZILFFBQVFBO2dCQUNSQyxlQUFlQTs7Ozs7Ozs7Ozs7O0FBS3pCO0dBckh3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RvZG9zLnRzeD8wOWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVG9kb3NUeXBlIGZyb20gXCIuL3R5cGVzL3RvZG9zXCI7XHJcbmltcG9ydCB7IENpU3F1YXJlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9jaVwiO1xyXG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9Qb3BVcCc7XHJcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB0b2RvczogVG9kb3NUeXBlW10gfCBudWxsO1xyXG5cdHVzZXJJZDogbnVtYmVyO1xyXG4gIGZldGNoVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2Rvcyh7IHRvZG9zLCB1c2VySWQsIGZldGNoVXNlckluZm8gfTogUHJvcHMpIHtcclxuXHRjb25zdCBbcG9wVXAsIHNldFBvcFVwXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlID0gKCkgPT4ge1xyXG5cdFx0c2V0UG9wVXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBhc3luYyAoc3RhdHVzOiBudW1iZXIsIGlkOiBOdW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVHlwZSBvZiBTdGF0dXM6IFwiICsgdHlwZW9mIHN0YXR1cyk7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VwZGF0ZVN0YXR1c1wiLCB7XHJcblx0XHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cywgaWQgfSlcclxuXHRcdFx0fSlcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byB1cGRhdGUgdG9kbzogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgIH1cclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKHRvZG9JZDogTnVtYmVyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9kZWxldGVUb2RvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvZG9JZCB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHRvZG8uXCIpO1xyXG4gICAgICB9XHJcbiAgICAgXHRmZXRjaFVzZXJJbmZvKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2BteS04IHJvdW5kZWQgc2hhZG93IHNoYWRvdy1ibGFjay8yMCB3LTQvNSBtaW4taC05NiBiZy1zbGF0ZS01MC82MCByZWxhdGl2ZSBib3JkZXItYmxhY2svMTAgYm9yZGVyXHJcblx0XHQke3RvZG9zIS5sZW5ndGggPiAwID8gbnVsbCA6IFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIn1cclxuXHRcdGB9XHJcbiAgICA+XHJcbiAgICAgIHt0b2RvcyEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZWZ0IGJvcmRlci1ibGFjay8xMCBib3JkZXItYiBib3JkZXItclwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yIHRleHQtbGVmdCBib3JkZXItYmxhY2svMTAgYm9yZGVyLWIgYm9yZGVyLXIgbWQ6dGV4dC1zbSB4czp0ZXh0LVswLjdyZW1dXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yIHRleHQtbGVmdCBib3JkZXItYmxhY2svMTAgYm9yZGVyLWIgYm9yZGVyLXIgbWQ6dGV4dC1zbSB4czp0ZXh0LVswLjdyZW1dXCI+XHJcbiAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMiBib3JkZXItYmxhY2svMTAgYm9yZGVyLWJcIj48L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7dG9kb3MhLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1ncmF5LTEwMCBib3JkZXItYiBib3JkZXItYmxhY2svMTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMC41IHB5LTIgYm9yZGVyLXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0b2RvLmRvbmUuZGF0YVswXSA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja2JveENoYW5nZSh0b2RvLmRvbmUuZGF0YVswXSwgdG9kby5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBtZDpweS0xIGJvcmRlci1yIG1heC13LTU2IHh4bDptYXgtdy00NCBsZzptYXgtdy0zMiBtZDptYXgtdy0yMCBtZDp0ZXh0LXNtIHhzOnRleHQtWzAuN3JlbV0gdGV4dC1wcmV0dHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0yIG1kOnB5LTEgYm9yZGVyLXIgbWF4LXctOTYgeHhsOm1heC13LTcyIGxnOm1heC13LTY0IG1kOm1heC13LTUyIHNuOm1heC13LTMyIG1kOnRleHQtc20geHM6dGV4dC1bMC43cmVtXSB0ZXh0LXByZXR0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2RvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMC41IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTp0cmFuc2xhdGUteS0wLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZUZvcmV2ZXIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DcmVhdGUgVG8tZG88L3A+XHJcbiAgICAgICAgICA8Q2lTcXVhcmVQbHVzIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtYXV0b1wiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwb3BVcCAmJiAoXHJcbiAgICAgICAgPFBvcFVwXHJcbiAgICAgICAgICBzZXRQb3BVcD17c2V0UG9wVXB9XHJcbiAgICAgICAgICB1c2VySWQ9e3VzZXJJZH1cclxuICAgICAgICAgIGZldGNoVXNlckluZm89e2ZldGNoVXNlckluZm99XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2lTcXVhcmVQbHVzIiwiUG9wVXAiLCJNZERlbGV0ZUZvcmV2ZXIiLCJUb2RvcyIsInRvZG9zIiwidXNlcklkIiwiZmV0Y2hVc2VySW5mbyIsInBvcFVwIiwic2V0UG9wVXAiLCJoYW5kbGVDcmVhdGUiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsInN0YXR1cyIsImlkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yTWVzc2FnZSIsInRleHQiLCJFcnJvciIsImVyciIsImVycm9yIiwiZGVsZXRlVG9kbyIsInRvZG9JZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidG9kbyIsImluZGV4IiwidGQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiZG9uZSIsImRhdGEiLCJvbkNoYW5nZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/Todos.tsx\n"));

/***/ })

});