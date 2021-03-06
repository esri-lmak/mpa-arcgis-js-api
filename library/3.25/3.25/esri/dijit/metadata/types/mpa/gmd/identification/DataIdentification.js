define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
		"dojo/has", 
		"esri/dijit/metadata/types/mpa/base/MpaDescriptor", 
		"esri/dijit/metadata/form/Tabs", 
		"esri/dijit/metadata/form/iso/AbstractObject", 
		"esri/dijit/metadata/form/iso/CodeListReference", 
		"esri/dijit/metadata/form/iso/ObjectReference", 
		"esri/dijit/metadata/types/mpa/gmd/citation/ResourceCitation",
		"esri/dijit/metadata/types/mpa/gmd/identification/ResourceDescription", 
		"esri/dijit/metadata/types/iso/gmd/citation/ResourceContact", 
		"esri/dijit/metadata/types/iso/gmd/identification/ResourceThumbnail", 
		"esri/dijit/metadata/types/inspire/gmd/identification/DataResourceKeywords", 
		"esri/dijit/metadata/types/mpa/gmd/constraints/ResourceConstraints", 
		"./DataResourceTab", 
		"dojo/text!./templates/DataIdentification.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, 
	AbstractObject, CodeListReference, ObjectReference, ResourceCitation, ResourceDescription, ResourceContact, 
	ResourceThumbnail, DataResourceKeywords, ResourceConstraints, DataResourceTab, template) {
	
    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});