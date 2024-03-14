/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/vendor/libs/codemirror/addon/lint/html-lint.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/lint/html-lint.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// Depends on htmlhint.js from http://htmlhint.com/js/htmlhint.js\n// declare global: HTMLHint\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'htmlhint'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'htmlhint'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror, HTMLHint) {\n  \"use strict\";\n\n  var defaultRules = {\n    \"tagname-lowercase\": true,\n    \"attr-lowercase\": true,\n    \"attr-value-double-quotes\": true,\n    \"doctype-first\": false,\n    \"tag-pair\": true,\n    \"spec-char-escape\": true,\n    \"id-unique\": true,\n    \"src-not-empty\": true,\n    \"attr-no-duplication\": true\n  };\n  CodeMirror.registerHelper(\"lint\", \"html\", function (text, options) {\n    var found = [];\n\n    if (HTMLHint && !HTMLHint.verify) {\n      if (typeof HTMLHint[\"default\"] !== 'undefined') {\n        HTMLHint = HTMLHint[\"default\"];\n      } else {\n        HTMLHint = HTMLHint.HTMLHint;\n      }\n    }\n\n    if (!HTMLHint) HTMLHint = window.HTMLHint;\n\n    if (!HTMLHint) {\n      if (window.console) {\n        window.console.error(\"Error: HTMLHint not found, not defined on window, or not available through define/require, CodeMirror HTML linting cannot run.\");\n      }\n\n      return found;\n    }\n\n    var messages = HTMLHint.verify(text, options && options.rules || defaultRules);\n\n    for (var i = 0; i < messages.length; i++) {\n      var message = messages[i];\n      var startLine = message.line - 1,\n          endLine = message.line - 1,\n          startCol = message.col - 1,\n          endCol = message.col;\n      found.push({\n        from: CodeMirror.Pos(startLine, startCol),\n        to: CodeMirror.Pos(endLine, endCol),\n        message: message.message,\n        severity: message.type\n      });\n    }\n\n    return found;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vbGludC9odG1sLWxpbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLEVBQWtDQSxtQkFBTyxDQUFDLHVJQUFELENBQXpDLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxFQUF5Qix1SUFBekIsQ0FBRCxvQ0FBdUNKLEdBQXZDO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUJFLFFBQXJCLEVBQStCO0VBQ2hDOztFQUVBLElBQUlDLFlBQVksR0FBRztJQUNqQixxQkFBcUIsSUFESjtJQUVqQixrQkFBa0IsSUFGRDtJQUdqQiw0QkFBNEIsSUFIWDtJQUlqQixpQkFBaUIsS0FKQTtJQUtqQixZQUFZLElBTEs7SUFNakIsb0JBQW9CLElBTkg7SUFPakIsYUFBYSxJQVBJO0lBUWpCLGlCQUFpQixJQVJBO0lBU2pCLHVCQUF1QjtFQVROLENBQW5CO0VBWUFILFVBQVUsQ0FBQ0ksY0FBWCxDQUEwQixNQUExQixFQUFrQyxNQUFsQyxFQUEwQyxVQUFTQyxJQUFULEVBQWVDLE9BQWYsRUFBd0I7SUFDaEUsSUFBSUMsS0FBSyxHQUFHLEVBQVo7O0lBQ0EsSUFBSUwsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sTUFBMUIsRUFBa0M7TUFDaEMsSUFBRyxPQUFPTixRQUFRLFdBQWYsS0FBNEIsV0FBL0IsRUFBNEM7UUFDMUNBLFFBQVEsR0FBR0EsUUFBUSxXQUFuQjtNQUNELENBRkQsTUFFTztRQUNMQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0EsUUFBcEI7TUFDRDtJQUNGOztJQUNELElBQUksQ0FBQ0EsUUFBTCxFQUFlQSxRQUFRLEdBQUdELE1BQU0sQ0FBQ0MsUUFBbEI7O0lBQ2YsSUFBSSxDQUFDQSxRQUFMLEVBQWU7TUFDYixJQUFJRCxNQUFNLENBQUNRLE9BQVgsRUFBb0I7UUFDaEJSLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQyxLQUFmLENBQXFCLGdJQUFyQjtNQUNIOztNQUNELE9BQU9ILEtBQVA7SUFDRDs7SUFDRCxJQUFJSSxRQUFRLEdBQUdULFFBQVEsQ0FBQ00sTUFBVCxDQUFnQkgsSUFBaEIsRUFBc0JDLE9BQU8sSUFBSUEsT0FBTyxDQUFDTSxLQUFuQixJQUE0QlQsWUFBbEQsQ0FBZjs7SUFDQSxLQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7TUFDeEMsSUFBSUUsT0FBTyxHQUFHSixRQUFRLENBQUNFLENBQUQsQ0FBdEI7TUFDQSxJQUFJRyxTQUFTLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixHQUFlLENBQS9CO01BQUEsSUFBa0NDLE9BQU8sR0FBR0gsT0FBTyxDQUFDRSxJQUFSLEdBQWUsQ0FBM0Q7TUFBQSxJQUE4REUsUUFBUSxHQUFHSixPQUFPLENBQUNLLEdBQVIsR0FBYyxDQUF2RjtNQUFBLElBQTBGQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ0ssR0FBM0c7TUFDQWIsS0FBSyxDQUFDZSxJQUFOLENBQVc7UUFDVEMsSUFBSSxFQUFFdkIsVUFBVSxDQUFDd0IsR0FBWCxDQUFlUixTQUFmLEVBQTBCRyxRQUExQixDQURHO1FBRVRNLEVBQUUsRUFBRXpCLFVBQVUsQ0FBQ3dCLEdBQVgsQ0FBZU4sT0FBZixFQUF3QkcsTUFBeEIsQ0FGSztRQUdUTixPQUFPLEVBQUVBLE9BQU8sQ0FBQ0EsT0FIUjtRQUlUVyxRQUFRLEVBQUdYLE9BQU8sQ0FBQ1k7TUFKVixDQUFYO0lBTUQ7O0lBQ0QsT0FBT3BCLEtBQVA7RUFDRCxDQTVCRDtBQTZCRCxDQW5ERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9saW50L2h0bWwtbGludC5qcz9iYzljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbi8vIERlcGVuZHMgb24gaHRtbGhpbnQuanMgZnJvbSBodHRwOi8vaHRtbGhpbnQuY29tL2pzL2h0bWxoaW50LmpzXG5cbi8vIGRlY2xhcmUgZ2xvYmFsOiBIVE1MSGludFxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpLCByZXF1aXJlKFwiaHRtbGhpbnRcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIiwgXCJodG1saGludFwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yLCB3aW5kb3cuSFRNTEhpbnQpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvciwgSFRNTEhpbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGRlZmF1bHRSdWxlcyA9IHtcbiAgICBcInRhZ25hbWUtbG93ZXJjYXNlXCI6IHRydWUsXG4gICAgXCJhdHRyLWxvd2VyY2FzZVwiOiB0cnVlLFxuICAgIFwiYXR0ci12YWx1ZS1kb3VibGUtcXVvdGVzXCI6IHRydWUsXG4gICAgXCJkb2N0eXBlLWZpcnN0XCI6IGZhbHNlLFxuICAgIFwidGFnLXBhaXJcIjogdHJ1ZSxcbiAgICBcInNwZWMtY2hhci1lc2NhcGVcIjogdHJ1ZSxcbiAgICBcImlkLXVuaXF1ZVwiOiB0cnVlLFxuICAgIFwic3JjLW5vdC1lbXB0eVwiOiB0cnVlLFxuICAgIFwiYXR0ci1uby1kdXBsaWNhdGlvblwiOiB0cnVlXG4gIH07XG5cbiAgQ29kZU1pcnJvci5yZWdpc3RlckhlbHBlcihcImxpbnRcIiwgXCJodG1sXCIsIGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZm91bmQgPSBbXTtcbiAgICBpZiAoSFRNTEhpbnQgJiYgIUhUTUxIaW50LnZlcmlmeSkge1xuICAgICAgaWYodHlwZW9mIEhUTUxIaW50LmRlZmF1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhUTUxIaW50ID0gSFRNTEhpbnQuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEhUTUxIaW50ID0gSFRNTEhpbnQuSFRNTEhpbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghSFRNTEhpbnQpIEhUTUxIaW50ID0gd2luZG93LkhUTUxIaW50O1xuICAgIGlmICghSFRNTEhpbnQpIHtcbiAgICAgIGlmICh3aW5kb3cuY29uc29sZSkge1xuICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKFwiRXJyb3I6IEhUTUxIaW50IG5vdCBmb3VuZCwgbm90IGRlZmluZWQgb24gd2luZG93LCBvciBub3QgYXZhaWxhYmxlIHRocm91Z2ggZGVmaW5lL3JlcXVpcmUsIENvZGVNaXJyb3IgSFRNTCBsaW50aW5nIGNhbm5vdCBydW4uXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgICB2YXIgbWVzc2FnZXMgPSBIVE1MSGludC52ZXJpZnkodGV4dCwgb3B0aW9ucyAmJiBvcHRpb25zLnJ1bGVzIHx8IGRlZmF1bHRSdWxlcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc1tpXTtcbiAgICAgIHZhciBzdGFydExpbmUgPSBtZXNzYWdlLmxpbmUgLSAxLCBlbmRMaW5lID0gbWVzc2FnZS5saW5lIC0gMSwgc3RhcnRDb2wgPSBtZXNzYWdlLmNvbCAtIDEsIGVuZENvbCA9IG1lc3NhZ2UuY29sO1xuICAgICAgZm91bmQucHVzaCh7XG4gICAgICAgIGZyb206IENvZGVNaXJyb3IuUG9zKHN0YXJ0TGluZSwgc3RhcnRDb2wpLFxuICAgICAgICB0bzogQ29kZU1pcnJvci5Qb3MoZW5kTGluZSwgZW5kQ29sKSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICBzZXZlcml0eSA6IG1lc3NhZ2UudHlwZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJ3aW5kb3ciLCJIVE1MSGludCIsImRlZmF1bHRSdWxlcyIsInJlZ2lzdGVySGVscGVyIiwidGV4dCIsIm9wdGlvbnMiLCJmb3VuZCIsInZlcmlmeSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2VzIiwicnVsZXMiLCJpIiwibGVuZ3RoIiwibWVzc2FnZSIsInN0YXJ0TGluZSIsImxpbmUiLCJlbmRMaW5lIiwic3RhcnRDb2wiLCJjb2wiLCJlbmRDb2wiLCJwdXNoIiwiZnJvbSIsIlBvcyIsInRvIiwic2V2ZXJpdHkiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/lint/html-lint.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/lint/html-lint.js");
/******/ 	
/******/ })()
;