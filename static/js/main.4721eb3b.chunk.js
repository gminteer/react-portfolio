(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,function(e,a,t){e.exports={Background:"Background_Background__kOn6r",stripe:"Background_stripe__1d36D",primaryDarker:"Background_primaryDarker__2GEW3",primary:"Background_primary__v8ynD",primaryLighter:"Background_primaryLighter__2_dl1",primaryInvert:"Background_primaryInvert__2n58s",white:"Background_white__2FldR",accent:"Background_accent__1Zhdb"}},,function(e,a,t){e.exports={FakeTerminal:"FakeTerminal_FakeTerminal__3yUv-",container:"FakeTerminal_container__1Ev5n",cardBody:"FakeTerminal_cardBody__3L62H",windowName:"FakeTerminal_windowName__zsDLn",activeWindow:"FakeTerminal_activeWindow__MrmEq",icon:"FakeTerminal_icon__1xFeB",dir:"FakeTerminal_dir__2wbo5",branch:"FakeTerminal_branch__18Z-h",node:"FakeTerminal_node__1ieei",errorPrompt:"FakeTerminal_errorPrompt__38Ux7",prompt:"FakeTerminal_prompt__3f9hG",card:"FakeTerminal_card__2Gdjq"}},,,,,,,,,,function(e,a,t){e.exports={Footer:"Footer_Footer__1yZ4j",icon:"Footer_icon__2wIxf",mono:"Footer_mono__eIKAi"}},,function(e,a,t){e.exports={Card:"Card_Card__3Le3B",title:"Card_title__1mRF_",body:"Card_body__1mK7Q"}},,function(e,a,t){"use strict";t.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAClSURBVDhP3ZNBDoIwEEWrGzkAO+tK7n8idujOA+gK/2udplCTIrDyJT8p0+GFNsNhFG4jJumUV6j8xknpTXJRblQ/NEoblxMeyjMuA14ZHBLhFdakUa7KN6izb728Nx6jMMEXnJU+PJVQZ5++RC6pCYxClEu4g5rAoC/d2fw4q/hjCYPE5C6BPvoDuYRJvCs1Efv0pcmdH6cmKgSwy7+z61+8AefebkRuV5gwneIAAAAASUVORK5CYII="},function(e,a,t){"use strict";t.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACUSURBVDhPrZIxDoAgEATRxk9o5/9fZKelD9BKbyCXXAwEBCbZBK7YcMsOj+AaUZNVdPtJYBJtIjtPzzARZhFnFXew8+RsDIZtdDVht9mIezFqQmC7Efdi1ITEl4hOURY14cuOiC5Rli7BpsoWQ8vGmrwS+IS9pvZJk5KXKIStWXkTqgu2yn/Ur/Y161h82DXBfnDuBQwwpzn8ML61AAAAAElFTkSuQmCC"},function(e,a,t){e.exports={Navigation:"Navigation_Navigation__3dlVY",activeTab:"Navigation_activeTab__1Jgnr"}},,,,function(e,a,t){e.exports={Page:"Page_Page__1cZlS"}},function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),c=t(17),i=t.n(c);function o(e){var a=e.title,t=e.children;return r.a.createElement("div",{className:i.a.Card},a&&r.a.createElement("header",{className:i.a.title},a),r.a.createElement("section",{className:i.a.body},t))}},function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),c=t(16),i=t(25),o=t.n(i),l={initial:{opacity:0},in:{opacity:1,transition:{duration:.1}},out:{opacity:0,transition:{duration:.1}}};function s(e){var a=e.style,t=e.title,i=e.children;Object(n.useEffect)((function(){document.title=t}),[t]);var s=a?"".concat(o.a.Page," ").concat(a):o.a.Page;return r.a.createElement(c.b.main,{className:s,initial:"initial",animate:"in",exit:"out",variants:l},i)}},,,,,function(e,a,t){e.exports={Header:"Header_Header__3v0KW"}},function(e){e.exports=JSON.parse('[{"name":"Github","href":"https://github.com/gminteer","icon":"github.svg","mono":true},{"name":"LinkedIn","href":"https://linkedin.com/gminteer","icon":"linkedin.svg"},{"name":"Email","href":"mailto:gminteer@gmail.com","icon":"email.svg","mono":true},{"name":"Skype","href":"skype:gminteer?chat","icon":"skype.svg"}]')},,,,,,,,,,,function(e,a,t){var n={"./email.svg":[56,6],"./github.svg":[57,7],"./iconify.png":[19],"./linkedin.svg":[58,8],"./resize.png":[20],"./skype.svg":[59,9]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(n)},r.id=44,e.exports=r},,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),i=t.n(c),o=t(10),l=t(1),s=t(21),m=t.n(s);function u(e){var a=e.pages,t=Object(l.f)().pathname.replace("/","");return r.a.createElement("nav",{className:m.a.Navigation},r.a.createElement("ul",null,a.map((function(e,a){return r.a.createElement("li",{key:a,className:e===t?m.a.activeTab:void 0},r.a.createElement("h2",null,r.a.createElement(o.b,{to:"/".concat(e)},e)))}))))}var d=t(32),p=t.n(d);function f(e){return r.a.createElement("header",{className:p.a.Header},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"~gminteer/ $")),r.a.createElement(u,e))}var A=t(8),E=t.n(A),_=t(12),v=t(13),h=t(33),g=t(15),b=t.n(g);function k(){var e=Object(n.useState)({}),a=Object(v.a)(e,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(E.a.mark((function e(){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(null,33,3));case 2:return a=e.sent,e.next=5,Promise.all(a.default.map((function(e){return t(44)("./".concat(e.icon))})));case 5:n=e.sent,r=a.default.map((function(e,a){return[e.name,n[a].default]})),i(Object.fromEntries(r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("footer",{className:b.a.Footer},r.a.createElement("ul",null,h.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{href:e.href},r.a.createElement("img",{className:e.mono?"".concat(b.a.icon," ").concat(b.a.mono):b.a.icon,src:c[e.name],alt:e.name})))}))))}var y=t(3),w=t.n(y);function N(){return r.a.createElement("div",{className:w.a.Background},r.a.createElement("div",{className:w.a.stripe}),r.a.createElement("div",{className:"".concat(w.a.stripe," ").concat(w.a.primaryDarker)}),r.a.createElement("div",{className:"".concat(w.a.stripe," ").concat(w.a.primary)}),r.a.createElement("div",{className:"".concat(w.a.stripe," ").concat(w.a.primaryLighter)}),r.a.createElement("div",{className:"".concat(w.a.stripe," ").concat(w.a.primaryInvert)}),r.a.createElement("div",{className:"".concat(w.a.stripe," ").concat(w.a.white)}),r.a.createElement("div",{className:w.a.stripe}))}var x=t(16),j=t(9),B=t(26),O=t(19),F=t(20),C=t(27),T=t(5),U=t.n(T);function D(e){var a=e.title,t=e.message,n=e.isError,c=void 0!==n&&n;return r.a.createElement(C.a,{style:U.a.FakeTerminal,title:a},r.a.createElement("div",{className:U.a.container},r.a.createElement(B.a,null,r.a.createElement("div",{className:U.a.cardBody},r.a.createElement("header",null,r.a.createElement("span",{className:U.a.icon},r.a.createElement("img",{src:O.default,alt:"fake window button"})),r.a.createElement("span",{className:U.a.windowName},"xterm"),r.a.createElement("span",{className:U.a.activeWindow},"\xa0"),r.a.createElement("span",{className:U.a.icon},r.a.createElement("img",{src:F.default,alt:"fake window button"}))),r.a.createElement("pre",null,t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:U.a.dir},"react-portfolio")," on"," ",r.a.createElement("span",{className:U.a.branch},"\ue0a0 master")," via"," ",r.a.createElement("span",{className:U.a.node},"\u2b22 v12.19.0"),r.a.createElement("br",null),r.a.createElement("span",{className:c?U.a.errorPrompt:U.a.prompt},"\u276f"))))))}function I(){return R.apply(this,arguments)}function R(){return(R=Object(_.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ef.gy/fortune",{headers:{Accept:"text/json"}});case 2:if((a=e.sent).ok){e.next=5;break}return e.abrupt("return",Object(j.say)({text:"something went wrong :(\nAPI returned ".concat(a.status,"\n    -- This website"),e:"xx",n:!0}));case 5:return e.next=7,a.json();case 7:if(!(t=e.sent).file.includes("/off/")){e.next=12;break}return e.abrupt("return",Object(j.say)({text:"You miss 100% of the shots you don't take.\n    -- Albert Einstein",e:"oO",n:!0}));case 12:return e.abrupt("return",Object(j.say)({text:"".concat(t.cookie.replace(/\t/g,"  ")," (").concat(t.file,"#").concat(t["file-id"],")"),e:"oo",n:!0}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(D,{title:"~gminteer/",message:t||Object(j.say)({text:"Taking the auspices...",e:"--"})})}function S(e){var a=e.text,t=e.e,n=void 0===t?"oo":t,c=e.n,i=void 0===c||c,o=e.isError;return void 0!==o&&o&&"oo"===n&&(n="xx"),r.a.createElement(D,{title:"Something went wrong :(",message:Object(j.say)({text:a,e:n,n:i}),isError:!0})}var Z={about:r.a.lazy((function(){return t.e(3).then(t.bind(null,75))})),projects:r.a.lazy((function(){return t.e(4).then(t.bind(null,76))})),resume:r.a.lazy((function(){return t.e(5).then(t.bind(null,77))}))};function J(){var e=Object(l.f)();return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(x.a,{exitBeforeEnter:!0,initial:!1},r.a.createElement(l.c,{location:e,key:e.pathname},r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(P,null)),Object.entries(Z).map((function(e){var a=Object(v.a)(e,2),t=a[0],n=a[1];return r.a.createElement(l.a,{key:t,exact:!0,path:"/".concat(t)},r.a.createElement(n,null))})),r.a.createElement(l.a,{fallback:!0},r.a.createElement(S,{text:"404: not found",isError:!0})))))}function K(){return r.a.createElement(o.a,{basename:"/react-portfolio"},r.a.createElement(N,null),r.a.createElement(f,{pages:Object.keys(Z)}),r.a.createElement(J,null),r.a.createElement(k,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(53);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[54,1,2]]]);
//# sourceMappingURL=main.4721eb3b.chunk.js.map