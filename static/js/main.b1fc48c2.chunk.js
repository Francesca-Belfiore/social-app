(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},function(e,t,n){e.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},,function(e,t,n){e.exports={Modal:"Modal_Modal__32mLz"}},function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={Messages:"Messages_Messages__3lm0z"}},function(e,t,n){e.exports={Friends:"Friends_Friends__2IY9Z"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),r=n.n(c),o=n(10),i=(n(31),n(5)),j=n(11),u=(n(32),n(17)),l=n.n(u),d=n(2),b=n(0),h=function(e){var t=e.name||"App",n=e.links||[{link:"",label:""}],a=function(e){var t=Object(d.h)(e);return Object(d.f)({path:t.pathname,end:!0})?l.a.active:""};return Object(b.jsxs)("header",{className:l.a.header,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:n.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{className:a(e.link),to:e.link,children:e.label})},t)}))})})]})},O=n(12),m=n(18),f=n.n(m),x="https://edgemony-backend.herokuapp.com",p=function(e){return fetch(x+e).then((function(e){return e.json()}))},g=n(21),_=n.n(g),v=function(e){return Object(b.jsx)("p",{className:_.a.Modal,style:{backgroundColor:e.color},children:e.message})},w=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],s=t[1],c=function(e){return s((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},r=Object(a.useState)({}),o=Object(i.a)(r,2),u=o[0],l=o[1],d=Object(a.useState)(!1),h=Object(i.a)(d,2),m=h[0],p=h[1];return Object(a.useEffect)((function(){l({author:n.author,text:n.message,date:(new Date).toISOString(),photo:n.image})}),[n.author,n.image,n.message]),Object(b.jsx)("div",{className:f.a.createPost,children:Object(b.jsxs)("form",{children:[m?Object(b.jsx)(v,{color:"lightskyblue",message:"Post created!"}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{className:f.a.__author,children:[Object(b.jsx)("input",{value:n.author||"",onChange:c,type:"text",name:"author",id:"author",placeholder:"Author",required:!0}),Object(b.jsx)("input",{value:n.image||"",onChange:c,type:"text",name:"image",id:"image",placeholder:"Image URL"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){var t;e.preventDefault(),t=u,fetch(x+"/posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})),console.log(u),p(!0),setTimeout((function(){p(!1)}),1500)},children:"SEND"})]}),Object(b.jsx)("textarea",{value:n.message||"",onChange:c,name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message",required:!0})]})})},F=function(){return Object(b.jsx)(w,{})},P=n(22),C=n.n(P),S=function(){var e=(new Date).getFullYear();return Object(b.jsxs)("footer",{className:C.a.footer,children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["Copyright FB ",e]})]})},k=n(15),y=n.n(k),N=n(23),M=n.n(N),B=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(b.jsxs)("div",{className:M.a.friend,children:[Object(b.jsx)("img",{src:t.photo,alt:t.name}),Object(b.jsx)("p",{children:t.name})]})},D=n(24),E=n.n(D),H=n(37),I=n(38),T=function(e){var t=e.date;return Object(b.jsx)("p",{children:t?Object(b.jsxs)("small",{children:[Object(H.a)(new Date(t),new Date,{addSuffix:!0,locale:I.a})," - ",new Date(t).toLocaleTimeString()]}):Object(b.jsx)(b.Fragment,{})})},L=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(b.jsxs)("div",{className:E.a.message,children:[Object(b.jsx)("h5",{children:t.sender}),Object(b.jsx)(T,{date:t.date}),Object(b.jsx)("p",{children:t.text})]})},G=n(19),q=n.n(G),J=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"},n=Object(a.useState)(!1),s=Object(i.a)(n,2),c=s[0],r=s[1];return Object(b.jsxs)("article",{className:q.a.post,children:[Object(b.jsx)("button",{className:q.a.deleteBtn,onClick:function(){var t;(t="/posts/".concat(e.data.id),fetch(x+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))).then((function(){})),r(!0),setTimeout((function(){r(!1)}),1500)},children:"X"}),Object(b.jsx)("h3",{children:t.author}),Object(b.jsx)(T,{date:t.date}),Object(b.jsx)("p",{children:t.text}),t.photo?Object(b.jsx)("img",{src:t.photo,alt:t.author}):Object(b.jsx)(b.Fragment,{}),c?Object(b.jsx)(v,{color:"lightcoral",message:"Post deleted!"}):Object(b.jsx)(b.Fragment,{})]})},U=[],X=[],A=[],Y=function(){var e=Object(a.useState)(A),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(X),r=Object(i.a)(c,2),j=r[0],u=r[1],l=Object(a.useState)(U),d=Object(i.a)(l,2),h=d[0],O=d[1];return Object(a.useEffect)((function(){p("/friends?_limit=4").then((function(e){return O(e)})),p("/messages?_limit=4").then((function(e){return u(e)})),p("/posts").then((function(e){return s(e.reverse())}))}),[n]),Object(b.jsxs)("section",{className:y.a.home,children:[Object(b.jsx)("h3",{children:"Benvenuto utente"}),Object(b.jsxs)("div",{className:y.a.grid,children:[Object(b.jsx)("aside",{children:h.map((function(e,t){return Object(b.jsx)(B,{data:e},t)}))}),Object(b.jsxs)("main",{children:[Object(b.jsx)(o.b,{to:"/new-post",children:Object(b.jsx)("button",{className:y.a.createPostBtn,children:"Create a new post!"})}),n.map((function(e,t){return Object(b.jsx)(J,{data:e},t)}))]}),Object(b.jsx)("aside",{children:j.map((function(e,t){return Object(b.jsx)(L,{data:e},t)}))})]})]})},z=n(25),R=n.n(z),Z=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){p("/messages").then((function(e){return s(e)}))}),[]),Object(b.jsx)("div",{className:R.a.Messages,children:n.map((function(e){return Object(b.jsx)(L,{data:e},e.id)}))})},Q=n(26),V=n.n(Q),W=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){p("/friends").then((function(e){return s(e)}))}),[]),Object(b.jsx)("div",{className:V.a.Friends,children:n.map((function(e){return Object(b.jsx)(B,{data:e},e.id)}))})},K={name:"Feisbrut",nav:[{link:"/social-app",label:"Home"},{link:"/friends",label:"Friends"},{link:"/messages",label:"Messages"}],friendsPreview:[]},$=function(e,t){return"change-name"===t.type?Object(j.a)(Object(j.a)({},e),{},{name:"Feisbell"}):e};var ee=function(){var e=Object(a.useReducer)($,K),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{name:n.name,links:n.nav}),Object(b.jsx)("button",{onClick:function(){return s({type:"change-name"})},children:"Cambia nome"}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/new-post",element:Object(b.jsx)(F,{})}),Object(b.jsx)(d.a,{path:"/social-app",element:Object(b.jsx)(Y,{})}),Object(b.jsx)(d.a,{path:"/messages",element:Object(b.jsx)(Z,{})}),Object(b.jsx)(d.a,{path:"/friends",element:Object(b.jsx)(W,{})})]}),Object(b.jsx)(S,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(ee,{})})}),document.getElementById("root")),te()}],[[34,1,2]]]);
//# sourceMappingURL=main.b1fc48c2.chunk.js.map