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

/***/ "./resources/assets/vendor/libs/codemirror/addon/display/fullscreen.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/display/fullscreen.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"fullScreen\", false, function (cm, val, old) {\n    if (old == CodeMirror.Init) old = false;\n    if (!old == !val) return;\n    if (val) setFullscreen(cm);else setNormal(cm);\n  });\n\n  function setFullscreen(cm) {\n    var wrap = cm.getWrapperElement();\n    cm.state.fullScreenRestore = {\n      scrollTop: window.pageYOffset,\n      scrollLeft: window.pageXOffset,\n      width: wrap.style.width,\n      height: wrap.style.height\n    };\n    wrap.style.width = \"\";\n    wrap.style.height = \"auto\";\n    wrap.className += \" CodeMirror-fullscreen\";\n    document.documentElement.style.overflow = \"hidden\";\n    cm.refresh();\n  }\n\n  function setNormal(cm) {\n    var wrap = cm.getWrapperElement();\n    wrap.className = wrap.className.replace(/\\s*CodeMirror-fullscreen\\b/, \"\");\n    document.documentElement.style.overflow = \"\";\n    var info = cm.state.fullScreenRestore;\n    wrap.style.width = info.width;\n    wrap.style.height = info.height;\n    window.scrollTo(info.scrollLeft, info.scrollTop);\n    cm.refresh();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZGlzcGxheS9mdWxsc2NyZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0Qjs7RUFFQUEsVUFBVSxDQUFDQyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDLEtBQXRDLEVBQTZDLFVBQVNDLEVBQVQsRUFBYUMsR0FBYixFQUFrQkMsR0FBbEIsRUFBdUI7SUFDbEUsSUFBSUEsR0FBRyxJQUFJSixVQUFVLENBQUNLLElBQXRCLEVBQTRCRCxHQUFHLEdBQUcsS0FBTjtJQUM1QixJQUFJLENBQUNBLEdBQUQsSUFBUSxDQUFDRCxHQUFiLEVBQWtCO0lBQ2xCLElBQUlBLEdBQUosRUFBU0csYUFBYSxDQUFDSixFQUFELENBQWIsQ0FBVCxLQUNLSyxTQUFTLENBQUNMLEVBQUQsQ0FBVDtFQUNOLENBTEQ7O0VBT0EsU0FBU0ksYUFBVCxDQUF1QkosRUFBdkIsRUFBMkI7SUFDekIsSUFBSU0sSUFBSSxHQUFHTixFQUFFLENBQUNPLGlCQUFILEVBQVg7SUFDQVAsRUFBRSxDQUFDUSxLQUFILENBQVNDLGlCQUFULEdBQTZCO01BQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDQyxXQUFuQjtNQUFnQ0MsVUFBVSxFQUFFRixNQUFNLENBQUNHLFdBQW5EO01BQ0NDLEtBQUssRUFBRVQsSUFBSSxDQUFDVSxLQUFMLENBQVdELEtBRG5CO01BQzBCRSxNQUFNLEVBQUVYLElBQUksQ0FBQ1UsS0FBTCxDQUFXQztJQUQ3QyxDQUE3QjtJQUVBWCxJQUFJLENBQUNVLEtBQUwsQ0FBV0QsS0FBWCxHQUFtQixFQUFuQjtJQUNBVCxJQUFJLENBQUNVLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixNQUFwQjtJQUNBWCxJQUFJLENBQUNZLFNBQUwsSUFBa0Isd0JBQWxCO0lBQ0FDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosS0FBekIsQ0FBK0JLLFFBQS9CLEdBQTBDLFFBQTFDO0lBQ0FyQixFQUFFLENBQUNzQixPQUFIO0VBQ0Q7O0VBRUQsU0FBU2pCLFNBQVQsQ0FBbUJMLEVBQW5CLEVBQXVCO0lBQ3JCLElBQUlNLElBQUksR0FBR04sRUFBRSxDQUFDTyxpQkFBSCxFQUFYO0lBQ0FELElBQUksQ0FBQ1ksU0FBTCxHQUFpQlosSUFBSSxDQUFDWSxTQUFMLENBQWVLLE9BQWYsQ0FBdUIsNEJBQXZCLEVBQXFELEVBQXJELENBQWpCO0lBQ0FKLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosS0FBekIsQ0FBK0JLLFFBQS9CLEdBQTBDLEVBQTFDO0lBQ0EsSUFBSUcsSUFBSSxHQUFHeEIsRUFBRSxDQUFDUSxLQUFILENBQVNDLGlCQUFwQjtJQUNBSCxJQUFJLENBQUNVLEtBQUwsQ0FBV0QsS0FBWCxHQUFtQlMsSUFBSSxDQUFDVCxLQUF4QjtJQUErQlQsSUFBSSxDQUFDVSxLQUFMLENBQVdDLE1BQVgsR0FBb0JPLElBQUksQ0FBQ1AsTUFBekI7SUFDL0JOLE1BQU0sQ0FBQ2MsUUFBUCxDQUFnQkQsSUFBSSxDQUFDWCxVQUFyQixFQUFpQ1csSUFBSSxDQUFDZCxTQUF0QztJQUNBVixFQUFFLENBQUNzQixPQUFIO0VBQ0Q7QUFDRixDQXJDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9kaXNwbGF5L2Z1bGxzY3JlZW4uanM/MTE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UsIGZ1bmN0aW9uKGNtLCB2YWwsIG9sZCkge1xuICAgIGlmIChvbGQgPT0gQ29kZU1pcnJvci5Jbml0KSBvbGQgPSBmYWxzZTtcbiAgICBpZiAoIW9sZCA9PSAhdmFsKSByZXR1cm47XG4gICAgaWYgKHZhbCkgc2V0RnVsbHNjcmVlbihjbSk7XG4gICAgZWxzZSBzZXROb3JtYWwoY20pO1xuICB9KTtcblxuICBmdW5jdGlvbiBzZXRGdWxsc2NyZWVuKGNtKSB7XG4gICAgdmFyIHdyYXAgPSBjbS5nZXRXcmFwcGVyRWxlbWVudCgpO1xuICAgIGNtLnN0YXRlLmZ1bGxTY3JlZW5SZXN0b3JlID0ge3Njcm9sbFRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LCBzY3JvbGxMZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdyYXAuc3R5bGUud2lkdGgsIGhlaWdodDogd3JhcC5zdHlsZS5oZWlnaHR9O1xuICAgIHdyYXAuc3R5bGUud2lkdGggPSBcIlwiO1xuICAgIHdyYXAuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgd3JhcC5jbGFzc05hbWUgKz0gXCIgQ29kZU1pcnJvci1mdWxsc2NyZWVuXCI7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBjbS5yZWZyZXNoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXROb3JtYWwoY20pIHtcbiAgICB2YXIgd3JhcCA9IGNtLmdldFdyYXBwZXJFbGVtZW50KCk7XG4gICAgd3JhcC5jbGFzc05hbWUgPSB3cmFwLmNsYXNzTmFtZS5yZXBsYWNlKC9cXHMqQ29kZU1pcnJvci1mdWxsc2NyZWVuXFxiLywgXCJcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICB2YXIgaW5mbyA9IGNtLnN0YXRlLmZ1bGxTY3JlZW5SZXN0b3JlO1xuICAgIHdyYXAuc3R5bGUud2lkdGggPSBpbmZvLndpZHRoOyB3cmFwLnN0eWxlLmhlaWdodCA9IGluZm8uaGVpZ2h0O1xuICAgIHdpbmRvdy5zY3JvbGxUbyhpbmZvLnNjcm9sbExlZnQsIGluZm8uc2Nyb2xsVG9wKTtcbiAgICBjbS5yZWZyZXNoKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU9wdGlvbiIsImNtIiwidmFsIiwib2xkIiwiSW5pdCIsInNldEZ1bGxzY3JlZW4iLCJzZXROb3JtYWwiLCJ3cmFwIiwiZ2V0V3JhcHBlckVsZW1lbnQiLCJzdGF0ZSIsImZ1bGxTY3JlZW5SZXN0b3JlIiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJ3aWR0aCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvdmVyZmxvdyIsInJlZnJlc2giLCJyZXBsYWNlIiwiaW5mbyIsInNjcm9sbFRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/display/fullscreen.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/display/fullscreen.js");
/******/ 	
/******/ })()
;