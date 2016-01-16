/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/platform/browser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var core_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var app_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var http_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/http\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	browser_1.bootstrap(app_1.app, [router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
	/**
	 * Created by asacarrington on 15/01/2016.
	 */
	//# sourceMappingURL=boot.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var router_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rxjs/add/operator/map\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var app = (function () {
	    function app() {
	        this.title = "User Direfsdfsgfdgdfgdfgfdgfdgdgdgdgdfgdfgfdctory";
	    }
	    app = __decorate([
	        core_1.Component({
	            selector: "app",
	            templateUrl: "/app/app.html",
	            directives: [router_1.ROUTER_DIRECTIVES]
	        })
	    ], app);
	    return app;
	})();
	exports.app = app;
	//# sourceMappingURL=app.js.map

/***/ }
/******/ ]);