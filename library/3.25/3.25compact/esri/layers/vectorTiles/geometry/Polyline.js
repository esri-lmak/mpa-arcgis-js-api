// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/Polyline","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./SpatialReference ./support/zmUtils".split(" "),function(g,O,L,h,w,d,I,M,k,N,x){function J(l){return function(a,e){return null==a?e:null==e?a:l(a,e)}}var l=J(Math.min),e=J(Math.max);g=function(g){function a(){for(var b=0;b<arguments.length;b++);b=g.call(this)||this;b.paths=[];b.type=
"polyline";return b}L(a,g);r=a;a.prototype.normalizeCtorArgs=function(b,m){var c=null,p,a,f=null;b&&!Array.isArray(b)?(c=b.paths?b.paths:null,m||(b.spatialReference?m=b.spatialReference:b.paths||(m=b)),p=b.hasZ,a=b.hasM):c=b;c=c||[];m=m||N.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(f=c[0]&&c[0][0])void 0===p&&void 0===a?(p=2<f.length,a=!1):void 0===p?p=!a&&3<f.length:void 0===a&&(a=!p&&3<f.length);return{paths:c,spatialReference:m,hasZ:p,hasM:a}};Object.defineProperty(a.prototype,
"extent",{get:function(){var b=this.hasZ,m=this.hasM,c=this.spatialReference,a=this.paths,K=b?3:2;if(!a.length||!a[0].length)return null;for(var f=a[0][0],g=f[0],f=f[1],d=a[0][0],k=d[0],d=d[1],h=void 0,y=void 0,r=void 0,w=void 0,D=[],E=0;E<a.length;E++){for(var z=a[E],t=z[0],F=t[0],t=t[1],u=z[0],G=u[0],u=u[1],A=void 0,B=void 0,x=void 0,q=void 0,H=0;H<z.length;H++){var v=z[H],n=v[0],C=v[1],g=l(g,n),f=l(f,C),k=e(k,n),d=e(d,C),F=l(F,n),t=l(t,C),G=e(G,n),u=e(u,C);b&&2<v.length&&(n=v[2],h=l(h,n),y=e(y,
n),A=l(A,n),B=e(B,n));m&&v.length>K&&(q=v[K],r=l(h,q),w=e(y,q),x=l(A,q),q=e(B,q))}D.push(new I({xmin:F,ymin:t,zmin:A,mmin:x,xmax:G,ymax:u,zmax:B,mmax:q,spatialReference:c}))}a=new I;a.xmin=g;a.ymin=f;a.xmax=k;a.ymax=d;a.spatialReference=c;b&&(a.zmin=h,a.zmax=y);m&&(a.mmin=r,a.mmax=w);a.cache._partwise=1<D.length?D:null;return a},enumerable:!0,configurable:!0});a.prototype.writePaths=function(b,a,c,d){a.paths=w.clone(this.paths)};a.prototype.addPath=function(b){if(b){this.clearCache();var a=this.paths,
c=a.length;if(Array.isArray(b[0]))a[c]=b.concat();else{for(var d=[],e=0,f=b.length;e<f;e++)d[e]=b[e].toArray();a[c]=d}return this}};a.prototype.clone=function(){var b=new r;b.spatialReference=this.spatialReference;b.paths=w.clone(this.paths);b.hasZ=this.hasZ;b.hasM=this.hasM;return b};a.prototype.getPoint=function(b,a){if(!this._validateInputs(b,a))return null;b=this.paths[b][a];a=this.hasZ;var c=this.hasM;return a&&!c?new k(b[0],b[1],b[2],void 0,this.spatialReference):c&&!a?new k(b[0],b[1],void 0,
b[2],this.spatialReference):a&&c?new k(b[0],b[1],b[2],b[3],this.spatialReference):new k(b[0],b[1],this.spatialReference)};a.prototype.insertPoint=function(b,a,c){if(!this._validateInputs(b,a,!0))return this;this.clearCache();x.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[b].splice(a,0,c);return this};a.prototype.removePath=function(b){if(!this._validateInputs(b,null))return null;this.clearCache();b=this.paths.splice(b,1)[0];var a=this.spatialReference;return b.map(function(b){return new k(b,
a)})};a.prototype.removePoint=function(b,a){if(!this._validateInputs(b,a))return null;this.clearCache();return new k(this.paths[b].splice(a,1)[0],this.spatialReference)};a.prototype.setPoint=function(b,a,c){if(!this._validateInputs(b,a))return this;this.clearCache();x.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[b][a]=c;return this};a.prototype._validateInputs=function(b,a,c){void 0===c&&(c=!1);return null==b||0>b||b>=this.paths.length||null!=a&&(b=this.paths[b],c&&
(0>a||a>b.length)||!c&&(0>a||a>=b.length))?!1:!0};a.prototype.toJSON=function(a){return this.write(null,a)};h([d.property({dependsOn:["hasM","hasZ","paths"]})],a.prototype,"cache",void 0);h([d.property({dependsOn:["cache"],readOnly:!0})],a.prototype,"extent",null);h([d.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],a.prototype,"paths",void 0);h([d.writer("paths")],a.prototype,"writePaths",null);return a=r=h([d.subclass("esri.geometry.Polyline")],a);var r}(d.declared(M));g.prototype.toJSON.isDefaultToJSON=
!0;return g});