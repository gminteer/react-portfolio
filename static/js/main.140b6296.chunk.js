(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,function(e,t,a){e.exports={Contact:"Contact_Contact__1oJIy",labelBlock:"Contact_labelBlock__1kUeL",invalidField:"Contact_invalidField__2zRPW",error:"Contact_error__2CgC-"}},,,function(e,t,a){e.exports={Figure:"Figure_Figure__11PKW",title:"Figure_title__2eb8N",body:"Figure_body__BOJLJ"}},function(e){e.exports=JSON.parse('{"img":{"src":"headshot.jpg","alt":"Greg Minteer"},"title":"Greg Minteer","blurb":"Hi! I\'m Greg. Lorem Ipsum write a brand statement etc. More text more text more text more text more text more text"}')},,,,,function(e,t,a){e.exports={Navigation:"Navigation_Navigation__3dlVY"}},function(e,t,a){e.exports={Header:"Header_Header__3v0KW"}},function(e){e.exports=JSON.parse('[{"name":"Github","href":"https://github.com/gminteer"},{"name":"LinkedIn","href":"https://linkedin.com/gminteer"},{"name":"Email","href":"mailto:gminteer@gmail.com"},{"name":"Skype","href":"skype:gminteer?chat"}]')},function(e,t,a){e.exports={Footer:"Footer_Footer__1yZ4j"}},,function(e,t,a){e.exports={About:"About_About__vpEfE"}},function(e){e.exports=JSON.parse('[{"name":"pair.pro","blurb":"Swap skills with other developers","repo":"https://github.com/gminteer/pair-pro","live":"https://evening-shelf-38157.herokuapp.com/","img":{"src":"pair-pro.jpg","alt":"pair.pro in action"}},{"name":"Lyric Look-up","blurb":"Sing along with your favorite songs","repo":"https://github.com/Mayorgak/lyric-look-up","live":"https://Mayorgak.github.io/lyric-look-up","img":{"src":"lyric-look-up.jpg","alt":"Lyric Look-up in action"}}]')},function(e,t,a){e.exports={Gallery:"Gallery_Gallery__KXmIF"}},function(e,t,a){e.exports={Tree:"Tree_Tree__1cu2W"}},function(e){e.exports=JSON.parse('{"name":"Buzzwords","children":[{"name":"Web Technologies","children":[{"name":"Front End","children":[{"name":"Semantic HTML"},{"name":"JavaScript (ES5+)"},{"name":"Modern CSS and SCSS"},{"name":"React"}]},{"name":"Back End","children":[{"name":"Node.js"},{"name":"Express"},{"name":"SQL"},{"name":"MongoDB"}]}]},{"name":"Operating Systems","children":[{"name":"Microsoft Windows"},{"name":"Linux"}]},{"name":"Networking","children":[{"name":"TCP/IP"},{"name":"DHCP"},{"name":"DNS"},{"name":"Wi-Fi"}]},{"name":"Scripting Languages","children":[{"name":"Python 3"},{"name":"PowerShell"}]}]}')},function(e){e.exports=JSON.parse('{"href":"https://1drv.ms/b/s!AokXDTRqU_ReguAdwBdF9Dq9d6Vg8Q"}')},function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){var n={"./headshot.jpg":[31,3],"./lyric-look-up.jpg":[32,4],"./pair-pro.jpg":[33,5]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=28,e.exports=r},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(3),m=a(11),i=a.n(m),u=function(e){var t=e.tabs,a=e.setCurrentTab;return r.a.createElement("nav",{className:i.a.Navigation},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h2",null,r.a.createElement("a",{href:"#".concat(e.toLowerCase()),onClick:function(){return a(e)}},e)))}))))},s=a(12),p=a.n(s),b=function(e){return r.a.createElement("header",{className:p.a.Header},r.a.createElement("h1",null,"~gminteer/ $"),r.a.createElement(u,e))},f=a(13),d=a(14),g=a.n(d),h=function(){return r.a.createElement("footer",{className:g.a.Footer},r.a.createElement("ul",null,f.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.href},e.name))}))))},E=a(8),v=a.n(E),_=a(15),k=a(5),y=a.n(k);function O(e){var t=e.title,l=e.body,c=e.imgCfg,m=Object(n.useState)(),i=Object(o.a)(m,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(28)("./".concat(c.src));case 2:t=e.sent,s(t.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c.src,u]),r.a.createElement("figure",{className:y.a.Figure},r.a.createElement("img",{src:u,alt:c.alt}),r.a.createElement("figcaption",null,r.a.createElement("div",{className:y.a.title},t),r.a.createElement("div",{className:y.a.body},l)))}var j=a(6),N=a(16),S=a.n(N);function x(){return r.a.createElement("main",{className:S.a.About},r.a.createElement(O,{imgCfg:j.img,title:r.a.createElement("h3",null,j.title),body:r.a.createElement("p",null,j.blurb)}))}var w=a(17),C=a(18),F=a.n(C),B=function(){return r.a.createElement("main",{className:F.a.Gallery},w.map((function(e,t){return r.a.createElement(O,{imgCfg:e.img,title:r.a.createElement("h3",null,e.name),body:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.blurb),r.a.createElement("p",null,r.a.createElement("a",{href:e.live},"Live demo")),r.a.createElement("p",null,r.a.createElement("a",{href:e.repo},"View source"))),key:t})})))},L=a(4),T=a(7),J=a(1),M=a(2),W=a.n(M);function D(){var e=Object(n.useState)({name:"",email:"",comment:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),m=Object(o.a)(c,2),i=m[0],u=m[1],s=a.name,p=a.email,b=a.comment;function f(e){switch(e.target.name){case"email":var t="[a-zA-Z0-9!#$%&'*+\\-/=?^_`{|}~]",n="".concat(t,"+(.?").concat(t,"+)*");if(new RegExp("^".concat(n,"@").concat(n,"$")).test(e.target.value)){i.email;var r=Object(T.a)(i,["email"]);u(Object(J.a)({},r))}else u(Object(J.a)(Object(J.a)({},i),{},{email:"Invalid email address."}));break;case"name":if(e.target.value.length){i.name;var c=Object(T.a)(i,["name"]);u(Object(J.a)({},c))}else u(Object(J.a)(Object(J.a)({},i),{},{name:"Name cannot be blank."}));break;case"comment":default:if(e.target.value.length){i.comment;var o=Object(T.a)(i,["comment"]);u(Object(J.a)({},o))}else u(Object(J.a)(Object(J.a)({},i),{},{comment:"Comment cannot be blank."}))}Object.keys(i).length<1&&l(Object(J.a)(Object(J.a)({},a),{},Object(L.a)({},e.target.name,e.target.value)))}return r.a.createElement("main",{className:W.a.Contact},r.a.createElement("form",{id:"comment",onSubmit:function(e){e.preventDefault(),Object.keys(i).length>0||console.log("Submission data:",a)}},r.a.createElement("div",{className:W.a.labelBlock},r.a.createElement("label",{htmlFor:"name"},"Your name"),i.name&&r.a.createElement("span",{className:W.a.error},i.name)),r.a.createElement("input",{type:"text",id:"name",name:"name",autoComplete:"name",defaultValue:s,onBlur:f,className:i.name?W.a.invalidField:""}),r.a.createElement("div",{className:W.a.labelBlock},r.a.createElement("label",{htmlFor:"email"},"Email"),i.email&&r.a.createElement("span",{className:W.a.error},i.email)),r.a.createElement("input",{type:"email",id:"email",name:"email",autoComplete:"email",defaultValue:p,onBlur:f,className:i.email?W.a.invalidField:""}),r.a.createElement("div",{className:W.a.labelBlock},r.a.createElement("label",{htmlFor:"comment"},"Comment"),i.comment&&r.a.createElement("span",{className:W.a.error},i.comment)),r.a.createElement("textarea",{id:"comment",name:"comment",onBlur:f,defaultValue:b,className:i.comment?W.a.invalidField:""}),r.a.createElement("button",{type:"submit"},"Submit")))}var G=a(19),I=a.n(G);function P(e){var t=e.data;return r.a.createElement("ul",{className:I.a.Tree},r.a.createElement("li",null,t.name),t.children&&t.children.map((function(e,t){return r.a.createElement(P,{data:e,key:t})})))}var A=a(20),H=a(21),V=function(){return r.a.createElement("main",null,r.a.createElement("h3",null,r.a.createElement("a",{href:H.href},"View full resume here")),r.a.createElement("section",null,r.a.createElement(P,{data:A})))},R={about:r.a.createElement(x,null),projects:r.a.createElement(B,null),contact:r.a.createElement(D,null),resume:r.a.createElement(V,null)};var z=function(){var e=Object.keys(R),t=Object(n.useState)(e[0]),a=Object(o.a)(t,2),l=a[0],c={tabs:e,currentTab:l,setCurrentTab:a[1]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,c),R[l],r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.140b6296.chunk.js.map