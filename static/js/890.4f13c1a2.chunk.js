"use strict";(self.webpackChunkbootcamp_24_react=self.webpackChunkbootcamp_24_react||[]).push([[890],{6212:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var n=s(2982),a=s(885),r=s(2791),c=s(6731),i=s(9085),l=s(6123),u=s.p+"static/media/713761_big_8857bc5285.4a8a759c1673e3abd7cb.jpeg",o=s(184),d=function(){return(0,o.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,o.jsx)("img",{src:u,alt:"not found",style:{width:300}}),(0,o.jsx)("p",{className:"my-3",children:"\u0412\u0441\u0435 \u0438\u0434\u0435\u0442 \u043f\u043e \u043f\u043b\u0430\u043d\u0443. \u041f\u043e\u0442\u0435\u0440\u044c \u043d\u0435\u0442!"})]})},p=s(9353),m=s(4522);function x(e,t){return(0,m.Z)(1,arguments),(0,p.Z)(e,Date.now(),t)}var h=s(7689),f=s(4787),j=function(e){var t,s,n=e.post,a=e.onDelete,r=(0,f.aC)().isAuth,i=(0,h.TH)();return(0,o.jsx)("div",{className:"col-12 col-xl-6 col-xxl-4 mb-4",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("img",{height:"250px",alt:n.title,src:n.preview_image,className:"card-img-top",style:{objectFit:"cover"}}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h5",{className:"card-title",children:n.title}),(0,o.jsx)("p",{className:"card-text",children:(t=n.content,s=60,t.length>s?t.slice(0,s)+"...":t)}),(0,o.jsxs)("ul",{className:"list-group list-group-flush mb-4",children:[(0,o.jsxs)("li",{className:"list-group-item",children:["Views: ",n.views]}),(0,o.jsxs)("li",{className:"list-group-item",children:["Created: ",x(new Date(n.created_at))]})]}),r&&(0,o.jsxs)("div",{className:"d-flex",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return a(n.id)},children:"Delete post"}),(0,o.jsx)(c.rU,{to:"/posts/".concat(n.id),state:{from:i},className:"btn btn-link ms-3",children:"Read post"})]})]})]})})},v=s(1413),b=s(4925),g=s(1694),N=s.n(g),y="Skeleton_skeleton__xUXxh",Z=["className"],w=function(e){var t=e.className,s=(0,b.Z)(e,Z);return(0,o.jsx)("div",(0,v.Z)({className:N()(y,t)},s))},k=function(e){var t=e.amount,s=void 0===t?6:t;return(0,o.jsx)("div",{className:"container-fluid g-0 pb-5 mb-5",children:(0,o.jsx)("div",{className:"row",children:(0,n.Z)(Array(s)).map((function(e,t){return(0,o.jsx)("div",{className:"col-12 col-xl-6 col-xxl-4 mb-4",children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)(w,{style:{height:"250px"}}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h5",{className:"card-title mb-4",children:(0,o.jsx)(w,{style:{height:"12px"}})}),(0,o.jsxs)("div",{className:"card-text",children:[(0,o.jsx)(w,{className:"my-2"}),(0,o.jsx)(w,{className:"w-50"})]}),(0,o.jsxs)("ul",{className:"list-group list-group-flush my-4",children:[(0,o.jsxs)("li",{className:"list-group-item d-flex align-items-center",children:["Views: ",(0,o.jsx)(w,{className:"w-25 ms-2"})]}),(0,o.jsxs)("li",{className:"list-group-item d-flex align-items-center",children:["Created: ",(0,o.jsx)(w,{className:"w-25 ms-2"})]})]}),(0,o.jsxs)("div",{className:"d-flex mt-3",children:[(0,o.jsx)("div",{className:"btn btn-link disabled",children:"Delete post"}),(0,o.jsx)("div",{className:"btn btn-link disabled ms-3",children:"Read post"})]})]})]})},t)}))})})},_=s.p+"static/media/713761_big_8857bc5285.4a8a759c1673e3abd7cb.jpeg",C=function(){return(0,o.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,o.jsx)("img",{src:_,alt:"not found",style:{width:300}}),(0,o.jsx)("p",{className:"my-3",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a. \u041f\u043e\u0442\u0435\u0440\u044c \u043d\u0435\u0442!"})]})},D=function(){var e,t=(0,c.lr)(),s=(0,a.Z)(t,2),i=s[0],u=s[1],d=(0,r.useMemo)((function(){return(0,n.Z)(i).reduce((function(e,t){var s=(0,a.Z)(t,2),n=s[0],r=s[1];return e[n]=r,e}),{})}),[i]),p=(0,r.useState)(null!==(e=d.search)&&void 0!==e?e:""),m=(0,a.Z)(p,2),x=m[0],h=m[1];return(0,o.jsxs)("form",{className:"input-group mb-3",onSubmit:function(e){e.preventDefault(),u((function(e){return(0,v.Z)((0,v.Z)({},d),{},{search:x,page:1})}))},children:[(0,o.jsx)("input",{type:"text",className:"form-control",placeholder:"Type to search...",value:x,onChange:function(e){return h(e.target.value)}}),(0,o.jsx)(l.z,{type:"submit",children:"Search"})]})},R="idle",A="loading",S="error",U="success",L=s(6261),M={posts:null,status:R},z="set-posts",F="set-status",T=function(e,t){switch(t.type){case z:return(0,v.Z)((0,v.Z)({},e),{},{status:U,posts:t.payload});case F:return(0,v.Z)((0,v.Z)({},e),{},{status:t.payload});default:return e}},V=function(){var e,t=(0,c.lr)(),s=(0,a.Z)(t,2),u=s[0],p=s[1],m=u.get("page"),x=null!==(e=u.get("search"))&&void 0!==e?e:"",h=(0,r.useReducer)(T,M),f=(0,a.Z)(h,2),v=f[0],b=f[1],g=(0,r.useCallback)((function(e){b({type:F,payload:A}),(0,L.Lr)(e).then((function(e){b({type:z,payload:e})})).catch((function(){return b({type:F,payload:S})}))}),[]);(0,r.useEffect)((function(){g({search:x,page:m})}),[x,m,g]);var N=(0,r.useCallback)((function(e){(0,L.Mp)(e).then((function(){return i.Am.success("You have successfully deleted the post")})).then((function(){return g({search:x,page:m})}))}),[g,m,x]);return v.status===A||v.status===R?(0,o.jsx)(k,{}):v.status===S?(0,o.jsx)(d,{}):v.status!==U||v.posts?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D,{}),(0,o.jsx)("div",{className:"container-fluid g-0 pb-5 mb-5",children:(0,o.jsx)("div",{className:"row",children:v.posts.data.map((function(e){return(0,o.jsx)(j,{post:e,onDelete:N},e.id)}))})}),(0,o.jsx)("div",{className:"pagination",children:(0,o.jsx)("div",{className:"btn-group mx-auto py-3",children:(0,n.Z)(Array(v.posts.total_pages)).map((function(e,t){return(0,o.jsx)(l.z,{disabled:t+1===v.posts.page,onClick:function(){return p({page:t+1,search:x})},children:t+1},t)}))})})]}):(0,o.jsx)(C,{})}},6261:function(e,t,s){s.d(t,{U5:function(){return u},Mp:function(){return d},Lr:function(){return l},dR:function(){return o}});var n=s(4165),a=s(1413),r=s(5861),c=s(4569),i=s.n(c)().create({baseURL:"https://taupe-croissant-c4162a.netlify.app/api"}),l=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/posts",{params:(0,a.Z)((0,a.Z)({},t),{},{limit:6})});case 2:return s=e.sent,r=s.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/posts",t);case 2:return s=e.sent,a=s.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,s){var a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/posts/".concat(t),{params:s});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),d=function(e){return i.delete("/posts/".concat(e))}}}]);
//# sourceMappingURL=890.4f13c1a2.chunk.js.map