webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug]/index.js":
/*!****************************************!*\
  !*** ./src/pages/post/[slug]/index.js ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown/with-html */ \"./node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../comps/Layout */ \"./src/comps/Layout/index.js\");\n/* harmony import */ var _comps_CodeBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../comps/CodeBlock */ \"./src/comps/CodeBlock/index.js\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\nvar _jsxFileName = \"/Users/mies/_mies_dev/blog.mies.co/src/pages/post/[slug]/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var content = _ref.content,\n      frontmatter = _ref.frontmatter;\n  var dateCreated = frontmatter.dateCreated,\n      dateUpdated = frontmatter.dateUpdated,\n      dateLast = frontmatter.dateLast,\n      title = frontmatter.title,\n      description = frontmatter.description,\n      author = frontmatter.author,\n      social = frontmatter.social,\n      tags = frontmatter.tags;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _URL = new URL(router.asPath, \"http://localhost:3000\"),\n      url = _URL.href,\n      host = _URL.host;\n\n  social.image = new URL(social.image, \"http://localhost:3000\").href;\n  console.log(\"dateCreated --\", dateCreated, moment__WEBPACK_IMPORTED_MODULE_5___default()(dateLast).format(\"DD-MMM-YY\"));\n  return __jsx(_comps_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    author: author,\n    url: url,\n    social: social,\n    title: title,\n    description: description,\n    structured: {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"BlogPosting\",\n      mainEntityOfPage: {\n        \"@type\": \"WebPage\",\n        \"@id\": url\n      },\n      headline: title,\n      image: [social.image],\n      datePublished: dateCreated,\n      dateModified: dateUpdated,\n      author: {\n        \"@type\": \"Person\",\n        name: \"\".concat(author.firstname || \"\", \" \").concat(author.lastname || \"\")\n      },\n      publisher: {\n        \"@type\": \"Organization\",\n        name: \"Mies\",\n        logo: {\n          \"@type\": \"ImageObject\",\n          url: \"https://www.mies.co/static/mies-logo-2000x1000.png\"\n        }\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  }, __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__[\"TwitterShareButton\"], {\n    url: url,\n    title: description,\n    via: author.twitter,\n    hashtags: tags,\n    related: [author.twitter],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__[\"TwitterIcon\"], {\n    size: 32,\n    round: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 6\n    }\n  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__[\"LinkedinShareButton\"], {\n    url: url,\n    title: title,\n    summary: description,\n    source: host,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_8__[\"LinkedinIcon\"], {\n    size: 32,\n    round: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 6\n    }\n  })), __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    escapeHtml: false,\n    source: content,\n    renderers: {\n      code: _comps_CodeBlock__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddL2luZGV4LmpzP2UwZWMiXSwibmFtZXMiOlsiUG9zdCIsImNvbnRlbnQiLCJmcm9udG1hdHRlciIsImRhdGVDcmVhdGVkIiwiZGF0ZVVwZGF0ZWQiLCJkYXRlTGFzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJzb2NpYWwiLCJ0YWdzIiwicm91dGVyIiwidXNlUm91dGVyIiwiVVJMIiwiYXNQYXRoIiwicHJvY2VzcyIsInVybCIsImhyZWYiLCJob3N0IiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwibW9tZW50IiwiZm9ybWF0IiwibWFpbkVudGl0eU9mUGFnZSIsImhlYWRsaW5lIiwiZGF0ZVB1Ymxpc2hlZCIsImRhdGVNb2RpZmllZCIsIm5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInB1Ymxpc2hlciIsImxvZ28iLCJ0d2l0dGVyIiwiY29kZSIsIkNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxJQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUFBLE1BRXJEQyxXQUZxRCxHQVVsREQsV0FWa0QsQ0FFckRDLFdBRnFEO0FBQUEsTUFHckRDLFdBSHFELEdBVWxERixXQVZrRCxDQUdyREUsV0FIcUQ7QUFBQSxNQUlyREMsUUFKcUQsR0FVbERILFdBVmtELENBSXJERyxRQUpxRDtBQUFBLE1BS3JEQyxLQUxxRCxHQVVsREosV0FWa0QsQ0FLckRJLEtBTHFEO0FBQUEsTUFNckRDLFdBTnFELEdBVWxETCxXQVZrRCxDQU1yREssV0FOcUQ7QUFBQSxNQU9yREMsTUFQcUQsR0FVbEROLFdBVmtELENBT3JETSxNQVBxRDtBQUFBLE1BUXJEQyxNQVJx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REE7O0dBekV1Qm5DLEk7VUFZUlkscUQ7OztLQVpRWixJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duL3dpdGgtaHRtbFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIl9jb21wcy9MYXlvdXRcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIl9jb21wcy9Db2RlQmxvY2tcIjtcblxuaW1wb3J0IHsgVHdpdHRlclNoYXJlQnV0dG9uLCBUd2l0dGVySWNvbiwgTGlua2VkaW5TaGFyZUJ1dHRvbiwgTGlua2VkaW5JY29uIH0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBjb250ZW50LCBmcm9udG1hdHRlciB9KSB7XG5cdGNvbnN0IHtcblx0XHRkYXRlQ3JlYXRlZCxcblx0XHRkYXRlVXBkYXRlZCxcblx0XHRkYXRlTGFzdCxcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdXRob3IsXG5cdFx0c29jaWFsLFxuXHRcdHRhZ3MsXG5cdH0gPSBmcm9udG1hdHRlcjtcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBocmVmOiB1cmwsIGhvc3QgfSA9IG5ldyBVUkwocm91dGVyLmFzUGF0aCwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCk7XG5cdHNvY2lhbC5pbWFnZSA9IG5ldyBVUkwoc29jaWFsLmltYWdlLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMKS5ocmVmO1xuXG5cdGNvbnNvbGUubG9nKFwiZGF0ZUNyZWF0ZWQgLS1cIiwgZGF0ZUNyZWF0ZWQsIG1vbWVudChkYXRlTGFzdCkuZm9ybWF0KFwiREQtTU1NLVlZXCIpKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXRcblx0XHRcdGF1dGhvcj17YXV0aG9yfVxuXHRcdFx0dXJsPXt1cmx9XG5cdFx0XHRzb2NpYWw9e3NvY2lhbH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cblx0XHRcdHN0cnVjdHVyZWQ9e3tcblx0XHRcdFx0XCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuXHRcdFx0XHRcIkB0eXBlXCI6IFwiQmxvZ1Bvc3RpbmdcIixcblx0XHRcdFx0bWFpbkVudGl0eU9mUGFnZToge1xuXHRcdFx0XHRcdFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG5cdFx0XHRcdFx0XCJAaWRcIjogdXJsLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoZWFkbGluZTogdGl0bGUsXG5cdFx0XHRcdGltYWdlOiBbc29jaWFsLmltYWdlXSxcblx0XHRcdFx0ZGF0ZVB1Ymxpc2hlZDogZGF0ZUNyZWF0ZWQsXG5cdFx0XHRcdGRhdGVNb2RpZmllZDogZGF0ZVVwZGF0ZWQsXG5cdFx0XHRcdGF1dGhvcjoge1xuXHRcdFx0XHRcdFwiQHR5cGVcIjogXCJQZXJzb25cIixcblx0XHRcdFx0XHRuYW1lOiBgJHthdXRob3IuZmlyc3RuYW1lIHx8IFwiXCJ9ICR7YXV0aG9yLmxhc3RuYW1lIHx8IFwiXCJ9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0cHVibGlzaGVyOiB7XG5cdFx0XHRcdFx0XCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuXHRcdFx0XHRcdG5hbWU6IFwiTWllc1wiLFxuXHRcdFx0XHRcdGxvZ286IHtcblx0XHRcdFx0XHRcdFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuXHRcdFx0XHRcdFx0dXJsOiBcImh0dHBzOi8vd3d3Lm1pZXMuY28vc3RhdGljL21pZXMtbG9nby0yMDAweDEwMDAucG5nXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdDxUd2l0dGVyU2hhcmVCdXR0b25cblx0XHRcdFx0XHR1cmw9e3VybH1cblx0XHRcdFx0XHR0aXRsZT17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0dmlhPXthdXRob3IudHdpdHRlcn1cblx0XHRcdFx0XHRoYXNodGFncz17dGFnc31cblx0XHRcdFx0XHRyZWxhdGVkPXtbYXV0aG9yLnR3aXR0ZXJdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFR3aXR0ZXJJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuXHRcdFx0XHQ8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cblx0XHRcdFx0PExpbmtlZGluU2hhcmVCdXR0b24gdXJsPXt1cmx9IHRpdGxlPXt0aXRsZX0gc3VtbWFyeT17ZGVzY3JpcHRpb259IHNvdXJjZT17aG9zdH0+XG5cdFx0XHRcdFx0PExpbmtlZGluSWNvbiBzaXplPXszMn0gcm91bmQgLz5cblx0XHRcdFx0PC9MaW5rZWRpblNoYXJlQnV0dG9uPlxuXHRcdFx0XHQ8UmVhY3RNYXJrZG93blxuXHRcdFx0XHRcdGVzY2FwZUh0bWw9e2ZhbHNlfVxuXHRcdFx0XHRcdHNvdXJjZT17Y29udGVudH1cblx0XHRcdFx0XHRyZW5kZXJlcnM9e3tcblx0XHRcdFx0XHRcdGNvZGU6IENvZGVCbG9jayxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdDwvTGF5b3V0PlxuXHQpO1xufVxuXG5leHBvcnQgeyBnZXRTdGF0aWNQYXRocyB9IGZyb20gXCJfbGlic1wiO1xuZXhwb3J0IHsgZ2V0UG9zdFByb3BzIGFzIGdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIl9saWJzXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[slug]/index.js\n");

/***/ })

})