(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/me.f3d0a852.png"},17:function(e,a,t){e.exports=t(42)},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=t(4),m=t.n(s),o=t(15),u=t(2),i=t(3),b=t.n(i),h=function(){return c.a.createElement("nav",{className:"navbar bg-primary"},c.a.createElement("h1",{className:"title-nav"},c.a.createElement("i",{class:"fab fa-linode"}),"Job Matcher"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"/about"},"Jobs"))))},E=t(16),d=t.n(E),p=function(e){var a=e.jobTitle,t=e.companyName,n=e.rate,l=(e.date,e.hrs,e.location),r=e.branch,s=(e.logo,e.shifts),m=e.number;return c.a.createElement("div",null,c.a.createElement("div",{className:"jobs"},c.a.createElement("h1",{class:"h1"},"Jobs Available")),c.a.createElement("div",{className:"space grid-2 my-2"},c.a.createElement("div",null,c.a.createElement("img",{className:"job-pic",src:d.a,alt:"logo"})),c.a.createElement("div",null,c.a.createElement("h5",null,a),c.a.createElement("div",null,t),c.a.createElement("div",null,n),c.a.createElement("p",null,"Mon, Sep 5 - Fri, Sep 16"))),c.a.createElement("hr",{className:"margin-bottom"}),c.a.createElement("div",{className:"my-2"},c.a.createElement("h3",null,"If you take this job you are agreeing to work ALL DAYS!"),s.map(function(e){return c.a.createElement("div",{className:"thin",key:e.id,shifts:e},e.startDate," - ",e.endDate)})),c.a.createElement("hr",null),c.a.createElement("div",{className:"my-1"},c.a.createElement("h4",null,"Location:"),c.a.createElement("a",{className:"link",href:"/"},l)),c.a.createElement("hr",null),c.a.createElement("div",{className:"my-1"},c.a.createElement("h4",null,"Branch:"),c.a.createElement("div",null,r),c.a.createElement("a",{className:"link",href:"/"},m)))},j=(t(41),function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],E=s[1],d=Object(n.useState)(""),j=Object(u.a)(d,2),f=(j[0],j[1]),v=Object(n.useState)(""),O=Object(u.a)(v,2),g=O[0],N=O[1],y=Object(n.useState)([]),S=Object(u.a)(y,2),w=S[0],k=S[1],x=Object(n.useState)(""),J=Object(u.a)(x,2),A=(J[0],J[1],Object(n.useState)("")),D=Object(u.a)(A,2),I=D[0],L=(D[1],Object(n.useState)("")),B=Object(u.a)(L,2),H=B[0],M=(B[1],Object(n.useState)("")),P=Object(u.a)(M,2),T=P[0],C=P[1],F=Object(n.useState)(""),Y=Object(u.a)(F,2),q=Y[0],z=Y[1],G=Object(n.useState)(null),K=Object(u.a)(G,2),Q=K[0],R=K[1];return Object(n.useEffect)(function(){(function(){var e=Object(o.a)(m.a.mark(function e(a){var t,n,c,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3000/job");case 2:return t=e.sent,e.next=5,b.a.get("http://localhost:3000/wage");case 5:return n=e.sent,e.next=8,b.a.get("http://localhost:3000/shifts");case 8:return c=e.sent,e.next=11,b.a.get("http://localhost:3000/branchDetails");case 11:r=e.sent,l(t.data.title),f(t.data.company.logo),E(t.data.company.name),N(n.data.wagePerHourInCents),k(c.data),C(t.data.company.address),z(r.data.branch),R(r.data.branchPhoneNumber);case 20:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}})()(),console.log(t)},[]),c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement("div",{className:"container"},c.a.createElement(p,{jobTitle:t,companyName:i,rate:g,date:I,hrs:H,location:T,branch:q,shifts:w,number:Q})))});r.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cb14fe9b.chunk.js.map