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

/***/ "./resources/assets/vendor/libs/codemirror/mode/modelica/modelica.js":
/*!***************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/modelica/modelica.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// Modelica support for CodeMirror, copyright (c) by Lennart Ochel\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"modelica\", function (config, parserConfig) {\n    var indentUnit = config.indentUnit;\n    var keywords = parserConfig.keywords || {};\n    var builtin = parserConfig.builtin || {};\n    var atoms = parserConfig.atoms || {};\n    var isSingleOperatorChar = /[;=\\(:\\),{}.*<>+\\-\\/^\\[\\]]/;\n    var isDoubleOperatorChar = /(:=|<=|>=|==|<>|\\.\\+|\\.\\-|\\.\\*|\\.\\/|\\.\\^)/;\n    var isDigit = /[0-9]/;\n    var isNonDigit = /[_a-zA-Z]/;\n\n    function tokenLineComment(stream, state) {\n      stream.skipToEnd();\n      state.tokenize = null;\n      return \"comment\";\n    }\n\n    function tokenBlockComment(stream, state) {\n      var maybeEnd = false,\n          ch;\n\n      while (ch = stream.next()) {\n        if (maybeEnd && ch == \"/\") {\n          state.tokenize = null;\n          break;\n        }\n\n        maybeEnd = ch == \"*\";\n      }\n\n      return \"comment\";\n    }\n\n    function tokenString(stream, state) {\n      var escaped = false,\n          ch;\n\n      while ((ch = stream.next()) != null) {\n        if (ch == '\"' && !escaped) {\n          state.tokenize = null;\n          state.sol = false;\n          break;\n        }\n\n        escaped = !escaped && ch == \"\\\\\";\n      }\n\n      return \"string\";\n    }\n\n    function tokenIdent(stream, state) {\n      stream.eatWhile(isDigit);\n\n      while (stream.eat(isDigit) || stream.eat(isNonDigit)) {}\n\n      var cur = stream.current();\n      if (state.sol && (cur == \"package\" || cur == \"model\" || cur == \"when\" || cur == \"connector\")) state.level++;else if (state.sol && cur == \"end\" && state.level > 0) state.level--;\n      state.tokenize = null;\n      state.sol = false;\n      if (keywords.propertyIsEnumerable(cur)) return \"keyword\";else if (builtin.propertyIsEnumerable(cur)) return \"builtin\";else if (atoms.propertyIsEnumerable(cur)) return \"atom\";else return \"variable\";\n    }\n\n    function tokenQIdent(stream, state) {\n      while (stream.eat(/[^']/)) {}\n\n      state.tokenize = null;\n      state.sol = false;\n      if (stream.eat(\"'\")) return \"variable\";else return \"error\";\n    }\n\n    function tokenUnsignedNumber(stream, state) {\n      stream.eatWhile(isDigit);\n\n      if (stream.eat('.')) {\n        stream.eatWhile(isDigit);\n      }\n\n      if (stream.eat('e') || stream.eat('E')) {\n        if (!stream.eat('-')) stream.eat('+');\n        stream.eatWhile(isDigit);\n      }\n\n      state.tokenize = null;\n      state.sol = false;\n      return \"number\";\n    } // Interface\n\n\n    return {\n      startState: function startState() {\n        return {\n          tokenize: null,\n          level: 0,\n          sol: true\n        };\n      },\n      token: function token(stream, state) {\n        if (state.tokenize != null) {\n          return state.tokenize(stream, state);\n        }\n\n        if (stream.sol()) {\n          state.sol = true;\n        } // WHITESPACE\n\n\n        if (stream.eatSpace()) {\n          state.tokenize = null;\n          return null;\n        }\n\n        var ch = stream.next(); // LINECOMMENT\n\n        if (ch == '/' && stream.eat('/')) {\n          state.tokenize = tokenLineComment;\n        } // BLOCKCOMMENT\n        else if (ch == '/' && stream.eat('*')) {\n          state.tokenize = tokenBlockComment;\n        } // TWO SYMBOL TOKENS\n        else if (isDoubleOperatorChar.test(ch + stream.peek())) {\n          stream.next();\n          state.tokenize = null;\n          return \"operator\";\n        } // SINGLE SYMBOL TOKENS\n        else if (isSingleOperatorChar.test(ch)) {\n          state.tokenize = null;\n          return \"operator\";\n        } // IDENT\n        else if (isNonDigit.test(ch)) {\n          state.tokenize = tokenIdent;\n        } // Q-IDENT\n        else if (ch == \"'\" && stream.peek() && stream.peek() != \"'\") {\n          state.tokenize = tokenQIdent;\n        } // STRING\n        else if (ch == '\"') {\n          state.tokenize = tokenString;\n        } // UNSIGNED_NUMBER\n        else if (isDigit.test(ch)) {\n          state.tokenize = tokenUnsignedNumber;\n        } // ERROR\n        else {\n          state.tokenize = null;\n          return \"error\";\n        }\n\n        return state.tokenize(stream, state);\n      },\n      indent: function indent(state, textAfter) {\n        if (state.tokenize != null) return CodeMirror.Pass;\n        var level = state.level;\n        if (/(algorithm)/.test(textAfter)) level--;\n        if (/(equation)/.test(textAfter)) level--;\n        if (/(initial algorithm)/.test(textAfter)) level--;\n        if (/(initial equation)/.test(textAfter)) level--;\n        if (/(end)/.test(textAfter)) level--;\n        if (level > 0) return indentUnit * level;else return 0;\n      },\n      blockCommentStart: \"/*\",\n      blockCommentEnd: \"*/\",\n      lineComment: \"//\"\n    };\n  });\n\n  function words(str) {\n    var obj = {},\n        words = str.split(\" \");\n\n    for (var i = 0; i < words.length; ++i) {\n      obj[words[i]] = true;\n    }\n\n    return obj;\n  }\n\n  var modelicaKeywords = \"algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within\";\n  var modelicaBuiltin = \"abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh\";\n  var modelicaAtoms = \"Real Boolean Integer String\";\n\n  function def(mimes, mode) {\n    if (typeof mimes == \"string\") mimes = [mimes];\n    var words = [];\n\n    function add(obj) {\n      if (obj) for (var prop in obj) {\n        if (obj.hasOwnProperty(prop)) words.push(prop);\n      }\n    }\n\n    add(mode.keywords);\n    add(mode.builtin);\n    add(mode.atoms);\n\n    if (words.length) {\n      mode.helperType = mimes[0];\n      CodeMirror.registerHelper(\"hintWords\", mimes[0], words);\n    }\n\n    for (var i = 0; i < mimes.length; ++i) {\n      CodeMirror.defineMIME(mimes[i], mode);\n    }\n  }\n\n  def([\"text/x-modelica\"], {\n    name: \"modelica\",\n    keywords: words(modelicaKeywords),\n    builtin: words(modelicaBuiltin),\n    atoms: words(modelicaAtoms)\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9tb2RlbGljYS9tb2RlbGljYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUE7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBU0MsVUFBU00sVUFBVCxFQUFxQjtFQUNwQjs7RUFFQUEsVUFBVSxDQUFDQyxVQUFYLENBQXNCLFVBQXRCLEVBQWtDLFVBQVNDLE1BQVQsRUFBaUJDLFlBQWpCLEVBQStCO0lBRS9ELElBQUlDLFVBQVUsR0FBR0YsTUFBTSxDQUFDRSxVQUF4QjtJQUNBLElBQUlDLFFBQVEsR0FBR0YsWUFBWSxDQUFDRSxRQUFiLElBQXlCLEVBQXhDO0lBQ0EsSUFBSUMsT0FBTyxHQUFHSCxZQUFZLENBQUNHLE9BQWIsSUFBd0IsRUFBdEM7SUFDQSxJQUFJQyxLQUFLLEdBQUdKLFlBQVksQ0FBQ0ksS0FBYixJQUFzQixFQUFsQztJQUVBLElBQUlDLG9CQUFvQixHQUFHLDRCQUEzQjtJQUNBLElBQUlDLG9CQUFvQixHQUFHLDJDQUEzQjtJQUNBLElBQUlDLE9BQU8sR0FBRyxPQUFkO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLFdBQWpCOztJQUVBLFNBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7TUFDdkNELE1BQU0sQ0FBQ0UsU0FBUDtNQUNBRCxLQUFLLENBQUNFLFFBQU4sR0FBaUIsSUFBakI7TUFDQSxP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NUMsRUFBaURWLEtBQWpEO0lBQ0Q7O0lBRUQsS0FBSyxJQUFJSSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNNLEtBQUssQ0FBQ0wsTUFBdEIsRUFBOEIsRUFBRUQsQ0FBaEM7TUFDRWhELFVBQVUsQ0FBQzhELFVBQVgsQ0FBc0JSLEtBQUssQ0FBQ04sQ0FBRCxDQUEzQixFQUFnQ08sSUFBaEM7SUFERjtFQUVEOztFQUVERixHQUFHLENBQUMsQ0FBQyxpQkFBRCxDQUFELEVBQXNCO0lBQ3ZCVSxJQUFJLEVBQUUsVUFEaUI7SUFFdkIxRCxRQUFRLEVBQUV1QyxLQUFLLENBQUNNLGdCQUFELENBRlE7SUFHdkI1QyxPQUFPLEVBQUVzQyxLQUFLLENBQUNPLGVBQUQsQ0FIUztJQUl2QjVDLEtBQUssRUFBRXFDLEtBQUssQ0FBQ1EsYUFBRDtFQUpXLENBQXRCLENBQUg7QUFNRCxDQS9PRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9tb2RlL21vZGVsaWNhL21vZGVsaWNhLmpzPzhjZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLy8gTW9kZWxpY2Egc3VwcG9ydCBmb3IgQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBMZW5uYXJ0IE9jaGVsXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KVxuXG4oZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJtb2RlbGljYVwiLCBmdW5jdGlvbihjb25maWcsIHBhcnNlckNvbmZpZykge1xuXG4gICAgdmFyIGluZGVudFVuaXQgPSBjb25maWcuaW5kZW50VW5pdDtcbiAgICB2YXIga2V5d29yZHMgPSBwYXJzZXJDb25maWcua2V5d29yZHMgfHwge307XG4gICAgdmFyIGJ1aWx0aW4gPSBwYXJzZXJDb25maWcuYnVpbHRpbiB8fCB7fTtcbiAgICB2YXIgYXRvbXMgPSBwYXJzZXJDb25maWcuYXRvbXMgfHwge307XG5cbiAgICB2YXIgaXNTaW5nbGVPcGVyYXRvckNoYXIgPSAvWzs9XFwoOlxcKSx7fS4qPD4rXFwtXFwvXlxcW1xcXV0vO1xuICAgIHZhciBpc0RvdWJsZU9wZXJhdG9yQ2hhciA9IC8oOj18PD18Pj18PT18PD58XFwuXFwrfFxcLlxcLXxcXC5cXCp8XFwuXFwvfFxcLlxcXikvO1xuICAgIHZhciBpc0RpZ2l0ID0gL1swLTldLztcbiAgICB2YXIgaXNOb25EaWdpdCA9IC9bX2EtekEtWl0vO1xuXG4gICAgZnVuY3Rpb24gdG9rZW5MaW5lQ29tbWVudChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICBzdGF0ZS50b2tlbml6ZSA9IG51bGw7XG4gICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9rZW5CbG9ja0NvbW1lbnQoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIG1heWJlRW5kID0gZmFsc2UsIGNoO1xuICAgICAgd2hpbGUgKGNoID0gc3RyZWFtLm5leHQoKSkge1xuICAgICAgICBpZiAobWF5YmVFbmQgJiYgY2ggPT0gXCIvXCIpIHtcbiAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVFbmQgPSAoY2ggPT0gXCIqXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuU3RyaW5nKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHZhciBlc2NhcGVkID0gZmFsc2UsIGNoO1xuICAgICAgd2hpbGUgKChjaCA9IHN0cmVhbS5uZXh0KCkpICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGNoID09ICdcIicgJiYgIWVzY2FwZWQpIHtcbiAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IG51bGw7XG4gICAgICAgICAgc3RhdGUuc29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkICYmIGNoID09IFwiXFxcXFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2tlbklkZW50KHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHN0cmVhbS5lYXRXaGlsZShpc0RpZ2l0KTtcbiAgICAgIHdoaWxlIChzdHJlYW0uZWF0KGlzRGlnaXQpIHx8IHN0cmVhbS5lYXQoaXNOb25EaWdpdCkpIHsgfVxuXG5cbiAgICAgIHZhciBjdXIgPSBzdHJlYW0uY3VycmVudCgpO1xuXG4gICAgICBpZihzdGF0ZS5zb2wgJiYgKGN1ciA9PSBcInBhY2thZ2VcIiB8fCBjdXIgPT0gXCJtb2RlbFwiIHx8IGN1ciA9PSBcIndoZW5cIiB8fCBjdXIgPT0gXCJjb25uZWN0b3JcIikpIHN0YXRlLmxldmVsKys7XG4gICAgICBlbHNlIGlmKHN0YXRlLnNvbCAmJiBjdXIgPT0gXCJlbmRcIiAmJiBzdGF0ZS5sZXZlbCA+IDApIHN0YXRlLmxldmVsLS07XG5cbiAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgIHN0YXRlLnNvbCA9IGZhbHNlO1xuXG4gICAgICBpZiAoa2V5d29yZHMucHJvcGVydHlJc0VudW1lcmFibGUoY3VyKSkgcmV0dXJuIFwia2V5d29yZFwiO1xuICAgICAgZWxzZSBpZiAoYnVpbHRpbi5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSByZXR1cm4gXCJidWlsdGluXCI7XG4gICAgICBlbHNlIGlmIChhdG9tcy5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSByZXR1cm4gXCJhdG9tXCI7XG4gICAgICBlbHNlIHJldHVybiBcInZhcmlhYmxlXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9rZW5RSWRlbnQoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgd2hpbGUgKHN0cmVhbS5lYXQoL1teJ10vKSkgeyB9XG5cbiAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgIHN0YXRlLnNvbCA9IGZhbHNlO1xuXG4gICAgICBpZihzdHJlYW0uZWF0KFwiJ1wiKSlcbiAgICAgICAgcmV0dXJuIFwidmFyaWFibGVcIjtcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2tlblVuc2lnbmVkTnVtYmVyKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHN0cmVhbS5lYXRXaGlsZShpc0RpZ2l0KTtcbiAgICAgIGlmIChzdHJlYW0uZWF0KCcuJykpIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKGlzRGlnaXQpO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbS5lYXQoJ2UnKSB8fCBzdHJlYW0uZWF0KCdFJykpIHtcbiAgICAgICAgaWYgKCFzdHJlYW0uZWF0KCctJykpXG4gICAgICAgICAgc3RyZWFtLmVhdCgnKycpO1xuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoaXNEaWdpdCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgIHN0YXRlLnNvbCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJmYWNlXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRva2VuaXplOiBudWxsLFxuICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgIHNvbDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgdG9rZW46IGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgaWYoc3RhdGUudG9rZW5pemUgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS50b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHN0cmVhbS5zb2woKSkge1xuICAgICAgICAgIHN0YXRlLnNvbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXSElURVNQQUNFXG4gICAgICAgIGlmKHN0cmVhbS5lYXRTcGFjZSgpKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoID0gc3RyZWFtLm5leHQoKTtcblxuICAgICAgICAvLyBMSU5FQ09NTUVOVFxuICAgICAgICBpZihjaCA9PSAnLycgJiYgc3RyZWFtLmVhdCgnLycpKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlbkxpbmVDb21tZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIEJMT0NLQ09NTUVOVFxuICAgICAgICBlbHNlIGlmKGNoID09ICcvJyAmJiBzdHJlYW0uZWF0KCcqJykpIHtcbiAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IHRva2VuQmxvY2tDb21tZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIFRXTyBTWU1CT0wgVE9LRU5TXG4gICAgICAgIGVsc2UgaWYoaXNEb3VibGVPcGVyYXRvckNoYXIudGVzdChjaCtzdHJlYW0ucGVlaygpKSkge1xuICAgICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU0lOR0xFIFNZTUJPTCBUT0tFTlNcbiAgICAgICAgZWxzZSBpZihpc1NpbmdsZU9wZXJhdG9yQ2hhci50ZXN0KGNoKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIElERU5UXG4gICAgICAgIGVsc2UgaWYoaXNOb25EaWdpdC50ZXN0KGNoKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gdG9rZW5JZGVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBRLUlERU5UXG4gICAgICAgIGVsc2UgaWYoY2ggPT0gXCInXCIgJiYgc3RyZWFtLnBlZWsoKSAmJiBzdHJlYW0ucGVlaygpICE9IFwiJ1wiKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlblFJZGVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBTVFJJTkdcbiAgICAgICAgZWxzZSBpZihjaCA9PSAnXCInKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlblN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAvLyBVTlNJR05FRF9OVU1CRVJcbiAgICAgICAgZWxzZSBpZihpc0RpZ2l0LnRlc3QoY2gpKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlblVuc2lnbmVkTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVSUk9SXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlLnRva2VuaXplKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgfSxcblxuICAgICAgaW5kZW50OiBmdW5jdGlvbihzdGF0ZSwgdGV4dEFmdGVyKSB7XG4gICAgICAgIGlmIChzdGF0ZS50b2tlbml6ZSAhPSBudWxsKSByZXR1cm4gQ29kZU1pcnJvci5QYXNzO1xuXG4gICAgICAgIHZhciBsZXZlbCA9IHN0YXRlLmxldmVsO1xuICAgICAgICBpZigvKGFsZ29yaXRobSkvLnRlc3QodGV4dEFmdGVyKSkgbGV2ZWwtLTtcbiAgICAgICAgaWYoLyhlcXVhdGlvbikvLnRlc3QodGV4dEFmdGVyKSkgbGV2ZWwtLTtcbiAgICAgICAgaWYoLyhpbml0aWFsIGFsZ29yaXRobSkvLnRlc3QodGV4dEFmdGVyKSkgbGV2ZWwtLTtcbiAgICAgICAgaWYoLyhpbml0aWFsIGVxdWF0aW9uKS8udGVzdCh0ZXh0QWZ0ZXIpKSBsZXZlbC0tO1xuICAgICAgICBpZigvKGVuZCkvLnRlc3QodGV4dEFmdGVyKSkgbGV2ZWwtLTtcblxuICAgICAgICBpZihsZXZlbCA+IDApXG4gICAgICAgICAgcmV0dXJuIGluZGVudFVuaXQqbGV2ZWw7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0sXG5cbiAgICAgIGJsb2NrQ29tbWVudFN0YXJ0OiBcIi8qXCIsXG4gICAgICBibG9ja0NvbW1lbnRFbmQ6IFwiKi9cIixcbiAgICAgIGxpbmVDb21tZW50OiBcIi8vXCJcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiB3b3JkcyhzdHIpIHtcbiAgICB2YXIgb2JqID0ge30sIHdvcmRzID0gc3RyLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8d29yZHMubGVuZ3RoOyArK2kpXG4gICAgICBvYmpbd29yZHNbaV1dID0gdHJ1ZTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIG1vZGVsaWNhS2V5d29yZHMgPSBcImFsZ29yaXRobSBhbmQgYW5ub3RhdGlvbiBhc3NlcnQgYmxvY2sgYnJlYWsgY2xhc3MgY29ubmVjdCBjb25uZWN0b3IgY29uc3RhbnQgY29uc3RyYWluZWRieSBkZXIgZGlzY3JldGUgZWFjaCBlbHNlIGVsc2VpZiBlbHNld2hlbiBlbmNhcHN1bGF0ZWQgZW5kIGVudW1lcmF0aW9uIGVxdWF0aW9uIGV4cGFuZGFibGUgZXh0ZW5kcyBleHRlcm5hbCBmYWxzZSBmaW5hbCBmbG93IGZvciBmdW5jdGlvbiBpZiBpbXBvcnQgaW1wdXJlIGluIGluaXRpYWwgaW5uZXIgaW5wdXQgbG9vcCBtb2RlbCBub3Qgb3BlcmF0b3Igb3Igb3V0ZXIgb3V0cHV0IHBhY2thZ2UgcGFyYW1ldGVyIHBhcnRpYWwgcHJvdGVjdGVkIHB1YmxpYyBwdXJlIHJlY29yZCByZWRlY2xhcmUgcmVwbGFjZWFibGUgcmV0dXJuIHN0cmVhbSB0aGVuIHRydWUgdHlwZSB3aGVuIHdoaWxlIHdpdGhpblwiO1xuICB2YXIgbW9kZWxpY2FCdWlsdGluID0gXCJhYnMgYWNvcyBhY3R1YWxTdHJlYW0gYXNpbiBhdGFuIGF0YW4yIGNhcmRpbmFsaXR5IGNlaWwgY29zIGNvc2ggZGVsYXkgZGl2IGVkZ2UgZXhwIGZsb29yIGdldEluc3RhbmNlTmFtZSBob21vdG9weSBpblN0cmVhbSBpbnRlZ2VyIGxvZyBsb2cxMCBtb2QgcHJlIHJlaW5pdCByZW0gc2VtaUxpbmVhciBzaWduIHNpbiBzaW5oIHNwYXRpYWxEaXN0cmlidXRpb24gc3FydCB0YW4gdGFuaFwiO1xuICB2YXIgbW9kZWxpY2FBdG9tcyA9IFwiUmVhbCBCb29sZWFuIEludGVnZXIgU3RyaW5nXCI7XG5cbiAgZnVuY3Rpb24gZGVmKG1pbWVzLCBtb2RlKSB7XG4gICAgaWYgKHR5cGVvZiBtaW1lcyA9PSBcInN0cmluZ1wiKVxuICAgICAgbWltZXMgPSBbbWltZXNdO1xuXG4gICAgdmFyIHdvcmRzID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGQob2JqKSB7XG4gICAgICBpZiAob2JqKVxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iailcbiAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgd29yZHMucHVzaChwcm9wKTtcbiAgICB9XG5cbiAgICBhZGQobW9kZS5rZXl3b3Jkcyk7XG4gICAgYWRkKG1vZGUuYnVpbHRpbik7XG4gICAgYWRkKG1vZGUuYXRvbXMpO1xuXG4gICAgaWYgKHdvcmRzLmxlbmd0aCkge1xuICAgICAgbW9kZS5oZWxwZXJUeXBlID0gbWltZXNbMF07XG4gICAgICBDb2RlTWlycm9yLnJlZ2lzdGVySGVscGVyKFwiaGludFdvcmRzXCIsIG1pbWVzWzBdLCB3b3Jkcyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaT0wOyBpPG1pbWVzLmxlbmd0aDsgKytpKVxuICAgICAgQ29kZU1pcnJvci5kZWZpbmVNSU1FKG1pbWVzW2ldLCBtb2RlKTtcbiAgfVxuXG4gIGRlZihbXCJ0ZXh0L3gtbW9kZWxpY2FcIl0sIHtcbiAgICBuYW1lOiBcIm1vZGVsaWNhXCIsXG4gICAga2V5d29yZHM6IHdvcmRzKG1vZGVsaWNhS2V5d29yZHMpLFxuICAgIGJ1aWx0aW46IHdvcmRzKG1vZGVsaWNhQnVpbHRpbiksXG4gICAgYXRvbXM6IHdvcmRzKG1vZGVsaWNhQXRvbXMpXG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImNvbmZpZyIsInBhcnNlckNvbmZpZyIsImluZGVudFVuaXQiLCJrZXl3b3JkcyIsImJ1aWx0aW4iLCJhdG9tcyIsImlzU2luZ2xlT3BlcmF0b3JDaGFyIiwiaXNEb3VibGVPcGVyYXRvckNoYXIiLCJpc0RpZ2l0IiwiaXNOb25EaWdpdCIsInRva2VuTGluZUNvbW1lbnQiLCJzdHJlYW0iLCJzdGF0ZSIsInNraXBUb0VuZCIsInRva2VuaXplIiwidG9rZW5CbG9ja0NvbW1lbnQiLCJtYXliZUVuZCIsImNoIiwibmV4dCIsInRva2VuU3RyaW5nIiwiZXNjYXBlZCIsInNvbCIsInRva2VuSWRlbnQiLCJlYXRXaGlsZSIsImVhdCIsImN1ciIsImN1cnJlbnQiLCJsZXZlbCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9rZW5RSWRlbnQiLCJ0b2tlblVuc2lnbmVkTnVtYmVyIiwic3RhcnRTdGF0ZSIsInRva2VuIiwiZWF0U3BhY2UiLCJ0ZXN0IiwicGVlayIsImluZGVudCIsInRleHRBZnRlciIsIlBhc3MiLCJibG9ja0NvbW1lbnRTdGFydCIsImJsb2NrQ29tbWVudEVuZCIsImxpbmVDb21tZW50Iiwid29yZHMiLCJzdHIiLCJvYmoiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJtb2RlbGljYUtleXdvcmRzIiwibW9kZWxpY2FCdWlsdGluIiwibW9kZWxpY2FBdG9tcyIsImRlZiIsIm1pbWVzIiwibW9kZSIsImFkZCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJoZWxwZXJUeXBlIiwicmVnaXN0ZXJIZWxwZXIiLCJkZWZpbmVNSU1FIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/modelica/modelica.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/modelica/modelica.js");
/******/ 	
/******/ })()
;