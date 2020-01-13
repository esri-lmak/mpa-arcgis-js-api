// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/utils","dojo/_base/array dojo/_base/html dojo/_base/lang dojo/cookie dojo/Deferred dojo/query esri/request".split(" "),function(d,g,n,k,l,m,h){var f={promisifyGetValue:function(a){var b=a.getValue;a.getValue=function(){var c=b.apply(a);if(null!==c&&c.then)return c;var e=new m;e.resolve(c);return e}},allowShareResult:function(a){return d.some(a.outputParams,function(a){return"GPRecordSet"===a.dataType||"GPFeatureRecordSetLayer"===a.dataType&&a.defaultValue&&a.defaultValue.geometryType})},
getServiceDescription:function(a){var b;return h({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(function(c){b=c;return f.getGPServerDescription(a).then(function(a){b.serverInfo=a;b.useResultMapServer=a.hasResultMapServer;return f.uploadSupported(a).then(function(a){b.serverInfo.supportsUpload=a.supportsUpload;"maxUploadFileSize"in a&&(b.serverInfo.maxUploadFileSize=a.maxUploadFileSize);return b})})})},getGPServerDescription:function(a){var b={url:f.getGPServerUrl(a),
content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return h(b,{useProxy:!1}).then(function(a){var c={};c.currentVersion=a.currentVersion||0;c.url=b.url;c.hasResultMapServer="esriExecutionTypeAsynchronous"===a.executionType&&"resultMapServerName"in a&&""!==a.resultMapServerName;c.resultMapServerName=a.resultMapServerName;return c})},getGPServerUrl:function(a){if(!/\/GPServer\/.+$/.test(a))return"";var b=a.search(/[\w]+[^\/]*$/g);return a.substr(0,b)},getResultMapServerUrl:function(a,
b){if(!/\/rest\/services\//.test(a))return"";var c=a.search(/\/rest\/services\//);return a.substr(0,c+15)+b+"/MapServer"},uploadSupported:function(a){if(10.1<=a.currentVersion)return h({url:a.url+"uploads/info",content:{f:"json"},handleAs:"json"}).then(function(a){return{supportsUpload:!0,maxUploadFileSize:a.maxUploadFileSize}},function(){return{supportsUpload:!1}});a=new m;a.resolve({supportsUpload:!1});return a},getResultMapLayers:function(a,b){a={url:f.getResultMapServerUrl(a,b),content:{f:"json"},
handleAs:"json",callbackParamName:"callback"};return h(a,{useProxy:!1}).then(function(a){var b=d.map(a.layers,function(a){return a.name});d.forEach(a.tables,function(a){b.push(a.name)});return b})},useDynamicSchema:function(a,b){return"useDynamicSchema"in a?!0===a.useDynamicSchema:!0===b.useDynamicSchema},sanitizeHTML:function(a){return a},stripHTML:function(a){return a?-1<a.indexOf("\x3c")&&-1<a.indexOf("\x3e")?a.replace(/<(?:.|\s)*?>/g,""):a:a},setVerticalCenter:function(a){setTimeout(function(){var b=
l(".jimu-vcenter-text",a),c,e;d.forEach(b,function(a){c=g.getContentBox(a).h;g.setStyle(a,{lineHeight:c+"px"})},this);b=l(".jimu-vcenter",a);d.forEach(b,function(a){c=g.getContentBox(a).h;e=g.getContentBox(l(a).parent()[0]).h;g.setStyle(a,{marginTop:(e-c)/2+"px"})},this)},10)},getItemQueryStringByTypes:function(a){var b="",c=f.getAllItemTypes();if(a&&0<a.length&&0<a.length){var e="";d.forEach(a,function(b,c){e+=' type:"'+b+'" ';c!==a.length-1&&(e+=" OR ")});b=" ( "+e+" ) ";c=a.concat(c);c=d.filter(c,
function(b){return d.every(a,function(a){return 0>a.toLowerCase().indexOf(b.toLowerCase())})});d.forEach(c,function(a){b+=' -type:"'+a+'" '})}return b},isInConfigOrPreviewWindow:function(){var a=!1;try{a=!window.isBuilder&&window.parent&&window.parent!==window&&window.parent.isBuilder}catch(b){a=!1}return!!a},removeCookie:function(a,b){var c=this._getDomainsByServerName(window.location.hostname);d.forEach(c,n.hitch(this,function(c){k(a,null,{expires:-1,path:b});k(a,null,{expires:-1,path:b,domain:c});
k(a,null,{expires:-1,path:b,domain:"."+c})}))}};return f});