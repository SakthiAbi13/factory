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

/***/ "./resources/assets/vendor/libs/codemirror/mode/elm/elm.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/elm/elm.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: http://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"elm\", function () {\n    function switchState(source, setState, f) {\n      setState(f);\n      return f(source, setState);\n    }\n\n    var lowerRE = /[a-z]/;\n    var upperRE = /[A-Z]/;\n    var innerRE = /[a-zA-Z0-9_]/;\n    var digitRE = /[0-9]/;\n    var hexRE = /[0-9A-Fa-f]/;\n    var symbolRE = /[-&*+.\\\\/<>=?^|:]/;\n    var specialRE = /[(),[\\]{}]/;\n    var spacesRE = /[ \\v\\f]/; // newlines are handled in tokenizer\n\n    function normal() {\n      return function (source, setState) {\n        if (source.eatWhile(spacesRE)) {\n          return null;\n        }\n\n        var _char = source.next();\n\n        if (specialRE.test(_char)) {\n          return _char === '{' && source.eat('-') ? switchState(source, setState, chompMultiComment(1)) : _char === '[' && source.match('glsl|') ? switchState(source, setState, chompGlsl) : 'builtin';\n        }\n\n        if (_char === '\\'') {\n          return switchState(source, setState, chompChar);\n        }\n\n        if (_char === '\"') {\n          return source.eat('\"') ? source.eat('\"') ? switchState(source, setState, chompMultiString) : 'string' : switchState(source, setState, chompSingleString);\n        }\n\n        if (upperRE.test(_char)) {\n          source.eatWhile(innerRE);\n          return 'variable-2';\n        }\n\n        if (lowerRE.test(_char)) {\n          var isDef = source.pos === 1;\n          source.eatWhile(innerRE);\n          return isDef ? \"def\" : \"variable\";\n        }\n\n        if (digitRE.test(_char)) {\n          if (_char === '0') {\n            if (source.eat(/[xX]/)) {\n              source.eatWhile(hexRE); // should require at least 1\n\n              return \"number\";\n            }\n          } else {\n            source.eatWhile(digitRE);\n          }\n\n          if (source.eat('.')) {\n            source.eatWhile(digitRE); // should require at least 1\n          }\n\n          if (source.eat(/[eE]/)) {\n            source.eat(/[-+]/);\n            source.eatWhile(digitRE); // should require at least 1\n          }\n\n          return \"number\";\n        }\n\n        if (symbolRE.test(_char)) {\n          if (_char === '-' && source.eat('-')) {\n            source.skipToEnd();\n            return \"comment\";\n          }\n\n          source.eatWhile(symbolRE);\n          return \"keyword\";\n        }\n\n        if (_char === '_') {\n          return \"keyword\";\n        }\n\n        return \"error\";\n      };\n    }\n\n    function chompMultiComment(nest) {\n      if (nest == 0) {\n        return normal();\n      }\n\n      return function (source, setState) {\n        while (!source.eol()) {\n          var _char2 = source.next();\n\n          if (_char2 == '{' && source.eat('-')) {\n            ++nest;\n          } else if (_char2 == '-' && source.eat('}')) {\n            --nest;\n\n            if (nest === 0) {\n              setState(normal());\n              return 'comment';\n            }\n          }\n        }\n\n        setState(chompMultiComment(nest));\n        return 'comment';\n      };\n    }\n\n    function chompMultiString(source, setState) {\n      while (!source.eol()) {\n        var _char3 = source.next();\n\n        if (_char3 === '\"' && source.eat('\"') && source.eat('\"')) {\n          setState(normal());\n          return 'string';\n        }\n      }\n\n      return 'string';\n    }\n\n    function chompSingleString(source, setState) {\n      while (source.skipTo('\\\\\"')) {\n        source.next();\n        source.next();\n      }\n\n      if (source.skipTo('\"')) {\n        source.next();\n        setState(normal());\n        return 'string';\n      }\n\n      source.skipToEnd();\n      setState(normal());\n      return 'error';\n    }\n\n    function chompChar(source, setState) {\n      while (source.skipTo(\"\\\\'\")) {\n        source.next();\n        source.next();\n      }\n\n      if (source.skipTo(\"'\")) {\n        source.next();\n        setState(normal());\n        return 'string';\n      }\n\n      source.skipToEnd();\n      setState(normal());\n      return 'error';\n    }\n\n    function chompGlsl(source, setState) {\n      while (!source.eol()) {\n        var _char4 = source.next();\n\n        if (_char4 === '|' && source.eat(']')) {\n          setState(normal());\n          return 'string';\n        }\n      }\n\n      return 'string';\n    }\n\n    var wellKnownWords = {\n      \"case\": 1,\n      of: 1,\n      as: 1,\n      \"if\": 1,\n      then: 1,\n      \"else\": 1,\n      \"let\": 1,\n      \"in\": 1,\n      type: 1,\n      alias: 1,\n      module: 1,\n      where: 1,\n      \"import\": 1,\n      exposing: 1,\n      port: 1\n    };\n    return {\n      startState: function startState() {\n        return {\n          f: normal()\n        };\n      },\n      copyState: function copyState(s) {\n        return {\n          f: s.f\n        };\n      },\n      token: function token(stream, state) {\n        var type = state.f(stream, function (s) {\n          state.f = s;\n        });\n        var word = stream.current();\n        return wellKnownWords.hasOwnProperty(word) ? 'keyword' : type;\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-elm\", \"elm\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9lbG0vZWxtLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0Qjs7RUFFQUEsVUFBVSxDQUFDQyxVQUFYLENBQXNCLEtBQXRCLEVBQTZCLFlBQVc7SUFFdEMsU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkJDLFFBQTdCLEVBQXVDQyxDQUF2QyxFQUNBO01BQ0VELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFSO01BQ0EsT0FBT0EsQ0FBQyxDQUFDRixNQUFELEVBQVNDLFFBQVQsQ0FBUjtJQUNEOztJQUVELElBQUlFLE9BQU8sR0FBRyxPQUFkO0lBQ0EsSUFBSUMsT0FBTyxHQUFHLE9BQWQ7SUFDQSxJQUFJQyxPQUFPLEdBQUcsY0FBZDtJQUVBLElBQUlDLE9BQU8sR0FBRyxPQUFkO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLGFBQVo7SUFDQSxJQUFJQyxRQUFRLEdBQUcsbUJBQWY7SUFDQSxJQUFJQyxTQUFTLEdBQUcsWUFBaEI7SUFDQSxJQUFJQyxRQUFRLEdBQUcsU0FBZixDQWhCc0MsQ0FnQlo7O0lBRTFCLFNBQVNDLE1BQVQsR0FDQTtNQUNFLE9BQU8sVUFBU1gsTUFBVCxFQUFpQkMsUUFBakIsRUFDUDtRQUNFLElBQUlELE1BQU0sQ0FBQ1ksUUFBUCxDQUFnQkYs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LElBQTNEO01BQ0Q7SUFSSSxDQUFQO0VBV0QsQ0FsT0Q7RUFvT0FwQyxVQUFVLENBQUNrRCxVQUFYLENBQXNCLFlBQXRCLEVBQW9DLEtBQXBDO0FBQ0QsQ0EvT0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9lbG0vZWxtLmpzPzg1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJlbG1cIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBmKVxuICAgIHtcbiAgICAgIHNldFN0YXRlKGYpO1xuICAgICAgcmV0dXJuIGYoc291cmNlLCBzZXRTdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFyIGxvd2VyUkUgPSAvW2Etel0vO1xuICAgIHZhciB1cHBlclJFID0gL1tBLVpdLztcbiAgICB2YXIgaW5uZXJSRSA9IC9bYS16QS1aMC05X10vO1xuXG4gICAgdmFyIGRpZ2l0UkUgPSAvWzAtOV0vO1xuICAgIHZhciBoZXhSRSA9IC9bMC05QS1GYS1mXS87XG4gICAgdmFyIHN5bWJvbFJFID0gL1stJiorLlxcXFwvPD49P158Ol0vO1xuICAgIHZhciBzcGVjaWFsUkUgPSAvWygpLFtcXF17fV0vO1xuICAgIHZhciBzcGFjZXNSRSA9IC9bIFxcdlxcZl0vOyAvLyBuZXdsaW5lcyBhcmUgaGFuZGxlZCBpbiB0b2tlbml6ZXJcblxuICAgIGZ1bmN0aW9uIG5vcm1hbCgpXG4gICAge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZSwgc2V0U3RhdGUpXG4gICAgICB7XG4gICAgICAgIGlmIChzb3VyY2UuZWF0V2hpbGUoc3BhY2VzUkUpKVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHNvdXJjZS5uZXh0KCk7XG5cbiAgICAgICAgaWYgKHNwZWNpYWxSRS50ZXN0KGNoYXIpKVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIChjaGFyID09PSAneycgJiYgc291cmNlLmVhdCgnLScpKVxuICAgICAgICAgICAgPyBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBjaG9tcE11bHRpQ29tbWVudCgxKSlcbiAgICAgICAgICAgIDogKGNoYXIgPT09ICdbJyAmJiBzb3VyY2UubWF0Y2goJ2dsc2x8JykpXG4gICAgICAgICAgICAgICAgPyBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBjaG9tcEdsc2wpXG4gICAgICAgICAgICAgICAgOiAnYnVpbHRpbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ1xcJycpXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gc3dpdGNoU3RhdGUoc291cmNlLCBzZXRTdGF0ZSwgY2hvbXBDaGFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAnXCInKVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIHNvdXJjZS5lYXQoJ1wiJylcbiAgICAgICAgICAgID8gc291cmNlLmVhdCgnXCInKVxuICAgICAgICAgICAgICAgID8gc3dpdGNoU3RhdGUoc291cmNlLCBzZXRTdGF0ZSwgY2hvbXBNdWx0aVN0cmluZylcbiAgICAgICAgICAgICAgICA6ICdzdHJpbmcnXG4gICAgICAgICAgICA6IHN3aXRjaFN0YXRlKHNvdXJjZSwgc2V0U3RhdGUsIGNob21wU2luZ2xlU3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cHBlclJFLnRlc3QoY2hhcikpXG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2UuZWF0V2hpbGUoaW5uZXJSRSk7XG4gICAgICAgICAgcmV0dXJuICd2YXJpYWJsZS0yJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb3dlclJFLnRlc3QoY2hhcikpXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgaXNEZWYgPSBzb3VyY2UucG9zID09PSAxO1xuICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShpbm5lclJFKTtcbiAgICAgICAgICByZXR1cm4gaXNEZWYgPyBcImRlZlwiIDogXCJ2YXJpYWJsZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZ2l0UkUudGVzdChjaGFyKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmIChjaGFyID09PSAnMCcpXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5lYXQoL1t4WF0vKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc291cmNlLmVhdFdoaWxlKGhleFJFKTsgLy8gc2hvdWxkIHJlcXVpcmUgYXQgbGVhc3QgMVxuICAgICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShkaWdpdFJFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvdXJjZS5lYXQoJy4nKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2UuZWF0V2hpbGUoZGlnaXRSRSk7IC8vIHNob3VsZCByZXF1aXJlIGF0IGxlYXN0IDFcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvdXJjZS5lYXQoL1tlRV0vKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzb3VyY2UuZWF0KC9bLStdLyk7XG4gICAgICAgICAgICBzb3VyY2UuZWF0V2hpbGUoZGlnaXRSRSk7IC8vIHNob3VsZCByZXF1aXJlIGF0IGxlYXN0IDFcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ltYm9sUkUudGVzdChjaGFyKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmIChjaGFyID09PSAnLScgJiYgc291cmNlLmVhdCgnLScpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNvdXJjZS5za2lwVG9FbmQoKTtcbiAgICAgICAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc291cmNlLmVhdFdoaWxlKHN5bWJvbFJFKTtcbiAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ18nKVxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIFwia2V5d29yZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9tcE11bHRpQ29tbWVudChuZXN0KVxuICAgIHtcbiAgICAgIGlmIChuZXN0ID09IDApXG4gICAgICB7XG4gICAgICAgIHJldHVybiBub3JtYWwoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2UsIHNldFN0YXRlKVxuICAgICAge1xuICAgICAgICB3aGlsZSAoIXNvdXJjZS5lb2woKSlcbiAgICAgICAge1xuICAgICAgICAgIHZhciBjaGFyID0gc291cmNlLm5leHQoKTtcbiAgICAgICAgICBpZiAoY2hhciA9PSAneycgJiYgc291cmNlLmVhdCgnLScpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICsrbmVzdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnLScgJiYgc291cmNlLmVhdCgnfScpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC0tbmVzdDtcbiAgICAgICAgICAgIGlmIChuZXN0ID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICAgICAgICAgIHJldHVybiAnY29tbWVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFN0YXRlKGNob21wTXVsdGlDb21tZW50KG5lc3QpKTtcbiAgICAgICAgcmV0dXJuICdjb21tZW50JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9tcE11bHRpU3RyaW5nKHNvdXJjZSwgc2V0U3RhdGUpXG4gICAge1xuICAgICAgd2hpbGUgKCFzb3VyY2UuZW9sKCkpXG4gICAgICB7XG4gICAgICAgIHZhciBjaGFyID0gc291cmNlLm5leHQoKTtcbiAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgc291cmNlLmVhdCgnXCInKSAmJiBzb3VyY2UuZWF0KCdcIicpKVxuICAgICAgICB7XG4gICAgICAgICAgc2V0U3RhdGUobm9ybWFsKCkpO1xuICAgICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob21wU2luZ2xlU3RyaW5nKHNvdXJjZSwgc2V0U3RhdGUpXG4gICAge1xuICAgICAgd2hpbGUgKHNvdXJjZS5za2lwVG8oJ1xcXFxcIicpKSB7IHNvdXJjZS5uZXh0KCk7IHNvdXJjZS5uZXh0KCk7IH1cbiAgICAgIGlmIChzb3VyY2Uuc2tpcFRvKCdcIicpKVxuICAgICAge1xuICAgICAgICBzb3VyY2UubmV4dCgpO1xuICAgICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICAgIH1cbiAgICAgIHNvdXJjZS5za2lwVG9FbmQoKTtcbiAgICAgIHNldFN0YXRlKG5vcm1hbCgpKTtcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob21wQ2hhcihzb3VyY2UsIHNldFN0YXRlKVxuICAgIHtcbiAgICAgIHdoaWxlIChzb3VyY2Uuc2tpcFRvKFwiXFxcXCdcIikpIHsgc291cmNlLm5leHQoKTsgc291cmNlLm5leHQoKTsgfVxuICAgICAgaWYgKHNvdXJjZS5za2lwVG8oXCInXCIpKVxuICAgICAge1xuICAgICAgICBzb3VyY2UubmV4dCgpO1xuICAgICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICAgIH1cbiAgICAgIHNvdXJjZS5za2lwVG9FbmQoKTtcbiAgICAgIHNldFN0YXRlKG5vcm1hbCgpKTtcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob21wR2xzbChzb3VyY2UsIHNldFN0YXRlKVxuICAgIHtcbiAgICAgIHdoaWxlICghc291cmNlLmVvbCgpKVxuICAgICAge1xuICAgICAgICB2YXIgY2hhciA9IHNvdXJjZS5uZXh0KCk7XG4gICAgICAgIGlmIChjaGFyID09PSAnfCcgJiYgc291cmNlLmVhdCgnXScpKVxuICAgICAgICB7XG4gICAgICAgICAgc2V0U3RhdGUobm9ybWFsKCkpO1xuICAgICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgIH1cblxuICAgIHZhciB3ZWxsS25vd25Xb3JkcyA9IHtcbiAgICAgIGNhc2U6IDEsXG4gICAgICBvZjogMSxcbiAgICAgIGFzOiAxLFxuICAgICAgaWY6IDEsXG4gICAgICB0aGVuOiAxLFxuICAgICAgZWxzZTogMSxcbiAgICAgIGxldDogMSxcbiAgICAgIGluOiAxLFxuICAgICAgdHlwZTogMSxcbiAgICAgIGFsaWFzOiAxLFxuICAgICAgbW9kdWxlOiAxLFxuICAgICAgd2hlcmU6IDEsXG4gICAgICBpbXBvcnQ6IDEsXG4gICAgICBleHBvc2luZzogMSxcbiAgICAgIHBvcnQ6IDFcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uICgpICB7IHJldHVybiB7IGY6IG5vcm1hbCgpIH07IH0sXG4gICAgICBjb3B5U3RhdGU6ICBmdW5jdGlvbiAocykgeyByZXR1cm4geyBmOiBzLmYgfTsgfSxcblxuICAgICAgdG9rZW46IGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBzdGF0ZS5mKHN0cmVhbSwgZnVuY3Rpb24ocykgeyBzdGF0ZS5mID0gczsgfSk7XG4gICAgICAgIHZhciB3b3JkID0gc3RyZWFtLmN1cnJlbnQoKTtcbiAgICAgICAgcmV0dXJuICh3ZWxsS25vd25Xb3Jkcy5oYXNPd25Qcm9wZXJ0eSh3b3JkKSkgPyAna2V5d29yZCcgOiB0eXBlO1xuICAgICAgfVxuICAgIH07XG5cbiAgfSk7XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVNSU1FKFwidGV4dC94LWVsbVwiLCBcImVsbVwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJzd2l0Y2hTdGF0ZSIsInNvdXJjZSIsInNldFN0YXRlIiwiZiIsImxvd2VyUkUiLCJ1cHBlclJFIiwiaW5uZXJSRSIsImRpZ2l0UkUiLCJoZXhSRSIsInN5bWJvbFJFIiwic3BlY2lhbFJFIiwic3BhY2VzUkUiLCJub3JtYWwiLCJlYXRXaGlsZSIsImNoYXIiLCJuZXh0IiwidGVzdCIsImVhdCIsImNob21wTXVsdGlDb21tZW50IiwibWF0Y2giLCJjaG9tcEdsc2wiLCJjaG9tcENoYXIiLCJjaG9tcE11bHRpU3RyaW5nIiwiY2hvbXBTaW5nbGVTdHJpbmciLCJpc0RlZiIsInBvcyIsInNraXBUb0VuZCIsIm5lc3QiLCJlb2wiLCJza2lwVG8iLCJ3ZWxsS25vd25Xb3JkcyIsIm9mIiwiYXMiLCJ0aGVuIiwidHlwZSIsImFsaWFzIiwid2hlcmUiLCJleHBvc2luZyIsInBvcnQiLCJzdGFydFN0YXRlIiwiY29weVN0YXRlIiwicyIsInRva2VuIiwic3RyZWFtIiwic3RhdGUiLCJ3b3JkIiwiY3VycmVudCIsImhhc093blByb3BlcnR5IiwiZGVmaW5lTUlNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/elm/elm.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/elm/elm.js");
/******/ 	
/******/ })()
;