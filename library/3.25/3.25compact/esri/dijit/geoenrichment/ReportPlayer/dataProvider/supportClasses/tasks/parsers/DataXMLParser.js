// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/parsers/DataXMLParser",["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../AreaDataUtil","./AttrUtil"],function(b,m,n){var q={parseSchema:function(a){var f={};a.tags.forEach(function(a){"xs:element"===a.name&&a.attributes&&"ReportData"===a.attributes.name&&b.queryJson(a,"xs:element").filter(function(a){return!!a.tags}).forEach(function(a){var h=f[a.attributes.name]={};b.queryJson(a,"xs:element").forEach(function(a){h[a.attributes.name]=
"xs:string"===a.attributes.type?"string":"number"})})});return f}};return{parse:function(a,f){return this._parseDataXmlJson(b.parseXml(a,{saveInnerHTML:!0}),f)},_parseDataXmlJson:function(a,f){function b(a){function b(a){if(a=function(a){var b={},g,e;a.tags.forEach(function(d){var c;c=d.innerHTML?d.innerHTML:d.tags&&d.tags.length&&d.tags[0].text||"";var k=c;"string"===l[a.name][d.name]?c=String(c):(c=Number(c),isNaN(c)&&(c=k));f&&(c=f(d.name,c));b[d.name]||(b[d.name]=c);"AREA_ID"===d.name&&(g=c);
"STORE_ID"===d.name&&(e=c)});if(!g&&!e)return null;var k;!g&&e&&(k=Number(e));g&&void 0===h[g]&&(h[g]=p++);n.cleanUpAttrs(b);return{name:a.name,attrs:b,areaIndex:void 0!==k?k:h[g]}}(a)){var b=e[a.areaIndex]=e[a.areaIndex]||{};b[a.name]?b[a.name].comparisonLevels.push(a.attrs):b[a.name]=m.createCalculator(a.attrs)}}var l;a.tags[0].tags.forEach(function(a){"xs:schema"===a.name?l=q.parseSchema(a):b(a)})}if(!a||!a.tags||2>a.tags.length)return[];var e=[],h={},p=0;a.tags.forEach(function(a){"ReportData"===
a.name&&b(a)});console.log("DataXMLPareser.js \x3d\x3e areaData:");console.log(e);return e}}});