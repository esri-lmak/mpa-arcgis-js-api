// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/ChartConverterPtoE","dojo/_base/lang esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/JsonXmlConverter ../../../charts/utils/ChartJsonUtil ../../ConversionUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes ./_FieldInfoBuilder".split(" "),function(t,F,
G,g,x,d,y,D,v){function w(a,d){return void 0===a?d:Number(a)||d}function H(a,d,e){return g.queryJson(a,"series").filter(function(a){return a.tags&&a.tags[0]&&"point"===a.tags[0].name}).map(function(c){if(!c.tags)return null;c.attributes=c.attributes||{};return{label:c.attributes.Text||"",color:A(c.attributes.color),thickness:c.attributes.thickness,points:c.tags.map(function(c,e){c.attributes=c.attributes||{};var h=a.attributes.type===y.GAUGE&&1===e;if((e=(e=(e=c.tags&&c.tags[0])&&e.attributes&&e.attributes.f)&&
v.getCalculatorOrScriptFieldInfo(e,d))||h){var h=(h=c.attributes.CaptionField)&&v.getCalculatorOrScriptFieldInfo(h,d),k=g.queryJson(c,"pointIcon")[0],k=k&&d.parsers.getParser("field").parseField(k.tags[0],k,null,d);return x.createChartPoint(e,c.attributes.Text,A(c.attributes.color),k,h)}}).filter(function(a){return!!a})}}).filter(function(a){return a&&a.points&&!!a.points.length})}function E(a,d){var e={gridLines:a.gridlines,gridLinesCentered:a.gridlinesCentered,gridLinesOpacity:w(a.gridlinesOpacity,
1),gridLinesColor:a.gridlinesColor,gridLinesThickness:Number(a.gridlinesThickness)||void 0,gridLinesStyle:a.gridlinesStyle,gridStripes:a.gridStripes,gridStripesColor:a.gridStripesColor,gridStripesColorAlt:a.gridStripesColorAlt};d&&t.mixin(e,{baseLine:a.baseLine,baseLineColor:a.baseLineColor,baseLineOpacity:w(a.baseLineOpacity,1),baseLineThickness:Number(a.baseLineThickness)||void 0,baseLineStyle:a.baseLineStyle,baseLineValue:a.baseLineValue});return e}function I(a){return(a=g.queryJson(a,"BackImage")[0])&&
a.tags&&"#text"===a.tags[0].name?G.base64DataToDataURL(a.tags[0].text):null}function J(a){if("string"!==typeof a)return 0;a=a.replace("%","");return"0"===a?0:a.replace("0.","").length}function A(a){a&&"string"===typeof a&&(a=6===a.length&&-1===a.indexOf("#")?"#"+a:F.toCSSColor(a));return a}return{portalToEditor:function(a,z,e){var c=g.queryJson(a,"comparisonInfo")[0],q;if(c){var r=c.attributes.name,h=e.templateJson.metadata.comparisonCalculatorsHash[r];h&&(q={calculatorName:r,chartType:c.attributes.chartType,
color:c.attributes.color,lineThickness:Number(c.attributes.lineThickness)||void 0,lineStyle:c.attributes.lineStyle,lineMarker:c.attributes.lineMarker,levels:h.levels})}var k=H(a,e,q);if(!k.length)return null;var b=a.attributes,u=g.queryJson(a,"chartTitle")[0],c=g.queryJson(a,"legend")[0],m=g.queryJson(a,"xAxis")[0],n=g.queryJson(a,"yAxis")[0],r=g.queryJson(a,"chartIcon"),r=g.queryJson(a,"chartIcon"),h=g.queryJson(a,"floatingIcon"),B=g.queryJson(a,"floatingText"),C=g.queryJson(a,"trigger");u.attributes=
u.attributes||{};c.attributes=c.attributes||{};var p=m&&m.attributes||{},l=n&&n.attributes||{},v=p,w=l;e.isGraphicReport&&1.3>e.revisionVersion&&(v=l,w=p);k.forEach(function(a){a.thickness=Number(a.thickness)});var f;y.isColumnBarLike(b.type)&&(f=1<k[0].thickness?"Large":1>k[0].thickness?"Small":"Medium");m=m&&m.tags&&m.tags[0].attributes&&m.tags[0].attributes;n=n&&n.tags&&n.tags[0].attributes&&n.tags[0].attributes;a=I(a);f={isChart:!0,type:b._type||b.type,isMultiFeatureChart:!!b.isMultiFeatureChart,
seriesItems:k,visualProperties:{width:d.ptToPx(b.width),height:d.ptToPx(b.height),backgroundColor:A(b.backColor),panelBackgroundColor:b.panelBackgroundColor,barBorders:b.barBorders,dataLabels:b.dataLabels,view3D:!!b.view3D,origin:Number(b.origin)||0,lineThickness:b.type===y.LINE&&k[0].thickness||void 0,columnThickness:f,backgroundImageData:a,dataLabelsDecimals:J(b.CustomPercentFormat||b.CustomValueFormat),title:{text:u.attributes.text,align:u.attributes.align&&u.attributes.align.toLowerCase(),style:d.ptToPxObj(d.parseStyleString(u.attributes.style))},
xAxis:t.mixin({show:"None"!==p.placement,showTicks:p.ticks,style:d.ptToPxObj(d.parseStyleString(p.style)),title:m&&m.text,titleStyle:m&&d.ptToPxObj(d.parseStyleString(m.style)),placement:"OtherSide"===p.placement?"OtherSide":void 0,labelsAngle:Number(p.labelsAngle)||0,showLine:p.line,lineColor:p.lineColor,ticksInside:p.ticksInside},E(v,!1)),yAxis:t.mixin({show:"None"!==l.placement,showTicks:l.ticks,style:d.ptToPxObj(d.parseStyleString(l.style)),title:n&&n.text,titleStyle:n&&d.ptToPxObj(d.parseStyleString(n.style)),
placement:"OtherSide"===l.placement?"OtherSide":void 0,labelsAngle:Number(l.labelsAngle)||0,showLine:l.line,lineColor:l.lineColor,ticksInside:l.ticksInside,showPercentIndicator:l.showPercentIndicator,showValuesAsWeightsInSeries:l.showValuesAsWeightsInSeries},E(w,!0)),legend:{type:c.attributes.type||D.SERIES},dataLabelsStyle:d.ptToPxObj(d.parseStyleString(b.dataLabelsStyle)),isStacked:b.isStacked,showColumnBarBackground:b.showColumnBarBackground,columnBarBackgroundColor:b.columnBarBackgroundColor,
renderColumnBarsInOppositeDirections:b.renderColumnBarsInOppositeDirections,columnBarGap:b.columnBarGap?d.ptToPx(b.columnBarGap):void 0,fillLineArea:b.fillLineArea,lineAreaOpacity:b.lineAreaOpacity,donutHolePercent:Number(b.donutHolePercent)||void 0,donutGap:Number(b.donutGap)||void 0,donutArcPercent:Number(b.donutArcPercent)||void 0,gaugeHolePercent:Number(b.gaugeHolePercent)||void 0,gaugeRangeMin:Number(b.gaugeRangeMin)||void 0,gaugeRangeMax:Number(b.gaugeRangeMax)||void 0,gaugeGap:Number(b.gaugeGap)||
void 0,gaugeStartAngle:Number(b.gaugeStartAngle)||void 0,gaugeArcPercent:Number(b.gaugeArcPercent)||void 0,gaugeLabelStyle:d.ptToPxObj(d.parseStyleString(b.gaugeLabelStyle))||void 0,gaugeLabelPlacement:b.gaugeLabelPlacement||void 0,gaugeShowArrow:b.gaugeShowArrow||void 0,gaugeArrowLineColor:b.gaugeArrowLineColor||void 0,gaugeArrowFillColor:b.gaugeArrowFillColor||void 0,gaugeConditionalStylingIgnoreOthers:b.gaugeConditionalStylingIgnoreOthers||void 0,gaugeConditionalStylingLabel:b.gaugeConditionalStylingLabel||
void 0,ringBackgroundColor:b.ringBackgroundColor,showWholePictures:b.showWholePictures,dataLabelsInside:b.dataLabelsInside,dataLabelsStackedInColumns:b.dataLabelsStackedInColumns,dataLabelsHorizontalAlign:b.dataLabelsHorizontalAlign,showAxisIcons:b.showAxisIcons,showChartIcons:b.showChartIcons,sorting:b.sorting}};f.visualProperties.legend.type===D.MIN_MAX?t.mixin(f.visualProperties.legend,{minMax:{placement:c.attributes.placement,placementOffset:Number(c.attributes.placementOffset)||0,titleStyle:d.ptToPxObj(d.parseStyleString(c.attributes.titleStyle)),
minVariableLabelStyle:d.ptToPxObj(d.parseStyleString(c.attributes.minVariableLabelStyle)),maxVariableLabelStyle:d.ptToPxObj(d.parseStyleString(c.attributes.maxVariableLabelStyle))}}):t.mixin(f.visualProperties.legend,{series:{placement:c.attributes.placement,placementOffset:Number(c.attributes.placementOffset)||0,hasBorder:c.attributes.hasBorder,labelParts:c.attributes.labelParts,style:d.ptToPxObj(d.parseStyleString(c.attributes.style))}});1.2>e.revisionVersion&&(void 0!==f.visualProperties.donutGap&&
(f.visualProperties.donutGap/=2*Math.PI),void 0!==f.visualProperties.gaugeGap&&(f.visualProperties.gaugeGap/=2*Math.PI));r&&r.length&&(f.visualProperties.chartIcons=r.map(function(a){return a.tags&&a.tags[0]?e.parsers.getParser("field").parseField(a.tags[0],a,null,e):null}));h&&h.length&&(f.visualProperties.floatingIcons=h.map(function(a){return e.parsers.getParser("section").parseTable(a.tags[0],e)}));B&&B.length&&(f.visualProperties.floatingTexts=B.map(function(a){return e.parsers.getParser("section").parseTable(a.tags[0],
e)}));C&&C.length&&(f.visualProperties.conditionalStyling=e.parsers.getParser("field").parseFieldTrigger(C[0]));f.comparisonInfo=q;q={};z.attributes&&z.attributes.style&&t.mixin(q,d.parseStyleString(z.attributes.style));d.ptToPxObj(q);x.provideDefaultValueForMissing(f,{font:q});x.cleanUpJson(f);return f}}});