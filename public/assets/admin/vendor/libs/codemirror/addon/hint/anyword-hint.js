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

/***/ "./resources/assets/vendor/libs/codemirror/addon/hint/anyword-hint.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/hint/anyword-hint.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  var WORD = /[\\w$]+/,\n      RANGE = 500;\n  CodeMirror.registerHelper(\"hint\", \"anyword\", function (editor, options) {\n    var word = options && options.word || WORD;\n    var range = options && options.range || RANGE;\n    var cur = editor.getCursor(),\n        curLine = editor.getLine(cur.line);\n    var end = cur.ch,\n        start = end;\n\n    while (start && word.test(curLine.charAt(start - 1))) {\n      --start;\n    }\n\n    var curWord = start != end && curLine.slice(start, end);\n    var list = options && options.list || [],\n        seen = {};\n    var re = new RegExp(word.source, \"g\");\n\n    for (var dir = -1; dir <= 1; dir += 2) {\n      var line = cur.line,\n          endLine = Math.min(Math.max(line + dir * range, editor.firstLine()), editor.lastLine()) + dir;\n\n      for (; line != endLine; line += dir) {\n        var text = editor.getLine(line),\n            m;\n\n        while (m = re.exec(text)) {\n          if (line == cur.line && m[0] === curWord) continue;\n\n          if ((!curWord || m[0].lastIndexOf(curWord, 0) == 0) && !Object.prototype.hasOwnProperty.call(seen, m[0])) {\n            seen[m[0]] = true;\n            list.push(m[0]);\n          }\n        }\n      }\n    }\n\n    return {\n      list: list,\n      from: CodeMirror.Pos(cur.line, start),\n      to: CodeMirror.Pos(cur.line, end)\n    };\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vaGludC9hbnl3b3JkLWhpbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3RCOztFQUVBLElBQUlDLElBQUksR0FBRyxRQUFYO0VBQUEsSUFBcUJDLEtBQUssR0FBRyxHQUE3QjtFQUVBRixVQUFVLENBQUNHLGNBQVgsQ0FBMEIsTUFBMUIsRUFBa0MsU0FBbEMsRUFBNkMsVUFBU0MsTUFBVCxFQUFpQkMsT0FBakIsRUFBMEI7SUFDckUsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsSUFBbkIsSUFBMkJMLElBQXRDO0lBQ0EsSUFBSU0sS0FBSyxHQUFHRixPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsS0FBbkIsSUFBNEJMLEtBQXhDO0lBQ0EsSUFBSU0sR0FBRyxHQUFHSixNQUFNLENBQUNLLFNBQVAsRUFBVjtJQUFBLElBQThCQyxPQUFPLEdBQUdOLE1BQU0sQ0FBQ08sT0FBUCxDQUFlSCxHQUFHLENBQUNJLElBQW5CLENBQXhDO0lBQ0EsSUFBSUMsR0FBRyxHQUFHTCxHQUFHLENBQUNNLEVBQWQ7SUFBQSxJQUFrQkMsS0FBSyxHQUFHRixHQUExQjs7SUFDQSxPQUFPRSxLQUFLLElBQUlULElBQUksQ0FBQ1UsSUFBTCxDQUFVTixPQUFPLENBQUNPLE1BQVIsQ0FBZUYsS0FBSyxHQUFHLENBQXZCLENBQVYsQ0FBaEI7TUFBc0QsRUFBRUEsS0FBRjtJQUF0RDs7SUFDQSxJQUFJRyxPQUFPLEdBQUdILEtBQUssSUFBSUYsR0FBVCxJQUFnQkgsT0FBTyxDQUFDUyxLQUFSLENBQWNKLEtBQWQsRUFBcUJGLEdBQXJCLENBQTlCO0lBRUEsSUFBSU8sSUFBSSxHQUFHZixPQUFPLElBQUlBLE9BQU8sQ0FBQ2UsSUFBbkIsSUFBMkIsRUFBdEM7SUFBQSxJQUEwQ0MsSUFBSSxHQUFHLEVBQWpEO0lBQ0EsSUFBSUMsRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBV2pCLElBQUksQ0FBQ2tCLE1BQWhCLEVBQXdCLEdBQXhCLENBQVQ7O0lBQ0EsS0FBSyxJQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFoQixFQUFtQkEsR0FBRyxJQUFJLENBQTFCLEVBQTZCQSxHQUFHLElBQUksQ0FBcEMsRUFBdUM7TUFDckMsSUFBSWIsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQWY7TUFBQSxJQUFxQmMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNqQixJQUFJLEdBQUdhLEdBQUcsR0FBR2xCLEtBQXRCLEVBQTZCSCxNQUFNLENBQUMwQixTQUFQLEVBQTdCLENBQVQsRUFBMkQxQixNQUFNLENBQUMyQixRQUFQLEVBQTNELElBQWdGTixHQUEvRzs7TUFDQSxPQUFPYixJQUFJLElBQUljLE9BQWYsRUFBd0JkLElBQUksSUFBSWEsR0FBaEMsRUFBcUM7UUFDbkMsSUFBSU8sSUFBSSxHQUFHNUIsTUFBTSxDQUFDTyxPQUFQLENBQWVDLElBQWYsQ0FBWDtRQUFBLElBQWlDcUIsQ0FBakM7O1FBQ0EsT0FBT0EsQ0FBQyxHQUFHWCxFQUFFLENBQUNZLElBQUgsQ0FBUUYsSUFBUixDQUFYLEVBQTBCO1VBQ3hCLElBQUlwQixJQUFJLElBQUlKLEdBQUcsQ0FBQ0ksSUFBWixJQUFvQnFCLENBQUMsQ0FBQyxDQUFELENBQUQsS0FBU2YsT0FBakMsRUFBMEM7O1VBQzFDLElBQUksQ0FBQyxDQUFDQSxPQUFELElBQVllLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0UsV0FBTCxDQUFpQmpCLE9BQWpCLEVBQTBCLENBQTFCLEtBQWdDLENBQTdDLEtBQW1ELENBQUNrQixNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2xCLElBQXJDLEVBQTJDWSxDQUFDLENBQUMsQ0FBRCxDQUE1QyxDQUF4RCxFQUEwRztZQUN4R1osSUFBSSxDQUFDWSxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUosR0FBYSxJQUFiO1lBQ0FiLElBQUksQ0FBQ29CLElBQUwsQ0FBVVAsQ0FBQyxDQUFDLENBQUQsQ0FBWDtVQUNEO1FBQ0Y7TUFDRjtJQUNGOztJQUNELE9BQU87TUFBQ2IsSUFBSSxFQUFFQSxJQUFQO01BQWFxQixJQUFJLEVBQUV6QyxVQUFVLENBQUMwQyxHQUFYLENBQWVsQyxHQUFHLENBQUNJLElBQW5CLEVBQXlCRyxLQUF6QixDQUFuQjtNQUFvRDRCLEVBQUUsRUFBRTNDLFVBQVUsQ0FBQzBDLEdBQVgsQ0FBZWxDLEdBQUcsQ0FBQ0ksSUFBbkIsRUFBeUJDLEdBQXpCO0lBQXhELENBQVA7RUFDRCxDQXhCRDtBQXlCRCxDQXJDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9oaW50L2FueXdvcmQtaGludC5qcz9mOTQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBXT1JEID0gL1tcXHckXSsvLCBSQU5HRSA9IDUwMDtcblxuICBDb2RlTWlycm9yLnJlZ2lzdGVySGVscGVyKFwiaGludFwiLCBcImFueXdvcmRcIiwgZnVuY3Rpb24oZWRpdG9yLCBvcHRpb25zKSB7XG4gICAgdmFyIHdvcmQgPSBvcHRpb25zICYmIG9wdGlvbnMud29yZCB8fCBXT1JEO1xuICAgIHZhciByYW5nZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5yYW5nZSB8fCBSQU5HRTtcbiAgICB2YXIgY3VyID0gZWRpdG9yLmdldEN1cnNvcigpLCBjdXJMaW5lID0gZWRpdG9yLmdldExpbmUoY3VyLmxpbmUpO1xuICAgIHZhciBlbmQgPSBjdXIuY2gsIHN0YXJ0ID0gZW5kO1xuICAgIHdoaWxlIChzdGFydCAmJiB3b3JkLnRlc3QoY3VyTGluZS5jaGFyQXQoc3RhcnQgLSAxKSkpIC0tc3RhcnQ7XG4gICAgdmFyIGN1cldvcmQgPSBzdGFydCAhPSBlbmQgJiYgY3VyTGluZS5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIHZhciBsaXN0ID0gb3B0aW9ucyAmJiBvcHRpb25zLmxpc3QgfHwgW10sIHNlZW4gPSB7fTtcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHdvcmQuc291cmNlLCBcImdcIik7XG4gICAgZm9yICh2YXIgZGlyID0gLTE7IGRpciA8PSAxOyBkaXIgKz0gMikge1xuICAgICAgdmFyIGxpbmUgPSBjdXIubGluZSwgZW5kTGluZSA9IE1hdGgubWluKE1hdGgubWF4KGxpbmUgKyBkaXIgKiByYW5nZSwgZWRpdG9yLmZpcnN0TGluZSgpKSwgZWRpdG9yLmxhc3RMaW5lKCkpICsgZGlyO1xuICAgICAgZm9yICg7IGxpbmUgIT0gZW5kTGluZTsgbGluZSArPSBkaXIpIHtcbiAgICAgICAgdmFyIHRleHQgPSBlZGl0b3IuZ2V0TGluZShsaW5lKSwgbTtcbiAgICAgICAgd2hpbGUgKG0gPSByZS5leGVjKHRleHQpKSB7XG4gICAgICAgICAgaWYgKGxpbmUgPT0gY3VyLmxpbmUgJiYgbVswXSA9PT0gY3VyV29yZCkgY29udGludWU7XG4gICAgICAgICAgaWYgKCghY3VyV29yZCB8fCBtWzBdLmxhc3RJbmRleE9mKGN1cldvcmQsIDApID09IDApICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2VlbiwgbVswXSkpIHtcbiAgICAgICAgICAgIHNlZW5bbVswXV0gPSB0cnVlO1xuICAgICAgICAgICAgbGlzdC5wdXNoKG1bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2xpc3Q6IGxpc3QsIGZyb206IENvZGVNaXJyb3IuUG9zKGN1ci5saW5lLCBzdGFydCksIHRvOiBDb2RlTWlycm9yLlBvcyhjdXIubGluZSwgZW5kKX07XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiV09SRCIsIlJBTkdFIiwicmVnaXN0ZXJIZWxwZXIiLCJlZGl0b3IiLCJvcHRpb25zIiwid29yZCIsInJhbmdlIiwiY3VyIiwiZ2V0Q3Vyc29yIiwiY3VyTGluZSIsImdldExpbmUiLCJsaW5lIiwiZW5kIiwiY2giLCJzdGFydCIsInRlc3QiLCJjaGFyQXQiLCJjdXJXb3JkIiwic2xpY2UiLCJsaXN0Iiwic2VlbiIsInJlIiwiUmVnRXhwIiwic291cmNlIiwiZGlyIiwiZW5kTGluZSIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJzdExpbmUiLCJsYXN0TGluZSIsInRleHQiLCJtIiwiZXhlYyIsImxhc3RJbmRleE9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZyb20iLCJQb3MiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/hint/anyword-hint.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/hint/anyword-hint.js");
/******/ 	
/******/ })()
;