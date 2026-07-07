import{a as g,i as p,S as he,b as z,N as Z,P as ee,A as fe}from"./assets/vendor-_RRN-ioe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const T=document.getElementById("navbar-menu"),pe=document.getElementById("open-menu"),ye=document.getElementById("close-menu"),we=T.querySelector(".nav-list"),ke=T.querySelector(".mobile-menu-btn"),X=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function N(){T.classList.add("is-hidden"),document.body.style.overflow=""}pe.addEventListener("click",function(){T.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ye.addEventListener("click",N);we.addEventListener("click",N);ke.addEventListener("click",function(){N(),B&&B.scrollIntoView({behavior:"smooth"})});X&&X.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});const be="https://events-store.b.goit.study/api",h={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};g.defaults.baseURL=be;async function Le(){return(await g.get(h.CATEGORIES)).data}async function H(e=1,t="",s=h.LIMIT){return t==="all"||!t?(await g.get(`${h.EVENTS}?page=${e}&limit=${s}`)).data:(await g.get(`${h.EVENTS}?page=${e}&limit=${s}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Se(e,t){const s=e%4,n=e-s;return s===0||t<n?"row-of-4":s===3?"row-last-3":s===2?"row-last-2":s===1?"row-last-1":""}function R(){a.loader.classList.remove("is-hidden")}function j(){a.loader.classList.add("is-hidden")}function O(e="Щось пішло не так"){p.error({title:"Помилка",message:e,position:"topRight",timeout:5e3})}function Ee(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],s=t.map(({_id:n,name:o,tags:i},r)=>{const u=Se(t.length,r),v=i.map(S=>`#${S} `).join("");return`<li class="event-category-item ${r===0?"is-active":""} ${u}" data-category="${n}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${v}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=s,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",xe);function xe(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!a.categoriesListOpen.classList.contains("is-hidden")&&setTimeout(()=>{if(!a.categoriesScroll.hasAttribute("data-simplebar")&&!a.categoriesScroll.SimpleBar){const t=new he(a.categoriesScroll,{autoHide:!1});a.categoriesScroll.SimpleBar=t}else a.categoriesScroll.SimpleBar&&a.categoriesScroll.SimpleBar.recalculate()},50)}function F(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",s=e.map(({_id:n,name:o,price:i,category:r,image:u})=>`<li class="event-item">
        <img
          src="${u||t}"
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
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",s)}const l="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",Be="https://events-store.b.goit.study";async function _e(e){try{const{data:t}=await g.get(`${Be}/api/events/${e}`);return t}catch(t){throw t}}function $e(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:s,name:n,description:o,image:i,durationHours:r,rate:u,price:v,audience:S,category:le,program:ce,inclusions:de}=e;let f="";const A=Math.floor(u),E=u-A,J=E>=.25&&E<.75,ue=A+(J||E>=.75?1:0);for(let d=0;d<A;d+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `;E>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `:J&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${l}#icon-half-star"></use>
      </svg>
    `);for(let d=ue;d<5;d+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${l}#icon-star"></use>
      </svg>
    `;const me=ce.map(d=>`<li>${d}</li>`).join(""),ge=de.map(d=>`<li>${d}</li>`).join(""),ve=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${le.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${me}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ge}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${S.min} до ${S.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${v.prefix} ${v.value} ${v.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${s}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ve}const Ie="https://events-store.b.goit.study/api",y=document.querySelector(".booking-modal"),te=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),k=c.querySelector('[name="name"]'),b=c.querySelector('[name="phone"]'),L=c.querySelector('[name="comment"]'),$=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=L.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Te);let V=null;function qe(e){V=e,document.body.style.overflow="hidden",y.classList.add("is-open"),document.addEventListener("keydown",se),te.addEventListener("click",ne),y.addEventListener("click",oe),De()}function P(){y.classList.remove("is-open"),c.reset(),W(),V=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",se),te.removeEventListener("click",ne),y.removeEventListener("click",oe)}function se(e){e.code==="Escape"&&P()}function ne(){P()}function oe(e){e.target===y&&P()}function Ce(){const e={},t=k.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const s=b.value.trim().replace(/\D/g,"");s?s.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=L.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Me(e){W(),e.name&&(k.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(b.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(L.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function W(){k.classList.remove("is-error"),b.classList.remove("is-error"),L.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Te(e){e.preventDefault();const t=Ce();if(t.name||t.phone||t.comment){Me(t);return}W();const s={name:k.value.trim(),phone:b.value.trim().replace(/\D/g,""),eventId:V,comment:L.value.trim()};try{Pe(),Re(),_.disabled=!0;const{data:n}=await g.post(`${Ie}/orders`,s),{eventName:o,orderNum:i}=n;p.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),P(),Ne()}catch(n){n.status===400&&p.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),n.status===404&&p.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{Oe(),je(),_.disabled=!1}}function Oe(){_.classList.remove("is-hidden")}function Pe(){_.classList.add("is-hidden")}const K="dataBooking",x={name:"",phone:"",comment:""};function De(){Ae(),c.addEventListener("input",He)}function Ae(){const e=JSON.parse(localStorage.getItem(K));e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function Ne(){localStorage.removeItem(K),c.name="",c.phone="",c.comment=""}function He(e){e.target===c.elements.name&&(x.name=e.target.value),e.target===c.elements.phone&&(x.phone=e.target.value),e.target===c.elements.comment&&(x.comment=e.target.value),localStorage.setItem(K,JSON.stringify(x))}const ie=document.querySelector(".loader-booking");function Re(){ie.classList.remove("is-hidden")}function je(){ie.classList.add("is-hidden")}let m=1,C="all",w=0,D=0;function U(){return window.innerWidth<768?h.LIMIT/2:h.LIMIT}async function Fe(){try{R();const e=U(),[t,s]=await Promise.all([Le(),H(m,C,e)]);Ee(t),a.eventsList.innerHTML="",F(s.events),w=s.events.length,D=s.totalItems,M()}catch(e){O("Не вдалося завантажити список подій"),console.log("error events list",e)}finally{j()}}async function Ve(e){const t=document.querySelector(".event-category-item.is-active");t&&t.classList.remove("is-active"),a.showMoreBtn.classList.add("is-hidden-btn-more");const s=e.target.closest(".event-category-item");if(!s)return;s.classList.add("is-active");const n=s.querySelector(".event-category-title").textContent;document.querySelector(".current-category").textContent=n;try{R(),C=s.dataset.category,m=1,w=0,a.eventsList.innerHTML="";const o=U(),i=await H(m,C,o);F(i.events),w=i.events.length,D=i.totalItems,M()}catch(o){O("Не вдалося завантажити список категорій подій"),console.log("error during getting events by category",o)}finally{j()}}async function We(){try{R(),a.showMoreBtn.disabled=!0,a.showMoreBtn.style.opacity="0",m+=1;const e=U(),t=await H(m,C,e);if(!t.events.length){m-=1,M(),a.showMoreBtn.disabled=!0;return}F(t.events),w+=t.events.length,D=t.totalItems,M()}catch(e){O("Не вдалося завантажити список більше подій"),console.log("error during getting more events by category",e),m-=1}finally{j(),a.showMoreBtn.style.opacity="1"}}function M(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=D?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function Ke(e){const t=e.target.closest(".event-details-btn");if(!t)return;const s=t.dataset.eventId;if(s)try{const n=await _e(s);$e(n);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",G),window.addEventListener("keydown",Q);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ue)}catch(n){O("Не вдалося завантажити інформацію про дану подію"),console.log("error during opening event modal",n)}}function G(e){const t=document.querySelector(".event-modal-overlay"),s=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(s||n)&&ae()}function Q(e){e.code==="Escape"&&ae()}function ae(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",G),window.removeEventListener("keydown",Q);const s=t.querySelector(".modal-product");s&&(s.innerHTML="")}}function Ue(e){const t=e.currentTarget.dataset.eventId,s=document.querySelector(".section.event-details-modal"),n=document.querySelector(".event-modal-overlay");if(s&&n){s.classList.add("is-hidden"),n.classList.remove("is-open"),n.removeEventListener("click",G),window.removeEventListener("keydown",Q);const i=n.querySelector(".modal-product");i&&(i.innerHTML="")}qe(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",Fe);a.categoriesListEl.addEventListener("click",Ve);a.showMoreBtn.addEventListener("click",We);a.eventsList.addEventListener("click",Ke);const Y=document.querySelector(".about-us-slider");Y&&new z(Y,{modules:[Z,ee],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new fe(".accordion-container",{showMultiple:!1});const Ge=document.querySelector(".feedback-swiper"),Qe=document.querySelector(".js-feedback-list"),re=document.querySelector(".feedback-loader"),Je=375,Xe=768,Ye=1440,ze="/feedbacks",Ze={spaceBetween:32,breakpoints:{[Je]:{slidesPerView:1},[Xe]:{slidesPerView:2},[Ye]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[Z,ee]};new z(Ge,Ze);tt();async function et(e=10,t=1){const n={params:{limit:e,page:t}},{data:o}=await g.get(ze,n);return o}async function tt(){try{ot();const{feedbacks:e}=await et();st(e)}catch(e){p.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}finally{it()}}function st(e){const t=e.map(nt).join("");Qe.innerHTML=t}function nt({author:e,date:t,description:s,rate:n}){const r=n%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(n)} ${r} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
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
</li>`}function ot(){re.classList.remove("is-hidden")}function it(){re.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
