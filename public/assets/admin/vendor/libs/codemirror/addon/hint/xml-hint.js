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

/***/ "./resources/assets/vendor/libs/codemirror/addon/hint/xml-hint.js":
/*!************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/hint/xml-hint.js ***!
  \************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  var Pos = CodeMirror.Pos;\n\n  function matches(hint, typed, matchInMiddle) {\n    if (matchInMiddle) return hint.indexOf(typed) >= 0;else return hint.lastIndexOf(typed, 0) == 0;\n  }\n\n  function getHints(cm, options) {\n    var tags = options && options.schemaInfo;\n    var quote = options && options.quoteChar || '\"';\n    var matchInMiddle = options && options.matchInMiddle;\n    if (!tags) return;\n    var cur = cm.getCursor(),\n        token = cm.getTokenAt(cur);\n\n    if (token.end > cur.ch) {\n      token.end = cur.ch;\n      token.string = token.string.slice(0, cur.ch - token.start);\n    }\n\n    var inner = CodeMirror.innerMode(cm.getMode(), token.state);\n    if (!inner.mode.xmlCurrentTag) return;\n    var result = [],\n        replaceToken = false,\n        prefix;\n    var tag = /\\btag\\b/.test(token.type) && !/>$/.test(token.string);\n    var tagName = tag && /^\\w/.test(token.string),\n        tagStart;\n\n    if (tagName) {\n      var before = cm.getLine(cur.line).slice(Math.max(0, token.start - 2), token.start);\n      var tagType = /<\\/$/.test(before) ? \"close\" : /<$/.test(before) ? \"open\" : null;\n      if (tagType) tagStart = token.start - (tagType == \"close\" ? 2 : 1);\n    } else if (tag && token.string == \"<\") {\n      tagType = \"open\";\n    } else if (tag && token.string == \"</\") {\n      tagType = \"close\";\n    }\n\n    var tagInfo = inner.mode.xmlCurrentTag(inner.state);\n\n    if (!tag && !tagInfo || tagType) {\n      if (tagName) prefix = token.string;\n      replaceToken = tagType;\n      var context = inner.mode.xmlCurrentContext ? inner.mode.xmlCurrentContext(inner.state) : [];\n      var inner = context.length && context[context.length - 1];\n      var curTag = inner && tags[inner];\n      var childList = inner ? curTag && curTag.children : tags[\"!top\"];\n\n      if (childList && tagType != \"close\") {\n        for (var i = 0; i < childList.length; ++i) {\n          if (!prefix || matches(childList[i], prefix, matchInMiddle)) result.push(\"<\" + childList[i]);\n        }\n      } else if (tagType != \"close\") {\n        for (var name in tags) {\n          if (tags.hasOwnProperty(name) && name != \"!top\" && name != \"!attrs\" && (!prefix || matches(name, prefix, matchInMiddle))) result.push(\"<\" + name);\n        }\n      }\n\n      if (inner && (!prefix || tagType == \"close\" && matches(inner, prefix, matchInMiddle))) result.push(\"</\" + inner + \">\");\n    } else {\n      // Attribute completion\n      var curTag = tagInfo && tags[tagInfo.name],\n          attrs = curTag && curTag.attrs;\n      var globalAttrs = tags[\"!attrs\"];\n      if (!attrs && !globalAttrs) return;\n\n      if (!attrs) {\n        attrs = globalAttrs;\n      } else if (globalAttrs) {\n        // Combine tag-local and global attributes\n        var set = {};\n\n        for (var nm in globalAttrs) {\n          if (globalAttrs.hasOwnProperty(nm)) set[nm] = globalAttrs[nm];\n        }\n\n        for (var nm in attrs) {\n          if (attrs.hasOwnProperty(nm)) set[nm] = attrs[nm];\n        }\n\n        attrs = set;\n      }\n\n      if (token.type == \"string\" || token.string == \"=\") {\n        // A value\n        var before = cm.getRange(Pos(cur.line, Math.max(0, cur.ch - 60)), Pos(cur.line, token.type == \"string\" ? token.start : token.end));\n        var atName = before.match(/([^\\s\\u00a0=<>\\\"\\']+)=$/),\n            atValues;\n        if (!atName || !attrs.hasOwnProperty(atName[1]) || !(atValues = attrs[atName[1]])) return;\n        if (typeof atValues == 'function') atValues = atValues.call(this, cm); // Functions can be used to supply values for autocomplete widget\n\n        if (token.type == \"string\") {\n          prefix = token.string;\n          var n = 0;\n\n          if (/['\"]/.test(token.string.charAt(0))) {\n            quote = token.string.charAt(0);\n            prefix = token.string.slice(1);\n            n++;\n          }\n\n          var len = token.string.length;\n\n          if (/['\"]/.test(token.string.charAt(len - 1))) {\n            quote = token.string.charAt(len - 1);\n            prefix = token.string.substr(n, len - 2);\n          }\n\n          if (n) {\n            // an opening quote\n            var line = cm.getLine(cur.line);\n            if (line.length > token.end && line.charAt(token.end) == quote) token.end++; // include a closing quote\n          }\n\n          replaceToken = true;\n        }\n\n        var returnHintsFromAtValues = function returnHintsFromAtValues(atValues) {\n          if (atValues) for (var i = 0; i < atValues.length; ++i) {\n            if (!prefix || matches(atValues[i], prefix, matchInMiddle)) result.push(quote + atValues[i] + quote);\n          }\n          return returnHints();\n        };\n\n        if (atValues && atValues.then) return atValues.then(returnHintsFromAtValues);\n        return returnHintsFromAtValues(atValues);\n      } else {\n        // An attribute name\n        if (token.type == \"attribute\") {\n          prefix = token.string;\n          replaceToken = true;\n        }\n\n        for (var attr in attrs) {\n          if (attrs.hasOwnProperty(attr) && (!prefix || matches(attr, prefix, matchInMiddle))) result.push(attr);\n        }\n      }\n    }\n\n    function returnHints() {\n      return {\n        list: result,\n        from: replaceToken ? Pos(cur.line, tagStart == null ? token.start : tagStart) : cur,\n        to: replaceToken ? Pos(cur.line, token.end) : cur\n      };\n    }\n\n    return returnHints();\n  }\n\n  CodeMirror.registerHelper(\"hint\", \"xml\", getHints);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vaGludC94bWwtaGludC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUEsQ0FBQyxVQUFTQSxHQUFULEVBQWM7RUFDYixJQUFJLHNCQUFPQyxPQUFQLE1BQWtCLFFBQWxCLElBQThCLHNCQUFPQyxNQUFQLE1BQWlCLFFBQW5ELEVBQTZEO0lBQzNERixHQUFHLENBQUNHLG1CQUFPLENBQUMsbUpBQUQsQ0FBUixDQUFILENBREYsS0FFSyxJQUFJLElBQUosRUFBK0M7SUFDbERDLGlDQUFPLENBQUMsbUpBQUQsQ0FBRCxvQ0FBMkJKLEdBQTNCO0FBQUE7QUFBQTtBQUFBLGtHQUFOLENBREcsS0FFQTtJQUNIQSxFQUFBO0FBQ0gsQ0FQRCxFQU9HLFVBQVNNLFVBQVQsRUFBcUI7RUFDdEI7O0VBRUEsSUFBSUMsR0FBRyxHQUFHRCxVQUFVLENBQUNDLEdBQXJCOztFQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCQyxLQUF2QixFQUE4QkMsYUFBOUIsRUFBNkM7SUFDM0MsSUFBSUEsYUFBSixFQUFtQixPQUFPRixJQUFJLENBQUNHLE9BQUwsQ0FBYUYsS0FBYixLQUF1QixDQUE5QixDQUFuQixLQUNLLE9BQU9ELElBQUksQ0FBQ0ksV0FBTCxDQUFpQkgsS0FBakIsRUFBd0IsQ0FBeEIsS0FBOEIsQ0FBckM7RUFDTjs7RUFFRCxTQUFTSSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsT0FBdEIsRUFBK0I7SUFDN0IsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsVUFBOUI7SUFDQSxJQUFJQyxLQUFLLEdBQUlILE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxTQUFwQixJQUFrQyxHQUE5QztJQUNBLElBQUlULGFBQWEsR0FBR0ssT0FBTyxJQUFJQSxPQUFPLENBQUNMLGFBQXZDO0lBQ0EsSUFBSSxDQUFDTSxJQUFMLEVBQVc7SUFDWCxJQUFJSSxH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QUFkLENBQVA7UUFDL0IsT0FBT0EsdUJBQXVCLENBQUNOLFFBQUQsQ0FBOUI7TUFDRCxDQWpDRCxNQWlDTztRQUFFO1FBQ1AsSUFBSTdDLEtBQUssQ0FBQ2tCLElBQU4sSUFBYyxXQUFsQixFQUErQjtVQUM3QkgsTUFBTSxHQUFHZixLQUFLLENBQUNJLE1BQWY7VUFDQVUsWUFBWSxHQUFHLElBQWY7UUFDRDs7UUFDRCxLQUFLLElBQUl3QyxJQUFULElBQWlCaEIsS0FBakI7VUFBd0IsSUFBSUEsS0FBSyxDQUFDRCxjQUFOLENBQXFCaUIsSUFBckIsTUFBK0IsQ0FBQ3ZDLE1BQUQsSUFBVzlCLE9BQU8sQ0FBQ3FFLElBQUQsRUFBT3ZDLE1BQVAsRUFBZTNCLGFBQWYsQ0FBakQsQ0FBSixFQUN0QnlCLE1BQU0sQ0FBQ3NCLElBQVAsQ0FBWW1CLElBQVo7UUFERjtNQUVEO0lBQ0Y7O0lBQ0QsU0FBU0YsV0FBVCxHQUF1QjtNQUNyQixPQUFPO1FBQ0xHLElBQUksRUFBRTFDLE1BREQ7UUFFTDJDLElBQUksRUFBRTFDLFlBQVksR0FBRzlCLEdBQUcsQ0FBQ2MsR0FBRyxDQUFDeUIsSUFBTCxFQUFXSCxRQUFRLElBQUksSUFBWixHQUFtQnBCLEtBQUssQ0FBQ00sS0FBekIsR0FBaUNjLFFBQTVDLENBQU4sR0FBOER0QixHQUYzRTtRQUdMMkQsRUFBRSxFQUFFM0MsWUFBWSxHQUFHOUIsR0FBRyxDQUFDYyxHQUFHLENBQUN5QixJQUFMLEVBQVd2QixLQUFLLENBQUNFLEdBQWpCLENBQU4sR0FBOEJKO01BSHpDLENBQVA7SUFLRDs7SUFDRCxPQUFPc0QsV0FBVyxFQUFsQjtFQUNEOztFQUVEckUsVUFBVSxDQUFDMkUsY0FBWCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5Q25FLFFBQXpDO0FBQ0QsQ0FoSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vaGludC94bWwtaGludC5qcz8xNTVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBQb3MgPSBDb2RlTWlycm9yLlBvcztcblxuICBmdW5jdGlvbiBtYXRjaGVzKGhpbnQsIHR5cGVkLCBtYXRjaEluTWlkZGxlKSB7XG4gICAgaWYgKG1hdGNoSW5NaWRkbGUpIHJldHVybiBoaW50LmluZGV4T2YodHlwZWQpID49IDA7XG4gICAgZWxzZSByZXR1cm4gaGludC5sYXN0SW5kZXhPZih0eXBlZCwgMCkgPT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhpbnRzKGNtLCBvcHRpb25zKSB7XG4gICAgdmFyIHRhZ3MgPSBvcHRpb25zICYmIG9wdGlvbnMuc2NoZW1hSW5mbztcbiAgICB2YXIgcXVvdGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLnF1b3RlQ2hhcikgfHwgJ1wiJztcbiAgICB2YXIgbWF0Y2hJbk1pZGRsZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tYXRjaEluTWlkZGxlO1xuICAgIGlmICghdGFncykgcmV0dXJuO1xuICAgIHZhciBjdXIgPSBjbS5nZXRDdXJzb3IoKSwgdG9rZW4gPSBjbS5nZXRUb2tlbkF0KGN1cik7XG4gICAgaWYgKHRva2VuLmVuZCA+IGN1ci5jaCkge1xuICAgICAgdG9rZW4uZW5kID0gY3VyLmNoO1xuICAgICAgdG9rZW4uc3RyaW5nID0gdG9rZW4uc3RyaW5nLnNsaWNlKDAsIGN1ci5jaCAtIHRva2VuLnN0YXJ0KTtcbiAgICB9XG4gICAgdmFyIGlubmVyID0gQ29kZU1pcnJvci5pbm5lck1vZGUoY20uZ2V0TW9kZSgpLCB0b2tlbi5zdGF0ZSk7XG4gICAgaWYgKCFpbm5lci5tb2RlLnhtbEN1cnJlbnRUYWcpIHJldHVyblxuICAgIHZhciByZXN1bHQgPSBbXSwgcmVwbGFjZVRva2VuID0gZmFsc2UsIHByZWZpeDtcbiAgICB2YXIgdGFnID0gL1xcYnRhZ1xcYi8udGVzdCh0b2tlbi50eXBlKSAmJiAhLz4kLy50ZXN0KHRva2VuLnN0cmluZyk7XG4gICAgdmFyIHRhZ05hbWUgPSB0YWcgJiYgL15cXHcvLnRlc3QodG9rZW4uc3RyaW5nKSwgdGFnU3RhcnQ7XG5cbiAgICBpZiAodGFnTmFtZSkge1xuICAgICAgdmFyIGJlZm9yZSA9IGNtLmdldExpbmUoY3VyLmxpbmUpLnNsaWNlKE1hdGgubWF4KDAsIHRva2VuLnN0YXJ0IC0gMiksIHRva2VuLnN0YXJ0KTtcbiAgICAgIHZhciB0YWdUeXBlID0gLzxcXC8kLy50ZXN0KGJlZm9yZSkgPyBcImNsb3NlXCIgOiAvPCQvLnRlc3QoYmVmb3JlKSA/IFwib3BlblwiIDogbnVsbDtcbiAgICAgIGlmICh0YWdUeXBlKSB0YWdTdGFydCA9IHRva2VuLnN0YXJ0IC0gKHRhZ1R5cGUgPT0gXCJjbG9zZVwiID8gMiA6IDEpO1xuICAgIH0gZWxzZSBpZiAodGFnICYmIHRva2VuLnN0cmluZyA9PSBcIjxcIikge1xuICAgICAgdGFnVHlwZSA9IFwib3BlblwiO1xuICAgIH0gZWxzZSBpZiAodGFnICYmIHRva2VuLnN0cmluZyA9PSBcIjwvXCIpIHtcbiAgICAgIHRhZ1R5cGUgPSBcImNsb3NlXCI7XG4gICAgfVxuXG4gICAgdmFyIHRhZ0luZm8gPSBpbm5lci5tb2RlLnhtbEN1cnJlbnRUYWcoaW5uZXIuc3RhdGUpXG4gICAgaWYgKCF0YWcgJiYgIXRhZ0luZm8gfHwgdGFnVHlwZSkge1xuICAgICAgaWYgKHRhZ05hbWUpXG4gICAgICAgIHByZWZpeCA9IHRva2VuLnN0cmluZztcbiAgICAgIHJlcGxhY2VUb2tlbiA9IHRhZ1R5cGU7XG4gICAgICB2YXIgY29udGV4dCA9IGlubmVyLm1vZGUueG1sQ3VycmVudENvbnRleHQgPyBpbm5lci5tb2RlLnhtbEN1cnJlbnRDb250ZXh0KGlubmVyLnN0YXRlKSA6IFtdXG4gICAgICB2YXIgaW5uZXIgPSBjb250ZXh0Lmxlbmd0aCAmJiBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV1cbiAgICAgIHZhciBjdXJUYWcgPSBpbm5lciAmJiB0YWdzW2lubmVyXVxuICAgICAgdmFyIGNoaWxkTGlzdCA9IGlubmVyID8gY3VyVGFnICYmIGN1clRhZy5jaGlsZHJlbiA6IHRhZ3NbXCIhdG9wXCJdO1xuICAgICAgaWYgKGNoaWxkTGlzdCAmJiB0YWdUeXBlICE9IFwiY2xvc2VcIikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTGlzdC5sZW5ndGg7ICsraSkgaWYgKCFwcmVmaXggfHwgbWF0Y2hlcyhjaGlsZExpc3RbaV0sIHByZWZpeCwgbWF0Y2hJbk1pZGRsZSkpXG4gICAgICAgICAgcmVzdWx0LnB1c2goXCI8XCIgKyBjaGlsZExpc3RbaV0pO1xuICAgICAgfSBlbHNlIGlmICh0YWdUeXBlICE9IFwiY2xvc2VcIikge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRhZ3MpXG4gICAgICAgICAgaWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbmFtZSAhPSBcIiF0b3BcIiAmJiBuYW1lICE9IFwiIWF0dHJzXCIgJiYgKCFwcmVmaXggfHwgbWF0Y2hlcyhuYW1lLCBwcmVmaXgsIG1hdGNoSW5NaWRkbGUpKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiPFwiICsgbmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5uZXIgJiYgKCFwcmVmaXggfHwgdGFnVHlwZSA9PSBcImNsb3NlXCIgJiYgbWF0Y2hlcyhpbm5lciwgcHJlZml4LCBtYXRjaEluTWlkZGxlKSkpXG4gICAgICAgIHJlc3VsdC5wdXNoKFwiPC9cIiArIGlubmVyICsgXCI+XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdHRyaWJ1dGUgY29tcGxldGlvblxuICAgICAgdmFyIGN1clRhZyA9IHRhZ0luZm8gJiYgdGFnc1t0YWdJbmZvLm5hbWVdLCBhdHRycyA9IGN1clRhZyAmJiBjdXJUYWcuYXR0cnM7XG4gICAgICB2YXIgZ2xvYmFsQXR0cnMgPSB0YWdzW1wiIWF0dHJzXCJdO1xuICAgICAgaWYgKCFhdHRycyAmJiAhZ2xvYmFsQXR0cnMpIHJldHVybjtcbiAgICAgIGlmICghYXR0cnMpIHtcbiAgICAgICAgYXR0cnMgPSBnbG9iYWxBdHRycztcbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsQXR0cnMpIHsgLy8gQ29tYmluZSB0YWctbG9jYWwgYW5kIGdsb2JhbCBhdHRyaWJ1dGVzXG4gICAgICAgIHZhciBzZXQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbm0gaW4gZ2xvYmFsQXR0cnMpIGlmIChnbG9iYWxBdHRycy5oYXNPd25Qcm9wZXJ0eShubSkpIHNldFtubV0gPSBnbG9iYWxBdHRyc1tubV07XG4gICAgICAgIGZvciAodmFyIG5tIGluIGF0dHJzKSBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkobm0pKSBzZXRbbm1dID0gYXR0cnNbbm1dO1xuICAgICAgICBhdHRycyA9IHNldDtcbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbi50eXBlID09IFwic3RyaW5nXCIgfHwgdG9rZW4uc3RyaW5nID09IFwiPVwiKSB7IC8vIEEgdmFsdWVcbiAgICAgICAgdmFyIGJlZm9yZSA9IGNtLmdldFJhbmdlKFBvcyhjdXIubGluZSwgTWF0aC5tYXgoMCwgY3VyLmNoIC0gNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcyhjdXIubGluZSwgdG9rZW4udHlwZSA9PSBcInN0cmluZ1wiID8gdG9rZW4uc3RhcnQgOiB0b2tlbi5lbmQpKTtcbiAgICAgICAgdmFyIGF0TmFtZSA9IGJlZm9yZS5tYXRjaCgvKFteXFxzXFx1MDBhMD08PlxcXCJcXCddKyk9JC8pLCBhdFZhbHVlcztcbiAgICAgICAgaWYgKCFhdE5hbWUgfHwgIWF0dHJzLmhhc093blByb3BlcnR5KGF0TmFtZVsxXSkgfHwgIShhdFZhbHVlcyA9IGF0dHJzW2F0TmFtZVsxXV0pKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgYXRWYWx1ZXMgPT0gJ2Z1bmN0aW9uJykgYXRWYWx1ZXMgPSBhdFZhbHVlcy5jYWxsKHRoaXMsIGNtKTsgLy8gRnVuY3Rpb25zIGNhbiBiZSB1c2VkIHRvIHN1cHBseSB2YWx1ZXMgZm9yIGF1dG9jb21wbGV0ZSB3aWRnZXRcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHByZWZpeCA9IHRva2VuLnN0cmluZztcbiAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgaWYgKC9bJ1wiXS8udGVzdCh0b2tlbi5zdHJpbmcuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgcXVvdGUgPSB0b2tlbi5zdHJpbmcuY2hhckF0KDApO1xuICAgICAgICAgICAgcHJlZml4ID0gdG9rZW4uc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICAgICAgbisrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbGVuID0gdG9rZW4uc3RyaW5nLmxlbmd0aDtcbiAgICAgICAgICBpZiAoL1snXCJdLy50ZXN0KHRva2VuLnN0cmluZy5jaGFyQXQobGVuIC0gMSkpKSB7XG4gICAgICAgICAgICBxdW90ZSA9IHRva2VuLnN0cmluZy5jaGFyQXQobGVuIC0gMSk7XG4gICAgICAgICAgICBwcmVmaXggPSB0b2tlbi5zdHJpbmcuc3Vic3RyKG4sIGxlbiAtIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobikgeyAvLyBhbiBvcGVuaW5nIHF1b3RlXG4gICAgICAgICAgICB2YXIgbGluZSA9IGNtLmdldExpbmUoY3VyLmxpbmUpO1xuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID4gdG9rZW4uZW5kICYmIGxpbmUuY2hhckF0KHRva2VuLmVuZCkgPT0gcXVvdGUpIHRva2VuLmVuZCsrOyAvLyBpbmNsdWRlIGEgY2xvc2luZyBxdW90ZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXBsYWNlVG9rZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXR1cm5IaW50c0Zyb21BdFZhbHVlcyA9IGZ1bmN0aW9uKGF0VmFsdWVzKSB7XG4gICAgICAgICAgaWYgKGF0VmFsdWVzKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdFZhbHVlcy5sZW5ndGg7ICsraSkgaWYgKCFwcmVmaXggfHwgbWF0Y2hlcyhhdFZhbHVlc1tpXSwgcHJlZml4LCBtYXRjaEluTWlkZGxlKSlcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocXVvdGUgKyBhdFZhbHVlc1tpXSArIHF1b3RlKTtcbiAgICAgICAgICByZXR1cm4gcmV0dXJuSGludHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF0VmFsdWVzICYmIGF0VmFsdWVzLnRoZW4pIHJldHVybiBhdFZhbHVlcy50aGVuKHJldHVybkhpbnRzRnJvbUF0VmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHJldHVybkhpbnRzRnJvbUF0VmFsdWVzKGF0VmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7IC8vIEFuIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIGlmICh0b2tlbi50eXBlID09IFwiYXR0cmlidXRlXCIpIHtcbiAgICAgICAgICBwcmVmaXggPSB0b2tlbi5zdHJpbmc7XG4gICAgICAgICAgcmVwbGFjZVRva2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikgJiYgKCFwcmVmaXggfHwgbWF0Y2hlcyhhdHRyLCBwcmVmaXgsIG1hdGNoSW5NaWRkbGUpKSlcbiAgICAgICAgICByZXN1bHQucHVzaChhdHRyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmV0dXJuSGludHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiByZXN1bHQsXG4gICAgICAgIGZyb206IHJlcGxhY2VUb2tlbiA/IFBvcyhjdXIubGluZSwgdGFnU3RhcnQgPT0gbnVsbCA/IHRva2VuLnN0YXJ0IDogdGFnU3RhcnQpIDogY3VyLFxuICAgICAgICB0bzogcmVwbGFjZVRva2VuID8gUG9zKGN1ci5saW5lLCB0b2tlbi5lbmQpIDogY3VyXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuSGludHMoKTtcbiAgfVxuXG4gIENvZGVNaXJyb3IucmVnaXN0ZXJIZWxwZXIoXCJoaW50XCIsIFwieG1sXCIsIGdldEhpbnRzKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsIlBvcyIsIm1hdGNoZXMiLCJoaW50IiwidHlwZWQiLCJtYXRjaEluTWlkZGxlIiwiaW5kZXhPZiIsImxhc3RJbmRleE9mIiwiZ2V0SGludHMiLCJjbSIsIm9wdGlvbnMiLCJ0YWdzIiwic2NoZW1hSW5mbyIsInF1b3RlIiwicXVvdGVDaGFyIiwiY3VyIiwiZ2V0Q3Vyc29yIiwidG9rZW4iLCJnZXRUb2tlbkF0IiwiZW5kIiwiY2giLCJzdHJpbmciLCJzbGljZSIsInN0YXJ0IiwiaW5uZXIiLCJpbm5lck1vZGUiLCJnZXRNb2RlIiwic3RhdGUiLCJtb2RlIiwieG1sQ3VycmVudFRhZyIsInJlc3VsdCIsInJlcGxhY2VUb2tlbiIsInByZWZpeCIsInRhZyIsInRlc3QiLCJ0eXBlIiwidGFnTmFtZSIsInRhZ1N0YXJ0IiwiYmVmb3JlIiwiZ2V0TGluZSIsImxpbmUiLCJNYXRoIiwibWF4IiwidGFnVHlwZSIsInRhZ0luZm8iLCJjb250ZXh0IiwieG1sQ3VycmVudENvbnRleHQiLCJsZW5ndGgiLCJjdXJUYWciLCJjaGlsZExpc3QiLCJjaGlsZHJlbiIsImkiLCJwdXNoIiwibmFtZSIsImhhc093blByb3BlcnR5IiwiYXR0cnMiLCJnbG9iYWxBdHRycyIsInNldCIsIm5tIiwiZ2V0UmFuZ2UiLCJhdE5hbWUiLCJtYXRjaCIsImF0VmFsdWVzIiwiY2FsbCIsIm4iLCJjaGFyQXQiLCJsZW4iLCJzdWJzdHIiLCJyZXR1cm5IaW50c0Zyb21BdFZhbHVlcyIsInJldHVybkhpbnRzIiwidGhlbiIsImF0dHIiLCJsaXN0IiwiZnJvbSIsInRvIiwicmVnaXN0ZXJIZWxwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/hint/xml-hint.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/hint/xml-hint.js");
/******/ 	
/******/ })()
;