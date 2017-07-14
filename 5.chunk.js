webpackJsonp([5],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebrtcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webrtc_service__ = __webpack_require__(393);



console.log('`Web rtc` component loaded asynchronously');
var WebrtcComponent = (function () {
    function WebrtcComponent(webrtcService) {
        this.webrtcService = webrtcService;
        this.audioDeviceInfos = [];
        this.videoDeviceInfos = [];
        this.supportedConstraints = [];
        this.constraints = {
            audio: {
                optional: []
            },
            video: {
                optional: []
            }
        };
    }
    WebrtcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gotSupportedConstraints();
        this.webrtcService.enumerateDevices().then(function (deviceInfos) { _this.gotDevices(deviceInfos); });
    };
    WebrtcComponent.prototype.gotDevices = function (deviceInfos) {
        console.log('gotDevices');
        for (var _i = 0, deviceInfos_1 = deviceInfos; _i < deviceInfos_1.length; _i++) {
            var deviceInfo = deviceInfos_1[_i];
            if (deviceInfo.kind === 'audioinput') {
                this.audioDeviceInfos.push(deviceInfo);
            }
            else if (deviceInfo.kind === 'videoinput') {
                this.videoDeviceInfos.push(deviceInfo);
            }
            else {
                console.log('Found ome other kind of source/device: ', deviceInfo);
            }
            console.log(this.audioDeviceInfos, this.videoDeviceInfos);
        }
    };
    WebrtcComponent.prototype.gotSupportedConstraints = function () {
        var supportedConstraints = this.webrtcService.getSupportedConstraints();
        for (var constraint in supportedConstraints) {
            if (supportedConstraints.hasOwnProperty(constraint)) {
                this.supportedConstraints.push(constraint);
            }
        }
    };
    WebrtcComponent.prototype.onVideoSelectChange = function (value) {
        alert(value);
        this.constraints.video.optional.push({ sourceId: value });
    };
    WebrtcComponent.prototype.onAudioSelectChange = function (value) {
        this.constraints.audio.optional.push({ sourceId: value });
    };
    WebrtcComponent.prototype.onStart = function () {
        var _this = this;
        this.webrtcService.getUserMedia(this.constraints).then(function (stream) { _this.handlerStream(stream); });
    };
    WebrtcComponent.prototype.onStop = function () {
        if (!!this.localStream) {
            this.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
    };
    WebrtcComponent.prototype.handlerStream = function (stream) {
        var self = this;
        self.localStream = stream;
        if (window.URL) {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
        }
        else {
            this.video.nativeElement.src = stream;
        }
        var tick = function () {
            requestAnimationFrame(tick);
            var canvas = self.canvas.nativeElement;
            var context = canvas.getContext('2d');
            var width = parseInt(canvas.style.width);
            var height = parseInt(canvas.style.height);
            if (self.video.nativeElement.readyState === self.video.nativeElement.HAVE_ENOUGH_DATA) {
                // Load the video onto the canvas
                context.drawImage(self.video.nativeElement, 0, 0, width, height);
                // Load the image data from the canvas
                // let imageData = context.getImageData(0, 0, width, height);
            }
        };
        tick();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('video'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */])
    ], WebrtcComponent.prototype, "video", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('canvas'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */])
    ], WebrtcComponent.prototype, "canvas", void 0);
    WebrtcComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'webrtc',
            template: "\n    <div class=\"select\">\n      <label for=\"audioSource\">Audio source: </label>\n      <select #audioSelect (change)=\"onAudioSelectChange(audioSelect.value)\">\n        <option *ngFor=\"let deviceInfo of audioDeviceInfos;\" value=\"{{deviceInfo.deviceId}}\">\n          {{deviceInfo.label}}\n        </option>\n      </select>\n    </div>\n    <div class=\"select\">\n      <label for=\"videoSource\">Video source: </label>\n      <select #videoSelect (change)=\"onVideoSelectChange(videoSelect.value)\">\n        <option *ngFor=\"let deviceInfo of videoDeviceInfos;\" value=\"{{deviceInfo.deviceId}}\">\n          {{deviceInfo.label}}\n        </option>\n      </select>\n    </div>\n    <button (click)=\"onStart()\">start </button>\n    <button (click)=\"onStop()\">stop </button>\n    <ul>\n      <ol *ngFor=\"let constraint of supportedConstraints\">\n          {{constraint}}\n      </ol>\n    </ul>\n    <video #video autoplay=\"true\" style=\"display:none;\"></video>\n    <canvas #canvas style=\"width:640px; height:480px;\"></canvas>\n  "
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__webrtc_service__["a" /* WebrtcService */]])
    ], WebrtcComponent);
    return WebrtcComponent;
}());



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebrtcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);


var WebrtcService = (function () {
    function WebrtcService() {
        this.media = navigator.mediaDevices;
    }
    WebrtcService.prototype.enumerateDevices = function () {
        return this.media.enumerateDevices();
    };
    ;
    WebrtcService.prototype.getUserMedia = function (constraints) {
        return this.media.getUserMedia(constraints);
    };
    WebrtcService.prototype.getSupportedConstraints = function () {
        return this.media.getSupportedConstraints();
    };
    WebrtcService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
    ], WebrtcService);
    return WebrtcService;
}());



/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webrtc_module__ = __webpack_require__(415);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WebrtcModule", function() { return __WEBPACK_IMPORTED_MODULE_0__webrtc_module__["a"]; });



/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebrtcModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webrtc_routes__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webrtc_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webrtc_service__ = __webpack_require__(393);








console.log('`Person CURD` bundle loaded asynchronously');
var WebrtcModule = (function () {
    function WebrtcModule() {
    }
    WebrtcModule.routes = __WEBPACK_IMPORTED_MODULE_5__webrtc_routes__["a" /* routes */];
    WebrtcModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__webrtc_component__["a" /* WebrtcComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__webrtc_routes__["a" /* routes */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__webrtc_service__["a" /* WebrtcService */]
            ]
        })
    ], WebrtcModule);
    return WebrtcModule;
}());



/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webrtc_component__ = __webpack_require__(392);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__webrtc_component__["a" /* WebrtcComponent */], pathMatch: 'full' },
];


/***/ })

});
//# sourceMappingURL=5.chunk.js.map