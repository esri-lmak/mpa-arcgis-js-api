// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/ShaderTranspiler",["require","exports","./reservedWordsGLSL3","./lib/glsl-tokenizer/string"],function(w,q,r,t){function u(b){return b.map(function(b){return"eof"!==b.type?b.data:""}).join("")}function n(b,c,d,a){a=a||d;for(var e=0;e<b.length;e++){var f=b[e];if("ident"===f.type&&f.data===d)return a in c?c[a]++:c[a]=0,n(b,c,a+"_"+c[a],a)}return d}function v(b,c,d){void 0===d&&(d="afterVersion");var a={data:"\n",type:"whitespace"},e=function(a){return a<b.length?
/[^\r\n]$/.test(b[a].data):!1},f=function(a){for(var b=-1,c=0,e=-1,f=0;f<a.length;f++){var h=a[f];"preprocessor"===h.type&&(h.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++c:h.data.match(/\#endif\s*.*/)&&--c);("afterVersion"===d||"afterPrecision"===d)&&"preprocessor"===h.type&&/^#version/.test(h.data)&&(e=Math.max(e,f));if("afterPrecision"===d&&"keyword"===h.type&&"precision"===h.data){a:{for(h=f;h<a.length;h++){var g=a[h];if("operator"===g.type&&";"===g.data)break a}h=null}if(null===h)throw Error("precision statement not followed by any semicolons!");
e=Math.max(e,h)}b<e&&0===c&&(b=f)}return b+1}(b);e(f-1)&&b.splice(f++,0,a);for(var g=0;g<c.length;g++){var l=c[g];b.splice(f++,0,l)}e(f-1)&&e(f)&&b.splice(f,0,a)}Object.defineProperty(q,"__esModule",{value:!0});var p=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];q.transpileShader=function(b,c){b=t(b);var d;a:{d="100";var a="300 es";void 0===d&&(d="100");void 0===a&&(a="300 es");for(var e=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,f=0;f<b.length;f++){var g=
b[f];if("preprocessor"===g.type){var l=e.exec(g.data);if(l)if(e=l[1].replace(/\s\s+/g," "),e===a){d=e;break a}else if(e===d){g.data="#version "+a;break a}else throw Error("unknown glsl version: "+e);}}b.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"});d=null}if("300 es"===d)throw Error("shader is already glsl 300 es");e=g=null;f={};l={};for(d=0;d<b.length;++d)switch(a=b[d],a.type){case "keyword":"vertex"===c&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=
"vertex"===c?"out":"in");break;case "builtin":/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,""));if("fragment"===c&&"gl_FragColor"===a.data){if(!g){var g=n(b,f,"fragColor"),k=void 0;void 0===k&&(k="lowp");v(b,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:k},{type:"whitespace",data:" "},{type:"keyword",data:"vec4"},{type:"whitespace",data:" "},{type:"ident",data:g},{type:"operator",data:";"}],"afterPrecision")}a.data=
g}else"fragment"===c&&"gl_FragDepthEXT"===a.data&&(e||(e=n(b,f,"gl_FragDepth")),a.data=e);break;case "ident":if(0<=r.indexOf(a.data)){if(k="vertex"===c)a:{for(k=d-1;0<=k;k--){var m=b[k];if("whitespace"!==m.type&&"block-comment"!==m.type)if("keyword"===m.type){if("attribute"===m.data||"in"===m.data){k=!0;break a}}else break}k=!1}if(k)throw Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in l||(l[a.data]=n(b,f,a.data));a.data=l[a.data]}}for(d=b.length-1;0<=
d;--d)a=b[d],"preprocessor"===a.type&&((c=a.data.match(/\#extension\s+(.*)\:/))&&c[1]&&0<=p.indexOf(c[1].trim())&&(c=b[d+1],b.splice(d,c&&"whitespace"===c.type?2:1)),(c=a.data.match(/\#ifdef\s+(.*)/))&&c[1]&&0<=p.indexOf(c[1].trim())&&(a.data="#if 1"),(c=a.data.match(/\#ifndef\s+(.*)/))&&c[1]&&0<=p.indexOf(c[1].trim())&&(a.data="#if 0"));return u(b)}});