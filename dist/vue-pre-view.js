!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PreView",[],e):"object"==typeof exports?exports.PreView=e():t.PreView=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,i){"use strict";e.a={name:"vue-pre-view",props:{infoData:{type:Object,default:function(){return{}}}},data:function(){return{info:{bgUrls:[],goodsList:[],history:[]}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),a={install:function(t,e){t.component(o.a.name,o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),e.default=a},function(t,e,i){"use strict";function o(t){i(3)}var a=i(0),n=i(9),s=i(8),r=o,d=s(a.a,n.a,!1,r,"data-v-25c24a54",null);e.a=d.exports},function(t,e,i){var o=i(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(6)("2b5e133c",o,!0,{})},function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,'.contentX[data-v-25c24a54]{width:100%;height:100%;overflow:scroll;position:relative}.contentX .header[data-v-25c24a54]{width:100%;padding-left:20px;padding-top:80px;box-sizing:border-box;position:absolute;overflow:hidden;color:#fff}.contentX .header .title-wrap[data-v-25c24a54]{width:300px;margin-bottom:15px;overflow:hidden;box-sizing:border-box;position:relative}.contentX .header .title-wrap[data-v-25c24a54]:after{content:"";width:105px;height:1px;border-bottom:1px solid hsla(0,0%,100%,.1);position:absolute;bottom:0;left:0}.contentX .header .title-wrap p[data-v-25c24a54]{margin:0;padding:0}.contentX .header .title-wrap .title[data-v-25c24a54]{font-size:26px;line-height:30px}.contentX .header .title-wrap .number[data-v-25c24a54]{font-size:10.5px;line-height:13px;margin-bottom:15px}.contentX .header .slogan[data-v-25c24a54]{font-size:12.5px;line-height:17px;max-width:238px;display:flex;position:relative}.contentX .header .slogan .daoyu[data-v-25c24a54]{width:32px;height:17px;display:inline-block;position:absolute;left:0;top:0}.contentX .header .slogan .text[data-v-25c24a54]{display:inline-block;flex:1;text-indent:35px;line-height:20px}.contentX .weekly-img[data-v-25c24a54]{width:100%}.contentX .push-goods-wrap[data-v-25c24a54]{width:100%;padding:0 21px;padding-bottom:15px;background:#fafbfc;box-sizing:border-box}.contentX .push-goods-wrap .push-title-wrap[data-v-25c24a54]{text-align:center;height:74px;line-height:74px}.contentX .push-goods-wrap .push-title-wrap .push-title[data-v-25c24a54]{font-size:21px;color:#3c3d3d;position:relative;display:inline-block}.contentX .push-goods-wrap .push-title-wrap .push-title[data-v-25c24a54]:before{content:"";width:58px;height:1px;background:#000;position:absolute;top:36.5px;left:-65px}.contentX .push-goods-wrap .push-title-wrap .push-title[data-v-25c24a54]:after{content:"";width:58px;height:1px;background:#000;position:absolute;top:36.5px;right:-65px}.contentX .push-goods-wrap .goods-list[data-v-25c24a54]{width:100%}.contentX .push-goods-wrap .goods-list .goods-item[data-v-25c24a54]{width:49%;background:#fff;margin-bottom:8px;border-radius:4px;display:inline-block}.contentX .push-goods-wrap .goods-list .goods-item[data-v-25c24a54]:last-child,.contentX .push-goods-wrap .goods-list .goods-item[data-v-25c24a54]:nth-last-child(2){margin-bottom:0}.contentX .push-goods-wrap .goods-list .goods-item[data-v-25c24a54]:nth-child(odd){margin-right:2%}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap[data-v-25c24a54]{width:100%;padding:2px;box-sizing:border-box;border-radius:4px;box-shadow:1px 1px 5px #333}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap img[data-v-25c24a54]{display:block;width:100%}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail[data-v-25c24a54]{padding:12px 12px 0;box-sizing:border-box}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-title[data-v-25c24a54]{color:#3c3d3d;font-size:12.5px}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-price[data-v-25c24a54]{border-top:1px solid rgba(0,0,0,.08);font-weight:700;min-width:74px;max-width:90px;margin-top:10px;line-height:36px}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-price .real-price[data-v-25c24a54]{color:#3c3d3d;font-size:15px}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-price .real-price .mark[data-v-25c24a54]{font-size:11.5px;padding:0;font-style:normal}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-price .price[data-v-25c24a54]{font-size:11.5px;color:#cfd0d1;text-decoration:line-through}.contentX .push-goods-wrap .goods-list .goods-item .item-imgwrap .item-detail .item-price .price .mark[data-v-25c24a54]{padding:0;font-style:normal}.contentX .past[data-v-25c24a54]{background:#fff}.contentX .past .past-weekly-list[data-v-25c24a54]{width:100%;overflow:hidden;box-sizing:border-box}.contentX .past .past-weekly-list .weekly-item[data-v-25c24a54]{width:100%;border-radius:4px;overflow:hidden;font-size:0}.contentX .past .past-weekly-list .weekly-item .cover[data-v-25c24a54]{width:100%;display:inline-block;margin:0}.contentX .past .past-weekly-list .weekly-item .detail[data-v-25c24a54]{flex:1;position:relative}.contentX .past .past-weekly-list .weekly-item .detail .weekly-header[data-v-25c24a54]{width:106px;height:47px;padding-left:20px;padding-top:7px;box-sizing:border-box;background:rgba(0,0,0,.4);position:absolute;top:16px;left:-10px;text-align:left;color:#fff}.contentX .past .past-weekly-list .weekly-item .detail .weekly-header .title[data-v-25c24a54]{font-size:18.5px}.contentX .past .past-weekly-list .weekly-item .detail .weekly-header .number[data-v-25c24a54]{font-size:10px;line-height:13px}.contentX .past .past-weekly-list .weekly-item .detail .content[data-v-25c24a54]{font-size:13px;line-height:17px;color:#fff;padding:11.5px 20px 15px 11.5px;position:absolute;bottom:0;left:0;right:0}.contentX .past .past-weekly-list .weekly-item-wrap[data-v-25c24a54]{width:100%;border-radius:4px;overflow:hidden}',""])},function(t,e){function i(t,e){var i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var n=o(a);return[i].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([n]).join("\n")}return[i].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=i(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var n=this[a][0];"number"==typeof n&&(o[n]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&o[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){function o(t){for(var e=0;e<t.length;e++){var i=t[e],o=l[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(n(i.parts[a]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{for(var s=[],a=0;a<i.parts.length;a++)s.push(n(i.parts[a]));l[i.id]={id:i.id,refs:1,parts:s}}}}function a(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function n(t){var e,i,o=document.querySelector("style["+m+'~="'+t.id+'"]');if(o){if(g)return h;o.parentNode.removeChild(o)}if(x){var n=f++;o=u||(u=a()),e=s.bind(null,o,n,!1),i=s.bind(null,o,n,!0)}else o=a(),e=r.bind(null,o),i=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else i()}}function s(t,e,i,o){var a=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var n=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(n,s[e]):t.appendChild(n)}}function r(t,e){var i=e.css,o=e.media,a=e.sourceMap;if(o&&t.setAttribute("media",o),v.ssrId&&t.setAttribute(m,e.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=i(7),l={},c=d&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,g=!1,h=function(){},v=null,m="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,a){g=i,v=a||{};var n=p(t,e);return o(n),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],r=l[s.id];r.refs--,i.push(r)}e?(n=p(t,e),o(n)):n=[];for(var a=0;a<i.length;a++){var r=i[a];if(0===r.refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete l[r.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],o={},a=0;a<e.length;a++){var n=e[a],s=n[0],r=n[1],d=n[2],p=n[3],l={id:t+":"+a,css:r,media:d,sourceMap:p};o[s]?o[s].parts.push(l):i.push(o[s]={id:s,parts:[l]})}return i}},function(t,e){t.exports=function(t,e,i,o,a,n){var s,r=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,r=t.default);var p="function"==typeof r?r.options:r;e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),i&&(p.functional=!0),a&&(p._scopeId=a);var l;if(n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},p._ssrRegister=l):o&&(l=o),l){var c=p.functional,u=c?p.render:p.beforeCreate;c?(p._injectStyles=l,p.render=function(t,e){return l.call(e),u(t,e)}):p.beforeCreate=u?[].concat(u,l):[l]}return{esModule:s,exports:r,options:p}}},function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekly",attrs:{"info-data":t.info}},[i("div",{staticClass:"contentX"},[t._e(),t._v(" "),t._l(t.infoData.bgUrls,function(t,e){return i("div",{key:e,staticClass:"imgwrap",staticStyle:{"font-size":"0"}},[i("img",{staticClass:"weekly-img",attrs:{src:t}})])}),t._v(" "),t.infoData.goodsList.length?i("div",{staticClass:"push-goods-wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"goods-list"},t._l(t.infoData.goodsList,function(e,o){return i("div",{key:o,staticClass:"goods-item"},[i("div",{staticClass:"item-imgwrap",staticStyle:{"font-size":"0"}},[i("img",{attrs:{src:e.goodsImg,alt:"商品图片"}}),t._v(" "),i("div",{staticClass:"item-detail"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.goodsTitle))]),t._v(" "),i("div",{staticClass:"item-price"},[i("span",{staticClass:"real-price"},[i("i",{staticClass:"mark"},[t._v("￥")]),t._v(t._s(e.discountedPrice))]),t._v(" "),i("span",{staticClass:"price"},[i("i",{staticClass:"mark"},[t._v("￥")]),t._v(t._s(e.originalPrice))])])])])])}))]):t._e(),t._v(" "),t.infoData.history.length?i("div",{staticClass:"push-goods-wrap past"},[t._m(1),t._v(" "),i("div",{staticClass:"past-weekly-list"},t._l(t.infoData.history,function(t,e){return i("div",{key:e,staticClass:"weekly-item"},[i("img",{staticClass:"cover",attrs:{src:t.coverUrl,alt:"周刊封面"}})])}))]):t._e()],2)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"push-title-wrap"},[i("span",{staticClass:"push-title"},[t._v("优选单品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"push-title-wrap"},[i("span",{staticClass:"push-title"},[t._v("往期回顾")])])}],n={render:o,staticRenderFns:a};e.a=n}])});
//# sourceMappingURL=vue-pre-view.js.map