(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,t,a){e.exports={Footer:"Footer_Footer__1yZ4j",icon:"Footer_icon__2wIxf",mono:"Footer_mono__eIKAi"}},17:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__3dlVY",activeTab:"Navigation_activeTab__1Jgnr"}},25:function(e,t,a){e.exports={Header:"Header_Header__3v0KW"}},26:function(e){e.exports=JSON.parse('[{"name":"Github","href":"https://github.com/gminteer","icon":"github.svg","mono":true},{"name":"LinkedIn","href":"https://linkedin.com/gminteer","icon":"linkedin.svg"},{"name":"Email","href":"mailto:gminteer@gmail.com","icon":"email.svg","mono":true},{"name":"Skype","href":"skype:gminteer?chat","icon":"skype.svg"}]')},27:function(e,t,a){e.exports=a(48)},38:function(e,t,a){var n={"./email.svg":[49,7],"./github.svg":[50,8],"./linkedin.svg":[51,9],"./skype.svg":[52,10]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=38,e.exports=r},4:function(e,t,a){e.exports={Background:"Background_Background__kOn6r",stripe:"Background_stripe__1d36D",primaryDarker:"Background_primaryDarker__2GEW3",primary:"Background_primary__v8ynD",primaryLighter:"Background_primaryLighter__2_dl1",primaryInvert:"Background_primaryInvert__2n58s",white:"Background_white__2FldR",accent:"Background_accent__1Zhdb"}},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(11),l=a(13),s=a(1),m=a(17),u=a.n(m);function p(e){var t=e.pages,a=Object(s.f)().pathname.replace("/","");return r.a.createElement("nav",{className:u.a.Navigation},r.a.createElement("ul",null,t.map((function(e,t){return"ROOT"!==e&&r.a.createElement("li",{key:t,className:e===a?u.a.activeTab:void 0},r.a.createElement("h2",null,r.a.createElement(l.b,{to:"/".concat(e)},e)))}))))}var f=a(25),d=a.n(f),_=function(e){return r.a.createElement("header",{className:d.a.Header},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},"~gminteer/ $")),r.a.createElement(p,e))},h=a(8),E=a.n(h),v=a(12),b=a(26),g=a(15),k=a.n(g);function y(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(E.a.mark((function e(){var t,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(null,26,3));case 2:return t=e.sent,e.next=5,Promise.all(t.default.map((function(e){return a(38)("./".concat(e.icon))})));case 5:n=e.sent,r=t.default.map((function(e,t){return[e.name,n[t].default]})),o(Object.fromEntries(r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("footer",{className:k.a.Footer},r.a.createElement("ul",null,b.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.href},r.a.createElement("img",{className:e.mono?"".concat(k.a.icon," ").concat(k.a.mono):k.a.icon,src:c[e.name],alt:e.name})))}))))}var x=a(4),N=a.n(x),O=function(){return r.a.createElement("div",{className:N.a.Background},r.a.createElement("div",{className:"".concat(N.a.stripe," ").concat(N.a.primaryDarker)}),r.a.createElement("div",{className:"".concat(N.a.stripe," ").concat(N.a.primary)}),r.a.createElement("div",{className:"".concat(N.a.stripe," ").concat(N.a.primaryLighter)}),r.a.createElement("div",{className:"".concat(N.a.stripe," ").concat(N.a.primaryInvert)}),r.a.createElement("div",{className:"".concat(N.a.stripe," ").concat(N.a.white)}),r.a.createElement("div",{className:N.a.stripe}))},w=a(9),j=a(7),T=a.n(j);function F(e){var t=e.message,a=e.isError,n=void 0!==a&&a;return r.a.createElement("main",{className:T.a.FakeTerminal},r.a.createElement("div",{className:T.a.card},r.a.createElement("header",null,r.a.createElement("span",{className:T.a.activeTab},"Terminal"),r.a.createElement("span",{className:T.a.tabBackground},"\xa0")),r.a.createElement("pre",null,t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:T.a.dir},"react-portfolio")," on"," ",r.a.createElement("span",{className:T.a.branch},"\ue0a0 master")," via"," ",r.a.createElement("span",{className:T.a.node},"\u2b22 v12.19.0"),r.a.createElement("br",null),r.a.createElement("span",{className:n?T.a.errorPrompt:T.a.prompt},"\u276f"))))}function B(){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ef.gy/fortune",{headers:{Accept:"text/json"}});case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return",Object(w.say)({text:"something went wrong :(\nAPI returned ".concat(t.status,"\n    -- This website"),e:"xx",n:!0}));case 5:return e.next=7,t.json();case 7:if(!(a=e.sent).file.includes("/off/")){e.next=12;break}return e.abrupt("return",Object(w.say)({text:"You miss 100% of the shots you don't take.\n    -- Albert Einstein",e:"oO",n:!0}));case 12:return e.abrupt("return",Object(w.say)({text:"".concat(a.cookie.replace(/\t/g,"  ")," (").concat(a.file,"#").concat(a["file-id"],")"),e:"oo",n:!0}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),document.title="~gminteer/"}),[]),r.a.createElement(F,{message:a||Object(w.say)({text:"Taking the auspices...",e:"--",n:!0})})}function P(e){var t=e.text,a=e.e,c=void 0===a?"oo":a,o=e.n,i=void 0===o||o,l=e.isError,s=void 0!==l&&l;return Object(n.useEffect)((function(){document.title="Something went wrong :("})),s&&"oo"===c&&(c="xx"),r.a.createElement(F,{isError:!0,message:Object(w.say)({text:t,e:c,n:i})})}var S={about:r.a.lazy((function(){return a.e(3).then(a.bind(null,69))})),projects:r.a.lazy((function(){return a.e(4).then(a.bind(null,70))})),contact:r.a.lazy((function(){return a.e(6).then(a.bind(null,71))})),resume:r.a.lazy((function(){return a.e(5).then(a.bind(null,72))}))};function L(){return r.a.createElement(l.a,{basename:"/react-portfolio"},r.a.createElement(O,null),r.a.createElement(_,{pages:Object.keys(S)}),r.a.createElement(n.Suspense,{fallback:r.a.createElement(P,{text:"Now loading..."})},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(D,null)),Object.entries(S).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(s.a,{key:a,exact:!0,path:"/".concat(a)},r.a.createElement(n,null))})),r.a.createElement(s.a,{fallback:!0},r.a.createElement(P,{text:"404: not found",isError:!0})))),r.a.createElement(y,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={FakeTerminal:"FakeTerminal_FakeTerminal__3yUv-",card:"FakeTerminal_card__2Gdjq",activeTab:"FakeTerminal_activeTab__2UoLb",tabBackground:"FakeTerminal_tabBackground__32E39",dir:"FakeTerminal_dir__2wbo5",branch:"FakeTerminal_branch__18Z-h",node:"FakeTerminal_node__1ieei",errorPrompt:"FakeTerminal_errorPrompt__38Ux7",prompt:"FakeTerminal_prompt__3f9hG"}}},[[27,1,2]]]);
//# sourceMappingURL=main.bf751dab.chunk.js.map