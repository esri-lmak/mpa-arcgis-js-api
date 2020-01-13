// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ge/LocalGEChart",["dojo/_base/declare","./LocalGEBase"],function(c,d){return c(d,{_cacheData:!0,constructor:function(b,a){this._initGE(null,a,b.calculatorName)},getFieldValueAt:function(b,a){return(a=this.getData().features[a])&&a.attributes[b]||0}})});