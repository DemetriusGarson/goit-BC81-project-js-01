import{a as f,S as le,i as R,b as de,N as me,P as ue,A as ve}from"./assets/vendor-CmT9KRLf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const O=document.getElementById("navbar-menu"),ge=document.getElementById("open-menu"),fe=document.getElementById("close-menu"),pe=O.querySelector(".nav-list"),ye=O.querySelector(".mobile-menu-btn"),J=document.querySelector(".header .consultation-btn"),_=document.getElementById("event-list");function T(){O.classList.add("is-hidden"),document.body.style.overflow=""}ge.addEventListener("click",function(){O.classList.remove("is-hidden"),document.body.style.overflow="hidden"});fe.addEventListener("click",T);pe.addEventListener("click",T);ye.addEventListener("click",function(){T(),_&&_.scrollIntoView({behavior:"smooth"})});J&&J.addEventListener("click",function(){_&&_.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&T()});const he="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};f.defaults.baseURL=he;async function Le(){return(await f.get(v.CATEGORIES)).data}async function x(e=1,t="",o=v.LIMIT){return t==="all"||!t?(await f.get(`${v.EVENTS}?page=${e}&limit=${o}`)).data:(await f.get(`${v.EVENTS}?page=${e}&limit=${o}&category=${t}`)).data}const r={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function be(e,t){const o=e%4,n=e-o;return o===0||t<n?"row-of-4":o===3?"row-last-3":o===2?"row-last-2":o===1?"row-last-1":""}function A(){r.loader.classList.remove("is-hidden")}function P(){r.loader.classList.add("is-hidden")}let Se=!1;function Ee(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],o=t.map(({_id:n,name:s,tags:i},a)=>{const m=be(t.length,a),u=i.map(E=>`#${E} `).join("");return`<li class="event-category-item ${m}" data-category="${n}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${u}</p>
        </li>`}).join("");r.categoriesListEl.innerHTML=o,r.firstCategoryButton&&r.firstCategoryButton.classList.add("categories__btn--active")}r.caregoryListSelect.addEventListener("click",we);function we(e){r.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),r.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Se&&!r.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!r.categoriesListEl.SimpleBar&&new le(r.categoriesScroll,{autoHide:!1}).recalculate()}function B(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",o=e.map(({_id:n,name:s,price:i,category:a,image:m})=>`<li class="event-item">
        <img
          src="${m||t}"
          alt="${s}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${t}'"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${a.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${n}"
        >
          Детальніше
        </button>
      </li>`).join("");r.eventsList.insertAdjacentHTML("beforeend",o)}const k="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",ke="https://events-store.b.goit.study";async function _e(e){try{const{data:t}=await f.get(`${ke}/api/events/${e}`);return t}catch(t){throw t}}function Be(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:o,name:n,description:s,image:i,durationHours:a,rate:m,price:u,audience:E,category:oe,program:ne,inclusions:se}=e;let p="";const N=Math.floor(m),w=m-N,Q=w>=.25&&w<.75,ie=N+(Q||w>=.75?1:0);for(let l=0;l<N;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `;w>=.75?p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `:Q&&(p+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${k}#icon-half-star"></use>
      </svg>
    `);for(let l=ie;l<5;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${k}#icon-star"></use>
      </svg>
    `;const re=ne.map(l=>`<li>${l}</li>`).join(""),ae=se.map(l=>`<li>${l}</li>`).join(""),ce=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${oe.name}</span>
          <div class="modal-event__stars">${p}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${re}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ae}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${a} години</p>
          <p><b>Кількість учасників:</b> від ${E.min} до ${E.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${u.prefix} ${u.value} ${u.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${o}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ce}const $e="https://events-store.b.goit.study/api",y=document.querySelector(".booking-modal"),z=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),$=document.querySelector(".booking-modal-submit-btn"),L=c.querySelector('[name="name"]'),b=c.querySelector('[name="phone"]'),S=c.querySelector('[name="comment"]'),I=L.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),C=S.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Me);let j=null;function Ie(e){j=e,document.body.style.overflow="hidden",y.classList.add("is-open"),document.addEventListener("keydown",Z),z.addEventListener("click",X),y.addEventListener("click",ee),Ae()}function D(){y.classList.remove("is-open"),c.reset(),H(),j=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Z),z.removeEventListener("click",X),y.removeEventListener("click",ee)}function Z(e){e.code==="Escape"&&D()}function X(){D()}function ee(e){e.target===y&&D()}function qe(){const e={},t=L.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const o=b.value.trim().replace(/\D/g,"");o?o.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=S.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Ce(e){H(),e.name&&(L.classList.add("is-error"),I.textContent=e.name,I.classList.add("is-visible")),e.phone&&(b.classList.add("is-error"),q.textContent=e.phone,q.classList.add("is-visible")),e.comment&&(S.classList.add("is-error"),C.textContent=e.comment,C.classList.add("is-visible"))}function H(){L.classList.remove("is-error"),b.classList.remove("is-error"),S.classList.remove("is-error"),I.textContent="",q.textContent="",C.textContent="",I.classList.remove("is-visible"),q.classList.remove("is-visible"),C.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=qe();if(t.name||t.phone||t.comment){Ce(t);return}H();const o={name:L.value.trim(),phone:b.value.trim().replace(/\D/g,""),eventId:j,comment:S.value.trim()};try{Te(),A(),$.disabled=!0;const{data:n}=await f.post(`${$e}/orders`,o),{eventName:s,orderNum:i}=n;R.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),D(),De()}catch(n){n.status===400&&(R.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(n)),n.status===404&&(R.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(n))}finally{Oe(),P(),$.disabled=!1}}function Oe(){$.classList.remove("is-hidden")}function Te(){$.classList.add("is-hidden")}const W="dataBooking",d={name:"",phone:"",comment:""};function Ae(){Pe(),c.addEventListener("input",Ne)}function Pe(){const e=JSON.parse(localStorage.getItem(W));console.log(e),e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function De(){localStorage.removeItem(W),c.name="",c.phone="",c.comment=""}function Ne(e){console.log(e.target),e.target===c.elements.name&&(d.name=e.target.value,console.log(d.name)),e.target===c.elements.phone&&(d.phone=e.target.value,console.log(d.phone)),e.target===c.elements.comment&&(d.comment=e.target.value,console.log(d.comment)),localStorage.setItem(W,JSON.stringify(d))}let g=1,M="all",h=0,V=0;function F(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function Re(){try{A();const e=F(),[t,o]=await Promise.all([Le(),x(g,M,e)]);Ee(t),r.eventsList.innerHTML="",B(o.events),h=o.events.length,V=o.totalItems,U()}catch(e){console.log("error events list",e)}finally{P()}}async function xe(e){r.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{A(),M=t.dataset.category,g=1,h=0,r.eventsList.innerHTML="";const o=F(),n=await x(g,M,o);B(n.events),h=n.events.length,V=n.totalItems,U()}catch(o){console.log("error during getting events by category",o)}finally{P()}}async function je(){try{A(),g+=1;const e=F(),t=await x(g,M,e);B(t.events),B(eventsToRender),h+=eventsToRender.length,U()}catch(e){console.log("error during getting more events by category",e),g-=1}finally{P()}}function U(){r.showMoreBtn.disabled=h>=V,r.showMoreBtn.classList.remove("is-hidden-btn-more")}async function He(e){const t=e.target.closest(".event-details-btn");if(!t)return;const o=t.dataset.eventId;if(o)try{const n=await _e(o);Be(n);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",G),window.addEventListener("keydown",K);const a=i.querySelector(".modal-event__order-btn");a&&a.addEventListener("click",We)}catch(n){console.log("error during opening event modal",n)}}function G(e){const t=document.querySelector(".event-modal-overlay"),o=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(o||n)&&te()}function K(e){e.code==="Escape"&&te()}function te(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",G),window.removeEventListener("keydown",K);const o=t.querySelector(".modal-product");o&&(o.innerHTML="")}}function We(e){const t=e.currentTarget.dataset.eventId,o=document.querySelector(".section.event-details-modal"),n=document.querySelector(".event-modal-overlay");if(o&&n){o.classList.add("is-hidden"),n.classList.remove("is-open"),n.removeEventListener("click",G),window.removeEventListener("keydown",K);const i=n.querySelector(".modal-product");i&&(i.innerHTML="")}Ie(t);const s=document.querySelector(".section.booking-modal");if(s){s.classList.remove("is-hidden"),s.classList.add("is-open"),document.body.classList.add("no-scroll");const i=s.querySelector(".booking-modal_form");if(i){let a=i.querySelector('input[name="eventId"]');a||(a=document.createElement("input"),a.type="hidden",a.name="eventId",i.appendChild(a)),a.value=t}}}document.addEventListener("DOMContentLoaded",Re);r.categoriesListEl.addEventListener("click",xe);r.showMoreBtn.addEventListener("click",je);r.eventsList.addEventListener("click",He);const Y=document.querySelector(".about-us-slider");Y&&new de(Y,{modules:[me,ue],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ve(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
