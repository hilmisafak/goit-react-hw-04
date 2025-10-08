import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

/**
 * Görselleri Unsplash API'den çeker.
 * @param {string} query - Arama kelimesi
 * @param {number} page - Sayfa numarası
 * @returns {Promise<Object>} - API yanıt nesnesi
 */

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
