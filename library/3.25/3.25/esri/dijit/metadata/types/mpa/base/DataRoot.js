define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "./MpaDescriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/types/mpa/gmd/dataQuality/DataQuality",
        "esri/dijit/metadata/types/pa/gmd/distribution/Distribution",
        "esri/dijit/metadata/types/mpa/gmd/identification/DataIdentification",
        "esri/dijit/metadata/types/mpa/gmd/metadataEntity/MetadataSection",
        "dojo/text!./templates/DataRoot.html"],
function(declare, lang, Descriptor, Element, Tabs, Quality, Distribution, 
  DataIdentification, MetadataSection, template) {

  var oThisClass = declare(Descriptor, {
    
    templateString: template
    
  });

  return oThisClass;
});