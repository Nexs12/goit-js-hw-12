export function postTemplate(post) {
    return `
            <a class="gallery-link" href="${post.largeImageURL}">
                <img src="${post.webformatURL}" alt="${post.tags}" class="gallery-item-image">
                <ul class="info">
                    <li class="info-title">Likes<span class="info-value">${post.likes}</span></li>
                    <li class="info-title">Views<span class="info-value">${post.views}</span></li>
                    <li class="info-title">Comments<span class="info-value">${post.comments}</span></li>
                    <li class="info-title">Downloads<span class="info-value">${post.downloads}</span></li>
                </ul>
            </a>
    `
};

export function postsTemplate(arr) {
    return arr.map(postTemplate).join("");
};