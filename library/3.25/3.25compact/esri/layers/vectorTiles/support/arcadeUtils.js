// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/support/arcadeUtils",["require","exports","esri/renderers/arcadeUtils","esri/arcade/Dictionary"],function(e,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.createSyntaxTree=function(a){return c.createSyntaxTree(a)};b.createFunction=function(a,b){return c.createFunction(a,b)};b.createExecContext=function(a,b){return c.createExecContext(a,b)};b.executeFunction=function(a,b){return c.executeFunction(a,b)};b.extractFieldNames=function(a){return c.extractFieldNames(a)};
b.getViewInfo=function(a){if(a&&a.viewingMode&&null!=a.scale&&a.spatialReference)return{view:new d({viewingMode:a.viewingMode,scale:a.scale}),sr:a.spatialReference}}});