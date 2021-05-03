import axios from 'axios';

const API = '4b778d4c29fb731b86ff7a9149d1de58';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API}`,
  );
  return response.data.results;
};

const fetchById = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API}`);
  return response.data;
};

const fetchCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API}`,
  );
  return response.data.cast;
};

const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API}`,
  );
  return response.data.results;
};

export default { fetchMovies, fetchById, fetchCast, fetchReviews };
