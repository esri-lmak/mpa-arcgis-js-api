// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/inspire/gmd/identification/templates/GemetConceptKeywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:descriptiveKeywords\',minOccurs:0,\r\n      label:\'${i18nInspire.keywordSections.gemetConcept}\',\r\n      matchTopNode: [\r\n        {\r\n           qPath:\'gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:title/gco:CharacterString\',\r\n          qValue:\'GEMET - Concepts, version 2.4\',\r\n          qMode:\'must\'\r\n        }  \r\n      ]"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:MD_Keywords\',minOccurs:0"\x3e\r\n       \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'gmd:keyword\',minOccurs:1,maxOccurs:\'unbounded\',useTabs:false,\r\n          label:\'${i18nIso.gemet.concept.gemetConceptKeyword}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n          data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/gemet/GemetConceptTool"\r\n              data-dojo-props\x3d"label:\'${i18nIso.gemet.concept.tool}\'"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e  \r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- \r\n      \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:type\',\r\n          fixed:true,label:\'Do we need the MD_KeywordTypeCode?\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:MD_KeywordTypeCode\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListAttribute"\r\n            data-dojo-props\x3d"value:\'${codeListPrefix}MD_KeywordTypeCode\'"\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListValueAttribute" \r\n            data-dojo-props\x3d"value:\'theme\'"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e    \r\n      \x3c/div\x3e\r\n       --\x3e\r\n      \r\n      \x3c!-- GEMET - Concepts, version 2.4 --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:thesaurusName\',\r\n          fixed:true,hide:true"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Citation\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:title\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:CharacterString\',\r\n              value:\'GEMET - Concepts, version 2.4\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Date\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:Date\',\r\n                  value:\'2010-01-13\'"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:dateType\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:CI_DateTypeCode\'"\x3e\r\n                  \x3c!-- \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e  --\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n                    data-dojo-props\x3d"value:\'${inspireCodeListPrefix}CI_DateTypeCode\'"\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\r\n                    data-dojo-props\x3d"value:\'publication\'"\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/div\x3e    \r\n              \x3c/div\x3e            \r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/inspire/gmd/identification/GemetConceptKeywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputText ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../../../form/iso/gemet/GemetConceptTool dojo/text!./templates/GemetConceptKeywords.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,t,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.inspire.gmd.identification.GemetConceptKeywords",a,f);return a});