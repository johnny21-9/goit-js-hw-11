parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d2uN":[function(require,module,exports) {
const t={dateInput:document.querySelector("#date-selector"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")},e={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};let n,o,s,a=Date.now();function u(e){if(d(),n=e.target.value,(o=new Date(n).getTime())<a)f();else{m(t.startButton),c(l(o-a))}}function r(){p(t.startButton),m(t.stopButton),s=setInterval(()=>{a=Date.now();const t=o-a;c(l(t)),t<=0&&d()},1e3)}function d(){const e=l(0);clearInterval(s),c(e),p(t.stopButton)}function c({days:t,hours:n,minutes:o,seconds:s}){e.days.textContent=i(t),e.hours.textContent=i(n),e.minutes.textContent=i(o),e.seconds.textContent=i(s)}function i(t){return String(t).padStart(2,"0")}function l(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%864e5%36e5/6e4),seconds:Math.floor(t%864e5%36e5%6e4/1e3)}}function f(){window.alert("Please choose a date in the future")}function p(t){t.disabled=!0}function m(t){t.disabled=!1}p(t.startButton),p(t.stopButton),t.dateInput.addEventListener("input",u),t.startButton.addEventListener("click",r),t.stopButton.addEventListener("click",d);
},{}]},{},["d2uN"], null)
//# sourceMappingURL=/goit-js-hw-11/02-timer.8175342a.js.map