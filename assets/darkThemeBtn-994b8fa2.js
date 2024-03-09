import{a as y,i as L}from"./vendor-ce9f25a7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",function(){let e=window.location.href,t=document.getElementById("homeLink"),a=document.getElementById("favoritesLink"),n=document.getElementById("mobileHomeLink"),s=document.getElementById("mobileFavoritesLink");e.includes("index.html")?(t.classList.add("active"),a.classList.remove("active"),n.classList.add("active"),s.classList.remove("active")):e.includes("favourite.html")&&(a.classList.add("active"),t.classList.remove("active"),s.classList.add("active"),n.classList.remove("active"))});const B=document.querySelector(".open-mobile-menu-btn"),q=document.querySelector(".close-mobile-menu-btn"),d=document.querySelector(".mobile-menu-wrapper");B.addEventListener("click",function(){d.classList.add("is-open"),document.body.classList.add("not-scrollable"),setTimeout(()=>{d.classList.add("mobile-menu-wrapper-anim")},2500)});q.addEventListener("click",function(){document.body.classList.remove("not-scrollable"),d.classList.add("mobile-menu-wrapper-anim-hide"),setTimeout(function(){d.classList.remove("is-open"),d.classList.remove("mobile-menu-wrapper-anim")},1400)});d.addEventListener("animationend",e=>{e.animationName==="mobile-menu-wrapper-hide-animation"&&d.classList.remove("mobile-menu-wrapper-anim-hide")});const I="https://energyflow.b.goit.study/api";y.defaults.baseURL=I;async function V(){return(await y.get("/quote")).data}async function W(e){return(await y.post("/subscription",{email:e})).data}async function $(e,{email:t,rate:a,comment:n}){return await y.patch(`/exercises/${e}/rating`,{rate:a,email:t,review:n})}const F=document.getElementById("form-close-btn"),u=document.querySelector(".backdrop"),C=document.querySelector("#user-email"),O=document.getElementById("user-comment"),T=document.querySelector(".form-send-btn");F.addEventListener("click",()=>{u.classList.remove("is-open")});u.addEventListener("click",e=>{e.target===u&&u.classList.remove("is-open")});const A=document.querySelector(".rating-wrapper"),w=document.querySelector(".rating-star-value"),i={rate:0,email:"",comment:""};A.addEventListener("click",e=>{const t=document.querySelectorAll(".rating-star-icons");i.rate=e.target.dataset.id;for(let a=0;a<5;a++)a<i.rate?(t[a].style.fill="#EEA10C",w.textContent=i.rate===void 0?"0.0":`${i.rate}.0`):(t[a].style.fill="rgba(27, 27, 27, 0.20)",w.textContent=i.rate===void 0?"0.0":`${i.rate}.0`)});let x=null;const j=document.querySelector(".backdrop-form");function M(e){x=e,u.classList.add("is-open")}j.addEventListener("submit",N);async function N(e){if(e.preventDefault(),i.email=C.value.trim(),i.comment=O.value.trim(),i.email!==""&&i.rate!==0){T.disabled=!1;try{const t=await $(x,i);L.success({message:"Your rating is accepted",position:"topRight",color:"green"}),u.classList.remove("is-open")}catch(t){L.error({message:`${t.message}`,position:"topRight",color:"red"}),u.classList.remove("is-open")}}}const m="favourite",P=e=>{localStorage.setItem(m,JSON.stringify(e))},h=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},E=e=>{const t=h(m).filter(a=>a._id!==e);localStorage.removeItem(m),localStorage.setItem(m,JSON.stringify(t))},c=document.querySelector(".exr-card-backdrop");let l=!1,p=[],S=JSON.parse(localStorage.getItem("favourite"));S&&S.forEach(e=>{p[0]||(p[0]=e),p.push(e)});function v(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function R(e,t=!1,a=!1){l=t,l||p.forEach(n=>{n._id===e._id&&(l=!0)}),H(e),c.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),l===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`)}function H(e,t){const a=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${v(e.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${e.rating}</p>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${v(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${v(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${v(e.equipment)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Popular</p>
          <p class="exr-info" id="exr-popularity">${e.popularity}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Burned Calories</p>
          <p class="exr-info" id="burned-cal">${e.burnedCalories}/${e.time} min</p>
        </div>
      </div>
      <p class="exr-description">${e.description}</p>
      <div class="buttons-cont">
        <button name="add-favorurite" class="add-favourite-btn">
          Add to favourites
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>
        </button>
        <button name="rating" class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;c.innerHTML=a;const n=document.querySelectorAll(".star-rating-icon");for(let r=0;r<Math.round(e.rating);++r)n[r].style.fill="#eea10c";const s=document.querySelector(".add-favourite-btn");s.addEventListener("click",function(){l?(E(e._id),s.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,l=!1):(p.push(e),P(p),s.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-heart"></use>
          </svg>`,l=!0),_()}),document.getElementById("close-card").addEventListener("click",()=>{c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),c.addEventListener("click",r=>{r.target===c&&(c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"))}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),M(e._id)})}const f={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},D=e=>{const t=new Set;return e.filter(n=>t.has(n._id)?!1:(t.add(n._id),!0))},U=e=>{const a=D(e).map(({name:n,_id:s,burnedCalories:r,bodyPart:o,target:b})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button name="trash" data-id-del-btn="${s}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button name="start" data-id-start-btn="${s}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="/energy_flow_project_06/assets/icon-c8fc18a4.svg#icon-man"></use>
                </svg>
              </div>
              <p class="exercise_name">${n}</p>
            </div>

            <div class="details_wrapper">
              <ul class="details_list">
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Burned calories:
                      <span class="detail_value">${r} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${o}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${b}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);f.cardSet.innerHTML=a.join("")},J=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),a=e.target.closest('[data-action="delete_fav_card"]'),n=e.target.closest('[data-component="fav_card"]');if(!(!e.target.tagName==="BUTTON"||!a&&!t)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const s=a.dataset.idDelBtn;E(s),_()}else return;else if(t){const s=t.dataset.idStartBtn,o=h(m).find(b=>b._id===s);R(o,!0,!0)}}},_=()=>{document.querySelector(".favourite_exercises")!==null&&(h(m).length!==0?(f.noCards.classList.add("visually-hidden"),f.cardSet.classList.remove("visually-hidden"),U(h(m)),f.cardSet.addEventListener("click",J)):(f.noCards.classList.remove("visually-hidden"),f.cardSet.classList.add("visually-hidden")))};_();let g=null;const k=document.getElementById("theme-stylesheet");document.addEventListener("DOMContentLoaded",function(){g=window.innerWidth>1440?document.getElementById("checkbox"):document.getElementById("theme-checkbox"),localStorage.getItem("theme")==="dark"?t():a(),g.addEventListener("change",function(){g.checked?(t(),localStorage.setItem("theme","dark")):(a(),localStorage.setItem("theme","light"))});function t(){k.href="./css/dark-theme.css",g.checked=!0}function a(){k.href="./css/index.css"}});export{V as g,R as h,W as p};
//# sourceMappingURL=darkThemeBtn-994b8fa2.js.map
