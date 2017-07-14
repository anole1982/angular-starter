webpackJsonp([4],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDBComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_service__ = __webpack_require__(389);



var IndexedDBComponent = (function () {
    function IndexedDBComponent(personService) {
        this.personService = personService;
        this.count = 100;
    }
    IndexedDBComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('hello `Indexed DB` component');
        this.personService.selectAll().then(function (persons) {
            _this.persons = persons;
        });
    };
    IndexedDBComponent.prototype.onSaveEvent = function (person) {
        debugger;
        this.personService.insert(person);
    };
    IndexedDBComponent.prototype.onSelectEvent = function (person) {
        this.selected = person;
    };
    IndexedDBComponent.prototype.onInsertButtonClick = function () {
        var ps = [];
        for (var i = 0; i < this.count; i++) {
            var person = {
                id: i,
                name: 'name' + i,
                code: 'code' + i,
                brithday: new Date(),
                photo: new Blob(["Hello World!"], { type: "text/plain" })
            };
            ps.push(person);
            // person.id = i;
            // person.name='name'+i;
            // person.brithday = new Date();
            // person.code='code'+i;
        }
        var now = new Date().getTime();
        this.personService.insert(ps).then(function () {
            alert(new Date().getTime() - now);
        });
    };
    IndexedDBComponent.prototype.onCleanButtonClick = function () {
        var now = new Date().getTime();
        this.personService.clear().then(function () {
            alert(new Date().getTime() - now);
        });
    };
    IndexedDBComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'indexeddb',
            template: "\n    <h1>single page of Indexed DB </h1>\n    <person-form [person]=\"selected\" (onsave)=\"onSaveEvent($event)\"></person-form>\n    <hr/>\n    <person-list [persons]=\"persons\" (onselect) = onSelectEvent($event)></person-list>\n    <div>\n      <span>\u81EA\u52A8\u63D2\u5165\u6761\u6570</span>\n      <input type=\"number\" style=\"width:50px\" [(ngModel)]=\"count\"/>\n      <button (click)=\"onInsertButtonClick()\" >\u786E\u5B9A</button>\n      <button (click)=\"onCleanButtonClick()\" >\u6E05\u9664</button>\n    </div>\n  ",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__indexeddb_person_service__["a" /* PersonService */]])
    ], IndexedDBComponent);
    return IndexedDBComponent;
}());



/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_dexie_service__ = __webpack_require__(180);



var PersonService = (function () {
    function PersonService(dexieService) {
        this.dexieService = dexieService;
        this.table = this.dexieService.table('persons');
    }
    PersonService.prototype.selectAll = function () {
        return this.table.toArray();
    };
    PersonService.prototype.insert = function (person) {
        // let personJSON = JSON.parse(TypedJSON.stringify(person));
        if (person instanceof Array) {
            return this.table.bulkAdd(person);
        }
        else {
            return this.table.add(person);
        }
    };
    PersonService.prototype.clear = function () {
        return this.table.clear();
    };
    PersonService.prototype.update = function (id, person) {
        return this.table.update(id, person);
    };
    PersonService.prototype.remove = function (id) {
        return this.table.delete(id);
    };
    PersonService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_dexie_service__["a" /* DexieService */]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexeddb_module__ = __webpack_require__(406);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDBModule", function() { return __WEBPACK_IMPORTED_MODULE_0__indexeddb_module__["a"]; });



/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDBModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexeddb_routes__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__indexeddb_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__indexeddb_person_form_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__indexeddb_person_list_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__indexeddb_person_service__ = __webpack_require__(389);










console.log('`Person CURD` bundle loaded asynchronously');
var IndexedDBModule = (function () {
    function IndexedDBModule() {
    }
    IndexedDBModule.routes = __WEBPACK_IMPORTED_MODULE_5__indexeddb_routes__["a" /* routes */];
    IndexedDBModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__indexeddb_component__["a" /* IndexedDBComponent */],
                __WEBPACK_IMPORTED_MODULE_7__indexeddb_person_form_component__["a" /* PersonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__indexeddb_person_list_component__["a" /* PersonListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__indexeddb_routes__["a" /* routes */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__indexeddb_person_service__["a" /* PersonService */]
            ]
        })
    ], IndexedDBModule);
    return IndexedDBModule;
}());



/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
// import { JsonMember, JsonObject } from 'typedjson-npm';
//
// @JsonObject()
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        // @JsonMember()
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "code", {
        get: function () {
            return this._code;
        },
        // @JsonMember()
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        // @JsonMember()
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "photo", {
        get: function () {
            return this._photo;
        },
        // @JsonMember()
        set: function (value) {
            this._photo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        // @JsonMember
        set: function (value) {
            this._weight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "brithday", {
        get: function () {
            return this._brithday;
        },
        // @JsonMember()
        set: function (value) {
            this._brithday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "resume", {
        get: function () {
            return this._resume;
        },
        // @JsonMember()
        set: function (value) {
            this._resume = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "video", {
        get: function () {
            return this._video;
        },
        // @JsonMember()
        set: function (value) {
            this._video = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "audio", {
        get: function () {
            return this._audio;
        },
        // @JsonMember()
        set: function (value) {
            this._audio = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());



/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_entity__ = __webpack_require__(407);


console.log('`indexeddb` component loaded asynchronously');

var PersonFormComponent = (function () {
    function PersonFormComponent() {
        this.person = new __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_entity__["a" /* Person */]();
        this.onsave = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* EventEmitter */]();
    }
    PersonFormComponent.prototype.ngOnInit = function () {
        console.log('hello `Indexed DB Form` component');
    };
    PersonFormComponent.prototype.onSaveButtonClick = function () {
        this.onsave.emit(this.person);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Input */])('person'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_entity__["a" /* Person */])
    ], PersonFormComponent.prototype, "editPerson", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])('onsave'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
    ], PersonFormComponent.prototype, "onsave", void 0);
    PersonFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'person-form',
            template: "\n    <form>\n      <p>\n        <span>\u7F16\u7801</span>\n        <input name=\"code\" [(ngModel)]=\"person.code\" type=\"text\"/>\n      </p>\n      <p>\n        <span>\u59D3\u540D</span>\n        <input name=\"name\" [(ngModel)]=\"person.name\" type=\"text\"/>\n      </p>\n      <p>\n        <span>\u4F53\u91CD</span>\n        <input name=\"weight\" [(ngModel)]=\"person.weight\" type=\"number\"/>\n      </p>\n      <p>\n        <span>\u751F\u65E5</span>\n        <input name=\"brithday\" [(ngModel)]=\"person.brithday\" type=\"date\"/>\n      </p>\n      <p>\n        <span>\u7B80\u5386</span>\n        <input name=\"resume\" [(ngModel)]=\"person.resume\" type=\"file\"/>\n      </p>\n      <p>\n        <span>\u7167\u7247</span>\n        <input name=\"photo\" [(ngModel)]=\"person.photo\" type=\"file\" accept=\"image/*\" capture=\"camera\"/>\n      </p>\n      <p>\n        <span>\u89C6\u9891</span>\n        <input name=\"audio\" [(ngModel)]=\"person.audio\" type=\"file\" accept=\"video/*\" capture=\"camcorder\"/>\n      </p>\n      <p>\n        <span>\u5F55\u97F3</span>\n        <input name=\"audio\" [(ngModel)]=\"person.audio\" type=\"file\" accept=\"audio/*\" capture=\"microphone\"/>\n      </p>\n      <p>\n        <button type=\"submit\" (click)=\"onSaveButtonClick()\">\u4FDD\u5B58</button>\n      </p>\n    </form>\n  "
        })
    ], PersonFormComponent);
    return PersonFormComponent;
}());



/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);


console.log('`indexeddb` component loaded asynchronously');
var PersonListComponent = (function () {
    function PersonListComponent() {
        this.onselect = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* EventEmitter */]();
    }
    PersonListComponent.prototype.ngOnInit = function () {
        console.log('hello `Indexed DB Form` component');
    };
    PersonListComponent.prototype.onPersonSelected = function (person) {
        this.onselect.emit(person);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* Input */])('persons'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Array)
    ], PersonListComponent.prototype, "persons", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])('onselect'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
    ], PersonListComponent.prototype, "onselect", void 0);
    PersonListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'person-list',
            template: "\n    <table>\n      <tr *ngFor=\"let person of persons\" (click)=\"onPersonSelected(person)\">\n        <td>{{person.id}}</td>\n        <td>{{person.code}}</td>\n        <td>{{person.name}}</td>\n        <td>{{person.weight}}</td>\n        <td>{{person.brithday}}</td>\n        <td>{{person.photo}}</td>\n      </tr>\n    </table>\n  ",
        })
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexeddb_component__ = __webpack_require__(388);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__indexeddb_component__["a" /* IndexedDBComponent */], pathMatch: 'full' },
];


/***/ })

});
//# sourceMappingURL=4.chunk.js.map