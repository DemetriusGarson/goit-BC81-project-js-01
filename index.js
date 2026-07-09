import{a as m,i as p,S as ye,b as N,N as j,P as H,A as we}from"./assets/vendor-D3JqmkBw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const P=document.getElementById("navbar-menu"),be=document.getElementById("open-menu"),ke=document.getElementById("close-menu"),Le=P.querySelector(".nav-list"),Se=P.querySelector(".mobile-menu-btn"),Z=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function R(){P.classList.add("is-hidden"),document.body.style.overflow=""}be.addEventListener("click",function(){P.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ke.addEventListener("click",R);Le.addEventListener("click",R);Se.addEventListener("click",function(){R(),B&&B.scrollIntoView({behavior:"smooth"})});Z&&Z.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});const ne="https://events-store.b.goit.study/api",h={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};m.defaults.baseURL=ne;async function Ee(){return(await m.get(h.CATEGORIES)).data}async function F(e=1,t="",n=h.LIMIT){return t==="all"||!t?(await m.get(`${h.EVENTS}?page=${e}&limit=${n}`)).data:(await m.get(`${h.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function xe(e,t){const n=e%4,s=e-n;return n===0||t<s?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function V(){a.loader.classList.remove("is-hidden")}function W(){a.loader.classList.add("is-hidden")}function T(e="Щось пішло не так"){p.error({title:"Помилка",message:e,position:"topRight",timeout:5e3})}function Be(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:s,name:o,tags:i},r)=>{const d=xe(t.length,r),g=i.map(S=>`#${S} `).join("");return`<li class="event-category-item ${r===0?"is-active":""} ${d}" data-category="${s}">
    <button type="button" class="event-category-btn">
      <span class="event-category-title">${o}</span>
      <span class="event-category-tags">${g}</span>
    </button>
  </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",$e);function $e(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!a.categoriesListOpen.classList.contains("is-hidden")&&setTimeout(()=>{if(!a.categoriesScroll.hasAttribute("data-simplebar")&&!a.categoriesScroll.SimpleBar){const t=new ye(a.categoriesScroll,{autoHide:!1});a.categoriesScroll.SimpleBar=t}else a.categoriesScroll.SimpleBar&&a.categoriesScroll.SimpleBar.recalculate()},50)}function Q(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",n=e.map(({_id:s,name:o,price:i,category:r,image:d})=>`<li class="event-item">
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
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const l="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",_e="https://events-store.b.goit.study";async function Ie(e){try{const{data:t}=await m.get(`${_e}/api/events/${e}`);return t}catch(t){throw t}}function qe(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:s,description:o,image:i,durationHours:r,rate:d,price:g,audience:S,category:ue,program:me,inclusions:ge}=e;let f="";const D=Math.floor(d),E=d-D,X=E>=.25&&E<.75,ve=D+(X||E>=.75?1:0);for(let u=0;u<D;u+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `;E>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `:X&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${l}#icon-half-star"></use>
      </svg>
    `);for(let u=ve;u<5;u+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${l}#icon-star"></use>
      </svg>
    `;const he=me.map(u=>`<li>${u}</li>`).join(""),fe=ge.map(u=>`<li>${u}</li>`).join(""),pe=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${s}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${ue.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${s}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${he}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${fe}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${S.min} до ${S.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=pe}const Ce="https://events-store.b.goit.study/api",y=document.querySelector(".booking-modal"),se=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),$=document.querySelector(".booking-modal-submit-btn"),b=c.querySelector('[name="name"]'),k=c.querySelector('[name="phone"]'),L=c.querySelector('[name="comment"]'),_=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=L.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Oe);let G=null;function Me(e){G=e,document.body.style.overflow="hidden",y.classList.add("is-open"),document.addEventListener("keydown",oe),se.addEventListener("click",ie),y.addEventListener("click",ae),Ne()}function O(){y.classList.remove("is-open"),c.reset(),K(),G=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",oe),se.removeEventListener("click",ie),y.removeEventListener("click",ae)}function oe(e){e.code==="Escape"&&O()}function ie(){O()}function ae(e){e.target===y&&O()}function Pe(){const e={},t=b.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=k.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const s=L.value.trim();return s?s.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${s.length}`):e.comment="Введіть коментар",e}function Te(e){K(),e.name&&(b.classList.add("is-error"),_.textContent=e.name,_.classList.add("is-visible")),e.phone&&(k.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(L.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function K(){b.classList.remove("is-error"),k.classList.remove("is-error"),L.classList.remove("is-error"),_.textContent="",I.textContent="",q.textContent="",_.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Oe(e){e.preventDefault();const t=Pe();if(t.name||t.phone||t.comment){Te(t);return}K();const n={name:b.value.trim(),phone:k.value.trim().replace(/\D/g,""),eventId:G,comment:L.value.trim()};try{De(),Fe(),$.disabled=!0;const{data:s}=await m.post(`${Ce}/orders`,n),{eventName:o,orderNum:i}=s;p.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),O(),He()}catch(s){s.status===400&&p.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),s.status===404&&p.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{Ae(),Ve(),$.disabled=!1}}function Ae(){$.classList.remove("is-hidden")}function De(){$.classList.add("is-hidden")}const U="dataBooking",x={name:"",phone:"",comment:""};function Ne(){je(),c.addEventListener("input",Re)}function je(){const e=JSON.parse(localStorage.getItem(U));e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function He(){localStorage.removeItem(U),c.name="",c.phone="",c.comment=""}function Re(e){e.target===c.elements.name&&(x.name=e.target.value),e.target===c.elements.phone&&(x.phone=e.target.value),e.target===c.elements.comment&&(x.comment=e.target.value),localStorage.setItem(U,JSON.stringify(x))}const re=document.querySelector(".loader-booking");function Fe(){re.classList.remove("is-hidden")}function Ve(){re.classList.add("is-hidden")}let v=1,C="all",w=0,A=0;function Y(){return window.innerWidth<768?h.LIMIT/2:h.LIMIT}async function We(){try{V();const e=Y(),[t,n]=await Promise.all([Ee(),F(v,C,e)]);Be(t),a.eventsList.innerHTML="",Q(n.events),w=n.events.length,A=n.totalItems,M()}catch(e){T("Не вдалося завантажити список подій"),console.log("error events list",e)}finally{W()}}async function Qe(e){const t=document.querySelector(".event-category-item.is-active");t&&t.classList.remove("is-active"),a.showMoreBtn.classList.add("is-hidden-btn-more");const n=e.target.closest(".event-category-item");if(!n)return;n.classList.add("is-active");const s=n.querySelector(".event-category-title").textContent;document.querySelector(".current-category").textContent=s;try{V(),C=n.dataset.category,v=1,w=0,a.eventsList.innerHTML="";const o=Y(),i=await F(v,C,o);Q(i.events),w=i.events.length,A=i.totalItems,M()}catch(o){T("Не вдалося завантажити список категорій подій"),console.log("error during getting events by category",o)}finally{W()}}async function Ge(){try{V(),a.showMoreBtn.disabled=!0,a.showMoreBtn.style.opacity="0",v+=1;const e=Y(),t=await F(v,C,e);if(!t.events.length){v-=1,M(),a.showMoreBtn.disabled=!0;return}Q(t.events),w+=t.events.length,A=t.totalItems,M()}catch(e){T("Не вдалося завантажити список більше подій"),console.log("error during getting more events by category",e),v-=1}finally{W(),a.showMoreBtn.style.opacity="1"}}function M(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=A?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function le(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const s=await Ie(n);qe(s);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",J),window.addEventListener("keydown",z);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ke)}catch(s){T("Не вдалося завантажити інформацію про дану подію"),console.log("error during opening event modal",s)}}function J(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),s=e.target===t;(n||s)&&ce()}function z(e){e.code==="Escape"&&ce()}function ce(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",J),window.removeEventListener("keydown",z);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function Ke(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),s=document.querySelector(".event-modal-overlay");if(n&&s){n.classList.add("is-hidden"),s.classList.remove("is-open"),s.removeEventListener("click",J),window.removeEventListener("keydown",z);const i=s.querySelector(".modal-product");i&&(i.innerHTML="")}Me(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}m.defaults.baseURL=ne;const ee="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10";async function Ue(){return(await m.get(`${h.EVENTS}?type=popular`)).data}function Ye(e){const t=document.querySelector(".popular-list"),n=e.map(({_id:s,name:o,price:i,category:r,image:d})=>`<li class="swiper-slide event-item">
        <img
          src="${d||ee}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${ee}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${s}">
          Детальніше
        </button>
      </li>`).join("");t.insertAdjacentHTML("beforeend",n)}async function Je(){try{const t=(await Ue()).events;Ye(t),document.querySelector(".popular-list").addEventListener("click",le),new N(".popular-swiper",{modules:[j,H],slidesPerView:1,slidesPerGroup:1,spaceBetween:24,watchOverflow:!0,navigation:{prevEl:".popular-button-prev",nextEl:".popular-button-next"},pagination:{el:".popular-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4,spaceBetween:32}}})}catch(e){console.log("error popular events",e)}}Je();document.addEventListener("DOMContentLoaded",We);a.categoriesListEl.addEventListener("click",Qe);a.showMoreBtn.addEventListener("click",Ge);a.eventsList.addEventListener("click",le);const te=document.querySelector(".about-us-slider");te&&new N(te,{modules:[j,H],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new we(".accordion-container",{showMultiple:!1});const ze=document.querySelector(".feedback-swiper"),Xe=document.querySelector(".js-feedback-list"),de=document.querySelector(".feedback-loader"),Ze=375,et=768,tt=1440,nt="/feedbacks",st={spaceBetween:32,breakpoints:{[Ze]:{slidesPerView:1},[et]:{slidesPerView:2},[tt]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[j,H]};new N(ze,st);it();async function ot(e=10,t=1){const s={params:{limit:e,page:t}},{data:o}=await m.get(nt,s);return o}async function it(){try{lt();const{feedbacks:e}=await ot();at(e)}catch(e){p.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}finally{ct()}}function at(e){const t=e.map(rt).join("");Xe.innerHTML=t}function rt({author:e,date:t,description:n,rate:s}){const r=s%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(s)} ${r} ">
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
    <p class="feedback-text">${n}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}function lt(){de.classList.remove("is-hidden")}function ct(){de.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
