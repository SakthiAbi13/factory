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

/***/ "./resources/assets/vendor/libs/moment/locale/gl.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/gl.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Galician [gl]\n//! author : Juan G. Hurtado : https://github.com/juanghurtado\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var gl = moment.defineLocale('gl', {\n    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),\n    monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),\n    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),\n    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D [de] MMMM [de] YYYY',\n      LLL: 'D [de] MMMM [de] YYYY H:mm',\n      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'\n    },\n    calendar: {\n      sameDay: function sameDay() {\n        return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';\n      },\n      nextDay: function nextDay() {\n        return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';\n      },\n      nextWeek: function nextWeek() {\n        return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';\n      },\n      lastDay: function lastDay() {\n        return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';\n      },\n      lastWeek: function lastWeek() {\n        return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: function future(str) {\n        if (str.indexOf('un') === 0) {\n          return 'n' + str;\n        }\n\n        return 'en ' + str;\n      },\n      past: 'hai %s',\n      s: 'uns segundos',\n      ss: '%d segundos',\n      m: 'un minuto',\n      mm: '%d minutos',\n      h: 'unha hora',\n      hh: '%d horas',\n      d: 'un día',\n      dd: '%d días',\n      M: 'un mes',\n      MM: '%d meses',\n      y: 'un ano',\n      yy: '%d anos'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}º/,\n    ordinal: '%dº',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return gl;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvZ2wuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsRUFBRSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEI7SUFDL0JDLE1BQU0sRUFBRSx5RkFBeUZDLEtBQXpGLENBQ0osR0FESSxDQUR1QjtJQUkvQkMsV0FBVyxFQUFFLDhEQUE4REQsS0FBOUQsQ0FDVCxHQURTLENBSmtCO0lBTy9CRSxnQkFBZ0IsRUFBRSxJQVBhO0lBUS9CQyxRQUFRLEVBQUUsbURBQW1ESCxLQUFuRCxDQUF5RCxHQUF6RCxDQVJxQjtJQVMvQkksYUFBYSxFQUFFLHFDQUFxQ0osS0FBckMsQ0FBMkMsR0FBM0MsQ0FUZ0I7SUFVL0JLLFdBQVcsRUFBRSx1QkFBdUJMLEtBQXZCLENBQTZCLEdBQTdCLENBVmtCO0lBVy9CTSxrQkFBa0IsRUFBRSxJQVhXO0lBWS9CQyxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLE1BRFE7TUFFWkMsR0FBRyxFQUFFLFNBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLHVCQUpRO01BS1pDLEdBQUcsRUFBRSw0QkFMTztNQU1aQyxJQUFJLEVBQUU7SUFOTSxDQVplO0lBb0IvQkMsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxtQkFBWTtRQUNqQixPQUFPLFlBQVksS0FBS0MsS0FBTCxPQUFpQixDQUFqQixHQUFxQixJQUFyQixHQUE0QixHQUF4QyxJQUErQyxNQUF0RDtNQUNILENBSEs7TUFJTkMsT0FBTyxFQUFFLG1CQUFZO1FBQ2pCLE9BQU8sWUFBWSxLQUFLRCxLQUFMLE9BQWlCLENBQWpCLEdBQXFCLElBQXJCLEdBQTRCLEdBQXhDLElBQStDLE1BQXREO01BQ0gsQ0FOSztNQU9ORSxRQUFRLEVBQUUsb0JBQVk7UUFDbEIsT0FBTyxZQUFZLEtBQUtGLEtBQUwsT0FBaUIsQ0FBakIsR0FBcUIsSUFBckIsR0FBNEIsR0FBeEMsSUFBK0MsTUFBdEQ7TUFDSCxDQVRLO01BVU5HLE9BQU8sRUFBRSxtQkFBWTtRQUNqQixPQUFPLFlBQVksS0FBS0gsS0FBTCxPQUFpQixDQUFqQixHQUFxQixHQUFyQixHQUEyQixHQUF2QyxJQUE4QyxNQUFyRDtNQUNILENBWks7TUFhTkksUUFBUSxFQUFFLG9CQUFZO1FBQ2xCLE9BQ0ksdUJBQXVCLEtBQUtKLEtBQUwsT0FBaUIsQ0FBakIsR0FBcUIsSUFBckIsR0FBNEIsR0FBbkQsSUFBMEQsTUFEOUQ7TUFHSCxDQWpCSztNQWtCTkssUUFBUSxFQUFFO0lBbEJKLENBcEJxQjtJQXdDL0JDLFlBQVksRUFBRTtNQUNWQyxNQUFNLEVBQUUsZ0JBQVVDLEdBQVYsRUFBZTtRQUNuQixJQUFJQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxJQUFaLE1BQXNCLENBQTFCLEVBQTZCO1VBQ3pCLE9BQU8sTUFBTUQsR0FBYjtRQUNIOztRQUNELE9BQU8sUUFBUUEsR0FBZjtNQUNILENBTlM7TUFPVkUsSUFBSSxFQUFFLFFBUEk7TUFRVkMsQ0FBQyxFQUFFLGNBUk87TUFTVkMsRUFBRSxFQUFFLGFBVE07TUFVVkMsQ0FBQyxFQUFFLFdBVk87TUFXVkMsRUFBRSxFQUFFLFlBWE07TUFZVkMsQ0FBQyxFQUFFLFdBWk87TUFhVkMsRUFBRSxFQUFFLFVBYk07TUFjVkMsQ0FBQyxFQUFFLFFBZE87TUFlVkMsRUFBRSxFQUFFLFNBZk07TUFnQlZDLENBQUMsRUFBRSxRQWhCTztNQWlCVkMsRUFBRSxFQUFFLFVBakJNO01Ba0JWQyxDQUFDLEVBQUUsUUFsQk87TUFtQlZDLEVBQUUsRUFBRTtJQW5CTSxDQXhDaUI7SUE2RC9CQyxzQkFBc0IsRUFBRSxVQTdETztJQThEL0JDLE9BQU8sRUFBRSxLQTlEc0I7SUErRC9CQyxJQUFJLEVBQUU7TUFDRkMsR0FBRyxFQUFFLENBREg7TUFDTTtNQUNSQyxHQUFHLEVBQUUsQ0FGSCxDQUVNOztJQUZOO0VBL0R5QixDQUExQixDQUFUO0VBcUVBLE9BQU85QyxFQUFQO0FBRUgsQ0FoRkMsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvbW9tZW50L2xvY2FsZS9nbC5qcz9mNjYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBHYWxpY2lhbiBbZ2xdXG4vLyEgYXV0aG9yIDogSnVhbiBHLiBIdXJ0YWRvIDogaHR0cHM6Ly9naXRodWIuY29tL2p1YW5naHVydGFkb1xuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgdmFyIGdsID0gbW9tZW50LmRlZmluZUxvY2FsZSgnZ2wnLCB7XG4gICAgICAgIG1vbnRoczogJ3hhbmVpcm9fZmVicmVpcm9fbWFyem9fYWJyaWxfbWFpb194dcOxb194dWxsb19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZWNlbWJybycuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICd4YW4uX2ZlYi5fbWFyLl9hYnIuX21haS5feHXDsS5feHVsLl9hZ28uX3NldC5fb3V0Ll9ub3YuX2RlYy4nLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIHdlZWtkYXlzOiAnZG9taW5nb19sdW5zX21hcnRlc19tw6lyY29yZXNfeG92ZXNfdmVucmVzX3PDoWJhZG8nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tw6lyLl94b3YuX3Zlbi5fc8OhYi4nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbcOpX3hvX3ZlX3PDoScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0g6bW06c3MnLFxuICAgICAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICAgICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1tob3hlICcgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ8OhcycgOiAnw6EnKSArICddIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0RGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdbbWHDscOhICcgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ8OhcycgOiAnw6EnKSArICddIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZGRkZCBbJyArICh0aGlzLmhvdXJzKCkgIT09IDEgPyAnw6FzJyA6ICdhJykgKyAnXSBMVCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW29udGUgJyArICh0aGlzLmhvdXJzKCkgIT09IDEgPyAnw6EnIDogJ2EnKSArICddIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXN0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICdbb10gZGRkZCBbcGFzYWRvICcgKyAodGhpcy5ob3VycygpICE9PSAxID8gJ8OhcycgOiAnYScpICsgJ10gTFQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZigndW4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ24nICsgc3RyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VuICcgKyBzdHI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzdDogJ2hhaSAlcycsXG4gICAgICAgICAgICBzOiAndW5zIHNlZ3VuZG9zJyxcbiAgICAgICAgICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgICAgICAgICAgbTogJ3VuIG1pbnV0bycsXG4gICAgICAgICAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgICAgICAgICAgaDogJ3VuaGEgaG9yYScsXG4gICAgICAgICAgICBoaDogJyVkIGhvcmFzJyxcbiAgICAgICAgICAgIGQ6ICd1biBkw61hJyxcbiAgICAgICAgICAgIGRkOiAnJWQgZMOtYXMnLFxuICAgICAgICAgICAgTTogJ3VuIG1lcycsXG4gICAgICAgICAgICBNTTogJyVkIG1lc2VzJyxcbiAgICAgICAgICAgIHk6ICd1biBhbm8nLFxuICAgICAgICAgICAgeXk6ICclZCBhbm9zJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICAgICAgICBvcmRpbmFsOiAnJWTCuicsXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDQsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBnbDtcblxufSkpKTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJtb21lbnQiLCJnbCIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJtb250aHNQYXJzZUV4YWN0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJ3ZWVrZGF5c1BhcnNlRXhhY3QiLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImNhbGVuZGFyIiwic2FtZURheSIsImhvdXJzIiwibmV4dERheSIsIm5leHRXZWVrIiwibGFzdERheSIsImxhc3RXZWVrIiwic2FtZUVsc2UiLCJyZWxhdGl2ZVRpbWUiLCJmdXR1cmUiLCJzdHIiLCJpbmRleE9mIiwicGFzdCIsInMiLCJzcyIsIm0iLCJtbSIsImgiLCJoaCIsImQiLCJkZCIsIk0iLCJNTSIsInkiLCJ5eSIsImRheU9mTW9udGhPcmRpbmFsUGFyc2UiLCJvcmRpbmFsIiwid2VlayIsImRvdyIsImRveSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/gl.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/gl.js");
/******/ 	
/******/ })()
;