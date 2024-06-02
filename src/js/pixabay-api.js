export function getPosts(searchQuery) {

    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: "44102450-6df98fde061003ef9a12efa89",
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url)
        .then(respond => respond.json())
        .catch(error => {
            throw new Error (`HTTP error! status: ${response.status}`)
        })
};