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

/***/ "./resources/assets/vendor/libs/moment/locale/de-ch.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/de-ch.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : German (Switzerland) [de-ch]\n//! author : sschueller : https://github.com/sschueller\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  function processRelativeTime(number, withoutSuffix, key, isFuture) {\n    var format = {\n      m: ['eine Minute', 'einer Minute'],\n      h: ['eine Stunde', 'einer Stunde'],\n      d: ['ein Tag', 'einem Tag'],\n      dd: [number + ' Tage', number + ' Tagen'],\n      w: ['eine Woche', 'einer Woche'],\n      M: ['ein Monat', 'einem Monat'],\n      MM: [number + ' Monate', number + ' Monaten'],\n      y: ['ein Jahr', 'einem Jahr'],\n      yy: [number + ' Jahre', number + ' Jahren']\n    };\n    return withoutSuffix ? format[key][0] : format[key][1];\n  }\n\n  var deCh = moment.defineLocale('de-ch', {\n    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),\n    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),\n    weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),\n    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),\n    weekdaysParseExact: true,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D. MMMM YYYY',\n      LLL: 'D. MMMM YYYY HH:mm',\n      LLLL: 'dddd, D. MMMM YYYY HH:mm'\n    },\n    calendar: {\n      sameDay: '[heute um] LT [Uhr]',\n      sameElse: 'L',\n      nextDay: '[morgen um] LT [Uhr]',\n      nextWeek: 'dddd [um] LT [Uhr]',\n      lastDay: '[gestern um] LT [Uhr]',\n      lastWeek: '[letzten] dddd [um] LT [Uhr]'\n    },\n    relativeTime: {\n      future: 'in %s',\n      past: 'vor %s',\n      s: 'ein paar Sekunden',\n      ss: '%d Sekunden',\n      m: processRelativeTime,\n      mm: '%d Minuten',\n      h: processRelativeTime,\n      hh: '%d Stunden',\n      d: processRelativeTime,\n      dd: processRelativeTime,\n      w: processRelativeTime,\n      ww: '%d Wochen',\n      M: processRelativeTime,\n      MM: processRelativeTime,\n      y: processRelativeTime,\n      yy: processRelativeTime\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n    ordinal: '%d.',\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return deCh;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvZGUtY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtFQUMxQixzQkFBT0MsT0FBUCxPQUFtQixRQUFuQixJQUErQixhQUFrQixXQUFqRCxJQUNPLGVBQW1CLFVBRDFCLEdBQ3VDRCxPQUFPLENBQUNHLG1CQUFPLENBQUMsd0lBQUQsQ0FBUixDQUQ5QyxHQUVBLFFBQTZDQyxpQ0FBTyxDQUFDLHdJQUFELENBQUQsb0NBQWdCSixPQUFoQjtBQUFBO0FBQUE7QUFBQSxrR0FBbkQsR0FDQUEsQ0FIQTtBQUlGLENBTEMsRUFLQSxJQUxBLEVBS08sVUFBVU0sTUFBVixFQUFrQjtFQUFFLGFBQUYsQ0FFdkI7O0VBRUEsU0FBU0MsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDQyxhQUFyQyxFQUFvREMsR0FBcEQsRUFBeURDLFFBQXpELEVBQW1FO0lBQy9ELElBQUlDLE1BQU0sR0FBRztNQUNUQyxDQUFDLEVBQUUsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLENBRE07TUFFVEMsQ0FBQyxFQUFFLENBQUMsYUFBRCxFQUFnQixjQUFoQixDQUZNO01BR1RDLENBQUMsRUFBRSxDQUFDLFNBQUQsRUFBWSxXQUFaLENBSE07TUFJVEMsRUFBRSxFQUFFLENBQUNSLE1BQU0sR0FBRyxPQUFWLEVBQW1CQSxNQUFNLEdBQUcsUUFBNUIsQ0FKSztNQUtUUyxDQUFDLEVBQUUsQ0FBQyxZQUFELEVBQWUsYUFBZixDQUxNO01BTVRDLENBQUMsRUFBRSxDQUFDLFdBQUQsRUFBYyxhQUFkLENBTk07TUFPVEMsRUFBRSxFQUFFLENBQUNYLE1BQU0sR0FBRyxTQUFWLEVBQXFCQSxNQUFNLEdBQUcsVUFBOUIsQ0FQSztNQVFUWSxDQUFDLEVBQUUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQVJNO01BU1RDLEVBQUUsRUFBRSxDQUFDYixNQUFNLEdBQUcsUUFBVixFQUFvQkEsTUFBTSxHQUFHLFNBQTdCO0lBVEssQ0FBYjtJQVdBLE9BQU9DLGFBQWEsR0FBR0csTUFBTSxDQUFDRixHQUFELENBQU4sQ0FBWSxDQUFaLENBQUgsR0FBb0JFLE1BQU0sQ0FBQ0YsR0FBRCxDQUFOLENBQVksQ0FBWixDQUF4QztFQUNIOztFQUVELElBQUlZLElBQUksR0FBR2hCLE1BQU0sQ0FBQ2lCLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkI7SUFDcENDLE1BQU0sRUFBRSxxRkFBcUZDLEtBQXJGLENBQ0osR0FESSxDQUQ0QjtJQUlwQ0MsV0FBVyxFQUFFLDZEQUE2REQsS0FBN0QsQ0FDVCxHQURTLENBSnVCO0lBT3BDRSxnQkFBZ0IsRUFBRSxJQVBrQjtJQVFwQ0MsUUFBUSxFQUFFLDhEQUE4REgsS0FBOUQsQ0FDTixHQURNLENBUjBCO0lBV3BDSSxhQUFhLEVBQUUsdUJBQXVCSixLQUF2QixDQUE2QixHQUE3QixDQVhxQjtJQVlwQ0ssV0FBVyxFQUFFLHVCQUF1QkwsS0FBdkIsQ0FBNkIsR0FBN0IsQ0FadUI7SUFhcENNLGtCQUFrQixFQUFFLElBYmdCO0lBY3BDQyxjQUFjLEVBQUU7TUFDWkMsRUFBRSxFQUFFLE9BRFE7TUFFWkMsR0FBRyxFQUFFLFVBRk87TUFHWkMsQ0FBQyxFQUFFLFlBSFM7TUFJWkMsRUFBRSxFQUFFLGNBSlE7TUFLWkMsR0FBRyxFQUFFLG9CQUxPO01BTVpDLElBQUksRUFBRTtJQU5NLENBZG9CO0lBc0JwQ0MsUUFBUSxFQUFFO01BQ05DLE9BQU8sRUFBRSxxQkFESDtNQUVOQyxRQUFRLEVBQUUsR0FGSjtNQUdOQyxPQUFPLEVBQUUsc0JBSEg7TUFJTkMsUUFBUSxFQUFFLG9CQUpKO01BS05DLE9BQU8sRUFBRSx1QkFMSDtNQU1OQyxRQUFRLEVBQUU7SUFOSixDQXRCMEI7SUE4QnBDQyxZQUFZLEVBQUU7TUFDVkMsTUFBTSxFQUFFLE9BREU7TUFFVkMsSUFBSSxFQUFFLFFBRkk7TUFHVkMsQ0FBQyxFQUFFLG1CQUhPO01BSVZDLEVBQUUsRUFBRSxhQUpNO01BS1ZyQyxDQUFDLEVBQUVOLG1CQUxPO01BTVY0QyxFQUFFLEVBQUUsWUFOTTtNQU9WckMsQ0FBQyxFQUFFUCxtQkFQTztNQVFWNkMsRUFBRSxFQUFFLFlBUk07TUFTVnJDLENBQUMsRUFBRVIsbUJBVE87TUFVVlMsRUFBRSxFQUFFVCxtQkFWTTtNQVdWVSxDQUFDLEVBQUVWLG1CQVhPO01BWVY4QyxFQUFFLEVBQUUsV0FaTTtNQWFWbkMsQ0FBQyxFQUFFWCxtQkFiTztNQWNWWSxFQUFFLEVBQUVaLG1CQWRNO01BZVZhLENBQUMsRUFBRWIsbUJBZk87TUFnQlZjLEVBQUUsRUFBRWQ7SUFoQk0sQ0E5QnNCO0lBZ0RwQytDLHNCQUFzQixFQUFFLFdBaERZO0lBaURwQ0MsT0FBTyxFQUFFLEtBakQyQjtJQWtEcENDLElBQUksRUFBRTtNQUNGQyxHQUFHLEVBQUUsQ0FESDtNQUNNO01BQ1JDLEdBQUcsRUFBRSxDQUZILENBRU07O0lBRk47RUFsRDhCLENBQTdCLENBQVg7RUF3REEsT0FBT3BDLElBQVA7QUFFSCxDQWxGQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzP2E3ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEdlcm1hbiAoU3dpdHplcmxhbmQpIFtkZS1jaF1cbi8vISBhdXRob3IgOiBzc2NodWVsbGVyIDogaHR0cHM6Ly9naXRodWIuY29tL3NzY2h1ZWxsZXJcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXksIGlzRnV0dXJlKSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB7XG4gICAgICAgICAgICBtOiBbJ2VpbmUgTWludXRlJywgJ2VpbmVyIE1pbnV0ZSddLFxuICAgICAgICAgICAgaDogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcbiAgICAgICAgICAgIGQ6IFsnZWluIFRhZycsICdlaW5lbSBUYWcnXSxcbiAgICAgICAgICAgIGRkOiBbbnVtYmVyICsgJyBUYWdlJywgbnVtYmVyICsgJyBUYWdlbiddLFxuICAgICAgICAgICAgdzogWydlaW5lIFdvY2hlJywgJ2VpbmVyIFdvY2hlJ10sXG4gICAgICAgICAgICBNOiBbJ2VpbiBNb25hdCcsICdlaW5lbSBNb25hdCddLFxuICAgICAgICAgICAgTU06IFtudW1iZXIgKyAnIE1vbmF0ZScsIG51bWJlciArICcgTW9uYXRlbiddLFxuICAgICAgICAgICAgeTogWydlaW4gSmFocicsICdlaW5lbSBKYWhyJ10sXG4gICAgICAgICAgICB5eTogW251bWJlciArICcgSmFocmUnLCBudW1iZXIgKyAnIEphaHJlbiddLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG4gICAgfVxuXG4gICAgdmFyIGRlQ2ggPSBtb21lbnQuZGVmaW5lTG9jYWxlKCdkZS1jaCcsIHtcbiAgICAgICAgbW9udGhzOiAnSmFudWFyX0ZlYnJ1YXJfTcOkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnSmFuLl9GZWIuX03DpHJ6X0Fwci5fTWFpX0p1bmlfSnVsaV9BdWcuX1NlcC5fT2t0Ll9Ob3YuX0Rlei4nLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gICAgICAgIHdlZWtkYXlzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDoge1xuICAgICAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgICAgICBMVFM6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgICAgICAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgICAgICAgICBMTEw6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW2hldXRlIHVtXSBMVCBbVWhyXScsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICAgICAgbmV4dERheTogJ1ttb3JnZW4gdW1dIExUIFtVaHJdJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbZ2VzdGVybiB1bV0gTFQgW1Vocl0nLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdbbGV0enRlbl0gZGRkZCBbdW1dIExUIFtVaHJdJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgICAgICAgICBwYXN0OiAndm9yICVzJyxcbiAgICAgICAgICAgIHM6ICdlaW4gcGFhciBTZWt1bmRlbicsXG4gICAgICAgICAgICBzczogJyVkIFNla3VuZGVuJyxcbiAgICAgICAgICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgICAgICBtbTogJyVkIE1pbnV0ZW4nLFxuICAgICAgICAgICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgICAgIGhoOiAnJWQgU3R1bmRlbicsXG4gICAgICAgICAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICAgICAgZGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgICAgICAgICB3OiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICAgICAgd3c6ICclZCBXb2NoZW4nLFxuICAgICAgICAgICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICAgICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICAgICAgICAgIHl5OiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICAgICAgICBvcmRpbmFsOiAnJWQuJyxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlQ2g7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwibW9tZW50IiwicHJvY2Vzc1JlbGF0aXZlVGltZSIsIm51bWJlciIsIndpdGhvdXRTdWZmaXgiLCJrZXkiLCJpc0Z1dHVyZSIsImZvcm1hdCIsIm0iLCJoIiwiZCIsImRkIiwidyIsIk0iLCJNTSIsInkiLCJ5eSIsImRlQ2giLCJkZWZpbmVMb2NhbGUiLCJtb250aHMiLCJzcGxpdCIsIm1vbnRoc1Nob3J0IiwibW9udGhzUGFyc2VFeGFjdCIsIndlZWtkYXlzIiwid2Vla2RheXNTaG9ydCIsIndlZWtkYXlzTWluIiwid2Vla2RheXNQYXJzZUV4YWN0IiwibG9uZ0RhdGVGb3JtYXQiLCJMVCIsIkxUUyIsIkwiLCJMTCIsIkxMTCIsIkxMTEwiLCJjYWxlbmRhciIsInNhbWVEYXkiLCJzYW1lRWxzZSIsIm5leHREYXkiLCJuZXh0V2VlayIsImxhc3REYXkiLCJsYXN0V2VlayIsInJlbGF0aXZlVGltZSIsImZ1dHVyZSIsInBhc3QiLCJzIiwic3MiLCJtbSIsImhoIiwid3ciLCJkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIiwib3JkaW5hbCIsIndlZWsiLCJkb3ciLCJkb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/de-ch.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/de-ch.js");
/******/ 	
/******/ })()
;