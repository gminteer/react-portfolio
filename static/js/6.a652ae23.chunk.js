(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[6],{64:function(e,t,a){e.exports={Contact:"Contact_Contact__3aqpJ",labelBlock:"Contact_labelBlock__3pI5o",invalidField:"Contact_invalidField__Nq7d9",error:"Contact_error__2s1ff"}},71:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.r(t),a.d(t,"default",(function(){return b}));var m=a(10),o=a(0),i=a.n(o),s=a(64),u=a.n(s);function b(){Object(o.useEffect)((function(){document.title="~gminteer/contact"}),[]);var e=Object(o.useState)({name:"",email:"",comment:""}),t=Object(m.a)(e,2),a=t[0],l=t[1],s=Object(o.useState)({}),b=Object(m.a)(s,2),f=b[0],p=b[1],d=a.name,O=a.email,v=a.comment;function g(e){switch(e.target.name){case"email":var t="[a-zA-Z0-9!#$%&'*+\\-/=?^_`{|}~]",m="".concat(t,"+(.?").concat(t,"+)*");if(new RegExp("^".concat(m,"@").concat(m,"$")).test(e.target.value)){f.email;var o=r(f,["email"]);p(c({},o))}else p(c(c({},f),{},{email:"Invalid email address."}));break;case"name":if(e.target.value.length){f.name;var i=r(f,["name"]);p(c({},i))}else p(c(c({},f),{},{name:"Name cannot be blank."}));break;case"comment":default:if(e.target.value.length){f.comment;var s=r(f,["comment"]);p(c({},s))}else p(c(c({},f),{},{comment:"Comment cannot be blank."}))}Object.keys(f).length<1&&l(c(c({},a),{},n({},e.target.name,e.target.value)))}return i.a.createElement("main",{className:u.a.Contact},i.a.createElement("form",{id:"comment",onSubmit:function(e){e.preventDefault(),Object.keys(f).length>0||console.log("Submission data:",a)}},i.a.createElement("div",{className:u.a.labelBlock},i.a.createElement("label",{htmlFor:"name"},"Your name"),f.name&&i.a.createElement("span",{className:u.a.error},f.name)),i.a.createElement("input",{type:"text",id:"name",name:"name",autoComplete:"name",defaultValue:d,onBlur:g,className:f.name?u.a.invalidField:""}),i.a.createElement("div",{className:u.a.labelBlock},i.a.createElement("label",{htmlFor:"email"},"Email"),f.email&&i.a.createElement("span",{className:u.a.error},f.email)),i.a.createElement("input",{type:"email",id:"email",name:"email",autoComplete:"email",defaultValue:O,onBlur:g,className:f.email?u.a.invalidField:""}),i.a.createElement("div",{className:u.a.labelBlock},i.a.createElement("label",{htmlFor:"comment"},"Comment"),f.comment&&i.a.createElement("span",{className:u.a.error},f.comment)),i.a.createElement("textarea",{id:"comment",name:"comment",onBlur:g,defaultValue:v,className:f.comment?u.a.invalidField:""}),i.a.createElement("button",{type:"submit"},"Submit")))}}}]);
//# sourceMappingURL=6.a652ae23.chunk.js.map