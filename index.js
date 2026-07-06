import{a as g,S as Q,b as X,N as ee,P as te,A as oe,i as P}from"./assets/vendor-OBXCQB_9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const I=document.getElementById("navbar-menu"),ne=document.getElementById("open-menu"),se=document.getElementById("close-menu"),ie=I.querySelector(".nav-list"),re=I.querySelector(".mobile-menu-btn"),V=document.querySelector(".header .consultation-btn"),E=document.getElementById("event-list");function C(){I.classList.add("is-hidden"),document.body.style.overflow=""}ne.addEventListener("click",function(){I.classList.remove("is-hidden"),document.body.style.overflow="hidden"});se.addEventListener("click",C);ie.addEventListener("click",C);re.addEventListener("click",function(){C(),E&&E.scrollIntoView({behavior:"smooth"})});V&&V.addEventListener("click",function(){E&&E.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&C()});const ae="https://events-store.b.goit.study/api",u={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};g.defaults.baseURL=ae;async function ce(){return(await g.get(u.CATEGORIES)).data}async function N(e=1,t="",n=u.LIMIT){return t==="all"||!t?(await g.get(`${u.EVENTS}?page=${e}&limit=${n}`)).data:(await g.get(`${u.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const r={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function le(e,t){const n=e%4,o=e-n;return n===0||t<o?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function q(){r.loader.classList.remove("is-hidden")}function M(){r.loader.classList.add("is-hidden")}let de=!1;function ue(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:o,name:s,tags:i},a)=>{const h=le(t.length,a),m=i.map(L=>`#${L} `).join("");return`<li class="event-category-item ${h}" data-category="${o}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${m}</p>
        </li>`}).join("");r.categoriesListEl.innerHTML=n,r.firstCategoryButton&&r.firstCategoryButton.classList.add("categories__btn--active")}r.caregoryListSelect.addEventListener("click",me);function me(e){r.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),r.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!de&&!r.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!r.categoriesListEl.SimpleBar&&new Q(r.categoriesScroll,{autoHide:!1}).recalculate()}function A(e){const t=e.map(({_id:n,name:o,price:s,category:i,image:a})=>`<li class="event-item">
        <img
          src="${a}"
          alt="${o}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${i.name}</p>
          <p class="event-price">від ${s.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${n}">Детальніше</button>
      </li>`).join("");r.eventsList.insertAdjacentHTML("beforeend",t)}const _="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg";function ve(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:o,description:s,image:i,durationHours:a,rate:h,price:m,audience:L,category:G,program:z,inclusions:F}=e;let v="";const x=Math.floor(h),b=h-x,H=b>=.25&&b<.75,K=x+(H||b>=.75?1:0);for(let c=0;c<x;c+=1)v+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${_}#icon-full-star"></use>
      </svg>
    `;b>=.75?v+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${_}#icon-full-star"></use>
      </svg>
    `:H&&(v+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${_}#icon-half-star"></use>
      </svg>
    `);for(let c=K;c<5;c+=1)v+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${_}#icon-star"></use>
      </svg>
    `;const Y=z.map(c=>`<li>${c}</li>`).join(""),Z=F.map(c=>`<li>${c}</li>`).join(""),J=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${o}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${G.name}</span>
          <div class="modal-event__stars">${v}</div>
        </div>
        
        <h2 class="modal-event__title">${o}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${Y}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${Z}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${a} години</p>
          <p><b>Кількість учасників:</b> від ${L.min} до ${L.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${m.prefix} ${m.value} ${m.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=J}let d=1,S="all";function O(){return window.innerWidth<768?u.LIMIT/2:u.LIMIT}async function ge(){try{q();const e=O(),[t,{events:n,totalItems:o}]=await Promise.all([ce(),N(d,S,e)]);ue(t),A(n),R(o)}catch(e){console.log("error events list",e)}finally{M()}}async function fe(e){const t=e.target.closest(".event-category-item");if(t)try{S=t.dataset.category,d=1,r.eventsList.innerHTML="",q();const o=O(),{events:s,totalItems:i}=await N(d,S,o);A(s),R(i)}catch(n){console.log("error during getting events by category",n)}finally{M()}}async function pe(e){d+=1;try{q();const t=O(),{events:n,totalItems:o}=await N(d,S,t);A(n),R(o)}catch(t){console.log("error during getting more events by category",t),d-=1}finally{M()}}function R(e){const t=O();r.showMoreBtn.disabled=d*t>=e}async function ye(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const o=await getEventById(n);ve(o);const s=document.querySelector(".event-modal-overlay");s&&(s.classList.add("is-open"),document.body.classList.add("no-scroll"))}catch{typeof iziToast<"u"&&iziToast.error({title:"Error",message:"Не вдалося завантажити деталі події.",position:"topRight"})}}document.addEventListener("DOMContentLoaded",ge);r.categoriesListEl.addEventListener("click",fe);r.showMoreBtn.addEventListener("click",pe);r.eventsList.addEventListener("click",ye);const W=document.querySelector(".about-us-slider");W&&new X(W,{modules:[ee,te],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new oe(".accordion-container",{showMultiple:!1});const he="https://events-store.b.goit.study/api",D=document.querySelector(".booking-modal"),Le=document.querySelector(".booking-modal_close-btn"),l=document.querySelector(".booking-modal_form"),w=document.querySelector(".booking-modal_submit-btn"),f=l.querySelector('[name="name"]'),p=l.querySelector('[name="phone"]'),y=l.querySelector('[name="comment"]'),k=f.closest(".booking-modal_field").querySelector(".booking-modal_error"),B=p.closest(".booking-modal_field").querySelector(".booking-modal_error"),$=y.closest(".booking-modal_field").querySelector(".booking-modal_error");l.addEventListener("submit",ke);let U=null;function T(){D.classList.remove("is-open"),l.reset(),j(),U=null,document.body.style.overflow="",document.removeEventListener("keydown",be),Le.removeEventListener("click",_e),D.removeEventListener("click",Ee)}function be(e){e.code==="Escape"&&T()}function _e(){T()}function Ee(e){e.target===D&&T()}function Se(){const e={},t=f.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=p.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const o=y.value.trim();return o?o.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${o.length}`):e.comment="Введіть коментар",e}function we(e){j(),e.name&&(f.classList.add("is-error"),k.textContent=e.name,k.classList.add("is-visible")),e.phone&&(p.classList.add("is-error"),B.textContent=e.phone,B.classList.add("is-visible")),e.comment&&(y.classList.add("is-error"),$.textContent=e.comment,$.classList.add("is-visible"))}function j(){f.classList.remove("is-error"),p.classList.remove("is-error"),y.classList.remove("is-error"),k.textContent="",B.textContent="",$.textContent="",k.classList.remove("is-visible"),B.classList.remove("is-visible"),$.classList.remove("is-visible")}async function ke(e){e.preventDefault();const t=Se();if(t.name||t.phone||t.comment){we(t);return}j();const n={name:f.value.trim(),phone:p.value.trim().replace(/\D/g,""),eventId:U,comment:y.value.trim()};try{$e(),q(),w.disabled=!0;const{data:o}=await g.post(`${he}/orders`,n),{eventName:s,orderNum:i}=o;P.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ce()}catch(o){o.status===400&&(P.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(o)),o.status===404&&(P.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(o))}finally{Be(),M(),w.disabled=!1}}function Be(){w.classList.remove("is-hidden")}function $e(){w.classList.add("is-hidden")}const Ie="dataBooking";function Ce(){localStorage.removeItem(Ie),l.name="",l.phone="",l.comment=""}
//# sourceMappingURL=index.js.map
