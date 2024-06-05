import axios from 'axios';

export async function getPosts(searchQuery, page, perPage) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = {
        key: "44102450-6df98fde061003ef9a12efa89",
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: perPage
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        throw new Error(`HTTP error! status: ${error.response.status}`);
    }
};