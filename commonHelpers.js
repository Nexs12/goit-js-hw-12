import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44102450-6df98fde061003ef9a12efa89",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${s}?${o}`;return fetch(n).then(e=>e.json()).catch(e=>{throw new Error(`HTTP error! status: ${response.status}`)})}function p(t){return`
            <a class="gallery-link" href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-item-image">
                <ul class="info">
                    <li class="info-title">Likes<span class="info-value">${t.likes}</span></li>
                    <li class="info-title">Views<span class="info-value">${t.views}</span></li>
                    <li class="info-title">Comments<span class="info-value">${t.comments}</span></li>
                    <li class="info-title">Downloads<span class="info-value">${t.downloads}</span></li>
                </ul>
            </a>
    `}function d(t){return t.map(p).join("")}const h=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");u();function g(t){t.preventDefault();const s=t.target.elements.searchQuery.value.trim();if(!s){i.info({position:"topRight",message:"Please enter a search query"});return}l.innerHTML="",y(),m(s).then(o=>{const n=d(o.hits);if(!o.hits.length){i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}l.insertAdjacentHTML("beforeend",n),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{i.warning({title:"Error",message:`Something went wrong. ${o.message}`})}).finally(()=>{t.target.reset(),u()})}h.addEventListener("submit",g);function y(){c.style.display="block"}function u(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map