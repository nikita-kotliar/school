import{a as k,i as E}from"./vendor-ce9f25a7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();document.addEventListener("DOMContentLoaded",function(){let e=window.location.href,t=document.getElementById("homeLink"),a=document.getElementById("favoritesLink"),n=document.getElementById("mobileHomeLink"),s=document.getElementById("mobileFavoritesLink");e.includes("index.html")?(t.classList.add("active"),a.classList.remove("active"),n.classList.add("active"),s.classList.remove("active")):e.includes("favourite.html")&&(a.classList.add("active"),t.classList.remove("active"),s.classList.add("active"),n.classList.remove("active"))});const C=document.querySelector(".open-mobile-menu-btn"),F=document.querySelector(".close-mobile-menu-btn"),d=document.querySelector(".mobile-menu-wrapper");C.addEventListener("click",function(){d.classList.add("is-open"),document.body.classList.add("not-scrollable"),setTimeout(()=>{d.classList.add("mobile-menu-wrapper-anim")},2500)});F.addEventListener("click",function(){document.body.classList.remove("not-scrollable"),d.classList.add("mobile-menu-wrapper-anim-hide"),setTimeout(function(){d.classList.remove("is-open"),d.classList.remove("mobile-menu-wrapper-anim")},1400)});d.addEventListener("animationend",e=>{e.animationName==="mobile-menu-wrapper-hide-animation"&&d.classList.remove("mobile-menu-wrapper-anim-hide")});const O="https://energyflow.b.goit.study/api";k.defaults.baseURL=O;async function Y(){return(await k.get("/quote")).data}async function X(e){return(await k.post("/subscription",{email:e})).data}async function T(e,{email:t,rate:a,comment:n}){return await k.patch(`/exercises/${e}/rating`,{rate:a,email:t,review:n})}const A=document.getElementById("form-close-btn"),u=document.querySelector(".backdrop"),M=document.querySelector("#user-email"),N=document.getElementById("user-comment"),P=document.querySelector(".form-send-btn");A.addEventListener("click",()=>{u.classList.remove("is-open")});u.addEventListener("click",e=>{e.target===u&&u.classList.remove("is-open")});const R=document.querySelector(".rating-wrapper"),w=document.querySelector(".rating-star-value"),o={rate:0,email:"",comment:""};R.addEventListener("click",e=>{const t=document.querySelectorAll(".rating-star-icons");o.rate=e.target.dataset.id;for(let a=0;a<5;a++)a<o.rate?(t[a].style.fill="#EEA10C",w.textContent=o.rate===void 0?"0.0":`${o.rate}.0`):(t[a].style.fill="rgba(27, 27, 27, 0.20)",w.textContent=o.rate===void 0?"0.0":`${o.rate}.0`)});let q=null;const H=document.querySelector(".backdrop-form");function D(e){q=e,u.classList.add("is-open")}H.addEventListener("submit",U);async function U(e){if(e.preventDefault(),o.email=M.value.trim(),o.comment=N.value.trim(),o.email!==""&&o.rate!==0){P.disabled=!1;try{const t=await T(q,o);E.success({message:"Your rating is accepted",position:"topRight",color:"green"}),u.classList.remove("is-open")}catch(t){E.error({message:`${t.message}`,position:"topRight",color:"red"}),u.classList.remove("is-open")}}}const m="favourite",J=e=>{localStorage.setItem(m,JSON.stringify(e))},S=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t.message)}},$=e=>{const t=S(m).filter(a=>a._id!==e);localStorage.removeItem(m),localStorage.setItem(m,JSON.stringify(t))},c=document.querySelector(".exr-card-backdrop");let l=!1,h=[],I=JSON.parse(localStorage.getItem("favourite"));I&&I.forEach(e=>{h[0]||(h[0]=e),h.push(e)});function b(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function z(e,t=!1,a=!1){l=t,l||h.forEach(n=>{n._id===e._id&&(l=!0)}),V(e),c.classList.add("card-is-open"),document.body.classList.add("not-scrollable"),l===!0&&(document.querySelector(".add-favourite-btn").innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`)}function V(e,t){const a=`
    <div class="exr-card-cont">
      <button name="close" id="close-card" type="button" class="close-card-button">
      <svg class="close-card-icon">
        <use href="./images/icon.svg#icon-x"></use>
      </svg>
    </button>
    <img src="${e.gifUrl}" alt="example-img" class="exr-image" />
    <div>
      <h3 class="exercise-name">${b(e.name)}</h3>
      <div class="rating-container">
        <ul class="star-rating-list">
          <li>
            <p class="rating-score">${e.rating}</p>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
          <li>
            <svg class="star-rating-icon">
              <use href="./images/icon.svg#icon-star"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="exr-information-container">
        <div class="exr-info-block">
          <p class="info-label">Target</p>
          <p class="exr-info" id="exr-target">${b(e.target)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Body Part</p>
          <p class="exr-info" id="body-part">${b(e.bodyPart)}</p>
        </div>
        <div class="exr-info-block">
          <p class="info-label">Equipment</p>
          <p class="exr-info" id="exr-equip">${b(e.equipment)}</p>
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
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>
        </button>
        <button name="rating" class="give-rating-btn">Give a rating</button>
      </div>
    </div>
    </div>`;c.innerHTML=a;const n=document.querySelectorAll(".star-rating-icon");for(let i=0;i<Math.round(e.rating);++i)n[i].style.fill="#eea10c";const s=document.querySelector(".add-favourite-btn");s.addEventListener("click",function(){l?($(e._id),s.innerHTML=`Add to favourite
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,l=!1):(h.push(e),J(h),s.innerHTML=`Remove from
          <svg class="heart-icon">
            <use href="./images/icon.svg#icon-heart"></use>
          </svg>`,l=!0),_()}),document.getElementById("close-card").addEventListener("click",()=>{c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable")}),c.addEventListener("click",i=>{i.target===c&&(c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"))}),document.querySelector(".give-rating-btn").addEventListener("click",()=>{c.classList.remove("card-is-open"),document.body.classList.remove("not-scrollable"),D(e._id)})}const v={cardSet:document.querySelector(".fav_card_list"),noCards:document.querySelector(".no_cards_wrapper")},j=e=>{const t=new Set;return e.filter(n=>t.has(n._id)?!1:(t.add(n._id),!0))},G=e=>{const a=j(e).map(({name:n,_id:s,burnedCalories:i,bodyPart:r,target:x})=>`<li data-id-card="${s}" data-component="fav_card" class="list_item">
          <div class="fav_card">
            <div class="actions_wrapper">
              <div class="workout_wrapper">
                <span class="workout">workout</span>
                <button name="trash" data-id-del-btn="${s}" data-action="delete_fav_card" class="btn">
                  <svg width="16" height="16" aria-label="trash icon">
                    <use href="./images/icon.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <button name="start" data-id-start-btn="${s}" data-action="start_exercise_btn" class="btn">
                <span class="start">start</span>
                <svg width="16" height="16" aria-label="arrow icon">
                  <use href="./images/icon.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>

            <div class="inner_wrapper">
              <div class="icon_man">
                <svg width="16" height="16">
                  <use href="./images/icon.svg#icon-man"></use>
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
                      <span class="detail_value">${i} / 3 min</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Body part: <span class="detail_value">${r}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="detail_wrapper">
                    <p class="detail_item">
                      Target: <span class="detail_value">${x}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>`);v.cardSet.innerHTML=a.join("")},K=e=>{const t=e.target.closest('[data-action="start_exercise_btn"]'),a=e.target.closest('[data-action="delete_fav_card"]'),n=e.target.closest('[data-component="fav_card"]');if(!(!e.target.tagName==="BUTTON"||!a&&!t)){if(a)if(a.dataset.idDelBtn===n.dataset.idCard){const s=a.dataset.idDelBtn;$(s),_()}else return;else if(t){const s=t.dataset.idStartBtn,r=S(m).find(x=>x._id===s);z(r,!0,!0)}}},_=()=>{document.querySelector(".favourite_exercises")!==null&&(S(m).length!==0?(v.noCards.classList.add("visually-hidden"),v.cardSet.classList.remove("visually-hidden"),G(S(m)),v.cardSet.addEventListener("click",K)):(v.noCards.classList.remove("visually-hidden"),v.cardSet.classList.add("visually-hidden")))};_();const L=document.getElementById("theme-stylesheet"),B=document.getElementById("checkbox"),Q=document.getElementById("theme-checkbox"),g=document.getElementById("checkbox_div"),p=document.getElementById("theme-checkbox_div");let f=localStorage.getItem("theme");f==="dark"?(g.classList.add("moon"),p.classList.add("moon")):(g.classList.add("sun"),p.classList.add("sun"));function y(){f==="dark"?(g.classList.remove("moon"),g.classList.add("sun"),p.classList.remove("moon"),p.classList.add("sun")):(g.classList.remove("sun"),g.classList.add("moon"),p.classList.remove("sun"),p.classList.add("moon"))}document.addEventListener("DOMContentLoaded",function(){localStorage.getItem("theme")==="dark"?t():a(),B.addEventListener("click",function(){f=localStorage.getItem("theme"),f==="light"?(t(),localStorage.setItem("theme","dark"),y()):(a(),localStorage.setItem("theme","light"),y())}),Q.addEventListener("change",function(){f=localStorage.getItem("theme"),f==="light"?(t(),localStorage.setItem("theme","dark"),y()):(a(),localStorage.setItem("theme","light"),y())});function t(){L?L.href="./css/dark-theme.css":console.error("themeStylesheet element not found"),B.checked=!0}function a(){L?L.href="./css/index.css":console.error("themeStylesheet element not found")}});export{Y as g,z as h,X as p};
//# sourceMappingURL=darkThemeBtn-33f4efdf.js.map
