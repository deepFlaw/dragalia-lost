(window["webpackJsonpdragalia-lost"]=window["webpackJsonpdragalia-lost"]||[]).push([[5],{157:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(24),c=n(0),l=n.n(c),i=n(75),o=n(74),u=n(51),m=n(12),s=n(3),d=n(1),f=function(e,t){return e-t};function v(e,t){return e.reduce(function(e,n,a){var r=Math.abs(t-n);return null===e||r<e.distance||r===e.distance?{distance:r,index:a}:e},null).index}var b=function(e,t){if(void 0!==t.current&&e.changedTouches){for(var n=0;n<e.changedTouches.length;n+=1){var a=e.changedTouches[n];if(a.identifier===t.current)return a.clientX}return null}return e.clientX},p=function(e,t,n){return e<t?t:e>n?n:e},h=function(e,t,n){var a=(n-t)*e+t;return a=p(a,t,n),Math.round(a)},E=function(e,t,n,a){return(e-t)*a/(n-t)},O=function(e){var t=e.i,n=e.v,r=e.values,c=Object(a.a)(r);return c[t]=n,c};function g(e){var t=e.defaultValue,n=e.value,i=e.min,o=e.max,u=e.onChange,s=Object(c.useRef)(),d=Object(c.useState)({left:0,width:0}),g=Object(r.a)(d,2),j=g[0],y=g[1],k=Object(m.l)(function(){if(s.current){var e=s.current.getBoundingClientRect(),t=e.left,n=e.width;y({left:t,width:n-32})}});Object(c.useEffect)(function(){k()},[k]),Object(c.useEffect)(function(){return window.addEventListener("resize",k),function(){return window.removeEventListener("resize",k)}},[k]);var w=Object(c.useRef)(null!=n).current,C=l.a.useRef(),P=Object(c.useState)(t||[i,o]),x=Object(r.a)(P,2),L=x[0],S=x[1],D=w?n:L,F=Array.isArray(D),N=F?Object(a.a)(D).sort(f):[D];N=N.map(function(e){return p(e,i,o)});var M=l.a.useRef(),z=l.a.useCallback(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=j.left,a=j.width,r=(e-n)/a,c=h(r,i,o),l=t?M.current:v(N,c),u=O({i:l,v:c,values:N}).sort(f);return M.current=u.indexOf(c),u},[N,i,o,j]),I=Object(m.l)(function(e){var t=b(e,C);if(t){var n=z(t,!0);w||S(n),u&&u(n)}}),T=Object(m.l)(function(e){b(e,C)&&(C.current=void 0,document.body.removeEventListener("mousemove",I),document.body.removeEventListener("mouseup",T),document.body.removeEventListener("mouseenter",H),document.body.removeEventListener("touchmove",I),document.body.removeEventListener("touchend",T))}),H=Object(m.l)(function(e){0===e.buttons&&null!==e.relatedTarget&&T(e)}),A=Object(m.l)(function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(C.current=t.identifier);var n=b(e,C),a=z(n);w||S(a),u&&u(a),document.body.addEventListener("touchmove",I),document.body.addEventListener("touchend",T)});Object(c.useEffect)(function(){var e=s.current;return e.addEventListener("touchstart",A),function(){e.removeEventListener("touchstart",A),document.body.removeEventListener("mousemove",I),document.body.removeEventListener("mouseup",T),document.body.removeEventListener("mouseenter",H),document.body.removeEventListener("touchmove",I),document.body.removeEventListener("touchend",T)}},[H,T,I,A]);var K=Object(m.l)(function(e){e.preventDefault();var t=b(e,C),n=z(t);w||S(n),u&&u(n),document.body.addEventListener("mousemove",I),document.body.addEventListener("mouseenter",H),document.body.addEventListener("mouseup",T)}),R=E(F?N[0]:i,i,o,j.width),_={left:R,width:E(N[N.length-1],i,o,j.width)-R};return l.a.createElement("div",{ref:s,className:"slider",onMouseDown:K},l.a.createElement("span",{className:"slider-rail"}),l.a.createElement("span",{className:"slider-track",style:_}),N.map(function(e,t){var n={left:E(e,i,o,j.width)};return l.a.createElement("div",{key:t,className:"slider-thumb",style:n,role:"slider",tabIndex:"0","aria-valuemax":o,"aria-valuemin":i,"aria-valuenow":e},e)}))}g.defaultProps={defaultValue:null,min:0};var j=l.a.memo(g);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var k=function(e){var t=e.index,n=e.item,a=e.setFacility,r=l.a.useMemo(function(){return Object(m.d)(n.type)},[n.type]);return l.a.createElement("div",{className:"facility-item"},l.a.createElement(u.g,{field:"facility",image:n.id,onClick:function(){a(function(e){return e.filter(function(e,n){return n!==t})})}}),l.a.createElement(j,{max:r,value:n.value,onChange:function(e){a(function(n){return n.map(function(n,a){return a===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{value:e}):n})})}}))};var w=l.a.memo(function(e){var t=e.columnIndex,n=e.rowIndex,a=e.style,r=e.data,c=r.dict,i=r.arr[2*n+t],o=c[i];return l.a.createElement(l.a.Fragment,null,o&&l.a.createElement("div",{style:a,className:"material-item"},l.a.createElement(u.g,{field:"material",image:i}),l.a.createElement("div",null,o)))}),C=["del","refresh","save","add"],P=function(e,t){switch(e){case"rupies":case"event":case"item":case"coin1":case"coin2":case"coin3":case"talonstone":return s.r[e];default:return s.r[e][t]}},x=function(e,t){for(var n=0,a=Object(r.a)(t,2),c=a[0],l=a[1],i=c;i<l;i+=1)n+=e[i];return n};var L=l.a.memo(function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],d=t[1],f=Object(c.useState)(Object(m.e)("facility")||[]),v=Object(r.a)(f,2),b=v[0],p=v[1],h=Object(m.l)(function(e){switch(e.currentTarget.name){case"add":d(!0);break;case"del":p([]),Object(m.h)("facility");break;case"refresh":var t=Object(m.e)("facility");t&&p(t);break;case"save":Object(m.i)("facility",b)}}),E=Object(m.l)(function(e){var t=e.type,n=e.field,r="event"===t?"event":s.r[t][n],c=Object(m.d)(t);p(function(e){return[].concat(Object(a.a)(e),[{id:r,type:t,field:n,value:[0,c]}])})}),O=l.a.useMemo(function(){var e={};return b.forEach(function(t){t.value[0]!==t.value[1]&&Object.entries(s.s[t.type]).forEach(function(n){var a=Object(r.a)(n,2),c=a[0],l=a[1],i=x(l,t.value);if(0!==i){var o=P(c,t.field);e[o]=(e[o]||0)+i}})}),{dict:e,arr:Object.keys(e)}},[b]);return l.a.createElement("main",{id:"facility"},l.a.createElement("div",null,l.a.createElement(u.f,{btns:C,onClick:h}),l.a.createElement("div",null,b.map(function(e,t){return l.a.createElement(k,{key:t,index:t,item:e,setFacility:p})})),l.a.createElement(u.c,{open:n,setOpen:d,onCreate:E})),l.a.createElement("div",{ref:m.g.col3},l.a.createElement(o.a,null,function(e){var t=e.height,n=e.width;return l.a.createElement(i.a,{width:n,height:t,itemData:O,columnCount:2,columnWidth:n/2-8,rowCount:O.arr.length,rowHeight:64},w)})))});t.default=L},51:function(e,t,n){"use strict";var a=n(24),r=n(0),c=n.n(r),l=n(25),i=n(4),o=c.a.createContext();function u(){return window.innerWidth}var m={loadHalidom:i.b},s=(Object(l.b)(null,m)(function(e){var t=e.children,n=e.history,l=e.match,i=l.params,m=l.path,s=e.loadHalidom,d=Object(r.useState)(u()),f=Object(a.a)(d,2),v=f[0],b=f[1];Object(r.useEffect)(function(){var e=function(){b(u())};return s(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[s]);var p=Object(r.useState)(function(){var e=/en|ja|zh/;if(e.test(i.lang))return i.lang;var t=e.exec(navigator.language);return t?t[0]:"en"}),h=Object(a.a)(p,2),E=h[0],O=h[1];Object(r.useEffect)(function(){i.lang!==E&&n.replace(m.replace(":lang?",E))},[E,n,i.lang,m]),Object(r.useEffect)(function(){window.scrollTo(0,0)},[m]);var g=c.a.useMemo(function(){return{lang:E,setLang:O,width:v}},[E,v]);return c.a.createElement(o.Provider,{value:g},t)}),n(81)),d=n.n(s),f=n(123),v=n(128),b=n(12);function p(e){var t=e.field,n=e.id,a=e.image,r=e.size,l=e.tabIndex,i=e.onClick,o="".concat("/dragalia-lost","/images/").concat(t,"/").concat(a,".png");return i?c.a.createElement("input",{id:n,alt:a,className:r,src:o,type:"image",tabIndex:l,onClick:i}):c.a.createElement("img",{id:n,className:r,alt:a,src:o})}p.defaultProps={id:null,size:"md",tabIndex:"0"};var h=c.a.memo(p),E={disable:c.a.createElement(f.a,null),setting:c.a.createElement(v.a,null)};function O(e){var t=e.checked,n=e.disabled,a=e.icon,r=e.id,l=e.name,i=e.label,u=e.title,m=e.onChange,s=e.setChecked,f=c.a.useContext(o).lang,v=c.a.useMemo(function(){return r||d()()},[r]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"check-box",type:"checkbox",id:v,checked:t,disabled:n,name:l,value:i,onChange:function(e){s?s(e.target.checked):m&&m(e)}}),c.a.createElement("label",{htmlFor:v,title:Object(b.k)(u||i,f)},a?c.a.createElement(h,{size:"xs",field:"icon",image:"".concat(l,"_").concat(i)}):E[i]||i))}O.defaultProps={checked:!1,disabled:!1,icon:!0,title:null};var g=c.a.memo(O),j=n(1);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){var t=e.btns,n=e.disabled,a=e.name,r=e.onChange,l=e.setChecked,i=function(e){if(l){var t=e.target,n=t.checked,a=t.value;l(function(e){return e.map(function(e){return e.label===a?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{checked:n}):e})})}else r&&r(e)};return c.a.createElement("div",null,t.map(function(e){var t=e.label,r=e.checked,l="check_".concat(t);return c.a.createElement(g,{key:l,checked:r,disabled:n,id:l,name:a,label:t,onChange:i})}))}k.defaultProps={btns:[],disabled:!1};var w=c.a.memo(k),C=n(26),P=n(133),x=n(136),L=n(137),S=n(138),D=n(3),F=n(160),N=n(129),M=n(163),z=n(153),I=n(131);function T(e){var t=e.disabled,n=e.label,a=e.options,r=e.value,l=e.onChange,i=c.a.useContext(o).lang,u=c.a.useMemo(function(){return Array.isArray(a)?a.map(function(e){var t=e;return""===e?t="ALL":/^\d+&/.test(e)||(t=Object(b.k)(e,i)),c.a.createElement(F.a,{key:e,value:e},t)}):null},[a,i]);return c.a.createElement(N.a,{variant:"filled",disabled:t||!a},c.a.createElement(M.a,null,Object(b.k)(n,i)),c.a.createElement(z.a,{value:r,onChange:l,input:c.a.createElement(I.a,{name:n})},u))}T.defaultProps={disabled:!1,label:"",options:null,value:""};var H=c.a.memo(T);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var K=c.a.memo(function(e){var t=e.open,n=e.setOpen,r=e.onCreate,l=c.a.useContext(o).lang,i=function(){n(!1)},u=c.a.useState({type:"dojo",field:""}),m=Object(a.a)(u,2),s=m[0],d=s.type,f=s.field,v=m[1],p=Object(b.l)(function(e){var t,n=e.target,a=n.name,r=n.value;if("type"===a){if(r===d)return;t="dojo"===d||"event"===d||"dojo"===r||"event"===r?{type:r,field:""}:{type:r}}else{if(r===f)return;t={field:r}}v(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t)})}),h=Object(b.l)(function(){"event"!==d&&""===f||(r&&r({type:d,field:f}),i())}),E="dojo"===d?"weapon":"element",O="event"===d,g=[].concat(Object(C.a)(D.f),["dracolith"]),y=Object.keys(D.r[d]);return c.a.createElement(P.a,{open:t,maxWidth:"xs",classes:{paperScrollPaper:"dialog-flex"}},c.a.createElement(x.a,{classes:{root:"col-2"}},c.a.createElement(H,{label:"type",value:d,options:g,onChange:p}),c.a.createElement(H,{disabled:O,label:E,value:f,options:y,onChange:p})),c.a.createElement(L.a,null,c.a.createElement(S.a,{color:"primary",onClick:i},Object(b.k)("cancel",l)),c.a.createElement(S.a,{color:"primary",onClick:h},Object(b.k)("create",l))))});var R={selectFlag:i.f,updateHalidom:i.i},_=Object(l.b)(function(e,t){var n=e.halidom,a=e.halidomFlag,r=t.itemKey,c=t.rowIndex,l=t.columnIndex,i=t.data,o=r;if(null==o){var u=i.cols;o=i.keyArray[u*c+l]}var m=n[o]||{};return{halidomFlag:a,halidomKey:o,id:m.id,level:m.level,type:m.type}},R)(function(e){var t=e.style,n=e.halidomFlag,l=e.halidomKey,i=e.id,u=e.level,m=e.type,s=e.selectFlag,d=e.updateHalidom,f=c.a.useContext(o).lang,v=Object(r.useState)(u),p=Object(a.a)(v,2),E=p[0],O=p[1];c.a.useEffect(function(){n&&(O(u),s(!1))},[n,u,s]);var g=Object(r.useState)(null),j=Object(a.a)(g,2),y=j[0],k=j[1],w=c.a.useMemo(function(){return{max:Object(b.d)(m),name:Object(b.k)(i,f,"halidom")}},[i,f,m]),C=w.max,P=w.name;return l?c.a.createElement("div",{style:t,className:"halidom-item"},c.a.createElement(h,{size:"lg",field:"facility",image:i}),c.a.createElement("span",{className:"name"},P),c.a.createElement("span",null,E),c.a.createElement(h,{size:"sm",field:"icon",image:"minus",onClick:function(){var e=E-1;e>=0&&(O(e),d({halidomKey:l,level:e}))}}),c.a.createElement("input",{type:"range",min:"0",max:C,value:E,onChange:function(e){clearTimeout(y);var t=e.target.value,n=Number(t),a=setTimeout(function(){d({halidomKey:l,level:n})},500);O(n),k(a)}}),c.a.createElement(h,{size:"sm",field:"icon",image:"plus",onClick:function(){var e=E+1;e<=C&&(O(e),d({halidomKey:l,level:e}))}})):null}),W=n(139),J=n(140),V=n(141),X=n(142),B={add:c.a.createElement(W.a,null),del:c.a.createElement(J.a,null),refresh:c.a.createElement(V.a,null),save:c.a.createElement(X.a,null)};function G(e){var t=e.btns,n=e.onClick;return c.a.createElement("div",{className:"icon-btns"},t.map(function(e){return c.a.createElement(S.a,{variant:"outlined",key:e,name:e,onClick:n},B[e]||e)}))}G.defaultProps={btns:[]};var q=c.a.memo(G),Q=["del","refresh","save"];var U={loadHalidom:i.b},Y=Object(l.b)(function(e){return{halidom:e.halidom}},U)(function(e){var t=e.halidom,n=e.loadHalidom,a=Object(b.l)(function(e){switch(e.currentTarget.name){case"del":Object(b.h)("halidom");break;case"refresh":n();break;case"save":Object(b.i)("halidom",t)}});return c.a.createElement(q,{btns:Q,onClick:a})}),Z=n(20),$=n(166),ee=n(143),te=n(144),ne=n(145),ae=n(146),re=n(19),ce=Object(r.memo)(function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"github",src:"".concat("/dragalia-lost","/images/icon/github.png")}),c.a.createElement("a",{href:"https://github.com/junlico/dragalia-lost",title:"GitHub Repository",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("span",null)))}),le=Object(r.memo)(function(e){var t=e.lang,n=e.open,a=e.setOpen,r=function(){a(!1)};return c.a.createElement($.a,{classes:{paper:"drawer"},open:n,onClose:r},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(ce,null)),c.a.createElement("li",null,c.a.createElement(Z.b,{to:"/halidom/".concat(t),onClick:r},c.a.createElement("span",null,Object(b.k)("halidom",t)))),c.a.createElement("li",null,c.a.createElement(Z.b,{to:"/facility/".concat(t),onClick:r},c.a.createElement("span",null,Object(b.k)("facility",t))))))});Object(r.memo)(function(){var e=c.a.useContext(o),t=e.lang,n=e.width,l=Object(r.useState)(!1),i=Object(a.a)(l,2),u=i[0],m=i[1],s=c.a.useMemo(function(){return n>=parseInt(re.md,10)},[n]);return c.a.createElement("header",null,c.a.createElement("div",{role:"button",tabIndex:"0",onClick:function(){m(!0)}},c.a.createElement(ee.a,null)),c.a.createElement("div",null,c.a.createElement(te.a,null),c.a.createElement(Z.b,{to:"/stats/".concat(t),title:"HOME"},c.a.createElement("span",null))),s?c.a.createElement("div",null,c.a.createElement(ce,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(ne.a,{onClick:function(){Object(b.j)(b.g.col3)}})),c.a.createElement("div",null,c.a.createElement(ae.a,{onClick:function(){Object(b.j)(0)}}))),c.a.createElement(le,{lang:t,open:u,setOpen:m}))});var ie=n(162),oe=n(147);function ue(e){var t=e.adornment,n=e.disabled,a=e.label,r=e.value,l=e.onChange,i=c.a.useContext(o).lang,u=c.a.useMemo(function(){return Object(b.k)(a,i)},[a,i]);return c.a.createElement(ie.a,{type:"number",variant:"filled",label:u,value:r,disabled:n,onChange:l,InputProps:{name:a,endAdornment:t&&c.a.createElement(oe.a,{position:"end"},t)}})}ue.defaultProps={adornment:!1,disabled:!1,type:"int"};var me=c.a.memo(ue),se=n(149),de=n(150),fe={build:c.a.createElement(se.a,null),team:c.a.createElement(de.a,null)};function ve(e){var t=e.btns,n=e.checked,a=e.name,l=e.onChange,i=function(e){l(e.target.value)};return c.a.createElement("div",{className:"radio-btns"},t.map(function(e){var t="radio_".concat(e);return c.a.createElement(r.Fragment,{key:t},c.a.createElement("input",{type:"radio",id:t,checked:e===n,name:a,value:e,onChange:i}),c.a.createElement("label",{htmlFor:t},fe[e]||e))}))}ve.defaultProps={btns:[],name:""};var be=c.a.memo(ve,function(e,t){return e.checked===t.checked});n.d(t,"a",function(){return w}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return K}),n.d(t,"d",function(){return _}),n.d(t,"e",function(){return Y}),n.d(t,"f",function(){return q}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return me}),n.d(t,"i",function(){return be}),n.d(t,"j",function(){return H})}}]);
//# sourceMappingURL=5.1ff1749b.chunk.js.map