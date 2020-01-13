// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/AnalysisAreaUtil",["esri/geometry/webMercatorUtils"],function(c){return{geometryToLatLong:function(a){var b;switch(a.spatialReference.wkid){case 102100:b=a;break;case 4326:b=c.geographicToWebMercator(a)}if(b)return a=c.xyToLngLat(b.x,b.y),{STORE_LONG:a[0],STORE_LAT:a[1]}}}});