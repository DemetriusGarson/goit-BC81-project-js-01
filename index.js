import{a as u,S as y,A as m}from"./assets/vendor-DjtasW9M.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v="https://events-store.b.goit.study/api",g={CATEGORIES:"/categories",EVENTS:"/events"};u.defaults.baseURL=v;async function f(){return(await u.get(g.CATEGORIES)).data}async function l(){return(await u.get(g.EVENTS)).data}const i={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),loader:document.querySelector(".loader")};function L(n,s){const r=n%4,o=n-r;return r===0||s<o?"row-of-4":r===3?"row-last-3":r===2?"row-last-2":r===1?"row-last-1":""}function E(n){const s=[{_id:"all",name:"Всі події",tags:[]},...n],r=s.map(({_id:o,name:e,tags:t},a)=>`<li class="event-category-item ${L(s.length,a)}" data-category="${o}">
          <p class="event-category-title">${e}</p>
          <p class="event-category-tags">${t.map(p=>`#${p}, `).join(" ")}</p>
        </li>`).join("");i.categoriesListEl.innerHTML=r,i.firstCategoryButton&&i.firstCategoryButton.classList.add("categories__btn--active"),window.innerWidth<768&&!i.categoriesListEl.SimpleBar&&new y(i.categoriesListEl,{autoHide:!1})}i.categoriesListOpenSvgBtn.addEventListener("click",w);function w(n){i.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),i.categoriesListOpen.classList.toggle("is-hidden")}function d(n){const s=n.map(({_id:r,name:o,price:e,category:t,image:a})=>`<li class="event-item">
        <img
          src="${a}"
          alt="${o}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${t.name}</p>
          <p class="event-price">від ${e.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${r}">Детальніше</button>
      </li>`).join("");i.eventsList.insertAdjacentHTML("beforeend",s)}async function S(){try{const n=await f();E(n);const{events:s}=await l();d(s)}catch(n){console.log("error events list",n)}}async function h(n){const s=n.target.closest(".event-category-item");if(!s)return;const r=s.dataset.category;if(r==="all"){const{events:o}=await l();i.eventsList.innerHTML="",d(o)}else{const e=(await f()).filter(c=>c._id===r),{events:t}=await l(),a=t.filter(c=>c.category.name===e[0].name);i.eventsList.innerHTML="",d(a)}}document.addEventListener("DOMContentLoaded",S);i.categoriesListEl.addEventListener("click",h);new m(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
