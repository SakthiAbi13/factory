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

/***/ "./resources/assets/vendor/libs/codemirror/mode/apl/apl.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/apl/apl.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"apl\", function () {\n    var builtInOps = {\n      \".\": \"innerProduct\",\n      \"\\\\\": \"scan\",\n      \"/\": \"reduce\",\n      \"⌿\": \"reduce1Axis\",\n      \"⍀\": \"scan1Axis\",\n      \"¨\": \"each\",\n      \"⍣\": \"power\"\n    };\n    var builtInFuncs = {\n      \"+\": [\"conjugate\", \"add\"],\n      \"−\": [\"negate\", \"subtract\"],\n      \"×\": [\"signOf\", \"multiply\"],\n      \"÷\": [\"reciprocal\", \"divide\"],\n      \"⌈\": [\"ceiling\", \"greaterOf\"],\n      \"⌊\": [\"floor\", \"lesserOf\"],\n      \"∣\": [\"absolute\", \"residue\"],\n      \"⍳\": [\"indexGenerate\", \"indexOf\"],\n      \"?\": [\"roll\", \"deal\"],\n      \"⋆\": [\"exponentiate\", \"toThePowerOf\"],\n      \"⍟\": [\"naturalLog\", \"logToTheBase\"],\n      \"○\": [\"piTimes\", \"circularFuncs\"],\n      \"!\": [\"factorial\", \"binomial\"],\n      \"⌹\": [\"matrixInverse\", \"matrixDivide\"],\n      \"<\": [null, \"lessThan\"],\n      \"≤\": [null, \"lessThanOrEqual\"],\n      \"=\": [null, \"equals\"],\n      \">\": [null, \"greaterThan\"],\n      \"≥\": [null, \"greaterThanOrEqual\"],\n      \"≠\": [null, \"notEqual\"],\n      \"≡\": [\"depth\", \"match\"],\n      \"≢\": [null, \"notMatch\"],\n      \"∈\": [\"enlist\", \"membership\"],\n      \"⍷\": [null, \"find\"],\n      \"∪\": [\"unique\", \"union\"],\n      \"∩\": [null, \"intersection\"],\n      \"∼\": [\"not\", \"without\"],\n      \"∨\": [null, \"or\"],\n      \"∧\": [null, \"and\"],\n      \"⍱\": [null, \"nor\"],\n      \"⍲\": [null, \"nand\"],\n      \"⍴\": [\"shapeOf\", \"reshape\"],\n      \",\": [\"ravel\", \"catenate\"],\n      \"⍪\": [null, \"firstAxisCatenate\"],\n      \"⌽\": [\"reverse\", \"rotate\"],\n      \"⊖\": [\"axis1Reverse\", \"axis1Rotate\"],\n      \"⍉\": [\"transpose\", null],\n      \"↑\": [\"first\", \"take\"],\n      \"↓\": [null, \"drop\"],\n      \"⊂\": [\"enclose\", \"partitionWithAxis\"],\n      \"⊃\": [\"diclose\", \"pick\"],\n      \"⌷\": [null, \"index\"],\n      \"⍋\": [\"gradeUp\", null],\n      \"⍒\": [\"gradeDown\", null],\n      \"⊤\": [\"encode\", null],\n      \"⊥\": [\"decode\", null],\n      \"⍕\": [\"format\", \"formatByExample\"],\n      \"⍎\": [\"execute\", null],\n      \"⊣\": [\"stop\", \"left\"],\n      \"⊢\": [\"pass\", \"right\"]\n    };\n    var isOperator = /[\\.\\/⌿⍀¨⍣]/;\n    var isNiladic = /⍬/;\n    var isFunction = /[\\+−×÷⌈⌊∣⍳\\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/;\n    var isArrow = /←/;\n    var isComment = /[⍝#].*$/;\n\n    var stringEater = function stringEater(type) {\n      var prev;\n      prev = false;\n      return function (c) {\n        prev = c;\n\n        if (c === type) {\n          return prev === \"\\\\\";\n        }\n\n        return true;\n      };\n    };\n\n    return {\n      startState: function startState() {\n        return {\n          prev: false,\n          func: false,\n          op: false,\n          string: false,\n          escape: false\n        };\n      },\n      token: function token(stream, state) {\n        var ch, funcName;\n\n        if (stream.eatSpace()) {\n          return null;\n        }\n\n        ch = stream.next();\n\n        if (ch === '\"' || ch === \"'\") {\n          stream.eatWhile(stringEater(ch));\n          stream.next();\n          state.prev = true;\n          return \"string\";\n        }\n\n        if (/[\\[{\\(]/.test(ch)) {\n          state.prev = false;\n          return null;\n        }\n\n        if (/[\\]}\\)]/.test(ch)) {\n          state.prev = true;\n          return null;\n        }\n\n        if (isNiladic.test(ch)) {\n          state.prev = false;\n          return \"niladic\";\n        }\n\n        if (/[¯\\d]/.test(ch)) {\n          if (state.func) {\n            state.func = false;\n            state.prev = false;\n          } else {\n            state.prev = true;\n          }\n\n          stream.eatWhile(/[\\w\\.]/);\n          return \"number\";\n        }\n\n        if (isOperator.test(ch)) {\n          return \"operator apl-\" + builtInOps[ch];\n        }\n\n        if (isArrow.test(ch)) {\n          return \"apl-arrow\";\n        }\n\n        if (isFunction.test(ch)) {\n          funcName = \"apl-\";\n\n          if (builtInFuncs[ch] != null) {\n            if (state.prev) {\n              funcName += builtInFuncs[ch][1];\n            } else {\n              funcName += builtInFuncs[ch][0];\n            }\n          }\n\n          state.func = true;\n          state.prev = false;\n          return \"function \" + funcName;\n        }\n\n        if (isComment.test(ch)) {\n          stream.skipToEnd();\n          return \"comment\";\n        }\n\n        if (ch === \"∘\" && stream.peek() === \".\") {\n          stream.next();\n          return \"function jot-dot\";\n        }\n\n        stream.eatWhile(/[\\w\\$_]/);\n        state.prev = true;\n        return \"keyword\";\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/apl\", \"apl\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9hcGwvYXBsLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN4Qjs7RUFFQUEsVUFBVSxDQUFDQyxVQUFYLENBQXNCLEtBQXRCLEVBQTZCLFlBQVc7SUFDdEMsSUFBSUMsVUFBVSxHQUFHO01BQ2YsS0FBSyxjQURVO01BRWYsTUFBTSxNQUZTO01BR2YsS0FBSyxRQUhVO01BSWYsS0FBSyxhQUpVO01BS2YsS0FBSyxXQUxVO01BTWYsS0FBSyxNQU5VO01BT2YsS0FBSztJQVBVLENBQWpCO0lBU0EsSUFBSUMsWUFBWSxHQUFHO01BQ2pCLEtBQUssQ0FBQyxXQUFELEVBQWMsS0FBZCxDQURZO01BRWpCLEtBQUssQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUZZO01BR2pCLEtBQUssQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUhZO01BSWpCLEtBQUssQ0FBQyxZQUFELEVBQWUsUUFBZixDQUpZO01BS2pCLEtBQUssQ0FBQyxTQUFELEVBQVksV0FBWixDQUxZO01BTWpCLEtBQUssQ0FBQyxPQUFELEVBQVUsVUFBVixDQU5ZO01BT2pCLEtBQUssQ0FBQyxVQUFELEVBQWEsU0FBYixDQVBZO01BUWpCLEtBQUssQ0FBQyxlQUFELEVBQWtCLFNBQWxCLENBUlk7TUFTakIsS0FBSyxD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SUFBSWQsU0FBUyxDQUFDa0IsSUFBVixDQUFlTCxFQUFmLENBQUosRUFBd0I7VUFDdEJGLE1BQU0sQ0FBQ1EsU0FBUDtVQUNBLE9BQU8sU0FBUDtRQUNEOztRQUNELElBQUlOLEVBQUUsS0FBSyxHQUFQLElBQWNGLE1BQU0sQ0FBQ1MsSUFBUCxPQUFrQixHQUFwQyxFQUF5QztVQUN2Q1QsTUFBTSxDQUFDSyxJQUFQO1VBQ0EsT0FBTyxrQkFBUDtRQUNEOztRQUNETCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0IsU0FBaEI7UUFDQUwsS0FBSyxDQUFDVCxJQUFOLEdBQWEsSUFBYjtRQUNBLE9BQU8sU0FBUDtNQUNEO0lBMUVJLENBQVA7RUE0RUQsQ0E1SkQ7RUE4SkFYLFVBQVUsQ0FBQzZCLFVBQVgsQ0FBc0IsVUFBdEIsRUFBa0MsS0FBbEM7QUFFQyxDQTFLRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9tb2RlL2FwbC9hcGwuanM/N2Q1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTW9kZShcImFwbFwiLCBmdW5jdGlvbigpIHtcbiAgdmFyIGJ1aWx0SW5PcHMgPSB7XG4gICAgXCIuXCI6IFwiaW5uZXJQcm9kdWN0XCIsXG4gICAgXCJcXFxcXCI6IFwic2NhblwiLFxuICAgIFwiL1wiOiBcInJlZHVjZVwiLFxuICAgIFwi4oy/XCI6IFwicmVkdWNlMUF4aXNcIixcbiAgICBcIuKNgFwiOiBcInNjYW4xQXhpc1wiLFxuICAgIFwiwqhcIjogXCJlYWNoXCIsXG4gICAgXCLijaNcIjogXCJwb3dlclwiXG4gIH07XG4gIHZhciBidWlsdEluRnVuY3MgPSB7XG4gICAgXCIrXCI6IFtcImNvbmp1Z2F0ZVwiLCBcImFkZFwiXSxcbiAgICBcIuKIklwiOiBbXCJuZWdhdGVcIiwgXCJzdWJ0cmFjdFwiXSxcbiAgICBcIsOXXCI6IFtcInNpZ25PZlwiLCBcIm11bHRpcGx5XCJdLFxuICAgIFwiw7dcIjogW1wicmVjaXByb2NhbFwiLCBcImRpdmlkZVwiXSxcbiAgICBcIuKMiFwiOiBbXCJjZWlsaW5nXCIsIFwiZ3JlYXRlck9mXCJdLFxuICAgIFwi4oyKXCI6IFtcImZsb29yXCIsIFwibGVzc2VyT2ZcIl0sXG4gICAgXCLiiKNcIjogW1wiYWJzb2x1dGVcIiwgXCJyZXNpZHVlXCJdLFxuICAgIFwi4o2zXCI6IFtcImluZGV4R2VuZXJhdGVcIiwgXCJpbmRleE9mXCJdLFxuICAgIFwiP1wiOiBbXCJyb2xsXCIsIFwiZGVhbFwiXSxcbiAgICBcIuKLhlwiOiBbXCJleHBvbmVudGlhdGVcIiwgXCJ0b1RoZVBvd2VyT2ZcIl0sXG4gICAgXCLijZ9cIjogW1wibmF0dXJhbExvZ1wiLCBcImxvZ1RvVGhlQmFzZVwiXSxcbiAgICBcIuKXi1wiOiBbXCJwaVRpbWVzXCIsIFwiY2lyY3VsYXJGdW5jc1wiXSxcbiAgICBcIiFcIjogW1wiZmFjdG9yaWFsXCIsIFwiYmlub21pYWxcIl0sXG4gICAgXCLijLlcIjogW1wibWF0cml4SW52ZXJzZVwiLCBcIm1hdHJpeERpdmlkZVwiXSxcbiAgICBcIjxcIjogW251bGwsIFwibGVzc1RoYW5cIl0sXG4gICAgXCLiiaRcIjogW251bGwsIFwibGVzc1RoYW5PckVxdWFsXCJdLFxuICAgIFwiPVwiOiBbbnVsbCwgXCJlcXVhbHNcIl0sXG4gICAgXCI+XCI6IFtudWxsLCBcImdyZWF0ZXJUaGFuXCJdLFxuICAgIFwi4omlXCI6IFtudWxsLCBcImdyZWF0ZXJUaGFuT3JFcXVhbFwiXSxcbiAgICBcIuKJoFwiOiBbbnVsbCwgXCJub3RFcXVhbFwiXSxcbiAgICBcIuKJoVwiOiBbXCJkZXB0aFwiLCBcIm1hdGNoXCJdLFxuICAgIFwi4omiXCI6IFtudWxsLCBcIm5vdE1hdGNoXCJdLFxuICAgIFwi4oiIXCI6IFtcImVubGlzdFwiLCBcIm1lbWJlcnNoaXBcIl0sXG4gICAgXCLijbdcIjogW251bGwsIFwiZmluZFwiXSxcbiAgICBcIuKIqlwiOiBbXCJ1bmlxdWVcIiwgXCJ1bmlvblwiXSxcbiAgICBcIuKIqVwiOiBbbnVsbCwgXCJpbnRlcnNlY3Rpb25cIl0sXG4gICAgXCLiiLxcIjogW1wibm90XCIsIFwid2l0aG91dFwiXSxcbiAgICBcIuKIqFwiOiBbbnVsbCwgXCJvclwiXSxcbiAgICBcIuKIp1wiOiBbbnVsbCwgXCJhbmRcIl0sXG4gICAgXCLijbFcIjogW251bGwsIFwibm9yXCJdLFxuICAgIFwi4o2yXCI6IFtudWxsLCBcIm5hbmRcIl0sXG4gICAgXCLijbRcIjogW1wic2hhcGVPZlwiLCBcInJlc2hhcGVcIl0sXG4gICAgXCIsXCI6IFtcInJhdmVsXCIsIFwiY2F0ZW5hdGVcIl0sXG4gICAgXCLijapcIjogW251bGwsIFwiZmlyc3RBeGlzQ2F0ZW5hdGVcIl0sXG4gICAgXCLijL1cIjogW1wicmV2ZXJzZVwiLCBcInJvdGF0ZVwiXSxcbiAgICBcIuKKllwiOiBbXCJheGlzMVJldmVyc2VcIiwgXCJheGlzMVJvdGF0ZVwiXSxcbiAgICBcIuKNiVwiOiBbXCJ0cmFuc3Bvc2VcIiwgbnVsbF0sXG4gICAgXCLihpFcIjogW1wiZmlyc3RcIiwgXCJ0YWtlXCJdLFxuICAgIFwi4oaTXCI6IFtudWxsLCBcImRyb3BcIl0sXG4gICAgXCLiioJcIjogW1wiZW5jbG9zZVwiLCBcInBhcnRpdGlvbldpdGhBeGlzXCJdLFxuICAgIFwi4oqDXCI6IFtcImRpY2xvc2VcIiwgXCJwaWNrXCJdLFxuICAgIFwi4oy3XCI6IFtudWxsLCBcImluZGV4XCJdLFxuICAgIFwi4o2LXCI6IFtcImdyYWRlVXBcIiwgbnVsbF0sXG4gICAgXCLijZJcIjogW1wiZ3JhZGVEb3duXCIsIG51bGxdLFxuICAgIFwi4oqkXCI6IFtcImVuY29kZVwiLCBudWxsXSxcbiAgICBcIuKKpVwiOiBbXCJkZWNvZGVcIiwgbnVsbF0sXG4gICAgXCLijZVcIjogW1wiZm9ybWF0XCIsIFwiZm9ybWF0QnlFeGFtcGxlXCJdLFxuICAgIFwi4o2OXCI6IFtcImV4ZWN1dGVcIiwgbnVsbF0sXG4gICAgXCLiiqNcIjogW1wic3RvcFwiLCBcImxlZnRcIl0sXG4gICAgXCLiiqJcIjogW1wicGFzc1wiLCBcInJpZ2h0XCJdXG4gIH07XG5cbiAgdmFyIGlzT3BlcmF0b3IgPSAvW1xcLlxcL+KMv+KNgMKo4o2jXS87XG4gIHZhciBpc05pbGFkaWMgPSAv4o2sLztcbiAgdmFyIGlzRnVuY3Rpb24gPSAvW1xcK+KIksOXw7fijIjijIriiKPijbNcXD/ii4bijZ/il4sh4oy5POKJpD0+4oml4omg4omh4omi4oiI4o234oiq4oip4oi84oio4oin4o2x4o2y4o20LOKNquKMveKKluKNieKGkeKGk+KKguKKg+KMt+KNi+KNkuKKpOKKpeKNleKNjuKKo+KKol0vO1xuICB2YXIgaXNBcnJvdyA9IC/ihpAvO1xuICB2YXIgaXNDb21tZW50ID0gL1vijZ0jXS4qJC87XG5cbiAgdmFyIHN0cmluZ0VhdGVyID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBwcmV2O1xuICAgIHByZXYgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgICAgcHJldiA9IGM7XG4gICAgICBpZiAoYyA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4gcHJldiA9PT0gXCJcXFxcXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJldjogZmFsc2UsXG4gICAgICAgIGZ1bmM6IGZhbHNlLFxuICAgICAgICBvcDogZmFsc2UsXG4gICAgICAgIHN0cmluZzogZmFsc2UsXG4gICAgICAgIGVzY2FwZTogZmFsc2VcbiAgICAgIH07XG4gICAgfSxcbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIGNoLCBmdW5jTmFtZTtcbiAgICAgIGlmIChzdHJlYW0uZWF0U3BhY2UoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNoID0gc3RyZWFtLm5leHQoKTtcbiAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gXCInXCIpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKHN0cmluZ0VhdGVyKGNoKSk7XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHN0YXRlLnByZXYgPSB0cnVlO1xuICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICAgIH1cbiAgICAgIGlmICgvW1xcW3tcXChdLy50ZXN0KGNoKSkge1xuICAgICAgICBzdGF0ZS5wcmV2ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKC9bXFxdfVxcKV0vLnRlc3QoY2gpKSB7XG4gICAgICAgIHN0YXRlLnByZXYgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpc05pbGFkaWMudGVzdChjaCkpIHtcbiAgICAgICAgc3RhdGUucHJldiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gXCJuaWxhZGljXCI7XG4gICAgICB9XG4gICAgICBpZiAoL1vCr1xcZF0vLnRlc3QoY2gpKSB7XG4gICAgICAgIGlmIChzdGF0ZS5mdW5jKSB7XG4gICAgICAgICAgc3RhdGUuZnVuYyA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLnByZXYgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5wcmV2ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1tcXHdcXC5dLyk7XG4gICAgICAgIHJldHVybiBcIm51bWJlclwiO1xuICAgICAgfVxuICAgICAgaWYgKGlzT3BlcmF0b3IudGVzdChjaCkpIHtcbiAgICAgICAgcmV0dXJuIFwib3BlcmF0b3IgYXBsLVwiICsgYnVpbHRJbk9wc1tjaF07XG4gICAgICB9XG4gICAgICBpZiAoaXNBcnJvdy50ZXN0KGNoKSkge1xuICAgICAgICByZXR1cm4gXCJhcGwtYXJyb3dcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uLnRlc3QoY2gpKSB7XG4gICAgICAgIGZ1bmNOYW1lID0gXCJhcGwtXCI7XG4gICAgICAgIGlmIChidWlsdEluRnVuY3NbY2hdICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoc3RhdGUucHJldikge1xuICAgICAgICAgICAgZnVuY05hbWUgKz0gYnVpbHRJbkZ1bmNzW2NoXVsxXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuY05hbWUgKz0gYnVpbHRJbkZ1bmNzW2NoXVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZnVuYyA9IHRydWU7XG4gICAgICAgIHN0YXRlLnByZXYgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb24gXCIgKyBmdW5jTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0NvbW1lbnQudGVzdChjaCkpIHtcbiAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgICB9XG4gICAgICBpZiAoY2ggPT09IFwi4oiYXCIgJiYgc3RyZWFtLnBlZWsoKSA9PT0gXCIuXCIpIHtcbiAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb24gam90LWRvdFwiO1xuICAgICAgfVxuICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3XFwkX10vKTtcbiAgICAgIHN0YXRlLnByZXYgPSB0cnVlO1xuICAgICAgcmV0dXJuIFwia2V5d29yZFwiO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5Db2RlTWlycm9yLmRlZmluZU1JTUUoXCJ0ZXh0L2FwbFwiLCBcImFwbFwiKTtcblxufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImJ1aWx0SW5PcHMiLCJidWlsdEluRnVuY3MiLCJpc09wZXJhdG9yIiwiaXNOaWxhZGljIiwiaXNGdW5jdGlvbiIsImlzQXJyb3ciLCJpc0NvbW1lbnQiLCJzdHJpbmdFYXRlciIsInR5cGUiLCJwcmV2IiwiYyIsInN0YXJ0U3RhdGUiLCJmdW5jIiwib3AiLCJzdHJpbmciLCJlc2NhcGUiLCJ0b2tlbiIsInN0cmVhbSIsInN0YXRlIiwiY2giLCJmdW5jTmFtZSIsImVhdFNwYWNlIiwibmV4dCIsImVhdFdoaWxlIiwidGVzdCIsInNraXBUb0VuZCIsInBlZWsiLCJkZWZpbmVNSU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/apl/apl.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/apl/apl.js");
/******/ 	
/******/ })()
;