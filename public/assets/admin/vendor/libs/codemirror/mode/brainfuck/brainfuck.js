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

/***/ "./resources/assets/vendor/libs/codemirror/mode/brainfuck/brainfuck.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/brainfuck/brainfuck.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// Brainfuck mode created by Michael Kaminsky https://github.com/mkaminsky11\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  var reserve = \"><+-.,[]\".split(\"\");\n  /*\n  comments can be either:\n  placed behind lines\n         +++    this is a comment\n   where reserved characters cannot be used\n  or in a loop\n  [\n    this is ok to use [ ] and stuff\n  ]\n  or preceded by #\n  */\n\n  CodeMirror.defineMode(\"brainfuck\", function () {\n    return {\n      startState: function startState() {\n        return {\n          commentLine: false,\n          left: 0,\n          right: 0,\n          commentLoop: false\n        };\n      },\n      token: function token(stream, state) {\n        if (stream.eatSpace()) return null;\n\n        if (stream.sol()) {\n          state.commentLine = false;\n        }\n\n        var ch = stream.next().toString();\n\n        if (reserve.indexOf(ch) !== -1) {\n          if (state.commentLine === true) {\n            if (stream.eol()) {\n              state.commentLine = false;\n            }\n\n            return \"comment\";\n          }\n\n          if (ch === \"]\" || ch === \"[\") {\n            if (ch === \"[\") {\n              state.left++;\n            } else {\n              state.right++;\n            }\n\n            return \"bracket\";\n          } else if (ch === \"+\" || ch === \"-\") {\n            return \"keyword\";\n          } else if (ch === \"<\" || ch === \">\") {\n            return \"atom\";\n          } else if (ch === \".\" || ch === \",\") {\n            return \"def\";\n          }\n        } else {\n          state.commentLine = true;\n\n          if (stream.eol()) {\n            state.commentLine = false;\n          }\n\n          return \"comment\";\n        }\n\n        if (stream.eol()) {\n          state.commentLine = false;\n        }\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-brainfuck\", \"brainfuck\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9icmFpbmZ1Y2svYnJhaW5mdWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUNFRixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFDSEMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUdIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEI7O0VBQ0EsSUFBSUMsT0FBTyxHQUFHLFdBQVdDLEtBQVgsQ0FBaUIsRUFBakIsQ0FBZDtFQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBR0VGLFVBQVUsQ0FBQ0csVUFBWCxDQUFzQixXQUF0QixFQUFtQyxZQUFXO0lBQzVDLE9BQU87TUFDTEMsVUFBVSxFQUFFLHNCQUFXO1FBQ3JCLE9BQU87VUFDTEMsV0FBVyxFQUFFLEtBRFI7VUFFTEMsSUFBSSxFQUFFLENBRkQ7VUFHTEMsS0FBSyxFQUFFLENBSEY7VUFJTEMsV0FBVyxFQUFFO1FBSlIsQ0FBUDtNQU1ELENBUkk7TUFTTEMsS0FBSyxFQUFFLGVBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCO1FBQzdCLElBQUlELE1BQU0sQ0FBQ0UsUUFBUCxFQUFKLEVBQXVCLE9BQU8sSUFBUDs7UUFDdkIsSUFBR0YsTUFBTSxDQUFDRyxHQUFQLEVBQUgsRUFBZ0I7VUFDZEYsS0FBSyxDQUFDTixXQUFOLEdBQW9CLEtBQXBCO1FBQ0Q7O1FBQ0QsSUFBSVMsRUFBRSxHQUFHSixNQUFNLENBQUNLLElBQVAsR0FBY0MsUUFBZCxFQUFUOztRQUNBLElBQUdmLE9BQU8sQ0FBQ2dCLE9BQVIsQ0FBZ0JILEVBQWhCLE1BQXdCLENBQUMsQ0FBNUIsRUFBOEI7VUFDNUIsSUFBR0gsS0FBSyxDQUFDTixXQUFOLEtBQXNCLElBQXpCLEVBQThCO1lBQzVCLElBQUdLLE1BQU0sQ0FBQ1EsR0FBUCxFQUFILEVBQWdCO2NBQ2RQLEtBQUssQ0FBQ04sV0FBTixHQUFvQixLQUFwQjtZQUNEOztZQUNELE9BQU8sU0FBUDtVQUNEOztVQUNELElBQUdTLEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxHQUF4QixFQUE0QjtZQUMxQixJQUFHQSxFQUFFLEtBQUssR0FBVixFQUFjO2NBQ1pILEtBQUssQ0FBQ0wsSUFBTjtZQUNELENBRkQsTUFHSTtjQUNGSyxLQUFLLENBQUNKLEtBQU47WUFDRDs7WUFDRCxPQUFPLFNBQVA7VUFDRCxDQVJELE1BU0ssSUFBR08sRUFBRSxLQUFLLEdBQVAsSUFBY0EsRUFBRSxLQUFLLEdBQXhCLEVBQTRCO1lBQy9CLE9BQU8sU0FBUDtVQUNELENBRkksTUFHQSxJQUFHQSxFQUFFLEtBQUssR0FBUCxJQUFjQSxFQUFFLEtBQUssR0FBeEIsRUFBNEI7WUFDL0IsT0FBTyxNQUFQO1VBQ0QsQ0FGSSxNQUdBLElBQUdBLEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxHQUF4QixFQUE0QjtZQUMvQixPQUFPLEtBQVA7VUFDRDtRQUNGLENBekJELE1BMEJJO1VBQ0ZILEtBQUssQ0FBQ04sV0FBTixHQUFvQixJQUFwQjs7VUFDQSxJQUFHSyxNQUFNLENBQUNRLEdBQVAsRUFBSCxFQUFnQjtZQUNkUCxLQUFLLENBQUNOLFdBQU4sR0FBb0IsS0FBcEI7VUFDRDs7VUFDRCxPQUFPLFNBQVA7UUFDRDs7UUFDRCxJQUFHSyxNQUFNLENBQUNRLEdBQVAsRUFBSCxFQUFnQjtVQUNkUCxLQUFLLENBQUNOLFdBQU4sR0FBb0IsS0FBcEI7UUFDRDtNQUNGO0lBbkRJLENBQVA7RUFxREQsQ0F0REQ7RUF1REZMLFVBQVUsQ0FBQ21CLFVBQVgsQ0FBc0Isa0JBQXRCLEVBQXlDLFdBQXpDO0FBQ0MsQ0EvRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9icmFpbmZ1Y2svYnJhaW5mdWNrLmpzPzIyOTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLy8gQnJhaW5mdWNrIG1vZGUgY3JlYXRlZCBieSBNaWNoYWVsIEthbWluc2t5IGh0dHBzOi8vZ2l0aHViLmNvbS9ta2FtaW5za3kxMVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIilcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKVxuICBlbHNlXG4gICAgbW9kKENvZGVNaXJyb3IpXG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiXG4gIHZhciByZXNlcnZlID0gXCI+PCstLixbXVwiLnNwbGl0KFwiXCIpO1xuICAvKlxuICBjb21tZW50cyBjYW4gYmUgZWl0aGVyOlxuICBwbGFjZWQgYmVoaW5kIGxpbmVzXG5cbiAgICAgICAgKysrICAgIHRoaXMgaXMgYSBjb21tZW50XG5cbiAgd2hlcmUgcmVzZXJ2ZWQgY2hhcmFjdGVycyBjYW5ub3QgYmUgdXNlZFxuICBvciBpbiBhIGxvb3BcbiAgW1xuICAgIHRoaXMgaXMgb2sgdG8gdXNlIFsgXSBhbmQgc3R1ZmZcbiAgXVxuICBvciBwcmVjZWRlZCBieSAjXG4gICovXG4gIENvZGVNaXJyb3IuZGVmaW5lTW9kZShcImJyYWluZnVja1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29tbWVudExpbmU6IGZhbHNlLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgY29tbWVudExvb3A6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHJldHVybiBudWxsXG4gICAgICAgIGlmKHN0cmVhbS5zb2woKSl7XG4gICAgICAgICAgc3RhdGUuY29tbWVudExpbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2ggPSBzdHJlYW0ubmV4dCgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKHJlc2VydmUuaW5kZXhPZihjaCkgIT09IC0xKXtcbiAgICAgICAgICBpZihzdGF0ZS5jb21tZW50TGluZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBpZihzdHJlYW0uZW9sKCkpe1xuICAgICAgICAgICAgICBzdGF0ZS5jb21tZW50TGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjaCA9PT0gXCJdXCIgfHwgY2ggPT09IFwiW1wiKXtcbiAgICAgICAgICAgIGlmKGNoID09PSBcIltcIil7XG4gICAgICAgICAgICAgIHN0YXRlLmxlZnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHN0YXRlLnJpZ2h0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJicmFja2V0XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoY2ggPT09IFwiK1wiIHx8IGNoID09PSBcIi1cIil7XG4gICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoY2ggPT09IFwiPFwiIHx8IGNoID09PSBcIj5cIil7XG4gICAgICAgICAgICByZXR1cm4gXCJhdG9tXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoY2ggPT09IFwiLlwiIHx8IGNoID09PSBcIixcIil7XG4gICAgICAgICAgICByZXR1cm4gXCJkZWZcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBzdGF0ZS5jb21tZW50TGluZSA9IHRydWU7XG4gICAgICAgICAgaWYoc3RyZWFtLmVvbCgpKXtcbiAgICAgICAgICAgIHN0YXRlLmNvbW1lbnRMaW5lID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZihzdHJlYW0uZW9sKCkpe1xuICAgICAgICAgIHN0YXRlLmNvbW1lbnRMaW5lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1icmFpbmZ1Y2tcIixcImJyYWluZnVja1wiKVxufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwicmVzZXJ2ZSIsInNwbGl0IiwiZGVmaW5lTW9kZSIsInN0YXJ0U3RhdGUiLCJjb21tZW50TGluZSIsImxlZnQiLCJyaWdodCIsImNvbW1lbnRMb29wIiwidG9rZW4iLCJzdHJlYW0iLCJzdGF0ZSIsImVhdFNwYWNlIiwic29sIiwiY2giLCJuZXh0IiwidG9TdHJpbmciLCJpbmRleE9mIiwiZW9sIiwiZGVmaW5lTUlNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/brainfuck/brainfuck.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/brainfuck/brainfuck.js");
/******/ 	
/******/ })()
;