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

/***/ "./resources/assets/vendor/libs/codemirror/mode/forth/forth.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/forth/forth.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n// Author: Aliaksei Chapyzhenka\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  function toWordList(words) {\n    var ret = [];\n    words.split(' ').forEach(function (e) {\n      ret.push({\n        name: e\n      });\n    });\n    return ret;\n  }\n\n  var coreWordList = toWordList('INVERT AND OR XOR\\\n 2* 2/ LSHIFT RSHIFT\\\n 0= = 0< < > U< MIN MAX\\\n 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP\\\n >R R> R@\\\n + - 1+ 1- ABS NEGATE\\\n S>D * M* UM*\\\n FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD\\\n HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2!\\\n ALIGN ALIGNED +! ALLOT\\\n CHAR [CHAR] [ ] BL\\\n FIND EXECUTE IMMEDIATE COUNT LITERAL STATE\\\n ; DOES> >BODY\\\n EVALUATE\\\n SOURCE >IN\\\n <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL\\\n FILL MOVE\\\n . CR EMIT SPACE SPACES TYPE U. .R U.R\\\n ACCEPT\\\n TRUE FALSE\\\n <> U> 0<> 0>\\\n NIP TUCK ROLL PICK\\\n 2>R 2R@ 2R>\\\n WITHIN UNUSED MARKER\\\n I J\\\n TO\\\n COMPILE, [COMPILE]\\\n SAVE-INPUT RESTORE-INPUT\\\n PAD ERASE\\\n 2LITERAL DNEGATE\\\n D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS\\\n M+ M*/ D. D.R 2ROT DU<\\\n CATCH THROW\\\n FREE RESIZE ALLOCATE\\\n CS-PICK CS-ROLL\\\n GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER\\\n PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER\\\n -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL');\n  var immediateWordList = toWordList('IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE');\n  CodeMirror.defineMode('forth', function () {\n    function searchWordList(wordList, word) {\n      var i;\n\n      for (i = wordList.length - 1; i >= 0; i--) {\n        if (wordList[i].name === word.toUpperCase()) {\n          return wordList[i];\n        }\n      }\n\n      return undefined;\n    }\n\n    return {\n      startState: function startState() {\n        return {\n          state: '',\n          base: 10,\n          coreWordList: coreWordList,\n          immediateWordList: immediateWordList,\n          wordList: []\n        };\n      },\n      token: function token(stream, stt) {\n        var mat;\n\n        if (stream.eatSpace()) {\n          return null;\n        }\n\n        if (stt.state === '') {\n          // interpretation\n          if (stream.match(/^(\\]|:NONAME)(\\s|$)/i)) {\n            stt.state = ' compilation';\n            return 'builtin compilation';\n          }\n\n          mat = stream.match(/^(\\:)\\s+(\\S+)(\\s|$)+/);\n\n          if (mat) {\n            stt.wordList.push({\n              name: mat[2].toUpperCase()\n            });\n            stt.state = ' compilation';\n            return 'def' + stt.state;\n          }\n\n          mat = stream.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\\s+(\\S+)(\\s|$)+/i);\n\n          if (mat) {\n            stt.wordList.push({\n              name: mat[2].toUpperCase()\n            });\n            return 'def' + stt.state;\n          }\n\n          mat = stream.match(/^(\\'|\\[\\'\\])\\s+(\\S+)(\\s|$)+/);\n\n          if (mat) {\n            return 'builtin' + stt.state;\n          }\n        } else {\n          // compilation\n          // ; [\n          if (stream.match(/^(\\;|\\[)(\\s)/)) {\n            stt.state = '';\n            stream.backUp(1);\n            return 'builtin compilation';\n          }\n\n          if (stream.match(/^(\\;|\\[)($)/)) {\n            stt.state = '';\n            return 'builtin compilation';\n          }\n\n          if (stream.match(/^(POSTPONE)\\s+\\S+(\\s|$)+/)) {\n            return 'builtin';\n          }\n        } // dynamic wordlist\n\n\n        mat = stream.match(/^(\\S+)(\\s+|$)/);\n\n        if (mat) {\n          if (searchWordList(stt.wordList, mat[1]) !== undefined) {\n            return 'variable' + stt.state;\n          } // comments\n\n\n          if (mat[1] === '\\\\') {\n            stream.skipToEnd();\n            return 'comment' + stt.state;\n          } // core words\n\n\n          if (searchWordList(stt.coreWordList, mat[1]) !== undefined) {\n            return 'builtin' + stt.state;\n          }\n\n          if (searchWordList(stt.immediateWordList, mat[1]) !== undefined) {\n            return 'keyword' + stt.state;\n          }\n\n          if (mat[1] === '(') {\n            stream.eatWhile(function (s) {\n              return s !== ')';\n            });\n            stream.eat(')');\n            return 'comment' + stt.state;\n          } // // strings\n\n\n          if (mat[1] === '.(') {\n            stream.eatWhile(function (s) {\n              return s !== ')';\n            });\n            stream.eat(')');\n            return 'string' + stt.state;\n          }\n\n          if (mat[1] === 'S\"' || mat[1] === '.\"' || mat[1] === 'C\"') {\n            stream.eatWhile(function (s) {\n              return s !== '\"';\n            });\n            stream.eat('\"');\n            return 'string' + stt.state;\n          } // numbers\n\n\n          if (mat[1] - 0xfffffffff) {\n            return 'number' + stt.state;\n          } // if (mat[1].match(/^[-+]?[0-9]+\\.[0-9]*/)) {\n          //     return 'number' + stt.state;\n          // }\n\n\n          return 'atom' + stt.state;\n        }\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-forth\", \"forth\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9mb3J0aC9mb3J0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUE7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0Qjs7RUFFQSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtJQUN6QixJQUFJQyxHQUFHLEdBQUcsRUFBVjtJQUNBRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxHQUFaLEVBQWlCQyxPQUFqQixDQUF5QixVQUFTQyxDQUFULEVBQVc7TUFDbENILEdBQUcsQ0FBQ0ksSUFBSixDQUFTO1FBQUNDLElBQUksRUFBRUY7TUFBUCxDQUFUO0lBQ0QsQ0FGRDtJQUdBLE9BQU9ILEdBQVA7RUFDRDs7RUFFRCxJQUFJTSxZQUFZLEdBQUdSLFVBQVUsQ0FDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REF0QytCLENBQTdCO0VBd0NBLElBQUlTLGlCQUFpQixHQUFHVCxVQUFVLENBQUMsa0lBQUQsQ0FB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UixHQUFHLENBQUNKLEtBQXRCO1VBQ0Q7O1VBQ0QsSUFBSUssR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLElBQVgsSUFBbUJBLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVyxJQUE5QixJQUFzQ0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLElBQXJELEVBQTJEO1lBQ3pERixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsVUFBVUMsQ0FBVixFQUFhO2NBQUUsT0FBT0EsQ0FBQyxLQUFLLEdBQWI7WUFBbUIsQ0FBbEQ7WUFDQVIsTUFBTSxDQUFDUyxHQUFQLENBQVcsR0FBWDtZQUNBLE9BQU8sV0FBV1IsR0FBRyxDQUFDSixLQUF0QjtVQUNELENBbkNJLENBcUNMOzs7VUFDQSxJQUFJSyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsV0FBYixFQUEwQjtZQUN4QixPQUFPLFdBQVdELEdBQUcsQ0FBQ0osS0FBdEI7VUFDRCxDQXhDSSxDQXlDTDtVQUNBO1VBQ0E7OztVQUVBLE9BQU8sU0FBU0ksR0FBRyxDQUFDSixLQUFwQjtRQUNEO01BQ0Y7SUFwR0UsQ0FBUDtFQXNHQyxDQWhIRDtFQWlIQXBCLFVBQVUsQ0FBQ2lDLFVBQVgsQ0FBc0IsY0FBdEIsRUFBc0MsT0FBdEM7QUFDRCxDQTlLRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9tb2RlL2ZvcnRoL2ZvcnRoLmpzP2JjMjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLy8gQXV0aG9yOiBBbGlha3NlaSBDaGFweXpoZW5rYVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiB0b1dvcmRMaXN0KHdvcmRzKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIHdvcmRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgIHJldC5wdXNoKHtuYW1lOiBlfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHZhciBjb3JlV29yZExpc3QgPSB0b1dvcmRMaXN0KFxuJ0lOVkVSVCBBTkQgT1IgWE9SXFxcbiAyKiAyLyBMU0hJRlQgUlNISUZUXFxcbiAwPSA9IDA8IDwgPiBVPCBNSU4gTUFYXFxcbiAyRFJPUCAyRFVQIDJPVkVSIDJTV0FQID9EVVAgREVQVEggRFJPUCBEVVAgT1ZFUiBST1QgU1dBUFxcXG4gPlIgUj4gUkBcXFxuICsgLSAxKyAxLSBBQlMgTkVHQVRFXFxcbiBTPkQgKiBNKiBVTSpcXFxuIEZNL01PRCBTTS9SRU0gVU0vTU9EICovICovTU9EIC8gL01PRCBNT0RcXFxuIEhFUkUgLCBAICEgQ0VMTCsgQ0VMTFMgQywgQ0AgQyEgQ0hBUlMgMkAgMiFcXFxuIEFMSUdOIEFMSUdORUQgKyEgQUxMT1RcXFxuIENIQVIgW0NIQVJdIFsgXSBCTFxcXG4gRklORCBFWEVDVVRFIElNTUVESUFURSBDT1VOVCBMSVRFUkFMIFNUQVRFXFxcbiA7IERPRVM+ID5CT0RZXFxcbiBFVkFMVUFURVxcXG4gU09VUkNFID5JTlxcXG4gPCMgIyAjUyAjPiBIT0xEIFNJR04gQkFTRSA+TlVNQkVSIEhFWCBERUNJTUFMXFxcbiBGSUxMIE1PVkVcXFxuIC4gQ1IgRU1JVCBTUEFDRSBTUEFDRVMgVFlQRSBVLiAuUiBVLlJcXFxuIEFDQ0VQVFxcXG4gVFJVRSBGQUxTRVxcXG4gPD4gVT4gMDw+IDA+XFxcbiBOSVAgVFVDSyBST0xMIFBJQ0tcXFxuIDI+UiAyUkAgMlI+XFxcbiBXSVRISU4gVU5VU0VEIE1BUktFUlxcXG4gSSBKXFxcbiBUT1xcXG4gQ09NUElMRSwgW0NPTVBJTEVdXFxcbiBTQVZFLUlOUFVUIFJFU1RPUkUtSU5QVVRcXFxuIFBBRCBFUkFTRVxcXG4gMkxJVEVSQUwgRE5FR0FURVxcXG4gRC0gRCsgRDA8IEQwPSBEMiogRDIvIEQ8IEQ9IERNQVggRE1JTiBEPlMgREFCU1xcXG4gTSsgTSovIEQuIEQuUiAyUk9UIERVPFxcXG4gQ0FUQ0ggVEhST1dcXFxuIEZSRUUgUkVTSVpFIEFMTE9DQVRFXFxcbiBDUy1QSUNLIENTLVJPTExcXFxuIEdFVC1DVVJSRU5UIFNFVC1DVVJSRU5UIEZPUlRILVdPUkRMSVNUIEdFVC1PUkRFUiBTRVQtT1JERVJcXFxuIFBSRVZJT1VTIFNFQVJDSC1XT1JETElTVCBXT1JETElTVCBGSU5EIEFMU08gT05MWSBGT1JUSCBERUZJTklUSU9OUyBPUkRFUlxcXG4gLVRSQUlMSU5HIC9TVFJJTkcgU0VBUkNIIENPTVBBUkUgQ01PVkUgQ01PVkU+IEJMQU5LIFNMSVRFUkFMJyk7XG5cbiAgdmFyIGltbWVkaWF0ZVdvcmRMaXN0ID0gdG9Xb3JkTGlzdCgnSUYgRUxTRSBUSEVOIEJFR0lOIFdISUxFIFJFUEVBVCBVTlRJTCBSRUNVUlNFIFtJRl0gW0VMU0VdIFtUSEVOXSA/RE8gRE8gTE9PUCArTE9PUCBVTkxPT1AgTEVBVkUgRVhJVCBBR0FJTiBDQVNFIE9GIEVORE9GIEVORENBU0UnKTtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoJ2ZvcnRoJywgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gc2VhcmNoV29yZExpc3QgKHdvcmRMaXN0LCB3b3JkKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSA9IHdvcmRMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICh3b3JkTGlzdFtpXS5uYW1lID09PSB3b3JkLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gd29yZExpc3RbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICByZXR1cm4ge1xuICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICBiYXNlOiAxMCxcbiAgICAgICAgY29yZVdvcmRMaXN0OiBjb3JlV29yZExpc3QsXG4gICAgICAgIGltbWVkaWF0ZVdvcmRMaXN0OiBpbW1lZGlhdGVXb3JkTGlzdCxcbiAgICAgICAgd29yZExpc3Q6IFtdXG4gICAgICB9O1xuICAgIH0sXG4gICAgdG9rZW46IGZ1bmN0aW9uIChzdHJlYW0sIHN0dCkge1xuICAgICAgdmFyIG1hdDtcbiAgICAgIGlmIChzdHJlYW0uZWF0U3BhY2UoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChzdHQuc3RhdGUgPT09ICcnKSB7IC8vIGludGVycHJldGF0aW9uXG4gICAgICAgIGlmIChzdHJlYW0ubWF0Y2goL14oXFxdfDpOT05BTUUpKFxcc3wkKS9pKSkge1xuICAgICAgICAgIHN0dC5zdGF0ZSA9ICcgY29tcGlsYXRpb24nO1xuICAgICAgICAgIHJldHVybiAnYnVpbHRpbiBjb21waWxhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgbWF0ID0gc3RyZWFtLm1hdGNoKC9eKFxcOilcXHMrKFxcUyspKFxcc3wkKSsvKTtcbiAgICAgICAgaWYgKG1hdCkge1xuICAgICAgICAgIHN0dC53b3JkTGlzdC5wdXNoKHtuYW1lOiBtYXRbMl0udG9VcHBlckNhc2UoKX0pO1xuICAgICAgICAgIHN0dC5zdGF0ZSA9ICcgY29tcGlsYXRpb24nO1xuICAgICAgICAgIHJldHVybiAnZGVmJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBtYXQgPSBzdHJlYW0ubWF0Y2goL14oVkFSSUFCTEV8MlZBUklBQkxFfENPTlNUQU5UfDJDT05TVEFOVHxDUkVBVEV8UE9TVFBPTkV8VkFMVUV8V09SRClcXHMrKFxcUyspKFxcc3wkKSsvaSk7XG4gICAgICAgIGlmIChtYXQpIHtcbiAgICAgICAgICBzdHQud29yZExpc3QucHVzaCh7bmFtZTogbWF0WzJdLnRvVXBwZXJDYXNlKCl9KTtcbiAgICAgICAgICByZXR1cm4gJ2RlZicgKyBzdHQuc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgbWF0ID0gc3RyZWFtLm1hdGNoKC9eKFxcJ3xcXFtcXCdcXF0pXFxzKyhcXFMrKShcXHN8JCkrLyk7XG4gICAgICAgIGlmIChtYXQpIHtcbiAgICAgICAgICByZXR1cm4gJ2J1aWx0aW4nICsgc3R0LnN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIGNvbXBpbGF0aW9uXG4gICAgICAgIC8vIDsgW1xuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eKFxcO3xcXFspKFxccykvKSkge1xuICAgICAgICAgIHN0dC5zdGF0ZSA9ICcnO1xuICAgICAgICAgIHN0cmVhbS5iYWNrVXAoMSk7XG4gICAgICAgICAgcmV0dXJuICdidWlsdGluIGNvbXBpbGF0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eKFxcO3xcXFspKCQpLykpIHtcbiAgICAgICAgICBzdHQuc3RhdGUgPSAnJztcbiAgICAgICAgICByZXR1cm4gJ2J1aWx0aW4gY29tcGlsYXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0ubWF0Y2goL14oUE9TVFBPTkUpXFxzK1xcUysoXFxzfCQpKy8pKSB7XG4gICAgICAgICAgcmV0dXJuICdidWlsdGluJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkeW5hbWljIHdvcmRsaXN0XG4gICAgICBtYXQgPSBzdHJlYW0ubWF0Y2goL14oXFxTKykoXFxzK3wkKS8pO1xuICAgICAgaWYgKG1hdCkge1xuICAgICAgICBpZiAoc2VhcmNoV29yZExpc3Qoc3R0LndvcmRMaXN0LCBtYXRbMV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3ZhcmlhYmxlJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbW1lbnRzXG4gICAgICAgIGlmIChtYXRbMV0gPT09ICdcXFxcJykge1xuICAgICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgICAgIHJldHVybiAnY29tbWVudCcgKyBzdHQuc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29yZSB3b3Jkc1xuICAgICAgICAgIGlmIChzZWFyY2hXb3JkTGlzdChzdHQuY29yZVdvcmRMaXN0LCBtYXRbMV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnYnVpbHRpbicgKyBzdHQuc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWFyY2hXb3JkTGlzdChzdHQuaW1tZWRpYXRlV29yZExpc3QsIG1hdFsxXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICdrZXl3b3JkJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0WzFdID09PSAnKCcpIHtcbiAgICAgICAgICAgIHN0cmVhbS5lYXRXaGlsZShmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyknOyB9KTtcbiAgICAgICAgICAgIHN0cmVhbS5lYXQoJyknKTtcbiAgICAgICAgICAgIHJldHVybiAnY29tbWVudCcgKyBzdHQuc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gLy8gc3RyaW5nc1xuICAgICAgICAgIGlmIChtYXRbMV0gPT09ICcuKCcpIHtcbiAgICAgICAgICAgIHN0cmVhbS5lYXRXaGlsZShmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyknOyB9KTtcbiAgICAgICAgICAgIHN0cmVhbS5lYXQoJyknKTtcbiAgICAgICAgICAgIHJldHVybiAnc3RyaW5nJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hdFsxXSA9PT0gJ1NcIicgfHwgbWF0WzFdID09PSAnLlwiJyB8fCBtYXRbMV0gPT09ICdDXCInKSB7XG4gICAgICAgICAgICBzdHJlYW0uZWF0V2hpbGUoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICdcIic7IH0pO1xuICAgICAgICAgICAgc3RyZWFtLmVhdCgnXCInKTtcbiAgICAgICAgICAgIHJldHVybiAnc3RyaW5nJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgaWYgKG1hdFsxXSAtIDB4ZmZmZmZmZmZmKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bWJlcicgKyBzdHQuc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGlmIChtYXRbMV0ubWF0Y2goL15bLStdP1swLTldK1xcLlswLTldKi8pKSB7XG4gICAgICAgICAgLy8gICAgIHJldHVybiAnbnVtYmVyJyArIHN0dC5zdGF0ZTtcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICByZXR1cm4gJ2F0b20nICsgc3R0LnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1mb3J0aFwiLCBcImZvcnRoXCIpO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwidG9Xb3JkTGlzdCIsIndvcmRzIiwicmV0Iiwic3BsaXQiLCJmb3JFYWNoIiwiZSIsInB1c2giLCJuYW1lIiwiY29yZVdvcmRMaXN0IiwiaW1tZWRpYXRlV29yZExpc3QiLCJkZWZpbmVNb2RlIiwic2VhcmNoV29yZExpc3QiLCJ3b3JkTGlzdCIsIndvcmQiLCJpIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJ1bmRlZmluZWQiLCJzdGFydFN0YXRlIiwic3RhdGUiLCJiYXNlIiwidG9rZW4iLCJzdHJlYW0iLCJzdHQiLCJtYXQiLCJlYXRTcGFjZSIsIm1hdGNoIiwiYmFja1VwIiwic2tpcFRvRW5kIiwiZWF0V2hpbGUiLCJzIiwiZWF0IiwiZGVmaW5lTUlNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/forth/forth.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/forth/forth.js");
/******/ 	
/******/ })()
;