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

/***/ "./resources/assets/vendor/libs/moment/locale/ug-cn.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/ug-cn.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Uyghur (China) [ug-cn]\n//! author: boyaq : https://github.com/boyaq\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var ugCn = moment.defineLocale('ug-cn', {\n    months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),\n    monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),\n    weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),\n    weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),\n    weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'YYYY-MM-DD',\n      LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',\n      LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',\n      LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'\n    },\n    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,\n    meridiemHour: function meridiemHour(hour, meridiem) {\n      if (hour === 12) {\n        hour = 0;\n      }\n\n      if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {\n        return hour;\n      } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {\n        return hour + 12;\n      } else {\n        return hour >= 11 ? hour : hour + 12;\n      }\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      var hm = hour * 100 + minute;\n\n      if (hm < 600) {\n        return 'يېرىم كېچە';\n      } else if (hm < 900) {\n        return 'سەھەر';\n      } else if (hm < 1130) {\n        return 'چۈشتىن بۇرۇن';\n      } else if (hm < 1230) {\n        return 'چۈش';\n      } else if (hm < 1800) {\n        return 'چۈشتىن كېيىن';\n      } else {\n        return 'كەچ';\n      }\n    },\n    calendar: {\n      sameDay: '[بۈگۈن سائەت] LT',\n      nextDay: '[ئەتە سائەت] LT',\n      nextWeek: '[كېلەركى] dddd [سائەت] LT',\n      lastDay: '[تۆنۈگۈن] LT',\n      lastWeek: '[ئالدىنقى] dddd [سائەت] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s كېيىن',\n      past: '%s بۇرۇن',\n      s: 'نەچچە سېكونت',\n      ss: '%d سېكونت',\n      m: 'بىر مىنۇت',\n      mm: '%d مىنۇت',\n      h: 'بىر سائەت',\n      hh: '%d سائەت',\n      d: 'بىر كۈن',\n      dd: '%d كۈن',\n      M: 'بىر ئاي',\n      MM: '%d ئاي',\n      y: 'بىر يىل',\n      yy: '%d يىل'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,\n    ordinal: function ordinal(number, period) {\n      switch (period) {\n        case 'd':\n        case 'D':\n        case 'DDD':\n          return number + '-كۈنى';\n\n        case 'w':\n        case 'W':\n          return number + '-ھەپتە';\n\n        default:\n          return number;\n      }\n    },\n    preparse: function preparse(string) {\n      return string.replace(/،/g, ',');\n    },\n    postformat: function postformat(string) {\n      return string.replace(/,/g, '،');\n    },\n    week: {\n      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 1st is the first week of the year.\n\n    }\n  });\n  return ugCn;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvdWctY24uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkI7SUFDcENDLE1BQU0sRUFBRSxzRkFBc0ZDLEtBQXRGLENBQ0osR0FESSxDQUQ0QjtJQUlwQ0MsV0FBVyxFQUFFLHNGQUFzRkQsS0FBdEYsQ0FDVCxHQURTLENBSnVCO0lBT3BDRSxRQUFRLEVBQUUseURBQXlERixLQUF6RCxDQUNOLEdBRE0sQ0FQMEI7SUFVcENHLGFBQWEsRUFBRSx1QkFBdUJILEtBQXZCLENBQTZCLEdBQTdCLENBVnFCO0lBV3BDSSxXQUFXLEVBQUUsdUJBQXVCSixLQUF2QixDQUE2QixHQUE3QixDQVh1QjtJQVlwQ0ssY0FBYyxFQUFFO01BQ1pDLEVBQUUsRUFBRSxPQURRO01BRVpDLEdBQUcsRUFBRSxVQUZPO01BR1pDLENBQUMsRUFBRSxZQUhTO01BSVpDLEVBQUUsRUFBRSx5QkFKUTtNQUtaQyxHQUFHLEVBQUUsZ0NBTE87TUFNWkMsSUFBSSxFQUFFO0lBTk0sQ0Fab0I7SUFvQnBDQyxhQUFhLEVBQUUsb0RBcEJxQjtJQXFCcENDLFlBQVksRUFBRSxzQkFBVUMsSUFB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LENBR007O0lBSE47RUFsRzhCLENBQTdCLENBQVg7RUF5R0EsT0FBT3RELElBQVA7QUFFSCxDQXBIQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzP2UwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFV5Z2h1ciAoQ2hpbmEpIFt1Zy1jbl1cbi8vISBhdXRob3I6IGJveWFxIDogaHR0cHM6Ly9naXRodWIuY29tL2JveWFxXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgdWdDbiA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3VnLWNuJywge1xuICAgICAgICBtb250aHM6ICfZitin2Ybbi9in2LFf2YHbkNuL2LHYp9mEX9mF2KfYsdiqX9im2KfZvtix25DZhF/Zhdin2Ypf2KbZidmK24fZhl/YptmJ2Yrbh9mEX9im2Kfbi9i624fYs9iqX9iz25DZhtiq25XYqNmJ2LFf2KbbhtmD2Krbldio2YnYsV/ZhtmI2YrYp9io2YnYsV/Yr9uQ2YPYp9io2YnYsScuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgbW9udGhzU2hvcnQ6ICfZitin2Ybbi9in2LFf2YHbkNuL2LHYp9mEX9mF2KfYsdiqX9im2KfZvtix25DZhF/Zhdin2Ypf2KbZidmK24fZhl/YptmJ2Yrbh9mEX9im2Kfbi9i624fYs9iqX9iz25DZhtiq25XYqNmJ2LFf2KbbhtmD2Krbldio2YnYsV/ZhtmI2YrYp9io2YnYsV/Yr9uQ2YPYp9io2YnYsScuc3BsaXQoXG4gICAgICAgICAgICAnXydcbiAgICAgICAgKSxcbiAgICAgICAgd2Vla2RheXM6ICfZituV2YPYtNuV2YbYqNuVX9iv24jYtNuV2YbYqNuVX9iz25XZiti025XZhtio25Vf2obYp9ix2LTbldmG2KjblV/ZvtuV2YrYtNuV2YbYqNuVX9is24jZhduVX9i025XZhtio25UnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfZituVX9iv24hf2LPblV/ahtinX9m+25Vf2KzbiF/YtNuVJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ9mK25Vf2K/biF/Ys9uVX9qG2Kdf2b7blV/YrNuIX9i025UnLnNwbGl0KCdfJyksXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdZWVlZLU1NLUREJyxcbiAgICAgICAgICAgIExMOiAnWVlZWS3ZitmJ2YTZiU0t2KbYp9mK2YbZidqtRC3Zg9uI2YbZiScsXG4gICAgICAgICAgICBMTEw6ICdZWVlZLdmK2YnZhNmJTS3Yptin2YrZhtmJ2q1ELdmD24jZhtmJ2IwgSEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGTYjCBZWVlZLdmK2YnZhNmJTS3Yptin2YrZhtmJ2q1ELdmD24jZhtmJ2IwgSEg6bW0nLFxuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbVBhcnNlOiAv2YrbkNix2YnZhSDZg9uQ2obblXzYs9uV2r7bldixfNqG24jYtNiq2YnZhiDYqNuH2LHbh9mGfNqG24jYtHzahtuI2LTYqtmJ2YYg2YPbkNmK2YnZhnzZg9uV2oYvLFxuICAgICAgICBtZXJpZGllbUhvdXI6IGZ1bmN0aW9uIChob3VyLCBtZXJpZGllbSkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPT09ICfZituQ2LHZidmFINmD25DahtuVJyB8fFxuICAgICAgICAgICAgICAgIG1lcmlkaWVtID09PSAn2LPbldq+25XYsScgfHxcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9PT0gJ9qG24jYtNiq2YnZhiDYqNuH2LHbh9mGJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn2obbiNi02KrZidmGINmD25DZitmJ2YYnIHx8IG1lcmlkaWVtID09PSAn2YPbldqGJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICsgMTI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIHZhciBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XG4gICAgICAgICAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9mK25DYsdmJ2YUg2YPbkNqG25UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn2LPbldq+25XYsSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTEzMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn2obbiNi02KrZidmGINio24fYsduH2YYnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChobSA8IDEyMzApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9qG24jYtCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn2obbiNi02KrZidmGINmD25DZitmJ2YYnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9mD25Xahic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW9io24jar9uI2YYg2LPYp9im25XYql0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vYptuV2KrblSDYs9in2KbbldiqXSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ1vZg9uQ2YTbldix2YPZiV0gZGRkZCBb2LPYp9im25XYql0gTFQnLFxuICAgICAgICAgICAgbGFzdERheTogJ1vYqtuG2YbbiNqv24jZhl0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdb2KbYp9mE2K/ZidmG2YLZiV0gZGRkZCBb2LPYp9im25XYql0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICclcyDZg9uQ2YrZidmGJyxcbiAgICAgICAgICAgIHBhc3Q6ICclcyDYqNuH2LHbh9mGJyxcbiAgICAgICAgICAgIHM6ICfZhtuV2obahtuVINiz25DZg9mI2YbYqicsXG4gICAgICAgICAgICBzczogJyVkINiz25DZg9mI2YbYqicsXG4gICAgICAgICAgICBtOiAn2KjZidixINmF2YnZhtuH2KonLFxuICAgICAgICAgICAgbW06ICclZCDZhdmJ2Ybbh9iqJyxcbiAgICAgICAgICAgIGg6ICfYqNmJ2LEg2LPYp9im25XYqicsXG4gICAgICAgICAgICBoaDogJyVkINiz2KfYptuV2KonLFxuICAgICAgICAgICAgZDogJ9io2YnYsSDZg9uI2YYnLFxuICAgICAgICAgICAgZGQ6ICclZCDZg9uI2YYnLFxuICAgICAgICAgICAgTTogJ9io2YnYsSDYptin2YonLFxuICAgICAgICAgICAgTU06ICclZCDYptin2YonLFxuICAgICAgICAgICAgeTogJ9io2YnYsSDZitmJ2YQnLFxuICAgICAgICAgICAgeXk6ICclZCDZitmJ2YQnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSgt2YPbiNmG2Yl8Ldim2KfZinwt2r7bldm+2KrblSkvLFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct2YPbiNmG2YknO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgJy3avtuV2b7YqtuVJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVwYXJzZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC/YjC9nLCAnLCcpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0Zm9ybWF0OiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLywvZywgJ9iMJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdlZWs6IHtcbiAgICAgICAgICAgIC8vIEdCL1QgNzQwOC0xOTk044CK5pWw5o2u5YWD5ZKM5Lqk5o2i5qC85byPwrfkv6Hmga/kuqTmjaLCt+aXpeacn+WSjOaXtumXtOihqOekuuazleOAi+S4jklTTyA4NjAxOjE5ODjnrYnmlYhcbiAgICAgICAgICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3k6IDcsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1Z0NuO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIm1vbWVudCIsInVnQ24iLCJkZWZpbmVMb2NhbGUiLCJtb250aHMiLCJzcGxpdCIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsIm1lcmlkaWVtUGFyc2UiLCJtZXJpZGllbUhvdXIiLCJob3VyIiwibWVyaWRpZW0iLCJtaW51dGUiLCJpc0xvd2VyIiwiaG0iLCJjYWxlbmRhciIsInNhbWVEYXkiLCJuZXh0RGF5IiwibmV4dFdlZWsiLCJsYXN0RGF5IiwibGFzdFdlZWsiLCJzYW1lRWxzZSIsInJlbGF0aXZlVGltZSIsImZ1dHVyZSIsInBhc3QiLCJzIiwic3MiLCJtIiwibW0iLCJoIiwiaGgiLCJkIiwiZGQiLCJNIiwiTU0iLCJ5IiwieXkiLCJkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIiwib3JkaW5hbCIsIm51bWJlciIsInBlcmlvZCIsInByZXBhcnNlIiwic3RyaW5nIiwicmVwbGFjZSIsInBvc3Rmb3JtYXQiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/ug-cn.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/ug-cn.js");
/******/ 	
/******/ })()
;