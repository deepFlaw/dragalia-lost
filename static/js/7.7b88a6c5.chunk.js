(window["webpackJsonpdragalia-lost"]=window["webpackJsonpdragalia-lost"]||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(0),c=a.n(r),i=a(25),l=a(151),u=a(156),o=a(138),s=a(3),m=a(12),d=function(e,t){switch(e){case"adventurer":return function(e){var t,a,n=e.ex,r=e.id,c=e.mana,i=e.rarity,l=s.i["adventurerSkill_".concat(c)];return t="5"===i||"100001_01"===r?"5_".concat(c):"rest_".concat(c),c>=40?a="40":c>=10&&(a="10"),l+s.a[t].reduce(function(t,a){return e[a]?t+e[a]:t},0)+(s.i["fs_".concat(a)]||0)+s.i["coAbility_".concat(i,"_").concat(n)]}(t);case"weapon":return function(e){var t="4"===e.unbind?"4":"0",a=e.skill?s.i["itemSkill_".concat(t)]:0;return e.abilities11+e.abilities21+a}(t);case"wyrmprint1":case"wyrmprint2":return"4"===(a=t).unbind?a.abilities13+a.abilities23+a.abilities33:a.unbind>="2"?a.abilities12+a.abilities22+a.abilities32:a.abilities11+a.abilities21+a.abilities31;case"dragon":return function(e){var t=10*e.bond;return"4"===e.unbind?e.abilities12+e.abilities22+t+s.i.itemSkill_4:e.abilities11+e.abilities21+t+s.i.itemSkill_0}(t);default:return 0}var a},f=function(e,t){var a=["Hp","Atk"][t],n=["50","45","40","30","20","10","0"].indexOf(e.mana);return[e["McFullBonus".concat(a,"5")],e["Plus".concat(a,"4")],e["Plus".concat(a,"3")],e["Plus".concat(a,"2")],e["Plus".concat(a,"1")],e["Plus".concat(a,"0")],0].slice(n).reduce(function(e,t){return e+t},0)},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return{hp:0,str:0,might:0,augHp:0,augStr:0,tHp:0,tStr:0,tMight:0};var n=t.curRarity,r=t.rarity,c=t.level,i=t.augHp,l=void 0===i?0:i,u=t.augStr,o=void 0===u?0:u;c=Number(c),l=Number(l),o=Number(o),"adventurer"===e&&(r=5);var s,b,p,v,g=Object(m.d)(e,r),h=0,O=0;c===g?(h=t.MaxHp,O=t.MaxAtk):("adventurer"===e?(s=t["MinHp".concat(n)],b=t["MinAtk".concat(n)],p="MinHp5",v="MinAtk5"):(s=t.MinHp,b=t.MinAtk,p="MinHp",v="MinAtk"),1===c?(h=s,O=b):(h=s+(c-1)/(g-1)*(t.MaxHp-t[p]),O=b+(c-1)/(g-1)*(t.MaxAtk-t[v])));"adventurer"===e&&(h+=f(t,0),O+=f(t,1)),h=Object(m.a)(h),O=Object(m.a)(O),a&&(h=Object(m.a)(1.5*h+.5*l),O=Object(m.a)(1.5*O+.5*o));var E=h+l,y=O+o,j=d(e,t),w=h+O+j,k=E+y+j;return{hp:h,str:O,might:w,augHp:l,augStr:o,tHp:E,tStr:y,tMight:k}},p=function(e,t){for(var a=0,n=0,r=0;r<e.length;r+=1){var c=t[e[r]];if(c){var i=s.g[c.type][c.level];a+=i[0],n+=i[1]}}return{hp:a,str:n}},v=function(e,t){if(!e.adventurer)return null;for(var a={},n=e.adventurer,r=e.wyrmprint1,c=e.wyrmprint2,i=e.dragon,l=0,u=0,o=0,d=0,f=0,v=n.element,g=0;g<s.k.length;g+=1){var h=s.k[g],O=e[h],E=("weapon"===h||"dragon"===h)&&O&&v===O.element,y=b(h,O,E);l+=y.tHp,u+=y.tStr,o+=y.tMight,d+=y.augHp,f+=y.augStr,a[h]=y}a.augments={hp:d,str:f,might:d+f};var j=function(e,t,a){var n=t.adventurer,r=t.dragon,c=n.element,i=n.weapon,l=["adventurer_".concat(c),i],u=s.e.filter(function(e){return l.some(function(t){return e.includes(t)})}),o=p(u,a),d={hp:0,str:0};if(r){var f=s.e.filter(function(e){return e.includes("dragon_".concat(r.element))});d=p(f,a)}var b=e.adventurer.tHp*o.hp*.01,v=e.adventurer.tStr*o.str*.01,g=e.dragon.tHp*d.hp*.01,h=e.dragon.tStr*d.str*.01,O=Object(m.a)(b)+Object(m.a)(g),E=Object(m.a)(v)+Object(m.a)(h);return{hp:O,str:E,might:O+E}}(a,e,t);a.halidom=j;var w=0,k=0;if(i&&v.includes(i.reqEle)){var x="4"===i.unbind?"2":"1";w=i["incHP".concat(x)],k=i["incSTR".concat(x)]}n.incSTR2&&n.mana>=n.STRLV2?k+=n.incSTR2:n.incSTR1&&n.mana>=n.STRLV1&&(k+=n.incSTR1),e.weapon&&e.weapon.incSTR&&v.includes(e.weapon.reqEle)&&(k+=e.weapon.incSTR);var H=0,S=0,P=!1,M=!1;if(r){var C=r.unbind,D=1;"4"===C?(D=3,P=!0):C>="2"&&(D=2),H+=r["incHP".concat(D)]||0,S+=r["incSTR".concat(D)]||0}if(c){var R=c.unbind,_=1;"4"===R?(_=3,M=!0):R>="2"&&(_=2),H+=c["incHP".concat(_)]||0,S+=c["incSTR".concat(_)]||0}H>8&&(H=8),!(S>20)||P&&M||(S=20),w+=H,k+=S;var A=l+j.hp,T=u+j.str,F=o+j.might,N=A*w*.01,I=T*k*.01;return a.ability={hp:Object(m.a)(N),str:Object(m.a)(I),might:0},A+=N,T+=I,a.total={hp:A,str:T,might:F},a},g=function(e,t){var a=e.adventurer,n=e.weapon,r=e.wyrmprint1,c=e.wyrmprint2,i=e.dragon,l=t.dungeon,u=t.str,o=t.multiplier,m=[],d=1*t.def+1*t.exDef;a.incDef2&&a.mana>=a.defLV2?(d+=a.incDef2,m.push("adventurer,def,".concat(a.incDef2))):a.incDef1&&a.mana>=a.defLv1&&(d+=a.incDef1,m.push("adventurer,def,".concat(a.incDef1))),n&&n.incDef&&a.element.includes(n.reqEle)&&(d+=n.incDef,m.push("weapon,def,".concat(n.incDef)));var f=0,b=0,p=0,v=0,g=s.p[l].element;if(r){var h=1;if("4"===r.unbind?h=3:r.unbind>="2"&&(h=2),r.incHP1){var O=r["incHP".concat(h)];f+=O,m.push("wyrmprint1,hp,".concat(O))}if(r.incDef1){var E=r["incDef".concat(h)];b+=E,m.push("wyrmprint1,def,".concat(E))}if(r.dungeon===l){var y=r["reduce".concat(h)];v+=y,m.push("wyrmprint1,reduce,".concat(y))}if(r.resEle===g){var j=r["incRes".concat(h)];p+=j,m.push("wyrmprint1,res,".concat(j))}}if(c){var w=1;if("4"===c.unbind?w=3:c.unbind>="2"&&(w=2),c.incHP1){var k=r["incHP".concat(w)];(f+=k)>8?m.push("wyrmprint2,hp,".concat(k," -> ").concat(8-f+k)):m.push("wyrmprint2,hp,".concat(k))}if(c.incDef1){var x=c["incDef".concat(w)];(b+=x)>20?(m.push("wyrmprint2,def,".concat(x," -> ").concat(20-b+x)),b=20):m.push("wyrmprint2,def,".concat(x))}if(c.dungeon===l){var H=c["reduce".concat(w)];(v+=H)>25?m.push("wyrmprint2,reduce,".concat(H," -> ").concat(25-v+H)):m.push("wyrmprint2,reduce,".concat(H))}if(c.resEle===g){var S=c["incRes".concat(w)];(p+=S)>15?m.push("wyrmprint2,res,".concat(S," -> ").concat(15-p+S)):m.push("wyrmprint2,res,".concat(S))}}var P=p;if(d+=b,(i||{}).resEle===g){var M=i.incRes;P+=M,m.push("dragon,res,".concat(M))}var C=1;a.element===s.d[g].da?C=.5:a.element===s.d[g].ad&&(C=1.5);var D=5/3*u*o*C*(1-.01*v)*(1-.01*P)/(a.DefCoef*(1+.01*d)),R=function(e){var t=Math.round(e);return Math.abs(e-t)<1e-5?t:Math.floor(e)};return{min:R(.95*D),max:R(1.05*D),arr:m}},h=a(4),O=a(48),E=a(51),y=["adventurer","weapon","wyrmprint1","wyrmprint2","dragon","augments","ability","halidom"];var j=c.a.memo(function(e){var t=e.collapse,a=e.details,n=c.a.useContext(E.b).lang,i=Object(r.useMemo)(function(){return{body:Object(O.a)("body",{collapse:t}),footer:Object(O.a)("footer",{collapse:t})}},[t]),l=i.body,u=i.footer;return a?c.a.createElement("div",{id:"stats-table"},c.a.createElement("div",{className:"header"},c.a.createElement("span",null),c.a.createElement("span",null,"HP"),c.a.createElement("span",null,Object(m.k)("str",n)),c.a.createElement("span",null,Object(m.k)("might",n))),c.a.createElement("div",{className:l},y.map(function(e){var t=a[e],i=t.hp,l=t.str,u=t.might;return c.a.createElement(r.Fragment,{key:e},c.a.createElement("span",null,Object(m.k)(e,n)),c.a.createElement("span",null,i),c.a.createElement("span",null,l),c.a.createElement("span",null,u))})),c.a.createElement("div",{className:u},c.a.createElement("span",null,Object(m.k)("total",n)),c.a.createElement("span",null,Object(m.a)(a.total.hp)),c.a.createElement("span",null,Object(m.a)(a.total.str)),c.a.createElement("span",null,a.total.might))):null}),w=a(1);var k=c.a.memo(function(e){var t,a=e.damageState,n=a.arr,r=a.hp,i=a.max,l=a.min,u=c.a.useContext(E.b).lang,o="linear-gradient(120deg, green, #4ba946 "+"".concat(t=r>i?100:r<=l?0:100*(r-1-l)/(i-l),"%, #deb887 ").concat(t+5,"%, #be3223 , #800000)");return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"damage-bar",style:{background:o}},c.a.createElement("span",null,l),c.a.createElement("span",{style:{fontSize:"20px"}},"".concat(r," (").concat(t.toFixed(2),"%)")),c.a.createElement("span",null,i)),c.a.createElement("table",null,c.a.createElement("tbody",null,n.map(function(e){var t=e.split(",");return c.a.createElement("tr",{key:"".concat(t[0],"_").concat(t[1])},c.a.createElement("td",null,Object(m.k)(t[0],u)),c.a.createElement("td",null,Object(m.k)(t[1],u)),c.a.createElement("td",null,Object(m.k)(t[2],u)))}))))});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(w.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=Object.keys(s.p),P=["N","H","VH","EX"],M=["str","multiplier","exHp","exDef","hp","def"];var C=Object(i.b)(function(e){return{stats:e.stats}})(function(e){var t=e.stats,a=e.totalHp,i=Object(r.useState)(function(){var e=s.m[t.adventurer.element],a=Object(n.a)(s.p[e].VH,2);return{dungeon:e,str:a[0],multiplier:a[1],difficulty:"VH",exHp:"",exDef:"",hp:"",def:""}}),l=Object(n.a)(i,2),u=l[0],o=l[1],d=function(e){var t=e.target,a=t.name,n=t.value;n!==u[a]&&o(function(e){return H({},e,Object(w.a)({},a,n))})},f=Object(r.useRef)(!1);Object(r.useEffect)(function(){if(f.current){var e=Object(n.a)(s.p[u.dungeon][u.difficulty],2),t=e[0],a=e[1];o(function(e){return H({},e,{str:t,multiplier:a})})}else f.current=!0},[u.dungeon,u.difficulty,o]),Object(r.useEffect)(function(){if(t.adventurer){var e=t.adventurer,a=e.ex,n=e.rarity,r=e.weapon,c=e.element,i=s.m[c];if(i!==u.dungeon&&o(function(e){return H({},e,{dungeon:i})}),"Axe"===r||"Lance"===r){var l="",m="",d=s.b["".concat(r,"_").concat(n)][a];"Axe"===r?m=d:"Lance"===r&&(l=d),o(function(e){return H({},e,{exHp:l,exDef:m})})}}},[t.adventurer]);var b=c.a.useMemo(function(){var e=g(t,u);return H({hp:Object(m.a)(a*(1+.01*u.hp)*(1+.01*u.exHp))},e)},[t,a,u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2"},c.a.createElement(E.j,{label:"dungeon",options:S,value:u.dungeon,onChange:d}),c.a.createElement(E.j,{label:"difficulty",options:P,value:u.difficulty,onChange:d}),M.map(function(e){return c.a.createElement(E.h,{key:e,label:e,value:u[e],onChange:d})})),c.a.createElement(k,{damageState:b}))});var D={resetStats:h.d},R=Object(i.b)(function(e){return{stats:e.stats,halidom:e.halidom}},D)(function(e){var t=e.stats,a=e.halidom,r=e.setPanel,i=e.resetStats,s=c.a.useState(!1),m=Object(n.a)(s,2),d=m[0],f=m[1],b=c.a.useMemo(function(){return v(t,a)},[t,a]);return c.a.createElement("div",{id:"col1"},c.a.createElement("div",{className:"col-2"},c.a.createElement(l.a,{control:c.a.createElement(u.a,{disabled:!b,color:"primary",checked:d,onChange:function(e){f(e.target.checked)}}),label:"CHECK"}),c.a.createElement(o.a,{variant:"outlined",onClick:function(){r("stats"),i()}},"RESET")),c.a.createElement(j,{details:b,collapse:d}),t.adventurer&&d&&c.a.createElement(C,{stats:t,totalHp:b.total.hp}))}),_={mana_3:["30","20","10","0"],mana_4:["40","30","20","10","0"],mana_5:["50","45","40","30","20","10","0"],curRarity_3:["5","4","3"],curRarity_4:["5","4"],curRarity_5:["5"],rest:["4","3","2","1","0"]};var A=c.a.memo(function(e){var t=e.label,a=e.value,n=e.rarity,r=e.disabled,i=e.onChange,l=c.a.useMemo(function(){return"curRarity"===t||"mana"===t?_["".concat(t,"_").concat(n)]:"ex"===t||"unbind"===t?_.rest:[]},[t,n]);return c.a.createElement(E.j,{label:t,value:a,options:l,disabled:r,onChange:i})});var T={selectFocus:h.g,selectItem:h.h},F=Object(i.b)(function(e,t){var a=e.focused,n=e.stats,r=t.statsKey;return{scale:a===r&&!n[r]}},T)(function(e){var t=e.image,a=e.name,n=e.scale,r=e.statsKey,i=e.setPanel,l=e.selectFocus,u=e.selectItem,o=c.a.useContext(E.b).lang,s=Object(m.b)(r),d=a?a[o]:Object(m.k)(r,o),f=Object(O.a)("lg",{scale:n});return c.a.createElement("div",null,c.a.createElement(E.g,{field:s,image:t,size:f,tabIndex:"-1",onClick:function(){n||u(r),i("stats"),l(r),Object(m.j)(m.g.col3)}}),c.a.createElement("div",null,d))});function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(w.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var K={updateItem:h.j},L=Object(i.b)(null,K)(function(e){var t=e.statsKey,a=e.item,r=e.setPanel,i=e.updateItem,l=a||{},u=l.bond,o=l.curRarity,s=l.ex,d=l.level,f=l.mana,b=l.name,p=l.rarity,v=l.unbind,g=l.augHp,h=void 0===g?"":g,O=l.augStr,y=void 0===O?"":O,j=Object(m.c)(a,t),k=c.a.useState({bond:u,level:d,augHp:h,augStr:y}),x=Object(n.a)(k,2),H=x[0],S=x[1],P=function(e){var n=e.target,r=n.name,c=n.value,l=function(e,n){if(H[e]&&n===H[e])return null;if(!H[e]&&n===a[e])return null;var r=Object(w.a)({},e,n);switch(e){case"augHp":case"augStr":case"bond":case"level":var c="level"===e?t:e,i="adventurer"===t?o:p,l=Object(m.d)(c,i,v);r[e]=n>l?l:n;break;case"curRarity":r=I({},r,{level:Object(m.d)(t,n),mana:Object(m.d)("mana",n),ex:"5"===n?"4":"0"});break;case"mana":r.ex="50"===n?"4":"0";break;case"ex":r.mana="45";break;case"unbind":r.level=Object(m.d)(t,p,n)}return r}(r,c);if(null!==l){var u={statsKey:t,updates:l};if(Object.prototype.hasOwnProperty.call(H,r)){var s,d=H["".concat(r,"Id")];clearTimeout(d),d=setTimeout(function(){"level"!==r&&"bond"!==r||""!==l[r]||(l[r]=1,S(I({},H,Object(w.a)({},r,1)))),i(u)},1e3),S(I({},H,(s={},Object(w.a)(s,"".concat(r,"Id"),d),Object(w.a)(s,r,l[r]),s)))}else l.level&&S(I({},H,{level:l.level})),i(u)}};return c.a.createElement("div",{className:"stats-field",ref:m.g[t]},c.a.createElement(F,{name:b,statsKey:t,image:j,setPanel:r}),a&&("adventurer"===t?c.a.createElement("div",null,c.a.createElement(A,{label:"mana",value:f,rarity:o,onChange:P}),c.a.createElement(A,{label:"ex",value:s,onChange:P}),c.a.createElement(E.h,{label:"augHp",value:H.augHp,onChange:P}),c.a.createElement(E.h,{label:"augStr",value:H.augStr,onChange:P}),c.a.createElement(E.h,{label:"level",value:H.level,onChange:P}),c.a.createElement(A,{label:"curRarity",value:o,rarity:p,onChange:P})):c.a.createElement("div",null,c.a.createElement(E.h,{label:"level",value:H.level,onChange:P}),c.a.createElement(A,{label:"unbind",value:v,onChange:P}),c.a.createElement(E.h,{label:"augHp",value:H.augHp,onChange:P}),c.a.createElement(E.h,{label:"augStr",value:H.augStr,onChange:P}),"dragon"===t&&c.a.createElement(E.h,{label:"bond",value:H.bond,onChange:P}))))});var V=Object(i.b)(function(e){return{stats:e.stats}})(function(e){var t=e.setPanel,a=e.stats,r=c.a.useState("adventurer"),i=Object(n.a)(r,2),l=i[0],u=i[1];return c.a.useEffect(function(){var e=(a.adventurer||{}).id;u(void 0===e?"adventurer":e)},[a.adventurer]),c.a.createElement("div",{id:"col2"},s.k.map(function(e){var n=a[e],r=(n||{}).id,i=void 0===r?e:r;return c.a.createElement(L,{key:"".concat(l,"_").concat(i),statsKey:e,item:n,setPanel:t})}))}),z=["del","refresh","save"];var q={loadHalidom:h.b},J=Object(i.b)(function(e){var t=e.stats,a=t.adventurer,n=t.dragon,r=e.halidom,c=a||{};return{element:c.element,weapon:c.weapon,dragonEle:(n||{}).element,halidom:r}},q)(function(e){var t,a=e.element,n=e.weapon,r=e.dragonEle,i=e.halidom,l=e.loadHalidom;if(!a)return null;t=a===r?[a,n]:r?["adventurer_".concat(a),n,"dragon_".concat(r)]:["adventurer_".concat(a),n];var u=s.e.filter(function(e){return t.some(function(t){return e.includes(t)})});return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.f,{btns:z,onClick:function(e){switch(e.currentTarget.name){case"del":Object(m.h)("halidom");break;case"refresh":l();break;case"save":Object(m.i)("halidom",i)}}}),c.a.createElement("div",null,u.map(function(e){return c.a.createElement(E.d,{key:e,itemKey:e})})))}),U=a(162);var B={selectFilter:h.e,resetFilters:h.c},X=Object(i.b)(function(e){return{filters:e.filters}},B)(function(e){var t=e.filters,a=e.search,r=e.setSearch,i=e.resetFilters,l=e.selectFilter,u=c.a.useContext(E.b).lang,s=Object(m.l)(function(e){r(e.target.value)}),d=Object(m.l)(function(e){var t=e.target,a=t.checked,n=t.name,r=t.value;l({checked:a,name:n,value:r})});return c.a.createElement(c.a.Fragment,null,Object.entries(t).map(function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement(E.a,{key:a,btns:r,name:a,onChange:d})}),c.a.createElement("div",{id:"search-bar"},c.a.createElement(U.a,{variant:"filled",value:a,label:Object(m.k)("search",u),InputProps:{spellCheck:!1},onChange:s}),c.a.createElement(o.a,{color:"secondary",variant:"contained",onClick:function(){r(""),i()}},"RESET")))}),G=a(26),Q=a(75),W=a(74),Y=a(17);var Z={selectItem:h.h},$=Object(i.b)(function(e){return{focused:e.focused}},Z)(function(e){var t=e.focused,a=e.index,n=e.style,r=e.data,i=r.cols,l=r.field,u=r.arr,o=e.selectItem,s=c.a.useContext(E.b).lang,d=u[a],f=d.name[s],b=Object(m.c)(d,l);return c.a.createElement("div",{style:n,className:"item-list"},c.a.createElement(E.g,{field:l,image:b,onClick:function(){o({statsKey:t,item:d}),Object(m.j)(m.g[t],!0)}}),c.a.createElement("span",{className:"name"},f),i.map(function(e){if("weapon"===e||"element"===e){var t="".concat(e,"_").concat(d[e]);return c.a.createElement(E.g,{key:e,size:"sm",field:"icon",image:t})}return c.a.createElement("span",{key:e},d[e])}))});var ee=Object(i.b)(function(e){return{filters:e.filters}})(function(e){var t=e.field,a=e.fields,i=e.filters,l=e.search,u=c.a.useContext(E.b).lang,o=c.a.useState("hide"),m=Object(n.a)(o,2),d=m[0],f=m[1];Object(r.useEffect)(function(){setTimeout(function(){f(null)},250)},[]);var b=c.a.useMemo(function(){var e={};return a.forEach(function(t){e[t]=Object(Y.c)(i[t])}),{arr:Object.values(s.n[t]).filter(function(t){return a.every(function(a){return 0===e[a].length||e[a].includes(t[a])})&&t.name[u].toUpperCase().includes(l.toUpperCase())}).sort(function(e,a){if(e.rarity>a.rarity)return-1;if(e.rarity<a.rarity)return 1;if(e.element){var n=[].concat(Object(G.a)(s.c),["None"]),r=n.indexOf(e.element),c=n.indexOf(a.element);if(r>c)return 1;if(r<c)return-1}if(e.weapon){var i=s.l.indexOf(e.weapon),l=s.l.indexOf(a.weapon);if(i>l)return 1;if(i<l)return-1}if("wyrmprint"===t){if(e.dungeon&&!a.dungeon)return-1;if(!e.dungeon&&a.dungeon)return 1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33>a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return-1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33<a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return 1}else{if(e.MaxAtk+e.MaxHp>a.MaxAtk+a.MaxHp)return-1;if(e.MaxAtk+e.MaxHp<a.MaxAtk+a.MaxHp)return 1}return e.id>a.id?1:e.id<a.id?-1:0}),cols:a,field:t}},[t,a,i,u,l]),p=c.a.useRef(null);return Object(r.useEffect)(function(){p.current&&p.current.scrollToItem(0)},[t,i]),c.a.createElement("div",{className:d},c.a.createElement(W.a,null,function(e){var t=e.height,a=e.width;return c.a.createElement(Q.b,{ref:p,height:t,width:a,itemSize:80,itemCount:b.arr.length,itemData:b},$)}))}),te={adventurer:["weapon","element","rarity"],weapon:["weapon","element","rarity"],wyrmprint:["rarity"],dragon:["element","rarity"]};var ae=Object(i.b)(function(e){var t=e.focused;return{field:Object(m.b)(t)}})(function(e){var t=e.field,a=c.a.useState(""),r=Object(n.a)(a,2),i=r[0],l=r[1];return c.a.useEffect(function(){l("")},[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(X,{fields:te[t],search:i,setSearch:l}),c.a.createElement(ee,{field:t,fields:te[t],search:i}))}),ne=["stats","halidom"];var re=c.a.memo(function(e){var t=e.panel,a=e.setPanel;return c.a.createElement("div",{id:"col3",ref:m.g.col3},c.a.createElement(E.i,{name:"panel",checked:t,btns:ne,onChange:a}),"stats"===t?c.a.createElement(ae,null):c.a.createElement(J,null))});var ce=function(){var e=c.a.useState("stats"),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement("main",{id:"stats"},c.a.createElement(R,{setPanel:r}),c.a.createElement(V,{setPanel:r}),c.a.createElement(re,{panel:a,setPanel:r}))};t.default=ce}}]);
//# sourceMappingURL=7.7b88a6c5.chunk.js.map