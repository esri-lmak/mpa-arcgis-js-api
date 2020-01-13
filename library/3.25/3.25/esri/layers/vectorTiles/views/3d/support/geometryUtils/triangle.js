// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/3d/support/geometryUtils/triangle",["require","exports","../../lib/glMatrix","./lineSegment"],function(A,e,a,g){function k(c,b,d){var f=a.vec2d.dist(c,b);b=a.vec2d.dist(b,d);c=a.vec2d.dist(d,c);d=(f+b+c)/2;return Math.sqrt(d*(d-f)*(d-b)*(d-c))}Object.defineProperty(e,"__esModule",{value:!0});e.create=function(c,b,d){void 0===c&&(c=a.vec3d.create());void 0===b&&(b=a.vec3d.create());void 0===d&&(d=a.vec3d.create());return{p0:c,p1:b,p2:d}};e.distance2=function(c,
b){var d=c.p0,f=c.p1;c=c.p2;var e=a.vec3d.subtract(f,d,t),k=a.vec3d.subtract(c,f,u),l=a.vec3d.subtract(d,c,v),r=a.vec3d.subtract(b,d,w),m=a.vec3d.subtract(b,f,x),n=a.vec3d.subtract(b,c,y),h=a.vec3d.cross(e,l),z=a.vec3d.dot(a.vec3d.cross(e,h,p),r),m=a.vec3d.dot(a.vec3d.cross(k,h,p),m),n=a.vec3d.dot(a.vec3d.cross(l,h,p),n);if(0<z&&0<m&&0<n)return b=a.vec3d.dot(h,r),b*b/a.vec3d.dot(h,h);d=g.distance2(g.fromOriginAndVector(d,e,q),b);f=g.distance2(g.fromOriginAndVector(f,k,q),b);b=g.distance2(g.fromOriginAndVector(c,
l,q),b);return Math.min(d,f,b)};e.areaPoints2d=k;e.area2d=function(a){return k(a.p0,a.p1,a.p2)};var t=a.vec3d.create(),u=a.vec3d.create(),v=a.vec3d.create(),w=a.vec3d.create(),x=a.vec3d.create(),y=a.vec3d.create(),p=a.vec3d.create(),q=g.create()});