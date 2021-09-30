(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(134),t.b),l=new URL(t(88),t.b),p=i()(r()),u=s()(d),m=s()(l);p.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ul, ol, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1.15;\n}\nol {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* css reset--------------------*/\n\n@font-face {\n    font-family: witch-font;\n    src: url("+u+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\nhtml {\n    background: url("+m+");\n    background-size: conver;\n    font-family: witch-font;\n    color: white;\n    font-size: 40px;\n}\n\n#bg-tint {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: black;\n    opacity: 80%;\n    z-index: -1;\n}\n\nheader {\n    height: max-content;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 20px;\n}\n\nol {\n    width: 500px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;    \n}\n\nol > li {\n    list-style: none;\n    padding: 20px;\n    border-radius: 10px;\n    transition: transform 0.25s ease-out, \n                background-color 0.25s;\n    border: 5px solid transparent;\n}\n\nol > li:hover {\n    cursor: pointer;\n    transform: scale(105%, 105%);\n    background-color: rgba(160, 158, 204, 0.35);\n    border: 5px solid #536987;\n}\n\nol > li:active {\n    transform: scale(98%, 98%);\n}\n\nmain {\n    margin: auto;\n    width: 90vw;\n    height: max-content;\n    background: rgba(45, 53, 90, 0.25);\n    border-radius: 50px;\n    padding: 20px;\n    text-align: center;\n}\n\n#title {\n    margin: 0 0 40px 0;\n}\n\nh4 {\n    margin: 0 0 20px 0;\n}\n\n#avatar {\n    border-radius: 50%;\n    box-shadow:0 0 20px rgba(194, 185, 106, 0.25)\n}\n\n.recipe {\n    display: flex;\n    margin: 40px 0;\n    border-bottom: 1px solid rgba(137, 43, 226, 0.418);\n    padding-bottom: 30px;\n}\n\n.potion-img {\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    box-shadow:0 0 20px rgba(194, 185, 106, 0.25);\n    margin: 20px;\n}\n\n.desc {\n    margin-left: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n}",""]);const h=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},88:(e,n,t)=>{e.exports=t.p+"bb8c822637a7bf71f091.jpg"},836:(e,n,t)=>{e.exports=t.p+"10ef24fef68cc5938e92.gif"},75:(e,n,t)=>{e.exports=t.p+"d24d80f042f7177f0842.jpg"},675:(e,n,t)=>{e.exports=t.p+"c13ad96bcf18036a8a58.jpg"},531:(e,n,t)=>{e.exports=t.p+"ca85107cdc15f38da813.jpg"},271:(e,n,t)=>{e.exports=t.p+"87b7c70f3b11468a480d.jpg"},134:(e,n,t)=>{e.exports=t.p+"f1e776b7cde6ecdf1f05.woff"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(836);function n(){const n=new DocumentFragment,t=document.getElementById("content");document.querySelector("main")&&document.querySelector("main").remove();const o=document.createElement("main"),r=document.createElement("img");r.src=e,r.id="avatar",o.appendChild(r);const a=document.createElement("div");a.innerHTML='<h2 id="title">Welcome, all magic believers! Beatrice here!</h2>\n    <h4>Potioncraft is an important part of witches.</h4>\n    <h4>And brewing the perfect potions may require thousands of years of experience.</h4>\n    <h4>As the Endless Witch, it is my responsibility to guide you on the right track.</h4>\n    <h4>After years of experiments, I have gathered all my observations into a book.</h4>\n    <h4>This book provides possibly the most effective recipes for some basic potions.</h4>\n    <h4>These recipes act as a guideline to further expand to more adavanced potions.</h4>\n    <h4>Modifications to the recipes are encouraged to explore the possibilities.</h4>\n    <h4>Have fun and, Happy Brewing!</h4>',o.appendChild(a),n.appendChild(o),t.appendChild(n)}var o=t(75),r=t(271),a=t(675),i=t(531);const c=(()=>{let e=[];return{add:(n,t,...o)=>e.push([n,t,o]),get:()=>e}})();function s(){const e=document.getElementById("content");document.querySelector("main")&&document.querySelector("main").remove();const n=document.createElement("main");c.get().forEach((e=>{new DocumentFragment;const t=document.createElement("img");t.src=e[0],t.classList.add("potion-img");const o=document.createElement("div");o.classList.add("desc");const r=document.createElement("h2");r.textContent=e[1];const a=document.createElement("ul");for(let n=0;n<e[2].length;n++){const t=document.createElement("li");t.textContent=e[2][n],a.appendChild(t)}const i=document.createElement("div");i.classList.add("recipe"),i.appendChild(t),o.appendChild(r),o.appendChild(a),i.appendChild(o),n.appendChild(i)})),e.appendChild(n)}c.add(o,"Daiquiri Potion","2.5 oz Aged Rum","0.75 oz Freshly Squeezed Lemon Juice","0.5 oz Simple Syrup","Shake with ice","Double strain into a chilled coupe"),c.add(r,"Tarmini Potion","2.5 oz Tanqueray No. 10","0.5 oz Noilly Prat Extra Dry Vermouth","2 dashes of Regan's Orange bitters","Lemon peel garnish"),c.add(a,"Gyn and Tonyc Potion","2 oz Gyn","1 Lime Juice","1 Half Lime as Garnish","5 to 6 oz Tonyc Water"),c.add(i,"Kazekami Potion","1.5 oz Vodka","1 oz Triple Sec","1 oz Freshly Squeezed Lime Juice","Lime wedge, for Garnish");var d=t(379),l=t.n(d),p=t(795),u=t.n(p),m=t(569),h=t.n(m),f=t(565),g=t.n(f),b=t(216),v=t.n(b),y=t(589),x=t.n(y),w=t(426),C={};C.styleTagTransform=x(),C.setAttributes=g(),C.insert=h().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=v(),l()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals,(()=>{const e=new DocumentFragment,t=document.createElement("div");t.id="bg-tint",document.body.appendChild(t);const o=document.createElement("div");o.id="content",document.body.appendChild(o);const r=document.createElement("header"),a=document.createElement("h1");a.textContent="Beatrice's Potioncraft For Dummies",r.appendChild(a);const i=document.createElement("nav"),c=document.createElement("ol"),d=document.createElement("li");d.textContent="Introduction",d.addEventListener("click",n),c.appendChild(d);const l=document.createElement("li");l.textContent="Recipes",l.addEventListener("click",s),c.appendChild(l),i.appendChild(c),r.appendChild(i),e.appendChild(r),o.appendChild(e)})(),n()})()})();