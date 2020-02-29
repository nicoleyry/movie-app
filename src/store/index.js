import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    searchresults: [],
    details: []
  },
  mutations: {
    FETCH_MOVIES: (state, movies) => {
      state.movies = movies;
    },
    FETCH_RESULTS: (state, searchresults) => {
      state.searchresults = searchresults;
    },
    FETCH_DETAILS: (state, details) => {
      state.details = details;
    }
  },
  actions: {
    loadMovies: ({ commit }) => {
      axios
        .get("https://api.themoviedb.org/3/movie/top_rated?api_key=8e70e008335b9cf0fe44b80e1c509a0d")
        .then(res => {
          commit("FETCH_MOVIES", res.data.results);
        });
    },
    loadResults: ({ commit }, payload) => {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=8e70e008335b9cf0fe44b80e1c509a0d&query=" + payload)
        .then(res => {
          commit("FETCH_RESULTS", res.data.results);
        });
    },
    loadDetails: ({ commit }, payload) => {
      axios
        .get("https://api.themoviedb.org/3/movie/" + payload + "?api_key=8e70e008335b9cf0fe44b80e1c509a0d")
        .then(res => {
          commit("FETCH_DETAILS", res.data);
        });
    }
  },
  modules: {}
});
