// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/LineTess",["require","exports"],function(I,n){function Q(d){var a={items:[],count:0},b;for(b=0;b<d;++b)a.items.push(void 0);return a}function R(d,a){v.vector[0]=d.vector[0];v.vector[1]=d.vector[1];v.texCoords[0]=d.texCoords[0];v.texCoords[1]=d.texCoords[1];v.direction[0]=d.direction[0];v.direction[1]=d.direction[1];v.base=d.base;d.vector[0]=a.vector[0];d.vector[1]=a.vector[1];d.texCoords[0]=a.texCoords[0];d.texCoords[1]=a.texCoords[1];d.direction[0]=
a.direction[0];d.direction[1]=a.direction[1];d.base=a.base;a.vector[0]=v.vector[0];a.vector[1]=v.vector[1];a.texCoords[0]=v.texCoords[0];a.texCoords[1]=v.texCoords[1];a.direction[0]=v.direction[0];a.direction[1]=v.direction[1];a.base=v.base}function J(d,a){return d[0]*a[0]+d[1]*a[1]}function S(d){return Math.sqrt(J(d,d))}function O(d,a){var b=S(a);d[0]=a[0]/b;d[1]=a[1]/b;return d}function z(d,a){d[0]=-a[1];d[1]=a[0];return d}function K(d,a){return d[0]*a[1]-d[1]*a[0]}function u(d,a){d[0]=-a[0];d[1]=
-a[1];return d}function x(d,a,b){d[0]=a[0]*b;d[1]=a[1]*b;return d}function A(d,a,b){d[0]=a[0]+b[0];d[1]=a[1]+b[1];return d}function U(d,a){d=J(d,a);return.999<d?0:-.999>d?Math.PI:Math.acos(d)}function T(d,a,b,c,f){if(0===c)d.count=0;else{var t=S(a),g=x(k[0],a,1/t);b=x(k[1],b,1/t);g=U(g,b);g=(f?-1:1)*g/c;f=Math.cos(g);g=Math.sin(g);b=a[0];var e=a[1];for(a=0;a<c-1;++a)t=b,b=f*t-g*e,e=g*t+f*e,d.items[a][0]=b,d.items[a][1]=e;d.count=c-1}}function D(d){var a=d.count,b=Math.floor(a/2),c;for(c=0;c<b;++c){var f=
d.items[c];d.items[c]=d.items[a-c-1];d.items[a-c-1]=f}}Object.defineProperty(n,"__esModule",{value:!0});var l;(function(d){d[d.ENTRY=1]="ENTRY";d[d.EXIT=2]="EXIT";d[d.CAP=3]="CAP"})(l=n.VectorRole||(n.VectorRole={}));var L;(function(d){d[d.START=1]="START";d[d.END=2]="END"})(L=n.CapPosition||(n.CapPosition={}));n.SYSTEM_MAG_LIMIT=3.8;n.MITER_SAFE_RADS=2*Math.acos(1/n.SYSTEM_MAG_LIMIT);var P=n.SYSTEM_MAG_LIMIT*n.SYSTEM_MAG_LIMIT,W=16/(2*Math.PI);n.allocTriangles=function(d){var a={items:[],count:0},
b;for(b=0;b<d;++b)a.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]}});return a};n.allocExtrudeVectors=function(){var d={items:[],count:0},a;for(a=0;30>a;++a)d.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]});a={};a[l.ENTRY]=Q(20);a[l.EXIT]=Q(20);a[l.CAP]=Q(20);
return{vectors:d,lists:a}};n.copyExtrudeVectors=function(d,a){var b;for(b=0;b<a.vectors.count;++b)d.vectors.items[b].vector[0]=a.vectors.items[b].vector[0],d.vectors.items[b].vector[1]=a.vectors.items[b].vector[1],d.vectors.items[b].texCoords[0]=a.vectors.items[b].texCoords[0],d.vectors.items[b].texCoords[1]=a.vectors.items[b].texCoords[1],d.vectors.items[b].direction[0]=a.vectors.items[b].direction[0],d.vectors.items[b].direction[1]=a.vectors.items[b].direction[1],d.vectors.items[b].base=a.vectors.items[b].base;
d.vectors.count=a.vectors.count;var c=a.lists[l.ENTRY],f=d.lists[l.ENTRY],t=a.lists[l.EXIT],g=d.lists[l.EXIT],e=a.lists[l.CAP],h=d.lists[l.CAP];for(b=0;b<c.count;++b)f.items[b]=c.items[b];f.count=c.count;for(b=0;b<t.count;++b)g.items[b]=t.items[b];g.count=t.count;for(b=0;b<e.count;++b)h.items[b]=e.items[b];h.count=e.count;d.capCenter=a.capCenter};var v={vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0],base:void 0};n.swapExtrudeVectors=R;var k=[];for(I=0;32>I;++I)k.push([void 0,
void 0]);var q=function(d){var a={items:[],count:0},b;for(b=0;b<d;++b)a.items.push([void 0,void 0]);return a}(16);n.length=S;n.normalize=O;n.getNumberOfSlices=function(d){return Math.max(Math.round(d*W),1)};n.getRads=U;n.reverse=D;var M=[void 0,void 0],N=[void 0,void 0],E=[0,0],y=[0,0],B=[0,0],C=[0,0],F=Math.cos(Math.PI/4),G=Math.sin(Math.PI/4),V=Math.sqrt(2);I=function(){function d(a){this._distanceAlongCorrection=a.distanceAlongCorrection}d.prototype.bridge=function(a,b,c){var f=b.vectors;b=b.lists[l.EXIT];
var d=c.vectors,g=c.lists[l.ENTRY],e,h;if(b.count===g.count+1)c=b.items,e=f.items,h=g.items,d=d.items;else if(g.count===b.count+1)c=g.items,e=d.items,h=b.items,d=f.items;else if(b.count===g.count)c=g.items,e=d.items,h=b.items,d=f.items;else{console.error("Cannot bridge "+b.count+" to "+g.count+".");a.count=0;return}f=b.count+g.count-2;a.count=f;M[0]=c;M[1]=h;N[0]=e;N[1]=d;for(b=0;b<f;++b)c=a.items[b],e=(b+0)%2,e=N[e][M[e][Math.floor((b+0)/2)]],c.v1.vector[0]=e.vector[0],c.v1.vector[1]=e.vector[1],
c.v1.texCoords[0]=e.texCoords[0],c.v1.texCoords[1]=e.texCoords[1],c.v1.direction[0]=e.direction[0],c.v1.direction[1]=e.direction[1],c.v1.base=e.base,e=(b+1)%2,e=N[e][M[e][Math.floor((b+1)/2)]],c.v2.vector[0]=e.vector[0],c.v2.vector[1]=e.vector[1],c.v2.texCoords[0]=e.texCoords[0],c.v2.texCoords[1]=e.texCoords[1],c.v2.direction[0]=e.direction[0],c.v2.direction[1]=e.direction[1],c.v2.base=e.base,e=(b+2)%2,e=N[e][M[e][Math.floor((b+2)/2)]],c.v3.vector[0]=e.vector[0],c.v3.vector[1]=e.vector[1],c.v3.texCoords[0]=
e.texCoords[0],c.v3.texCoords[1]=e.texCoords[1],c.v3.direction[0]=e.direction[0],c.v3.direction[1]=e.direction[1],c.v3.base=e.base,e=c.v1.base&&c.v1.base.point||E,h=c.v2.base&&c.v2.base.point||E,d=c.v3.base&&c.v3.base.point||E,y[0]=e[0]+c.v1.vector[0],y[1]=e[1]+c.v1.vector[1],B[0]=h[0]+c.v2.vector[0],B[1]=h[1]+c.v2.vector[1],C[0]=d[0]+c.v3.vector[0],C[1]=d[1]+c.v3.vector[1],0>(B[0]-y[0])*(C[1]-y[1])-(C[0]-y[0])*(B[1]-y[1])||R(c.v2,c.v3)};d.prototype.pie=function(a,b){if(0===b.lists[l.CAP].count)a.count=
0;else if(1===b.lists[l.CAP].count)console.error("A single vector is not enough to define a pie."),a.count=0;else{a.count=b.lists[l.CAP].count-1;var c;for(c=0;c<a.count;++c){var f=a.items[c],d=b.vectors.items[b.lists[l.CAP].items[c]];f.v1.vector[0]=d.vector[0];f.v1.vector[1]=d.vector[1];f.v1.texCoords[0]=d.texCoords[0];f.v1.texCoords[1]=d.texCoords[1];f.v1.direction[0]=d.direction[0];f.v1.direction[1]=d.direction[1];f.v1.base=d.base;d=b.vectors.items[b.lists[l.CAP].items[c+1]];f.v2.vector[0]=d.vector[0];
f.v2.vector[1]=d.vector[1];f.v2.texCoords[0]=d.texCoords[0];f.v2.texCoords[1]=d.texCoords[1];f.v2.direction[0]=d.direction[0];f.v2.direction[1]=d.direction[1];f.v2.base=d.base;d=b.vectors.items[b.capCenter];f.v3.vector[0]=d.vector[0];f.v3.vector[1]=d.vector[1];f.v3.texCoords[0]=d.texCoords[0];f.v3.texCoords[1]=d.texCoords[1];f.v3.direction[0]=d.direction[0];f.v3.direction[1]=d.direction[1];f.v3.base=d.base;var d=f.v1.base&&f.v1.base.point||E,g=f.v2.base&&f.v2.base.point||E,e=f.v3.base&&f.v3.base.point||
E;y[0]=d[0]+f.v1.vector[0];y[1]=d[1]+f.v1.vector[1];B[0]=g[0]+f.v2.vector[0];B[1]=g[1]+f.v2.vector[1];C[0]=e[0]+f.v3.vector[0];C[1]=e[1]+f.v3.vector[1];0>(B[0]-y[0])*(C[1]-y[1])-(C[0]-y[0])*(B[1]-y[1])||R(f.v2,f.v3)}}};d.prototype.buttCap=function(a,b,c){this.fastMiterJoin(a,b,c)};d.prototype.roundCap=function(a,b,c,d,t,g){void 0===g&&(g=0);this.fastMiterJoin(a,b,c);c=d===L.START?0:1;d=d===L.START?1:0;a.capCenter=a.vectors.count;b=a.vectors.items[a.capCenter];b.vector[0]=0;b.vector[1]=0;b.texCoords[0]=
0;b.texCoords[1]=0;b.direction[0]=0;b.direction[1]=0;++a.vectors.count;T(q,a.vectors.items[c].vector,a.vectors.items[d].vector,t,!1);t=a.vectors.count;b=a.lists[l.CAP];b.items[0]=c;c=a.vectors.items[c].texCoords[1];var e=a.vectors.items[d].texCoords[1],f;for(f=0;f<q.count;++f){var k=g*(1-Math.abs(q.count/2-f)/(q.count/2)),u=c+f/(q.count-1)*(e-c),w=q.items[f],p=a.vectors.items[t+f];p.vector[0]=w[0];p.vector[1]=w[1];p.texCoords[0]=k;p.texCoords[1]=u;p.direction[0]=0;p.direction[1]=0;b.items[f+1]=t+
f}b.items[q.count+1]=d;b.count=q.count+2;a.vectors.count=t+q.count};d.prototype.squareCap=function(a,b,c,d){this.fastMiterJoin(a,b,c);b=d===L.START?0:1;c=d===L.START?1:0;var f=k[0],g=k[1],e=k[2],h=k[3];d=k[4];var l=a.vectors.items[b].vector;f[0]=F*l[0]-G*l[1];f[1]=G*l[0]+F*l[1];x(h,f,V);g[0]=F*f[0]-G*f[1];g[1]=G*f[0]+F*f[1];e[0]=F*g[0]-G*g[1];e[1]=G*g[0]+F*g[1];x(d,e,V);b=a.vectors.items[b];b.vector[0]=h[0];b.vector[1]=h[1];a=a.vectors.items[c];a.vector[0]=d[0];a.vector[1]=d[1]};d.prototype.fastMiterJoin=
function(a,b,c){c=z(k[0],c);b=u(k[1],c);var d=a.vectors.items[0];d.vector[0]=c[0];d.vector[1]=c[1];d.texCoords[0]=0;d.texCoords[1]=-1;d.direction[0]=0;d.direction[1]=0;c=a.vectors.items[1];c.vector[0]=b[0];c.vector[1]=b[1];c.texCoords[0]=0;c.texCoords[1]=1;c.direction[0]=0;c.direction[1]=0;a.vectors.count=2;b=a.lists[l.ENTRY];b.items[0]=0;b.items[1]=1;b.count=2;b=a.lists[l.EXIT];b.items[0]=0;b.items[1]=1;b.count=2;a.lists[l.CAP].count=0;a.capCenter=void 0};d.prototype.miterJoin=function(a,b,c){var d=
z(k[0],b),t=z(k[1],c),g=k[2];g[0]=d[0]+t[0];g[1]=d[1]+t[1];t=O(k[3],g);d=J(t,d);t=x(k[4],t,1/d);d=u(k[5],t);this._distanceAlongCorrection?(g=a.vectors.items[0],g.vector[0]=t[0],g.vector[1]=t[1],g.texCoords[0]=0,g.texCoords[1]=-1,g.direction[0]=b[0],g.direction[1]=b[1],g=a.vectors.items[1],g.vector[0]=d[0],g.vector[1]=d[1],g.texCoords[0]=0,g.texCoords[1]=1,g.direction[0]=b[0],g.direction[1]=b[1],b=a.vectors.items[2],b.vector[0]=t[0],b.vector[1]=t[1],b.texCoords[0]=0,b.texCoords[1]=-1,b.direction[0]=
c[0],b.direction[1]=c[1],b=a.vectors.items[3],b.vector[0]=d[0],b.vector[1]=d[1],b.texCoords[0]=0,b.texCoords[1]=1,b.direction[0]=c[0],b.direction[1]=c[1],a.vectors.count=4,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[l.EXIT],c.items[0]=2,c.items[1]=3):(g=a.vectors.items[0],g.vector[0]=t[0],g.vector[1]=t[1],g.texCoords[0]=0,g.texCoords[1]=-1,g.direction[0]=0,g.direction[1]=0,g=a.vectors.items[1],g.vector[0]=d[0],g.vector[1]=d[1],g.texCoords[0]=0,g.texCoords[1]=1,g.direction[0]=
0,g.direction[1]=0,a.vectors.count=2,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[l.EXIT],c.items[0]=0,c.items[1]=1);c.count=2;a.lists[l.CAP].count=0;a.capCenter=void 0};d.prototype.bevelJoin=function(a,b,c,d){var f=d*d;d=K(b,c);var g=0<d?[-1,1]:[1,-1],e=g[0],g=g[1],h=0<d?u(k[0],z(k[1],b)):z(k[2],b),H=0<d?u(k[3],z(k[4],c)):z(k[5],c),q=k[6];q[0]=h[0]+H[0];q[1]=h[1]+H[1];var w=O(k[7],q),p=u(k[8],w),m=J(w,h),q=K(w,h),n=Math.abs(q/m),q=1+n*n,r=q<P?[n,this._distanceAlongCorrection]:
[Math.sqrt(P-1),!0],v=r[0],r=r[1],y=q<f?[n,this._distanceAlongCorrection]:[Math.sqrt(f-1),!0],n=y[0];(y=y[1])&&r?(r=a.vectors.items[0],A(r.vector,u(k[9],h),x(k[10],u(k[11],b),v)),r.texCoords[0]=0,r.texCoords[1]=e,r.direction[0]=this._distanceAlongCorrection?b[0]:0,r.direction[1]=this._distanceAlongCorrection?b[1]:0,p=a.vectors.items[1],A(p.vector,u(k[12],H),x(k[13],c,v)),p.texCoords[0]=0,p.texCoords[1]=e,p.direction[0]=this._distanceAlongCorrection?c[0]:0,p.direction[1]=this._distanceAlongCorrection?
c[1]:0,e=a.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.texCoords[0]=0,e.texCoords[1]=0,e.direction[0]=0,e.direction[1]=0,e=a.vectors.items[3],A(e.vector,h,x(k[14],b,n)),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=this._distanceAlongCorrection?b[0]:0,e.direction[1]=this._distanceAlongCorrection?b[1]:0,b=a.vectors.items[4],A(b.vector,H,x(k[15],u(k[16],c),n)),b.texCoords[0]=0,b.texCoords[1]=g,b.direction[0]=this._distanceAlongCorrection?c[0]:0,b.direction[1]=this._distanceAlongCorrection?c[1]:
0,a.vectors.count=5,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=2,c.items[2]=3,c.count=3,c=a.lists[l.EXIT],c.items[0]=1,c.items[1]=2,c.items[2]=4,c.count=3,q<f?(f=a.lists[l.CAP],f.count=0,a.capCenter=void 0):(f=a.lists[l.CAP],f.items[0]=3,f.items[1]=4,f.count=2,a.capCenter=2)):!y&&r?(r=a.vectors.items[0],A(r.vector,u(k[9],h),x(k[10],u(k[11],b),v)),r.texCoords[0]=0,r.texCoords[1]=e,r.direction[0]=this._distanceAlongCorrection?b[0]:0,r.direction[1]=this._distanceAlongCorrection?b[1]:0,p=a.vectors.items[1],
A(p.vector,u(k[12],H),x(k[13],c,v)),p.texCoords[0]=0,p.texCoords[1]=e,p.direction[0]=this._distanceAlongCorrection?c[0]:0,p.direction[1]=this._distanceAlongCorrection?c[1]:0,e=a.vectors.items[2],e.vector[0]=0,e.vector[1]=0,e.texCoords[0]=0,e.texCoords[1]=0,e.direction[0]=0,e.direction[1]=0,e=a.vectors.items[3],x(e.vector,w,1/m),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=0,e.direction[1]=0,a.vectors.count=4,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=2,c.items[2]=3,c.count=3,c=a.lists[l.EXIT],
c.items[0]=1,c.items[1]=2,c.items[2]=3,c.count=3,a.lists[l.CAP].count=0,a.capCenter=void 0):y&&!r?(r=a.vectors.items[0],x(r.vector,p,1/m),r.texCoords[0]=0,r.texCoords[1]=e,r.direction[0]=0,r.direction[1]=0,p=a.vectors.items[1],p.vector[0]=0,p.vector[1]=0,p.texCoords[0]=0,p.texCoords[1]=0,p.direction[0]=0,p.direction[1]=0,e=a.vectors.items[2],A(e.vector,h,x(k[9],b,n)),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=this._distanceAlongCorrection?b[0]:0,e.direction[1]=this._distanceAlongCorrection?
b[1]:0,e=a.vectors.items[3],A(e.vector,H,x(k[10],u(k[11],c),n)),e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=this._distanceAlongCorrection?c[0]:0,e.direction[1]=this._distanceAlongCorrection?c[1]:0,a.vectors.count=4,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=1,c.items[2]=2,c.count=3,c=a.lists[l.EXIT],c.items[0]=0,c.items[1]=1,c.items[2]=3,c.count=3,q<f?(f=a.lists[l.CAP],f.count=0,a.capCenter=void 0):(f=a.lists[l.CAP],f.items[0]=2,f.items[1]=3,f.count=2,a.capCenter=1)):y||r||(r=a.vectors.items[0],
x(r.vector,p,1/m),r.texCoords[0]=0,r.texCoords[1]=e,r.direction[0]=0,r.direction[1]=0,p=a.vectors.items[1],x(p.vector,w,1/m),p.texCoords[0]=0,p.texCoords[1]=g,p.direction[0]=0,p.direction[1]=0,a.vectors.count=2,c=a.lists[l.ENTRY],c.items[0]=0,c.items[1]=1,c.count=2,c=a.lists[l.EXIT],c.items[0]=0,c.items[1]=1,c.count=2,a.lists[l.CAP].count=0,a.capCenter=void 0);0>d&&(D(a.lists[l.ENTRY]),D(a.lists[l.EXIT]))};d.prototype.roundJoin=function(a,b,c,d){var f=K(b,c),g=0<f?[-1,1]:[1,-1],e=g[0],g=g[1],h=0<
f?u(k[0],z(k[1],b)):z(k[2],b),n=0<f?u(k[3],z(k[4],c)):z(k[5],c),v=k[6];v[0]=h[0]+n[0];v[1]=h[1]+n[1];var w=O(k[7],v),v=u(k[8],w),p=J(w,h),w=K(w,h),w=Math.abs(w/p),m=1+w*w<P?[w,this._distanceAlongCorrection]:[Math.sqrt(P-1),!0],w=m[0];m[1]?(m=a.vectors.items[0],m.vector[0]=h[0],m.vector[1]=h[1],m.texCoords[0]=0,m.texCoords[1]=g,m.direction[0]=0,m.direction[1]=0,m=a.vectors.items[1],m.vector[0]=n[0],m.vector[1]=n[1],m.texCoords[0]=0,m.texCoords[1]=g,m.direction[0]=0,m.direction[1]=0,m=a.vectors.items[2],
A(m.vector,u(k[9],h),x(k[10],u(k[11],b),w)),m.texCoords[0]=0,m.texCoords[1]=e,m.direction[0]=this._distanceAlongCorrection?b[0]:0,m.direction[1]=this._distanceAlongCorrection?b[1]:0,b=a.vectors.items[3],A(b.vector,u(k[12],n),x(k[13],c,w)),b.texCoords[0]=0,b.texCoords[1]=e,b.direction[0]=this._distanceAlongCorrection?c[0]:0,b.direction[1]=this._distanceAlongCorrection?c[1]:0,c=a.vectors.items[4],c.vector[0]=0,c.vector[1]=0,c.texCoords[0]=0,c.texCoords[1]=0,c.direction[0]=0,c.direction[1]=0,a.vectors.count=
5,c=a.lists[l.ENTRY],c.items[0]=2,c.items[1]=4,c.items[2]=0,c.count=3,c=a.lists[l.EXIT],c.items[0]=3,c.items[1]=4,c.items[2]=1,c.count=3,a.capCenter=4):(m=a.vectors.items[0],m.vector[0]=h[0],m.vector[1]=h[1],m.texCoords[0]=0,m.texCoords[1]=g,m.direction[0]=0,m.direction[1]=0,m=a.vectors.items[1],m.vector[0]=n[0],m.vector[1]=n[1],m.texCoords[0]=0,m.texCoords[1]=g,m.direction[0]=0,m.direction[1]=0,m=a.vectors.items[2],x(m.vector,v,1/p),m.texCoords[0]=0,m.texCoords[1]=e,m.direction[0]=0,m.direction[1]=
0,b=a.vectors.items[3],b.vector[0]=0,b.vector[1]=0,b.texCoords[0]=0,b.texCoords[1]=0,b.direction[0]=0,b.direction[1]=0,a.vectors.count=4,c=a.lists[l.ENTRY],c.items[0]=2,c.items[1]=3,c.items[2]=0,c.count=3,c=a.lists[l.EXIT],c.items[0]=2,c.items[1]=3,c.items[2]=1,c.count=3,a.capCenter=3);T(q,h,n,d,0>f);d=a.vectors.count;h=a.lists[l.CAP];for(n=h.items[0]=0;n<q.count;++n)c=q.items[n],e=a.vectors.items[d+n],e.vector[0]=c[0],e.vector[1]=c[1],e.texCoords[0]=0,e.texCoords[1]=g,e.direction[0]=0,e.direction[1]=
0,h.items[n+1]=d+n;h.items[q.count+1]=1;h.count=q.count+2;a.vectors.count=d+q.count;0>f&&(D(a.lists[l.ENTRY]),D(a.lists[l.EXIT]))};d.prototype.unitRoundJoin=function(a,b,c,d){var f=K(b,c),g=0<f?[-1,1]:[1,-1],e=g[0],g=g[1];b=0<f?u(k[0],z(k[1],b)):z(k[2],b);c=0<f?u(k[3],z(k[4],c)):z(k[5],c);var h=a.vectors.items[0];h.vector[0]=b[0];h.vector[1]=b[1];h.texCoords[0]=0;h.texCoords[1]=g;h.direction[0]=0;h.direction[1]=0;h=a.vectors.items[1];h.vector[0]=c[0];h.vector[1]=c[1];h.texCoords[0]=0;h.texCoords[1]=
g;h.direction[0]=0;h.direction[1]=0;h=a.vectors.items[2];u(h.vector,b);h.texCoords[0]=0;h.texCoords[1]=e;h.direction[0]=0;h.direction[1]=0;h=a.vectors.items[3];u(h.vector,c);h.texCoords[0]=0;h.texCoords[1]=e;h.direction[0]=0;h.direction[1]=0;e=a.vectors.items[4];e.vector[0]=0;e.vector[1]=0;e.texCoords[0]=0;e.texCoords[1]=0;e.direction[0]=0;e.direction[1]=0;a.vectors.count=5;e=a.lists[l.ENTRY];e.items[0]=2;e.items[1]=0;e.count=2;e=a.lists[l.EXIT];e.items[0]=3;e.items[1]=1;e.count=2;a.capCenter=4;T(q,
b,c,d,0>f);d=a.vectors.count;b=a.lists[l.CAP];for(e=b.items[0]=0;e<q.count;++e)c=q.items[e],h=a.vectors.items[d+e],h.vector[0]=c[0],h.vector[1]=c[1],h.texCoords[0]=0,h.texCoords[1]=g,h.direction[0]=0,h.direction[1]=0,b.items[e+1]=d+e;b.items[q.count+1]=1;b.count=q.count+2;a.vectors.count=d+q.count;0>f&&(D(a.lists[l.ENTRY]),D(a.lists[l.EXIT]))};d.prototype.rectJoin=function(a,b,c){b=z(k[0],b);c=z(k[1],c);var d=a.vectors.items[0];d.vector[0]=b[0];d.vector[1]=b[1];d.texCoords[0]=0;d.texCoords[1]=-1;
d.direction[0]=0;d.direction[1]=0;d=a.vectors.items[1];d.vector[0]=c[0];d.vector[1]=c[1];d.texCoords[0]=0;d.texCoords[1]=-1;d.direction[0]=0;d.direction[1]=0;d=a.vectors.items[2];u(d.vector,b);d.texCoords[0]=0;d.texCoords[1]=1;d.direction[0]=0;d.direction[1]=0;b=a.vectors.items[3];u(b.vector,c);b.texCoords[0]=0;b.texCoords[1]=1;b.direction[0]=0;b.direction[1]=0;a.vectors.count=4;b=a.lists[l.ENTRY];b.items[0]=0;b.items[1]=2;b.count=2;b=a.lists[l.EXIT];b.items[0]=1;b.items[1]=3;b.count=2;a.capCenter=
void 0};return d}();n.Tessellator=I});