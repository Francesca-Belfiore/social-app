(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={post:"Post_post__3hqZB"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),r=n.n(s),i=n(11),o=(n(28),n(5)),j=n(10),l=(n(29),n(16)),u=n.n(l),d=n(2),h=n(0),b=function(e){var t=e.name||"App",n=e.links||[{link:"",label:""}],a=function(e){var t=Object(d.h)(e);return Object(d.f)({path:t.pathname,end:!0})?u.a.active:""};return Object(h.jsxs)("header",{className:u.a.header,children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{className:a(e.link),to:e.link,children:e.label})},t)}))})})]})},m=n(12),O=n(17),x=n.n(O),p="https://edgemony-backend.herokuapp.com",f=function(e){return fetch(p+e).then((function(e){return e.json()}))},g=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=function(e){return c((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},r=Object(a.useState)({}),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){u({author:n.author,text:n.message,date:(new Date).toISOString(),photo:n.image})}),[n.author,n.image,n.message]),Object(h.jsx)("div",{className:x.a.createPost,children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:x.a.__author,children:[Object(h.jsx)("input",{value:n.author||"",onChange:s,type:"text",name:"author",id:"author",placeholder:"Author",required:!0}),Object(h.jsx)("input",{value:n.image||"",onChange:s,type:"text",name:"image",id:"image",placeholder:"Image URL"}),Object(h.jsx)("button",{type:"submit",onClick:function(e){var t;e.preventDefault(),t=l,fetch(p+"/posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})),console.log(l),alert("post creato!")},children:"SEND"})]}),Object(h.jsx)("textarea",{value:n.message||"",onChange:s,name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message",required:!0})]})})},_=n(20),v=n.n(_),w=function(){var e=(new Date).getFullYear();return Object(h.jsxs)("footer",{className:v.a.footer,children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:["Copyright FB ",e]})]})},k=n(18),C=n.n(k),F=n(21),y=n.n(F),S=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(h.jsxs)("div",{className:y.a.friend,children:[Object(h.jsx)("img",{src:t.photo,alt:t.name}),Object(h.jsx)("p",{children:t.name})]})},P=n(22),D=n.n(P),N=n(34),H=n(35),M=function(e){var t=e.date;return Object(h.jsx)("p",{children:t?Object(h.jsxs)("small",{children:[Object(N.a)(new Date(t),new Date,{addSuffix:!0,locale:H.a})," - ",new Date(t).toLocaleTimeString()]}):Object(h.jsx)(h.Fragment,{})})},B=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(h.jsxs)("div",{className:D.a.message,children:[Object(h.jsx)("h5",{children:t.sender}),Object(h.jsx)(M,{date:t.date}),Object(h.jsx)("p",{children:t.text})]})},I=n(23),E=n.n(I),T=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"};return Object(h.jsxs)("article",{className:E.a.post,children:[Object(h.jsx)("h3",{children:t.author}),Object(h.jsx)(M,{date:t.date}),Object(h.jsx)("p",{children:t.text}),t.photo?Object(h.jsx)("img",{src:t.photo,alt:t.author}):Object(h.jsx)(h.Fragment,{})]})},q=[],G=[],J=[],L=function(){var e=Object(a.useState)(J),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(G),r=Object(o.a)(s,2),i=r[0],j=r[1],l=Object(a.useState)(q),u=Object(o.a)(l,2),d=u[0],b=u[1];return Object(a.useEffect)((function(){f("/friends?_limit=4").then((function(e){return b(e)})),f("/messages?_limit=4").then((function(e){return j(e)})),f("/posts").then((function(e){return c(e)}))}),[]),Object(h.jsxs)("section",{className:C.a.home,children:[Object(h.jsx)("h3",{children:"Benvenuto utente"}),Object(h.jsxs)("div",{className:C.a.grid,children:[Object(h.jsx)("aside",{children:d.map((function(e,t){return Object(h.jsx)(S,{data:e},t)}))}),Object(h.jsxs)("main",{children:[Object(h.jsx)(g,{}),n.map((function(e,t){return Object(h.jsx)(T,{data:e},t)}))]}),Object(h.jsx)("aside",{children:i.map((function(e,t){return Object(h.jsx)(B,{data:e},t)}))})]})]})},U={name:"Feisbrut",nav:[{link:"/new-post",label:"Create new post"},{link:"/social-app",label:"Home"},{link:"/friends",label:"Friends"},{link:"/messages",label:"Messages"}],friendsPreview:[]},A=function(e,t){return"change-name"===t.type?Object(j.a)(Object(j.a)({},e),{},{name:"Feisbell"}):e};var X=function(){var e=Object(a.useReducer)(A,U),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{name:n.name,links:n.nav}),Object(h.jsx)("button",{onClick:function(){return c({type:"change-name"})},children:"Cambia nome"}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/new-post",element:Object(h.jsx)(g,{})}),Object(h.jsx)(d.a,{path:"/social-app",element:Object(h.jsx)(L,{})}),Object(h.jsx)(d.a,{path:"/messages",element:Object(h.jsx)("h3",{children:"Messages"})}),Object(h.jsx)(d.a,{path:"/friends",element:Object(h.jsx)("h3",{children:"Friends"})})]}),Object(h.jsx)(w,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(X,{})})}),document.getElementById("root")),R()}],[[31,1,2]]]);
//# sourceMappingURL=main.e7895f6d.chunk.js.map