// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/infographic/ComparisonTableInfographicParser",["../../../ConversionUtil"],function(b){return{portalToEditor:function(a,c){return{type:a.attributes.type,style:{width:b.ptToPx(a.attributes.width),height:b.ptToPx(a.attributes.height)},sectionJson:c.parsers.getParser("section").parseSection(a.tags[0],c)}}}});