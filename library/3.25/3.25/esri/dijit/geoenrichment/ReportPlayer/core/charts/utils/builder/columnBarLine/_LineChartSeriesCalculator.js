// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_LineChartSeriesCalculator","dojo/_base/lang ../../ThemeCalculator ../../ChartTypes ../../ChartLineStyles ../../ChartLineMarkers ../../AxisUtil ../utils/ChartDataUtil ../utils/TooltipInfoBuilder ../ChartPlots esri/dijit/geoenrichment/utils/ColorUtil ./_AxisBuilder ./_PointLabelUtil".split(" "),function(C,v,y,w,D,E,A,F,G,H,I,z){var J={calcLineStyle:function(a,e,h,b){var f=b.comparisonInfo,g=b.visualProperties;e=v.calcColorForPoint(null,
a,0,e,h.length,y.LINE,b.themeSettings,a.isComparisonSeries,f);h=g.lineThickness||1;g=g.fillLineArea?g.lineAreaOpacity:1;b=w.SOLID;var m=void 0;a.isComparisonSeries&&f&&(f.lineThickness&&(h=f.lineThickness),f.lineStyle&&(b=f.lineStyle),m=f.lineMarker?D.getMarkerPath(f.lineMarker):v.getComparisonSymbol());1>g&&e&&(e=H.toColor(e),e.a=g);return{color:e,width:h,style:w.toGFXValue(b),marker:m}}};return{calcSeriesLine:function(a){var e=a.chart,h=a.visualProperties,b=a.seriesItems,f=a.seriesItemsWithComparison||
b,g=a.isSecondaryPlot,m=a.reverseXY,K=a.comparisonInfo,b=a.themeSettings,r=a.viewModel,n=[],c={minYValue:Infinity,maxYValue:-Infinity,stackedValues:h.isStacked?[]:null},x=a.primaryPlotStat&&a.primaryPlotStat.pointIndexToTooltipsHash||{};f.forEach(function(b,p){if(b.points.length){var l=g?2*p+1:p,t=J.calcLineStyle(b,l,f,a),B={name:b.label,data:[],isComparisonSeries:b.isComparisonSeries,params:{plot:g?G.SECONDARY:void 0,stroke:{color:t.color,width:t.width,style:t.style},fill:t.color,outline:!1}},u=
this._collectStatisticsForSeries(a,b,l,c);b.points.forEach(function(d,c){function f(){return g&&!a.oppositeDirections&&2===a.primarySeries.length?0===p?-.15:.15:0}var l=u.values[c],n=l||0,k=c+1;z.updatePointIndexToLabelMap(e,k,d,r);var q=F.getTooltipInfo(l,z.getPointLabel(d,r),b.label,u.minInSeries,u.maxInSeries,u.valuesSum,u.absValuesSum,u.avgInSeries,h,y.LINE,t.color,null,d.fieldInfo,K?!b.isComparisonSeries:void 0),v=x[k]=x[k]||[];v.push(q);q.getGroup=function(){return v};d={originalValue:l,isUnavailableData:isNaN(l),
unsortedIndex:c,name:z.getPointLabel(d,r),_valuesSumsInSeries:u.absValuesSum,point:d,fill:"#FFFFFF",stroke:{color:t.color,width:1,style:w.toGFXValue(w.SOLID)},outline:!1,tooltip:q};r.isGraphicStyle?t.marker&&(d.marker=t.marker):d.marker=void 0;m?(d.x=n*(g&&a.oppositeDirections&&1===p?-1:1),d.y=k+f(),d.valueProp="x"):(d.x=k+f(),d.y=n*(g&&a.oppositeDirections&&1===p?-1:1),d.valueProp="y");h.yAxis.showValuesAsWeightsInSeries&&(d[m?"x":"y"]/=u.absValuesSum/100);B.data.push(d)});n.push(B)}},this);c.stackedValues&&
(c.stackedValues.sort(function(a,b){return b-a}),c.minYValue=c.stackedValues[c.stackedValues.length-1],c.maxYValue=c.stackedValues[0]);if(g){if(a.primaryPlotStat&&(b=E.getPrettifyYAxisParameters(Math.min(c.minYValue,a.primaryPlotStat.minYValue),Math.max(c.maxYValue,a.primaryPlotStat.maxYValue),{baseLineValue:h.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:a.oppositeDirections,previewBelowZero:!r.dynamicReportInfo}),C.mixin(e.axes.y.opt,{majorTickStep:b.majorTickStep,minorTickStep:b.minorTickStep,
min:b.min,max:b.max})),1===a.primarySeries.length){var q=m?"y":"x",k=[];a.primarySeries[0].data.forEach(function(a){var b=n[0].data[a.unsortedIndex];b[q]=a.x;k.push(b)});n[0].data=k}}else I.prettifyYAxis(c.minYValue,c.maxYValue,h.yAxis.baseLineValue,e,h,y.LINE,b,r);return n},_collectStatisticsForSeries:function(a,e,h,b){var f=a.viewModel,g=a.visualProperties,m=a.previewFeatureIndex,v=a.isMultiFeatureChart,r=a.selectedComparisonIndex,n=a.isSecondaryPlot,c=a.ge,x=[],q=0,k=0,l=1E6,p=-1E6,w=2===a.seriesItems.length&&
a.oppositeDirections&&n?A.CHART_DATA_SMOOTH:null;e.points.forEach(function(a,b){a=A.getPreviewValue(a,b,h,!1,y.LINE,g,f,v?b:m,w,e.isComparisonSeries,r,c,!1);a=(x[b]=a)||0;q+=a;k+=Math.abs(a);l=Math.min(l,a);p=Math.max(p,a)});e.points.forEach(function(a,c){a=x[c];a=g.yAxis.showValuesAsWeightsInSeries?a/k*100:a;b.stackedValues?(b.stackedValues[c]=b.stackedValues[c]||0,b.stackedValues[c]+=a):(b.minYValue=Math.min(a,b.minYValue),b.maxYValue=Math.max(a,b.maxYValue))});return{values:x,valuesSum:q,absValuesSum:k,
minInSeries:l,maxInSeries:p,avgInSeries:q/e.points.length}}}});