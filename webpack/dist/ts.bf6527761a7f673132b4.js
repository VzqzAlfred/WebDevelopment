(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),((t,e,n)=>{const r=n.p+"assets/batmanIcon.png",c=(n.p,JSON.parse('{"O":[["Vanilla JS","index.html"],["React","react.html"],["TypeScript","ts.html"]]}'));var a=function(){function t(t){this.nombre=t}return t.prototype.greet=function(){return"¡Webpack con "+this.nombre+"!"},t}(),i=document,o=i.getElementById("app"),p=i.createElement("h1"),s=i.createElement("img"),l=i.createElement("nav"),u="",h=new a("TypeScript");c.O.forEach((function(t){return u+='<a href="'.concat(t[1],'">').concat(t[0],"</a>")})),p.textContent=h.greet(),s.src=r,s.classList.add("icon"),l.innerHTML=u,l.classList.add("menu"),o.appendChild(p),o.appendChild(s),o.appendChild(l)})(0,0,t)})();