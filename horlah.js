/* HorlahJS v2.0 (DOM, Canvas & Ajax Library)
* Author: Oyedele Hammed Horlah
* URI: http://www.oyedelehammed.ml/horlahjs.html
* Created: October 17 2016
* Updated: September 15 2017 (v2.0)
* Variables Abbreviation:-
* s => Selector,
* c => Context,
* q => DOM Query,
* els => Targeted Element(s),
* (a,b) => Function Arguments,
* H => Selector Wrapper,
* $H => Misc Functions Wrapper.
*/

// Global Object

window.HorlahJS = function (s, c) {
if (!s) return this;
this.q = (document || c).querySelectorAll(s);
this.els = [].slice.call(this.q);
}

// Functions

HorlahJS.prototype = {
init: function (a) {
if (document.readyState != 'loading') a();
else document.addEventListener('DOMContentLoaded', a);
return this;
},
hide: function () {
this.els.forEach(function (el) {
el.style.display = 'none';
 });
},
show: function () {
this.els.forEach(function (el) {
el.style.display = '';
 });
},
val: function (a) {
if (a == null) return this.els[0].value;
else this.els.forEach(function (el) {
el.value = a;
 });
},
toggle: function () {
this.els.forEach(function (el) {
if (el.style.display !== "none") el.style.display = "none";
else el.style.display = "inherit";
 });
},
resize: function (a, b) {
this.els.forEach(function (el) {
el.style.height = a + "px";
el.style.width = b + "px";
 });
},
html: function (a) {
if (a == null) return this.els[0].innerHTML;
else this.els.forEach(function (el) {
el.innerHTML = a;
 });
},
css: function (a) {
this.els.forEach(function (el) {
el.setAttribute ('style', a);
 });
},
text: function (a) {
if (a == null) return this.els[0].textContent;
else this.els.forEach(function (el) {
el.textContent = a;
 });
},
attr: function (a, b) {
this.els.forEach(function (el) {
el.setAttribute(a, b);
 });
},
getAttr: function (a) {
return this.els[0].getAttribute(a);
},
addClass: function (a) {
this.els.forEach(function (el) {
el.className += a;
 });
},
delClass: function (a) {
this.els.forEach(function (el) {
el.classList.remove(a);
 });
},
replace: function (a) {
this.els[0].outerHTML = a;
},
replaceAll: function (a) {
this.els.forEach(function (el) {
el.outerHTML = a;
 });
},
off: function (a) {
this.els.forEach(function (el) {
el.removeEventListener(a);
 });
},
each: function (a) {
this.els.forEach(a);
},
on: function (a, b) {
this.els.forEach(function (el) {
el.addEventListener(a, b);
  });
 },
ajax: function (b, a) {
var ser = function (obj) {
if (typeof obj == 'object') {
var res = [];
for (var d in obj) res.push(d + '=' + encodeURIComponent(obj[d]));
return res.join('&');
} else {
return obj;
}
}
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new XDomainRequest();
xhr.open(a.type || 'GET', b, true);
xhr.withCredentials = true;
if (a.headers) {
for (var h in a.headers) xhr.setRequestHeader(h, a.headers[h]);
}
var type = (a.contentType) ? a.contentType : 'application/www-form-url-encoded';
xhr.setRequestHeader('Content-type', type);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
if (a.auth) xhr.setRequestHeader('Authorization', 'Basic ' + btoa(a.auth));
xhr.onload = function () {
if (xhr.readyState != 4) return;
if (a.success) {
a.success(xhr);
} else {
console.log(xhr.response);
 }
}
xhr.send(ser(a.data) || null);
}
};

var H = function (s, c) {
 return new HorlahJS(s, c);
}