import{g as c}from"./assets/darkThemeBtn-e92c78b3.js";import"./assets/vendor-ce9f25a7.js";const u=document.querySelector(".quote-text"),a=document.querySelector(".quote-author"),r="quote-info",t=JSON.parse(localStorage.getItem(r)),o={quote:"",author:"",date:0};t&&t.date!=new Date().getDate()?(u.textContent=t.quote,a.textContent=t.author,n()):(t&&(u.textContent=t.quote,a.textContent=t.author),n());function n(){c().then(e=>q(e)).catch(e=>console.log(e))}function q(e){o.quote=e.quote,o.author=e.author,o.date=new Date().getDate(),localStorage.setItem(r,JSON.stringify(o))}
//# sourceMappingURL=commonHelpers.js.map
