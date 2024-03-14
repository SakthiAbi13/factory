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

/***/ "./resources/assets/vendor/libs/codemirror/addon/edit/matchbrackets.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/edit/matchbrackets.js ***!
  \*****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  var ie_lt8 = /MSIE \\d/.test(navigator.userAgent) && (document.documentMode == null || document.documentMode < 8);\n  var Pos = CodeMirror.Pos;\n  var matching = {\n    \"(\": \")>\",\n    \")\": \"(<\",\n    \"[\": \"]>\",\n    \"]\": \"[<\",\n    \"{\": \"}>\",\n    \"}\": \"{<\",\n    \"<\": \">>\",\n    \">\": \"<<\"\n  };\n\n  function bracketRegex(config) {\n    return config && config.bracketRegex || /[(){}[\\]]/;\n  }\n\n  function findMatchingBracket(cm, where, config) {\n    var line = cm.getLineHandle(where.line),\n        pos = where.ch - 1;\n    var afterCursor = config && config.afterCursor;\n    if (afterCursor == null) afterCursor = /(^| )cm-fat-cursor($| )/.test(cm.getWrapperElement().className);\n    var re = bracketRegex(config); // A cursor is defined as between two characters, but in in vim command mode\n    // (i.e. not insert mode), the cursor is visually represented as a\n    // highlighted box on top of the 2nd character. Otherwise, we allow matches\n    // from before or after the cursor.\n\n    var match = !afterCursor && pos >= 0 && re.test(line.text.charAt(pos)) && matching[line.text.charAt(pos)] || re.test(line.text.charAt(pos + 1)) && matching[line.text.charAt(++pos)];\n    if (!match) return null;\n    var dir = match.charAt(1) == \">\" ? 1 : -1;\n    if (config && config.strict && dir > 0 != (pos == where.ch)) return null;\n    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));\n    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style, config);\n    if (found == null) return null;\n    return {\n      from: Pos(where.line, pos),\n      to: found && found.pos,\n      match: found && found.ch == match.charAt(0),\n      forward: dir > 0\n    };\n  } // bracketRegex is used to specify which type of bracket to scan\n  // should be a regexp, e.g. /[[\\]]/\n  //\n  // Note: If \"where\" is on an open bracket, then this bracket is ignored.\n  //\n  // Returns false when no bracket was found, null when it reached\n  // maxScanLines and gave up\n\n\n  function scanForBracket(cm, where, dir, style, config) {\n    var maxScanLen = config && config.maxScanLineLength || 10000;\n    var maxScanLines = config && config.maxScanLines || 1000;\n    var stack = [];\n    var re = bracketRegex(config);\n    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1) : Math.max(cm.firstLine() - 1, where.line - maxScanLines);\n\n    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {\n      var line = cm.getLine(lineNo);\n      if (!line) continue;\n      var pos = dir > 0 ? 0 : line.length - 1,\n          end = dir > 0 ? line.length : -1;\n      if (line.length > maxScanLen) continue;\n      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);\n\n      for (; pos != end; pos += dir) {\n        var ch = line.charAt(pos);\n\n        if (re.test(ch) && (style === undefined || (cm.getTokenTypeAt(Pos(lineNo, pos + 1)) || \"\") == (style || \"\"))) {\n          var match = matching[ch];\n          if (match && match.charAt(1) == \">\" == dir > 0) stack.push(ch);else if (!stack.length) return {\n            pos: Pos(lineNo, pos),\n            ch: ch\n          };else stack.pop();\n        }\n      }\n    }\n\n    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;\n  }\n\n  function matchBrackets(cm, autoclear, config) {\n    // Disable brace matching in long lines, since it'll cause hugely slow updates\n    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000,\n        highlightNonMatching = config && config.highlightNonMatching;\n    var marks = [],\n        ranges = cm.listSelections();\n\n    for (var i = 0; i < ranges.length; i++) {\n      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, config);\n\n      if (match && (match.match || highlightNonMatching !== false) && cm.getLine(match.from.line).length <= maxHighlightLen) {\n        var style = match.match ? \"CodeMirror-matchingbracket\" : \"CodeMirror-nonmatchingbracket\";\n        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {\n          className: style\n        }));\n        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen) marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {\n          className: style\n        }));\n      }\n    }\n\n    if (marks.length) {\n      // Kludge to work around the IE bug from issue #1193, where text\n      // input stops going to the textarea whenever this fires.\n      if (ie_lt8 && cm.state.focused) cm.focus();\n\n      var clear = function clear() {\n        cm.operation(function () {\n          for (var i = 0; i < marks.length; i++) {\n            marks[i].clear();\n          }\n        });\n      };\n\n      if (autoclear) setTimeout(clear, 800);else return clear;\n    }\n  }\n\n  function doMatchBrackets(cm) {\n    cm.operation(function () {\n      if (cm.state.matchBrackets.currentlyHighlighted) {\n        cm.state.matchBrackets.currentlyHighlighted();\n        cm.state.matchBrackets.currentlyHighlighted = null;\n      }\n\n      cm.state.matchBrackets.currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);\n    });\n  }\n\n  function clearHighlighted(cm) {\n    if (cm.state.matchBrackets && cm.state.matchBrackets.currentlyHighlighted) {\n      cm.state.matchBrackets.currentlyHighlighted();\n      cm.state.matchBrackets.currentlyHighlighted = null;\n    }\n  }\n\n  CodeMirror.defineOption(\"matchBrackets\", false, function (cm, val, old) {\n    if (old && old != CodeMirror.Init) {\n      cm.off(\"cursorActivity\", doMatchBrackets);\n      cm.off(\"focus\", doMatchBrackets);\n      cm.off(\"blur\", clearHighlighted);\n      clearHighlighted(cm);\n    }\n\n    if (val) {\n      cm.state.matchBrackets = _typeof(val) == \"object\" ? val : {};\n      cm.on(\"cursorActivity\", doMatchBrackets);\n      cm.on(\"focus\", doMatchBrackets);\n      cm.on(\"blur\", clearHighlighted);\n    }\n  });\n  CodeMirror.defineExtension(\"matchBrackets\", function () {\n    matchBrackets(this, true);\n  });\n  CodeMirror.defineExtension(\"findMatchingBracket\", function (pos, config, oldConfig) {\n    // Backwards-compatibility kludge\n    if (oldConfig || typeof config == \"boolean\") {\n      if (!oldConfig) {\n        config = config ? {\n          strict: true\n        } : null;\n      } else {\n        oldConfig.strict = config;\n        config = oldConfig;\n      }\n    }\n\n    return findMatchingBracket(this, pos, config);\n  });\n  CodeMirror.defineExtension(\"scanForBracket\", function (pos, dir, style, config) {\n    return scanForBracket(this, pos, dir, style, config);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vZWRpdC9tYXRjaGJyYWNrZXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0QixJQUFJQyxNQUFNLEdBQUcsVUFBVUMsSUFBVixDQUFlQyxTQUFTLENBQUNDLFNBQXpCLE1BQ1ZDLFFBQVEsQ0FBQ0MsWUFBVCxJQUF5QixJQUF6QixJQUFpQ0QsUUFBUSxDQUFDQyxZQUFULEdBQXdCLENBRC9DLENBQWI7RUFHQSxJQUFJQyxHQUFHLEdBQUdQLFVBQVUsQ0FBQ08sR0FBckI7RUFFQSxJQUFJQyxRQUFRLEdBQUc7SUFBQyxLQUFLLElBQU47SUFBWSxLQUFLLElBQWpCO0lBQXVCLEtBQUssSUFBNUI7SUFBa0MsS0FBSyxJQUF2QztJQUE2QyxLQUFLLElBQWxEO0lBQXdELEtBQUssSUFBN0Q7SUFBbUUsS0FBSyxJQUF4RTtJQUE4RSxLQUFLO0VBQW5GLENBQWY7O0VBRUEsU0FBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7SUFDNUIsT0FBT0EsTUFBTSxJQUFJQSxNQUFNLENBQUNELFlBQWpCLElBQWlDLFdBQXhDO0VBQ0Q7O0VBRUQsU0FBU0UsbUJBQVQsQ0FBNkJDLEVBQTdCLEVBQWlDQyxLQUFqQyxFQUF3Q0gsTUFBeEMsRUFBZ0Q7SUFDOUMsSUFBSUks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LEVBQUUsQ0FBQ2lFLEVBQUgsQ0FBTSxNQUFOLEVBQWNOLGdCQUFkO0lBQ0Q7RUFDRixDQWJEO0VBZUF2RSxVQUFVLENBQUM4RSxlQUFYLENBQTJCLGVBQTNCLEVBQTRDLFlBQVc7SUFBQzNCLGFBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFiO0VBQTJCLENBQW5GO0VBQ0FuRCxVQUFVLENBQUM4RSxlQUFYLENBQTJCLHFCQUEzQixFQUFrRCxVQUFTOUQsR0FBVCxFQUFjTixNQUFkLEVBQXNCcUUsU0FBdEIsRUFBZ0M7SUFDaEY7SUFDQSxJQUFJQSxTQUFTLElBQUksT0FBT3JFLE1BQVAsSUFBaUIsU0FBbEMsRUFBNkM7TUFDM0MsSUFBSSxDQUFDcUUsU0FBTCxFQUFnQjtRQUNkckUsTUFBTSxHQUFHQSxNQUFNLEdBQUc7VUFBQ2dCLE1BQU0sRUFBRTtRQUFULENBQUgsR0FBb0IsSUFBbkM7TUFDRCxDQUZELE1BRU87UUFDTHFELFNBQVMsQ0FBQ3JELE1BQVYsR0FBbUJoQixNQUFuQjtRQUNBQSxNQUFNLEdBQUdxRSxTQUFUO01BQ0Q7SUFDRjs7SUFDRCxPQUFPcEUsbUJBQW1CLENBQUMsSUFBRCxFQUFPSyxHQUFQLEVBQVlOLE1BQVosQ0FBMUI7RUFDRCxDQVhEO0VBWUFWLFVBQVUsQ0FBQzhFLGVBQVgsQ0FBMkIsZ0JBQTNCLEVBQTZDLFVBQVM5RCxHQUFULEVBQWNTLEdBQWQsRUFBbUJFLEtBQW5CLEVBQTBCakIsTUFBMUIsRUFBaUM7SUFDNUUsT0FBT29CLGNBQWMsQ0FBQyxJQUFELEVBQU9kLEdBQVAsRUFBWVMsR0FBWixFQUFpQkUsS0FBakIsRUFBd0JqQixNQUF4QixDQUFyQjtFQUNELENBRkQ7QUFHRCxDQTVKRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9lZGl0L21hdGNoYnJhY2tldHMuanM/MDE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICB2YXIgaWVfbHQ4ID0gL01TSUUgXFxkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXG4gICAgKGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PSBudWxsIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDgpO1xuXG4gIHZhciBQb3MgPSBDb2RlTWlycm9yLlBvcztcblxuICB2YXIgbWF0Y2hpbmcgPSB7XCIoXCI6IFwiKT5cIiwgXCIpXCI6IFwiKDxcIiwgXCJbXCI6IFwiXT5cIiwgXCJdXCI6IFwiWzxcIiwgXCJ7XCI6IFwifT5cIiwgXCJ9XCI6IFwiezxcIiwgXCI8XCI6IFwiPj5cIiwgXCI+XCI6IFwiPDxcIn07XG5cbiAgZnVuY3Rpb24gYnJhY2tldFJlZ2V4KGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcgJiYgY29uZmlnLmJyYWNrZXRSZWdleCB8fCAvWygpe31bXFxdXS9cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRNYXRjaGluZ0JyYWNrZXQoY20sIHdoZXJlLCBjb25maWcpIHtcbiAgICB2YXIgbGluZSA9IGNtLmdldExpbmVIYW5kbGUod2hlcmUubGluZSksIHBvcyA9IHdoZXJlLmNoIC0gMTtcbiAgICB2YXIgYWZ0ZXJDdXJzb3IgPSBjb25maWcgJiYgY29uZmlnLmFmdGVyQ3Vyc29yXG4gICAgaWYgKGFmdGVyQ3Vyc29yID09IG51bGwpXG4gICAgICBhZnRlckN1cnNvciA9IC8oXnwgKWNtLWZhdC1jdXJzb3IoJHwgKS8udGVzdChjbS5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTmFtZSlcbiAgICB2YXIgcmUgPSBicmFja2V0UmVnZXgoY29uZmlnKVxuXG4gICAgLy8gQSBjdXJzb3IgaXMgZGVmaW5lZCBhcyBiZXR3ZWVuIHR3byBjaGFyYWN0ZXJzLCBidXQgaW4gaW4gdmltIGNvbW1hbmQgbW9kZVxuICAgIC8vIChpLmUuIG5vdCBpbnNlcnQgbW9kZSksIHRoZSBjdXJzb3IgaXMgdmlzdWFsbHkgcmVwcmVzZW50ZWQgYXMgYVxuICAgIC8vIGhpZ2hsaWdodGVkIGJveCBvbiB0b3Agb2YgdGhlIDJuZCBjaGFyYWN0ZXIuIE90aGVyd2lzZSwgd2UgYWxsb3cgbWF0Y2hlc1xuICAgIC8vIGZyb20gYmVmb3JlIG9yIGFmdGVyIHRoZSBjdXJzb3IuXG4gICAgdmFyIG1hdGNoID0gKCFhZnRlckN1cnNvciAmJiBwb3MgPj0gMCAmJiByZS50ZXN0KGxpbmUudGV4dC5jaGFyQXQocG9zKSkgJiYgbWF0Y2hpbmdbbGluZS50ZXh0LmNoYXJBdChwb3MpXSkgfHxcbiAgICAgICAgcmUudGVzdChsaW5lLnRleHQuY2hhckF0KHBvcyArIDEpKSAmJiBtYXRjaGluZ1tsaW5lLnRleHQuY2hhckF0KCsrcG9zKV07XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGRpciA9IG1hdGNoLmNoYXJBdCgxKSA9PSBcIj5cIiA/IDEgOiAtMTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5zdHJpY3QgJiYgKGRpciA+IDApICE9IChwb3MgPT0gd2hlcmUuY2gpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgc3R5bGUgPSBjbS5nZXRUb2tlblR5cGVBdChQb3Mod2hlcmUubGluZSwgcG9zICsgMSkpO1xuXG4gICAgdmFyIGZvdW5kID0gc2NhbkZvckJyYWNrZXQoY20sIFBvcyh3aGVyZS5saW5lLCBwb3MgKyAoZGlyID4gMCA/IDEgOiAwKSksIGRpciwgc3R5bGUsIGNvbmZpZyk7XG4gICAgaWYgKGZvdW5kID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7ZnJvbTogUG9zKHdoZXJlLmxpbmUsIHBvcyksIHRvOiBmb3VuZCAmJiBmb3VuZC5wb3MsXG4gICAgICAgICAgICBtYXRjaDogZm91bmQgJiYgZm91bmQuY2ggPT0gbWF0Y2guY2hhckF0KDApLCBmb3J3YXJkOiBkaXIgPiAwfTtcbiAgfVxuXG4gIC8vIGJyYWNrZXRSZWdleCBpcyB1c2VkIHRvIHNwZWNpZnkgd2hpY2ggdHlwZSBvZiBicmFja2V0IHRvIHNjYW5cbiAgLy8gc2hvdWxkIGJlIGEgcmVnZXhwLCBlLmcuIC9bW1xcXV0vXG4gIC8vXG4gIC8vIE5vdGU6IElmIFwid2hlcmVcIiBpcyBvbiBhbiBvcGVuIGJyYWNrZXQsIHRoZW4gdGhpcyBicmFja2V0IGlzIGlnbm9yZWQuXG4gIC8vXG4gIC8vIFJldHVybnMgZmFsc2Ugd2hlbiBubyBicmFja2V0IHdhcyBmb3VuZCwgbnVsbCB3aGVuIGl0IHJlYWNoZWRcbiAgLy8gbWF4U2NhbkxpbmVzIGFuZCBnYXZlIHVwXG4gIGZ1bmN0aW9uIHNjYW5Gb3JCcmFja2V0KGNtLCB3aGVyZSwgZGlyLCBzdHlsZSwgY29uZmlnKSB7XG4gICAgdmFyIG1heFNjYW5MZW4gPSAoY29uZmlnICYmIGNvbmZpZy5tYXhTY2FuTGluZUxlbmd0aCkgfHwgMTAwMDA7XG4gICAgdmFyIG1heFNjYW5MaW5lcyA9IChjb25maWcgJiYgY29uZmlnLm1heFNjYW5MaW5lcykgfHwgMTAwMDtcblxuICAgIHZhciBzdGFjayA9IFtdO1xuICAgIHZhciByZSA9IGJyYWNrZXRSZWdleChjb25maWcpXG4gICAgdmFyIGxpbmVFbmQgPSBkaXIgPiAwID8gTWF0aC5taW4od2hlcmUubGluZSArIG1heFNjYW5MaW5lcywgY20ubGFzdExpbmUoKSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoY20uZmlyc3RMaW5lKCkgLSAxLCB3aGVyZS5saW5lIC0gbWF4U2NhbkxpbmVzKTtcbiAgICBmb3IgKHZhciBsaW5lTm8gPSB3aGVyZS5saW5lOyBsaW5lTm8gIT0gbGluZUVuZDsgbGluZU5vICs9IGRpcikge1xuICAgICAgdmFyIGxpbmUgPSBjbS5nZXRMaW5lKGxpbmVObyk7XG4gICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuICAgICAgdmFyIHBvcyA9IGRpciA+IDAgPyAwIDogbGluZS5sZW5ndGggLSAxLCBlbmQgPSBkaXIgPiAwID8gbGluZS5sZW5ndGggOiAtMTtcbiAgICAgIGlmIChsaW5lLmxlbmd0aCA+IG1heFNjYW5MZW4pIGNvbnRpbnVlO1xuICAgICAgaWYgKGxpbmVObyA9PSB3aGVyZS5saW5lKSBwb3MgPSB3aGVyZS5jaCAtIChkaXIgPCAwID8gMSA6IDApO1xuICAgICAgZm9yICg7IHBvcyAhPSBlbmQ7IHBvcyArPSBkaXIpIHtcbiAgICAgICAgdmFyIGNoID0gbGluZS5jaGFyQXQocG9zKTtcbiAgICAgICAgaWYgKHJlLnRlc3QoY2gpICYmIChzdHlsZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNtLmdldFRva2VuVHlwZUF0KFBvcyhsaW5lTm8sIHBvcyArIDEpKSB8fCBcIlwiKSA9PSAoc3R5bGUgfHwgXCJcIikpKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gbWF0Y2hpbmdbY2hdO1xuICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2guY2hhckF0KDEpID09IFwiPlwiKSA9PSAoZGlyID4gMCkpIHN0YWNrLnB1c2goY2gpO1xuICAgICAgICAgIGVsc2UgaWYgKCFzdGFjay5sZW5ndGgpIHJldHVybiB7cG9zOiBQb3MobGluZU5vLCBwb3MpLCBjaDogY2h9O1xuICAgICAgICAgIGVsc2Ugc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVObyAtIGRpciA9PSAoZGlyID4gMCA/IGNtLmxhc3RMaW5lKCkgOiBjbS5maXJzdExpbmUoKSkgPyBmYWxzZSA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEJyYWNrZXRzKGNtLCBhdXRvY2xlYXIsIGNvbmZpZykge1xuICAgIC8vIERpc2FibGUgYnJhY2UgbWF0Y2hpbmcgaW4gbG9uZyBsaW5lcywgc2luY2UgaXQnbGwgY2F1c2UgaHVnZWx5IHNsb3cgdXBkYXRlc1xuICAgIHZhciBtYXhIaWdobGlnaHRMZW4gPSBjbS5zdGF0ZS5tYXRjaEJyYWNrZXRzLm1heEhpZ2hsaWdodExpbmVMZW5ndGggfHwgMTAwMCxcbiAgICAgIGhpZ2hsaWdodE5vbk1hdGNoaW5nID0gY29uZmlnICYmIGNvbmZpZy5oaWdobGlnaHROb25NYXRjaGluZztcbiAgICB2YXIgbWFya3MgPSBbXSwgcmFuZ2VzID0gY20ubGlzdFNlbGVjdGlvbnMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1hdGNoID0gcmFuZ2VzW2ldLmVtcHR5KCkgJiYgZmluZE1hdGNoaW5nQnJhY2tldChjbSwgcmFuZ2VzW2ldLmhlYWQsIGNvbmZpZyk7XG4gICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoLm1hdGNoIHx8IGhpZ2hsaWdodE5vbk1hdGNoaW5nICE9PSBmYWxzZSkgJiYgY20uZ2V0TGluZShtYXRjaC5mcm9tLmxpbmUpLmxlbmd0aCA8PSBtYXhIaWdobGlnaHRMZW4pIHtcbiAgICAgICAgdmFyIHN0eWxlID0gbWF0Y2gubWF0Y2ggPyBcIkNvZGVNaXJyb3ItbWF0Y2hpbmdicmFja2V0XCIgOiBcIkNvZGVNaXJyb3Itbm9ubWF0Y2hpbmdicmFja2V0XCI7XG4gICAgICAgIG1hcmtzLnB1c2goY20ubWFya1RleHQobWF0Y2guZnJvbSwgUG9zKG1hdGNoLmZyb20ubGluZSwgbWF0Y2guZnJvbS5jaCArIDEpLCB7Y2xhc3NOYW1lOiBzdHlsZX0pKTtcbiAgICAgICAgaWYgKG1hdGNoLnRvICYmIGNtLmdldExpbmUobWF0Y2gudG8ubGluZSkubGVuZ3RoIDw9IG1heEhpZ2hsaWdodExlbilcbiAgICAgICAgICBtYXJrcy5wdXNoKGNtLm1hcmtUZXh0KG1hdGNoLnRvLCBQb3MobWF0Y2gudG8ubGluZSwgbWF0Y2gudG8uY2ggKyAxKSwge2NsYXNzTmFtZTogc3R5bGV9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmtzLmxlbmd0aCkge1xuICAgICAgLy8gS2x1ZGdlIHRvIHdvcmsgYXJvdW5kIHRoZSBJRSBidWcgZnJvbSBpc3N1ZSAjMTE5Mywgd2hlcmUgdGV4dFxuICAgICAgLy8gaW5wdXQgc3RvcHMgZ29pbmcgdG8gdGhlIHRleHRhcmVhIHdoZW5ldmVyIHRoaXMgZmlyZXMuXG4gICAgICBpZiAoaWVfbHQ4ICYmIGNtLnN0YXRlLmZvY3VzZWQpIGNtLmZvY3VzKCk7XG5cbiAgICAgIHZhciBjbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbS5vcGVyYXRpb24oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykgbWFya3NbaV0uY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKGF1dG9jbGVhcikgc2V0VGltZW91dChjbGVhciwgODAwKTtcbiAgICAgIGVsc2UgcmV0dXJuIGNsZWFyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvTWF0Y2hCcmFja2V0cyhjbSkge1xuICAgIGNtLm9wZXJhdGlvbihmdW5jdGlvbigpIHtcbiAgICAgIGlmIChjbS5zdGF0ZS5tYXRjaEJyYWNrZXRzLmN1cnJlbnRseUhpZ2hsaWdodGVkKSB7XG4gICAgICAgIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMuY3VycmVudGx5SGlnaGxpZ2h0ZWQoKTtcbiAgICAgICAgY20uc3RhdGUubWF0Y2hCcmFja2V0cy5jdXJyZW50bHlIaWdobGlnaHRlZCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjbS5zdGF0ZS5tYXRjaEJyYWNrZXRzLmN1cnJlbnRseUhpZ2hsaWdodGVkID0gbWF0Y2hCcmFja2V0cyhjbSwgZmFsc2UsIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJIaWdobGlnaHRlZChjbSkge1xuICAgIGlmIChjbS5zdGF0ZS5tYXRjaEJyYWNrZXRzICYmIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMuY3VycmVudGx5SGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMuY3VycmVudGx5SGlnaGxpZ2h0ZWQoKTtcbiAgICAgIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMuY3VycmVudGx5SGlnaGxpZ2h0ZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwibWF0Y2hCcmFja2V0c1wiLCBmYWxzZSwgZnVuY3Rpb24oY20sIHZhbCwgb2xkKSB7XG4gICAgaWYgKG9sZCAmJiBvbGQgIT0gQ29kZU1pcnJvci5Jbml0KSB7XG4gICAgICBjbS5vZmYoXCJjdXJzb3JBY3Rpdml0eVwiLCBkb01hdGNoQnJhY2tldHMpO1xuICAgICAgY20ub2ZmKFwiZm9jdXNcIiwgZG9NYXRjaEJyYWNrZXRzKVxuICAgICAgY20ub2ZmKFwiYmx1clwiLCBjbGVhckhpZ2hsaWdodGVkKVxuICAgICAgY2xlYXJIaWdobGlnaHRlZChjbSk7XG4gICAgfVxuICAgIGlmICh2YWwpIHtcbiAgICAgIGNtLnN0YXRlLm1hdGNoQnJhY2tldHMgPSB0eXBlb2YgdmFsID09IFwib2JqZWN0XCIgPyB2YWwgOiB7fTtcbiAgICAgIGNtLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgZG9NYXRjaEJyYWNrZXRzKTtcbiAgICAgIGNtLm9uKFwiZm9jdXNcIiwgZG9NYXRjaEJyYWNrZXRzKVxuICAgICAgY20ub24oXCJibHVyXCIsIGNsZWFySGlnaGxpZ2h0ZWQpXG4gICAgfVxuICB9KTtcblxuICBDb2RlTWlycm9yLmRlZmluZUV4dGVuc2lvbihcIm1hdGNoQnJhY2tldHNcIiwgZnVuY3Rpb24oKSB7bWF0Y2hCcmFja2V0cyh0aGlzLCB0cnVlKTt9KTtcbiAgQ29kZU1pcnJvci5kZWZpbmVFeHRlbnNpb24oXCJmaW5kTWF0Y2hpbmdCcmFja2V0XCIsIGZ1bmN0aW9uKHBvcywgY29uZmlnLCBvbGRDb25maWcpe1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGtsdWRnZVxuICAgIGlmIChvbGRDb25maWcgfHwgdHlwZW9mIGNvbmZpZyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgaWYgKCFvbGRDb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnID8ge3N0cmljdDogdHJ1ZX0gOiBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRDb25maWcuc3RyaWN0ID0gY29uZmlnXG4gICAgICAgIGNvbmZpZyA9IG9sZENvbmZpZ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmluZE1hdGNoaW5nQnJhY2tldCh0aGlzLCBwb3MsIGNvbmZpZylcbiAgfSk7XG4gIENvZGVNaXJyb3IuZGVmaW5lRXh0ZW5zaW9uKFwic2NhbkZvckJyYWNrZXRcIiwgZnVuY3Rpb24ocG9zLCBkaXIsIHN0eWxlLCBjb25maWcpe1xuICAgIHJldHVybiBzY2FuRm9yQnJhY2tldCh0aGlzLCBwb3MsIGRpciwgc3R5bGUsIGNvbmZpZyk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsibW9kIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJDb2RlTWlycm9yIiwiaWVfbHQ4IiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiUG9zIiwibWF0Y2hpbmciLCJicmFja2V0UmVnZXgiLCJjb25maWciLCJmaW5kTWF0Y2hpbmdCcmFja2V0IiwiY20iLCJ3aGVyZSIsImxpbmUiLCJnZXRMaW5lSGFuZGxlIiwicG9zIiwiY2giLCJhZnRlckN1cnNvciIsImdldFdyYXBwZXJFbGVtZW50IiwiY2xhc3NOYW1lIiwicmUiLCJtYXRjaCIsInRleHQiLCJjaGFyQXQiLCJkaXIiLCJzdHJpY3QiLCJzdHlsZSIsImdldFRva2VuVHlwZUF0IiwiZm91bmQiLCJzY2FuRm9yQnJhY2tldCIsImZyb20iLCJ0byIsImZvcndhcmQiLCJtYXhTY2FuTGVuIiwibWF4U2NhbkxpbmVMZW5ndGgiLCJtYXhTY2FuTGluZXMiLCJzdGFjayIsImxpbmVFbmQiLCJNYXRoIiwibWluIiwibGFzdExpbmUiLCJtYXgiLCJmaXJzdExpbmUiLCJsaW5lTm8iLCJnZXRMaW5lIiwibGVuZ3RoIiwiZW5kIiwidW5kZWZpbmVkIiwicHVzaCIsInBvcCIsIm1hdGNoQnJhY2tldHMiLCJhdXRvY2xlYXIiLCJtYXhIaWdobGlnaHRMZW4iLCJzdGF0ZSIsIm1heEhpZ2hsaWdodExpbmVMZW5ndGgiLCJoaWdobGlnaHROb25NYXRjaGluZyIsIm1hcmtzIiwicmFuZ2VzIiwibGlzdFNlbGVjdGlvbnMiLCJpIiwiZW1wdHkiLCJoZWFkIiwibWFya1RleHQiLCJmb2N1c2VkIiwiZm9jdXMiLCJjbGVhciIsIm9wZXJhdGlvbiIsInNldFRpbWVvdXQiLCJkb01hdGNoQnJhY2tldHMiLCJjdXJyZW50bHlIaWdobGlnaHRlZCIsImNsZWFySGlnaGxpZ2h0ZWQiLCJkZWZpbmVPcHRpb24iLCJ2YWwiLCJvbGQiLCJJbml0Iiwib2ZmIiwib24iLCJkZWZpbmVFeHRlbnNpb24iLCJvbGRDb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/edit/matchbrackets.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/edit/matchbrackets.js");
/******/ 	
/******/ })()
;