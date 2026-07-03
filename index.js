import{a,A as d}from"./assets/vendor-BIW9uWCR.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://events-store.b.goit.study/api",c={CATEGORIES:"/categories",EVENTS:"/events"};a.defaults.baseURL=u;async function p(){return(await a.get(c.CATEGORIES)).data}async function f(){return(await a.get(c.EVENTS)).data}const l={categoriesListEl:document.querySelector(".js-event-category-list"),eventsList:document.querySelector(".events-list")};function g(s){const o=[{_id:"all",name:"Всі події",tags:[]},...s].map(e=>`<li class="event-category-item" data-category="${e._id}">
          <p class="event-category-title">${e.name}</p>
          <p class="event-category-tags">${e.tags.map(t=>`#${t},`).join(" ")}</p>
        </li>`).join("");l.categoriesListEl.innerHTML=o;const r=document.querySelector(".categories__btn");r&&r.classList.add("categories__btn--active")}function m(s){const n=s.map(({_id:o,name:r,price:e,category:t,image:i})=>`<li class="event-item">
        <img
          src="${i}"
          alt=""${r}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${r}</p>
          <p class="event-text">${t.name}</p>
          <p class="event-price">від ${e.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${o}">Детальніше</button>
      </li>`).join("");l.eventsList.insertAdjacentHTML("beforeend",n)}async function v(){try{const s=await p();g(s);const{events:n}=await f();m(n)}catch(s){console.log("error events list",s)}}document.addEventListener("DOMContentLoaded",v);new d(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
