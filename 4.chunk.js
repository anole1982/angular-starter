webpackJsonpac__name_([4],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDBComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_service__ = __webpack_require__(389);



let IndexedDBComponent = class IndexedDBComponent {
    constructor(personService) {
        this.personService = personService;
        this.count = 100;
    }
    ngOnInit() {
        console.log('hello `Indexed DB` component');
        this.personService.selectAll().then((persons) => {
            this.persons = persons;
        });
    }
    onSaveEvent(person) {
        debugger;
        this.personService.insert(person);
    }
    onSelectEvent(person) {
        this.selected = person;
    }
    onInsertButtonClick() {
        let ps = [];
        for (let i = 0; i < this.count; i++) {
            let person = {
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
        let now = new Date().getTime();
        this.personService.insert(ps).then(() => {
            alert(new Date().getTime() - now);
        });
    }
    onCleanButtonClick() {
        let now = new Date().getTime();
        this.personService.clear().then(() => {
            alert(new Date().getTime() - now);
        });
    }
};
IndexedDBComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
        selector: 'indexeddb',
        template: `
    <h1>single page of Indexed DB </h1>
    <person-form [person]="selected" (onsave)="onSaveEvent($event)"></person-form>
    <hr/>
    <person-list [persons]="persons" (onselect) = onSelectEvent($event)></person-list>
    <div>
      <span>自动插入条数</span>
      <input type="number" style="width:50px" [(ngModel)]="count"/>
      <button (click)="onInsertButtonClick()" >确定</button>
      <button (click)="onCleanButtonClick()" >清除</button>
    </div>
  `,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__indexeddb_person_service__["a" /* PersonService */]])
], IndexedDBComponent);



/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_dexie_service__ = __webpack_require__(180);



let PersonService = class PersonService {
    constructor(dexieService) {
        this.dexieService = dexieService;
        this.table = this.dexieService.table('persons');
    }
    selectAll() {
        return this.table.toArray();
    }
    insert(person) {
        // let personJSON = JSON.parse(TypedJSON.stringify(person));
        if (person instanceof Array) {
            return this.table.bulkAdd(person);
        }
        else {
            return this.table.add(person);
        }
    }
    clear() {
        return this.table.clear();
    }
    update(id, person) {
        return this.table.update(id, person);
    }
    remove(id) {
        return this.table.delete(id);
    }
};
PersonService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_dexie_service__["a" /* DexieService */]])
], PersonService);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexeddb_routes__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__indexeddb_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__indexeddb_person_form_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__indexeddb_person_list_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__indexeddb_person_service__ = __webpack_require__(389);










console.log('`Person CURD` bundle loaded asynchronously');
let IndexedDBModule = class IndexedDBModule {
};
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



/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import { JsonMember, JsonObject } from 'typedjson-npm';
//
// @JsonObject()
class Person {
    get id() {
        return this._id;
    }
    // @JsonMember()
    set id(value) {
        this._id = value;
    }
    get code() {
        return this._code;
    }
    // @JsonMember()
    set code(value) {
        this._code = value;
    }
    get name() {
        return this._name;
    }
    // @JsonMember()
    set name(value) {
        this._name = value;
    }
    get photo() {
        return this._photo;
    }
    // @JsonMember()
    set photo(value) {
        this._photo = value;
    }
    get weight() {
        return this._weight;
    }
    // @JsonMember
    set weight(value) {
        this._weight = value;
    }
    get brithday() {
        return this._brithday;
    }
    // @JsonMember()
    set brithday(value) {
        this._brithday = value;
    }
    get resume() {
        return this._resume;
    }
    // @JsonMember()
    set resume(value) {
        this._resume = value;
    }
    get video() {
        return this._video;
    }
    // @JsonMember()
    set video(value) {
        this._video = value;
    }
    get audio() {
        return this._audio;
    }
    // @JsonMember()
    set audio(value) {
        this._audio = value;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Person;



/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_entity__ = __webpack_require__(407);


console.log('`indexeddb` component loaded asynchronously');

let PersonFormComponent = class PersonFormComponent {
    constructor() {
        this.person = new __WEBPACK_IMPORTED_MODULE_2__indexeddb_person_entity__["a" /* Person */]();
        this.onsave = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* EventEmitter */]();
    }
    ngOnInit() {
        console.log('hello `Indexed DB Form` component');
    }
    onSaveButtonClick() {
        this.onsave.emit(this.person);
    }
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
        template: `
    <form>
      <p>
        <span>编码</span>
        <input name="code" [(ngModel)]="person.code" type="text"/>
      </p>
      <p>
        <span>姓名</span>
        <input name="name" [(ngModel)]="person.name" type="text"/>
      </p>
      <p>
        <span>体重</span>
        <input name="weight" [(ngModel)]="person.weight" type="number"/>
      </p>
      <p>
        <span>生日</span>
        <input name="brithday" [(ngModel)]="person.brithday" type="date"/>
      </p>
      <p>
        <span>简历</span>
        <input name="resume" [(ngModel)]="person.resume" type="file"/>
      </p>
      <p>
        <span>照片</span>
        <input name="photo" [(ngModel)]="person.photo" type="file" accept="image/*" capture="camera"/>
      </p>
      <p>
        <span>视频</span>
        <input name="audio" [(ngModel)]="person.audio" type="file" accept="video/*" capture="camcorder"/>
      </p>
      <p>
        <span>录音</span>
        <input name="audio" [(ngModel)]="person.audio" type="file" accept="audio/*" capture="microphone"/>
      </p>
      <p>
        <button type="submit" (click)="onSaveButtonClick()">保存</button>
      </p>
    </form>
  `
    })
], PersonFormComponent);



/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);


console.log('`indexeddb` component loaded asynchronously');
let PersonListComponent = class PersonListComponent {
    constructor() {
        this.onselect = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* EventEmitter */]();
    }
    ngOnInit() {
        console.log('hello `Indexed DB Form` component');
    }
    onPersonSelected(person) {
        this.onselect.emit(person);
    }
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
        template: `
    <table>
      <tr *ngFor="let person of persons" (click)="onPersonSelected(person)">
        <td>{{person.id}}</td>
        <td>{{person.code}}</td>
        <td>{{person.name}}</td>
        <td>{{person.weight}}</td>
        <td>{{person.brithday}}</td>
        <td>{{person.photo}}</td>
      </tr>
    </table>
  `,
    })
], PersonListComponent);



/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexeddb_component__ = __webpack_require__(388);

const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__indexeddb_component__["a" /* IndexedDBComponent */], pathMatch: 'full' },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;



/***/ })

});
//# sourceMappingURL=4.chunk.js.map