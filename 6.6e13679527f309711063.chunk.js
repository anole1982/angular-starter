webpackJsonp([6],{"/8Km":function(o,i,t){"use strict";t.d(i,"a",(function(){return e}));var n=t("aKmC"),e=[{path:"",component:n.a,pathMatch:"full"}]},CMLs:function(o,i,t){"use strict";t.d(i,"a",(function(){return c}));var n=t("WVK8"),e=t("vJEw"),c=(function(){function o(){this.geolocation=window.navigator.geolocation}return o.prototype.getCurrentPosition=function(o){var i=this;return new Promise(function(t,n){if(!i.geolocation||!i.geolocation.getCurrentPosition)return n(new Error("Geolocation not supported!"));i.geolocation.getCurrentPosition(t,n,o)})},o.prototype.watchPosition=function(o){var i=this;return new Promise(function(t,n){if(!i.geolocation||!i.geolocation.watchPosition)return n(new Error("Geolocation not supported!"));i.watchId=i.geolocation.watchPosition(t,n,o)})},o.prototype.clearWatch=function(){this.geolocation.clearWatch(this.watchId)},o=n.b([t.i(e.c)()],o)})()},EZ8i:function(o,i,t){"use strict";t.d(i,"a",(function(){return p}));var n=t("WVK8"),e=t("Tb5a"),c=t("FvgR"),r=t("vJEw"),a=t("TBLV"),s=t("/8Km"),d=t("aKmC"),u=t("CMLs");console.log("`Person CURD` bundle loaded asynchronously");var p=(function(){function o(){}return o.routes=s.a,o=n.b([t.i(r.z)({declarations:[d.a],imports:[e.d,c.a,a.a.forChild(s.a)],providers:[u.a]})],o)})()},HK2C:function(o,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("EZ8i");t.d(i,"LocationModule",(function(){return n.a}))},aKmC:function(o,i,t){"use strict";t.d(i,"a",(function(){return r}));var n=t("WVK8"),e=t("vJEw"),c=t("CMLs");console.log("`Geo location` component loaded asynchronously");var r=(function(){function o(o){this.positionService=o,this.options={enableHighAccuracy:!0,timeout:5e3,maximumAge:0}}return o.prototype.ngOnInit=function(){var o=this;this.positionService.watchPosition(this.options).then((function(i){o.position=i})),this.positionService.getCurrentPosition(this.options).then((function(i){o.positioni=i}))},o=n.b([t.i(e._10)({selector:"indexeddb",template:"\n    <h1>single page of current geolocation </h1>\n    <div>timestamp:{{positioni.timestamp}}</div>\n    <div>accuracy:{{positioni.coords.accuracy}}</div>\n    <div>altitude:{{positioni.coords.altitude}}</div>\n    <div>latitude:{{positioni.coords.latitude}}</div>\n    <div>longitude:{{positioni.coords.longitude}}</div>\n    <div>speed:{{positioni.coords.speed}}</div>\n    <div>altitudeAccuracy:{{positioni.coords.altitudeAccuracy}}</div>\n    <h1>single page of static geolocation </h1>\n    <div>timestamp:{{position.timestamp}}</div>\n    <div>accuracy:{{position.coords.accuracy}}</div>\n    <div>altitude:{{position.coords.altitude}}</div>\n    <div>latitude:{{position.coords.latitude}}</div>\n    <div>longitude:{{position.coords.longitude}}</div>\n    <div>speed:{{position.coords.speed}}</div>\n    <div>altitudeAccuracy:{{position.coords.altitudeAccuracy}}</div>\n  "}),n.c("design:paramtypes",[c.a])],o)})()}});