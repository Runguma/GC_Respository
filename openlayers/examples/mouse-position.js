(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{335:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(163),c=n(9),r=n(5),s=n(2),i=n(31),d=n(50),u=new a.a({coordinateFormat:Object(i.d)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position"),undefinedHTML:"&nbsp;"});new o.a({controls:Object(d.a)().extend([u]),layers:[new r.a({source:new c.b})],target:"map",view:new s.a({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",(function(e){u.setProjection(e.target.value)})),document.getElementById("precision").addEventListener("change",(function(e){var t=Object(i.d)(e.target.valueAsNumber);u.setCoordinateFormat(t)}))}},[[335,0]]]);
//# sourceMappingURL=mouse-position.js.map