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

/***/ "./resources/assets/vendor/libs/codemirror/addon/display/rulers.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/display/rulers.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"rulers\", false, function (cm, val) {\n    if (cm.state.rulerDiv) {\n      cm.state.rulerDiv.parentElement.removeChild(cm.state.rulerDiv);\n      cm.state.rulerDiv = null;\n      cm.off(\"refresh\", drawRulers);\n    }\n\n    if (val && val.length) {\n      cm.state.rulerDiv = cm.display.lineSpace.parentElement.insertBefore(document.createElement(\"div\"), cm.display.lineSpace);\n      cm.state.rulerDiv.className = \"CodeMirror-rulers\";\n      drawRulers(cm);\n      cm.on(\"refresh\", drawRulers);\n    }\n  });\n\n  function drawRulers(cm) {\n    cm.state.rulerDiv.textContent = \"\";\n    var val = cm.getOption(\"rulers\");\n    var cw = cm.defaultCharWidth();\n    var left = cm.charCoords(CodeMirror.Pos(cm.firstLine(), 0), \"div\").left;\n    cm.state.rulerDiv.style.minHeight = cm.display.scroller.offsetHeight + 30 + \"px\";\n\n    for (var i = 0; i < val.length; i++) {\n      var elt = document.createElement(\"div\");\n      elt.className = \"CodeMirror-ruler\";\n      var col,\n          conf = val[i];\n\n      if (typeof conf == \"number\") {\n        col = conf;\n      } else {\n        col = conf.column;\n        if (conf.className) elt.className += \" \" + conf.className;\n        if (conf.color) elt.style.borderColor = conf.color;\n        if (conf.lineStyle) elt.style.borderLeftStyle = conf.lineStyle;\n        if (conf.width) elt.style.borderLeftWidth = conf.width;\n      }\n\n      elt.style.left = left + col * cw + \"px\";\n      cm.state.rulerDiv.appendChild(elt);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZGlzcGxheS9ydWxlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3RCOztFQUVBQSxVQUFVLENBQUNDLFlBQVgsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUMsVUFBU0MsRUFBVCxFQUFhQyxHQUFiLEVBQWtCO0lBQ3pELElBQUlELEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxRQUFiLEVBQXVCO01BQ3JCSCxFQUFFLENBQUNFLEtBQUgsQ0FBU0MsUUFBVCxDQUFrQkMsYUFBbEIsQ0FBZ0NDLFdBQWhDLENBQTRDTCxFQUFFLENBQUNFLEtBQUgsQ0FBU0MsUUFBckQ7TUFDQUgsRUFBRSxDQUFDRSxLQUFILENBQVNDLFFBQVQsR0FBb0IsSUFBcEI7TUFDQUgsRUFBRSxDQUFDTSxHQUFILENBQU8sU0FBUCxFQUFrQkMsVUFBbEI7SUFDRDs7SUFDRCxJQUFJTixHQUFHLElBQUlBLEdBQUcsQ0FBQ08sTUFBZixFQUF1QjtNQUNyQlIsRUFBRSxDQUFDRSxLQUFILENBQVNDLFFBQVQsR0FBb0JILEVBQUUsQ0FBQ1MsT0FBSCxDQUFXQyxTQUFYLENBQXFCTixhQUFyQixDQUFtQ08sWUFBbkMsQ0FBZ0RDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoRCxFQUErRWIsRUFBRSxDQUFDUyxPQUFILENBQVdDLFNBQTFGLENBQXBCO01BQ0FWLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxRQUFULENBQWtCVyxTQUFsQixHQUE4QixtQkFBOUI7TUFDQVAsVUFBVSxDQUFDUCxFQUFELENBQVY7TUFDQUEsRUFBRSxDQUFDZSxFQUFILENBQU0sU0FBTixFQUFpQlIsVUFBakI7SUFDRDtFQUNGLENBWkQ7O0VBY0EsU0FBU0EsVUFBVCxDQUFvQlAsRUFBcEIsRUFBd0I7SUFDdEJBLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxRQUFULENBQWtCYSxXQUFsQixHQUFnQyxFQUFoQztJQUNBLElBQUlmLEdBQUcsR0FBR0QsRUFBRSxDQUFDaUIsU0FBSCxDQUFhLFFBQWIsQ0FBVjtJQUNBLElBQUlDLEVBQUUsR0FBR2xCLEVBQUUsQ0FBQ21CLGdCQUFILEVBQVQ7SUFDQSxJQUFJQyxJQUFJLEdBQUdwQixFQUFFLENBQUNxQixVQUFILENBQWN2QixVQUFVLENBQUN3QixHQUFYLENBQWV0QixFQUFFLENBQUN1QixTQUFILEVBQWYsRUFBK0IsQ0FBL0IsQ0FBZCxFQUFpRCxLQUFqRCxFQUF3REgsSUFBbkU7SUFDQXBCLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxRQUFULENBQWtCcUIsS0FBbEIsQ0FBd0JDLFNBQXhCLEdBQXFDekIsRUFBRSxDQUFDUyxPQUFILENBQVdpQixRQUFYLENBQW9CQyxZQUFwQixHQUFtQyxFQUFwQyxHQUEwQyxJQUE5RTs7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUczQixHQUFHLENBQUNPLE1BQXhCLEVBQWdDb0IsQ0FBQyxFQUFqQyxFQUFxQztNQUNuQyxJQUFJQyxHQUFHLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtNQUNBZ0IsR0FBRyxDQUFDZixTQUFKLEdBQWdCLGtCQUFoQjtNQUNBLElBQUlnQixHQUFKO01BQUEsSUFBU0MsSUFBSSxHQUFHOUIsR0FBRyxDQUFDMkIsQ0FBRCxDQUFuQjs7TUFDQSxJQUFJLE9BQU9HLElBQVAsSUFBZSxRQUFuQixFQUE2QjtRQUMzQkQsR0FBRyxHQUFHQyxJQUFOO01BQ0QsQ0FGRCxNQUVPO1FBQ0xELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxNQUFYO1FBQ0EsSUFBSUQsSUFBSSxDQUFDakIsU0FBVCxFQUFvQmUsR0FBRyxDQUFDZixTQUFKLElBQWlCLE1BQU1pQixJQUFJLENBQUNqQixTQUE1QjtRQUNwQixJQUFJaUIsSUFBSSxDQUFDRSxLQUFULEVBQWdCSixHQUFHLENBQUNMLEtBQUosQ0FBVVUsV0FBVixHQUF3QkgsSUFBSSxDQUFDRSxLQUE3QjtRQUNoQixJQUFJRixJQUFJLENBQUNJLFNBQVQsRUFBb0JOLEdBQUcsQ0FBQ0wsS0FBSixDQUFVWSxlQUFWLEdBQTRCTCxJQUFJLENBQUNJLFNBQWpDO1FBQ3BCLElBQUlKLElBQUksQ0FBQ00sS0FBVCxFQUFnQlIsR0FBRyxDQUFDTCxLQUFKLENBQVVjLGVBQVYsR0FBNEJQLElBQUksQ0FBQ00sS0FBakM7TUFDakI7O01BQ0RSLEdBQUcsQ0FBQ0wsS0FBSixDQUFVSixJQUFWLEdBQWtCQSxJQUFJLEdBQUdVLEdBQUcsR0FBR1osRUFBZCxHQUFvQixJQUFyQztNQUNBbEIsRUFBRSxDQUFDRSxLQUFILENBQVNDLFFBQVQsQ0FBa0JvQyxXQUFsQixDQUE4QlYsR0FBOUI7SUFDRDtFQUNGO0FBQ0YsQ0EvQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZGlzcGxheS9ydWxlcnMuanM/OTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInJ1bGVyc1wiLCBmYWxzZSwgZnVuY3Rpb24oY20sIHZhbCkge1xuICAgIGlmIChjbS5zdGF0ZS5ydWxlckRpdikge1xuICAgICAgY20uc3RhdGUucnVsZXJEaXYucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjbS5zdGF0ZS5ydWxlckRpdilcbiAgICAgIGNtLnN0YXRlLnJ1bGVyRGl2ID0gbnVsbFxuICAgICAgY20ub2ZmKFwicmVmcmVzaFwiLCBkcmF3UnVsZXJzKVxuICAgIH1cbiAgICBpZiAodmFsICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIGNtLnN0YXRlLnJ1bGVyRGl2ID0gY20uZGlzcGxheS5saW5lU3BhY2UucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgY20uZGlzcGxheS5saW5lU3BhY2UpXG4gICAgICBjbS5zdGF0ZS5ydWxlckRpdi5jbGFzc05hbWUgPSBcIkNvZGVNaXJyb3ItcnVsZXJzXCJcbiAgICAgIGRyYXdSdWxlcnMoY20pXG4gICAgICBjbS5vbihcInJlZnJlc2hcIiwgZHJhd1J1bGVycylcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRyYXdSdWxlcnMoY20pIHtcbiAgICBjbS5zdGF0ZS5ydWxlckRpdi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICB2YXIgdmFsID0gY20uZ2V0T3B0aW9uKFwicnVsZXJzXCIpO1xuICAgIHZhciBjdyA9IGNtLmRlZmF1bHRDaGFyV2lkdGgoKTtcbiAgICB2YXIgbGVmdCA9IGNtLmNoYXJDb29yZHMoQ29kZU1pcnJvci5Qb3MoY20uZmlyc3RMaW5lKCksIDApLCBcImRpdlwiKS5sZWZ0O1xuICAgIGNtLnN0YXRlLnJ1bGVyRGl2LnN0eWxlLm1pbkhlaWdodCA9IChjbS5kaXNwbGF5LnNjcm9sbGVyLm9mZnNldEhlaWdodCArIDMwKSArIFwicHhcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbHQuY2xhc3NOYW1lID0gXCJDb2RlTWlycm9yLXJ1bGVyXCI7XG4gICAgICB2YXIgY29sLCBjb25mID0gdmFsW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjb25mID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29sID0gY29uZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbCA9IGNvbmYuY29sdW1uO1xuICAgICAgICBpZiAoY29uZi5jbGFzc05hbWUpIGVsdC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjb25mLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGNvbmYuY29sb3IpIGVsdC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbmYuY29sb3I7XG4gICAgICAgIGlmIChjb25mLmxpbmVTdHlsZSkgZWx0LnN0eWxlLmJvcmRlckxlZnRTdHlsZSA9IGNvbmYubGluZVN0eWxlO1xuICAgICAgICBpZiAoY29uZi53aWR0aCkgZWx0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGNvbmYud2lkdGg7XG4gICAgICB9XG4gICAgICBlbHQuc3R5bGUubGVmdCA9IChsZWZ0ICsgY29sICogY3cpICsgXCJweFwiO1xuICAgICAgY20uc3RhdGUucnVsZXJEaXYuYXBwZW5kQ2hpbGQoZWx0KVxuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lT3B0aW9uIiwiY20iLCJ2YWwiLCJzdGF0ZSIsInJ1bGVyRGl2IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwib2ZmIiwiZHJhd1J1bGVycyIsImxlbmd0aCIsImRpc3BsYXkiLCJsaW5lU3BhY2UiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbiIsInRleHRDb250ZW50IiwiZ2V0T3B0aW9uIiwiY3ciLCJkZWZhdWx0Q2hhcldpZHRoIiwibGVmdCIsImNoYXJDb29yZHMiLCJQb3MiLCJmaXJzdExpbmUiLCJzdHlsZSIsIm1pbkhlaWdodCIsInNjcm9sbGVyIiwib2Zmc2V0SGVpZ2h0IiwiaSIsImVsdCIsImNvbCIsImNvbmYiLCJjb2x1bW4iLCJjb2xvciIsImJvcmRlckNvbG9yIiwibGluZVN0eWxlIiwiYm9yZGVyTGVmdFN0eWxlIiwid2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/display/rulers.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/display/rulers.js");
/******/ 	
/******/ })()
;