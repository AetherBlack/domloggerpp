(()=>{var o={54:(o,t,e)=>{const{log:n,getConfig:r,getTargets:s,getOwnPropertyDescriptor:i,checkRegexs:c,execCode:g}=e(191);o.exports=(o,t,e)=>{const a=r(o,t,e),l=e.split(":");e=l.pop();const[f,u]=s(e.split("."));if(!f||!(u in f))return void console.log(`[DOMLogger++] ${e} (attribute) does not exist!`);try{if("function"==typeof f[u])return void console.log(`[DOMLogger++] ${e} can't be a function or a class!`)}catch{}const d=i(f,u);if(d.configurable){var p;if(!d.set||!d.get)try{p=f[u]}catch{if(d.set||!d.get)return void console.log(`[DOMLogger++] ${e} can't be hook for now!`);if(l.includes("set"))return void console.log(`[DOMLogger++] Only the getter can be hooked for ${e}, remove set!`)}Object.defineProperty(f,u,{get:function(){return d.get?output=d.get.call(this):output=p,l.includes("get")&&(output=g(a.hookFunction,output),n(o,t,`${this.nodeName?`get:${this.nodeName.toLowerCase()}.${u}`:e}`,output,a)),output},set:function(r){if(l.includes("set")&&r){const s=c(a.match,r,!0),i=c(a["!match"],r,!1);r=g(a.hookFunction,r),!i&&s&&n(o,t,`${this.nodeName?`set:${this.nodeName.toLowerCase()}.${u}`:e}`,r,a)}return d.set?d.set.call(this,r):void(p=r)}})}else console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`)}},825:(o,t,e)=>{const{log:n,getConfig:r,getTargets:s,checkRegexs:i,execCode:c}=e(191);o.exports=(o,t,e)=>{const g=r(o,t,e),[a,l]=s(e.split("."));var f=a[l];const u=i(g.match,f,!1),d=i(g["!match"],f,!1);u&&!d&&(f=c(g.hookFunction,f),n(o,t,e,f,g))}},746:(o,t,e)=>{const{log:n,getConfig:r,getTargets:s,getOwnPropertyDescriptor:i,checkRegexs:c,execCode:g}=e(191);o.exports=(o,t,e)=>{const a=r(o,t,e);var[l,f]=s(e.split("."));l&&f in l?"function"==typeof l[f]?i(l,f).configurable?l[f]=new Proxy(l[f],{construct:function(r,s){const i=c(a.match,s,!0),l=c(a["!match"],s,!1);return s=g(a.hookFunction,s),!l&&i&&n(o,t,e,s,a),new r(...s)}}):console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`):console.log(`[DOMLogger++] ${e} is not a class!`):console.log(`[DOMLogger++] ${e} (class) does not exist!`)}},3:(o,t,e)=>{const{log:n,getConfig:r,getTargets:s}=e(191),i={function:e(4),class:e(746),attribute:e(54)};o.exports=(o,t,e)=>{const c=e.split(":"),g=c.pop(),a=r(o,t,c.slice(1).join(":")),l=c.slice(1).pop(),f=setInterval((()=>{var[e,r]=s(l.split("."));e&&r in e&&(clearInterval(f),"attribute"!==c[0]||"set"!==c[1]&&"set"!==c[2]||n(o,t,c.slice(1).join(":"),e[r],a),i[c[0]](o,t,c.slice(1).join(":")))}),g)}},454:(o,t,e)=>{const n=e(54),{log:r,getConfig:s,stringify:i,checkRegexs:c,execCode:g}=e(191);o.exports=(o,t,e)=>{const a=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(n,l,f){if(e.includes(n)){const e=s(o,t,n),a=c(e.match,`${l}${f?`;options=${i(f)}`:""}`,!0),u=c(e["!match"],`${l}${f?`;options=${i(f)}`:""}`,!1);args=g(e.hookFunction,l),!u&&a&&r(o,t,`on${n}`,`${l}${f?`;options=${i(f)}`:""}`,e)}return a.call(this,n,l,f)};for(const r of e)`on${r}`in window?n(o,t,`set:on${r}`):console.log(`[DOMLogger++] on${r} (event) does not exist!`)}},4:(o,t,e)=>{const{log:n,getConfig:r,getTargets:s,getOwnPropertyDescriptor:i,checkRegexs:c,execCode:g}=e(191);o.exports=(o,t,e)=>{const a=r(o,t,e);var[l,f]=s(e.split("."));if(!l||!(f in l))return void console.log(`[DOMLogger++] ${e} (function) does not exist!`);if("function"!=typeof l[f])return void console.log(`[DOMLogger++] ${e} is not a function!`);if(!i(l,f).configurable)return void console.log(`[DOMLogger++] ${e} is not configurable, can't hook it!`);const u=l[f];l[f]=new Proxy(l[f],{apply:function(r,s,i){const l=c(a.match,i,!0),f=c(a["!match"],i,!1);return i=g(a.hookFunction,i),!f&&l&&n(o,t,e,i,a),Reflect.apply(u,s,i)}})}},191:o=>{const t=o=>(void 0===o?o="undefined":"function"==typeof o?o=o.toString():"string"!=typeof o&&(o=JSON.stringify(o)),o),e=(o,e,r)=>{if(!o)return r;e=t(e);for(let t of o){"exec"===t.split(":")[0]&&(t=n(t,e));try{new RegExp(t)}catch{console.log(`[DOMLogger++] ${t} (regex) is invalid!`);continue}if(e.match(t))return!0}return!1},n=(o,e="")=>{if(!o)return e;var n=e;try{n=Function("args",o)(e)}catch{console.log(`[DOMLogger++] ${t(o)} is an invalid code to evaluate!`)}return n};o.exports={log:async(o,n,r,s,i)=>{var c=(()=>{let o=(new Error).stack;return o=o.split("\n"),o.filter((o=>!o.includes("/src/bundle.js")))})();"Error"===c[0]&&c.shift();var g=c[0];if(g=await(async o=>{const t=(new TextEncoder).encode(o),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map((o=>o.toString(16).padStart(2,"0"))).join("")})(g),window?.domlogger_debug_canary===g)debugger;var a=!1,l=!1;if(i.alert){const o=e(i.alert.match,s,!0);!e(i.alert["!match"],s,!1)&&o&&(a=!0,i.alert.notification&&(l=!0))}let f={ext:"domlogger++",date:Date.now(),href:location.href,type:n,hook:o,frame:top===self?"top":"subframe",sink:r,data:t(s),trace:c,debug:g,badge:a,notification:l};window.originalPostMessage?window.originalPostMessage(f,"*"):window.postMessage(f,"*")},getConfig:(o,t,e)=>{var n=window.hooksConfig["*"]?window.hooksConfig["*"]:{},r=window.hooksConfig[o]?window.hooksConfig[o]:{},s=window.hooksConfig[t]?window.hooksConfig[t]:{},i=window.hooksConfig[e]?window.hooksConfig[e]:{};return Object.assign({},n,i,r,s)},getTargets:o=>{var t=o.pop(),e=window;"window"===o[0]&&o.shift();for(const t of o){if(!(t in e))return[null,null];e=e[t]}return[e,t]},getOwnPropertyDescriptor:(o,t)=>{for(;o;){const e=Object.getOwnPropertyDescriptor(o,t);if(e)return e;o=Object.getPrototypeOf(o)}},stringify:t,checkRegexs:e,execCode:n}}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return o[n](s,s.exports,e),s.exports}(()=>{const o={function:e(4),class:e(746),attribute:e(54),event:e(454),checkContent:e(825),custom:e(3)},t=new URL(document.currentScript.src),n=new URLSearchParams(t.search),r=JSON.parse(atob(n.get("hookSettings")));window.hooksTargets=r.hooks,window.hooksConfig=r.config,window.domlogger_debug_canary=n.get("debugCanary");for(const[t,e]of Object.entries(window.hooksTargets))for(const[n,r]of Object.entries(e))if("event"!==n)for(const e of r)"postMessage"===e.split(".").pop()&&(window.originalPostMessage=window.postMessage),o[n](n,t,e);else o[n](n,t,r)})()})();