(function(){"use strict";var e={6666:function(e,t,n){var r=n(9242),o=n(3396);const a={id:"app"};function i(e,t,n,r,i,c){const s=(0,o.up)("Navbar"),u=(0,o.up)("router-view"),l=(0,o.up)("MediosPago"),d=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(s),(0,o.Wm)(u),(0,o.Wm)(l),(0,o.Wm)(d)])}function c(e,t,n,r,a,i){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(c,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(c,{to:"/products"},{default:(0,o.w5)((()=>[(0,o.Uk)("Products")])),_:1}),(0,o.Wm)(c,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})])}var s={name:"Navbar"},u=n(89);const l=(0,u.Z)(s,[["render",c]]);var d=l,f=n.p+"img/logo-footer.8e7bce41.png";const p={class:"py-5 px-5"},v=(0,o._)("img",{src:f,class:"mx-auto d-block",alt:"suricata"},null,-1),m=[v];function h(e,t){return(0,o.wg)(),(0,o.iD)("footer",p,m)}const b={},g=(0,u.Z)(b,[["render",h]]);var y=g;const w={class:"container-fluid d-none d-sm-none d-md-block py-5",id:"Ahora-aceptamos"},k=(0,o.uE)('<div class="container"><div class="row"><div class="col-5"><h2 class="text-light fw-bold display-5"> Ahora aceptamos </h2></div><div class="col-7"><div class="row text-light"><div class="col-2"><i class="fab fa-cc-mastercard fa-4x"></i></div><div class="col-2"><i class="fab fa-cc-visa fa-4x"></i></div><div class="col-2"><i class="fab fa-cc-amex fa-4x"></i></div><div class="col-2"><i class="fab fa-cc-diners-club fa-4x"></i></div><div class="col-2"><i class="fab fa-cc-paypal fa-4x"></i></div><div class="col-2"><i class="fab fa-cc-discover fa-4x"></i></div></div></div></div></div>',1),x=[k];function C(e,t){return(0,o.wg)(),(0,o.iD)("section",w,x)}const _={},O=(0,u.Z)(_,[["render",C]]);var j=O,A={name:"App",components:{Navbar:d,Footer:y,MediosPago:j}};const E=(0,u.Z)(A,[["render",i]]);var N=E,P=n(2483);function S(e,t,n,r,a,i){const c=(0,o.up)("Card");return(0,o.wg)(),(0,o.j4)(c)}var T=n.p+"img/colaciones.89edb2a4.jpg";const D={class:"container",id:"productos"},W=(0,o.uE)('<h1 class="text-center">Nuestros Productos</h1><div class="row"><div class="col-sm-4 col-12 px-5 mb-4"><div class="card"><img src="'+T+'" class="card-img-top" alt="colaciones"><div class="card-body"><h5 class="card-title fw-bold">Colaciones</h5><p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p></div><ul class="list-group list-group-flush"><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Vestibulum at eros</li></ul><div class="card-body"><a href="#" class="card-link">Ver más</a><a href="#" class="card-link">Comprar</a></div></div></div></div>',2),q=[W];function F(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("section",D,q)}var Z={};const L=(0,u.Z)(Z,[["render",F]]);var M=L,U={components:{Card:M}};const B=(0,u.Z)(U,[["render",S]]);var H=B;const V=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,833))},{path:"/products",name:"products",component:()=>n.e(893).then(n.bind(n,883)),props:e=>({nombre:e.query.nombre,descripcion:e.query.descripcion,precio:e.query.precio,cantidad:e.query.cantidad})},{path:"/contact",name:"contact",component:()=>n.e(631).then(n.bind(n,9795))}],I=(0,P.p7)({history:(0,P.r5)(),routes:V});var K=I;(0,r.ri)(N).use(K).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{443:"about",631:"contact",893:"products"}[e]+"."+{443:"df948f7c",631:"09a669c9",893:"24086629"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/products.9b83aa7f.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="desafio-vue-router:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={893:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkdesafio_vue_router"]=self["webpackChunkdesafio_vue_router"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6666)}));r=n.O(r)})();
//# sourceMappingURL=app.5c09dd8e.js.map