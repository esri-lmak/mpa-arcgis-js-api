// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ImageParser",["../../ConversionUtil","./AlignParser"],function(c,h){var e={getElement:function(f,d){var b=f.attributes,a=d.templateJson.metadata.mapImageInfosHash[b.name],e="mapImage"===f.name,g=e?null:d.processFileName(b.src),a={id:"img",fileName:g,isMapImage:e,circularMask:b.circularMask,scaleToCover:b.scaleToCover,webMapId:a?a.webMapId:b.webMapId,defaultBasemapId:a?a.defaultBasemapId:b.defaultBasemapId,mapScale:a?
a.mapScale:null,calculatorFieldName:a&&a.fieldName,additionalLayerInfos:a&&a.additionalLayerInfos,style:{top:c.ptToPx(b.top)||0,left:c.ptToPx(b.left)||0,width:c.ptToPx(b.width),height:c.ptToPx(b.height),angle:Number(b.angle)||0,opacity:Math.min(1,Number(0===b.opacity?0:b.opacity||1))},isLogoPlaceholder:b.isLogoPlaceholder,dynamicBehavior:b.dynamicBehavior};h.parseAlign(b,a.style);1>d.revisionVersion&&(a.style.angle=c.ptToPx(a.style.angle),a.style.opacity=Math.min(1,c.ptToPx(a.style.opacity)));g&&
d.putImageData(g,b.data);d.postProcessImageJson&&d.postProcessImageJson(f,a);return a},parseMapImageDField:function(c,d){return e.getElement({name:"mapImage",attributes:{name:c}},d)}};return e});