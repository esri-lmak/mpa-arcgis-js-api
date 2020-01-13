// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/libs/gl-matrix/mat2",["./common"],function(f){var d={create:function(){var a=new f.ARRAY_TYPE(4);a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},clone:function(a){var b=new f.ARRAY_TYPE(4);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},fromValues:function(a,b,c,h){var e=new f.ARRAY_TYPE(4);e[0]=a;e[1]=b;e[2]=c;e[3]=h;return e},set:function(a,
b,c,h,e){a[0]=b;a[1]=c;a[2]=h;a[3]=e;return a},transpose:function(a,b){if(a===b){var c=b[1];a[1]=b[2];a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a},invert:function(a,b){var c=b[0],h=b[1],e=b[2];b=b[3];var d=c*b-e*h;if(!d)return null;d=1/d;a[0]=b*d;a[1]=-h*d;a[2]=-e*d;a[3]=c*d;return a},adjoint:function(a,b){var c=b[0];a[0]=b[3];a[1]=-b[1];a[2]=-b[2];a[3]=c;return a},determinant:function(a){return a[0]*a[3]-a[2]*a[1]},multiply:function(a,b,c){var h=b[0],d=b[1],k=b[2];b=b[3];var g=c[0],
f=c[1],m=c[2];c=c[3];a[0]=h*g+k*f;a[1]=d*g+b*f;a[2]=h*m+k*c;a[3]=d*m+b*c;return a}};d.mul=d.multiply;d.rotate=function(a,b,c){var d=b[0],e=b[1],f=b[2];b=b[3];var g=Math.sin(c);c=Math.cos(c);a[0]=d*c+f*g;a[1]=e*c+b*g;a[2]=d*-g+f*c;a[3]=e*-g+b*c;return a};d.scale=function(a,b,c){var d=b[1],e=b[2],f=b[3],g=c[0];c=c[1];a[0]=b[0]*g;a[1]=d*g;a[2]=e*c;a[3]=f*c;return a};d.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;return a};d.fromScaling=function(a,b){a[0]=b[0];
a[1]=0;a[2]=0;a[3]=b[1];return a};d.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2))};d.LDU=function(a,b,c,d){a[2]=d[2]/d[0];c[0]=d[0];c[1]=d[1];c[3]=d[3]-a[2]*c[1];return[a,b,c]};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a};d.subtract=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a};d.sub=
d.subtract;d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]};d.equals=function(a,b){var c=a[0],d=a[1],e=a[2];a=a[3];var k=b[0],g=b[1],l=b[2];b=b[3];return Math.abs(c-k)<=f.EPSILON*Math.max(1,Math.abs(c),Math.abs(k))&&Math.abs(d-g)<=f.EPSILON*Math.max(1,Math.abs(d),Math.abs(g))&&Math.abs(e-l)<=f.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(a-b)<=f.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};d.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=
b[2]*c;a[3]=b[3]*c;return a};d.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;return a};return d});