// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ReportTemplateData","dojo/_base/declare dojo/request/xhr dojo/promise/all esri/kernel esri/request esri/urlUtils esri/dijit/geoenrichment/utils/DataUtil".split(" "),function(c,g,h,k,l,m,f){return c(null,{id:null,_portal:null,_baseUrl:null,constructor:function(a,d){this.id=a.id;this._portal=d;this._baseUrl=this._portal.url+"/sharing/rest"},getFiles:function(){var a=this;return this._getResources().then(function(d){var c=d.resources.map(function(b){b=
a._baseUrl+"/"+a._contentItemPath(a.id+"/resources/"+b.resource);var e=m.getProxyRule(b);return g(e&&e.proxyUrl?e.proxyUrl+"?"+b:b,{method:"POST",handleAs:"arraybuffer",data:"token\x3d"+a._getToken(),headers:{"X-Requested-With":null,"Content-Type":"application/x-www-form-urlencoded; charset\x3dutf-8"}})});return h(c).then(function(a){return a.map(function(a,b){b=d.resources[b].resource;var c=!/\.xml$|\.txt$|\.json$/i.test(b);return{name:b,data:c?f.base64FromByteSource(a):decodeURIComponent(escape(f.binaryStringFromByteSource(a)))}})})})},
_contentItemPath:function(a){return"content/items/"+a},_getToken:function(){return k.id.credentials[0].token},_getResources:function(){return l({url:this._baseUrl+"/"+this._contentItemPath(this.id+"/resources"),content:{num:100,f:"json",token:this._getToken()},handleAs:"json"},{usePost:!0})},getPortalUrl:function(a){return a?/[^:]+:\/\/(.+)$/i.exec(this._portal.url)[1]:this._portal.url}})});