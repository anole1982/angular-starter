webpackJsonpac__name_([1],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_module__ = __webpack_require__(417);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return __WEBPACK_IMPORTED_MODULE_0__demo_module__["a"]; });



/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);


/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`Detail` component loaded asynchronously');
let DemoComponent = class DemoComponent {
    ngOnInit() {
        console.log('hello `Demo` component');
    }
};
DemoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
        selector: 'demo',
        template: `
    <h1>Demo</h1>
    <span>
      <a [routerLink]=" ['./indexeddb'] ">
        indexedDB
      </a>
    </span>
    
    <span>
      <a [routerLink]=" ['./webrtc'] ">
        webrtc
      </a>
    </span>
    <span>
      <a [routerLink]=" ['./location'] ">
        geolocation
      </a>
    </span>
    <span>
      <a [routerLink]=" ['./crypto'] ">
        crypto
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
    })
], DemoComponent);



/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_routes__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_component__ = __webpack_require__(394);







console.log('`Detail` bundle loaded asynchronously');
let DemoModule = class DemoModule {
};
DemoModule.routes = __WEBPACK_IMPORTED_MODULE_5__demo_routes__["a" /* routes */];
DemoModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
        declarations: [
            /**
             * Components / Directives/ Pipes
             */
            __WEBPACK_IMPORTED_MODULE_6__demo_component__["a" /* DemoComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__demo_routes__["a" /* routes */]),
        ],
    })
], DemoModule);



/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_component__ = __webpack_require__(394);

const routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__demo_component__["a" /* DemoComponent */] },
            { path: 'indexeddb', loadChildren: function() { return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 405))  .then( function(module) { return module['IndexedDBModule']; } ); } },
            { path: 'location', loadChildren: function() { return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 411))  .then( function(module) { return module['LocationModule']; } ); } },
            { path: 'webrtc', loadChildren: function() { return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 414))  .then( function(module) { return module['WebrtcModule']; } ); } },
            { path: 'crypto', loadChildren: function() { return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 404))  .then( function(module) { return module['CryptoModule']; } ); } }
        ] }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ })

});
//# sourceMappingURL=1.chunk.js.map