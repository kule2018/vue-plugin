webpackJsonp([0],[,,,,,,function(e,t,n){function i(e){r||n(20)}var r=!1,o=n(2)(n(9),n(17),i,null,null);o.options.__file="/Users/soneway/Sites/git/vue-plugin/src/view/UcGallery.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] UcGallery.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={components:{PiCarousel:r.default},mounted:function(){var e=this.dataList,t=this.titleInfo,n=this.$refs.carousel;n.contentFormate=function(n,i){return n&&'<div class="imgWrap">\n              <img class="img" src="'+n.img+'"/>\n              <div class="imgInfo">\n                  <p class="indicator"><b>'+(i+1)+"</b>/"+e.length+'</p>\n                  <h3 class="title">'+t.title+'</h3>\n                  <p class="subTitle"><span class="source">'+t.source+'</span><span class="time">'+t.time+'</span></p>\n                  <p class="desc">'+n.desc+"</p>\n              </div>\n          </div>"},n.dataList=e}}},,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=i(r),s=n(6),a=i(s);if(!("ontouchend"in document)){var l=document.createElement("script");l.src="https://soneway.github.io/js/desktouch.js",document.head.appendChild(l)}a.default.el=".uc-gallery";var u=document.querySelector("header"),c={title:u.querySelector("h1").textContent.trim(),source:u.querySelector("#source").textContent.trim(),time:u.querySelector("time").textContent.trim()},p=[].slice.call(document.querySelectorAll(".uc-gallery figure")),d=p.map(function(e){return{img:e.querySelector("img").getAttribute("alt-src"),desc:e.querySelector("figcaption>p").textContent.trim()}});a.default.data={dataList:d,titleInfo:c},t.default=new o.default(a.default)},,,function(e,t,n){t=e.exports=n(1)(),t.push([e.i,"\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  -webkit-overflow-scrolling: touch;\n}\n.wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.wrapper .pi-carousel.loading .pi-item:before {\n    top: 100px;\n}\n.imgWrap {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  font-size: 14px;\n  color: #333;\n  line-height: 150%;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 60%, #fff 0%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 60%, #fff 0%);\n}\n.imgWrap .img {\n    display: block;\n    max-width: 100%;\n    max-height: 60%;\n    min-height: 200px;\n    margin: 0 auto;\n}\n.imgWrap .imgInfo {\n    padding: 10px;\n    background: #fff;\n}\n.imgWrap .indicator b {\n    font-size: 20px;\n}\n.imgWrap .title {\n    font-size: 18px;\n    padding: 10px 0;\n}\n.imgWrap .subTitle {\n    color: #666;\n    line-height: 100%;\n}\n.imgWrap .subTitle > span:not(:first-of-type) {\n      border-left: 1px solid #666;\n      margin-left: 10px;\n      padding: 0 10px;\n}\n.imgWrap .desc {\n    padding: 10px 0;\n}\n",""])},,,function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("pi-carousel",{ref:"carousel",attrs:{isShowPager:!1,isLoop:!1,height:"100%"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},,,function(e,t,n){var i=n(14);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("3166079e",i,!1)}],[11]);