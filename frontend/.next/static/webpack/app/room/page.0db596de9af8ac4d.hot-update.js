"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/room/page",{

/***/ "(app-pages-browser)/./src/routes/RoomBtn.js":
/*!*******************************!*\
  !*** ./src/routes/RoomBtn.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RoomBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 219px;\\n  height: 158px;\\n  background: #43BEF2;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n  border-radius: 10px;\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 325px;\\n  height: 158px;\\n  background: #FF285C;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n  border-radius: 10px;\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nfunction RoomBtn() {\n    _s();\n    var _s1 = $RefreshSig$();\n    let CopyBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject());\n    let StartBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject1());\n    let [setting, setSetting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"setting-btn\",\n                onClick: ()=>{\n                    setSetting(!setting);\n                },\n                children: setting == true ? \"기본 모드 ON\" : \"미니게임 ON\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CopyBtn, {\n                className: \"copy-url\",\n                onClick: ()=>{\n                    alert(\"클립보드에 url이 복사되었습니다.\");\n                },\n                children: \"친구 초대\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StartBtn, {\n                className: \"startBtn\",\n                onClick: _s1(()=>{\n                    _s1();\n                    let navigate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n                    navigate(\"/board\");\n                }, \"CzcTeTziyjMsSrAVmHuCCb6+Bfg=\", false, function() {\n                    return [\n                        react__WEBPACK_IMPORTED_MODULE_2__.useNavigate\n                    ];\n                }),\n                children: \"시작\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SSAFY\\\\Desktop\\\\A602\\\\frontend\\\\src\\\\routes\\\\RoomBtn.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(RoomBtn, \"UjMPk3kXGgXcTeejaKGwfMGmYAc=\");\n_c = RoomBtn;\nvar _c;\n$RefreshReg$(_c, \"RoomBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yb3V0ZXMvUm9vbUJ0bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0M7QUFDTztBQUU5QixTQUFTRzs7O0lBRXRCLElBQUlDLFVBQVVKLHlEQUFNQSxDQUFDSyxNQUFNO0lBUTNCLElBQUlDLFdBQVdOLHlEQUFNQSxDQUFDSyxNQUFNO0lBUTVCLElBQUksQ0FBQ0UsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ1E7OzBCQUVDLDhEQUFDSjtnQkFBT0ssV0FBVTtnQkFBY0MsU0FBUztvQkFBTUgsV0FBVyxDQUFDRDtnQkFBVTswQkFFbkVBLFdBQVcsT0FFVCxhQUVBOzs7Ozs7MEJBSUosOERBQUNIO2dCQUFRTSxXQUFVO2dCQUFXQyxTQUFTO29CQUFNQyxNQUFNO2dCQUF3QjswQkFBRzs7Ozs7OzBCQUc5RSw4REFBQ047Z0JBQVNJLFdBQVU7Z0JBQVdDLE9BQU8sTUFBRTs7b0JBQ3RDLElBQUlFLFdBQVdYLGtEQUFXQTtvQkFDMUJXLFNBQVM7Z0JBQ1g7O3dCQUZpQlgsOENBQVdBOzs7MEJBRXpCOzs7Ozs7Ozs7Ozs7QUFLVDtHQTVDd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yb3V0ZXMvUm9vbUJ0bi5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb29tQnRuKCkge1xyXG5cclxuICBsZXQgQ29weUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDIxOXB4O1xyXG4gIGhlaWdodDogMTU4cHg7XHJcbiAgYmFja2dyb3VuZDogIzQzQkVGMjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYFxyXG5cclxuICBsZXQgU3RhcnRCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDE1OHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRjI4NUM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGBcclxuXHJcbiAgbGV0IFtzZXR0aW5nLCBzZXRTZXR0aW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2V0dGluZy1idG5cIiBvbkNsaWNrPXsoKT0+eyBzZXRTZXR0aW5nKCFzZXR0aW5nKTsgfX0+XHJcbiAgICAgIHtcclxuICAgICAgICBzZXR0aW5nID09IHRydWVcclxuICAgICAgICA/IChcclxuICAgICAgICAgICfquLDrs7gg66qo65OcIE9OJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIDogJ+uvuOuLiOqyjOyehCBPTidcclxuICAgICAgfVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxDb3B5QnRuIGNsYXNzTmFtZT1cImNvcHktdXJsXCIgb25DbGljaz17KCk9PnsgYWxlcnQoJ+2BtOumveuztOuTnOyXkCB1cmzsnbQg67O17IKs65CY7JeI7Iq164uI64ukLicpOyB9fT5cclxuICAgICAgICDsuZzqtawg7LSI64yAXHJcbiAgICAgIDwvQ29weUJ0bj5cclxuICAgICAgPFN0YXJ0QnRuIGNsYXNzTmFtZT1cInN0YXJ0QnRuXCIgb25DbGljaz17KCk9PntcclxuICAgICAgICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgICAgIG5hdmlnYXRlKFwiL2JvYXJkXCIpO1xyXG4gICAgICB9fT5cclxuICAgICAgICDsi5zsnpFcclxuICAgICAgPC9TdGFydEJ0bj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwiUm9vbUJ0biIsIkNvcHlCdG4iLCJidXR0b24iLCJTdGFydEJ0biIsInNldHRpbmciLCJzZXRTZXR0aW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImFsZXJ0IiwibmF2aWdhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/routes/RoomBtn.js\n"));

/***/ })

});