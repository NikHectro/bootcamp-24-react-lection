"use strict";(self.webpackChunkbootcamp_24_react=self.webpackChunkbootcamp_24_react||[]).push([[719],{4580:function(e,t,n){n.d(t,{Xv:function(){return r},jX:function(){return u},DN:function(){return b},AK:function(){return N},o3:function(){return Z}});var s=n.p+"static/media/713761_big_8857bc5285.4a8a759c1673e3abd7cb.jpeg",a=n(184),r=function(){return(0,a.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,a.jsx)("img",{src:s,alt:"not found",style:{width:300}}),(0,a.jsx)("p",{className:"my-3",children:"\u0412\u0441\u0435 \u0438\u0434\u0435\u0442 \u043f\u043e \u043f\u043b\u0430\u043d\u0443. \u041f\u043e\u0442\u0435\u0440\u044c \u043d\u0435\u0442!"})]})},i=n(5763),c=n(5048),l=n(7689),o=n(6731),u=function(e){var t,n,s=e.post,r=e.onDelete,u=(0,l.TH)(),d=(0,c.v9)((function(e){return e.profile.data}));return(0,a.jsx)("div",{className:"col-12 col-xl-6 col-xxl-4 mb-4",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("img",{height:"250px",alt:s.title,src:s.preview_image,className:"card-img-top",style:{objectFit:"cover"}}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h5",{className:"card-title",children:s.title}),(0,a.jsx)("p",{className:"card-text",children:(t=s.content,n=60,t.length>n?t.slice(0,n)+"...":t)}),(0,a.jsxs)("ul",{className:"list-group list-group-flush mb-4",children:[(0,a.jsxs)("li",{className:"list-group-item",children:["Views: ",s.views]}),(0,a.jsxs)("li",{className:"list-group-item",children:["Created: ",(0,i.Z)(new Date(s.created_at))]})]}),(0,a.jsxs)("div",{className:"d-flex",children:[(null===d||void 0===d?void 0:d.id)===s.user_id&&(0,a.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return r(s.id)},children:"Delete post"}),(0,a.jsx)(o.rU,{to:"/posts/".concat(s.id),state:{from:u},className:"btn btn-link ms-3",children:"Read post"})]})]})]})})},d=n(2982),m=n(1413),p=n(4925),x=n(1694),h=n.n(x),f="Skeleton_skeleton__xUXxh",j=["className"],g=function(e){var t=e.className,n=(0,p.Z)(e,j);return(0,a.jsx)("div",(0,m.Z)({className:h()(f,t)},n))},b=function(e){var t=e.amount,n=void 0===t?6:t;return(0,a.jsx)("div",{className:"container-fluid g-0 pb-5 mb-5",children:(0,a.jsx)("div",{className:"row",children:(0,d.Z)(Array(n)).map((function(e,t){return(0,a.jsx)("div",{className:"col-12 col-xl-6 col-xxl-4 mb-4",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)(g,{style:{height:"250px"}}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h5",{className:"card-title mb-4",children:(0,a.jsx)(g,{style:{height:"12px"}})}),(0,a.jsxs)("div",{className:"card-text",children:[(0,a.jsx)(g,{className:"my-2"}),(0,a.jsx)(g,{className:"w-50"})]}),(0,a.jsxs)("ul",{className:"list-group list-group-flush my-4",children:[(0,a.jsxs)("li",{className:"list-group-item d-flex align-items-center",children:["Views: ",(0,a.jsx)(g,{className:"w-25 ms-2"})]}),(0,a.jsxs)("li",{className:"list-group-item d-flex align-items-center",children:["Created: ",(0,a.jsx)(g,{className:"w-25 ms-2"})]})]}),(0,a.jsxs)("div",{className:"d-flex mt-3",children:[(0,a.jsx)("div",{className:"btn btn-link disabled",children:"Delete post"}),(0,a.jsx)("div",{className:"btn btn-link disabled ms-3",children:"Read post"})]})]})]})},t)}))})})},v=n.p+"static/media/713761_big_8857bc5285.4a8a759c1673e3abd7cb.jpeg",N=function(){return(0,a.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,a.jsx)("img",{src:v,alt:"not found",style:{width:300}}),(0,a.jsx)("p",{className:"my-3",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a. \u041f\u043e\u0442\u0435\u0440\u044c \u043d\u0435\u0442!"})]})},y=n(885),k=n(2791),w=n(340),Z=function(){var e,t,n=(0,o.lr)(),s=(0,y.Z)(n,2),r=s[0],i=s[1],c=null!==(e=r.get("search"))&&void 0!==e?e:"",l=null!==(t=r.get("page"))&&void 0!==t?t:1,u=(0,k.useState)(c),d=(0,y.Z)(u,2),m=d[0],p=d[1];return(0,a.jsxs)("form",{className:"input-group input-group-lg mb-5",onSubmit:function(e){e.preventDefault(),i(m.trim()?{search:m,page:1}:{page:1})},children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Type to search...",value:m,onChange:function(e){return p(e.target.value)}}),(0,a.jsx)(w.z,{onClick:function(){i({page:l})},className:"btn-outline-secondary",children:"Reset"}),(0,a.jsx)(w.z,{type:"submit",children:"Search"})]})}},9760:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var s=n(2982),a=n(885),r=n(6731),i=n(340),c=n(4580),l=n(2791),o=n(7234),u=n(3313),d=["None","Space","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],m=n(184),p=function(e){return e.join("").replace(/None/gi,"").replace(/Space/gi," ")},x=function(e){var t=e.value,n=e.onChange,s=e.index;return(0,m.jsx)("select",{value:t,onChange:function(e){n((function(t){return t.map((function(t,n){return s===n?e.target.value:t}))}))},className:"form-select me-1 mb-2","aria-label":"Default select example",style:{width:"90px"},children:d.map((function(e){return(0,m.jsx)("option",{value:e,children:e},e)}))})},h=function(){var e=(0,r.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=n.get("page"),h=n.get("search"),f=(0,l.useState)((function(){return function(e){var t=e.replace(/[^a-z]/gi," ").split("");return t.length?t.map((function(e){return e.replace(/[^a-z]/gi,"Space")})):["None"]}(null!==h&&void 0!==h?h:"")})),j=(0,a.Z)(f,2),g=j[0],b=j[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{action:"#",className:"d-flex flex-wrap",onSubmit:function(e){e.preventDefault(),c((0,o.Z)({page:d,search:p(g)},(function(e){return!e})))},children:[g.map((function(e,t){return(0,m.jsx)(x,{index:t,value:e,onChange:b},t)})),(0,m.jsx)(i.z,{className:"btn-secondary me-1 mb-2",onClick:function(){return b((function(e){return e.length>1?e.filter((function(t,n){return n+1!==e.length})):["None"]}))},children:(0,m.jsx)(u.ego,{})}),(0,m.jsx)(i.z,{className:"btn-secondary me-1 mb-2",onClick:function(){return b((function(e){return[].concat((0,s.Z)(e),[""])}))},children:(0,m.jsx)(u.OvN,{})}),(0,m.jsx)(i.z,{className:"btn-secondary me-1 mb-2",onClick:function(){c(d?{page:d}:{}),b(["None"])},children:"Reset"}),(0,m.jsx)(i.z,{type:"submit",className:"btn-primary mb-2",children:"Submit"})]}),(0,m.jsxs)("p",{className:"mt-2 mb-4",children:["Your search query: ",(0,m.jsx)("b",{children:p(g)||"..."})]})]})},f=n(1413),j=n(1465),g=n(255),b=(0,j.LC)({reducerPath:"rtk-posts",baseQuery:(0,g.ni)({baseUrl:"https://taupe-croissant-c4162a.netlify.app/api"}),tagTypes:["Posts"],endpoints:function(e){return{getPosts:e.query({query:function(e){return{url:"posts",params:(0,o.Z)((0,f.Z)((0,f.Z)({},e),{},{limit:6}),(function(e){return!e}))}},providesTags:function(e){return null!==e&&void 0!==e&&e.data?[].concat((0,s.Z)(e.data.map((function(e){return{type:"Posts",id:e.id}}))),[{type:"Posts",id:"LIST"}]):[{type:"Posts",id:"LIST"}]}}),deletePost:e.mutation({query:function(e){return{url:"posts/".concat(e),method:"DELETE"}}})}}}),v=b.useGetPostsQuery,N=(b.useLazyGetPostsQuery,b.useDeletePostMutation),y=function(){var e,t,n=(0,r.lr)(),l=(0,a.Z)(n,2),o=l[0],u=l[1],d=o.get("page"),p=null!==(e=o.get("search"))&&void 0!==e?e:"",x=v({page:d,search:p}),f=x.data,j=x.isSuccess,g=x.isLoading,b=x.isError,y=N(),k=(0,a.Z)(y,1)[0];return g?(0,m.jsx)(c.DN,{}):b?(0,m.jsx)(c.Xv,{}):!j||null!==f&&void 0!==f&&null!==(t=f.data)&&void 0!==t&&t.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{}),(0,m.jsx)("div",{className:"container-fluid g-0 pb-5 mb-5",children:(0,m.jsx)("div",{className:"row",children:f.data.map((function(e){return(0,m.jsx)(c.jX,{post:e,onDelete:k},e.id)}))})}),(0,m.jsx)("div",{className:"pagination",children:(0,m.jsx)("div",{className:"btn-group mx-auto py-3",children:(0,s.Z)(Array(f.total_pages)).map((function(e,t){return(0,m.jsx)(i.z,{disabled:t+1===f.page,onClick:function(){return u({page:t+1,search:p})},children:t+1},t)}))})})]}):(0,m.jsx)(c.AK,{})}}}]);
//# sourceMappingURL=719.5b21372d.chunk.js.map