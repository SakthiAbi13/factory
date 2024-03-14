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

/***/ "./resources/assets/vendor/libs/codemirror/addon/edit/trailingspace.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/edit/trailingspace.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  CodeMirror.defineOption(\"showTrailingSpace\", false, function (cm, val, prev) {\n    if (prev == CodeMirror.Init) prev = false;\n    if (prev && !val) cm.removeOverlay(\"trailingspace\");else if (!prev && val) cm.addOverlay({\n      token: function token(stream) {\n        for (var l = stream.string.length, i = l; i && /\\s/.test(stream.string.charAt(i - 1)); --i) {}\n\n        if (i > stream.pos) {\n          stream.pos = i;\n          return null;\n        }\n\n        stream.pos = l;\n        return \"trailingspace\";\n      },\n      name: \"trailingspace\"\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZWRpdC90cmFpbGluZ3NwYWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0QkEsVUFBVSxDQUFDQyxZQUFYLENBQXdCLG1CQUF4QixFQUE2QyxLQUE3QyxFQUFvRCxVQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBa0JDLElBQWxCLEVBQXdCO0lBQzFFLElBQUlBLElBQUksSUFBSUosVUFBVSxDQUFDSyxJQUF2QixFQUE2QkQsSUFBSSxHQUFHLEtBQVA7SUFDN0IsSUFBSUEsSUFBSSxJQUFJLENBQUNELEdBQWIsRUFDRUQsRUFBRSxDQUFDSSxhQUFILENBQWlCLGVBQWpCLEVBREYsS0FFSyxJQUFJLENBQUNGLElBQUQsSUFBU0QsR0FBYixFQUNIRCxFQUFFLENBQUNLLFVBQUgsQ0FBYztNQUNaQyxLQUFLLEVBQUUsZUFBU0MsTUFBVCxFQUFpQjtRQUN0QixLQUFLLElBQUlDLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWNDLE1BQXRCLEVBQThCQyxDQUFDLEdBQUdILENBQXZDLEVBQTBDRyxDQUFDLElBQUksS0FBS0MsSUFBTCxDQUFVTCxNQUFNLENBQUNFLE1BQVAsQ0FBY0ksTUFBZCxDQUFxQkYsQ0FBQyxHQUFHLENBQXpCLENBQVYsQ0FBL0MsRUFBdUYsRUFBRUEsQ0FBekYsRUFBNEYsQ0FBRTs7UUFDOUYsSUFBSUEsQ0FBQyxHQUFHSixNQUFNLENBQUNPLEdBQWYsRUFBb0I7VUFBRVAsTUFBTSxDQUFDTyxHQUFQLEdBQWFILENBQWI7VUFBZ0IsT0FBTyxJQUFQO1FBQWM7O1FBQ3BESixNQUFNLENBQUNPLEdBQVAsR0FBYU4sQ0FBYjtRQUNBLE9BQU8sZUFBUDtNQUNELENBTlc7TUFPWk8sSUFBSSxFQUFFO0lBUE0sQ0FBZDtFQVNILENBZEQ7QUFlRCxDQXZCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9lZGl0L3RyYWlsaW5nc3BhY2UuanM/NTNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInNob3dUcmFpbGluZ1NwYWNlXCIsIGZhbHNlLCBmdW5jdGlvbihjbSwgdmFsLCBwcmV2KSB7XG4gICAgaWYgKHByZXYgPT0gQ29kZU1pcnJvci5Jbml0KSBwcmV2ID0gZmFsc2U7XG4gICAgaWYgKHByZXYgJiYgIXZhbClcbiAgICAgIGNtLnJlbW92ZU92ZXJsYXkoXCJ0cmFpbGluZ3NwYWNlXCIpO1xuICAgIGVsc2UgaWYgKCFwcmV2ICYmIHZhbClcbiAgICAgIGNtLmFkZE92ZXJsYXkoe1xuICAgICAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgZm9yICh2YXIgbCA9IHN0cmVhbS5zdHJpbmcubGVuZ3RoLCBpID0gbDsgaSAmJiAvXFxzLy50ZXN0KHN0cmVhbS5zdHJpbmcuY2hhckF0KGkgLSAxKSk7IC0taSkge31cbiAgICAgICAgICBpZiAoaSA+IHN0cmVhbS5wb3MpIHsgc3RyZWFtLnBvcyA9IGk7IHJldHVybiBudWxsOyB9XG4gICAgICAgICAgc3RyZWFtLnBvcyA9IGw7XG4gICAgICAgICAgcmV0dXJuIFwidHJhaWxpbmdzcGFjZVwiO1xuICAgICAgICB9LFxuICAgICAgICBuYW1lOiBcInRyYWlsaW5nc3BhY2VcIlxuICAgICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lT3B0aW9uIiwiY20iLCJ2YWwiLCJwcmV2IiwiSW5pdCIsInJlbW92ZU92ZXJsYXkiLCJhZGRPdmVybGF5IiwidG9rZW4iLCJzdHJlYW0iLCJsIiwic3RyaW5nIiwibGVuZ3RoIiwiaSIsInRlc3QiLCJjaGFyQXQiLCJwb3MiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/edit/trailingspace.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/edit/trailingspace.js");
/******/ 	
/******/ })()
;