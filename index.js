import{a as v,S as te,b as oe,N as ne,P as se,A as ie,i as A}from"./assets/vendor-J54O91YU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const q=document.getElementById("navbar-menu"),re=document.getElementById("open-menu"),ae=document.getElementById("close-menu"),ce=q.querySelector(".nav-list"),le=q.querySelector(".mobile-menu-btn"),W=document.querySelector(".header .consultation-btn"),E=document.getElementById("event-list");function C(){q.classList.add("is-hidden"),document.body.style.overflow=""}re.addEventListener("click",function(){q.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ae.addEventListener("click",C);ce.addEventListener("click",C);le.addEventListener("click",function(){C(),E&&E.scrollIntoView({behavior:"smooth"})});W&&W.addEventListener("click",function(){E&&E.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&C()});const de="https://events-store.b.goit.study/api",m={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};v.defaults.baseURL=de;async function ue(){return(await v.get(m.CATEGORIES)).data}async function D(e=1,t="",o=m.LIMIT){return t==="all"||!t?(await v.get(`${m.EVENTS}?page=${e}&limit=${o}`)).data:(await v.get(`${m.EVENTS}?page=${e}&limit=${o}&category=${t}`)).data}const r={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function me(e,t){const o=e%4,n=e-o;return o===0||t<n?"row-of-4":o===3?"row-last-3":o===2?"row-last-2":o===1?"row-last-1":""}function I(){r.loader.classList.remove("is-hidden")}function M(){r.loader.classList.add("is-hidden")}let ve=!1;function ge(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],o=t.map(({_id:n,name:s,tags:i},a)=>{const u=me(t.length,a),g=i.map(L=>`#${L} `).join("");return`<li class="event-category-item ${u}" data-category="${n}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${g}</p>
        </li>`}).join("");r.categoriesListEl.innerHTML=o,r.firstCategoryButton&&r.firstCategoryButton.classList.add("categories__btn--active")}r.caregoryListSelect.addEventListener("click",fe);function fe(e){r.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),r.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!ve&&!r.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!r.categoriesListEl.SimpleBar&&new te(r.categoriesScroll,{autoHide:!1}).recalculate()}function N(e){const o=e.filter(({image:n})=>n).map(({_id:n,name:s,price:i,category:a,image:u})=>`<li class="event-item">
        <img
          src="${u}"
          alt="${s}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${a.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${n}">
          Детальніше
        </button>
      </li>`).join("");r.eventsList.insertAdjacentHTML("beforeend",o)}const S="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",pe="https://events-store.b.goit.study";async function ye(e){try{const{data:t}=await v.get(`${pe}/api/events/${e}`);return t}catch(t){throw t}}function he(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:o,name:n,description:s,image:i,durationHours:a,rate:u,price:g,audience:L,category:K,program:Y,inclusions:Z}=e;let f="";const P=Math.floor(u),b=u-P,V=b>=.25&&b<.75,J=P+(V||b>=.75?1:0);for(let c=0;c<P;c+=1)f+=`
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
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${K.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
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
          <p><b>Тривалість:</b> ${a} години</p>
          <p><b>Кількість учасників:</b> від ${L.min} до ${L.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${o}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ee}let d=1,w="all";function O(){return window.innerWidth<768?m.LIMIT/2:m.LIMIT}async function Le(){try{I();const e=O(),[t,{events:o,totalItems:n}]=await Promise.all([ue(),D(d,w,e)]);ge(t),N(o),R(n)}catch(e){console.log("error events list",e)}finally{M()}}async function be(e){const t=e.target.closest(".event-category-item");if(t)try{w=t.dataset.category,d=1,r.eventsList.innerHTML="",I();const n=O(),{events:s,totalItems:i}=await D(d,w,n);N(s),R(i)}catch(o){console.log("error during getting events by category",o)}finally{M()}}async function Se(e){d+=1;try{I();const t=O(),{events:o,totalItems:n}=await D(d,w,t);N(o),R(n)}catch(t){console.log("error during getting more events by category",t),d-=1}finally{M()}}function R(e){const t=O();r.showMoreBtn.disabled=d*t>=e}async function Ee(e){const t=e.target.closest(".event-details-btn");if(!t)return;const o=t.dataset.eventId;if(o)try{const n=await ye(o);he(n);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",j),window.addEventListener("keydown",H);const a=i.querySelector(".modal-event__order-btn");a&&a.addEventListener("click",we)}catch{typeof iziToast<"u"&&iziToast.error({title:"Error",message:"Не вдалося завантажити деталі події.",position:"topRight"})}}function j(e){const t=document.querySelector(".event-modal-overlay"),o=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(o||n)&&z()}function H(e){e.code==="Escape"&&z()}function z(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",j),window.removeEventListener("keydown",H);const o=t.querySelector(".modal-product");o&&(o.innerHTML="")}}function we(e){e.currentTarget.dataset.eventId;const t=document.querySelector(".section.event-details-modal"),o=document.querySelector(".event-modal-overlay");if(t&&o){t.classList.add("is-hidden"),o.classList.remove("is-open"),o.removeEventListener("click",j),window.removeEventListener("keydown",H);const s=o.querySelector(".modal-product");s&&(s.innerHTML="")}const n=document.querySelector(".section.booking-modal");n&&(n.classList.remove("is-hidden"),n.classList.add("is-open"),document.body.classList.add("no-scroll"))}document.addEventListener("DOMContentLoaded",Le);r.categoriesListEl.addEventListener("click",be);r.showMoreBtn.addEventListener("click",Se);r.eventsList.addEventListener("click",Ee);const G=document.querySelector(".about-us-slider");G&&new oe(G,{modules:[ne,se],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ie(".accordion-container",{showMultiple:!1});const _e="https://events-store.b.goit.study/api",x=document.querySelector(".booking-modal"),ke=document.querySelector(".booking-modal-close-btn"),l=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),p=l.querySelector('[name="name"]'),y=l.querySelector('[name="phone"]'),h=l.querySelector('[name="comment"]'),k=p.closest(".booking-modal-field").querySelector(".booking-modal-error"),B=y.closest(".booking-modal-field").querySelector(".booking-modal-error"),$=h.closest(".booking-modal-field").querySelector(".booking-modal-error");l.addEventListener("submit",Me);let F=null;function T(){x.classList.remove("is-open"),l.reset(),U(),F=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Be),ke.removeEventListener("click",$e),x.removeEventListener("click",qe)}function Be(e){e.code==="Escape"&&T()}function $e(){T()}function qe(e){e.target===x&&T()}function Ce(){const e={},t=p.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const o=y.value.trim().replace(/\D/g,"");o?o.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=h.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Ie(e){U(),e.name&&(p.classList.add("is-error"),k.textContent=e.name,k.classList.add("is-visible")),e.phone&&(y.classList.add("is-error"),B.textContent=e.phone,B.classList.add("is-visible")),e.comment&&(h.classList.add("is-error"),$.textContent=e.comment,$.classList.add("is-visible"))}function U(){p.classList.remove("is-error"),y.classList.remove("is-error"),h.classList.remove("is-error"),k.textContent="",B.textContent="",$.textContent="",k.classList.remove("is-visible"),B.classList.remove("is-visible"),$.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=Ce();if(t.name||t.phone||t.comment){Ie(t);return}U();const o={name:p.value.trim(),phone:y.value.trim().replace(/\D/g,""),eventId:F,comment:h.value.trim()};try{Te(),I(),_.disabled=!0;const{data:n}=await v.post(`${_e}/orders`,o),{eventName:s,orderNum:i}=n;A.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ae()}catch(n){n.status===400&&(A.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(n)),n.status===404&&(A.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(n))}finally{Oe(),M(),_.disabled=!1}}function Oe(){_.classList.remove("is-hidden")}function Te(){_.classList.add("is-hidden")}const Pe="dataBooking";function Ae(){localStorage.removeItem(Pe),l.name="",l.phone="",l.comment=""}
//# sourceMappingURL=index.js.map
