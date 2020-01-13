// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/OnDemandMode","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/has ../kernel ../geometry/Point ../tasks/query ./RenderMode ./GridLayout".split(" "),function(q,p,t,r,v,w,x,u,y,z){q=q([y],{declaredClass:"esri.layers._OnDemandMode",constructor:function(b){this.featureLayer=b;this._featureMap={}},initialize:function(b){this.inherited(arguments);var a=this.featureLayer,c=a._srInfo;this._gridLayer=new z(new x(c?c.valid[0]:b.extent.xmin,c?c.valid[1]:b.extent.ymax,
b.spatialReference),{width:a._tileWidth,height:a._tileHeight},{width:b.width,height:b.height},c);this._cellMap={};this._gridLayer.setResolution(b.extent)},startup:function(){if(!this._started||this._isSuspendedAtStartup)this.inherited(arguments),this._ioQueue=[],this._isSuspendedAtStartup=this.featureLayer.suspended,this.featureLayer.suspended||(this._zoomHandler(),this._enableConnectors())},propertyChangeHandler:function(b){this._init&&(2>b?this._zoomHandler():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id \x3d "+
this.featureLayer.id+", Layer URL \x3d "+this.featureLayer.url))},destroy:function(){this._disableConnectors();this._processIOQueue(!0);this.inherited(arguments)},drawFeature:function(b){var a=b.geometry,c=[];if(a){var c=this._gridLayer.getCellsInExtent("point"===a.type?{xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y}:a.getExtent(),!1).cells,a=this._cellMap,d,e,h=b.attributes[this.featureLayer.objectIdField],f,k,g;for(d=0;d<c.length;d++)e=c[d],f=e.latticeID,k=e.row,g=e.col,f?e=a[f]=a[f]||e:(a[k]=a[k]||{},e=
a[k][g]=a[k][g]||e),e.features=e.features||[],e.features.push(b),this._addFeatureIIf(h,b),this._incRefCount(h)}},suspend:function(){this._init&&this._disableConnectors()},resume:function(){this._init&&(this._enableConnectors(),this._zoomHandler())},refresh:function(){this._zoomHandler()},hasAllFeatures:function(){var b=!1,a=this._getCurrentCells(),c;for(c=0;c<a.length;c++)if(a[c].hasPartialFeatures){b=!0;break}return!b},hasUpdateError:function(){var b=!1,a=this._getCurrentCells(),c;for(c=0;c<a.length;c++)if(a[c].hasUpdateError){b=
!0;break}return b},_enableConnectors:function(){var b=this.map;this._zoomConnect=p.connect(b,"onZoomEnd",this,this._zoomHandler);this._panConnect=p.connect(b,"onPanEnd",this,this._panHandler);this._resizeConnect=p.connect(b,"onResize",this,this._panHandler)},_disableConnectors:function(){p.disconnect(this._zoomConnect);p.disconnect(this._panConnect);p.disconnect(this._resizeConnect)},_zoomHandler:function(){this._processIOQueue(!0);var b=this.featureLayer,a=this.map;!b.suspended&&b.isQueryable()&&
(b._fireUpdateStart(),this._clearIIf(),(b=b._trackManager)&&b.clearTracks(),this._cellMap={},this._gridLayer.setResolution(a.extent),this._sendRequest())},_panHandler:function(b){if(this.featureLayer.isQueryable()){this.featureLayer._fireUpdateStart();var a=this.featureLayer._resized;b=a?b:null;a&&this._gridLayer.setMapState(b,this.map.width,this.map.height);this._sendRequest(b)}},_sendRequest:function(b){this._exceeds=!1;var a=this.featureLayer,c=this.map;b=b||c.extent;c=this._gridLayer.getCellsInExtent(b,
a.latticeTiling).cells;if(!a.isEditable())var d=this._cellMap,c=r.filter(c,function(a){if(a.lattice){if(d[a.latticeID])return!1}else if(d[a.row]&&d[a.row][a.col])return!1;return!0});var e=a.getOutFields(),h=a.getDefinitionExpression(),f=a._getOffsettedTE(a._mapTimeExtent),k=a.supportsAdvancedQueries?a.getOrderByFields():null,g=this._ioQueue,m,n,l;this._pending=this._pending||0;for(m=0;m<c.length;m++){n=c[m];l=new u;l.geometry=n.extent||n.lattice;l.outFields=e;l.where=h;a.latticeTiling&&n.extent&&
(l.spatialRelationship=u.SPATIAL_REL_CONTAINS);l.returnGeometry=!0;l.timeExtent=f;a._ts&&(l._ts=(new Date).getTime());l.orderByFields=k;l.multipatchOption=a.multipatchOption;l.maxAllowableOffset=a._maxOffset;l.quantizationParameters=a._quantizationParameters;var p=a.advancedQueryCapabilities;p&&p.supportsQueryWithResultType&&(l.resultType="tile");this._pending++;g.push(a._task.execute(l,t.hitch(this,this._drawFeatures,n),t.hitch(this,this._queryErrorHandler,n)))}this._removeOldCells(b);this._endCheck()},
_drawFeatures:function(b,a){b.hasPartialFeatures=!!a.exceededTransferLimit;b.hasUpdateError=!1;this._exceeds=this._exceeds||a.exceededTransferLimit;this._finalizeIO();var c=this.featureLayer,d=this.map.extent,e=b.extent,h=b.row,f=b.col,k=c.objectIdField;a=a.features;var g=this._gridLayer,m=this._cellMap,n=b.latticeID,m=n?m[n]:m[h]&&m[h][f];if(b.resolution==g._resolution&&(n?n===g.getLatticeID(d):g.intersects(e,d)))if(m)c._sortFeatures(a),this._updateCell(m,a);else for(c._sortFeatures(a),b.features=
a,this._addCellToCellMap(b),c=a.length,b=0;b<c;b++)d=a[b],e=d.attributes[k],this._addFeatureIIf(e,d),this._incRefCount(e);else m&&this._removeCell(h,f,n);this._endCheck()},_queryErrorHandler:function(b,a){this._finalizeIO();b.hasPartialFeatures=!0;b.hasUpdateError=!0;this._addCellToCellMap(b);this.featureLayer._errorHandler(a);this._endCheck(!0)},_finalizeIO:function(){this._pending--},_endCheck:function(b){if(0===this._pending){this._processIOQueue();var a=this.featureLayer,c=a._trackManager;c&&
(c.clearTracks(),c.addFeatures(a.graphics),a._ager&&r.forEach(a.graphics,function(b){b._shape&&a._repaint(b)}),c.moveLatestToFront(),c.drawTracks());this.featureLayer._fireUpdateEnd(b&&Error("FeatureLayer: an error occurred while updating the layer"),this._exceeds?{queryLimitExceeded:!0}:null);if(this._exceeds)a.onQueryLimitExceeded()}},_processIOQueue:function(b){this._ioQueue=r.filter(this._ioQueue,function(a){return-1<a.fired?!1:!0});b&&r.forEach(this._ioQueue,this._cancelPendingRequest)},_getCurrentCells:function(b){var a=
[];b=b||this._cellMap;for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];d&&(d.hasOwnProperty("row")||d.hasOwnProperty("latticeID")?a.push(d):"object"===typeof d&&a.push.apply(a,this._getCurrentCells(d)))}return a},_addCellToCellMap:function(b){var a=this._cellMap;if(b.latticeID)a[b.latticeID]=b;else{var c=b.row,d=b.col;a[c]=a[c]||{};a[c][d]=b}},_removeOldCells:function(b){var a=this._cellMap,c=this._gridLayer,d,e;for(d in a)if(a[d]){var h=a[d],f=h.latticeID,k=0,g=0;if(f)k++,f!==c.getLatticeID(b)&&
(this._removeCell(null,null,f),g++);else for(e in h)h[e]&&(k++,c.intersects(h[e].extent,b)||(this._removeCell(d,e),g++));g===k&&delete a[d]}},_updateCell:function(b,a){var c=this.featureLayer,d=c.objectIdField,c=c._selectedFeatures,e,h=a.length;b.features=b.features||[];for(e=0;e<h;e++){var f=a[e],k=f.attributes[d],g=this._addFeatureIIf(k,f);g===f?(this._incRefCount(k),b.features.push(g)):k in c||(g.setGeometry(f.geometry),g.setAttributes(f.attributes))}},_removeCell:function(b,a,c){var d=this._cellMap,
e=this.featureLayer,h=e.objectIdField,f=c?d[c]:d[b]&&d[b][a];if(f&&(c?delete d[c]:delete d[b][a],b=f.features))for(a=0;a<b.length;a++)c=b[a].attributes[h],this._decRefCount(c),c in e._selectedFeatures||this._removeFeatureIIf(c)}});v("extend-esri")&&t.setObject("layers._OnDemandMode",q,w);return q});