"use strict";(self.webpackChunkbootcamp_24_react=self.webpackChunkbootcamp_24_react||[]).push([[274],{8274:function(r,e,t){t.r(e),t.d(e,{default:function(){return Xr}});var n=t(4942),a=t(1413),o=t(885),c=t(2791),u=t(6754),i=t(1331);var s=function(r,e){for(var t=-1,n=null==r?0:r.length;++t<n&&!1!==e(r[t],t,r););return r},l=t(2389),f=t(1452);var v=function(r,e,t,n){var a=!t;t||(t={});for(var o=-1,c=e.length;++o<c;){var u=e[o],i=n?n(t[u],r[u],u,t,r):void 0;void 0===i&&(i=r[u]),a?(0,f.Z)(t,u,i):(0,l.Z)(t,u,i)}return t},m=t(6484);var b=function(r,e){return r&&v(e,(0,m.Z)(e),r)},j=t(8886);var p=function(r,e){return r&&v(e,(0,j.Z)(e),r)},d=t(5183),y="object"==typeof exports&&exports&&!exports.nodeType&&exports,h=y&&"object"==typeof module&&module&&!module.nodeType&&module,Z=h&&h.exports===y?d.Z.Buffer:void 0,g=Z?Z.allocUnsafe:void 0;var w=function(r,e){if(e)return r.slice();var t=r.length,n=g?g(t):new r.constructor(t);return r.copy(n),n};var x=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},A=t(4587);var _=function(r,e){return v(r,(0,A.Z)(r),e)},N=t(1410);var S=function(r,e){return v(r,(0,N.Z)(r),e)},F=t(2338),C=t(9999),O=t(6268),I=Object.prototype.hasOwnProperty;var U=function(r){var e=r.length,t=new r.constructor(e);return e&&"string"==typeof r[0]&&I.call(r,"index")&&(t.index=r.index,t.input=r.input),t},D=t(7962);var E=function(r){var e=new r.constructor(r.byteLength);return new D.Z(e).set(new D.Z(r)),e};var k=function(r,e){var t=e?E(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)},M=/\w*$/;var B=function(r){var e=new r.constructor(r.source,M.exec(r));return e.lastIndex=r.lastIndex,e},L=t(6804),P=L.Z?L.Z.prototype:void 0,R=P?P.valueOf:void 0;var T=function(r){return R?Object(R.call(r)):{}};var V=function(r,e){var t=e?E(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)};var G=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return E(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return k(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return V(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return B(r);case"[object Symbol]":return T(r)}},J=t(8465),W=Object.create,Y=function(){function r(){}return function(e){if(!(0,J.Z)(e))return{};if(W)return W(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),$=t(8846),q=t(2498);var z=function(r){return"function"!=typeof r.constructor||(0,q.Z)(r)?{}:Y((0,$.Z)(r))},H=t(8567),K=t(4932),Q=t(8809);var X=function(r){return(0,Q.Z)(r)&&"[object Map]"==(0,O.Z)(r)},rr=t(422),er=t(1310),tr=er.Z&&er.Z.isMap,nr=tr?(0,rr.Z)(tr):X;var ar=function(r){return(0,Q.Z)(r)&&"[object Set]"==(0,O.Z)(r)},or=er.Z&&er.Z.isSet,cr=or?(0,rr.Z)(or):ar,ur="[object Arguments]",ir="[object Function]",sr="[object Object]",lr={};lr[ur]=lr["[object Array]"]=lr["[object ArrayBuffer]"]=lr["[object DataView]"]=lr["[object Boolean]"]=lr["[object Date]"]=lr["[object Float32Array]"]=lr["[object Float64Array]"]=lr["[object Int8Array]"]=lr["[object Int16Array]"]=lr["[object Int32Array]"]=lr["[object Map]"]=lr["[object Number]"]=lr[sr]=lr["[object RegExp]"]=lr["[object Set]"]=lr["[object String]"]=lr["[object Symbol]"]=lr["[object Uint8Array]"]=lr["[object Uint8ClampedArray]"]=lr["[object Uint16Array]"]=lr["[object Uint32Array]"]=!0,lr["[object Error]"]=lr[ir]=lr["[object WeakMap]"]=!1;var fr=function r(e,t,n,a,o,c){var u,f=1&t,v=2&t,d=4&t;if(n&&(u=o?n(e,a,o,c):n(e)),void 0!==u)return u;if(!(0,J.Z)(e))return e;var y=(0,H.Z)(e);if(y){if(u=U(e),!f)return x(e,u)}else{var h=(0,O.Z)(e),Z=h==ir||"[object GeneratorFunction]"==h;if((0,K.Z)(e))return w(e,f);if(h==sr||h==ur||Z&&!o){if(u=v||Z?{}:z(e),!f)return v?S(e,p(u,e)):_(e,b(u,e))}else{if(!lr[h])return o?e:{};u=G(e,h,f)}}c||(c=new i.Z);var g=c.get(e);if(g)return g;c.set(e,u),cr(e)?e.forEach((function(a){u.add(r(a,t,n,a,e,c))})):nr(e)&&e.forEach((function(a,o){u.set(o,r(a,t,n,o,e,c))}));var A=d?v?C.Z:F.Z:v?j.Z:m.Z,N=y?void 0:A(e);return s(N||e,(function(a,o){N&&(a=e[o=a]),(0,l.Z)(u,o,r(a,t,n,o,e,c))})),u},vr=t(9682);var mr=function(r){var e=null==r?0:r.length;return e?r[e-1]:void 0},br=t(5105);var jr=function(r,e,t){var n=-1,a=r.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++n<a;)o[n]=r[n+e];return o};var pr=function(r,e){return e.length<2?r:(0,br.Z)(r,jr(e,0,-1))},dr=t(5884);var yr=function(r,e){return e=(0,vr.Z)(e,r),null==(r=pr(r,e))||delete r[(0,dr.Z)(mr(e))]},hr=t(5275),Zr=Function.prototype,gr=Object.prototype,wr=Zr.toString,xr=gr.hasOwnProperty,Ar=wr.call(Object);var _r=function(r){if(!(0,Q.Z)(r)||"[object Object]"!=(0,hr.Z)(r))return!1;var e=(0,$.Z)(r);if(null===e)return!0;var t=xr.call(e,"constructor")&&e.constructor;return"function"==typeof t&&t instanceof t&&wr.call(t)==Ar};var Nr=function(r){return _r(r)?void 0:r},Sr=t(3604),Fr=t(4609),Cr=L.Z?L.Z.isConcatSpreadable:void 0;var Or=function(r){return(0,H.Z)(r)||(0,Fr.Z)(r)||!!(Cr&&r&&r[Cr])};var Ir=function r(e,t,n,a,o){var c=-1,u=e.length;for(n||(n=Or),o||(o=[]);++c<u;){var i=e[c];t>0&&n(i)?t>1?r(i,t-1,n,a,o):(0,Sr.Z)(o,i):a||(o[o.length]=i)}return o};var Ur=function(r){return(null==r?0:r.length)?Ir(r,1):[]};var Dr=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)},Er=Math.max;var kr=function(r,e,t){return e=Er(void 0===e?r.length-1:e,0),function(){for(var n=arguments,a=-1,o=Er(n.length-e,0),c=Array(o);++a<o;)c[a]=n[e+a];a=-1;for(var u=Array(e+1);++a<e;)u[a]=n[a];return u[e]=t(c),Dr(r,this,u)}};var Mr=function(r){return function(){return r}},Br=t(3756),Lr=t(3963),Pr=Br.Z?function(r,e){return(0,Br.Z)(r,"toString",{configurable:!0,enumerable:!1,value:Mr(e),writable:!0})}:Lr.Z,Rr=Date.now;var Tr=function(r){var e=0,t=0;return function(){var n=Rr(),a=16-(n-t);if(t=n,a>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}},Vr=Tr(Pr);var Gr=function(r){return Vr(kr(r,void 0,Ur),r+"")}((function(r,e){var t={};if(null==r)return t;var n=!1;e=(0,u.Z)(e,(function(e){return e=(0,vr.Z)(e,r),n||(n=e.length>1),e})),v(r,(0,C.Z)(r),t),n&&(t=fr(t,7,Nr));for(var a=e.length;a--;)yr(t,e[a]);return t})),Jr=t(5048),Wr=t(7689),Yr=t(6731),$r=t(9085),qr=t(7266),zr=t(1788),Hr=t(184),Kr=(new Date).getFullYear(),Qr={email:"",first_name:"",last_name:"",password:""},Xr=function(){var r=(0,Jr.I0)(),e=(0,Wr.s0)(),t=(0,c.useState)(!1),u=(0,o.Z)(t,2),i=u[0],s=u[1],l=(0,c.useState)(Qr),f=(0,o.Z)(l,2),v=f[0],m=f[1],b=function(r){var e=r.target,t=e.value,o=e.name;m((function(r){return(0,a.Z)((0,a.Z)({},r),{},(0,n.Z)({},o,t))}))};return(0,Hr.jsx)(Hr.Fragment,{children:(0,Hr.jsxs)("form",{action:"#",className:"mt-5 mx-auto p-0",style:{width:"450px"},onSubmit:function(t){t.preventDefault(),s(!0),(0,zr.Jr)(v).then((function(){$r.Am.success("Success!"),r((0,qr.F)(Gr(v,"first_name","last_name"))).unwrap()})).then((function(){return e("/",{replace:!0})})).catch((function(){return $r.Am.error("Error")}))},children:[(0,Hr.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please Sign In"}),(0,Hr.jsxs)("div",{className:"form-floating my-4",children:[(0,Hr.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"username",value:v.email,onChange:b,className:"form-control"}),(0,Hr.jsx)("label",{htmlFor:"email",children:"Email address"})]}),(0,Hr.jsxs)("div",{className:"form-floating my-4",children:[(0,Hr.jsx)("input",{id:"first_name",name:"first_name",type:"first_name",autoComplete:"off",value:v.first_name,onChange:b,className:"form-control"}),(0,Hr.jsx)("label",{htmlFor:"first_name",children:"First Name"})]}),(0,Hr.jsxs)("div",{className:"form-floating my-4",children:[(0,Hr.jsx)("input",{id:"last_name",name:"last_name",type:"last_name",autoComplete:"off",value:v.last_name,onChange:b,className:"form-control"}),(0,Hr.jsx)("label",{htmlFor:"last_name",children:"Last Name"})]}),(0,Hr.jsxs)("div",{className:"form-floating my-4",children:[(0,Hr.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",value:v.password,onChange:b,className:"form-control"}),(0,Hr.jsx)("label",{htmlFor:"password",children:"Password"})]}),(0,Hr.jsx)(Yr.rU,{to:"/login",className:"d-block my-4",children:"Already has account?"}),(0,Hr.jsx)("button",{className:"w-100 mt-2 btn btn-lg btn-primary",disabled:i,type:"submit",children:i?"Loading ....":"Sign In"}),(0,Hr.jsxs)("p",{className:"mt-5 mb-3 text-muted",children:["\xa9 ",Kr]})]})})}}}]);
//# sourceMappingURL=274.31c2429c.chunk.js.map