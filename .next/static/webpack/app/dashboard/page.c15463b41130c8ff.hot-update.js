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

/***/ "(app-pages-browser)/./src/components/dashboard/PopUp.tsx":
/*!********************************************!*\
  !*** ./src/components/dashboard/PopUp.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LiaWindowCloseSolid_react_icons_lia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=LiaWindowCloseSolid!=!react-icons/lia */ \"(app-pages-browser)/./node_modules/react-icons/lia/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction PopUp(param) {\n    let { setPopUp, userId, fetchUserInfo } = param;\n    _s();\n    const formSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [descriptionError, setDescriptionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createTodo = async ()=>{\n        try {\n            const response = await fetch(\"/api/createTodo\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userId\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to create todo.\");\n            }\n        } catch (err) {\n            console.error(\"Error:\", err);\n        }\n    };\n    const onChangeName = (e)=>{\n        setName(e);\n        if (name.length > 255) {\n            setNameError(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (formSection.current && !formSection.current.contains(event.target)) {\n                setPopUp(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        // cleanup the event listener on component unmount\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        setPopUp\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: formSection,\n        className: \"absolute w-full h-full z-10 bg-slate-200/30 backdrop-blur-lg flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setPopUp(false),\n                className: \"absolute right-8 top-4 text-neutral-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LiaWindowCloseSolid_react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.LiaWindowCloseSolid, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: createTodo,\n                className: \"flex flex-col items-center justify-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"aria-label\": \"name\",\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todo-name\",\n                                className: \"text-[.75rem] font-bold text-neutral-500 mb-1\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"todo-name\",\n                                name: \"todo-name\",\n                                \"aria-label\": \"Put the to-do name here\",\n                                placeholder: \"To-do name\",\n                                maxLength: 100,\n                                required: true,\n                                onChange: (e)=>onChangeName(e.target.value),\n                                className: \"border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-2 text-[.75rem] w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"aria-label\": \"description\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todo-description\",\n                                className: \"text-[.75rem] font-bold text-neutral-500 mb-1\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"todo-description\",\n                                name: \"todo-description\",\n                                \"aria-label\": \"Put the to-do description here\",\n                                placeholder: \"To-do description\",\n                                maxLength: 255,\n                                required: true,\n                                onChange: (e)=>setDescription(e.target.value),\n                                className: \"border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-2 text-[.75rem] w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-[.85rem] font-bold text-neutral-500 py-1 px-2 bg-white rounded border transition-transform active:translate-y-0.5\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\dashboard\\\\PopUp.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(PopUp, \"vOHXY7dkurdoE85kWIbIGUvXHXU=\");\n_c = PopUp;\nvar _c;\n$RefreshReg$(_c, \"PopUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9Qb3BVcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRjtBQUM5QjtBQVF2QyxTQUFTSyxNQUFNLEtBQTBDO1FBQTFDLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQVMsR0FBMUM7O0lBQzdCLE1BQU1DLGNBQWNSLDZDQUFNQSxDQUFrQjtJQUM1QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUNuRCxNQUFNLENBQUNhLGtCQUFrQkMsb0JBQW9CLEdBQUdkLCtDQUFRQSxDQUFTO0lBRWhFLE1BQU1lLGFBQWE7UUFFakIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtQkFBbUI7Z0JBQzlDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWxCO2dCQUFPO1lBQ2hDO1lBQ0EsSUFBSSxDQUFDWSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtRQUNGLEVBQUUsT0FBT0MsS0FBSztZQUNaQyxRQUFRQyxLQUFLLENBQUMsVUFBVUY7UUFDMUI7SUFDRjtJQUVELE1BQU1HLGVBQWUsQ0FBQ0M7UUFDckJyQixRQUFRcUI7UUFDUixJQUFJdEIsS0FBS3VCLE1BQU0sR0FBRyxLQUFLO1lBQ3RCbEIsYUFBYTtRQUNkO0lBQ0Q7SUFFQWIsZ0RBQVNBLENBQUM7UUFDVCxNQUFNZ0MscUJBQXFCLENBQUNDO1lBQzNCLElBQUkxQixZQUFZMkIsT0FBTyxJQUFJLENBQUMzQixZQUFZMkIsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBVztnQkFDL0VoQyxTQUFTO1lBQ1Y7UUFDRDtRQUNBaUMsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDckMsa0RBQWtEO1FBQ2xELE9BQU87WUFDTEssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7UUFDNUM7SUFDSCxHQUFHO1FBQUM1QjtLQUFTO0lBRVoscUJBQ0UsOERBQUNvQztRQUNDQyxLQUFLbEM7UUFDTG1DLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFDQ0MsU0FBUyxJQUFNeEMsU0FBUztnQkFDeEJzQyxXQUFVOzBCQUVWLDRFQUFDeEMsMkdBQW1CQTs7Ozs7Ozs7OzswQkFFdEIsOERBQUMyQztnQkFDQ0MsVUFBVTlCO2dCQUNWMEIsV0FBVTs7a0NBR1YsOERBQUNLO3dCQUFJQyxjQUFXO3dCQUFPTixXQUFVOzswQ0FDL0IsOERBQUNPO2dDQUNDQyxTQUFRO2dDQUNSUixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNTO2dDQUNDQyxJQUFHO2dDQUNINUMsTUFBSztnQ0FDTHdDLGNBQVc7Z0NBQ1hLLGFBQVk7Z0NBQ1pDLFdBQVc7Z0NBQ1hDLFFBQVE7Z0NBQ1JDLFVBQVUsQ0FBQzFCLElBQU1ELGFBQWFDLEVBQUVNLE1BQU0sQ0FBQ3FCLEtBQUs7Z0NBQzVDZixXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNLO3dCQUFJQyxjQUFXOzswQ0FDZCw4REFBQ0M7Z0NBQ0NDLFNBQVE7Z0NBQ1JSLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ1M7Z0NBQ0NDLElBQUc7Z0NBQ0g1QyxNQUFLO2dDQUNMd0MsY0FBVztnQ0FDWEssYUFBWTtnQ0FDWkMsV0FBVztnQ0FDWEMsUUFBUTtnQ0FDZEMsVUFBVSxDQUFDMUIsSUFBTW5CLGVBQWVtQixFQUFFTSxNQUFNLENBQUNxQixLQUFLO2dDQUN4Q2YsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDQzt3QkFBT0QsV0FBVTtrQ0FBeUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uSjtHQXhHd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvUG9wVXAudHN4PzY5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpYVdpbmRvd0Nsb3NlU29saWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbGlhXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHNldFBvcFVwOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbiAgdXNlcklkOiBudW1iZXI7XHJcbiAgZmV0Y2hVc2VySW5mbzogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcFVwKHsgc2V0UG9wVXAsIHVzZXJJZCwgZmV0Y2hVc2VySW5mbyB9OiBQcm9wcykge1xyXG5cdGNvbnN0IGZvcm1TZWN0aW9uID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3QgW25hbWVFcnJvciwgc2V0TmFtZUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3QgW2Rlc2NyaXB0aW9uRXJyb3IsIHNldERlc2NyaXB0aW9uRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVG9kbyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jcmVhdGVUb2RvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSB0b2RvLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZU5hbWUgPSAoZTogc3RyaW5nKSA9PiB7XHJcblx0XHRzZXROYW1lKGUpO1xyXG5cdFx0aWYgKG5hbWUubGVuZ3RoID4gMjU1KSB7XHJcblx0XHRcdHNldE5hbWVFcnJvcihcIlwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0XHRpZiAoZm9ybVNlY3Rpb24uY3VycmVudCAmJiAhZm9ybVNlY3Rpb24uY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuXHRcdFx0XHRzZXRQb3BVcChmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIC8vIGNsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICB9O1xyXG5cdH0sIFtzZXRQb3BVcF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICByZWY9e2Zvcm1TZWN0aW9ufVxyXG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMTAgYmctc2xhdGUtMjAwLzMwIGJhY2tkcm9wLWJsdXItbGcgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9wVXAoZmFsc2UpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTggdG9wLTQgdGV4dC1uZXV0cmFsLTUwMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8TGlhV2luZG93Q2xvc2VTb2xpZCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17Y3JlYXRlVG9kb31cclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogbmFtZSAqL31cclxuICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJuYW1lXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cInRvZG8tbmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWy43NXJlbV0gZm9udC1ib2xkIHRleHQtbmV1dHJhbC01MDAgbWItMVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJ0b2RvLW5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidG9kby1uYW1lXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlB1dCB0aGUgdG8tZG8gbmFtZSBoZXJlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUby1kbyBuYW1lXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMDB9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZCB0cmFja2luZy13aWRlIGZvY3VzOm91dGxpbmUtbmV1dHJhbC01MDAgaC04IGZvY3VzOnNoYWRvdy1tZCBwbC0yIHRleHQtWy43NXJlbV0gdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIGRlc2NyaXB0aW9uICovfVxyXG4gICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cInRvZG8tZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsuNzVyZW1dIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIG1iLTFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInRvZG8tZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwidG9kby1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQdXQgdGhlIHRvLWRvIGRlc2NyaXB0aW9uIGhlcmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvLWRvIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXsyNTV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkIHRyYWNraW5nLXdpZGUgZm9jdXM6b3V0bGluZS1uZXV0cmFsLTUwMCBoLTggZm9jdXM6c2hhZG93LW1kIHBsLTIgdGV4dC1bLjc1cmVtXSB3LWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtWy44NXJlbV0gZm9udC1ib2xkIHRleHQtbmV1dHJhbC01MDAgcHktMSBweC0yIGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTp0cmFuc2xhdGUteS0wLjVcIj5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpYVdpbmRvd0Nsb3NlU29saWQiLCJQb3BVcCIsInNldFBvcFVwIiwidXNlcklkIiwiZmV0Y2hVc2VySW5mbyIsImZvcm1TZWN0aW9uIiwibmFtZSIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibmFtZUVycm9yIiwic2V0TmFtZUVycm9yIiwiZGVzY3JpcHRpb25FcnJvciIsInNldERlc2NyaXB0aW9uRXJyb3IiLCJjcmVhdGVUb2RvIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJvbkNoYW5nZU5hbWUiLCJlIiwibGVuZ3RoIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsInJlZiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/PopUp.tsx\n"));

/***/ })

});