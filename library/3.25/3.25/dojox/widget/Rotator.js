//>>built
define("dojox/widget/Rotator","dojo/aspect dojo/_base/declare dojo/_base/Deferred dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/topic dojo/on dojo/parser dojo/query dojo/fx/easing dojo/NodeList-dom".split(" "),function(v,p,w,e,m,x,y,n,g,r,k,t,A,z,u){p=p("dojox.widget.Rotator",null,{transition:"dojox.widget.rotator.swap",transitionParams:"duration:500",panes:null,constructor:function(c,b){e.mixin(this,c);var a=this;c=
a.transition;var d=a._transitions={};a._idMap={};var f=a.transitionParams=eval("({ "+a.transitionParams+" })");b=a._domNode=y.byId(b);a._domNodeContentBox=r.getContentBox(b);a.id=b.id||(new Date).getTime();"static"==k.get(b,"position")&&k.set(b,"position","relative");d[c]=e.getObject(c);d[c]||(this._transitionWarn(c,"dojox.widget.rotator.swap"),d[a.transition="dojox.widget.rotator.swap"]=e.getObject("dojox.widget.rotator.swap"));f.duration||(f.duration=500);m.forEach(a.panes,function(a){g.create("div",
a,b)});a.panes=[];u("\x3e *",b).forEach(function(c,b){a._initializePane(c,b)});a._controlSub=t.subscribe(a.id+"/rotator/control",e.hitch(a,this.control))},insert:function(c,b){var a;a=this.panes;null==b&&(b=a.length);b<a.length?(a=a[b],g.place(c,a.node,"before")):g.place(c,this._domNode,"last");this._initializePane(c,b)},remove:function(c){function b(a){if(a=f.splice(a,1)[0])a.id&&(d._idMap[a.id]=void 0),d._domNode.removeChild(a.node)}var a,d=this,f=this.panes;if("number"===typeof c)a=c;else{for(var e=
0;e<f.length;e++)if(f.node===c){a=e;break}if(null==a)return}if(a===this.idx){if(c=this.go(this.idx-1))return c.then(function(){b(a)});b(a)}else b(a),this.idx>a&&this.idx--},destroy:function(){m.forEach([this._controlSub,this.wfe],function(c){c&&c.remove()});g.destroy(this._domNode);this.panes=[]},next:function(){return this.go(this.idx+1)},prev:function(){return this.go(this.idx-1)},go:function(c){var b=this,a=b.idx,d=b.panes,f=d.length,n=b._idMap[c];b._resetWaitForEvent();c=null!=n?n:c||0;c=c<f?
0>c?f-1:c:0;if(c==a||b.anim)return null;var h=d[a],l=d[c];k.set(h.node,"zIndex",2);k.set(l.node,"zIndex",1);var q={current:h,next:l,rotator:b};if(a=b.anim=b._transitions[l.trans](e.mixin({rotatorBox:b._domNodeContentBox},q,l.params))){var m=new w,g=l.waitForEvent,p=v.after(a,"onEnd",function(){k.set(h.node,{display:"none",left:0,opacity:1,top:0,zIndex:0});p.remove();b.anim=null;b.idx=c;if(h.onAfterOut)h.onAfterOut(q);if(l.onAfterIn)l.onAfterIn(q);b.onUpdate("onAfterTransition");g||(b._resetWaitForEvent(),
m.callback())},!0);b.wfe=g?t.subscribe(g,function(){b._resetWaitForEvent();m.callback(!0)}):null;b.onUpdate("onBeforeTransition");if(h.onBeforeOut)h.onBeforeOut(q);if(l.onBeforeIn)l.onBeforeIn(q);a.play();return m}},onUpdate:function(c,b){t.publish(this.id+"/rotator/update",c,this,b||{})},_initializePane:function(c,b){var a={node:c,idx:b,params:e.mixin({},this.transitionParams,eval("({ "+(n.get(c,"transitionParams")||"")+" })"))},d=a.trans=n.get(c,"transition")||this.transition,f=this._transitions,
g=this.panes,h={left:0,top:0,position:"absolute",display:"none"};m.forEach(["id","title","duration","waitForEvent"],function(b){a[b]=n.get(c,b)});a.id&&(this._idMap[a.id]=b);f[d]||(f[d]=e.getObject(d))||this._transitionWarn(d,a.trans=this.transition);if(null==this.idx||n.get(c,"selected"))null!=this.idx&&k.set(g[this.idx].node,"display","none"),this.idx=b,h.display="";k.set(c,h);u("\x3e script[type^\x3d'dojo/method']",c).orphan().forEach(function(b){var c=n.get(b,"event");c&&(a[c]=z._functionFromScript(b))});
g.splice(b,0,a)},_resetWaitForEvent:function(){this.wfe&&(this.wfe.remove(),delete this.wfe)},control:function(c){var b=e._toArray(arguments),a=this;b.shift();a._resetWaitForEvent();a[c]?((b=a[c].apply(a,b))&&b.addCallback(function(){a.onUpdate(c)}),a.onManualChange(c)):console.warn(a.declaredClass,' - Unsupported action "',c,'".')},resize:function(c,b){var a=this._domNodeContentBox={w:c,h:b};r.setContentSize(this._domNode,a);m.forEach(this.panes,function(b){r.setContentSize(b.node,a)})},onManualChange:function(){},
_transitionWarn:function(c,b){console.warn(this.declaredClass,' - Unable to find transition "',c,'", defaulting to "',b,'".')}});e.setObject("dojox.widget.rotator.swap",function(c){return new x.Animation({play:function(){k.set(c.current.node,"display","none");k.set(c.next.node,"display","");this._fire("onEnd")}})});return p});