import{a as L,i as a,S as y}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function h(e,r,s){const n="https://pixabay.com/api/",t={key:"44102450-6df98fde061003ef9a12efa89",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s};try{return(await L.get(n,{params:t})).data}catch(o){throw new Error(`HTTP error! status: ${o.response.status}`)}}function S(e){return`
        <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-item-image">
            <ul class="info">
                <li class="info-title">Likes<span class="info-value">${e.likes}</span></li>
                <li class="info-title">Views<span class="info-value">${e.views}</span></li>
                <li class="info-title">Comments<span class="info-value">${e.comments}</span></li>
                <li class="info-title">Downloads<span class="info-value">${e.downloads}</span></li>
            </ul>
        </a>
    `}function p(e){return e.map(S).join("")}const v=document.querySelector(".search-form"),f=document.querySelector(".gallery"),m=document.querySelector(".loader"),d=document.querySelector(".load-more");let i="",l=1;const c=15;g();async function q(e){if(e.preventDefault(),i=e.target.elements.searchQuery.value.trim(),l=1,!i){a.info({position:"topRight",message:"Please enter a search query"});return}f.innerHTML="",b(),w();try{const r=await h(i,l,c);if(r.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=p(r.hits);f.insertAdjacentHTML("beforeend",s),new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),r.hits.length===c?P():a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(r){a.warning({title:"Error",message:`Something went wrong. ${r.message}`})}finally{e.target.reset(),g()}}async function $(){l+=1,w();try{const e=await h(i,l,c),r=p(e.hits);f.insertAdjacentHTML("beforeend",r),new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),T(),e.hits.length<c&&(b(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(e){a.warning({title:"Error",message:`Something went wrong. ${e.message}`})}finally{g()}}v.addEventListener("submit",q);d.addEventListener("click",$);function w(){m.style.display="block"}function g(){m.style.display="none"}function P(){d.style.display="block"}function b(){d.style.display="none"}function T(){const r=document.querySelector(".gallery").querySelector(".gallery-link");if(r){const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map