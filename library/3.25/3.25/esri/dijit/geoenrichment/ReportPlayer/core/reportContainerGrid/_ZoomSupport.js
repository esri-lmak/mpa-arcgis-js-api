// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/_ZoomSupport",["dojo/_base/declare","./utils/ZoomUtil"],function(d,b){return d(null,{getZoomInfo:function(){return b.getZoomInfo(this)},setZoomInfo:function(a,c){b.setZoomInfo(this,a,c)},zoomIn:function(a){b.zoomIn(this,a)},zoomOut:function(a){b.zoomOut(this,a)},zoomToFitPage:function(a){b.zoomToFitPage(this,a)},zoomToFitPageWidth:function(a){b.zoomToFitPageWidth(this,a)},setZoomPercent:function(a,c){b.setZoomPercent(this,a,c)},
setBestZoom:function(){b.setBestZoom(this)},resetZoom:function(){b.reset(this)},_syncFillerContainer:function(){if(this.domNode){var a=this.getZoomInfo().scale;this.fillerContainer.style.marginTop="";this.fillerContainer.style.width=this.scalableContainer.clientWidth*a+"px";this.fillerContainer.style.height=this.scalableContainer.clientHeight*a+"px";this.renderOptions&&this.renderOptions.center&&(this.fillerContainer.style.marginTop=Math.max(this.renderOptions.minTop||0,(this.mainContainer.clientHeight-
this.fillerContainer.clientHeight)/2)+"px");this.renderOptions&&(this.fillerContainer.style.marginRight=this.renderOptions.minRight+"px",this.fillerContainer.style.marginBottom=this.renderOptions.minBottom+"px",this.fillerContainer.style.marginLeft=this.renderOptions.minLeft+"px");this.onViewSyncronized()}},onViewSyncronized:function(){},onZoomChanged:function(){}})});