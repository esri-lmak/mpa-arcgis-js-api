// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/sniff",["dojo/_base/sniff","dojo/global","./kernel"],function(a,b,c){var d=a("ff"),f=a("ie"),n=void 0===f&&7<=a("trident"),l=a("edge"),k=a("webkit"),g=a("opera"),m=a("chrome"),p=a("safari"),h=navigator.userAgent,e;(e=h.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i))&&a.add("esri-iphone",parseFloat(e[2].replace("_",".")));(e=h.match(/Android\s+(\d+(\.\d+)*)/i))&&a.add("esri-android",parseFloat(e[1]));(e=h.match(/Fennec\/(\d+\.\d+)/i))&&a.add("esri-fennec",parseFloat(e[1]));0<=h.indexOf("BlackBerry")&&
0<=h.indexOf("WebKit")&&a.add("esri-blackberry",1);a.add("esri-touch",a("esri-iphone")||a("esri-android")||a("esri-blackberry")||6<=a("esri-fennec")||(d||k)&&(document.createTouch||"ontouchstart"in b||b.TouchEvent&&0<navigator.maxTouchPoints)?!0:!1);(e=h.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i))&&a.add("esri-mobile",!!e);a.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled||!(!l||!b.PointerEvent));c._getDOMAccessor=function(a){var b="";d?b="Moz":
k?b="Webkit":f?b="ms":g&&(b="O");return b+a.charAt(0).toUpperCase()+a.substr(1)};a.add("esri-phonegap",!!b.cordova);a.add("esri-cors",a("esri-phonegap")||b.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest);a.add("esri-file-upload",b.FormData&&b.FileList?!0:!1);a.add("esri-script-sandbox",function(){return"MessageChannel"in b&&"HTMLIFrameElement"in b&&"sandbox"in HTMLIFrameElement.prototype});a.add("esri-secure-context",function(){if("isSecureContext"in b)return b.isSecureContext;if(b.location&&
b.location.origin)return 0===b.location.origin.indexOf("https:")});a.add("esri-wasm","WebAssembly"in b);a.add("esri-workers",b.Worker?!0:!1);a.add("esri-featurelayer-webgl-labeling",!1);a.add("esri-transforms",n||l||9<=f||3.5<=d||4<=m||3.1<=p||10.5<=g||3.2<=a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transitions",n||l||10<=f||4<=d||4<=m||3.1<=p||10.5<=g||3.2<=a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transforms3d",n||l||10<=d||12<=m||4<=p||3.2<=a("esri-iphone")||3<=a("esri-android"));
a.add("esri-url-encodes-apostrophe",function(){if(b.document)return!1;var a=b.document.createElement("a");a.href="?'";return-1<a.href.indexOf("?%27")});3>a("esri-android")&&(a.add("esri-transforms",!1,!1,!0),a.add("esri-transitions",!1,!1,!0),a.add("esri-transforms3d",!1,!1,!0));a.add("esri-will-change",a("esri-transforms")&&(52<=m||11.1<=p));c._css=function(b){var c=a("esri-transforms3d");void 0!==b&&null!==b?c=b:c&&(m||p&&!a("esri-iphone"))&&(c=!1);var e=c?"translate3d(":"translate(",h=c?m?",-1px)":
",0px)":")",l=c?"scale3d(":"scale(",n=c?",1)":")",q=c?"rotate3d(0,0,1,":"rotate(",r=c?"matrix3d(":"matrix(",t=c?",0,0,":",",u=c?",0,0,0,0,1,0,":",",v=c?",0,1)":")";return{names:{transition:k&&"-webkit-transition"||d&&"MozTransition"||g&&"OTransition"||f&&"msTransition"||"transition",transform:k&&"-webkit-transform"||d&&"MozTransform"||g&&"OTransform"||f&&"msTransform"||"transform",transformName:k&&"-webkit-transform"||d&&"-moz-transform"||g&&"-o-transform"||f&&"-ms-transform"||"transform",origin:k&&
"-webkit-transform-origin"||d&&"MozTransformOrigin"||g&&"OTransformOrigin"||f&&"msTransformOrigin"||"transformOrigin",endEvent:k&&"webkitTransitionEnd"||d&&"transitionend"||g&&"oTransitionEnd"||f&&"MSTransitionEnd"||"transitionend"},translate:function(a,b){return e+a+"px,"+b+"px"+h},scale:function(a){return l+a+","+a+n},rotate:function(a){return q+a+"deg)"},matrix:function(a){return r+a.xx+","+a.xy+t+a.yx+","+a.yy+u+a.dx.toFixed(10)+(d&&59>=d?"px,":",")+a.dy.toFixed(10)+(d&&59>=d?"px":"")+v},getScaleFromMatrix:function(a){if(!a)return 1;
a=a.toLowerCase();var b=-1<a.indexOf("matrix3d")?"matrix3d(":"matrix(";return Number(a.substring(b.length,a.indexOf(",")))}}};a("extend-esri")&&(c.isiPhone=a("esri-iphone"),c.isAndroid=a("esri-android"),c.isFennec=a("esri-fennec"),c.isBlackBerry=a("esri-blackberry"),c.isTouchEnabled=a("esri-touch"),c.isPointerEnabled=a("esri-pointer"),c._hasCors=a("esri-cors"),c._hasFileUpload=a("esri-file-upload"),c._hasTransforms=a("esri-transforms"),c._hasTransitions=a("esri-transitions"),c._has3DTransforms=a("esri-transforms3d"));
return a});