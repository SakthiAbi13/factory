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

/***/ "./resources/assets/vendor/libs/codemirror/mode/ebnf/ebnf.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/ebnf/ebnf.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"ebnf\", function (config) {\n    var commentType = {\n      slash: 0,\n      parenthesis: 1\n    };\n    var stateType = {\n      comment: 0,\n      _string: 1,\n      characterClass: 2\n    };\n    var bracesMode = null;\n    if (config.bracesMode) bracesMode = CodeMirror.getMode(config, config.bracesMode);\n    return {\n      startState: function startState() {\n        return {\n          stringType: null,\n          commentType: null,\n          braced: 0,\n          lhs: true,\n          localState: null,\n          stack: [],\n          inDefinition: false\n        };\n      },\n      token: function token(stream, state) {\n        if (!stream) return; //check for state changes\n\n        if (state.stack.length === 0) {\n          //strings\n          if (stream.peek() == '\"' || stream.peek() == \"'\") {\n            state.stringType = stream.peek();\n            stream.next(); // Skip quote\n\n            state.stack.unshift(stateType._string);\n          } else if (stream.match('/*')) {\n            //comments starting with /*\n            state.stack.unshift(stateType.comment);\n            state.commentType = commentType.slash;\n          } else if (stream.match('(*')) {\n            //comments starting with (*\n            state.stack.unshift(stateType.comment);\n            state.commentType = commentType.parenthesis;\n          }\n        } //return state\n        //stack has\n\n\n        switch (state.stack[0]) {\n          case stateType._string:\n            while (state.stack[0] === stateType._string && !stream.eol()) {\n              if (stream.peek() === state.stringType) {\n                stream.next(); // Skip quote\n\n                state.stack.shift(); // Clear flag\n              } else if (stream.peek() === \"\\\\\") {\n                stream.next();\n                stream.next();\n              } else {\n                stream.match(/^.[^\\\\\\\"\\']*/);\n              }\n            }\n\n            return state.lhs ? \"property string\" : \"string\";\n          // Token style\n\n          case stateType.comment:\n            while (state.stack[0] === stateType.comment && !stream.eol()) {\n              if (state.commentType === commentType.slash && stream.match('*/')) {\n                state.stack.shift(); // Clear flag\n\n                state.commentType = null;\n              } else if (state.commentType === commentType.parenthesis && stream.match('*)')) {\n                state.stack.shift(); // Clear flag\n\n                state.commentType = null;\n              } else {\n                stream.match(/^.[^\\*]*/);\n              }\n            }\n\n            return \"comment\";\n\n          case stateType.characterClass:\n            while (state.stack[0] === stateType.characterClass && !stream.eol()) {\n              if (!(stream.match(/^[^\\]\\\\]+/) || stream.match('.'))) {\n                state.stack.shift();\n              }\n            }\n\n            return \"operator\";\n        }\n\n        var peek = stream.peek();\n\n        if (bracesMode !== null && (state.braced || peek === \"{\")) {\n          if (state.localState === null) state.localState = CodeMirror.startState(bracesMode);\n          var token = bracesMode.token(stream, state.localState),\n              text = stream.current();\n\n          if (!token) {\n            for (var i = 0; i < text.length; i++) {\n              if (text[i] === \"{\") {\n                if (state.braced === 0) {\n                  token = \"matchingbracket\";\n                }\n\n                state.braced++;\n              } else if (text[i] === \"}\") {\n                state.braced--;\n\n                if (state.braced === 0) {\n                  token = \"matchingbracket\";\n                }\n              }\n            }\n          }\n\n          return token;\n        } //no stack\n\n\n        switch (peek) {\n          case \"[\":\n            stream.next();\n            state.stack.unshift(stateType.characterClass);\n            return \"bracket\";\n\n          case \":\":\n          case \"|\":\n          case \";\":\n            stream.next();\n            return \"operator\";\n\n          case \"%\":\n            if (stream.match(\"%%\")) {\n              return \"header\";\n            } else if (stream.match(/[%][A-Za-z]+/)) {\n              return \"keyword\";\n            } else if (stream.match(/[%][}]/)) {\n              return \"matchingbracket\";\n            }\n\n            break;\n\n          case \"/\":\n            if (stream.match(/[\\/][A-Za-z]+/)) {\n              return \"keyword\";\n            }\n\n          case \"\\\\\":\n            if (stream.match(/[\\][a-z]+/)) {\n              return \"string-2\";\n            }\n\n          case \".\":\n            if (stream.match(\".\")) {\n              return \"atom\";\n            }\n\n          case \"*\":\n          case \"-\":\n          case \"+\":\n          case \"^\":\n            if (stream.match(peek)) {\n              return \"atom\";\n            }\n\n          case \"$\":\n            if (stream.match(\"$$\")) {\n              return \"builtin\";\n            } else if (stream.match(/[$][0-9]+/)) {\n              return \"variable-3\";\n            }\n\n          case \"<\":\n            if (stream.match(/<<[a-zA-Z_]+>>/)) {\n              return \"builtin\";\n            }\n\n        }\n\n        if (stream.match('//')) {\n          stream.skipToEnd();\n          return \"comment\";\n        } else if (stream.match('return')) {\n          return \"operator\";\n        } else if (stream.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)) {\n          if (stream.match(/(?=[\\(.])/)) {\n            return \"variable\";\n          } else if (stream.match(/(?=[\\s\\n]*[:=])/)) {\n            return \"def\";\n          }\n\n          return \"variable-2\";\n        } else if ([\"[\", \"]\", \"(\", \")\"].indexOf(stream.peek()) != -1) {\n          stream.next();\n          return \"bracket\";\n        } else if (!stream.eatSpace()) {\n          stream.next();\n        }\n\n        return null;\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-ebnf\", \"ebnf\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9lYm5mL2VibmYuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3RCOztFQUVBQSxVQUFVLENBQUNDLFVBQVgsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBVUMsTUFBVixFQUFrQjtJQUM5QyxJQUFJQyxXQUFXLEdBQUc7TUFBQ0MsS0FBSyxFQUFFLENBQVI7TUFBV0MsV0FBVyxFQUFFO0lBQXhCLENBQWxCO0lBQ0EsSUFBSUMsU0FBUyxHQUFHO01BQUNDLE9BQU8sRUFBRSxDQUFWO01BQWFDLE9BQU8sRUFBRSxDQUF0QjtNQUF5QkMsY0FBYyxFQUFFO0lBQXpDLENBQWhCO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLElBQWpCO0lBRUEsSUFBSVIsTUFBTSxDQUFDUSxVQUFYLEVBQ0VBLFVBQVUsR0FBR1YsVUFBVSxDQUFDVyxPQUFYLENBQW1CVCxNQUFuQixFQUEyQkEsTUFBTSxDQUFDUSxVQUFsQyxDQUFiO0lBRUYsT0FBTztNQUNMRSxVQUFVLEVBQUUsc0JBQVk7UUFDdEIsT0FBTztVQUNMQyxVQUFVLEVBQUUsSUFEUDtVQUVMVixXQUFXLEVBQUUsSUFGUjtVQUdMVyxNQUFNLEVBQUUsQ0FISDtVQUlMQyxHQUFHLEVBQUUsSUFKQTtVQUtMQyxVQUFVLEVBQUUsSUFMUDtV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QU8sWUFBUDtRQUNELENBUE0sTUFPQSxJQUFJLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCTyxPQUFyQixDQUE2QmIsTUFBTSxDQUFDRyxJQUFQLEVBQTdCLEtBQStDLENBQUMsQ0FBcEQsRUFBdUQ7VUFDNURILE1BQU0sQ0FBQ0ksSUFBUDtVQUNBLE9BQU8sU0FBUDtRQUNELENBSE0sTUFHQSxJQUFJLENBQUNKLE1BQU0sQ0FBQ2MsUUFBUCxFQUFMLEVBQXdCO1VBQzdCZCxNQUFNLENBQUNJLElBQVA7UUFDRDs7UUFDRCxPQUFPLElBQVA7TUFDRDtJQXhLSSxDQUFQO0VBMEtELENBbExEO0VBb0xBeEIsVUFBVSxDQUFDbUMsVUFBWCxDQUFzQixhQUF0QixFQUFxQyxNQUFyQztBQUNELENBL0xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9jb2RlbWlycm9yL21vZGUvZWJuZi9lYm5mLmpzPzFhZTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwiZWJuZlwiLCBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdmFyIGNvbW1lbnRUeXBlID0ge3NsYXNoOiAwLCBwYXJlbnRoZXNpczogMX07XG4gICAgdmFyIHN0YXRlVHlwZSA9IHtjb21tZW50OiAwLCBfc3RyaW5nOiAxLCBjaGFyYWN0ZXJDbGFzczogMn07XG4gICAgdmFyIGJyYWNlc01vZGUgPSBudWxsO1xuXG4gICAgaWYgKGNvbmZpZy5icmFjZXNNb2RlKVxuICAgICAgYnJhY2VzTW9kZSA9IENvZGVNaXJyb3IuZ2V0TW9kZShjb25maWcsIGNvbmZpZy5icmFjZXNNb2RlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RyaW5nVHlwZTogbnVsbCxcbiAgICAgICAgICBjb21tZW50VHlwZTogbnVsbCxcbiAgICAgICAgICBicmFjZWQ6IDAsXG4gICAgICAgICAgbGhzOiB0cnVlLFxuICAgICAgICAgIGxvY2FsU3RhdGU6IG51bGwsXG4gICAgICAgICAgc3RhY2s6IFtdLFxuICAgICAgICAgIGluRGVmaW5pdGlvbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKCFzdHJlYW0pIHJldHVybjtcblxuICAgICAgICAvL2NoZWNrIGZvciBzdGF0ZSBjaGFuZ2VzXG4gICAgICAgIGlmIChzdGF0ZS5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvL3N0cmluZ3NcbiAgICAgICAgICBpZiAoKHN0cmVhbS5wZWVrKCkgPT0gJ1wiJykgfHwgKHN0cmVhbS5wZWVrKCkgPT0gXCInXCIpKSB7XG4gICAgICAgICAgICBzdGF0ZS5zdHJpbmdUeXBlID0gc3RyZWFtLnBlZWsoKTtcbiAgICAgICAgICAgIHN0cmVhbS5uZXh0KCk7IC8vIFNraXAgcXVvdGVcbiAgICAgICAgICAgIHN0YXRlLnN0YWNrLnVuc2hpZnQoc3RhdGVUeXBlLl9zdHJpbmcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyZWFtLm1hdGNoKCcvKicpKSB7IC8vY29tbWVudHMgc3RhcnRpbmcgd2l0aCAvKlxuICAgICAgICAgICAgc3RhdGUuc3RhY2sudW5zaGlmdChzdGF0ZVR5cGUuY29tbWVudCk7XG4gICAgICAgICAgICBzdGF0ZS5jb21tZW50VHlwZSA9IGNvbW1lbnRUeXBlLnNsYXNoO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyZWFtLm1hdGNoKCcoKicpKSB7IC8vY29tbWVudHMgc3RhcnRpbmcgd2l0aCAoKlxuICAgICAgICAgICAgc3RhdGUuc3RhY2sudW5zaGlmdChzdGF0ZVR5cGUuY29tbWVudCk7XG4gICAgICAgICAgICBzdGF0ZS5jb21tZW50VHlwZSA9IGNvbW1lbnRUeXBlLnBhcmVudGhlc2lzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vcmV0dXJuIHN0YXRlXG4gICAgICAgIC8vc3RhY2sgaGFzXG4gICAgICAgIHN3aXRjaCAoc3RhdGUuc3RhY2tbMF0pIHtcbiAgICAgICAgY2FzZSBzdGF0ZVR5cGUuX3N0cmluZzpcbiAgICAgICAgICB3aGlsZSAoc3RhdGUuc3RhY2tbMF0gPT09IHN0YXRlVHlwZS5fc3RyaW5nICYmICFzdHJlYW0uZW9sKCkpIHtcbiAgICAgICAgICAgIGlmIChzdHJlYW0ucGVlaygpID09PSBzdGF0ZS5zdHJpbmdUeXBlKSB7XG4gICAgICAgICAgICAgIHN0cmVhbS5uZXh0KCk7IC8vIFNraXAgcXVvdGVcbiAgICAgICAgICAgICAgc3RhdGUuc3RhY2suc2hpZnQoKTsgLy8gQ2xlYXIgZmxhZ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0ucGVlaygpID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyZWFtLm1hdGNoKC9eLlteXFxcXFxcXCJcXCddKi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RhdGUubGhzID8gXCJwcm9wZXJ0eSBzdHJpbmdcIiA6IFwic3RyaW5nXCI7IC8vIFRva2VuIHN0eWxlXG5cbiAgICAgICAgY2FzZSBzdGF0ZVR5cGUuY29tbWVudDpcbiAgICAgICAgICB3aGlsZSAoc3RhdGUuc3RhY2tbMF0gPT09IHN0YXRlVHlwZS5jb21tZW50ICYmICFzdHJlYW0uZW9sKCkpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jb21tZW50VHlwZSA9PT0gY29tbWVudFR5cGUuc2xhc2ggJiYgc3RyZWFtLm1hdGNoKCcqLycpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnN0YWNrLnNoaWZ0KCk7IC8vIENsZWFyIGZsYWdcbiAgICAgICAgICAgICAgc3RhdGUuY29tbWVudFR5cGUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jb21tZW50VHlwZSA9PT0gY29tbWVudFR5cGUucGFyZW50aGVzaXMgJiYgc3RyZWFtLm1hdGNoKCcqKScpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnN0YWNrLnNoaWZ0KCk7IC8vIENsZWFyIGZsYWdcbiAgICAgICAgICAgICAgc3RhdGUuY29tbWVudFR5cGUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyZWFtLm1hdGNoKC9eLlteXFwqXSovKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuXG4gICAgICAgIGNhc2Ugc3RhdGVUeXBlLmNoYXJhY3RlckNsYXNzOlxuICAgICAgICAgIHdoaWxlIChzdGF0ZS5zdGFja1swXSA9PT0gc3RhdGVUeXBlLmNoYXJhY3RlckNsYXNzICYmICFzdHJlYW0uZW9sKCkpIHtcbiAgICAgICAgICAgIGlmICghKHN0cmVhbS5tYXRjaCgvXlteXFxdXFxcXF0rLykgfHwgc3RyZWFtLm1hdGNoKCcuJykpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGVlayA9IHN0cmVhbS5wZWVrKCk7XG5cbiAgICAgICAgaWYgKGJyYWNlc01vZGUgIT09IG51bGwgJiYgKHN0YXRlLmJyYWNlZCB8fCBwZWVrID09PSBcIntcIikpIHtcbiAgICAgICAgICBpZiAoc3RhdGUubG9jYWxTdGF0ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHN0YXRlLmxvY2FsU3RhdGUgPSBDb2RlTWlycm9yLnN0YXJ0U3RhdGUoYnJhY2VzTW9kZSk7XG5cbiAgICAgICAgICB2YXIgdG9rZW4gPSBicmFjZXNNb2RlLnRva2VuKHN0cmVhbSwgc3RhdGUubG9jYWxTdGF0ZSksXG4gICAgICAgICAgdGV4dCA9IHN0cmVhbS5jdXJyZW50KCk7XG5cbiAgICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHRleHRbaV0gPT09IFwie1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmJyYWNlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgdG9rZW4gPSBcIm1hdGNoaW5nYnJhY2tldFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5icmFjZWQrKztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0W2ldID09PSBcIn1cIikge1xuICAgICAgICAgICAgICAgIHN0YXRlLmJyYWNlZC0tO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5icmFjZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHRva2VuID0gXCJtYXRjaGluZ2JyYWNrZXRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ubyBzdGFja1xuICAgICAgICBzd2l0Y2ggKHBlZWspIHtcbiAgICAgICAgY2FzZSBcIltcIjpcbiAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAgIHN0YXRlLnN0YWNrLnVuc2hpZnQoc3RhdGVUeXBlLmNoYXJhY3RlckNsYXNzKTtcbiAgICAgICAgICByZXR1cm4gXCJicmFja2V0XCI7XG4gICAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgIGNhc2UgXCJ8XCI6XG4gICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgICBjYXNlIFwiJVwiOlxuICAgICAgICAgIGlmIChzdHJlYW0ubWF0Y2goXCIlJVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaGVhZGVyXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0ubWF0Y2goL1slXVtBLVphLXpdKy8pKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0ubWF0Y2goL1slXVt9XS8pKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtYXRjaGluZ2JyYWNrZXRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvW1xcL11bQS1aYS16XSsvKSkge1xuICAgICAgICAgIHJldHVybiBcImtleXdvcmRcIjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiXFxcXFwiOlxuICAgICAgICAgIGlmIChzdHJlYW0ubWF0Y2goL1tcXF1bYS16XSsvKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nLTJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgICAgaWYgKHN0cmVhbS5tYXRjaChcIi5cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcImF0b21cIjtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgIGNhc2UgXCJeXCI6XG4gICAgICAgICAgaWYgKHN0cmVhbS5tYXRjaChwZWVrKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKFwiJCRcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcImJ1aWx0aW5cIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaCgvWyRdWzAtOV0rLykpIHtcbiAgICAgICAgICAgIHJldHVybiBcInZhcmlhYmxlLTNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCI8XCI6XG4gICAgICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvPDxbYS16QS1aX10rPj4vKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYnVpbHRpblwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJlYW0ubWF0Y2goJy8vJykpIHtcbiAgICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaCgncmV0dXJuJykpIHtcbiAgICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaCgvXlthLXpBLVpfXVthLXpBLVowLTlfXSovKSkge1xuICAgICAgICAgIGlmIChzdHJlYW0ubWF0Y2goLyg/PVtcXCguXSkvKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwidmFyaWFibGVcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaCgvKD89W1xcc1xcbl0qWzo9XSkvKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGVmXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcInZhcmlhYmxlLTJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChbXCJbXCIsIFwiXVwiLCBcIihcIiwgXCIpXCJdLmluZGV4T2Yoc3RyZWFtLnBlZWsoKSkgIT0gLTEpIHtcbiAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAgIHJldHVybiBcImJyYWNrZXRcIjtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyZWFtLmVhdFNwYWNlKCkpIHtcbiAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1lYm5mXCIsIFwiZWJuZlwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJjb25maWciLCJjb21tZW50VHlwZSIsInNsYXNoIiwicGFyZW50aGVzaXMiLCJzdGF0ZVR5cGUiLCJjb21tZW50IiwiX3N0cmluZyIsImNoYXJhY3RlckNsYXNzIiwiYnJhY2VzTW9kZSIsImdldE1vZGUiLCJzdGFydFN0YXRlIiwic3RyaW5nVHlwZSIsImJyYWNlZCIsImxocyIsImxvY2FsU3RhdGUiLCJzdGFjayIsImluRGVmaW5pdGlvbiIsInRva2VuIiwic3RyZWFtIiwic3RhdGUiLCJsZW5ndGgiLCJwZWVrIiwibmV4dCIsInVuc2hpZnQiLCJtYXRjaCIsImVvbCIsInNoaWZ0IiwidGV4dCIsImN1cnJlbnQiLCJpIiwic2tpcFRvRW5kIiwiaW5kZXhPZiIsImVhdFNwYWNlIiwiZGVmaW5lTUlNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/ebnf/ebnf.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/ebnf/ebnf.js");
/******/ 	
/******/ })()
;