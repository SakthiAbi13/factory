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

/***/ "./resources/assets/vendor/libs/codemirror/mode/troff/troff.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/troff/troff.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode('troff', function () {\n    var words = {};\n\n    function tokenBase(stream) {\n      if (stream.eatSpace()) return null;\n      var sol = stream.sol();\n      var ch = stream.next();\n\n      if (ch === '\\\\') {\n        if (stream.match('fB') || stream.match('fR') || stream.match('fI') || stream.match('u') || stream.match('d') || stream.match('%') || stream.match('&')) {\n          return 'string';\n        }\n\n        if (stream.match('m[')) {\n          stream.skipTo(']');\n          stream.next();\n          return 'string';\n        }\n\n        if (stream.match('s+') || stream.match('s-')) {\n          stream.eatWhile(/[\\d-]/);\n          return 'string';\n        }\n\n        if (stream.match('\\(') || stream.match('*\\(')) {\n          stream.eatWhile(/[\\w-]/);\n          return 'string';\n        }\n\n        return 'string';\n      }\n\n      if (sol && (ch === '.' || ch === '\\'')) {\n        if (stream.eat('\\\\') && stream.eat('\\\"')) {\n          stream.skipToEnd();\n          return 'comment';\n        }\n      }\n\n      if (sol && ch === '.') {\n        if (stream.match('B ') || stream.match('I ') || stream.match('R ')) {\n          return 'attribute';\n        }\n\n        if (stream.match('TH ') || stream.match('SH ') || stream.match('SS ') || stream.match('HP ')) {\n          stream.skipToEnd();\n          return 'quote';\n        }\n\n        if (stream.match(/[A-Z]/) && stream.match(/[A-Z]/) || stream.match(/[a-z]/) && stream.match(/[a-z]/)) {\n          return 'attribute';\n        }\n      }\n\n      stream.eatWhile(/[\\w-]/);\n      var cur = stream.current();\n      return words.hasOwnProperty(cur) ? words[cur] : null;\n    }\n\n    function tokenize(stream, state) {\n      return (state.tokens[0] || tokenBase)(stream, state);\n    }\n\n    ;\n    return {\n      startState: function startState() {\n        return {\n          tokens: []\n        };\n      },\n      token: function token(stream, state) {\n        return tokenize(stream, state);\n      }\n    };\n  });\n  CodeMirror.defineMIME('text/troff', 'troff');\n  CodeMirror.defineMIME('text/x-troff', 'troff');\n  CodeMirror.defineMIME('application/x-troff', 'troff');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS90cm9mZi90cm9mZi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQ0VGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUNIQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBR0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN4Qjs7RUFFQUEsVUFBVSxDQUFDQyxVQUFYLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7SUFFeEMsSUFBSUMsS0FBSyxHQUFHLEVBQVo7O0lBRUEsU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7TUFDekIsSUFBSUEsTUFBTSxDQUFDQyxRQUFQLEVBQUosRUFBdUIsT0FBTyxJQUFQO01BRXZCLElBQUlDLEdBQUcsR0FBR0YsTUFBTSxDQUFDRSxHQUFQLEVBQVY7TUFDQSxJQUFJQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0ksSUFBUCxFQUFUOztNQUVBLElBQUlELEVBQUUsS0FBSyxJQUFYLEVBQWlCO1FBQ2YsSUFBSUgsTUFBTSxDQUFDSyxLQUFQLENBQWEsSUFBYixLQUFzQkwsTUFBTSxDQUFDSyxLQUFQLENBQWEsSUFBYixDQUF0QixJQUE0Q0wsTUFBTSxDQUFDSyxLQUFQLENBQWEsSUFBYixDQUE1QyxJQUNBTCxNQUFNLENBQUNLLEtBQVAsQ0FBYSxHQUFiLENBREEsSUFDc0JMLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhLEdBQWIsQ0FEdEIsSUFFQUwsTUFBTSxDQUFDSyxLQUFQLENBQWEsR0FBYixDQUZBLElBRXNCTCxNQUFN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b0MsT0FBcEM7RUFDQXRCLFVBQVUsQ0FBQ3NCLFVBQVgsQ0FBc0IsY0FBdEIsRUFBc0MsT0FBdEM7RUFDQXRCLFVBQVUsQ0FBQ3NCLFVBQVgsQ0FBc0IscUJBQXRCLEVBQTZDLE9BQTdDO0FBRUMsQ0FoRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS90cm9mZi90cm9mZi5qcz81OGZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKVxuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZVxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLmRlZmluZU1vZGUoJ3Ryb2ZmJywgZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHdvcmRzID0ge307XG5cbiAgZnVuY3Rpb24gdG9rZW5CYXNlKHN0cmVhbSkge1xuICAgIGlmIChzdHJlYW0uZWF0U3BhY2UoKSkgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgc29sID0gc3RyZWFtLnNvbCgpO1xuICAgIHZhciBjaCA9IHN0cmVhbS5uZXh0KCk7XG5cbiAgICBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgnZkInKSB8fCBzdHJlYW0ubWF0Y2goJ2ZSJykgfHwgc3RyZWFtLm1hdGNoKCdmSScpIHx8XG4gICAgICAgICAgc3RyZWFtLm1hdGNoKCd1JykgIHx8IHN0cmVhbS5tYXRjaCgnZCcpICB8fFxuICAgICAgICAgIHN0cmVhbS5tYXRjaCgnJScpICB8fCBzdHJlYW0ubWF0Y2goJyYnKSkge1xuICAgICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgICB9XG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKCdtWycpKSB7XG4gICAgICAgIHN0cmVhbS5za2lwVG8oJ10nKTtcbiAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgncysnKSB8fCBzdHJlYW0ubWF0Y2goJ3MtJykpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFxkLV0vKTtcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgnXFwoJykgfHwgc3RyZWFtLm1hdGNoKCcqXFwoJykpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3LV0vKTtcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgIH1cbiAgICBpZiAoc29sICYmIChjaCA9PT0gJy4nIHx8IGNoID09PSAnXFwnJykpIHtcbiAgICAgIGlmIChzdHJlYW0uZWF0KCdcXFxcJykgJiYgc3RyZWFtLmVhdCgnXFxcIicpKSB7XG4gICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgcmV0dXJuICdjb21tZW50JztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNvbCAmJiBjaCA9PT0gJy4nKSB7XG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKCdCICcpIHx8IHN0cmVhbS5tYXRjaCgnSSAnKSB8fCBzdHJlYW0ubWF0Y2goJ1IgJykpIHtcbiAgICAgICAgcmV0dXJuICdhdHRyaWJ1dGUnO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgnVEggJykgfHwgc3RyZWFtLm1hdGNoKCdTSCAnKSB8fCBzdHJlYW0ubWF0Y2goJ1NTICcpIHx8IHN0cmVhbS5tYXRjaCgnSFAgJykpIHtcbiAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgICAgICByZXR1cm4gJ3F1b3RlJztcbiAgICAgIH1cbiAgICAgIGlmICgoc3RyZWFtLm1hdGNoKC9bQS1aXS8pICYmIHN0cmVhbS5tYXRjaCgvW0EtWl0vKSkgfHwgKHN0cmVhbS5tYXRjaCgvW2Etel0vKSAmJiBzdHJlYW0ubWF0Y2goL1thLXpdLykpKSB7XG4gICAgICAgIHJldHVybiAnYXR0cmlidXRlJztcbiAgICAgIH1cbiAgICB9XG4gICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3LV0vKTtcbiAgICB2YXIgY3VyID0gc3RyZWFtLmN1cnJlbnQoKTtcbiAgICByZXR1cm4gd29yZHMuaGFzT3duUHJvcGVydHkoY3VyKSA/IHdvcmRzW2N1cl0gOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5pemUoc3RyZWFtLCBzdGF0ZSkge1xuICAgIHJldHVybiAoc3RhdGUudG9rZW5zWzBdIHx8IHRva2VuQmFzZSkgKHN0cmVhbSwgc3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHt0b2tlbnM6W119O30sXG4gICAgdG9rZW46IGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHJldHVybiB0b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gIH07XG59KTtcblxuQ29kZU1pcnJvci5kZWZpbmVNSU1FKCd0ZXh0L3Ryb2ZmJywgJ3Ryb2ZmJyk7XG5Db2RlTWlycm9yLmRlZmluZU1JTUUoJ3RleHQveC10cm9mZicsICd0cm9mZicpO1xuQ29kZU1pcnJvci5kZWZpbmVNSU1FKCdhcHBsaWNhdGlvbi94LXRyb2ZmJywgJ3Ryb2ZmJyk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJ3b3JkcyIsInRva2VuQmFzZSIsInN0cmVhbSIsImVhdFNwYWNlIiwic29sIiwiY2giLCJuZXh0IiwibWF0Y2giLCJza2lwVG8iLCJlYXRXaGlsZSIsImVhdCIsInNraXBUb0VuZCIsImN1ciIsImN1cnJlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInRva2VuaXplIiwic3RhdGUiLCJ0b2tlbnMiLCJzdGFydFN0YXRlIiwidG9rZW4iLCJkZWZpbmVNSU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/troff/troff.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/troff/troff.js");
/******/ 	
/******/ })()
;