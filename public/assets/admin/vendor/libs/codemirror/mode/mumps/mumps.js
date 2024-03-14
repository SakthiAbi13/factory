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

/***/ "./resources/assets/vendor/libs/codemirror/mode/mumps/mumps.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/mode/mumps/mumps.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n/*\n  This MUMPS Language script was constructed using vbscript.js as a template.\n*/\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"mumps\", function () {\n    function wordRegexp(words) {\n      return new RegExp(\"^((\" + words.join(\")|(\") + \"))\\\\b\", \"i\");\n    }\n\n    var singleOperators = new RegExp(\"^[\\\\+\\\\-\\\\*/&#!_?\\\\\\\\<>=\\\\'\\\\[\\\\]]\");\n    var doubleOperators = new RegExp(\"^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))\");\n    var singleDelimiters = new RegExp(\"^[\\\\.,:]\");\n    var brackets = new RegExp(\"[()]\");\n    var identifiers = new RegExp(\"^[%A-Za-z][A-Za-z0-9]*\");\n    var commandKeywords = [\"break\", \"close\", \"do\", \"else\", \"for\", \"goto\", \"halt\", \"hang\", \"if\", \"job\", \"kill\", \"lock\", \"merge\", \"new\", \"open\", \"quit\", \"read\", \"set\", \"tcommit\", \"trollback\", \"tstart\", \"use\", \"view\", \"write\", \"xecute\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"q\", \"r\", \"s\", \"tc\", \"tro\", \"ts\", \"u\", \"v\", \"w\", \"x\"]; // The following list includes intrinsic functions _and_ special variables\n\n    var intrinsicFuncsWords = [\"\\\\$ascii\", \"\\\\$char\", \"\\\\$data\", \"\\\\$ecode\", \"\\\\$estack\", \"\\\\$etrap\", \"\\\\$extract\", \"\\\\$find\", \"\\\\$fnumber\", \"\\\\$get\", \"\\\\$horolog\", \"\\\\$io\", \"\\\\$increment\", \"\\\\$job\", \"\\\\$justify\", \"\\\\$length\", \"\\\\$name\", \"\\\\$next\", \"\\\\$order\", \"\\\\$piece\", \"\\\\$qlength\", \"\\\\$qsubscript\", \"\\\\$query\", \"\\\\$quit\", \"\\\\$random\", \"\\\\$reverse\", \"\\\\$select\", \"\\\\$stack\", \"\\\\$test\", \"\\\\$text\", \"\\\\$translate\", \"\\\\$view\", \"\\\\$x\", \"\\\\$y\", \"\\\\$a\", \"\\\\$c\", \"\\\\$d\", \"\\\\$e\", \"\\\\$ec\", \"\\\\$es\", \"\\\\$et\", \"\\\\$f\", \"\\\\$fn\", \"\\\\$g\", \"\\\\$h\", \"\\\\$i\", \"\\\\$j\", \"\\\\$l\", \"\\\\$n\", \"\\\\$na\", \"\\\\$o\", \"\\\\$p\", \"\\\\$q\", \"\\\\$ql\", \"\\\\$qs\", \"\\\\$r\", \"\\\\$re\", \"\\\\$s\", \"\\\\$st\", \"\\\\$t\", \"\\\\$tr\", \"\\\\$v\", \"\\\\$z\"];\n    var intrinsicFuncs = wordRegexp(intrinsicFuncsWords);\n    var command = wordRegexp(commandKeywords);\n\n    function tokenBase(stream, state) {\n      if (stream.sol()) {\n        state.label = true;\n        state.commandMode = 0;\n      } // The <space> character has meaning in MUMPS. Ignoring consecutive\n      // spaces would interfere with interpreting whether the next non-space\n      // character belongs to the command or argument context.\n      // Examine each character and update a mode variable whose interpretation is:\n      //   >0 => command    0 => argument    <0 => command post-conditional\n\n\n      var ch = stream.peek();\n\n      if (ch == \" \" || ch == \"\\t\") {\n        // Pre-process <space>\n        state.label = false;\n        if (state.commandMode == 0) state.commandMode = 1;else if (state.commandMode < 0 || state.commandMode == 2) state.commandMode = 0;\n      } else if (ch != \".\" && state.commandMode > 0) {\n        if (ch == \":\") state.commandMode = -1; // SIS - Command post-conditional\n        else state.commandMode = 2;\n      } // Do not color parameter list as line tag\n\n\n      if (ch === \"(\" || ch === \"\\t\") state.label = false; // MUMPS comment starts with \";\"\n\n      if (ch === \";\") {\n        stream.skipToEnd();\n        return \"comment\";\n      } // Number Literals // SIS/RLM - MUMPS permits canonic number followed by concatenate operator\n\n\n      if (stream.match(/^[-+]?\\d+(\\.\\d+)?([eE][-+]?\\d+)?/)) return \"number\"; // Handle Strings\n\n      if (ch == '\"') {\n        if (stream.skipTo('\"')) {\n          stream.next();\n          return \"string\";\n        } else {\n          stream.skipToEnd();\n          return \"error\";\n        }\n      } // Handle operators and Delimiters\n\n\n      if (stream.match(doubleOperators) || stream.match(singleOperators)) return \"operator\"; // Prevents leading \".\" in DO block from falling through to error\n\n      if (stream.match(singleDelimiters)) return null;\n\n      if (brackets.test(ch)) {\n        stream.next();\n        return \"bracket\";\n      }\n\n      if (state.commandMode > 0 && stream.match(command)) return \"variable-2\";\n      if (stream.match(intrinsicFuncs)) return \"builtin\";\n      if (stream.match(identifiers)) return \"variable\"; // Detect dollar-sign when not a documented intrinsic function\n      // \"^\" may introduce a GVN or SSVN - Color same as function\n\n      if (ch === \"$\" || ch === \"^\") {\n        stream.next();\n        return \"builtin\";\n      } // MUMPS Indirection\n\n\n      if (ch === \"@\") {\n        stream.next();\n        return \"string-2\";\n      }\n\n      if (/[\\w%]/.test(ch)) {\n        stream.eatWhile(/[\\w%]/);\n        return \"variable\";\n      } // Handle non-detected items\n\n\n      stream.next();\n      return \"error\";\n    }\n\n    return {\n      startState: function startState() {\n        return {\n          label: false,\n          commandMode: 0\n        };\n      },\n      token: function token(stream, state) {\n        var style = tokenBase(stream, state);\n        if (state.label) return \"tag\";\n        return style;\n      }\n    };\n  });\n  CodeMirror.defineMIME(\"text/x-mumps\", \"mumps\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvbW9kZS9tdW1wcy9tdW1wcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBLENBQUMsVUFBU0EsR0FBVCxFQUFjO0VBQ2IsSUFBSSxzQkFBT0MsT0FBUCxNQUFrQixRQUFsQixJQUE4QixzQkFBT0MsTUFBUCxNQUFpQixRQUFuRCxFQUE2RDtJQUMzREYsR0FBRyxDQUFDRyxtQkFBTyxDQUFDLG1KQUFELENBQVIsQ0FBSCxDQURGLEtBRUssSUFBSSxJQUFKLEVBQStDO0lBQ2xEQyxpQ0FBTyxDQUFDLG1KQUFELENBQUQsb0NBQTJCSixHQUEzQjtBQUFBO0FBQUE7QUFBQSxrR0FBTixDQURHLEtBRUE7SUFDSEEsRUFBQTtBQUNILENBUEQsRUFPRyxVQUFTTSxVQUFULEVBQXFCO0VBQ3RCOztFQUVBQSxVQUFVLENBQUNDLFVBQVgsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztJQUN4QyxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtNQUN6QixPQUFPLElBQUlDLE1BQUosQ0FBVyxRQUFRRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxLQUFYLENBQVIsR0FBNEIsT0FBdkMsRUFBZ0QsR0FBaEQsQ0FBUDtJQUNEOztJQUVELElBQUlDLGVBQWUsR0FBRyxJQUFJRixNQUFKLENBQVcsb0NBQVgsQ0FBdEI7SUFDQSxJQUFJRyxlQUFlLEdBQUcsSUFBSUgsTUFBSixDQUFXLDRDQUFYLENBQXRCO0lBQ0EsSUFBSUksZ0JBQWdCLEdBQUcsSUFBSUosTUFBSixDQUFXLFVBQVgsQ0FBdkI7SUFDQSxJQUFJSyxRQUFRLEdBQUcsSUFBSUwsTUFBSixDQUFXLE1BQVgsQ0FBZjtJQUNBLElBQUlNLFdBQVcsR0FBRyxJQUFJTixNQUFKLENBQVcsd0JBQVgsQ0FBbEI7SUFDQSxJQUFJTyxlQUFlLEdBQUcsQ0FBQyxPQUFELEVBQVMsT0FBVCxFQUFpQixJQUFqQixFQUFz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VSxLQUFLLEVBQUUsZUFBU2QsTUFBVCxFQUFpQkMsS0FBakIsRUFBd0I7UUFDN0IsSUFBSWMsS0FBSyxHQUFHaEIsU0FBUyxDQUFDQyxNQUFELEVBQVNDLEtBQVQsQ0FBckI7UUFDQSxJQUFJQSxLQUFLLENBQUNFLEtBQVYsRUFBaUIsT0FBTyxLQUFQO1FBQ2pCLE9BQU9ZLEtBQVA7TUFDRDtJQVpJLENBQVA7RUFjRCxDQS9IRDtFQWlJQS9CLFVBQVUsQ0FBQ2dDLFVBQVgsQ0FBc0IsY0FBdEIsRUFBc0MsT0FBdEM7QUFDRCxDQTVJRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9tb2RlL211bXBzL211bXBzLmpzPzFhMjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLypcbiAgVGhpcyBNVU1QUyBMYW5ndWFnZSBzY3JpcHQgd2FzIGNvbnN0cnVjdGVkIHVzaW5nIHZic2NyaXB0LmpzIGFzIGEgdGVtcGxhdGUuXG4qL1xuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJtdW1wc1wiLCBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB3b3JkUmVnZXhwKHdvcmRzKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oKFwiICsgd29yZHMuam9pbihcIil8KFwiKSArIFwiKSlcXFxcYlwiLCBcImlcIik7XG4gICAgfVxuXG4gICAgdmFyIHNpbmdsZU9wZXJhdG9ycyA9IG5ldyBSZWdFeHAoXCJeW1xcXFwrXFxcXC1cXFxcKi8mIyFfP1xcXFxcXFxcPD49XFxcXCdcXFxcW1xcXFxdXVwiKTtcbiAgICB2YXIgZG91YmxlT3BlcmF0b3JzID0gbmV3IFJlZ0V4cChcIl4oKCc9KXwoPD0pfCg+PSl8KCc+KXwoJzwpfChbWyl8KF1dKXwoXiQpKVwiKTtcbiAgICB2YXIgc2luZ2xlRGVsaW1pdGVycyA9IG5ldyBSZWdFeHAoXCJeW1xcXFwuLDpdXCIpO1xuICAgIHZhciBicmFja2V0cyA9IG5ldyBSZWdFeHAoXCJbKCldXCIpO1xuICAgIHZhciBpZGVudGlmaWVycyA9IG5ldyBSZWdFeHAoXCJeWyVBLVphLXpdW0EtWmEtejAtOV0qXCIpO1xuICAgIHZhciBjb21tYW5kS2V5d29yZHMgPSBbXCJicmVha1wiLFwiY2xvc2VcIixcImRvXCIsXCJlbHNlXCIsXCJmb3JcIixcImdvdG9cIiwgXCJoYWx0XCIsIFwiaGFuZ1wiLCBcImlmXCIsIFwiam9iXCIsXCJraWxsXCIsXCJsb2NrXCIsXCJtZXJnZVwiLFwibmV3XCIsXCJvcGVuXCIsIFwicXVpdFwiLCBcInJlYWRcIiwgXCJzZXRcIiwgXCJ0Y29tbWl0XCIsIFwidHJvbGxiYWNrXCIsIFwidHN0YXJ0XCIsIFwidXNlXCIsIFwidmlld1wiLCBcIndyaXRlXCIsIFwieGVjdXRlXCIsIFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLCBcImhcIiwgXCJpXCIsIFwialwiLFwia1wiLFwibFwiLFwibVwiLFwiblwiLFwib1wiLCBcInFcIiwgXCJyXCIsIFwic1wiLCBcInRjXCIsIFwidHJvXCIsIFwidHNcIiwgXCJ1XCIsIFwidlwiLCBcIndcIiwgXCJ4XCJdO1xuICAgIC8vIFRoZSBmb2xsb3dpbmcgbGlzdCBpbmNsdWRlcyBpbnRyaW5zaWMgZnVuY3Rpb25zIF9hbmRfIHNwZWNpYWwgdmFyaWFibGVzXG4gICAgdmFyIGludHJpbnNpY0Z1bmNzV29yZHMgPSBbXCJcXFxcJGFzY2lpXCIsIFwiXFxcXCRjaGFyXCIsIFwiXFxcXCRkYXRhXCIsIFwiXFxcXCRlY29kZVwiLCBcIlxcXFwkZXN0YWNrXCIsIFwiXFxcXCRldHJhcFwiLCBcIlxcXFwkZXh0cmFjdFwiLCBcIlxcXFwkZmluZFwiLCBcIlxcXFwkZm51bWJlclwiLCBcIlxcXFwkZ2V0XCIsIFwiXFxcXCRob3JvbG9nXCIsIFwiXFxcXCRpb1wiLCBcIlxcXFwkaW5jcmVtZW50XCIsIFwiXFxcXCRqb2JcIiwgXCJcXFxcJGp1c3RpZnlcIiwgXCJcXFxcJGxlbmd0aFwiLCBcIlxcXFwkbmFtZVwiLCBcIlxcXFwkbmV4dFwiLCBcIlxcXFwkb3JkZXJcIiwgXCJcXFxcJHBpZWNlXCIsIFwiXFxcXCRxbGVuZ3RoXCIsIFwiXFxcXCRxc3Vic2NyaXB0XCIsIFwiXFxcXCRxdWVyeVwiLCBcIlxcXFwkcXVpdFwiLCBcIlxcXFwkcmFuZG9tXCIsIFwiXFxcXCRyZXZlcnNlXCIsIFwiXFxcXCRzZWxlY3RcIiwgXCJcXFxcJHN0YWNrXCIsIFwiXFxcXCR0ZXN0XCIsIFwiXFxcXCR0ZXh0XCIsIFwiXFxcXCR0cmFuc2xhdGVcIiwgXCJcXFxcJHZpZXdcIiwgXCJcXFxcJHhcIiwgXCJcXFxcJHlcIiwgXCJcXFxcJGFcIiwgXCJcXFxcJGNcIiwgXCJcXFxcJGRcIiwgXCJcXFxcJGVcIiwgXCJcXFxcJGVjXCIsIFwiXFxcXCRlc1wiLCBcIlxcXFwkZXRcIiwgXCJcXFxcJGZcIiwgXCJcXFxcJGZuXCIsIFwiXFxcXCRnXCIsIFwiXFxcXCRoXCIsIFwiXFxcXCRpXCIsIFwiXFxcXCRqXCIsIFwiXFxcXCRsXCIsIFwiXFxcXCRuXCIsIFwiXFxcXCRuYVwiLCBcIlxcXFwkb1wiLCBcIlxcXFwkcFwiLCBcIlxcXFwkcVwiLCBcIlxcXFwkcWxcIiwgXCJcXFxcJHFzXCIsIFwiXFxcXCRyXCIsIFwiXFxcXCRyZVwiLCBcIlxcXFwkc1wiLCBcIlxcXFwkc3RcIiwgXCJcXFxcJHRcIiwgXCJcXFxcJHRyXCIsIFwiXFxcXCR2XCIsIFwiXFxcXCR6XCJdO1xuICAgIHZhciBpbnRyaW5zaWNGdW5jcyA9IHdvcmRSZWdleHAoaW50cmluc2ljRnVuY3NXb3Jkcyk7XG4gICAgdmFyIGNvbW1hbmQgPSB3b3JkUmVnZXhwKGNvbW1hbmRLZXl3b3Jkcyk7XG5cbiAgICBmdW5jdGlvbiB0b2tlbkJhc2Uoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0cmVhbS5zb2woKSkge1xuICAgICAgICBzdGF0ZS5sYWJlbCA9IHRydWU7XG4gICAgICAgIHN0YXRlLmNvbW1hbmRNb2RlID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIDxzcGFjZT4gY2hhcmFjdGVyIGhhcyBtZWFuaW5nIGluIE1VTVBTLiBJZ25vcmluZyBjb25zZWN1dGl2ZVxuICAgICAgLy8gc3BhY2VzIHdvdWxkIGludGVyZmVyZSB3aXRoIGludGVycHJldGluZyB3aGV0aGVyIHRoZSBuZXh0IG5vbi1zcGFjZVxuICAgICAgLy8gY2hhcmFjdGVyIGJlbG9uZ3MgdG8gdGhlIGNvbW1hbmQgb3IgYXJndW1lbnQgY29udGV4dC5cblxuICAgICAgLy8gRXhhbWluZSBlYWNoIGNoYXJhY3RlciBhbmQgdXBkYXRlIGEgbW9kZSB2YXJpYWJsZSB3aG9zZSBpbnRlcnByZXRhdGlvbiBpczpcbiAgICAgIC8vICAgPjAgPT4gY29tbWFuZCAgICAwID0+IGFyZ3VtZW50ICAgIDwwID0+IGNvbW1hbmQgcG9zdC1jb25kaXRpb25hbFxuICAgICAgdmFyIGNoID0gc3RyZWFtLnBlZWsoKTtcblxuICAgICAgaWYgKGNoID09IFwiIFwiIHx8IGNoID09IFwiXFx0XCIpIHsgLy8gUHJlLXByb2Nlc3MgPHNwYWNlPlxuICAgICAgICBzdGF0ZS5sYWJlbCA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGUuY29tbWFuZE1vZGUgPT0gMClcbiAgICAgICAgICBzdGF0ZS5jb21tYW5kTW9kZSA9IDE7XG4gICAgICAgIGVsc2UgaWYgKChzdGF0ZS5jb21tYW5kTW9kZSA8IDApIHx8IChzdGF0ZS5jb21tYW5kTW9kZSA9PSAyKSlcbiAgICAgICAgICBzdGF0ZS5jb21tYW5kTW9kZSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKChjaCAhPSBcIi5cIikgJiYgKHN0YXRlLmNvbW1hbmRNb2RlID4gMCkpIHtcbiAgICAgICAgaWYgKGNoID09IFwiOlwiKVxuICAgICAgICAgIHN0YXRlLmNvbW1hbmRNb2RlID0gLTE7ICAgLy8gU0lTIC0gQ29tbWFuZCBwb3N0LWNvbmRpdGlvbmFsXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzdGF0ZS5jb21tYW5kTW9kZSA9IDI7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIG5vdCBjb2xvciBwYXJhbWV0ZXIgbGlzdCBhcyBsaW5lIHRhZ1xuICAgICAgaWYgKChjaCA9PT0gXCIoXCIpIHx8IChjaCA9PT0gXCJcXHUwMDA5XCIpKVxuICAgICAgICBzdGF0ZS5sYWJlbCA9IGZhbHNlO1xuXG4gICAgICAvLyBNVU1QUyBjb21tZW50IHN0YXJ0cyB3aXRoIFwiO1wiXG4gICAgICBpZiAoY2ggPT09IFwiO1wiKSB7XG4gICAgICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBOdW1iZXIgTGl0ZXJhbHMgLy8gU0lTL1JMTSAtIE1VTVBTIHBlcm1pdHMgY2Fub25pYyBudW1iZXIgZm9sbG93ZWQgYnkgY29uY2F0ZW5hdGUgb3BlcmF0b3JcbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goL15bLStdP1xcZCsoXFwuXFxkKyk/KFtlRV1bLStdP1xcZCspPy8pKVxuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcblxuICAgICAgLy8gSGFuZGxlIFN0cmluZ3NcbiAgICAgIGlmIChjaCA9PSAnXCInKSB7XG4gICAgICAgIGlmIChzdHJlYW0uc2tpcFRvKCdcIicpKSB7XG4gICAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgb3BlcmF0b3JzIGFuZCBEZWxpbWl0ZXJzXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKGRvdWJsZU9wZXJhdG9ycykgfHwgc3RyZWFtLm1hdGNoKHNpbmdsZU9wZXJhdG9ycykpXG4gICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG5cbiAgICAgIC8vIFByZXZlbnRzIGxlYWRpbmcgXCIuXCIgaW4gRE8gYmxvY2sgZnJvbSBmYWxsaW5nIHRocm91Z2ggdG8gZXJyb3JcbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goc2luZ2xlRGVsaW1pdGVycykpXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAoYnJhY2tldHMudGVzdChjaCkpIHtcbiAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIFwiYnJhY2tldFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuY29tbWFuZE1vZGUgPiAwICYmIHN0cmVhbS5tYXRjaChjb21tYW5kKSlcbiAgICAgICAgcmV0dXJuIFwidmFyaWFibGUtMlwiO1xuXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKGludHJpbnNpY0Z1bmNzKSlcbiAgICAgICAgcmV0dXJuIFwiYnVpbHRpblwiO1xuXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKGlkZW50aWZpZXJzKSlcbiAgICAgICAgcmV0dXJuIFwidmFyaWFibGVcIjtcblxuICAgICAgLy8gRGV0ZWN0IGRvbGxhci1zaWduIHdoZW4gbm90IGEgZG9jdW1lbnRlZCBpbnRyaW5zaWMgZnVuY3Rpb25cbiAgICAgIC8vIFwiXlwiIG1heSBpbnRyb2R1Y2UgYSBHVk4gb3IgU1NWTiAtIENvbG9yIHNhbWUgYXMgZnVuY3Rpb25cbiAgICAgIGlmIChjaCA9PT0gXCIkXCIgfHwgY2ggPT09IFwiXlwiKSB7XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHJldHVybiBcImJ1aWx0aW5cIjtcbiAgICAgIH1cblxuICAgICAgLy8gTVVNUFMgSW5kaXJlY3Rpb25cbiAgICAgIGlmIChjaCA9PT0gXCJAXCIpIHtcbiAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nLTJcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKC9bXFx3JV0vLnRlc3QoY2gpKSB7XG4gICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvW1xcdyVdLyk7XG4gICAgICAgIHJldHVybiBcInZhcmlhYmxlXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBub24tZGV0ZWN0ZWQgaXRlbXNcbiAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogZmFsc2UsXG4gICAgICAgICAgY29tbWFuZE1vZGU6IDBcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHRva2VuOiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlLmxhYmVsKSByZXR1cm4gXCJ0YWdcIjtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1tdW1wc1wiLCBcIm11bXBzXCIpO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsIndvcmRSZWdleHAiLCJ3b3JkcyIsIlJlZ0V4cCIsImpvaW4iLCJzaW5nbGVPcGVyYXRvcnMiLCJkb3VibGVPcGVyYXRvcnMiLCJzaW5nbGVEZWxpbWl0ZXJzIiwiYnJhY2tldHMiLCJpZGVudGlmaWVycyIsImNvbW1hbmRLZXl3b3JkcyIsImludHJpbnNpY0Z1bmNzV29yZHMiLCJpbnRyaW5zaWNGdW5jcyIsImNvbW1hbmQiLCJ0b2tlbkJhc2UiLCJzdHJlYW0iLCJzdGF0ZSIsInNvbCIsImxhYmVsIiwiY29tbWFuZE1vZGUiLCJjaCIsInBlZWsiLCJza2lwVG9FbmQiLCJtYXRjaCIsInNraXBUbyIsIm5leHQiLCJ0ZXN0IiwiZWF0V2hpbGUiLCJzdGFydFN0YXRlIiwidG9rZW4iLCJzdHlsZSIsImRlZmluZU1JTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/mode/mumps/mumps.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/mode/mumps/mumps.js");
/******/ 	
/******/ })()
;