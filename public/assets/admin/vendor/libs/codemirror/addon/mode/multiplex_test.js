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

/***/ "./resources/assets/vendor/libs/codemirror/addon/mode/multiplex_test.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/codemirror/addon/mode/multiplex_test.js ***!
  \******************************************************************************/
/***/ (() => {

eval("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function () {\n  CodeMirror.defineMode(\"markdown_with_stex\", function () {\n    var inner = CodeMirror.getMode({}, \"stex\");\n    var outer = CodeMirror.getMode({}, \"markdown\");\n    var innerOptions = {\n      open: '$',\n      close: '$',\n      mode: inner,\n      delimStyle: 'delim',\n      innerStyle: 'inner'\n    };\n    return CodeMirror.multiplexingMode(outer, innerOptions);\n  });\n  var mode = CodeMirror.getMode({}, \"markdown_with_stex\");\n\n  function MT(name) {\n    test.mode(name, mode, Array.prototype.slice.call(arguments, 1), 'multiplexing');\n  }\n\n  MT(\"stexInsideMarkdown\", \"[strong **Equation:**] [delim&delim-open $][inner&tag \\\\pi][delim&delim-close $]\");\n  CodeMirror.defineMode(\"identical_delim_multiplex\", function () {\n    return CodeMirror.multiplexingMode(CodeMirror.getMode({\n      indentUnit: 2\n    }, \"javascript\"), {\n      open: \"#\",\n      close: \"#\",\n      mode: CodeMirror.getMode({}, \"markdown\"),\n      parseDelimiters: true,\n      innerStyle: \"q\"\n    });\n  });\n  var mode2 = CodeMirror.getMode({}, \"identical_delim_multiplex\");\n  test.mode(\"identical_delimiters_with_parseDelimiters\", mode2, [\"[keyword let] [def x] [operator =] [q #foo][q&em *bar*][q #];\"], \"multiplexing\");\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImlubmVyIiwiZ2V0TW9kZSIsIm91dGVyIiwiaW5uZXJPcHRpb25zIiwib3BlbiIsImNsb3NlIiwibW9kZSIsImRlbGltU3R5bGUiLCJpbm5lclN0eWxlIiwibXVsdGlwbGV4aW5nTW9kZSIsIk1UIiwibmFtZSIsInRlc3QiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImluZGVudFVuaXQiLCJwYXJzZURlbGltaXRlcnMiLCJtb2RlMiJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL2NvZGVtaXJyb3IvYWRkb24vbW9kZS9tdWx0aXBsZXhfdGVzdC5qcz8xN2RlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbigpIHtcbiAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwibWFya2Rvd25fd2l0aF9zdGV4XCIsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGlubmVyID0gQ29kZU1pcnJvci5nZXRNb2RlKHt9LCBcInN0ZXhcIik7XG4gICAgdmFyIG91dGVyID0gQ29kZU1pcnJvci5nZXRNb2RlKHt9LCBcIm1hcmtkb3duXCIpO1xuXG4gICAgdmFyIGlubmVyT3B0aW9ucyA9IHtcbiAgICAgIG9wZW46ICckJyxcbiAgICAgIGNsb3NlOiAnJCcsXG4gICAgICBtb2RlOiBpbm5lcixcbiAgICAgIGRlbGltU3R5bGU6ICdkZWxpbScsXG4gICAgICBpbm5lclN0eWxlOiAnaW5uZXInXG4gICAgfTtcblxuICAgIHJldHVybiBDb2RlTWlycm9yLm11bHRpcGxleGluZ01vZGUob3V0ZXIsIGlubmVyT3B0aW9ucyk7XG4gIH0pO1xuXG4gIHZhciBtb2RlID0gQ29kZU1pcnJvci5nZXRNb2RlKHt9LCBcIm1hcmtkb3duX3dpdGhfc3RleFwiKTtcblxuICBmdW5jdGlvbiBNVChuYW1lKSB7XG4gICAgdGVzdC5tb2RlKFxuICAgICAgbmFtZSxcbiAgICAgIG1vZGUsXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgJ211bHRpcGxleGluZycpO1xuICB9XG5cbiAgTVQoXG4gICAgXCJzdGV4SW5zaWRlTWFya2Rvd25cIixcbiAgICBcIltzdHJvbmcgKipFcXVhdGlvbjoqKl0gW2RlbGltJmRlbGltLW9wZW4gJF1baW5uZXImdGFnIFxcXFxwaV1bZGVsaW0mZGVsaW0tY2xvc2UgJF1cIik7XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwiaWRlbnRpY2FsX2RlbGltX211bHRpcGxleFwiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQ29kZU1pcnJvci5tdWx0aXBsZXhpbmdNb2RlKENvZGVNaXJyb3IuZ2V0TW9kZSh7aW5kZW50VW5pdDogMn0sIFwiamF2YXNjcmlwdFwiKSwge1xuICAgICAgb3BlbjogXCIjXCIsXG4gICAgICBjbG9zZTogXCIjXCIsXG4gICAgICBtb2RlOiBDb2RlTWlycm9yLmdldE1vZGUoe30sIFwibWFya2Rvd25cIiksXG4gICAgICBwYXJzZURlbGltaXRlcnM6IHRydWUsXG4gICAgICBpbm5lclN0eWxlOiBcInFcIlxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgbW9kZTIgPSBDb2RlTWlycm9yLmdldE1vZGUoe30sIFwiaWRlbnRpY2FsX2RlbGltX211bHRpcGxleFwiKTtcblxuICB0ZXN0Lm1vZGUoXCJpZGVudGljYWxfZGVsaW1pdGVyc193aXRoX3BhcnNlRGVsaW1pdGVyc1wiLCBtb2RlMiwgW1xuICAgIFwiW2tleXdvcmQgbGV0XSBbZGVmIHhdIFtvcGVyYXRvciA9XSBbcSAjZm9vXVtxJmVtICpiYXIqXVtxICNdO1wiXG4gIF0sIFwibXVsdGlwbGV4aW5nXCIpXG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUEsQ0FBQyxZQUFXO0VBQ1ZBLFVBQVUsQ0FBQ0MsVUFBWCxDQUFzQixvQkFBdEIsRUFBNEMsWUFBVTtJQUNwRCxJQUFJQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQixFQUFuQixFQUF1QixNQUF2QixDQUFaO0lBQ0EsSUFBSUMsS0FBSyxHQUFHSixVQUFVLENBQUNHLE9BQVgsQ0FBbUIsRUFBbkIsRUFBdUIsVUFBdkIsQ0FBWjtJQUVBLElBQUlFLFlBQVksR0FBRztNQUNqQkMsSUFBSSxFQUFFLEdBRFc7TUFFakJDLEtBQUssRUFBRSxHQUZVO01BR2pCQyxJQUFJLEVBQUVOLEtBSFc7TUFJakJPLFVBQVUsRUFBRSxPQUpLO01BS2pCQyxVQUFVLEVBQUU7SUFMSyxDQUFuQjtJQVFBLE9BQU9WLFVBQVUsQ0FBQ1csZ0JBQVgsQ0FBNEJQLEtBQTVCLEVBQW1DQyxZQUFuQyxDQUFQO0VBQ0QsQ0FiRDtFQWVBLElBQUlHLElBQUksR0FBR1IsVUFBVSxDQUFDRyxPQUFYLENBQW1CLEVBQW5CLEVBQXVCLG9CQUF2QixDQUFYOztFQUVBLFNBQVNTLEVBQVQsQ0FBWUMsSUFBWixFQUFrQjtJQUNoQkMsSUFBSSxDQUFDTixJQUFMLENBQ0VLLElBREYsRUFFRUwsSUFGRixFQUdFTyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsRUFBc0MsQ0FBdEMsQ0FIRixFQUlFLGNBSkY7RUFLRDs7RUFFRFAsRUFBRSxDQUNBLG9CQURBLEVBRUEsa0ZBRkEsQ0FBRjtFQUlBWixVQUFVLENBQUNDLFVBQVgsQ0FBc0IsMkJBQXRCLEVBQW1ELFlBQVc7SUFDNUQsT0FBT0QsVUFBVSxDQUFDVyxnQkFBWCxDQUE0QlgsVUFBVSxDQUFDRyxPQUFYLENBQW1CO01BQUNpQixVQUFVLEVBQUU7SUFBYixDQUFuQixFQUFvQyxZQUFwQyxDQUE1QixFQUErRTtNQUNwRmQsSUFBSSxFQUFFLEdBRDhFO01BRXBGQyxLQUFLLEVBQUUsR0FGNkU7TUFHcEZDLElBQUksRUFBRVIsVUFBVSxDQUFDRyxPQUFYLENBQW1CLEVBQW5CLEVBQXVCLFVBQXZCLENBSDhFO01BSXBGa0IsZUFBZSxFQUFFLElBSm1FO01BS3BGWCxVQUFVLEVBQUU7SUFMd0UsQ0FBL0UsQ0FBUDtFQU9ELENBUkQ7RUFVQSxJQUFJWSxLQUFLLEdBQUd0QixVQUFVLENBQUNHLE9BQVgsQ0FBbUIsRUFBbkIsRUFBdUIsMkJBQXZCLENBQVo7RUFFQVcsSUFBSSxDQUFDTixJQUFMLENBQVUsMkNBQVYsRUFBdURjLEtBQXZELEVBQThELENBQzVELCtEQUQ0RCxDQUE5RCxFQUVHLGNBRkg7QUFHRCxDQTdDRCIsImZpbGUiOiIuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvY29kZW1pcnJvci9hZGRvbi9tb2RlL211bHRpcGxleF90ZXN0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/codemirror/addon/mode/multiplex_test.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/vendor/libs/codemirror/addon/mode/multiplex_test.js"]();
/******/ 	
/******/ })()
;