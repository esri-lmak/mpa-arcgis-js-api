// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/valueFieldUtils/ValueFieldTextTrimmer",["dojo/dom-style"],function(d){var c={_IS_RICH_TEXT_RE:/<\w/,checkValueLabelOverflow:function(a,b){a.valueLabel&&void 0!==b&&c._applyNewText(a.valueLabel,b);a.valueLabel.__hasTrimmedText=!1;if(a.trimTextIfOverflows&&a.valueLabel&&a.valueLabel.innerHTML&&!c._IS_RICH_TEXT_RE.test(a.valueLabel.innerHTML)){b=a.valueLabel.__untrimmedText||a.valueLabel.innerHTML;b!==a.valueLabel.innerHTML&&(a.valueLabel.innerHTML=
b);a.valueLabel.__untrimmedText=b;b=b.trim();for(var e=a.domNode.clientHeight,f=d.toPixelValue(a.domNode,d.get(a.domNode,"fontSize"));!(a.valueLabel.clientHeight<1.5*f||-1===a.valueLabel.innerHTML.lastIndexOf(" ")||a.valueLabel.clientHeight<=e);)b=b.substr(0,b.lastIndexOf(" ")).trim(),a.valueLabel.innerHTML=b+"...",a.valueLabel.__hasTrimmedText=!0}},_applyNewText:function(a,b){a.innerHTML!==b&&(a.innerHTML=b);delete a.__untrimmedText},getFullText:function(a){return a.valueLabel&&(a.valueLabel.__untrimmedText||
a.valueLabel.innerHTML)},hasOverflowText:function(a){return a.valueLabel&&a.valueLabel.__hasTrimmedText||a.valueLabel.clientHeight>a.domNode.clientHeight}};return c});