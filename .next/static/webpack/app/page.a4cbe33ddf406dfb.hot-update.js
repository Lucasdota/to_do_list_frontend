"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/login/Form.tsx":
/*!***************************************!*\
  !*** ./src/components/login/Form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_shared_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/shared/Spinner */ \"(app-pages-browser)/./src/components/shared/Spinner.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaEye_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaEye,FaUser!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaLock_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaLock!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Form = ()=>{\n    _s();\n    const [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const serverErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // accessing form data\n        const formData = new FormData(e.target);\n        // creating an object with the form data\n        const formDataObj = {\n            // the FormData object can hold various types of values, including files, so we need to explicitly specify the expected types for each form field\n            userEmail: formData.get(\"user_email\"),\n            userPass: formData.get(\"user_pass\")\n        };\n        // send request to the server\n        try {\n            setIsFetching(true);\n            const response = await fetch(\"/api/login\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: formDataObj.userEmail,\n                    password: formDataObj.userPass\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                credentials: \"include\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Invalid email or password.\");\n            }\n            router.push(\"/dashboard\");\n            setServerError(\"\");\n        } catch (err) {\n            console.error(\"Error sending data:\", err);\n            if (serverErrorRef.current) {\n                var _serverErrorRef_current, _serverErrorRef_current1;\n                (_serverErrorRef_current = serverErrorRef.current) === null || _serverErrorRef_current === void 0 ? void 0 : _serverErrorRef_current.classList.remove(\"text-red-400\");\n                (_serverErrorRef_current1 = serverErrorRef.current) === null || _serverErrorRef_current1 === void 0 ? void 0 : _serverErrorRef_current1.classList.add(\"text-slate-100\");\n                setTimeout(()=>{\n                    var _serverErrorRef_current, _serverErrorRef_current1;\n                    (_serverErrorRef_current = serverErrorRef.current) === null || _serverErrorRef_current === void 0 ? void 0 : _serverErrorRef_current.classList.remove(\"text-slate-100\");\n                    (_serverErrorRef_current1 = serverErrorRef.current) === null || _serverErrorRef_current1 === void 0 ? void 0 : _serverErrorRef_current1.classList.add(\"text-red-400\");\n                }, 100);\n            }\n            if (err instanceof Error) {\n                console.log(\"Here\");\n                setServerError(err.message);\n            } else {\n                setTimeout(()=>{\n                    setServerError(\"Invalid email or password.\");\n                }, 1000);\n            }\n        } finally{\n            setTimeout(()=>{\n                setIsFetching(false);\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col items-center justify-center gap-3 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-label\": \"email\",\n                className: \"flex flex-col w-full mb-1.5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"user_email\",\n                        className: \"text-[.75rem] font-bold text-neutral-400 mb-1\",\n                        children: \"Your email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"user_email\",\n                                name: \"user_email\",\n                                type: \"email\",\n                                autoComplete: \"email\",\n                                \"aria-label\": \"Put your email here\",\n                                placeholder: \"your@email.com\",\n                                required: true,\n                                className: \"border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEye_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser, {\n                                    className: \"w-2.5 h-2.5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-label\": \"senha\",\n                className: \"flex flex-col w-full mb-1.5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"user_pass\",\n                        className: \"text-[.75rem] font-bold text-neutral-400 mb-1\",\n                        children: \"Your password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"user_pass\",\n                                name: \"user_pass\",\n                                type: showPassword ? \"text\" : \"password\",\n                                autoComplete: \"current-password\",\n                                \"aria-label\": \"put your password here\",\n                                placeholder: \"Password123!\",\n                                required: true,\n                                className: \"border-2 rounded tracking-wide focus:outline-neutral-500 h-8 focus:shadow-md pl-10 text-[.75rem] w-full pr-7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                \"aria-label\": \"lock icon\",\n                                className: \"absolute p-2.5 top-0.5 bottom-0.5 border-r border-neutral-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaLock_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaLock, {\n                                    className: \"w-2.5 h-2.5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                id: \"show_pass\",\n                                \"aria-label\": \"click to show/hide password\",\n                                onClick: ()=>setShowPassword((prev)=>!prev),\n                                className: \"absolute right-2.5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEye_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEye, {\n                                    className: \"w-3 h-3  \".concat(showPassword ? \"text-neutral-600\" : \"text-neutral-400\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            serverError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                ref: serverErrorRef,\n                role: \"alert\",\n                \"aria-label\": \"email field error\",\n                className: \"text-red-400 h-1.5 flex mt-1 ml-2 text-[0.75rem] font-semibold leading-[0.75rem] md:text-[0.6rem] md:leading-[0.7rem] transition-all duration-100 ease-in-out\",\n                children: serverError\n            }, \"emailError-span\", false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                \"aria-label\": \"click here to login\",\n                className: \"text-[.75rem] w-4/5 bg-gradient-to-r from-green-700 to-green-500 text-white font-bold rounded-full py-1.5 shadow mt-2\",\n                children: isFetching ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Spinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    width: 1,\n                    height: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                    lineNumber: 160,\n                    columnNumber: 23\n                }, undefined) : \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Desktop\\\\Code\\\\todolist_frontend\\\\src\\\\components\\\\login\\\\Form.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"1XoducxTski1j45Gt/PSnZRraSI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luL0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDUztBQUNaO0FBQ047QUFDRztBQU81QyxNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBVTtJQUMxRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQVU7SUFDdEQsTUFBTWEsaUJBQWlCWiw2Q0FBTUEsQ0FBeUI7SUFDdEQsTUFBTWEsU0FBU1QsMERBQVNBO0lBRXhCLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsc0JBQXNCO1FBQ3RCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsRUFBRUksTUFBTTtRQUN0Qyx3Q0FBd0M7UUFDeEMsTUFBTUMsY0FBMkI7WUFDL0IsaUpBQWlKO1lBQ2pKQyxXQUFXSixTQUFTSyxHQUFHLENBQUM7WUFDeEJDLFVBQVVOLFNBQVNLLEdBQUcsQ0FBQztRQUN6QjtRQUNBLDZCQUE2QjtRQUMvQixJQUFJO1lBQ0hYLGNBQWM7WUFDZCxNQUFNYSxXQUFXLE1BQU1DLE1BQU0sY0FBYztnQkFDMUNDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBT1YsWUFBWUMsU0FBUztvQkFBRVUsVUFBVVgsWUFBWUcsUUFBUTtnQkFBQztnQkFDcEZTLFNBQVM7b0JBQ1IsZ0JBQWdCO2dCQUNqQjtnQkFDQUMsYUFBYTtZQUNkO1lBQ0EsSUFBSSxDQUFDVCxTQUFTVSxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSUMsTUFBTTtZQUNqQjtZQUNBdEIsT0FBT3VCLElBQUksQ0FBQztZQUNaN0IsZUFBZTtRQUNoQixFQUFFLE9BQU84QixLQUFLO1lBQ2JDLFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJGO1lBQ3JDLElBQUl6QixlQUFlNEIsT0FBTyxFQUFFO29CQUMzQjVCLHlCQUNBQTtpQkFEQUEsMEJBQUFBLGVBQWU0QixPQUFPLGNBQXRCNUIsOENBQUFBLHdCQUF3QjZCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO2lCQUN6QzlCLDJCQUFBQSxlQUFlNEIsT0FBTyxjQUF0QjVCLCtDQUFBQSx5QkFBd0I2QixTQUFTLENBQUNFLEdBQUcsQ0FBQztnQkFDdENDLFdBQVc7d0JBQ1ZoQyx5QkFDQUE7cUJBREFBLDBCQUFBQSxlQUFlNEIsT0FBTyxjQUF0QjVCLDhDQUFBQSx3QkFBd0I2QixTQUFTLENBQUNDLE1BQU0sQ0FBQztxQkFDekM5QiwyQkFBQUEsZUFBZTRCLE9BQU8sY0FBdEI1QiwrQ0FBQUEseUJBQXdCNkIsU0FBUyxDQUFDRSxHQUFHLENBQUM7Z0JBQ3ZDLEdBQUc7WUFDSjtZQUNBLElBQUlOLGVBQWVGLE9BQU87Z0JBQ3pCRyxRQUFRTyxHQUFHLENBQUM7Z0JBRVp0QyxlQUFlOEIsSUFBSVMsT0FBTztZQUMzQixPQUFPO2dCQUNORixXQUFXO29CQUNWckMsZUFBZTtnQkFDaEIsR0FBRztZQUNKO1FBQ0QsU0FBVTtZQUNUcUMsV0FBVztnQkFDVmpDLGNBQWM7WUFDZixHQUFHO1FBQ0o7SUFDQTtJQUVBLHFCQUNFLDhEQUFDb0M7UUFDQ0MsVUFBVWxDO1FBQ1ZtQyxXQUFVOzswQkFHViw4REFBQ0M7Z0JBQUlDLGNBQVc7Z0JBQVFGLFdBQVU7O2tDQUNoQyw4REFBQ0c7d0JBQ0NDLFNBQVE7d0JBQ1JKLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FDQ0MsSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsY0FBYTtnQ0FDYlAsY0FBVztnQ0FDWFEsYUFBWTtnQ0FDWkMsUUFBUTtnQ0FDUlgsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ2hELHNGQUFNQTtvQ0FBQ2dELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU14Qiw4REFBQ0M7Z0JBQUlDLGNBQVc7Z0JBQVFGLFdBQVU7O2tDQUNoQyw4REFBQ0c7d0JBQ0NDLFNBQVE7d0JBQ1JKLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FDQ0MsSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsTUFBTWpELGVBQWUsU0FBUztnQ0FDOUJrRCxjQUFhO2dDQUNiUCxjQUFXO2dDQUNYUSxhQUFZO2dDQUNaQyxRQUFRO2dDQUNSWCxXQUFVOzs7Ozs7MENBRVosOERBQUNDO2dDQUNDQyxjQUFXO2dDQUNYRixXQUFVOzBDQUVWLDRFQUFDOUMsaUZBQU1BO29DQUFDOEMsV0FBVTs7Ozs7Ozs7Ozs7MENBRXBCLDhEQUFDWTtnQ0FDQ0osTUFBSztnQ0FDTEYsSUFBRztnQ0FDSEosY0FBVztnQ0FDWFcsU0FBUyxJQUFNckQsZ0JBQWdCLENBQUNzRCxPQUFTLENBQUNBO2dDQUMxQ2QsV0FBVTswQ0FFViw0RUFBQy9DLHFGQUFLQTtvQ0FDSitDLFdBQVcsWUFFVixPQURDekMsZUFBZSxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTzdDRiw2QkFDQyw4REFBQzBEO2dCQUNDQyxLQUFLckQ7Z0JBQ0xzRCxNQUFLO2dCQUNMZixjQUFXO2dCQUVYRixXQUFVOzBCQUVUM0M7ZUFIRzs7Ozs7MEJBUVIsOERBQUN1RDtnQkFDQ0osTUFBSztnQkFDTE4sY0FBVztnQkFDWEYsV0FBVTswQkFFVHZDLDJCQUFhLDhEQUFDYixrRUFBT0E7b0JBQUNzRSxPQUFPO29CQUFHQyxRQUFROzs7OztnQ0FBUTs7Ozs7Ozs7Ozs7O0FBSXpEO0dBeEpNL0Q7O1FBS1dELHNEQUFTQTs7O0tBTHBCQztBQTBKTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dpbi9Gb3JtLnRzeD82OGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGlubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvc2hhcmVkL1NwaW5uZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYVVzZXIsIEZhRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZhTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIGZvcm1EYXRhT2JqIHtcclxuICB1c2VyRW1haWw6IHN0cmluZyB8IG51bGw7XHJcbiAgdXNlclBhc3M6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlcnZlckVycm9yLCBzZXRTZXJ2ZXJFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IHNlcnZlckVycm9yUmVmID0gdXNlUmVmPEhUTUxTcGFuRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhY2Nlc3NpbmcgZm9ybSBkYXRhXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpO1xyXG4gICAgLy8gY3JlYXRpbmcgYW4gb2JqZWN0IHdpdGggdGhlIGZvcm0gZGF0YVxyXG4gICAgY29uc3QgZm9ybURhdGFPYmo6IGZvcm1EYXRhT2JqID0ge1xyXG4gICAgICAvLyB0aGUgRm9ybURhdGEgb2JqZWN0IGNhbiBob2xkIHZhcmlvdXMgdHlwZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgZmlsZXMsIHNvIHdlIG5lZWQgdG8gZXhwbGljaXRseSBzcGVjaWZ5IHRoZSBleHBlY3RlZCB0eXBlcyBmb3IgZWFjaCBmb3JtIGZpZWxkXHJcbiAgICAgIHVzZXJFbWFpbDogZm9ybURhdGEuZ2V0KFwidXNlcl9lbWFpbFwiKSBhcyBzdHJpbmcgfCBudWxsLFxyXG4gICAgICB1c2VyUGFzczogZm9ybURhdGEuZ2V0KFwidXNlcl9wYXNzXCIpIGFzIHN0cmluZyB8IG51bGwsXHJcbiAgICB9O1xyXG4gICAgLy8gc2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcclxuXHRcdHRyeSB7XHJcblx0XHRcdHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGZvcm1EYXRhT2JqLnVzZXJFbWFpbCwgcGFzc3dvcmQ6IGZvcm1EYXRhT2JqLnVzZXJQYXNzIH0pLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuXHRcdFx0c2V0U2VydmVyRXJyb3IoXCJcIik7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgZGF0YTpcIiwgZXJyKTtcclxuXHRcdFx0aWYgKHNlcnZlckVycm9yUmVmLmN1cnJlbnQpIHtcclxuXHRcdFx0XHRzZXJ2ZXJFcnJvclJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1yZWQtNDAwXCIpO1xyXG5cdFx0XHRcdHNlcnZlckVycm9yUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXNsYXRlLTEwMFwiKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHNlcnZlckVycm9yUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXNsYXRlLTEwMFwiKTtcclxuXHRcdFx0XHRcdHNlcnZlckVycm9yUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXJlZC00MDBcIik7XHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkhlcmVcIik7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2V0U2VydmVyRXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0U2VydmVyRXJyb3IoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuXHRcdFx0XHR9LCAxMDAwKVx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuXHRcdFx0fSwgMTAwMClcdFx0XHJcblx0XHR9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIHctZnVsbFwiXHJcbiAgICA+XHJcbiAgICAgIHsvKiBlbWFpbCAqL31cclxuICAgICAgPGRpdiBhcmlhLWxhYmVsPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtYi0xLjVcIj5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJ1c2VyX2VtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWy43NXJlbV0gZm9udC1ib2xkIHRleHQtbmV1dHJhbC00MDAgbWItMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWW91ciBlbWFpbFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwidXNlcl9lbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyX2VtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHV0IHlvdXIgZW1haWwgaGVyZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ckBlbWFpbC5jb21cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkIHRyYWNraW5nLXdpZGUgZm9jdXM6b3V0bGluZS1uZXV0cmFsLTUwMCBoLTggZm9jdXM6c2hhZG93LW1kIHBsLTEwIHRleHQtWy43NXJlbV0gdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHAtMi41IHRvcC0wLjUgYm90dG9tLTAuNSBib3JkZXItciBib3JkZXItbmV1dHJhbC0xMDBcIj5cclxuICAgICAgICAgICAgPEZhVXNlciBjbGFzc05hbWU9XCJ3LTIuNSBoLTIuNVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogcGFzc3dvcmQgKi99XHJcbiAgICAgIDxkaXYgYXJpYS1sYWJlbD1cInNlbmhhXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWItMS41XCI+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwidXNlcl9wYXNzXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWy43NXJlbV0gZm9udC1ib2xkIHRleHQtbmV1dHJhbC00MDAgbWItMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWW91ciBwYXNzd29yZFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwidXNlcl9wYXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJfcGFzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInB1dCB5b3VyIHBhc3N3b3JkIGhlcmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkMTIzIVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQgdHJhY2tpbmctd2lkZSBmb2N1czpvdXRsaW5lLW5ldXRyYWwtNTAwIGgtOCBmb2N1czpzaGFkb3ctbWQgcGwtMTAgdGV4dC1bLjc1cmVtXSB3LWZ1bGwgcHItN1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibG9jayBpY29uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcC0yLjUgdG9wLTAuNSBib3R0b20tMC41IGJvcmRlci1yIGJvcmRlci1uZXV0cmFsLTEwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYUxvY2sgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBpZD1cInNob3dfcGFzc1wiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbGljayB0byBzaG93L2hpZGUgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMi41XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhRXllXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0zIGgtMyAgJHtcclxuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZCA/IFwidGV4dC1uZXV0cmFsLTYwMFwiIDogXCJ0ZXh0LW5ldXRyYWwtNDAwXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzZXJ2ZXJFcnJvciAmJiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIHJlZj17c2VydmVyRXJyb3JSZWZ9XHJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImVtYWlsIGZpZWxkIGVycm9yXCJcclxuICAgICAgICAgIGtleT1cImVtYWlsRXJyb3Itc3BhblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDAgaC0xLjUgZmxleCBtdC0xIG1sLTIgdGV4dC1bMC43NXJlbV0gZm9udC1zZW1pYm9sZCBsZWFkaW5nLVswLjc1cmVtXSBtZDp0ZXh0LVswLjZyZW1dIG1kOmxlYWRpbmctWzAuN3JlbV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2VydmVyRXJyb3J9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIGxvZ2luIGJ1dHRvbiAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjbGljayBoZXJlIHRvIGxvZ2luXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsuNzVyZW1dIHctNC81IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi03MDAgdG8tZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtZnVsbCBweS0xLjUgc2hhZG93IG10LTJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2lzRmV0Y2hpbmcgPyA8U3Bpbm5lciB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPiA6IFwiTG9naW5cIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJuYW1lcyI6WyJTcGlubmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZhVXNlciIsIkZhRXllIiwiRmFMb2NrIiwidXNlUm91dGVyIiwiRm9ybSIsInNlcnZlckVycm9yIiwic2V0U2VydmVyRXJyb3IiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInNlcnZlckVycm9yUmVmIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsImZvcm1EYXRhT2JqIiwidXNlckVtYWlsIiwiZ2V0IiwidXNlclBhc3MiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwib2siLCJFcnJvciIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0VGltZW91dCIsImxvZyIsIm1lc3NhZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2Iiwic3BhbiIsInJlZiIsInJvbGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login/Form.tsx\n"));

/***/ })

});