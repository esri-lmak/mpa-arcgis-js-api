// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/DocumentParser",["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../supportClasses/DocumentOptions"],function(h,e,d,l,k){return{parseDocument:function(a,f){var c=f.templateJson,b="HTMLextReport"===a.name?a:e.queryJson(a,"HTMLextReport",!0)[0];if(b){var g=b.attributes.orientation||"portrait";
c.documentOptions.pagesize=k.tryGetStandardPageSize(b.attributes.pagesize,g);c.documentOptions.orientation=g;["left","right","top","bottom"].forEach(function(a){c.documentOptions[a]=d.ptToPx(b.attributes[a]||0)});h.mixin(c.documentOptions,d.ptToPxObj(d.parseStyleString(b.attributes.style)));if(a=e.queryJson(a,"def",!0)[0])a.attributes.align&&(c.documentOptions.align=a.attributes.align),a.attributes.lineSpacing&&(c.documentOptions.lineSpacing=d.ptToPx(a.attributes.lineSpacing));f.revisionVersion=b.attributes.revisionVersion?
Number(b.attributes.revisionVersion):-1}}}});