webpackJsonp([0],{"21Y7":function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));var e=t("OAmG"),u=[{path:"",children:[{path:"",component:e.a},{path:"child-detail",loadChildren:function(){return t.e(7).then(t.bind(null,"FFWX")).then((function(n){return n.ChildDetailModuleNgFactory}))}}]}]},IiOY:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),t.d(l,"DetailModuleNgFactory",(function(){return s}));var e=t("WVK8"),u=t("P9VG"),o=t("icz3"),i=t("dFPQ"),r=t("5f5h"),a=t("bH9S"),c=t("orog"),_=t("OAmG"),h=(function(n){function l(l){return n.call(this,l,[c.a],[])||this}return e.a(l,n),Object.defineProperty(l.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new i.d(this.parent.get(u.G))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_6",{get:function(){return null==this.__ɵi_6&&(this.__ɵi_6=new r.a),this.__ɵi_6},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new i.c,this._ɵba_1=new r.b,this._FormsModule_2=new r.c,this._RouterModule_3=new a.q(this.parent.get(a.r,null),this.parent.get(a.j,null)),this._DetailModule_4=new o.a,this._ROUTES_7=[[{path:"",children:[{path:"",component:_.a},{path:"child-detail",loadChildren:function(){return t.e(7).then(t.bind(null,"FFWX")).then((function(n){return n.ChildDetailModuleNgFactory}))}}]}]],this._DetailModule_4},l.prototype.getInternal=function(n,l){return n===i.c?this._CommonModule_0:n===r.b?this._ɵba_1:n===r.c?this._FormsModule_2:n===a.q?this._RouterModule_3:n===o.a?this._DetailModule_4:n===i.h?this._NgLocalization_5:n===r.a?this._ɵi_6:n===a.u?this._ROUTES_7:l},l.prototype.destroyInternal=function(){},l})(u._12),s=new u._13(h,o.a)},OAmG:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("WVK8"),u=t("P9VG");console.log("`Detail` component loaded asynchronously");var o=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Detail` component")},n})();o=e.b([t.i(u._15)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],o)},icz3:function(n,l,t){"use strict";t.d(l,"a",(function(){return _}));var e=t("WVK8"),u=t("dFPQ"),o=t("5f5h"),i=t("P9VG"),r=t("bH9S"),a=t("21Y7"),c=t("OAmG");console.log("`Detail` bundle loaded asynchronously");var _=(function(){function n(){}return n})();_.routes=a.a,_=e.b([t.i(i.z)({declarations:[c.a],imports:[u.c,o.c,r.q.forChild(a.a)]})],_)},orog:function(n,l,t){"use strict";function e(n){return o._17(0,[(n()(),o._20(null,["\n    "])),(n()(),o._18(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._20(null,["Hello from Detail"])),(n()(),o._20(null,["\n    "])),(n()(),o._18(0,null,null,6,"span",[],null,null,null,null,null)),(n()(),o._20(null,["\n      "])),(n()(),o._18(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,t){var e=!0;if("click"===l){e=!1!==o._23(n,7).onClick(t.button,t.ctrlKey,t.metaKey)&&e}return e}),null,null)),o._19(671744,null,0,i.y,[i.j,i.v,r.g],{routerLink:[0,"routerLink"]},null),o._31(1),(n()(),o._20(null,["\n        Child Detail\n      "])),(n()(),o._20(null,["\n    "])),(n()(),o._20(null,["\n    "])),(n()(),o._18(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._19(147456,null,0,i.z,[i.l,o.R,o.Q,[8,null]],null,null),(n()(),o._20(null,["\n  "]))],(function(n,l){n(l,7,0,n(l,8,0,"./child-detail"))}),(function(n,l){n(l,6,0,o._23(l,7).target,o._23(l,7).href)}))}function u(n){return o._17(0,[(n()(),o._18(0,null,null,1,"detail",[],null,null,null,e,_)),o._19(114688,null,0,a.a,[],null,null)],(function(n,l){n(l,1,0)}),null)}t.d(l,"a",(function(){return h}));var o=t("P9VG"),i=t("bH9S"),r=t("dFPQ"),a=t("OAmG"),c=[],_=o._16({encapsulation:2,styles:c,data:{}}),h=o._25("detail",a.a,u,{},{},[])}});