webpackJsonp([0],[,,,,,,function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&d&&(m=!1,d.length?p=d.concat(p):v=-1,p.length&&c())}function c(){if(!m){var t=o(a);m=!0;for(var e=p.length;e;){for(d=p,p=[];++v<e;)d&&d[v].run();v=-1,e=p.length}d=null,m=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,p=[],m=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new u(t,e)),1!==p.length||m||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=s,h.addListener=s,h.once=s,h.off=s,h.removeListener=s,h.removeAllListeners=s,h.emit=s,h.prependListener=s,h.prependOnceListener=s,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},,function(t,e,n){function r(t){o||n(27)}var o=!1,i=n(3)(n(11),n(24),r,null,null);i.options.__file="/Users/soneway/Sites/github/vue-plugin/src/view/Index.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},,,function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),c=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n.n(o),a=n(16);e.default={components:{PiCarousel:i.a},mounted:function(){this.initImgs()},methods:{initImgs:function(){function t(){return e.apply(this,arguments)}var e=r(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$refs.carousel,t.next=3,a.a.getImgs();case 3:e.dataList=t.sent;case 4:case"end":return t.stop()}},t,this)}));return t}()}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(1)),i=n.n(o),a=n(8),c=n.n(a);if(c.a.el="#root",!("ontouchend"in document)){var u=document.createElement("script");u.src="https://soneway.github.io/js/desktouch.js",document.head.appendChild(u)}e.default=new i.a(c.a)},,function(t,e,n){"use strict";function r(t){return t.indexOf("?")<0?"?":"&"}function o(t){return"function"==typeof t}function i(t){t=Object.assign({},i.defaults,t);var e=t,n=e.url,a=e.data,s=t,f=s.success,l=s.error,h=s.callback;if(!n)return console.error("请求的url不能为空");var d="jsonpcb"+c();window[d]=function(e){o(f)&&f(e),o(h)&&h(t,e),window[d]=null},Object.assign(a||(a={}),{callback:d}),a&&(n+=r(n)+Object.keys(a).map(function(t){return t+"="+encodeURIComponent(a[t])}).join("&")),u(n,function(e){e&&(o(l)&&l(e),o(h)&&h(t),window[d]=null)})}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(){var t=0;return function(){return++t}}(),u=function(){var t=document.head,e=/(\.js)$/;return function(n,r){var i=e.test(n),a=document.createElement("script");a.type="text/javascript",a.onload=function(){o(r)&&r(),i||t.removeChild(a)},a.onerror=function(t){o(r)&&r(t)},a.src=n,t.appendChild(a)}}();i.defaults={};var s=function(){var t={},e=document.body,n=document.createElement("div");return window.addEventListener("message",function(e){var n=e.data;"object"===(void 0===n?"undefined":a(n))||(n=JSON.parse(n||null)||{});var r=t[n.id];o(r)&&r(n.rs)}),function(i){i=Object.assign({},s.defaults,i);var a=i,u=a.success,f=a.error,l=a.callback,h=a.formSelector,d=a.url,p=a.method,m=a.data,v=a.enctype,y="postifr"+c();n.innerHTML='<iframe name="'+y+'" style="display: none;"></iframe>';var g=n.childNodes[0];e.appendChild(g);var w=void 0;if(h){w=document.querySelector(h);var b=w,_=b.action;w.action=_+r(_)+"msgcb="+y}else{var x=d+r(d)+"msgcb="+y,T=m&&Object.keys(m).map(function(t){return'<input type="hidden" name="'+t+'" value="'+m[t]+'"/>'}).join("");n.innerHTML='<form style="display: none;" method="'+p+'" action="'+x+'">'+T+"</form>",w=n.childNodes[0]}w.target=y,v&&(w.enctype=v),t[y]=function(n){o(u)&&u(n),o(l)&&l(i,n),t[y]=null,e.removeChild(g),h||e.removeChild(w)},g.onload=function(){setTimeout(function(){t[y]&&(o(f)&&f(),o(l)&&l(i),t[y]=null,e.removeChild(g),h||e.removeChild(w))},100)},h||e.appendChild(w),w.submit()}}();s.defaults={method:"POST"},e.a={getScript:u,get:i,post:s}},function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new u.a(function(t,n){function r(o,i){try{var a=e[o](i),c=a.value}catch(t){return void n(t)}if(!a.done)return u.a.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}function o(t,e){return new u.a(function(n){a.a.get({url:l+t,data:e,success:function(t){n(t)},error:function(){n(null)}})})}function i(t){}var a=n(15),c=n(20),u=n.n(c),s=n(21),f=(n.n(s),function(){var t=r(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("/iflow/api/v1/channel/100?method=new");case 2:return e=t.sent,n=e.data.articles||{},t.abrupt("return",Object.keys(n).map(function(t){return(n[t].images[0]||{}).url}).filter(function(t){return!!t}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()),l="http://m.uczzd.cn";e.a={get:o,post:i,getImgs:f}},function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"\n.wrapper {\n  background: #000;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\n",""])},,,function(t,e,n){(function(e){!function(n){function r(){}function o(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?c:u)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void u(e.promise,t)}c(e.promise,r)})}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void s(t);if("function"==typeof n)return void l(o(n,e),t)}t._state=1,t._value=e,s(t)}catch(e){u(t,e)}}function u(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,c(e,t))},function(t){n||(n=!0,u(e,t))})}catch(t){if(n)return;n=!0,u(e,t)}}var h=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(r);return a(this,new f(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(t){r(i,t)},n)}e[i]=a,0==--o&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var o=e.length,i=0;i<e.length;i++)r(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){h(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(23).setImmediate)},function(t,e,n){(function(e,n){!function(e){"use strict";function r(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),c=new p(r||[]);return a._invoke=f(t,n,c),a}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function c(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(n,r,i,a){var c=o(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&w.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function r(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var i;this._invoke=r}function f(t,e,n){var r=L;return function(i,a){if(r===O)throw new Error("Generator is already running");if(r===I){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=l(c,n);if(u){if(u===P)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===L)throw r=I,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=O;var s=o(t,e,n);if("normal"===s.type){if(r=n.done?I:k,s.arg===P)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=I,n.method="throw",n.arg=s.arg)}}}function l(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,l(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var r=o(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,P;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,P):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function m(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(w.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,w=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},_=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",T=b.toStringTag||"@@toStringTag",j="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(j&&(t.exports=E));E=e.regeneratorRuntime=j?t.exports:{},E.wrap=r;var L="suspendedStart",k="suspendedYield",O="executing",I="completed",P={},F={};F[_]=function(){return this};var S=Object.getPrototypeOf,C=S&&S(S(m([])));C&&C!==g&&w.call(C,_)&&(F=C);var R=c.prototype=i.prototype=Object.create(F);a.prototype=R.constructor=c,c.constructor=a,c[T]=a.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,T in t||(t[T]="GeneratorFunction")),t.prototype=Object.create(R),t},E.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[x]=function(){return this},E.AsyncIterator=s,E.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(R),R[T]="Generator",R.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},E.values=m,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&w.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=w.call(o,"catchLoc"),c=w.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&w.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),P}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),P}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n(5),n(6))},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return s[u]=r,c(u),u++}function o(t){delete s[t]}function i(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function a(t){if(f)setTimeout(a,0,t);else{var e=s[t];if(e){f=!0;try{i(e)}finally{o(t),f=!1}}}}if(!t.setImmediate){var c,u=1,s={},f=!1,l=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?function(){c=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),c=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},c=function(e){t.port2.postMessage(e)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var t=l.documentElement;c=function(e){var n=l.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){c=function(t){setTimeout(a,0,t)}}(),h.setImmediate=r,h.clearImmediate=o}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(5),n(6))},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(22),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("pi-carousel",{ref:"carousel",attrs:{isShowPager:!0,isLoop:!0,autoPlayTimeout:4e3,height:"100%"}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(4)("0bf75c75",r,!1)}],[13]);