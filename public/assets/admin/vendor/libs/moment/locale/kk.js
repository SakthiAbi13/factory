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

/***/ "./resources/assets/vendor/libs/moment/locale/kk.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/kk.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Kazakh [kk]\n//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var suffixes = {\n    0: '-ші',\n    1: '-ші',\n    2: '-ші',\n    3: '-ші',\n    4: '-ші',\n    5: '-ші',\n    6: '-шы',\n    7: '-ші',\n    8: '-ші',\n    9: '-шы',\n    10: '-шы',\n    20: '-шы',\n    30: '-шы',\n    40: '-шы',\n    50: '-ші',\n    60: '-шы',\n    70: '-ші',\n    80: '-ші',\n    90: '-шы',\n    100: '-ші'\n  };\n  var kk = moment.defineLocale('kk', {\n    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),\n    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),\n    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),\n    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),\n    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd, D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[Бүгін сағат] LT',\n      nextDay: '[Ертең сағат] LT',\n      nextWeek: 'dddd [сағат] LT',\n      lastDay: '[Кеше сағат] LT',\n      lastWeek: '[Өткен аптаның] dddd [сағат] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s ішінде',\n      past: '%s бұрын',\n      s: 'бірнеше секунд',\n      ss: '%d секунд',\n      m: 'бір минут',\n      mm: '%d минут',\n      h: 'бір сағат',\n      hh: '%d сағат',\n      d: 'бір күн',\n      dd: '%d күн',\n      M: 'бір ай',\n      MM: '%d ай',\n      y: 'бір жыл',\n      yy: '%d жыл'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}-(ші|шы)/,\n    ordinal: function ordinal(number) {\n      var a = number % 10,\n          b = number >= 100 ? 100 : null;\n      return number + (suffixes[number] || suffixes[a] || suffixes[b]);\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n\n    }\n  });\n  return kk;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUva2suanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsUUFBUSxHQUFHO0lBQ1gsR0FBRyxLQURRO0lBRVgsR0FBRyxLQUZRO0lBR1gsR0FBRyxLQUhRO0lBSVgsR0FBRyxLQUpRO0lBS1gsR0FBRyxLQUxRO0lBTVgsR0FBRyxLQU5RO0lBT1gsR0FBRyxLQVBRO0lBUVgsR0FBRyxLQVJRO0lBU1gsR0FBRyxLQVRRO0lBVVgsR0FBRyxLQVZRO0lBV1gsSUFBSSxLQVhPO0lBWVgsSUFBSSxLQVpPO0lBYVgsSUFBSSxLQWJPO0lBY1gsSUFBSSxLQWRPO0lBZVgsSUFBSSxLQWZPO0lBZ0JYLElBQUksS0FoQk87SUFpQlgsSUFBSSxLQWpCTztJQWtCWCxJQUFJLEtBbEJPO0lBbUJYLElBQUksS0FuQk87SUFvQlgsS0FBSztFQXBCTSxDQUFmO0VBdUJBLElBQUlDLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxZQUFQLENBQW9CLElBQXBCLEVBQTBCO0lBQy9CQyxNQUFNLEVBQUUscUZBQXFGQyxLQUFyRixDQUNKLEdBREksQ0FEdUI7SUFJL0JDLFdBQVcsRUFBRSxrREFBa0RELEtBQWxELENBQXdELEdBQXhELENBSmtCO0lBSy9CRSxRQUFRLEVBQUUsMERBQTBERixLQUExRCxDQUNOLEdBRE0sQ0FMcUI7SUFRL0JHLGFBQWEsRUFBRSw4QkFBOEJILEtBQTlCLENBQW9DLEdBQXBDLENBUmdCO0lBUy9CSSxXQUFXLEVBQUUsdUJBQXVCSixLQUF2QixDQUE2QixHQUE3QixDQVRrQjtJQVUvQkssY0FBYyxFQUFFO01BQ1pDLEVBQUUsRUFBRSxPQURRO01BRVpDLEdBQUcsRUFBRSxVQUZPO01BR1pDLENBQUMsRUFBRSxZQUhTO01BSVpDLEVBQUUsRUFBRSxhQUpRO01BS1pDLEdBQUcsRUFBRSxtQkFMTztNQU1aQyxJQUFJLEVBQUU7SUFOTSxDQVZlO0lBa0IvQkMsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxrQkFESDtNQUVOQyxPQUFPLEVBQUUsa0JBRkg7TUFHTkMsUUFBUSxFQUFFLGlCQUhKO01BSU5DLE9BQU8sRUFBRSxpQkFKSDtNQUtOQyxRQUFRLEVBQUUsaUNBTEo7TUFNTkMsUUFBUSxFQUFFO0lBTkosQ0FsQnFCO0lBMEIvQkMsWUFBWSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxXQURFO01BRVZDLElBQUksRUFBRSxVQUZJO01BR1ZDLENBQUMsRUFBRSxnQkFITztNQUlWQyxFQUFFLEVBQUUsV0FKTTtNQUtWQyxDQUFDLEVBQUUsV0FMTztNQU1WQyxFQUFFLEVBQUUsVUFOTTtNQU9WQyxDQUFDLEVBQUUsV0FQTztNQVFWQyxFQUFFLEVBQUUsVUFSTTtNQVNWQyxDQUFDLEVBQUUsU0FUTztNQVVWQyxFQUFFLEVBQUUsUUFWTTtNQVdWQyxDQUFDLEVBQUUsUUFYTztNQVlWQyxFQUFFLEVBQUUsT0FaTTtNQWFWQyxDQUFDLEVBQUUsU0FiTztNQWNWQyxFQUFFLEVBQUU7SUFkTSxDQTFCaUI7SUEwQy9CQyxzQkFBc0IsRUFBRSxpQkExQ087SUEyQy9CQyxPQUFPLEVBQUUsaUJBQVVDLE1BQVYsRUFBa0I7TUFDdkIsSUFBSUMsQ0FBQyxHQUFHRCxNQUFNLEdBQUcsRUFBakI7TUFBQSxJQUNJRSxDQUFDLEdBQUdGLE1BQU0sSUFBSSxHQUFWLEdBQWdCLEdBQWhCLEdBQXNCLElBRDlCO01BRUEsT0FBT0EsTUFBTSxJQUFJeEMsUUFBUSxDQUFDd0MsTUFBRCxDQUFSLElBQW9CeEMsUUFBUSxDQUFDeUMsQ0FBRCxDQUE1QixJQUFtQ3pDLFFBQVEsQ0FBQzBDLENBQUQsQ0FBL0MsQ0FBYjtJQUNILENBL0M4QjtJQWdEL0JDLElBQUksRUFBRTtNQUNGQyxHQUFHLEVBQUUsQ0FESDtNQUNNO01BQ1JDLEdBQUcsRUFBRSxDQUZILENBRU07O0lBRk47RUFoRHlCLENBQTFCLENBQVQ7RUFzREEsT0FBTzVDLEVBQVA7QUFFSCxDQXhGQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL2trLmpzPzI2NzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEthemFraCBba2tdXG4vLyEgYXV0aG9ycyA6IE51cmxhbiBSYWtoaW16aGFub3YgOiBodHRwczovL2dpdGh1Yi5jb20vbnVybGFuXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgc3VmZml4ZXMgPSB7XG4gICAgICAgIDA6ICct0YjRlicsXG4gICAgICAgIDE6ICct0YjRlicsXG4gICAgICAgIDI6ICct0YjRlicsXG4gICAgICAgIDM6ICct0YjRlicsXG4gICAgICAgIDQ6ICct0YjRlicsXG4gICAgICAgIDU6ICct0YjRlicsXG4gICAgICAgIDY6ICct0YjRiycsXG4gICAgICAgIDc6ICct0YjRlicsXG4gICAgICAgIDg6ICct0YjRlicsXG4gICAgICAgIDk6ICct0YjRiycsXG4gICAgICAgIDEwOiAnLdGI0YsnLFxuICAgICAgICAyMDogJy3RiNGLJyxcbiAgICAgICAgMzA6ICct0YjRiycsXG4gICAgICAgIDQwOiAnLdGI0YsnLFxuICAgICAgICA1MDogJy3RiNGWJyxcbiAgICAgICAgNjA6ICct0YjRiycsXG4gICAgICAgIDcwOiAnLdGI0ZYnLFxuICAgICAgICA4MDogJy3RiNGWJyxcbiAgICAgICAgOTA6ICct0YjRiycsXG4gICAgICAgIDEwMDogJy3RiNGWJyxcbiAgICB9O1xuXG4gICAgdmFyIGtrID0gbW9tZW50LmRlZmluZUxvY2FsZSgna2snLCB7XG4gICAgICAgIG1vbnRoczogJ9Kb0LDSo9GC0LDRgF/QsNKb0L/QsNC9X9C90LDRg9GA0YvQt1/RgdOZ0YPRltGAX9C80LDQvNGL0YBf0LzQsNGD0YHRi9C8X9GI0ZbQu9C00LVf0YLQsNC80YvQt1/Sm9GL0YDQutKv0LnQtdC6X9Kb0LDQt9Cw0L1f0pvQsNGA0LDRiNCwX9C20LXQu9GC0L7Sm9GB0LDQvScuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICfSm9Cw0qNf0LDSm9C/X9C90LDRg1/RgdOZ0YNf0LzQsNC8X9C80LDRg1/RiNGW0Ltf0YLQsNC8X9Kb0YvRgF/Sm9Cw0Ldf0pvQsNGAX9C20LXQuycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6ICfQttC10LrRgdC10L3QsdGWX9C00q/QudGB0LXQvdCx0ZZf0YHQtdC50YHQtdC90LHRll/RgdOZ0YDRgdC10L3QsdGWX9Cx0LXQudGB0LXQvdCx0ZZf0LbSsdC80LBf0YHQtdC90LHRlicuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogJ9C20LXQul/QtNKv0Llf0YHQtdC5X9GB05nRgF/QsdC10Llf0LbSsdC8X9GB0LXQvScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICfQttC6X9C00Llf0YHQuV/RgdGAX9Cx0Llf0LbQvF/RgdC9Jy5zcGxpdCgnXycpLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW9CR0q/Qs9GW0L0g0YHQsNKT0LDRgl0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vQldGA0YLQtdKjINGB0LDSk9Cw0YJdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBb0YHQsNKT0LDRgl0gTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1vQmtC10YjQtSDRgdCw0pPQsNGCXSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ1vTqNGC0LrQtdC9INCw0L/RgtCw0L3Ri9KjXSBkZGRkIFvRgdCw0pPQsNGCXSBMVCcsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogJyVzINGW0YjRltC90LTQtScsXG4gICAgICAgICAgICBwYXN0OiAnJXMg0LHSsdGA0YvQvScsXG4gICAgICAgICAgICBzOiAn0LHRltGA0L3QtdGI0LUg0YHQtdC60YPQvdC0JyxcbiAgICAgICAgICAgIHNzOiAnJWQg0YHQtdC60YPQvdC0JyxcbiAgICAgICAgICAgIG06ICfQsdGW0YAg0LzQuNC90YPRgicsXG4gICAgICAgICAgICBtbTogJyVkINC80LjQvdGD0YInLFxuICAgICAgICAgICAgaDogJ9Cx0ZbRgCDRgdCw0pPQsNGCJyxcbiAgICAgICAgICAgIGhoOiAnJWQg0YHQsNKT0LDRgicsXG4gICAgICAgICAgICBkOiAn0LHRltGAINC60q/QvScsXG4gICAgICAgICAgICBkZDogJyVkINC60q/QvScsXG4gICAgICAgICAgICBNOiAn0LHRltGAINCw0LknLFxuICAgICAgICAgICAgTU06ICclZCDQsNC5JyxcbiAgICAgICAgICAgIHk6ICfQsdGW0YAg0LbRi9C7JyxcbiAgICAgICAgICAgIHl5OiAnJWQg0LbRi9C7JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjRiNGWfNGI0YspLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGEgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBiID0gbnVtYmVyID49IDEwMCA/IDEwMCA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgKHN1ZmZpeGVzW251bWJlcl0gfHwgc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0pO1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA3LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA3dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4ga2s7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50Iiwic3VmZml4ZXMiLCJrayIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJ3ZWVrZGF5cyIsIndlZWtkYXlzU2hvcnQiLCJ3ZWVrZGF5c01pbiIsImxvbmdEYXRlRm9ybWF0IiwiTFQiLCJMVFMiLCJMIiwiTEwiLCJMTEwiLCJMTExMIiwiY2FsZW5kYXIiLCJzYW1lRGF5IiwibmV4dERheSIsIm5leHRXZWVrIiwibGFzdERheSIsImxhc3RXZWVrIiwic2FtZUVsc2UiLCJyZWxhdGl2ZVRpbWUiLCJmdXR1cmUiLCJwYXN0IiwicyIsInNzIiwibSIsIm1tIiwiaCIsImhoIiwiZCIsImRkIiwiTSIsIk1NIiwieSIsInl5IiwiZGF5T2ZNb250aE9yZGluYWxQYXJzZSIsIm9yZGluYWwiLCJudW1iZXIiLCJhIiwiYiIsIndlZWsiLCJkb3ciLCJkb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/kk.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/kk.js");
/******/ 	
/******/ })()
;