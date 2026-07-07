import{a as u,S as ge,i as x,b as Y,N as z,P as Z,A as ve}from"./assets/vendor-CTYvdaEJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const M=document.getElementById("navbar-menu"),he=document.getElementById("open-menu"),fe=document.getElementById("close-menu"),pe=M.querySelector(".nav-list"),we=M.querySelector(".mobile-menu-btn"),J=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function O(){M.classList.add("is-hidden"),document.body.style.overflow=""}he.addEventListener("click",function(){M.classList.remove("is-hidden"),document.body.style.overflow="hidden"});fe.addEventListener("click",O);pe.addEventListener("click",O);we.addEventListener("click",function(){O(),B&&B.scrollIntoView({behavior:"smooth"})});J&&J.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&O()});const ye="https://events-store.b.goit.study/api",g={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};u.defaults.baseURL=ye;async function ke(){return(await u.get(g.CATEGORIES)).data}async function A(e=1,t="",s=g.LIMIT){return t==="all"||!t?(await u.get(`${g.EVENTS}?page=${e}&limit=${s}`)).data:(await u.get(`${g.EVENTS}?page=${e}&limit=${s}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Le(e,t){const s=e%4,n=e-s;return s===0||t<n?"row-of-4":s===3?"row-last-3":s===2?"row-last-2":s===1?"row-last-1":""}function H(){a.loader.classList.remove("is-hidden")}function N(){a.loader.classList.add("is-hidden")}let be=!1;function Se(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],s=t.map(({_id:n,name:o,tags:i},r)=>{const d=Le(t.length,r),m=i.map(L=>`#${L} `).join("");return`<li class="event-category-item ${d}" data-category="${n}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${m}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=s,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Ee);function Ee(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!be&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new ge(a.categoriesScroll,{autoHide:!1}).recalculate()}function j(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",s=e.map(({_id:n,name:o,price:i,category:r,image:d})=>`<li class="event-item">
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
          data-event-id="${n}"
        >
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",s)}const S="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",xe="https://events-store.b.goit.study";async function Be(e){try{const{data:t}=await u.get(`${xe}/api/events/${e}`);return t}catch(t){throw t}}function _e(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:s,name:n,description:o,image:i,durationHours:r,rate:d,price:m,audience:L,category:ae,program:re,inclusions:le}=e;let h="";const D=Math.floor(d),b=d-D,Q=b>=.25&&b<.75,ce=D+(Q||b>=.75?1:0);for(let c=0;c<D;c+=1)h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${S}#icon-full-star"></use>
      </svg>
    `;b>=.75?h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${S}#icon-full-star"></use>
      </svg>
    `:Q&&(h+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${S}#icon-half-star"></use>
      </svg>
    `);for(let c=ce;c<5;c+=1)h+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${S}#icon-star"></use>
      </svg>
    `;const de=re.map(c=>`<li>${c}</li>`).join(""),ue=le.map(c=>`<li>${c}</li>`).join(""),me=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${ae.name}</span>
          <div class="modal-event__stars">${h}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${de}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ue}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${L.min} до ${L.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${m.prefix} ${m.value} ${m.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${s}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=me}const $e="https://events-store.b.goit.study/api",f=document.querySelector(".booking-modal"),ee=document.querySelector(".booking-modal-close-btn"),l=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),w=l.querySelector('[name="name"]'),y=l.querySelector('[name="phone"]'),k=l.querySelector('[name="comment"]'),$=w.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=y.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=k.closest(".booking-modal-field").querySelector(".booking-modal-error");l.addEventListener("submit",Me);let R=null;function Ie(e){R=e,document.body.style.overflow="hidden",f.classList.add("is-open"),document.addEventListener("keydown",te),ee.addEventListener("click",se),f.addEventListener("click",ne),Pe()}function T(){f.classList.remove("is-open"),l.reset(),F(),R=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",te),ee.removeEventListener("click",se),f.removeEventListener("click",ne)}function te(e){e.code==="Escape"&&T()}function se(){T()}function ne(e){e.target===f&&T()}function qe(){const e={},t=w.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const s=y.value.trim().replace(/\D/g,"");s?s.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=k.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Ce(e){F(),e.name&&(w.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(y.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(k.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function F(){w.classList.remove("is-error"),y.classList.remove("is-error"),k.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=qe();if(t.name||t.phone||t.comment){Ce(t);return}F();const s={name:w.value.trim(),phone:y.value.trim().replace(/\D/g,""),eventId:R,comment:k.value.trim()};try{Te(),Ne(),_.disabled=!0;const{data:n}=await u.post(`${$e}/orders`,s),{eventName:o,orderNum:i}=n;x.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ae()}catch(n){n.status===400&&x.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),n.status===404&&x.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{Oe(),je(),_.disabled=!1}}function Oe(){_.classList.remove("is-hidden")}function Te(){_.classList.add("is-hidden")}const W="dataBooking",E={name:"",phone:"",comment:""};function Pe(){De(),l.addEventListener("input",He)}function De(){const e=JSON.parse(localStorage.getItem(W));e&&(l.elements.name.value=e.name,l.elements.phone.value=e.phone,l.elements.comment.value=e.comment)}function Ae(){localStorage.removeItem(W),l.name="",l.phone="",l.comment=""}function He(e){e.target===l.elements.name&&(E.name=e.target.value),e.target===l.elements.phone&&(E.phone=e.target.value),e.target===l.elements.comment&&(E.comment=e.target.value),localStorage.setItem(W,JSON.stringify(E))}const oe=document.querySelector(".loader-booking");function Ne(){oe.classList.remove("is-hidden")}function je(){oe.classList.add("is-hidden")}let v=1,C="all",p=0,P=0;function V(){return window.innerWidth<768?g.LIMIT/2:g.LIMIT}async function Re(){try{H();const e=V(),[t,s]=await Promise.all([ke(),A(v,C,e)]);Se(t),a.eventsList.innerHTML="",j(s.events),p=s.events.length,P=s.totalItems,K()}catch(e){console.log("error events list",e)}finally{N()}}async function Fe(e){a.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{H(),C=t.dataset.category,v=1,p=0,a.eventsList.innerHTML="";const s=V(),n=await A(v,C,s);j(n.events),p=n.events.length,P=n.totalItems,K()}catch(s){console.log("error during getting events by category",s)}finally{N()}}async function We(){try{H(),a.showMoreBtn.disabled=!0,v+=1;const e=V();a.showMoreBtn.style.opacity="0";const t=await A(v,C,e);if(!t.events.length){a.showMoreBtn.disabled=!0;return}j(t.events),p+=t.events.length,P=t.totalItems,K()}catch(e){console.log("error during getting more events by category",e),v-=1}finally{N(),a.showMoreBtn.style.opacity="1"}}function K(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),p>=P?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function Ve(e){const t=e.target.closest(".event-details-btn");if(!t)return;const s=t.dataset.eventId;if(s)try{const n=await Be(s);_e(n);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",U),window.addEventListener("keydown",G);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ke)}catch(n){console.log("error during opening event modal",n)}}function U(e){const t=document.querySelector(".event-modal-overlay"),s=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(s||n)&&ie()}function G(e){e.code==="Escape"&&ie()}function ie(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",U),window.removeEventListener("keydown",G);const s=t.querySelector(".modal-product");s&&(s.innerHTML="")}}function Ke(e){const t=e.currentTarget.dataset.eventId,s=document.querySelector(".section.event-details-modal"),n=document.querySelector(".event-modal-overlay");if(s&&n){s.classList.add("is-hidden"),n.classList.remove("is-open"),n.removeEventListener("click",U),window.removeEventListener("keydown",G);const i=n.querySelector(".modal-product");i&&(i.innerHTML="")}Ie(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",Re);a.categoriesListEl.addEventListener("click",Fe);a.showMoreBtn.addEventListener("click",We);a.eventsList.addEventListener("click",Ve);const X=document.querySelector(".about-us-slider");X&&new Y(X,{modules:[z,Z],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ve(".accordion-container",{showMultiple:!1});const Ue=document.querySelector(".feedback-swiper"),Ge=document.querySelector(".js-feedback-list"),Qe=375,Je=768,Xe=1440,Ye="/feedbacks",ze={spaceBetween:32,breakpoints:{[Qe]:{slidesPerView:1},[Je]:{slidesPerView:2},[Xe]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[z,Z]};new Y(Ue,ze);et();async function Ze(e=10,t=1){const n={params:{limit:e,page:t}},{data:o}=await u.get(Ye,n);return o}async function et(){try{const{feedbacks:e}=await Ze();tt(e)}catch(e){x.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}}function tt(e){const t=e.map(st).join("");Ge.innerHTML=t}function st({author:e,date:t,description:s,rate:n}){const r=n%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(n)} ${r} ">
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
    <p class="feedback-text">${s}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}
//# sourceMappingURL=index.js.map
