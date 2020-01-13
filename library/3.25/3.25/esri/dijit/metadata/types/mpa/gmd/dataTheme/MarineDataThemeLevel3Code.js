// COPYRIGHT � 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare", 
		"dijit/_TemplatedMixin", 
		"dojo/_base/lang", 
		"dojo/has", 
		"app/gxe/types/mpa/base/Descriptor",
		"../../../../form/InputSelectOne", 
		"../../../../form/Options", 
		"../../../../form/Option", 
		"../../../../form/iso/CodeListAttribute", 
		"../../../../form/iso/CodeListValueAttribute",
		"../../../../form/iso/CodeListElement", 
		"../../../../form/iso/CodeSpaceAttribute", 
		"dojo/text!./templates/MarineDataThemeLevel3Code.html"], 
function (e, _TemplatedMixin, t, o, Descriptor, r, s, a, d, n, m, p, template) {
	
    var oThisClass = e([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});