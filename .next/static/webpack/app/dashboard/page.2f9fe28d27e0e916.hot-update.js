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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiSquarePlus!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopUp */ \"(app-pages-browser)/./src/components/dashboard/PopUp.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDeleteForever!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n\n\n\n\n\nfunction Todos(param) {\n    let { todos, userId, fetchUserInfo, popUp, setPopUp } = param;\n    const handleCreate = ()=>{\n        setPopUp(true);\n    };\n    const handleCheckboxChange = async (status, todoId)=>{\n        try {\n            const response = await fetch(\"/api/updateStatus\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    status,\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                const errorMessage = await response.text();\n                throw new Error(\"Failed to update todo: \".concat(errorMessage));\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    const deleteTodo = async (todoId)=>{\n        try {\n            const response = await fetch(\"/api/deleteTodo\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    todoId\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create todo.\");\n            }\n            fetchUserInfo();\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"my-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60 relative border-black/10 border\\n\t\t\".concat(todos.length > 0 ? null : \"flex justify-center items-center\", \"\\n\t\t\"),\n        children: [\n            todos.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"min-w-full border-collapse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]\",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"p-2 border-black/10 border-b\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"hover:bg-gray-100 border-b border-black/10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-0.5 py-2 border-r flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                checked: todo.done.data[0] === 1,\n                                                onChange: ()=>handleCheckboxChange(todo.done.data[0], todo.id),\n                                                className: \"cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 md:py-1 border-r max-w-56 xxl:max-w-44 lg:max-w-32 md:max-w-20 md:text-sm xs:text-[0.7rem] text-pretty \".concat(todo.done.data[0] === 1 ? \"line-through\" : null),\n                                            children: todo.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"p-2 md:py-1 border-r max-w-96 xxl:max-w-72 lg:max-w-64 md:max-w-52 sn:max-w-32 md:text-sm xs:text-[0.7rem] text-pretty\",\n                                            children: todo.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-0.5 py-2 flex items-center justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteTodo(todo.id),\n                                                className: \"text-red-500 transition-transform active:translate-y-0.5\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDeleteForever_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDeleteForever, {\n                                                    className: \"w-5 h-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCreate,\n                className: \"flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: \"Create To-do\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiSquarePlus_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiSquarePlus, {\n                        className: \"w-6 h-6 mx-auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this),\n            popUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setPopUp: setPopUp,\n                userId: userId,\n                fetchUserInfo: fetchUserInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\Todos.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ub2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUU7QUFFbkI7QUFDbEI7QUFDcUI7QUFVbEMsU0FBU0ksTUFBTSxLQUF3RDtRQUF4RCxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBUyxHQUF4RDtJQUM1QixNQUFNQyxlQUFlO1FBQ25CRCxTQUFTO0lBQ1g7SUFFQSxNQUFNRSx1QkFBdUIsT0FBT0MsUUFBZ0JDO1FBQ2xELElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUJBQXFCO2dCQUNoREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVSO29CQUFRQztnQkFBTztZQUN4QztZQUNBLElBQUksQ0FBQ0MsU0FBU08sRUFBRSxFQUFFO2dCQUNoQixNQUFNQyxlQUFlLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ3hDLE1BQU0sSUFBSUMsTUFBTSwwQkFBdUMsT0FBYkY7WUFDNUM7WUFDQWY7UUFDRixFQUFFLE9BQU9rQixLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQyxVQUFVRjtRQUMxQjtJQUNGO0lBRUEsTUFBTUcsYUFBYSxPQUFPZjtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG1CQUFtQjtnQkFDOUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUDtnQkFBTztZQUNoQztZQUNBLElBQUksQ0FBQ0MsU0FBU08sRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlHLE1BQU07WUFDbEI7WUFDQWpCO1FBQ0YsRUFBRSxPQUFPa0IsS0FBSztZQUNaQyxRQUFRQyxLQUFLLENBQUMsVUFBVUY7UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFXLHdHQUNpRCxPQUE5RHpCLE1BQU8wQixNQUFNLEdBQUcsSUFBSSxPQUFPLG9DQUFtQzs7WUFHM0QxQixNQUFPMEIsTUFBTSxHQUFHLGtCQUNmLDhEQUFDQztnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQU1ILFdBQVU7O3NDQUNmLDhEQUFDSTtzQ0FDQyw0RUFBQ0M7Z0NBQUdMLFdBQVU7O2tEQUNaLDhEQUFDTTt3Q0FBR04sV0FBVTs7Ozs7O2tEQUNkLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBOEU7Ozs7OztrREFHNUYsOERBQUNNO3dDQUFHTixXQUFVO2tEQUE4RTs7Ozs7O2tEQUc1Riw4REFBQ007d0NBQUdOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ087c0NBQ0VoQyxNQUFPaUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ0w7b0NBRUNMLFdBQVU7O3NEQUVWLDhEQUFDVzs0Q0FBR1gsV0FBVTtzREFDWiw0RUFBQ1k7Z0RBQ0NDLE1BQUs7Z0RBQ0xDLFNBQVNMLEtBQUtNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsS0FBSztnREFDL0JDLFVBQVUsSUFDUnBDLHFCQUFxQjRCLEtBQUtNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsRUFBRVAsS0FBS1MsRUFBRTtnREFFakRsQixXQUFVOzs7Ozs7Ozs7OztzREFHZCw4REFBQ1c7NENBQ0NYLFdBQVcsOEdBRVYsT0FEQ1MsS0FBS00sSUFBSSxDQUFDQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksaUJBQWlCO3NEQUc1Q1AsS0FBS1UsSUFBSTs7Ozs7O3NEQUVaLDhEQUFDUjs0Q0FBR1gsV0FBVTtzREFDWFMsS0FBS1csV0FBVzs7Ozs7O3NEQUVuQiw4REFBQ1Q7NENBQUdYLFdBQVU7c0RBQ1osNEVBQUNxQjtnREFDQ0MsU0FBUyxJQUFNeEIsV0FBV1csS0FBS1MsRUFBRTtnREFDakNsQixXQUFVOzBEQUVWLDRFQUFDM0Isa0dBQWVBO29EQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBNUIxQlU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQXFDZiw4REFBQ1c7Z0JBQ0NDLFNBQVMxQztnQkFDVG9CLFdBQVU7O2tDQUVWLDhEQUFDdUI7d0JBQUV2QixXQUFVO2tDQUFnQjs7Ozs7O2tDQUM3Qiw4REFBQzdCLDRGQUFZQTt3QkFBQzZCLFdBQVU7Ozs7Ozs7Ozs7OztZQUczQnRCLHVCQUNDLDhEQUFDTiw4Q0FBS0E7Z0JBQ0pPLFVBQVVBO2dCQUNWSCxRQUFRQTtnQkFDUkMsZUFBZUE7Ozs7Ozs7Ozs7OztBQUt6QjtLQXhId0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Ub2Rvcy50c3g/MDliZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVG9kb3NUeXBlIGZyb20gXCIuL3R5cGVzL3RvZG9zXCI7XHJcbmltcG9ydCB7IENpU3F1YXJlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9jaVwiO1xyXG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9Qb3BVcCc7XHJcbmltcG9ydCB7IE1kRGVsZXRlRm9yZXZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICB0b2RvczogVG9kb3NUeXBlW10gfCBudWxsO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG4gIGZldGNoVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbiAgcG9wVXA6IGJvb2xlYW47XHJcbiAgc2V0UG9wVXA6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9zKHsgdG9kb3MsIHVzZXJJZCwgZmV0Y2hVc2VySW5mbywgcG9wVXAsIHNldFBvcFVwIH06IFByb3BzKSB7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0UG9wVXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBhc3luYyAoc3RhdHVzOiBudW1iZXIsIHRvZG9JZDogTnVtYmVyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGRhdGVTdGF0dXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzLCB0b2RvSWQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHVwZGF0ZSB0b2RvOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgfVxyXG4gICAgICBmZXRjaFVzZXJJbmZvKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBhc3luYyAodG9kb0lkOiBOdW1iZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RlbGV0ZVRvZG9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9kb0lkIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgdG9kby5cIik7XHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2hVc2VySW5mbygpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtgbXktOCByb3VuZGVkIHNoYWRvdyBzaGFkb3ctYmxhY2svMjAgdy00LzUgbWluLWgtOTYgYmctc2xhdGUtNTAvNjAgcmVsYXRpdmUgYm9yZGVyLWJsYWNrLzEwIGJvcmRlclxyXG5cdFx0JHt0b2RvcyEubGVuZ3RoID4gMCA/IG51bGwgOiBcImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJ9XHJcblx0XHRgfVxyXG4gICAgPlxyXG4gICAgICB7dG9kb3MhLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicC0yIHRleHQtbGVmdCBib3JkZXItYmxhY2svMTAgYm9yZGVyLWIgYm9yZGVyLXJcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxlZnQgYm9yZGVyLWJsYWNrLzEwIGJvcmRlci1iIGJvcmRlci1yIG1kOnRleHQtc20geHM6dGV4dC1bMC43cmVtXVwiPlxyXG4gICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxlZnQgYm9yZGVyLWJsYWNrLzEwIGJvcmRlci1iIGJvcmRlci1yIG1kOnRleHQtc20geHM6dGV4dC1bMC43cmVtXVwiPlxyXG4gICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLWJsYWNrLzEwIGJvcmRlci1iXCI+PC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RvZG9zIS5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JheS0xMDAgYm9yZGVyLWIgYm9yZGVyLWJsYWNrLzEwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTAuNSBweS0yIGJvcmRlci1yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5kb25lLmRhdGFbMF0gPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDaGFuZ2UodG9kby5kb25lLmRhdGFbMF0sIHRvZG8uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIG1kOnB5LTEgYm9yZGVyLXIgbWF4LXctNTYgeHhsOm1heC13LTQ0IGxnOm1heC13LTMyIG1kOm1heC13LTIwIG1kOnRleHQtc20geHM6dGV4dC1bMC43cmVtXSB0ZXh0LXByZXR0eSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9kby5kb25lLmRhdGFbMF0gPT09IDEgPyBcImxpbmUtdGhyb3VnaFwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvZG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBtZDpweS0xIGJvcmRlci1yIG1heC13LTk2IHh4bDptYXgtdy03MiBsZzptYXgtdy02NCBtZDptYXgtdy01MiBzbjptYXgtdy0zMiBtZDp0ZXh0LXNtIHhzOnRleHQtWzAuN3JlbV0gdGV4dC1wcmV0dHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kby5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTAuNSBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBhY3RpdmU6dHJhbnNsYXRlLXktMC41XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWREZWxldGVGb3JldmVyIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q3JlYXRlIFRvLWRvPC9wPlxyXG4gICAgICAgICAgPENpU3F1YXJlUGx1cyBjbGFzc05hbWU9XCJ3LTYgaC02IG14LWF1dG9cIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7cG9wVXAgJiYgKFxyXG4gICAgICAgIDxQb3BVcFxyXG4gICAgICAgICAgc2V0UG9wVXA9e3NldFBvcFVwfVxyXG4gICAgICAgICAgdXNlcklkPXt1c2VySWR9XHJcbiAgICAgICAgICBmZXRjaFVzZXJJbmZvPXtmZXRjaFVzZXJJbmZvfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaVNxdWFyZVBsdXMiLCJQb3BVcCIsIk1kRGVsZXRlRm9yZXZlciIsIlRvZG9zIiwidG9kb3MiLCJ1c2VySWQiLCJmZXRjaFVzZXJJbmZvIiwicG9wVXAiLCJzZXRQb3BVcCIsImhhbmRsZUNyZWF0ZSIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwic3RhdHVzIiwidG9kb0lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZXJyb3JNZXNzYWdlIiwidGV4dCIsIkVycm9yIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlVG9kbyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidG9kbyIsImluZGV4IiwidGQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiZG9uZSIsImRhdGEiLCJvbkNoYW5nZSIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/Todos.tsx\n"));

/***/ })

});