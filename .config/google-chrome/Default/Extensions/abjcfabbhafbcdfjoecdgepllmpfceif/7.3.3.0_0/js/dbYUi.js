// MagicActions for Google Chrome - CHROMEACTIONS.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
var _vd={configurable:!1,enumerable:!1,writable:!1,value:{}};
(function(e,m,A,l,r,B,g){function K(a,f){var c=t.call(m,f.e);if(!c){(c=t.call(m,f.a))&&0<c.offsetHeight&&c.classList.add(f.b);var b=t.call(m,f.c);b&&(c=L.call(m,"iframe"),f.d?u.call(c,f.d,f.e):c.className=f.e,f.f&&(c.id=f.f),u.call(c,"scrolling","no"),u.call(c,"frameborder","0"),c.src=M.call(g,a),N.call(b,c))}}function O(){function a(a){var c=a?a:{w:640,h:350,vid:"pwHX9JT2APQ",lic:"YouTube License",t:"Magic Actions for YouTube™"};c.ver="7.3.3.0";c.ua=1;c.id=12;a=new A;P.call(a,"GET",c.rgba,!0);a.responseType=
"arraybuffer";a.onload=function(a){200==this.status&&(c.rgba=this.response,Q.call(e,c,"https://www.mycinema.pro"))};R.call(a)}C||(C=!0,S.call(D,a),v.call(g,w.call(l,{id:9}),a))}function T(a){for(var b=[],c=[3,0,0,-3],d,h=0,e=a.length;h<e;h++)d=c[h%4],h+d<e?E.call(b,F.call(r,a[h+d])):E.call(b,F.call(r,a[h]));return U.call(b,"")}function a(){}var M=g.getURL,D=g.onMessage,v=g.sendMessage,S=D.addListener,G=Array.prototype,p=Storage.prototype,V=Navigator.prototype,x=A.prototype,H=DocumentFragment.prototype,
d=Document.prototype,I=DOMImplementation.prototype,y=EventTarget.prototype,z=Event.prototype,k=Node.prototype,b=Element.prototype,J=HTMLElement.prototype,t=d.querySelector,L=d.createElement,N=k.appendChild,u=b.setAttribute,W=y.addEventListener,P=x.open,R=x.send,E=G.push,U=G.join;try{var q=Object.getOwnPropertyDescriptor(Function.prototype,"call");q&&(q.configurable=!1,q.writable=!1,Object.defineProperty(Function.prototype,"call",q))}catch(h){}p.getItem=a;p.setItem=a;p.removeItem=a;p.clear=a;V.sendBeacon=
a;x.open=a;H.querySelector=a;H.querySelectorAll=a;d.createDocumentFragment=a;d.createTextNode=a;d.createElement=a;d.createElementNS=a;d.evaluate=a;d.createEvent=a;d.createCDATASection=a;d.execCommand=a;d.querySelector=a;d.querySelectorAll=a;d.write=a;d.writeln=a;I.createHTMLDocument=a;I.createDocument=a;y.addEventListener=a;y.removeEventListener=a;z.preventDefault=a;z.stopPropagation=a;z.stopImmediatePropagation=a;k.appendChild=a;k.cloneNode=a;k.getRootNode=a;k.removeChild=a;k.replaceChild=a;k.insertBefore=
a;b.attachShadow=a;b.createShadowRoot=a;b.getElementsByClassName=a;b.getElementsByTagName=a;b.getElementsByTagNameNS=a;b.append=a;b.remove=a;b.before=a;b.after=a;b.prepend=a;b.querySelector=a;b.querySelectorAll=a;b.requestPointerLock=a;b.setAttribute=a;b.removeAttribute=a;b.removeAttributeNS=a;b.removeAttributeNode=a;b.replaceWith=a;b.insertAdjacentElement=a;b.insertAdjacentText=a;b.insertAdjacentHTML=a;J.focus=a;J.click=a;var w=l.stringify,X=l.parse,F=r.fromCharCode,Y=B.now,Q=e.postMessage,C;W.call(e,
"message",function(a){if("https://www.mycinema.pro"===(a.origin||"")&&a.data.constructor===Array){try{var b=X.call(l,T(a.data))}catch(c){b={}}b.t&&(a=Y.call(B)-b.t,1E3>a&&(a=b.i,2==a?v.call(g,w.call(l,{id:2,url:b.u,incognito:b.p})):300==a?K("lMUQI.html",b):303==a?O():304==a&&v.call(g,w.call(l,{id:0}),function(a){a=a.opt;b.ui&&a.a0&&a.a4&&a.ui&&m.documentElement.classList.add(b.ui)})))}},!0)})(window,document,XMLHttpRequest,JSON,String,Date,chrome.runtime);
for(var i in chrome)if("runtime"==i)for(var n in chrome.runtime)"function"===typeof chrome.runtime[n]&&"connect"!==n&&(chrome.runtime[n]=function(){});else if("object"===typeof chrome[i])try{Object.defineProperty(chrome,i,_vd)}catch(e){}try{Object.defineProperty(window,"localStorage",_vd)}catch(e){}try{Object.defineProperty(window,"navigator",_vd)}catch(e){}try{Object.defineProperty(window,"JSON",_vd)}catch(e){}try{Object.defineProperty(window,"fetch",_vd)}catch(e){}
try{Object.defineProperty(Document.prototype,"cookie",_vd)}catch(e){}try{Object.defineProperty(Element.prototype,"innerHTML",_vd)}catch(e){};
