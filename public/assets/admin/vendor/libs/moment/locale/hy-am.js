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

/***/ "./resources/assets/vendor/libs/moment/locale/hy-am.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/hy-am.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Armenian [hy-am]\n//! author : Armendarabyan : https://github.com/armendarabyan\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var hyAm = moment.defineLocale('hy-am', {\n    months: {\n      format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),\n      standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')\n    },\n    monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),\n    weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),\n    weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),\n    weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY թ.',\n      LLL: 'D MMMM YYYY թ., HH:mm',\n      LLLL: 'dddd, D MMMM YYYY թ., HH:mm'\n    },\n    calendar: {\n      sameDay: '[այսօր] LT',\n      nextDay: '[վաղը] LT',\n      lastDay: '[երեկ] LT',\n      nextWeek: function nextWeek() {\n        return 'dddd [օրը ժամը] LT';\n      },\n      lastWeek: function lastWeek() {\n        return '[անցած] dddd [օրը ժամը] LT';\n      },\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s հետո',\n      past: '%s առաջ',\n      s: 'մի քանի վայրկյան',\n      ss: '%d վայրկյան',\n      m: 'րոպե',\n      mm: '%d րոպե',\n      h: 'ժամ',\n      hh: '%d ժամ',\n      d: 'օր',\n      dd: '%d օր',\n      M: 'ամիս',\n      MM: '%d ամիս',\n      y: 'տարի',\n      yy: '%d տարի'\n    },\n    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,\n    isPM: function isPM(input) {\n      return /^(ցերեկվա|երեկոյան)$/.test(input);\n    },\n    meridiem: function meridiem(hour) {\n      if (hour < 4) {\n        return 'գիշերվա';\n      } else if (hour < 12) {\n        return 'առավոտվա';\n      } else if (hour < 17) {\n        return 'ցերեկվա';\n      } else {\n        return 'երեկոյան';\n      }\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}|\\d{1,2}-(ին|րդ)/,\n    ordinal: function ordinal(number, period) {\n      switch (period) {\n        case 'DDD':\n        case 'w':\n        case 'W':\n        case 'DDDo':\n          if (number === 1) {\n            return number + '-ին';\n          }\n\n          return number + '-րդ';\n\n        default:\n          return number;\n      }\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n\n    }\n  });\n  return hyAm;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvaHktYW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkI7SUFDcENDLE1BQU0sRUFBRTtNQUNKQyxNQUFNLEVBQUUsNEdBQTRHQyxLQUE1RyxDQUNKLEdBREksQ0FESjtNQUlKQyxVQUFVLEVBQUUsZ0dBQWdHRCxLQUFoRyxDQUNSLEdBRFE7SUFKUixDQUQ0QjtJQVNwQ0UsV0FBVyxFQUFFLGtEQUFrREYsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FUdUI7SUFVcENHLFFBQVEsRUFBRSxnRUFBZ0VILEtBQWhFLENBQ04sR0FETSxDQVYwQjtJQWFwQ0ksYUFBYSxFQUFFLCtCQUErQkosS0FBL0IsQ0FBcUMsR0FBckMsQ0FicUI7SUFjcENLLFdBQVcsRUFBRSwrQkFBK0JMLEtBQS9CLENBQXFDLEdBQXJDLENBZHVCO0lBZXBDTSxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLE9BRFE7TUFFWkMsR0FBRyxFQUFFLFVBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGdCQUpRO01BS1pDLEdBQUcsRUFBRSx1QkFMTztNQU1aQyxJQUFJLEVBQUU7SUFOTSxDQWZvQjtJQXVCcENDLFFBQVEsRUFBRTtNQUNOQyxPQUFPLEVBQUUsWUFESDtNQUVOQyxPQUFPLEVBQUUsV0FGSDtNQUdOQyxPQUFPLEVBQUUsV0FISDtNQUlOQyxRQUFRLEVBQUUsb0JBQVk7UUFDbEIsT0FBTyxvQkFBUDtNQUNILENBTks7TUFPTkMsUUFBUSxFQUFFLG9CQUFZO1FBQ2xCLE9BQU8sNEJBQVA7TUFDSCxDQVRLO01BVU5DLFFBQVEsRUFBRTtJQVZKLENBdkIwQjtJQW1DcENDLFlBQVksRUFBRTtNQUNWQyxNQUFNLEVBQUUsU0FERTtNQUVWQyxJQUFJLEVBQUUsU0FGSTtNQUdWQyxDQUFDLEVBQUUsa0JBSE87TUFJVkMsRUFBRSxFQUFFLGFBSk07TUFLVkMsQ0FBQyxFQUFFLE1BTE87TUFNVkMsRUFBRSxFQUFFLFNBTk07TUFPVkMsQ0FBQyxFQUFFLEtBUE87TUFRVkMsRUFBRSxFQUFFLFFBUk07TUFTVkMsQ0FBQyxFQUFFLElBVE87TUFVVkMsRUFBRSxFQUFFLE9BVk07TUFXVkMsQ0FBQyxFQUFFLE1BWE87TUFZVkMsRUFBRSxFQUFFLFNBWk07TUFhVkMsQ0FBQyxFQUFFLE1BYk87TUFjVkMsRUFBRSxFQUFFO0lBZE0sQ0FuQ3NCO0lBbURwQ0MsYUFBYSxFQUFFLG1DQW5EcUI7SUFvRHBDQyxJQUFJLEVBQUUsY0FBVUMsS0FBVixFQUFpQjtNQUNuQixPQUFPLHVCQUF1QkMsSUFBdkIsQ0FBNEJELEtBQTVCLENBQVA7SUFDSCxDQXREbUM7SUF1RHBDRSxRQUFRLEVBQUUsa0JBQVVDLElBQVYsRUFBZ0I7TUFDdEIsSUFBSUEsSUFBSSxHQUFHLENBQVgsRUFBYztRQUNWLE9BQU8sU0FBUDtNQUNILENBRkQsTUFFTyxJQUFJQSxJQUFJLEdBQUcsRUFBWCxFQUFlO1FBQ2xCLE9BQU8sVUFBUDtNQUNILENBRk0sTUFFQSxJQUFJQSxJQUFJLEdBQUcsRUFBWCxFQUFlO1FBQ2xCLE9BQU8sU0FBUDtNQUNILENBRk0sTUFFQTtRQUNILE9BQU8sVUFBUDtNQUNIO0lBQ0osQ0FqRW1DO0lBa0VwQ0Msc0JBQXNCLEVBQUUseUJBbEVZO0lBbUVwQ0MsT0FBTyxFQUFFLGlCQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtNQUMvQixRQUFRQSxNQUFSO1FBQ0ksS0FBSyxLQUFMO1FBQ0EsS0FBSyxHQUFMO1FBQ0EsS0FBSyxHQUFMO1FBQ0EsS0FBSyxNQUFMO1VBQ0ksSUFBSUQsTUFBTSxLQUFLLENBQWYsRUFBa0I7WUFDZCxPQUFPQSxNQUFNLEdBQUcsS0FBaEI7VUFDSDs7VUFDRCxPQUFPQSxNQUFNLEdBQUcsS0FBaEI7O1FBQ0o7VUFDSSxPQUFPQSxNQUFQO01BVlI7SUFZSCxDQWhGbUM7SUFpRnBDRSxJQUFJLEVBQUU7TUFDRkMsR0FBRyxFQUFFLENBREg7TUFDTTtNQUNSQyxHQUFHLEVBQUUsQ0FGSCxDQUVNOztJQUZOO0VBakY4QixDQUE3QixDQUFYO0VBdUZBLE9BQU9uRCxJQUFQO0FBRUgsQ0FsR0MsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvbW9tZW50L2xvY2FsZS9oeS1hbS5qcz9kZTBkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBcm1lbmlhbiBbaHktYW1dXG4vLyEgYXV0aG9yIDogQXJtZW5kYXJhYnlhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcm1lbmRhcmFieWFuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgaHlBbSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ2h5LWFtJywge1xuICAgICAgICBtb250aHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogJ9Ww1bjWgtW21b7VodaA1atf1oPVpdW/1oDVvtWh1oDVq1/VtNWh1oDVv9WrX9Wh1brWgNWr1azVq1/VtNWh1bXVq9W91atf1bDVuNaC1bbVq9W91atf1bDVuNaC1azVq9W91atf1oXVo9W41b3Vv9W41b3Vq1/VvdWl1brVv9Wl1bTVotWl1oDVq1/VsNW41a/Vv9Wl1bTVotWl1oDVq1/VttW41bXVpdW01aLVpdaA1atf1aTVpdWv1b/VpdW01aLVpdaA1asnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0YW5kYWxvbmU6ICfVsNW41oLVttW+1aHWgF/Wg9Wl1b/WgNW+1aHWgF/VtNWh1oDVv1/VodW61oDVq9WsX9W01aHVtdWr1b1f1bDVuNaC1bbVq9W9X9Ww1bjWgtWs1avVvV/WhdWj1bjVvdW/1bjVvV/VvdWl1brVv9Wl1bTVotWl1oBf1bDVuNWv1b/VpdW01aLVpdaAX9W21bjVtdWl1bTVotWl1oBf1aTVpdWv1b/VpdW01aLVpdaAJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIG1vbnRoc1Nob3J0OiAn1bDVttW+X9aD1b/WgF/VtNaA1b9f1aHVutaAX9W01bXVvV/VsNW21b1f1bDVrNW9X9aF1aPVvV/VvdW61b9f1bDVr9W/X9W21bTVol/VpNWv1b8nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzOiAn1a/Vq9aA1aHVr9WrX9Wl1oDVr9W41oLVt9Wh1aLVqdWrX9Wl1oDVpdaE1bfVodWi1anVq1/VudW41oDVpdaE1bfVodWi1anVq1/VsNWr1bbVo9W31aHVotWp1atf1bjWgtaA1aLVodWpX9W31aHVotWh1aknLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfVr9aA1a9f1aXWgNWvX9Wl1oDWhF/VudaA1oRf1bDVttWjX9W41oLWgNWiX9W31aLVqScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICfVr9aA1a9f1aXWgNWvX9Wl1oDWhF/VudaA1oRf1bDVttWjX9W41oLWgNWiX9W31aLVqScuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICAgICAgTDogJ0RELk1NLllZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWSDVqS4nLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkg1akuLCBISDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkg1akuLCBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW9Wh1bXVvdaF1oBdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdb1b7VodWy1ahdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb1aXWgNWl1a9dIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkZGRkIFvWhdaA1agg1arVodW01ahdIExUJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXN0V2VlazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnW9Wh1bbWgdWh1a5dIGRkZGQgW9aF1oDVqCDVqtWh1bTVqF0gTFQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAnJXMg1bDVpdW/1bgnLFxuICAgICAgICAgICAgcGFzdDogJyVzINWh1bzVodW7JyxcbiAgICAgICAgICAgIHM6ICfVtNWrINaE1aHVttWrINW+1aHVtdaA1a/VtdWh1bYnLFxuICAgICAgICAgICAgc3M6ICclZCDVvtWh1bXWgNWv1bXVodW2JyxcbiAgICAgICAgICAgIG06ICfWgNW41brVpScsXG4gICAgICAgICAgICBtbTogJyVkINaA1bjVutWlJyxcbiAgICAgICAgICAgIGg6ICfVqtWh1bQnLFxuICAgICAgICAgICAgaGg6ICclZCDVqtWh1bQnLFxuICAgICAgICAgICAgZDogJ9aF1oAnLFxuICAgICAgICAgICAgZGQ6ICclZCDWhdaAJyxcbiAgICAgICAgICAgIE06ICfVodW01avVvScsXG4gICAgICAgICAgICBNTTogJyVkINWh1bTVq9W9JyxcbiAgICAgICAgICAgIHk6ICfVv9Wh1oDVqycsXG4gICAgICAgICAgICB5eTogJyVkINW/1aHWgNWrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW1QYXJzZTogL9Wj1avVt9Wl1oDVvtWhfNWh1bzVodW+1bjVv9W+1aF81oHVpdaA1aXVr9W+1aF81aXWgNWl1a/VuNW11aHVti8sXG4gICAgICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIC9eKNaB1aXWgNWl1a/VvtWhfNWl1oDVpdWv1bjVtdWh1bYpJC8udGVzdChpbnB1dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91cikge1xuICAgICAgICAgICAgaWYgKGhvdXIgPCA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfVo9Wr1bfVpdaA1b7VoSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAn1aHVvNWh1b7VuNW/1b7VoSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgICAgICAgICAgIHJldHVybiAn1oHVpdaA1aXVr9W+1aEnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9Wl1oDVpdWv1bjVtdWh1bYnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn18XFxkezEsMn0tKNWr1bZ81oDVpCkvLFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgICAgICBjYXNlICdERERvJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct1avVtic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct1oDVpCc7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNywgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gN3RoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5QW07XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50IiwiaHlBbSIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsImZvcm1hdCIsInNwbGl0Iiwic3RhbmRhbG9uZSIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImNhbGVuZGFyIiwic2FtZURheSIsIm5leHREYXkiLCJsYXN0RGF5IiwibmV4dFdlZWsiLCJsYXN0V2VlayIsInNhbWVFbHNlIiwicmVsYXRpdmVUaW1lIiwiZnV0dXJlIiwicGFzdCIsInMiLCJzcyIsIm0iLCJtbSIsImgiLCJoaCIsImQiLCJkZCIsIk0iLCJNTSIsInkiLCJ5eSIsIm1lcmlkaWVtUGFyc2UiLCJpc1BNIiwiaW5wdXQiLCJ0ZXN0IiwibWVyaWRpZW0iLCJob3VyIiwiZGF5T2ZNb250aE9yZGluYWxQYXJzZSIsIm9yZGluYWwiLCJudW1iZXIiLCJwZXJpb2QiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/hy-am.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/hy-am.js");
/******/ 	
/******/ })()
;