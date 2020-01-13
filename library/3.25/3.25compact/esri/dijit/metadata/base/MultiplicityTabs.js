// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/base/templates/MultiplicityTabs.html":'\x3cdiv class\x3d"gxeMultiplicityTabs" style\x3d"display:none;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/base/MultiplicityTabs","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/keys dojo/dom-class dojo/dom-construct dojo/has ./Templated dojo/text!./templates/MultiplicityTabs.html ./TabButton ../../../kernel".split(" "),function(f,g,h,m,l,k,e,n,p,q,r,t,u){f=f([q],{multiplicityHeader:null,templateString:r,postCreate:function(){this.inherited(arguments);this.containerNode.setAttribute("role","tablist")},activateTab:function(a){if(a){this.highlightTab(a);
var c=a.tabIndex;this._setCurrentIndex(c);a=this.getElements();h.forEach(a,function(a,v){a.domNode.style.display=v===c?"block":"none"});this._updateTools(a)}},addTabButton:function(){var a=this.getCurrentIndex(),c=this.getChildren().length,b=new t({label:""+(c+1),tabIndex:c,onClick:g.hitch(this,function(a){this.activateTab(a)})});b.domNode.setAttribute("role","tab");b.domNode.setAttribute("aria-selected","false");b.domNode.setAttribute("tabindex","0");this.own(l(b.domNode,"focus",g.hitch(this,function(){this.activateTab(b)})));
this.own(l(b.domNode,"keydown",g.hitch(this,function(a){var c,d,e=null;a.keyCode===k.RIGHT_ARROW?(d=this.getChildren(),c=d.indexOf(b),-1!==c&&c<d.length-1&&(e=d[c+1])):a.keyCode===k.LEFT_ARROW?(d=this.getChildren(),c=d.indexOf(b),0<c&&(e=d[c-1])):a.keyCode===k.DOWN_ARROW&&(m.stop(a),d=this.getChildren(),c=d.indexOf(b),d=this.getElements(),h.some(d,function(b,d){if(d===c)return"function"===typeof b.focusDown&&b.focusDown(a),!0}));e&&e.domNode.focus()})));n.place(b.domNode,this.containerNode,"last");
-1===a&&(this._setCurrentIndex(0),e.add(b.domNode,"current"),b.domNode.setAttribute("aria-selected","true"));this.updateUI();return b},ensureTabButton:function(){0===this.getChildren().length&&this.addTabButton()},getCurrentIndex:function(){return this.multiplicityHeader._currentIndex},_setCurrentIndex:function(a){this.multiplicityHeader._currentIndex=a},getElements:function(){return this.multiplicityHeader.getElements()},getMultiplicityInfo:function(){return this.multiplicityHeader.getMultiplicityInfo(null)},
getTabButton:function(a){return this.getChildren()[a]},highlightTab:function(a){h.forEach(this.getChildren(),function(a){e.remove(a.domNode,"current");a.domNode.setAttribute("aria-selected","false")});e.add(a.domNode,"current");a.domNode.setAttribute("aria-selected","true")},initialize:function(a){this.multiplicityHeader=a;this.updateUI()},sync:function(){var a=this.getCurrentIndex(),c=this.getChildren();h.forEach(c,function(b,c){b.tabIndex=c;b.setLabel(""+(c+1));c===a?(e.add(b.domNode,"current"),
b.domNode.setAttribute("aria-selected","true")):(e.remove(b.domNode,"current"),b.domNode.setAttribute("aria-selected","false"))});a<c.length&&this.activateTab(this.getTabButton(a));this.updateUI()},_updateTools:function(a){this.multiplicityHeader.tools.updateUI(a)},updateUI:function(){1<this.getMultiplicityInfo().numElements?this.domNode.style.display="inline-block":this.domNode.style.display="none"}});p("extend-esri")&&g.setObject("dijit.metadata.base.MultiplicityTabs",f,u);return f});