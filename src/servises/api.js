import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const Token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZiMzE3OTBjMTMwMDEwNDQzZjBjNjFlNjM5NGRlZCIsIm5iZiI6MTcyMjEwNDU5MC4zNDU5ODIsInN1YiI6IjY2YTUzODM0MDJkMjRjM2IzNDkxMjM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7r7nEEGIcBwzmvgMt9MGIdCZEOEmYStroCGtZNlrv0";

const options = {
  headers: {
    Authorization: Token,
  },
};

export const fetchTrendsMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};

export const searchMovieByName = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1& `,
    options
  );
  return response.data.results;
};

export const movieDetailsById = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
};

export const fetchMoviReviews = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};
