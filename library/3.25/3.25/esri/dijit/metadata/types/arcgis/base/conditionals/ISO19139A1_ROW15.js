// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/ISO19139A1_ROW15","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional".split(" "),function(b,e,n,f,g,h,k,l){b=b(l,{key:"ISO19139A1_ROW15",postCreate:function(){this.inherited(arguments);var c=this;this.own(f.subscribe("gxe/interaction-occurred",function(a){try{if(c.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode){var d=
a.inputWidget.parentXNode.gxePath;"/metadata/spatRepInfo/Georect/chkPtAv"===d?c.emitInteractionOccurred():"/metadata/spatRepInfo/Georect/chkPtDesc"===d&&c.emitInteractionOccurred()}}catch(m){console.error(m)}}))},validateConditionals:function(c){var a=this.newStatus({message:k.conditionals[this.key]}),d=!0,b=this.parentXNode.parentElement;this.focusNode||(this.focusNode=this.parentXNode.inputWidget.focusNode);this.isXNodeOff(this.parentXNode)||this.isXNodeInputEmpty(this.parentXNode)&&this.forActiveXNodes("/metadata/spatRepInfo/Georect/chkPtAv",
b.domNode,function(a){if("True"===a.inputWidget.getInputValue())return d=!1,!0});a.isValid=d;this.track(a,c);return a}});g("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW15",b,h);return b});