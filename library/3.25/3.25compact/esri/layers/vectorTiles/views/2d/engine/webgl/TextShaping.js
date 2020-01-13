// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TextShaping",["require","exports","./Rect"],function(y,z,u){return function(){function l(a,d,e,b,h,k,c,f){this._glyphItems=a;this._maxWidth=d;this._lineHeight=e;this._letterSpacing=b;this._offset=h;this._hAnchor=k;this._vAnchor=c;this._justify=f}l.prototype.getShaping=function(a,d){for(var e=this._letterSpacing,b=this._lineHeight,h=this._justify,k=this._maxWidth,c=[],f=0,g=0,v=0,p=0,q=-1,r=0,l=-1,u=a.length,w=0;w<u;w++){var x=a.charCodeAt(w);if(10===
x){if(w!==u-1){if(q>=p){var f=c[q],m=f.x+f.glyphMosaicItem.metrics.advance,r=Math.max(m,r);h&&this._applyJustification(c,p,q);p=c.length}g=d?g-b:g+b;f=0;++v}}else{for(var m=void 0,t=0,n=this._glyphItems;t<n.length&&!(m=n[t][x]);t++);if(m){c.push({codePoint:x,x:f,y:g,glyphMosaicItem:m});f+=m.metrics.advance+e;if(0<k&&f>k&&0<=l){t=l+1;m=c[t].x;r=Math.max(m,r);for(n=t;n<c.length;n++)c[n].y=d?c[n].y-b:c[n].y+b,c[n].x-=m;h&&this._applyJustification(c,p,l);g=d?g-b:g+b;f-=m;++v;p=t;l=-1}++q;32===x&&(l=c.length-
1)}}}q>=p&&(f=c[q],r=Math.max(r,f.x+f.glyphMosaicItem.metrics.advance),h&&this._applyJustification(c,p,q));if(0<c.length)for(a=(h-this._hAnchor)*r,e=(-this._vAnchor*(v+1)+.5)*b,d&&v&&(e+=v*b),a+=this._offset[0],e+=this._offset[1],d=0;d<c.length;d++)b=c[d],b.x+=a,b.y+=e;return c};l.getBox=function(a){var d=a.length;if(0!==d){for(var e=a[0].x+a[0].glyphMosaicItem.metrics.left,b=e,h=a[0].y,k=h,c=h,f=1;f<d;f++){var g=a[f],l=g.x+g.glyphMosaicItem.metrics.left;l<e&&(e=l);l>b&&(b=l);g=g.y;g<h&&(h=g);g>k&&
(k=g);g!==c&&(b=Math.max(b,a[f-1].x+a[f-1].glyphMosaicItem.metrics.left+a[f-1].glyphMosaicItem.metrics.width),c=g)}b=Math.max(b,a[d-1].x+a[d-1].glyphMosaicItem.metrics.left+a[d-1].glyphMosaicItem.metrics.width);k+=12;return{x:e,y:k,width:b-e,height:k-(h-12)}}};l.addDecoration=function(a,d){var e=a.length;if(0!==e){for(var b=a[0].x+a[0].glyphMosaicItem.metrics.left,h=a[0].y,k=1;k<e;k++){var c=a[k];if(c.y!==h){var f=a[k-1].x+a[k-1].glyphMosaicItem.metrics.left+a[k-1].glyphMosaicItem.metrics.width;a.push({codePoint:0,
x:b,y:h+d-3,glyphMosaicItem:{rect:new u(4,0,4,8),metrics:{width:f-b,height:8,left:0,top:0,advance:0},page:0}});h=c.y;b=c.x+c.glyphMosaicItem.metrics.left}}e=a[e-1].x+a[e-1].glyphMosaicItem.metrics.left+a[e-1].glyphMosaicItem.metrics.width;a.push({codePoint:0,x:b,y:h+d-3,glyphMosaicItem:{rect:new u(4,0,4,8),metrics:{width:e-b,height:8,left:0,top:0,advance:0},page:0}})}};l.prototype._applyJustification=function(a,d,e){for(var b=a[e],b=(b.x+b.glyphMosaicItem.metrics.advance)*this._justify;d<=e;d++)a[d].x-=
b};return l}()});