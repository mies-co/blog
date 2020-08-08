webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/mies/_mies_dev/blog.mies.co/src/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__[\"default\"])([\"\\n    body {\\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\\n    }\\n\\n    h1, h2, h3, h4, h5, h6 {\\n        color: \", \";\\n        opacity: 0.8;\\n    }\\n\\n    h1, h2 {\\n        margin-top: 2.4rem;\\n    }\\n    \\n    h3 {\\n        margin-top: 1.8rem;\\n    }\\n\\n    a {\\n        color: \", \";\\n    }\\n\\n    p {\\n        color: \", \";\\n    }\\n        \\n    code {\\n        display: inline-block;\\n        font-size: 95%;\\n    }\\n\\n    :not(pre) >  code {\\n        padding: .1em .6em;\\n        margin: 0;\\n        font-size: 85%;\\n        background-color: rgba(27,31,35,.05);\\n        border-radius: 6px;\\n    }\\n\\n    blockquote {\\n        background-color: #f6f6f6;\\n        padding-top: .5rem;\\n        padding-bottom: .5rem;\\n        font-size: 95%;\\n\\n        p {\\n            color: \", \";\\n        }\\n    }\\n\\n    .react-share__ShareButton {\\n        margin-right: 0.5rem;\\n    }\\n\\n    button:focus {\\n        outline: none;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // const theme = {\n// \tcolors: {\n// \t\tprimary: \"rgb(0, 128, 86)\",\n// \t},\n// };\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), {\"primaryColor\":\"rgb(255, 0, 81)\",\"primaryColorDark\":\"rgb(128, 0, 40)\",\"secondaryColor\":\"rgb(169, 174, 202)\",\"secondaryColorDark\":\"rgb(93, 102, 151)\",\"gray\":\"rgb(150, 150, 150)\",\"grayLight\":\"rgb(214, 214, 214)\",\"grayDark\":\"rgb(86, 86, 86)\",\"textColor\":\"rgb(150, 150, 150)\",\"textColorDark\":\"rgb(86, 86, 86)\"}.secondaryColor, {\"primaryColor\":\"rgb(255, 0, 81)\",\"primaryColorDark\":\"rgb(128, 0, 40)\",\"secondaryColor\":\"rgb(169, 174, 202)\",\"secondaryColorDark\":\"rgb(93, 102, 151)\",\"gray\":\"rgb(150, 150, 150)\",\"grayLight\":\"rgb(214, 214, 214)\",\"grayDark\":\"rgb(86, 86, 86)\",\"textColor\":\"rgb(150, 150, 150)\",\"textColorDark\":\"rgb(86, 86, 86)\"}.primaryColor, {\"primaryColor\":\"rgb(255, 0, 81)\",\"primaryColorDark\":\"rgb(128, 0, 40)\",\"secondaryColor\":\"rgb(169, 174, 202)\",\"secondaryColorDark\":\"rgb(93, 102, 151)\",\"gray\":\"rgb(150, 150, 150)\",\"grayLight\":\"rgb(214, 214, 214)\",\"grayDark\":\"rgb(86, 86, 86)\",\"textColor\":\"rgb(150, 150, 150)\",\"textColorDark\":\"rgb(86, 86, 86)\"}.textColorDark, {\"primaryColor\":\"rgb(255, 0, 81)\",\"primaryColorDark\":\"rgb(128, 0, 40)\",\"secondaryColor\":\"rgb(169, 174, 202)\",\"secondaryColorDark\":\"rgb(93, 102, 151)\",\"gray\":\"rgb(150, 150, 150)\",\"grayLight\":\"rgb(214, 214, 214)\",\"grayDark\":\"rgb(86, 86, 86)\",\"textColor\":\"rgb(150, 150, 150)\",\"textColorDark\":\"rgb(86, 86, 86)\"}.gray);\n_c = GlobalStyle;\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"ThemeProvider\"], {\n        theme: {\"primaryColor\":\"rgb(255, 0, 81)\",\"primaryColorDark\":\"rgb(128, 0, 40)\",\"secondaryColor\":\"rgb(169, 174, 202)\",\"secondaryColorDark\":\"rgb(93, 102, 151)\",\"gray\":\"rgb(150, 150, 150)\",\"grayLight\":\"rgb(214, 214, 214)\",\"grayDark\":\"rgb(86, 86, 86)\",\"textColor\":\"rgb(150, 150, 150)\",\"textColorDark\":\"rgb(86, 86, 86)\"},\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 4\n        }\n      }, __jsx(GlobalStyle, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 5\n        }\n      }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 5\n        }\n      })));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/MjI1NCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJzZWNvbmRhcnlDb2xvciIsInByaW1hcnlDb2xvciIsInRleHRDb2xvckRhcmsiLCJncmF5IiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsb0JBTUFDLG1UQUFLLENBQUNDLGNBTk4sRUFtQkFELG1UQUFLLENBQUNFLFlBbkJOLEVBdUJBRixtVEFBSyxDQUFDRyxhQXZCTixFQThDSUgsbVRBQUssQ0FBQ0ksSUE5Q1YsQ0FBakI7S0FBTU4sVzs7SUEyRGVPLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ1g7QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNBQyxTQURBLGVBQ0FBLFNBREE7QUFBQSxVQUNXQyxTQURYLGVBQ1dBLFNBRFg7QUFFUixhQUNDLE1BQUMsK0RBQUQ7QUFBZSxhQUFLLEVBQUVSLG1UQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQUVDLE1BQUMsU0FBRCx5RkFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkQsQ0FERDtBQU1BOzs7O0VBVGlDQywrQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIGNvbnN0IHRoZW1lID0ge1xuLy8gXHRjb2xvcnM6IHtcbi8vIFx0XHRwcmltYXJ5OiBcInJnYigwLCAxMjgsIDg2KVwiLFxuLy8gXHR9LFxuLy8gfTtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfVxuXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnNlY29uZGFyeUNvbG9yfTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIGgxLCBoMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIuNHJlbTtcbiAgICB9XG4gICAgXG4gICAgaDMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjhyZW07XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnByaW1hcnlDb2xvcn07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLnRleHRDb2xvckRhcmt9O1xuICAgIH1cbiAgICAgICAgXG4gICAgY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiA5NSU7XG4gICAgfVxuXG4gICAgOm5vdChwcmUpID4gIGNvZGUge1xuICAgICAgICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiA4NSU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsMzEsMzUsLjA1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cblxuICAgIGJsb2NrcXVvdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA5NSU7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5ncmF5fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZWFjdC1zaGFyZV9fU2hhcmVCdXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB9XG5cbiAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})