(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",friend:"Home_friend__eOEhP"}},,,function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){e.exports={post:"Post_post__3hqZB"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(17),r=n.n(s),i=n(10),j=(n(26),n(6)),o=n(16),d=(n(27),n(14)),l=n.n(d),b=n(2),h=n(1),u=function(e){var t=e.name||"App",n=e.links||[{link:"",label:""}],c=function(e){var t=Object(b.h)(e);return Object(b.f)({path:t.pathname,end:!0})?l.a.active:""};return Object(h.jsxs)("header",{className:l.a.header,children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:n.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{className:c(e.link),to:e.link,children:e.label})},t)}))})})]})},x=n(18),O=n.n(x),m=function(){var e=(new Date).getFullYear();return Object(h.jsxs)("footer",{className:O.a.footer,children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:["Copyright FB ",e]})]})},f=n(15),p=n.n(f),g=n(19),v=n.n(g),_=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(h.jsxs)("div",{className:v.a.friend,children:[Object(h.jsx)("img",{src:t.photo,alt:t.name}),Object(h.jsx)("p",{children:t.name})]})},w=n(20),F=n.n(w),k=n(32),D=n(33),H=function(e){var t=e.date;return Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:[Object(k.a)(new Date(t),new Date,{addSuffix:!0,locale:D.a})," - ",new Date(t).toLocaleTimeString()]})})},y=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(h.jsxs)("div",{className:F.a.message,children:[Object(h.jsx)("h5",{children:t.sender}),Object(h.jsx)(H,{date:t.date}),Object(h.jsx)("p",{children:t.text})]})},N=n(21),B=n.n(N),M=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"};return Object(h.jsxs)("article",{className:B.a.post,children:[Object(h.jsx)("h3",{children:t.author}),Object(h.jsx)(H,{date:t.date}),Object(h.jsx)("p",{children:t.text}),t.photo?Object(h.jsx)("img",{src:t.photo,alt:t.author}):Object(h.jsx)(h.Fragment,{})]})},P=function(e){return fetch("https://edgemony-backend.herokuapp.com"+e).then((function(e){return e.json()}))},S=[],C=[],I=[],G=function(){var e=Object(c.useState)(I),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(C),r=Object(j.a)(s,2),i=r[0],o=r[1],d=Object(c.useState)(S),l=Object(j.a)(d,2),b=l[0],u=l[1];return Object(c.useEffect)((function(){P("/friends?_limit=4").then((function(e){return u(e)})),P("/messages?_limit=4").then((function(e){return o(e)})),P("/posts").then((function(e){return a(e)}))}),[]),Object(h.jsxs)("section",{className:p.a.home,children:[Object(h.jsx)("h3",{children:"Benvenuto utente"}),Object(h.jsxs)("div",{className:p.a.grid,children:[Object(h.jsx)("aside",{children:b.map((function(e,t){return Object(h.jsx)(_,{data:e},t)}))}),Object(h.jsx)("main",{children:n.map((function(e,t){return Object(h.jsx)(M,{data:e},t)}))}),Object(h.jsx)("aside",{children:i.map((function(e,t){return Object(h.jsx)(y,{data:e},t)}))})]})]})},T={name:"Feisbrut",nav:[{link:"/social-app",label:"Home"},{link:"/friends",label:"Friends"},{link:"/messages",label:"Messages"}],friendsPreview:[]},E=function(e,t){return"change-name"===t.type?Object(o.a)(Object(o.a)({},e),{},{name:"Feisbell"}):e};var J=function(){var e=Object(c.useReducer)(E,T),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{name:n.name,links:n.nav}),Object(h.jsx)("button",{onClick:function(){return a({type:"change-name"})},children:"Cambia nome"}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/social-app",element:Object(h.jsx)(G,{})}),Object(h.jsx)(b.a,{path:"/messages",element:Object(h.jsx)("h3",{children:"Messages"})}),Object(h.jsx)(b.a,{path:"/friends",element:Object(h.jsx)("h3",{children:"Friends"})})]}),Object(h.jsx)(m,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(J,{})})}),document.getElementById("root")),L()}],[[29,1,2]]]);
//# sourceMappingURL=main.61eff40d.chunk.js.map