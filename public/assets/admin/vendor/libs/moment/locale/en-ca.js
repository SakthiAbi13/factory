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

/***/ "./resources/assets/vendor/libs/moment/locale/en-ca.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/en-ca.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : English (Canada) [en-ca]\n//! author : Jonathan Abourbih : https://github.com/jonbca\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var enCa = moment.defineLocale('en-ca', {\n    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),\n    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),\n    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),\n    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),\n    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),\n    longDateFormat: {\n      LT: 'h:mm A',\n      LTS: 'h:mm:ss A',\n      L: 'YYYY-MM-DD',\n      LL: 'MMMM D, YYYY',\n      LLL: 'MMMM D, YYYY h:mm A',\n      LLLL: 'dddd, MMMM D, YYYY h:mm A'\n    },\n    calendar: {\n      sameDay: '[Today at] LT',\n      nextDay: '[Tomorrow at] LT',\n      nextWeek: 'dddd [at] LT',\n      lastDay: '[Yesterday at] LT',\n      lastWeek: '[Last] dddd [at] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'in %s',\n      past: '%s ago',\n      s: 'a few seconds',\n      ss: '%d seconds',\n      m: 'a minute',\n      mm: '%d minutes',\n      h: 'an hour',\n      hh: '%d hours',\n      d: 'a day',\n      dd: '%d days',\n      M: 'a month',\n      MM: '%d months',\n      y: 'a year',\n      yy: '%d years'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(st|nd|rd|th)/,\n    ordinal: function ordinal(number) {\n      var b = number % 10,\n          output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';\n      return number + output;\n    }\n  });\n  return enCa;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvZW4tY2EuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkI7SUFDcENDLE1BQU0sRUFBRSx3RkFBd0ZDLEtBQXhGLENBQ0osR0FESSxDQUQ0QjtJQUlwQ0MsV0FBVyxFQUFFLGtEQUFrREQsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FKdUI7SUFLcENFLFFBQVEsRUFBRSwyREFBMkRGLEtBQTNELENBQ04sR0FETSxDQUwwQjtJQVFwQ0csYUFBYSxFQUFFLDhCQUE4QkgsS0FBOUIsQ0FBb0MsR0FBcEMsQ0FScUI7SUFTcENJLFdBQVcsRUFBRSx1QkFBdUJKLEtBQXZCLENBQTZCLEdBQTdCLENBVHVCO0lBVXBDSyxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLFFBRFE7TUFFWkMsR0FBRyxFQUFFLFdBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGNBSlE7TUFLWkMsR0FBRyxFQUFFLHFCQUxPO01BTVpDLElBQUksRUFBRTtJQU5NLENBVm9CO0lBa0JwQ0MsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxlQURIO01BRU5DLE9BQU8sRUFBRSxrQkFGSDtNQUdOQyxRQUFRLEVBQUUsY0FISjtNQUlOQyxPQUFPLEVBQUUsbUJBSkg7TUFLTkMsUUFBUSxFQUFFLHFCQUxKO01BTU5DLFFBQVEsRUFBRTtJQU5KLENBbEIwQjtJQTBCcENDLFlBQVksRUFBRTtNQUNWQyxNQUFNLEVBQUUsT0FERTtNQUVWQyxJQUFJLEVBQUUsUUFGSTtNQUdWQyxDQUFDLEVBQUUsZUFITztNQUlWQyxFQUFFLEVBQUUsWUFKTTtNQUtWQyxDQUFDLEVBQUUsVUFMTztNQU1WQyxFQUFFLEVBQUUsWUFOTTtNQU9WQyxDQUFDLEVBQUUsU0FQTztNQVFWQyxFQUFFLEVBQUUsVUFSTTtNQVNWQyxDQUFDLEVBQUUsT0FUTztNQVVWQyxFQUFFLEVBQUUsU0FWTTtNQVdWQyxDQUFDLEVBQUUsU0FYTztNQVlWQyxFQUFFLEVBQUUsV0FaTTtNQWFWQyxDQUFDLEVBQUUsUUFiTztNQWNWQyxFQUFFLEVBQUU7SUFkTSxDQTFCc0I7SUEwQ3BDQyxzQkFBc0IsRUFBRSxzQkExQ1k7SUEyQ3BDQyxPQUFPLEVBQUUsaUJBQVVDLE1BQVYsRUFBa0I7TUFDdkIsSUFBSUMsQ0FBQyxHQUFHRCxNQUFNLEdBQUcsRUFBakI7TUFBQSxJQUNJRSxNQUFNLEdBQ0YsQ0FBQyxFQUFHRixNQUFNLEdBQUcsR0FBVixHQUFpQixFQUFuQixDQUFELEtBQTRCLENBQTVCLEdBQ00sSUFETixHQUVNQyxDQUFDLEtBQUssQ0FBTixHQUNBLElBREEsR0FFQUEsQ0FBQyxLQUFLLENBQU4sR0FDQSxJQURBLEdBRUFBLENBQUMsS0FBSyxDQUFOLEdBQ0EsSUFEQSxHQUVBLElBVmQ7TUFXQSxPQUFPRCxNQUFNLEdBQUdFLE1BQWhCO0lBQ0g7RUF4RG1DLENBQTdCLENBQVg7RUEyREEsT0FBT3pDLElBQVA7QUFFSCxDQXRFQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzPzgyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEVuZ2xpc2ggKENhbmFkYSkgW2VuLWNhXVxuLy8hIGF1dGhvciA6IEpvbmF0aGFuIEFib3VyYmloIDogaHR0cHM6Ly9naXRodWIuY29tL2pvbmJjYVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIGVuQ2EgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdlbi1jYScsIHtcbiAgICAgICAgbW9udGhzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnaDptbSBBJyxcbiAgICAgICAgICAgIExUUzogJ2g6bW06c3MgQScsXG4gICAgICAgICAgICBMOiAnWVlZWS1NTS1ERCcsXG4gICAgICAgICAgICBMTDogJ01NTU0gRCwgWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdbVG9kYXkgYXRdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgICAgICAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICAgICAgICAgIHM6ICdhIGZldyBzZWNvbmRzJyxcbiAgICAgICAgICAgIHNzOiAnJWQgc2Vjb25kcycsXG4gICAgICAgICAgICBtOiAnYSBtaW51dGUnLFxuICAgICAgICAgICAgbW06ICclZCBtaW51dGVzJyxcbiAgICAgICAgICAgIGg6ICdhbiBob3VyJyxcbiAgICAgICAgICAgIGhoOiAnJWQgaG91cnMnLFxuICAgICAgICAgICAgZDogJ2EgZGF5JyxcbiAgICAgICAgICAgIGRkOiAnJWQgZGF5cycsXG4gICAgICAgICAgICBNOiAnYSBtb250aCcsXG4gICAgICAgICAgICBNTTogJyVkIG1vbnRocycsXG4gICAgICAgICAgICB5OiAnYSB5ZWFyJyxcbiAgICAgICAgICAgIHl5OiAnJWQgeWVhcnMnLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3R8bmR8cmR8dGgpLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgICAgICAgICB+figobnVtYmVyICUgMTAwKSAvIDEwKSA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAndGgnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3N0J1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICduZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAncmQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICd0aCc7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVuQ2E7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50IiwiZW5DYSIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJ3ZWVrZGF5cyIsIndlZWtkYXlzU2hvcnQiLCJ3ZWVrZGF5c01pbiIsImxvbmdEYXRlRm9ybWF0IiwiTFQiLCJMVFMiLCJMIiwiTEwiLCJMTEwiLCJMTExMIiwiY2FsZW5kYXIiLCJzYW1lRGF5IiwibmV4dERheSIsIm5leHRXZWVrIiwibGFzdERheSIsImxhc3RXZWVrIiwic2FtZUVsc2UiLCJyZWxhdGl2ZVRpbWUiLCJmdXR1cmUiLCJwYXN0IiwicyIsInNzIiwibSIsIm1tIiwiaCIsImhoIiwiZCIsImRkIiwiTSIsIk1NIiwieSIsInl5IiwiZGF5T2ZNb250aE9yZGluYWxQYXJzZSIsIm9yZGluYWwiLCJudW1iZXIiLCJiIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/en-ca.js\n");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/en-ca.js");
/******/ 	
/******/ })()
;