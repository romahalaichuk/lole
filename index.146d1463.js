function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("ifJdc",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("ifJdc").register(JSON.parse('{"eFRlh":"index.146d1463.js","d4IiO":"save_children.164cf59f.png","gFmpT":"save_children@2x.86f2db94.png","1th6u":"hope.ac2f4725.png","ceBdB":"hope@2x.eb98d54c.png","cuxBx":"internationalmed.f83b1230.png","5eWG9":"internationalmed@2x.35af807c.png","foSAI":"razom.9be8270a.png","4upuQ":"razom@2x.32db7872.png","2KzEI":"actionsagainst.21fd0d2d.png","jcff7":"actionsagainst@2x.4d82b4de.png","ejw6S":"charityfound.ffd42f47.png","gTZDK":"charityfound@2x.eb4e91e4.png","pRJtG":"medecins.ce9fd46e.png","5qigB":"medecins@2x.af7c155a.png","bGD64":"worldvision.aa02aa90.png","dyQ4w":"worldvision@2x.ea00deeb.png","e1TMR":"united.e2dff383.png","1hhys":"united@2x.9d013b55.png","1XyF0":"trash.8b6984e1.svg","i6YUf":"amazon.626c9508.png","k8uf5":"baren-nobel.1baf32a0.png"}')),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.style.overflow=n?"":"hidden"};t.addEventListener("click",o),n.addEventListener("click",o),document.querySelectorAll(".mobile__item").forEach((e=>{e.addEventListener("click",o)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();var a;a=new URL(i("ifJdc").resolve("d4IiO"),import.meta.url).toString();new URL(i("ifJdc").resolve("gFmpT"),import.meta.url).toString();var c;c=new URL(i("ifJdc").resolve("1th6u"),import.meta.url).toString();new URL(i("ifJdc").resolve("ceBdB"),import.meta.url).toString();var d;d=new URL(i("ifJdc").resolve("cuxBx"),import.meta.url).toString();new URL(i("ifJdc").resolve("5eWG9"),import.meta.url).toString();var l;l=new URL(i("ifJdc").resolve("foSAI"),import.meta.url).toString();new URL(i("ifJdc").resolve("4upuQ"),import.meta.url).toString();var s;s=new URL(i("ifJdc").resolve("2KzEI"),import.meta.url).toString();new URL(i("ifJdc").resolve("jcff7"),import.meta.url).toString();var u;u=new URL(i("ifJdc").resolve("ejw6S"),import.meta.url).toString();new URL(i("ifJdc").resolve("gTZDK"),import.meta.url).toString();var p;p=new URL(i("ifJdc").resolve("pRJtG"),import.meta.url).toString();new URL(i("ifJdc").resolve("5qigB"),import.meta.url).toString();var m;m=new URL(i("ifJdc").resolve("bGD64"),import.meta.url).toString();new URL(i("ifJdc").resolve("dyQ4w"),import.meta.url).toString();var g;g=new URL(i("ifJdc").resolve("e1TMR"),import.meta.url).toString();new URL(i("ifJdc").resolve("1hhys"),import.meta.url).toString();new URL(i("ifJdc").resolve("1XyF0"),import.meta.url).toString();new URL(i("ifJdc").resolve("i6YUf"),import.meta.url).toString();new URL(i("ifJdc").resolve("k8uf5"),import.meta.url).toString();let h=0;function f(){const e=document.querySelector(".arrow"),t=document.querySelectorAll(".charity-item").length;e.classList.toggle("up",h>=t-5)}const b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(a)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(c)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(d)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(l)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(s)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(u)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(p)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(m)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(g)}];document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("charity-container");b.forEach(((t,n)=>{const o=document.createElement("div"),r=document.createElement("img"),i=(n+1).toString().padStart(2,"0");r.src=t.img,r.alt=i,r.title=t.title,r.onclick=()=>{return e=t.url,void window.open(e,"_blank");var e},o.className="charity-item",o.innerText=i,o.appendChild(r),e.appendChild(o)})),f()}));const v=document.getElementById("categories"),k=document.getElementById("books-container"),y=document.querySelector(".popup"),S=document.querySelector(".popup__close"),w=document.querySelector(".book__title"),E=document.querySelector(".book__author"),L=document.querySelector(".book__description"),_=document.querySelector(".book__img"),R=document.querySelector(".icon-amazon"),H=document.querySelector(".icon-barenNobel"),A=document.querySelector(".shopping-list-btn"),x=document.querySelector(".add-receipt"),C=document.getElementById("selected-category-header");let F=!0;function J(e){w.textContent=e.title,E.textContent=e.author,L.textContent=e.description,_.src=e.book_image,R.href=e.buy_links[0].url,H.href=e.buy_links[2].url,y.style.display="block";var t=JSON.parse(localStorage.getItem("shoppingList"))||[];function n(){t.push(i),localStorage.setItem("shoppingList",JSON.stringify(t)),x.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",A.textContent="Remove from the shopping list",A.addEventListener("click",o),A.removeEventListener("click",n)}function o(){var e=t.filter((e=>e!==i));t=e,localStorage.setItem("shoppingList",JSON.stringify(t)),A.textContent="Add to shopping list",x.textContent="",A.addEventListener("click",n),A.removeEventListener("click",o)}const r=t.includes(JSON.stringify(i));r||(A.textContent="Add to shopping list",x.textContent="",A.addEventListener("click",n)),r&&(A.textContent="Remove from the shopping list",x.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",A.addEventListener("click",o));var i={id:e._id,author:e.author,img:e.book_image,description:e.description,title:e.title,amazonLink:e.buy_links[0].url,barenNobelLink:e.buy_links[2].url};S.addEventListener("click",U),window.addEventListener("click",(e=>{e.target==y&&U()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&U()}))}function U(){y.style.display="none",S.removeEventListener("click",U),window.removeEventListener("click",(e=>{e.target==y&&U()})),document.removeEventListener("keydown",(e=>{"Escape"===e.key&&U()}))}fetch("https://books-backend.p.goit.global/books/category-list").then((e=>e.json())).then((e=>{e&&e.length>0?(e.forEach((e=>{const t=document.createElement("div");t.classList.add("category-item"),t.textContent=e.list_name,t.setAttribute("data-category",e.list_name),t.addEventListener("click",(()=>function(e,t){const n=document.getElementById("category-header");if(!n)return void console.error('Nie można odnaleźć elementu o identyfikatorze "category-header".');document.querySelectorAll(".category-item").forEach((e=>{e.classList.remove("active")})),t.classList.add("active");const o=e.split(" "),r=o.pop(),i=o.join(" ");n.innerHTML=`\n      <span class="category-header-black">${i}</span>\n      <span class="category-header-last-word">${r}</span>`,F=!1,C.innerHTML="","All categories"!==e&&function(e){k.innerHTML="","All categories"!==e&&fetch(`https://books-backend.p.goit.global/books/category?category=${e}`).then((e=>e.json())).then((e=>{e&&e.length>0?e.forEach((e=>{const t=document.createElement("div");t.classList.add("book-card"),t.innerHTML=`\n                <img src="${e.book_image}" alt="${e.title}">\n                <div class="book-details">\n                  <h3>${e.title}</h3>\n                  <p>${e.author}</p>\n                </div>`,t.addEventListener("click",(()=>J(e))),k.appendChild(t)})):console.warn("Brak książek dla wybranej kategorii.")})).catch((e=>console.error("Błąd podczas pobierania książek:",e)))}(e)}(e.list_name,t))),v.appendChild(t)})),fetch("https://books-backend.p.goit.global/books/top-books").then((e=>e.json())).then((e=>{if(e&&e.length>0){const t=document.createElement("div");t.classList.add("home_gallery");const n=document.createElement("h2");n.innerHTML='\n            <span class="category-header-black">\n              Best Sellers\n            </span>\n            <span class="category-header-last-word">\n              Books\n            </span>\n          ',n.classList.add("best-sellers-header"),t.appendChild(n),e.slice(0,4).forEach((e=>{const n=document.createElement("div");n.classList.add("book-category","card"),n.setAttribute("data-category",e.list_name);const o=e.list_name.split(" "),r=(o.pop(),o.join(" ")),i=document.createElement("h2");i.innerHTML=`\n              <span style="\n                font-size: 14px;\n                line-height: 24px;\n                font-family: 'DM Sans', sans-serif;\n                font-weight: 400;\n                color: #B4AFAF;\n                letter-spacing: 0.42px;\n                text-transform: uppercase;">\n                ${r}\n              </span>\n            `,n.appendChild(i);const a=document.createElement("div");a.classList.add("books-list","home_gallery"),a.setAttribute("data-category",e.list_name),e.books.slice(0,4).forEach((e=>{const t=document.createElement("div");t.classList.add("book-card"),t.innerHTML=`\n                <img src="${e.book_image}" alt="${e.title}">\n                <div class="book-details">\n                  <h3>${e.title}</h3>\n                  <p>${e.author}</p>\n                </div>`,t.addEventListener("click",(()=>J(e))),a.appendChild(t)}));const c=document.createElement("button");c.textContent="See More",c.classList.add("see-more-button"),c.addEventListener("click",(()=>function(e){console.log(`See More button clicked for category: ${e}`)}(e.list_name))),n.appendChild(a),n.appendChild(c),t.appendChild(n)})),k.appendChild(t),document.querySelectorAll(".book-category").forEach((e=>{e.addEventListener("click",(function(){!function(e,t){fetch(`https://books-backend.p.goit.global/books/category?category=${e}`).then((e=>e.json())).then((e=>{e&&e.length>0?(t.innerHTML="",e.slice(0,4).forEach((e=>{const n=document.createElement("div");n.classList.add("book-card"),n.innerHTML=`\n              <img src="${e.book_image}" alt="${e.title}">\n              <div class="book-details">\n                <h3>${e.title}</h3>\n                <p>${e.author}</p>\n              </div>`,n.addEventListener("click",(()=>J(e))),t.appendChild(n)}))):console.warn("Brak książek dla wybranej kategorii.")})).catch((e=>console.error("Błąd podczas pobierania książek:",e)))}(this.getAttribute("data-category"),this.querySelector(".books-list"))}))}))}else console.error("Brak danych o najlepszych kategoriach.")})).catch((e=>console.error("Błąd podczas pobierania najlepszych kategorii:",e)))):console.error("Brak dostępnych kategorii.")})).catch((e=>console.error("Błąd podczas pobierania kategorii:",e)));document.querySelector("#buttonScrollUp").addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){var e=document.getElementById("buttonScrollUp");window.scrollY>400?e.style.display="block":e.style.display="none"})),window.addEventListener("DOMContentLoaded",(function(){document.getElementById("buttonScrollUp").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#page-header").scrollIntoView({behavior:"smooth"})}))}));let B=document.getElementById("darkSwitch");window.addEventListener("load",(function(){B&&(!function(){let e=null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch");B.checked=e,e?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")}(),B.addEventListener("change",(function(){B.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("darkSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("darkSwitch"))})))}));
//# sourceMappingURL=index.146d1463.js.map
