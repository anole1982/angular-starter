webpackJsonp([1],{SvXa:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var o=e("WVK8"),r=e("Tb5a"),u=e("FvgR"),a=e("vJEw"),i=e("TBLV"),c=e("ruu9"),l=e("ZV1+");console.log("`Detail` bundle loaded asynchronously");var d=(function(){function n(){}return n.routes=c.a,n=o.b([e.i(a.z)({declarations:[l.a],imports:[r.d,u.a,i.a.forChild(c.a)]})],n)})()},"ZV1+":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var o=e("WVK8"),r=e("vJEw");console.log("`Detail` component loaded asynchronously");var u=(function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Demo` component")},n=o.b([e.i(r._10)({selector:"demo",template:"\n    <h1>Demo</h1>\n    <span>\n      <a [routerLink]=\" ['./indexeddb'] \">\n        indexedDB\n      </a>\n    </span>\n    \n    <span>\n      <a [routerLink]=\" ['./webrtc'] \">\n        webrtc\n      </a>\n    </span>\n    <span>\n      <a [routerLink]=\" ['./location'] \">\n        geolocation\n      </a>\n    </span>\n    <span>\n      <a [routerLink]=\" ['./crypto'] \">\n        crypto\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],n)})()},jCXH:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("SvXa");e.d(t,"DemoModule",(function(){return o.a}))},ruu9:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var o=e("ZV1+"),r=[{path:"",children:[{path:"",component:o.a},{path:"indexeddb",loadChildren:function(){return e.e(4).then(e.bind(null,"2tEP")).then((function(n){return n.IndexedDBModule}))}},{path:"location",loadChildren:function(){return e.e(6).then(e.bind(null,"HK2C")).then((function(n){return n.LocationModule}))}},{path:"webrtc",loadChildren:function(){return e.e(5).then(e.bind(null,"fOoX")).then((function(n){return n.WebrtcModule}))}},{path:"crypto",loadChildren:function(){return e.e(7).then(e.bind(null,"DQ2p")).then((function(n){return n.CryptoModule}))}}]}]}});