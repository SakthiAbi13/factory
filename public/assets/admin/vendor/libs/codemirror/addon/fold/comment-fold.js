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

/***/ "./resources/assets/vendor/libs/codemirror/addon/fold/comment-fold.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/fold/comment-fold.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.registerGlobalHelper(\"fold\", \"comment\", function (mode) {\n    return mode.blockCommentStart && mode.blockCommentEnd;\n  }, function (cm, start) {\n    var mode = cm.getModeAt(start),\n        startToken = mode.blockCommentStart,\n        endToken = mode.blockCommentEnd;\n    if (!startToken || !endToken) return;\n    var line = start.line,\n        lineText = cm.getLine(line);\n    var startCh;\n\n    for (var at = start.ch, pass = 0;;) {\n      var found = at <= 0 ? -1 : lineText.lastIndexOf(startToken, at - 1);\n\n      if (found == -1) {\n        if (pass == 1) return;\n        pass = 1;\n        at = lineText.length;\n        continue;\n      }\n\n      if (pass == 1 && found < start.ch) return;\n\n      if (/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1))) && (found == 0 || lineText.slice(found - endToken.length, found) == endToken || !/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found))))) {\n        startCh = found + startToken.length;\n        break;\n      }\n\n      at = found - 1;\n    }\n\n    var depth = 1,\n        lastLine = cm.lastLine(),\n        end,\n        endCh;\n\n    outer: for (var i = line; i <= lastLine; ++i) {\n      var text = cm.getLine(i),\n          pos = i == line ? startCh : 0;\n\n      for (;;) {\n        var nextOpen = text.indexOf(startToken, pos),\n            nextClose = text.indexOf(endToken, pos);\n        if (nextOpen < 0) nextOpen = text.length;\n        if (nextClose < 0) nextClose = text.length;\n        pos = Math.min(nextOpen, nextClose);\n        if (pos == text.length) break;\n        if (pos == nextOpen) ++depth;else if (! --depth) {\n          end = i;\n          endCh = pos;\n          break outer;\n        }\n        ++pos;\n      }\n    }\n\n    if (end == null || line == end && endCh == startCh) return;\n    return {\n      from: CodeMirror.Pos(line, startCh),\n      to: CodeMirror.Pos(end, endCh)\n    };\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9jb21tZW50LWZvbGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3hCOztFQUVBQSxVQUFVLENBQUNDLG9CQUFYLENBQWdDLE1BQWhDLEVBQXdDLFNBQXhDLEVBQW1ELFVBQVNDLElBQVQsRUFBZTtJQUNoRSxPQUFPQSxJQUFJLENBQUNDLGlCQUFMLElBQTBCRCxJQUFJLENBQUNFLGVBQXRDO0VBQ0QsQ0FGRCxFQUVHLFVBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQjtJQUNyQixJQUFJSixJQUFJLEdBQUdHLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhRCxLQUFiLENBQVg7SUFBQSxJQUFnQ0UsVUFBVSxHQUFHTixJQUFJLENBQUNDLGlCQUFsRDtJQUFBLElBQXFFTSxRQUFRLEdBQUdQLElBQUksQ0FBQ0UsZUFBckY7SUFDQSxJQUFJLENBQUNJLFVBQUQsSUFBZSxDQUFDQyxRQUFwQixFQUE4QjtJQUM5QixJQUFJQyxJQUFJLEdBQUdKLEtBQUssQ0FBQ0ksSUFBakI7SUFBQSxJQUF1QkMsUUFBUSxHQUFHTixFQUFFLENBQUNPLE9BQUgsQ0FBV0YsSUFBWCxDQUFsQztJQUVBLElBQUlHLE9BQUo7O0lBQ0EsS0FBSyxJQUFJQyxFQUFFLEdBQUdSLEtBQUss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QWVaLElBQWYsRUFBcUJHLE9BQXJCLENBQVA7TUFDQ3lCLEVBQUUsRUFBRXRDLFVBQVUsQ0FBQ3NCLEdBQVgsQ0FBZUksR0FBZixFQUFvQkMsS0FBcEI7SUFETCxDQUFQO0VBRUQsQ0EzQ0Q7QUE2Q0MsQ0F2REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9jb21tZW50LWZvbGQuanM/M2EzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbkNvZGVNaXJyb3IucmVnaXN0ZXJHbG9iYWxIZWxwZXIoXCJmb2xkXCIsIFwiY29tbWVudFwiLCBmdW5jdGlvbihtb2RlKSB7XG4gIHJldHVybiBtb2RlLmJsb2NrQ29tbWVudFN0YXJ0ICYmIG1vZGUuYmxvY2tDb21tZW50RW5kO1xufSwgZnVuY3Rpb24oY20sIHN0YXJ0KSB7XG4gIHZhciBtb2RlID0gY20uZ2V0TW9kZUF0KHN0YXJ0KSwgc3RhcnRUb2tlbiA9IG1vZGUuYmxvY2tDb21tZW50U3RhcnQsIGVuZFRva2VuID0gbW9kZS5ibG9ja0NvbW1lbnRFbmQ7XG4gIGlmICghc3RhcnRUb2tlbiB8fCAhZW5kVG9rZW4pIHJldHVybjtcbiAgdmFyIGxpbmUgPSBzdGFydC5saW5lLCBsaW5lVGV4dCA9IGNtLmdldExpbmUobGluZSk7XG5cbiAgdmFyIHN0YXJ0Q2g7XG4gIGZvciAodmFyIGF0ID0gc3RhcnQuY2gsIHBhc3MgPSAwOzspIHtcbiAgICB2YXIgZm91bmQgPSBhdCA8PSAwID8gLTEgOiBsaW5lVGV4dC5sYXN0SW5kZXhPZihzdGFydFRva2VuLCBhdCAtIDEpO1xuICAgIGlmIChmb3VuZCA9PSAtMSkge1xuICAgICAgaWYgKHBhc3MgPT0gMSkgcmV0dXJuO1xuICAgICAgcGFzcyA9IDE7XG4gICAgICBhdCA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAocGFzcyA9PSAxICYmIGZvdW5kIDwgc3RhcnQuY2gpIHJldHVybjtcbiAgICBpZiAoL2NvbW1lbnQvLnRlc3QoY20uZ2V0VG9rZW5UeXBlQXQoQ29kZU1pcnJvci5Qb3MobGluZSwgZm91bmQgKyAxKSkpICYmXG4gICAgICAgIChmb3VuZCA9PSAwIHx8IGxpbmVUZXh0LnNsaWNlKGZvdW5kIC0gZW5kVG9rZW4ubGVuZ3RoLCBmb3VuZCkgPT0gZW5kVG9rZW4gfHxcbiAgICAgICAgICEvY29tbWVudC8udGVzdChjbS5nZXRUb2tlblR5cGVBdChDb2RlTWlycm9yLlBvcyhsaW5lLCBmb3VuZCkpKSkpIHtcbiAgICAgIHN0YXJ0Q2ggPSBmb3VuZCArIHN0YXJ0VG9rZW4ubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ID0gZm91bmQgLSAxO1xuICB9XG5cbiAgdmFyIGRlcHRoID0gMSwgbGFzdExpbmUgPSBjbS5sYXN0TGluZSgpLCBlbmQsIGVuZENoO1xuICBvdXRlcjogZm9yICh2YXIgaSA9IGxpbmU7IGkgPD0gbGFzdExpbmU7ICsraSkge1xuICAgIHZhciB0ZXh0ID0gY20uZ2V0TGluZShpKSwgcG9zID0gaSA9PSBsaW5lID8gc3RhcnRDaCA6IDA7XG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIG5leHRPcGVuID0gdGV4dC5pbmRleE9mKHN0YXJ0VG9rZW4sIHBvcyksIG5leHRDbG9zZSA9IHRleHQuaW5kZXhPZihlbmRUb2tlbiwgcG9zKTtcbiAgICAgIGlmIChuZXh0T3BlbiA8IDApIG5leHRPcGVuID0gdGV4dC5sZW5ndGg7XG4gICAgICBpZiAobmV4dENsb3NlIDwgMCkgbmV4dENsb3NlID0gdGV4dC5sZW5ndGg7XG4gICAgICBwb3MgPSBNYXRoLm1pbihuZXh0T3BlbiwgbmV4dENsb3NlKTtcbiAgICAgIGlmIChwb3MgPT0gdGV4dC5sZW5ndGgpIGJyZWFrO1xuICAgICAgaWYgKHBvcyA9PSBuZXh0T3BlbikgKytkZXB0aDtcbiAgICAgIGVsc2UgaWYgKCEtLWRlcHRoKSB7IGVuZCA9IGk7IGVuZENoID0gcG9zOyBicmVhayBvdXRlcjsgfVxuICAgICAgKytwb3M7XG4gICAgfVxuICB9XG4gIGlmIChlbmQgPT0gbnVsbCB8fCBsaW5lID09IGVuZCAmJiBlbmRDaCA9PSBzdGFydENoKSByZXR1cm47XG4gIHJldHVybiB7ZnJvbTogQ29kZU1pcnJvci5Qb3MobGluZSwgc3RhcnRDaCksXG4gICAgICAgICAgdG86IENvZGVNaXJyb3IuUG9zKGVuZCwgZW5kQ2gpfTtcbn0pO1xuXG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJyZWdpc3Rlckdsb2JhbEhlbHBlciIsIm1vZGUiLCJibG9ja0NvbW1lbnRTdGFydCIsImJsb2NrQ29tbWVudEVuZCIsImNtIiwic3RhcnQiLCJnZXRNb2RlQXQiLCJzdGFydFRva2VuIiwiZW5kVG9rZW4iLCJsaW5lIiwibGluZVRleHQiLCJnZXRMaW5lIiwic3RhcnRDaCIsImF0IiwiY2giLCJwYXNzIiwiZm91bmQiLCJsYXN0SW5kZXhPZiIsImxlbmd0aCIsInRlc3QiLCJnZXRUb2tlblR5cGVBdCIsIlBvcyIsInNsaWNlIiwiZGVwdGgiLCJsYXN0TGluZSIsImVuZCIsImVuZENoIiwib3V0ZXIiLCJpIiwidGV4dCIsInBvcyIsIm5leHRPcGVuIiwiaW5kZXhPZiIsIm5leHRDbG9zZSIsIk1hdGgiLCJtaW4iLCJmcm9tIiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/fold/comment-fold.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/fold/comment-fold.js");
/******/ 	
/******/ })()
;