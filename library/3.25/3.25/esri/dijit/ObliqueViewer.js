// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/ObliqueViewer","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../tasks/QueryTask ../tasks/query ./_EventedWidget dijit/_Widget ./_ObliqueRotationWidget dojo/_base/array ../ImageSpatialReference ../tasks/ImageServiceProjectTask ../tasks/ProjectParameters ../layers/MosaicRule ../geometry/Extent ../geometry/Polygon ../lang ../config ./RasterList dojo/store/Observable dojo/store/Memory esri/geometry/geometryEngine dojo/Deferred".split(" "),function(q,m,z,A,B,w,C,D,E,f,F,G,H,
g,r,n,t,e,I,x,y,u,v){q=q([C,D],{declaredClass:"esri.dijit.ObliqueViewer",azimuthField:"SensorAzimuth",elevationThreshold:70,elevationField:"SensorElevation",snap:!0,_refreshOK:!0,isNadir:!1,showThumbnail:!0,noQueryOnExtentChange:!1,azimuthTolerance:10,rasterListRefresh:!0,extents:[],center:null,searchRadius:0,searchUnit:"meters",maxExtentIdx:5,currentExtentIdx:null,setNextExtent:function(){if(!(this.currentExtentIdx>=this.maxExtentIdx||this.currentExtentIdx>=this.extents.length-1)){var a=this;this.currentExtentIdx++;
var c=new g,b;c.method=g.METHOD_LOCKRASTER;c.lockRasterIds=[this.extents[this.currentExtentIdx].spatialReference.icsid];a.imageServiceLayer.setMosaicRule(c,!0);a._refreshOK=!1;a.map.spatialReference=this.extents[this.currentExtentIdx].spatialReference;b=e.defaults.map.zoomDuration;e.defaults.map.zoomDuration=0;a.map.setExtent(this.extents[this.currentExtentIdx]).then(function(){a._refreshOK=!0;e.defaults.map.zoomDuration=b})}},setPreviousExtent:function(){if(!(0>=this.currentExtentIdx)){var a=this;
this.currentExtentIdx--;var c=new g,b;c.method=g.METHOD_LOCKRASTER;c.lockRasterIds=[this.extents[this.currentExtentIdx].spatialReference.icsid];a.imageServiceLayer.setMosaicRule(c,!0);a._refreshOK=!1;a.map.spatialReference=this.extents[this.currentExtentIdx].spatialReference;b=e.defaults.map.zoomDuration;e.defaults.map.zoomDuration=0;a.map.setExtent(this.extents[this.currentExtentIdx]).then(function(){a._refreshOK=!0;e.defaults.map.zoomDuration=b})}},isPreviousAvailable:function(){},isNextAvailable:function(){},
_isICS:function(a){return!(!a.ics&&!a.icsid)},resizeRotationGauge:function(a){this._rotationWidget&&this._rotationWidget.resize(a)},_initializeTasks:function(){this.obliqueRecordsQueryTask=new B(this.imageServiceUrl);this.projectTask=new G},_verifyRasterInfoFields:function(){return this.rasterInfoFields&&this.rasterInfoFields.length},_setupRasterList:function(){var a=this,c=[{name:this.imageServiceLayer.objectIdField,alias:"Object ID",display:!0},{name:this.azimuthField,alias:"Azimuth",display:!0},
{name:this.elevationField,alias:this.elevationField,display:!0}];this.rasterInfoFields=this._verifyRasterInfoFields()?this.rasterInfoFields:c;this.rasterList=new I({data:new x(new y),showThumbnail:this.showThumbnail,imageServiceUrl:this.imageServiceLayer.url,fields:this.rasterInfoFields},this.rasterListDiv);this.rasterList.on("raster-select",function(b){a.selectedRasterId=b[a.imageServiceLayer.objectIdField];a.emit("raster-select",{selectedRasterId:a.selectedRasterId});a.setImage(a.selectedRasterId,
a.map.extent);f.forEach(a.filteredRecords,function(b){delete b.attributes.selected;b.attributes[a.imageServiceLayer.objectIdField]===a.selectedRasterId&&(b.attributes.selected=!0)});a._rotationWidget&&a._rotationWidget.setAzimuth(b[a.azimuthField])});this.rasterList.startup()},_setupRotationWidget:function(){var a=this;this._rotationWidget=new E({snap:this.snap,azimuthAngle:this.azimuthAngle},this.rotationDiv);this._rotationWidget.startup();this.own(this._rotationWidget.on("azimuth-change",function(c){var b=
c.azimuth;a.currentExtentIdx=0;a.extents=[];a.emit("azimuth-change",c);b?(a.azimuthAngle=b,a._checkExtentOrientation(),a._filterByAzimuth(),a._refreshRotationWidget({features:a.records}),a._refreshListDijit(a.filteredRecords),a._refreshImage(a.map.extent),a._oldAzimuth=b,a.isNadir=!1):a._switchToNadir()}))},_refreshRotationWidget:function(a){this._rotationWidget&&this._rotationWidget.refresh(a)},_checkExtentOrientation:function(){var a=Math.abs((this._oldAzimuth-this.azimuthAngle)/90%2);this._azimuthExtentChanged=
.25>a||1.75<a?!1:!0},_refreshListDijit:function(a){a=this._prepareListData(a);this.rasterList&&this.rasterListRefresh&&this.rasterList.setData(a);this.emit("records-refresh",{records:this.records,filteredRecords:this.filteredRecords})},_prepareListData:function(a){var c=[],b,d=this.imageServiceLayer.objectIdField,k=this.imageServiceLayer.credential;f.forEach(a,function(a){b=a.attributes;b.thumbnailUrl=this.imageServiceUrl+"/"+b[d]+"/thumbnail";k&&k.token&&(b.thumbnailUrl+="?token\x3d"+k.token);c.push(b)},
this);return new x(new y({data:c,idProperty:this.imageServiceLayer.objectIdField}))},clearSelection:function(){this.rasterList&&this.rasterList.clearSelection();f.forEach(this.records,function(a){delete a.attributes.selected});this._refreshListDijit(this.records)},_switchToNadir:function(){var a=!!this.map.extent.spatialReference.icsid,c=this.defaultNadirMosaicRule||this.imageServiceLayer.mosaicRule||new g;this._oldAzimuth=this.azimuthAngle=null;this._azimuthExtentChanged=!1;c.method=c.method||g.METHOD_NONE;
c.where=this.elevationField+"\x3e"+this.elevationThreshold;this.defaultNadirMosaicRule=c;this.imageServiceLayer.setMosaicRule(c,a);this.clearSelection();if(a){var b=this,d;this.projectGeometry(this.map.extent,this.nadirSpatialReference).then(function(a){b._verifyExtent(a[0])&&(b._refreshOK=!1,b.map.spatialReference=a[0].spatialReference,b.spatialReferenceChanged(),d=e.defaults.map.zoomDuration,e.defaults.map.zoomDuration=0,b.map.setExtent((new r(a[0])).setSpatialReference(a[0].spatialReference)).then(function(){b._refreshOK=
!0;b.isNadir=!0;e.defaults.map.zoomDuration=d;b.selectedRasterId=null;b.selectedRaster=null;b.filteredRecords=null}))})}},projectGeometry:function(a,c){var b=new H;c=c||this.map.spatialReference;b.geometries=[a];b.outSR=c;return this.projectTask.execute(b)},_verifyExtent:function(a){return!isNaN(a.xmin)&&!isNaN(a.xmax)&&!isNaN(a.ymin)&&!isNaN(a.ymax)},_verifyPoint:function(a){return!isNaN(a.x)&&!isNaN(a.y)},_refreshRecords:function(a){function c(c){b._verifyExtent(c[0].getExtent())?(b.nadirExtent=
c[0].getExtent(),b.search(b._trimExtent(b.nadirExtent,.15)).then(function(d){if(!d||!d.features)return b.emit("no-records",{message:"records not provided.",extent:b.nadirExtent}),b._refreshRotationWidget({features:[]}),b._refreshListDijit(b.filteredRecords),console.log("Oblique viewer: no records returned");b.records=d.features;b._refreshRotationWidget({features:b.records});b.isNadir?b._refreshListDijit(b.records):(b._filterByAzimuth(),b._refreshListDijit(b.filteredRecords),a&&b.filteredRecords&&
b.filteredRecords.length&&b._refreshImage(b.map.extent));b.emit("extent-change",{geometry:b.filteredRecords?b._getIntersectGeometry(c[0]):c[0]})})):(console.error("Oblique viewer: Project Operation returned invalid extent"),b.search(b._trimExtent(b.map.extent,.15)).then(function(c){if(!c||!c.features)return b.emit("no-records",{message:"records not provided.",extent:b.map.extent}),b._refreshRotationWidget({features:[]}),b._refreshListDijit(b.filteredRecords),console.log("Oblique viewer: no records returned");
b.records=c.features;b._refreshRotationWidget({features:b.records});b.isNadir?b._refreshListDijit(b.records):(b._filterByAzimuth(),b._refreshListDijit(b.filteredRecords),a&&b.filteredRecords&&b.filteredRecords.length&&b._refreshImage((new n(b.filteredRecords[0].geometry)).getExtent()))}))}var b=this;this.nadirSpatialReference.equals(this.map.extent.spatialReference)?c([this.map.extent]):this.projectGeometry(this._convertExtentToPolygon(this.map.extent),this.nadirSpatialReference).then(c)},_convertExtentToPolygon:function(a){var c=
new n(a.spatialReference);c.addRing([[a.xmax,a.ymin],[a.xmax,a.ymax],[a.xmin,a.ymax],[a.xmin,a.ymin],[a.xmax,a.ymin]]);return c},postCreate:function(){this.inherited(arguments);this.map&&this.imageServiceLayer||console.error("ObliqueViewer: Map or Image service layer not provided.");this.imageServiceUrl=this.imageServiceLayer.url;this.nadirSpatialReference=this.map.extent.spatialReference;this._initializeTasks();(this.isNadir=!t.isDefined(this.azimuthAngle))&&this._switchToNadir();this.rotationDiv&&
this._setupRotationWidget();if(this.rasterListDiv)if(this.imageServiceLayer.loaded)this._setupRasterList();else this.imageServiceLayer.on("load",m.hitch(this,this._setupRasterList));this.sorter||(this.sorter=this._sortSpatially);this.own(this.map.on("extent-change",m.hitch(this,function(a){this._refreshOK&&!this.noQueryOnExtentChange&&(this._isICS(this.map.extent.spatialReference)||(this.nadirExtent=this.map.extent,this._switchToNadir(),this.emit("extent-change",{geometry:this.filteredRecords?this._getIntersectGeometry(this._convertExtentToPolygon(this.nadirExtent)):
this._convertExtentToPolygon(this.nadirExtent)})),this._refreshRecords(!0),this._azimuthExtentChanged=!1)})));t.isDefined(this.azimuthAngle)&&!this.noQueryOnExtentChange&&this._refreshRecords()},_refreshImage:function(a){this.filteredRecords&&this.filteredRecords.length&&this.selectedRasterId!==this.filteredRecords[0].attributes[this.imageServiceLayer.objectIdField]?this._setSelectedRaster(a):this._refreshSavedExtents()},_refreshSavedExtents:function(){this._isICS(this.map.extent.spatialReference)&&
(this.extents&&this.extents.length?(this.extents.length>this.maxExtentIdx&&(this.extents.shift(),this.currentExtentIdx--),this.currentExtentIdx<this.extents.length-1?this.currentExtentIdx=this.extents.length-1:this.currentExtentIdx++):(this.currentExtentIdx=0,this.extents=[]),this.extents.push(this.map.extent))},_createExtent:function(a,c,b){var d=b.getWidth()/2*1.00001;b=b.getHeight()/2;return new r(a.x-d,a.y-b,a.x+d,a.y+b,c)},spatialReferenceChanged:function(){this.imageServiceLayer.handleSpatialReferenceChange()},
setImage:function(a,c){function b(b){if(l)if(d._verifyPoint(b[0]))h=d._createExtent(b[0],d.imageSpatialReference,l);else return console.log("Project operation returned invalid result.");else if(l||d._verifyExtent(b[0]))h=b[0];else return console.log("Project operation returned invalid extent.");k=new g;k.method=g.METHOD_LOCKRASTER;k.lockRasterIds=[a];d.imageServiceLayer.setMosaicRule(k,!0);d._refreshOK=!1;d.map.spatialReference=h.spatialReference;d.spatialReferenceChanged();f=e.defaults.map.zoomDuration;
p=e.defaults.map.panDuration=0;e.defaults.map.zoomDuration=0;e.defaults.map.panDuration=0;d.map.setExtent((new r(h)).setSpatialReference(h.spatialReference)).then(function(){d._refreshOK=!0;e.defaults.map.zoomDuration=f;e.defaults.map.panDuration=p;d._refreshSavedExtents();d.projectGeometry(d._convertExtentToPolygon(h),d.nadirSpatialReference).then(function(a){d.emit("extent-change",{geometry:d.filteredRecords?d._getIntersectGeometry(a[0]):a[0]})})});d.center&&d.projectGeometry(d.center,d.imageSpatialReference).then(function(a){d.emit("add-point",
{point:a[0]})})}if(!a)return console.error("Object ID of raster to be displayed not provided");var d=this,k,f,p,l=c&&(c.spatialReference.icsid||c.spatialReference.ics)?c:null,h;this.imageSpatialReference=new F({icsid:a,url:this.imageServiceUrl});c&&c.spatialReference&&!c.spatialReference.ics&&!c.spatialReference.icsid?(d.nadirExtent=c.getExtent(),d.projectGeometry(d.nadirExtent,d.imageSpatialReference).then(b)):this.projectGeometry(this._convertExtentToPolygon(c),this.nadirSpatialReference).then(function(a){d.nadirExtent=
a[0].getExtent().setSpatialReference(d.nadirSpatialReference);d.projectGeometry(c.getCenter(),d.imageSpatialReference).then(b)})},locate:function(a){if(!a)return console.error("Geometry not specified.");var c=this,b,d;(d=a.type)&&"extent"===d?b=a:(d=d&&"point"===d?u.buffer(a,100,"meters"):u.buffer(a.getExtent().getCenter(),100,"meters"),b=d.getExtent());this.center=b.getCenter();this.search(a).then(function(a){c.setData(a.features,b)})},search:function(a){if(!a)return console.error("Oblique viewer: no geometry provided for search.");
var c,b=new v,d=this;c=new w;c.geometry=a;c.outFields=this._getQueryFields()||[this.imageServiceLayer.objectIdField,this.azimuthField];c.returnGeometry=!0;c.where=this.elevationField+"\x3c"+this.elevationThreshold;c.outSpatialReference=a.spatialReference;this.obliqueRecordsQueryTask.execute(c).then(function(c){b.resolve({features:d.sorter(d._processRecords(c.features),a)})});return b.promise},_sortSpatially:function(a,c){if(a&&a.length&&this.map.loaded){var b=0,d=0,e=a[0],g,p,l,h,b=0,d=this.nadirExtent||
this.map.extent;c&&"extent"===c.type&&c.spatialReference.equals(a[0].geometry.spatialReference)&&(d=c);c=d.getCenter();this.selectedRaster&&this._extentContained(this.selectedRaster,d)&&(f.some(a,function(b,c){if(b.attributes[this.imageServiceLayer.objectIdField]===this.selectedRasterId)return l=a[c],a[c]=e,a[0]=l,!0},this),b=1);for(;b<a.length;b++){g=Math.sqrt((a[b].center.x-c.x)*(a[b].center.x-c.x)+(a[b].center.y-c.y)*(a[b].center.y-c.y));h=b;for(d=b+1;d<a.length;d++)p=Math.sqrt((a[d].center.x-
c.x)*(a[d].center.x-c.x)+(a[d].center.y-c.y)*(a[d].center.y-c.y)),g>p&&(e=a[d],g=p,h=d);b!==h&&(l=a[b],a[b]=e,a[h]=l)}}return a},_filterByAzimuth:function(){this.filteredRecords=[];f.forEach(this.records,function(a){Math.min(Math.abs(a.attributes[this.azimuthField]-this.azimuthAngle),Math.abs(a.attributes[this.azimuthField]-this.azimuthAngle-360))<=this.azimuthTolerance&&this.filteredRecords.push(a)},this);this.filteredRecords&&this.filteredRecords.length&&!this.isNadir&&(this.filteredRecords[0].attributes.selected=
!0)},_processRecords:function(a){var c;f.forEach(a,function(a){c=(new n(a.geometry)).setSpatialReference(this.nadirSpatialReference).getCentroid();a.center=c},this);0===a.length?a=this.selectedRasterId=this.filteredRecords=null:this.emit("records-found",{message:"records are found."});return a},_computeAzimuthFilter:function(){var a=(this.azimuthAngle+350)%360,c=(this.azimuthAngle+10)%360;return a<c?this.azimuthField+" BETWEEN "+a+" AND "+c:"("+this.azimuthField+" BETWEEN 0 AND "+c+" OR "+this.azimuthField+
" BETWEEN "+a+" AND 360)"},_getIds:function(a){var c=[],b=this;f.forEach(a,function(a){c.push(a.attributes[b.imageServiceLayer.objectIdField])});return c},_setRasterListRefreshAttr:function(a){this._set("rasterListRefresh",a);a&&this._refreshListDijit(this.isNadir?this.records:this.filteredRecords)},_extentContained:function(a,c){if(!a||!c)return!1;a=(new n(a.geometry)).getExtent();return this._trimExtent(a,.2).contains(c)},setData:function(a,c){if(!a)return this.emit("no-records",{message:"records not provided.",
extent:c}),this._refreshRotationWidget({features:[]}),this._refreshListDijit(this.filteredRecords),console.error("Oblique viewer: records not provided.");c=c||this.map.extent;this._set("records",a);this._refreshRotationWidget({features:a});this._filterByAzimuth();if(this.filteredRecords&&this.filteredRecords.length)if(this._refreshListDijit(this.filteredRecords),this.imageServiceLayer.loaded)this._setSelectedRaster(c);else this.imageServiceLayer.on("load",m.hitch(this,function(){this._setSelectedRaster(c)}));
else this.selectedRasterId=this.selectedRaster=null,this.emit("raster-select",{selectedRasterId:null})},_setSelectedRaster:function(a){this.selectedRaster=this.filteredRecords[0];this.selectedRasterId=this.selectedRaster.attributes[this.imageServiceLayer.objectIdField];this.setImage(this.selectedRaster.attributes[this.imageServiceLayer.objectIdField],a);this.emit("raster-select",{selectedRasterId:this.selectedRasterId})},setExtent:function(a){var c=new v,b=this;this.projectGeometry(a,this.map.spatialReference).then(function(a){b._verifyExtent(a[0])&&
b.map.setExtent(a[0]).then(function(){c.resolve()})});return c.promise},zoomToSelectedImage:function(){if(!t.isDefined(this.selectedRasterId))return console.error("Oblique viewer: no selected raster.");if(this.isNadir)return console.log("Viewer in nadir mode, no selected raster.");this._getImageGeometry(this.selectedRasterId).then(m.hitch(this,function(a){this.map.setExtent(a.getExtent())}))},_getImageGeometry:function(a){var c=new w,b,d,e=new v;c.objectIds=[a];c.returnGeometry=!0;this.obliqueRecordsQueryTask.execute(c).then(m.hitch(this,
function(a){a.features&&a.features.length&&(d=a.features[0])&&d.geometry&&(b=new n(d.geometry),this.projectGeometry(b,this.map.spatialReference).then(m.hitch(this,function(a){a&&a.length&&(b=(new n(a[0])).setSpatialReference(this.map.spatialReference),e.resolve(b))})))}));return e.promise},_getQueryFields:function(){var a=[];f.forEach(this.rasterInfoFields,function(c){c.name&&a.push(c.name)});0>f.indexOf(a,this.azimuthField)&&a.push(this.azimuthField);0>f.indexOf(a,this.imageServiceLayer.objectIdField)&&
a.push(this.imageServiceLayer.objectIdField);return a},_trimExtent:function(a,c){var b,d;c=c||.15;b=a.ymax-a.ymin;d=b*(1-c);c=b*(1-c);b=a.getCenter();return new r({xmin:b.x-c/2,ymin:b.y-d/2,xmax:b.x+c/2,ymax:b.y+d/2,spatialReference:a.spatialReference})},_getIntersectGeometry:function(a){var c=this,b;if(!t.isDefined(this.selectedRasterId))return a;if(f.some(this.filteredRecords,function(a){if(a.attributes[c.imageServiceLayer.objectIdField]==c.selectedRasterId)return b=a.geometry,!0}))return u.intersect(a,
b)}});z("extend-esri")&&m.setObject("dijit.ObliqueViewer",q,A);return q});