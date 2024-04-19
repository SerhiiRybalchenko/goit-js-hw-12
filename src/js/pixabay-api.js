import axios from 'axios';

const API_KEY = '43397479-99c41be14727e3df52aa3c242';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchCards(searchQuery, page) {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    if (response.status !== 200) {
      throw new Error('Failed to fetch');
    }
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}