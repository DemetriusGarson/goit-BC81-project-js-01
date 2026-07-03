import{a as c,A as d}from"./assets/vendor-BIW9uWCR.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="https://events-store.b.goit.study/api",l={CATEGORIES:"/categories",EVENTS:"/events"};c.defaults.baseURL=g;async function f(){return(await c.get(l.CATEGORIES)).data}async function p(){return(await c.get(l.EVENTS)).data}function v(t,n){console.log(t,n);const r=t%4,o=t-r;return r===0||n<o?"row-of-4":r===3?"row-last-3":r===2?"row-last-2":r===1?"row-last-1":""}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn")};function y(t){const n=[{_id:"all",name:"Всі події",tags:[]},...t],r=n.map(({_id:o,name:e,tags:s},i)=>`<li class="event-category-item ${v(n.length,i)}" data-category="${o}">
          <p class="event-category-title">${e}</p>
          <p class="event-category-tags">${s.map(u=>`#${u}, `).join(" ")}</p>
        </li>`).join("");a.categoriesListEl.innerHTML=r,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.categoriesListOpenSvgBtn.addEventListener("click",m);function m(t){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden")}function L(t){const n=t.map(({_id:r,name:o,price:e,category:s,image:i})=>`<li class="event-item">
        <img
          src="${i}"
          alt="${o}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${s.name}</p>
          <p class="event-price">від ${e.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${r}">Детальніше</button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}async function E(){try{const t=await f();y(t);const{events:n}=await p();L(n)}catch(t){console.log("error events list",t)}}document.addEventListener("DOMContentLoaded",E);new d(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
