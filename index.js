import{a as v,S as te,b as oe,N as ne,P as se,A as ie,i as A}from"./assets/vendor-J54O91YU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const q=document.getElementById("navbar-menu"),re=document.getElementById("open-menu"),ae=document.getElementById("close-menu"),ce=q.querySelector(".nav-list"),le=q.querySelector(".mobile-menu-btn"),W=document.querySelector(".header .consultation-btn"),E=document.getElementById("event-list");function I(){q.classList.add("is-hidden"),document.body.style.overflow=""}re.addEventListener("click",function(){q.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ae.addEventListener("click",I);ce.addEventListener("click",I);le.addEventListener("click",function(){I(),E&&E.scrollIntoView({behavior:"smooth"})});W&&W.addEventListener("click",function(){E&&E.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&I()});const de="https://events-store.b.goit.study/api",m={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};v.defaults.baseURL=de;async function ue(){return(await v.get(m.CATEGORIES)).data}async function D(e=1,t="",n=m.LIMIT){return t==="all"||!t?(await v.get(`${m.EVENTS}?page=${e}&limit=${n}`)).data:(await v.get(`${m.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function me(e,t){const n=e%4,o=e-n;return n===0||t<o?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function C(){a.loader.classList.remove("is-hidden")}function M(){a.loader.classList.add("is-hidden")}let ve=!1;function ge(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:o,name:s,tags:i},r)=>{const u=me(t.length,r),g=i.map(L=>`#${L} `).join("");return`<li class="event-category-item ${u}" data-category="${o}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${g}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",fe);function fe(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!ve&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new te(a.categoriesScroll,{autoHide:!1}).recalculate()}function N(e){const n=e.filter(({image:o})=>o).map(({_id:o,name:s,price:i,category:r,image:u})=>`<li class="event-item">
        <img
          src="${u}"
          alt="${s}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${o}">
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const S="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",pe="https://events-store.b.goit.study";async function ye(e){try{const{data:t}=await v.get(`${pe}/api/events/${e}`);return t}catch(t){throw t}}function he(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:o,description:s,image:i,durationHours:r,rate:u,price:g,audience:L,category:K,program:Y,inclusions:Z}=e;let f="";const P=Math.floor(u),b=u-P,V=b>=.25&&b<.75,J=P+(V||b>=.75?1:0);for(let c=0;c<P;c+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${S}#icon-full-star"></use>
      </svg>
    `;b>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${S}#icon-full-star"></use>
      </svg>
    `:V&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${S}#icon-half-star"></use>
      </svg>
    `);for(let c=J;c<5;c+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${S}#icon-star"></use>
      </svg>
    `;const Q=Y.map(c=>`<li>${c}</li>`).join(""),X=Z.map(c=>`<li>${c}</li>`).join(""),ee=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${o}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${K.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${o}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${Q}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${X}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${L.min} до ${L.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ee}let d=1,_="all";function O(){return window.innerWidth<768?m.LIMIT/2:m.LIMIT}async function Le(){try{C();const e=O(),[t,{events:n,totalItems:o}]=await Promise.all([ue(),D(d,_,e)]);ge(t),N(n),R(o)}catch(e){console.log("error events list",e)}finally{M()}}async function be(e){const t=e.target.closest(".event-category-item");if(t)try{_=t.dataset.category,d=1,a.eventsList.innerHTML="",C();const o=O(),{events:s,totalItems:i}=await D(d,_,o);N(s),R(i)}catch(n){console.log("error during getting events by category",n)}finally{M()}}async function Se(e){d+=1;try{C();const t=O(),{events:n,totalItems:o}=await D(d,_,t);N(n),R(o)}catch(t){console.log("error during getting more events by category",t),d-=1}finally{M()}}function R(e){const t=O();a.showMoreBtn.disabled=d*t>=e}async function Ee(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const o=await ye(n);he(o);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",j),window.addEventListener("keydown",H);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",_e)}catch{typeof iziToast<"u"&&iziToast.error({title:"Error",message:"Не вдалося завантажити деталі події.",position:"topRight"})}}function j(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),o=e.target===t;(n||o)&&z()}function H(e){e.code==="Escape"&&z()}function z(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",j),window.removeEventListener("keydown",H);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function _e(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),o=document.querySelector(".event-modal-overlay");if(n&&o){n.classList.add("is-hidden"),o.classList.remove("is-open"),o.removeEventListener("click",j),window.removeEventListener("keydown",H);const i=o.querySelector(".modal-product");i&&(i.innerHTML="")}const s=document.querySelector(".section.booking-modal");if(s){s.classList.remove("is-hidden"),s.classList.add("is-open"),document.body.classList.add("no-scroll");const i=s.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",Le);a.categoriesListEl.addEventListener("click",be);a.showMoreBtn.addEventListener("click",Se);a.eventsList.addEventListener("click",Ee);const G=document.querySelector(".about-us-slider");G&&new oe(G,{modules:[ne,se],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ie(".accordion-container",{showMultiple:!1});const we="https://events-store.b.goit.study/api",x=document.querySelector(".booking-modal"),ke=document.querySelector(".booking-modal_close-btn"),l=document.querySelector(".booking-modal_form"),w=document.querySelector(".booking-modal_submit-btn"),p=l.querySelector('[name="name"]'),y=l.querySelector('[name="phone"]'),h=l.querySelector('[name="comment"]'),k=p.closest(".booking-modal_field").querySelector(".booking-modal_error"),B=y.closest(".booking-modal_field").querySelector(".booking-modal_error"),$=h.closest(".booking-modal_field").querySelector(".booking-modal_error");l.addEventListener("submit",Me);let F=null;function T(){x.classList.remove("is-open"),l.reset(),U(),F=null,document.body.style.overflow="",document.removeEventListener("keydown",Be),ke.removeEventListener("click",$e),x.removeEventListener("click",qe)}function Be(e){e.code==="Escape"&&T()}function $e(){T()}function qe(e){e.target===x&&T()}function Ie(){const e={},t=p.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=y.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const o=h.value.trim();return o?o.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${o.length}`):e.comment="Введіть коментар",e}function Ce(e){U(),e.name&&(p.classList.add("is-error"),k.textContent=e.name,k.classList.add("is-visible")),e.phone&&(y.classList.add("is-error"),B.textContent=e.phone,B.classList.add("is-visible")),e.comment&&(h.classList.add("is-error"),$.textContent=e.comment,$.classList.add("is-visible"))}function U(){p.classList.remove("is-error"),y.classList.remove("is-error"),h.classList.remove("is-error"),k.textContent="",B.textContent="",$.textContent="",k.classList.remove("is-visible"),B.classList.remove("is-visible"),$.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=Ie();if(t.name||t.phone||t.comment){Ce(t);return}U();const n={name:p.value.trim(),phone:y.value.trim().replace(/\D/g,""),eventId:F,comment:h.value.trim()};try{Te(),C(),w.disabled=!0;const{data:o}=await v.post(`${we}/orders`,n),{eventName:s,orderNum:i}=o;A.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ae()}catch(o){o.status===400&&(A.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(o)),o.status===404&&(A.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(o))}finally{Oe(),M(),w.disabled=!1}}function Oe(){w.classList.remove("is-hidden")}function Te(){w.classList.add("is-hidden")}const Pe="dataBooking";function Ae(){localStorage.removeItem(Pe),l.name="",l.phone="",l.comment=""}
//# sourceMappingURL=index.js.map
