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

/***/ "./resources/assets/vendor/libs/codemirror/mode/cypher/cypher.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/cypher/cypher.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// By the Neo4j Team and contributors.\n// https://github.com/neo4j-contrib/CodeMirror\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  var wordRegexp = function wordRegexp(words) {\n    return new RegExp(\"^(?:\" + words.join(\"|\") + \")$\", \"i\");\n  };\n\n  CodeMirror.defineMode(\"cypher\", function (config) {\n    var tokenBase = function tokenBase(stream\n    /*, state*/\n    ) {\n      var ch = stream.next();\n\n      if (ch === '\"') {\n        stream.match(/^[^\"]*\"/);\n        return \"string\";\n      }\n\n      if (ch === \"'\") {\n        stream.match(/^[^']*'/);\n        return \"string\";\n      }\n\n      if (/[{}\\(\\),\\.;\\[\\]]/.test(ch)) {\n        curPunc = ch;\n        return \"node\";\n      } else if (ch === \"/\" && stream.eat(\"/\")) {\n        stream.skipToEnd();\n        return \"comment\";\n      } else if (operatorChars.test(ch)) {\n        stream.eatWhile(operatorChars);\n        return null;\n      } else {\n        stream.eatWhile(/[_\\w\\d]/);\n\n        if (stream.eat(\":\")) {\n          stream.eatWhile(/[\\w\\d_\\-]/);\n          return \"atom\";\n        }\n\n        var word = stream.current();\n        if (funcs.test(word)) return \"builtin\";\n        if (preds.test(word)) return \"def\";\n        if (keywords.test(word) || systemKeywords.test(word)) return \"keyword\";\n        return \"variable\";\n      }\n    };\n\n    var pushContext = function pushContext(state, type, col) {\n      return state.context = {\n        prev: state.context,\n        indent: state.indent,\n        col: col,\n        type: type\n      };\n    };\n\n    var popContext = function popContext(state) {\n      state.indent = state.context.indent;\n      return state.context = state.context.prev;\n    };\n\n    var indentUnit = config.indentUnit;\n    var curPunc;\n    var funcs = wordRegexp([\"abs\", \"acos\", \"allShortestPaths\", \"asin\", \"atan\", \"atan2\", \"avg\", \"ceil\", \"coalesce\", \"collect\", \"cos\", \"cot\", \"count\", \"degrees\", \"e\", \"endnode\", \"exp\", \"extract\", \"filter\", \"floor\", \"haversin\", \"head\", \"id\", \"keys\", \"labels\", \"last\", \"left\", \"length\", \"log\", \"log10\", \"lower\", \"ltrim\", \"max\", \"min\", \"node\", \"nodes\", \"percentileCont\", \"percentileDisc\", \"pi\", \"radians\", \"rand\", \"range\", \"reduce\", \"rel\", \"relationship\", \"relationships\", \"replace\", \"reverse\", \"right\", \"round\", \"rtrim\", \"shortestPath\", \"sign\", \"sin\", \"size\", \"split\", \"sqrt\", \"startnode\", \"stdev\", \"stdevp\", \"str\", \"substring\", \"sum\", \"tail\", \"tan\", \"timestamp\", \"toFloat\", \"toInt\", \"toString\", \"trim\", \"type\", \"upper\"]);\n    var preds = wordRegexp([\"all\", \"and\", \"any\", \"contains\", \"exists\", \"has\", \"in\", \"none\", \"not\", \"or\", \"single\", \"xor\"]);\n    var keywords = wordRegexp([\"as\", \"asc\", \"ascending\", \"assert\", \"by\", \"case\", \"commit\", \"constraint\", \"create\", \"csv\", \"cypher\", \"delete\", \"desc\", \"descending\", \"detach\", \"distinct\", \"drop\", \"else\", \"end\", \"ends\", \"explain\", \"false\", \"fieldterminator\", \"foreach\", \"from\", \"headers\", \"in\", \"index\", \"is\", \"join\", \"limit\", \"load\", \"match\", \"merge\", \"null\", \"on\", \"optional\", \"order\", \"periodic\", \"profile\", \"remove\", \"return\", \"scan\", \"set\", \"skip\", \"start\", \"starts\", \"then\", \"true\", \"union\", \"unique\", \"unwind\", \"using\", \"when\", \"where\", \"with\", \"call\", \"yield\"]);\n    var systemKeywords = wordRegexp([\"access\", \"active\", \"assign\", \"all\", \"alter\", \"as\", \"catalog\", \"change\", \"copy\", \"create\", \"constraint\", \"constraints\", \"current\", \"database\", \"databases\", \"dbms\", \"default\", \"deny\", \"drop\", \"element\", \"elements\", \"exists\", \"from\", \"grant\", \"graph\", \"graphs\", \"if\", \"index\", \"indexes\", \"label\", \"labels\", \"management\", \"match\", \"name\", \"names\", \"new\", \"node\", \"nodes\", \"not\", \"of\", \"on\", \"or\", \"password\", \"populated\", \"privileges\", \"property\", \"read\", \"relationship\", \"relationships\", \"remove\", \"replace\", \"required\", \"revoke\", \"role\", \"roles\", \"set\", \"show\", \"start\", \"status\", \"stop\", \"suspended\", \"to\", \"traverse\", \"type\", \"types\", \"user\", \"users\", \"with\", \"write\"]);\n    var operatorChars = /[*+\\-<>=&|~%^]/;\n    return {\n      startState: function\n        /*base*/\n      startState() {\n        return {\n          tokenize: tokenBase,\n          context: null,\n          indent: 0,\n          col: 0\n        };\n      },\n      token: function token(stream, state) {\n        if (stream.sol()) {\n          if (state.context && state.context.align == null) {\n            state.context.align = false;\n          }\n\n          state.indent = stream.indentation();\n        }\n\n        if (stream.eatSpace()) {\n          return null;\n        }\n\n        var style = state.tokenize(stream, state);\n\n        if (style !== \"comment\" && state.context && state.context.align == null && state.context.type !== \"pattern\") {\n          state.context.align = true;\n        }\n\n        if (curPunc === \"(\") {\n          pushContext(state, \")\", stream.column());\n        } else if (curPunc === \"[\") {\n          pushContext(state, \"]\", stream.column());\n        } else if (curPunc === \"{\") {\n          pushContext(state, \"}\", stream.column());\n        } else if (/[\\]\\}\\)]/.test(curPunc)) {\n          while (state.context && state.context.type === \"pattern\") {\n            popContext(state);\n          }\n\n          if (state.context && curPunc === state.context.type) {\n            popContext(state);\n          }\n        } else if (curPunc === \".\" && state.context && state.context.type === \"pattern\") {\n          popContext(state);\n        } else if (/atom|string|variable/.test(style) && state.context) {\n          if (/[\\}\\]]/.test(state.context.type)) {\n            pushContext(state, \"pattern\", stream.column());\n          } else if (state.context.type === \"pattern\" && !state.context.align) {\n            state.context.align = true;\n            state.context.col = stream.column();\n          }\n        }\n\n        return style;\n      },\n      indent: function indent(state, textAfter) {\n        var firstChar = textAfter && textAfter.charAt(0);\n        var context = state.context;\n\n        if (/[\\]\\}]/.test(firstChar)) {\n          while (context && context.type === \"pattern\") {\n            context = context.prev;\n          }\n        }\n\n        var closing = context && firstChar === context.type;\n        if (!context) return 0;\n        if (context.type === \"keywords\") return CodeMirror.commands.newlineAndIndent;\n        if (context.align) return context.col + (closing ? 0 : 1);\n        return context.indent + (closing ? 0 : indentUnit);\n      }\n    };\n  });\n  CodeMirror.modeExtensions[\"cypher\"] = {\n    autoFormatLineBreaks: function autoFormatLineBreaks(text) {\n      var i, lines, reProcessedPortion;\n      var lines = text.split(\"\\n\");\n      var reProcessedPortion = /\\s+\\b(return|where|order by|match|with|skip|limit|create|delete|set)\\b\\s/g;\n\n      for (var i = 0; i < lines.length; i++) {\n        lines[i] = lines[i].replace(reProcessedPortion, \" \\n$1 \").trim();\n      }\n\n      return lines.join(\"\\n\");\n    }\n  };\n  CodeMirror.defineMIME(\"application/x-cypher-query\", \"cypher\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9jeXBoZXIvY3lwaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEI7O0VBQ0EsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsS0FBVCxFQUFnQjtJQUMvQixPQUFPLElBQUlDLE1BQUosQ0FBVyxTQUFTRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBQVQsR0FBMkIsSUFBdEMsRUFBNEMsR0FBNUMsQ0FBUDtFQUNELENBRkQ7O0VBSUFKLFVBQVUsQ0FBQ0ssVUFBWCxDQUFzQixRQUF0QixFQUFnQyxVQUFTQyxNQUFULEVBQWlCO0lBQy9DLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNDO0lBQU07SUFBZixFQUE0QjtNQUMxQyxJQUFJQyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxFQUFUOztNQUNBLElBQUlELEVBQUUsS0FBSSxHQUFWLEVBQWU7UUFDYkQsTUFBTSxDQUFDRyxLQUFQLENBQWEsU0FBYjtRQUNBLE9BQU8sUUFBUDtNQUNEOztNQUNELElBQUlGLEVBQUUsS0FBSyxHQUFYLEVBQWdCO1FBQ2RELE1BQU0sQ0FBQ0csS0FBUCxDQUFhLFNBQWI7UUFDQSxPQUFPLFFBQVA7TUFDRDs7TUFDRCxJ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QXBEO0FBRUQsQ0FoSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9jeXBoZXIvY3lwaGVyLmpzPzA3M2YiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLy8gQnkgdGhlIE5lbzRqIFRlYW0gYW5kIGNvbnRyaWJ1dG9ycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZW80ai1jb250cmliL0NvZGVNaXJyb3JcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciB3b3JkUmVnZXhwID0gZnVuY3Rpb24od29yZHMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHdvcmRzLmpvaW4oXCJ8XCIpICsgXCIpJFwiLCBcImlcIik7XG4gIH07XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwiY3lwaGVyXCIsIGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciB0b2tlbkJhc2UgPSBmdW5jdGlvbihzdHJlYW0vKiwgc3RhdGUqLykge1xuICAgICAgdmFyIGNoID0gc3RyZWFtLm5leHQoKTtcbiAgICAgIGlmIChjaCA9PT0nXCInKSB7XG4gICAgICAgIHN0cmVhbS5tYXRjaCgvXlteXCJdKlwiLyk7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGNoID09PSBcIidcIikge1xuICAgICAgICBzdHJlYW0ubWF0Y2goL15bXiddKicvKTtcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICB9XG4gICAgICBpZiAoL1t7fVxcKFxcKSxcXC47XFxbXFxdXS8udGVzdChjaCkpIHtcbiAgICAgICAgY3VyUHVuYyA9IGNoO1xuICAgICAgICByZXR1cm4gXCJub2RlXCI7XG4gICAgICB9IGVsc2UgaWYgKGNoID09PSBcIi9cIiAmJiBzdHJlYW0uZWF0KFwiL1wiKSkge1xuICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3JDaGFycy50ZXN0KGNoKSkge1xuICAgICAgICBzdHJlYW0uZWF0V2hpbGUob3BlcmF0b3JDaGFycyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bX1xcd1xcZF0vKTtcbiAgICAgICAgaWYgKHN0cmVhbS5lYXQoXCI6XCIpKSB7XG4gICAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3XFxkX1xcLV0vKTtcbiAgICAgICAgICByZXR1cm4gXCJhdG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmQgPSBzdHJlYW0uY3VycmVudCgpO1xuICAgICAgICBpZiAoZnVuY3MudGVzdCh3b3JkKSkgcmV0dXJuIFwiYnVpbHRpblwiO1xuICAgICAgICBpZiAocHJlZHMudGVzdCh3b3JkKSkgcmV0dXJuIFwiZGVmXCI7XG4gICAgICAgIGlmIChrZXl3b3Jkcy50ZXN0KHdvcmQpIHx8IHN5c3RlbUtleXdvcmRzLnRlc3Qod29yZCkpIHJldHVybiBcImtleXdvcmRcIjtcbiAgICAgICAgcmV0dXJuIFwidmFyaWFibGVcIjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwdXNoQ29udGV4dCA9IGZ1bmN0aW9uKHN0YXRlLCB0eXBlLCBjb2wpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb250ZXh0ID0ge1xuICAgICAgICBwcmV2OiBzdGF0ZS5jb250ZXh0LFxuICAgICAgICBpbmRlbnQ6IHN0YXRlLmluZGVudCxcbiAgICAgICAgY29sOiBjb2wsXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgcG9wQ29udGV4dCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pbmRlbnQgPSBzdGF0ZS5jb250ZXh0LmluZGVudDtcbiAgICAgIHJldHVybiBzdGF0ZS5jb250ZXh0ID0gc3RhdGUuY29udGV4dC5wcmV2O1xuICAgIH07XG4gICAgdmFyIGluZGVudFVuaXQgPSBjb25maWcuaW5kZW50VW5pdDtcbiAgICB2YXIgY3VyUHVuYztcbiAgICB2YXIgZnVuY3MgPSB3b3JkUmVnZXhwKFtcImFic1wiLCBcImFjb3NcIiwgXCJhbGxTaG9ydGVzdFBhdGhzXCIsIFwiYXNpblwiLCBcImF0YW5cIiwgXCJhdGFuMlwiLCBcImF2Z1wiLCBcImNlaWxcIiwgXCJjb2FsZXNjZVwiLCBcImNvbGxlY3RcIiwgXCJjb3NcIiwgXCJjb3RcIiwgXCJjb3VudFwiLCBcImRlZ3JlZXNcIiwgXCJlXCIsIFwiZW5kbm9kZVwiLCBcImV4cFwiLCBcImV4dHJhY3RcIiwgXCJmaWx0ZXJcIiwgXCJmbG9vclwiLCBcImhhdmVyc2luXCIsIFwiaGVhZFwiLCBcImlkXCIsIFwia2V5c1wiLCBcImxhYmVsc1wiLCBcImxhc3RcIiwgXCJsZWZ0XCIsIFwibGVuZ3RoXCIsIFwibG9nXCIsIFwibG9nMTBcIiwgXCJsb3dlclwiLCBcImx0cmltXCIsIFwibWF4XCIsIFwibWluXCIsIFwibm9kZVwiLCBcIm5vZGVzXCIsIFwicGVyY2VudGlsZUNvbnRcIiwgXCJwZXJjZW50aWxlRGlzY1wiLCBcInBpXCIsIFwicmFkaWFuc1wiLCBcInJhbmRcIiwgXCJyYW5nZVwiLCBcInJlZHVjZVwiLCBcInJlbFwiLCBcInJlbGF0aW9uc2hpcFwiLCBcInJlbGF0aW9uc2hpcHNcIiwgXCJyZXBsYWNlXCIsIFwicmV2ZXJzZVwiLCBcInJpZ2h0XCIsIFwicm91bmRcIiwgXCJydHJpbVwiLCBcInNob3J0ZXN0UGF0aFwiLCBcInNpZ25cIiwgXCJzaW5cIiwgXCJzaXplXCIsIFwic3BsaXRcIiwgXCJzcXJ0XCIsIFwic3RhcnRub2RlXCIsIFwic3RkZXZcIiwgXCJzdGRldnBcIiwgXCJzdHJcIiwgXCJzdWJzdHJpbmdcIiwgXCJzdW1cIiwgXCJ0YWlsXCIsIFwidGFuXCIsIFwidGltZXN0YW1wXCIsIFwidG9GbG9hdFwiLCBcInRvSW50XCIsIFwidG9TdHJpbmdcIiwgXCJ0cmltXCIsIFwidHlwZVwiLCBcInVwcGVyXCJdKTtcbiAgICB2YXIgcHJlZHMgPSB3b3JkUmVnZXhwKFtcImFsbFwiLCBcImFuZFwiLCBcImFueVwiLCBcImNvbnRhaW5zXCIsIFwiZXhpc3RzXCIsIFwiaGFzXCIsIFwiaW5cIiwgXCJub25lXCIsIFwibm90XCIsIFwib3JcIiwgXCJzaW5nbGVcIiwgXCJ4b3JcIl0pO1xuICAgIHZhciBrZXl3b3JkcyA9IHdvcmRSZWdleHAoW1wiYXNcIiwgXCJhc2NcIiwgXCJhc2NlbmRpbmdcIiwgXCJhc3NlcnRcIiwgXCJieVwiLCBcImNhc2VcIiwgXCJjb21taXRcIiwgXCJjb25zdHJhaW50XCIsIFwiY3JlYXRlXCIsIFwiY3N2XCIsIFwiY3lwaGVyXCIsIFwiZGVsZXRlXCIsIFwiZGVzY1wiLCBcImRlc2NlbmRpbmdcIiwgXCJkZXRhY2hcIiwgXCJkaXN0aW5jdFwiLCBcImRyb3BcIiwgXCJlbHNlXCIsIFwiZW5kXCIsIFwiZW5kc1wiLCBcImV4cGxhaW5cIiwgXCJmYWxzZVwiLCBcImZpZWxkdGVybWluYXRvclwiLCBcImZvcmVhY2hcIiwgXCJmcm9tXCIsIFwiaGVhZGVyc1wiLCBcImluXCIsIFwiaW5kZXhcIiwgXCJpc1wiLCBcImpvaW5cIiwgXCJsaW1pdFwiLCBcImxvYWRcIiwgXCJtYXRjaFwiLCBcIm1lcmdlXCIsIFwibnVsbFwiLCBcIm9uXCIsIFwib3B0aW9uYWxcIiwgXCJvcmRlclwiLCBcInBlcmlvZGljXCIsIFwicHJvZmlsZVwiLCBcInJlbW92ZVwiLCBcInJldHVyblwiLCBcInNjYW5cIiwgXCJzZXRcIiwgXCJza2lwXCIsIFwic3RhcnRcIiwgXCJzdGFydHNcIiwgXCJ0aGVuXCIsIFwidHJ1ZVwiLCBcInVuaW9uXCIsIFwidW5pcXVlXCIsIFwidW53aW5kXCIsIFwidXNpbmdcIiwgXCJ3aGVuXCIsIFwid2hlcmVcIiwgXCJ3aXRoXCIsIFwiY2FsbFwiLCBcInlpZWxkXCJdKTtcbiAgICB2YXIgc3lzdGVtS2V5d29yZHMgPSB3b3JkUmVnZXhwKFtcImFjY2Vzc1wiLCBcImFjdGl2ZVwiLCBcImFzc2lnblwiLCBcImFsbFwiLCBcImFsdGVyXCIsIFwiYXNcIiwgXCJjYXRhbG9nXCIsIFwiY2hhbmdlXCIsIFwiY29weVwiLCBcImNyZWF0ZVwiLCBcImNvbnN0cmFpbnRcIiwgXCJjb25zdHJhaW50c1wiLCBcImN1cnJlbnRcIiwgXCJkYXRhYmFzZVwiLCBcImRhdGFiYXNlc1wiLCBcImRibXNcIiwgXCJkZWZhdWx0XCIsIFwiZGVueVwiLCBcImRyb3BcIiwgXCJlbGVtZW50XCIsIFwiZWxlbWVudHNcIiwgXCJleGlzdHNcIiwgXCJmcm9tXCIsIFwiZ3JhbnRcIiwgXCJncmFwaFwiLCBcImdyYXBoc1wiLCBcImlmXCIsIFwiaW5kZXhcIiwgXCJpbmRleGVzXCIsIFwibGFiZWxcIiwgXCJsYWJlbHNcIiwgXCJtYW5hZ2VtZW50XCIsIFwibWF0Y2hcIiwgXCJuYW1lXCIsIFwibmFtZXNcIiwgXCJuZXdcIiwgXCJub2RlXCIsIFwibm9kZXNcIiwgXCJub3RcIiwgXCJvZlwiLCBcIm9uXCIsIFwib3JcIiwgXCJwYXNzd29yZFwiLCBcInBvcHVsYXRlZFwiLCBcInByaXZpbGVnZXNcIiwgXCJwcm9wZXJ0eVwiLCBcInJlYWRcIiwgXCJyZWxhdGlvbnNoaXBcIiwgXCJyZWxhdGlvbnNoaXBzXCIsIFwicmVtb3ZlXCIsIFwicmVwbGFjZVwiLCBcInJlcXVpcmVkXCIsIFwicmV2b2tlXCIsIFwicm9sZVwiLCBcInJvbGVzXCIsIFwic2V0XCIsIFwic2hvd1wiLCBcInN0YXJ0XCIsIFwic3RhdHVzXCIsIFwic3RvcFwiLCBcInN1c3BlbmRlZFwiLCBcInRvXCIsIFwidHJhdmVyc2VcIiwgXCJ0eXBlXCIsIFwidHlwZXNcIiwgXCJ1c2VyXCIsIFwidXNlcnNcIiwgXCJ3aXRoXCIsIFwid3JpdGVcIl0pO1xuICAgIHZhciBvcGVyYXRvckNoYXJzID0gL1sqK1xcLTw+PSZ8fiVeXS87XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oLypiYXNlKi8pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b2tlbml6ZTogdG9rZW5CYXNlLFxuICAgICAgICAgIGNvbnRleHQ6IG51bGwsXG4gICAgICAgICAgaW5kZW50OiAwLFxuICAgICAgICAgIGNvbDogMFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRva2VuOiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdHJlYW0uc29sKCkpIHtcbiAgICAgICAgICBpZiAoc3RhdGUuY29udGV4dCAmJiAoc3RhdGUuY29udGV4dC5hbGlnbiA9PSBudWxsKSkge1xuICAgICAgICAgICAgc3RhdGUuY29udGV4dC5hbGlnbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZS5pbmRlbnQgPSBzdHJlYW0uaW5kZW50YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBzdGF0ZS50b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgaWYgKHN0eWxlICE9PSBcImNvbW1lbnRcIiAmJiBzdGF0ZS5jb250ZXh0ICYmIChzdGF0ZS5jb250ZXh0LmFsaWduID09IG51bGwpICYmIHN0YXRlLmNvbnRleHQudHlwZSAhPT0gXCJwYXR0ZXJuXCIpIHtcbiAgICAgICAgICBzdGF0ZS5jb250ZXh0LmFsaWduID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VyUHVuYyA9PT0gXCIoXCIpIHtcbiAgICAgICAgICBwdXNoQ29udGV4dChzdGF0ZSwgXCIpXCIsIHN0cmVhbS5jb2x1bW4oKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUHVuYyA9PT0gXCJbXCIpIHtcbiAgICAgICAgICBwdXNoQ29udGV4dChzdGF0ZSwgXCJdXCIsIHN0cmVhbS5jb2x1bW4oKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUHVuYyA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICBwdXNoQ29udGV4dChzdGF0ZSwgXCJ9XCIsIHN0cmVhbS5jb2x1bW4oKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoL1tcXF1cXH1cXCldLy50ZXN0KGN1clB1bmMpKSB7XG4gICAgICAgICAgd2hpbGUgKHN0YXRlLmNvbnRleHQgJiYgc3RhdGUuY29udGV4dC50eXBlID09PSBcInBhdHRlcm5cIikge1xuICAgICAgICAgICAgcG9wQ29udGV4dChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZS5jb250ZXh0ICYmIGN1clB1bmMgPT09IHN0YXRlLmNvbnRleHQudHlwZSkge1xuICAgICAgICAgICAgcG9wQ29udGV4dChzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGN1clB1bmMgPT09IFwiLlwiICYmIHN0YXRlLmNvbnRleHQgJiYgc3RhdGUuY29udGV4dC50eXBlID09PSBcInBhdHRlcm5cIikge1xuICAgICAgICAgIHBvcENvbnRleHQoc3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKC9hdG9tfHN0cmluZ3x2YXJpYWJsZS8udGVzdChzdHlsZSkgJiYgc3RhdGUuY29udGV4dCkge1xuICAgICAgICAgIGlmICgvW1xcfVxcXV0vLnRlc3Qoc3RhdGUuY29udGV4dC50eXBlKSkge1xuICAgICAgICAgICAgcHVzaENvbnRleHQoc3RhdGUsIFwicGF0dGVyblwiLCBzdHJlYW0uY29sdW1uKCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuY29udGV4dC50eXBlID09PSBcInBhdHRlcm5cIiAmJiAhc3RhdGUuY29udGV4dC5hbGlnbikge1xuICAgICAgICAgICAgc3RhdGUuY29udGV4dC5hbGlnbiA9IHRydWU7XG4gICAgICAgICAgICBzdGF0ZS5jb250ZXh0LmNvbCA9IHN0cmVhbS5jb2x1bW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSxcbiAgICAgIGluZGVudDogZnVuY3Rpb24oc3RhdGUsIHRleHRBZnRlcikge1xuICAgICAgICB2YXIgZmlyc3RDaGFyID0gdGV4dEFmdGVyICYmIHRleHRBZnRlci5jaGFyQXQoMCk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gc3RhdGUuY29udGV4dDtcbiAgICAgICAgaWYgKC9bXFxdXFx9XS8udGVzdChmaXJzdENoYXIpKSB7XG4gICAgICAgICAgd2hpbGUgKGNvbnRleHQgJiYgY29udGV4dC50eXBlID09PSBcInBhdHRlcm5cIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQucHJldjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsb3NpbmcgPSBjb250ZXh0ICYmIGZpcnN0Q2hhciA9PT0gY29udGV4dC50eXBlO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVybiAwO1xuICAgICAgICBpZiAoY29udGV4dC50eXBlID09PSBcImtleXdvcmRzXCIpIHJldHVybiBDb2RlTWlycm9yLmNvbW1hbmRzLm5ld2xpbmVBbmRJbmRlbnQ7XG4gICAgICAgIGlmIChjb250ZXh0LmFsaWduKSByZXR1cm4gY29udGV4dC5jb2wgKyAoY2xvc2luZyA/IDAgOiAxKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuaW5kZW50ICsgKGNsb3NpbmcgPyAwIDogaW5kZW50VW5pdCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgQ29kZU1pcnJvci5tb2RlRXh0ZW5zaW9uc1tcImN5cGhlclwiXSA9IHtcbiAgICBhdXRvRm9ybWF0TGluZUJyZWFrczogZnVuY3Rpb24odGV4dCkge1xuICAgICAgdmFyIGksIGxpbmVzLCByZVByb2Nlc3NlZFBvcnRpb247XG4gICAgICB2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgdmFyIHJlUHJvY2Vzc2VkUG9ydGlvbiA9IC9cXHMrXFxiKHJldHVybnx3aGVyZXxvcmRlciBieXxtYXRjaHx3aXRofHNraXB8bGltaXR8Y3JlYXRlfGRlbGV0ZXxzZXQpXFxiXFxzL2c7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKVxuICAgICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldLnJlcGxhY2UocmVQcm9jZXNzZWRQb3J0aW9uLCBcIiBcXG4kMSBcIikudHJpbSgpO1xuICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICB9O1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcImFwcGxpY2F0aW9uL3gtY3lwaGVyLXF1ZXJ5XCIsIFwiY3lwaGVyXCIpO1xuXG59KTtcbiJdLCJuYW1lcyI6WyJtb2QiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIkNvZGVNaXJyb3IiLCJ3b3JkUmVnZXhwIiwid29yZHMiLCJSZWdFeHAiLCJqb2luIiwiZGVmaW5lTW9kZSIsImNvbmZpZyIsInRva2VuQmFzZSIsInN0cmVhbSIsImNoIiwibmV4dCIsIm1hdGNoIiwidGVzdCIsImN1clB1bmMiLCJlYXQiLCJza2lwVG9FbmQiLCJvcGVyYXRvckNoYXJzIiwiZWF0V2hpbGUiLCJ3b3JkIiwiY3VycmVudCIsImZ1bmNzIiwicHJlZHMiLCJrZXl3b3JkcyIsInN5c3RlbUtleXdvcmRzIiwicHVzaENvbnRleHQiLCJzdGF0ZSIsInR5cGUiLCJjb2wiLCJjb250ZXh0IiwicHJldiIsImluZGVudCIsInBvcENvbnRleHQiLCJpbmRlbnRVbml0Iiwic3RhcnRTdGF0ZSIsInRva2VuaXplIiwidG9rZW4iLCJzb2wiLCJhbGlnbiIsImluZGVudGF0aW9uIiwiZWF0U3BhY2UiLCJzdHlsZSIsImNvbHVtbiIsInRleHRBZnRlciIsImZpcnN0Q2hhciIsImNoYXJBdCIsImNsb3NpbmciLCJjb21tYW5kcyIsIm5ld2xpbmVBbmRJbmRlbnQiLCJtb2RlRXh0ZW5zaW9ucyIsImF1dG9Gb3JtYXRMaW5lQnJlYWtzIiwidGV4dCIsImkiLCJsaW5lcyIsInJlUHJvY2Vzc2VkUG9ydGlvbiIsInNwbGl0IiwibGVuZ3RoIiwicmVwbGFjZSIsInRyaW0iLCJkZWZpbmVNSU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/cypher/cypher.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/cypher/cypher.js");
/******/ 	
/******/ })()
;