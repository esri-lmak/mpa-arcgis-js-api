// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreateHTMLCommand","dojo/_base/declare dojo/_base/lang dojo/promise/all dojo/when dijit/Dialog ./createHTML/HTMLToSVGBuilder ./createHTML/HTMLStringBuilder ./createHTML/CommandMode esri/dijit/geoenrichment/utils/FileUtil ./mapToImage/MapToImageUtil ../../PlayerCommands ./supportClasses/ProgressSteps dojo/i18n!esri/nls/jsapi".split(" "),function(u,z,v,c,n,t,w,p,x,l,y,g,h){h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;return u(null,
{id:y.HTML,errorMessage:h.exportInfographicError,exportMapErrorMessage:h.exportMapError,_player:null,_saveFiles:!0,_stopPrintableContainer:!0,_printableContainer:null,_mode:p.SVG_IN_HTML,_requestSizeLimit:0,_mergePageIndexes:!0,_currentProgressBack:null,execute:function(q,a,h){function f(){return c(k&&k.undo(),function(){return c(d._stopPrintableContainer&&b&&b.stop(),function(a){d._stepFinished(g.UNSET_LAYOUT);return a})})}var d=this;this._player=q;var b,k;this._currentProgressBack=h;var m={svgInHtmlString:null,
svgStrings:null,documentOptions:null,additionalFiles:null};return c(function(){function e(){return v([b.getFitParams(),b.getHeaderFooterParams(),b.getDocumentOptions()]).then(function(a){return{fitParams:a[0],headerFooterParams:a[1],documentOptions:a[2]}})}b=a.printableContainer;d._printableContainer=b;l.enableCaching();return c(l.replaceMapWithImage(q,{saveImagesAsDataUrl:!0,printMapTaskUrl:a.printMapTaskUrl,allAreas:b.needExportAllAreas()}),function(a){k=a;l.clearCaching();d._stepFinished(g.REPLACE_MAPS);
return e()})}(),function(e){if(b)return c(w.buildHtmlStringForPlayer(b,e.headerFooterParams,e.documentOptions,d._mergePageIndexes),function(b){function f(b,e){if(!a.returnAsHtmlText&&!a.returnAsSvgText&&d._saveFiles&&b)return d._confirmSaveFile(e,function(){return x.saveTextFile(b,e)})}function h(){var a=l+".svg";return c(t.htmlToSvg(b.domString,e.fitParams,d._requestSizeLimit,n),function(b){m.svgStrings=b;return f(b[0],a)})}function k(){var a=l+".html";return c(t.htmlToSvgInHtml(b.domString,l,e.fitParams,
d._requestSizeLimit,n),function(b){m.svgInHtmlString=b;return f(b,a)})}if(b.domString){d._stepFinished(g.PREPARE_DOM);var l=q.getReportTitle(),n=function(a,b){d._stepFinished(g.RENDER_PAGE,a+1,b)};m.documentOptions=e.documentOptions;var r=d._mode;a.returnAsHtmlText&&(r=p.SVG_IN_HTML);a.returnAsSvgText&&(r=p.SVG);switch(r){case p.SVG:return h(e);case p.SVG_IN_HTML:return k(e)}}})}).otherwise(function(b){if(!a.skipErrorNotification)return d._handleError(b)}).always(function(){return c(f(),function(){return k&&
k.errors.length?(!a.skipErrorNotification&&d._handleExportMapError(k.errors[0]),null):a.returnAsHtmlText?m.svgInHtmlString:a.returnAsSvgText?m.svgStrings:m})})},_stepFinished:function(q,a,c){if(this._currentProgressBack){var f=0;switch(q){case g.REPLACE_MAPS:f=10;break;case g.PREPARE_DOM:f=20;break;case g.RENDER_PAGE:f=20+70*a/c;break;case g.UNSET_LAYOUT:f=100}this._currentProgressBack(f/100)}},_handleError:function(c){console.log(c);(new n({title:"Error",content:this.errorMessage})).show()},_handleExportMapError:function(c){console.log(c);
(new n({title:"Error",content:this.exportMapErrorMessage})).show()},_confirmSaveFile:function(c,a,g){return a()}})});