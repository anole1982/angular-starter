webpackJsonpac__name_([6],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__(391);



console.log('`Geo location` component loaded asynchronously');
var LocationComponent = (function () {
    function LocationComponent(positionService) {
        this.positionService = positionService;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionService.watchPosition(this.options).then(function (pos) {
            _this.position = pos;
        });
        this.positionService.getCurrentPosition(this.options).then(function (pos) {
            _this.positioni = pos;
        });
    };
    LocationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'indexeddb',
            template: "\n    <h1>single page of current geolocation </h1>\n    <div>timestamp:{{positioni.timestamp}}</div>\n    <div>accuracy:{{positioni.coords.accuracy}}</div>\n    <div>altitude:{{positioni.coords.altitude}}</div>\n    <div>latitude:{{positioni.coords.latitude}}</div>\n    <div>longitude:{{positioni.coords.longitude}}</div>\n    <div>speed:{{positioni.coords.speed}}</div>\n    <div>altitudeAccuracy:{{positioni.coords.altitudeAccuracy}}</div>\n    <h1>single page of static geolocation </h1>\n    <div>timestamp:{{position.timestamp}}</div>\n    <div>accuracy:{{position.coords.accuracy}}</div>\n    <div>altitude:{{position.coords.altitude}}</div>\n    <div>latitude:{{position.coords.latitude}}</div>\n    <div>longitude:{{position.coords.longitude}}</div>\n    <div>speed:{{position.coords.speed}}</div>\n    <div>altitudeAccuracy:{{position.coords.altitudeAccuracy}}</div>\n  "
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* PositionService */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);


var PositionService = (function () {
    function PositionService() {
        this.geolocation = window.navigator.geolocation;
    }
    PositionService.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.geolocation || !_this.geolocation.getCurrentPosition) {
                return reject(new Error('Geolocation not supported!'));
            }
            _this.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };
    PositionService.prototype.watchPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.geolocation || !_this.geolocation.watchPosition) {
                return reject(new Error('Geolocation not supported!'));
            }
            _this.watchId = _this.geolocation.watchPosition(resolve, reject, options);
        });
    };
    PositionService.prototype.clearWatch = function () {
        this.geolocation.clearWatch(this.watchId);
    };
    PositionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_module__ = __webpack_require__(412);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModule", function() { return __WEBPACK_IMPORTED_MODULE_0__location_module__["a"]; });



/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_routes__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_service__ = __webpack_require__(391);








console.log('`Person CURD` bundle loaded asynchronously');
var LocationModule = (function () {
    function LocationModule() {
    }
    LocationModule.routes = __WEBPACK_IMPORTED_MODULE_5__location_routes__["a" /* routes */];
    LocationModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__location_component__["a" /* LocationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__location_routes__["a" /* routes */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__location_service__["a" /* PositionService */]
            ]
        })
    ], LocationModule);
    return LocationModule;
}());



/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_component__ = __webpack_require__(390);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__location_component__["a" /* LocationComponent */], pathMatch: 'full' },
];


/***/ })

});
//# sourceMappingURL=6.chunk.js.map