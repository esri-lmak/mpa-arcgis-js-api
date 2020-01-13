// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TileClipper",["require","exports","./Geometry","./GeometryUtils"],function(u,x,m,v){Object.defineProperty(x,"__esModule",{value:!0});var w=function(){return function(l,a,b){this.ratio=l;this.x=a;this.y=b}}();u=function(){function l(a,b,c,e,h){void 0===e&&(e=8);void 0===h&&(h=8);this.lines=[];this.starts=[];this.pixelRatio=e;this.pixelMargin=h;this.tileSize=512*e;this.dz=a;this.yPos=b;this.xPos=c}l.prototype.setExtent=function(a){this.finalRatio=
this.tileSize/a*(1<<this.dz);var b=this.pixelRatio*this.pixelMargin,b=b/this.finalRatio;a>>=this.dz;b>a&&(b=a);this.margin=b;this.xmin=a*this.xPos-b;this.ymin=a*this.yPos-b;this.xmax=this.xmin+a+2*b;this.ymax=this.ymin+a+2*b};l.prototype.reset=function(a){this.type=a;this.lines=[];this.starts=[];this.line=null;this.start=0};l.prototype.moveTo=function(a,b){this._pushLine();this._prevIsIn=this._isIn(a,b);this._moveTo(a,b,this._prevIsIn);this._prevPt=new m.Point(a,b);this._firstPt=new m.Point(a,b);
this._dist=0};l.prototype.lineTo=function(a,b){var c=this._isIn(a,b),e=new m.Point(a,b),h=m.Point.distance(this._prevPt,e),f,d,g;if(c)this._prevIsIn?this._lineTo(a,b,!0):(f=this._prevPt,d=e,a=this._intersect(d,f),this.start=this._dist+h*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(d.x,d.y,!0));else if(this._prevIsIn)d=this._prevPt,f=e,a=this._intersect(d,f),this._lineTo(a.x,a.y,!0),this._lineTo(f.x,f.y,!1);else{var k=this._prevPt;if(!(k.x<=this.xmin&&e.x<=this.xmin||k.x>=this.xmax&&e.x>=this.xmax||
k.y<=this.ymin&&e.y<=this.ymin||k.y>=this.ymax&&e.y>=this.ymax)){a=[];if(k.x<this.xmin&&e.x>this.xmin||k.x>this.xmin&&e.x<this.xmin)b=(this.xmin-k.x)/(e.x-k.x),g=k.y+b*(e.y-k.y),g<=this.ymin?d=!1:g>=this.ymax?d=!0:a.push(new w(b,this.xmin,g));if(k.x<this.xmax&&e.x>this.xmax||k.x>this.xmax&&e.x<this.xmax)b=(this.xmax-k.x)/(e.x-k.x),g=k.y+b*(e.y-k.y),g<=this.ymin?d=!1:g>=this.ymax?d=!0:a.push(new w(b,this.xmax,g));if(k.y<this.ymin&&e.y>this.ymin||k.y>this.ymin&&e.y<this.ymin)b=(this.ymin-k.y)/(e.y-
k.y),g=k.x+b*(e.x-k.x),g<=this.xmin?f=!1:g>=this.xmax?f=!0:a.push(new w(b,g,this.ymin));if(k.y<this.ymax&&e.y>this.ymax||k.y>this.ymax&&e.y<this.ymax)b=(this.ymax-k.y)/(e.y-k.y),g=k.x+b*(e.x-k.x),g<=this.xmin?f=!1:g>=this.xmax?f=!0:a.push(new w(b,g,this.ymax));if(0===a.length)f?d?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):d?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(1<a.length&&a[0].ratio>a[1].ratio)this.start=this._dist+h*a[1].ratio,
this._lineTo(a[1].x,a[1].y,!0),this._lineTo(a[0].x,a[0].y,!0);else for(this.start=this._dist+h*a[0].ratio,f=0;f<a.length;f++)this._lineTo(a[f].x,a[f].y,!0)}this._lineTo(e.x,e.y,!1)}this._dist+=h;this._prevIsIn=c;this._prevPt=e};l.prototype.close=function(){if(2<this.line.length){var a=this._firstPt,b=this._prevPt;a.x===b.x&&a.y===b.y||this.lineTo(a.x,a.y);a=this.line;for(b=a.length;4<=b;)if(a[0].x===a[1].x&&a[0].x===a[b-2].x||a[0].y===a[1].y&&a[0].y===a[b-2].y)a.pop(),a[0].x=a[b-2].x,a[0].y=a[b-2].y,
--b;else break}};l.prototype.result=function(a){void 0===a&&(a=!0);this._pushLine();if(0===this.lines.length)return null;3===this.type&&a&&y.simplify(this.tileSize,this.margin*this.finalRatio,this.lines);return this.lines};l.prototype.resultWithStarts=function(){if(2!==this.type)throw Error("Only valid for lines");this._pushLine();var a=this.lines,b=a.length;if(0===b)return null;for(var c=[],e=0;e<b;e++)c.push({line:a[e],start:this.starts[e]||0});return c};l.prototype._isIn=function(a,b){return a>=
this.xmin&&a<=this.xmax&&b>=this.ymin&&b<=this.ymax};l.prototype._intersect=function(a,b){var c,e,h;if(b.x>=this.xmin&&b.x<=this.xmax)e=b.y<=this.ymin?this.ymin:this.ymax,h=(e-a.y)/(b.y-a.y),c=a.x+h*(b.x-a.x);else if(b.y>=this.ymin&&b.y<=this.ymax)c=b.x<=this.xmin?this.xmin:this.xmax,h=(c-a.x)/(b.x-a.x),e=a.y+h*(b.y-a.y);else{e=b.y<=this.ymin?this.ymin:this.ymax;c=b.x<=this.xmin?this.xmin:this.xmax;var f=(c-a.x)/(b.x-a.x),d=(e-a.y)/(b.y-a.y);f<d?(h=f,e=a.y+f*(b.y-a.y)):(h=d,c=a.x+d*(b.x-a.x))}this._r=
h;return new m.Point(c,e)};l.prototype._pushLine=function(){this.line&&(1===this.type?0<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?1<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&3<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)));this.line=[];this.start=0};l.prototype._moveTo=function(a,b,c){3!==this.type?c&&(a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-
(this.ymin+this.margin))*this.finalRatio),this.line.push(new m.Point(a,b))):(c||(a<this.xmin&&(a=this.xmin),a>this.xmax&&(a=this.xmax),b<this.ymin&&(b=this.ymin),b>this.ymax&&(b=this.ymax)),a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-(this.ymin+this.margin))*this.finalRatio),this.line.push(new m.Point(a,b)),this._is_v=this._is_h=!1)};l.prototype._lineTo=function(a,b,c){if(3!==this.type)if(c){a=Math.round((a-(this.xmin+this.margin))*this.finalRatio);b=Math.round((b-(this.ymin+
this.margin))*this.finalRatio);if(0<this.line.length&&(c=this.line[this.line.length-1],c.equals(a,b)))return;this.line.push(new m.Point(a,b))}else this.line&&0<this.line.length&&this._pushLine();else if(c||(a<this.xmin&&(a=this.xmin),a>this.xmax&&(a=this.xmax),b<this.ymin&&(b=this.ymin),b>this.ymax&&(b=this.ymax)),a=Math.round((a-(this.xmin+this.margin))*this.finalRatio),b=Math.round((b-(this.ymin+this.margin))*this.finalRatio),this.line&&0<this.line.length){c=this.line[this.line.length-1];var e=
c.x===a,h=c.y===b;e&&h||(this._is_h&&e?(c.x=a,c.y=b,c=this.line[this.line.length-2],c.x===a&&c.y===b?(this.line.pop(),1>=this.line.length?this._is_v=this._is_h=!1:(c=this.line[this.line.length-2],this._is_h=c.x===a,this._is_v=c.y===b)):(this._is_h=c.x===a,this._is_v=c.y===b)):this._is_v&&h?(c.x=a,c.y=b,c=this.line[this.line.length-2],c.x===a&&c.y===b?(this.line.pop(),1>=this.line.length?this._is_v=this._is_h=!1:(c=this.line[this.line.length-2],this._is_h=c.x===a,this._is_v=c.y===b)):(this._is_h=c.x===
a,this._is_v=c.y===b)):(this.line.push(new m.Point(a,b)),this._is_h=e,this._is_v=h))}else this.line.push(new m.Point(a,b))};return l}();x.TileClipper=u;u=function(){function l(){}l.prototype.setExtent=function(a){this._ratio=4096===a?1:4096/a};l.prototype.reset=function(a){this.type=a;this.lines=[];this.line=null};l.prototype.moveTo=function(a,b){this.line&&this.lines.push(this.line);this.line=[];var c=this._ratio;this.line.push(new m.Point(Math.round(a*c),Math.round(b*c)))};l.prototype.lineTo=function(a,
b){var c=this._ratio;this.line.push(new m.Point(Math.round(a*c),Math.round(b*c)))};l.prototype.close=function(){var a=this.line;a&&!a[0].isEqual(a[a.length-1])&&a.push(a[0])};l.prototype.result=function(){this.line&&this.lines.push(this.line);if(0===this.lines.length)return null;3===this.type&&1!==this._ratio&&y.simplify(4096,64,this.lines);return this.lines};return l}();x.SimpleBuilder=u;var y=function(){function l(){}l.simplify=function(a,b,c){if(c){var e=-b,h=a+b,f=-b,d=a+b;a=[];b=[];for(var g=
c.length,k=0;k<g;++k){var m=c[k];if(m&&!(2>m.length))for(var r=m[0],n=void 0,t=m.length,p=1;p<t;++p)n=m[p],r.x===n.x&&(r.x<=e&&(r.y>n.y?(a.push(k),a.push(p),a.push(0),a.push(-1)):(b.push(k),b.push(p),b.push(0),b.push(-1))),r.x>=h&&(r.y<n.y?(a.push(k),a.push(p),a.push(1),a.push(-1)):(b.push(k),b.push(p),b.push(1),b.push(-1)))),r.y===n.y&&(r.y<=f&&(r.x<n.x?(a.push(k),a.push(p),a.push(2),a.push(-1)):(b.push(k),b.push(p),b.push(2),b.push(-1))),r.y>=d&&(r.x>n.x?(a.push(k),a.push(p),a.push(3),a.push(-1)):
(b.push(k),b.push(p),b.push(3),b.push(-1)))),r=n}0!==a.length&&0!==b.length&&(l.fillParent(c,b,a),l.fillParent(c,a,b),e=[],l.calcDeltas(e,b,a),l.calcDeltas(e,a,b),l.addDeltas(e,c))}};l.fillParent=function(a,b,c){for(var e=c.length,h=b.length,f=0;f<h;f+=4){for(var d=b[f],g=b[f+1],k=b[f+2],l=a[d][g-1],d=a[d][g],g=8092,m=-1,n=0;n<e;n+=4)if(c[n+2]===k){var t=c[n],p=c[n+1],q=a[t][p-1],t=a[t][p];switch(k){case 0:case 1:v.between(l.y,q.y,t.y)&&v.between(d.y,q.y,t.y)&&(q=Math.abs(t.y-q.y),q<g&&(g=q,m=n));
break;case 2:case 3:v.between(l.x,q.x,t.x)&&v.between(d.x,q.x,t.x)&&(q=Math.abs(t.x-q.x),q<g&&(g=q,m=n))}}b[f+3]=m}};l.calcDeltas=function(a,b,c){for(var e=b.length,h=0;h<e;h+=4){var f=l.calcDelta(h,b,c,[]);a.push(b[h]);a.push(b[h+1]);a.push(b[h+2]);a.push(f)}};l.calcDelta=function(a,b,c,e){a=b[a+3];if(-1===a)return 0;var h=e.length;if(1<h&&e[h-2]===a)return 0;e.push(a);return l.calcDelta(a,c,b,e)+1};l.addDeltas=function(a,b){for(var c=a.length,e=0,h=0;h<c;h+=4){var f=a[h+3];f>e&&(e=f)}for(h=0;h<
c;h+=4){var d=b[a[h]],g=a[h+1],f=e-a[h+3];switch(a[h+2]){case 0:d[g-1].x-=f;d[g].x-=f;1===g&&(d[d.length-1].x-=f);g===d.length-1&&(d[0].x-=f);break;case 1:d[g-1].x+=f;d[g].x+=f;1===g&&(d[d.length-1].x+=f);g===d.length-1&&(d[0].x+=f);break;case 2:d[g-1].y-=f;d[g].y-=f;1===g&&(d[d.length-1].y-=f);g===d.length-1&&(d[0].y-=f);break;case 3:d[g-1].y+=f,d[g].y+=f,1===g&&(d[d.length-1].y+=f),g===d.length-1&&(d[0].y+=f)}}};return l}()});