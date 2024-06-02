import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPosts } from "./js/pixabay-api";
import { postsTemplate } from "./js/render-functions";

const form = document.querySelector(".search-form");
const postsGallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

hideLoader();

function handleSubmit(event) {

    event.preventDefault();

    const query = event.target.elements.searchQuery.value.trim();

    if (!query) {
        iziToast.info({
            position: 'topRight',
            message: "Please enter a search query",
        });
        return;
    };

    postsGallery.innerHTML = "";

    showLoader();

    getPosts(query)
        .then(data => {


            const markup = postsTemplate(data.hits);

            if (!data.hits.length) {
                iziToast.error({
                    position: 'topRight',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                return;
            }

            postsGallery.insertAdjacentHTML("beforeend", markup);
            const lightbox = new SimpleLightbox(".gallery a",  {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250 

});
            lightbox.refresh();
        })
        .catch(error => {
            iziToast.warning({
                title: "Error",
                message: `Something went wrong. ${error.message}`
            })
        }) 
        .finally(() => {
            event.target.reset();
            hideLoader();
        })
};

form.addEventListener("submit", handleSubmit)

function showLoader() {
    loader.style.display = "block";
};

function hideLoader() {
    loader.style.display = "none";
}