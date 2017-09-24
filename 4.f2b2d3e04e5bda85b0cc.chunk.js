webpackJsonp([4],{"2tEP":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("l377");t.d(n,"IndexedDBModule",(function(){return o.a}))},A3ZX:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var o=t("WVK8"),r=t("vJEw"),i=t("3293"),p=(function(){function e(e){this.dexieService=e,this.table=this.dexieService.table("persons")}return e.prototype.selectAll=function(){return this.table.toArray()},e.prototype.insert=function(e){return e instanceof Array?this.table.bulkAdd(e):this.table.add(e)},e.prototype.clear=function(){return this.table.clear()},e.prototype.update=function(e,n){return this.table.update(e,n)},e.prototype.remove=function(e){return this.table.delete(e)},e=o.b([t.i(r.c)(),o.c("design:paramtypes",[i.a])],e)})()},BgDi:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var o=t("WVK8"),r=t("vJEw"),i=t("NV7l");console.log("`indexeddb` component loaded asynchronously");var p=(function(){function e(){this.person=new i.a,this.onsave=new r.F}return e.prototype.ngOnInit=function(){console.log("hello `Indexed DB Form` component")},e.prototype.onSaveButtonClick=function(){this.onsave.emit(this.person)},o.b([t.i(r.O)("person"),o.c("design:type",i.a)],e.prototype,"editPerson",void 0),o.b([t.i(r._4)("onsave"),o.c("design:type",Object)],e.prototype,"onsave",void 0),e=o.b([t.i(r._10)({selector:"person-form",template:'\n    <form>\n      <p>\n        <span>编码</span>\n        <input name="code" [(ngModel)]="person.code" type="text"/>\n      </p>\n      <p>\n        <span>姓名</span>\n        <input name="name" [(ngModel)]="person.name" type="text"/>\n      </p>\n      <p>\n        <span>体重</span>\n        <input name="weight" [(ngModel)]="person.weight" type="number"/>\n      </p>\n      <p>\n        <span>生日</span>\n        <input name="brithday" [(ngModel)]="person.brithday" type="date"/>\n      </p>\n      <p>\n        <span>简历</span>\n        <input name="resume" [(ngModel)]="person.resume" type="file"/>\n      </p>\n      <p>\n        <span>照片1</span>\n        <input name="photo" [(ngModel)]="person.photo" type="file" accept="image/*"/>\n      </p>\n      <p>\n        <span>照片</span>\n        <input name="photo" [(ngModel)]="person.photo" type="file" accept="image/*" capture="camera"/>\n      </p>\n      <p>\n        <span>视频</span>\n        <input name="audio" [(ngModel)]="person.audio" type="file" accept="video/*" capture="camcorder"/>\n      </p>\n      <p>\n        <span>录音</span>\n        <input name="audio" [(ngModel)]="person.audio" type="file" accept="audio/*" capture="microphone"/>\n      </p>\n      <p>\n        <button type="submit" (click)="onSaveButtonClick()">保存</button>\n      </p>\n    </form>\n  '})],e)})()},NV7l:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var o=(function(){function e(){}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this._code},set:function(e){this._code=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"photo",{get:function(){return this._photo},set:function(e){this._photo=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._weight},set:function(e){this._weight=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"brithday",{get:function(){return this._brithday},set:function(e){this._brithday=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resume",{get:function(){return this._resume},set:function(e){this._resume=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"video",{get:function(){return this._video},set:function(e){this._video=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"audio",{get:function(){return this._audio},set:function(e){this._audio=e},enumerable:!0,configurable:!0}),e})()},NjUZ:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("WVK8"),r=t("vJEw"),i=t("NV7l"),p=t("A3ZX"),s=(function(){function e(e){this.personService=e,this.persons=[],this.count=2}return e.prototype.ngOnInit=function(){var e=this;console.log("hello `Indexed DB` component"),this.personService.selectAll().then((function(n){e.persons=n}))},e.prototype.onUpdateButtonClick=function(){this.persons[0].code="23425235"},e.prototype.onSaveEvent=function(e){this.personService.insert(e)},e.prototype.onAddButtonClick=function(){this.persons.push(new i.a)},e.prototype.onSelectEvent=function(e){this.selected=e},e.prototype.onInsertButtonClick=function(){for(var e=this,n=[],t=0;t<this.count;t++){var o={id:t,name:"name"+t,code:"code"+t,brithday:new Date,photo:new Blob(["Hello World!"],{type:"text/plain"})};n.push(o)}var r=(new Date).getTime();this.personService.insert(n).then((function(){alert((new Date).getTime()-r)})),console.log("hello `Indexed DB` component"),this.personService.selectAll().then((function(n){e.persons=n}))},e.prototype.onCleanButtonClick=function(){var e=(new Date).getTime();this.personService.clear().then((function(){alert((new Date).getTime()-e)}))},e=o.b([t.i(r._10)({selector:"indexeddb",template:'\n    <h1>single page of Indexed DB </h1>\n    <person-form [person]="selected" (onsave)="onSaveEvent($event)"></person-form>\n    <hr/>\n    <person-list [persons]="persons" (onselect) = onSelectEvent($event)></person-list>\n    <div>\n      <span>自动插入条数</span>\n      <input type="number" style="width:50px" [(ngModel)]="count"/>\n      <button (click)="onInsertButtonClick()" >确定</button>\n      <button (click)="onAddButtonClick()" >添加</button>\n      <button (click)="onUpdateButtonClick()" >更新</button>\n      <button (click)="onCleanButtonClick()" >清除</button>\n    </div>\n  '}),o.c("design:paramtypes",[p.a])],e)})()},ZcVs:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("NjUZ"),r=[{path:"",component:o.a,pathMatch:"full"}]},l377:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var o=t("WVK8"),r=t("Tb5a"),i=t("FvgR"),p=t("vJEw"),s=t("TBLV"),c=t("ZcVs"),u=t("NjUZ"),a=t("BgDi"),l=t("pU8v"),d=t("A3ZX");console.log("`Person CURD` bundle loaded asynchronously");var f=(function(){function e(){}return e.routes=c.a,e=o.b([t.i(p.z)({declarations:[u.a,a.a,l.a],imports:[r.d,i.a,s.a.forChild(c.a)],providers:[d.a]})],e)})()},pU8v:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("WVK8"),r=t("vJEw");console.log("`indexeddb` component loaded asynchronously");var i=(function(){function e(){this.onselect=new r.F}return e.prototype.ngOnInit=function(){console.log("hello `Indexed DB Form` component")},e.prototype.onPersonSelected=function(e){this.onselect.emit(e)},o.b([t.i(r.O)("persons"),o.c("design:type",Array)],e.prototype,"persons",void 0),o.b([t.i(r._4)("onselect"),o.c("design:type",Object)],e.prototype,"onselect",void 0),e=o.b([t.i(r._10)({selector:"person-list",template:'\n    <table>\n      <tr *ngFor="let person of persons" (click)="onPersonSelected(person)">\n        <td>{{person.id}}</td>\n        <td>{{person.code}}</td>\n        <td>{{person.name}}</td>\n        <td>{{person.weight}}</td>\n        <td>{{person.brithday}}</td>\n        <td>{{person.photo}}</td>\n      </tr>\n    </table>\n  '})],e)})()}});