(this["webpackJsonpyoutube-project"]=this["webpackJsonpyoutube-project"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),u=n.n(r),i=(n(10),n(5)),s=(n(11),n(0)),h=function(e){return Object(s.jsx)("h1",{children:e.video.snippet.title})},f=function(e){return Object(s.jsx)("ul",{children:e.videos.map((function(e){return Object(s.jsx)(h,{video:e},e.id)}))})};var l=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(o.useEffect)((function(){console.log("useEffect");fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAkSAKUeh1PvlHicEEqMM4VwrkcRhfNLhk&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAkSAKUeh1PvlHicEEqMM4VwrkcRhfNLhk",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return c(e.items)})).catch((function(e){return console.log("error",e)}))}),[]),Object(s.jsx)(f,{videos:n})};n(13);u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.96075389.chunk.js.map