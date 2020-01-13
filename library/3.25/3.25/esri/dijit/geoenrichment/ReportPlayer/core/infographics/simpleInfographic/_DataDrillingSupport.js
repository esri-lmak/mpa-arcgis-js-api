// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/simpleInfographic/_DataDrillingSupport","dojo/_base/declare dojo/on dojo/when dojo/dom-class dojo/dom-construct dojo/dom-style dojo/query ./SimpleInfographicViewModes ../../grid/coreUtils/GridDataUtil ../dataDrilling/DataDrillingLibrary ../dataDrilling/DataDrillingAnimationTypes ../utils/InfographicJsonUtil esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/TooltipUtil esri/dijit/geoenrichment/utils/WaitingUtil ../../sections/SectionTypes ../../supportClasses/ViewModes ./DataDrillingBackgroundUtil ./DataDrillingExportUtil dojo/i18n!esri/nls/jsapi".split(" "),
function(C,l,m,t,n,w,D,x,E,y,u,z,q,A,v,F,G,H,I,r,p){p=p.geoenrichment.dijit.ReportPlayer.Infographics;var J={w:700,h:600};return C(null,{_drillingSections:null,_drillingSectionsButtons:null,postCreate:function(){var a=this;this.inherited(arguments);l(this.backToMainViewButton,"click",function(){a._setViewMode(x.VIEW_MAIN,!0)});this.viewModel.dynamicReportInfo&&(r.canPrintDataDrilling(this)&&(v.setTooltipToNode(this.printButton,p.printInfographic),t.add(this.dataDrillingViewDiv,"canPrintDataDrilling"),
l(this.printButton,"click",function(){r.printDataDrilling(a)})),r.canExportDataDrilling(this)&&(v.setTooltipToNode(this.exportButton,p.exportInfographic),t.add(this.dataDrillingViewDiv,"canExportDataDrilling"),l(this.exportButton,"click",function(){r.exportDataDrilling(a)})))},_getCountryID:function(){return this.viewModel.dynamicReportInfo.infographicOptions.countryID},_addDataDrillingHandlers:function(a,b){var f=this,g=E.getFieldInfo(b.getFieldCells()[0]),h=(b=z.getDataDrilling(this._currentInfographicJson,
g.templateName))&&b.sectionJson?b:null,d=(b=b&&b.isStandard&&y.getDrillingOptions(this._getCountryID(),b.standardId||g))&&b[0];if(h||d)a.getTables().forEach(function(a){a.getFieldCells().forEach(function(a){v.setTooltipToNode(a.domNode,null)})}),a.own(l.once(this.domNode,"mouseover",function(){var c=n.create("div",{"class":"simpleInfographic_drillDataButton"},a.domNode);n.create("div",{"class":"dijitInline simpleInfographic_drillDataButtonIcon esriGESpaceAfterBig"},c);n.create("div",{"class":"dijitInline simpleInfographic_drillDataButtonLabel",
innerHTML:p.drillForMoreData},c);l(c,"click",function(){var a=f._setViewMode(x.VIEW_DATA_DRILLING,!0,c);h?f._renderCustomSectionJson({customDDPanelInfo:h,fieldInfo:g,animationPromise:a}):f._loadStandardDataDrillingView({fieldInfo:g,optionName:d.name,calcState:null,sectionVisualState:null,animationPromise:a})});f._drillingSectionsButtons.push({destroy:function(){n.destroy(c)}});var b=[];a.getTables().forEach(function(a){b.push(a.domNode)});var e=A.intersectNodeBoxes(b,a.domNode);w.set(c,{left:e.x+
"px",top:e.y+"px",width:e.w+"px",height:e.h+"px",lineHeight:e.h+"px"});var B=A.position(c);B.w>e.w&&w.set(c,"left",e.x-(B.w-e.w)/2+"px")}))},_dataDrillingState:null,_loadStandardDataDrillingView:function(a){var b=a.fieldInfo,f=a.optionName,g=a.calcState,h=a.sectionVisualState,d=a.animationPromise,c=this;this._dataDrillingState={fieldInfo:b,optionName:f,calcState:g,sectionVisualState:h};this._destroyDrillingSections();this._showDDProgress(!0);return m(function(){var a=c._getDataDrillingPanelDimensions(),
e=z.getDataDrilling(c._currentInfographicJson,b.templateName),d=y.getDrillingOptionInfo(c._getCountryID(),e.standardId||b,f,a.w,a.h,g),a=d.enrichInfos;return m(a&&a.length&&c.viewModel.enrichFieldData(a),function(){return d})}(),function(a){return m(c._renderStandardOptionInfo({drillingDataOptionInfo:a,fieldInfo:b,animationPromise:d,optionName:f,calcState:g,sectionVisualState:h}),function(){c._showDDProgress(!1)})})},_renderStandardOptionInfo:function(a){var b=a.drillingDataOptionInfo,f=a.fieldInfo,
g=a.animationPromise,h=a.optionName,d=a.sectionVisualState,c=this,k;this._destroyDrillingSections();var e=this._getDataDrillingPanelSectionParams();e.json={type:G.DETAILS,stack:[b.tableJson]};e.calculationStatesGroup=b.calculationStatesGroup;e.onCalculationStateChanged=function(a){c._loadStandardDataDrillingView({fieldInfo:f,optionName:h,calcState:a,sectionVisualState:k.getVisualState(),animationPromise:null})};return m(g,function(){return q.delay(function(){k=c._createDataDrillingSection(e);k.fitContentNicely();
k.domNode.style.opacity="0.01";return q.delay(function(){k.setVisualState(d);k.domNode.style.opacity=""},100)})})},_renderCustomSectionJson:function(a){var b=a.customDDPanelInfo,f=a.animationPromise,g=a.sectionVisualState,h=this;this._destroyDrillingSections();this._dataDrillingState=null;var d,c=this._getDataDrillingPanelSectionParams();c.json=b.sectionJson;this._showDDProgress(!0);return m(f,function(){return q.delay(function(){d=h._createDataDrillingSection(c);d.fitContentNicely();d.domNode.style.opacity=
"0.01";return q.delay(function(){d.setVisualState(g);d.domNode.style.opacity="";h._showDDProgress(!1)})})})},_getDataDrillingPanelSectionParams:function(){var a={"class":"infographicContainer_Section infographicContainer_dataDrillingSection"};a.initialWidth=this._getDataDrillingPanelDimensions().w;a.viewModel=this.viewModel;a.theme=this.theme;a.parentWidget=this;a.tableClass="infographicContainerTable";a.hasFixedLayout=!1;return a},_createDataDrillingSection:function(a){a=this.viewModel.layoutBuilder.createElement("section",
a,this.drilledDataViewDiv);this._drillingSections.push(a);a.setViewMode(H.PREVIEW_VALUES);a.setResizedHeight(this._getDataDrillingPanelDimensions().h);t[D(".sectionDynamicSettings_settingsButton",this.dataDrillingViewDiv)[0]?"add":"remove"](this.dataDrillingViewDiv,"hasChartSettingsButton");this.dataDrillingAnimationType===u.ZOOM&&this._setUpDDPanelBackgroundColor();return a},_setUpDDPanelBackgroundColor:function(){I.setUpDDPanelBackgroundColor({viewModel:this.viewModel,theme:this.theme,infographicJson:this._currentInfographicJson,
node:this.dataDrillingViewDiv})},_getDataDrillingPanelDimensions:function(){switch(this.dataDrillingAnimationType){case u.ZOOM:return J;default:return{w:this.width,h:this.height}}},_showDDProgress:function(a){F[a?"showProgress":"removeProgress"](this.dataDrillingAnimationType===u.SLIDE?this.domNode:this.dataDrillingViewDiv)},_getDataDrillingState:function(){return this._dataDrillingState},_setDataDrillingState:function(a){a&&this._loadStandardDataDrillingView({fieldInfo:a.fieldInfo,optionName:a.optionName,
calcState:a.calcState,sectionVisualState:a.sectionVisualState,animationPromise:null})},_destroyDrillingSections:function(){this._drillingSections=this._drillingSections||[];this._drillingSections.forEach(function(a){a.destroy()});this._drillingSections.length=0;this.domNode&&n.empty(this.drilledDataViewDiv)},_destroyDrillingSectionsButtons:function(){this._drillingSectionsButtons=this._drillingSectionsButtons||[];this._drillingSectionsButtons.forEach(function(a){a.destroy()});this._drillingSectionsButtons.length=
0}})});