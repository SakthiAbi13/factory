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

/***/ "./resources/assets/vendor/libs/codemirror/mode/groovy/groovy.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/groovy/groovy.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"groovy\", function (config) {\n    function words(str) {\n      var obj = {},\n          words = str.split(\" \");\n\n      for (var i = 0; i < words.length; ++i) {\n        obj[words[i]] = true;\n      }\n\n      return obj;\n    }\n\n    var keywords = words(\"abstract as assert boolean break byte case catch char class const continue def default \" + \"do double else enum extends final finally float for goto if implements import in \" + \"instanceof int interface long native new package private protected public return \" + \"short static strictfp super switch synchronized threadsafe throw throws trait transient \" + \"try void volatile while\");\n    var blockKeywords = words(\"catch class def do else enum finally for if interface switch trait try while\");\n    var standaloneKeywords = words(\"return break continue\");\n    var atoms = words(\"null true false this\");\n    var curPunc;\n\n    function tokenBase(stream, state) {\n      var ch = stream.next();\n\n      if (ch == '\"' || ch == \"'\") {\n        return startString(ch, stream, state);\n      }\n\n      if (/[\\[\\]{}\\(\\),;\\:\\.]/.test(ch)) {\n        curPunc = ch;\n        return null;\n      }\n\n      if (/\\d/.test(ch)) {\n        stream.eatWhile(/[\\w\\.]/);\n\n        if (stream.eat(/eE/)) {\n          stream.eat(/\\+\\-/);\n          stream.eatWhile(/\\d/);\n        }\n\n        return \"number\";\n      }\n\n      if (ch == \"/\") {\n        if (stream.eat(\"*\")) {\n          state.tokenize.push(tokenComment);\n          return tokenComment(stream, state);\n        }\n\n        if (stream.eat(\"/\")) {\n          stream.skipToEnd();\n          return \"comment\";\n        }\n\n        if (expectExpression(state.lastToken, false)) {\n          return startString(ch, stream, state);\n        }\n      }\n\n      if (ch == \"-\" && stream.eat(\">\")) {\n        curPunc = \"->\";\n        return null;\n      }\n\n      if (/[+\\-*&%=<>!?|\\/~]/.test(ch)) {\n        stream.eatWhile(/[+\\-*&%=<>|~]/);\n        return \"operator\";\n      }\n\n      stream.eatWhile(/[\\w\\$_]/);\n\n      if (ch == \"@\") {\n        stream.eatWhile(/[\\w\\$_\\.]/);\n        return \"meta\";\n      }\n\n      if (state.lastToken == \".\") return \"property\";\n\n      if (stream.eat(\":\")) {\n        curPunc = \"proplabel\";\n        return \"property\";\n      }\n\n      var cur = stream.current();\n\n      if (atoms.propertyIsEnumerable(cur)) {\n        return \"atom\";\n      }\n\n      if (keywords.propertyIsEnumerable(cur)) {\n        if (blockKeywords.propertyIsEnumerable(cur)) curPunc = \"newstatement\";else if (standaloneKeywords.propertyIsEnumerable(cur)) curPunc = \"standalone\";\n        return \"keyword\";\n      }\n\n      return \"variable\";\n    }\n\n    tokenBase.isBase = true;\n\n    function startString(quote, stream, state) {\n      var tripleQuoted = false;\n\n      if (quote != \"/\" && stream.eat(quote)) {\n        if (stream.eat(quote)) tripleQuoted = true;else return \"string\";\n      }\n\n      function t(stream, state) {\n        var escaped = false,\n            next,\n            end = !tripleQuoted;\n\n        while ((next = stream.next()) != null) {\n          if (next == quote && !escaped) {\n            if (!tripleQuoted) {\n              break;\n            }\n\n            if (stream.match(quote + quote)) {\n              end = true;\n              break;\n            }\n          }\n\n          if (quote == '\"' && next == \"$\" && !escaped && stream.eat(\"{\")) {\n            state.tokenize.push(tokenBaseUntilBrace());\n            return \"string\";\n          }\n\n          escaped = !escaped && next == \"\\\\\";\n        }\n\n        if (end) state.tokenize.pop();\n        return \"string\";\n      }\n\n      state.tokenize.push(t);\n      return t(stream, state);\n    }\n\n    function tokenBaseUntilBrace() {\n      var depth = 1;\n\n      function t(stream, state) {\n        if (stream.peek() == \"}\") {\n          depth--;\n\n          if (depth == 0) {\n            state.tokenize.pop();\n            return state.tokenize[state.tokenize.length - 1](stream, state);\n          }\n        } else if (stream.peek() == \"{\") {\n          depth++;\n        }\n\n        return tokenBase(stream, state);\n      }\n\n      t.isBase = true;\n      return t;\n    }\n\n    function tokenComment(stream, state) {\n      var maybeEnd = false,\n          ch;\n\n      while (ch = stream.next()) {\n        if (ch == \"/\" && maybeEnd) {\n          state.tokenize.pop();\n          break;\n        }\n\n        maybeEnd = ch == \"*\";\n      }\n\n      return \"comment\";\n    }\n\n    function expectExpression(last, newline) {\n      return !last || last == \"operator\" || last == \"->\" || /[\\.\\[\\{\\(,;:]/.test(last) || last == \"newstatement\" || last == \"keyword\" || last == \"proplabel\" || last == \"standalone\" && !newline;\n    }\n\n    function Context(indented, column, type, align, prev) {\n      this.indented = indented;\n      this.column = column;\n      this.type = type;\n      this.align = align;\n      this.prev = prev;\n    }\n\n    function pushContext(state, col, type) {\n      return state.context = new Context(state.indented, col, type, null, state.context);\n    }\n\n    function popContext(state) {\n      var t = state.context.type;\n      if (t == \")\" || t == \"]\" || t == \"}\") state.indented = state.context.indented;\n      return state.context = state.context.prev;\n    } // Interface\n\n\n    return {\n      startState: function startState(basecolumn) {\n        return {\n          tokenize: [tokenBase],\n          context: new Context((basecolumn || 0) - config.indentUnit, 0, \"top\", false),\n          indented: 0,\n          startOfLine: true,\n          lastToken: null\n        };\n      },\n      token: function token(stream, state) {\n        var ctx = state.context;\n\n        if (stream.sol()) {\n          if (ctx.align == null) ctx.align = false;\n          state.indented = stream.indentation();\n          state.startOfLine = true; // Automatic semicolon insertion\n\n          if (ctx.type == \"statement\" && !expectExpression(state.lastToken, true)) {\n            popContext(state);\n            ctx = state.context;\n          }\n        }\n\n        if (stream.eatSpace()) return null;\n        curPunc = null;\n        var style = state.tokenize[state.tokenize.length - 1](stream, state);\n        if (style == \"comment\") return style;\n        if (ctx.align == null) ctx.align = true;\n        if ((curPunc == \";\" || curPunc == \":\") && ctx.type == \"statement\") popContext(state); // Handle indentation for {x -> \\n ... }\n        else if (curPunc == \"->\" && ctx.type == \"statement\" && ctx.prev.type == \"}\") {\n          popContext(state);\n          state.context.align = false;\n        } else if (curPunc == \"{\") pushContext(state, stream.column(), \"}\");else if (curPunc == \"[\") pushContext(state, stream.column(), \"]\");else if (curPunc == \"(\") pushContext(state, stream.column(), \")\");else if (curPunc == \"}\") {\n          while (ctx.type == \"statement\") {\n            ctx = popContext(state);\n          }\n\n          if (ctx.type == \"}\") ctx = popContext(state);\n\n          while (ctx.type == \"statement\") {\n            ctx = popContext(state);\n          }\n        } else if (curPunc == ctx.type) popContext(state);else if (ctx.type == \"}\" || ctx.type == \"top\" || ctx.type == \"statement\" && curPunc == \"newstatement\") pushContext(state, stream.column(), \"statement\");\n        state.startOfLine = false;\n        state.lastToken = curPunc || style;\n        return style;\n      },\n      indent: function indent(state, textAfter) {\n        if (!state.tokenize[state.tokenize.length - 1].isBase) return CodeMirror.Pass;\n        var firstChar = textAfter && textAfter.charAt(0),\n            ctx = state.context;\n        if (ctx.type == \"statement\" && !expectExpression(state.lastToken, true)) ctx = ctx.prev;\n        var closing = firstChar == ctx.type;\n        if (ctx.type == \"statement\") return ctx.indented + (firstChar == \"{\" ? 0 : config.indentUnit);else if (ctx.align) return ctx.column + (closing ? 0 : 1);else return ctx.indented + (closing ? 0 : config.indentUnit);\n      },\n      electricChars: \"{}\",\n      closeBrackets: {\n        triples: \"'\\\"\"\n      },\n      fold: \"brace\",\n      blockCommentStart: \"/*\",\n      blockCommentEnd: \"*/\",\n      lineComment: \"//\"\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-groovy\", \"groovy\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9ncm9vdnkvZ3Jvb3Z5LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN4Qjs7RUFFQUEsVUFBVSxDQUFDQyxVQUFYLENBQXNCLFFBQXRCLEVBQWdDLFVBQVNDLE1BQVQsRUFBaUI7SUFDL0MsU0FBU0MsS0FBVCxDQUFlQyxHQUFmLEVBQW9CO01BQ2xCLElBQUlDLEdBQUcsR0FBRyxFQUFWO01BQUEsSUFBY0YsS0FBSyxHQUFHQyxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLENBQXRCOztNQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osS0FBSyxDQUFDSyxNQUExQixFQUFrQyxFQUFFRCxDQUFwQztRQUF1Q0YsR0FBRyxDQUFDRixLQUFLLENBQUNJLENBQUQsQ0FBTixDQUFILEdBQWdCLElBQWhCO01BQXZDOztNQUNBLE9BQU9GLEdBQVA7SUFDRDs7SUFDRCxJQUFJSSxRQUFRLEdBQUdOLEtBQUssQ0FDbEIsNEZBQ0EsbUZBREEsR0FFQSxtRkFGQSxHQUdBLDBGQUhBLEdBSUEseUJBTGtCLENBQXBCO0lBTUEsSUFBSU8sYUFBYSxHQUFHUCxLQUFLLENBQUMsOEVBQUQsQ0FBekI7SUFDQSxJQUFJUSxrQkFBa0IsR0FBR1Is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TEMsaUJBQWlCLEVBQUUsSUEvRGQ7TUFnRUxDLGVBQWUsRUFBRSxJQWhFWjtNQWlFTEMsV0FBVyxFQUFFO0lBakVSLENBQVA7RUFtRUQsQ0F2TkQ7RUF5TkE5RSxVQUFVLENBQUMrRSxVQUFYLENBQXNCLGVBQXRCLEVBQXVDLFFBQXZDO0FBRUMsQ0FyT0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9ncm9vdnkvZ3Jvb3Z5LmpzP2Y0OWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLmRlZmluZU1vZGUoXCJncm9vdnlcIiwgZnVuY3Rpb24oY29uZmlnKSB7XG4gIGZ1bmN0aW9uIHdvcmRzKHN0cikge1xuICAgIHZhciBvYmogPSB7fSwgd29yZHMgPSBzdHIuc3BsaXQoXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyArK2kpIG9ialt3b3Jkc1tpXV0gPSB0cnVlO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgdmFyIGtleXdvcmRzID0gd29yZHMoXG4gICAgXCJhYnN0cmFjdCBhcyBhc3NlcnQgYm9vbGVhbiBicmVhayBieXRlIGNhc2UgY2F0Y2ggY2hhciBjbGFzcyBjb25zdCBjb250aW51ZSBkZWYgZGVmYXVsdCBcIiArXG4gICAgXCJkbyBkb3VibGUgZWxzZSBlbnVtIGV4dGVuZHMgZmluYWwgZmluYWxseSBmbG9hdCBmb3IgZ290byBpZiBpbXBsZW1lbnRzIGltcG9ydCBpbiBcIiArXG4gICAgXCJpbnN0YW5jZW9mIGludCBpbnRlcmZhY2UgbG9uZyBuYXRpdmUgbmV3IHBhY2thZ2UgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHJldHVybiBcIiArXG4gICAgXCJzaG9ydCBzdGF0aWMgc3RyaWN0ZnAgc3VwZXIgc3dpdGNoIHN5bmNocm9uaXplZCB0aHJlYWRzYWZlIHRocm93IHRocm93cyB0cmFpdCB0cmFuc2llbnQgXCIgK1xuICAgIFwidHJ5IHZvaWQgdm9sYXRpbGUgd2hpbGVcIik7XG4gIHZhciBibG9ja0tleXdvcmRzID0gd29yZHMoXCJjYXRjaCBjbGFzcyBkZWYgZG8gZWxzZSBlbnVtIGZpbmFsbHkgZm9yIGlmIGludGVyZmFjZSBzd2l0Y2ggdHJhaXQgdHJ5IHdoaWxlXCIpO1xuICB2YXIgc3RhbmRhbG9uZUtleXdvcmRzID0gd29yZHMoXCJyZXR1cm4gYnJlYWsgY29udGludWVcIik7XG4gIHZhciBhdG9tcyA9IHdvcmRzKFwibnVsbCB0cnVlIGZhbHNlIHRoaXNcIik7XG5cbiAgdmFyIGN1clB1bmM7XG4gIGZ1bmN0aW9uIHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKSB7XG4gICAgdmFyIGNoID0gc3RyZWFtLm5leHQoKTtcbiAgICBpZiAoY2ggPT0gJ1wiJyB8fCBjaCA9PSBcIidcIikge1xuICAgICAgcmV0dXJuIHN0YXJ0U3RyaW5nKGNoLCBzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gICAgaWYgKC9bXFxbXFxde31cXChcXCksO1xcOlxcLl0vLnRlc3QoY2gpKSB7XG4gICAgICBjdXJQdW5jID0gY2g7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKC9cXGQvLnRlc3QoY2gpKSB7XG4gICAgICBzdHJlYW0uZWF0V2hpbGUoL1tcXHdcXC5dLyk7XG4gICAgICBpZiAoc3RyZWFtLmVhdCgvZUUvKSkgeyBzdHJlYW0uZWF0KC9cXCtcXC0vKTsgc3RyZWFtLmVhdFdoaWxlKC9cXGQvKTsgfVxuICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgfVxuICAgIGlmIChjaCA9PSBcIi9cIikge1xuICAgICAgaWYgKHN0cmVhbS5lYXQoXCIqXCIpKSB7XG4gICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5Db21tZW50KTtcbiAgICAgICAgcmV0dXJuIHRva2VuQ29tbWVudChzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJlYW0uZWF0KFwiL1wiKSkge1xuICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChleHBlY3RFeHByZXNzaW9uKHN0YXRlLmxhc3RUb2tlbiwgZmFsc2UpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFN0cmluZyhjaCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaCA9PSBcIi1cIiAmJiBzdHJlYW0uZWF0KFwiPlwiKSkge1xuICAgICAgY3VyUHVuYyA9IFwiLT5cIjtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoL1srXFwtKiYlPTw+IT98XFwvfl0vLnRlc3QoY2gpKSB7XG4gICAgICBzdHJlYW0uZWF0V2hpbGUoL1srXFwtKiYlPTw+fH5dLyk7XG4gICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgIH1cbiAgICBzdHJlYW0uZWF0V2hpbGUoL1tcXHdcXCRfXS8pO1xuICAgIGlmIChjaCA9PSBcIkBcIikgeyBzdHJlYW0uZWF0V2hpbGUoL1tcXHdcXCRfXFwuXS8pOyByZXR1cm4gXCJtZXRhXCI7IH1cbiAgICBpZiAoc3RhdGUubGFzdFRva2VuID09IFwiLlwiKSByZXR1cm4gXCJwcm9wZXJ0eVwiO1xuICAgIGlmIChzdHJlYW0uZWF0KFwiOlwiKSkgeyBjdXJQdW5jID0gXCJwcm9wbGFiZWxcIjsgcmV0dXJuIFwicHJvcGVydHlcIjsgfVxuICAgIHZhciBjdXIgPSBzdHJlYW0uY3VycmVudCgpO1xuICAgIGlmIChhdG9tcy5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSB7IHJldHVybiBcImF0b21cIjsgfVxuICAgIGlmIChrZXl3b3Jkcy5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSB7XG4gICAgICBpZiAoYmxvY2tLZXl3b3Jkcy5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSBjdXJQdW5jID0gXCJuZXdzdGF0ZW1lbnRcIjtcbiAgICAgIGVsc2UgaWYgKHN0YW5kYWxvbmVLZXl3b3Jkcy5wcm9wZXJ0eUlzRW51bWVyYWJsZShjdXIpKSBjdXJQdW5jID0gXCJzdGFuZGFsb25lXCI7XG4gICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgfVxuICAgIHJldHVybiBcInZhcmlhYmxlXCI7XG4gIH1cbiAgdG9rZW5CYXNlLmlzQmFzZSA9IHRydWU7XG5cbiAgZnVuY3Rpb24gc3RhcnRTdHJpbmcocXVvdGUsIHN0cmVhbSwgc3RhdGUpIHtcbiAgICB2YXIgdHJpcGxlUXVvdGVkID0gZmFsc2U7XG4gICAgaWYgKHF1b3RlICE9IFwiL1wiICYmIHN0cmVhbS5lYXQocXVvdGUpKSB7XG4gICAgICBpZiAoc3RyZWFtLmVhdChxdW90ZSkpIHRyaXBsZVF1b3RlZCA9IHRydWU7XG4gICAgICBlbHNlIHJldHVybiBcInN0cmluZ1wiO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0KHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHZhciBlc2NhcGVkID0gZmFsc2UsIG5leHQsIGVuZCA9ICF0cmlwbGVRdW90ZWQ7XG4gICAgICB3aGlsZSAoKG5leHQgPSBzdHJlYW0ubmV4dCgpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChuZXh0ID09IHF1b3RlICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmlwbGVRdW90ZWQpIHsgYnJlYWs7IH1cbiAgICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKHF1b3RlICsgcXVvdGUpKSB7IGVuZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1b3RlID09ICdcIicgJiYgbmV4dCA9PSBcIiRcIiAmJiAhZXNjYXBlZCAmJiBzdHJlYW0uZWF0KFwie1wiKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5CYXNlVW50aWxCcmFjZSgpKTtcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQgJiYgbmV4dCA9PSBcIlxcXFxcIjtcbiAgICAgIH1cbiAgICAgIGlmIChlbmQpIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfVxuICAgIHN0YXRlLnRva2VuaXplLnB1c2godCk7XG4gICAgcmV0dXJuIHQoc3RyZWFtLCBzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2tlbkJhc2VVbnRpbEJyYWNlKCkge1xuICAgIHZhciBkZXB0aCA9IDE7XG4gICAgZnVuY3Rpb24gdChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RyZWFtLnBlZWsoKSA9PSBcIn1cIikge1xuICAgICAgICBkZXB0aC0tO1xuICAgICAgICBpZiAoZGVwdGggPT0gMCkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgICAgIHJldHVybiBzdGF0ZS50b2tlbml6ZVtzdGF0ZS50b2tlbml6ZS5sZW5ndGgtMV0oc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RyZWFtLnBlZWsoKSA9PSBcIntcIikge1xuICAgICAgICBkZXB0aCsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gICAgdC5pc0Jhc2UgPSB0cnVlO1xuICAgIHJldHVybiB0O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5Db21tZW50KHN0cmVhbSwgc3RhdGUpIHtcbiAgICB2YXIgbWF5YmVFbmQgPSBmYWxzZSwgY2g7XG4gICAgd2hpbGUgKGNoID0gc3RyZWFtLm5leHQoKSkge1xuICAgICAgaWYgKGNoID09IFwiL1wiICYmIG1heWJlRW5kKSB7XG4gICAgICAgIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG1heWJlRW5kID0gKGNoID09IFwiKlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwZWN0RXhwcmVzc2lvbihsYXN0LCBuZXdsaW5lKSB7XG4gICAgcmV0dXJuICFsYXN0IHx8IGxhc3QgPT0gXCJvcGVyYXRvclwiIHx8IGxhc3QgPT0gXCItPlwiIHx8IC9bXFwuXFxbXFx7XFwoLDs6XS8udGVzdChsYXN0KSB8fFxuICAgICAgbGFzdCA9PSBcIm5ld3N0YXRlbWVudFwiIHx8IGxhc3QgPT0gXCJrZXl3b3JkXCIgfHwgbGFzdCA9PSBcInByb3BsYWJlbFwiIHx8XG4gICAgICAobGFzdCA9PSBcInN0YW5kYWxvbmVcIiAmJiAhbmV3bGluZSk7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KGluZGVudGVkLCBjb2x1bW4sIHR5cGUsIGFsaWduLCBwcmV2KSB7XG4gICAgdGhpcy5pbmRlbnRlZCA9IGluZGVudGVkO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hbGlnbiA9IGFsaWduO1xuICAgIHRoaXMucHJldiA9IHByZXY7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaENvbnRleHQoc3RhdGUsIGNvbCwgdHlwZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb250ZXh0ID0gbmV3IENvbnRleHQoc3RhdGUuaW5kZW50ZWQsIGNvbCwgdHlwZSwgbnVsbCwgc3RhdGUuY29udGV4dCk7XG4gIH1cbiAgZnVuY3Rpb24gcG9wQ29udGV4dChzdGF0ZSkge1xuICAgIHZhciB0ID0gc3RhdGUuY29udGV4dC50eXBlO1xuICAgIGlmICh0ID09IFwiKVwiIHx8IHQgPT0gXCJdXCIgfHwgdCA9PSBcIn1cIilcbiAgICAgIHN0YXRlLmluZGVudGVkID0gc3RhdGUuY29udGV4dC5pbmRlbnRlZDtcbiAgICByZXR1cm4gc3RhdGUuY29udGV4dCA9IHN0YXRlLmNvbnRleHQucHJldjtcbiAgfVxuXG4gIC8vIEludGVyZmFjZVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oYmFzZWNvbHVtbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW5pemU6IFt0b2tlbkJhc2VdLFxuICAgICAgICBjb250ZXh0OiBuZXcgQ29udGV4dCgoYmFzZWNvbHVtbiB8fCAwKSAtIGNvbmZpZy5pbmRlbnRVbml0LCAwLCBcInRvcFwiLCBmYWxzZSksXG4gICAgICAgIGluZGVudGVkOiAwLFxuICAgICAgICBzdGFydE9mTGluZTogdHJ1ZSxcbiAgICAgICAgbGFzdFRva2VuOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIGN0eCA9IHN0YXRlLmNvbnRleHQ7XG4gICAgICBpZiAoc3RyZWFtLnNvbCgpKSB7XG4gICAgICAgIGlmIChjdHguYWxpZ24gPT0gbnVsbCkgY3R4LmFsaWduID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmluZGVudGVkID0gc3RyZWFtLmluZGVudGF0aW9uKCk7XG4gICAgICAgIHN0YXRlLnN0YXJ0T2ZMaW5lID0gdHJ1ZTtcbiAgICAgICAgLy8gQXV0b21hdGljIHNlbWljb2xvbiBpbnNlcnRpb25cbiAgICAgICAgaWYgKGN0eC50eXBlID09IFwic3RhdGVtZW50XCIgJiYgIWV4cGVjdEV4cHJlc3Npb24oc3RhdGUubGFzdFRva2VuLCB0cnVlKSkge1xuICAgICAgICAgIHBvcENvbnRleHQoc3RhdGUpOyBjdHggPSBzdGF0ZS5jb250ZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHJldHVybiBudWxsO1xuICAgICAgY3VyUHVuYyA9IG51bGw7XG4gICAgICB2YXIgc3R5bGUgPSBzdGF0ZS50b2tlbml6ZVtzdGF0ZS50b2tlbml6ZS5sZW5ndGgtMV0oc3RyZWFtLCBzdGF0ZSk7XG4gICAgICBpZiAoc3R5bGUgPT0gXCJjb21tZW50XCIpIHJldHVybiBzdHlsZTtcbiAgICAgIGlmIChjdHguYWxpZ24gPT0gbnVsbCkgY3R4LmFsaWduID0gdHJ1ZTtcblxuICAgICAgaWYgKChjdXJQdW5jID09IFwiO1wiIHx8IGN1clB1bmMgPT0gXCI6XCIpICYmIGN0eC50eXBlID09IFwic3RhdGVtZW50XCIpIHBvcENvbnRleHQoc3RhdGUpO1xuICAgICAgLy8gSGFuZGxlIGluZGVudGF0aW9uIGZvciB7eCAtPiBcXG4gLi4uIH1cbiAgICAgIGVsc2UgaWYgKGN1clB1bmMgPT0gXCItPlwiICYmIGN0eC50eXBlID09IFwic3RhdGVtZW50XCIgJiYgY3R4LnByZXYudHlwZSA9PSBcIn1cIikge1xuICAgICAgICBwb3BDb250ZXh0KHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29udGV4dC5hbGlnbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY3VyUHVuYyA9PSBcIntcIikgcHVzaENvbnRleHQoc3RhdGUsIHN0cmVhbS5jb2x1bW4oKSwgXCJ9XCIpO1xuICAgICAgZWxzZSBpZiAoY3VyUHVuYyA9PSBcIltcIikgcHVzaENvbnRleHQoc3RhdGUsIHN0cmVhbS5jb2x1bW4oKSwgXCJdXCIpO1xuICAgICAgZWxzZSBpZiAoY3VyUHVuYyA9PSBcIihcIikgcHVzaENvbnRleHQoc3RhdGUsIHN0cmVhbS5jb2x1bW4oKSwgXCIpXCIpO1xuICAgICAgZWxzZSBpZiAoY3VyUHVuYyA9PSBcIn1cIikge1xuICAgICAgICB3aGlsZSAoY3R4LnR5cGUgPT0gXCJzdGF0ZW1lbnRcIikgY3R4ID0gcG9wQ29udGV4dChzdGF0ZSk7XG4gICAgICAgIGlmIChjdHgudHlwZSA9PSBcIn1cIikgY3R4ID0gcG9wQ29udGV4dChzdGF0ZSk7XG4gICAgICAgIHdoaWxlIChjdHgudHlwZSA9PSBcInN0YXRlbWVudFwiKSBjdHggPSBwb3BDb250ZXh0KHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGN1clB1bmMgPT0gY3R4LnR5cGUpIHBvcENvbnRleHQoc3RhdGUpO1xuICAgICAgZWxzZSBpZiAoY3R4LnR5cGUgPT0gXCJ9XCIgfHwgY3R4LnR5cGUgPT0gXCJ0b3BcIiB8fCAoY3R4LnR5cGUgPT0gXCJzdGF0ZW1lbnRcIiAmJiBjdXJQdW5jID09IFwibmV3c3RhdGVtZW50XCIpKVxuICAgICAgICBwdXNoQ29udGV4dChzdGF0ZSwgc3RyZWFtLmNvbHVtbigpLCBcInN0YXRlbWVudFwiKTtcbiAgICAgIHN0YXRlLnN0YXJ0T2ZMaW5lID0gZmFsc2U7XG4gICAgICBzdGF0ZS5sYXN0VG9rZW4gPSBjdXJQdW5jIHx8IHN0eWxlO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG5cbiAgICBpbmRlbnQ6IGZ1bmN0aW9uKHN0YXRlLCB0ZXh0QWZ0ZXIpIHtcbiAgICAgIGlmICghc3RhdGUudG9rZW5pemVbc3RhdGUudG9rZW5pemUubGVuZ3RoLTFdLmlzQmFzZSkgcmV0dXJuIENvZGVNaXJyb3IuUGFzcztcbiAgICAgIHZhciBmaXJzdENoYXIgPSB0ZXh0QWZ0ZXIgJiYgdGV4dEFmdGVyLmNoYXJBdCgwKSwgY3R4ID0gc3RhdGUuY29udGV4dDtcbiAgICAgIGlmIChjdHgudHlwZSA9PSBcInN0YXRlbWVudFwiICYmICFleHBlY3RFeHByZXNzaW9uKHN0YXRlLmxhc3RUb2tlbiwgdHJ1ZSkpIGN0eCA9IGN0eC5wcmV2O1xuICAgICAgdmFyIGNsb3NpbmcgPSBmaXJzdENoYXIgPT0gY3R4LnR5cGU7XG4gICAgICBpZiAoY3R4LnR5cGUgPT0gXCJzdGF0ZW1lbnRcIikgcmV0dXJuIGN0eC5pbmRlbnRlZCArIChmaXJzdENoYXIgPT0gXCJ7XCIgPyAwIDogY29uZmlnLmluZGVudFVuaXQpO1xuICAgICAgZWxzZSBpZiAoY3R4LmFsaWduKSByZXR1cm4gY3R4LmNvbHVtbiArIChjbG9zaW5nID8gMCA6IDEpO1xuICAgICAgZWxzZSByZXR1cm4gY3R4LmluZGVudGVkICsgKGNsb3NpbmcgPyAwIDogY29uZmlnLmluZGVudFVuaXQpO1xuICAgIH0sXG5cbiAgICBlbGVjdHJpY0NoYXJzOiBcInt9XCIsXG4gICAgY2xvc2VCcmFja2V0czoge3RyaXBsZXM6IFwiJ1xcXCJcIn0sXG4gICAgZm9sZDogXCJicmFjZVwiLFxuICAgIGJsb2NrQ29tbWVudFN0YXJ0OiBcIi8qXCIsXG4gICAgYmxvY2tDb21tZW50RW5kOiBcIiovXCIsXG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIlxuICB9O1xufSk7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1ncm9vdnlcIiwgXCJncm9vdnlcIik7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJjb25maWciLCJ3b3JkcyIsInN0ciIsIm9iaiIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleXdvcmRzIiwiYmxvY2tLZXl3b3JkcyIsInN0YW5kYWxvbmVLZXl3b3JkcyIsImF0b21zIiwiY3VyUHVuYyIsInRva2VuQmFzZSIsInN0cmVhbSIsInN0YXRlIiwiY2giLCJuZXh0Iiwic3RhcnRTdHJpbmciLCJ0ZXN0IiwiZWF0V2hpbGUiLCJlYXQiLCJ0b2tlbml6ZSIsInB1c2giLCJ0b2tlbkNvbW1lbnQiLCJza2lwVG9FbmQiLCJleHBlY3RFeHByZXNzaW9uIiwibGFzdFRva2VuIiwiY3VyIiwiY3VycmVudCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNCYXNlIiwicXVvdGUiLCJ0cmlwbGVRdW90ZWQiLCJ0IiwiZXNjYXBlZCIsImVuZCIsIm1hdGNoIiwidG9rZW5CYXNlVW50aWxCcmFjZSIsInBvcCIsImRlcHRoIiwicGVlayIsIm1heWJlRW5kIiwibGFzdCIsIm5ld2xpbmUiLCJDb250ZXh0IiwiaW5kZW50ZWQiLCJjb2x1bW4iLCJ0eXBlIiwiYWxpZ24iLCJwcmV2IiwicHVzaENvbnRleHQiLCJjb2wiLCJjb250ZXh0IiwicG9wQ29udGV4dCIsInN0YXJ0U3RhdGUiLCJiYXNlY29sdW1uIiwiaW5kZW50VW5pdCIsInN0YXJ0T2ZMaW5lIiwidG9rZW4iLCJjdHgiLCJzb2wiLCJpbmRlbnRhdGlvbiIsImVhdFNwYWNlIiwic3R5bGUiLCJpbmRlbnQiLCJ0ZXh0QWZ0ZXIiLCJQYXNzIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwiY2xvc2luZyIsImVsZWN0cmljQ2hhcnMiLCJjbG9zZUJyYWNrZXRzIiwidHJpcGxlcyIsImZvbGQiLCJibG9ja0NvbW1lbnRTdGFydCIsImJsb2NrQ29tbWVudEVuZCIsImxpbmVDb21tZW50IiwiZGVmaW5lTUlNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/groovy/groovy.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/groovy/groovy.js");
/******/ 	
/******/ })()
;