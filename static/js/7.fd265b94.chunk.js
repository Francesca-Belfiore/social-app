(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[7],{47:function(e,t,n){e.exports={Login:"Login_Login__2rkDV"}},49:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(0),o=n(47),r=n.n(o),u=n(1);t.default=function(e){var t=Object(s.useState)(""),n=Object(a.a)(t,2),o=n[0],c=n[1],i=Object(s.useState)(""),p=Object(a.a)(i,2),l=p[0],b=p[1],f=Object(s.useState)({}),j=Object(a.a)(f,2),d=j[0],m=j[1];return Object(s.useEffect)((function(){o&&console.log(d.userName)}),[o,d]),Object(u.jsxs)("form",{className:r.a.Login,onSubmit:function(){return e.setSiteName(d.userName)},children:[Object(u.jsx)("input",{value:o,onChange:function(e){return c(e.target.value)},name:"username",id:"username",type:"text",placeholder:"Username",required:!0}),Object(u.jsx)("input",{value:l,onChange:function(e){return b(e.target.value)},name:"password",id:"password",type:"password",placeholder:"Password",required:!0}),Object(u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),m({userName:o,userPass:l}),alert("Login effettuato!"),window.location.href="/social-app"},children:"Login"})]})}}}]);
//# sourceMappingURL=7.fd265b94.chunk.js.map