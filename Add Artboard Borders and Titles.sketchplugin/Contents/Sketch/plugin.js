!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return S}),n.d(r,"DROP_DOWN",function(){return _}),n.d(r,"RADIO_BUTTONS",function(){return T}),n.d(r,"NUMERIC_TEXT_BOX",function(){return w.a}),n.d(r,"STRING_TEXT_BOX",function(){return N}),n.d(r,"TEXT_BOX",function(){});var o=n(1);function i(t){const e={};return function t(e,n,r){Object.keys(e).forEach(function(o){const i=[n,o].filter(Boolean).join("."),a=e[o];"object"!=typeof a||null===a||Array.isArray(a)?r[i]=e[o]:t(a,i,r)})}(t,null,e),e}const a=/\./;function s(t){const e={};return Object.keys(t).forEach(function(n){!function t(e,n,r){const o=e[0];if(1===e.length)return void(r[o]=n);null==r[o]&&(r[o]={});t(e.slice(1),n,r[o])}(n.split(a),t[n],e)}),e}function c(){const t={addArtboardBorders:{borderColor:"#7f7f7f",borderWidth:2},addArtboardTitles:{font:"SF UI Text Medium",fontSize:24,lineHeight:32,verticalSpace:16}};if(!t)return{};const e={},n=i(t);return Object.keys(n).forEach(function(t){const r=Object(o.sessionVariable)(t),i=Object(o.settingForKey)(t),a=void 0!==r?r:i,s=n[t];e[t]=void 0!==a?a:s}),s(e)}const u=1,l=10,d=17;const f=2,b=20,h=2;const p=20,y=10;function S({width:t,y:e,label:n,value:r}){const o=NSButton.alloc().initWithFrame(NSMakeRect(0,e,t,p));return o.setButtonType(NSSwitchButton),o.setBezelStyle(0),o.setState(r?NSOnState:NSOffState),o.setTitle(n),{view:o,height:p+y,retrieveValue:function(){return"1"==o.stringValue()}}}const g=20,v=15;function _({width:t,y:e,value:n,possibleValues:r}){const o=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,e,t,g));r.forEach(function(t){o.addItemWithTitle(`${t}`)});const i=void 0!==n?r.indexOf(n):0;return o.selectItemAtIndex(i),{view:o,height:g+v,retrieveValue:function(){const t=o.indexOfSelectedItem();return r[t]}}}const m=20,O=10;function T({width:t,y:e,value:n,possibleValues:r}){const o=NSButtonCell.alloc().init();o.setButtonType(NSRadioButton);const i=r.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,e,t,m),NSRadioModeMatrix,o,1,i);a.setCellSize(CGSizeMake(Math.floor(t/i),m)),a.cells().forEach(function(t,e){t.setTitle(r[e])});const s=void 0!==n?r.indexOf(n):0;return a.selectCellAtRow_column(0,s),{view:a,height:m+O,retrieveValue:function(){const t=a.cells().indexOfObject(a.selectedCell());return r[t]}}}var w=n(6),k=n(3);const N=Object(k.a)(),j=300;function B({title:t,inputs:e}){const n=i(c()),{formView:o,retrieveValues:a}=function({inputsConfig:t,settings:e}){const n=NSView.alloc().init();n.setFlipped(!0);const o={};let i=0;t.forEach(function(t){if("-"===t){const{view:t,height:e}=function({width:t,y:e}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,e+l,t,u));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:l+u+d}}({width:j,y:i});return i+=e,void n.addSubview(t)}const{type:a,key:s,label:c,value:p,...y}=t;if(c&&"CHECK_BOX"!==a){const{view:t,height:e}=function({width:t,y:e,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,e+f,t,b));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:f+b+h}}({width:j,y:i,label:c});i+=e,n.addSubview(t)}const S=e[s],g=null!=p?p:S,{view:v,height:_,retrieveValue:m}=r[a]({width:j,y:i,label:c,value:g,...y});i+=_,n.addSubview(v),o[s]=m});const a=n.subviews();return a.forEach(function(t,e){e<a.length-1&&t.setNextKeyView(a[e+1])}),n.setFrame(NSMakeRect(0,0,j,i)),{formView:n,retrieveValues:o}}({inputsConfig:e.filter(Boolean),settings:n}),p=function(t){const e=NSAlert.alloc().init();return e.setMessageText(t),e.addButtonWithTitle("OK"),e.addButtonWithTitle("Cancel"),e}(t);p.setAccessoryView(o);const y=o.subviews();if(y[0]&&p.window().setInitialFirstResponder(y[0]),"1000"==p.runModal()){const t={};return Object.keys(a).forEach(function(e){const n=a[e];t[e]=n()}),s(t)}return null}var x=n(7),M=n.n(x);function A(t,e){M.a.message(e&&e.symbol?`${e.symbol} ${t}`:t)}function C(t){A(t,{symbol:"✔"})}function E(t){A(t,{symbol:"✘"})}function V(){const t={addArtboardBorders:{borderColor:"#7f7f7f",borderWidth:2},addArtboardTitles:{font:"SF UI Text Medium",fontSize:24,lineHeight:32,verticalSpace:16}};if(!t)return;const e=i(t);Object.keys(e).forEach(function(t){Object(o.setSettingForKey)(t,void 0),Object(o.setSessionVariable)(t,void 0)}),A("Reset settings")}const F=R(o.setSettingForKey);R(o.setSessionVariable);function R(t){return function(e,n){if(!e)return;const r=i(e);Object.keys(r).forEach(function(e){const n=r[e];null!=n&&t(e,n)});const o=n&&n.successMessage;o&&A(o)}}n(8),n(9);n(4);var W=n(10);function I(){const t=NSApplication.sharedApplication().orderedDocuments();return Object(W.fromNative)(t[0])}function L(t){return I().selectedPage.sketchObject.addLayers(t)}function P(){return I().selectedPage.layers}function X(){return P().filter(K)}function K(t){return"Artboard"===t.type}n.d(e,"f",function(){return c}),n.d(e,"g",function(){return B}),n.d(e,"h",function(){return V}),n.d(e,"i",function(){return F}),n.d(e,"a",function(){return"NUMERIC_TEXT_BOX"}),n.d(e,"b",function(){return"STRING_TEXT_BOX"}),n.d(e,"c",function(){return L}),n.d(e,"e",function(){return P}),n.d(e,"d",function(){return X}),n.d(e,"k",function(){return C}),n.d(e,"j",function(){return E})},function(t,e){t.exports=require("sketch/settings")},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0);function o({mapArtboards:t,groupName:e,settingsKey:n,successMessage:o}){return function({settings:i}){var a;a=e,Object(r.e)().forEach(function(t){"Group"===t.type&&t.name===a&&t.remove()});const s=Object(r.d)();if(0===s.length)return void Object(r.j)("No artboards");const c=t({artboards:s,settings:(i||Object(r.f)())[n],groupName:e}),u=MSLayerGroup.groupWithLayers(MSLayerArray.arrayWithLayers(c));u.setName(e),u.setIsLocked(!0),Object(r.c)([u]),Object(r.k)(o)}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const r=20,o=15;function i(t){return function({width:e,y:n,value:i,placeholder:a}){const s=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,e,r)),c=null==i?"":`${i}`;return s.setStringValue(c),a&&s.setPlaceholderString(a),{view:s,height:r+o,retrieveValue:function(){const e=`${s.stringValue()}`;return t?t(e):e}}}}},function(t,e){t.exports=require("sketch/dom")},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0);function o(t){return function(){const e=Object(r.g)(t);e&&Object(r.i)(e,{successMessage:"Saved settings"})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(t,e){t.exports=require("sketch/ui")},function(t,e){t.exports=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,n){"use strict";const r=async(t,e)=>{let n=0;for(const r of t)await e(await r,n++);return t};t.exports=r,t.exports.default=r},function(t,e){t.exports=require("sketch")},function(t,e,n){t.exports=n(12)},function(t,e,n){t.exports={"add-artboard-borders/add-artboard-borders":n(13).default,"add-artboard-titles/add-artboard-titles":n(14).default,"add-artboard-borders/settings":n(15).default,"add-artboard-titles/settings":n(16).default,"reset-settings":n(17).default}},function(t,e,n){"use strict";n.r(e);var r=n(2);e.default=Object(r.a)({mapArtboards:function({artboards:t,settings:e}){return t.map(function(t){const n=MSRectangleShape.alloc().initWithFrame(t.sketchObject.rect());n.setName(t.name),n.setIsLocked(!0);const r=MSStyle.alloc().init(),o=r.addStylePartOfType(1);return o.color=MSImmutableColor.colorWithSVGString(e.borderColor).newMutableCounterpart(),o.thickness=e.borderWidth,o.position=2,n.setStyle(r),n})},groupName:"@ArtboardBorders",settingsKey:"addArtboardBorders",successMessage:"Added artboard borders"})},function(t,e,n){"use strict";n.r(e);var r=n(2);e.default=Object(r.a)({mapArtboards:function({artboards:t,settings:e}){return t.map(function(t){const n=t.name,r=t.frame,o=MSTextLayer.alloc().initWithFrame(NSMakeRect(0,0,0,0));return o.setFontPostscriptName(e.font),o.setFontSize(e.fontSize),o.setLineHeight(e.lineHeight),o.setStringValue(n),o.setName(n),o.setIsLocked(!0),o.setVerticalAlignment("bottom"),o.frame().setWidth(r.width),o.setTextBehaviour(1),o.adjustFrameToFit(),o.frame().setX(r.x),o.frame().setY(r.y-o.frame().height()-parseInt(e.verticalSpace,10)),o})},groupName:"@ArtboardTitles",settingsKey:"addArtboardTitles",successMessage:"Added artboard titles"})},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(5);const i={title:"Settings for Add Artboard Borders",inputs:[{type:r.a,key:"addArtboardBorders.borderWidth",label:"Border width"},{type:r.b,key:"addArtboardBorders.borderColor",label:"Border color"}]};e.default=Object(o.a)(i)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(5);const i={title:"Setings for Add Artboard Titles",inputs:[{type:r.b,key:"addArtboardTitles.font",label:"Font"},{type:r.a,key:"addArtboardTitles.fontSize",label:"Font size"},{type:r.a,key:"addArtboardTitles.lineHeight",label:"Line-height"},{type:r.a,key:"addArtboardTitles.verticalSpace",label:"Vertical space"}]};e.default=Object(o.a)(i)},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=r.h}]));