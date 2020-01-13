// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/util/Writer",["require","exports"],function(d,e){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a,b){this._pos=0;b=b?this._roundToNearest4(b):40;this._array=new ArrayBuffer(b);this._buffer=new a(this._array);this._ctor=a}Object.defineProperty(c.prototype,"length",{get:function(){return this._pos},enumerable:!0,configurable:!0});c.prototype._roundToNearest4=function(a){a=Math.round(a);return a+(4-a%4)};c.prototype._ensureSize=
function(a){if(this._pos+a>=this._buffer.length){a=this._roundToNearest4(1.5*(this._array.byteLength+4*a));a=new ArrayBuffer(a);var b=new this._ctor(a);b.set(this._buffer,0);this._array=a;this._buffer=b}};c.prototype.writeInt32=function(a){this._ensureSize(1);var b=this._pos;this._buffer[this._pos++]=a;return b};c.prototype.writeF32=function(a){this._ensureSize(1);var b=this._pos;(new Float32Array(this._array,4*this._pos,1))[0]=a;this._pos++;return b};c.prototype.writeUint32=function(a){this._ensureSize(1);
var b=this._pos;this._buffer[this._pos++]=a;return b};c.prototype.push=function(a){this._ensureSize(1);var b=this._pos;this._buffer[this._pos++]=a;return b};c.prototype.writeRegion=function(a){this._ensureSize(a.length);var b=this._pos;this._buffer.set(a,this._pos);this._pos+=a.length;return b};c.prototype.buffer=function(){var a=this._array.slice(0,4*this._pos);this.destroy();return a};c.prototype.destroy=function(){this._buffer=this._array=null};return c}();e.default=d});