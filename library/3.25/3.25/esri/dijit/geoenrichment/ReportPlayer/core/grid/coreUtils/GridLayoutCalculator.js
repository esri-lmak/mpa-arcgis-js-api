// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator","dojo/_base/lang ./gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil ./gridLayoutCalcUtils/GridElementBoxCalculator ./gridLayoutCalcUtils/GridCellNodePlacer ./gridLayoutCalcUtils/rows/GridLayoutRowsCalculator ./gridLayoutCalcUtils/columns/GridLayoutColumnsCalculator ./gridLayoutCalcUtils/GridLayoutSnapper ../../supportClasses/TableUtil".split(" "),function(k,f,p,q,c,d,r,t){var a={};p.calculator=a;a.markAsDirty=
f.markAsDirty;a.fieldToColumn=f.fieldToColumn;a.dataIdToData=f.dataIdToData;a.getSpannedColumns=f.getSpannedColumns;a.recalcRows=c.recalcRows;a.recalcColumns=d.recalcColumns;a.recalcColumnsTableJson=d.recalcColumnsTableJson;a.recalcRowsToFitHeight=c.recalcRowsToFitHeight;a.adjustColumnWidth=d.adjustColumnWidth;a.getAffectedCellsForColumnAdjust=d.getAffectedCells;a.adjustRowHeight=c.adjustRowHeight;a.getAffectedCellsForRowAdjust=c.getAffectedCells;a.recalcGridWidth=d.recalcGridWidth;a.calcFieldWidth=
d.calcFieldWidth;a.getFieldWidth=d.getFieldWidth;a.setFieldWidth=d.setFieldWidth;a.calcDataHeight=c.calcDataHeight;a.getDataHeight=c.getDataHeight;a.setDataHeight=c.setDataHeight;a.autoSnapLayout=r.autoSnapLayout;a.positionCells=q.positionCells;a.calcFeatureCount=function(a,u,g){return(a-u)/g};a.calcRingIndexForCell=function(a){var b=a.parentGrid;if(!b)return-1;if(b.getNumDynamicRows())return void 0!==a.gridData.previewFeatureIndex?a.gridData.previewFeatureIndex:a.gridData.index-b.getNumFixedRows();
var g=b.getNumFixedColumns();return a.column.index<g?-1:Math.floor((a.column.index-g)/b.getNumDynamicColumns())};a.trimColumnsForNumberOfFeatures=function(b){for(var d=b.viewModel.dynamicReportInfo.fieldData.areaData.length,g=a.recalcGridWidth(b),h=0,e=0;e<b.getNumFixedColumns();e++)h+=b.columns[e].style.width;g-=h;h=a.calcFeatureCount(b.columns.length,b.getNumFixedColumns(),b.getNumDynamicColumns())-d;if(!(0>h)){for(var c=b.columns.slice(),e=c.length=b.getNumFixedColumns(),f=[],l=0;b.columns[e];){for(var m=
0;m<d;m++){var n=b.columns[e++],l=l+n.style.width;f.push(n)}e+=h}var k=g/l;f.forEach(function(a){a.style.width*=k});b.columns=c.concat(f)}};a.adjustRowsForNumberOfFeatures=function(a){var b=a.viewModel.dynamicReportInfo.fieldData.areaData.length;if(!(1>=b)){var d=a.store.data[a.getNumFixedRows()];d.previewFeatureIndex=0;for(var c=1;c<b;c++){var e=k.clone(d);e.previewFeatureIndex=c;a.store.data.push(e)}t.applyDefaultStyling({data:{data:a.store.data,columns:a.columns}})}};return a});