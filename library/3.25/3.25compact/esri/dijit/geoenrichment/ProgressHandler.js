// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ProgressHandler",["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/dom-class","dojo/query"],function(f,k,g,e,h){return f(null,{progressNode:null,progressPromises:null,busyClass:null,errorClass:null,_allStates:null,constructor:function(a,b){b=b||{};this.busyClass=b.busyClass||"Wizard_Loading";this.errorClass=b.errorClass||"Wizard_Error";this._allStates=[this.busyClass,this.errorClass];var c=b.progressClass||"Wizard_Progress";a?(this.progressNode=a,e.add(this.progressNode,
c)):b.queryNode&&(this.progressNode=h("."+c,b.queryNode)[0]);this.progressPromises={}},showProgress:function(a,b){function c(){if(d.progressPromises[b]===a)return delete d.progressPromises[b],!0}b=b||"";a=g(a);if(a.isFulfilled())return this.progressPromises[b]&&(delete this.progressPromises[b],this._setState("done")),a;this.progressPromises[b]=a;var d=this;this._setState("busy");a.then(function(){c()&&d._setState("done")},function(a){c()&&("CancelError"==a.name?d._setState("done"):d._setState("error",
a.toString()))});return a},cancelProgress:function(a){a=a||"";this.progressPromises[a]&&this.progressPromises[a].cancel()},_setState:function(a,b){!this.progressNode||"done"==a&&Object.keys(this.progressPromises).length||(this.progressNode.innerHTML=b||"",e.remove(this.progressNode,this._allStates),"done"!=a&&e.add(this.progressNode,this[a+"Class"]))},destroy:function(){for(var a=Object.keys(this.progressPromises),b=0;b<a.length;b++)this.cancelProgress(a[b])}})});