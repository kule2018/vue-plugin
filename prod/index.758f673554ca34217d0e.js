webpackJsonp([4],{13:function(n,e,t){function o(n){i||t(66)}var i=!1,r=t(1)(t(22),t(57),o,null,null);r.options.__file="/Users/soneway/Sites/github/vue-plugin/src/view/Index.vue",r.esModule&&Object.keys(r.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions."),n.exports=r.exports},22:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=["carousel","uc-gallery","slider","msgbox"];e.default={data:function(){return{url:o[0],urls:o}},methods:{__linckClick:function(n){this.url=n}}}},27:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),t(3);var i=t(4),r=o(i),l=t(13),s=o(l);s.default.el="#root",e.default=new r.default(s.default)},41:function(n,e,t){e=n.exports=t(0)(),e.push([n.i,'\n@charset "UTF-8";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  overflow-x: hidden;\n  /*可继承*/\n  color: #333;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n  -webkit-text-size-adjust: none;\n  /*禁止选中文本*/\n  -webkit-user-select: none;\n          user-select: none;\n  /*部分浏览器点选时会有淡蓝色框,这样可以去掉*/\n  -webkit-tap-highlight-color: transparent;\n  /*禁止保存图片*/\n  -webkit-touch-callout: none;\n  /*滚动平滑*/\n  -webkit-overflow-scrolling: touch;\n}\ninput, textarea, select {\n  font-size: inherit;\n}\ninput, textarea {\n  -webkit-user-select: text;\n          user-select: text;\n}\nimg, input {\n  vertical-align: middle;\n}\nimg {\n  border: none;\n}\na {\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\nli {\n  list-style: none;\n}\ni {\n  font-style: normal;\n}\n.wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.linkWrap {\n  line-height: 40px;\n  height: 40px;\n  overflow-y: hidden;\n  overflow-x: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  white-space: nowrap;\n}\n.linkWrap > a {\n    display: inline-block;\n    padding: 0 10px;\n}\n.linkWrap > a.selected {\n      box-shadow: 0 -2px 0 0 #09f inset;\n}\niframe {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  border: none;\n}\n',""])},57:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"linkWrap"},n._l(n.urls,function(e){return t("a",{class:{selected:e===n.url},on:{click:function(t){n.__linckClick(e)}}},[n._v(n._s(e))])})),n._v(" "),t("iframe",{attrs:{src:n.url+".html"}})],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},66:function(n,e,t){var o=t(41);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(2)("0bf75c75",o,!1)}},[27]);