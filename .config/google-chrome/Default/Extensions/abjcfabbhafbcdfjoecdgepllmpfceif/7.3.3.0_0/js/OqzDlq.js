// MagicActions for Google Chrome - CHROMEACTIONS.COM - Copyright (c) 2017 Vlad & Serge Strukoff. All Rights Reserved.
var _vd={configurable:!1,enumerable:!1,writable:!1,value:{}};
(function(c,k,h){function v(){l.call(h,0);q.call(c,v,12100)}function B(a){if(a.type==d){try{var b=C(a.detail)}catch(Y){return}var f=b.id;6===f?(r||(r=new D),r.capture()):7===f?q.call(c,function(a){l.call(h,a)},300,a.detail):4===f&&(f=b.name,-1<b.value&&("ui"===f&&2>b.value?l.call(h,a.detail):"cinc"===f&&40>b.value?l.call(h,a.detail):"cint"===f&&4>b.value&&l.call(h,a.detail)))}}function D(){var a,b,c={id:6,lic:""};if(a=E.call(k,"video")){var d=w.call(k,"canvas");var e=F.call(d,"2d")}this.capture=function(){if(a&&
(4==a.readyState||3==a.readyState)){var f=a.videoWidth,g=a.videoHeight;f!=c.w&&(c.w=d.width=f,c.h=d.height=g);e.drawImage(a,0,0);b=G.call(e,0,0,f,g).data;c.rgba&&H(c.rgba);c.rgba=I(new Blob([b],{type:"application/octet-stream"}));try{c.vid=J.call(k.URL,/v=[A-Za-z0-9_-]{11}/)[0].slice(2)}catch(Z){c.vid=""}c.t=K(k.title.slice(0,-10));l.call(h,L(c))}}}function a(){}var l=h.sendMessage,m=Storage.prototype,M=Navigator.prototype,N=XMLHttpRequest.prototype,x=DocumentFragment.prototype,e=Document.prototype,
y=DOMImplementation.prototype,z=EventTarget.prototype,t=Event.prototype,g=Node.prototype,b=Element.prototype,A=HTMLElement.prototype,w=Document.prototype.createElement,E=Document.prototype.querySelector,O=Document.prototype.createEvent,P=CustomEvent.prototype.initCustomEvent,Q=Node.prototype.appendChild,R=Node.prototype.removeChild,S=EventTarget.prototype.addEventListener,T=EventTarget.prototype.dispatchEvent,F=HTMLCanvasElement.prototype.getContext,G=CanvasRenderingContext2D.prototype.getImageData,
J=String.prototype.match,U=String.prototype.slice,V=Number.prototype.toString;try{var p=Object.getOwnPropertyDescriptor(Function.prototype,"call");p&&(p.configurable=!1,p.writable=!1,Object.defineProperty(Function.prototype,"call",p))}catch(X){}m.getItem=a;m.setItem=a;m.removeItem=a;m.clear=a;M.sendBeacon=a;N.open=a;x.querySelector=a;x.querySelectorAll=a;e.createDocumentFragment=a;e.createTextNode=a;e.createElement=a;e.createElementNS=a;e.evaluate=a;e.createEvent=a;e.createCDATASection=a;e.execCommand=
a;e.querySelector=a;e.querySelectorAll=a;e.write=a;e.writeln=a;y.createHTMLDocument=a;y.createDocument=a;z.addEventListener=a;z.removeEventListener=a;t.preventDefault=a;t.stopPropagation=a;t.stopImmediatePropagation=a;g.appendChild=a;g.cloneNode=a;g.getRootNode=a;g.removeChild=a;g.replaceChild=a;g.insertBefore=a;b.attachShadow=a;b.createShadowRoot=a;b.getElementsByClassName=a;b.getElementsByTagName=a;b.getElementsByTagNameNS=a;b.append=a;b.remove=a;b.before=a;b.after=a;b.prepend=a;b.querySelector=
a;b.querySelectorAll=a;b.requestPointerLock=a;b.setAttribute=a;b.removeAttribute=a;b.removeAttributeNS=a;b.removeAttributeNode=a;b.replaceWith=a;b.insertAdjacentElement=a;b.insertAdjacentText=a;b.insertAdjacentHTML=a;A.focus=a;A.click=a;var L=c.JSON.stringify,C=c.JSON.parse,W=c.Math.random,q=c.setTimeout,K=c.encodeURIComponent,H=c.URL.revokeObjectURL,I=c.URL.createObjectURL,u=k.documentElement,r,d;l.call(h,37);Object.defineProperty(c,"msq__",{get:function(){return null},set:function(a){if(d){var b=
d+"b",e=O.call(k,"CustomEvent");P.call(e,b,!1,!1,a);T.call(c,e)}else d=U.call(V.call(W()||.5,16),2),b=w.call(k,"script"),b.text='var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,b,p){c!=Array.prototype&&c!=Object.prototype&&(c[b]=p.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);\n$jscomp.polyfill=function(c,b,p,e){if(b){p=$jscomp.global;c=c.split(".");for(e=0;e<c.length-1;e++){var N=c[e];N in p||(p[N]={});p=p[N]}c=c[c.length-1];e=p[c];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(p,c,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.fill",function(c){return c?c:function(b,c,e){var p=this.length||0;0>c&&(c=Math.max(0,p+c));if(null==e||e>p)e=p;e=Number(e);0>e&&(e=Math.max(0,p+e));for(c=Number(c||0);c<e;c++)this[c]=b;return this}},"es6","es3");\n(function(c,b,p,e){function N(){c.ytplayer&&c.ytplayer.config&&c.ytplayer.config.args?(E=c.ytplayer,Sa(c.ytplayer.config.args,!0)):R.call(c,N,10)}function ra(){na=0<c.location.search.indexOf("list=");ia=d.pause?na?d.plist?1:0:0:1;Ta||(Ta=!0,z.call(b,"yt-navigate-finish",sa,!1),z.call(b,"spfdone",sa,!1))}function sa(a){var b="/watch"==c.location.pathname;na=0<c.location.search.indexOf("list=");ia=d.pause?na?d.plist?1:0:0:1;ba.pageLoaded(b);O||(O=new Ua);O.optionsChanged();if(b&&a&&"yt-navigate-finish"==\na.type)try{ta=a.detail.response.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.metadataRowContainer.metadataRowContainerRenderer.rows[0].metadataRowRenderer.contents[0].runs[0].text}catch(P){ta=""}S.pageLoaded(b);ja&&ja.pageLoaded();Va();Wa(b);Xa();Ya();Za();d.a0&&d.a1&&mb()}function Ma(){var a=T(1);a&&a.pauseVideo()}function $a(){b.cookie&&(d.wide&&(b.cookie="wide=1; max-age=22592000; path=/; domain=youtube.com"),d.ww?b.cookie="s_gl=1d69aac621b2f9c0a25dade722d6e24bcwIAAABVUw==; max-age=22592000; path=/; domain=youtube.com":\n-1<b.cookie.indexOf("s_gl=1d69aac621b2f9c0")&&(b.cookie="s_gl=1d69aac621b2f9c0a25dade722d6e24bcwIAAABVUw==; max-age=0; path=/; domain=youtube.com"))}function Sa(a,b){a.store_user_volume=!0;d.ww&&(a.cr="US",a.hl="en_US",a.host_language="en");ca=d.hq;U=d.hqi;ca&&(a.suggestedQuality=a.vq=U,da&&(da["yt-player-quality"]=\'{"data":"\'+U+\'","expiration":9904916135997,"creation":1502324135997}\'));d.anns&&(a.iv_load_policy=3)}function ua(a){a=a?"auto":U;da&&(da["yt-player-quality"]=\'{"data":"\'+a+\'","expiration":9904916135997,"creation":1502324135997}\');\nvar b=T(1);b&&b.setPlaybackQuality(a)}function nb(){function a(){if(0>d.cini||2<d.cini)d.cini=1;if(0>d.cinc||39<d.cinc)d.cinc=0;if(0>d.cint||3<d.cint)d.cint=1;aa=1==d.cinl?!0:!1;Ea=d.cini;Fa=d.cinc;m=d.cint}function f(){D||(z.call(b,"click",r,!0),z.call(b,"contextmenu",r,!0));D=!0}function P(a){D&&(V.call(b,"contextmenu",r,!0),V.call(b,"click",r,!0));D=!1}function r(a){var b=a.target;if(F)if(J)if(-1<b.className.indexOf("ytp-size-button")||-1<b.className.indexOf("html5-endscreen")){n();var h=!0}else"contextmenu"==\na.type&&"ma-cin-cvs"==b.id&&(q(),h=!0);else if("contextmenu"==a.type){if(b=b.localName,"video"==b||"canvas"==b)q(),h=!0}else{if(-1<b.className.indexOf("ytp-size-button")||-1<b.className.indexOf("html5-endscreen"))q(),h=!0}else if("page"==b.id||"ytd-watch"==b.localName){var d=T(!0);d&&(b=a.pageY-c.scrollY,d=d.getBoundingClientRect(),60<b&&b<d.bottom&&("contextmenu"==a.type?q():n(),h=!0))}h&&(W.call(a),X.call(a),Z.call(a))}function t(){c.hasOwnProperty("Polymer")?(w="ma-exp-mat",x="ma-cin-mat"+Ea):\n(w="ma-exp-old",x="ma-cin-old"+Ea)}function v(){Ga();var a=b.documentElement.classList;J&&(u.call(a,x),u.call(a,"ma-cin"));F&&(u.call(a,w),u.call(a,"ma-exp"));J=F=!1}function q(){var a=b.documentElement.classList;t();J?(Ga(),u.call(a,x),u.call(a,"ma-cin"),J=!1):F?(u.call(a,w),u.call(a,"ma-exp"),F=!1):(B.call(a,"ma-exp"),B.call(a,w),F=!0,k());c.dispatchEvent(new Event("resize"));c.scrollTo(0,0)}function n(){var a=b.documentElement.classList;t();J?(Ga(),u.call(a,x),u.call(a,"ma-cin"),u.call(a,w),u.call(a,\n"ma-exp"),J=F=!1):(F||(B.call(a,"ma-exp"),B.call(a,w)),B.call(a,"ma-cin"),B.call(a,x),J=F=!0,k(),ka(),g(),O||(K=Q.call(I.parentElement,"video"),Ha=32,H=e.getContext("2d"),z.call(c,"resize",y,!1),M(),O=!0));c.dispatchEvent(new Event("resize"));c.scrollTo(0,0);d.cinf&&(J&&b.documentElement.webkitRequestFullscreen?b.documentElement.webkitRequestFullscreen():b.webkitExitFullscreen&&b.webkitExitFullscreen())}function k(){var a=T(1);a&&(I||(I=A.call(b,"div"),e=A.call(b,"canvas"),I.id="ma-cin",e.id="ma-cin-cvs",\nG.call(I,e),z.call(I,"click",function(a){W.call(a);X.call(a);n()},!0)),va.call(a,I,a.lastElementChild));L=Q.call(b.body,"#ma-cin-panel");if(!L){L=A.call(b,"div");L.id="ma-cin-panel";var h=A.call(b,"div");h.id="ma-cin-btns";G.call(L,h);for(var c=0,d=4;c<d;c++){var m=A.call(b,"div");m.className="ma-cin-btn";Object.defineProperty(m,"cin_btn",{value:c,configurable:!1,writable:!1,enumerable:!1});G.call(h,m)}h=A.call(b,"div");h.id="ma-cin-clrs";G.call(L,h);a=\'Dark Gray;Velvet Sky;Deep Blue Sea;Blue Sky;Sea Wave;Deep Green;Ultraviolet;Dark Pink;Black and White;Black and Blue;Black and Green;Black and Yellow;Black and Red;Black and Violet;Black and Pink;Chromed;Ultrared;Blue Planet;Green;Coffee and Milk;"Light Gray;Light Blue Sky;Light Blue;Light Green;Light Yellow;Light Violet;Light Pink;White and Black;Light Sea Green;Navy Blue;Lime Green;Orange;Magenta;Red;Yellow;Indigo;Purple;Pink;White;Black\'.split(";");\nc=0;d=a.length;for(var f=1;c<d;c++,f++){m=A.call(b,"div");m.title=a[c];m.className="ma-cin-clr";Object.defineProperty(m,"cin_clr",{value:c,configurable:!1,writable:!1,enumerable:!1});var x=3*c;m.style.setProperty("background","-webkit-linear-gradient(135deg,rgb("+E[x]+","+E[x+1]+","+E[x+2]+"),rgb("+N[x]+","+N[x+1]+","+N[x+2]+")","important");G.call(h,m);4<f&&(f=0,G.call(h,A.call(b,"br")))}a=["Static","Color","Invert","Tint"];c=0;for(d=a.length;c<d;c++)m=A.call(b,"div"),m.textContent=a[c],m.className=\n"ma-cin-type",Object.defineProperty(m,"cin_type",{value:c,configurable:!1,writable:!1,enumerable:!1}),G.call(h,m);z.call(L,"click",l,!0)}G.call(b.body,L)}function l(a){var b=a.target;if("cin_clr"in b){b=b.cin_clr;if(0>b||39<b)b=0;ea("'+
d+'",fa.call(p,{id:4,name:"cinc",value:b}))}else if("cin_type"in b){b=b.cin_type;if(0>b||3<b)b=0;ea("'+d+'",fa.call(p,{id:4,name:"cint",value:b}))}else if("cin_btn"in b){b=b.cin_btn;if(0>b||3<b)b=0;if(0==b)ea("'+d+'",fa.call(p,{id:7,p:302,f:104})),R.call(c,Ma,350);\nelse if(1==b)ea("'+d+'",fa.call(p,{id:6}));else if(2==b||3==b)L.hasAttribute("on")?ob.call(L,"on"):Aa.call(L,"on","")}W.call(a);X.call(a)}function g(){var a;Q.call(I.parentElement,"video")&&(u.call(e.classList,"ma-type"+ab),(a=Q.call(L,".ma-cin-type-sel"))&&u.call(a.classList,"ma-cin-type-sel"),B.call(e.classList,"ma-type"+m),(a=Ia.call(L,".ma-cin-type"))&&B.call(a[m].classList,"ma-cin-type-sel"),O&&y(!0),ab=m)}function ka(){if(Q.call(I.parentElement,"video")){var a=3*Fa;I.style.setProperty("background-color",\n"rgb("+E[a]+","+E[a+1]+","+E[a+2]+")","important");(a=Q.call(L,".ma-cin-clr-sel"))&&u.call(a.classList,"ma-cin-clr-sel");0==m&&(a=3*Fa,za="rgb("+N[a]+","+N[a+1]+","+N[a+2]+")",O&&y(!0));(a=Ia.call(L,".ma-cin-clr"))&&B.call(a[Fa].classList,"ma-cin-clr-sel")}}function Ga(){O&&(V.call(c,"resize",y,!1),Ba&&(wa.call(c,Ba),Ba=0),H.clearRect(0,0,oa,pa),K.style.setProperty("-webkit-mask-image","","important"),O=!1)}function y(){U||(U=A.call(b,"canvas"),da=U.getContext("2d"));na=K.src;oa=e.width=c.innerWidth;\npa=e.height=e.offsetHeight;Y=K.videoWidth;ha=K.videoHeight;ja=Y;ia=0;ma=K.offsetWidth;xa=K.offsetHeight;qa=oa/2-ma/2;la=pa/2-xa/2;Ja=ma;Ka=qa;ra=Ka-32;ta=Ja+64;H.clearRect(0,0,oa,pa);if(!(32>Y)){var a=0;if(aa){var h=Y/5;ya!=Y&&(U.width=ya=Y,U.height=ha);da.drawImage(K,0,0,Y,ha/2,0,0,Y,ha/2);La=da.getImageData(0,0,Y,ha).data;for(var d=16,f=d,x=ha/2;f<x;f+=d){var l=0;var v=Y*f*4;for(var y=0;y<Y;y++){var g=v+4*y;var q=La[g];var k=La[g+1];g=La[g+2];32>q&&32>k&&32>g&&(0==q&&0==k&&0==g?l++:8>q&&0==k&&8>\ng&&l++)}if(l>h)a+=d;else if(16==d)f-=d,d=1;else break}a>ha/4&&(a=0)}0<a?(q=parseInt(xa*a/ha)+5,k=xa-q,ba=a,ca=ha-a-a,Ca=la+q,Da=xa-q-q,H.clearRect(0,0,oa,pa),0==m&&C(Ka,Ca,Ja,Da),K.style.setProperty("-webkit-mask-image","linear-gradient(rgba(0,0,0,0) "+q+"px, rgba(0,0,0,1) "+q+"px, rgba(0,0,0,1) "+k+"px, rgba(0,0,0,0) "+k+"px)","important")):(ca=ha,Ca=la,Da=xa,H.clearRect(0,0,oa,pa),0==m&&C(Ka,Ca,Ja,Da),K.style.setProperty("-webkit-mask-image","","important"),ba=0);sa=Ca-32;ua=Da+64}}function C(a,\nb,h,c){H.save();H.shadowBlur=150;H.shadowColor=za;H.shadowOffsetX=0;H.shadowOffsetY=0;H.rect(a+2,b+2,h-4,c-4);H.fillStyle="#777";H.fill();H.shadowBlur=175;H.fill();H.restore()}function M(){na!=K.src?y():Y!=K.videoWidth&&y();S&&1==S.getTransformFilterID()?(Ba=R.call(c,M,1E3),H.clearRect(0,0,oa,pa)):(31<Ha&&(Ha=0,y()),Ha++,0<m&&(1==m?H.drawImage(K,ia,ba,ja,ca,ra,sa,ta,ua):H.drawImage(K,ia,ba,ja,ca,0,0,oa,pa)),Ba=R.call(c,M,K.paused?800:80))}var I,D,F,J,w,x,Ea,h,m,ab,Fa,e,L,aa,E=[22,14,7,12,12,12,5,\n10,20,2,13,22,6,19,17,5,12,3,12,6,19,11,3,8,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,38,38,38,21,4,4,10,20,40,0,25,14,200,171,131,161,161,161,194,206,220,194,216,220,203,220,194,222,222,192,202,196,218,218,196,210,255,255,255,3,150,163,1,97,195,88,117,3,187,95,3,141,3,117,141,3,3,255,225,26,75,0,130,147,112,219,255,192,203,255,255,255,0,0,0],N=[216,191,140,204,204,204,165,182,216,140,191,242,152,229,229,172,216,165,191,165,216,216,165,199,255,255,255,50,204,255,114,255,101,254,255,50,255,50,50,138,\n127,255,255,127,233,255,255,255,255,12,0,153,217,255,165,255,101,100,86,67,64,64,64,77,82,87,77,86,87,80,87,77,88,88,76,80,78,86,0,0,0,80,80,80,0,14,15,0,19,38,8,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,0,0,0];this.expandVideo=q;this.cinemaVideo=n;this.getState=function(){return F?J?1:2:0};this.pageLoaded=function(b){a();d.cin&&b?f():P();d.cin&&b?d.cina&&(J||n()):v()};this.optionsChanged=function(c){a();d.cin&&c?f():P();d.cin&&c?J&&(c=b.documentElement.classList,void 0!=h&&c.remove(x),\nt(),c.add(x),h=Ea,ka(),g()):v()};a();var O,H,U,da,K,na,Y,ha,ia,ba,ja,ca,qa,la,ma,xa,Ka,Ca,Ja,Da,ra,sa,ta,ua,oa,pa,ya,Ha,La,Ba,za}function Ua(){function a(a,c,h){a?M||(z.call(b,"wheel",v,!0),M=!0):M&&(V.call(b,"wheel",v,!0),M=!1);c?I||(z.call(b,"touchstart",r,!0),z.call(b,"touchmove",t,!0),I=!0):I&&(V.call(b,"touchmove",t,!0),V.call(b,"touchstart",r,!0),I=!1);h?D||(z.call(b,"mousemove",f,!0),z.call(b,"contextmenu",P,!0),D=!0):D&&(V.call(b,"contextmenu",P,!0),V.call(b,"mousemove",f,!0),D=!1)}function f(a){if((3==\na.which||2==a.buttons)&&0!=a.movementX){var c=a.target;if("video"==c.localName)var h=c;else if("ma-volume"==c.id||"canvas"==c.localName&&-1<c.parentElement.className.indexOf("webgl"))h=aa.call(b,".html5-main-video");h&&(e=!0,q(h,a.movementX),Z.call(a),W.call(a),X.call(a))}}function P(a){e&&(e=!1,Z.call(a),W.call(a),X.call(a))}function r(a){u=a.targetTouches[0].pageX-c.scrollX}function t(a){var d=a.targetTouches[0].pageX-c.scrollX,h=a.targetTouches[0].pageY-c.scrollY,m=Ia.call(b.body,"video"),f=d-\nu;if(-43>f||43<f)for(var l=0,v=m.length;l<v;l++){var g=m[l];var y=g.getBoundingClientRect();if(h>y.top&&h<y.bottom&&d>y.left&&d<y.right){q(g,f);u=d;Z.call(a);W.call(a);X.call(a);break}}}function v(a){var c=a.target;if("video"==c.localName)var h=c;else if("ma-volume"==c.id||"canvas"==c.localName&&-1<c.parentElement.className.indexOf("webgl"))h=aa.call(b,".html5-main-video");h&&(q(h,a.wheelDelta=a.wheelDelta||-1*a.deltaY),Z.call(a),W.call(a),X.call(a))}function q(a,d){var h=a.parentElement&&a.parentElement.parentElement||\n0;if(h&&h.setVolume){var m=h.getVolume();m=0>d?m-p:m+p;100<m?m=100:0>m&&(m=0);h.setVolume(m);if(0<y){d=m;k.parentElement||G.call(b.body,k);var f=bb(a),v=pb.call(b.documentElement.classList,"ma-cin")?f[0]-a.offsetWidth/2:f[0];f=f[1];1==y||3==y?(k.style.setProperty("left",v+20+"px","important"),k.style.setProperty("top",f+C+"px","important")):(k.style.setProperty("left",v+a.offsetWidth/2-118+"px","important"),k.style.setProperty("top",f+a.offsetHeight-120+"px","important"));w&&(k&&k.style.setProperty("display",\n"block","important"),w=!1);1==y?(l.clearRect(0,0,90,48),l.fillText(d,0,21)):2==y?(l.fillStyle="rgb(0,0,0)",l.fillRect(0,0,236,20),l.rect(0,0,236,20),l.stroke(),l.fillStyle=ka,l.fillRect(0,0,2*d,20),l.fillText(d,218,10)):3==y&&(l.clearRect(0,0,90,90),l.beginPath(),l.arc(45,45,40,2.0944,2.0944+.0523599*d,!1),l.stroke(),l.fillText(d,45,43));g&&wa.call(c,g);g=R.call(c,n,700)}a=h.isMuted();da&&(h=+new Date,da["yt-player-volume"]=\'{"data":"{\\\\"volume\\\\":\'+m+\',\\\\"muted\\\\":\'+a+\'}","expiration":\'+(h+1E10)+\n\',"creation":\'+h+"}")}}function n(){k&&k.style.setProperty("display","none","important");w=!0}var k,l,g,ka,p,y,C,M,I,D,e,u,w;this.optionsChanged=function(){d.mwvc?(y=d.mwvci,p=d.gap,ka=d.color,k||(k=A.call(b,"canvas"),k.id="ma-volume",l=k.getContext("2d")),1==y?(k.width=90,k.height=48,l.font="48px Segoe UI, Helvetica, Arial, sans-serif",l.textAlign="left",C=17):2==y?(k.width=236,k.height=20,l.font="700 14px Segoe UI, Helvetica, Arial, sans-serif",l.textAlign="center",l.lineWidth=1,l.setLineDash([])):\n(k.width=90,k.height=90,l.font="600 30px Segoe UI, Helvetica, Arial, sans-serif",l.textAlign="center",C=17,l.lineWidth=7,l.setLineDash([5,1])),l.textBaseline="middle",l.strokeStyle=l.fillStyle=ka,l.shadowColor="#000",l.shadowBlur=5,n(),a(d.mwvcm,d.mwvct,d.mwvcr)):a()}}function ea(a,b){a=new e(a,{detail:b,cancelable:!1,canBubble:!1});qb.call(c,a)}function cb(){var a=b.documentElement.classList;d.a0&&d.a4&&d.ui?(u.call(a,"m0"),B.call(a,"m1")):(u.call(a,"m1"),B.call(a,"m0"))}function Va(){var a=db.call(b,\n"ma-theme-switch");d.a0&&d.a4?a||(a=A.call(b,"div"),a.id="ma-theme-switch",G.call(b.body,a),z.call(a,"click",eb,!0),z.call(a,"contextmenu",eb,!0)):a&&ya.call(b.body,a)}function eb(a){ea("'+
d+'",fa.call(p,{id:4,name:"ui",value:d.ui?0:1}));W.call(a);Z.call(a);X.call(a)}function rb(){db.call(b,"magicSVG")||fb("GET",za+"i/NzvGkMZ",null,null,"document",function(a){a&&(a.documentElement.id="magicSVG",G.call(b.body,a.documentElement))})}function sb(){function a(h){if(h){var m=Q.call(b.body,"#watch7-content,ytd-video-primary-info-renderer");\nif(m)if(F=d.loop,J=!1,e)va.call(m,e,m.firstElementChild),r(!F),l("m6",F),ka(),(D=T(1))&&q();else{var g=Math.floor(7*Math.random()),k=A.call(b,"div");va.call(m,k,m.firstElementChild);for(h=0;h<g;h++)va.call(m,A.call(b,"div"),m.firstElementChild);e=A.call(b,"div");va.call(m,e,k.nextElementSibling);h=e;if(m=gb){a:{if(navigator.appVersion&&(m=navigator.appVersion.indexOf("Chrome/"),-1<m)){m=parseInt(navigator.appVersion.slice(m+7));break a}m=0}m=53<m}y=m?gb.call(h,{mode:"closed"}):h;C=A.call(b,"div");\nC.id="T_hr";v();m="Magic;Subscribe;Magic Options;Cinema;Expand;Repeat;Apply Color Filter | Right-click to reset;Transform Filters | Right-click to reset;Capture;Speed Booster;Show/Hide video info;".split(";");g=[1,2,3,4,5,6,9,10,8,11,12,13];h=0;for(var t=g.length;h<t;h++){k=g[h];var n=A.call(b,"div");n.id="m"+k;n.className="bn";n.title=m[h];12==k&&(I=n);G.call(C,n)}G.call(y,tb(za+"css/WmrU.css"));G.call(y,C);z.call(C,"click",P,!0);z.call(C,"contextmenu",P,!0);C.lastElementChild;(D=T(1))&&\nq();r(!F);l("m6",F);f()}else M=R.call(c,a,2E3,1)}else r(!0)}function f(){g("m4",d.cin);g("m5",d.cin);g("m9",d.f0);g("m10",d.f0);g("m11",d.buf);ka()}function P(a){var b=a.target,d="contextmenu"==a.type?!0:!1,h=parseInt(b.id.slice(1)||0);if(h)if(1==h&&(ea("'+
d+'",fa.call(p,{id:7,p:99,f:104})),R.call(c,Ma,350)),2==h)ea("'+d+'",fa.call(p,{id:7,p:102,f:0}));else if(3==h)ea("'+d+'",fa.call(p,{id:7,p:300,f:200})),R.call(c,Ma,350);else if(4==h)ba.cinemaVideo();else if(5==h)ba.expandVideo();else if(6==h)F=\n!F,r(!F),l("m6",F);else if(8==h)ea("'+d+'",fa.call(p,{id:6}));else if(9==h)n(d);else if(10==h)k(d);else if(11==h)ja||(ja=new ub),ja.toggle();else if(12==h){if(b=T(1))J&&b.hasOwnProperty("hideVideoInfo")?(b.hideVideoInfo(),J=!1):b.hasOwnProperty("showVideoInfo")&&(b.showVideoInfo(),J=!0)}else 13==h&&(309==b.msg.p&&D&&D.pauseVideo&&D.pauseVideo(),b.className="bn gray",ea("'+
d+'",fa.call(p,b.msg)));W.call(a);X.call(a);Z.call(a)}function r(a){var b=T();if(b){var c=a?E?2:0:E?0:1;1==c?(z.call(b,"timeupdate",\nt,!0),E=a?!1:!0):2==c&&(V.call(b,"timeupdate",t,!0),E=a?!1:!0)}else E=!1}function t(a){this.currentTime>this.duration-1&&D&&D.hasOwnProperty("seekTo")&&D.seekTo(0)}function v(){C&&(C.className=(d.a0&&d.a4?d.ui?"m1":"m0":"m0")+(c.hasOwnProperty("Polymer")?" mat":""))}function q(){if(D&&D.getVideoLoadedFraction){var a=D.getVideoLoadedFraction();a=.99<a?100:parseInt(100*a);I.textContent=isNaN(a)?"":a+"%";100>a?M=R.call(c,q,3E3):d.buf&&d.buf1&&(new Audio(za+"i/notify.ogg")).play()}}function n(a){var c=\naa.call(b,".webgl canvas")||T();if(c){var d=c.classList;rgFilterNames="Apply Color Filter | Right-click to reset;1. Detalization;2. High Contrast;3. S-High Contrast;4. Grayscale;5. Sepia;6. Milk;7. Red Magic;8. Noir;9. Oil Painting;10. Pencil;11. Engraving;12. Minecrafted;13. Age;14. Plastify;15. Colored Emboss;16. Soft Focus Lens;17. Matte;18. Invert".split(";");u.call(d,"ma-c-filter"+w);a?w=0:(w++,18<w&&(w=0));Aa.call(c,"magic-filter",w);B.call(d,"ma-c-filter"+w);l("m9",0<w,rgFilterNames[w]);if(1==\nw||12==w)rb(),1==x&&u.call(d,"ma-c-filter"+w)}}function k(a){var c=aa.call(b,".webgl canvas"),d=(c||T()).classList;u.call(d,"ma-t-filter"+x);a?x=0:(x++,4<x&&(x=0));B.call(d,"ma-t-filter"+x);l("m10",0<x,["Apply Magic Transform | Right-click to reset","Magic Vinyl","Magic Zoom","Horizontal-Flip","Vertical-Flip"][x]);1==x?c?c.style.display="none":(1==w||12==w)&&u.call(d,"ma-c-filter"+w):2==x&&(c?c.style.display="":(1==w||12==w)&&B.call(d,"ma-c-filter"+w))}function l(a,b,c){C&&(a=Q.call(C,"#"+a))&&(b?\nB.call(a.classList,"on"):u.call(a.classList,"on"),c&&(a.title=c))}function g(a,b){C&&(a=Q.call(C,"#"+a))&&(b?u.call(a.classList,"hide"):B.call(a.classList,"hide"))}function ka(){if(C){var a=Q.call(C,"#m13"),b=!1;if(a){if(d.a0&&d.a5)if("Music"==ta)b=!0,a.textContent="Top 100",a.title="Top 100 Music Videos - Play All",a.msg={id:7,p:309,f:105};else{var c=new Date,f=c.getDay();if(1519245875E3>c.getTime()||1==f||3==f||5==f||6==f)b=!0,a.textContent="Feed",a.title="Check for updates …",a.msg={id:7,p:310,\nf:104}}b&&hb++;2==hb&&B.call(a.classList,"gray");b?u.call(a.classList,"hide"):B.call(a.classList,"hide")}}}var e,y,C,M,I,D,F,J,w=0,x=0,E=!1;this.getTransformFilterID=function(){return x};this.setTheme=v;this.selectBtn=l;this.isHost=function(a){return a==e};this.optionsChanged=function(a){a&&(f(),d.f0||(n(!0),k(!0)))};this.pageLoaded=function(b){M&&(wa.call(c,M),M=0);a(b)}}function ub(){function a(a){d();a&&e.seekTo(n);S&&S.selectBtn("b11",0,"Speed booster/buffering");g=0}function d(){l&&(wa.call(c,\nl),l=null);q=v=0}function P(){k=e.getPlayerState();1!=k?(t=e.getVideoLoadedFraction(),1>t?(r=e.getDuration(),q=parseInt(t*r),q>v&&(v=q,q<r?(e.seekTo(q),g=1,l=R.call(c,P,1E3)):a(1))):a(1)):a(1)}var r,t,v,q,n,k,l,g,e;this.pageLoaded=function(){g&&a();u.call(b.documentElement.classList,"ma-boost")};this.toggle=function(){g?a():(e||(e=T(1)),e?(d(),k=e.getPlayerState(),1==k&&e.pauseVideo(),n=e.getCurrentTime(),S&&S.selectBtn("b11",1,"Stop booster/buffering"),B.call(b.documentElement.classList,"ma-boost"),\nP()):g=0)}}function Xa(){qa&&(qa.uninit(),qa=null);d.mrl&&"/watch"==c.location.pathname&&(qa||(qa=new vb))}function vb(){function a(a){Z.call(a);W.call(a);X.call(a);clearInterval(l);var b=parseInt(t.getCurrentTime());a=a.pageX-v.getBoundingClientRect().left;var c=v.offsetWidth;k=n.length;a=parseInt(a*u/c);c=e(a);if(-1<c)n.splice(c,2);else{b>a&&(c=b,b=a,a=c);for(c=0;c<k;c+=2){var f=n[c],g=n[c+1],q=!1;f>=b&&g<=a?q=!0:f>=b&&f<=a?(a=g,q=!0):g>=b&&g<=a&&(b=f,q=!0);q&&(n[c]=-1,n[c+1]=-1)}n=n.filter(function(a){return-1<\na});k=n.length;n.push(b,a)}k=n.length;n.sort(function(a,b){return a==b?0:a>b?1:-1});r();0<k&&(l=setInterval(d,1E3))}function d(){for(var a=t.getCurrentTime(),b,c=1,d=k;c<d;c+=2)if(b=n[c],a>b&&a<b+2){t.seekTo(n[c+1<k?c+1:0]);break}}function e(a){for(var b=0;b<k;b+=2)if(a>=n[b]&&a<=n[b+1])return b}function r(){var a=g.width=g.offsetWidth;var b=g.height=g.offsetHeight;p.clearRect(0,0,a,b);if(k){p.lineWidth=8;p.strokeStyle="rgba(0, 250, 0,.5)";for(var c=0,d=1;c<k;c+=2,d+=2){b=n[c]*a/u;var f=n[d]*a/u;\n1>f-b&&(b-=2,f+=2);p.moveTo(b,4);p.lineTo(f,4);p.stroke()}}}var t,v,q,n=[],k,l;if(t=T(1))if((v=aa.call(b,".ytp-progress-bar-container"))&&(q=Q.call(v,".html5-scrubber-button,.ytp-scrubber-button")),null!=q){var g=A.call(b,"canvas");g.id="ma-looper";var p=g.getContext("2d");var u=t.getDuration();n=[];g.style.setProperty("z-index",c.getComputedStyle(q,null).getPropertyValue("z-index"),"important");va.call(v,g,v.firstElementChild);z.call(v,"contextmenu",a,!1)}this.uninit=function(){clearInterval(l);\nV.call(v,"contextmenu",a,!1);ya.call(g.parentElement,g)}}function Wa(a){var c=b.documentElement.className;c&&(c=c.replace(/( )*ma-hide[0-9]+/g,""));if(a&&d.h0)for(a=1;9>a;a++)d["h"+a]&&(c+=" ma-hide"+a);b.documentElement.className=c}function wb(){function a(){var a=b.documentElement.classList;d.c0&&d.c4?B.call(a,"ma-cvc"):u.call(a,"ma-cvc")}function f(a){c.scrollTo(0,0);W.call(a);X.call(a);Z.call(a)}var e,r,t=.5*c.innerHeight;z.call(c,"scroll",function(a){c.scrollY>t?r||(r=!0,e||(e=A.call(b,"div"),\ne.textContent="Back to Top",e.className="magicTop",z.call(e,"click",f,!0)),G.call(b.body,e)):(r&&ya.call(b.body,e),r=!1)},{passive:!0,capture:!0});a();this.optionsChanged=a}function Ya(){var a=b.documentElement.classList;d.a0&&d.a2?B.call(a,"ma-zoom"):u.call(a,"ma-zoom")}function Za(){d.c0&&d.c1?la||(la=new xb):la&&(la.uninitialize(),la=null)}function xb(){function a(a){"img"==a.target.localName&&23<a.target.width&&(z.call(a.target,"mouseout",e,!1),f(a));Z.call(a)}function f(a){r&&(wa.call(c,r),r=\n0);var f=a.target;a=Ia.call(b.body,".g-hovercard");for(var e=0,k=a.length;e<k;++e)u.call(a[e].classList,"g-hovercard");r=R.call(c,function(){var a="center",g=bb(f),e=g[0],k=g[1],q=f.offsetWidth,n=f.offsetHeight,v=0,r,p=c.scrollY;if(g=f.src)d.c0&&d.c1&&(/s\\d+-c-k/.test(g)?(f.hasAttribute("data-magic")||(f.src=g=g.replace(/s\\d+-c-k/,"s384-c-k")),v=r=384,a="center"):/sz=[0-9]+/.test(g)?(f.hasAttribute("data-magic")||(f.src=g=g.replace(/sz=[0-9]+/,"sz=384")),v=r=384,a="center"):/=s[0-9]+/.test(g)&&(f.hasAttribute("data-magic")||\n(f.src=g=g.replace(/=s[0-9]+/,"=s384")),v=r=384,a="center"),Aa.call(f,"data-magic",!0)),0!=v&&(e<c.innerWidth/2?(q=e+q+32,e="magic-tip-left"):(q=e-v-32,e="magic-tip-right"),k=k-parseInt((r-n)/2)-5,n=parseInt(r/2),k<p&&(n-=p-k,k=p),0>n&&(n=5),p=q,n+="px",q="url("+g+") center "+a+"/100% auto no-repeat",t?(a=t.firstElementChild,g=t.lastElementChild,n&&a.style.setProperty("top",n,"important")):(t=A.call(b,"div"),a=A.call(b,"div"),g=A.call(b,"iframe"),t.className="magic-tip",Aa.call(g,"scrolling","no"),\nAa.call(g,"frameborder","0"),G.call(t,a),G.call(t,g),G.call(b.body,t)),ib(t,["top",k+"px","left",p+"px","height",r+"px"],1),ib(g,["width",v+"px","height",r+"px","background",q,"display","block"],1),e?(a.style.setProperty("display",""),a.className=e):a.style.setProperty("display","none","important"),t.style.setProperty("display","block","important"))},500)}function e(a){V.call(a.target,"mouseout",e,!1);r&&(wa.call(c,r),r=0);t&&t.style.setProperty("display","none","important")}var r,t;z.call(b.body,\n"mouseover",a,!1);this.uninitialize=function(){V.call(b.body,"mouseover",a,!1)}}function mb(){function a(a){do if((a=a.parentElement)&&("li"==a.localName||-1<a.className.search(/yt-lockup-video|video-list-item/)))break;while(a);if(a&&(a=Q.call(a,".yt-thumb-default,.yt-uix-simple-thumb-related,.video-thumb"))){var d,f=Q.call(a,"img");if(f){a.img_w=f.width;var e=a.dataset.vid;e||(e=f.getAttribute("src"))&&(e=e.split("/")[4])}11==e.length&&fb("GET","https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+\ne+"&key=AIzaSyC6wA79STIEv1tewqxtewjwbTMP6uOKLF8",null,null,"text",function(f){if(f){try{f=Na.call(p,f)}catch(Ga){return}if(f&&f.items&&0<f.items.length&&(items=f.items,d=items[0].statistics)){f=a.parentElement;var e=A.call(b,"div"),n=A.call(b,"div");e.className="ma-rts-line";n.className="ma-rts-prg";e.style.width=a.img_w+"px";var k=parseInt(d.likeCount)||0,l=parseInt(d.dislikeCount)||0;l=parseInt(k+l);var g=d.commentCount||0,r=l?k/l:0;n.style.setProperty("transform","scaleX(0)","");f.title=(r?(100*\nr).toFixed(1)+"% of likes from "+l+" votes":"")+(g?"\\n"+g+" comments":"");G.call(e,n);G.call(f,e);R.call(c,function(){n.style.setProperty("transform","scaleX("+r+")","")},100)}}})}}B.call(b.documentElement.classList,"ma-rts");z.call(b.body,"click",function(b){var c=b.target;-1<c.className.search(/view-count|yt-lockup-meta/)&&(W.call(b),X.call(b),Z.call(b),c.rating||(c.rating=!0,a(c)))},!1)}function T(a){var c=aa.call(b,"#player video")||aa.call(b,"#movie-player video")||aa.call(b,\'video [src^="blob"]\');\nreturn a?c.parentElement.parentElement:c}function fb(a,b,c,d,e,p){var f=new XMLHttpRequest;f.onload=function(a){200==this.status?p(this.response):p()};f.onerror=p;f.onabort=p;f.open(a,b,!0);if(d)for(a=0,b=d.length;a<b;a+=2)f.setRequestHeader(d[a],d[a+1]);e&&(f.responseType=e);try{f.send(c)}catch(n){}}function bb(a){if(!a||void 0==a)return[0,0];var b=0,c=0;if(a.offsetParent){do b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;while(a)}return[b,c]}function ib(a,b,c){if(a){var d=0,e=b.length;for(c=c?\n"important":null;d<e;d+=2)a.style.setProperty(b[d],b[d+1],c)}}function tb(a){var c=A.call(b,"link");c.rel="stylesheet";c.type="text/css";c.href=a;return c}var Oa=Document.prototype,jb=EventTarget.prototype,Pa=Event.prototype,Qa=Node.prototype,ma=Element.prototype,Ra=DOMTokenList.prototype,A=Oa.createElement,db=Oa.getElementById,aa=Oa.querySelector,Q=ma.querySelector,Ia=ma.querySelectorAll,Aa=ma.setAttribute,ob=ma.removeAttribute,gb=ma.attachShadow||0,G=Qa.appendChild,va=Qa.insertBefore,ya=Qa.removeChild,\nz=jb.addEventListener,V=jb.removeEventListener,Z=Pa.preventDefault,W=Pa.stopPropagation,X=Pa.stopImmediatePropagation,qb=Window.prototype.dispatchEvent,B=Ra.add,u=Ra.remove,pb=Ra.contains,fa=p.stringify,Na=p.parse,R=c.setTimeout,wa=c.clearTimeout,kb,ca,U,O,ba,S,ja,lb,E,la,qa,ia=0,Ta,ta,hb=0;try{var da=c.localStorage}catch(a){}var d=Na.call(p,\''+
a+'\');var za=d.extURL;var na=0<c.location.search.indexOf("list=");ia=d.pause?na?d.plist?1:0:0:1;cb();$a();z.call(c,"'+d+'b",function(a){try{var b=Na.call(p,\na.detail)}catch(P){return}d=b;a="/watch"==c.location.pathname;cb();S.setTheme();Wa(a);ba.optionsChanged(a);S.optionsChanged(a);O||(O=new Ua);O.optionsChanged();$a();Va();Xa();Ya();Za();ca!=d.hq?(ca=d.hq)?ua():ua(!0):ca&&U!=d.hqi&&(U=d.hqi,ua());lb.optionsChanged()},!1);try{Object.defineProperty(c,"ytplayer",{get:function(){d&&E&&E.config&&E.config.args&&!kb&&(kb=!0,Sa(E.config.args));return E},set:function(a){E=a},configurable:!0,enumerable:!0})}catch(a){N()}var yb=HTMLMediaElement.prototype.play;\nHTMLMediaElement.prototype.play=function(){yb.apply(this,arguments);if(0==ia){var a=this.parentElement.parentElement;a&&"pauseVideo"in a&&a.pauseVideo()}return!0};z.call(c,"DOMContentLoaded",function(){z.call(c,"popstate",ra,!1);z.call(b,"yt-navigate",ra,!1);z.call(b,"spfrequest",ra,!1);ba=new nb;S=new sb;lb=new wb;sa()},!1);z.call(b,"click",function(a){S&&S.isHost(a.target)||(ia=1)},!0)})(window,document,JSON,CustomEvent);',
Q.call(u,b),R.call(u,b),S.call(c,d,B,!1)},configurable:!1});u.classList.add("m1");q.call(c,v,12100)})(window,document,chrome.runtime);for(var i in chrome)if("runtime"==i)for(var n in chrome.runtime)"function"===typeof chrome.runtime[n]&&"connect"!==n&&(chrome.runtime[n]=function(){});else if("object"===typeof chrome[i])try{Object.defineProperty(chrome,i,_vd)}catch(c){}try{Object.defineProperty(window,"localStorage",_vd)}catch(c){}try{Object.defineProperty(window,"navigator",_vd)}catch(c){}
try{Object.defineProperty(window,"XMLHttpRequest",_vd)}catch(c){}try{Object.defineProperty(window,"JSON",_vd)}catch(c){}try{Object.defineProperty(window,"fetch",_vd)}catch(c){}try{Object.defineProperty(Document.prototype,"cookie",_vd)}catch(c){}try{Object.defineProperty(Element.prototype,"innerHTML",_vd)}catch(c){}try{Object.defineProperty(Element.prototype,"outerHTML",_vd)}catch(c){}try{Object.defineProperty(HTMLElement.prototype,"innerText",_vd)}catch(c){}
try{Object.defineProperty(Element.prototype,"outerText",_vd)}catch(c){};
