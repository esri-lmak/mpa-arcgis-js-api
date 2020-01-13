// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/AttributeInspector.html":'\x3cdiv class\x3d"esriAttributeInspector"\x3e\r\n    \x3cdiv class\x3d"atiLayerName" dojoAttachPoint\x3d"layerName"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"atiAttributes" dojoAttachPoint\x3d"attributeTable"\x3e\x3c/div\x3e\r\n    \x3cdiv dojoAttachPoint\x3d"attachmentEditor"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"atiEditorTrackingInfo" dojoAttachPoint\x3d"editorTrackingInfoDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"atiButtons" dojoAttachPoint\x3d"editButtons"\x3e\r\n        \x3cbutton  dojoType\x3d"dijit.form.Button" class\x3d"atiButton atiDeleteButton"  dojoAttachPoint\x3d"deleteBtn" dojoAttachEvent\x3d"onClick: onDeleteBtn" showLabel\x3d"true" type\x3d"button"\x3e${NLS_deleteFeature}\x3c/button\x3e\r\n        \x3cdiv class\x3d"atiNavButtons" dojoAttachPoint\x3d"navButtons"\x3e\r\n            \x3cdiv class\x3d"atiNavMessage" dojoAttachPoint\x3d"navMessage"\x3e\x3c/div\x3e\r\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiFirstIcon" dojoAttachPoint\x3d"firstFeatureButton" dojoAttachEvent\x3d"onClick: onFirstFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_first}\x3c/button\x3e\r\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiPrevIcon" dojoAttachPoint\x3d"prevFeatureButton" dojoAttachEvent\x3d"onClick: onPreviousFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_previous}\x3c/button\x3e\r\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiNextIcon" dojoAttachPoint\x3d"nextFeatureButton" dojoAttachEvent\x3d"onClick: onNextFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_next}\x3c/button\x3e\r\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiLastIcon" dojoAttachPoint\x3d"lastFeatureButton" dojoAttachEvent\x3d"onClick: onLastFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_last}\x3c/button\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/AttributeInspector","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/sniff dojo/_base/kernel dojo/has dojo/dom-style dojo/dom-construct ../kernel ../lang ../domUtils ../layers/InheritedDomain ../layers/FeatureLayer dojo/i18n!../nls/jsapi dojo/fx dojox/gfx dijit/_Widget dijit/_Templated dijit/Editor dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/TextColor ./_EventedWidget ./editing/AttachmentEditor ./editing/Util ../tasks/query dijit/form/DateTextBox dijit/form/TextBox dijit/form/NumberTextBox dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/Button dijit/form/SimpleTextarea dijit/form/ValidationTextBox dijit/form/TimeTextBox dijit/Tooltip dojo/data/ItemFileReadStore dojox/date/islamic dojox/date/islamic/Date dojox/date/islamic/locale dojo/text!./templates/AttributeInspector.html".split(" "),
function(z,g,f,r,R,A,B,q,l,C,p,u,v,D,E,S,T,F,G,H,U,V,I,J,t,W,K,X,w,x,L,Y,M,y,N,O,P,Z,aa,ba,Q){var m=z([I,F,G],{declaredClass:"esri.dijit.AttributeInspector",widgetsInTemplate:!0,templateString:Q,onUpdate:function(){},onDelete:function(){},onAttributeChange:function(){},onNext:function(){},onReset:function(){},onCancel:function(){},_navMessage:"( ${idx} ${of} ${numFeatures} )",_currentAttributeFieldName:null,_aiConnects:[],_selection:[],_toolTips:[],_numFeatures:0,_featureIdx:0,_currentLInfo:null,
_currentFeature:null,_rollbackInfo:null,_eventMap:{update:!0,"delete":["feature"],"attribute-change":["feature","fieldName","fieldValue"],next:["feature"],reset:!0,cancel:!0},_defaultRichTextPlugins:"bold italic underline foreColor hiliteColor | justifyLeft justifyCenter justifyRight justifyFull | insertOrderedList insertUnorderedList indent outdent | createLink".split(" "),css:{label:"atiLabel",field:"atiField",textArea:"atiTextAreaField",richText:"atiRichTextField",attachmentEditor:"atiAttachmentEditor",
red:"atiRequiredField"},constructor:function(a,b){g.mixin(this,E.widgets.attributeInspector);a=a||{};a.featureLayer||a.layerInfos||console.error("esri.AttributeInspector: please provide correct parameter in the constructor");this._datePackage=this._getDatePackage(a);this._layerInfos=a.layerInfos||[{featureLayer:a.featureLayer,options:a.options||[]}];this._layerInfos=f.filter(this._layerInfos,function(a){return!a.disableAttributeUpdate});this._hideNavButtons=a.hideNavButtons||!1},postCreate:function(){if(f.every(this._layerInfos,
function(a){return a.featureLayer.loaded}))this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature();else{var a=this._layerInfos.length;f.forEach(this._layerInfos,function(b){b=b.featureLayer;if(b.loaded)a--;else var c=r.connect(b,"onLoad",this,function(b){r.disconnect(c);c=null;a--;a||(this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature())})},this)}},destroy:function(){this._destroyAttributeTable();f.forEach(this._aiConnects,r.disconnect);delete this._aiConnects;
this._attachmentEditor&&(this._attachmentEditor.destroy(),delete this._attachmentEditor);delete this._layerInfos;this._selection=this._currentFeature=this._currentLInfo=this._attributes=this._layerInfos=null;this.inherited(arguments)},refresh:function(){this._updateSelection()},first:function(){this.onFirstFeature()},last:function(){this.onLastFeature()},next:function(){this.onNextFeature()},previous:function(){this.onPreviousFeature()},showFeature:function(a,b){b&&(this._createOnlyFirstTime=!0);
this._updateSelection([a],b);this._updateUI()},onLayerSelectionChange:function(a,b,c){this._createOnlyFirstTime=!1;this._featureIdx=c===D.SELECTION_NEW?0:this._featureIdx;this._updateSelection();this._updateUI()},onLayerSelectionClear:function(){!this._selection||0>=this._selection.length||(this._featureIdx=this._numFeatures=0,this._selection=[],this._currentLInfo=this._currentFeature=null,this._updateUI())},onLayerUpdateEnd:function(a,b,c,d){},onLayerError:function(a,b,c,d){},onLayerEditsError:function(a,
b,c,d){},onLayerEditsComplete:function(a,b,c,d){d=d||[];if(d.length){var e=this._selection,k=a.featureLayer.objectIdField;f.forEach(d,g.hitch(this,function(a){f.some(e,g.hitch(this,function(b,c){if(b.attributes[k]!==a.objectId)return!1;this._selection.splice(c,1);return!0}))}))}b=b||[];b.length&&(this._selection=t.findFeatures(b,a.featureLayer),this._featureIdx=0);d=this._numFeatures=(this._selection=t.sortFeaturesById(this._layerInfos,this._selection))?this._selection.length:0;if(b.length){if(b=
d?this._selection[this._featureIdx]:null)d=b.getLayer().getEditCapabilities(),d.canCreate&&!d.canUpdate||this._showFeature(b);this._updateUI()}c=c||[];if(c.length){var n=this._rollbackInfo;f.forEach(c,function(b){var d=t.findFeatures(c,a.featureLayer)[0];if(!b.success&&d.attributes[a.featureLayer.objectIdField]===b.objectId&&n){var e=n.field;b=n.graphic.attributes[e.name];var h=f.filter(this._currentLInfo.fieldInfos,function(a){return a.fieldName===e.name},this)[0].dijit;d.attributes[e.name]=b;"esriFieldTypeDate"===
e.type&&(b=new Date(b));this._setValue(h,b)}},this)}this._rollbackInfo=null},onFieldValueChange:function(a,b){var c=a.field,d=a.dijit,e=this._currentFeature,k=this._currentLInfo;a=c.name;var n;if(""===d.displayedValue||"dijit.form.ValidationTextBox"!==d.declaredClass||d.isValid())if(""!==d.displayedValue&&d.displayedValue!==b&&d.isValid&&!d.isValid())this._setValue(d,e.attributes[c.name]);else{if(n=!("esriFieldTypeInteger"!==c.type&&"esriFieldTypeSmallInteger"!==c.type&&"esriFieldTypeSingle"!==c.type&&
"esriFieldTypeDouble"!==c.type),b=""===b&&n||"undefined"===typeof b?null:b,n&&null!==b&&(b=Number(b)),"esriFieldTypeDate"===c.type&&(d instanceof Array?(b=d[0].getValue(),d=d[1].getValue(),b=b&&d?new Date(b.getFullYear(),b.getMonth(),b.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()):b||d||null):(b=d.getValue(),c.domain&&(b=Number(b))),b=b&&b.getTime?b.getTime():b&&b.toGregorian?b.toGregorian().getTime():b),this._currentFeature.attributes[c.name]!==b){if(a===k.typeIdField){var h=
this._findFirst(k.types,"id",b);f.forEach(k.fieldInfos,function(a){(c=a.field)&&c.name!==k.typeIdField&&(a=a.dijit,this._setFieldDomain(a,h,c)&&a&&(this._setValue(a,e.attributes[c.name]+""),!1===a.isValid()&&this._setValue(a,null)))},this)}this.onAttributeChange(e,a,b)}}else this._setValue(d,e.attributes[c.name])},onDeleteBtn:function(a){this._deleteFeature()},onNextFeature:function(a){this._onNextFeature(1)},onPreviousFeature:function(a){this._onNextFeature(-1)},onFirstFeature:function(a){this._onNextFeature(-1*
this._featureIdx)},onLastFeature:function(a){this._onNextFeature(this._numFeatures-1-this._featureIdx)},_initLayerInfos:function(){var a=this._layerInfos;this._editorTrackingInfos={};f.forEach(a,this._initLayerInfo,this)},_initLayerInfo:function(a){var b=a.featureLayer,c,d;this._userIds={};d=b.id;b.credential&&(this._userIds[d]=b.credential.userId);a.userId&&(this._userIds[d]=a.userId);this._connect(b,"onSelectionComplete",g.hitch(this,"onLayerSelectionChange",a));this._connect(b,"onSelectionClear",
g.hitch(this,"onLayerSelectionClear",a));this._connect(b,"onEditsComplete",g.hitch(this,"onLayerEditsComplete",a));this._connect(b,"error",g.hitch(this,"onLayerError",a));this._connect(b,"onUpdateEnd",g.hitch(this,"onLayerUpdateEnd",a));a.showAttachments=b.hasAttachments?p.isDefined(a.showAttachments)?a.showAttachments:!0:!1;a.hideFields=a.hideFields||[];a.htmlFields=a.htmlFields||[];a.isEditable=b.isEditable()?p.isDefined(a.isEditable)?a.isEditable:!0:!1;a.typeIdField=b.typeIdField;a.layerId=b.id;
a.types=b.types;b.globalIdField&&((c=this._findFirst(a.fieldInfos,"fieldName",b.globalIdField))||a.showGlobalID||a.hideFields.push(b.globalIdField));(d=this._findFirst(a.fieldInfos,"fieldName",b.objectIdField))||a.showObjectID||a.hideFields.push(b.objectIdField);var e=this._getFields(a.featureLayer);if(e){var k=a.fieldInfos||[],k=f.map(k,function(a){return g.mixin({},a)});k.length?a.fieldInfos=f.filter(f.map(k,g.hitch(this,function(b){var c=b.stringFieldOption||(this._isInFields(b.fieldName,a.htmlFields)?
m.STRING_FIELD_OPTION_RICHTEXT:m.STRING_FIELD_OPTION_TEXTBOX);return g.mixin(b,{field:this._findFirst(e,"name",b.fieldName),stringFieldOption:c})})),"return item.field;"):(e=f.filter(e,g.hitch(this,function(b){return!this._isInFields(b.name,a.hideFields)})),a.fieldInfos=f.map(e,g.hitch(this,function(b){var c=this._isInFields(b.name,a.htmlFields)?m.STRING_FIELD_OPTION_RICHTEXT:m.STRING_FIELD_OPTION_TEXTBOX;return{fieldName:b.name,field:b,stringFieldOption:c}})));a.showGlobalID&&!c&&k.push(this._findFirst(e,
"name",b.globalIdField));a.showObjectID&&!d&&k.push(this._findFirst(e,"name",b.objectIdField));c=[];b.editFieldsInfo&&(b.editFieldsInfo.creatorField&&c.push(b.editFieldsInfo.creatorField),b.editFieldsInfo.creationDateField&&c.push(b.editFieldsInfo.creationDateField),b.editFieldsInfo.editorField&&c.push(b.editFieldsInfo.editorField),b.editFieldsInfo.editDateField&&c.push(b.editFieldsInfo.editDateField));this._editorTrackingInfos[b.id]=c}},_createAttachmentEditor:function(){this._attachmentEditor=null;
var a=f.filter(this._layerInfos,function(a){return a.showAttachments});a&&a.length&&(this._attachmentEditor=new J({"class":this.css.attachmentEditor},this.attachmentEditor),this._attachmentEditor.startup())},_setCurrentLInfo:function(a){var b=this._currentLInfo?this._currentLInfo.featureLayer:null,c=a.featureLayer;if(b&&b.id===c.id&&!b.ownershipBasedAccessControlForFeatures&&(b=c.getEditCapabilities(),!b.canCreate||b.canUpdate))return;this._currentLInfo=a;this._createTable()},_updateSelection:function(a,
b){this._selection=a||[];f.forEach(this._layerInfos,this._getSelection,this);this._selection=t.sortFeaturesById(this._layerInfos,this._selection);this._numFeatures=this._selection.length;this._showFeature(this._numFeatures?this._selection[this._featureIdx]:null,b)},_getSelection:function(a){a=a.featureLayer.getSelectedFeatures();this._selection=this._selection.concat(a)},_updateUI:function(){var a=this._numFeatures,b=this._currentLInfo;this.layerName.innerHTML=b&&0!==a?b.featureLayer?b.featureLayer.name:
"":this.NLS_noFeaturesSelected;q.set(this.attributeTable,"display",a?"":"none");q.set(this.editButtons,"display",a?"":"none");q.set(this.navButtons,"display",!this._hideNavButtons&&1<a?"":"none");this.navMessage.innerHTML=p.substitute({idx:this._featureIdx+1,of:this.NLS_of,numFeatures:this._numFeatures},this._navMessage);this._attachmentEditor&&q.set(this._attachmentEditor.domNode,"display",b&&b.showAttachments&&a?"":"none");q.set(this.deleteBtn.domNode,"display",b&&!1===b.showDeleteButton||!this._canDelete?
"none":"");this.domNode.parentNode&&0<this.domNode.parentNode.scrollTop&&(this.domNode.parentNode.scrollTop=0)},_onNextFeature:function(a){this._featureIdx+=a;0>this._featureIdx?this._featureIdx=this._numFeatures-1:this._featureIdx>=this._numFeatures&&(this._featureIdx=0);a=this._selection.length?this._selection[this._featureIdx]:null;this._showFeature(a);this._updateUI();this.onNext(a)},_deleteFeature:function(){this.onDelete(this._currentFeature)},_showFeature:function(a,b){if(a){this._currentFeature=
a;b=b?b:a.getLayer();var c=b.getEditCapabilities({feature:a,userId:this._userIds[b.id]});this._canUpdate=c.canUpdate;this._canDelete=c.canDelete;if(c=this._getLInfoFromFeatureLayer(b)){this._setCurrentLInfo(c);var d=a.attributes,e=this._findFirst(c.types,"id",d[c.typeIdField]),k=null;f.forEach(c.fieldInfos,function(a){k=a.field;var b=[];a.dijit&&1<a.dijit.length?f.forEach(a.dijit,function(a){b.push(a)}):b.push(a.dijit);f.forEach(b,g.hitch(this,function(a){if(a){var b=this._setFieldDomain(a,e,k),c=
d[k.name],c=c&&b&&b.codedValues&&b.codedValues.length?b.codedValues[c]?b.codedValues[c].name:c:c;p.isDefined(c)||(c="");"dijit.form.DateTextBox"===a.declaredClass||"dijit.form.TimeTextBox"===a.declaredClass?c=""===c?null:new Date(c):"dijit.form.FilteringSelect"===a.declaredClass&&(a._lastValueReported=null,c=d[k.name]+"");try{this._setValue(a,c),"dijit.form.FilteringSelect"===a.declaredClass&&!1===a.isValid()&&this._setValue(a,null)}catch(ca){a.set("displayedValue",this.NLS_errorInvalid,!1)}}}))},
this);this._attachmentEditor&&c.showAttachments&&this._attachmentEditor.showAttachments(this._currentFeature,b);(a=b.getEditSummary(a))?(this.editorTrackingInfoDiv.innerHTML=a,u.show(this.editorTrackingInfoDiv)):u.hide(this.editorTrackingInfoDiv)}}},_setFieldDomain:function(a,b,c){if(!a)return null;var d=c.domain;b&&b.domains&&b.domains[c.name]&&!1===b.domains[c.name]instanceof v&&(d=b.domains[c.name]);if(!d)return null;d.codedValues&&0<d.codedValues.length?(a.set("store",this._toStore(f.map(d.codedValues,
function(a){return{id:a.code+="",name:a.name}}))),this._setValue(a,d.codedValues[0].code)):(a.constraints={min:p.isDefined(d.minValue)?d.minValue:Number.MIN_VALUE,max:p.isDefined(d.maxValue)?d.maxValue:Number.MAX_VALUE},this._setValue(a,a.constraints.min));return d},_setValue:function(a,b){a.set&&(a._onChangeActive=!1,a.set("value",b,!0),a._onChangeActive=!0)},_getFields:function(a){var b=a._getOutFields();if(!b)return null;a=a.fields;return"*"==b?a:f.filter(f.map(b,g.hitch(this,"_findFirst",a,"name")),
p.isDefined)},_isInFields:function(a,b){return a&&(b||b.length)?f.some(b,function(b){return b.toLowerCase()===a.toLowerCase()}):!1},_isFieldNullable:function(a,b){return!(!1===a.nullable||b.field&&!1===b.field.nullable)},_isFieldRequired:function(a,b){return!1!==a.editable&&!1!==b.isEditable&&!this._isFieldNullable(a,b)},_findFirst:function(a,b,c){return(a=f.filter(a,function(a){return a.hasOwnProperty(b)&&a[b]===c}))&&a.length?a[0]:null},_getLInfoFromFeatureLayer:function(a){return this._findFirst(this._layerInfos,
"layerId",a?a.id:null)},_createTable:function(){this._destroyAttributeTable();this.attributeTable.innerHTML="";this._attributes=l.create("table",{cellspacing:"0",cellpadding:"0"},this.attributeTable);var a=l.create("tbody",null,this._attributes),b=this._currentLInfo,c=this._findFirst(b.types,"id",this._currentFeature.attributes[b.typeIdField]);f.forEach(b.fieldInfos,g.hitch(this,"_createField",c,a),this);this._createOnlyFirstTime=!1},_createField:function(a,b,c){var d=this._currentLInfo,e=c.field;
if(!this._isInFields(e.name,d.hideFields)&&!this._isInFields(e.name,this._editorTrackingInfos[d.featureLayer.id])){var f=!1,n,h,m;b=l.create("tr",null,b);n=l.create("td",{innerHTML:c.label||e.alias||e.name,"class":this.css.label,"data-fieldname":e.name},b);this._isFieldRequired(e,c)&&l.create("span",{"class":this.css.red,innerHTML:" *"},n);b=l.create("td",null,b);if(c.customField)l.place(c.customField.domNode||c.customField,l.create("div",null,b),"first"),h=c.customField;else if(!1===d.isEditable||
!1===e.editable||!1===c.isEditable||"esriFieldTypeOID"===e.type||"esriFieldTypeGlobalID"===e.type||!this._canUpdate&&!this._createOnlyFirstTime)f=!0;d=d.typeIdField&&e.name.toLowerCase()==d.typeIdField.toLowerCase();n=!!this._getDomainForField(e,a);!h&&d?h=this._createTypeField(e,c,b):!h&&n&&(h=this._createDomainField(e,c,a,b));if(!h)switch(e.type){case "esriFieldTypeString":h=this._createStringField(e,c,b);break;case "esriFieldTypeDate":h=this._createDateField(e,c,b);c.format&&c.format.time&&(m=
this._createTimeField(e,c,b));break;case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":h=this._createIntField(e,c,b);break;case "esriFieldTypeSingle":case "esriFieldTypeDouble":h=this._createFltField(e,c,b);break;default:h=this._createStringField(e,c,b)}c.tooltip&&c.tooltip.length&&this._toolTips.push(new O({connectId:[h.id],label:c.tooltip}));h.onChange=g.hitch(this,"onFieldValueChange",c);h.set("disabled",f);m?(c.dijit=[h,m],m.onChange=g.hitch(this,"onFieldValueChange",c),m.set("disabled",
f)):c.dijit=h}},_createTypeField:function(a,b,c){c=l.create("div",null,c);var d=a.domain;return d&&"range"===d.type&&d.minValue===d.maxValue?new y({"class":this.css.field,trim:!0,maxLength:a.length,name:a.alias||a.name,required:this._isFieldRequired(a,b)},c):new x({"class":this.css.field,name:a.alias||a.name,required:this._isFieldRequired(a,b),store:this._toStore(f.map(this._currentLInfo.types,function(a){return{id:a.id,name:a.name}})),searchAttr:"name"},c)},_getDomainForField:function(a,b){var c=
a.domain;(a=a.name)&&b&&b.domains&&b.domains[a]&&!1===b.domains[a]instanceof v&&(c=b.domains[a]);return c||null},_createDomainField:function(a,b,c,d){c=this._getDomainForField(a,c);d=l.create("div",null,d);return c.codedValues?new x({"class":this.css.field,name:a.alias||a.name,searchAttr:"name",required:this._isFieldRequired(a,b)},d):new L({"class":this.css.field},d)},_createStringField:function(a,b,c){c=l.create("div",null,c);var d={trim:!0,maxLength:a.length,required:this._isFieldRequired(a,b)};
if(b.stringFieldOption===m.STRING_FIELD_OPTION_TEXTAREA)return d["class"]=this.css.field+" "+this.css.textArea,new M(d,c);if(b.stringFieldOption===m.STRING_FIELD_OPTION_RICHTEXT)return d["class"]=this.css.field+" "+this.css.richText,d.height="100%",d.width="100%",d.plugins=b.richTextPlugins||this._defaultRichTextPlugins,c=new H(d,c),c.startup(),c;var e=this;d.validator=function(c,d){this._maskValidSubsetError=!1;this._hasBeenBlurred=!0;return e._isFieldNullable(a,b)||!(""===c||null===c)};return new y(d,
c)},_createTimeField:function(a,b,c){c=l.create("div",null,c);a={"class":this.css.field,trim:!0,required:this._isFieldRequired(a,b),constraints:{formatLength:"medium"}};this._datePackage&&(a.datePackage=this._datePackage);return new N(a,c)},_createDateField:function(a,b,c){c=l.create("div",null,c);a={"class":this.css.field,trim:!0,required:this._isFieldRequired(a,b)};this._datePackage&&(a.datePackage=this._datePackage);return new K(a,c)},_createIntField:function(a,b,c){c=l.create("div",null,c);return new w({"class":this.css.field,
constraints:"esriFieldTypeSmallInteger"===a.type?{min:-32768,max:32767,places:0}:{places:0},trim:!0,invalidMessage:this.NLS_validationInt,required:this._isFieldRequired(a,b)},c)},_createFltField:function(a,b,c){c=l.create("div",null,c);return new w({"class":this.css.field,constraints:{max:Infinity,min:-Infinity,places:"0,20"},trim:!0,invalidMessage:this.NLS_validationFlt,required:this._isFieldRequired(a,b)},c)},_toStore:function(a){return new P({data:{identifier:"id",label:"name",items:a}})},_connect:function(a,
b,c){this._aiConnects.push(r.connect(a,b,c))},_getDatePackage:function(a){return null===a.datePackage?null:a.datePackage?a.datePackage:"ar"===A.locale?"dojox.date.islamic":null},_destroyAttributeTable:function(){f.forEach(this._layerInfos,function(a){f.forEach(a.fieldInfos,function(a){var b=a.dijit;if(b){b._onChangeHandle=null;if(a.customField)return;b instanceof Array?f.forEach(b,g.hitch(this,function(a){a.destroyRecursive?a.destroyRecursive():a.destroy&&a.destroy();a._onChangeHandle=null})):b.destroyRecursive?
b.destroyRecursive():b.destroy&&b.destroy()}a.dijit=null},this)},this);f.forEach(this._toolTips,function(a){a.destroy()});this._toolTips=[];this._attributes&&l.destroy(this._attributes)}});g.mixin(m,{STRING_FIELD_OPTION_RICHTEXT:"richtext",STRING_FIELD_OPTION_TEXTAREA:"textarea",STRING_FIELD_OPTION_TEXTBOX:"textbox"});B("extend-esri")&&g.setObject("dijit.AttributeInspector",m,C);return m});