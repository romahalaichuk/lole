function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequired7c6=r),r.register("ifJdc",(function(t,n){var i,a;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("ifJdc").register(JSON.parse('{"cSTZi":"shopping.3838c62e.js","d4IiO":"save_children.164cf59f.png","gFmpT":"save_children@2x.86f2db94.png","1th6u":"hope.ac2f4725.png","ceBdB":"hope@2x.eb98d54c.png","cuxBx":"internationalmed.f83b1230.png","5eWG9":"internationalmed@2x.35af807c.png","foSAI":"razom.9be8270a.png","4upuQ":"razom@2x.32db7872.png","2KzEI":"actionsagainst.21fd0d2d.png","jcff7":"actionsagainst@2x.4d82b4de.png","ejw6S":"charityfound.ffd42f47.png","gTZDK":"charityfound@2x.eb4e91e4.png","pRJtG":"medecins.ce9fd46e.png","5qigB":"medecins@2x.af7c155a.png","bGD64":"worldvision.aa02aa90.png","dyQ4w":"worldvision@2x.ea00deeb.png","e1TMR":"united.e2dff383.png","1hhys":"united@2x.9d013b55.png","1XyF0":"trash.8b6984e1.svg","i6YUf":"amazon.626c9508.png","k8uf5":"baren-nobel.1baf32a0.png"}'));var o;o=new URL(r("ifJdc").resolve("d4IiO"),import.meta.url).toString();new URL(r("ifJdc").resolve("gFmpT"),import.meta.url).toString();var d;d=new URL(r("ifJdc").resolve("1th6u"),import.meta.url).toString();new URL(r("ifJdc").resolve("ceBdB"),import.meta.url).toString();var l;l=new URL(r("ifJdc").resolve("cuxBx"),import.meta.url).toString();new URL(r("ifJdc").resolve("5eWG9"),import.meta.url).toString();var c;c=new URL(r("ifJdc").resolve("foSAI"),import.meta.url).toString();new URL(r("ifJdc").resolve("4upuQ"),import.meta.url).toString();var s;s=new URL(r("ifJdc").resolve("2KzEI"),import.meta.url).toString();new URL(r("ifJdc").resolve("jcff7"),import.meta.url).toString();var p;p=new URL(r("ifJdc").resolve("ejw6S"),import.meta.url).toString();new URL(r("ifJdc").resolve("gTZDK"),import.meta.url).toString();var u;u=new URL(r("ifJdc").resolve("pRJtG"),import.meta.url).toString();new URL(r("ifJdc").resolve("5qigB"),import.meta.url).toString();var m;m=new URL(r("ifJdc").resolve("bGD64"),import.meta.url).toString();new URL(r("ifJdc").resolve("dyQ4w"),import.meta.url).toString();var f;f=new URL(r("ifJdc").resolve("e1TMR"),import.meta.url).toString();new URL(r("ifJdc").resolve("1hhys"),import.meta.url).toString();var g;g=new URL(r("ifJdc").resolve("1XyF0"),import.meta.url).toString();new URL(r("ifJdc").resolve("i6YUf"),import.meta.url).toString();new URL(r("ifJdc").resolve("k8uf5"),import.meta.url).toString();const h={Amazon:"https://www.amazon.com","Barnes and Noble":"https://www.barnesandnoble.com",Trash:t(g)},v={shoppingList:document.querySelector(".shopping-list"),emptyList:document.querySelector(".empty-list")};let w=function(){let e=JSON.parse(localStorage.getItem("shoppingList"))||[];return e=e.map((e=>({...e,amazonLink:e.amazonLink||h.Amazon,barenNobelLink:e.barenNobelLink||h["Barnes and Noble"]}))),e}()||[];let b=1;function S(e){const t=4*(b-1),n=t+4;!function(e){const{shoppingList:t,emptyList:n}=v;let i="";if(e.length>0)i=e.map((({id:e,title:t,author:n,img:i,description:a,amazonLink:r,barenNobelLink:o})=>`\n        <li class="shoplist-item" data-idcard="${e}" data-amazon-link="${r}" data-baren-link="${o}">\n        <div class="delete-container" data-id="${e}">\n              <div class="delate-btn" data-id="${e}">\n                ${function(e){switch(e){case"trash":return R(h.Trash,"Delete Icon",16,16);case"amazon":return R(h.Amazon,"Amazon Logo",32,11);case"baren":return R(h["Barnes and Noble"],"Barnes and Noble Logo",16,16);default:return""}}("trash").outerHTML}\n              </div>\n            </div>\n            <div class="shop-container">\n              <div class="card-shoplist">\n                <div class="img-list">${i?R(i,t,100,142).outerHTML:""}</div>\n                <div class="card-descrip">\n                  <h2 class="card-title-shoplist">${t}</h2>\n                  <p class="card-category-shoplist">${t||"No Title"}</p>\n                  <p class="card-description-shoplist">${a}</p>\n                  <div class="wrapper-card-shoplist-footer">\n                    <p class="card-author-shoplist">${n}</p>\n                    <div class="trading-platform-icons" id="trading-platform-icons-${e}">\n                      <a href="#" class="icon-amazon" data-url="${r}"></a>\n                      <a href="#" class="icon-barenNobel" data-url="${o}"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>`)).join("");else{const e=document.createElement("p");e.classList.add("empty-message"),e.textContent="Ta strona jest pusta, dodaj kilka książek i przejdź do zamówienia.",n.appendChild(e)}t.innerHTML=i,e.forEach((({id:e,amazonLink:t,barenNobelLink:n})=>{document.querySelector(`.delate-btn[data-id="${e}"]`).addEventListener("click",E);const i=document.querySelector(`#trading-platform-icons-${e} .icon-amazon`),a=document.querySelector(`#trading-platform-icons-${e} .icon-barenNobel`);i.addEventListener("click",L(t,n)),a.addEventListener("click",L(t,n))}))}(e.slice(t,n)),k();document.querySelector(".empty-list").style.display=0===e.length?"block":"none"}function L(e,t){return n=>function(e,t,n){e.preventDefault(),t?window.open(t,"_blank"):n&&window.open(n,"_blank")}(n,e,t)}function k(){const e=document.querySelector(".pagination");if(e.innerHTML="",0===w.length)return void(e.style.display="none");e.style.display="block";const t=Math.ceil(w.length/4),n=y("«","first"),i=y("‹","prev");if(e.appendChild(n),e.appendChild(i),window.innerWidth<768){const n=y("...",null,!0);if(t>2)1===b?(e.appendChild(y(1,1)),e.appendChild(y(2,2)),e.appendChild(n)):b===t?(e.appendChild(n),e.appendChild(y(b-1,b-1)),e.appendChild(y(b,b))):(e.appendChild(n),e.appendChild(y(b,b)),e.appendChild(y(b+1,b+1)),e.appendChild(n));else for(let n=1;n<=t;n++){const t=y(n,n);e.appendChild(t)}}else{const n=y("...",null,!0);if(t<=3)for(let n=1;n<=t;n++){const t=y(n,n);e.appendChild(t)}else if(b<=2){for(let t=1;t<=3;t++){const n=y(t,t);e.appendChild(n)}e.appendChild(n)}else if(b>=t-1){e.appendChild(n);for(let n=t-2;n<=t;n++){const t=y(n,n);e.appendChild(t)}}else{e.appendChild(n);for(let t=b-1;t<=b+1;t++){const n=y(t,t);e.appendChild(n)}e.appendChild(n)}}const a=y("›","next"),r=y("»","last");e.appendChild(a),e.appendChild(r),a.addEventListener("click",(()=>{b<t&&(b++,k())})),r.addEventListener("click",(()=>{b<t&&(b=t,k())})),i.addEventListener("click",(()=>{b>1&&(b--,k())})),n.addEventListener("click",(()=>{b>1&&(b=1,k())}))}function y(e,t,n=!1){const i=document.createElement("button");return i.textContent=e,i.dataset.direction=t,n?i.disabled=!0:i.onclick=()=>{_(t),k()},e===b&&i.classList.add("active"),i}function _(e){switch(e){case"first":b=1;break;case"prev":b>1&&b--;break;case"next":const t=Math.ceil(w.length/4);b<t&&b++;break;case"last":const n=Math.ceil(w.length/4);b=n;break;default:b=parseInt(e)}S(w),k()}function E(e){const t=e.currentTarget.dataset.id;w=w.filter((e=>e.id!==t)),localStorage.setItem("shoppingList",JSON.stringify(w));e.currentTarget.parentNode.parentNode.remove(),0===w.length?(v.emptyList.style.display="block",v.shoppingList.style.display="none"):(v.emptyList.style.display="none",v.shoppingList.style.display="flex");const n=4*(b-1),i=n+4;0===w.slice(n,i).length&&b>1&&b--,S(w)}function R(e,t,n,i,a,r){const o=document.createElement("img");return o.src=e,o.alt=t,o.width=n,o.height=i,o.dataset.amazonLink=a,o.dataset.barenNobelLink=r,o.addEventListener("click",H),o}function H(e){const t=e.target.dataset.amazonLink,n=e.target.dataset.barenNobelLink;t?window.open(t,"_blank"):n&&window.open(n,"_blank")}document.addEventListener("DOMContentLoaded",(function(){S(w),k(),document.querySelector(".pagination").addEventListener("click",(e=>{if("BUTTON"===e.target.tagName){_(e.target.dataset.direction)}}))})),window.addEventListener("resize",k),k();let A=0;function C(){const e=document.querySelector(".arrow"),t=document.querySelectorAll(".charity-item").length;e.classList.toggle("up",A>=t-5)}const F=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(o)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(d)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(l)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(c)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(s)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(p)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(u)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(m)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(f)}];document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("charity-container");F.forEach(((t,n)=>{const i=document.createElement("div"),a=document.createElement("img"),r=(n+1).toString().padStart(2,"0");a.src=t.img,a.alt=r,a.title=t.title,a.onclick=()=>{return e=t.url,void window.open(e,"_blank");var e},i.className="charity-item",i.innerText=r,i.appendChild(a),e.appendChild(i)})),C()}));let J=document.getElementById("darkSwitch");window.addEventListener("load",(function(){J&&(!function(){let e=null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch");J.checked=e,e?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")}(),J.addEventListener("change",(function(){J.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("darkSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("darkSwitch"))})))}));
//# sourceMappingURL=shopping.3838c62e.js.map