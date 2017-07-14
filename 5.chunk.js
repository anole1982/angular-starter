webpackJsonpac__name_([5],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebrtcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webrtc_service__ = __webpack_require__(393);



console.log('`Web rtc` component loaded asynchronously');
let WebrtcComponent = class WebrtcComponent {
    constructor(webrtcService) {
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
    ngOnInit() {
        this.gotSupportedConstraints();
        this.webrtcService.enumerateDevices().then((deviceInfos) => { this.gotDevices(deviceInfos); });
    }
    gotDevices(deviceInfos) {
        console.log('gotDevices');
        for (let deviceInfo of deviceInfos) {
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
    }
    gotSupportedConstraints() {
        let supportedConstraints = this.webrtcService.getSupportedConstraints();
        for (let constraint in supportedConstraints) {
            if (supportedConstraints.hasOwnProperty(constraint)) {
                this.supportedConstraints.push(constraint);
            }
        }
    }
    onVideoSelectChange(value) {
        alert(value);
        this.constraints.video.optional.push({ sourceId: value });
    }
    onAudioSelectChange(value) {
        this.constraints.audio.optional.push({ sourceId: value });
    }
    onStart() {
        this.webrtcService.getUserMedia(this.constraints).then((stream) => { this.handlerStream(stream); });
    }
    onStop() {
        if (!!this.localStream) {
            this.localStream.getTracks().forEach((track) => {
                track.stop();
            });
        }
    }
    handlerStream(stream) {
        let self = this;
        self.localStream = stream;
        if (window.URL) {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
        }
        else {
            this.video.nativeElement.src = stream;
        }
        let tick = function () {
            requestAnimationFrame(tick);
            let canvas = self.canvas.nativeElement;
            let context = canvas.getContext('2d');
            let width = parseInt(canvas.style.width);
            let height = parseInt(canvas.style.height);
            if (self.video.nativeElement.readyState === self.video.nativeElement.HAVE_ENOUGH_DATA) {
                // Load the video onto the canvas
                context.drawImage(self.video.nativeElement, 0, 0, width, height);
                // Load the image data from the canvas
                // let imageData = context.getImageData(0, 0, width, height);
            }
        };
        tick();
    }
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
        template: `
    <div class="select">
      <label for="audioSource">Audio source: </label>
      <select #audioSelect (change)="onAudioSelectChange(audioSelect.value)">
        <option *ngFor="let deviceInfo of audioDeviceInfos;" value="{{deviceInfo.deviceId}}">
          {{deviceInfo.label}}
        </option>
      </select>
    </div>
    <div class="select">
      <label for="videoSource">Video source: </label>
      <select #videoSelect (change)="onVideoSelectChange(videoSelect.value)">
        <option *ngFor="let deviceInfo of videoDeviceInfos;" value="{{deviceInfo.deviceId}}">
          {{deviceInfo.label}}
        </option>
      </select>
    </div>
    <button (click)="onStart()">start </button>
    <button (click)="onStop()">stop </button>
    <ul>
      <ol *ngFor="let constraint of supportedConstraints">
          {{constraint}}
      </ol>
    </ul>
    <video #video autoplay="true" style="display:none;"></video>
    <canvas #canvas style="width:640px; height:480px;"></canvas>
  `
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__webrtc_service__["a" /* WebrtcService */]])
], WebrtcComponent);



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebrtcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);


let WebrtcService = class WebrtcService {
    constructor() {
        this.media = navigator.mediaDevices;
    }
    enumerateDevices() {
        return this.media.enumerateDevices();
    }
    ;
    getUserMedia(constraints) {
        return this.media.getUserMedia(constraints);
    }
    getSupportedConstraints() {
        return this.media.getSupportedConstraints();
    }
};
WebrtcService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], WebrtcService);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webrtc_routes__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webrtc_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webrtc_service__ = __webpack_require__(393);








console.log('`Person CURD` bundle loaded asynchronously');
let WebrtcModule = class WebrtcModule {
};
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



/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webrtc_component__ = __webpack_require__(392);

const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__webrtc_component__["a" /* WebrtcComponent */], pathMatch: 'full' },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ })

});
//# sourceMappingURL=5.chunk.js.map