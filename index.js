import{a as u,S as ge,i as x,b as Y,N as z,P as Z,A as ve}from"./assets/vendor-CTYvdaEJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const M=document.getElementById("navbar-menu"),he=document.getElementById("open-menu"),fe=document.getElementById("close-menu"),pe=M.querySelector(".nav-list"),we=M.querySelector(".mobile-menu-btn"),J=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function O(){M.classList.add("is-hidden"),document.body.style.overflow=""}he.addEventListener("click",function(){M.classList.remove("is-hidden"),document.body.style.overflow="hidden"});fe.addEventListener("click",O);pe.addEventListener("click",O);we.addEventListener("click",function(){O(),B&&B.scrollIntoView({behavior:"smooth"})});J&&J.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&O()});const ye="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};u.defaults.baseURL=ye;async function ke(){return(await u.get(v.CATEGORIES)).data}async function A(e=1,t="",n=v.LIMIT){return t==="all"||!t?(await u.get(`${v.EVENTS}?page=${e}&limit=${n}`)).data:(await u.get(`${v.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Le(e,t){const n=e%4,s=e-n;return n===0||t<s?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function H(){a.loader.classList.remove("is-hidden")}function N(){a.loader.classList.add("is-hidden")}let be=!1;function Se(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:s,name:o,tags:i},r)=>{const d=Le(t.length,r),g=i.map(b=>`#${b} `).join("");return`<li class="event-category-item ${d}" data-category="${s}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${g}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Ee);function Ee(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!be&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new ge(a.categoriesScroll,{autoHide:!1}).recalculate()}function j(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",n=e.map(({_id:s,name:o,price:i,category:r,image:d})=>`<li class="event-item">
        <img
          src="${d||t}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${t}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${s}"
        >
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const E="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",xe="https://events-store.b.goit.study";async function Be(e){try{const{data:t}=await u.get(`${xe}/api/events/${e}`);return t}catch(t){throw t}}function _e(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:s,description:o,image:i,durationHours:r,rate:d,price:g,audience:b,category:ae,program:re,inclusions:le}=e;let f="";const D=Math.floor(d),S=d-D,Q=S>=.25&&S<.75,ce=D+(Q||S>=.75?1:0);for(let c=0;c<D;c+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `;S>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `:Q&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${E}#icon-half-star"></use>
      </svg>
    `);for(let c=ce;c<5;c+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${E}#icon-star"></use>
      </svg>
    `;const de=re.map(c=>`<li>${c}</li>`).join(""),me=le.map(c=>`<li>${c}</li>`).join(""),ue=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${s}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${ae.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${s}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${de}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${me}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${b.min} до ${b.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ue}const $e="https://events-store.b.goit.study/api",p=document.querySelector(".booking-modal"),ee=document.querySelector(".booking-modal-close-btn"),l=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),y=l.querySelector('[name="name"]'),k=l.querySelector('[name="phone"]'),L=l.querySelector('[name="comment"]'),$=y.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=L.closest(".booking-modal-field").querySelector(".booking-modal-error");l.addEventListener("submit",Me);let R=null;function Ie(e){R=e,document.body.style.overflow="hidden",p.classList.add("is-open"),document.addEventListener("keydown",te),ee.addEventListener("click",se),p.addEventListener("click",ne),Pe()}function T(){p.classList.remove("is-open"),l.reset(),F(),R=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",te),ee.removeEventListener("click",se),p.removeEventListener("click",ne)}function te(e){e.code==="Escape"&&T()}function se(){T()}function ne(e){e.target===p&&T()}function qe(){const e={},t=y.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=k.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const s=L.value.trim();return s?s.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${s.length}`):e.comment="Введіть коментар",e}function Ce(e){F(),e.name&&(y.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(k.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(L.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function F(){y.classList.remove("is-error"),k.classList.remove("is-error"),L.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=qe();if(t.name||t.phone||t.comment){Ce(t);return}F();const n={name:y.value.trim(),phone:k.value.trim().replace(/\D/g,""),eventId:R,comment:L.value.trim()};try{Te(),Ne(),_.disabled=!0;const{data:s}=await u.post(`${$e}/orders`,n),{eventName:o,orderNum:i}=s;x.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ae()}catch(s){s.status===400&&(x.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(s)),s.status===404&&(x.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(s))}finally{Oe(),je(),_.disabled=!1}}function Oe(){_.classList.remove("is-hidden")}function Te(){_.classList.add("is-hidden")}const W="dataBooking",m={name:"",phone:"",comment:""};function Pe(){De(),l.addEventListener("input",He)}function De(){const e=JSON.parse(localStorage.getItem(W));console.log(e),e&&(l.elements.name.value=e.name,l.elements.phone.value=e.phone,l.elements.comment.value=e.comment)}function Ae(){localStorage.removeItem(W),l.name="",l.phone="",l.comment=""}function He(e){console.log(e.target),e.target===l.elements.name&&(m.name=e.target.value,console.log(m.name)),e.target===l.elements.phone&&(m.phone=e.target.value,console.log(m.phone)),e.target===l.elements.comment&&(m.comment=e.target.value,console.log(m.comment)),localStorage.setItem(W,JSON.stringify(m))}const oe=document.querySelector(".loader-booking");function Ne(){oe.classList.remove("is-hidden")}function je(){oe.classList.add("is-hidden")}let h=1,C="all",w=0,P=0;function V(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function Re(){try{H();const e=V(),[t,n]=await Promise.all([ke(),A(h,C,e)]);Se(t),a.eventsList.innerHTML="",j(n.events),w=n.events.length,P=n.totalItems,K()}catch(e){console.log("error events list",e)}finally{N()}}async function Fe(e){a.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{H(),C=t.dataset.category,h=1,w=0,a.eventsList.innerHTML="";const n=V(),s=await A(h,C,n);j(s.events),w=s.events.length,P=s.totalItems,K()}catch(n){console.log("error during getting events by category",n)}finally{N()}}async function We(){try{H(),a.showMoreBtn.disabled=!0,h+=1;const e=V();a.showMoreBtn.style.opacity="0";const t=await A(h,C,e);if(!t.events.length){a.showMoreBtn.disabled=!0;return}j(t.events),w+=t.events.length,P=t.totalItems,K()}catch(e){console.log("error during getting more events by category",e),h-=1}finally{N(),a.showMoreBtn.style.opacity="1"}}function K(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=P?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function Ve(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const s=await Be(n);_e(s);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",U),window.addEventListener("keydown",G);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ke)}catch(s){console.log("error during opening event modal",s)}}function U(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),s=e.target===t;(n||s)&&ie()}function G(e){e.code==="Escape"&&ie()}function ie(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",U),window.removeEventListener("keydown",G);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function Ke(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),s=document.querySelector(".event-modal-overlay");if(n&&s){n.classList.add("is-hidden"),s.classList.remove("is-open"),s.removeEventListener("click",U),window.removeEventListener("keydown",G);const i=s.querySelector(".modal-product");i&&(i.innerHTML="")}Ie(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",Re);a.categoriesListEl.addEventListener("click",Fe);a.showMoreBtn.addEventListener("click",We);a.eventsList.addEventListener("click",Ve);const X=document.querySelector(".about-us-slider");X&&new Y(X,{modules:[z,Z],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ve(".accordion-container",{showMultiple:!1});const Ue=document.querySelector(".feedback-swiper"),Ge=document.querySelector(".js-feedback-list"),Qe=375,Je=768,Xe=1440,Ye="/feedbacks",ze={spaceBetween:32,breakpoints:{[Qe]:{slidesPerView:1},[Je]:{slidesPerView:2},[Xe]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[z,Z]};new Y(Ue,ze);et();async function Ze(e=10,t=1){const s={params:{limit:e,page:t}},{data:o}=await u.get(Ye,s);return o}async function et(){try{const{feedbacks:e}=await Ze();tt(e)}catch(e){x.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}}function tt(e){const t=e.map(st).join("");Ge.innerHTML=t}function st({author:e,date:t,description:n,rate:s}){const r=s%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(s)} ${r} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
      </ul>
    </div>
    <p class="feedback-text">${n}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}
//# sourceMappingURL=index.js.map
