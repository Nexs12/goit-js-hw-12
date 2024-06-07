import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPosts } from "./js/pixabay-api";
import { postsTemplate } from "./js/render-functions";

const form = document.querySelector(".search-form");
const postsGallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

let searchQuery = '';
let page = 1;
const perPage = 15;
const lightbox = new SimpleLightbox(".gallery a", {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250 
        });
hideLoader();

async function handleSubmit(event) {
    event.preventDefault();

    searchQuery = event.target.elements.searchQuery.value.trim();
    page = 1;

    if (!searchQuery) {
        iziToast.info({
            position: 'topRight',
            message: "Please enter a search query",
        });
        return;
    };

    postsGallery.innerHTML = "";
    hideLoadMoreBtn();
    showLoader();

    try {
        const data = await getPosts(searchQuery, page, perPage);

        if (data.hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            return;
        }

        const markup = postsTemplate(data.hits);
        postsGallery.insertAdjacentHTML("beforeend", markup);

        lightbox.refresh();

        if (page < totalPages) {
            showLoadMoreBtn();
        } else {
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        iziToast.warning({
            title: "Error",
            message: `Something went wrong. ${error.message}`
        })
    } finally {
        event.target.reset();
        hideLoader();
    }
};

async function loadMore() {
    page += 1;
    showLoader();

    try {
        const data = await getPosts(searchQuery, page, perPage);

        const markup = postsTemplate(data.hits);
        postsGallery.insertAdjacentHTML("beforeend", markup);
        lightbox.refresh();

        scrollToNewImages();

        if (page >= totalPages) {
            hideLoadMoreBtn();
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
        
    } catch (error) {
        iziToast.info({
            position: 'topRight',
            message: `We're sorry, but you've reached the end of search results. ${error.message}`
        });
        hideLoadMoreBtn();
    } finally {
        hideLoader();
        
    }
}

form.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", loadMore);

function showLoader() {
    loader.style.display = "block";
};

function hideLoader() {
    loader.style.display = "none";
}

function showLoadMoreBtn() {
    loadMoreBtn.style.display = "block";
}

function hideLoadMoreBtn() {
    loadMoreBtn.style.display = "none";
}

function scrollToNewImages() {
    const gallery = document.querySelector('.gallery');
    const galleryCard = gallery.querySelector('.gallery-link');
    if (galleryCard) {
        const cardHeight = galleryCard.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    }
}