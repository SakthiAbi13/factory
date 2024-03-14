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

/***/ "./resources/assets/vendor/libs/codemirror/addon/scroll/scrollpastend.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/scroll/scrollpastend.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"scrollPastEnd\", false, function (cm, val, old) {\n    if (old && old != CodeMirror.Init) {\n      cm.off(\"change\", onChange);\n      cm.off(\"refresh\", updateBottomMargin);\n      cm.display.lineSpace.parentNode.style.paddingBottom = \"\";\n      cm.state.scrollPastEndPadding = null;\n    }\n\n    if (val) {\n      cm.on(\"change\", onChange);\n      cm.on(\"refresh\", updateBottomMargin);\n      updateBottomMargin(cm);\n    }\n  });\n\n  function onChange(cm, change) {\n    if (CodeMirror.changeEnd(change).line == cm.lastLine()) updateBottomMargin(cm);\n  }\n\n  function updateBottomMargin(cm) {\n    var padding = \"\";\n\n    if (cm.lineCount() > 1) {\n      var totalH = cm.display.scroller.clientHeight - 30,\n          lastLineH = cm.getLineHandle(cm.lastLine()).height;\n      padding = totalH - lastLineH + \"px\";\n    }\n\n    if (cm.state.scrollPastEndPadding != padding) {\n      cm.state.scrollPastEndPadding = padding;\n      cm.display.lineSpace.parentNode.style.paddingBottom = padding;\n      cm.off(\"refresh\", updateBottomMargin);\n      cm.setSize();\n      cm.on(\"refresh\", updateBottomMargin);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vc2Nyb2xsL3Njcm9sbHBhc3RlbmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3RCOztFQUVBQSxVQUFVLENBQUNDLFlBQVgsQ0FBd0IsZUFBeEIsRUFBeUMsS0FBekMsRUFBZ0QsVUFBU0MsRUFBVCxFQUFhQyxHQUFiLEVBQWtCQyxHQUFsQixFQUF1QjtJQUNyRSxJQUFJQSxHQUFHLElBQUlBLEdBQUcsSUFBSUosVUFBVSxDQUFDSyxJQUE3QixFQUFtQztNQUNqQ0gsRUFBRSxDQUFDSSxHQUFILENBQU8sUUFBUCxFQUFpQkMsUUFBakI7TUFDQUwsRUFBRSxDQUFDSSxHQUFILENBQU8sU0FBUCxFQUFrQkUsa0JBQWxCO01BQ0FOLEVBQUUsQ0FBQ08sT0FBSCxDQUFXQyxTQUFYLENBQXFCQyxVQUFyQixDQUFnQ0MsS0FBaEMsQ0FBc0NDLGFBQXRDLEdBQXNELEVBQXREO01BQ0FYLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTQyxvQkFBVCxHQUFnQyxJQUFoQztJQUNEOztJQUNELElBQUlaLEdBQUosRUFBUztNQUNQRCxFQUFFLENBQUNjLEVBQUgsQ0FBTSxRQUFOLEVBQWdCVCxRQUFoQjtNQUNBTCxFQUFFLENBQUNjLEVBQUgsQ0FBTSxTQUFOLEVBQWlCUixrQkFBakI7TUFDQUEsa0JBQWtCLENBQUNOLEVBQUQsQ0FBbEI7SUFDRDtFQUNGLENBWkQ7O0VBY0EsU0FBU0ssUUFBVCxDQUFrQkwsRUFBbEIsRUFBc0JlLE1BQXRCLEVBQThCO0lBQzVCLElBQUlqQixVQUFVLENBQUNrQixTQUFYLENBQXFCRCxNQUFyQixFQUE2QkUsSUFBN0IsSUFBcUNqQixFQUFFLENBQUNrQixRQUFILEVBQXpDLEVBQ0VaLGtCQUFrQixDQUFDTixFQUFELENBQWxCO0VBQ0g7O0VBRUQsU0FBU00sa0JBQVQsQ0FBNEJOLEVBQTVCLEVBQWdDO0lBQzlCLElBQUltQixPQUFPLEdBQUcsRUFBZDs7SUFDQSxJQUFJbkIsRUFBRSxDQUFDb0IsU0FBSCxLQUFpQixDQUFyQixFQUF3QjtNQUN0QixJQUFJQyxNQUFNLEdBQUdyQixFQUFFLENBQUNPLE9BQUgsQ0FBV2UsUUFBWCxDQUFvQkMsWUFBcEIsR0FBbUMsRUFBaEQ7TUFBQSxJQUNJQyxTQUFTLEdBQUd4QixFQUFFLENBQUN5QixhQUFILENBQWlCekIsRUFBRSxDQUFDa0IsUUFBSCxFQUFqQixFQUFnQ1EsTUFEaEQ7TUFFQVAsT0FBTyxHQUFJRSxNQUFNLEdBQUdHLFNBQVYsR0FBdUIsSUFBakM7SUFDRDs7SUFDRCxJQUFJeEIsRUFBRSxDQUFDWSxLQUFILENBQVNDLG9CQUFULElBQWlDTSxPQUFyQyxFQUE4QztNQUM1Q25CLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTQyxvQkFBVCxHQUFnQ00sT0FBaEM7TUFDQW5CLEVBQUUsQ0FBQ08sT0FBSCxDQUFXQyxTQUFYLENBQXFCQyxVQUFyQixDQUFnQ0MsS0FBaEMsQ0FBc0NDLGFBQXRDLEdBQXNEUSxPQUF0RDtNQUNBbkIsRUFBRSxDQUFDSSxHQUFILENBQU8sU0FBUCxFQUFrQkUsa0JBQWxCO01BQ0FOLEVBQUUsQ0FBQzJCLE9BQUg7TUFDQTNCLEVBQUUsQ0FBQ2MsRUFBSCxDQUFNLFNBQU4sRUFBaUJSLGtCQUFqQjtJQUNEO0VBQ0Y7QUFDRixDQTVDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9zY3JvbGwvc2Nyb2xscGFzdGVuZC5qcz8wMDEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwic2Nyb2xsUGFzdEVuZFwiLCBmYWxzZSwgZnVuY3Rpb24oY20sIHZhbCwgb2xkKSB7XG4gICAgaWYgKG9sZCAmJiBvbGQgIT0gQ29kZU1pcnJvci5Jbml0KSB7XG4gICAgICBjbS5vZmYoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICAgICAgY20ub2ZmKFwicmVmcmVzaFwiLCB1cGRhdGVCb3R0b21NYXJnaW4pO1xuICAgICAgY20uZGlzcGxheS5saW5lU3BhY2UucGFyZW50Tm9kZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCJcIjtcbiAgICAgIGNtLnN0YXRlLnNjcm9sbFBhc3RFbmRQYWRkaW5nID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZhbCkge1xuICAgICAgY20ub24oXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICAgICAgY20ub24oXCJyZWZyZXNoXCIsIHVwZGF0ZUJvdHRvbU1hcmdpbik7XG4gICAgICB1cGRhdGVCb3R0b21NYXJnaW4oY20pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoY20sIGNoYW5nZSkge1xuICAgIGlmIChDb2RlTWlycm9yLmNoYW5nZUVuZChjaGFuZ2UpLmxpbmUgPT0gY20ubGFzdExpbmUoKSlcbiAgICAgIHVwZGF0ZUJvdHRvbU1hcmdpbihjbSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCb3R0b21NYXJnaW4oY20pIHtcbiAgICB2YXIgcGFkZGluZyA9IFwiXCI7XG4gICAgaWYgKGNtLmxpbmVDb3VudCgpID4gMSkge1xuICAgICAgdmFyIHRvdGFsSCA9IGNtLmRpc3BsYXkuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC0gMzAsXG4gICAgICAgICAgbGFzdExpbmVIID0gY20uZ2V0TGluZUhhbmRsZShjbS5sYXN0TGluZSgpKS5oZWlnaHQ7XG4gICAgICBwYWRkaW5nID0gKHRvdGFsSCAtIGxhc3RMaW5lSCkgKyBcInB4XCI7XG4gICAgfVxuICAgIGlmIChjbS5zdGF0ZS5zY3JvbGxQYXN0RW5kUGFkZGluZyAhPSBwYWRkaW5nKSB7XG4gICAgICBjbS5zdGF0ZS5zY3JvbGxQYXN0RW5kUGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICBjbS5kaXNwbGF5LmxpbmVTcGFjZS5wYXJlbnROb2RlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBwYWRkaW5nO1xuICAgICAgY20ub2ZmKFwicmVmcmVzaFwiLCB1cGRhdGVCb3R0b21NYXJnaW4pO1xuICAgICAgY20uc2V0U2l6ZSgpO1xuICAgICAgY20ub24oXCJyZWZyZXNoXCIsIHVwZGF0ZUJvdHRvbU1hcmdpbik7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJkZWZpbmVPcHRpb24iLCJjbSIsInZhbCIsIm9sZCIsIkluaXQiLCJvZmYiLCJvbkNoYW5nZSIsInVwZGF0ZUJvdHRvbU1hcmdpbiIsImRpc3BsYXkiLCJsaW5lU3BhY2UiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIiwic3RhdGUiLCJzY3JvbGxQYXN0RW5kUGFkZGluZyIsIm9uIiwiY2hhbmdlIiwiY2hhbmdlRW5kIiwibGluZSIsImxhc3RMaW5lIiwicGFkZGluZyIsImxpbmVDb3VudCIsInRvdGFsSCIsInNjcm9sbGVyIiwiY2xpZW50SGVpZ2h0IiwibGFzdExpbmVIIiwiZ2V0TGluZUhhbmRsZSIsImhlaWdodCIsInNldFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/scroll/scrollpastend.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/scroll/scrollpastend.js");
/******/ 	
/******/ })()
;