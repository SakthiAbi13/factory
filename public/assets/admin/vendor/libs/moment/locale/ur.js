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

/***/ "./resources/assets/vendor/libs/moment/locale/ur.js":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/libs/moment/locale/ur.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n//! moment.js locale configuration\n//! locale : Urdu [ur]\n//! author : Sawood Alam : https://github.com/ibnesayeed\n//! author : Zack : https://github.com/ZackVision\n;\n\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' && \"function\" === 'function' ? factory(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../moment'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n})(this, function (moment) {\n  'use strict'; //! moment.js locale configuration\n\n  var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],\n      days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];\n  var ur = moment.defineLocale('ur', {\n    months: months,\n    monthsShort: months,\n    weekdays: days,\n    weekdaysShort: days,\n    weekdaysMin: days,\n    longDateFormat: {\n      LT: 'HH:mm',\n      LTS: 'HH:mm:ss',\n      L: 'DD/MM/YYYY',\n      LL: 'D MMMM YYYY',\n      LLL: 'D MMMM YYYY HH:mm',\n      LLLL: 'dddd، D MMMM YYYY HH:mm'\n    },\n    meridiemParse: /صبح|شام/,\n    isPM: function isPM(input) {\n      return 'شام' === input;\n    },\n    meridiem: function meridiem(hour, minute, isLower) {\n      if (hour < 12) {\n        return 'صبح';\n      }\n\n      return 'شام';\n    },\n    calendar: {\n      sameDay: '[آج بوقت] LT',\n      nextDay: '[کل بوقت] LT',\n      nextWeek: 'dddd [بوقت] LT',\n      lastDay: '[گذشتہ روز بوقت] LT',\n      lastWeek: '[گذشتہ] dddd [بوقت] LT',\n      sameElse: 'L'\n    },\n    relativeTime: {\n      future: '%s بعد',\n      past: '%s قبل',\n      s: 'چند سیکنڈ',\n      ss: '%d سیکنڈ',\n      m: 'ایک منٹ',\n      mm: '%d منٹ',\n      h: 'ایک گھنٹہ',\n      hh: '%d گھنٹے',\n      d: 'ایک دن',\n      dd: '%d دن',\n      M: 'ایک ماہ',\n      MM: '%d ماہ',\n      y: 'ایک سال',\n      yy: '%d سال'\n    },\n    preparse: function preparse(string) {\n      return string.replace(/،/g, ',');\n    },\n    postformat: function postformat(string) {\n      return string.replace(/,/g, '،');\n    },\n    week: {\n      dow: 1,\n      // Monday is the first day of the week.\n      doy: 4 // The week that contains Jan 4th is the first week of the year.\n\n    }\n  });\n  return ur;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL21vbWVudC9sb2NhbGUvdXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFFLFdBQVVBLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTJCO0VBQzFCLHNCQUFPQyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLGFBQWtCLFdBQWpELElBQ08sZUFBbUIsVUFEMUIsR0FDdUNELE9BQU8sQ0FBQ0csbUJBQU8sQ0FBQyx3SUFBRCxDQUFSLENBRDlDLEdBRUEsUUFBNkNDLGlDQUFPLENBQUMsd0lBQUQsQ0FBRCxvQ0FBZ0JKLE9BQWhCO0FBQUE7QUFBQTtBQUFBLGtHQUFuRCxHQUNBQSxDQUhBO0FBSUYsQ0FMQyxFQUtBLElBTEEsRUFLTyxVQUFVTSxNQUFWLEVBQWtCO0VBQUUsYUFBRixDQUV2Qjs7RUFFQSxJQUFJQyxNQUFNLEdBQUcsQ0FDTCxPQURLLEVBRUwsT0FGSyxFQUdMLE1BSEssRUFJTCxPQUpLLEVBS0wsS0FMSyxFQU1MLEtBTkssRUFPTCxRQVBLLEVBUUwsTUFSSyxFQVNMLE9BVEssRUFVTCxRQVZLLEVBV0wsT0FYSyxFQVlMLE9BWkssQ0FBYjtFQUFBLElBY0lDLElBQUksR0FBRyxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLE1BQTFDLEVBQWtELE1BQWxELENBZFg7RUFnQkEsSUFBSUMsRUFBRSxHQUFHSCxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEI7SUFDL0JILE1BQU0sRUFBRUEsTUFEdUI7SUFFL0JJLFdBQVcsRUFBRUosTUFGa0I7SUFHL0JLLFFBQVEsRUFBRUosSUFIcUI7SUFJL0JLLGFBQWEsRUFBRUwsSUFKZ0I7SUFLL0JNLFdBQVcsRUFBRU4sSUFMa0I7SUFNL0JPLGNBQWMsRUFBRTtNQUNaQyxFQUFFLEVBQUUsT0FEUTtNQUVaQyxHQUFHLEVBQUUsVUFGTztNQUdaQyxDQUFDLEVBQUUsWUFIUztNQUlaQyxFQUFFLEVBQUUsYUFKUTtNQUtaQyxHQUFHLEVBQUUsbUJBTE87TUFNWkMsSUFBSSxFQUFFO0lBTk0sQ0FOZTtJQWMvQkMsYUFBYSxFQUFFLFNBZGdCO0lBZS9CQyxJQUFJLEVBQUUsY0FBVUMsS0FBVixFQUFpQjtNQUNuQixPQUFPLFVBQVVBLEtBQWpCO0lBQ0gsQ0FqQjhCO0lBa0IvQkMsUUFBUSxFQUFFLGtCQUFVQyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QkMsT0FBeEIsRUFBaUM7TUFDdkMsSUFBSUYsSUFBSSxHQUFHLEVBQVgsRUFBZTtRQUNYLE9BQU8sS0FBUDtNQUNIOztNQUNELE9BQU8sS0FBUDtJQUNILENBdkI4QjtJQXdCL0JHLFFBQVEsRUFBRTtNQUNOQyxPQUFPLEVBQUUsY0FESDtNQUVOQyxPQUFPLEVBQUUsY0FGSDtNQUdOQyxRQUFRLEVBQUUsZ0JBSEo7TUFJTkMsT0FBTyxFQUFFLHFCQUpIO01BS05DLFFBQVEsRUFBRSx3QkFMSjtNQU1OQyxRQUFRLEVBQUU7SUFOSixDQXhCcUI7SUFnQy9CQyxZQUFZLEVBQUU7TUFDVkMsTUFBTSxFQUFFLFFBREU7TUFFVkMsSUFBSSxFQUFFLFFBRkk7TUFHVkMsQ0FBQyxFQUFFLFdBSE87TUFJVkMsRUFBRSxFQUFFLFVBSk07TUFLVkMsQ0FBQyxFQUFFLFNBTE87TUFNVkMsRUFBRSxFQUFFLFFBTk07TUFPVkMsQ0FBQyxFQUFFLFdBUE87TUFRVkMsRUFBRSxFQUFFLFVBUk07TUFTVkMsQ0FBQyxFQUFFLFFBVE87TUFVVkMsRUFBRSxFQUFFLE9BVk07TUFXVkMsQ0FBQyxFQUFFLFNBWE87TUFZVkMsRUFBRSxFQUFFLFFBWk07TUFhVkMsQ0FBQyxFQUFFLFNBYk87TUFjVkMsRUFBRSxFQUFFO0lBZE0sQ0FoQ2lCO0lBZ0QvQkMsUUFBUSxFQUFFLGtCQUFVQyxNQUFWLEVBQWtCO01BQ3hCLE9BQU9BLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLElBQWYsRUFBcUIsR0FBckIsQ0FBUDtJQUNILENBbEQ4QjtJQW1EL0JDLFVBQVUsRUFBRSxvQkFBVUYsTUFBVixFQUFrQjtNQUMxQixPQUFPQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLENBQVA7SUFDSCxDQXJEOEI7SUFzRC9CRSxJQUFJLEVBQUU7TUFDRkMsR0FBRyxFQUFFLENBREg7TUFDTTtNQUNSQyxHQUFHLEVBQUUsQ0FGSCxDQUVNOztJQUZOO0VBdER5QixDQUExQixDQUFUO0VBNERBLE9BQU9oRCxFQUFQO0FBRUgsQ0F2RkMsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2xpYnMvbW9tZW50L2xvY2FsZS91ci5qcz81YzkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBVcmR1IFt1cl1cbi8vISBhdXRob3IgOiBTYXdvb2QgQWxhbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pYm5lc2F5ZWVkXG4vLyEgYXV0aG9yIDogWmFjayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9aYWNrVmlzaW9uXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyBmYWN0b3J5KHJlcXVpcmUoJy4uL21vbWVudCcpKSA6XG4gICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWycuLi9tb21lbnQnXSwgZmFjdG9yeSkgOlxuICAgZmFjdG9yeShnbG9iYWwubW9tZW50KVxufSh0aGlzLCAoZnVuY3Rpb24gKG1vbWVudCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICAvLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG5cbiAgICB2YXIgbW9udGhzID0gW1xuICAgICAgICAgICAgJ9is2YbZiNix24wnLFxuICAgICAgICAgICAgJ9mB2LHZiNix24wnLFxuICAgICAgICAgICAgJ9mF2KfYsdqGJyxcbiAgICAgICAgICAgICfYp9m+2LHbjNmEJyxcbiAgICAgICAgICAgICfZhdim24wnLFxuICAgICAgICAgICAgJ9is2YjZhicsXG4gICAgICAgICAgICAn2KzZiNmE2KfYptuMJyxcbiAgICAgICAgICAgICfYp9qv2LPYqicsXG4gICAgICAgICAgICAn2LPYqtmF2KjYsScsXG4gICAgICAgICAgICAn2Kfaqdiq2YjYqNixJyxcbiAgICAgICAgICAgICfZhtmI2YXYqNixJyxcbiAgICAgICAgICAgICfYr9iz2YXYqNixJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF5cyA9IFsn2KfYqtmI2KfYsScsICfZvtuM2LEnLCAn2YXZhtqv2YQnLCAn2KjYr9q+JywgJ9is2YXYudix2KfYqicsICfYrNmF2LnbgScsICfbgdmB2KrbgSddO1xuXG4gICAgdmFyIHVyID0gbW9tZW50LmRlZmluZUxvY2FsZSgndXInLCB7XG4gICAgICAgIG1vbnRoczogbW9udGhzLFxuICAgICAgICBtb250aHNTaG9ydDogbW9udGhzLFxuICAgICAgICB3ZWVrZGF5czogZGF5cyxcbiAgICAgICAgd2Vla2RheXNTaG9ydDogZGF5cyxcbiAgICAgICAgd2Vla2RheXNNaW46IGRheXMsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICAgICAgTExMTDogJ2RkZGTYjCBEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IC/Ytdio2K182LTYp9mFLyxcbiAgICAgICAgaXNQTTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gJ9i02KfZhScgPT09IGlucHV0O1xuICAgICAgICB9LFxuICAgICAgICBtZXJpZGllbTogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAn2LXYqNitJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAn2LTYp9mFJztcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdb2KLYrCDYqNmI2YLYql0gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1vaqdmEINio2YjZgtiqXSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ2RkZGQgW9io2YjZgtiqXSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW9qv2LDYtNiq24Eg2LHZiNiyINio2YjZgtiqXSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlazogJ1var9iw2LTYqtuBXSBkZGRkIFvYqNmI2YLYql0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2U6ICdMJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgICAgICBmdXR1cmU6ICclcyDYqNi52K8nLFxuICAgICAgICAgICAgcGFzdDogJyVzINmC2KjZhCcsXG4gICAgICAgICAgICBzOiAn2obZhtivINiz24zaqdmG2ognLFxuICAgICAgICAgICAgc3M6ICclZCDYs9uM2qnZhtqIJyxcbiAgICAgICAgICAgIG06ICfYp9uM2qkg2YXZhtm5JyxcbiAgICAgICAgICAgIG1tOiAnJWQg2YXZhtm5JyxcbiAgICAgICAgICAgIGg6ICfYp9uM2qkg2q/avtmG2bnbgScsXG4gICAgICAgICAgICBoaDogJyVkINqv2r7Zhtm525InLFxuICAgICAgICAgICAgZDogJ9in24zaqSDYr9mGJyxcbiAgICAgICAgICAgIGRkOiAnJWQg2K/ZhicsXG4gICAgICAgICAgICBNOiAn2KfbjNqpINmF2KfbgScsXG4gICAgICAgICAgICBNTTogJyVkINmF2KfbgScsXG4gICAgICAgICAgICB5OiAn2KfbjNqpINiz2KfZhCcsXG4gICAgICAgICAgICB5eTogJyVkINiz2KfZhCcsXG4gICAgICAgIH0sXG4gICAgICAgIHByZXBhcnNlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL9iML2csICcsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3Rmb3JtYXQ6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvLC9nLCAn2IwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2Vlazoge1xuICAgICAgICAgICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgICAgIGRveTogNCwgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVyO1xuXG59KSkpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsIm1vbWVudCIsIm1vbnRocyIsImRheXMiLCJ1ciIsImRlZmluZUxvY2FsZSIsIm1vbnRoc1Nob3J0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsIm1lcmlkaWVtUGFyc2UiLCJpc1BNIiwiaW5wdXQiLCJtZXJpZGllbSIsImhvdXIiLCJtaW51dGUiLCJpc0xvd2VyIiwiY2FsZW5kYXIiLCJzYW1lRGF5IiwibmV4dERheSIsIm5leHRXZWVrIiwibGFzdERheSIsImxhc3RXZWVrIiwic2FtZUVsc2UiLCJyZWxhdGl2ZVRpbWUiLCJmdXR1cmUiLCJwYXN0IiwicyIsInNzIiwibSIsIm1tIiwiaCIsImhoIiwiZCIsImRkIiwiTSIsIk1NIiwieSIsInl5IiwicHJlcGFyc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwicG9zdGZvcm1hdCIsIndlZWsiLCJkb3ciLCJkb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/moment/locale/ur.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/moment/locale/ur.js");
/******/ 	
/******/ })()
;