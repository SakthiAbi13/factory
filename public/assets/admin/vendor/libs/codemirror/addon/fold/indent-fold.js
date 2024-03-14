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

/***/ "./resources/assets/vendor/libs/codemirror/addon/fold/indent-fold.js":
/*!***************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/fold/indent-fold.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  function lineIndent(cm, lineNo) {\n    var text = cm.getLine(lineNo);\n    var spaceTo = text.search(/\\S/);\n    if (spaceTo == -1 || /\\bcomment\\b/.test(cm.getTokenTypeAt(CodeMirror.Pos(lineNo, spaceTo + 1)))) return -1;\n    return CodeMirror.countColumn(text, null, cm.getOption(\"tabSize\"));\n  }\n\n  CodeMirror.registerHelper(\"fold\", \"indent\", function (cm, start) {\n    var myIndent = lineIndent(cm, start.line);\n    if (myIndent < 0) return;\n    var lastLineInFold = null; // Go through lines until we find a line that definitely doesn't belong in\n    // the block we're folding, or to the end.\n\n    for (var i = start.line + 1, end = cm.lastLine(); i <= end; ++i) {\n      var indent = lineIndent(cm, i);\n\n      if (indent == -1) {} else if (indent > myIndent) {\n        // Lines with a greater indent are considered part of the block.\n        lastLineInFold = i;\n      } else {\n        // If this line has non-space, non-comment content, and is\n        // indented less or equal to the start line, it is the start of\n        // another block.\n        break;\n      }\n    }\n\n    if (lastLineInFold) return {\n      from: CodeMirror.Pos(start.line, cm.getLine(start.line).length),\n      to: CodeMirror.Pos(lastLineInFold, cm.getLine(lastLineInFold).length)\n    };\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9pbmRlbnQtZm9sZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDeEI7O0VBRUEsU0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0JDLE1BQXhCLEVBQWdDO0lBQzlCLElBQUlDLElBQUksR0FBR0YsRUFBRSxDQUFDRyxPQUFILENBQVdGLE1BQVgsQ0FBWDtJQUNBLElBQUlHLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxNQUFMLENBQVksSUFBWixDQUFkO0lBQ0EsSUFBSUQsT0FBTyxJQUFJLENBQUMsQ0FBWixJQUFpQixjQUFjRSxJQUFkLENBQW1CTixFQUFFLENBQUNPLGNBQUgsQ0FBa0JULFVBQVUsQ0FBQ1UsR0FBWCxDQUFlUCxNQUFmLEVBQXVCRyxPQUFPLEdBQUcsQ0FBakMsQ0FBbEIsQ0FBbkIsQ0FBckIsRUFDRSxPQUFPLENBQUMsQ0FBUjtJQUNGLE9BQU9OLFVBQVUsQ0FBQ1csV0FBWCxDQUF1QlAsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUNGLEVBQUUsQ0FBQ1UsU0FBSCxDQUFhLFNBQWIsQ0FBbkMsQ0FBUDtFQUNEOztFQUVEWixVQUFVLENBQUNhLGNBQVgsQ0FBMEIsTUFBMUIsRUFBa0MsUUFBbEMsRUFBNEMsVUFBU1gsRUFBVCxFQUFhWSxLQUFiLEVBQW9CO0lBQzlELElBQUlDLFFBQVEsR0FBR2QsVUFBVSxDQUFDQyxFQUFELEVBQUtZLEtBQUssQ0FBQ0UsSUFBWCxDQUF6QjtJQUNBLElBQUlELFFBQVEsR0FBRyxDQUFmLEVBQWtCO0lBQ2xCLElBQUlFLGNBQWMsR0FBRyxJQUFyQixDQUg4RCxDQUs5RDtJQUNBOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHSixLQUFLLENBQUNFLElBQU4sR0FBYSxDQUFyQixFQUF3QkcsR0FBRyxHQUFHakIsRUFBRSxDQUFDa0IsUUFBSCxFQUFuQyxFQUFrREYsQ0FBQyxJQUFJQyxHQUF2RCxFQUE0RCxFQUFFRCxDQUE5RCxFQUFpRTtNQUMvRCxJQUFJRyxNQUFNLEdBQUdwQixVQUFVLENBQUNDLEVBQUQsRUFBS2dCLENBQUwsQ0FBdkI7O01BQ0EsSUFBSUcsTUFBTSxJQUFJLENBQUMsQ0FBZixFQUFrQixDQUNqQixDQURELE1BQ08sSUFBSUEsTUFBTSxHQUFHTixRQUFiLEVBQXVCO1FBQzVCO1FBQ0FFLGNBQWMsR0FBR0MsQ0FBakI7TUFDRCxDQUhNLE1BR0E7UUFDTDtRQUNBO1FBQ0E7UUFDQTtNQUNEO0lBQ0Y7O0lBQ0QsSUFBSUQsY0FBSixFQUFvQixPQUFPO01BQ3pCSyxJQUFJLEVBQUV0QixVQUFVLENBQUNVLEdBQVgsQ0FBZUksS0FBSyxDQUFDRSxJQUFyQixFQUEyQmQsRUFBRSxDQUFDRyxPQUFILENBQVdTLEtBQUssQ0FBQ0UsSUFBakIsRUFBdUJPLE1BQWxELENBRG1CO01BRXpCQyxFQUFFLEVBQUV4QixVQUFVLENBQUNVLEdBQVgsQ0FBZU8sY0FBZixFQUErQmYsRUFBRSxDQUFDRyxPQUFILENBQVdZLGNBQVgsRUFBMkJNLE1BQTFEO0lBRnFCLENBQVA7RUFJckIsQ0F4QkQ7QUEwQkMsQ0E1Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZm9sZC9pbmRlbnQtZm9sZC5qcz82NGUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gbGluZUluZGVudChjbSwgbGluZU5vKSB7XG4gIHZhciB0ZXh0ID0gY20uZ2V0TGluZShsaW5lTm8pXG4gIHZhciBzcGFjZVRvID0gdGV4dC5zZWFyY2goL1xcUy8pXG4gIGlmIChzcGFjZVRvID09IC0xIHx8IC9cXGJjb21tZW50XFxiLy50ZXN0KGNtLmdldFRva2VuVHlwZUF0KENvZGVNaXJyb3IuUG9zKGxpbmVObywgc3BhY2VUbyArIDEpKSkpXG4gICAgcmV0dXJuIC0xXG4gIHJldHVybiBDb2RlTWlycm9yLmNvdW50Q29sdW1uKHRleHQsIG51bGwsIGNtLmdldE9wdGlvbihcInRhYlNpemVcIikpXG59XG5cbkNvZGVNaXJyb3IucmVnaXN0ZXJIZWxwZXIoXCJmb2xkXCIsIFwiaW5kZW50XCIsIGZ1bmN0aW9uKGNtLCBzdGFydCkge1xuICB2YXIgbXlJbmRlbnQgPSBsaW5lSW5kZW50KGNtLCBzdGFydC5saW5lKVxuICBpZiAobXlJbmRlbnQgPCAwKSByZXR1cm5cbiAgdmFyIGxhc3RMaW5lSW5Gb2xkID0gbnVsbFxuXG4gIC8vIEdvIHRocm91Z2ggbGluZXMgdW50aWwgd2UgZmluZCBhIGxpbmUgdGhhdCBkZWZpbml0ZWx5IGRvZXNuJ3QgYmVsb25nIGluXG4gIC8vIHRoZSBibG9jayB3ZSdyZSBmb2xkaW5nLCBvciB0byB0aGUgZW5kLlxuICBmb3IgKHZhciBpID0gc3RhcnQubGluZSArIDEsIGVuZCA9IGNtLmxhc3RMaW5lKCk7IGkgPD0gZW5kOyArK2kpIHtcbiAgICB2YXIgaW5kZW50ID0gbGluZUluZGVudChjbSwgaSlcbiAgICBpZiAoaW5kZW50ID09IC0xKSB7XG4gICAgfSBlbHNlIGlmIChpbmRlbnQgPiBteUluZGVudCkge1xuICAgICAgLy8gTGluZXMgd2l0aCBhIGdyZWF0ZXIgaW5kZW50IGFyZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIGJsb2NrLlxuICAgICAgbGFzdExpbmVJbkZvbGQgPSBpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGlzIGxpbmUgaGFzIG5vbi1zcGFjZSwgbm9uLWNvbW1lbnQgY29udGVudCwgYW5kIGlzXG4gICAgICAvLyBpbmRlbnRlZCBsZXNzIG9yIGVxdWFsIHRvIHRoZSBzdGFydCBsaW5lLCBpdCBpcyB0aGUgc3RhcnQgb2ZcbiAgICAgIC8vIGFub3RoZXIgYmxvY2suXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGxhc3RMaW5lSW5Gb2xkKSByZXR1cm4ge1xuICAgIGZyb206IENvZGVNaXJyb3IuUG9zKHN0YXJ0LmxpbmUsIGNtLmdldExpbmUoc3RhcnQubGluZSkubGVuZ3RoKSxcbiAgICB0bzogQ29kZU1pcnJvci5Qb3MobGFzdExpbmVJbkZvbGQsIGNtLmdldExpbmUobGFzdExpbmVJbkZvbGQpLmxlbmd0aClcbiAgfTtcbn0pO1xuXG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJsaW5lSW5kZW50IiwiY20iLCJsaW5lTm8iLCJ0ZXh0IiwiZ2V0TGluZSIsInNwYWNlVG8iLCJzZWFyY2giLCJ0ZXN0IiwiZ2V0VG9rZW5UeXBlQXQiLCJQb3MiLCJjb3VudENvbHVtbiIsImdldE9wdGlvbiIsInJlZ2lzdGVySGVscGVyIiwic3RhcnQiLCJteUluZGVudCIsImxpbmUiLCJsYXN0TGluZUluRm9sZCIsImkiLCJlbmQiLCJsYXN0TGluZSIsImluZGVudCIsImZyb20iLCJsZW5ndGgiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/fold/indent-fold.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/fold/indent-fold.js");
/******/ 	
/******/ })()
;