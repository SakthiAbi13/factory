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

/***/ "./resources/assets/vendor/libs/moment/locale/tk.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/tk.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Turkmen [tk]\n//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var suffixes = {\n    1: \"'inji\",\n    5: \"'inji\",\n    8: \"'inji\",\n    70: \"'inji\",\n    80: \"'inji\",\n    2: \"'nji\",\n    7: \"'nji\",\n    20: \"'nji\",\n    50: \"'nji\",\n    3: \"'ünji\",\n    4: \"'ünji\",\n    100: \"'ünji\",\n    6: \"'njy\",\n    9: \"'unjy\",\n    10: \"'unjy\",\n    30: \"'unjy\",\n    60: \"'ynjy\",\n    90: \"'ynjy\"\n  };\n  var tk = moment.defineLocale('tk', {\n    months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),\n    monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),\n    weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),\n    weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),\n    weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd, D MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[bugün sagat] LT',\n      nextDay: '[ertir sagat] LT',\n      nextWeek: '[indiki] dddd [sagat] LT',\n      lastDay: '[düýn] LT',\n      lastWeek: '[geçen] dddd [sagat] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s soň',\n      past: '%s öň',\n      s: 'birnäçe sekunt',\n      m: 'bir minut',\n      mm: '%d minut',\n      h: 'bir sagat',\n      hh: '%d sagat',\n      d: 'bir gün',\n      dd: '%d gün',\n      M: 'bir aý',\n      MM: '%d aý',\n      y: 'bir ýyl',\n      yy: '%d ýyl'\n    },\n    ordinal: function ordinal(number, period) {\n      switch (period) {\n        case 'd':\n        case 'D':\n        case 'Do':\n        case 'DD':\n          return number;\n\n        default:\n          if (number === 0) {\n            // special case for zero\n            return number + \"'unjy\";\n          }\n\n          var a = number % 10,\n              b = number % 100 - a,\n              c = number >= 100 ? 100 : null;\n          return number + (suffixes[a] || suffixes[b] || suffixes[c]);\n      }\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n\n    }\n  });\n  return tk;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvdGsuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsSUFBSUMsUUFBUSxHQUFHO0lBQ1gsR0FBRyxPQURRO0lBRVgsR0FBRyxPQUZRO0lBR1gsR0FBRyxPQUhRO0lBSVgsSUFBSSxPQUpPO0lBS1gsSUFBSSxPQUxPO0lBTVgsR0FBRyxNQU5RO0lBT1gsR0FBRyxNQVBRO0lBUVgsSUFBSSxNQVJPO0lBU1gsSUFBSSxNQVRPO0lBVVgsR0FBRyxPQVZRO0lBV1gsR0FBRyxPQVhRO0lBWVgsS0FBSyxPQVpNO0lBYVgsR0FBRyxNQWJRO0lBY1gsR0FBRyxPQWRRO0lBZVgsSUFBSSxPQWZPO0lBZ0JYLElBQUksT0FoQk87SUFpQlgsSUFBSSxPQWpCTztJQWtCWCxJQUFJO0VBbEJPLENBQWY7RUFxQkEsSUFBSUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEI7SUFDL0JDLE1BQU0sRUFBRSwrRUFBK0VDLEtBQS9FLENBQ0osR0FESSxDQUR1QjtJQUkvQkMsV0FBVyxFQUFFLGtEQUFrREQsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FKa0I7SUFLL0JFLFFBQVEsRUFBRSx3REFBd0RGLEtBQXhELENBQ04sR0FETSxDQUxxQjtJQVEvQkcsYUFBYSxFQUFFLDhCQUE4QkgsS0FBOUIsQ0FBb0MsR0FBcEMsQ0FSZ0I7SUFTL0JJLFdBQVcsRUFBRSx1QkFBdUJKLEtBQXZCLENBQTZCLEdBQTdCLENBVGtCO0lBVS9CSyxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLE9BRFE7TUFFWkMsR0FBRyxFQUFFLFVBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGFBSlE7TUFLWkMsR0FBRyxFQUFFLG1CQUxPO01BTVpDLElBQUksRUFBRTtJQU5NLENBVmU7SUFrQi9CQyxRQUFRLEVBQUU7TUFDTkMsT0FBTyxFQUFFLGtCQURIO01BRU5DLE9BQU8sRUFBRSxrQkFGSDtNQUdOQyxRQUFRLEVBQUUsMEJBSEo7TUFJTkMsT0FBTyxFQUFFLFdBSkg7TUFLTkMsUUFBUSxFQUFFLHlCQUxKO01BTU5DLFFBQVEsRUFBRTtJQU5KLENBbEJxQjtJQTBCL0JDLFlBQVksRUFBRTtNQUNWQyxNQUFNLEVBQUUsUUFERTtNQUVWQyxJQUFJLEVBQUUsT0FGSTtNQUdWQyxDQUFDLEVBQUUsZ0JBSE87TUFJVkMsQ0FBQyxFQUFFLFdBSk87TUFLVkMsRUFBRSxFQUFFLFVBTE07TUFNVkMsQ0FBQyxFQUFFLFdBTk87TUFPVkMsRUFBRSxFQUFFLFVBUE07TUFRVkMsQ0FBQyxFQUFFLFNBUk87TUFTVkMsRUFBRSxFQUFFLFFBVE07TUFVVkMsQ0FBQyxFQUFFLFFBVk87TUFXVkMsRUFBRSxFQUFFLE9BWE07TUFZVkMsQ0FBQyxFQUFFLFNBWk87TUFhVkMsRUFBRSxFQUFFO0lBYk0sQ0ExQmlCO0lBeUMvQkMsT0FBTyxFQUFFLGlCQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtNQUMvQixRQUFRQSxNQUFSO1FBQ0ksS0FBSyxHQUFMO1FBQ0EsS0FBSyxHQUFMO1FBQ0EsS0FBSyxJQUFMO1FBQ0EsS0FBSyxJQUFMO1VBQ0ksT0FBT0QsTUFBUDs7UUFDSjtVQUNJLElBQUlBLE1BQU0sS0FBSyxDQUFmLEVBQWtCO1lBQ2Q7WUFDQSxPQUFPQSxNQUFNLEdBQUcsT0FBaEI7VUFDSDs7VUFDRCxJQUFJRSxDQUFDLEdBQUdGLE1BQU0sR0FBRyxFQUFqQjtVQUFBLElBQ0lHLENBQUMsR0FBSUgsTUFBTSxHQUFHLEdBQVYsR0FBaUJFLENBRHpCO1VBQUEsSUFFSUUsQ0FBQyxHQUFHSixNQUFNLElBQUksR0FBVixHQUFnQixHQUFoQixHQUFzQixJQUY5QjtVQUdBLE9BQU9BLE1BQU0sSUFBSXRDLFFBQVEsQ0FBQ3dDLENBQUQsQ0FBUixJQUFleEMsUUFBUSxDQUFDeUMsQ0FBRCxDQUF2QixJQUE4QnpDLFFBQVEsQ0FBQzBDLENBQUQsQ0FBMUMsQ0FBYjtNQWRSO0lBZ0JILENBMUQ4QjtJQTJEL0JDLElBQUksRUFBRTtNQUNGQyxHQUFHLEVBQUUsQ0FESDtNQUNNO01BQ1JDLEdBQUcsRUFBRSxDQUZILENBRU07O0lBRk47RUEzRHlCLENBQTFCLENBQVQ7RUFpRUEsT0FBTzVDLEVBQVA7QUFFSCxDQWpHQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL3RrLmpzPzI4MjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFR1cmttZW4gW3RrXVxuLy8hIGF1dGhvciA6IEF0YW15cmF0IEFiZHlyYWhtYW5vdiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGFteXJhdGFiZHlcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIHZhciBzdWZmaXhlcyA9IHtcbiAgICAgICAgMTogXCInaW5qaVwiLFxuICAgICAgICA1OiBcIidpbmppXCIsXG4gICAgICAgIDg6IFwiJ2luamlcIixcbiAgICAgICAgNzA6IFwiJ2luamlcIixcbiAgICAgICAgODA6IFwiJ2luamlcIixcbiAgICAgICAgMjogXCInbmppXCIsXG4gICAgICAgIDc6IFwiJ25qaVwiLFxuICAgICAgICAyMDogXCInbmppXCIsXG4gICAgICAgIDUwOiBcIiduamlcIixcbiAgICAgICAgMzogXCInw7xuamlcIixcbiAgICAgICAgNDogXCInw7xuamlcIixcbiAgICAgICAgMTAwOiBcIifDvG5qaVwiLFxuICAgICAgICA2OiBcIiduanlcIixcbiAgICAgICAgOTogXCIndW5qeVwiLFxuICAgICAgICAxMDogXCIndW5qeVwiLFxuICAgICAgICAzMDogXCIndW5qeVwiLFxuICAgICAgICA2MDogXCIneW5qeVwiLFxuICAgICAgICA5MDogXCIneW5qeVwiLFxuICAgIH07XG5cbiAgICB2YXIgdGsgPSBtb21lbnQuZGVmaW5lTG9jYWxlKCd0aycsIHtcbiAgICAgICAgbW9udGhzOiAnw51hbndhcl9GZXdyYWxfTWFydF9BcHJlbF9NYcO9X0nDvXVuX0nDvXVsX0F3Z3VzdF9TZW50w71hYnJfT2t0w71hYnJfTm/DvWFicl9EZWthYnInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnw51hbl9GZXdfTWFyX0Fwcl9NYcO9X0nDvW5fScO9bF9Bd2dfU2VuX09rdF9Ob8O9X0Rlaycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXM6ICfDnWVrxZ9lbmJlX0R1xZ9lbmJlX1NpxZ9lbmJlX8OHYXLFn2VuYmVfUGVuxZ9lbmJlX0FubmFfxZ5lbmJlJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiAnw51la19EdcWfX1NpxZ9fw4dhcl9QZW5fQW5uX8WeZW4nLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluOiAnw51rX0TFn19TxZ9fw4dyX1BuX0FuX8Webicuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSEg6bW0nLFxuICAgICAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICAgICAgTDogJ0RELk1NLllZWVknLFxuICAgICAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhcjoge1xuICAgICAgICAgICAgc2FtZURheTogJ1tidWfDvG4gc2FnYXRdIExUJyxcbiAgICAgICAgICAgIG5leHREYXk6ICdbZXJ0aXIgc2FnYXRdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnW2luZGlraV0gZGRkZCBbc2FnYXRdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbZMO8w71uXSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ1tnZcOnZW5dIGRkZGQgW3NhZ2F0XSBMVCcsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogJyVzIHNvxYgnLFxuICAgICAgICAgICAgcGFzdDogJyVzIMO2xYgnLFxuICAgICAgICAgICAgczogJ2Jpcm7DpMOnZSBzZWt1bnQnLFxuICAgICAgICAgICAgbTogJ2JpciBtaW51dCcsXG4gICAgICAgICAgICBtbTogJyVkIG1pbnV0JyxcbiAgICAgICAgICAgIGg6ICdiaXIgc2FnYXQnLFxuICAgICAgICAgICAgaGg6ICclZCBzYWdhdCcsXG4gICAgICAgICAgICBkOiAnYmlyIGfDvG4nLFxuICAgICAgICAgICAgZGQ6ICclZCBnw7xuJyxcbiAgICAgICAgICAgIE06ICdiaXIgYcO9JyxcbiAgICAgICAgICAgIE1NOiAnJWQgYcO9JyxcbiAgICAgICAgICAgIHk6ICdiaXIgw715bCcsXG4gICAgICAgICAgICB5eTogJyVkIMO9eWwnLFxuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnRG8nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0REJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyBcIid1bmp5XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSAobnVtYmVyICUgMTAwKSAtIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gbnVtYmVyID49IDEwMCA/IDEwMCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAoc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0gfHwgc3VmZml4ZXNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA3LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA3dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGs7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50Iiwic3VmZml4ZXMiLCJ0ayIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJ3ZWVrZGF5cyIsIndlZWtkYXlzU2hvcnQiLCJ3ZWVrZGF5c01pbiIsImxvbmdEYXRlRm9ybWF0IiwiTFQiLCJMVFMiLCJMIiwiTEwiLCJMTEwiLCJMTExMIiwiY2FsZW5kYXIiLCJzYW1lRGF5IiwibmV4dERheSIsIm5leHRXZWVrIiwibGFzdERheSIsImxhc3RXZWVrIiwic2FtZUVsc2UiLCJyZWxhdGl2ZVRpbWUiLCJmdXR1cmUiLCJwYXN0IiwicyIsIm0iLCJtbSIsImgiLCJoaCIsImQiLCJkZCIsIk0iLCJNTSIsInkiLCJ5eSIsIm9yZGluYWwiLCJudW1iZXIiLCJwZXJpb2QiLCJhIiwiYiIsImMiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/tk.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/tk.js");
/******/ 	
/******/ })()
;