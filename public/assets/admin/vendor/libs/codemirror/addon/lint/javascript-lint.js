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

/***/ "./resources/assets/vendor/libs/codemirror/addon/lint/javascript-lint.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/lint/javascript-lint.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// Depends on jshint.js from https://github.com/jshint/jshint\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\"; // declare global: JSHINT\n\n  function validator(text, options) {\n    if (!window.JSHINT) {\n      if (window.console) {\n        window.console.error(\"Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run.\");\n      }\n\n      return [];\n    }\n\n    if (!options.indent) // JSHint error.character actually is a column index, this fixes underlining on lines using tabs for indentation\n      options.indent = 1; // JSHint default value is 4\n\n    JSHINT(text, options, options.globals);\n    var errors = JSHINT.data().errors,\n        result = [];\n    if (errors) parseErrors(errors, result);\n    return result;\n  }\n\n  CodeMirror.registerHelper(\"lint\", \"javascript\", validator);\n\n  function parseErrors(errors, output) {\n    for (var i = 0; i < errors.length; i++) {\n      var error = errors[i];\n\n      if (error) {\n        if (error.line <= 0) {\n          if (window.console) {\n            window.console.warn(\"Cannot display JSHint error (invalid line \" + error.line + \")\", error);\n          }\n\n          continue;\n        }\n\n        var start = error.character - 1,\n            end = start + 1;\n\n        if (error.evidence) {\n          var index = error.evidence.substring(start).search(/.\\b/);\n\n          if (index > -1) {\n            end += index;\n          }\n        } // Convert to format expected by validation service\n\n\n        var hint = {\n          message: error.reason,\n          severity: error.code ? error.code.startsWith('W') ? \"warning\" : \"error\" : \"error\",\n          from: CodeMirror.Pos(error.line - 1, start),\n          to: CodeMirror.Pos(error.line - 1, end)\n        };\n        output.push(hint);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vbGludC9qYXZhc2NyaXB0LWxpbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEIsYUFEc0IsQ0FFdEI7O0VBRUEsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLE9BQXpCLEVBQWtDO0lBQ2hDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxNQUFaLEVBQW9CO01BQ2xCLElBQUlELE1BQU0sQ0FBQ0UsT0FBWCxFQUFvQjtRQUNsQkYsTUFBTSxDQUFDRSxPQUFQLENBQWVDLEtBQWYsQ0FBcUIsNkVBQXJCO01BQ0Q7O01BQ0QsT0FBTyxFQUFQO0lBQ0Q7O0lBQ0QsSUFBSSxDQUFDSixPQUFPLENBQUNLLE1BQWIsRUFBcUI7TUFDbkJMLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQixDQUFqQixDQVI4QixDQVFWOztJQUN0QkgsTUFBTSxDQUFDSCxJQUFELEVBQU9DLE9BQVAsRUFBZ0JBLE9BQU8sQ0FBQ00sT0FBeEIsQ0FBTjtJQUNBLElBQUlDLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxJQUFQLEdBQWNELE1BQTNCO0lBQUEsSUFBbUNFLE1BQU0sR0FBRyxFQUE1QztJQUNBLElBQUlGLE1BQUosRUFBWUcsV0FBVyxDQUFDSCxNQUFELEVBQVNFLE1BQVQsQ0FBWDtJQUNaLE9BQU9BLE1BQVA7RUFDRDs7RUFFRFosVUFBVSxDQUFDYyxjQUFYLENBQTBCLE1BQTFCLEVBQWtDLFlBQWxDLEVBQWdEYixTQUFoRDs7RUFFQSxTQUFTWSxXQUFULENBQXFCSCxNQUFyQixFQUE2QkssTUFBN0IsRUFBcUM7SUFDbkMsS0FBTSxJQUFJQyxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO01BQ3ZDLElBQUlULEtBQUssR0FBR0csTUFBTSxDQUFDTSxDQUFELENBQWxCOztNQUNBLElBQUlULEtBQUosRUFBVztRQUNULElBQUlBLEtBQUssQ0FBQ1csSUFBTixJQUFjLENBQWxCLEVBQXFCO1VBQ25CLElBQUlkLE1BQU0sQ0FBQ0UsT0FBWCxFQUFvQjtZQUNsQkYsTUFBTSxDQUFDRSxPQUFQLENBQWVhLElBQWYsQ0FBb0IsK0NBQStDWixLQUFLLENBQUNXLElBQXJELEdBQTRELEdBQWhGLEVBQXFGWCxLQUFyRjtVQUNEOztVQUNEO1FBQ0Q7O1FBRUQsSUFBSWEsS0FBSyxHQUFHYixLQUFLLENBQUNjLFNBQU4sR0FBa0IsQ0FBOUI7UUFBQSxJQUFpQ0MsR0FBRyxHQUFHRixLQUFLLEdBQUcsQ0FBL0M7O1FBQ0EsSUFBSWIsS0FBSyxDQUFDZ0IsUUFBVixFQUFvQjtVQUNsQixJQUFJQyxLQUFLLEdBQUdqQixLQUFLLENBQUNnQixRQUFOLENBQWVFLFNBQWYsQ0FBeUJMLEtBQXpCLEVBQWdDTSxNQUFoQyxDQUF1QyxLQUF2QyxDQUFaOztVQUNBLElBQUlGLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7WUFDZEYsR0FBRyxJQUFJRSxLQUFQO1VBQ0Q7UUFDRixDQWRRLENBZ0JUOzs7UUFDQSxJQUFJRyxJQUFJLEdBQUc7VUFDVEMsT0FBTyxFQUFFckIsS0FBSyxDQUFDc0IsTUFETjtVQUVUQyxRQUFRLEVBQUV2QixLQUFLLENBQUN3QixJQUFOLEdBQWN4QixLQUFLLENBQUN3QixJQUFOLENBQVdDLFVBQVgsQ0FBc0IsR0FBdEIsSUFBNkIsU0FBN0IsR0FBeUMsT0FBdkQsR0FBa0UsT0FGbkU7VUFHVEMsSUFBSSxFQUFFakMsVUFBVSxDQUFDa0MsR0FBWCxDQUFlM0IsS0FBSyxDQUFDVyxJQUFOLEdBQWEsQ0FBNUIsRUFBK0JFLEtBQS9CLENBSEc7VUFJVGUsRUFBRSxFQUFFbkMsVUFBVSxDQUFDa0MsR0FBWCxDQUFlM0IsS0FBSyxDQUFDVyxJQUFOLEdBQWEsQ0FBNUIsRUFBK0JJLEdBQS9CO1FBSkssQ0FBWDtRQU9BUCxNQUFNLENBQUNxQixJQUFQLENBQVlULElBQVo7TUFDRDtJQUNGO0VBQ0Y7QUFDRixDQTNERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9saW50L2phdmFzY3JpcHQtbGludC5qcz84NWZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbi8vIERlcGVuZHMgb24ganNoaW50LmpzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pzaGludC9qc2hpbnRcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8vIGRlY2xhcmUgZ2xvYmFsOiBKU0hJTlRcblxuICBmdW5jdGlvbiB2YWxpZGF0b3IodGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghd2luZG93LkpTSElOVCkge1xuICAgICAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKFwiRXJyb3I6IHdpbmRvdy5KU0hJTlQgbm90IGRlZmluZWQsIENvZGVNaXJyb3IgSmF2YVNjcmlwdCBsaW50aW5nIGNhbm5vdCBydW4uXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaW5kZW50KSAvLyBKU0hpbnQgZXJyb3IuY2hhcmFjdGVyIGFjdHVhbGx5IGlzIGEgY29sdW1uIGluZGV4LCB0aGlzIGZpeGVzIHVuZGVybGluaW5nIG9uIGxpbmVzIHVzaW5nIHRhYnMgZm9yIGluZGVudGF0aW9uXG4gICAgICBvcHRpb25zLmluZGVudCA9IDE7IC8vIEpTSGludCBkZWZhdWx0IHZhbHVlIGlzIDRcbiAgICBKU0hJTlQodGV4dCwgb3B0aW9ucywgb3B0aW9ucy5nbG9iYWxzKTtcbiAgICB2YXIgZXJyb3JzID0gSlNISU5ULmRhdGEoKS5lcnJvcnMsIHJlc3VsdCA9IFtdO1xuICAgIGlmIChlcnJvcnMpIHBhcnNlRXJyb3JzKGVycm9ycywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgQ29kZU1pcnJvci5yZWdpc3RlckhlbHBlcihcImxpbnRcIiwgXCJqYXZhc2NyaXB0XCIsIHZhbGlkYXRvcik7XG5cbiAgZnVuY3Rpb24gcGFyc2VFcnJvcnMoZXJyb3JzLCBvdXRwdXQpIHtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IubGluZSA8PSAwKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS53YXJuKFwiQ2Fubm90IGRpc3BsYXkgSlNIaW50IGVycm9yIChpbnZhbGlkIGxpbmUgXCIgKyBlcnJvci5saW5lICsgXCIpXCIsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSBlcnJvci5jaGFyYWN0ZXIgLSAxLCBlbmQgPSBzdGFydCArIDE7XG4gICAgICAgIGlmIChlcnJvci5ldmlkZW5jZSkge1xuICAgICAgICAgIHZhciBpbmRleCA9IGVycm9yLmV2aWRlbmNlLnN1YnN0cmluZyhzdGFydCkuc2VhcmNoKC8uXFxiLyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGVuZCArPSBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGZvcm1hdCBleHBlY3RlZCBieSB2YWxpZGF0aW9uIHNlcnZpY2VcbiAgICAgICAgdmFyIGhpbnQgPSB7XG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IucmVhc29uLFxuICAgICAgICAgIHNldmVyaXR5OiBlcnJvci5jb2RlID8gKGVycm9yLmNvZGUuc3RhcnRzV2l0aCgnVycpID8gXCJ3YXJuaW5nXCIgOiBcImVycm9yXCIpIDogXCJlcnJvclwiLFxuICAgICAgICAgIGZyb206IENvZGVNaXJyb3IuUG9zKGVycm9yLmxpbmUgLSAxLCBzdGFydCksXG4gICAgICAgICAgdG86IENvZGVNaXJyb3IuUG9zKGVycm9yLmxpbmUgLSAxLCBlbmQpXG4gICAgICAgIH07XG5cbiAgICAgICAgb3V0cHV0LnB1c2goaGludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJ2YWxpZGF0b3IiLCJ0ZXh0Iiwib3B0aW9ucyIsIndpbmRvdyIsIkpTSElOVCIsImNvbnNvbGUiLCJlcnJvciIsImluZGVudCIsImdsb2JhbHMiLCJlcnJvcnMiLCJkYXRhIiwicmVzdWx0IiwicGFyc2VFcnJvcnMiLCJyZWdpc3RlckhlbHBlciIsIm91dHB1dCIsImkiLCJsZW5ndGgiLCJsaW5lIiwid2FybiIsInN0YXJ0IiwiY2hhcmFjdGVyIiwiZW5kIiwiZXZpZGVuY2UiLCJpbmRleCIsInN1YnN0cmluZyIsInNlYXJjaCIsImhpbnQiLCJtZXNzYWdlIiwicmVhc29uIiwic2V2ZXJpdHkiLCJjb2RlIiwic3RhcnRzV2l0aCIsImZyb20iLCJQb3MiLCJ0byIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/lint/javascript-lint.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/lint/javascript-lint.js");
/******/ 	
/******/ })()
;