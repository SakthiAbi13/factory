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

/***/ "./resources/assets/vendor/libs/codemirror/addon/selection/selection-pointer.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/selection/selection-pointer.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? 0 : _typeof(exports)) == \"object\" && ( false ? 0 : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../lib/codemirror'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"selectionPointer\", false, function (cm, val) {\n    var data = cm.state.selectionPointer;\n\n    if (data) {\n      CodeMirror.off(cm.getWrapperElement(), \"mousemove\", data.mousemove);\n      CodeMirror.off(cm.getWrapperElement(), \"mouseout\", data.mouseout);\n      CodeMirror.off(window, \"scroll\", data.windowScroll);\n      cm.off(\"cursorActivity\", reset);\n      cm.off(\"scroll\", reset);\n      cm.state.selectionPointer = null;\n      cm.display.lineDiv.style.cursor = \"\";\n    }\n\n    if (val) {\n      data = cm.state.selectionPointer = {\n        value: typeof val == \"string\" ? val : \"default\",\n        mousemove: function mousemove(event) {\n          _mousemove(cm, event);\n        },\n        mouseout: function mouseout(event) {\n          _mouseout(cm, event);\n        },\n        windowScroll: function windowScroll() {\n          reset(cm);\n        },\n        rects: null,\n        mouseX: null,\n        mouseY: null,\n        willUpdate: false\n      };\n      CodeMirror.on(cm.getWrapperElement(), \"mousemove\", data.mousemove);\n      CodeMirror.on(cm.getWrapperElement(), \"mouseout\", data.mouseout);\n      CodeMirror.on(window, \"scroll\", data.windowScroll);\n      cm.on(\"cursorActivity\", reset);\n      cm.on(\"scroll\", reset);\n    }\n  });\n\n  function _mousemove(cm, event) {\n    var data = cm.state.selectionPointer;\n\n    if (event.buttons == null ? event.which : event.buttons) {\n      data.mouseX = data.mouseY = null;\n    } else {\n      data.mouseX = event.clientX;\n      data.mouseY = event.clientY;\n    }\n\n    scheduleUpdate(cm);\n  }\n\n  function _mouseout(cm, event) {\n    if (!cm.getWrapperElement().contains(event.relatedTarget)) {\n      var data = cm.state.selectionPointer;\n      data.mouseX = data.mouseY = null;\n      scheduleUpdate(cm);\n    }\n  }\n\n  function reset(cm) {\n    cm.state.selectionPointer.rects = null;\n    scheduleUpdate(cm);\n  }\n\n  function scheduleUpdate(cm) {\n    if (!cm.state.selectionPointer.willUpdate) {\n      cm.state.selectionPointer.willUpdate = true;\n      setTimeout(function () {\n        update(cm);\n        cm.state.selectionPointer.willUpdate = false;\n      }, 50);\n    }\n  }\n\n  function update(cm) {\n    var data = cm.state.selectionPointer;\n    if (!data) return;\n\n    if (data.rects == null && data.mouseX != null) {\n      data.rects = [];\n\n      if (cm.somethingSelected()) {\n        for (var sel = cm.display.selectionDiv.firstChild; sel; sel = sel.nextSibling) {\n          data.rects.push(sel.getBoundingClientRect());\n        }\n      }\n    }\n\n    var inside = false;\n    if (data.mouseX != null) for (var i = 0; i < data.rects.length; i++) {\n      var rect = data.rects[i];\n      if (rect.left <= data.mouseX && rect.right >= data.mouseX && rect.top <= data.mouseY && rect.bottom >= data.mouseY) inside = true;\n    }\n    var cursor = inside ? data.value : \"\";\n    if (cm.display.lineDiv.style.cursor != cursor) cm.display.lineDiv.style.cursor = cursor;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vc2VsZWN0aW9uL3NlbGVjdGlvbi1wb2ludGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztFQUNiLElBQUksc0JBQU9DLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsc0JBQU9DLE1BQVAsTUFBaUIsUUFBbkQsRUFBNkQ7SUFDM0RGLEdBQUcsQ0FBQ0csbUJBQU8sQ0FBQyxtSkFBRCxDQUFSLENBQUgsQ0FERixLQUVLLElBQUksSUFBSixFQUErQztJQUNsREMsaUNBQU8sQ0FBQyxtSkFBRCxDQUFELG9DQUEyQkosR0FBM0I7QUFBQTtBQUFBO0FBQUEsa0dBQU4sQ0FERyxLQUVBO0lBQ0hBLEVBQUE7QUFDSCxDQVBELEVBT0csVUFBU00sVUFBVCxFQUFxQjtFQUN0Qjs7RUFFQUEsVUFBVSxDQUFDQyxZQUFYLENBQXdCLGtCQUF4QixFQUE0QyxLQUE1QyxFQUFtRCxVQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBa0I7SUFDbkUsSUFBSUMsSUFBSSxHQUFHRixFQUFFLENBQUNHLEtBQUgsQ0FBU0MsZ0JBQXBCOztJQUNBLElBQUlGLElBQUosRUFBVTtNQUNSSixVQUFVLENBQUNPLEdBQVgsQ0FBZUwsRUFBRSxDQUFDTSxpQkFBSCxFQUFmLEVBQXVDLFdBQXZDLEVBQW9ESixJQUFJLENBQUNLLFNBQXpEO01BQ0FULFVBQVUsQ0FBQ08sR0FBWCxDQUFlTCxFQUFFLENBQUNNLGlCQUFILEVBQWYsRUFBdUMsVUFBdkMsRUFBbURKLElBQUksQ0FBQ00sUUFBeEQ7TUFDQVYsVUFBVSxDQUFDTyxHQUFYLENBQWVJLE1BQWYsRUFBdUIsUUFBdkIsRUFBaUNQLElBQUksQ0FBQ1EsWUFBdEM7TUFDQVYsRUFBRSxDQUFDSyxHQUFILENBQU8sZ0JBQVAsRUFBeUJNLEtBQXpCO01BQ0FYLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPLFFBQVAsRUFBaUJN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Q0QsQ0FBQyxFQUF4QyxFQUE0QztNQUNuRSxJQUFJRSxJQUFJLEdBQUd4QyxJQUFJLENBQUNnQixLQUFMLENBQVdzQixDQUFYLENBQVg7TUFDQSxJQUFJRSxJQUFJLENBQUNDLElBQUwsSUFBYXpDLElBQUksQ0FBQ2lCLE1BQWxCLElBQTRCdUIsSUFBSSxDQUFDRSxLQUFMLElBQWMxQyxJQUFJLENBQUNpQixNQUEvQyxJQUNBdUIsSUFBSSxDQUFDRyxHQUFMLElBQVkzQyxJQUFJLENBQUNrQixNQURqQixJQUMyQnNCLElBQUksQ0FBQ0ksTUFBTCxJQUFlNUMsSUFBSSxDQUFDa0IsTUFEbkQsRUFFRW1CLE1BQU0sR0FBRyxJQUFUO0lBQ0g7SUFDRCxJQUFJeEIsTUFBTSxHQUFHd0IsTUFBTSxHQUFHckMsSUFBSSxDQUFDYyxLQUFSLEdBQWdCLEVBQW5DO0lBQ0EsSUFBSWhCLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXQyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBekIsSUFBbUNBLE1BQXZDLEVBQ0VmLEVBQUUsQ0FBQ1ksT0FBSCxDQUFXQyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBekIsR0FBa0NBLE1BQWxDO0VBQ0g7QUFDRixDQTlGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9zZWxlY3Rpb24vc2VsZWN0aW9uLXBvaW50ZXIuanM/M2IzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInNlbGVjdGlvblBvaW50ZXJcIiwgZmFsc2UsIGZ1bmN0aW9uKGNtLCB2YWwpIHtcbiAgICB2YXIgZGF0YSA9IGNtLnN0YXRlLnNlbGVjdGlvblBvaW50ZXI7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIENvZGVNaXJyb3Iub2ZmKGNtLmdldFdyYXBwZXJFbGVtZW50KCksIFwibW91c2Vtb3ZlXCIsIGRhdGEubW91c2Vtb3ZlKTtcbiAgICAgIENvZGVNaXJyb3Iub2ZmKGNtLmdldFdyYXBwZXJFbGVtZW50KCksIFwibW91c2VvdXRcIiwgZGF0YS5tb3VzZW91dCk7XG4gICAgICBDb2RlTWlycm9yLm9mZih3aW5kb3csIFwic2Nyb2xsXCIsIGRhdGEud2luZG93U2Nyb2xsKTtcbiAgICAgIGNtLm9mZihcImN1cnNvckFjdGl2aXR5XCIsIHJlc2V0KTtcbiAgICAgIGNtLm9mZihcInNjcm9sbFwiLCByZXNldCk7XG4gICAgICBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyID0gbnVsbDtcbiAgICAgIGNtLmRpc3BsYXkubGluZURpdi5zdHlsZS5jdXJzb3IgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAodmFsKSB7XG4gICAgICBkYXRhID0gY20uc3RhdGUuc2VsZWN0aW9uUG9pbnRlciA9IHtcbiAgICAgICAgdmFsdWU6IHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIiA/IHZhbCA6IFwiZGVmYXVsdFwiLFxuICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlbW92ZShjbSwgZXZlbnQpOyB9LFxuICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VvdXQoY20sIGV2ZW50KTsgfSxcbiAgICAgICAgd2luZG93U2Nyb2xsOiBmdW5jdGlvbigpIHsgcmVzZXQoY20pOyB9LFxuICAgICAgICByZWN0czogbnVsbCxcbiAgICAgICAgbW91c2VYOiBudWxsLCBtb3VzZVk6IG51bGwsXG4gICAgICAgIHdpbGxVcGRhdGU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgQ29kZU1pcnJvci5vbihjbS5nZXRXcmFwcGVyRWxlbWVudCgpLCBcIm1vdXNlbW92ZVwiLCBkYXRhLm1vdXNlbW92ZSk7XG4gICAgICBDb2RlTWlycm9yLm9uKGNtLmdldFdyYXBwZXJFbGVtZW50KCksIFwibW91c2VvdXRcIiwgZGF0YS5tb3VzZW91dCk7XG4gICAgICBDb2RlTWlycm9yLm9uKHdpbmRvdywgXCJzY3JvbGxcIiwgZGF0YS53aW5kb3dTY3JvbGwpO1xuICAgICAgY20ub24oXCJjdXJzb3JBY3Rpdml0eVwiLCByZXNldCk7XG4gICAgICBjbS5vbihcInNjcm9sbFwiLCByZXNldCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBtb3VzZW1vdmUoY20sIGV2ZW50KSB7XG4gICAgdmFyIGRhdGEgPSBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyO1xuICAgIGlmIChldmVudC5idXR0b25zID09IG51bGwgPyBldmVudC53aGljaCA6IGV2ZW50LmJ1dHRvbnMpIHtcbiAgICAgIGRhdGEubW91c2VYID0gZGF0YS5tb3VzZVkgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLm1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBkYXRhLm1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgfVxuICAgIHNjaGVkdWxlVXBkYXRlKGNtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0KGNtLCBldmVudCkge1xuICAgIGlmICghY20uZ2V0V3JhcHBlckVsZW1lbnQoKS5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgdmFyIGRhdGEgPSBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyO1xuICAgICAgZGF0YS5tb3VzZVggPSBkYXRhLm1vdXNlWSA9IG51bGw7XG4gICAgICBzY2hlZHVsZVVwZGF0ZShjbSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoY20pIHtcbiAgICBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyLnJlY3RzID0gbnVsbDtcbiAgICBzY2hlZHVsZVVwZGF0ZShjbSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZVVwZGF0ZShjbSkge1xuICAgIGlmICghY20uc3RhdGUuc2VsZWN0aW9uUG9pbnRlci53aWxsVXBkYXRlKSB7XG4gICAgICBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyLndpbGxVcGRhdGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlKGNtKTtcbiAgICAgICAgY20uc3RhdGUuc2VsZWN0aW9uUG9pbnRlci53aWxsVXBkYXRlID0gZmFsc2U7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGNtKSB7XG4gICAgdmFyIGRhdGEgPSBjbS5zdGF0ZS5zZWxlY3Rpb25Qb2ludGVyO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIGlmIChkYXRhLnJlY3RzID09IG51bGwgJiYgZGF0YS5tb3VzZVggIT0gbnVsbCkge1xuICAgICAgZGF0YS5yZWN0cyA9IFtdO1xuICAgICAgaWYgKGNtLnNvbWV0aGluZ1NlbGVjdGVkKCkpIHtcbiAgICAgICAgZm9yICh2YXIgc2VsID0gY20uZGlzcGxheS5zZWxlY3Rpb25EaXYuZmlyc3RDaGlsZDsgc2VsOyBzZWwgPSBzZWwubmV4dFNpYmxpbmcpXG4gICAgICAgICAgZGF0YS5yZWN0cy5wdXNoKHNlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcbiAgICBpZiAoZGF0YS5tb3VzZVggIT0gbnVsbCkgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVjdCA9IGRhdGEucmVjdHNbaV07XG4gICAgICBpZiAocmVjdC5sZWZ0IDw9IGRhdGEubW91c2VYICYmIHJlY3QucmlnaHQgPj0gZGF0YS5tb3VzZVggJiZcbiAgICAgICAgICByZWN0LnRvcCA8PSBkYXRhLm1vdXNlWSAmJiByZWN0LmJvdHRvbSA+PSBkYXRhLm1vdXNlWSlcbiAgICAgICAgaW5zaWRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGN1cnNvciA9IGluc2lkZSA/IGRhdGEudmFsdWUgOiBcIlwiO1xuICAgIGlmIChjbS5kaXNwbGF5LmxpbmVEaXYuc3R5bGUuY3Vyc29yICE9IGN1cnNvcilcbiAgICAgIGNtLmRpc3BsYXkubGluZURpdi5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRlZmluZU9wdGlvbiIsImNtIiwidmFsIiwiZGF0YSIsInN0YXRlIiwic2VsZWN0aW9uUG9pbnRlciIsIm9mZiIsImdldFdyYXBwZXJFbGVtZW50IiwibW91c2Vtb3ZlIiwibW91c2VvdXQiLCJ3aW5kb3ciLCJ3aW5kb3dTY3JvbGwiLCJyZXNldCIsImRpc3BsYXkiLCJsaW5lRGl2Iiwic3R5bGUiLCJjdXJzb3IiLCJ2YWx1ZSIsImV2ZW50IiwicmVjdHMiLCJtb3VzZVgiLCJtb3VzZVkiLCJ3aWxsVXBkYXRlIiwib24iLCJidXR0b25zIiwid2hpY2giLCJjbGllbnRYIiwiY2xpZW50WSIsInNjaGVkdWxlVXBkYXRlIiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0Iiwic2V0VGltZW91dCIsInVwZGF0ZSIsInNvbWV0aGluZ1NlbGVjdGVkIiwic2VsIiwic2VsZWN0aW9uRGl2IiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicHVzaCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImluc2lkZSIsImkiLCJsZW5ndGgiLCJyZWN0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/selection/selection-pointer.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/codemirror/addon/selection/selection-pointer.js");
/******/ 	
/******/ })()
;