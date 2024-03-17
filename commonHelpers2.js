import{h as H,p as M,g as D}from"./assets/darkThemeBtn-33f4efdf.js";import{t as O,i as g}from"./assets/vendor-ce9f25a7.js";const s={filters:document.querySelector(".filters"),exercises:document.querySelector(".exercises"),navButtons:document.querySelector(".nav-buttons"),musclesBtn:document.querySelector(".muscles-btn"),exercisesTitle:document.querySelector(".exercises-title"),searchForm:document.querySelector(".search-form")};let r=0,S="Muscles",v="",c="",u="",T=null;k();s.musclesBtn.classList.add("active-btn");s.filters.addEventListener("click",U);s.exercises.addEventListener("click",f);async function k(){window.innerWidth<768?r=8:r=12,$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",dataSource:`https://energyflow.b.goit.study/api/filters?filter=${S}`,pageSize:r,pageRange:5,pageNumber:1,alias:{pageNumber:"page",pageSize:"limit"},locator:"results",totalNumberLocator:function(e){return r*e.totalPages},callback:function(e){if(e.length===0){s.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',s.navButtons.innerHTML="";return}z(e)}})})}async function U(e){if(c="",u="",s.exercises.addEventListener("click",f),s.exercisesTitle.innerHTML="Exercises",s.searchForm.style.display="none",e.target.tagName!=="BUTTON")return;s.exercises.innerHTML="";const t=document.querySelector(".active-btn");t&&(t.classList.remove("active-btn"),t.classList.add("not-active-btn")),e.target.classList.add("active-btn"),S=e.target.innerHTML,k()}async function z(e){s.exercises.innerHTML="";let t=e.map(({name:n,filter:o,imgUrl:a})=>`<li class="exercise">
        <img src="${a}" alt="${n}" loading="lazy" class="exercise-image">
        <div class="exercise-info">
            <h1 class="exercise-subtitle">${n[0].toUpperCase()+n.slice(1)}</h1>
            <p class="exercise-filter">${o}</p>
        </div>
        </li>`).join("");s.exercises.insertAdjacentHTML("beforeend",t)}async function f(e){s.searchForm.style.display="block";let t=e.target;t.tagName==="IMG"&&(t=t.nextElementSibling),(t.tagName==="LI"||t.tagName==="P"||t.tagName==="H1")&&(t=t.offsetParent),c=t.lastElementChild.innerHTML,u=t.firstElementChild.innerHTML.toLowerCase(),s.exercisesTitle.innerHTML=`Exercises / <span class="exercises-subtitle">${u[0].toUpperCase()+u.slice(1)}</span>`,s.exercises.removeEventListener("click",f),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",dataSource:`https://energyflow.b.goit.study/api/exercises?${c.toLowerCase()}=${u}`,pageSize:r,pageRange:5,pageNumber:1,alias:{pageNumber:"page",pageSize:"limit"},locator:"results",totalNumberLocator:function(n){return r*n.totalPages},callback:function(n){if(n.length===0){s.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',s.navButtons.innerHTML="";return}E(n)}})})}async function E(e){s.exercises.innerHTML="",T=e;const t=e.map(({name:n,_id:o,rating:a,burnedCalories:m,bodyPart:d,target:y,time:B})=>(a%1===0&&(a=a+".0"),`<li class="exercise-information" data-id-card="${o}">
      <div>
          <p class="tag">Workout</p>
          <span class="rating">
              ${a}
              <svg fill="#EEA10C" width="18" height="18">
                  <use href="./images/icon.svg#icon-star"></use>
              </svg>
          </span>
          <button name="start" data-action="start_exercise_btn" data-id-start-btn="${o}" class="details-link">
          Start
              <svg stroke="#1B1B1B"  width="14" height="14">
                  <use href="./images/icon.svg#icon-arrow"></use>
              </svg>
          </button>
      </div>
      <div>
        <div class="icon-man-wrap">
          <svg class="icon-man" fill="white" width="15" height="15">
          <use href="./images/icon.svg#icon-man"></use>
          </svg>
        </div>
        <h2 class="exercise-name">${n[0].toUpperCase()+n.slice(1)}</h2>
      </div>
      <ul class="exercise-details">
          <li class="exercise-detail">
              <h3 class="detail-title">Burned calories: </h3>
              <p class="detail-value">${m} / ${B} min</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Body part: </h3>
              <p class="detail-value">${d[0].toUpperCase()+d.slice(1)}</p>
          </li>
          <li class="exercise-detail">
              <h3 class="detail-title">Target: </h3>
              <p class="detail-value">${y[0].toUpperCase()+y.slice(1)}</p>
          </li>
      </ul>
  </li>`)).join("");s.exercises.insertAdjacentHTML("beforeend",t)}s.exercises.addEventListener("click",e=>{const t=e.target.closest('[data-action="start_exercise_btn"]');if(!(!e.target.tagName==="BUTTON"||!t)&&t){const n=t.dataset.idStartBtn,o=T.find(a=>a._id===n);H(o)}});s.searchForm.addEventListener("submit",async e=>{e.preventDefault(),v=e.target.searchQuery.value.trim(),e.target.reset(),c==="Body parts"&&(c=c.slice(0,-1).replace(" ","")),$(async function(){$("#pagination-container").pagination({activeClassName:"active-nav-button",ulClassName:"nav-buttons",dataSource:`https://energyflow.b.goit.study/api/exercises?${c.toLowerCase()}=${u}&keyword=${v}`,pageSize:r,pageRange:5,pageNumber:1,alias:{pageNumber:"page",pageSize:"limit"},locator:"results",totalNumberLocator:function(t){return r*t.totalPages},callback:function(t){if(t.length===0){s.exercises.innerHTML='<p class="no-results-paragraph">Unfortunately, <span class="no-results-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',s.navButtons.innerHTML="";return}E(t)}})})});const l=document.querySelector("input[name=email]"),h=document.querySelector(".footer-send-button"),N="feedback-form-state";function F(){const e={email:l.value};localStorage.setItem(N,JSON.stringify(e))}function I(){const e=localStorage.getItem(N);if(e){const t=JSON.parse(e);l.value=t.email||"",q(l.value)&&(h.disabled=!1)}}I();l.addEventListener("input",O(F,500));l.addEventListener("change",e=>{q(e.currentTarget.value)?h.disabled=!1:g.info({message:"Please enter a valid email address"})});h.addEventListener("click",async e=>{e.preventDefault();try{await M(l.value),g.success({title:"Success",message:"Welcome to energy.flow world!"}),l.value=""}catch(t){t.response.status===409?g.warning({message:"Email already exists"}):g.error({title:"Error",message:"Something went wrong! Please try again later"})}});function q(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}document.querySelector(".hero");window.addEventListener("scroll",function(){window.scrollY>40?document.body.classList.add("sticky"):document.body.classList.remove("sticky")});const w=document.querySelector(".quote-text"),x=document.querySelector(".quote-author"),C="quote-info",i=JSON.parse(localStorage.getItem(C)),p={quote:"",author:"",date:0};i&&i.date!=new Date().getDate()?(w.textContent=i.quote,x.textContent=i.author,L()):(i&&(w.textContent=i.quote,x.textContent=i.author),L());function L(){D().then(e=>P(e)).catch(e=>console.log(e))}function P(e){p.quote=e.quote,p.author=e.author,p.date=new Date().getDate(),localStorage.setItem(C,JSON.stringify(p))}const b=document.getElementById("progress-scroll");b&&b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".progress-wrap path");if(e){const t=e.getTotalLength();e.style.transition="none",e.style.strokeDasharray=`${t} ${t}`,e.style.strokeDashoffset=`${t}`,e.getBoundingClientRect(),e.style.transition="stroke-dashoffset 10ms linear";const n=()=>{const a=window.scrollY||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-window.innerHeight,d=t-a*t/m;e.style.strokeDashoffset=`${d}`};window.addEventListener("scroll",n);const o=50;window.addEventListener("scroll",()=>{if(window.scrollY>o){const a=document.querySelector(".progress-wrap");a&&a.classList.add("active-progress")}else{const a=document.querySelector(".progress-wrap");a&&a.classList.remove("active-progress")}})}});
//# sourceMappingURL=commonHelpers2.js.map