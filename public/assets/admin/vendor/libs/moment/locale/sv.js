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

/***/ "./resources/assets/vendor/libs/moment/locale/sv.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/sv.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Swedish [sv]\n//! author : Jens Alm : https://github.com/ulmus\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var sv = moment.defineLocale('sv', {\n    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),\n    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),\n    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),\n    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),\n    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'YYYY-MM-DD',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY [kl.] HH:mm',\n      LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',\n      lll: 'D MMM YYYY HH:mm',\n      llll: 'ddd D MMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[Idag] LT',\n      nextDay: '[Imorgon] LT',\n      lastDay: '[Igår] LT',\n      nextWeek: '[På] dddd LT',\n      lastWeek: '[I] dddd[s] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'om %s',\n      past: 'för %s sedan',\n      s: 'några sekunder',\n      ss: '%d sekunder',\n      m: 'en minut',\n      mm: '%d minuter',\n      h: 'en timme',\n      hh: '%d timmar',\n      d: 'en dag',\n      dd: '%d dagar',\n      M: 'en månad',\n      MM: '%d månader',\n      y: 'ett år',\n      yy: '%d år'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(\\:e|\\:a)/,\n    ordinal: function ordinal(number) {\n      var b = number % 10,\n          output = ~~(number % 100 / 10) === 1 ? ':e' : b === 1 ? ':a' : b === 2 ? ':a' : b === 3 ? ':e' : ':e';\n      return number + output;\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return sv;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvc3YuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsRUFBRSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEI7SUFDL0JDLE1BQU0sRUFBRSx3RkFBd0ZDLEtBQXhGLENBQ0osR0FESSxDQUR1QjtJQUkvQkMsV0FBVyxFQUFFLGtEQUFrREQsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FKa0I7SUFLL0JFLFFBQVEsRUFBRSxvREFBb0RGLEtBQXBELENBQTBELEdBQTFELENBTHFCO0lBTS9CRyxhQUFhLEVBQUUsOEJBQThCSCxLQUE5QixDQUFvQyxHQUFwQyxDQU5nQjtJQU8vQkksV0FBVyxFQUFFLHVCQUF1QkosS0FBdkIsQ0FBNkIsR0FBN0IsQ0FQa0I7SUFRL0JLLGNBQWMsRUFBRTtNQUNaQyxFQUFFLEVBQUUsT0FEUTtNQUVaQyxHQUFHLEVBQUUsVUFGTztNQUdaQyxDQUFDLEVBQUUsWUFIUztNQUlaQyxFQUFFLEVBQUUsYUFKUTtNQUtaQyxHQUFHLEVBQUUseUJBTE87TUFNWkMsSUFBSSxFQUFFLDhCQU5NO01BT1pDLEdBQUcsRUFBRSxrQkFQTztNQVFaQyxJQUFJLEVBQUU7SUFSTSxDQVJlO0lBa0IvQkMsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxXQURIO01BRU5DLE9BQU8sRUFBRSxjQUZIO01BR05DLE9BQU8sRUFBRSxXQUhIO01BSU5DLFFBQVEsRUFBRSxjQUpKO01BS05DLFFBQVEsRUFBRSxnQkFMSjtNQU1OQyxRQUFRLEVBQUU7SUFOSixDQWxCcUI7SUEwQi9CQyxZQUFZLEVBQUU7TUFDVkMsTUFBTSxFQUFFLE9BREU7TUFFVkMsSUFBSSxFQUFFLGNBRkk7TUFHVkMsQ0FBQyxFQUFFLGdCQUhPO01BSVZDLEVBQUUsRUFBRSxhQUpNO01BS1ZDLENBQUMsRUFBRSxVQUxPO01BTVZDLEVBQUUsRUFBRSxZQU5NO01BT1ZDLENBQUMsRUFBRSxVQVBPO01BUVZDLEVBQUUsRUFBRSxXQVJNO01BU1ZDLENBQUMsRUFBRSxRQVRPO01BVVZDLEVBQUUsRUFBRSxVQVZNO01BV1ZDLENBQUMsRUFBRSxVQVhPO01BWVZDLEVBQUUsRUFBRSxZQVpNO01BYVZDLENBQUMsRUFBRSxRQWJPO01BY1ZDLEVBQUUsRUFBRTtJQWRNLENBMUJpQjtJQTBDL0JDLHNCQUFzQixFQUFFLGtCQTFDTztJQTJDL0JDLE9BQU8sRUFBRSxpQkFBVUMsTUFBVixFQUFrQjtNQUN2QixJQUFJQyxDQUFDLEdBQUdELE1BQU0sR0FBRyxFQUFqQjtNQUFBLElBQ0lFLE1BQU0sR0FDRixDQUFDLEVBQUdGLE1BQU0sR0FBRyxHQUFWLEdBQWlCLEVBQW5CLENBQUQsS0FBNEIsQ0FBNUIsR0FDTSxJQUROLEdBRU1DLENBQUMsS0FBSyxDQUFOLEdBQ0EsSUFEQSxHQUVBQSxDQUFDLEtBQUssQ0FBTixHQUNBLElBREEsR0FFQUEsQ0FBQyxLQUFLLENBQU4sR0FDQSxJQURBLEdBRUEsSUFWZDtNQVdBLE9BQU9ELE1BQU0sR0FBR0UsTUFBaEI7SUFDSCxDQXhEOEI7SUF5RC9CQyxJQUFJLEVBQUU7TUFDRkMsR0FBRyxFQUFFLENBREg7TUFDTTtNQUNSQyxHQUFHLEVBQUUsQ0FGSCxDQUVNOztJQUZOO0VBekR5QixDQUExQixDQUFUO0VBK0RBLE9BQU85QyxFQUFQO0FBRUgsQ0ExRUMsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvbW9tZW50L2xvY2FsZS9zdi5qcz9kYmIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTd2VkaXNoIFtzdl1cbi8vISBhdXRob3IgOiBKZW5zIEFsbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS91bG11c1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIHN2ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnc3YnLCB7XG4gICAgICAgIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnamFuX2ZlYl9tYXJfYXByX21hal9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzOiAnc8O2bmRhZ19tw6VuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMO2cmRhZycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ3PDtm5fbcOlbl90aXNfb25zX3Rvcl9mcmVfbMO2cicuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICdzw7ZfbcOlX3RpX29uX3RvX2ZyX2zDticuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICAgICAgTDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgICAgICAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIGxsbGw6ICdkZGQgRCBNTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW0lkYWddIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdbSW1vcmdvbl0gTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1tJZ8Olcl0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdbUMOlXSBkZGRkIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiAnW0ldIGRkZGRbc10gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICdvbSAlcycsXG4gICAgICAgICAgICBwYXN0OiAnZsO2ciAlcyBzZWRhbicsXG4gICAgICAgICAgICBzOiAnbsOlZ3JhIHNla3VuZGVyJyxcbiAgICAgICAgICAgIHNzOiAnJWQgc2VrdW5kZXInLFxuICAgICAgICAgICAgbTogJ2VuIG1pbnV0JyxcbiAgICAgICAgICAgIG1tOiAnJWQgbWludXRlcicsXG4gICAgICAgICAgICBoOiAnZW4gdGltbWUnLFxuICAgICAgICAgICAgaGg6ICclZCB0aW1tYXInLFxuICAgICAgICAgICAgZDogJ2VuIGRhZycsXG4gICAgICAgICAgICBkZDogJyVkIGRhZ2FyJyxcbiAgICAgICAgICAgIE06ICdlbiBtw6VuYWQnLFxuICAgICAgICAgICAgTU06ICclZCBtw6VuYWRlcicsXG4gICAgICAgICAgICB5OiAnZXR0IMOlcicsXG4gICAgICAgICAgICB5eTogJyVkIMOlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShcXDplfFxcOmEpLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgICAgICAgICB+figobnVtYmVyICUgMTAwKSAvIDEwKSA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnOmUnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJzphJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICc6YSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnOmUnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICc6ZSc7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3Y7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50Iiwic3YiLCJkZWZpbmVMb2NhbGUiLCJtb250aHMiLCJzcGxpdCIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImxsbCIsImxsbGwiLCJjYWxlbmRhciIsInNhbWVEYXkiLCJuZXh0RGF5IiwibGFzdERheSIsIm5leHRXZWVrIiwibGFzdFdlZWsiLCJzYW1lRWxzZSIsInJlbGF0aXZlVGltZSIsImZ1dHVyZSIsInBhc3QiLCJzIiwic3MiLCJtIiwibW0iLCJoIiwiaGgiLCJkIiwiZGQiLCJNIiwiTU0iLCJ5IiwieXkiLCJkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIiwib3JkaW5hbCIsIm51bWJlciIsImIiLCJvdXRwdXQiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/sv.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/sv.js");
/******/ 	
/******/ })()
;