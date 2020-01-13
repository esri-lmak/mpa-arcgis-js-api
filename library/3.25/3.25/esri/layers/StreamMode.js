// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/StreamMode","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../kernel ../SpatialReference ../tasks/query ../tasks/QueryTask ../geometry/jsonUtils ./RenderMode".split(" "),function(k,l,m,q,r,t,u,v,w,x,y){k=k([y],{declaredClass:"esri.layers._StreamMode",constructor:function(a,b){this.featureLayer=a;this._featureMap={};this._setRefreshRate();this._drawBuffer={adds:[],updates:[]};this._timeoutId=null;this._flushDrawBuffer=l.hitch(this,this._flushDrawBuffer);
this._featuresByTime={};this._lastEndTimeCheck=null;this._maxFeatureAge=0;a.purgeOptions&&a.purgeOptions.age&&"number"===typeof a.purgeOptions.age&&(this._maxFeatureAge=1E3*Math.ceil(60*a.purgeOptions.age));this._drawFeatures=l.hitch(this,this._drawFeatures);this._queryErrorHandler=l.hitch(this,this._queryErrorHandler)},startup:function(){this._started||this.inherited(arguments)},propertyChangeHandler:function(a){this._init&&(0===a?this._applyTimeFilter():3===a?this._redrawAllTracks():console.debug("StreamLayer: Stream Layer only supports changing map time or maximumTrackPoints. Layer id \x3d "+
this.featureLayer.id))},destroy:function(){this.inherited(arguments);clearTimeout(this._timeoutId);this._featuresByTime=this._drawBuffer=this._featureMap=null},drawFeature:function(a){var b=this.featureLayer,c=b.objectIdField;this._timeoutId||(this._timeoutId=setTimeout(this._flushDrawBuffer,this._refreshRate));b._joinField&&this._getFeature(a.attributes[c])?this._drawBuffer.updates.push({oid:a.attributes[c],updates:a}):this._drawBuffer.adds.push(a)},resume:function(){this.propertyChangeHandler(0)},
refresh:function(){this._pendingRequest&&this._cancelPendingRequest(this._pendingRequest);var a=this.featureLayer;a&&(a._relatedUrl||a._keepLatestUrl?(a._fireUpdateStart(),a._refreshing=!0,a.disconnect(),a.clear(),a._relatedQueried=!1,a._keepLatestQueried=!1,a.connect()):(a._fireUpdateStart(),a.clear(),a._fireUpdateEnd()))},_drawFeatures:function(a,b){var c=this.featureLayer;c._create(a.features||[]);c._fireUpdateEnd(null,b)},_applyTimeFilter:function(a){this.inherited(arguments);this._redrawAllTracks()},
_removeFeatures:function(a){var b=this.featureLayer,c=b.objectIdField;a&&m.forEach(a,function(a){a=a.attributes[c];b._unSelectFeatureIIf(a,this);this._decRefCount(a);this._removeFeatureIIf(a)},this)},_addFeatures:function(a){var b=this.featureLayer,c=b._endTimeField,e=b._startTimeField,d,f,g,h=[],n=[],p=[];d=b._trackManager;f=b.objectIdField;if(d)for(g in a=d.addFeatures(a),a)a.hasOwnProperty(g)&&(h.push(g),a[g].adds&&(n=n.concat(a[g].adds)),a[g].deletes&&(p=p.concat(a[g].deletes)));else n=a;m.forEach(n,
function(a){var b=a.attributes[f],d;d=c&&a.attributes[c];!d&&this._maxFeatureAge&&(d=e&&a.attributes[e]?a.attributes[e]+this._maxFeatureAge:Date.now()+this._maxFeatureAge);d&&(d=1E3*Math.ceil(d/1E3),this._featuresByTime[d]?this._featuresByTime[d].push(b):this._featuresByTime[d]=[b]);this._addFeatureIIf(b,a);this._incRefCount(b)},this);p.length&&this._removeFeatures(p);d&&d.refreshTracks(h)},_updateFeatures:function(a){var b=this.featureLayer,c,e,d=[];c=b._trackManager;e=b._trackIdField;m.forEach(a,
function(a){var f=a.updates;a=this._getFeature(a.oid);var h;if(a){f.geometry&&a.setGeometry(f.geometry);f=f.attributes||{};for(h in f)f.hasOwnProperty(h)&&(a.attributes[h]=f[h]);a.setAttributes(a.attributes);a.visible=this._checkFeatureTimeIntersects(a);c&&a.attributes[e]?d.push(a.attributes[e]):b._repaint(a,null,!0)}},this);d.length&&c.refreshTracks(d)},_redrawAllTracks:function(){var a=this.featureLayer._trackManager,b;a&&(b=a.trimTracks())&&0<b.length&&(this._removeFeatures(b),a.refreshTracks())},
_flushDrawBuffer:function(){clearTimeout(this._timeoutId);var a=this._drawBuffer,b=a.adds.splice(0,a.adds.length),c=a.updates.splice(0,a.updates.length),a=this.featureLayer;if(!a)return!1;a.updating||a._fireUpdateStart();this._addFeatures(b);this._updateFeatures(c);(b=this._getExpiredFeatures())&&b.length&&(this._removeFeatures(b),a._trackManager&&a._trackManager.removeFeatures(b));a._purge();a._fireUpdateEnd();this._timeoutId=null},_clearDrawBuffer:function(){var a=this._timeoutId,b=this._drawBuffer,
c=b.adds,b=b.updates;a&&clearTimeout(a);c.splice(0,c.length);b.splice(0,b.length);this._timeoutId=null},_clearTimeBin:function(){this._featuresByTime={};this._lastEndTimeCheck=1E3*Math.ceil(Date.now()/1E3)},_clearFeatureMap:function(){this._featureMap={}},_setRefreshRate:function(a){a=a||0===a?a:200;0>a&&(a=200);this._refreshRate=a},_checkFeatureTimeIntersects:function(a){var b=this.featureLayer,c=b.getMap();return(c=c?c.timeExtent:null)&&b.timeInfo&&(b.timeInfo.startTimeField||b.timeInfo.endTimeField)?
0<b._filterByTime([a],c.startTime,c.endTime).match.length:!0},_fetchArchive:function(a){var b=new q,c=this.featureLayer,e,d,f,g,h;this._pendingRequest&&this._cancelPendingRequest(this._pendingRequest);c._fireUpdateStart();a&&this.map?(a=new w(a),e=new v,d=this.map,f=c.getFilter()||{},g=f.where||"1\x3d1",h=f.geometry?x.fromJson(f.geometry):null,f=f.outFields?f.outFields.split(","):["*"],e.geometry=h,e.where=g,e.outFields=f,e.returnGeometry=!0,e.outSpatialReference=new u(d.spatialReference.toJson()),
this._pendingRequest=a.execute(e).then(function(a){this._pendingRequest=null;var d=this._fixFieldNameCasing(c,a);a.features=d;this._drawFeatures(a);c._fireUpdateEnd();b.resolve()}.bind(this)).otherwise(function(a){this._pendingRequest=null;c._errorHandler(a);c._fireUpdateEnd(a);b.reject(a)}.bind(this))):b.resolve();return b.promise},_queryErrorHandler:function(a){var b=this.featureLayer;b._errorHandler(a);b._fireUpdateEnd(a)},_fixFieldNameCasing:function(a,b){var c=b.features||[],e=b.fields;if(!e||
!c.length)return c;a=this._mapFieldNameDifferences(a.fields,e);for(var e=[],d,f=0,g=b.features.length;f<g;f++)b=c[f],d=this._swizzleResponseAttributes(b.attributes,a),e.push({geometry:b.geometry,attributes:d});return e},_mapFieldNameDifferences:function(a,b){var c=[],e={},d,f;d=0;for(f=b.length;d<f;d++)c.push(b[d].name);d=0;for(f=a.length;d<f;d++){b=a[d].name;var g=this._checkForStreamFieldName(b,c);g&&(e[g]=b)}return e},_checkForStreamFieldName:function(a,b){a=a.toLowerCase();for(var c,e=0,d=b.length;e<
d;e++)if(b[e].toLowerCase()===a){c=b[e];break}return c},_swizzleResponseAttributes:function(a,b){var c={},e;for(e in a)if(a.hasOwnProperty(e)){var d=a[e];b.hasOwnProperty(e)?c[b[e]]=d:c[e]=d}return c},_getExpiredFeatures:function(){var a,b,c,e=[],d=[];if(!this.featureLayer._endTimeField&&!this._maxFeatureAge)return d;a=1E3*Math.floor(this._lastEndTimeCheck/1E3);this._lastEndTimeCheck=b=1E3*Math.ceil(Date.now()/1E3);if(a&&a!==b)for(c=this._featuresByTime;a<=b;a+=1E3)c[a]&&(e=e.concat(c[a]),delete c[a]);
m.forEach(e,function(a){(a=this._getFeature(a))&&d.push(a)},this);return d}});r("extend-esri")&&l.setObject("layers._StreamMode",k,t);return k});