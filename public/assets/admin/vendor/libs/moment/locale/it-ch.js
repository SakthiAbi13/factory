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

/***/ "./resources/assets/vendor/libs/moment/locale/it-ch.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/it-ch.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Italian (Switzerland) [it-ch]\n//! author : xfh : https://github.com/xfh\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var itCh = moment.defineLocale('it-ch', {\n    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),\n    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),\n    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),\n    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),\n    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[Oggi alle] LT',\n      nextDay: '[Domani alle] LT',\n      nextWeek: 'dddd [alle] LT',\n      lastDay: '[Ieri alle] LT',\n      lastWeek: function lastWeek() {\n        switch (this.day()) {\n          case 0:\n            return '[la scorsa] dddd [alle] LT';\n\n          default:\n            return '[lo scorso] dddd [alle] LT';\n        }\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: function future(s) {\n        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;\n      },\n      past: '%s fa',\n      s: 'alcuni secondi',\n      ss: '%d secondi',\n      m: 'un minuto',\n      mm: '%d minuti',\n      h: \"un'ora\",\n      hh: '%d ore',\n      d: 'un giorno',\n      dd: '%d giorni',\n      M: 'un mese',\n      MM: '%d mesi',\n      y: 'un anno',\n      yy: '%d anni'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}º/,\n    ordinal: '%dº',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return itCh;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvaXQtY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkI7SUFDcENDLE1BQU0sRUFBRSxnR0FBZ0dDLEtBQWhHLENBQ0osR0FESSxDQUQ0QjtJQUlwQ0MsV0FBVyxFQUFFLGtEQUFrREQsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FKdUI7SUFLcENFLFFBQVEsRUFBRSwyREFBMkRGLEtBQTNELENBQ04sR0FETSxDQUwwQjtJQVFwQ0csYUFBYSxFQUFFLDhCQUE4QkgsS0FBOUIsQ0FBb0MsR0FBcEMsQ0FScUI7SUFTcENJLFdBQVcsRUFBRSx1QkFBdUJKLEtBQXZCLENBQTZCLEdBQTdCLENBVHVCO0lBVXBDSyxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLE9BRFE7TUFFWkMsR0FBRyxFQUFFLFVBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGFBSlE7TUFLWkMsR0FBRyxFQUFFLG1CQUxPO01BTVpDLElBQUksRUFBRTtJQU5NLENBVm9CO0lBa0JwQ0MsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxnQkFESDtNQUVOQyxPQUFPLEVBQUUsa0JBRkg7TUFHTkMsUUFBUSxFQUFFLGdCQUhKO01BSU5DLE9BQU8sRUFBRSxnQkFKSDtNQUtOQyxRQUFRLEVBQUUsb0JBQVk7UUFDbEIsUUFBUSxLQUFLQyxHQUFMLEVBQVI7VUFDSSxLQUFLLENBQUw7WUFDSSxPQUFPLDRCQUFQOztVQUNKO1lBQ0ksT0FBTyw0QkFBUDtRQUpSO01BTUgsQ0FaSztNQWFOQyxRQUFRLEVBQUU7SUFiSixDQWxCMEI7SUFpQ3BDQyxZQUFZLEVBQUU7TUFDVkMsTUFBTSxFQUFFLGdCQUFVQyxDQUFWLEVBQWE7UUFDakIsT0FBTyxDQUFDLFlBQVlDLElBQVosQ0FBaUJELENBQWpCLElBQXNCLEtBQXRCLEdBQThCLElBQS9CLElBQXVDLEdBQXZDLEdBQTZDQSxDQUFwRDtNQUNILENBSFM7TUFJVkUsSUFBSSxFQUFFLE9BSkk7TUFLVkYsQ0FBQyxFQUFFLGdCQUxPO01BTVZHLEVBQUUsRUFBRSxZQU5NO01BT1ZDLENBQUMsRUFBRSxXQVBPO01BUVZDLEVBQUUsRUFBRSxXQVJNO01BU1ZDLENBQUMsRUFBRSxRQVRPO01BVVZDLEVBQUUsRUFBRSxRQVZNO01BV1ZDLENBQUMsRUFBRSxXQVhPO01BWVZDLEVBQUUsRUFBRSxXQVpNO01BYVZDLENBQUMsRUFBRSxTQWJPO01BY1ZDLEVBQUUsRUFBRSxTQWRNO01BZVZDLENBQUMsRUFBRSxTQWZPO01BZ0JWQyxFQUFFLEVBQUU7SUFoQk0sQ0FqQ3NCO0lBbURwQ0Msc0JBQXNCLEVBQUUsVUFuRFk7SUFvRHBDQyxPQUFPLEVBQUUsS0FwRDJCO0lBcURwQ0MsSUFBSSxFQUFFO01BQ0ZDLEdBQUcsRUFBRSxDQURIO01BQ007TUFDUkMsR0FBRyxFQUFFLENBRkgsQ0FFTTs7SUFGTjtFQXJEOEIsQ0FBN0IsQ0FBWDtFQTJEQSxPQUFPM0MsSUFBUDtBQUVILENBdEVDLENBQUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvaXQtY2guanM/NTQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSXRhbGlhbiAoU3dpdHplcmxhbmQpIFtpdC1jaF1cbi8vISBhdXRob3IgOiB4ZmggOiBodHRwczovL2dpdGh1Yi5jb20veGZoXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgaXRDaCA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2l0LWNoJywge1xuICAgICAgICBtb250aHM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzOiAnZG9tZW5pY2FfbHVuZWTDrF9tYXJ0ZWTDrF9tZXJjb2xlZMOsX2dpb3ZlZMOsX3ZlbmVyZMOsX3NhYmF0bycuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ2RvbV9sdW5fbWFyX21lcl9naW9fdmVuX3NhYicuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tZV9naV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICAgICAgTDogJ0RELk1NLllZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW09nZ2kgYWxsZV0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1tEb21hbmkgYWxsZV0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFthbGxlXSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW0llcmkgYWxsZV0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbbGEgc2NvcnNhXSBkZGRkIFthbGxlXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1tsbyBzY29yc29dIGRkZGQgW2FsbGVdIExUJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgvXlswLTldLiskLy50ZXN0KHMpID8gJ3RyYScgOiAnaW4nKSArICcgJyArIHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzdDogJyVzIGZhJyxcbiAgICAgICAgICAgIHM6ICdhbGN1bmkgc2Vjb25kaScsXG4gICAgICAgICAgICBzczogJyVkIHNlY29uZGknLFxuICAgICAgICAgICAgbTogJ3VuIG1pbnV0bycsXG4gICAgICAgICAgICBtbTogJyVkIG1pbnV0aScsXG4gICAgICAgICAgICBoOiBcInVuJ29yYVwiLFxuICAgICAgICAgICAgaGg6ICclZCBvcmUnLFxuICAgICAgICAgICAgZDogJ3VuIGdpb3JubycsXG4gICAgICAgICAgICBkZDogJyVkIGdpb3JuaScsXG4gICAgICAgICAgICBNOiAndW4gbWVzZScsXG4gICAgICAgICAgICBNTTogJyVkIG1lc2knLFxuICAgICAgICAgICAgeTogJ3VuIGFubm8nLFxuICAgICAgICAgICAgeXk6ICclZCBhbm5pJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxuICAgICAgICBvcmRpbmFsOiAnJWTCuicsXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDQsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBpdENoO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIm1vbWVudCIsIml0Q2giLCJkZWZpbmVMb2NhbGUiLCJtb250aHMiLCJzcGxpdCIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImNhbGVuZGFyIiwic2FtZURheSIsIm5leHREYXkiLCJuZXh0V2VlayIsImxhc3REYXkiLCJsYXN0V2VlayIsImRheSIsInNhbWVFbHNlIiwicmVsYXRpdmVUaW1lIiwiZnV0dXJlIiwicyIsInRlc3QiLCJwYXN0Iiwic3MiLCJtIiwibW0iLCJoIiwiaGgiLCJkIiwiZGQiLCJNIiwiTU0iLCJ5IiwieXkiLCJkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIiwib3JkaW5hbCIsIndlZWsiLCJkb3ciLCJkb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/it-ch.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/it-ch.js");
/******/ 	
/******/ })()
;