// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_PrintSupport",["dojo/_base/declare","dojo/when","../printing/PrintableContainer"],function(b,c,f){return b(null,{_getPrintableContainer:function(d){var b=this,e=new f(this,this._viewModel);d.onShowWaiting=function(a){b._showWaiting(a)};return c(e.initialize(d),function(a){return a?a:c(e.stop(),function(){return null})})}})});