// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxStatisticsGrid","dojo/_base/declare dojo/has dojo/_base/lang dojo/_base/array dojo/i18n!../../nls/jsapi ../../kernel ./RFxBandMatrix".split(" "),function(b,h,e,f,g,k,l){b=b("esriRFxStatisticsGrid",[l],{constructor:function(){var a=g.common,a=e.mixin(a,g.widgets.rasterFunctionEditor);this.displayNames=[a.min,a.max,a.mean,a.rfxStatisticsGrid.stdDev];this.nCols=4;this.inherited(arguments)},_updateValue:function(){if(this._store&&this._grid){var a,b=this._store.data,
d;a=this.value&&this.value.elements?{elements:[]}:[];f.every(b,function(c,b){if(b===c.length-1)return!1;d={min:c[0],max:c[1],mean:c[2],standardDeviation:c[3]};a.elements?a.elements.push(d):a.push(d)},this);this.value=a}},_setStoreData:function(a){if(a&&a.length||a&&a.elements&&a.elements.length){var b=[];a=a.elements||a;f.forEach(a,function(a,c){b[c]={id:c+1,idNum:c+1,0:a.min,1:a.max,2:a.mean,3:a.standardDeviation}});this._store.setData(b)}else this._store.setData([])}});h("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxStatisticsGrid",
b,k);return b});