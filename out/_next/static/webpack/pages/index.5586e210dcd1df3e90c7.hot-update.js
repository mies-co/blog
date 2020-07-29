webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Layout */ \"./src/comps/Layout/index.js\");\nvar _jsxFileName = \"/Users/mies/_mies_dev/blog.mies.co/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home(props) {\n  var _this = this;\n\n  var posts = props.posts;\n  return __jsx(_comps_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 3\n    }\n  }, posts.map(function (_ref) {\n    var _ref$frontmatter = _ref.frontmatter,\n        title = _ref$frontmatter.title,\n        description = _ref$frontmatter.description,\n        date = _ref$frontmatter.date,\n        slug = _ref.slug;\n    return __jsx(\"article\", {\n      key: slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }\n    }, __jsx(\"header\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 6\n      }\n    }, __jsx(\"h3\", {\n      className: \"mb-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/post/[slug]\",\n      as: \"/post/\".concat(slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 8\n      }\n    }, __jsx(\"a\", {\n      className: \"text-3xl font-semibold text-orange-600 no-underline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }, title))), __jsx(\"span\", {\n      className: \"mb-4 text-xs\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, date)), __jsx(\"section\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 6\n      }\n    }, __jsx(\"p\", {\n      className: \"mb-8\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }, description)));\n  }));\n}\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicG9zdHMiLCJtYXAiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsTUFDWkMsS0FEWSxHQUNGRCxLQURFLENBQ1pDLEtBRFk7QUFFcEIsU0FDQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUEsS0FBSyxDQUFDQyxHQUFOLENBQVU7QUFBQSxnQ0FBR0MsV0FBSDtBQUFBLFFBQWtCQyxLQUFsQixvQkFBa0JBLEtBQWxCO0FBQUEsUUFBeUJDLFdBQXpCLG9CQUF5QkEsV0FBekI7QUFBQSxRQUFzQ0MsSUFBdEMsb0JBQXNDQSxJQUF0QztBQUFBLFFBQThDQyxJQUE5QyxRQUE4Q0EsSUFBOUM7QUFBQSxXQUNWO0FBQVMsU0FBRyxFQUFFQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxjQUFaO0FBQTRCLFFBQUUsa0JBQVdBLElBQVgsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUcsZUFBUyxFQUFDLHFEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0VILEtBQXBFLENBREQsQ0FERCxDQURELEVBTUM7QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0UsSUFBaEMsQ0FORCxDQURELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkQsV0FBckIsQ0FERCxDQVRELENBRFU7QUFBQSxHQUFWLENBREYsQ0FERDtBQW1CQTs7S0FyQlFOLEk7O0FBeUJNQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcblx0Y29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdHtwb3N0cy5tYXAoKHsgZnJvbnRtYXR0ZXI6IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlIH0sIHNsdWcgfSkgPT4gKFxuXHRcdFx0XHQ8YXJ0aWNsZSBrZXk9e3NsdWd9PlxuXHRcdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibWItMlwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtcIi9wb3N0L1tzbHVnXVwifSBhcz17YC9wb3N0LyR7c2x1Z31gfT5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTYwMCBuby11bmRlcmxpbmVcIj57dGl0bGV9PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhzXCI+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItOFwiPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQpKX1cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cblxuZXhwb3J0IHsgZ2V0TGlzdFByb3BzIGFzIGdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIi4uL2xpYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})