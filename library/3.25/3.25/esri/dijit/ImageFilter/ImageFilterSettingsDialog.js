// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ImageFilter/templates/ImageFilterSettingsDialog.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriImageFilterSettingsDialog" data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"dialog" title\x3d"${_i18n.formatFields}"\x3e\r\n    \x3ctable class\x3d"esriImageFilterSettingsContainerTable"\x3e\r\n      \x3ctr\x3e \r\n        \x3ctd\x3e\r\n          \x3cfieldset class\x3d"esriImageFilterFieldFormat"\x3e\r\n\r\n            \x3cdiv class\x3d"format formatNumber"\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"_formatNumberSelect" class\x3d"esriImageFilterFieldFormatSelect formatNumber formatter format" data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                \x3coption value\x3d\'0\' selected\x3d"selected"\x3e0 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'1\'\x3e1 ${_i18n.decimalPlace}\x3c/option\x3e\r\n                \x3coption value\x3d\'2\'\x3e2 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'3\'\x3e3 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'4\'\x3e4 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'5\'\x3e5 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'6\'\x3e6 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'7\'\x3e7 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                \x3coption value\x3d\'8\'\x3e8 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n              \x3cbr /\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"formatNumber formatter formatInteger format"\x3e\r\n              \x3clabel class\x3d"checkbox"\x3e\r\n                \x3cinput data-dojo-attach-point\x3d"_formatNumberCheck" data-dojo-type\x3d"dijit.form.CheckBox" /\x3e\x26nbsp;${_i18n.separator}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriImageFilterFormatDate format"\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"_formatDateSelect" class\x3d"esriImageFilterFieldFormatSelect formatter" data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                \x3coption value\x3d"shortDate" selected\x3d"selected"\x3e12/21/1997\x3c/option\x3e\r\n                \x3coption value\x3d"shortDateLE" selected\x3d"selected"\x3e21/12/1997\x3c/option\x3e\r\n                \x3coption value\x3d"longMonthDayYear"\x3eDecember 21, 1997\x3c/option\x3e\r\n                \x3coption value\x3d"dayShortMonthYear"\x3e21 Dec 1997\x3c/option\x3e\r\n                \x3coption value\x3d"longDate"\x3eSunday, December 21, 1997\x3c/option\x3e\r\n                \x3coption value\x3d"longMonthYear"\x3eDecember 1997\x3c/option\x3e\r\n                \x3coption value\x3d"shortMonthYear"\x3eDec 1997\x3c/option\x3e\r\n                \x3coption value\x3d"year"\x3e1997\x3c/option\x3e\r\n              \x3c/select\x3e\r\n              \x3cdiv class\x3d"formatTime hide"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"timeCheckboxLbl" class\x3d"timeCheckbox disabled"\x3e\r\n                  \x3cinput data-dojo-attach-point\x3d"_formatTimeCheck" data-dojo-type\x3d"dijit.form.CheckBox" /\x3e\x26nbsp;${_i18n.showTime}\x3c/label\x3e\r\n                \x3cbr /\x3e\r\n                \x3cselect data-dojo-attach-point\x3d"_formatTimeSelect" class\x3d"esriImageFilterFieldFormatSelect formatter hide" data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                  \x3coption value\x3d"ShortTime" selected\x3d"selected"\x3e6:00 PM\x3c/option\x3e\r\n                  \x3coption value\x3d"LongTime"\x3e6:00:00 PM\x3c/option\x3e\r\n                  \x3coption value\x3d"ShortTime24"\x3e18:00\x3c/option\x3e\r\n                  \x3coption value\x3d"LongTime24"\x3e18:00:00\x3c/option\x3e\r\n                \x3c/select\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/fieldset\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv class\x3d"esriImageFilterConfirm"\x3e\r\n      \x3cbutton class\x3d"jevent primary" data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-event\x3d"onClick:_handleOKButtonClick"\x3e${_i18n.ok}\x3c/button\x3e\r\n      \x3cbutton class\x3d"jevent cancel" data-dojo-type\x3d"dijit/form/Button" data-dojo-attach-event\x3d"onClick:hide"\x3e${_i18n.cancel}\x3c/button\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/ImageFilter/ImageFilterSettingsDialog","dojo/_base/declare dojo/_base/lang dojo/on dojo/string dojo/query dojo/json dojo/dom-class dojo/text!./templates/ImageFilterSettingsDialog.html dojo/i18n!../../nls/jsapi dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../../domUtils".split(" "),function(h,b,q,r,d,g,k,l,f,m,n,p,e){return h([m,n,p],{templateString:l,widgetsInTemplate:!0,_supportsTime:{shortDate:!0,shortDateLE:!0},constructor:function(a,c){h.safeMixin(this,
a);this._i18n=f.widgets.imageFilter.imageFilterSettings;this._i18n=b.mixin(this._i18n,f.common);this._i18n=b.mixin(this._i18n,f.widgets.visibleScaleRangeSlider)},show:function(){this._loadSettings();this.dialog.show()},_getFormatter:function(){var a=this.fieldValue,c=a.type;d(".formatTime").addClass("hide");d(".esriImageFilterFieldFormat, .legendTitle, .format").forEach(function(a){e.hide(a)});if(a=a.format)(a=g.parse(a))&&(c in this.imageFilter.esriDataType.decimal||c in this.imageFilter.esriDataType.integer)?
(c in this.imageFilter.esriDataType.decimal&&this._formatNumberSelect.set("value",a.places,!1),this._formatNumberCheck.set("value",a.digitSeparator,!1),c in this.imageFilter.esriDataType.decimal?d(".esriImageFilterFieldFormat, .legendTitle, .formatNumber").forEach(function(a){e.show(a)}):d(".esriImageFilterFieldFormat, .legendTitle, .formatInteger").forEach(function(a){e.show(a)})):a&&c in this.imageFilter.esriDataType.date?(d(".formatTime").removeClass("hide"),d(".esriImageFilterFieldFormat, .legendTitle, .esriImageFilterFormatDate").forEach(function(a){e.show(a)}),
-1<a.dateFormat.indexOf("LETime")||-1<a.dateFormat.indexOf("LEShortTime")||-1<a.dateFormat.indexOf("LELongTime")?(this._formatDateSelect.set("value","shortDateLE",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",a.dateFormat.split("shortDateLE")[1],!1),this._enableUpdateTime(!0)):-1<a.dateFormat.indexOf("Time")?(this._formatDateSelect.set("value","shortDate",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",a.dateFormat.split("shortDate")[1],
!1),this._enableUpdateTime(!0)):(this._formatDateSelect.set("value",a.dateFormat,!1),this._enableUpdateTime(a.dateFormat in this._supportsTime))):d(".esriImageFilterFieldFormat, .legendTitle").forEach(function(a){e.hide(a)})},_setFormatter:function(a,c){var b=g.parse(this.fieldValue.format);d(".formatTime").addClass("hide");if("dateFormat"===a){c=c||this._formatDateSelect.get("value");var e=c in this._supportsTime,f=e&&this._formatTimeCheck.get("checked")?this._formatTimeSelect.get("value"):"";d(".formatTime").removeClass("hide");
this._enableUpdateTime(e);b[a]=c+f}else b[a]="places"===a?parseInt(c,10):c;this.fieldValue.format=g.stringify(b)},_enableUpdateTime:function(a){this._formatTimeCheck.set("disabled",!a);k[a?"remove":"add"](this.timeCheckboxLbl,"disabled");a||this._formatTimeCheck.set("checked",!1)},_setFormatHandles:function(){this._formatDateSelect.on("change",b.hitch(this,"_setFormatter","dateFormat"));this._formatTimeSelect.on("change",b.hitch(this,"_setFormatter","dateFormat",null));this._formatNumberSelect.on("change",
b.hitch(this,"_setFormatter","places"));this._formatNumberCheck.on("change",b.hitch(this,"_setFormatter","digitSeparator"));this._formatTimeCheck.on("change",b.hitch(this,function(){var a=this._formatTimeCheck.get("checked");k[a?"remove":"add"](this._formatTimeSelect.domNode,"hide");this._setFormatter("dateFormat")}))},_loadSettings:function(){this.imageFilter&&(this.fieldValue=b.clone(this.imageFilter.field),this._getFormatter(),this._setFormatHandles())},_saveSettings:function(){var a={field:b.clone(this.fieldValue)};
this.imageFilter.updateFilterFeatureFormat(a)},_handleOKButtonClick:function(){this._saveSettings();this.dialog.hide()},hide:function(){this.dialog.hide();this.imageFilter.refresh()}})});