// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.
//>>built
require({
    cache: {
        "url:esri/dijit/metadata/form/templates/InputURL.html": '\x3cdiv class\x3d"gxeInput gxeInputText"\x3e\r\n  \x3cinput class\x3d"gxeEditOnly"  type\x3d"text" size\x3d"${size}" maxlength\x3d"${maxlength}"\r\n dojoType\x3d"dijit.form.ValidationTextBox"    regExp\x3d"dojox.validate.regexp.url" invalidMessage\x3d"Invalid URL" data-dojo-attach-point\x3d"focusNode"\r\n    data-dojo-attach-event\x3d"onchange: _onChange, onkeyup: _onKeyup"/\x3e\r\n  \x3cdiv class\x3d"gxeViewOnlyText gxeViewOnly" data-dojo-attach-point\x3d"viewOnlyNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeHint gxeEditOnly" data-dojo-attach-point\x3d"hintNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'
    }
});
define("esri/dijit/metadata/form/InputURL", "dojo/_base/declare dojo/_base/lang dojo/has dojox/validate/regexp ../base/InputBase dojo/text!./templates/InputURL.html ../../../kernel".split(" "), function (c, d, e, regexp, f, g, h) {
    c = c([f], {
        templateString: g,
        size: 60,
        small: !1,
        maxlength: 2048,
        postCreate: function () {
            this.inherited(arguments)
        },
        postMixInProperties: function () {
            this.inherited(arguments);
            this.small && (this.size = 30)
        },
        connectXNode: function (a, b) {
            this.inherited(arguments);
            var d = a.value;
            b && !a.fixed || "undefined" ===
                typeof d || null === d || this.setInputValue(d)
        },
        getDisplayValue: function () {
            if (!this.focusNode) return null;
            var a = this.focusNode.value,
                b = [];
            if (null === a) return null;
            a = a.replace(/(\r\n|\r|\n|\n\r)/g, "\x3cbr/\x3e");
            a = a.split("\x3cbr/\x3e");
            f.forEach(a, function (a) {
                a = e.trim(a);
                0 < a.length && b.push(a)
            });
            return 1 === b.length ? b[0] : 1 < b.length ? b : null
        },
		_generateId: function () {
            var a = null,
                a = "function" === typeof Date.now ? Date.now() : (new Date).getTime(),
                b = ("" + Math.random()).replace("0.", "r");
            return (a + "" + b).replace(/-/g, "")
        },
        getInputValue: function () {
            return this.focusNode ? this.focusNode.value : null
        },
        _onChange: function (a) {
            this.emitInteractionOccurred()
        },
        _onKeyup: function (a) {
            this.emitInteractionOccurred()
        },
        setInputValue: function (a) {
            "undefined" === typeof a && (a = null);
            this.focusNode.value = a;
            this.emitInteractionOccurred();
            this.applyViewOnly()
        }
    });
    e("extend-esri") && d.setObject("dijit.metadata.form.InputURL", c, h);
    return c
});