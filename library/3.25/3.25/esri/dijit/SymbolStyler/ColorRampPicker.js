// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/SymbolStyler/templates/ColorRampPicker.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.container}"\x3e\r\n    \x3cdiv class\x3d"${css.preview} ${css.item}"\r\n         data-dojo-attach-point\x3d"dap_previewRamp"\x3e\x3c/div\x3e\r\n    \x3cinput class\x3d"${css.flipper}" type\x3d"button" data-dojo-attach-point\x3d"dap_colorFlipper" /\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.container}"\x3e\r\n    \x3cdiv class\x3d"${css.viewport}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_colorRampPicker"\r\n           class\x3d"${css.list}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.container} ${css.transparencySection}" data-dojo-attach-point\x3d"dap_transparencySection"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"dap_transparencyLabel" class\x3d"${css.label}"\x3e${labels.transparency}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"dap_transparencySlider"\r\n         data-dojo-type\x3d"esri/dijit/HorizontalSlider"\r\n         data-dojo-props\x3d"intermediateChanges: true, minimum: 0, maximum: 1, discreteValues: 100, labels: ${_transparencyLabels}"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("esri/dijit/SymbolStyler/ColorRampPicker","../../kernel ../_EventedWidget ../_Tooltip ./_DelayedUpdate ./colorRampUtil ./schemeUtil dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has dojo/on dojo/query dojo/i18n!../../nls/jsapi dojo/text!./templates/ColorRampPicker.html dojo/NodeList-dom dijit/form/Button esri/dijit/HorizontalSlider".split(" "),function(r,f,t,u,l,c,
v,w,m,g,x,e,n,k,A,y,h,p,q,z){f=x("esri.dijit.SymbolStyler.ColorRampPicker",[f,v,w,u,t],{baseClass:"esriColorRampPicker",templateString:z,labels:q.widgets.symbolEditor,css:{item:"esriItem",label:"esriLabel",selected:"esriSelected",container:"esriContainer",list:"esriList",preview:"esriPreview",flipper:"esriFlipper",viewport:"esriViewport",transparencySection:"esriColorRampPickerTransparencySection"},schemes:null,selected:null,numStops:0,_schemesChanged:!1,_selectedChanged:!1,_numStopsChanged:!1,_orientationChanged:!1,
_transparencyChanged:!1,_commitPropsTrigger:null,_colorRampSurfaces:null,_previewRampSurface:null,_rampsAndSchemes:null,_transparency:null,_transparencyLabels:function(){return"["+[0,50,100].map(function(a){return e.replace(q.widgets.colorPicker.percent,{percent:a})}).map(function(a){return"'"+a+"'"})+"]"}(),constructor:function(a){this._colorRampSurfaces=[];this._commitPropsTrigger=this.createUpdateTrigger(this._commitProperties,this)},_commitProperties:function(){var a=!1,b=!1;if(this._schemesChanged||
this._numStopsChanged)this._numStopsChanged=this._schemesChanged=!1,this._rampsAndSchemes=a=c.getColorRampsWithSchemes(this.schemes,this.numStops),a=!0;if(this._transparencyChanged){this._transparencyChanged=!1;var d=1-this._transparency;g.forEach(this.selected.colors,function(a){a.a=d});b=!0}this._selectedChanged&&(this._selectedChanged=!1,b=!0);this._orientationChanged&&(this._orientationChanged=!1,a=b=!0);this.selected||this.set("selected",this._rampsAndSchemes[0]);b&&this._renderSelected();a&&
this._renderSuggestions()},_renderSuggestions:function(){var a=this._rampsAndSchemes,b=this._colorRampSurfaces,d=this.dap_colorRampPicker;k.empty(d);b.forEach(function(a){a.destroy()});this._colorRampSurfaces=g.map(a,function(a){var b=k.create("div",{className:this.css.item,tabIndex:0},d);return l.create({node:b,colors:a.colors,numClasses:this.numStops,style:"ramp"})},this)},_renderSelected:function(){var a=this.selected.colors,b=this.dap_previewRamp,d=c.is2DScheme(this.selected.scheme);this._previewRampSurface&&
(this._previewRampSurface.destroy(),this._previewRampSurface=null,k.empty(b));n.toggle(b,"esriGrid",d);this._previewRampSurface=l.create({node:b,colors:a,numClasses:this.numStops,height:d?void 0:180,style:d?"grid":"ramp"});this.findTooltip(this.dap_colorFlipper).label=d?this.labels.rotateColorsTooltip:this.labels.flipColorsTooltip},getStyle:function(){return this.get("selected")},_setSchemesAttr:function(a){this._schemesChanged=!0;this._set("schemes",c.cloneScheme(a));this._commitPropsTrigger()},
_getSelectedAttr:function(){var a=this.selected,b={colors:c._createColors(a.colors)};a.scheme&&(b.scheme=c.cloneScheme(a.scheme));return b},_setSelectedAttr:function(a){e.isArray(a)&&(a={colors:a});this._transparency=null===this._transparency?1-a.colors[a.colors.length-1].a:this._transparency;this.dap_transparencySlider.set("value",this._transparency,!1);this._selectedChanged=this._transparencyChanged=!0;this._set("selected",a);this._commitPropsTrigger();this.emit("color-ramp-change",this.get("selected"))},
_setNumStopsAttr:function(a){this._numStopsChanged=!0;this._set("numStops",0<a?a:0);this._commitPropsTrigger()},postCreate:function(){this.inherited(arguments);this._addHandlers();this.createTooltips([{node:this.dap_colorFlipper,label:this.labels.flipColorsTooltip},{node:this.dap_colorRampPicker,label:this.labels.selectRampTooltip}])},_addHandlers:function(){this.own(h(this.dap_colorRampPicker,h.selector("."+this.css.item,m),e.partial(this._rampClickHandler,this)),h(this.dap_colorFlipper,m,e.hitch(this,
function(){this.flipColors()})),h(this.dap_transparencySlider,"change",e.hitch(this,function(){this._transparency=this.dap_transparencySlider.get("value");this._transparencyChanged=!0;this._commitPropsTrigger()})))},_rampClickHandler:function(a){var b=a.css.selected,d="."+a.css.item,c=p("."+a.css.item,a.dap_colorRampPicker).indexOf(this);p(d,a.dap_colorRampPicker).removeClass(b);n.add(this,b);a.set("selected",a._rampsAndSchemes[c])},flipColors:function(){var a=this._rampsAndSchemes,b=this.selected;
g.forEach(a,function(a){c.flipColors(a.scheme)});-1===a.map(function(a){return a.scheme}).indexOf(b.scheme)&&c.flipColors(b.scheme);c.is2DScheme(b.scheme)?b.colors=c.getColorsForClassBreaks(b.scheme,this.numStops):b.colors.reverse();this._schemesChanged=this._orientationChanged=!0;this.set("selected",b);this._commitPropsTrigger()},destroy:function(){this.inherited(arguments);g.forEach(this._colorRampSurfaces,function(a){a.destroy()});this._previewRampSurface&&this._previewRampSurface.destroy()}});
y("extend-esri")&&e.setObject("dijit.SymbolStyler.ColorRampPicker",f,r);return f});