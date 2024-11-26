/*! For license information please see bundle.9493e47946e23743177a.js.LICENSE.txt */
(()=>{"use strict";var t,e={3627:(t,e,r)=>{r.d(e,{A:()=>N});var n=r(6540),o=r(6461),a=r(9437),i=r(9965),c=r.n(i);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function m(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=m;var p="suspendedStart",d="suspendedYield",y="executing",v="completed",g={};function x(){}function b(){}function w(){}var E={};f(E,i,(function(){return this}));var j=Object.getPrototypeOf,N=j&&j(j(T([])));N&&N!==r&&n.call(N,i)&&(E=N);var O=w.prototype=x.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?v:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(l(e)+" is not iterable")}return b.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(S.prototype),f(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(m(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(O),f(O,s,"Generator"),f(O,i,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const h=function(t){var e=t.title,r=t.producers,o=t.cover_file,i=t.description,l=t.tags,m=(0,n.useRef)(null),h=f((0,n.useState)(!1),2),p=h[0],d=h[1],y=f((0,n.useState)(0),2),v=y[0],g=y[1],x=f((0,n.useState)(0),2),b=x[0],w=x[1],E=function(){var t,e=(t=u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=m.current){t.next=4;break}return console.error("Audio element is not available."),t.abrupt("return");case 4:if(t.prev=4,!p){t.next=10;break}return t.next=8,e.pause();case 8:t.next=12;break;case 10:return t.next=12,e.play();case 12:d((function(t){return!t})),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),console.error("Error while toggling play/pause:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){var t=m.current,e=function(){console.error("Audio playback failed."),d(!1)},r=function(){if(t){var e=t.currentTime,r=t.duration;!isNaN(r)&&r>0&&(w(r),g(e/r*100))}};return t&&(t.addEventListener("error",e),t.addEventListener("timeupdate",r)),function(){t&&(t.removeEventListener("error",e),t.removeEventListener("timeupdate",r))}}),[]);var j=2*Math.PI*240;return React.createElement("article",{className:"flex overflow-hidden flex-col justify-between self-stretch p-12 mb-[144px] rounded-3xl bg-[#F2F0ED] min-h-[792px] h-[792px] min-w-[240px] w-[576px] max-md:px-5 max-md:max-w-full"},React.createElement("header",{className:"flex gap-10 justify-between items-center w-full text-center text-zinc-600 max-md:max-w-full"},React.createElement("div",{className:"gap-2 self-stretch my-auto text-2xl"},r.map((function(t){return React.createElement("div",{key:t.pk},React.createElement("p",null,t.first_name," ",t.last_name))}))),React.createElement("p",{className:"gap-2 self-stretch my-auto text-xl font-light"},l||"استراتژی، تجربه")),React.createElement("div",{className:"flex h-[480px] w-full flex-col items-center"},React.createElement("div",{className:"bg-t-bg-tile-line-cover z-0 flex h-[480px] w-[480px] flex-shrink-0 flex-col items-center justify-center bg-cover bg-center px-[7.5px] pb-[7.5px] pt-[8.5px]"},React.createElement("div",{className:"z-[2] flex h-[480px] w-[480px]  items-center justify-center relative"},React.createElement("div",{className:"absolute inset-0 flex items-center  justify-center"},React.createElement("svg",{viewBox:"0 0 500 500"},React.createElement("circle",{cx:"250",cy:"250",r:240,stroke:"#e0e0e0",strokeWidth:"8",fill:"transparent"}),React.createElement("circle",{cx:"250",cy:"250",r:240,stroke:"#FFB671",strokeWidth:"8",fill:"transparent",strokeDasharray:"".concat(j," ").concat(j),strokeDashoffset:j-v/100*j,style:{transition:"stroke-dashoffset 0.3s linear",transform:"(-90deg)",transformOrigin:"50% 50%"}}))),React.createElement(c(),{src:o||"Images/imagePodcast.png",alt:e,width:460,height:460,className:"object-cover rounded-full h-[460px] w-[460px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}),React.createElement("div",{className:"absolute bottom-24 -left-10 pt-2 translate-x-1/2 translate-y-1/2 items-center text-xl text-center bg-white w-[98px] h-[42px] rounded-[42px]"},b),React.createElement(a.T,{onClick:E,className:"absolute inset-44 items-center m-auto p-auto bg-black opacity-70 w-[80px] h-[80px] rounded-[80px] cursor-pointer"},p?React.createElement(c(),{src:"/Images/pause.png",width:80,height:80,alt:"pause"}):React.createElement(c(),{src:"/Images/play.png",width:80,height:80,alt:"play"}))))),React.createElement("div",{className:"flex flex-col justify-center mt-14 w-full max-md:mt-10 max-md:max-w-full"},React.createElement("div",{className:"flex gap-3 w-full max-md:max-w-full"},React.createElement("span",{className:"flex gap-2 justify-center items-start pt-4 w-3.5 h-full"},React.createElement("span",{className:"flex w-3.5 h-3.5 bg-red-500 rounded-full min-h-[14px]"})),React.createElement("h4",{className:"flex-1 shrink my-auto text-3xl font-medium text-right basis-0 text-stone-900 max-md:max-w-full"},e)),React.createElement("p",{className:"flex-1 shrink gap-2 self-stretch mt-3 w-full text-l font-light text-right text-zinc-600 max-md:max-w-full"},i)),React.createElement("audio",{ref:m,src:"/audio/testAudio.mp3"}))};var p=r(7181),d=r(9695);const y=function(){return n.createElement("nav",{className:"flex flex-wrap gap-10 justify-between items-center px-2 mt-10 w-full min-h-[48px] max-md:max-w-full"},n.createElement("div",{className:"flex gap-2 justify-center items-center self-stretch my-auto"},n.createElement("button",{className:"flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 rounded-2xl bg-stone-100","aria-label":"Next slide"},n.createElement(p.f,{className:"object-contain self-stretch my-auto w-8 aspect-square"})),n.createElement("button",{className:"flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 rounded-2xl bg-stone-100","aria-label":"Previous slide"},n.createElement(d.A,{className:"object-contain self-stretch my-auto w-8 aspect-square"}))),n.createElement("div",{className:"flex gap-2 justify-center items-center self-stretch my-auto",role:"tablist"},[1,2,3,4,5].map((function(t,e){return n.createElement("button",{key:e,role:"tab","aria-selected":4===e,className:"flex shrink-0 self-stretch my-auto rounded-2xl ".concat(4===e?"w-6 h-2 bg-stone-500":"w-2 h-2 bg-stone-400"),"aria-label":"Slide ".concat(e+1)})}))))};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var m="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function x(){}function b(){}function w(){}var E={};u(E,i,(function(){return this}));var j=Object.getPrototypeOf,N=j&&j(j(T([])));N&&N!==r&&n.call(N,i)&&(E=N);var O=w.prototype=x.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==v(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=m;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?d:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(v(e)+" is not iterable")}return b.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(O),u(O,l,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function x(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var E="http://171.22.25.164/api/",j=("".concat(E,"login/"),"".concat(E,"podcasts/v1/"));const N=function(){var t=b((0,n.useState)([]),2),e=t[0],r=t[1],a=b((0,n.useState)(!0),2),i=a[0],c=a[1],l=b((0,n.useState)(null),2),u=l[0],s=l[1],f=b((0,n.useState)(0),2),m=f[0],p=f[1];return(0,n.useEffect)((function(){var t=function(){var t,e=(t=g().mark((function t(){var e,n,a;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,o.A.get(j);case 4:if(n=t.sent,console.log("p",n.data.results),!n.data.error){t.next=8;break}throw new Error(n.data.error);case 8:r((null===(e=n.data)||void 0===e?void 0:e.results)||[]),s(null),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Error fetching podcasts:",t.t0),s((null===(a=t.t0.response)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.details)||t.t0.message),m<3&&setTimeout((function(){p((function(t){return t+1}))}),2e3);case 17:return t.prev=17,c(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,12,17,20]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[m]),i?n.createElement("div",{className:"flex justify-center items-center h-screen"},n.createElement("div",{className:"text-lg"},"Loading podcasts...")):u?n.createElement("div",{className:"flex flex-col justify-center items-center h-screen"},n.createElement("div",{className:"text-red-500 mb-4"},"Error: ",u),m<3&&n.createElement("div",{className:"text-gray-500"},"Retrying... (",m+1,"/3)")):n.createElement("main",{className:"flex flex-col items-center px-20 w-full mt-4 max-md:px-5"},n.createElement("section",{className:"flex flex-col mx-auto  max-w-full w-full max-md:mt-10"},n.createElement("header",{className:"flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full"},n.createElement("h1",{className:"text-5xl font-medium text-right leading-[70px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[65px]"},"پادکست‌های آموزشی ",n.createElement("br",null)," برای رشد و موفقیت در کسب‌وکار"),n.createElement("h2",{className:"text-3xl font-light text-zinc-600 max-md:max-w-full"},"بهترین توصیه‌ها از برترین متخصصان ",n.createElement("br",null)," برای توسعه و پیشرفت حرفه‌ای شما")),n.createElement("div",{className:"flex mt-20"},(null==e?void 0:e.length)>0?e.map((function(t){return n.createElement(h,{key:t.id,title:t.title,cover_file:null==t?void 0:t.cover_file,duration:t.duration,producers:t.producers})})):n.createElement("div",null,"No podcasts available")),n.createElement(y,null)))}},2467:(t,e,r)=>{r.d(e,{A:()=>h});var n=r(6540),o=r(4879),a=r(9817);const i=function(t){var e=t.review,r=t.style;return n.createElement("div",{style:r,className:"w-[576px] h-60 p-8 bg-[#F0F2F0] gap-7 rounded-3xl shadow-lg flex"},n.createElement("div",{className:"flex relative gap-4 justify-center items-start w-[88px]"},n.createElement(o.w,{content:"".concat(e.rating,"/5"),placement:"bottom-right",color:"danger",className:"text-lime-400 bg-[#325444] justify-center items-center"},n.createElement(a.Q,{className:"rounded-2xl",isBordered:!0,radius:"lg",src:e.image,size:"lg"}))),n.createElement("div",{className:"flex flex-col flex-1 mr-0 justify-start basis-0 min-w-[240px]"},n.createElement("header",{className:"flex flex-col justify-end"},n.createElement("h2",{className:"gap-2 self-stretch text-2xl font-medium min-h-[31px] text-zinc-900 "},e.name),n.createElement("p",{className:"gap-2 self-stretch mt-1.5 text-base font-light text-gray-700"},e.role)),n.createElement("p",{className:"flex-1 shrink gap-2 self-stretch pl-2 mt-4 w-full text-xl font-light text-right text-gray-700"},e.comment)))};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t){if("object"!=c(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=[{name:"نرگس افضلی",role:"طراحی محصول برای استارتاپ‌ها",comment:"دوره طراحی محصول برای استارتاپ‌ها بسیار کاربردی بود. بعد از این دوره توانستم محصول خود را به شکل بهتری مدیریت و به بازار عرضه کنم.",image:"https://via.placeholder.com/88x88",rating:"5"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"},{name:"حمید فرزانه",role:"برنامه‌نویسی از صفر تا حرفه‌ای",comment:"از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.",image:"https://via.placeholder.com/88x88",rating:"4"}],m=[{top:"37px",left:"auto",right:"20px"},{top:"90px",left:"auto",right:"912px"},{top:"372px",left:"auto",right:"48px"},{top:"436px",left:"auto",right:"760px"},{top:"90px",left:"auto",right:"-810px"},{top:"436px",left:"auto",right:"-760px"}];const h=function(){return n.createElement("main",{className:"flex flex-col items-center w-full  mt-28 max-md:px-5 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('/images/Pattern.png')"}},n.createElement("div",{className:"flex relative flex-col pt-16 max-w-full w-[1310px] h-full"},n.createElement("header",{className:"flex z-0 flex-col justify-center mt-0.5 w-full text-center max-md:max-w-full"},n.createElement("h2",{className:"text-4xl font-medium text-[#325444] max-md:max-w-full"},"نظرات هنرجویان ما!"),n.createElement("p",{className:"mt-4 text-2xl font-light text-[#3E4552] max-md:max-w-full"},"نظرات برخی از هنرجویان موفق ما که با دوره‌های مدرسه مسیر به اهداف خود رسیده‌اند."))),n.createElement("div",{className:"marquee overflow-hidden user-select-none"},n.createElement("div",{className:"Comments marquee__group animate-scroll-x h-[792px] mt-4"},f.map((function(t,e){var r=m[e%m.length];return n.createElement(i,{key:e,review:t,style:u(u({position:"absolute"},r),{},{overflow:"hidden",whiteSpace:"normal"})})})))))}},6954:(t,e,r)=>{var n=r(6540),o=r(5338),a=r(727);o.createRoot(document.getElementById("root")).render(n.createElement(a.A,null))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,o,a]=t[s],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={611:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,l]=r,u=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self.webpackChunkmasir=self.webpackChunkmasir||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[461,690,424,196,61,254,476,731,899,402,159,928,597,765,170,511,379,377,305,835,70,641,551,351,859,711,518,234,650,956,56],(()=>n(6954)));o=n.O(o)})();