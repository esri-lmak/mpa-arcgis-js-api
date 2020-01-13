// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/support/contains",["require","exports"],function(q,e){function d(a,b,c,f){return b>=a.xmin&&b<=a.xmax&&c>=a.ymin&&c<=a.ymax?null!=f&&a.hasZ?f>=a.zmin&&f<=a.zmax:!0:!1}function m(a,b){if(a=a.rings)if(Array.isArray(a[0][0])){for(var c=!1,f=0,d=a.length;f<d;f++)c=p(c,a[f],b);b=c}else b=p(!1,a,b);else b=!1;return b}function p(a,b,c){var d=c[0];c=c[1];for(var n=0,h=0,k=b.length;h<k;h++){n++;n===k&&(n=0);var g=b[h],e=g[0],g=g[1],l=b[n],m=l[0],l=l[1];(g<c&&l>=c||
l<c&&g>=c)&&e+(c-g)/(l-g)*(m-e)<d&&(a=!a)}return a}Object.defineProperty(e,"__esModule",{value:!0});e.extentContainsPoint=function(a,b){return d(a,b.x,b.y,b.z)};e.extentContainsExtent=function(a,b){var c=b.xmin,f=b.ymin,e=b.zmin,h=b.xmax,k=b.ymax,g=b.zmax;return a.hasZ&&b.hasZ?d(a,c,f,e)&&d(a,c,k,e)&&d(a,h,k,e)&&d(a,h,f,e)&&d(a,c,f,g)&&d(a,c,k,g)&&d(a,h,k,g)&&d(a,h,f,g):d(a,c,f)&&d(a,c,k)&&d(a,h,k)&&d(a,h,f)};e.extentContainsCoords2D=function(a,b){return d(a,b[0],b[1])};e.extentContainsCoords3D=function(a,
b){return d(a,b[0],b[1],b[2])};e.polygonContainsPoint=function(a,b){return m(a,[b.x,b.y])};e.polygonContainsCoords=m});