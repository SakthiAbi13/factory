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

/***/ "./resources/assets/vendor/libs/codemirror/addon/display/autorefresh.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/display/autorefresh.js ***!
  \******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"autoRefresh\", false, function (cm, val) {\n    if (cm.state.autoRefresh) {\n      stopListening(cm, cm.state.autoRefresh);\n      cm.state.autoRefresh = null;\n    }\n\n    if (val && cm.display.wrapper.offsetHeight == 0) startListening(cm, cm.state.autoRefresh = {\n      delay: val.delay || 250\n    });\n  });\n\n  function startListening(cm, state) {\n    function check() {\n      if (cm.display.wrapper.offsetHeight) {\n        stopListening(cm, state);\n        if (cm.display.lastWrapHeight != cm.display.wrapper.clientHeight) cm.refresh();\n      } else {\n        state.timeout = setTimeout(check, state.delay);\n      }\n    }\n\n    state.timeout = setTimeout(check, state.delay);\n\n    state.hurry = function () {\n      clearTimeout(state.timeout);\n      state.timeout = setTimeout(check, 50);\n    };\n\n    CodeMirror.on(window, \"mouseup\", state.hurry);\n    CodeMirror.on(window, \"keyup\", state.hurry);\n  }\n\n  function stopListening(_cm, state) {\n    clearTimeout(state.timeout);\n    CodeMirror.off(window, \"mouseup\", state.hurry);\n    CodeMirror.off(window, \"keyup\", state.hurry);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZGlzcGxheS9hdXRvcmVmcmVzaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEI7O0VBRUFBLFVBQVUsQ0FBQ0MsWUFBWCxDQUF3QixhQUF4QixFQUF1QyxLQUF2QyxFQUE4QyxVQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBa0I7SUFDOUQsSUFBSUQsRUFBRSxDQUFDRSxLQUFILENBQVNDLFdBQWIsRUFBMEI7TUFDeEJDLGFBQWEsQ0FBQ0osRUFBRCxFQUFLQSxFQUFFLENBQUNFLEtBQUgsQ0FBU0MsV0FBZCxDQUFiO01BQ0FILEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxXQUFULEdBQXVCLElBQXZCO0lBQ0Q7O0lBQ0QsSUFBSUYsR0FBRyxJQUFJRCxFQUFFLENBQUNLLE9BQUgsQ0FBV0MsT0FBWCxDQUFtQkMsWUFBbkIsSUFBbUMsQ0FBOUMsRUFDRUMsY0FBYyxDQUFDUixFQUFELEVBQUtBLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxXQUFULEdBQXVCO01BQUNNLEtBQUssRUFBRVIsR0FBRyxDQUFDUSxLQUFKLElBQWE7SUFBckIsQ0FBNUIsQ0FBZDtFQUNILENBUEQ7O0VBU0EsU0FBU0QsY0FBVCxDQUF3QlIsRUFBeEIsRUFBNEJFLEtBQTVCLEVBQW1DO0lBQ2pDLFNBQVNRLEtBQVQsR0FBaUI7TUFDZixJQUFJVixFQUFFLENBQUNLLE9BQUgsQ0FBV0MsT0FBWCxDQUFtQkMsWUFBdkIsRUFBcUM7UUFDbkNILGFBQWEsQ0FBQ0osRUFBRCxFQUFLRSxLQUFMLENBQWI7UUFDQSxJQUFJRixFQUFFLENBQUNLLE9BQUgsQ0FBV00sY0FBWCxJQUE2QlgsRUFBRSxDQUFDSyxPQUFILENBQVdDLE9BQVgsQ0FBbUJNLFlBQXBELEVBQ0VaLEVBQUUsQ0FBQ2EsT0FBSDtNQUNILENBSkQsTUFJTztRQUNMWCxLQUFLLENBQUNZLE9BQU4sR0FBZ0JDLFVBQVUsQ0FBQ0wsS0FBRCxFQUFRUixLQUFLLENBQUNPLEtBQWQsQ0FBMUI7TUFDRDtJQUNGOztJQUNEUCxLQUFLLENBQUNZLE9BQU4sR0FBZ0JDLFVBQVUsQ0FBQ0wsS0FBRCxFQUFRUixLQUFLLENBQUNPLEtBQWQsQ0FBMUI7O0lBQ0FQLEtBQUssQ0FBQ2MsS0FBTixHQUFjLFlBQVc7TUFDdkJDLFlBQVksQ0FBQ2YsS0FBSyxDQUFDWSxPQUFQLENBQVo7TUFDQVosS0FBSyxDQUFDWSxPQUFOLEdBQWdCQyxVQUFVLENBQUNMLEtBQUQsRUFBUSxFQUFSLENBQTFCO0lBQ0QsQ0FIRDs7SUFJQVosVUFBVSxDQUFDb0IsRUFBWCxDQUFjQyxNQUFkLEVBQXNCLFNBQXRCLEVBQWlDakIsS0FBSyxDQUFDYyxLQUF2QztJQUNBbEIsVUFBVSxDQUFDb0IsRUFBWCxDQUFjQyxNQUFkLEVBQXNCLE9BQXRCLEVBQStCakIsS0FBSyxDQUFDYyxLQUFyQztFQUNEOztFQUVELFNBQVNaLGFBQVQsQ0FBdUJnQixHQUF2QixFQUE0QmxCLEtBQTVCLEVBQW1DO0lBQ2pDZSxZQUFZLENBQUNmLEtBQUssQ0FBQ1ksT0FBUCxDQUFaO0lBQ0FoQixVQUFVLENBQUN1QixHQUFYLENBQWVGLE1BQWYsRUFBdUIsU0FBdkIsRUFBa0NqQixLQUFLLENBQUNjLEtBQXhDO0lBQ0FsQixVQUFVLENBQUN1QixHQUFYLENBQWVGLE1BQWYsRUFBdUIsT0FBdkIsRUFBZ0NqQixLQUFLLENBQUNjLEtBQXRDO0VBQ0Q7QUFDRixDQTNDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9kaXNwbGF5L2F1dG9yZWZyZXNoLmpzP2MzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSlcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpXG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcilcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCJcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImF1dG9SZWZyZXNoXCIsIGZhbHNlLCBmdW5jdGlvbihjbSwgdmFsKSB7XG4gICAgaWYgKGNtLnN0YXRlLmF1dG9SZWZyZXNoKSB7XG4gICAgICBzdG9wTGlzdGVuaW5nKGNtLCBjbS5zdGF0ZS5hdXRvUmVmcmVzaClcbiAgICAgIGNtLnN0YXRlLmF1dG9SZWZyZXNoID0gbnVsbFxuICAgIH1cbiAgICBpZiAodmFsICYmIGNtLmRpc3BsYXkud3JhcHBlci5vZmZzZXRIZWlnaHQgPT0gMClcbiAgICAgIHN0YXJ0TGlzdGVuaW5nKGNtLCBjbS5zdGF0ZS5hdXRvUmVmcmVzaCA9IHtkZWxheTogdmFsLmRlbGF5IHx8IDI1MH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmcoY20sIHN0YXRlKSB7XG4gICAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICBpZiAoY20uZGlzcGxheS53cmFwcGVyLm9mZnNldEhlaWdodCkge1xuICAgICAgICBzdG9wTGlzdGVuaW5nKGNtLCBzdGF0ZSlcbiAgICAgICAgaWYgKGNtLmRpc3BsYXkubGFzdFdyYXBIZWlnaHQgIT0gY20uZGlzcGxheS53cmFwcGVyLmNsaWVudEhlaWdodClcbiAgICAgICAgICBjbS5yZWZyZXNoKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGNoZWNrLCBzdGF0ZS5kZWxheSlcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUudGltZW91dCA9IHNldFRpbWVvdXQoY2hlY2ssIHN0YXRlLmRlbGF5KVxuICAgIHN0YXRlLmh1cnJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dClcbiAgICAgIHN0YXRlLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGNoZWNrLCA1MClcbiAgICB9XG4gICAgQ29kZU1pcnJvci5vbih3aW5kb3csIFwibW91c2V1cFwiLCBzdGF0ZS5odXJyeSlcbiAgICBDb2RlTWlycm9yLm9uKHdpbmRvdywgXCJrZXl1cFwiLCBzdGF0ZS5odXJyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoX2NtLCBzdGF0ZSkge1xuICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KVxuICAgIENvZGVNaXJyb3Iub2ZmKHdpbmRvdywgXCJtb3VzZXVwXCIsIHN0YXRlLmh1cnJ5KVxuICAgIENvZGVNaXJyb3Iub2ZmKHdpbmRvdywgXCJrZXl1cFwiLCBzdGF0ZS5odXJyeSlcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lT3B0aW9uIiwiY20iLCJ2YWwiLCJzdGF0ZSIsImF1dG9SZWZyZXNoIiwic3RvcExpc3RlbmluZyIsImRpc3BsYXkiLCJ3cmFwcGVyIiwib2Zmc2V0SGVpZ2h0Iiwic3RhcnRMaXN0ZW5pbmciLCJkZWxheSIsImNoZWNrIiwibGFzdFdyYXBIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyZWZyZXNoIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJodXJyeSIsImNsZWFyVGltZW91dCIsIm9uIiwid2luZG93IiwiX2NtIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/display/autorefresh.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/display/autorefresh.js");
/******/ 	
/******/ })()
;