require=function t(e,n,o){function a(r,s){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var u=n[r]={exports:{}};e[r][0].call(u.exports,function(t){var n=e[r][1][t];return a(n?n:t)},u,u.exports,t,e,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(t,e,n){var o=t("jq");t("base"),t("ui"),t("customalert"),t("scroll"),alert=function(t){o.customalert({content:t})};var a={carousel:t("./page/carousel.js"),flip:t("./page/flip.js"),picpager:t("./page/picpager.js"),scroll:t("./page/scroll.js"),scratchcard:t("./page/scratchcard.js"),turntable:t("./page/turntable.js"),swatchbook:t("./page/swatchbook.js")};o.panelLoaded=function(t,e){var n=a[t.attr("id")];"function"==typeof n&&n(t,e)},o.panelUnloaded=function(t){var e=(a[t.attr("id")]||{}).unload;"function"==typeof e&&e(t)}},{"./page/carousel.js":2,"./page/flip.js":3,"./page/picpager.js":4,"./page/scratchcard.js":5,"./page/scroll.js":6,"./page/swatchbook.js":7,"./page/turntable.js":8,base:19,customalert:12,jq:"U94cel",scroll:16,ui:20}],2:[function(t,e,n){t("carousel"),e.exports=function(t,e){if(e){$(".carousel").each(function(){for(var t=this.getAttribute("data-len"),e=this.getAttribute("data-part"),n="",o=0;t>o;o++)n+='<a style="background: url(img/'+(e?e+"/":"")+o+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(o+1)+'"></a>';$(this).html(n).carousel({isVertical:"1"===this.getAttribute("data-isvertical"),isAutoPlay:!1})});for(var n="",o=0,a=5;a>o;o++)n+='<img src="img/'+o+'.jpg"/>';$("#img_car").html(n).carousel()}},e.exports.unload=function(){console.log("carousel unload")}},{carousel:11}],3:[function(t,e,n){t("flip"),e.exports=function(t,e){e&&$(".flip").each(function(){for(var t=this.getAttribute("data-len"),e=this.getAttribute("data-part"),n="",o=0;t>o;o++)n+='<a><p style="background: url(img/'+(e?e+"/":"")+o+'.jpg) center center no-repeat; background-size: cover;" data-title="3d旋转切换示例 '+(o+1)+'"></p></a>';$(this).html(n).flip({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{flip:13}],4:[function(t,e,n){t("picpager"),e.exports=function(t,e){e&&$.jsonp("http://img.gd.sohu.com/static/v1/jtool.js",function(){var t=1,e=10,n=jtool.proxy;n.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+e+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(o){var a=$(".picpager").picpager({imgData:o.data.detail,imgAttrName:"image",slideCallback:function(o){o+1===10*t&&(t++,n.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+e+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(t){a[0].addItem(t.data.detail)}}))}})}})})}},{picpager:14}],5:[function(t,e,n){t("scratchcard"),e.exports=function(t,e){e&&$(".scratchcard").each(function(){$(this).scratchcard({text:"刮开有奖",imgSrc:"img/3.jpg"})})}},{scratchcard:15}],6:[function(t,e,n){t("scroll"),e.exports=function(t,e){e&&$(".scroll").each(function(){$(this).scroll({isVertical:"1"===this.getAttribute("data-isvertical")})})}},{scroll:16}],7:[function(t,e,n){t("swatchbook"),e.exports=function(t,e){e&&$(".swatchbook").each(function(){$(this).swatchbook({angleInc:25,neighbor:15,proximity:80,initIsClosed:!0,closeIdx:12,selectCallback:function(t){console.log(t)}})})}},{swatchbook:17}],8:[function(t,e,n){t("turntable");var o=$(window.document);e.exports=function(t,e){if(e){var n=$(".turntable").turntable({count:10})[0];o.on("click",".turntable .btn_start",function(){var t=parseInt(10*Math.random());n.turnToIndex(t,function(){alert(t+1)})})}}},{turntable:18}],U94cel:[function(t,e,n){(function(t){(function(t,e,n,o){!function(o){var a=function(){function t(t){if(this.length=0,!t)return this;if("string"==typeof t){if("#"===t[0]){var n=t.slice(1);if(v.test(n)){var a=u.getElementById(n);return a&&(this[this.length++]=a),this}}if("."===t[0]){var i=t.slice(1);if(v.test(i))return e(u.getElementsByClassName(i),this)}if("<"===t[0]&&">"===t[t.length-1]){var r=u.createElement("div");return r.innerHTML=t,e(r.childNodes,this)}return e(u.querySelectorAll(t),this)}return t instanceof Node||t===o?(this[this.length++]=t,this):t instanceof NodeList||c.isArray(t)?e(t,this):"function"==typeof t?c().ready(t):void 0}function e(t,e){return t?(n(t,function(t){e[e.length++]=t}),e):e}function n(t,e){for(var n=0,o=t.length;o>n;n++)e(t[n])}function a(t,e){if(void 0===e)return c(t);var o=[];return n(t,function(t){b(t,e)&&o.push(t)}),c(o)}function i(t,e,o,a){n(e.split(g),function(e){void 0===a?t.addEventListener(e,o,!1):t.addEventListener(e,function(e){var n=c(e.target).closest(a,t)[0];n&&o.call(n,e)},!1)})}function r(t,e,o){n(e.split(g),function(e){t.removeEventListener(e,o,!1)})}function s(t,e){var n=u.createEvent("Events");if(n.initEvent(t,!0,!0),e)for(var o in e)void 0===n[o]&&(n[o]=e[o]);return n}var c=function(e){return new t(e)},u=o.document,l={}.toString,f=[],d=f.slice,h=f.indexOf,p="-webkit-",v=/^[\w-]*$/,g=/\s+/g,m=function(){var t={};return function(e){return t[e]||(t[e]=new RegExp("(^|\\s)"+e+"(\\s|$)"))}}(),b=function(){var t=u.body;return t.matchesSelector?function(t,e){return t.matchesSelector(e)}:t.webkitMatchesSelector?function(t,e){return t.webkitMatchesSelector(e)}:t.msMatchesSelector?function(t,e){return t.msMatchesSelector(e)}:t.mozMatchesSelector?function(t,e){return t.mozMatchesSelector(e)}:void 0}();return n(["Object","Array","Function"],function(t){c["is"+t]=function(e){return l.call(e)==="[object "+t+"]"}}),c.extend=function(t){if(void 0===t)return this;if(1===arguments.length){for(var e in t)this[e]=t[e];return this}return n(d.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},c.fn=t.prototype={constructor:t,forEach:function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this},each:function(t){return this.forEach(function(e,n){t.call(e,n)})},ready:function(t){var e=u.readyState;return"complete"===e||"loaded"===e||"interactive"===e?t():u.addEventListener("DOMContentLoaded",t,!1),this},filter:function(t){return a(this,t)},siblings:function(t){var e=[];return this.forEach(function(t){var o=t.parentNode;o&&n(o.children,function(n){n!==t&&-1===e.indexOf(n)&&e.push(n)})}),a(e,t)},not:function(t){var e=[];return this.forEach(function(n){!b(n,t)&&e.push(n)}),c(e)},find:function(t){var e=[];return this.forEach(function(o){n(o.querySelectorAll(t),function(t){-1===e.indexOf(t)&&e.push(t)})}),c(e)},eq:function(t){return c(this[t])},children:function(t){var e=[];return this.forEach(function(t){n(t.children,function(t){e.push(t)})}),a(e,t)},parent:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&n!==u&&-1===e.indexOf(n)&&e.push(n)}),a(e,t)},parents:function(t){var e=[];return this.forEach(function(t){for(var n=t.parentNode;n;)n!==u&&-1===e.indexOf(n)&&e.push(n),n=n.parentNode}),a(e,t)},closest:function(t,e){for(var n=this[0];n&&!b(n,t);){var o=n.parentNode;n=o===u?null:n!==e&&o}return c(n)},index:function(e){return e instanceof t&&(e=e[0]),e?h.call(this,e):h.call(this[0].parentNode.children,this[0])},html:function(t){return void 0===t?this[0].innerHTML:this.forEach(function(e){e.innerHTML=t})},text:function(t){return void 0===t?this[0].textContent:this.forEach(function(e){e.textContent=t})},empty:function(){return this.html("")},val:function(t){return void 0===t?this[0].value:this.forEach(function(e){e.value=t})},attr:function(t,e){return"string"==typeof t&&void 0===e?this[0].getAttribute(t):this.forEach(function(n){if(c.isObject(t))for(var o in t)n.setAttribute(o,t[o]);else n.setAttribute(t,e)})},removeAttr:function(t){return this.forEach(function(e){n(t.split(g),function(t){e.removeAttribute(t)})})},css:function(t,e){if("string"==typeof t&&void 0===e){var n=o.getComputedStyle(this[0]);return n[t]||n[p+t]}return this.forEach(function(n){var o=n.style;if(c.isObject(t))for(var a in t)o[a]=o[p+a]=t[a];else o[t]=o[p+t]=e})},show:function(){return this.forEach(function(t){var e=t.getAttribute("data-display")||"block";"none"===e&&(e="block"),t.style.display=e,t.removeAttribute("data-display")})},hide:function(){return this.forEach(function(t){t.setAttribute("data-display",c(t).css("display")),t.style.display="none"})},fadeIn:function(){return this.forEach(function(t){c(t).removeClass("fade-out").addClass("fade-in")})},fadeOut:function(){return this.forEach(function(t){c(t).removeClass("fade-in").addClass("fade-out")})},append:function(e,n){var o=e instanceof t?e:c(e);return this.forEach(function(t){o.forEach(function(e){n?t.insertBefore(e,t.firstChild):t.appendChild(e)})})},prepend:function(t){return this.append(t,!0)},appendTo:function(e){var n=e instanceof t?e:c(e);return n.append(this),this},prependTo:function(e){var n=e instanceof t?e:c(e);return n.append(this,!0),this},offset:function(){return this[0].getBoundingClientRect()},width:function(){var t=this[0];return t===o?o.innerWidth:t.offsetWidth},height:function(){var t=this[0];return t===o?o.innerHeight:t.offsetHeight},is:function(t){return t&&b(this[0],t)},addClass:function(t){return this.forEach(function(e){var o=e.className,a=[];n(t.split(g),function(t){!c(e).hasClass(t)&&a.push(t)}),a.length>0&&(e.className+=(o?" ":"")+a.join(" "))})},removeClass:function(t){return this.forEach(function(e){if(void 0===t)return void(e.className="");var o=e.className;n(t.split(g),function(t){o=o.replace(m(t)," ")}),e.className=o.trim()})},hasClass:function(t){return m(t).test(this[0].className)}},c.fn.extend=function(t){c.extend.call(this,t)},c.fn.extend({bind:function(t,e){return this.forEach(function(n){i(n,t,e)})},unbind:function(t,e){return this.forEach(function(n){r(n,t,e)})},delegate:function(t,e,n){return this.forEach(function(o){i(o,t,n,e)})},on:function(t,e,n){return"function"==typeof e?this.bind(t,e):this.delegate(t,e,n)},off:function(t,e){return this.unbind(t,e)},trigger:function(t,e){return t=s(t,e),this.forEach(function(e){e.dispatchEvent(t)})}}),n(["click","touchstart","touchmove","touchend","submit","load","resize","change","select"],function(t){c.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),c.jsonp=function(){var t=u.getElementsByTagName("head")[0];return function(e,n){var o=/(\.js)$/.test(e),a=u.createElement("script");a.type="text/javascript",a.onload=function(){"function"==typeof n&&n(),!o&&t.removeChild(a)},a.src=e,t.appendChild(a)}}(),c.ajax=function(){function t(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}var e={method:"get",async:!0};return function(n){n=c.extend({},e,n);var o=new XMLHttpRequest;o.open(n.method,n.url,n.async);var a=n.header;if(a)for(var i in a)o.setRequestHeader(i,a[i]);o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var t=n.callback;"function"==typeof t&&t(o.responseText)}},o.send(t(n.data))}}(),c}();return"object"==typeof e?void(t.exports=a):"function"==typeof n?void n(function(){return a}):void(o.jq=o.$=a)}(window),o("undefined"!=typeof $?$:window.$)}).call(t,void 0,void 0,void 0,function(t){e.exports=t})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],jq:[function(t,e,n){e.exports=t("U94cel")},{}],11:[function(t,e,n){!function(t,e){e.fn.carousel=function(n){return e.fn.carousel.defaults={isVertical:!1,swipThreshold:50,isAutoPlay:!0,autoPlayInter:8e3,slideCallback:null,isShowTitle:!0,isShowPager:!0,initIndex:0},this.each(function(){function o(){x.addClass("pi-carousel").html('<div class="pi-carousel-wrap">'+x.html()+"</div>"+(m?'<div class="pi-carousel-title"></div>':"")),i=x.find(".pi-carousel-wrap"),r=i[0].style,s=i.children("*"),c=s.length,d&&x.addClass("vertical"),u=x.find(".pi-carousel-title");var t="";if(b){t+='<div class="pi-carousel-pager">';for(var e=0,n=c;n>e;e++)t+="<span></span>";t+="</div>"}l=x.append(t).find(".pi-carousel-pager span"),a()}function a(){function n(){f=x.width(),m=x.height(),d?(r.height=m*c+"px",s.css("height",m+"px")):(r.width=f*c+"px",s.css("width",f+"px"))}function o(){p&&(b=setInterval(function(){++S===c&&(S=0),a()},v))}function a(t){var e,n=-S*(d?m:f);if("number"==typeof t)0===S&&t>0&&(t/=2),S===c-1&&0>t&&(t/=2),n+=t;else{"function"==typeof g&&g.call(s[S],S);var o=s.removeClass("current").eq(S).addClass("current").attr("data-title");u.removeClass("visible"),o&&setTimeout(function(){u.addClass("visible").html(o)},200),l.removeClass("selected").eq(S).addClass("selected")}e="translate3d("+(d?"0,"+n+"px,0":n+"px,0,0")+")",i.css({transform:e})}var f,m,b,y,k,T,S=C;n(),w.slideToIndex=function(t){S=t,a()},w.prev=function(){--S<0&&(S=c-1),a()},w.next=function(){++S===c&&(S=0),a()},x.on("touchstart",function(t){var e=t.targetTouches[0];y=e.pageX,k=e.pageY,T=0,i.removeClass("transform"),p&&clearInterval(b)}),x.on("touchmove",function(t){var e=t.targetTouches[0],n=e.pageX-y,o=e.pageY-k;d?Math.abs(o)>Math.abs(n)&&(t.preventDefault(),t.stopPropagation(),a(T=o)):Math.abs(n)>Math.abs(o)&&(t.preventDefault(),t.stopPropagation(),a(T=n))}),x.on("touchend",function(){T>h&&--S<0&&(S=0),-h>T&&++S===c&&(S=c-1),i.addClass("transform"),0!==T&&a(),o()}).trigger("touchend"),l.on("click",function(){var t=e(this).index();w.slideToIndex(t)}),t.addEventListener("resize",function(){var t=x.width();t>0&&(n(),a(0))},!1)}var i,r,s,c,u,l,f=e.extend({},e.fn.carousel.defaults,n),d=f.isVertical,h=f.swipThreshold,p=f.isAutoPlay,v=f.autoPlayInter,g=f.slideCallback,m=f.isShowTitle,b=f.isShowPager,C=f.initIndex,x=e(this),w=this;o()})}}(window,$)},{}],12:[function(t,e,n){!function(t,e){var n,o,a,i,r,s,c,u,l=t.document,f=e(l),d=e(l.body),h=e("#customalert");!function(){0===h.length&&(h=e('<div id="customalert"><div class="box"><h1 id="customalert-title">提示</h1><p id="customalert-content">是否转到登陆</p><a id="customalert-btnok" class="btn">确定</a><a id="customalert-btncancel" class="btn">关闭</a></div></div>'),d.append(h)),n=e("#customalert-title"),o=e("#customalert-content"),a=e("#customalert-btnok"),i=e("#customalert-btncancel")}(),f.on("click","#customalert-btnok",function(){d.removeClass("oncustomalert"),"function"==typeof u&&u(),"function"==typeof r&&r()}),f.on("click","#customalert-btncancel",function(){d.removeClass("oncustomalert"),"function"==typeof u&&u(),"function"==typeof s&&s()}),e.customalert=function(t){t=t||{};var l=e.extend({},e.customalert.defaults,t),f=l.title,p=l.content,v=l.btnOkText,g=l.btnCancelText,m=l.isAlert;r=l.btnOkClick,s=l.btnCancelClick,c=l.onShow,u=l.onHide,m?h.addClass("alert"):h.removeClass("alert"),f&&n.html(f),p&&o.html(p),v&&a.text(v),g&&i.text(g),d.addClass("oncustomalert"),"function"==typeof c&&c()},e.customalert.defaults={title:"提示",content:"内容",btnOkText:"确定",btnOkClick:null,btnCancelText:"取消",btnCancelClick:null,isAlert:!0,onShow:null,onHide:null}}(window,$)},{}],13:[function(t,e,n){!function(t,e){e.fn.flip=function(t){return e.fn.flip.defaults={isVertical:!1,swipThreshold:40,rate:1.3,slideCallback:null},this.each(function(){function n(){u.addClass("pi-flip"),l.eq(0).addClass("visible"),"function"==typeof c&&c(0),o()}function o(){function t(t){t.style.cssText=""}function n(n){var o;"number"==typeof n?l.each(function(t){var a=e(this);t===p?(o=i?"rotate3d(1,0,0,"+-n+"deg)":"rotate3d(0,1,0,"+n+"deg)",a.css({transform:o})):(o=i?"rotate3d(1,0,0,"+(180-n)+"deg)":"rotate3d(0,1,0,"+-(180-n)+"deg)",a.css({transform:o}))}):(d=!0,e.isFunction(c)&&c(p),l.each(function(t){var a=e(this);t===p?(o=i?"rotate3d(1,0,0,"+-(n?0:-360)+"deg)":"rotate3d(0,1,0,"+(n?0:-360)+"deg)",a.addClass("visible").css({transform:o})):(o=i?"rotate3d(1,0,0,"+-(n?180:-180)+"deg)":"rotate3d(0,1,0,"+(n?180:-180)+"deg)",a.removeClass("visible").css({transform:o}))}),setTimeout(function(){l.addClass("notrans").each(function(){t(this)}),d=!1},v))}var o,a,f,d,h=l.length,p=0,v=1e3*parseFloat(l.css("transition-duration"));u.on("touchstart",function(t){var e=t.targetTouches[0];o=e.pageX,a=e.pageY,f=0,l.addClass("notrans")}),u.on("touchmove",function(t){var e=t.targetTouches[0],r=e.pageX-o,c=e.pageY-a;i&&Math.abs(r)<Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=c/s)),!i&&Math.abs(r)>Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=r/s))}),u.on("touchend",function(e){d||(Math.abs(f)>r?(f>0&&-1===--p&&(p=h-1),0>f&&++p===h&&(p=0),l.removeClass("notrans"),n(f>0)):0!==f&&(l.eq(p).removeClass("notrans"),t(l[p])))})}var a=e.extend({},e.fn.flip.defaults,t),i=a.isVertical,r=a.swipThreshold,s=a.rate,c=a.slideCallback,u=e(this),l=u.children("*");n()})}}(window,$)},{}],14:[function(t,e,n){!function(t,e){e.fn.picpager=function(n){return e.fn.picpager.defaults={imgData:null,imgAttrName:null,swipThreshold:40,slideCallback:null},this.each(function(){function o(){d.addClass("pi-picpager").html('<div class="pi-picpager-wrap"><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div></div>'),r=d.find(".pi-picpager-wrap"),i=d.find(".pi-picpager-pic"),a()}function a(){function n(t){switch(r.removeClass("notrans"),t){case 1:case-1:m=!0;var n="translate3d("+(1===t?"":"-")+b+"px,0,0)";o(r,n),setTimeout(function(){o(r.addClass("notrans"),"translate3d(0,0,0)"),i.each(function(t){a(e(this),C+t-1)}),m=!1},x+100);break;default:o(r,"translate3d(0,0,0)")}"function"==typeof f&&f(C,t)}function o(t,e){t.css({transform:e})}function a(t,e){var n=c[e];t.css({"background-image":n?"url("+(u?n[u]:n)+")":"none"})}var s,v,g,m,b=d.width(),C=0,x=1e3*parseFloat(r.css("transition-duration"));i.each(function(t){a(e(this),t-1)}),h.slideToIndex=function(t){var e;"number"!=typeof t||0>t||t>=p||t===C||(t>C?(e=-1,a(i.eq(2),t)):(e=1,a(i.eq(0),t)),C=t,n(e))},h.addItem=function(t){e.isArray(t)?c=c.concat(t):c.push(t),p=c.length},d.on("touchstart",function(t){var e=t.targetTouches[0];s=e.pageX,v=e.pageY,g=0,r.addClass("notrans")}),d.on("touchmove",function(t){if(m)t.preventDefault(),t.stopPropagation();else{var e=t.targetTouches[0],n=e.pageX-s,a=e.pageY-v;if(Math.abs(n)>Math.abs(a)){t.preventDefault(),t.stopPropagation(),0===C&&n>0&&(n/=2),C===p-1&&0>n&&(n/=2);var i="translate3d("+(g=n)+"px,0,0)";o(r,i)}}}),d.on("touchend",function(){if(!m){var t;g>l&&(--C<0?C=0:t=1),-l>g&&(++C===p?C=p-1:t=-1),0!==g&&n(t)}}).trigger("touchend"),t.addEventListener("resize",function(){var t=d.width();t>0&&(b=t)},!1)}var i,r,s=e.extend({},e.fn.picpager.defaults,n),c=s.imgData,u=s.imgAttrName,l=s.swipThreshold,f=s.slideCallback,d=e(this),h=this,p=c.length;o()})}}(window,$)},{}],15:[function(t,e,n){!function(t,e){e.fn.scratchcard=function(t){return e.fn.scratchcard.deflunt={fineness:15,paintStyle:"#ccc",text:"",fontColor:"#f00",font:"bold 60px sans-serif",imgSrc:"",scale:2},this.each(function(){function n(){var t='<canvas style="width: 100%; height: 100%;" width="'+C+'" height="'+x+'"></canvas>';b.css({position:"relative","background-image":"url("+g+")","background-size":"100% auto"}).html(t),r=b.find("canvas"),r.css({position:"absolute",top:0,left:0}),u=b.children("canvas")[0].getContext("2d"),o(),a()}function o(){if(u.fillStyle=d,u.fillRect(0,0,C,x),h){u.fillStyle=p,v&&(u.font=v);var t=u.measureText(h).width;u.fillText(h,l.left||(C-t)/2,l.top||x/2+20,C)}}function a(){r.on("touchstart",function(t){var e=b.offset();s=e.left,c=e.top,u.fillStyle="#fff",u.globalCompositeOperation="destination-out",u.beginPath(),i(t)}),r.on("touchmove",function(t){t.preventDefault(),t.stopPropagation(),i(t)}),r.on("touchend",function(t){u.globalCompositeOperation="source-over"})}function i(t){var e=t.targetTouches[0];u.arc((e.pageX-s)*m,(e.pageY-c)*m,f*m,0,2*Math.PI,!0),u.closePath(),u.fill()}var r,s,c,u,l=e.extend({},e.fn.scratchcard.deflunt,t),f=l.fineness,d=l.paintStyle,h=l.text,p=l.fontColor,v=l.font,g=l.imgSrc,m=l.scale,b=e(this),C=b.width()*m,x=b.height()*m;n()})}}(window,$)},{}],16:[function(t,e,n){!function(t,e){e.fn.scroll=function(n){return e.fn.scroll.defaults={isVertical:!1,rate:400,timeSpanThreshold:300,maxScroll:400,androidRate:2,isAdjust:!1},this.each(function(){function o(){h.addClass("pi-scroll-item"),a()}function a(){function e(){var t=r?h.height()+parseFloat(h.css("margin-top"))+parseFloat(h.css("margin-bottom")):h.width()+parseFloat(h.css("margin-left"))+parseFloat(h.css("margin-right")),e=r?d.height()-parseFloat(d.css("padding-top"))-parseFloat(d.css("padding-bottom")):d.width()-parseFloat(d.css("padding-left"))-parseFloat(d.css("padding-right"));C=t-e}function n(t){t>0&&(t/=2),-t>C&&(t+=(-t-C)/2);var e="translate3d("+(r?"0,"+(x=t)+"px,0":(x=t)+"px,0,0")+")";h.css({transform:e})}function o(t){var e=r?t.offsetTop-h[0].offsetTop-(d.height()-t.clientHeight)/2:t.offsetLeft-h[0].offsetLeft-(d.width()-t.clientWidth)/2;n(0>e?0:C>e?-e:-C)}var a,i,v,g,m,b,C,x=0;e(),d[0].center=o,d.on("touchstart",function(t){var e=t.targetTouches[0];v=t.timeStamp,a=e.pageX,i=e.pageY,m=0,b=x,h.addClass("notrans")}),d.on("touchmove",function(t){var e=t.targetTouches[0],o=e.pageX-a,s=e.pageY-i;r&&Math.abs(o)<Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=s))),!r&&Math.abs(o)>Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=o)))}),d.on("touchend",function(t){g=t.timeStamp;var e=g-v,o=e>c?0:m/(p?e/=l:e),a=Math.abs(o)*s;a>u&&(a=u),h.removeClass("notrans"),0>m?n(C>-(x-a)?x-a:-C):m>0&&n(0>x+a?x+a:0)}),f&&d.on("click",function(t){o(t.target)}),t.addEventListener("resize",function(){var t=d.width();t>0&&e()},!1)}var i=e.extend({},e.fn.scroll.defaults,n),r=i.isVertical,s=i.rate,c=i.timeSpanThreshold,u=i.maxScroll,l=i.androidRate,f=i.isAdjust,d=e(this),h=d.children("*"),p=/(android)/i.test(t.navigator.userAgent);o()})}}(window,$)},{}],17:[function(t,e,n){!function(t,e){e.fn.swatchbook=function(t){return e.fn.swatchbook.defaults={centerIdx:6,angleInc:8,proximity:45,neighbor:4,initIsClosed:!1,closeIdx:-1,openAt:-1,selectCallback:null,openDelay:25},this.each(function(){function n(){e.isAndroid2&&C.css({"backface-visibility":"visible"}),p?c=!0:o(l),g>=0&&w>g&&a(x.eq(g)),s()}function o(t){x.each(function(n){var o=e(this),a="rotateZ("+f*(n-t)+"deg)";setTimeout(function(){o.css({transform:a})},n*b)})}function a(t){var e=t.index();e!==y?(x.removeClass("selected"),-1!==v&&e===v?(y=-1,i()):(y=e,t.css({transform:"rotateZ(0deg)"}).addClass("selected"),r(t,e))):e===y&&"function"==typeof m&&m(e)}function i(){c?o(l):x.css({transform:"rotateZ(0deg)"}),c=!c}function r(t,n){var o,a=k[n];a?o=a:(o=t.siblings(),k[n]=o),o.each(function(t){var o=n>t?f*(t-n):t-n===1?d:d+(t-n-1)*h,a="rotateZ("+o+"deg)";e(this).css({transform:a})})}function s(){x.on("click",function(){a(e(this))})}var c,u=e.extend({},e.fn.swatchbook.defaults,t),l=u.centerIdx,f=u.angleInc,d=u.proximity,h=u.neighbor,p=u.initIsClosed,v=u.closeIdx,g=u.openAt,m=u.selectCallback,b=u.openDelay,C=e(this),x=C.addClass("sb-container").children("*"),w=x.length,y=-1,k=[];n()})}}(window,$)},{}],18:[function(t,e,n){!function(t,e){e.fn.turntable=function(t){return e.fn.turntable.defaults={count:12,rotateDeg:3600,duration:7e3,timeFx:"cubic-bezier(0.42,0,0.25,1)",offset:0},this.each(function(){function n(){a=e('<div class="pi-turntable-pointer"></div>'),f.addClass("pi-turntable").prepend(a),o()}function o(){var t,e;d.turnToIndex=function(n,o){if(!(n>r||e)){var i=c/1e3+"s "+u,f=s+n/r*360+l+"deg",d="rotateZ("+f+")";a[0].style.cssText="",e=!0,setTimeout(function(){a.css({transform:d});var n=a[0];n.style["-webkit-transition"]="-webkit-transform "+i,n.style.transition="transform "+i,clearTimeout(t),t=setTimeout(function(){"function"==typeof o&&o(),e=!1},c)},40)}}}var a,i=e.extend({},e.fn.turntable.defaults,t),r=i.count,s=i.rotateDeg,c=i.duration,u=i.timeFx,l=i.offset,f=e(this),d=this;n()})}}(window,$)},{}],19:[function(t,e,n){!function(t,e){var n=t.document,o=e(n),a=e(n.body);a.addClass("very-high"),t.scrollTo(0,1),a.removeClass("very-high"),e.isShowQrcode=!0;var i=navigator.userAgent;e.isMobi=/(iPhone|iPod|iPad|android|windows phone os|iemobile)/i.test(i),e.isAndroid=/(android)/i.test(i),e.isIos=/(iPhone|iPod|iPad)/i.test(i),e.toggleMask=function(t){t?a.addClass("onmask"):a.removeClass("onmask")},e(function(){setTimeout(function(){a.addClass("loaded")},100),o.on("touchstart","a",function(){e(this).addClass("focus")}),o.on("touchend touchmove","a",function(){e(this).removeClass("focus")}),e.isShowQrcode&&!e.isMobi&&e.jsonp("http://img.gd.sohu.com/static/v1/qrcode.js",function(){var t=e("#qrcode");0===t.length&&(t=e('<div id="qrcode"></div>'),a.append(t),new QRCode(t[0],{width:t.width(),height:t.height(),text:location.href})),o.on("click","#qrcode",function(){t.fadeOut()})}),!e.isMobi&&e.jsonp("http://img.gd.sohu.com/static/v1/desktouch.js")})}(window,$)},{}],20:[function(t,e,n){!function(t,e){function n(t){var n=e.panelUnloaded;"function"==typeof n&&n(t)}var o=t.document,a=e(o),i=o.body,r=e(i),s=e("#mainbox");e.homeSelector="#home";var c=function(){var t={},e="hidden"!==s.css("overflow");return function(n,o){e&&(o?t[n]=i.scrollTop:i.scrollTop=t[n]||0)}}();e.scrollTo=function(t,e,n){function o(){a+=r,n.scrollTop=a,r>0?t>a&&requestAnimationFrame(o):a>t&&requestAnimationFrame(o)}e||(e=20),n||(n=i);var a=n.scrollTop,r=(t-a)/e;r>0?t>a&&requestAnimationFrame(o):a>t&&requestAnimationFrame(o)};var u=function(){var t={};return function(n){var o=e.panelLoaded,a=n[0].id;"function"==typeof o&&o(n,!t[a]),t[a]=!0}}();e.toggleSidebox=function(){var t=e("#sidebox");return function(o){var a=e.history[e.history.length-1];o?(r.addClass("onsidebox"),u(t),n(a)):(r.removeClass("onsidebox"),n(t),u(a))}}(),e.toggleHeader=function(t){t?s.removeClass("offheader"):s.addClass("offheader")},e.toggleNavbar=function(t){t?s.removeClass("offnavbar"):s.addClass("offnavbar")},e.setTitle=function(){var t=e(".roottitle .title");return function(e){e&&t.html(e)}}(),e.setSubtitle=function(){var t=e(".subtitle .title");return function(e){e&&t.html(e)}}(),e.loadPanel=function(){var t=e("#navbar a"),a=o.querySelector(".navbox"),i=e(".panel"),r=1e3*parseFloat(i.css("transition-duration")),l=e.history=[],f=e("#header");return function(o){var i,d;if(o?(i=e(o),i.length>0&&(d=l[l.length-1],l.push(i))):(d=l.pop(),i=l[l.length-1]||e(e.homeSelector),o="#"+i.attr("id")),i.length>0){t.length>0&&t.each(function(){for(var n=(this.getAttribute("data-hash")||this.hash).split("|"),i=0,r=n.length;r>i;i++)n[i]===o&&(t.removeClass("selected"),e(this).addClass("selected"),a.center(this))});var h=i.attr("data-role");if("root"===h?(e.setTitle(i.attr("title")),e.toggleNavbar(!0),f.removeClass("onsubtitle")):(e.setSubtitle(i.attr("title")),e.toggleNavbar(!1),f.addClass("onsubtitle")),!d)return i.addClass("show opened"),void u(i);if(c(d.attr("id"),1),"#"+d.attr("id")!==o){var p=d.attr("data-role");i.addClass("show"),s.addClass("reflow"),setTimeout(function(){"root"===h?("root"===p?(i.addClass("notrans"),d.addClass("notrans")):(i.removeClass("notrans"),d.removeClass("notrans")),i.removeClass("subopened").addClass("opened"),d.removeClass("opened")):(i.removeClass("notrans"),d.removeClass("notrans"),i.hasClass("subopened")?(i.removeClass("subopened").addClass("opened"),d.removeClass("opened")):(i.addClass("opened"),d.addClass("subopened").removeClass("opened"))),c(i.attr("id"),!1),u(i)},10),setTimeout(function(){d.removeClass("show"),setTimeout(function(){s.removeClass("reflow")},500),"paneliframe"===d.attr("id")&&d.html(""),n(d)},r+20)}}else console.log(o+"面板未找到")}}(),e(function(){a.on("click",".btn-onsidebox",function(){e.toggleSidebox(1)}),a.on("click",".btn-offsidebox",function(){e.toggleSidebox(0)});var t=e("#paneliframe");0===t.length&&(t=e('<div id="paneliframe" class="panel"></div>'),s.append(t)),a.on("click","a",function(n){var o=this.hash;if(o)return n.preventDefault(),void e.loadPanel(o);var a=this.getAttribute("data-href"),i=this.getAttribute("data-title");a&&(n.preventDefault(),t.html('<iframe src="'+a+'"></iframe>'),e.setSubtitle(i||"详情"),e.loadPanel("#paneliframe"))}),a.on("click","#btn-goback",function(){e.loadPanel()});var n=e(".navbox");n.length>0&&n.scroll();var o=location.hash;e.loadPanel(o||e.homeSelector)})}(window,$)},{}]},{},[1]);