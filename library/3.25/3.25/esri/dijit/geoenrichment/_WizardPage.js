// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/_WizardPage.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/geoenrichment/Grid" data-dojo-attach-point\x3d"layoutGrid"  class\x3d"Grid"\x3e\r\n        ${content}\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/_WizardPage","../../declare dojo/_base/lang dojo/string dojox/mvc/Templated dojo/text!./templates/_WizardPage.html ./Grid ./ProgressHandler".split(" "),function(d,e,f,g,h,c,k){return d("esri.dijit.geoenrichment._WizardPage",g,{buttonsNode:null,_progressHandler:null,buildRendering:function(){var a=this.templateString;a&&"\ufeff"==a[0]&&(a=a.substr(1));this.templateString=f.substitute(h,{content:a});this.inherited(arguments);this.layoutGrid.rows=[c.AUTO,c.AUTO,c.AUTO]},
resize:function(){this.layoutGrid.resize()},_setStackingAttr:function(a){switch(a){case "stretch":this.layoutGrid.rows[1]=c.STRETCH;break;case "stack":this.layoutGrid.rows[1]=c.STACK}},showProgress:function(a,b){this._progressHandler||(this._progressHandler=new k(this.progressDiv,{queryNode:this.domNode}),this.own(this._progressHandler));a=this._progressHandler.showProgress(a,"string"==typeof b?b:"");b=b?"function"==typeof b?b:this[b]:null;"function"==typeof b&&a.then(e.hitch(this,b));return a},cancelProgress:function(a){this._progressHandler&&
this._progressHandler.cancelProgress("string"==typeof a?a:"")}})});