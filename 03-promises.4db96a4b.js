function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var l=i("7Y9D8");const r=document.querySelector(".form");function s(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}r.addEventListener("submit",(n=>{n.preventDefault();const o=parseInt(r.elements.delay.value),t=parseInt(r.elements.step.value),i=parseInt(r.elements.amount.value);for(let n=0;n<i;n++)s(n,o+n*t).then((({position:n,delay:o})=>{console.log(`✅ Fulfilled promise ${n} in ${o}ms`),e(l).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch((({position:n,delay:o})=>{console.log(`❌ Rejected promise ${n} in ${o}ms`),e(l).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.4db96a4b.js.map
