webpackJsonp([1],{12:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(7),o=t.n(i);e.default={components:{PiCarousel:o.a},data:{thumbIndex:0},mounted:function(){var n=this,e=this.dataList,t=this.titleInfo,i=this.$refs.carousel;i.contentFormate=function(n,i){return n&&'<div class="imgWrap">\n              <img class="img" src="'+n.img+'"/>\n              <div class="imgInfo">\n                  <p class="indicator"><span>'+(i+1)+"</span>/"+e.length+'</p>\n                  <p class="title">'+t.title+'</p>\n                  <p class="subTitle"><span class="source">'+t.source+'</span><span class="time">'+t.time+'</span></p>\n                  <p class="desc">'+n.desc+"</p>\n              </div>\n          </div>"},i.dataList=e,i.$on("slide",function(e){n.thumbSlide(e)})},methods:{thumbSlide:function(n){n!==this.thumbIndex&&(this.thumbIndex=n,this.$refs.carousel.slideToIndex(n),this.center(n))},thumbClick:function(n){this.thumbSlide(n)},center:function(n){var e=this.$refs.thumbWrap,t=document.querySelector(".thumb:nth-of-type("+(n+1)+")");e.scrollLeft=t.offsetLeft-(e.offsetWidth-t.offsetWidth)/2}}}},14:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=(t.n(i),t(1)),r=t.n(o),s=t(9),a=t.n(s);if(!("ontouchend"in document)){var l=document.createElement("script");l.src="https://soneway.github.io/js/desktouch.js",document.head.appendChild(l)}a.a.el=".uc-gallery";var c=document.querySelector("header"),u={title:c.querySelector("h1").textContent.trim(),source:c.querySelector("#source").textContent.trim(),time:c.querySelector("time").textContent.trim()},p=[].slice.call(document.querySelectorAll(".uc-gallery figure")),d=p.map(function(n){return{img:n.querySelector("img").getAttribute("alt-src"),desc:n.querySelector("figcaption>p").textContent.trim()}});Object.assign(a.a.data||(a.a.data={}),{dataList:d,titleInfo:u}),e.default=new r.a(a.a)},19:function(n,e,t){e=n.exports=t(2)(),e.push([n.i,'\n@charset "UTF-8";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  -webkit-overflow-scrolling: touch;\n  font-family: sans-serif;\n}\n.carouselWrap {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 42px;\n}\n.carouselWrap .pi-carousel.loading .pi-item:before {\n    top: 100px;\n}\n.imgWrap {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  font-size: 15px;\n  color: #999;\n  line-height: 150%;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 61%, #fff 0%);\n  /*页码指示*/\n  /*标题*/\n  /*来源和日期*/\n  /*描述信息*/\n}\n.imgWrap .img {\n    display: block;\n    max-width: 100%;\n    max-height: 60%;\n    min-height: 200px;\n    margin: 0 auto;\n}\n.imgWrap .imgInfo {\n    padding: 15px;\n    background: #fff;\n    min-height: 40%;\n}\n.imgWrap .indicator {\n    font-weight: 100;\n}\n.imgWrap .indicator span {\n      font-size: 30px;\n      color: #333;\n}\n.imgWrap .title {\n    font-size: 20px;\n    padding: 15px 0;\n    color: #333;\n}\n.imgWrap .subTitle {\n    color: #bbb;\n    font-size: 14px;\n    line-height: 100%;\n}\n.imgWrap .subTitle > span {\n      display: inline-block;\n}\n.imgWrap .subTitle > span:not(:first-of-type) {\n        border-left: 1px solid #bbb;\n        margin-left: 12px;\n        padding: 0 12px;\n}\n.imgWrap .desc {\n    padding-top: 15px;\n    text-indent: 2em;\n}\n.thumbWrap {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 42px;\n  white-space: nowrap;\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n.thumb {\n  width: 60px;\n  height: 100%;\n  background: center center;\n  background-size: cover;\n  display: inline-block;\n}\n.thumb:not(:last-of-type) {\n    border-left: 1px solid #fff;\n}\n.thumb.selected {\n    border: 2px solid #00f;\n}\n.thumb.selected + .thumb {\n      border: none;\n}\n',""])},26:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"carouselWrap"},[t("pi-carousel",{ref:"carousel",attrs:{isShowPager:!1,isLoop:!1,height:"100%"}})],1),n._v(" "),t("div",{ref:"thumbWrap",staticClass:"thumbWrap"},n._l(n.dataList,function(e,i){return t("div",{staticClass:"thumb",class:[{selected:i===n.thumbIndex}],style:{backgroundImage:"url("+e.img+")"},on:{click:function(e){n.thumbClick(i)}}})}))])},staticRenderFns:[]},n.exports.render._withStripped=!0},29:function(n,e,t){var i=t(19);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(4)("3166079e",i,!1)},9:function(n,e,t){function i(n){o||t(29)}var o=!1,r=t(3)(t(12),t(26),i,null,null);r.options.__file="/Users/soneway/Sites/github/vue-plugin/src/view/UcGallery.vue",r.esModule&&Object.keys(r.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] UcGallery.vue: functional components are not supported with templates, they should use render functions."),n.exports=r.exports}},[14]);