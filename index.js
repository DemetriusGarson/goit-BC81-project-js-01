import{a as g,S as ae,i as N,b as ce,N as le,P as de,A as me}from"./assets/vendor-CmT9KRLf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const C=document.getElementById("navbar-menu"),ue=document.getElementById("open-menu"),ve=document.getElementById("close-menu"),ge=C.querySelector(".nav-list"),fe=C.querySelector(".mobile-menu-btn"),z=document.querySelector(".header .consultation-btn"),w=document.getElementById("event-list");function M(){C.classList.add("is-hidden"),document.body.style.overflow=""}ue.addEventListener("click",function(){C.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ve.addEventListener("click",M);ge.addEventListener("click",M);fe.addEventListener("click",function(){M(),w&&w.scrollIntoView({behavior:"smooth"})});z&&z.addEventListener("click",function(){w&&w.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&M()});const pe="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};g.defaults.baseURL=pe;async function ye(){return(await g.get(v.CATEGORIES)).data}async function x(e=1,t="",n=v.LIMIT){return t==="all"||!t?(await g.get(`${v.EVENTS}?page=${e}&limit=${n}`)).data:(await g.get(`${v.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const r={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function he(e,t){const n=e%4,o=e-n;return n===0||t<o?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function O(){r.loader.classList.remove("is-hidden")}function T(){r.loader.classList.add("is-hidden")}let Le=!1;function be(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:o,name:s,tags:i},c)=>{const u=he(t.length,c),f=i.map(S=>`#${S} `).join("");return`<li class="event-category-item ${u}" data-category="${o}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${f}</p>
        </li>`}).join("");r.categoriesListEl.innerHTML=n,r.firstCategoryButton&&r.firstCategoryButton.classList.add("categories__btn--active")}r.caregoryListSelect.addEventListener("click",Se);function Se(e){r.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),r.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Le&&!r.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!r.categoriesListEl.SimpleBar&&new ae(r.categoriesScroll,{autoHide:!1}).recalculate()}function R(e){const n=e.filter(({image:o})=>o).map(({_id:o,name:s,price:i,category:c,image:u})=>`<li class="event-item">
        <img
          src="${u}"
          alt="${s}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${c.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${o}">
          Детальніше
        </button>
      </li>`).join("");r.eventsList.insertAdjacentHTML("beforeend",n)}const k="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",Ee="https://events-store.b.goit.study";async function ke(e){try{const{data:t}=await g.get(`${Ee}/api/events/${e}`);return t}catch(t){throw t}}function we(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:o,description:s,image:i,durationHours:c,rate:u,price:f,audience:S,category:ee,program:te,inclusions:oe}=e;let p="";const A=Math.floor(u),E=u-A,G=E>=.25&&E<.75,ne=A+(G||E>=.75?1:0);for(let l=0;l<A;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `;E>=.75?p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `:G&&(p+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${k}#icon-half-star"></use>
      </svg>
    `);for(let l=ne;l<5;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${k}#icon-star"></use>
      </svg>
    `;const se=te.map(l=>`<li>${l}</li>`).join(""),ie=oe.map(l=>`<li>${l}</li>`).join(""),re=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${o}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${ee.name}</span>
          <div class="modal-event__stars">${p}</div>
        </div>
        
        <h2 class="modal-event__title">${o}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${se}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ie}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${c} години</p>
          <p><b>Кількість учасників:</b> від ${S.min} до ${S.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${f.prefix} ${f.value} ${f.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=re}const _e="https://events-store.b.goit.study/api",y=document.querySelector(".booking-modal"),J=document.querySelector(".booking-modal-close-btn"),a=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),h=a.querySelector('[name="name"]'),L=a.querySelector('[name="phone"]'),b=a.querySelector('[name="comment"]'),B=h.closest(".booking-modal-field").querySelector(".booking-modal-error"),$=L.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=b.closest(".booking-modal-field").querySelector(".booking-modal-error");a.addEventListener("submit",qe);let j=null;function Be(e){j=e,document.body.style.overflow="hidden",y.classList.add("is-open"),document.addEventListener("keydown",Y),J.addEventListener("click",Z),y.addEventListener("click",Q),Oe()}function D(){y.classList.remove("is-open"),a.reset(),H(),j=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Y),J.removeEventListener("click",Z),y.removeEventListener("click",Q)}function Y(e){e.code==="Escape"&&D()}function Z(){D()}function Q(e){e.target===y&&D()}function $e(){const e={},t=h.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=L.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const o=b.value.trim();return o?o.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${o.length}`):e.comment="Введіть коментар",e}function Ie(e){H(),e.name&&(h.classList.add("is-error"),B.textContent=e.name,B.classList.add("is-visible")),e.phone&&(L.classList.add("is-error"),$.textContent=e.phone,$.classList.add("is-visible")),e.comment&&(b.classList.add("is-error"),I.textContent=e.comment,I.classList.add("is-visible"))}function H(){h.classList.remove("is-error"),L.classList.remove("is-error"),b.classList.remove("is-error"),B.textContent="",$.textContent="",I.textContent="",B.classList.remove("is-visible"),$.classList.remove("is-visible"),I.classList.remove("is-visible")}async function qe(e){e.preventDefault();const t=$e();if(t.name||t.phone||t.comment){Ie(t);return}H();const n={name:h.value.trim(),phone:L.value.trim().replace(/\D/g,""),eventId:j,comment:b.value.trim()};try{Me(),O(),_.disabled=!0;const{data:o}=await g.post(`${_e}/orders`,n),{eventName:s,orderNum:i}=o;N.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),D(),De()}catch(o){o.status===400&&(N.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(o)),o.status===404&&(N.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(o))}finally{Ce(),T(),_.disabled=!1}}function Ce(){_.classList.remove("is-hidden")}function Me(){_.classList.add("is-hidden")}const V="dataBooking",d={name:"",phone:"",comment:""};function Oe(){Te(),a.addEventListener("input",Pe)}function Te(){const e=JSON.parse(localStorage.getItem(V));console.log(e),e&&(a.elements.name.value=e.name,a.elements.phone.value=e.phone,a.elements.comment.value=e.comment)}function De(){localStorage.removeItem(V),a.name="",a.phone="",a.comment=""}function Pe(e){console.log(e.target),e.target===a.elements.name&&(d.name=e.target.value,console.log(d.name)),e.target===a.elements.phone&&(d.phone=e.target.value,console.log(d.phone)),e.target===a.elements.comment&&(d.comment=e.target.value,console.log(d.comment)),localStorage.setItem(V,JSON.stringify(d))}let m=1,q="all";function P(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function Ae(){try{O();const e=P(),[t,{events:n,totalItems:o}]=await Promise.all([ye(),x(m,q,e)]);be(t),R(n),U(o)}catch(e){console.log("error events list",e)}finally{T()}}async function Ne(e){const t=e.target.closest(".event-category-item");if(t)try{q=t.dataset.category,m=1,r.eventsList.innerHTML="",O();const o=P(),{events:s,totalItems:i}=await x(m,q,o);R(s),U(i)}catch(n){console.log("error during getting events by category",n)}finally{T()}}async function xe(e){m+=1;try{O();const t=P(),{events:n,totalItems:o}=await x(m,q,t);R(n),U(o)}catch(t){console.log("error during getting more events by category",t),m-=1}finally{T()}}function U(e){const t=P();r.showMoreBtn.disabled=m*t>=e}async function Re(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const o=await ke(n);we(o);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",W),window.addEventListener("keydown",F);const c=i.querySelector(".modal-event__order-btn");c&&c.addEventListener("click",je)}catch{typeof iziToast<"u"&&iziToast.error({title:"Error",message:"Не вдалося завантажити деталі події.",position:"topRight"})}}function W(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),o=e.target===t;(n||o)&&X()}function F(e){e.code==="Escape"&&X()}function X(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",W),window.removeEventListener("keydown",F);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function je(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),o=document.querySelector(".event-modal-overlay");if(n&&o){n.classList.add("is-hidden"),o.classList.remove("is-open"),o.removeEventListener("click",W),window.removeEventListener("keydown",F);const i=o.querySelector(".modal-product");i&&(i.innerHTML="")}Be(t);const s=document.querySelector(".section.booking-modal");s&&(s.classList.remove("is-hidden"),s.classList.add("is-open"),document.body.classList.add("no-scroll"))}document.addEventListener("DOMContentLoaded",Ae);r.categoriesListEl.addEventListener("click",Ne);r.showMoreBtn.addEventListener("click",xe);r.eventsList.addEventListener("click",Re);const K=document.querySelector(".about-us-slider");K&&new ce(K,{modules:[le,de],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new me(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
