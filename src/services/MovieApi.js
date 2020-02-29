import axios from "axios";

export default {
  fetchMovies() {
    return axios
      .get("https://api.themoviedb.org/3/movie/top_rated?api_key=8e70e008335b9cf0fe44b80e1c509a0d")
      .then(response => {
        return response.data.results;
      });
  },
  fetchMovieDetails(id) {
    return axios
      .get("https://api.themoviedb.org/3/movie/" + id + "?api_key=8e70e008335b9cf0fe44b80e1c509a0d")
      .then(response => {
        return response.data;
      });
  },
  SearchMovies(value) {
    return axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&query=" + value)
      .then(response => {
        return response.data.results;
      });
  }
};
