module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=45)}({0:function(e,t){e.exports=flarum.core.compat.app},37:function(e,t){e.exports=flarum.core.compat["components/PermissionGrid"]},45:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(0),a=n.n(o),u=n(37),i=n.n(u);a.a.initializers.add("cxsquared/howzat-cricket-league",(function(){Object(r.extend)(i.a.prototype,"moderateItems",(function(e){e.add("updatePlayer",{icon:"fas fa-running",label:"Update Players",permission:"player.edit"},75),e.add("updateUpdates",{icon:"fas fa-pen-nib",label:"Manged Updates",permission:"update.edit"},80)}))}))},8:function(e,t){e.exports=flarum.core.compat.extend}});
//# sourceMappingURL=admin.js.map