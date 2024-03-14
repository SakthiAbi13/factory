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

/***/ "./resources/assets/vendor/libs/moment/locale/lb.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/lb.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Luxembourgish [lb]\n//! author : mweimerskirch : https://github.com/mweimerskirch\n//! author : David Raison : https://github.com/kwisatz\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  function processRelativeTime(number, withoutSuffix, key, isFuture) {\n    var format = {\n      m: ['eng Minutt', 'enger Minutt'],\n      h: ['eng Stonn', 'enger Stonn'],\n      d: ['een Dag', 'engem Dag'],\n      M: ['ee Mount', 'engem Mount'],\n      y: ['ee Joer', 'engem Joer']\n    };\n    return withoutSuffix ? format[key][0] : format[key][1];\n  }\n\n  function processFutureTime(string) {\n    var number = string.substr(0, string.indexOf(' '));\n\n    if (eifelerRegelAppliesToNumber(number)) {\n      return 'a ' + string;\n    }\n\n    return 'an ' + string;\n  }\n\n  function processPastTime(string) {\n    var number = string.substr(0, string.indexOf(' '));\n\n    if (eifelerRegelAppliesToNumber(number)) {\n      return 'viru ' + string;\n    }\n\n    return 'virun ' + string;\n  }\n  /**\n   * Returns true if the word before the given number loses the '-n' ending.\n   * e.g. 'an 10 Deeg' but 'a 5 Deeg'\n   *\n   * @param number {integer}\n   * @returns {boolean}\n   */\n\n\n  function eifelerRegelAppliesToNumber(number) {\n    number = parseInt(number, 10);\n\n    if (isNaN(number)) {\n      return false;\n    }\n\n    if (number < 0) {\n      // Negative Number --> always true\n      return true;\n    } else if (number < 10) {\n      // Only 1 digit\n      if (4 <= number && number <= 7) {\n        return true;\n      }\n\n      return false;\n    } else if (number < 100) {\n      // 2 digits\n      var lastDigit = number % 10,\n          firstDigit = number / 10;\n\n      if (lastDigit === 0) {\n        return eifelerRegelAppliesToNumber(firstDigit);\n      }\n\n      return eifelerRegelAppliesToNumber(lastDigit);\n    } else if (number < 10000) {\n      // 3 or 4 digits --> recursively check first digit\n      while (number >= 10) {\n        number = number / 10;\n      }\n\n      return eifelerRegelAppliesToNumber(number);\n    } else {\n      // Anything larger than 4 digits: recursively check first n-3 digits\n      number = number / 1000;\n      return eifelerRegelAppliesToNumber(number);\n    }\n  }\n\n  var lb = moment.defineLocale('lb', {\n    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),\n    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),\n    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),\n    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'H:mm [Auer]',\n      LTS: 'H:mm:ss [Auer]',\n      L: 'DD.MM.YYYY',\n      LL: 'D. MMMM YYYY',\n      LLL: 'D. MMMM YYYY H:mm [Auer]',\n      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'\n    },\n    calendar: {\n      sameDay: '[Haut um] LT',\n      sameElse: 'L',\n      nextDay: '[Muer um] LT',\n      nextWeek: 'dddd [um] LT',\n      lastDay: '[Gëschter um] LT',\n      lastWeek: function lastWeek() {\n        // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule\n        switch (this.day()) {\n          case 2:\n          case 4:\n            return '[Leschten] dddd [um] LT';\n\n          default:\n            return '[Leschte] dddd [um] LT';\n        }\n      }\n    },\n    relativeTime: {\n      future: processFutureTime,\n      past: processPastTime,\n      s: 'e puer Sekonnen',\n      ss: '%d Sekonnen',\n      m: processRelativeTime,\n      mm: '%d Minutten',\n      h: processRelativeTime,\n      hh: '%d Stonnen',\n      d: processRelativeTime,\n      dd: '%d Deeg',\n      M: processRelativeTime,\n      MM: '%d Méint',\n      y: processRelativeTime,\n      yy: '%d Joer'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n    ordinal: '%d.',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return lb;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvbGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFFLFdBQVVBLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTJCO0VBQzFCLHNCQUFPQyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLGFBQWtCLFdBQWpELElBQ08sZUFBbUIsVUFEMUIsR0FDdUNELE9BQU8sQ0FBQ0csbUJBQU8sQ0FBQyx3SUFBRCxDQUFSLENBRDlDLEdBRUEsUUFBNkNDLGlDQUFPLENBQUMsd0lBQUQsQ0FBRCxvQ0FBZ0JKLE9BQWhCO0FBQUE7QUFBQTtBQUFBLGtHQUFuRCxHQUNBQSxDQUhBO0FBSUYsQ0FMQyxFQUtBLElBTEEsRUFLTyxVQUFVTSxNQUFWLEVBQWtCO0VBQUUsYUFBRixDQUV2Qjs7RUFFQSxTQUFTQyxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUNDLGFBQXJDLEVBQW9EQyxHQUFwRCxFQUF5REMsUUFBekQsRUFBbUU7SUFDL0QsSUFBSUMsTUFBTSxHQUFHO01BQ1RDLENBQUMsRUFBRSxDQUFDLFlBQUQsRUFBZSxjQUFmLENBRE07TUFFVEMsQ0FBQyxFQUFFLENBQUMsV0FBRCxFQUFjLGFBQWQsQ0FGTTtNQUdUQyxDQUFDLEVBQUUsQ0FBQyxTQUFELEVBQVksV0FBWixDQUhNO01BSVRDLENBQUMsRUFBRSxDQUFDLFVBQUQsRUFBYSxhQUFiLENBSk07TUFLVEMsQ0FBQyxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQVo7SUFMTSxDQUFiO0lBT0EsT0FBT1IsYUFBYSxHQUFHRyxNQUFNLENBQUNGLEdBQUQsQ0FBTixDQUFZLENBQVosQ0FBSCxHQUFvQkUsTUFBTSxDQUFDRixHQUFELENBQU4sQ0FBWSxDQUFaLENBQXhDO0VBQ0g7O0VBQ0QsU0FBU1EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQW1DO0lBQy9CLElBQUlYLE1BQU0sR0FBR1csTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkQsTUFBTSxDQUFDRSxPQUFQLENBQWUsR0FBZixDQUFqQixDQUFiOztJQUNBLElBQUlDLDJCQUEyQixDQUFDZCxNQUFELENBQS9CLEVBQXlDO01BQ3JDLE9BQU8sT0FBT1csTUFBZDtJQUNIOztJQUNELE9BQU8sUUFBUUEsTUFBZjtFQUNIOztFQUNELFNBQVNJLGVBQVQsQ0FBeUJKLE1BQXpCLEVBQWlDO0lBQzdCLElBQUlYLE1BQU0sR0FBR1csTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkQsTUFBTSxDQUFDRSxPQUFQLENBQWUsR0FBZixDQUFqQixDQUFiOztJQUNBLElBQUlDLDJCQUEyQixDQUFDZCxNQUFELENBQS9CLEVBQXlDO01BQ3JDLE9BQU8sVUFBVVcsTUFBakI7SUFDSDs7SUFDRCxPQUFPLFdBQVdBLE1BQWxCO0VBQ0g7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0VBQ0ksU0FBU0csMkJBQVQsQ0FBcUNkLE1BQXJDLEVBQTZDO0lBQ3pDQSxNQUFNLEdBQUdnQixRQUFRLENBQUNoQixNQUFELEVBQVMsRUFBVCxDQUFqQjs7SUFDQSxJQUFJaUIsS0FBSyxDQUFDakIsTUFBRCxDQUFULEVBQW1CO01BQ2YsT0FBTyxLQUFQO0lBQ0g7O0lBQ0QsSUFBSUEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7TUFDWjtNQUNBLE9BQU8sSUFBUDtJQUNILENBSEQsTUFHTyxJQUFJQSxNQUFNLEdBQUcsRUFBYixFQUFpQjtNQUNwQjtNQUNBLElBQUksS0FBS0EsTUFBTCxJQUFlQSxNQUFNLElBQUksQ0FBN0IsRUFBZ0M7UUFDNUIsT0FBTyxJQUFQO01BQ0g7O01BQ0QsT0FBTyxLQUFQO0lBQ0gsQ0FOTSxNQU1BLElBQUlBLE1BQU0sR0FBRyxHQUFiLEVBQWtCO01BQ3JCO01BQ0EsSUFBSWtCLFNBQVMsR0FBR2xCLE1BQU0sR0FBRyxFQUF6QjtNQUFBLElBQ0ltQixVQUFVLEdBQUduQixNQUFNLEdBQUcsRUFEMUI7O01BRUEsSUFBSWtCLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtRQUNqQixPQUFPSiwyQkFBMkIsQ0FBQ0ssVUFBRCxDQUFsQztNQUNIOztNQUNELE9BQU9MLDJCQUEyQixDQUFDSSxTQUFELENBQWxDO0lBQ0gsQ0FSTSxNQVFBLElBQUlsQixNQUFNLEdBQUcsS0FBYixFQUFvQjtNQUN2QjtNQUNBLE9BQU9BLE1BQU0sSUFBSSxFQUFqQixFQUFxQjtRQUNqQkEsTUFBTSxHQUFHQSxNQUFNLEdBQUcsRUFBbEI7TUFDSDs7TUFDRCxPQUFPYywyQkFBMkIsQ0FBQ2QsTUFBRCxDQUFsQztJQUNILENBTk0sTUFNQTtNQUNIO01BQ0FBLE1BQU0sR0FBR0EsTUFBTSxHQUFHLElBQWxCO01BQ0EsT0FBT2MsMkJBQTJCLENBQUNkLE1BQUQsQ0FBbEM7SUFDSDtFQUNKOztFQUVELElBQUlvQixFQUFFLEdBQUd0QixNQUFNLENBQUN1QixZQUFQLENBQW9CLElBQXBCLEVBQTBCO0lBQy9CQyxNQUFNLEVBQUUsdUZBQXVGQyxLQUF2RixDQUNKLEdBREksQ0FEdUI7SUFJL0JDLFdBQVcsRUFBRSwrREFBK0RELEtBQS9ELENBQ1QsR0FEUyxDQUprQjtJQU8vQkUsZ0JBQWdCLEVBQUUsSUFQYTtJQVEvQkMsUUFBUSxFQUFFLG1FQUFtRUgsS0FBbkUsQ0FDTixHQURNLENBUnFCO0lBVy9CSSxhQUFhLEVBQUUsOEJBQThCSixLQUE5QixDQUFvQyxHQUFwQyxDQVhnQjtJQVkvQkssV0FBVyxFQUFFLHVCQUF1QkwsS0FBdkIsQ0FBNkIsR0FBN0IsQ0Faa0I7SUFhL0JNLGtCQUFrQixFQUFFLElBYlc7SUFjL0JDLGNBQWMsRUFBRTtNQUNaQyxFQUFFLEVBQUUsYUFEUTtNQUVaQyxHQUFHLEVBQUUsZ0JBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGNBSlE7TUFLWkMsR0FBRyxFQUFFLDBCQUxPO01BTVpDLElBQUksRUFBRTtJQU5NLENBZGU7SUFzQi9CQyxRQUFRLEVBQUU7TUFDTkMsT0FBTyxFQUFFLGNBREg7TUFFTkMsUUFBUSxFQUFFLEdBRko7TUFHTkMsT0FBTyxFQUFFLGNBSEg7TUFJTkMsUUFBUSxFQUFFLGNBSko7TUFLTkMsT0FBTyxFQUFFLGtCQUxIO01BTU5DLFFBQVEsRUFBRSxvQkFBWTtRQUNsQjtRQUNBLFFBQVEsS0FBS0MsR0FBTCxFQUFSO1VBQ0ksS0FBSyxDQUFMO1VBQ0EsS0FBSyxDQUFMO1lBQ0ksT0FBTyx5QkFBUDs7VUFDSjtZQUNJLE9BQU8sd0JBQVA7UUFMUjtNQU9IO0lBZkssQ0F0QnFCO0lBdUMvQkMsWUFBWSxFQUFFO01BQ1ZDLE1BQU0sRUFBRXBDLGlCQURFO01BRVZxQyxJQUFJLEVBQUVoQyxlQUZJO01BR1ZpQyxDQUFDLEVBQUUsaUJBSE87TUFJVkMsRUFBRSxFQUFFLGFBSk07TUFLVjVDLENBQUMsRUFBRU4sbUJBTE87TUFNVm1ELEVBQUUsRUFBRSxhQU5NO01BT1Y1QyxDQUFDLEVBQUVQLG1CQVBPO01BUVZvRCxFQUFFLEVBQUUsWUFSTTtNQVNWNUMsQ0FBQyxFQUFFUixtQkFUTztNQVVWcUQsRUFBRSxFQUFFLFNBVk07TUFXVjVDLENBQUMsRUFBRVQsbUJBWE87TUFZVnNELEVBQUUsRUFBRSxVQVpNO01BYVY1QyxDQUFDLEVBQUVWLG1CQWJPO01BY1Z1RCxFQUFFLEVBQUU7SUFkTSxDQXZDaUI7SUF1RC9CQyxzQkFBc0IsRUFBRSxXQXZETztJQXdEL0JDLE9BQU8sRUFBRSxLQXhEc0I7SUF5RC9CQyxJQUFJLEVBQUU7TUFDRkMsR0FBRyxFQUFFLENBREg7TUFDTTtNQUNSQyxHQUFHLEVBQUUsQ0FGSCxDQUVNOztJQUZOO0VBekR5QixDQUExQixDQUFUO0VBK0RBLE9BQU92QyxFQUFQO0FBRUgsQ0E1SUMsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvbW9tZW50L2xvY2FsZS9sYi5qcz9mY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBMdXhlbWJvdXJnaXNoIFtsYl1cbi8vISBhdXRob3IgOiBtd2VpbWVyc2tpcmNoIDogaHR0cHM6Ly9naXRodWIuY29tL213ZWltZXJza2lyY2hcbi8vISBhdXRob3IgOiBEYXZpZCBSYWlzb24gOiBodHRwczovL2dpdGh1Yi5jb20va3dpc2F0elxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gZmFjdG9yeShyZXF1aXJlKCcuLi9tb21lbnQnKSkgOlxuICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnLi4vbW9tZW50J10sIGZhY3RvcnkpIDpcbiAgIGZhY3RvcnkoZ2xvYmFsLm1vbWVudClcbn0odGhpcywgKGZ1bmN0aW9uIChtb21lbnQpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSwgaXNGdXR1cmUpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgICAgIG06IFsnZW5nIE1pbnV0dCcsICdlbmdlciBNaW51dHQnXSxcbiAgICAgICAgICAgIGg6IFsnZW5nIFN0b25uJywgJ2VuZ2VyIFN0b25uJ10sXG4gICAgICAgICAgICBkOiBbJ2VlbiBEYWcnLCAnZW5nZW0gRGFnJ10sXG4gICAgICAgICAgICBNOiBbJ2VlIE1vdW50JywgJ2VuZ2VtIE1vdW50J10sXG4gICAgICAgICAgICB5OiBbJ2VlIEpvZXInLCAnZW5nZW0gSm9lciddLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGdXR1cmVUaW1lKHN0cmluZykge1xuICAgICAgICB2YXIgbnVtYmVyID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZignICcpKTtcbiAgICAgICAgaWYgKGVpZmVsZXJSZWdlbEFwcGxpZXNUb051bWJlcihudW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2EgJyArIHN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2FuICcgKyBzdHJpbmc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2Nlc3NQYXN0VGltZShzdHJpbmcpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YoJyAnKSk7XG4gICAgICAgIGlmIChlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobnVtYmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2aXJ1ICcgKyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICd2aXJ1biAnICsgc3RyaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHdvcmQgYmVmb3JlIHRoZSBnaXZlbiBudW1iZXIgbG9zZXMgdGhlICctbicgZW5kaW5nLlxuICAgICAqIGUuZy4gJ2FuIDEwIERlZWcnIGJ1dCAnYSA1IERlZWcnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbnVtYmVyIHtpbnRlZ2VyfVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVpZmVsZXJSZWdlbEFwcGxpZXNUb051bWJlcihudW1iZXIpIHtcbiAgICAgICAgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyLCAxMCk7XG4gICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIC8vIE5lZ2F0aXZlIE51bWJlciAtLT4gYWx3YXlzIHRydWVcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IDEgZGlnaXRcbiAgICAgICAgICAgIGlmICg0IDw9IG51bWJlciAmJiBudW1iZXIgPD0gNykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMCkge1xuICAgICAgICAgICAgLy8gMiBkaWdpdHNcbiAgICAgICAgICAgIHZhciBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBmaXJzdERpZ2l0ID0gbnVtYmVyIC8gMTA7XG4gICAgICAgICAgICBpZiAobGFzdERpZ2l0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVpZmVsZXJSZWdlbEFwcGxpZXNUb051bWJlcihmaXJzdERpZ2l0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobGFzdERpZ2l0KTtcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMCkge1xuICAgICAgICAgICAgLy8gMyBvciA0IGRpZ2l0cyAtLT4gcmVjdXJzaXZlbHkgY2hlY2sgZmlyc3QgZGlnaXRcbiAgICAgICAgICAgIHdoaWxlIChudW1iZXIgPj0gMTApIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXIgLyAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlaWZlbGVyUmVnZWxBcHBsaWVzVG9OdW1iZXIobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFueXRoaW5nIGxhcmdlciB0aGFuIDQgZGlnaXRzOiByZWN1cnNpdmVseSBjaGVjayBmaXJzdCBuLTMgZGlnaXRzXG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIgLyAxMDAwO1xuICAgICAgICAgICAgcmV0dXJuIGVpZmVsZXJSZWdlbEFwcGxpZXNUb051bWJlcihudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxiID0gbW9tZW50LmRlZmluZUxvY2FsZSgnbGInLCB7XG4gICAgICAgIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03DpGVyel9BYnLDq2xsX01lZV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNTaG9ydDogJ0phbi5fRmVici5fTXJ6Ll9BYnIuX01lZV9KdW4uX0p1bC5fQXVnLl9TZXB0Ll9Pa3QuX05vdi5fRGV6Licuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgICAgICAgd2Vla2RheXM6ICdTb25uZGVnX03DqWluZGVnX0TDq25zY2hkZWdfTcOrdHR3b2NoX0Rvbm5lc2NoZGVnX0ZyZWlkZWdfU2Ftc2NoZGVnJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnU28uX03DqS5fRMOrLl9Nw6suX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ1NvX03DqV9Ew6tfTcOrX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0g6bW0gW0F1ZXJdJyxcbiAgICAgICAgICAgIExUUzogJ0g6bW06c3MgW0F1ZXJdJyxcbiAgICAgICAgICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tIFtBdWVyXScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0gW0F1ZXJdJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdbSGF1dCB1bV0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdbTXVlciB1bV0gTFQnLFxuICAgICAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFt1bV0gTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1tHw6tzY2h0ZXIgdW1dIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW50IGRhdGUgc3RyaW5nIGZvciAnRMOrbnNjaGRlZycgKFR1ZXNkYXkpIGFuZCAnRG9ubmVzY2hkZWcnIChUaHVyc2RheSkgZHVlIHRvIHBob25vbG9naWNhbCBydWxlXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRheSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbTGVzY2h0ZW5dIGRkZGQgW3VtXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1tMZXNjaHRlXSBkZGRkIFt1bV0gTFQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiBwcm9jZXNzRnV0dXJlVGltZSxcbiAgICAgICAgICAgIHBhc3Q6IHByb2Nlc3NQYXN0VGltZSxcbiAgICAgICAgICAgIHM6ICdlIHB1ZXIgU2Vrb25uZW4nLFxuICAgICAgICAgICAgc3M6ICclZCBTZWtvbm5lbicsXG4gICAgICAgICAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICAgICAgbW06ICclZCBNaW51dHRlbicsXG4gICAgICAgICAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICAgICAgaGg6ICclZCBTdG9ubmVuJyxcbiAgICAgICAgICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgICAgICBkZDogJyVkIERlZWcnLFxuICAgICAgICAgICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgICAgIE1NOiAnJWQgTcOpaW50JyxcbiAgICAgICAgICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgICAgICB5eTogJyVkIEpvZXInLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgICAgICBvcmRpbmFsOiAnJWQuJyxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxiO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIm1vbWVudCIsInByb2Nlc3NSZWxhdGl2ZVRpbWUiLCJudW1iZXIiLCJ3aXRob3V0U3VmZml4Iiwia2V5IiwiaXNGdXR1cmUiLCJmb3JtYXQiLCJtIiwiaCIsImQiLCJNIiwieSIsInByb2Nlc3NGdXR1cmVUaW1lIiwic3RyaW5nIiwic3Vic3RyIiwiaW5kZXhPZiIsImVpZmVsZXJSZWdlbEFwcGxpZXNUb051bWJlciIsInByb2Nlc3NQYXN0VGltZSIsInBhcnNlSW50IiwiaXNOYU4iLCJsYXN0RGlnaXQiLCJmaXJzdERpZ2l0IiwibGIiLCJkZWZpbmVMb2NhbGUiLCJtb250aHMiLCJzcGxpdCIsIm1vbnRoc1Nob3J0IiwibW9udGhzUGFyc2VFeGFjdCIsIndlZWtkYXlzIiwid2Vla2RheXNTaG9ydCIsIndlZWtkYXlzTWluIiwid2Vla2RheXNQYXJzZUV4YWN0IiwibG9uZ0RhdGVGb3JtYXQiLCJMVCIsIkxUUyIsIkwiLCJMTCIsIkxMTCIsIkxMTEwiLCJjYWxlbmRhciIsInNhbWVEYXkiLCJzYW1lRWxzZSIsIm5leHREYXkiLCJuZXh0V2VlayIsImxhc3REYXkiLCJsYXN0V2VlayIsImRheSIsInJlbGF0aXZlVGltZSIsImZ1dHVyZSIsInBhc3QiLCJzIiwic3MiLCJtbSIsImhoIiwiZGQiLCJNTSIsInl5IiwiZGF5T2ZNb250aE9yZGluYWxQYXJzZSIsIm9yZGluYWwiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/lb.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/lb.js");
/******/ 	
/******/ })()
;