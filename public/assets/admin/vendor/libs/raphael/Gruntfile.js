/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/vendor/libs/raphael/Gruntfile.js":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/libs/raphael/Gruntfile.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (grunt) {\n  var pkg = grunt.file.readJSON(\"package.json\"); // Project configuration.\n\n  grunt.initConfig({\n    // Metadata.\n    pkg: pkg,\n    banner: grunt.file.read(\"dev/copy.js\").replace(/@VERSION/, pkg.version),\n    // Task configuration.\n    uglify: {\n      options: {\n        banner: \"<%= banner %>\"\n      },\n      dist: {\n        src: \"<%= concat.dist.dest %>\",\n        dest: \"<%= pkg.name %>-min.js\"\n      },\n      nodeps: {\n        src: \"<%= concat.nodeps.dest %>\",\n        dest: \"<%= pkg.name %>-nodeps-min.js\"\n      }\n    },\n    replace: {\n      dist: {\n        options: {\n          patterns: [{\n            match: \"VERSION\",\n            replacement: \"<%= pkg.version %>\"\n          }]\n        },\n        files: [{\n          expand: true,\n          flatten: true,\n          src: [\"<%= concat.dist.dest %>\", \"<%= concat.nodeps.dest %>\"],\n          dest: \"./\"\n        }]\n      }\n    },\n    concat: {\n      dist: {\n        dest: \"<%= pkg.name %>.js\",\n        src: [\"dev/eve.js\", \"dev/raphael.core.js\", \"dev/raphael.svg.js\", \"dev/raphael.vml.js\", \"dev/raphael.amd.js\"]\n      },\n      nodeps: {\n        dest: \"<%= pkg.name %>-nodeps.js\",\n        src: [\"dev/raphael.core.js\", \"dev/raphael.svg.js\", \"dev/raphael.vml.js\", \"dev/raphael.amd.js\"]\n      }\n    }\n  }); // These plugins provide necessary tasks.\n\n  grunt.loadNpmTasks(\"grunt-contrib-concat\");\n  grunt.loadNpmTasks(\"grunt-contrib-uglify\");\n  grunt.loadNpmTasks(\"grunt-replace\"); // Default task.\n\n  grunt.registerTask(\"default\", [\"concat\", \"replace\", \"uglify\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9saWJzL3JhcGhhZWwvR3J1bnRmaWxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtFQUU3QixJQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxRQUFYLENBQW9CLGNBQXBCLENBQVYsQ0FGNkIsQ0FJN0I7O0VBQ0FILEtBQUssQ0FBQ0ksVUFBTixDQUFpQjtJQUNiO0lBQ0FILEdBQUcsRUFBRUEsR0FGUTtJQUdiSSxNQUFNLEVBQUVMLEtBQUssQ0FBQ0UsSUFBTixDQUFXSSxJQUFYLENBQWdCLGFBQWhCLEVBQStCQyxPQUEvQixDQUF1QyxVQUF2QyxFQUFtRE4sR0FBRyxDQUFDTyxPQUF2RCxDQUhLO0lBSWI7SUFDQUMsTUFBTSxFQUFFO01BQ0pDLE9BQU8sRUFBRTtRQUNMTCxNQUFNLEVBQUU7TUFESCxDQURMO01BSUpNLElBQUksRUFBRTtRQUNGQyxHQUFHLEVBQUUseUJBREg7UUFFRkMsSUFBSSxFQUFFO01BRkosQ0FKRjtNQVFKQyxNQUFNLEVBQUU7UUFDSkYsR0FBRyxFQUFFLDJCQUREO1FBRUpDLElBQUksRUFBRTtNQUZGO0lBUkosQ0FMSztJQWtCYk4sT0FBTyxFQUFFO01BQ0xJLElBQUksRUFBRTtRQUNGRCxPQUFPLEVBQUU7VUFDTEssUUFBUSxFQUFFLENBQUM7WUFDUEMsS0FBSyxFQUFFLFNBREE7WUFFUEMsV0FBVyxFQUFFO1VBRk4sQ0FBRDtRQURMLENBRFA7UUFPRkMsS0FBSyxFQUFFLENBQUM7VUFDSkMsTUFBTSxFQUFFLElBREo7VUFFSkMsT0FBTyxFQUFFLElBRkw7VUFHSlIsR0FBRyxFQUFFLENBQUMseUJBQUQsRUFBNEIsMkJBQTVCLENBSEQ7VUFJSkMsSUFBSSxFQUFFO1FBSkYsQ0FBRDtNQVBMO0lBREQsQ0FsQkk7SUFrQ2JRLE1BQU0sRUFBRTtNQUNKVixJQUFJLEVBQUU7UUFDRkUsSUFBSSxFQUFFLG9CQURKO1FBRUZELEdBQUcsRUFBRSxDQUNELFlBREMsRUFFRCxxQkFGQyxFQUdELG9CQUhDLEVBSUQsb0JBSkMsRUFLRCxvQkFMQztNQUZILENBREY7TUFXSkUsTUFBTSxFQUFFO1FBQ0pELElBQUksRUFBRSwyQkFERjtRQUVKRCxHQUFHLEVBQUUsQ0FDRCxxQkFEQyxFQUVELG9CQUZDLEVBR0Qsb0JBSEMsRUFJRCxvQkFKQztNQUZEO0lBWEo7RUFsQ0ssQ0FBakIsRUFMNkIsQ0E4RDdCOztFQUNBWixLQUFLLENBQUNzQixZQUFOLENBQW1CLHNCQUFuQjtFQUNBdEIsS0FBSyxDQUFDc0IsWUFBTixDQUFtQixzQkFBbkI7RUFDQXRCLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUIsZUFBbkIsRUFqRTZCLENBbUU3Qjs7RUFDQXRCLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixRQUF0QixDQUE5QjtBQUNILENBckVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvbGlicy9yYXBoYWVsL0dydW50ZmlsZS5qcz80NmNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdydW50KSB7XG5cbiAgICB2YXIgcGtnID0gZ3J1bnQuZmlsZS5yZWFkSlNPTihcInBhY2thZ2UuanNvblwiKTtcblxuICAgIC8vIFByb2plY3QgY29uZmlndXJhdGlvbi5cbiAgICBncnVudC5pbml0Q29uZmlnKHtcbiAgICAgICAgLy8gTWV0YWRhdGEuXG4gICAgICAgIHBrZzogcGtnLFxuICAgICAgICBiYW5uZXI6IGdydW50LmZpbGUucmVhZChcImRldi9jb3B5LmpzXCIpLnJlcGxhY2UoL0BWRVJTSU9OLywgcGtnLnZlcnNpb24pLFxuICAgICAgICAvLyBUYXNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgIHVnbGlmeToge1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhbm5lcjogXCI8JT0gYmFubmVyICU+XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXN0OiB7XG4gICAgICAgICAgICAgICAgc3JjOiBcIjwlPSBjb25jYXQuZGlzdC5kZXN0ICU+XCIsXG4gICAgICAgICAgICAgICAgZGVzdDogXCI8JT0gcGtnLm5hbWUgJT4tbWluLmpzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlcHM6IHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiPCU9IGNvbmNhdC5ub2RlcHMuZGVzdCAlPlwiLFxuICAgICAgICAgICAgICAgIGRlc3Q6IFwiPCU9IHBrZy5uYW1lICU+LW5vZGVwcy1taW4uanNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXBsYWNlOiB7XG4gICAgICAgICAgICBkaXN0OiB7XG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcIlZFUlNJT05cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBcIjwlPSBwa2cudmVyc2lvbiAlPlwiXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxlczogW3tcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IFtcIjwlPSBjb25jYXQuZGlzdC5kZXN0ICU+XCIsIFwiPCU9IGNvbmNhdC5ub2RlcHMuZGVzdCAlPlwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGVzdDogXCIuL1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uY2F0OiB7XG4gICAgICAgICAgICBkaXN0OiB7XG4gICAgICAgICAgICAgICAgZGVzdDogXCI8JT0gcGtnLm5hbWUgJT4uanNcIixcbiAgICAgICAgICAgICAgICBzcmM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXYvZXZlLmpzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2L3JhcGhhZWwuY29yZS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRldi9yYXBoYWVsLnN2Zy5qc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRldi9yYXBoYWVsLnZtbC5qc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRldi9yYXBoYWVsLmFtZC5qc1wiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVwczoge1xuICAgICAgICAgICAgICAgIGRlc3Q6IFwiPCU9IHBrZy5uYW1lICU+LW5vZGVwcy5qc1wiLFxuICAgICAgICAgICAgICAgIHNyYzogW1xuICAgICAgICAgICAgICAgICAgICBcImRldi9yYXBoYWVsLmNvcmUuanNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXYvcmFwaGFlbC5zdmcuanNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXYvcmFwaGFlbC52bWwuanNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXYvcmFwaGFlbC5hbWQuanNcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGhlc2UgcGx1Z2lucyBwcm92aWRlIG5lY2Vzc2FyeSB0YXNrcy5cbiAgICBncnVudC5sb2FkTnBtVGFza3MoXCJncnVudC1jb250cmliLWNvbmNhdFwiKTtcbiAgICBncnVudC5sb2FkTnBtVGFza3MoXCJncnVudC1jb250cmliLXVnbGlmeVwiKTtcbiAgICBncnVudC5sb2FkTnBtVGFza3MoXCJncnVudC1yZXBsYWNlXCIpO1xuXG4gICAgLy8gRGVmYXVsdCB0YXNrLlxuICAgIGdydW50LnJlZ2lzdGVyVGFzayhcImRlZmF1bHRcIiwgW1wiY29uY2F0XCIsIFwicmVwbGFjZVwiLCBcInVnbGlmeVwiXSk7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJncnVudCIsInBrZyIsImZpbGUiLCJyZWFkSlNPTiIsImluaXRDb25maWciLCJiYW5uZXIiLCJyZWFkIiwicmVwbGFjZSIsInZlcnNpb24iLCJ1Z2xpZnkiLCJvcHRpb25zIiwiZGlzdCIsInNyYyIsImRlc3QiLCJub2RlcHMiLCJwYXR0ZXJucyIsIm1hdGNoIiwicmVwbGFjZW1lbnQiLCJmaWxlcyIsImV4cGFuZCIsImZsYXR0ZW4iLCJjb25jYXQiLCJsb2FkTnBtVGFza3MiLCJyZWdpc3RlclRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/vendor/libs/raphael/Gruntfile.js\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/vendor/libs/raphael/Gruntfile.js");
/******/ 	
/******/ })()
;