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

/***/ "./resources/assets/vendor/libs/codemirror/mode/properties/properties.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/properties/properties.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"properties\", function () {\n    return {\n      token: function token(stream, state) {\n        var sol = stream.sol() || state.afterSection;\n        var eol = stream.eol();\n        state.afterSection = false;\n\n        if (sol) {\n          if (state.nextMultiline) {\n            state.inMultiline = true;\n            state.nextMultiline = false;\n          } else {\n            state.position = \"def\";\n          }\n        }\n\n        if (eol && !state.nextMultiline) {\n          state.inMultiline = false;\n          state.position = \"def\";\n        }\n\n        if (sol) {\n          while (stream.eatSpace()) {}\n        }\n\n        var ch = stream.next();\n\n        if (sol && (ch === \"#\" || ch === \"!\" || ch === \";\")) {\n          state.position = \"comment\";\n          stream.skipToEnd();\n          return \"comment\";\n        } else if (sol && ch === \"[\") {\n          state.afterSection = true;\n          stream.skipTo(\"]\");\n          stream.eat(\"]\");\n          return \"header\";\n        } else if (ch === \"=\" || ch === \":\") {\n          state.position = \"quote\";\n          return null;\n        } else if (ch === \"\\\\\" && state.position === \"quote\") {\n          if (stream.eol()) {\n            // end of line?\n            // Multiline value\n            state.nextMultiline = true;\n          }\n        }\n\n        return state.position;\n      },\n      startState: function startState() {\n        return {\n          position: \"def\",\n          // Current position, \"def\", \"quote\" or \"comment\"\n          nextMultiline: false,\n          // Is the next line multiline value\n          inMultiline: false,\n          // Is the current line a multiline value\n          afterSection: false // Did we just open a section\n\n        };\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-properties\", \"properties\");\n  CodeMirror.defineMIME(\"text/x-ini\", \"properties\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3hCOztFQUVBQSxVQUFVLENBQUNDLFVBQVgsQ0FBc0IsWUFBdEIsRUFBb0MsWUFBVztJQUM3QyxPQUFPO01BQ0xDLEtBQUssRUFBRSxlQUFTQyxNQUFULEVBQWlCQyxLQUFqQixFQUF3QjtRQUM3QixJQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBUCxNQUFnQkQsS0FBSyxDQUFDRSxZQUFoQztRQUNBLElBQUlDLEdBQUcsR0FBR0osTUFBTSxDQUFDSSxHQUFQLEVBQVY7UUFFQUgsS0FBSyxDQUFDRSxZQUFOLEdBQXFCLEtBQXJCOztRQUVBLElBQUlELEdBQUosRUFBUztVQUNQLElBQUlELEtBQUssQ0FBQ0ksYUFBVixFQUF5QjtZQUN2QkosS0FBSyxDQUFDSyxXQUFOLEdBQW9CLElBQXBCO1lBQ0FMLEtBQUssQ0FBQ0ksYUFBTixHQUFzQixLQUF0QjtVQUNELENBSEQsTUFHTztZQUNMSixLQUFLLENBQUNNLFFBQU4sR0FBaUIsS0FBakI7VUFDRDtRQUNGOztRQUVELElBQUlILEdBQUcsSUFBSSxDQUFFSCxLQUFLLENBQUNJLGFBQW5CLEVBQWtDO1VBQ2hDSixLQUFLLENBQUNLLFdBQU4sR0FBb0IsS0FBcEI7VUFDQUwsS0FBSyxDQUFDTSxRQUFOLEdBQWlCLEtBQWpCO1FBQ0Q7O1FBRUQsSUFBSUwsR0FBSixFQUFTO1VBQ1AsT0FBTUYsTUFBTSxDQUFDUSxRQUFQLEVBQU4sRUFBeUIsQ0FBRTtRQUM1Qjs7UUFFRCxJQUFJQyxFQUFFLEdBQUdULE1BQU0sQ0FBQ1UsSUFBUCxFQUFUOztRQUVBLElBQUlSLEdBQUcsS0FBS08sRUFBRSxLQUFLLEdBQVAsSUFBY0EsRUFBRSxLQUFLLEdBQXJCLElBQTRCQSxFQUFFLEtBQUssR0FBeEMsQ0FBUCxFQUFxRDtVQUNuRFIsS0FBSyxDQUFDTSxRQUFOLEdBQWlCLFNBQWpCO1VBQ0FQLE1BQU0sQ0FBQ1csU0FBUDtVQUNBLE9BQU8sU0FBUDtRQUNELENBSkQsTUFJTyxJQUFJVCxHQUFHLElBQUlPLEVBQUUsS0FBSyxHQUFsQixFQUF1QjtVQUM1QlIsS0FBSyxDQUFDRSxZQUFOLEdBQXFCLElBQXJCO1VBQ0FILE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLEdBQWQ7VUFBb0JaLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXLEdBQVg7VUFDcEIsT0FBTyxRQUFQO1FBQ0QsQ0FKTSxNQUlBLElBQUlKLEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxHQUF6QixFQUE4QjtVQUNuQ1IsS0FBSyxDQUFDTSxRQUFOLEdBQWlCLE9BQWpCO1VBQ0EsT0FBTyxJQUFQO1FBQ0QsQ0FITSxNQUdBLElBQUlFLEVBQUUsS0FBSyxJQUFQLElBQWVSLEtBQUssQ0FBQ00sUUFBTixLQUFtQixPQUF0QyxFQUErQztVQUNwRCxJQUFJUCxNQUFNLENBQUNJLEdBQVAsRUFBSixFQUFrQjtZQUFHO1lBQ25CO1lBQ0FILEtBQUssQ0FBQ0ksYUFBTixHQUFzQixJQUF0QjtVQUNEO1FBQ0Y7O1FBRUQsT0FBT0osS0FBSyxDQUFDTSxRQUFiO01BQ0QsQ0E5Q0k7TUFnRExPLFVBQVUsRUFBRSxzQkFBVztRQUNyQixPQUFPO1VBQ0xQLFFBQVEsRUFBRyxLQUROO1VBQ21CO1VBQ3hCRixhQUFhLEVBQUcsS0FGWDtVQUVtQjtVQUN4QkMsV0FBVyxFQUFHLEtBSFQ7VUFHbUI7VUFDeEJILFlBQVksRUFBRyxLQUpWLENBSW1COztRQUpuQixDQUFQO01BTUQ7SUF2REksQ0FBUDtFQTBERCxDQTNERDtFQTZEQU4sVUFBVSxDQUFDa0IsVUFBWCxDQUFzQixtQkFBdEIsRUFBMkMsWUFBM0M7RUFDQWxCLFVBQVUsQ0FBQ2tCLFVBQVgsQ0FBc0IsWUFBdEIsRUFBb0MsWUFBcEM7QUFFQyxDQTFFRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9tb2RlL3Byb3BlcnRpZXMvcHJvcGVydGllcy5qcz80NDJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwicHJvcGVydGllc1wiLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIHNvbCA9IHN0cmVhbS5zb2woKSB8fCBzdGF0ZS5hZnRlclNlY3Rpb247XG4gICAgICB2YXIgZW9sID0gc3RyZWFtLmVvbCgpO1xuXG4gICAgICBzdGF0ZS5hZnRlclNlY3Rpb24gPSBmYWxzZTtcblxuICAgICAgaWYgKHNvbCkge1xuICAgICAgICBpZiAoc3RhdGUubmV4dE11bHRpbGluZSkge1xuICAgICAgICAgIHN0YXRlLmluTXVsdGlsaW5lID0gdHJ1ZTtcbiAgICAgICAgICBzdGF0ZS5uZXh0TXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUucG9zaXRpb24gPSBcImRlZlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlb2wgJiYgISBzdGF0ZS5uZXh0TXVsdGlsaW5lKSB7XG4gICAgICAgIHN0YXRlLmluTXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uID0gXCJkZWZcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvbCkge1xuICAgICAgICB3aGlsZShzdHJlYW0uZWF0U3BhY2UoKSkge31cbiAgICAgIH1cblxuICAgICAgdmFyIGNoID0gc3RyZWFtLm5leHQoKTtcblxuICAgICAgaWYgKHNvbCAmJiAoY2ggPT09IFwiI1wiIHx8IGNoID09PSBcIiFcIiB8fCBjaCA9PT0gXCI7XCIpKSB7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uID0gXCJjb21tZW50XCI7XG4gICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgfSBlbHNlIGlmIChzb2wgJiYgY2ggPT09IFwiW1wiKSB7XG4gICAgICAgIHN0YXRlLmFmdGVyU2VjdGlvbiA9IHRydWU7XG4gICAgICAgIHN0cmVhbS5za2lwVG8oXCJdXCIpOyBzdHJlYW0uZWF0KFwiXVwiKTtcbiAgICAgICAgcmV0dXJuIFwiaGVhZGVyXCI7XG4gICAgICB9IGVsc2UgaWYgKGNoID09PSBcIj1cIiB8fCBjaCA9PT0gXCI6XCIpIHtcbiAgICAgICAgc3RhdGUucG9zaXRpb24gPSBcInF1b3RlXCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmIChjaCA9PT0gXCJcXFxcXCIgJiYgc3RhdGUucG9zaXRpb24gPT09IFwicXVvdGVcIikge1xuICAgICAgICBpZiAoc3RyZWFtLmVvbCgpKSB7ICAvLyBlbmQgb2YgbGluZT9cbiAgICAgICAgICAvLyBNdWx0aWxpbmUgdmFsdWVcbiAgICAgICAgICBzdGF0ZS5uZXh0TXVsdGlsaW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGUucG9zaXRpb247XG4gICAgfSxcblxuICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb24gOiBcImRlZlwiLCAgICAgICAvLyBDdXJyZW50IHBvc2l0aW9uLCBcImRlZlwiLCBcInF1b3RlXCIgb3IgXCJjb21tZW50XCJcbiAgICAgICAgbmV4dE11bHRpbGluZSA6IGZhbHNlLCAgLy8gSXMgdGhlIG5leHQgbGluZSBtdWx0aWxpbmUgdmFsdWVcbiAgICAgICAgaW5NdWx0aWxpbmUgOiBmYWxzZSwgICAgLy8gSXMgdGhlIGN1cnJlbnQgbGluZSBhIG11bHRpbGluZSB2YWx1ZVxuICAgICAgICBhZnRlclNlY3Rpb24gOiBmYWxzZSAgICAvLyBEaWQgd2UganVzdCBvcGVuIGEgc2VjdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbn0pO1xuXG5Db2RlTWlycm9yLmRlZmluZU1JTUUoXCJ0ZXh0L3gtcHJvcGVydGllc1wiLCBcInByb3BlcnRpZXNcIik7XG5Db2RlTWlycm9yLmRlZmluZU1JTUUoXCJ0ZXh0L3gtaW5pXCIsIFwicHJvcGVydGllc1wiKTtcblxufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsInRva2VuIiwic3RyZWFtIiwic3RhdGUiLCJzb2wiLCJhZnRlclNlY3Rpb24iLCJlb2wiLCJuZXh0TXVsdGlsaW5lIiwiaW5NdWx0aWxpbmUiLCJwb3NpdGlvbiIsImVhdFNwYWNlIiwiY2giLCJuZXh0Iiwic2tpcFRvRW5kIiwic2tpcFRvIiwiZWF0Iiwic3RhcnRTdGF0ZSIsImRlZmluZU1JTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/properties/properties.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/properties/properties.js");
/******/ 	
/******/ })()
;