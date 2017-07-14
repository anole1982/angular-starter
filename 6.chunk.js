webpackJsonpac__name_([6],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__(391);



console.log('`Geo location` component loaded asynchronously');
let LocationComponent = class LocationComponent {
    constructor(positionService) {
        this.positionService = positionService;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    ngOnInit() {
        this.positionService.watchPosition(this.options).then((pos) => {
            this.position = pos;
        });
        this.positionService.getCurrentPosition(this.options).then((pos) => {
            this.positioni = pos;
        });
    }
};
LocationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
        selector: 'indexeddb',
        template: `
    <h1>single page of current geolocation </h1>
    <div>timestamp:{{positioni.timestamp}}</div>
    <div>accuracy:{{positioni.coords.accuracy}}</div>
    <div>altitude:{{positioni.coords.altitude}}</div>
    <div>latitude:{{positioni.coords.latitude}}</div>
    <div>longitude:{{positioni.coords.longitude}}</div>
    <div>speed:{{positioni.coords.speed}}</div>
    <div>altitudeAccuracy:{{positioni.coords.altitudeAccuracy}}</div>
    <h1>single page of static geolocation </h1>
    <div>timestamp:{{position.timestamp}}</div>
    <div>accuracy:{{position.coords.accuracy}}</div>
    <div>altitude:{{position.coords.altitude}}</div>
    <div>latitude:{{position.coords.latitude}}</div>
    <div>longitude:{{position.coords.longitude}}</div>
    <div>speed:{{position.coords.speed}}</div>
    <div>altitudeAccuracy:{{position.coords.altitudeAccuracy}}</div>
  `
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__location_service__["a" /* PositionService */]])
], LocationComponent);



/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);


let PositionService = class PositionService {
    constructor() {
        this.geolocation = window.navigator.geolocation;
    }
    getCurrentPosition(options) {
        return new Promise((resolve, reject) => {
            if (!this.geolocation || !this.geolocation.getCurrentPosition) {
                return reject(new Error('Geolocation not supported!'));
            }
            this.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }
    watchPosition(options) {
        return new Promise((resolve, reject) => {
            if (!this.geolocation || !this.geolocation.watchPosition) {
                return reject(new Error('Geolocation not supported!'));
            }
            this.watchId = this.geolocation.watchPosition(resolve, reject, options);
        });
    }
    clearWatch() {
        this.geolocation.clearWatch(this.watchId);
    }
};
PositionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], PositionService);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_routes__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_service__ = __webpack_require__(391);








console.log('`Person CURD` bundle loaded asynchronously');
let LocationModule = class LocationModule {
};
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



/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_component__ = __webpack_require__(390);

const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__location_component__["a" /* LocationComponent */], pathMatch: 'full' },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ })

});
//# sourceMappingURL=6.chunk.js.map