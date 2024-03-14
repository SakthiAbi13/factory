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

/***/ "./resources/assets/vendor/libs/codemirror/addon/fold/markdown-fold.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/fold/markdown-fold.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.registerHelper(\"fold\", \"markdown\", function (cm, start) {\n    var maxDepth = 100;\n\n    function isHeader(lineNo) {\n      var tokentype = cm.getTokenTypeAt(CodeMirror.Pos(lineNo, 0));\n      return tokentype && /\\bheader\\b/.test(tokentype);\n    }\n\n    function headerLevel(lineNo, line, nextLine) {\n      var match = line && line.match(/^#+/);\n      if (match && isHeader(lineNo)) return match[0].length;\n      match = nextLine && nextLine.match(/^[=\\-]+\\s*$/);\n      if (match && isHeader(lineNo + 1)) return nextLine[0] == \"=\" ? 1 : 2;\n      return maxDepth;\n    }\n\n    var firstLine = cm.getLine(start.line),\n        nextLine = cm.getLine(start.line + 1);\n    var level = headerLevel(start.line, firstLine, nextLine);\n    if (level === maxDepth) return undefined;\n    var lastLineNo = cm.lastLine();\n    var end = start.line,\n        nextNextLine = cm.getLine(end + 2);\n\n    while (end < lastLineNo) {\n      if (headerLevel(end + 1, nextLine, nextNextLine) <= level) break;\n      ++end;\n      nextLine = nextNextLine;\n      nextNextLine = cm.getLine(end + 2);\n    }\n\n    return {\n      from: CodeMirror.Pos(start.line, firstLine.length),\n      to: CodeMirror.Pos(end, cm.getLine(end).length)\n    };\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9tYXJrZG93bi1mb2xkLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN4Qjs7RUFFQUEsVUFBVSxDQUFDQyxjQUFYLENBQTBCLE1BQTFCLEVBQWtDLFVBQWxDLEVBQThDLFVBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQjtJQUNoRSxJQUFJQyxRQUFRLEdBQUcsR0FBZjs7SUFFQSxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtNQUN4QixJQUFJQyxTQUFTLEdBQUdMLEVBQUUsQ0FBQ00sY0FBSCxDQUFrQlIsVUFBVSxDQUFDUyxHQUFYLENBQWVILE1BQWYsRUFBdUIsQ0FBdkIsQ0FBbEIsQ0FBaEI7TUFDQSxPQUFPQyxTQUFTLElBQUksYUFBYUcsSUFBYixDQUFrQkgsU0FBbEIsQ0FBcEI7SUFDRDs7SUFFRCxTQUFTSSxXQUFULENBQXFCTCxNQUFyQixFQUE2Qk0sSUFBN0IsRUFBbUNDLFFBQW5DLEVBQTZDO01BQzNDLElBQUlDLEtBQUssR0FBR0YsSUFBSSxJQUFJQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxLQUFYLENBQXBCO01BQ0EsSUFBSUEsS0FBSyxJQUFJVCxRQUFRLENBQUNDLE1BQUQsQ0FBckIsRUFBK0IsT0FBT1EsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxNQUFoQjtNQUMvQkQsS0FBSyxHQUFHRCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLGFBQWYsQ0FBcEI7TUFDQSxJQUFJQSxLQUFLLElBQUlULFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQVYsQ0FBckIsRUFBbUMsT0FBT08sUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlLEdBQWYsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBaEM7TUFDbkMsT0FBT1QsUUFBUDtJQUNEOztJQUVELElBQUlZLFNBQVMsR0FBR2QsRUFBRSxDQUFDZSxPQUFILENBQVdkLEtBQUssQ0FBQ1MsSUFBakIsQ0FBaEI7SUFBQSxJQUF3Q0MsUUFBUSxHQUFHWCxFQUFFLENBQUNlLE9BQUgsQ0FBV2QsS0FBSyxDQUFDUyxJQUFOLEdBQWEsQ0FBeEIsQ0FBbkQ7SUFDQSxJQUFJTSxLQUFLLEdBQUdQLFdBQVcsQ0FBQ1IsS0FBSyxDQUFDUyxJQUFQLEVBQWFJLFNBQWIsRUFBd0JILFFBQXhCLENBQXZCO0lBQ0EsSUFBSUssS0FBSyxLQUFLZCxRQUFkLEVBQXdCLE9BQU9lLFNBQVA7SUFFeEIsSUFBSUMsVUFBVSxHQUFHbEIsRUFBRSxDQUFDbUIsUUFBSCxFQUFqQjtJQUNBLElBQUlDLEdBQUcsR0FBR25CLEtBQUssQ0FBQ1MsSUFBaEI7SUFBQSxJQUFzQlcsWUFBWSxHQUFHckIsRUFBRSxDQUFDZSxPQUFILENBQVdLLEdBQUcsR0FBRyxDQUFqQixDQUFyQzs7SUFDQSxPQUFPQSxHQUFHLEdBQUdGLFVBQWIsRUFBeUI7TUFDdkIsSUFBSVQsV0FBVyxDQUFDVyxHQUFHLEdBQUcsQ0FBUCxFQUFVVCxRQUFWLEVBQW9CVSxZQUFwQixDQUFYLElBQWdETCxLQUFwRCxFQUEyRDtNQUMzRCxFQUFFSSxHQUFGO01BQ0FULFFBQVEsR0FBR1UsWUFBWDtNQUNBQSxZQUFZLEdBQUdyQixFQUFFLENBQUNlLE9BQUgsQ0FBV0ssR0FBRyxHQUFHLENBQWpCLENBQWY7SUFDRDs7SUFFRCxPQUFPO01BQ0xFLElBQUksRUFBRXhCLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlTixLQUFLLENBQUNTLElBQXJCLEVBQTJCSSxTQUFTLENBQUNELE1BQXJDLENBREQ7TUFFTFUsRUFBRSxFQUFFekIsVUFBVSxDQUFDUyxHQUFYLENBQWVhLEdBQWYsRUFBb0JwQixFQUFFLENBQUNlLE9BQUgsQ0FBV0ssR0FBWCxFQUFnQlAsTUFBcEM7SUFGQyxDQUFQO0VBSUQsQ0FqQ0Q7QUFtQ0MsQ0E3Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9tYXJrZG93bi1mb2xkLmpzP2E4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLnJlZ2lzdGVySGVscGVyKFwiZm9sZFwiLCBcIm1hcmtkb3duXCIsIGZ1bmN0aW9uKGNtLCBzdGFydCkge1xuICB2YXIgbWF4RGVwdGggPSAxMDA7XG5cbiAgZnVuY3Rpb24gaXNIZWFkZXIobGluZU5vKSB7XG4gICAgdmFyIHRva2VudHlwZSA9IGNtLmdldFRva2VuVHlwZUF0KENvZGVNaXJyb3IuUG9zKGxpbmVObywgMCkpO1xuICAgIHJldHVybiB0b2tlbnR5cGUgJiYgL1xcYmhlYWRlclxcYi8udGVzdCh0b2tlbnR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGVyTGV2ZWwobGluZU5vLCBsaW5lLCBuZXh0TGluZSkge1xuICAgIHZhciBtYXRjaCA9IGxpbmUgJiYgbGluZS5tYXRjaCgvXiMrLyk7XG4gICAgaWYgKG1hdGNoICYmIGlzSGVhZGVyKGxpbmVObykpIHJldHVybiBtYXRjaFswXS5sZW5ndGg7XG4gICAgbWF0Y2ggPSBuZXh0TGluZSAmJiBuZXh0TGluZS5tYXRjaCgvXls9XFwtXStcXHMqJC8pO1xuICAgIGlmIChtYXRjaCAmJiBpc0hlYWRlcihsaW5lTm8gKyAxKSkgcmV0dXJuIG5leHRMaW5lWzBdID09IFwiPVwiID8gMSA6IDI7XG4gICAgcmV0dXJuIG1heERlcHRoO1xuICB9XG5cbiAgdmFyIGZpcnN0TGluZSA9IGNtLmdldExpbmUoc3RhcnQubGluZSksIG5leHRMaW5lID0gY20uZ2V0TGluZShzdGFydC5saW5lICsgMSk7XG4gIHZhciBsZXZlbCA9IGhlYWRlckxldmVsKHN0YXJ0LmxpbmUsIGZpcnN0TGluZSwgbmV4dExpbmUpO1xuICBpZiAobGV2ZWwgPT09IG1heERlcHRoKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHZhciBsYXN0TGluZU5vID0gY20ubGFzdExpbmUoKTtcbiAgdmFyIGVuZCA9IHN0YXJ0LmxpbmUsIG5leHROZXh0TGluZSA9IGNtLmdldExpbmUoZW5kICsgMik7XG4gIHdoaWxlIChlbmQgPCBsYXN0TGluZU5vKSB7XG4gICAgaWYgKGhlYWRlckxldmVsKGVuZCArIDEsIG5leHRMaW5lLCBuZXh0TmV4dExpbmUpIDw9IGxldmVsKSBicmVhaztcbiAgICArK2VuZDtcbiAgICBuZXh0TGluZSA9IG5leHROZXh0TGluZTtcbiAgICBuZXh0TmV4dExpbmUgPSBjbS5nZXRMaW5lKGVuZCArIDIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBDb2RlTWlycm9yLlBvcyhzdGFydC5saW5lLCBmaXJzdExpbmUubGVuZ3RoKSxcbiAgICB0bzogQ29kZU1pcnJvci5Qb3MoZW5kLCBjbS5nZXRMaW5lKGVuZCkubGVuZ3RoKVxuICB9O1xufSk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsInJlZ2lzdGVySGVscGVyIiwiY20iLCJzdGFydCIsIm1heERlcHRoIiwiaXNIZWFkZXIiLCJsaW5lTm8iLCJ0b2tlbnR5cGUiLCJnZXRUb2tlblR5cGVBdCIsIlBvcyIsInRlc3QiLCJoZWFkZXJMZXZlbCIsImxpbmUiLCJuZXh0TGluZSIsIm1hdGNoIiwibGVuZ3RoIiwiZmlyc3RMaW5lIiwiZ2V0TGluZSIsImxldmVsIiwidW5kZWZpbmVkIiwibGFzdExpbmVObyIsImxhc3RMaW5lIiwiZW5kIiwibmV4dE5leHRMaW5lIiwiZnJvbSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/fold/markdown-fold.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/fold/markdown-fold.js");
/******/ 	
/******/ })()
;