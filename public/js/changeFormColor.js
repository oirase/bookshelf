!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=182)}({16:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inputAttrType=t.errorClass=t.labelFocusClass=t.formFocusClass=t.closeButtonClass=t.closeClass=t.openClass=void 0,t.openClass="form--open",t.closeClass="form--close",t.closeButtonClass="form__button--close",t.formFocusClass="form--focus",t.labelFocusClass="form__label--focus",t.errorClass="form__error",t.inputAttrType=["text","password","email","textarea"]},182:function(e,t,o){e.exports=o(81)},81:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(16),n=function(e,t,o){var n=e.target;n&&n.previousElementSibling&&r.inputAttrType.includes(n.type)&&(n.classList.toggle(t),n.previousElementSibling.classList.toggle(o))},s=document.querySelectorAll(".form");s&&s.forEach((function(e){e.addEventListener("focusin",(function(e){n(e,r.formFocusClass,r.labelFocusClass)})),e.addEventListener("focusout",(function(e){n(e,r.formFocusClass,r.labelFocusClass)}))}))}});