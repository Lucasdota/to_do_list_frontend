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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiSquarePlus!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopUp */ \"(app-pages-browser)/./src/components/dashboard/PopUp.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDeleteForever!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n\n\n\n\n\nfunction Todos(param) {\n    let { todos, userId, fetchUserInfo, popUp, setPopUp } = param;\n    const handleCreate = ()=>{\n        setPopUp(true);\n    };\n    const handleCheckboxChange = async (status, todoId)=>{\n        try {\n            const response = await fetch(\"/api/updateStatus\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    status,\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                const errorMessage = await response.text();\n                throw new Error(\"Failed to update todo: \".concat(errorMessage));\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    const deleteTodo = async (todoId)=>{\n        try {\n            const response = await fetch(\"/api/deleteTodo\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create todo.\");\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"my-8 rounded shadow shadow-black/20 w-4/5 md:w-full min-h-96 bg-slate-50/60 relative border-black/10 border\\n\t\t\".concat(todos.length > 0 ? null : \"flex justify-center items-center\", \"\\n\t\t\"),\n        children: [\n            todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"min-w-full border-collapse\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"p-2 text-left border-black/10 border-b border-r\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"p-2 border-black/10 border-b\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"hover:bg-gray-100 border-b border-black/10\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"p-2 md:p-1 md:mb-1 border-r flex items-center justify-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    checked: todo.done.data[0] === 1,\n                                                    onChange: ()=>handleCheckboxChange(todo.done.data[0], todo.id),\n                                                    className: \"cursor-pointer md:w-2.5\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"p-2 md:py-1 border-r max-w-56 xxl:max-w-44 lg:max-w-32 md:max-w-24 md:text-sm xs:text-[0.7rem] break-words \".concat(todo.done.data[0] === 1 ? \"line-through\" : null),\n                                                children: todo.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"p-2 md:py-1 border-r max-w-96 xxl:max-w-72 lg:max-w-64 md:max-w-52 sn:max-w-32 md:text-sm xs:text-[0.7rem] w-full break-words \".concat(todo.done.data[0] === 1 ? \"line-through\" : null),\n                                                children: todo.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"p-2 md:p-1 flex items-center justify-center\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>deleteTodo(todo.id),\n                                                    className: \"text-red-500 transition-transform active:translate-y-0.5\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDeleteForever, {\n                                                        className: \"w-5 h-5 md:w-3.5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-fit\",\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCreate,\n                className: \"flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: \"Create To-do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiSquarePlus, {\n                        className: \"w-6 h-6 mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this),\n            popUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setPopUp: setPopUp,\n                userId: userId,\n                fetchUserInfo: fetchUserInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ub2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFFVDtBQUNsQjtBQUNxQjtBQVVsQyxTQUFTSSxNQUFNLEtBQXdEO1FBQXhELEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFTLEdBQXhEO0lBQzVCLE1BQU1DLGVBQWU7UUFDbkJELFNBQVM7SUFDWDtJQUVBLE1BQU1FLHVCQUF1QixPQUFPQyxRQUFnQkM7UUFDbEQsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQkFBcUI7Z0JBQ2hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQVFDO2dCQUFPO1lBQ3hDO1lBQ0EsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU1DLGVBQWUsTUFBTVIsU0FBU1MsSUFBSTtnQkFDeEMsTUFBTSxJQUFJQyxNQUFNLDBCQUF1QyxPQUFiRjtZQUM1QztZQUNBZjtRQUNGLEVBQUUsT0FBT2tCLEtBQUs7WUFDWkMsUUFBUUMsS0FBSyxDQUFDLFVBQVVGO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNRyxhQUFhLE9BQU9mO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO2dCQUM5Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVQO2dCQUFPO1lBQ2hDO1lBQ0EsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUcsTUFBTTtZQUNsQjtZQUNBakI7UUFDRixFQUFFLE9BQU9rQixLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQyxVQUFVRjtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQVcsa0hBQ2lELE9BQTlEekIsTUFBTzBCLE1BQU0sR0FBRyxJQUFJLE9BQU8sb0NBQW1DOztZQUczRDFCLE1BQU8wQixNQUFNLEdBQUcsa0JBQ2YsOERBQUNDO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQU1ILFdBQVU7OzBDQUNmLDhEQUFDSTswQ0FDQyw0RUFBQ0M7b0NBQUdMLFdBQVU7O3NEQUNaLDhEQUFDTTs0Q0FBR04sV0FBVTs7Ozs7O3NEQUNkLDhEQUFDTTs0Q0FBR04sV0FBVTtzREFBOEU7Ozs7OztzREFHNUYsOERBQUNNOzRDQUFHTixXQUFVO3NEQUE4RTs7Ozs7O3NEQUc1Riw4REFBQ007NENBQUdOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ087MENBQ0VoQyxNQUFPaUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ0w7d0NBRUNMLFdBQVU7OzBEQUVWLDhEQUFDVztnREFBR1gsV0FBVTswREFDWiw0RUFBQ1k7b0RBQ0NDLE1BQUs7b0RBQ0xDLFNBQVNMLEtBQUtNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsS0FBSztvREFDL0JDLFVBQVUsSUFDUnBDLHFCQUFxQjRCLEtBQUtNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsRUFBRVAsS0FBS1MsRUFBRTtvREFFakRsQixXQUFVOzs7Ozs7Ozs7OzswREFHZCw4REFBQ1c7Z0RBQ0NYLFdBQVcsOEdBRVYsT0FEQ1MsS0FBS00sSUFBSSxDQUFDQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksaUJBQWlCOzBEQUc1Q1AsS0FBS1UsSUFBSTs7Ozs7OzBEQUVaLDhEQUFDUjtnREFDQ1gsV0FBVyxpSUFFVixPQURDUyxLQUFLTSxJQUFJLENBQUNDLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxpQkFBaUI7MERBRzVDUCxLQUFLVyxXQUFXOzs7Ozs7MERBRW5CLDhEQUFDVDtnREFBR1gsV0FBVTswREFDWiw0RUFBQ3FCO29EQUNDQyxTQUFTLElBQU14QixXQUFXVyxLQUFLUyxFQUFFO29EQUNqQ2xCLFdBQVU7OERBRVYsNEVBQUMzQixrR0FBZUE7d0RBQUMyQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FoQzFCVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0F1Q2xCLDhEQUFDVzt3QkFBT3JCLFdBQVU7a0NBQVE7Ozs7Ozs7Ozs7O3FDQUd2Qiw4REFBQ3FCO2dCQUNDQyxTQUFTMUM7Z0JBQ1RvQixXQUFVOztrQ0FFViw4REFBQ3VCO3dCQUFFdkIsV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDN0IsOERBQUM3Qiw0RkFBWUE7d0JBQUM2QixXQUFVOzs7Ozs7Ozs7Ozs7WUFHM0J0Qix1QkFDQyw4REFBQ04sOENBQUtBO2dCQUNKTyxVQUFVQTtnQkFDVkgsUUFBUUE7Z0JBQ1JDLGVBQWVBOzs7Ozs7Ozs7Ozs7QUFLekI7S0E3SHdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvVG9kb3MudHN4PzA5YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVG9kb3NUeXBlIGZyb20gXCIuL3R5cGVzL3RvZG9zXCI7XHJcbmltcG9ydCB7IENpU3F1YXJlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9jaVwiO1xyXG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9Qb3BVcCc7XHJcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB0b2RvczogVG9kb3NUeXBlW10gfCBudWxsO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIGZldGNoVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbiAgcG9wVXA6IGJvb2xlYW47XHJcbiAgc2V0UG9wVXA6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKHsgdG9kb3MsIHVzZXJJZCwgZmV0Y2hVc2VySW5mbywgcG9wVXAsIHNldFBvcFVwIH06IFByb3BzKSB7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UG9wVXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBhc3luYyAoc3RhdHVzOiBudW1iZXIsIHRvZG9JZDogTnVtYmVyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVTdGF0dXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzLCB0b2RvSWQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHVwZGF0ZSB0b2RvOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgfVxyXG4gICAgICBmZXRjaFVzZXJJbmZvKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAodG9kb0lkOiBOdW1iZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RlbGV0ZVRvZG9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9kb0lkIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgdG9kby5cIik7XHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2hVc2VySW5mbygpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtgbXktOCByb3VuZGVkIHNoYWRvdyBzaGFkb3ctYmxhY2svMjAgdy00LzUgbWQ6dy1mdWxsIG1pbi1oLTk2IGJnLXNsYXRlLTUwLzYwIHJlbGF0aXZlIGJvcmRlci1ibGFjay8xMCBib3JkZXJcclxuXHRcdCR7dG9kb3MhLmxlbmd0aCA+IDAgPyBudWxsIDogXCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwifVxyXG5cdFx0YH1cclxuICAgID5cclxuICAgICAge3RvZG9zIS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxlZnQgYm9yZGVyLWJsYWNrLzEwIGJvcmRlci1iIGJvcmRlci1yXCI+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZWZ0IGJvcmRlci1ibGFjay8xMCBib3JkZXItYiBib3JkZXItciBtZDp0ZXh0LXNtIHhzOnRleHQtWzAuN3JlbV1cIj5cclxuICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZWZ0IGJvcmRlci1ibGFjay8xMCBib3JkZXItYiBib3JkZXItciBtZDp0ZXh0LXNtIHhzOnRleHQtWzAuN3JlbV1cIj5cclxuICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yIGJvcmRlci1ibGFjay8xMCBib3JkZXItYlwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHt0b2RvcyEubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLWdyYXktMTAwIGJvcmRlci1iIGJvcmRlci1ibGFjay8xMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgbWQ6cC0xIG1kOm1iLTEgYm9yZGVyLXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0b2RvLmRvbmUuZGF0YVswXSA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja2JveENoYW5nZSh0b2RvLmRvbmUuZGF0YVswXSwgdG9kby5pZClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1kOnctMi41XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgbWQ6cHktMSBib3JkZXItciBtYXgtdy01NiB4eGw6bWF4LXctNDQgbGc6bWF4LXctMzIgbWQ6bWF4LXctMjQgbWQ6dGV4dC1zbSB4czp0ZXh0LVswLjdyZW1dIGJyZWFrLXdvcmRzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRvbmUuZGF0YVswXSA9PT0gMSA/IFwibGluZS10aHJvdWdoXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgbWQ6cHktMSBib3JkZXItciBtYXgtdy05NiB4eGw6bWF4LXctNzIgbGc6bWF4LXctNjQgbWQ6bWF4LXctNTIgc246bWF4LXctMzIgbWQ6dGV4dC1zbSB4czp0ZXh0LVswLjdyZW1dIHctZnVsbCBicmVhay13b3JkcyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9kby5kb25lLmRhdGFbMF0gPT09IDEgPyBcImxpbmUtdGhyb3VnaFwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvZG8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgbWQ6cC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBhY3RpdmU6dHJhbnNsYXRlLXktMC41XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNsYXNzTmFtZT1cInctNSBoLTUgbWQ6dy0zLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndy1maXQnPlg8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DcmVhdGUgVG8tZG88L3A+XHJcbiAgICAgICAgICA8Q2lTcXVhcmVQbHVzIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtYXV0b1wiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwb3BVcCAmJiAoXHJcbiAgICAgICAgPFBvcFVwXHJcbiAgICAgICAgICBzZXRQb3BVcD17c2V0UG9wVXB9XHJcbiAgICAgICAgICB1c2VySWQ9e3VzZXJJZH1cclxuICAgICAgICAgIGZldGNoVXNlckluZm89e2ZldGNoVXNlckluZm99XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNpU3F1YXJlUGx1cyIsIlBvcFVwIiwiTWREZWxldGVGb3JldmVyIiwiVG9kb3MiLCJ0b2RvcyIsInVzZXJJZCIsImZldGNoVXNlckluZm8iLCJwb3BVcCIsInNldFBvcFVwIiwiaGFuZGxlQ3JlYXRlIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJzdGF0dXMiLCJ0b2RvSWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvck1lc3NhZ2UiLCJ0ZXh0IiwiRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGVUb2RvIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImRpdiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJ0b2RvIiwiaW5kZXgiLCJ0ZCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJkb25lIiwiZGF0YSIsIm9uQ2hhbmdlIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/Todos.tsx\n"));

/***/ })

});