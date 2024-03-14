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

/***/ "./resources/assets/vendor/libs/codemirror/mode/protobuf/protobuf.js":
/*!***************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/protobuf/protobuf.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  function wordRegexp(words) {\n    return new RegExp(\"^((\" + words.join(\")|(\") + \"))\\\\b\", \"i\");\n  }\n\n  ;\n  var keywordArray = [\"package\", \"message\", \"import\", \"syntax\", \"required\", \"optional\", \"repeated\", \"reserved\", \"default\", \"extensions\", \"packed\", \"bool\", \"bytes\", \"double\", \"enum\", \"float\", \"string\", \"int32\", \"int64\", \"uint32\", \"uint64\", \"sint32\", \"sint64\", \"fixed32\", \"fixed64\", \"sfixed32\", \"sfixed64\", \"option\", \"service\", \"rpc\", \"returns\"];\n  var keywords = wordRegexp(keywordArray);\n  CodeMirror.registerHelper(\"hintWords\", \"protobuf\", keywordArray);\n  var identifiers = new RegExp(\"^[_A-Za-z\\xA1-\\uFFFF][_A-Za-z0-9\\xA1-\\uFFFF]*\");\n\n  function tokenBase(stream) {\n    // whitespaces\n    if (stream.eatSpace()) return null; // Handle one line Comments\n\n    if (stream.match(\"//\")) {\n      stream.skipToEnd();\n      return \"comment\";\n    } // Handle Number Literals\n\n\n    if (stream.match(/^[0-9\\.+-]/, false)) {\n      if (stream.match(/^[+-]?0x[0-9a-fA-F]+/)) return \"number\";\n      if (stream.match(/^[+-]?\\d*\\.\\d+([EeDd][+-]?\\d+)?/)) return \"number\";\n      if (stream.match(/^[+-]?\\d+([EeDd][+-]?\\d+)?/)) return \"number\";\n    } // Handle Strings\n\n\n    if (stream.match(/^\"([^\"]|(\"\"))*\"/)) {\n      return \"string\";\n    }\n\n    if (stream.match(/^'([^']|(''))*'/)) {\n      return \"string\";\n    } // Handle words\n\n\n    if (stream.match(keywords)) {\n      return \"keyword\";\n    }\n\n    if (stream.match(identifiers)) {\n      return \"variable\";\n    }\n\n    ; // Handle non-detected items\n\n    stream.next();\n    return null;\n  }\n\n  ;\n  CodeMirror.defineMode(\"protobuf\", function () {\n    return {\n      token: tokenBase,\n      fold: \"brace\"\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-protobuf\", \"protobuf\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9wcm90b2J1Zi9wcm90b2J1Zi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEI7O0VBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7SUFDekIsT0FBTyxJQUFJQyxNQUFKLENBQVcsUUFBUUQsS0FBSyxDQUFDRSxJQUFOLENBQVcsS0FBWCxDQUFSLEdBQTRCLE9BQXZDLEVBQWdELEdBQWhELENBQVA7RUFDRDs7RUFBQTtFQUVELElBQUlDLFlBQVksR0FBRyxDQUNqQixTQURpQixFQUNOLFNBRE0sRUFDSyxRQURMLEVBQ2UsUUFEZixFQUVqQixVQUZpQixFQUVMLFVBRkssRUFFTyxVQUZQLEVBRW1CLFVBRm5CLEVBRStCLFNBRi9CLEVBRTBDLFlBRjFDLEVBRXdELFFBRnhELEVBR2pCLE1BSGlCLEVBR1QsT0FIUyxFQUdBLFFBSEEsRUFHVSxNQUhWLEVBR2tCLE9BSGxCLEVBRzJCLFFBSDNCLEVBSWpCLE9BSmlCLEVBSVIsT0FKUSxFQUlDLFFBSkQsRUFJVyxRQUpYLEVBSXFCLFFBSnJCLEVBSStCLFFBSi9CLEVBSXlDLFNBSnpDLEVBSW9ELFNBSnBELEVBSStELFVBSi9ELEVBSTJFLFVBSjNFLEVBS2pCLFFBTGlCLEVBS1AsU0FMTyxFQUtJLEtBTEosRUFLVyxTQUxYLENBQW5CO0VBT0EsSUFBSUMsUUFBUSxHQUFHTCxVQUFVLENBQUNJLFlBQUQsQ0FBekI7RUFFQUwsVUFBVSxDQUFDTyxjQUFYLENBQTBCLFdBQTFCLEVBQXVDLFVBQXZDLEVBQW1ERixZQUFuRDtFQUVBLElBQUlHLFdBQVcsR0FBRyxJQUFJTCxNQUFKLENBQVcsK0NBQVgsQ0FBbEI7O0VBRUEsU0FBU00sU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7SUFDekI7SUFDQSxJQUFJQSxNQUFNLENBQUNDLFFBQVAsRUFBSixFQUF1QixPQUFPLElBQVAsQ0FGRSxDQUl6Qjs7SUFDQSxJQUFJRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxJQUFiLENBQUosRUFBd0I7TUFDdEJGLE1BQU0sQ0FBQ0csU0FBUDtNQUNBLE9BQU8sU0FBUDtJQUNELENBUndCLENBVXpCOzs7SUFDQSxJQUFJSCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxZQUFiLEVBQTJCLEtBQTNCLENBQUosRUFBdUM7TUFDckMsSUFBSUYsTUFBTSxDQUFDRSxLQUFQLENBQWEsc0JBQWIsQ0FBSixFQUNFLE9BQU8sUUFBUDtNQUNGLElBQUlGLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLGlDQUFiLENBQUosRUFDRSxPQUFPLFFBQVA7TUFDRixJQUFJRixNQUFNLENBQUNFLEtBQVAsQ0FBYSw0QkFBYixDQUFKLEVBQ0UsT0FBTyxRQUFQO0lBQ0gsQ0FsQndCLENBb0J6Qjs7O0lBQ0EsSUFBSUYsTUFBTSxDQUFDRSxLQUFQLENBQWEsaUJBQWIsQ0FBSixFQUFxQztNQUFFLE9BQU8sUUFBUDtJQUFrQjs7SUFDekQsSUFBSUYsTUFBTSxDQUFDRSxLQUFQLENBQWEsaUJBQWIsQ0FBSixFQUFxQztNQUFFLE9BQU8sUUFBUDtJQUFrQixDQXRCaEMsQ0F3QnpCOzs7SUFDQSxJQUFJRixNQUFNLENBQUNFLEtBQVAsQ0FBYU4sUUFBYixDQUFKLEVBQTRCO01BQUUsT0FBTyxTQUFQO0lBQW1COztJQUNqRCxJQUFJSSxNQUFNLENBQUNFLEtBQVAsQ0FBYUosV0FBYixDQUFKLEVBQStCO01BQUUsT0FBTyxVQUFQO0lBQW9COztJQUFDLENBMUI3QixDQTRCekI7O0lBQ0FFLE1BQU0sQ0FBQ0ksSUFBUDtJQUNBLE9BQU8sSUFBUDtFQUNEOztFQUFBO0VBRURkLFVBQVUsQ0FBQ2UsVUFBWCxDQUFzQixVQUF0QixFQUFrQyxZQUFXO0lBQzNDLE9BQU87TUFDTEMsS0FBSyxFQUFFUCxTQURGO01BRUxRLElBQUksRUFBRTtJQUZELENBQVA7RUFJRCxDQUxEO0VBT0FqQixVQUFVLENBQUNrQixVQUFYLENBQXNCLGlCQUF0QixFQUF5QyxVQUF6QztBQUNELENBcEVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9jb2RlbWlycm9yL21vZGUvcHJvdG9idWYvcHJvdG9idWYuanM/MjJkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiB3b3JkUmVnZXhwKHdvcmRzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKChcIiArIHdvcmRzLmpvaW4oXCIpfChcIikgKyBcIikpXFxcXGJcIiwgXCJpXCIpO1xuICB9O1xuXG4gIHZhciBrZXl3b3JkQXJyYXkgPSBbXG4gICAgXCJwYWNrYWdlXCIsIFwibWVzc2FnZVwiLCBcImltcG9ydFwiLCBcInN5bnRheFwiLFxuICAgIFwicmVxdWlyZWRcIiwgXCJvcHRpb25hbFwiLCBcInJlcGVhdGVkXCIsIFwicmVzZXJ2ZWRcIiwgXCJkZWZhdWx0XCIsIFwiZXh0ZW5zaW9uc1wiLCBcInBhY2tlZFwiLFxuICAgIFwiYm9vbFwiLCBcImJ5dGVzXCIsIFwiZG91YmxlXCIsIFwiZW51bVwiLCBcImZsb2F0XCIsIFwic3RyaW5nXCIsXG4gICAgXCJpbnQzMlwiLCBcImludDY0XCIsIFwidWludDMyXCIsIFwidWludDY0XCIsIFwic2ludDMyXCIsIFwic2ludDY0XCIsIFwiZml4ZWQzMlwiLCBcImZpeGVkNjRcIiwgXCJzZml4ZWQzMlwiLCBcInNmaXhlZDY0XCIsXG4gICAgXCJvcHRpb25cIiwgXCJzZXJ2aWNlXCIsIFwicnBjXCIsIFwicmV0dXJuc1wiXG4gIF07XG4gIHZhciBrZXl3b3JkcyA9IHdvcmRSZWdleHAoa2V5d29yZEFycmF5KTtcblxuICBDb2RlTWlycm9yLnJlZ2lzdGVySGVscGVyKFwiaGludFdvcmRzXCIsIFwicHJvdG9idWZcIiwga2V5d29yZEFycmF5KTtcblxuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgUmVnRXhwKFwiXltfQS1aYS16XFx4YTEtXFx1ZmZmZl1bX0EtWmEtejAtOVxceGExLVxcdWZmZmZdKlwiKTtcblxuICBmdW5jdGlvbiB0b2tlbkJhc2Uoc3RyZWFtKSB7XG4gICAgLy8gd2hpdGVzcGFjZXNcbiAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHJldHVybiBudWxsO1xuXG4gICAgLy8gSGFuZGxlIG9uZSBsaW5lIENvbW1lbnRzXG4gICAgaWYgKHN0cmVhbS5tYXRjaChcIi8vXCIpKSB7XG4gICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIE51bWJlciBMaXRlcmFsc1xuICAgIGlmIChzdHJlYW0ubWF0Y2goL15bMC05XFwuKy1dLywgZmFsc2UpKSB7XG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eWystXT8weFswLTlhLWZBLUZdKy8pKVxuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goL15bKy1dP1xcZCpcXC5cXGQrKFtFZURkXVsrLV0/XFxkKyk/LykpXG4gICAgICAgIHJldHVybiBcIm51bWJlclwiO1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvXlsrLV0/XFxkKyhbRWVEZF1bKy1dP1xcZCspPy8pKVxuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU3RyaW5nc1xuICAgIGlmIChzdHJlYW0ubWF0Y2goL15cIihbXlwiXXwoXCJcIikpKlwiLykpIHsgcmV0dXJuIFwic3RyaW5nXCI7IH1cbiAgICBpZiAoc3RyZWFtLm1hdGNoKC9eJyhbXiddfCgnJykpKicvKSkgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxuXG4gICAgLy8gSGFuZGxlIHdvcmRzXG4gICAgaWYgKHN0cmVhbS5tYXRjaChrZXl3b3JkcykpIHsgcmV0dXJuIFwia2V5d29yZFwiOyB9XG4gICAgaWYgKHN0cmVhbS5tYXRjaChpZGVudGlmaWVycykpIHsgcmV0dXJuIFwidmFyaWFibGVcIjsgfSA7XG5cbiAgICAvLyBIYW5kbGUgbm9uLWRldGVjdGVkIGl0ZW1zXG4gICAgc3RyZWFtLm5leHQoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJwcm90b2J1ZlwiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IHRva2VuQmFzZSxcbiAgICAgIGZvbGQ6IFwiYnJhY2VcIlxuICAgIH07XG4gIH0pO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1wcm90b2J1ZlwiLCBcInByb3RvYnVmXCIpO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwid29yZFJlZ2V4cCIsIndvcmRzIiwiUmVnRXhwIiwiam9pbiIsImtleXdvcmRBcnJheSIsImtleXdvcmRzIiwicmVnaXN0ZXJIZWxwZXIiLCJpZGVudGlmaWVycyIsInRva2VuQmFzZSIsInN0cmVhbSIsImVhdFNwYWNlIiwibWF0Y2giLCJza2lwVG9FbmQiLCJuZXh0IiwiZGVmaW5lTW9kZSIsInRva2VuIiwiZm9sZCIsImRlZmluZU1JTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/protobuf/protobuf.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/protobuf/protobuf.js");
/******/ 	
/******/ })()
;