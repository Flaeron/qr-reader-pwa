(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){},21:function(e,n,t){e.exports=t(52)},26:function(e,n,t){},28:function(e,n,t){},50:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(19),c=t.n(o),l=(t(26),t(7)),i=t(8),s=t(10),u=t(9),d=t(11),h=t(55),f=t(56),m=t(53),p=t(54),w=t(57),g=(t(28),function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{exact:!0,to:"/qr-reader-pwa"},"Default")),r.a.createElement("li",null,r.a.createElement(w.a,{exact:!0,to:"/qr-reader-pwa/legacy"},"Legacy"))))}),v=t(14),E=t.n(v),b=(t(18),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={result:"No result"},t.handleScan=function(e){e&&t.setState({result:e})},t.handleError=function(e){console.error(e)},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state.result;return r.a.createElement("div",{className:"qr-reader-wrapper"},r.a.createElement(E.a,{className:"qr-reader",delay:300,onError:this.handleError,onScan:this.handleScan}),r.a.createElement("p",null,e))}}]),n}(a.Component)),y=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).state={result:"No result",imageLoaded:!1},t.qrReader=r.a.createRef(),t.handleScan=function(e){e&&t.setState({result:e})},t.handleError=function(e){console.error(e)},t.openImageDialog=function(){t.qrReader.current.openImageDialog()},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state.result;return r.a.createElement("div",{className:"qr-reader-wrapper"},r.a.createElement(E.a,{ref:this.qrReader,className:"qr-reader",delay:300,onError:this.handleError,onScan:this.handleScan,onImageLoad:this.onImageLoad,legacyMode:!0}),r.a.createElement("button",{onClick:this.openImageDialog},"Find QR Code"),r.a.createElement("p",null,e))}}]),n}(a.Component),j=(t(50),function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(a.Fragment,null,r.a.createElement("header",null,r.a.createElement(g,null)),r.a.createElement("main",null,r.a.createElement(f.a,null,r.a.createElement(m.a,{exact:!0,path:"/qr-reader-pwa/",component:b}),r.a.createElement(m.a,{exact:!0,path:"/qr-reader-pwa/legacy",component:y}),r.a.createElement(p.a,{to:"/qr-reader-pwa"}))))))}}]),n}(a.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/qr-reader-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/qr-reader-pwa","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(n,e)})}}()}},[[21,2,1]]]);
//# sourceMappingURL=main.fc5fd16f.chunk.js.map