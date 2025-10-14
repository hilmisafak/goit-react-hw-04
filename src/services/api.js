import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "tnG6uOg2kVkHZIZgZAAKrImwx3Qs-uRBAsQLqoVQn-4";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Görseller alınırken hata oluştu:", error.message);
    throw error;
  }
};
