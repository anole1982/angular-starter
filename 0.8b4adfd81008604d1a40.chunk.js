webpackJsonp([0],{"21Y7":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var o=e("OAmG"),i=[{path:"",children:[{path:"",component:o.a},{path:"child-detail",loadChildren:function(){return e.e(8).then(e.bind(null,"02s1")).then((function(n){return n.ChildDetailModule}))}}]}]},OAmG:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var o=e("WVK8"),i=e("vJEw");console.log("`Detail` component loaded asynchronously");var r=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Detail` component")},n=o.b([e.i(i._10)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],n)})()},icz3:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var o=e("WVK8"),i=e("Tb5a"),r=e("FvgR"),a=e("vJEw"),l=e("TBLV"),u=e("21Y7"),c=e("OAmG");console.log("`Detail` bundle loaded asynchronously");var d=(function(){function n(){}return n.routes=u.a,n=o.b([e.i(a.z)({declarations:[c.a],imports:[i.d,r.a,l.a.forChild(u.a)]})],n)})()},"m/F8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("icz3");e.d(t,"DetailModule",(function(){return o.a}))}});