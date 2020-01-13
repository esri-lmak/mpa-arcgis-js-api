// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_ColumnBarLineChartGridPlotBuilder","../../ChartTypes ../../ChartLineStyles ../../plots/CustomGridPlot esri/dijit/geoenrichment/utils/ColorUtil ../utils/ChartDataUtil ../ChartPlots".split(" "),function(l,m,w,f,n,p){return{configureBackgroundGridPlot:function(a){var q=a.chart,d=a.chartType,c=a.visualProperties,e=a.themeSettings,x=a.viewModel;a=l.isBarLike(d)?c.xAxis:c.yAxis;var b=l.isBarLike(d)?c.yAxis:c.xAxis,g=
"#000000",h="#000000",k="#000000",r="transparent",t="transparent",u="transparent",v="transparent";x.isGraphicStyle&&(g=f.toColor(b.gridLinesColor||b.lineColor||e.xAxis.lineColor),g.a=n.undefinedToDefault(b.gridLinesOpacity,1),g=f.toCSSColor(g),h=f.toColor(a.gridLinesColor||a.lineColor||e.yAxis.lineColor),h.a=n.undefinedToDefault(a.gridLinesOpacity,1),h=f.toCSSColor(h),k=f.toColor(c.yAxis.baseLineColor||e.yAxis.baseLineColor||(l.isBarLike(d)?g:h)),k.a=n.undefinedToDefault(c.yAxis.baseLineOpacity,1),
k=f.toCSSColor(k),r=b.gridStripesColor||e.xAxis.gridStripesColor||"transparent",t=b.gridStripesColorAlt||e.xAxis.gridStripesColorAlt||"transparent",u=a.gridStripesColor||e.yAxis.gridStripesColor||"transparent",v=a.gridStripesColorAlt||e.yAxis.gridStripesColorAlt||"transparent");q.addPlot(p.GRID,{type:w,vMajorLines:!0,majorVLine:b.gridLines?{color:g,width:b.gridLinesThickness,style:m.toGFXValue(b.gridLinesStyle,b.gridLinesThickness)}:{color:"transparent"},vMinorLines:!1,vStripes:b.gridStripes,vFill:r,
vAlternateFill:t,hMajorLines:!0,majorHLine:a.gridLines?{color:h,width:a.gridLinesThickness,style:m.toGFXValue(a.gridLinesStyle,a.gridLinesThickness)}:{color:"transparent"},hMinorLines:!1,hStripes:!b.gridStripes&&a.gridStripes,hFill:u,hAlternateFill:v,baseLineVertical:l.isBarLike(d),baseLine:c.yAxis.baseLine?{color:k,width:c.yAxis.baseLineThickness,style:m.toGFXValue(c.yAxis.baseLineStyle,c.yAxis.baseLineThickness)}:{color:"transparent"}});d=q.getPlot(p.GRID);d.xHasHalfTickOffset=b.gridLinesCentered;
d.yHasHalfTickOffset=a.gridLinesCentered;d.baseLineValue=c.yAxis.baseLineValue;q.movePlotToBack(p.GRID)}}});