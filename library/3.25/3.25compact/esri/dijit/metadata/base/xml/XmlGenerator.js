// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/xml/XmlGenerator","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ./xmlUtil ../../../../kernel".split(" "),function(f,g,l,y,t,z){f=f(null,{nl:"\r\n",tb:"\t",xmlHeader:'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e',constructor:function(a){g.mixin(this,a)},generate:function(a,b,d,c){a={gxeDocument:a,transformer:c};b=this._collect(b,null,{ignoreOptionallyOff:!1,validationTracker:d});b=this._walk(b,!0,a);d&&d.whenComplete();return b},_checkTarget:function(a,
b,d){var c,e="",p="";c=b.widget;b=c.target;a.transformer&&(b=a.transformer.checkTarget(c,b));a=[b];c.inputWidget&&c.inputWidget.subTarget&&(c=g.trim(c.inputWidget.subTarget),0<c.length&&(a.push(c),b=c,e=d+"\x3c"+a[0]+"\x3e",p=d+"\x3c/"+a[0]+"\x3e"));return{aNames:a,sBegin:e,sEnd:p,sName:b}},_collect:function(a,b,d){if(a.ignoreContent)return null;var c,e;c=e=!1;a._isGxeElement?(c=a._isOptionallyOff,a.multiplicityHeader&&a.multiplicityHeader.useTabs&&(c=a.multiplicityHeader._isOptionallyOff)):c=a._isOptionallyOff;
if(a._isGxeElement){if(d.ignoreOptionallyOff||!c)e={isAttribute:!1,widget:a,depth:0,xvalue:null,serialize:a.serialize,references:[],attributeRefs:[],elementRefs:[]},e.xvalue=a.checkXmlValue(),a.isDocumentTitle&&(d.validationTracker.documentTitle=e.xvalue),a.validateValue(d.validationTracker),b&&(e.depth=b.depth+1,b.references.push(e),b.elementRefs.push(e)),b=e,e=!0}else if(a._isGxeAttribute){if(d.ignoreOptionallyOff||!c)c={isAttribute:!0,widget:a,xvalue:null,serialize:a.serialize},c.xvalue=a.checkXmlValue(),
a.isDocumentTitle&&(d.validationTracker.documentTitle=c.xvalue),a.validateValue(d.validationTracker),b&&(b.references.push(c),b.attributeRefs.push(c),c.serialize&&a.isIsoCodeListValue?(b.xvalue=c.xvalue,null===c.xvalue&&(b.serialize=!1)):!c.serialize&&a.isIsoCodeListValue&&(b.serialize=!1))}else if(d.ignoreOptionallyOff||!c)e=!0;e&&(l.forEach(a.getChildren(),function(a){this._collect(a,b,d)},this),a.validateConditionals&&a.validateConditionals(d.validationTracker));return b},_renderNamespaces:function(a,
b,d,c){if(!b)return a;b=d.getNamespaces();c.transformer&&(b=c.transformer.toDocumentType.getNamespaces());l.forEach(b,function(b){b.prefix&&b.uri&&(a+=" xmlns:"+b.prefix+'\x3d"'+b.uri+'"')});return a},_walk:function(a,b,d){if(!a.serialize)return"";var c=function(a,b,c,d,e,f,g){var h=null;if("TopicCatCd@value"===c)return a+d+"\x3cTopicCatCd value\x3d'"+f+"'/\x3e"+b;h=d+"\x3c"+c+e;0===f.length&&0===g.length?h+="/\x3e":(h+="\x3e",0<f.length&&(h+=f),0<g.length&&(h+=g+d),h+="\x3c/"+c+"\x3e");return a+
h+b},e,p,m="",f="",n=this.nl,g="",q=[];for(e=0;e<a.depth;e++)n+=this.tb;b&&(m=this._renderNamespaces(m,b,d.gxeDocument,d));a.serialize&&null!==a.xvalue&&(a.xvalue.push?l.forEach(a.xvalue,function(a){q.push(t.escape(a))},this):g=t.escape(a.xvalue));l.forEach(a.attributeRefs,function(a){a.serialize&&null!==a.xvalue&&(p=t.escape(a.xvalue),m+=" "+a.widget.target.replace("@","")+'\x3d"'+p+'"')},this);l.forEach(a.elementRefs,function(a){a=this._walk(a,!1,d);null!==a&&0<a.length&&(f+=a)},this);var x=0===
m.length&&0===g.length&&0===q.length&&0===f.length;if(x&&!a.widget.serializeIfEmpty)return null;var r=this._checkTarget(d,a,n),u=r.sBegin,v=r.sEnd,w=r.sName;for(e=0;e<r.aNames.length-1;e++)n+=this.tb;var k=null;x&&a.widget.serializeIfEmpty?k=u+n+"\x3c"+w+"/\x3e"+v:0===q.length?k=c(u,v,w,n,m,g,f):(k="",l.forEach(q,function(a){k+=c(u,v,w,n,m,a,f)}));b&&(k=this.xmlHeader+k);return k}});y("extend-esri")&&g.setObject("dijit.metadata.base.xml.XmlGenerator",f,z);return f});