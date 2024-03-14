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

/***/ "./resources/assets/vendor/libs/codemirror/mode/diff/diff.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/diff/diff.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"diff\", function () {\n    var TOKEN_NAMES = {\n      '+': 'positive',\n      '-': 'negative',\n      '@': 'meta'\n    };\n    return {\n      token: function token(stream) {\n        var tw_pos = stream.string.search(/[\\t ]+?$/);\n\n        if (!stream.sol() || tw_pos === 0) {\n          stream.skipToEnd();\n          return (\"error \" + (TOKEN_NAMES[stream.string.charAt(0)] || '')).replace(/ $/, '');\n        }\n\n        var token_name = TOKEN_NAMES[stream.peek()] || stream.skipToEnd();\n\n        if (tw_pos === -1) {\n          stream.skipToEnd();\n        } else {\n          stream.pos = tw_pos;\n        }\n\n        return token_name;\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-diff\", \"diff\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9kaWZmL2RpZmYuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3hCOztFQUVBQSxVQUFVLENBQUNDLFVBQVgsQ0FBc0IsTUFBdEIsRUFBOEIsWUFBVztJQUV2QyxJQUFJQyxXQUFXLEdBQUc7TUFDaEIsS0FBSyxVQURXO01BRWhCLEtBQUssVUFGVztNQUdoQixLQUFLO0lBSFcsQ0FBbEI7SUFNQSxPQUFPO01BQ0xDLEtBQUssRUFBRSxlQUFTQyxNQUFULEVBQWlCO1FBQ3RCLElBQUlDLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWNDLE1BQWQsQ0FBcUIsVUFBckIsQ0FBYjs7UUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksR0FBUCxFQUFELElBQWlCSCxNQUFNLEtBQUssQ0FBaEMsRUFBbUM7VUFDakNELE1BQU0sQ0FBQ0ssU0FBUDtVQUNBLE9BQU8sQ0FBQyxZQUNOUCxXQUFXLENBQUNFLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjSSxNQUFkLENBQXFCLENBQXJCLENBQUQsQ0FBWCxJQUF3QyxFQURsQyxDQUFELEVBQ3dDQyxPQUR4QyxDQUNnRCxJQURoRCxFQUNzRCxFQUR0RCxDQUFQO1FBRUQ7O1FBRUQsSUFBSUMsVUFBVSxHQUFHVixXQUFXLENBQUNFLE1BQU0sQ0FBQ1MsSUFBUCxFQUFELENBQVgsSUFBOEJULE1BQU0sQ0FBQ0ssU0FBUCxFQUEvQzs7UUFFQSxJQUFJSixNQUFNLEtBQUssQ0FBQyxDQUFoQixFQUFtQjtVQUNqQkQsTUFBTSxDQUFDSyxTQUFQO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xMLE1BQU0sQ0FBQ1UsR0FBUCxHQUFhVCxNQUFiO1FBQ0Q7O1FBRUQsT0FBT08sVUFBUDtNQUNEO0lBbkJJLENBQVA7RUFxQkQsQ0E3QkQ7RUErQkFaLFVBQVUsQ0FBQ2UsVUFBWCxDQUFzQixhQUF0QixFQUFxQyxNQUFyQztBQUVDLENBM0NEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9jb2RlbWlycm9yL21vZGUvZGlmZi9kaWZmLmpzPzMzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLmRlZmluZU1vZGUoXCJkaWZmXCIsIGZ1bmN0aW9uKCkge1xuXG4gIHZhciBUT0tFTl9OQU1FUyA9IHtcbiAgICAnKyc6ICdwb3NpdGl2ZScsXG4gICAgJy0nOiAnbmVnYXRpdmUnLFxuICAgICdAJzogJ21ldGEnXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgdHdfcG9zID0gc3RyZWFtLnN0cmluZy5zZWFyY2goL1tcXHQgXSs/JC8pO1xuXG4gICAgICBpZiAoIXN0cmVhbS5zb2woKSB8fCB0d19wb3MgPT09IDApIHtcbiAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgICAgICByZXR1cm4gKFwiZXJyb3IgXCIgKyAoXG4gICAgICAgICAgVE9LRU5fTkFNRVNbc3RyZWFtLnN0cmluZy5jaGFyQXQoMCldIHx8ICcnKSkucmVwbGFjZSgvICQvLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b2tlbl9uYW1lID0gVE9LRU5fTkFNRVNbc3RyZWFtLnBlZWsoKV0gfHwgc3RyZWFtLnNraXBUb0VuZCgpO1xuXG4gICAgICBpZiAodHdfcG9zID09PSAtMSkge1xuICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJlYW0ucG9zID0gdHdfcG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9rZW5fbmFtZTtcbiAgICB9XG4gIH07XG59KTtcblxuQ29kZU1pcnJvci5kZWZpbmVNSU1FKFwidGV4dC94LWRpZmZcIiwgXCJkaWZmXCIpO1xuXG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJkZWZpbmVNb2RlIiwiVE9LRU5fTkFNRVMiLCJ0b2tlbiIsInN0cmVhbSIsInR3X3BvcyIsInN0cmluZyIsInNlYXJjaCIsInNvbCIsInNraXBUb0VuZCIsImNoYXJBdCIsInJlcGxhY2UiLCJ0b2tlbl9uYW1lIiwicGVlayIsInBvcyIsImRlZmluZU1JTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/diff/diff.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/diff/diff.js");
/******/ 	
/******/ })()
;