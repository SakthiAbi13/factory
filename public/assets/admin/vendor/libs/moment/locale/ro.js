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

/***/ "./resources/assets/vendor/libs/moment/locale/ro.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/ro.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Romanian [ro]\n//! author : Vlad Gurdiga : https://github.com/gurdiga\n//! author : Valentin Agachi : https://github.com/avaly\n//! author : Emanuel Cepoi : https://github.com/cepem\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  function relativeTimeWithPlural(number, withoutSuffix, key) {\n    var format = {\n      ss: 'secunde',\n      mm: 'minute',\n      hh: 'ore',\n      dd: 'zile',\n      ww: 'săptămâni',\n      MM: 'luni',\n      yy: 'ani'\n    },\n        separator = ' ';\n\n    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {\n      separator = ' de ';\n    }\n\n    return number + separator + format[key];\n  }\n\n  var ro = moment.defineLocale('ro', {\n    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),\n    monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),\n    monthsParseExact: true,\n    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),\n    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),\n    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),\n    longDateFormat: {\n      LT: 'H:mm',\n      LTS: 'H:mm:ss',\n      L: 'DD.MM.YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY H:mm',\n      LLLL: 'dddd, D MMMM YYYY H:mm'\n    },\n    calendar: {\n      sameDay: '[azi la] LT',\n      nextDay: '[mâine la] LT',\n      nextWeek: 'dddd [la] LT',\n      lastDay: '[ieri la] LT',\n      lastWeek: '[fosta] dddd [la] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: 'peste %s',\n      past: '%s în urmă',\n      s: 'câteva secunde',\n      ss: relativeTimeWithPlural,\n      m: 'un minut',\n      mm: relativeTimeWithPlural,\n      h: 'o oră',\n      hh: relativeTimeWithPlural,\n      d: 'o zi',\n      dd: relativeTimeWithPlural,\n      w: 'o săptămână',\n      ww: relativeTimeWithPlural,\n      M: 'o lună',\n      MM: relativeTimeWithPlural,\n      y: 'un an',\n      yy: relativeTimeWithPlural\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 7 // The week that contains Jan 7th is the first week of the year.\n\n    }\n  });\n  return ro;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvcm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUUsV0FBVUEsTUFBVixFQUFrQkMsT0FBbEIsRUFBMkI7RUFDMUIsc0JBQU9DLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsYUFBa0IsV0FBakQsSUFDTyxlQUFtQixVQUQxQixHQUN1Q0QsT0FBTyxDQUFDRyxtQkFBTyxDQUFDLHdJQUFELENBQVIsQ0FEOUMsR0FFQSxRQUE2Q0MsaUNBQU8sQ0FBQyx3SUFBRCxDQUFELG9DQUFnQkosT0FBaEI7QUFBQTtBQUFBO0FBQUEsa0dBQW5ELEdBQ0FBLENBSEE7QUFJRixDQUxDLEVBS0EsSUFMQSxFQUtPLFVBQVVNLE1BQVYsRUFBa0I7RUFBRSxhQUFGLENBRXZCOztFQUVBLFNBQVNDLHNCQUFULENBQWdDQyxNQUFoQyxFQUF3Q0MsYUFBeEMsRUFBdURDLEdBQXZELEVBQTREO0lBQ3hELElBQUlDLE1BQU0sR0FBRztNQUNMQyxFQUFFLEVBQUUsU0FEQztNQUVMQyxFQUFFLEVBQUUsUUFGQztNQUdMQyxFQUFFLEVBQUUsS0FIQztNQUlMQyxFQUFFLEVBQUUsTUFKQztNQUtMQyxFQUFFLEVBQUUsV0FMQztNQU1MQyxFQUFFLEVBQUUsTUFOQztNQU9MQyxFQUFFLEVBQUU7SUFQQyxDQUFiO0lBQUEsSUFTSUMsU0FBUyxHQUFHLEdBVGhCOztJQVVBLElBQUlYLE1BQU0sR0FBRyxHQUFULElBQWdCLEVBQWhCLElBQXVCQSxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxHQUFHLEdBQVQsS0FBaUIsQ0FBN0QsRUFBaUU7TUFDN0RXLFNBQVMsR0FBRyxNQUFaO0lBQ0g7O0lBQ0QsT0FBT1gsTUFBTSxHQUFHVyxTQUFULEdBQXFCUixNQUFNLENBQUNELEdBQUQsQ0FBbEM7RUFDSDs7RUFFRCxJQUFJVSxFQUFFLEdBQUdkLE1BQU0sQ0FBQ2UsWUFBUCxDQUFvQixJQUFwQixFQUEwQjtJQUMvQkMsTUFBTSxFQUFFLG9HQUFvR0MsS0FBcEcsQ0FDSixHQURJLENBRHVCO0lBSS9CQyxXQUFXLEVBQUUsK0RBQStERCxLQUEvRCxDQUNULEdBRFMsQ0FKa0I7SUFPL0JFLGdCQUFnQixFQUFFLElBUGE7SUFRL0JDLFFBQVEsRUFBRSxrREFBa0RILEtBQWxELENBQXdELEdBQXhELENBUnFCO0lBUy9CSSxhQUFhLEVBQUUsOEJBQThCSixLQUE5QixDQUFvQyxHQUFwQyxDQVRnQjtJQVUvQkssV0FBVyxFQUFFLHVCQUF1QkwsS0FBdkIsQ0FBNkIsR0FBN0IsQ0FWa0I7SUFXL0JNLGNBQWMsRUFBRTtNQUNaQyxFQUFFLEVBQUUsTUFEUTtNQUVaQyxHQUFHLEVBQUUsU0FGTztNQUdaQyxDQUFDLEVBQUUsWUFIUztNQUlaQyxFQUFFLEVBQUUsYUFKUTtNQUtaQyxHQUFHLEVBQUUsa0JBTE87TUFNWkMsSUFBSSxFQUFFO0lBTk0sQ0FYZTtJQW1CL0JDLFFBQVEsRUFBRTtNQUNOQyxPQUFPLEVBQUUsYUFESDtNQUVOQyxPQUFPLEVBQUUsZUFGSDtNQUdOQyxRQUFRLEVBQUUsY0FISjtNQUlOQyxPQUFPLEVBQUUsY0FKSDtNQUtOQyxRQUFRLEVBQUUsc0JBTEo7TUFNTkMsUUFBUSxFQUFFO0lBTkosQ0FuQnFCO0lBMkIvQkMsWUFBWSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxVQURFO01BRVZDLElBQUksRUFBRSxZQUZJO01BR1ZDLENBQUMsRUFBRSxnQkFITztNQUlWbEMsRUFBRSxFQUFFTCxzQkFKTTtNQUtWd0MsQ0FBQyxFQUFFLFVBTE87TUFNVmxDLEVBQUUsRUFBRU4sc0JBTk07TUFPVnlDLENBQUMsRUFBRSxPQVBPO01BUVZsQyxFQUFFLEVBQUVQLHNCQVJNO01BU1YwQyxDQUFDLEVBQUUsTUFUTztNQVVWbEMsRUFBRSxFQUFFUixzQkFWTTtNQVdWMkMsQ0FBQyxFQUFFLGFBWE87TUFZVmxDLEVBQUUsRUFBRVQsc0JBWk07TUFhVjRDLENBQUMsRUFBRSxRQWJPO01BY1ZsQyxFQUFFLEVBQUVWLHNCQWRNO01BZVY2QyxDQUFDLEVBQUUsT0FmTztNQWdCVmxDLEVBQUUsRUFBRVg7SUFoQk0sQ0EzQmlCO0lBNkMvQjhDLElBQUksRUFBRTtNQUNGQyxHQUFHLEVBQUUsQ0FESDtNQUNNO01BQ1JDLEdBQUcsRUFBRSxDQUZILENBRU07O0lBRk47RUE3Q3lCLENBQTFCLENBQVQ7RUFtREEsT0FBT25DLEVBQVA7QUFFSCxDQS9FQyxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9tb21lbnQvbG9jYWxlL3JvLmpzPzUzZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFJvbWFuaWFuIFtyb11cbi8vISBhdXRob3IgOiBWbGFkIEd1cmRpZ2EgOiBodHRwczovL2dpdGh1Yi5jb20vZ3VyZGlnYVxuLy8hIGF1dGhvciA6IFZhbGVudGluIEFnYWNoaSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdmFseVxuLy8hIGF1dGhvciA6IEVtYW51ZWwgQ2Vwb2kgOiBodHRwczovL2dpdGh1Yi5jb20vY2VwZW1cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgICAgICAgICBzczogJ3NlY3VuZGUnLFxuICAgICAgICAgICAgICAgIG1tOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICBoaDogJ29yZScsXG4gICAgICAgICAgICAgICAgZGQ6ICd6aWxlJyxcbiAgICAgICAgICAgICAgICB3dzogJ3PEg3B0xINtw6JuaScsXG4gICAgICAgICAgICAgICAgTU06ICdsdW5pJyxcbiAgICAgICAgICAgICAgICB5eTogJ2FuaScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VwYXJhdG9yID0gJyAnO1xuICAgICAgICBpZiAobnVtYmVyICUgMTAwID49IDIwIHx8IChudW1iZXIgPj0gMTAwICYmIG51bWJlciAlIDEwMCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHNlcGFyYXRvciA9ICcgZGUgJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtYmVyICsgc2VwYXJhdG9yICsgZm9ybWF0W2tleV07XG4gICAgfVxuXG4gICAgdmFyIHJvID0gbW9tZW50LmRlZmluZUxvY2FsZSgncm8nLCB7XG4gICAgICAgIG1vbnRoczogJ2lhbnVhcmllX2ZlYnJ1YXJpZV9tYXJ0aWVfYXByaWxpZV9tYWlfaXVuaWVfaXVsaWVfYXVndXN0X3NlcHRlbWJyaWVfb2N0b21icmllX25vaWVtYnJpZV9kZWNlbWJyaWUnLnNwbGl0KFxuICAgICAgICAgICAgJ18nXG4gICAgICAgICksXG4gICAgICAgIG1vbnRoc1Nob3J0OiAnaWFuLl9mZWIuX21hcnQuX2Fwci5fbWFpX2l1bi5faXVsLl9hdWcuX3NlcHQuX29jdC5fbm92Ll9kZWMuJy5zcGxpdChcbiAgICAgICAgICAgICdfJ1xuICAgICAgICApLFxuICAgICAgICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICAgICAgICB3ZWVrZGF5czogJ2R1bWluaWPEg19sdW5pX21hcsibaV9taWVyY3VyaV9qb2lfdmluZXJpX3PDom1ixIN0xIMnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICdEdW1fTHVuX01hcl9NaWVfSm9pX1Zpbl9Tw6JtJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ0R1X0x1X01hX01pX0pvX1ZpX1PDoicuc3BsaXQoJ18nKSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSDptbScsXG4gICAgICAgICAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyOiB7XG4gICAgICAgICAgICBzYW1lRGF5OiAnW2F6aSBsYV0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1ttw6JpbmUgbGFdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiAnZGRkZCBbbGFdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdbaWVyaSBsYV0gTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgICAgIGZ1dHVyZTogJ3Blc3RlICVzJyxcbiAgICAgICAgICAgIHBhc3Q6ICclcyDDrm4gdXJtxIMnLFxuICAgICAgICAgICAgczogJ2PDonRldmEgc2VjdW5kZScsXG4gICAgICAgICAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIG06ICd1biBtaW51dCcsXG4gICAgICAgICAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIGg6ICdvIG9yxIMnLFxuICAgICAgICAgICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgICAgICBkOiAnbyB6aScsXG4gICAgICAgICAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIHc6ICdvIHPEg3B0xINtw6JuxIMnLFxuICAgICAgICAgICAgd3c6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgICAgICBNOiAnbyBsdW7EgycsXG4gICAgICAgICAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIHk6ICd1biBhbicsXG4gICAgICAgICAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNywgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gN3RoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIm1vbWVudCIsInJlbGF0aXZlVGltZVdpdGhQbHVyYWwiLCJudW1iZXIiLCJ3aXRob3V0U3VmZml4Iiwia2V5IiwiZm9ybWF0Iiwic3MiLCJtbSIsImhoIiwiZGQiLCJ3dyIsIk1NIiwieXkiLCJzZXBhcmF0b3IiLCJybyIsImRlZmluZUxvY2FsZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJtb250aHNQYXJzZUV4YWN0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImNhbGVuZGFyIiwic2FtZURheSIsIm5leHREYXkiLCJuZXh0V2VlayIsImxhc3REYXkiLCJsYXN0V2VlayIsInNhbWVFbHNlIiwicmVsYXRpdmVUaW1lIiwiZnV0dXJlIiwicGFzdCIsInMiLCJtIiwiaCIsImQiLCJ3IiwiTSIsInkiLCJ3ZWVrIiwiZG93IiwiZG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/ro.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/ro.js");
/******/ 	
/******/ })()
;